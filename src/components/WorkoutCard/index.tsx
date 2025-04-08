import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./Style";

interface WorkoutCardProps {
  title: string;
  duration: number; // in minutes
  calories: number;
  image: any; // source for ImageBackground
  onPress?: () => void;
}

const WorkoutCard = ({
  title,
  duration,
  calories,
  image,
  onPress,
}: WorkoutCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <ImageBackground
        source={image}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}
        >
          <Image
            source={require("../../assets/icons/Others/icon_star.png")}
            style={[
              styles.starIcon,
              {
                tintColor: isFavorite ? "#E2F163" : "rgba(255, 255, 255, 0.3)",
              },
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.playButton}>
          <Image
            source={require("../../assets/icons/Others/icon_play.png")}
            style={styles.playIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Image
                source={require("../../assets/icons/Others/icon_time.png")}
                style={styles.statIcon}
                resizeMode="contain"
              />
              <Text style={styles.statText}>{duration} Minutes</Text>
            </View>
            <View style={styles.statItem}>
              <Image
                source={require("../../assets/icons/Others/icon_calories.png")}
                style={styles.statIcon}
                resizeMode="contain"
              />
              <Text style={styles.statText}>{calories} Kcal</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default WorkoutCard;
