import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import Header from "../../components/Header";

interface SettingItemProps {
  icon: any;
  title: string;
  onPress: () => void;
}

const SettingItem = ({ icon, title, onPress }: SettingItemProps) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <View style={styles.settingContent}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.settingTitle}>{title}</Text>
    </View>
    <Image
      source={require("../../assets/icons/icon_back.png")}
      style={styles.arrowIcon}
    />
  </TouchableOpacity>
);

const Settings = () => {
  const navigation = useNavigation<NavigationProps>();

  const settingOptions = [
    {
      id: "1",
      icon: require("../../assets/icons/Profile/icon_bell.png"),
      title: "Notification Setting",
      onPress: () => navigation.navigate("NotificationSetting"),
    },
    {
      id: "2",
      icon: require("../../assets/icons/Profile/icon_key.png"),
      title: "Password Setting",
      onPress: () => navigation.navigate("PasswordSetting"),
    },
    {
      id: "3",
      icon: require("../../assets/icons/Profile/icon_profile.png"),
      title: "Delete Account",
      onPress: () => console.log("Delete Account pressed"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Settings" style={styles.header} />

      <View style={styles.content}>
        {settingOptions.map((option) => (
          <SettingItem
            key={option.id}
            icon={option.icon}
            title={option.title}
            onPress={option.onPress}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
  settingContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#8E8EF3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
  },
  settingTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },
  header: {
    bottom: 20,
  },
});

export default Settings;
