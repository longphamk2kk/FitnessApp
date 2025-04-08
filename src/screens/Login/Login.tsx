import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import * as LocalAuthentication from "expo-local-authentication";
import { styles } from "./Style";
import Header from "../../components/Header";

const Login = () => {
  const navigation = useNavigation<NavigationProps>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignup = () => {
    // Navigate to Signup screen
    navigation.navigate("SignUp");
  };

  const handleLogin = () => {
    // Giả sử đây là logic kiểm tra người dùng
    const isNewUser = true; // Thay đổi giá trị này dựa trên logic thực tế của bạn

    if (isNewUser) {
      navigation.navigate("SetUp");
    } else {
      navigation.navigate("Home");
    }
  };

  const handleBiometricAuth = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        Alert.alert(
          "Error",
          "Your device is not compatible with biometric authentication"
        );
        return;
      }

      const enrolled = await LocalAuthentication.isEnrolledAsync();
      if (!enrolled) {
        Alert.alert(
          "Error",
          "No Face ID enrolled. Please set up Face ID on your device first."
        );
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate with Face ID",
        disableDeviceFallback: true,
      });

      if (result.success) {
        // TODO: Implement biometric login logic
        navigation.navigate("Home");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during authentication");
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPass");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Log In" onBack={() => navigation.goBack()} />

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.welcomeDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Username or email</Text>
            <TextInput
              style={styles.input}
              placeholder="example@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="************"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
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

          <View style={styles.bottomContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
