import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import TipCard from "../../components/TipCard/TipCard";
import { styles } from "./Style";
import { articlesService, Article } from "../../utils/articles.service";

const ITEMS_PER_PAGE = 10;

const ArticleAndTips = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const data = await articlesService.getArticles();
      console.log(data);
      
      setArticles(data);
      setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    } finally {
      setLoading(false);
    }
  };

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
    return articles.slice(startIndex, endIndex);
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((i) => i !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const navigateToArticleDetail = (id: string) => {
    navigation.navigate("ArticleDetail", { id });
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#8E8EF3" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Articles & Tips" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <FlatList
          data={getCurrentPageItems()}
          renderItem={({ item }) => (
            <TipCard
              key={item._id}
              title={item.name}
              description={item.description}
              image={{ uri: item.avatar.startsWith('http') ? item.avatar : `http://localhost:1200/uploads/${item.avatar}` }}
              isFavorite={favorites.includes(item._id)}
              onPress={() => navigateToArticleDetail(item._id)}
              onFavoritePress={() => toggleFavorite(item._id)}
            />
          )}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.tipGrid, { paddingBottom: 20 }]}
          style={{ paddingHorizontal: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
      <View style={styles.paginationContainer}>{renderPagination()}</View>
    </View>
  );
};

export default ArticleAndTips;
