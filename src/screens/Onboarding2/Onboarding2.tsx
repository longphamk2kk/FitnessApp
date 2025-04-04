import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./Style";

const Onboarding2 = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleNext = () => {
    navigation.navigate("Onboarding3");
  };

  const handleSkip = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
        <MaterialIcons name="arrow-forward-ios" size={16} color="#E2F163" />
      </TouchableOpacity>

      <ImageBackground
        source={require("../../assets/imgs/Onboarding2.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contentWrapper}>
          <View style={styles.contentContainer}>
            <Image
              source={require("../../assets/icons/Others/icon_nutrition.png")}
              style={styles.nutritionIcon}
              resizeMode="contain"
            />
            <Text style={styles.title}>
              Find Nutrition Tips That Fit{"\n"}Your Lifestyle
            </Text>
            <View style={styles.indicatorContainer}>
              <View style={styles.indicator} />
              <View style={[styles.indicator, styles.activeIndicator]} />
              <View style={styles.indicator} />
            </View>
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding2;
