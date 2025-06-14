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
import { articlesService } from "../../utils/articles.service";
import { Article } from "../../types/articles";

const ArticleAndTips = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const data = await articlesService.getArticles();
      console.log(data);
      
      setArticles(data);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((i) => i !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const navigateToArticleDetail = (id: string) => {
    // @ts-ignore - Navigation typing issue will be resolved in navigation setup
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
          data={articles}
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
          contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
    </View>
  );
};

export default ArticleAndTips;
