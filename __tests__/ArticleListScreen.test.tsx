import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ArticleListScreen from '../src/screens/ArticleListScreen';

test('renders correctly and handles refresh', async () => {
  const { getByText, getByTestId } = render(<ArticleListScreen />);

  const titleElement = await getByText(/How to automatically create images/i);
  expect(titleElement).toBeTruthy();

  fireEvent(getByTestId('refresh-control'), 'refresh');
});
