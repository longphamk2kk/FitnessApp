import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "../../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

const trainingData = {
  title: "Functional Training",
  duration: 45,
  calories: 1450,
  level: "Beginner",
  image: require("../../assets/imgs/fitness1.png"),
  rounds: [
    {
      title: "Round 1",
      exercises: [
        { name: "Dumbbell Rows", time: "00:30", repetition: "3x" },
        { name: "Russian Twists", time: "00:15", repetition: "2x" },
        { name: "Squats", time: "00:30", repetition: "3x" },
      ],
    },
    {
      title: "Round 2",
      exercises: [
        { name: "Tabata Intervals", time: "00:10", repetition: "2x" },
        { name: "Bicycle Crunches", time: "00:10", repetition: "4x" },
      ],
    },
  ],
};

const TrainingDetail = () => {
  const route = useRoute<RouteProp<HomeStackParamList, "TrainingDetail">>();
  const level = route.params?.level || "Beginner";
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  return (
    <View style={styles.container}>
      <Header title={level} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Ảnh và label */}
        <View style={styles.topCard}>
          <ImageBackground
            source={trainingData.image}
            style={styles.topImage}
            imageStyle={{ borderRadius: 18 }}
          >
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Functional Training</Text>
            </View>
            <View style={styles.statsOverlay}>
              <View style={styles.statsRow}>
                <MaterialIcons
                  name="timer"
                  size={16}
                  color="#fff"
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.statText}>
                  {trainingData.duration} Minutes
                </Text>
                <MaterialIcons
                  name="local-fire-department"
                  size={16}
                  color="#fff"
                  style={{ marginLeft: 16, marginRight: 4 }}
                />
                <Text style={styles.statText}>
                  {trainingData.calories} Kcal
                </Text>
                <MaterialIcons
                  name="person"
                  size={16}
                  color="#fff"
                  style={{ marginLeft: 16, marginRight: 4 }}
                />
                <Text style={styles.statText}>{trainingData.level}</Text>
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
        {/* Các round */}
        {trainingData.rounds.map((round, idx) => (
          <View key={idx} style={styles.roundSection}>
            <Text style={styles.roundTitle}>{round.title}</Text>
            {round.exercises.map((ex, i) => (
              <TouchableOpacity
                key={i}
                style={styles.exerciseRow}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("ExerciseDetail", {
                    name: ex.name,
                    time: ex.time,
                    repetition: ex.repetition,
                    level,
                  })
                }
              >
                <View style={styles.playIconWrapper}>
                  <MaterialIcons
                    name="play-circle-fill"
                    size={36}
                    color={i === 1 ? "#E2F163" : "#BBA3FF"}
                  />
                </View>
                <View style={styles.exerciseInfo}>
                  <Text style={styles.exerciseName}>{ex.name}</Text>
                  <View style={styles.exerciseMeta}>
                    <MaterialIcons name="timer" size={16} color="#BBA3FF" />
                    <Text style={styles.exerciseTime}>{ex.time}</Text>
                  </View>
                </View>
                <Text style={styles.repetitionText}>
                  Repetition {ex.repetition}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  topCard: {
    backgroundColor: "#BBA3FF",
    borderRadius: 24,
    marginHorizontal: 0,
    marginTop: 20,
    padding: 16,
    alignItems: "center",
  },
  topImage: {
    width: "100%",
    aspectRatio: 1.9,
    justifyContent: "flex-end",
  },
  labelContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#E2F163",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 4,
    zIndex: 2,
  },
  label: {
    color: "#232325",
    fontWeight: "700",
    fontSize: 15,
  },
  statsOverlay: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  statText: {
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
  roundSection: {
    marginTop: 24,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  roundTitle: {
    color: "#E2F163",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 12,
  },
  exerciseRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 32,
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  playIconWrapper: {
    marginRight: 12,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    color: "#232325",
    fontWeight: "bold",
    fontSize: 16,
  },
  exerciseMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  exerciseTime: {
    color: "#BBA3FF",
    fontSize: 14,
    marginLeft: 4,
  },
  repetitionText: {
    color: "#BBA3FF",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default TrainingDetail;
