import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header() {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.menuWrapper}>
          <MaterialCommunityIcons
            name="menu"
            size={26}
            style={styles.menuIcon}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {},
})