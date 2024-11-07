import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../app/pages/Login';
import Register from '../app/pages/Register';
import Home from '../app/pages/Home';
import MyProfile from '../app/pages/Profiles/MyProfile';
import FriendProfile from '../app/pages/Profiles/FriendProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="FriendProfile"
          component={FriendProfile}
        />
        <Stack.Screen 
          name="Profile" 
          component={MyProfile} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


