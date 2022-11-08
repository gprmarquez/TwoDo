import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ListProps } from "../types";
import colors from "../assets/colors/colors";
import Card from "../components/content/TaskCard";
import Header from "../components/header";
import poppinsBlack from "../assets/fonts/Poppins-Black.ttf";

const List: React.FC<ListProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
        {/* Header */}
      <Header />
        {/* Title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Home</Text>
          {/* This is where the card component would go */}
          <Card></Card>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.backgroundBlue,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {},
});

export default List;
