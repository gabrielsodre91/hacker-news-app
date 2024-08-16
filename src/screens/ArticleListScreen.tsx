import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ArticleListScreenProps } from '../types/navigation';

const ArticleListScreen: React.FC<ArticleListScreenProps> = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=mobile');
      const articles = response.data.hits;
      setArticles(articles);
      await AsyncStorage.setItem('articles', JSON.stringify(articles));
    } catch (error) {
      console.error('Error fetching articles:', error);
      const savedArticles = await AsyncStorage.getItem('articles');
      if (savedArticles) {
        setArticles(JSON.parse(savedArticles));
      }
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchArticles().finally(() => setRefreshing(false));
  };

  const renderItem = ({ item }) => (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity
          onPress={() => handleDelete(item.objectID)}
          style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      )}
    >
      <TouchableOpacity onPress={() => navigation.navigate('ArticleWebView', { articleUrl: item.url })}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.title || item.story_title}</Text>
          <Text style={styles.subtitle}>{item.author} - {item.created_at}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );

  const handleDelete = (id) => {
    const filteredArticles = articles.filter(article => article.objectID !== id);
    setArticles(filteredArticles);
    AsyncStorage.setItem('articles', JSON.stringify(filteredArticles));
  };

  return (
    <FlatList
      data={articles}
      keyExtractor={item => item.objectID}
      renderItem={renderItem}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ArticleListScreen;
