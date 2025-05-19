import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../../types/navigation";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";

const ExerciseDetail = () => {
  const route = useRoute<RouteProp<HomeStackParamList, "ExerciseDetail">>();
  const { name, time, repetition, level } = route.params;

  return (
    <View style={styles.container}>
      <Header title={level} />
      <View style={styles.imageCard}>
        <Image
          source={require("../../assets/imgs/workout4.png")}
          style={styles.image}
        />
        <TouchableOpacity style={styles.starWrapper} activeOpacity={0.7}>
          <Image
            source={require("../../assets/icons/Others/icon_star.png")}
            style={styles.starIcon}
          />
        </TouchableOpacity>
        <View style={styles.playButton}>
          <View style={styles.playCircle}>
            <MaterialIcons name="play-arrow" size={48} color="#fff" />
          </View>
        </View>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.exerciseName}>{name}</Text>
        <Text style={styles.exerciseDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
          libero eget.
        </Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <MaterialIcons name="timer" size={18} color="#232325" />
            <Text style={styles.statText}>{time}</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="repeat" size={18} color="#232325" />
            <Text style={styles.statText}>{repetition}</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="person" size={18} color="#232325" />
            <Text style={styles.statText}>{level}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  imageCard: {
    backgroundColor: "#BBA3FF",
    // borderRadius: 24,
    marginTop: 24,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 0.8,
    borderRadius: 16,
    padding: 16,
  },
  starWrapper: {
    position: "absolute",
    top: 18,
    right: 18,
    zIndex: 2,
  },
  starIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    tintColor: "#E2F163",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -48 }, { translateY: -48 }],
    zIndex: 2,
  },
  playCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#7B61FF",
    justifyContent: "center",
    alignItems: "center",
  },
  infoCard: {
    backgroundColor: "#E2F163",
    borderRadius: 16,
    marginTop: 24,
    width: "90%",
    alignSelf: "center",
    padding: 18,
    alignItems: "center",
  },
  exerciseName: {
    color: "#232325",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 8,
    textAlign: "center",
  },
  exerciseDesc: {
    color: "#232325",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 4,
    minWidth: 90,
    justifyContent: "center",
  },
  statText: {
    color: "#232325",
    fontSize: 14,
    marginLeft: 4,
    fontWeight: "500",
  },
});

export default ExerciseDetail;
