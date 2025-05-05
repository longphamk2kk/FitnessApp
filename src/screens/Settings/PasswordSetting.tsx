import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import PasswordInput from "../../components/PasswordInput";

type PasswordSettingNavigationProp = StackNavigationProp<RootStackParamList>;

const PasswordSetting = () => {
  const navigation = useNavigation<PasswordSettingNavigationProp>();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = useCallback(
    (field: keyof typeof formData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));

      // Clear error when typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    },
    [errors]
  );

  const handleChangePassword = useCallback(() => {
    const newErrors = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    // Validation
    if (!formData.currentPassword) {
      newErrors.currentPassword = "Please enter your current password";
    }
    if (!formData.newPassword) {
      newErrors.newPassword = "Please enter your new password";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    const hasNoErrors = !Object.values(newErrors).some((error) => error !== "");
    if (hasNoErrors) {
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigation.goBack();
      }, 2000);
    }
  }, [formData, navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header title="Password Settings" style={styles.header} />
        <View style={styles.content}>
          <View style={styles.inputsContainer}>
            <PasswordInput
              value={formData.currentPassword}
              onChangeText={(text) =>
                handleInputChange("currentPassword", text)
              }
              label="Current Password"
              showPassword={showCurrentPassword}
              toggleShowPassword={() =>
                setShowCurrentPassword(!showCurrentPassword)
              }
              error={errors.currentPassword}
            />

            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={() => navigation.navigate("ForgotPass")}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <PasswordInput
              value={formData.newPassword}
              onChangeText={(text) => handleInputChange("newPassword", text)}
              label="New Password"
              showPassword={showNewPassword}
              toggleShowPassword={() => setShowNewPassword(!showNewPassword)}
              error={errors.newPassword}
            />

            <PasswordInput
              value={formData.confirmPassword}
              onChangeText={(text) =>
                handleInputChange("confirmPassword", text)
              }
              label="Confirm New Password"
              showPassword={showConfirmPassword}
              toggleShowPassword={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              error={errors.confirmPassword}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.changePasswordButton,
              (!formData.currentPassword ||
                !formData.newPassword ||
                !formData.confirmPassword) &&
                styles.changePasswordButtonDisabled,
            ]}
            onPress={handleChangePassword}
            disabled={
              !formData.currentPassword ||
              !formData.newPassword ||
              !formData.confirmPassword
            }
          >
            <Text style={styles.changePasswordText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showSuccessModal}
          onRequestClose={() => setShowSuccessModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Ionicons name="checkmark-circle" size={50} color="#E2F163" />
              <Text style={styles.modalText}>
                Password Changed Successfully!
              </Text>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  header: {
    marginBottom: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingBottom: 100,
  },
  inputsContainer: {
    flex: 1,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: -20,
    marginBottom: 32,
  },
  forgotPasswordText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  changePasswordButton: {
    backgroundColor: "#E2F163",
    borderRadius: 30,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  changePasswordButtonDisabled: {
    backgroundColor: "#E2F16380",
  },
  changePasswordText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#2C2C2E",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    minWidth: 300,
  },
  modalText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
  },
});

export default PasswordSetting;
