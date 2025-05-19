import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import WorkoutCard from "../../components/WorkoutCard";
import FavoriteItem from "../../components/FavoriteItem";

const FILTERS = ["All", "Workout", "Nutrition"];

const WORKOUTS = [
  {
    id: 1,
    title: "Squat Exercise",
    image: require("../../assets/imgs/Workout1.png"),
    duration: 12,
    kcal: 120,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Full Body Stretching",
    image: require("../../assets/imgs/Workout2.png"),
    duration: 12,
    kcal: 120,
    isFavorite: false,
  },
];

const NUTRITIONS = [
  {
    id: 1,
    title: "Circuit Training",
    image: require("../../assets/imgs/workout3.png"),
    description: "50 Minutes · 1300 Kcal · 5 Exercises",
    duration: 50,
    kcal: 1300,
    exercises: 5,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Delights With Greek Yogurt",
    image: require("../../assets/imgs/Workout1.png"),
    description: "6 Minutes · 200 Cal",
    duration: 6,
    kcal: 200,
    exercises: 1,
    isFavorite: false,
  },
  {
    id: 3,
    title: "Split Strength Training",
    image: require("../../assets/imgs/Workout1.png"),
    description: "12 Minutes · 1250 Kcal · 5 Exercises",
    duration: 12,
    kcal: 1250,
    exercises: 5,
    isFavorite: true,
  },
  {
    id: 4,
    title: "Turkey And Avocado Wrap",
    image: require("../../assets/imgs/Workout2.png"),
    description: "8 Minutes · 300 Cal",
    duration: 8,
    kcal: 300,
    exercises: 1,
    isFavorite: false,
  },
];

const TOP_SEARCHES: Record<"Workout" | "Nutrition", string[]> = {
  Workout: ["Circuit", "Split", "Challenge", "Legs", "Cardio"],
  Nutrition: ["Breakfast", "Yogurt", "Vegetarian", "Smoothie", "Chicken"],
};

const Search = () => {
  const navigation = useNavigation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Search"
        onBack={() => navigation.goBack()}
        style={styles.header}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Search bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#B3B3B3"
          value={search}
          onChangeText={setSearch}
        />
        {/* Filter */}
        <View style={styles.filterContainer}>
          {FILTERS.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterBtn,
                activeFilter === filter && styles.filterBtnActive,
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === filter && styles.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Content */}
        {activeFilter === "All" && (
          <>
            {/* Workout cards */}
            <View style={styles.workoutRow}>
              {WORKOUTS.map((item) => (
                <WorkoutCard
                  key={item.id}
                  title={item.title}
                  duration={item.duration}
                  calories={item.kcal}
                  image={item.image}
                  onPress={() => {}}
                />
              ))}
            </View>
            {/* Nutrition cards */}
            {NUTRITIONS.map((item) => (
              <FavoriteItem
                key={item.id}
                title={item.title}
                duration={item.duration || 0}
                calories={item.kcal || 0}
                exercises={item.exercises || 0}
                image={item.image}
                description={item.description}
                type="article"
                onPress={() => {}}
              />
            ))}
          </>
        )}
        {activeFilter !== "All" && (
          <>
            <Text style={styles.topSearchTitle}>Top Searches</Text>
            {TOP_SEARCHES[activeFilter as "Workout" | "Nutrition"].map(
              (keyword: string, idx: number) => (
                <View key={idx} style={styles.topSearchItem}>
                  <Text style={styles.topSearchText}>{keyword}</Text>
                </View>
              )
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  header: {
    marginBottom: 0,
    paddingTop: 0,
    top: 5,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: "#222",
    marginBottom: 18,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 18,
    gap: 10,
  },
  filterBtn: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 22,
    paddingVertical: 10,
    alignItems: "center",
  },
  filterBtnActive: {
    backgroundColor: "#E2F163",
  },
  filterText: {
    color: "#8E8EF3",
    fontSize: 16,
    fontWeight: "500",
  },
  filterTextActive: {
    color: "#000",
  },
  workoutRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
  },
  topSearchTitle: {
    color: "#E2F163",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 18,
    marginTop: 10,
  },
  topSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  topSearchText: {
    color: "#18181A",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Search;
