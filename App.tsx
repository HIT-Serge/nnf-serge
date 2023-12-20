import { StatusBar } from 'expo-status-bar';

import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, } from 'react-native';
import { ApiResponse, FetchResponse, SerieObject, } from "./Types/types";
import React, { useState, useEffect, useContext, createContext, } from 'react';
import styles from './Styles/styles';
import type { PropsWithChildren } from 'react';
// import { POSTER_BASE_URL, TITLE } from '@env';
import { Home } from './Components/Home';


type SectionProps = PropsWithChildren<{
  title: string;

}>;

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: "#fff",
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.mainImageContainer}>
        <Image source={require('./Assets/netnietflixSmall_logo.png')}
          style={styles.mainImage} />
      </View>
      <Home />

    </SafeAreaView>
  );
}

export default App;

// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#a11',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
