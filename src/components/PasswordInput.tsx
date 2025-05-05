import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  showPassword: boolean;
  toggleShowPassword: () => void;
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  label,
  showPassword,
  toggleShowPassword,
  error,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <View style={[styles.inputWrapper, error ? styles.inputError : null]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
        placeholder="••••••••••••"
        placeholderTextColor="#666666"
      />
      <TouchableOpacity style={styles.eyeIcon} onPress={toggleShowPassword}>
        <Ionicons
          name={showPassword ? "eye-outline" : "eye-off-outline"}
          size={24}
          color="#B3A0FF"
        />
      </TouchableOpacity>
    </View>
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 32,
  },
  inputLabel: {
    color: "#B3A0FF",
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  inputError: {
    borderWidth: 1,
    borderColor: "#FF3B30",
  },
  input: {
    flex: 1,
    color: "#000000",
    fontSize: 16,
  },
  eyeIcon: {
    padding: 8,
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 12,
    marginTop: 4,
  },
});

export default PasswordInput;
