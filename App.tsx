import 'react-native-gesture-handler';
import React from 'react';
import PushNotification from 'react-native-push-notification';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ArticleListScreen from './src/screens/ArticleListScreen';
import ArticleWebViewScreen from './src/screens/ArticleWebViewScreen';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notification from './src/interfaces/notification';
import Article from './src/interfaces/article';

PushNotification.configure({
  onNotification: function (notification: Notification) {
    console.log("NOTIFICATION:", notification);
  },
  requestPermissions: true,
});

const triggerNotification = (article: Article) => {
  PushNotification.localNotification({
    title: "New Article Available",
    message: article.title || article.story_title,
  });
};

const checkForNewArticles = async () => {
  const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=mobile');
  const articles = response.data.hits;

  const latestArticle = articles[0];
  const savedArticles = await AsyncStorage.getItem('articles');
  const savedArticlesParsed = savedArticles ? JSON.parse(savedArticles) : [];

  if (!savedArticlesParsed.some((article: Article) => article.objectID === latestArticle.objectID)) {
    triggerNotification(latestArticle);
    await AsyncStorage.setItem('articles', JSON.stringify(articles));
  }
};

setInterval(checkForNewArticles, 300000);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Articles">
        <Stack.Screen name="Articles" component={ArticleListScreen} />
        <Stack.Screen name="ArticleWebView" component={ArticleWebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
