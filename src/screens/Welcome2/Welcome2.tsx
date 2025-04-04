import React, { useEffect } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { styles } from "./Style";

const Welcome2 = () => {
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding1");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require("../../assets/imgs/Welcome2/welcome2.png")}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <View style={styles.logoContainer}>
          <View style={styles.fbContainer}>
            <Image
              source={require("../../assets/imgs/Group.png")}
              style={styles.fbLogo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.fitText}>FIT</Text>
            <Text style={styles.bodyText}>BODY</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome2;
