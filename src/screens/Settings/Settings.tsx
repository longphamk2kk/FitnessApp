import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Modal,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import Header from "../../components/Header";

interface SettingItemProps {
  icon: any;
  title: string;
  onPress: () => void;
}

const SettingItem = ({ icon, title, onPress }: SettingItemProps) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <View style={styles.settingContent}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.settingTitle}>{title}</Text>
    </View>
    <Image
      source={require("../../assets/icons/icon_back.png")}
      style={styles.arrowIcon}
    />
  </TouchableOpacity>
);

const DeleteSuccessModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const scaleAnim = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[
            styles.successModalContent,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <View style={styles.successIconContainer}>
            <Image
              source={require("../../assets/icons/CheckProgress/icon_check.png")}
              style={styles.successIcon}
            />
          </View>
          <Text style={styles.successTitle}>Account Deleted</Text>
          <Text style={styles.successText}>
            Your account has been successfully deleted
          </Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

const Settings = () => {
  const navigation = useNavigation<NavigationProps>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDeleteAccount = () => {
    setShowDeleteModal(false);
    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
      navigation.reset({
        index: 0,
        routes: [{ name: "Onboarding1" }],
      });
    }, 3000);
  };

  const settingOptions = [
    {
      id: "1",
      icon: require("../../assets/icons/Profile/icon_bell.png"),
      title: "Notification Setting",
      onPress: () => navigation.navigate("NotificationSetting"),
    },
    {
      id: "2",
      icon: require("../../assets/icons/Profile/icon_key.png"),
      title: "Password Setting",
      onPress: () => navigation.navigate("PasswordSetting"),
    },
    {
      id: "3",
      icon: require("../../assets/icons/Profile/icon_profile.png"),
      title: "Delete Account",
      onPress: () => setShowDeleteModal(true),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Settings" style={styles.header} />

      <View style={styles.content}>
        {settingOptions.map((option) => (
          <SettingItem
            key={option.id}
            icon={option.icon}
            title={option.title}
            onPress={option.onPress}
          />
        ))}
      </View>

      <Modal
        visible={showDeleteModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Delete Account</Text>
            <Text style={styles.modalText}>
              Are you sure you want to delete your account? This action cannot
              be undone.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowDeleteModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.deleteButton]}
                onPress={handleDeleteAccount}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <DeleteSuccessModal
        visible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    bottom: 10,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
  settingContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#8E8EF3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
  },
  settingTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },
  header: {
    bottom: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#2C2C2E",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 22,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#E2F163",
  },
  deleteButton: {
    backgroundColor: "#8E8EF3",
  },
  cancelButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
  },
  deleteButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  successModalContent: {
    backgroundColor: "#2C2C2E",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
  },
  successIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#8E8EF3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  successIcon: {
    width: 40,
    height: 40,
    tintColor: "#FFFFFF",
  },
  successTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  successText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 22,
  },
});

export default Settings;
