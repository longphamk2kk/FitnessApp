import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface TipCardProps {
  title: string;
  description: string;
  image: any;
  onPress: () => void;
  onFavoritePress?: () => void;
  isFavorite: boolean;
}

const TipCard: React.FC<TipCardProps> = ({
  title,
  description,
  image,
  onPress,
  onFavoritePress,
  isFavorite,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity 
        style={styles.starContainer} 
        onPress={onFavoritePress || onPress}
      >
        <Image
          source={require("../../assets/icons/Others/icon_star.png")}
          style={[
            styles.starIcon,
            { tintColor: isFavorite ? "#E2F163" : "rgba(255, 255, 255, 0.5)" },
          ]}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    overflow: "hidden",
    borderColor: "#E2F163",
    borderWidth: 1,
    position: "relative",
    width: "105%",
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  description: {
    fontSize: 14,
    color: "#AAAAAA",
  },
  starContainer: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  starIcon: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default TipCard;
