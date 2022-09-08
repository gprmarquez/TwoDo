// from template 
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

// screens
import Home from './components/Home';
import List from './components/List';
import NewItem from './components/NewItem';
import Search from './components/Search';
import Settings from './components/Settings';

// colors
import colors from './assets/colors/colors';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// 
import React from 'react';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      activeColor={colors.blue}
      barStyle={{ backgroundColor: colors.green}}
    >
      <Tab.Screen 
        name='List' 
        component={List}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="filter-variant" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name='NewItem' 
        component={NewItem}
        options={{
          tabBarLabel: 'New Item',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="plus-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name='Home' 
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name='Search' 
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name='Settings' 
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
