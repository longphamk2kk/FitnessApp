import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Switch } from "react-native";
import Header from "../../components/Header";

interface NotificationOptionProps {
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const NotificationOption = ({
  title,
  value,
  onValueChange,
}: NotificationOptionProps) => (
  <View style={styles.optionContainer}>
    <Text style={styles.optionTitle}>{title}</Text>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: "#E2F163", true: "#E2F163" }}
      thumbColor="#FFFFFF"
      ios_backgroundColor="#B3A0FF"
    />
  </View>
);

const NotificationSetting = () => {
  const [notifications, setNotifications] = useState({
    general: true,
    sound: true,
    dnd: true,
    vibrate: false,
    lockScreen: false,
    reminders: true,
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Notifications Settings" style={styles.header} />

      <View style={styles.content}>
        <NotificationOption
          title="General Notification"
          value={notifications.general}
          onValueChange={() => handleToggle("general")}
        />
        <NotificationOption
          title="Sound"
          value={notifications.sound}
          onValueChange={() => handleToggle("sound")}
        />
        <NotificationOption
          title="Don't Disturb Mode"
          value={notifications.dnd}
          onValueChange={() => handleToggle("dnd")}
        />
        <NotificationOption
          title="Vibrate"
          value={notifications.vibrate}
          onValueChange={() => handleToggle("vibrate")}
        />
        <NotificationOption
          title="Lock Screen"
          value={notifications.lockScreen}
          onValueChange={() => handleToggle("lockScreen")}
        />
        <NotificationOption
          title="Reminders"
          value={notifications.reminders}
          onValueChange={() => handleToggle("reminders")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  header: {
    bottom: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
  optionTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});

export default NotificationSetting;
