import React from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import WeeklyChallengeProgress from "../../components/WeeklyChallengeProgress";
import { styles } from "./Style";

const WeeklyChallenge = () => {
  const navigation = useNavigation();

  // Dữ liệu mẫu cho tuần hiện tại
  const currentWeekData = {
    weekNumber: 1,
    isCompleted: false,
    progressPercentage: 75,
    currentTargets: [
      { type: "Tập luyện", value: "5 buổi/tuần" },
      { type: "Calories", value: "2000 kcal/ngày" },
      { type: "Nước", value: "2L/ngày" },
    ],
    nextWeekTargets: [
      { type: "Tập luyện", value: "6 buổi/tuần" },
      { type: "Calories", value: "2200 kcal/ngày" },
      { type: "Nước", value: "2.5L/ngày" },
    ],
  };

  const handleAddNewTarget = () => {
    // Xử lý thêm mục tiêu mới
    console.log("Thêm mục tiêu mới");
  };

  return (
    <View style={styles.container}>
      <Header title="Thử thách hàng tuần" onBack={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <WeeklyChallengeProgress
          weekNumber={currentWeekData.weekNumber}
          isCompleted={currentWeekData.isCompleted}
          progressPercentage={currentWeekData.progressPercentage}
          currentTargets={currentWeekData.currentTargets}
          nextWeekTargets={currentWeekData.nextWeekTargets}
          onAddNewTarget={handleAddNewTarget}
        />
      </ScrollView>
    </View>
  );
};

export default WeeklyChallenge;
