import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { useRegistration } from "../../contexts/RegistrationContext";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 80;

const AgePicker = () => {
  const navigation = useNavigation<NavigationProps>();
  const { registrationData, updateRegistrationData } = useRegistration();
  const [selectedAge, setSelectedAge] = useState(registrationData.age || 28);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    // Save age to registration context
    updateRegistrationData({ age: selectedAge });
    navigation.navigate("WeightPicker" as any);
  };

  const ages = Array.from({ length: 101 }, (_, i) => i);

  // Căn giữa số tuổi được chọn khi component mount
  useEffect(() => {
    setTimeout(() => {
      handleAgeSelect(selectedAge);
    }, 100);
  }, []);

  const handleAgeSelect = (age: number) => {
    setSelectedAge(age);
    // Scroll to center the selected age
    scrollViewRef.current?.scrollTo({
      x: age * ITEM_WIDTH,
      animated: true,
    });
  };

  const renderAgeItem = (age: number) => {
    const isSelected = age === selectedAge;
    return (
      <TouchableOpacity
        key={age}
        style={styles.ageItem}
        onPress={() => handleAgeSelect(age)}
      >
        <Text style={[styles.ageText, isSelected && styles.ageTextSelected]}>
          {age}
        </Text>
      </TouchableOpacity>
    );
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
        <Text style={styles.title}>How Old Are You?</Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.agePickerContainer}>
          <Text style={styles.selectedAgeText}>{selectedAge}</Text>
          <Image
            source={require("../../assets/icons/icon_back.png")}
            style={styles.triangleIcon}
            resizeMode="contain"
          />
          <View style={styles.ageSliderContainer}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.ageSlider}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              onMomentumScrollEnd={(event) => {
                const x = event.nativeEvent.contentOffset.x;
                const newAge = Math.round(x / ITEM_WIDTH);
                if (newAge >= 0 && newAge <= 100) {
                  setSelectedAge(newAge);
                }
              }}
            >
              {ages.map(renderAgeItem)}
            </ScrollView>
            <View style={styles.selectedAgeIndicator} />
            <View style={styles.selectedAgeIndicatorRight} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AgePicker;
