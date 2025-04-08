import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import Header from "../../components/Header";

const levels = ["Beginner", "Intermediate", "Advance"];

const ActiveLevel = () => {
  const navigation = useNavigation<NavigationProps>();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedLevel) {
      navigation.navigate("FillProfile");
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
