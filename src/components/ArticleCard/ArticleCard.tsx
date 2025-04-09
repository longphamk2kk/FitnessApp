import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./Style";

interface ArticleCardProps {
  title: string;
  description: string;
  image: any;
  onPress: () => void;
  isFavorite: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, image, onPress }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>
        {title.length > 30 ? `${title.substring(0, 27)}...` : title}
      </Text>
      <TouchableOpacity style={styles.starContainer} onPress={toggleFavorite}>
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

export default ArticleCard;
