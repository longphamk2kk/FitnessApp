import api from './api';
import { Article } from '../types/articles';

export const articlesService = {
  async getArticles(name?: string): Promise<Article[]> {
    try {
      const params = name ? { name } : {};
      const response = await api.get('/articles', { params });
      console.log('Articles response:', response.data); // Debug log
      return response.data;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  },

  async getArticleById(id: string): Promise<Article> {
    try {
      const response = await api.get(`/articles/${id}`);
      console.log('Article detail response:', response.data); // Debug log
      return response.data;
    } catch (error) {
      console.error(`Error fetching article ${id}:`, error);
      throw error;
    }
  }
};
