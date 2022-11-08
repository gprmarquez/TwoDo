import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import templateData from "../../assets/data/templateData";

export default function Card() {
  const [items, setItem] = useState(templateData);

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <FlatList 
          data={items}
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 1,
    elevation: 3,
    // backgroundColor: #fff,
    shadowOffset: { width: 1, height: 1},
    // shadowColor: #fff,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
