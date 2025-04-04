import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";

const ResetSuccess = () => {
  const navigation = useNavigation<NavigationProps>();
  const scaleValue = new Animated.Value(0);

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();
  }, []);

  const handleDone = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.successIconContainer,
            {
              transform: [{ scale: scaleValue }],
            },
          ]}
        >
          <Text style={styles.successIcon}>✓</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.textContainer,
            {
              transform: [{ scale: scaleValue }],
              opacity: scaleValue,
            },
          ]}
        >
          <Text style={styles.title}>Password Reset Successfully!</Text>
          <Text style={styles.subtitle}>
            Your password has been reset successfully. Please use your new
            password to login.
          </Text>
        </Animated.View>

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetSuccess;
