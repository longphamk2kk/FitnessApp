import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import { articlesService, Article } from "../../utils/articles.service";
import { styles } from "./Style";

const ArticleDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: string };
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleDetail();
  }, [id]);

  const fetchArticleDetail = async () => {
    try {
      setLoading(true);
      const data = await articlesService.getArticleById(id);
      setArticle(data);
    } catch (error) {
      console.error("Failed to fetch article details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#8E8EF3" />
      </View>
    );
  }

  if (!article) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={styles.errorText}>Article not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={article.name} onBack={() => navigation.goBack()} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Image 
          source={{ uri: article.avatar.startsWith('http') ? article.avatar : `http://localhost:1200/uploads/${article.avatar}` }} 
          style={styles.articleImage} 
          resizeMode="cover"
        />
        <Text style={styles.title}>{article.name}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.contentText}>{article.content}</Text>
      </ScrollView>
    </View>
  );
};

export default ArticleDetail;
