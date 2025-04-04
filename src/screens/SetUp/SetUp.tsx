import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";

const SetUp = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleContinue = () => {
    navigation.navigate("GenderPick");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/imgs/SetUp1.png")}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Consistency Is{"\n"}
            The Key To Progress.{"\n"}
            Don't Give Up!
          </Text>

          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleContinue}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetUp;
