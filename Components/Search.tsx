import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, Button, } from 'react-native';
import { ApiResponse, FetchResponse, SerieObject, } from "../Types/types";
import React, { useState, useEffect, useContext, createContext, } from 'react';
// import styles from '../Styles/styles';

export default function Search(): JSX.Element {


    const [searchState, setSearchState] = useState<string>("");
    const inputHandler = () => {
        console.log(searchState);
    }

    return (

        <View style={styles.searchContainer}>
            <TextInput style={styles.searchTextInput} onChangeText={(inputText) => setSearchState(inputText)}></TextInput>
            <Pressable onPress={() => inputHandler()} style={styles.searchButton}>
                <Text>Search</Text>
            </Pressable>
        </View >
    );
}

// TYPES

// STYLES
const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    },
    searchTextInput: {
        flex: 4,
        backgroundColor: 'white',
        color: 'black',
        width: '90%',
        height: 40,
        padding: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
    },
    searchButton: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'red',
        color: 'black',
        height: 40,
        borderWidth: 1,

    }
});
