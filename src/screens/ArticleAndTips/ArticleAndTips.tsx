import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import TipCard from "../../components/TipCard/TipCard";
import { styles } from "./Style";

const generateTipData = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: `${index + 1}`,
    title: `Tip ${index + 1}`,
    description: "This is a description of the tip.",
    image: require("../../assets/imgs/tip1.png"),
  }));
};

const ITEMS_PER_PAGE = 10;
const tipData = generateTipData();
const totalPages = Math.ceil(tipData.length / ITEMS_PER_PAGE);

const ArticleAndTips = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

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

    if (startPage > 1) {
      pages.push(
        <TouchableOpacity
          key="1"
          style={styles.pageButton}
          onPress={() => setCurrentPage(1)}
        >
          <Text style={styles.pageText}>1</Text>
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

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <TouchableOpacity
          key={i}
          style={styles.pageButton}
          onPress={() => setCurrentPage(i)}
        >
          <Text style={styles.pageText}>{i}</Text>
        </TouchableOpacity>
      );
    }

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
          style={styles.pageButton}
          onPress={() => setCurrentPage(totalPages)}
        >
          <Text style={styles.pageText}>{totalPages}</Text>
        </TouchableOpacity>
      );
    }

    return pages;
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return tipData.slice(startIndex, endIndex);
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((i) => i !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Articles & Tips" onBack={() => navigation.goBack()} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.tipGrid}>
          <FlatList
            data={getCurrentPageItems()}
            renderItem={({ item }) => (
              <TipCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                isFavorite={favorites.includes(item.id)}
                onPress={() => toggleFavorite(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20,
            }}
            style={{
              paddingHorizontal: 20,
            }}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            ListFooterComponent={() => <View style={{ height: 20 }} />}
          />
        </View>
      </ScrollView>

      <View style={styles.paginationContainer}>{renderPagination()}</View>
    </View>
  );
};

export default ArticleAndTips;
