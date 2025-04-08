import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Style";

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <View style={styles.header}>
      {onBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Image
            source={require("../../assets/icons/icon_back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
