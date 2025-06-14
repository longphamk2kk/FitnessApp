import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { useRegistration } from "../../contexts/RegistrationContext";

const goals = [
  "Lose Weight",
  "Gain Weight",
  "Muscle Mass Gain",
  "Shape Body",
  "Others",
];

const GoalPicker = () => {
  const navigation = useNavigation<NavigationProps>();
  const { registrationData, updateRegistrationData } = useRegistration();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(registrationData.goal || null);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    if (selectedGoal) {
      // Save goal to registration context
      updateRegistrationData({ goal: selectedGoal });
      console.log('🎯 Goal saved to registration context:', selectedGoal);
      navigation.navigate("ActiveLevel" as any);
    }
  };

  const handleSelectGoal = (goal: string) => {
    setSelectedGoal(goal);
  };

  return (
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
        <Text style={styles.title}>What Is Your Goal?</Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.goalsContainer}>
          {goals.map((goal) => (
            <TouchableOpacity
              key={goal}
              style={styles.goalOption}
              onPress={() => handleSelectGoal(goal)}
            >
              <Text style={styles.goalText}>{goal}</Text>
              <View
                style={[
                  styles.radioButton,
                  selectedGoal === goal && styles.radioButtonSelected,
                ]}
              >
                {selectedGoal === goal && (
                  <View style={styles.radioButtonInner} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedGoal && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedGoal}
        >
          <Text
            style={[
              styles.continueButtonText,
              !selectedGoal && styles.continueButtonTextDisabled,
            ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoalPicker;
