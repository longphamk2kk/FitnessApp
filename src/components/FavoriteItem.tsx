import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface FavoriteItemProps {
  title: string;
  duration: number;
  calories: number;
  exercises?: number;
  image: any;
  description?: string;
  type: "video" | "article";
  onPress?: () => void;
}

const FavoriteItem = ({
  title,
  duration,
  calories,
  exercises,
  image,
  description,
  type,
  onPress,
}: FavoriteItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          {description && (
            <Text style={styles.description} numberOfLines={2}>
              {description}
            </Text>
          )}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <MaterialIcons name="timer" size={16} color="#8E8E93" />
              <Text style={styles.statText}>{duration} Minutes</Text>
            </View>
            <View style={styles.statItem}>
              <MaterialIcons
                name="local-fire-department"
                size={16}
                color="#8E8E93"
              />
              <Text style={styles.statText}>{calories} Kcal</Text>
            </View>
            {exercises && (
              <View style={styles.statItem}>
                <MaterialIcons
                  name="fitness-center"
                  size={16}
                  color="#8E8E93"
                />
                <Text style={styles.statText}>{exercises} Exercises</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
          {type === "video" && (
            <View style={styles.playButton}>
              <Image
                source={require("../assets/icons/Others/icon_play.png")}
                style={styles.playIcon}
              />
            </View>
          )}
          <TouchableOpacity style={styles.favoriteButton}>
            <Image
              source={require("../assets/icons/Others/icon_star.png")}
              style={styles.starIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C2E",
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#8E8E93",
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: "#8E8E93",
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: {
    width: 30,
    height: 30,
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  starIcon: {
    width: 20,
    height: 20,
    tintColor: "#E2F163",
  },
});

export default FavoriteItem;
