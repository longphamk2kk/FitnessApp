import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Header from "../../components/Header";
import { MaterialIcons } from "@expo/vector-icons";

const user = {
  name: "Madison",
  age: 28,
  weight: 75,
  height: 165,
  avatar: require("../../assets/imgs/fitness2.png"),
};

const activities = [
  {
    title: "Upper Body Workout",
    kcal: 120,
    date: "June 09",
    duration: "25 Mins",
    icon: "fitness-center",
  },
  {
    title: "Pull Out",
    kcal: 130,
    date: "April 15 - 4:00 PM",
    duration: "30 Mins",
    icon: "fitness-center",
  },
  {
    title: "Cardio Boxing",
    kcal: 110,
    date: "June 12",
    duration: "40 Mins",
    icon: "directions-run",
  },
  {
    title: "Yoga Morning",
    kcal: 80,
    date: "June 15",
    duration: "35 Mins",
    icon: "self-improvement",
  },
  {
    title: "HIIT Blast",
    kcal: 150,
    date: "June 18",
    duration: "20 Mins",
    icon: "whatshot",
  },
  {
    title: "Leg Day",
    kcal: 140,
    date: "June 20",
    duration: "50 Mins",
    icon: "directions-walk",
  },
  {
    title: "Stretch & Relax",
    kcal: 60,
    date: "June 22",
    duration: "30 Mins",
    icon: "accessibility-new",
  },
  {
    title: "Core Strength",
    kcal: 100,
    date: "June 25",
    duration: "45 Mins",
    icon: "fitness-center",
  },
  {
    title: "Full Body HIT",
    kcal: 135,
    date: "June 28",
    duration: "55 Mins",
    icon: "directions-run",
  },
  {
    title: "Restorative Yoga",
    kcal: 70,
    date: "June 30",
    duration: "60 Mins",
    icon: "self-improvement",
  },
];

const progressData = [
  { day: "Thu", steps: 3679, duration: "1hr40m" },
  { day: "Wen", steps: 5789, duration: "1hr20m" },
  { day: "Sat", steps: 1859, duration: "1hr10m" },
];

const monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ProgressTracking = () => {
  const [tab, setTab] = useState<"Workout" | "Charts">("Workout");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  const activitiesOfSelectedDay = activities.filter((act) => {
    const match = act.date.match(/(\w+) (\d+)/);
    if (!match) return false;
    const [_, monthStr, dayStr] = match;
    const monthIdx = monthsName.findIndex((m) => m.startsWith(monthStr));
    const actYear = new Date().getFullYear();
    return (
      parseInt(dayStr, 10) === selectedDay &&
      monthIdx === selectedMonth &&
      actYear === selectedYear
    );
  });

  const activityDays = activities
    .map((act) => {
      const match = act.date.match(/(\w+) (\d+)/);
      if (!match) return null;
      const [_, monthStr, dayStr] = match;
      const monthIdx = monthsName.findIndex((m) => m.startsWith(monthStr));
      const actYear = new Date().getFullYear();
      if (monthIdx === selectedMonth && actYear === selectedYear) {
        return parseInt(dayStr, 10);
      }
      return null;
    })
    .filter(Boolean);

  // Tính toán lịch dựa trên tháng/năm được chọn
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  // Số ô trống đầu tiên để ngày 1 rơi đúng thứ (chuẩn lịch quốc tế, Thứ 2 là cột đầu)
  const jsDay = new Date(selectedYear, selectedMonth, 1).getDay();
  const emptyDays = (jsDay + 6) % 7;
  const calendarDays = [
    ...Array(emptyDays).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <View style={styles.container}>
      <Header title="Progress Tracking" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Info */}
        <View style={styles.userCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.userName}>
              {user.name}{" "}
              <MaterialIcons name="female" size={18} color="#E2F163" />
            </Text>
            <Text style={styles.userSub}>Age: {user.age}</Text>
            <View style={styles.userStats}>
              <Text style={styles.userStat}>
                <Text style={styles.userStatValue}>{user.weight} Kg</Text>{" "}
                Weight
              </Text>
              <Text style={styles.userStat}>
                <Text style={styles.userStatValue}>{user.height} CM</Text>{" "}
                Height
              </Text>
            </View>
          </View>
          <Image source={user.avatar} style={styles.avatar} />
        </View>

        {/* Tabs */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tabBtn, tab === "Workout" && styles.tabBtnActive]}
            onPress={() => setTab("Workout")}
          >
            <Text
              style={[
                styles.tabText,
                tab === "Workout" && styles.tabTextActive,
              ]}
            >
              Workout Log
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabBtn, tab === "Charts" && styles.tabBtnActive]}
            onPress={() => setTab("Charts")}
          >
            <Text
              style={[styles.tabText, tab === "Charts" && styles.tabTextActive]}
            >
              Charts
            </Text>
          </TouchableOpacity>
        </View>

        {tab === "Workout" ? (
          <>
            {/* Bộ lọc ngày/tháng, calendar, activities */}
            <View style={styles.sectionTitleWrap}>
              <View style={styles.sectionDivider} />
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>Choose Date</Text>
                <TouchableOpacity
                  onPress={() => setShowMonthPicker(!showMonthPicker)}
                >
                  <Text style={styles.sectionSub}>
                    Month{" "}
                    <MaterialIcons
                      name="arrow-drop-down"
                      size={18}
                      color="#A594F9"
                    />
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionDivider} />
            </View>
            {/* Dropdown chọn tháng */}
            {showMonthPicker && (
              <View style={styles.monthDropdown}>
                {monthsName.map((month, idx) => (
                  <TouchableOpacity
                    key={month}
                    style={styles.monthDropdownItem}
                    onPress={() => {
                      setSelectedMonth(idx);
                      setShowMonthPicker(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.monthDropdownText,
                        selectedMonth === idx && styles.monthDropdownTextActive,
                      ]}
                    >
                      {month}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {/* Tên thứ */}
            <View style={styles.weekRowCustom}>
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d, i) => (
                <View key={d} style={styles.weekDayBox}>
                  <Text style={styles.weekDayText}>{d}</Text>
                </View>
              ))}
            </View>
            {/* Lịch */}
            <View style={styles.calendarBoxCustom}>
              {Array.from(
                { length: Math.ceil(calendarDays.length / 7) },
                (_, weekIdx) => {
                  const week = calendarDays.slice(weekIdx * 7, weekIdx * 7 + 7);
                  return (
                    <View key={weekIdx} style={styles.calendarRowCustom}>
                      {week.map((d, i) =>
                        d === null ? (
                          <View key={i} style={styles.dayBtnCustom} />
                        ) : (
                          <TouchableOpacity
                            key={i}
                            style={[
                              styles.dayBtnCustom,
                              selectedDay === d && styles.dayBtnActiveCustom,
                            ]}
                            onPress={() => setSelectedDay(d)}
                          >
                            <Text
                              style={[
                                styles.dayTextCustom,
                                selectedDay === d && styles.dayTextActiveCustom,
                              ]}
                            >
                              {d}
                            </Text>
                          </TouchableOpacity>
                        )
                      )}
                    </View>
                  );
                }
              )}
            </View>
            <View style={styles.activitiesSection}>
              <Text style={styles.activitiesTitle}>Activities</Text>
              {activitiesOfSelectedDay.length > 0 ? (
                activitiesOfSelectedDay.map((item, idx) => (
                  <View key={idx} style={styles.activityItem}>
                    <MaterialIcons
                      name={item.icon as any}
                      size={32}
                      color="#7B61FF"
                      style={styles.activityIcon}
                    />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.activityName}>{item.title}</Text>
                      <Text style={styles.activityDate}>{item.date}</Text>
                    </View>
                    <View style={styles.activityRight}>
                      <Text style={styles.activityKcal}>
                        🔥 {item.kcal} Kcal
                      </Text>
                      <Text style={styles.activityDuration}>
                        Duration {item.duration}
                      </Text>
                    </View>
                  </View>
                ))
              ) : (
                <Text
                  style={{
                    color: "#8E8E93",
                    textAlign: "center",
                    marginTop: 16,
                    fontSize: 16,
                  }}
                >
                  Không có hoạt động
                </Text>
              )}
            </View>
          </>
        ) : (
          <>
            <Text style={styles.sectionTitle}>My Progress</Text>
            <Text style={styles.sectionSub}>January 12th</Text>
            <View style={styles.chartBox}>
              {/* Chart cột đơn giản */}
              <View style={styles.chartRow}>
                {[170, 165, 168, 170].map((val, idx) => (
                  <View key={idx} style={styles.chartColWrap}>
                    <View style={[styles.chartColBg]}>
                      <View
                        style={[styles.chartCol, { height: (val - 150) * 2 }]}
                      />
                    </View>
                    <Text style={styles.chartColLabel}>
                      {["Jan", "Feb", "Mar", "Apr"][idx]}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            {progressData.map((item, idx) => (
              <View key={idx} style={styles.progressItem}>
                <Text style={styles.progressDay}>{item.day}</Text>
                <Text style={styles.progressSteps}>Steps {item.steps}</Text>
                <Text style={styles.progressDuration}>
                  Duration {item.duration}
                </Text>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  userCard: {
    backgroundColor: "#BBA3FF",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginBottom: 12,
  },
  userName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  userSub: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 8,
  },
  userStats: {
    flexDirection: "row",
    gap: 24,
  },
  userStat: {
    color: "#E2F163",
    fontSize: 14,
    marginRight: 16,
  },
  userStatValue: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    marginRight: 4,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  tabRow: {
    flexDirection: "row",
    backgroundColor: "#232325",
    borderRadius: 24,
    marginHorizontal: 20,
    marginBottom: 16,
    marginTop: 8,
    padding: 4,
  },
  tabBtn: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: "center",
  },
  tabBtnActive: {
    backgroundColor: "#E2F163",
  },
  tabText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  tabTextActive: {
    color: "#232325",
  },
  sectionTitleWrap: {
    marginHorizontal: 20,
    marginBottom: 8,
    alignItems: "flex-start",
  },
  sectionDivider: {
    height: 1,
    backgroundColor: "#A594F9",
    opacity: 0.3,
    marginVertical: 4,
  },
  sectionTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  sectionTitle: {
    color: "#E2F163",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "System",
  },
  sectionSub: {
    color: "#A594F9",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "System",
  },
  monthDropdown: {
    backgroundColor: "#232325",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#A594F9",
    flexDirection: "row",
    flexWrap: "wrap",
    zIndex: 10,
  },
  monthDropdownItem: {
    width: "33%",
    paddingVertical: 6,
    alignItems: "center",
    borderRadius: 6,
  },
  monthDropdownText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "System",
  },
  monthDropdownTextActive: {
    color: "#E2F163",
    fontWeight: "bold",
  },
  weekRowCustom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    width: "100%",
    alignSelf: "center",
  },
  weekDayBox: {
    backgroundColor: "#A594F9",
    borderRadius: 8,
    width: 36,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  weekDayText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: "System",
  },
  calendarBoxCustom: {
    backgroundColor: "#fff",
    borderRadius: 24,
    marginHorizontal: 8,
    paddingVertical: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#E2F163",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  calendarRowCustom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    width: "100%",
  },
  dayBtnCustom: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
    marginBottom: 2,
  },
  dayBtnActiveCustom: {
    backgroundColor: "#E2F163",
  },
  dayTextCustom: {
    color: "#A594F9",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "System",
  },
  dayTextActiveCustom: {
    color: "#232325",
    fontWeight: "bold",
  },
  activitiesSection: {
    marginHorizontal: 20,
    marginTop: 8,
  },
  activitiesTitle: {
    color: "#E2F163",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  activityItem: {
    backgroundColor: "#fff",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
  },
  activityIcon: {
    marginRight: 12,
  },
  activityName: {
    color: "#232325",
    fontWeight: "bold",
    fontSize: 16,
  },
  activityDate: {
    color: "#8E8E93",
    fontSize: 13,
  },
  activityRight: {
    alignItems: "flex-end",
    marginLeft: 12,
  },
  activityKcal: {
    color: "#7B61FF",
    fontWeight: "bold",
    fontSize: 14,
  },
  activityDuration: {
    color: "#7B61FF",
    fontWeight: "bold",
    fontSize: 14,
  },
  chartBox: {
    backgroundColor: "#232325",
    borderRadius: 18,
    marginHorizontal: 20,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#fff",
  },
  chartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 120,
    marginBottom: 8,
  },
  chartColWrap: {
    alignItems: "center",
    flex: 1,
  },
  chartColBg: {
    width: 18,
    height: 100,
    backgroundColor: "#C7C7CC",
    borderRadius: 8,
    justifyContent: "flex-end",
    overflow: "hidden",
    marginBottom: 4,
  },
  chartCol: {
    width: 18,
    backgroundColor: "#E2F163",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  chartColLabel: {
    color: "#fff",
    fontSize: 13,
    marginTop: 2,
    textAlign: "center",
  },
  progressItem: {
    backgroundColor: "#BBA3FF",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 14,
  },
  progressDay: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  progressSteps: {
    color: "#E2F163",
    fontWeight: "bold",
    fontSize: 16,
  },
  progressDuration: {
    color: "#fff",
    fontSize: 15,
  },
});

export default ProgressTracking;
