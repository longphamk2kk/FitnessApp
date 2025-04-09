import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.name}>Madison Smith</Text>
        <Text style={styles.email}>madisons@example.com</Text>
        <Text style={styles.birthday}>Birthday: April 1st</Text>
      </View>

      {/* Summary Info */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>75 Kg</Text>
          <Text style={styles.infoLabel}>Weight</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>28</Text>
          <Text style={styles.infoLabel}>Years Old</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>1.65 CM</Text>
          <Text style={styles.infoLabel}>Height</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <Image source={item.icon} style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.label}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#E2F163" />
          </TouchableOpacity>
        ))}
      </View>
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
  header: {
    backgroundColor: "#B3A0FF",
    paddingBottom: 15,
    // bottom: 15,
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
});

export default Profile;
