import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons as Icon } from '@expo/vector-icons';
import Notifications from '../../../pages/Notifications';

const TopTab = createMaterialTopTabNavigator();

export default function TopBarTabs() {
  function NotificationsScreen() {
    return <Notifications />;
  }

  function SettingsScreen() {
    return (
      <View style={styles.screenContainer}>
        <Text>Settings Screen</Text>
      </View>
    );
  }

  return (
    <TopTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor; 
          if (route.name === 'Settings') {
            iconName = focused ? 'heart' : 'heart-outline';
            iconColor = focused ? 'red' : 'black'
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
            iconColor = 'black'
          }
          return <Icon name={iconName} size={24} color={iconColor} />;
        },
        tabBarIndicatorStyle: { backgroundColor: 'black' },
      })}
    >
      <TopTab.Screen name="Settings" component={SettingsScreen} />
      <TopTab.Screen name="Notifications" component={NotificationsScreen} />
    </TopTab.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
