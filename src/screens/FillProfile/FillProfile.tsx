import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  ActionSheetIOS,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { useRegistration } from "../../contexts/RegistrationContext";
import { useAuth } from "../../contexts/AuthContext";
import { authService } from "../../utils/auth.service";

const FillProfile = () => {
  const navigation = useNavigation<NavigationProps>();
  const { registrationData, resetRegistrationData } = useRegistration();
  const { login: setAuthUser } = useAuth();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [fullName, setFullName] = useState(registrationData.full_name || "");
  const [nickname, setNickname] = useState(registrationData.nickname || "");
  const [email, setEmail] = useState(registrationData.email || "");
  const [phone, setPhone] = useState(registrationData.phone || "");
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = async () => {
    if (!fullName.trim()) {
      Alert.alert("Error", "Please enter your full name");
      return;
    }

    setLoading(true);
    try {
      // Complete registration with all collected data
      const completeRegistrationData = {
        ...registrationData,
        full_name: fullName.trim(),
        nickname: nickname.trim() || undefined,
        email: email.trim() || registrationData.email,
        phone: phone.trim() || registrationData.phone,
      };

      console.log('🔄 Completing registration with setup data');
      console.log('📋 Complete registration data:', {
        username: completeRegistrationData.username,
        full_name: completeRegistrationData.full_name,
        email: completeRegistrationData.email,
        phone: completeRegistrationData.phone,
        gender: completeRegistrationData.gender,
        age: completeRegistrationData.age,
        weight: completeRegistrationData.weight,
        height: completeRegistrationData.height,
        goal: completeRegistrationData.goal,
        level: completeRegistrationData.level,
        hasPassword: !!completeRegistrationData.password
      });

      const response = await authService.registerWithSetup(completeRegistrationData);

      if (response.success && response.user) {
        // Store user in auth context
        setAuthUser(response.user);

        // Clear registration data
        resetRegistrationData();

        console.log('✅ Registration completed successfully');

        Alert.alert(
          "Welcome to FitBody!",
          "Your account has been created and your profile is complete. Let's start your fitness journey!",
          [
            {
              text: "Get Started",
              onPress: () => navigation.navigate("MainApp" as any)
            }
          ]
        );
      } else {
        Alert.alert("Registration Failed", response.message || "Failed to complete registration");
      }
    } catch (error: any) {
      console.error("Registration completion error:", error);
      Alert.alert(
        "Registration Failed",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChoosePhoto = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancel", "Take Photo", "Choose from Library"],
          cancelButtonIndex: 0,
        },
        async (buttonIndex) => {
          if (buttonIndex === 1) {
            await takePhoto();
          } else if (buttonIndex === 2) {
            await pickImage();
          }
        }
      );
    } else {
      Alert.alert("Choose Photo", "Select an option", [
        { text: "Cancel", style: "cancel" },
        { text: "Take Photo", onPress: takePhoto },
        { text: "Choose from Library", onPress: pickImage },
      ]);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission needed",
        "Please allow camera access to take photos"
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission needed", "Please allow access to photo library");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <View style={styles.backContent}>
                  <Image
                    source={require("../../assets/icons/icon_back.png")}
                    style={styles.backIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.backText}>Back</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>Fill Your Profile</Text>

              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>

              <View style={styles.avatarContainer}>
                <View style={styles.avatarWrapper}>
                  {avatar ? (
                    <Image
                      source={{ uri: avatar }}
                      style={styles.avatar}
                      resizeMode="cover"
                    />
                  ) : (
                    <MaterialIcons name="person" size={60} color="#B3A0FF" />
                  )}
                  <TouchableOpacity
                    style={styles.editAvatarButton}
                    onPress={handleChoosePhoto}
                  >
                    <MaterialIcons
                      name="camera-alt"
                      size={16}
                      color="#1C1C1E"
                      style={{ transform: [{ rotate: "0deg" }] }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Full name</Text>
                  <TextInput
                    style={styles.input}
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Enter your full name"
                    placeholderTextColor="#666"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Nickname</Text>
                  <TextInput
                    style={styles.input}
                    value={nickname}
                    onChangeText={setNickname}
                    placeholder="Enter your nickname"
                    placeholderTextColor="#666"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Mobile Number</Text>
                  <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Enter your mobile number"
                    placeholderTextColor="#666"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              <TouchableOpacity
                style={[
                  styles.startButton,
                  (!fullName.trim() || loading) && styles.startButtonDisabled,
                ]}
                onPress={handleContinue}
                disabled={!fullName.trim() || loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Text style={styles.startButtonText}>Complete Registration</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FillProfile;
