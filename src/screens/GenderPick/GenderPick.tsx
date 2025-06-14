import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { useRegistration } from "../../contexts/RegistrationContext";

const GenderPick = () => {
  const navigation = useNavigation<NavigationProps>();
  const { registrationData, updateRegistrationData } = useRegistration();
  const [selectedGender, setSelectedGender] = useState<
    "male" | "female" | null
  >(registrationData.gender?.toLowerCase() as "male" | "female" || null);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    if (selectedGender) {
      // Save gender to registration context
      updateRegistrationData({
        gender: selectedGender === "male" ? "Male" : "Female"
      });
      navigation.navigate("AgePicker" as any);
    }
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
        <Text style={styles.title}>What's Your Gender</Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={styles.genderButton}
            onPress={() => setSelectedGender("male")}
          >
            <Image
              source={
                selectedGender === "male"
                  ? require("../../assets/icons/Sex/icon_male_on.png")
                  : require("../../assets/icons/Sex/icon_male_off.png")
              }
              style={styles.genderIcon}
              resizeMode="contain"
            />
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.genderButton}
            onPress={() => setSelectedGender("female")}
          >
            <Image
              source={
                selectedGender === "female"
                  ? require("../../assets/icons/Sex/icon_female_on.png")
                  : require("../../assets/icons/Sex/icon_female_off.png")
              }
              style={styles.genderIcon}
              resizeMode="contain"
            />
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedGender && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedGender}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenderPick;
