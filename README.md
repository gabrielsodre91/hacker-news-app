# Hacker News Mobile App

This is a React Native mobile application that fetches and displays articles from Hacker News, with functionalities for offline access, article management, and push notifications.

## Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Running Unit Tests](#running-unit-tests)
- [Libraries Used](#libraries-used)
- [Screenshots](#screenshots)

## Features

- **Data Fetching**: Fetches the latest articles from the Hacker News API filtered by mobile-related topics.
- **Offline Access**: Articles are cached locally, allowing offline access.
- **Article Management**: Swipe to delete articles from the list.
- **Favorites**: Mark articles as favorites and access them from a separate screen.
- **Push Notifications**: Receive notifications for new articles based on your preferences.
- **Article Viewing**: View articles within the app using a built-in web view.

## Setup Instructions

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/gabrielsodre91/hacker-news-app.git
    cd HackerNewsApp
    ```

2. **Install Dependencies**:

    ```bash
    yarn install
    ```

3. **Install Pods for iOS**:

    Navigate to the `ios` directory and run:

    ```bash
    cd ios
    pod install
    cd ..
    ```

4. **Run the Metro Bundler**:

    ```bash
    yarn start
    ```

5. **Run the Application**:

    - **iOS**: 
      ```bash
      yarn ios
      ```
    - **Android**:
      ```bash
      yarn android
      ```

## Running Unit Tests

This project includes unit tests using Jest and React Native Testing Library.

1. **Run the Tests**:

    ```bash
    yarn test
    ```

2. **View Test Coverage**:

    ```bash
    yarn test --coverage
    ```

## Libraries Used

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [React Native WebView](https://github.com/react-native-webview/react-native-webview)
- [React Native Push Notification](https://github.com/zo0r/react-native-push-notification)
- [Jest](https://jestjs.io/) & [React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/)

## Screenshots
![image](https://github.com/user-attachments/assets/5f7950f1-89db-468f-8fe9-b8f47ebac98f)

![image](https://github.com/user-attachments/assets/df70ccdf-cb24-4ada-873c-469f3b24f61f)

![image](https://github.com/user-attachments/assets/bf68e3f7-f3d6-4d62-83c4-c271ab87a5d3)
