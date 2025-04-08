import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import Header from "../../components/Header";

const ResetPass = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleResetPassword = () => {
    navigation.navigate("ResetSuccess");
  };

  return (
    <View style={styles.container}>
      <Header title="Set Password" onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#666"
            secureTextEntry
          />

          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#666"
            secureTextEntry
          />
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleResetPassword}
          >
            <Text style={styles.resetButtonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResetPass;
