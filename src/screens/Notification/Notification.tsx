import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { NOTIFICATIONS as NOTIFICATIONS_DATA } from "./notificationData";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

// Object mapping tĩnh giữa tên icon và file import
const iconMap: Record<string, any> = {
  bulb_on: require("../../assets/icons/Notification/icon_bulb_on.png"),
  bulb_off: require("../../assets/icons/Notification/icon_bulb_off.png"),
  star_on: require("../../assets/icons/Notification/icon_star_on.png"),
  star_off: require("../../assets/icons/Notification/icon_star_off.png"),
  cup_on: require("../../assets/icons/Notification/icon_cup_on.png"),
  cup_off: require("../../assets/icons/Notification/icon_cup_off.png"),
  list_on: require("../../assets/icons/Notification/icon_list_on.png"),
  list_off: require("../../assets/icons/Notification/icon_list_off.png"),
  bell_on: require("../../assets/icons/Notification/icon_bell_on.png"),
  bell_off: require("../../assets/icons/Notification/icon_bell_off.png"),
};

const getNotificationIcon = (iconName: string, status: string) => {
  const suffix = status === "unread" ? "_on" : "_off";
  const key = `${iconName}${suffix}`;
  return iconMap[key] || iconMap["star_off"];
};

const Notification = () => {
  const [activeTab, setActiveTab] = useState("Reminders");
  const navigation = useNavigation();
  // State notification cho phép cập nhật trạng thái từng item
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);

  // Xử lý khi click vào icon: nếu đang unread thì chuyển thành read
  const handleIconPress = (groupIdx: number, itemIdx: number) => {
    setNotifications((prev) => {
      const newData = prev.map((group, gIdx) => {
        if (gIdx !== groupIdx) return group;
        return {
          ...group,
          data: group.data.map((item, iIdx) => {
            if (iIdx !== itemIdx) return item;
            if (item.status === "unread") {
              return { ...item, status: "read" };
            }
            return item;
          }),
        };
      });
      return newData;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Notifications"
        onBack={() => navigation.goBack()}
        style={styles.header}
      />
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Reminders" && styles.tabActive]}
          onPress={() => setActiveTab("Reminders")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Reminders" && styles.tabTextActive,
            ]}
          >
            Reminders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "System" && styles.tabActive]}
          onPress={() => setActiveTab("System")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "System" && styles.tabTextActive,
            ]}
          >
            System
          </Text>
        </TouchableOpacity>
      </View>
      {/* Notification List */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((group, groupIdx) => (
          <View key={group.group}>
            <Text style={styles.groupLabel}>{group.group}</Text>
            {group.data.map((item, itemIdx) => (
              <TouchableOpacity
                key={itemIdx}
                style={styles.notiItem}
                onPress={() => handleIconPress(groupIdx, itemIdx)}
                activeOpacity={item.status === "unread" ? 0.6 : 1}
              >
                <View style={styles.notiIconWrapper}>
                  <Image
                    source={getNotificationIcon(item.icon, item.status)}
                    style={styles.notiIcon}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.notiTitle}>{item.title}</Text>
                  <Text style={styles.notiTime}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
  header: {
    marginBottom: 0,
    paddingTop: 0,
    top: 5,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 12,
  },
  tab: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 22,
    paddingVertical: 10,
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: "#E2F163",
  },
  tabText: {
    color: "#8E8EF3",
    fontSize: 16,
    fontWeight: "500",
  },
  tabTextActive: {
    color: "#000",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  groupLabel: {
    color: "#E2F163",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 8,
  },
  notiItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 32,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 14,
    gap: 16,
  },
  notiIconWrapper: {
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  notiIcon: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  notiTitle: {
    color: "#1C1C1E",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  notiTime: {
    color: "#8E8EF3",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Notification;
