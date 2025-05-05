import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert,
  Animated,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { useProfile } from "../../context/ProfileContext";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const navigation = useNavigation<NavigationProps>();
  const { profileData } = useProfile();
  const { logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showModal = () => {
    setShowLogoutModal(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShowLogoutModal(false);
    });
  };

  const handleMenuPress = (menuItem: string) => {
    switch (menuItem) {
      case "Profile":
        navigation.navigate("ProfileEdit");
        break;
      case "Favourite":
        navigation.navigate("MainApp", { screen: "Favourite" });
        break;
      case "Settings":
        navigation.navigate("Settings");
        break;
      case "Logout":
        showModal();
        break;
      // Xử lý các menu item khác
      default:
        break;
    }
  };

  const handleLogout = () => {
    hideModal();
    // Đợi animation kết thúc rồi mới logout và navigate
    setTimeout(() => {
      logout();
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }, 200);
  };

  // Format birthday for display
  const formatBirthday = (dateString: string) => {
    const [day, month] = dateString.split("/");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[parseInt(month) - 1]} ${day}${
      day === "1" ? "st" : day === "2" ? "nd" : day === "3" ? "rd" : "th"
    }`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={[styles.header, { backgroundColor: "#B3A0FF" }]}>
          <Header title="My Profile" style={{ bottom: 25 }} />
        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarWrapper}>
            <MaterialIcons name="person" size={60} color="#B3A0FF" />
          </View>
          {/* User Info */}
          <Text style={styles.name}>{profileData.fullName}</Text>
          <Text style={styles.email}>{profileData.email}</Text>
          <Text style={styles.birthday}>
            Birthday: {formatBirthday(profileData.dateOfBirth)}
          </Text>
        </View>

        {/* Summary Info */}
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoNumber}>{profileData.weight} Kg</Text>
            <Text style={styles.infoLabel}>Weight</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoBox}>
            <Text style={styles.infoNumber}>28</Text>
            <Text style={styles.infoLabel}>Years Old</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoBox}>
            <Text style={styles.infoNumber}>{profileData.height} CM</Text>
            <Text style={styles.infoLabel}>Height</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item.label)}
            >
              <View style={styles.menuLeft}>
                <Image source={item.icon} style={styles.menuIcon} />
                <Text style={styles.menuText}>{item.label}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#E2F163" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Logout Modal */}
      <Modal
        visible={showLogoutModal}
        transparent={true}
        animationType="none"
        onRequestClose={hideModal}
      >
        <Animated.View
          style={[
            styles.modalOverlay,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.modalContent,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    scale: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.modalTitle}>Đăng xuất</Text>
            <Text style={styles.modalText}>
              Bạn có chắc chắn muốn đăng xuất?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={hideModal}
              >
                <Text style={styles.cancelButtonText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.logoutButton]}
                onPress={handleLogout}
              >
                <Text style={styles.logoutButtonText}>Đăng xuất</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Animated.View>
      </Modal>
    </SafeAreaView>
  );
};

const menuItems = [
  {
    label: "Profile",
    icon: require("../../assets/icons/Profile/icon_profile.png"),
  },
  {
    label: "Favourite",
    icon: require("../../assets/icons/Profile/icon_star.png"),
  },
  {
    label: "Privacy Policy",
    icon: require("../../assets/icons/Profile/icon_privacy.png"),
  },
  {
    label: "Settings",
    icon: require("../../assets/icons/Profile/icon_setting.png"),
  },
  {
    label: "Help",
    icon: require("../../assets/icons/Profile/icon_help.png"),
  },
  {
    label: "Logout",
    icon: require("../../assets/icons/Profile/icon_logout.png"),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 90, // Thêm padding để tránh bị che bởi bottom tab
  },
  header: {
    backgroundColor: "#B3A0FF",
    paddingBottom: 15,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#B3A0FF",
    paddingVertical: 20,
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  email: {
    color: "#ffff",
    fontSize: 16,
    textAlign: "center",
  },
  birthday: {
    color: "#ffff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#7C57FF",
    marginHorizontal: 20,
    borderRadius: 12,
    paddingVertical: 15,
    marginBottom: 25,
    bottom: 30,
  },
  infoBox: {
    alignItems: "center",
    flex: 1,
  },
  divider: {
    width: 1,
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  infoNumber: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoLabel: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingHorizontal: 20,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 33,
    height: 33,
    marginRight: 20,
    // tintColor: "#B3A0FF",
  },
  menuText: {
    color: "#fff",
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#2C2C2E",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    padding: 12,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#3A3A3C",
  },
  logoutButton: {
    backgroundColor: "#FF453A",
  },
  cancelButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
