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
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import * as LocalAuthentication from "expo-local-authentication";
import { styles } from "./Style";
import Header from "../../components/Header";
import { authService } from "../../utils/auth.service";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const navigation = useNavigation<NavigationProps>();
  const { login: setAuthUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignup = () => {
    navigation.navigate("SignUp");
  };

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Please enter both username and password");
      return;
    }

    setLoading(true);
    try {
      const response = await authService.login({ username, password });

      if (response.success && response.user) {
        // Store user in context
        setAuthUser(response.user);
        console.log("Login successful:", response.user);
        navigation.navigate("Home");
      } else {
        Alert.alert("Login Failed", response.message || "Invalid credentials");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      // Handle network errors or other unexpected errors
      Alert.alert(
        "Login Failed",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
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
        // Check if user was previously logged in
        const isAuth = await authService.isAuthenticated();
        if (isAuth) {
          navigation.navigate("Home");
        } else {
          Alert.alert("Error", "Please log in with username and password first");
        }
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
            Please enter your credentials to access your fitness journey.
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              editable={!loading}
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="************"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              editable={!loading}
            />

            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
              disabled={loading}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={[styles.loginButton, loading && { opacity: 0.7 }]} 
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.loginButtonText}>Log In</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.orText}>or sign up with</Text>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton} disabled={loading}>
              <Image
                source={require("../../assets/icons/Login/icon_google.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} disabled={loading}>
              <Image
                source={require("../../assets/icons/Login/icon_facebook.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialButton} 
              onPress={handleBiometricAuth}
              disabled={loading}
            >
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
              <TouchableOpacity onPress={handleSignup} disabled={loading}>
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
