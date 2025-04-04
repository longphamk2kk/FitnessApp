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
import { styles } from "./Style";

const Onboarding3 = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleGetStarted = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/imgs/Onboarding3.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contentWrapper}>
          <View style={styles.contentContainer}>
            <Image
              source={require("../../assets/icons/Others/icon_community.png")}
              style={styles.communityIcon}
              resizeMode="contain"
            />
            <Text style={styles.title}>
              A Community For You,{"\n"}Challenge Yourself
            </Text>
            <View style={styles.indicatorContainer}>
              <View style={styles.indicator} />
              <View style={styles.indicator} />
              <View style={[styles.indicator, styles.activeIndicator]} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleGetStarted}
          >
            <Text style={styles.startButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding3;
