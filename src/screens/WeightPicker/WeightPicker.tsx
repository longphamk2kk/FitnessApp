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

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 80;

const WeightPicker = () => {
  const navigation = useNavigation<NavigationProps>();
  const [selectedWeight, setSelectedWeight] = useState(75);
  const [selectedUnit, setSelectedUnit] = useState<"KG" | "LB">("KG");
  const scrollViewRef = useRef<ScrollView>(null);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate("HeightPicker");
  };

  const weights = Array.from({ length: 301 }, (_, i) => i);

  // Căn giữa số cân nặng được chọn khi component mount
  useEffect(() => {
    setTimeout(() => {
      handleWeightSelect(selectedWeight);
    }, 100);
  }, []);

  const handleWeightSelect = (weight: number) => {
    setSelectedWeight(weight);
    // Scroll to center the selected weight
    scrollViewRef.current?.scrollTo({
      x: weight * ITEM_WIDTH,
      animated: true,
    });
  };

  const handleUnitChange = (unit: "KG" | "LB") => {
    if (unit !== selectedUnit) {
      setSelectedUnit(unit);
    }
  };

  const renderWeightItem = (weight: number) => {
    const isSelected = weight === selectedWeight;
    return (
      <TouchableOpacity
        key={weight}
        style={styles.weightItem}
        onPress={() => handleWeightSelect(weight)}
      >
        <Text
          style={[styles.weightText, isSelected && styles.weightTextSelected]}
        >
          {weight}
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
        <Text style={styles.title}>What Is Your Weight?</Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.unitSelector}>
          <View style={styles.unitContainer}>
            <TouchableOpacity onPress={() => handleUnitChange("KG")}>
              <Text
                style={[
                  styles.unitText,
                  selectedUnit === "KG" && styles.unitTextSelected,
                ]}
              >
                KG
              </Text>
            </TouchableOpacity>
            <View style={styles.unitDivider} />
            <TouchableOpacity onPress={() => handleUnitChange("LB")}>
              <Text
                style={[
                  styles.unitText,
                  selectedUnit === "LB" && styles.unitTextSelected,
                ]}
              >
                LB
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.weightPickerContainer}>
          <View style={styles.selectedWeightContainer}>
            <Text style={styles.selectedWeightText}>{selectedWeight}</Text>
            <Text style={styles.unitLabel}>{selectedUnit}</Text>
          </View>
          <Image
            source={require("../../assets/icons/icon_back.png")}
            style={styles.triangleIcon}
            resizeMode="contain"
          />
          <View style={styles.weightSliderContainer}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.weightSlider}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              onMomentumScrollEnd={(event) => {
                const x = event.nativeEvent.contentOffset.x;
                const newWeight = Math.round(x / ITEM_WIDTH);
                if (newWeight >= 0 && newWeight <= 300) {
                  setSelectedWeight(newWeight);
                }
              }}
            >
              {weights.map(renderWeightItem)}
            </ScrollView>
            <View style={styles.selectedWeightIndicator} />
            <View style={styles.selectedWeightIndicatorRight} />
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

export default WeightPicker;
