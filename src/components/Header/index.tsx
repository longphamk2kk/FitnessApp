import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Style";

interface RightIcon {
  icon: any;
  onPress: () => void;
}

interface HeaderProps {
  title: string;
  rightIcons?: RightIcon[];
  onBack?: () => void;
  style?: object;
}

const Header: React.FC<HeaderProps> = ({ title, rightIcons, style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, style]}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/icons/icon_back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {rightIcons && rightIcons.length > 0 && (
        <View style={styles.rightContainer}>
          {rightIcons.map((icon, index) => (
            <TouchableOpacity
              key={index}
              style={styles.iconButton}
              onPress={icon.onPress}
            >
              <Image source={icon.icon} style={styles.icon} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Header;
