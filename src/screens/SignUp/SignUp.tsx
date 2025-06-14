import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { styles } from "./Style";
import { useRegistration } from "../../contexts/RegistrationContext";

export default function SignUp() {
  const navigation = useNavigation<NavigationProps>();
  const { registrationData, updateRegistrationData } = useRegistration();
  const [username, setUsername] = useState(registrationData.username || "");
  const [fullName, setFullName] = useState(registrationData.full_name || "");
  const [email, setEmail] = useState(registrationData.email || "");
  const [phone, setPhone] = useState(registrationData.phone || "");
  const [password, setPassword] = useState(registrationData.password || "");
  const [confirmPassword, setConfirmPassword] = useState(registrationData.confirmPassword || "");
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleSignUp = async () => {
    // Basic validation
    if (!username.trim() || !fullName.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    if (username.length < 6) {
      Alert.alert("Error", "Username must be at least 6 characters long");
      return;
    }

    // Validate email if provided
    if (email.trim() && !validateEmail(email.trim())) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    // Validate phone if provided
    if (phone.trim() && !validatePhone(phone.trim())) {
      Alert.alert("Error", "Please enter a valid phone number");
      return;
    }

    // Save basic registration data to context
    updateRegistrationData({
      username: username.trim(),
      password,
      confirmPassword,
      full_name: fullName.trim(),
      email: email.trim() || undefined,
      phone: phone.trim() || undefined,
    });

    // Navigate to setup flow
    Alert.alert(
      "Great!",
      "Now let's set up your fitness profile to personalize your experience.",
      [
        {
          text: "Continue",
          onPress: () => navigation.navigate("SetUp" as any)
        }
      ]
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Image
              source={require("../../assets/icons/icon_back.png")}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Account</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Let's Start!</Text>
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username (min 6 characters)"
              placeholderTextColor="#666"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              editable={!loading}
            />

            <Text style={styles.inputLabel}>Full name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#666"
              value={fullName}
              onChangeText={setFullName}
              editable={!loading}
            />

            <Text style={styles.inputLabel}>Email (optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="#666"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              editable={!loading}
            />

            <Text style={styles.inputLabel}>Phone (optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#666"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              editable={!loading}
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password (min 6 characters)"
              placeholderTextColor="#666"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              editable={!loading}
            />

            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#666"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              editable={!loading}
            />
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.authSection}>
              <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                  By continuing, you agree to{" "}
                  <Text style={styles.termsLink}>Terms of Use</Text> and{" "}
                  <Text style={styles.termsLink}>Privacy Policy</Text>.
                </Text>
              </View>

              <TouchableOpacity
                style={[styles.signUpButton, loading && { opacity: 0.7 }]}
                onPress={handleSignUp}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Text style={styles.signUpButtonText}>Sign Up</Text>
                )}
              </TouchableOpacity>

              <Text style={styles.orText}>or sign up with</Text>

              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image
                    source={require("../../assets/icons/Login/icon_google.png")}
                    style={styles.socialIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image
                    source={require("../../assets/icons/Login/icon_facebook.png")}
                    style={styles.socialIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image
                    source={require("../../assets/icons/Login/icon_faceid.png")}
                    style={[styles.socialIcon, { tintColor: "#7C57FF" }]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.loginContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={handleLogin}>
                  <Text style={styles.loginLink}>Log in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
