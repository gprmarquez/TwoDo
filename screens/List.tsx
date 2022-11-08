import React from "react";
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import { ListProps } from "../types";
import poppinsBlack from '../assets/fonts/Poppins-Black.ttf'

const List: React.FC<ListProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <SafeAreaView>
               
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.backgroundBlue
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontFamily: poppinsBlack,
        fontSize: 18
    },
});

export default List;