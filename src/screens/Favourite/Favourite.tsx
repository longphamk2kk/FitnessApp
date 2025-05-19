import React, { useState, useMemo } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import FavoriteItem from "../../components/FavoriteItem";
import Header from "../../components/Header";

type FilterType = "All" | "Video" | "Article";

const Favourite = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const favouriteItems = [
    {
      id: "1",
      title: "Upper Body Workout",
      duration: 60,
      calories: 1320,
      exercises: 5,
      type: "video" as const,
      image: require("../../assets/imgs/fitness1.png"),
    },
    {
      id: "2",
      title: "Boost Energy And Vitality",
      duration: 45,
      calories: 800,
      type: "article" as const,
      description:
        "Incorporating physical exercise into your daily routine can boost your energy levels and enhance overall vitality...",
      image: require("../../assets/imgs/fitness2.png"),
    },
    {
      id: "3",
      title: "Full Body HIT",
      duration: 30,
      calories: 1210,
      exercises: 10,
      type: "video" as const,
      image: require("../../assets/imgs/fitness3.png"),
    },
    {
      id: "4",
      title: "Benefits of Morning Exercise",
      duration: 45,
      calories: 950,
      type: "article" as const,
      description:
        "Morning exercise can kickstart your metabolism and improve mental clarity throughout the day...",
      image: require("../../assets/imgs/fitness4.png"),
    },
    {
      id: "5",
      title: "Healthy Breakfast Ideas",
      duration: 15,
      calories: 150,
      type: "article" as const,
      description:
        "Start your day with these nutritious and delicious breakfast recipes...",
      image: require("../../assets/imgs/food1.png"),
    },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return favouriteItems;
    return favouriteItems.filter(
      (item) => item.type.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter]);

  const FilterButton = ({ type }: { type: FilterType }) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        activeFilter === type && styles.filterButtonActive,
      ]}
      onPress={() => setActiveFilter(type)}
    >
      <Text
        style={[
          styles.filterButtonText,
          activeFilter === type && styles.filterButtonTextActive,
        ]}
      >
        {type}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favourites" style={styles.header} />

      <View style={styles.filterContainer}>
        <View style={styles.filterButtonsContainer}>
          <Text style={styles.filterLabel}>Sort By</Text>
          <FilterButton type="All" />
          <FilterButton type="Video" />
          <FilterButton type="Article" />
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredItems.map((item) => (
          <FavoriteItem
            key={item.id}
            title={item.title}
            duration={item.duration}
            calories={item.calories}
            exercises={item.exercises}
            description={item.description}
            image={item.image}
            type={item.type}
            onPress={() => console.log("Pressed:", item.title)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  filterContainer: {
    paddingHorizontal: 20,
    bottom: 20,
  },
  filterLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 12,
  },
  filterButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#2C2C2E",
  },
  filterButtonActive: {
    backgroundColor: "#E2F163",
  },
  filterButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  filterButtonTextActive: {
    color: "#000000",
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  scrollViewContent: {
    paddingBottom: 90,
  },
  header: {
    bottom: 30,
  },
});

export default Favourite;
