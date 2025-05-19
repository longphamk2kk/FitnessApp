import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import Header from "../../components/Header";
import FavoriteItem from "../../components/FavoriteItem";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../../types/navigation";

const FILTERS = ["Beginner", "Intermediate", "Advanced"];

const WORKOUT_DATA = {
  Beginner: {
    trainingOfTheDay: {
      title: "Functional Training",
      duration: 45,
      calories: 1450,
      exercises: 5,
      image: require("../../assets/imgs/fitness1.png"),
      type: "video" as const,
    },
    sectionTitle: "Let's Go Beginner",
    sectionSubtitle: "Explore Different Workout Styles",
    workouts: [
      {
        title: "Upper Body",
        duration: 60,
        calories: 1320,
        exercises: 5,
        image: require("../../assets/imgs/fitness1.png"),
        type: "video" as const,
      },
      {
        title: "Full Body Stretching",
        duration: 45,
        calories: 1450,
        exercises: 5,
        image: require("../../assets/imgs/fitness1.png"),
        type: "video" as const,
      },
      {
        title: "Glutes & Abs",
        duration: 50,
        calories: 1200,
        exercises: 6,
        image: require("../../assets/imgs/fitness1.png"),
        type: "video" as const,
      },
    ],
  },
  Intermediate: {
    trainingOfTheDay: {
      title: "Cardio Fitness",
      duration: 45,
      calories: 120,
      exercises: 5,
      image: require("../../assets/imgs/fitness2.png"),
      type: "video" as const,
    },
    sectionTitle: "Keep Raising Your Level",
    sectionSubtitle: "Explore Intermediate Workouts",
    workouts: [
      {
        title: "Circuit Training",
        duration: 50,
        calories: 1300,
        exercises: 5,
        image: require("../../assets/imgs/fitness2.png"),
        type: "video" as const,
      },
      {
        title: "Split Strength Training",
        duration: 12,
        calories: 1250,
        exercises: 6,
        image: require("../../assets/imgs/fitness2.png"),
        type: "video" as const,
      },
      {
        title: "Resistance",
        duration: 30,
        calories: 1100,
        exercises: 4,
        image: require("../../assets/imgs/fitness2.png"),
        type: "video" as const,
      },
    ],
  },
  Advanced: {
    trainingOfTheDay: {
      title: "Upper Body Strength",
      duration: 60,
      calories: 120,
      exercises: 5,
      image: require("../../assets/imgs/fitness2.png"),
      type: "video" as const,
    },
    sectionTitle: "Unlock Your Potential",
    sectionSubtitle: "Explore Advanced Fitness Routines",
    workouts: [
      {
        title: "Cardio Boxing",
        duration: 50,
        calories: 1300,
        exercises: 5,
        image: require("../../assets/imgs/fitness2.png"),
        type: "video" as const,
      },
      {
        title: "Hypertrophy - Legs",
        duration: 12,
        calories: 1250,
        exercises: 4,
        image: require("../../assets/imgs/fitness2.png"),
        type: "video" as const,
      },
      {
        title: "Rest Or Active",
        duration: 30,
        calories: 1100,
        exercises: 4,
        image: require("../../assets/imgs/fitness2.png"),
        type: "video" as const,
      },
    ],
  },
};

const Workout = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<keyof typeof WORKOUT_DATA>("Beginner");
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  const { trainingOfTheDay, sectionTitle, sectionSubtitle, workouts } =
    WORKOUT_DATA[selectedFilter];

  const handlePressTrainingOfTheDay = () => {
    navigation.navigate("TrainingDetail", { level: selectedFilter });
  };

  return (
    <View style={styles.container}>
      <Header title="Workout" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Filter */}
        <View style={styles.filterRow}>
          {FILTERS.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.filterBtn,
                selectedFilter === item && styles.filterBtnActive,
              ]}
              onPress={() =>
                setSelectedFilter(item as keyof typeof WORKOUT_DATA)
              }
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === item && styles.filterTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Training Of The Day */}
        <TouchableOpacity
          style={styles.trainingCard}
          activeOpacity={0.85}
          onPress={handlePressTrainingOfTheDay}
        >
          <View style={styles.trainingImageWrapper}>
            <ImageBackground
              source={trainingOfTheDay.image}
              style={styles.trainingImage}
              imageStyle={{ borderRadius: 20 }}
            >
              {/* Label góc phải trên */}
              <View style={styles.trainingLabelContainer}>
                <Text style={styles.trainingLabel}>Training Of The Day</Text>
              </View>
              {/* Overlay dưới cùng */}
              <View style={styles.trainingInfoOverlay}>
                <View>
                  <Text style={styles.trainingTitle}>
                    {trainingOfTheDay.title}
                  </Text>
                  <View style={styles.trainingStats}>
                    <View style={styles.statItem}>
                      <MaterialIcons
                        name="timer"
                        size={16}
                        color="#fff"
                        style={{ marginRight: 4 }}
                      />
                      <Text style={styles.trainingStat}>
                        {trainingOfTheDay.duration} Minutes
                      </Text>
                    </View>
                    <View style={styles.statItem}>
                      <MaterialIcons
                        name="local-fire-department"
                        size={16}
                        color="#fff"
                        style={{ marginRight: 4 }}
                      />
                      <Text style={styles.trainingStat}>
                        {trainingOfTheDay.calories} Kcal
                      </Text>
                    </View>
                    <View style={styles.statItem}>
                      <MaterialIcons
                        name="fitness-center"
                        size={16}
                        color="#fff"
                        style={{ marginRight: 4 }}
                      />
                      <Text style={styles.trainingStat}>
                        {trainingOfTheDay.exercises} Exercises
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.starWrapper}>
                  <Image
                    source={require("../../assets/icons/Others/icon_star.png")}
                    style={styles.starIcon}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        {/* Section Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
          <Text style={styles.sectionSubtitle}>{sectionSubtitle}</Text>
        </View>

        {/* List Workout */}
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <FavoriteItem {...item} />}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 12,
    marginTop: 16,
    marginHorizontal: 20,
  },
  filterBtn: {
    backgroundColor: "#232325",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 8,
  },
  filterBtnActive: {
    backgroundColor: "#E2F163",
  },
  filterText: {
    color: "#C7C7CC",
    fontWeight: "500",
  },
  filterTextActive: {
    color: "#232325",
    fontWeight: "700",
  },
  trainingCard: {
    backgroundColor: "#BBA3FF",
    marginHorizontal: 0,
    marginTop: 20,
    padding: 16,
    alignItems: "center",
  },
  trainingImageWrapper: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  trainingImage: {
    width: "100%",
    aspectRatio: 1.9,
    justifyContent: "flex-end",
  },
  trainingLabelContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#E2F163",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 4,
    zIndex: 2,
  },
  trainingLabel: {
    color: "#232325",
    fontWeight: "700",
    fontSize: 15,
  },
  trainingInfoOverlay: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trainingTitle: {
    color: "#E2F163",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  trainingStats: {
    flexDirection: "row",
    gap: 12,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  trainingStat: {
    color: "#fff",
    fontSize: 13,
    marginRight: 8,
  },
  starWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  starIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  sectionHeader: {
    marginTop: 24,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    color: "#E2F163",
    fontWeight: "bold",
    fontSize: 20,
  },
  sectionSubtitle: {
    color: "#C7C7CC",
    fontSize: 13,
    marginTop: 2,
  },
});

export default Workout;
