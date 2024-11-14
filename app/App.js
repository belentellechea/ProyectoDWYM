import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/pages/Login';
import Register from '../app/pages/Register';
import Home from './pages/Home';
import MyProfile from '../app/pages/Profiles/MyProfile';
import FriendProfile from '../app/pages/Profiles/FriendProfile';
import Notifications from './pages/Notifications';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="FriendProfile"
          component={FriendProfile}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="Profile" 
          component={MyProfile}
          options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
          name="Notifications" 
          component={Notifications}
          options={{ headerShown: false}} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
