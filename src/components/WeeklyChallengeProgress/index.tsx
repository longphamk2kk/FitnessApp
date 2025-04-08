import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./Style";

interface WeeklyChallengeProgressProps {
  weekNumber: number;
  isCompleted: boolean;
  progressPercentage: number;
  currentTargets: {
    type: string;
    value: string;
  }[];
  nextWeekTargets: {
    type: string;
    value: string;
  }[];
  onAddNewTarget: () => void;
}

const WeeklyChallengeProgress: React.FC<WeeklyChallengeProgressProps> = ({
  weekNumber,
  isCompleted,
  progressPercentage,
  currentTargets,
  nextWeekTargets,
  onAddNewTarget,
}) => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề tuần và trạng thái */}
      <View style={styles.weekHeader}>
        <Text style={styles.weekTitle}>Tuần {weekNumber}</Text>
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: isCompleted ? "#4CD964" : "#FF3B30" },
            ]}
          />
          <Text style={styles.statusText}>
            {isCompleted ? "Hoàn thành" : "Chưa hoàn thành"}
          </Text>
        </View>
      </View>

      {/* Thanh tiến độ */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Tiến độ hoàn thành</Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${progressPercentage}%`,
                backgroundColor:
                  progressPercentage >= 100 ? "#4CD964" : "#B3A0FF",
              },
            ]}
          />
        </View>
      </View>

      {/* Mục tiêu hiện tại */}
      <View style={styles.targetContainer}>
        <Text style={styles.targetTitle}>Mục tiêu tuần này</Text>
        {currentTargets.map((target, index) => (
          <View key={index} style={styles.targetItem}>
            <MaterialIcons
              name="track-changes"
              size={24}
              color="#E2F163"
              style={styles.targetIcon}
            />
            <Text style={styles.targetText}>
              {target.type}: {target.value}
            </Text>
          </View>
        ))}
      </View>

      {/* Mục tiêu tuần tới */}
      <View style={styles.targetContainer}>
        <Text style={styles.targetTitle}>Mục tiêu tuần tới</Text>
        {nextWeekTargets.map((target, index) => (
          <View key={index} style={styles.targetItem}>
            <MaterialIcons
              name="track-changes"
              size={24}
              color="#E2F163"
              style={styles.targetIcon}
            />
            <Text style={styles.targetText}>
              {target.type}: {target.value}
            </Text>
          </View>
        ))}
      </View>

      {/* Nút thêm mục tiêu mới */}
      <TouchableOpacity style={styles.addButton} onPress={onAddNewTarget}>
        <Text style={styles.addButtonText}>Thêm mục tiêu mới</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeeklyChallengeProgress;
