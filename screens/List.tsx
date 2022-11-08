import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import { ListProps } from "../types";
import poppinsBlack from "../assets/fonts/Poppins-Black.ttf";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import templateData from "../assets/data/templateData";

const List: React.FC<ListProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <MaterialCommunityIcons
              name="menu"
              size={26}
              style={styles.menuIcon}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView>
          {/* Title */}
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Home</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
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
  title: {
    fontFamily: poppinsBlack,
    fontSize: 18,
  },
});

export default List;
