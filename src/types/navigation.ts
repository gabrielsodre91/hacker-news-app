import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Articles: undefined;
  ArticleWebView: { articleUrl: string };
};

type ArticleListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Articles'>;

export type ArticleListScreenProps = {
  navigation: ArticleListScreenNavigationProp;
};