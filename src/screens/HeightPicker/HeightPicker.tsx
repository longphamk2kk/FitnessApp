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
import Header from "../../components/Header";
import { useRegistration } from "../../contexts/RegistrationContext";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 80;

const HeightPicker = () => {
  const navigation = useNavigation<NavigationProps>();
  const { registrationData, updateRegistrationData } = useRegistration();
  const [selectedHeight, setSelectedHeight] = useState(registrationData.height || 170);
  const [selectedUnit, setSelectedUnit] = useState<"CM" | "FT">("CM");
  const scrollViewRef = useRef<ScrollView>(null);

  const handleContinue = () => {
    // Save height to registration context
    updateRegistrationData({ height: selectedHeight });
    console.log('📏 Height saved to registration context:', selectedHeight);
    navigation.navigate("GoalPicker" as any);
  };

  const heights = Array.from({ length: 301 }, (_, i) => i);

  useEffect(() => {
    setTimeout(() => {
      handleHeightSelect(selectedHeight);
    }, 100);
  }, []);

  const handleHeightSelect = (height: number) => {
    setSelectedHeight(height);
    scrollViewRef.current?.scrollTo({
      x: height * ITEM_WIDTH,
      animated: true,
    });
  };

  const handleUnitChange = (unit: "CM" | "FT") => {
    if (unit !== selectedUnit) {
      setSelectedUnit(unit);
    }
  };

  const renderHeightItem = (height: number) => {
    const isSelected = height === selectedHeight;
    return (
      <TouchableOpacity
        key={height}
        style={styles.heightItem}
        onPress={() => handleHeightSelect(height)}
      >
        <Text
          style={[styles.heightText, isSelected && styles.heightTextSelected]}
        >
          {height}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="What Is Your Height?" onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.unitSelector}>
          <View style={styles.unitContainer}>
            <TouchableOpacity onPress={() => handleUnitChange("CM")}>
              <Text
                style={[
                  styles.unitText,
                  selectedUnit === "CM" && styles.unitTextSelected,
                ]}
              >
                CM
              </Text>
            </TouchableOpacity>
            <View style={styles.unitDivider} />
            <TouchableOpacity onPress={() => handleUnitChange("FT")}>
              <Text
                style={[
                  styles.unitText,
                  selectedUnit === "FT" && styles.unitTextSelected,
                ]}
              >
                FT
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.heightPickerContainer}>
          <View style={styles.selectedHeightContainer}>
            <Text style={styles.selectedHeightText}>{selectedHeight}</Text>
            <Text style={styles.unitLabel}>{selectedUnit}</Text>
          </View>
          <Image
            source={require("../../assets/icons/icon_back.png")}
            style={styles.triangleIcon}
            resizeMode="contain"
          />
          <View style={styles.heightSliderContainer}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.heightSlider}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              onMomentumScrollEnd={(event) => {
                const x = event.nativeEvent.contentOffset.x;
                const index = Math.round(x / ITEM_WIDTH);
                if (index >= 0 && index < heights.length) {
                  setSelectedHeight(heights[index]);
                }
              }}
            >
              {heights.map(renderHeightItem)}
            </ScrollView>
            <View style={styles.selectedHeightIndicator} />
            <View style={styles.selectedHeightIndicatorRight} />
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

export default HeightPicker;
