import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import Header from "../../components/Header";
import { useRegistration } from "../../contexts/RegistrationContext";

const levels = ["Beginner", "Intermediate", "Advanced"];

const ActiveLevel = () => {
  const navigation = useNavigation<NavigationProps>();
  const { registrationData, updateRegistrationData } = useRegistration();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(
    registrationData.level ? registrationData.level.charAt(0).toUpperCase() + registrationData.level.slice(1) : null
  );

  const handleContinue = () => {
    if (selectedLevel) {
      // Save level to registration context
      updateRegistrationData({
        level: selectedLevel.toLowerCase() as 'beginner' | 'intermediate' | 'advanced'
      });
      console.log('💪 Level saved to registration context:', selectedLevel.toLowerCase());
      navigation.navigate("FillProfile" as any);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="What Is Your Active Level?"
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <Text style={styles.title}>What Is Your Active Level?</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.levelsContainer}>
          {levels.map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.levelOption,
                selectedLevel === level && styles.levelOptionSelected,
              ]}
              onPress={() => setSelectedLevel(level)}
            >
              <Text
                style={[
                  styles.levelText,
                  selectedLevel === level && styles.levelTextSelected,
                ]}
              >
                {level}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedLevel && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedLevel}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActiveLevel;
