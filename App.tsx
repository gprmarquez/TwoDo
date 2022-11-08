import React from "react";

// from template
import useCachedResources from "./hooks/useCachedResources";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/bottomNavigation";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
}
