import React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';

const ArticleWebViewScreen = ({ route }) => {
  const { articleUrl } = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: articleUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ArticleWebViewScreen;
