import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Style";

const WeeklyChallenge = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/icons/icon_back.png")}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weekly Challenge</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.challengeCard}>
          <Image
            source={require("../../assets/imgs/workout3.png")}
            style={styles.challengeImage}
            resizeMode="cover"
          />
          <View style={styles.challengeInfo}>
            <Text style={styles.challengeTitle}>Plank With Hip Twist</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Image
                  source={require("../../assets/icons/Others/icon_time.png")}
                  style={styles.statIcon}
                  resizeMode="contain"
                />
                <Text style={styles.statText}>12 Minutes</Text>
              </View>
              <View style={styles.statItem}>
                <Image
                  source={require("../../assets/icons/Others/icon_calories.png")}
                  style={styles.statIcon}
                  resizeMode="contain"
                />
                <Text style={styles.statText}>120 Kcal</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WeeklyChallenge;
