import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import WorkoutCard from "../../components/WorkoutCard";
import { styles } from "./Style";

// Tạo mảng 50 items
const generateWorkoutData = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: `${index + 1}`,
    title: `Squat Exercise ${index + 1}`,
    duration: 12,
    calories: 120,
    image: require("../../assets/imgs/Workout1.png"),
  }));
};

const ITEMS_PER_PAGE = 10;
const workoutData = generateWorkoutData();
const totalPages = Math.ceil(workoutData.length / ITEMS_PER_PAGE);

const Recommendation = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      if (currentPage <= 3) {
        endPage = maxVisiblePages;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxVisiblePages + 1;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // Nút trang đầu
    if (startPage > 1) {
      pages.push(
        <TouchableOpacity
          key="1"
          style={[
            styles.pageButton,
            currentPage === 1 && styles.activePageButton,
          ]}
          onPress={() => setCurrentPage(1)}
        >
          <Text
            style={[
              styles.pageText,
              currentPage === 1 && styles.activePageText,
            ]}
          >
            1
          </Text>
        </TouchableOpacity>
      );
      if (startPage > 2) {
        pages.push(
          <Text key="startEllipsis" style={styles.ellipsis}>
            ...
          </Text>
        );
      }
    }

    // Các nút trang giữa
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.pageButton,
            currentPage === i && styles.activePageButton,
          ]}
          onPress={() => setCurrentPage(i)}
        >
          <Text
            style={[
              styles.pageText,
              currentPage === i && styles.activePageText,
            ]}
          >
            {i}
          </Text>
        </TouchableOpacity>
      );
    }

    // Nút trang cuối
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <Text key="endEllipsis" style={styles.ellipsis}>
            ...
          </Text>
        );
      }
      pages.push(
        <TouchableOpacity
          key={totalPages}
          style={[
            styles.pageButton,
            currentPage === totalPages && styles.activePageButton,
          ]}
          onPress={() => setCurrentPage(totalPages)}
        >
          <Text
            style={[
              styles.pageText,
              currentPage === totalPages && styles.activePageText,
            ]}
          >
            {totalPages}
          </Text>
        </TouchableOpacity>
      );
    }

    return pages;
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return workoutData.slice(startIndex, endIndex);
  };

  return (
    <View style={styles.container}>
      <Header title="Recommendations" onBack={() => navigation.goBack()} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.workoutGrid}>
          {getCurrentPageItems().map((workout) => (
            <WorkoutCard
              key={workout.id}
              title={workout.title}
              duration={workout.duration}
              calories={workout.calories}
              image={workout.image}
              onPress={() => {
                /* Xử lý khi click vào workout */
              }}
            />
          ))}
        </View>
      </ScrollView>

      {/* Pagination */}
      <View style={styles.paginationContainer}>{renderPagination()}</View>
    </View>
  );
};

export default Recommendation;
