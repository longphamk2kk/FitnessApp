import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import WorkoutCard from "../../components/WorkoutCard";
import { styles } from "./Style";

interface WorkoutItem {
  id: string;
  title: string;
  duration: number;
  calories: number;
  image: any;
}

interface MenuItem {
  id: string;
  icon: any;
  screen: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    icon: require("../../assets/icons/Home/icon_workout_on.png"),
    screen: "Workout",
  },
  {
    id: "2",
    icon: require("../../assets/icons/Home/icon_progress_on.png"),
    screen: "ProgressTracking",
  },
  {
    id: "3",
    icon: require("../../assets/icons/Home/icon_nutrition_on.png"),
    screen: "Nutrition",
  },
  {
    id: "4",
    icon: require("../../assets/icons/Home/icon_community_on.png"),
    screen: "Community",
  },
];

const workoutData: WorkoutItem[] = [
  {
    id: "1",
    title: "Squat Exercise",
    duration: 12,
    calories: 120,
    image: require("../../assets/imgs/Workout1.png"),
  },
  {
    id: "2",
    title: "Full Body Stretching",
    duration: 12,
    calories: 120,
    image: require("../../assets/imgs/Workout2.png"),
  },
];

const Home = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hi, Madison</Text>
          <Text style={styles.subtitle}>
            It's time to challenge your limits.
          </Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              /* Xử lý khi click search */
            }}
          >
            <Image
              source={require("../../assets/icons/Home/icon_search_off.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              /* Xử lý khi click notification */
            }}
          >
            <Image
              source={require("../../assets/icons/Home/icon_notification_off.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              /* Xử lý khi click user */
            }}
          >
            <Image
              source={require("../../assets/icons/Home/icon_user_off.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image
              source={item.icon}
              style={styles.menuIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Recommendations Section */}
      <View style={styles.recommendationSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <TouchableOpacity
            style={styles.seeAllButton}
            onPress={() => navigation.navigate("Recommendation")}
          >
            <Text style={styles.seeAllText}>See All</Text>
            <Image
              source={require("../../assets/icons/icon_back.png")}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.workoutGrid}>
          {workoutData.map((workout) => (
            <WorkoutCard
              key={workout.id}
              title={workout.title}
              duration={workout.duration}
              calories={workout.calories}
              image={workout.image}
              onPress={() => {
                /* Xử lý khi click vào workout */
              }}
            />
          ))}
        </View>
      </View>

      {/* Weekly Challenge Section */}
      <View style={styles.weeklySection}>
        <TouchableOpacity
          style={styles.weeklyCard}
          onPress={() => navigation.navigate("WeeklyChallenge")}
        >
          <View style={styles.weeklyOverlay}>
            <View style={styles.weeklyContent}>
              <Text style={styles.weeklyTitle}>Weekly{"\n"}Challenge</Text>
              <Text style={styles.weeklySubtitle}>Plank With Hip Twist</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/imgs/workout3.png")}
            style={styles.weeklyImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
