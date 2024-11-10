import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons as Icon } from '@expo/vector-icons';
import MyProfile from "../../../pages/Profiles/MyProfile";
import Feed from '../../../pages/Feed';

const BottomTab = createBottomTabNavigator();

export default function BottomBarTabs() {
    function FeedScreen() {
      return <Feed />;
    }
    
    function ProfileScreen() {
      return <MyProfile />;
    }
      
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={24} color={focused ? 'black' : 'grey'} />;
        },
        headerShown: false
      })}
    >
      <BottomTab.Screen name="Feed" component={FeedScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  
});
