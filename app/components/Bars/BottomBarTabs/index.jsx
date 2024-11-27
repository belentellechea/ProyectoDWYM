import * as React from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getUser } from '../../../Services/userService';
import { useUser } from '../../../Context/UserContext';
import { useAuth } from '../../../Context/AuthContext';
import { useEffect } from 'react';

export default function BottomBarTabs({atPage}) {
  const navigation = useNavigation(); 

  const { user } = useUser();
  const { auth } = useAuth();

  useEffect(() => {
    getUser(auth.id, auth.token);
  }, []);

  function goToHome(){
    navigation.navigate('Home'); 
  }

  function goToProfile(){
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.bar}>
      <Pressable onPress={goToHome}>
        <Icon size={30} name={atPage ==='Home' ? 'home' : 'home-outline'}/>
      </Pressable>
      <Pressable onPress={goToProfile}>
        <View style={[
          styles.profileContainer, 
          { borderWidth: atPage === 'Profile' ? 1 : 0 } 
        ]}>
          <Image source={user.profilePicture ? {uri: user?.profilePicture} : require('../../../assets/user.png')} style={styles.profile}></Image>
        </View>
        
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    display: 'flex',
    height: '9%',
    position: 'absolute', 
    bottom: 0, 
    left: 0,
    right: 0,
    paddingTop: 15,
    paddingBottom: 15, 
    paddingLeft: 25, 
    paddingRight: 25, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: '#ffcad4'
  }, 
  profileContainer: {
    borderRadius: 50,
    borderColor: 'black', 
    padding: 3,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 50, 
  }

});
