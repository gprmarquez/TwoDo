// from template 
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

// screens
import List from './screens/List';
import Filter from './screens/Filter';
import NewItem from './screens/NewItem';
import Search from './screens/Search';
import Settings from './screens/Settings';
import Details from './screens/Details';

// colors
import colors from './assets/colors/colors';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator();
// 
import React from 'react';

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      initialRouteName='List'
      activeColor={colors.green}
      inactiveColor={colors.black}
      barStyle={{ backgroundColor: 'transparent' }}
    >
      <Tab.Screen 
        name='Filter' 
        component={Filter}
        options={{
          tabBarLabel: 'Filter',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="filter-variant" color={color} size={26} />
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
        name='List' 
        component={List}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="format-list-bulleted-square" color={color} size={26} />
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
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='List' 
            component={TabNavigator} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name='Details' 
            component={Details} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
