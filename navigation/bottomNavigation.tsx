// screens
import List from "../screens/List";
import Filter from "../screens/Filter";
import NewItem from "../screens/NewItem";
import Search from "../screens/Search";
import Settings from "../screens/Settings";
import Details from "../screens/Details";

// colors
import colors from "../assets/colors/colors";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="List"
      activeColor={colors.green}
      inactiveColor={colors.black}
      barStyle={{ backgroundColor: "transparent" }}
    >
      <Tab.Screen
        name="Filter"
        component={Filter}
        options={{
          title: "Filter",
          tabBarLabel: "Filter",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="filter-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NewItem"
        component={NewItem}
        options={{
          title: "New Item",
          tabBarLabel: "New Item",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          title: "List",
          tabBarLabel: "List",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-square"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
