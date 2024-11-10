import * as React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BottomBarTabs({atPage}) {
  const navigation = useNavigation(); 

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
          { borderWidth: atPage === 'Profile' ? 1 : 0 } // Aplicar borderWidth condicionalmente
        ]}>
          <Image source={require('../../../assets/user.png')} style={styles.profile}></Image>
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
    borderTopColor: '#adb5bd',
    borderTopWidth: 1,
    paddingTop: 15,
    paddingBottom: 15, 
    paddingLeft: 25, 
    paddingRight: 25, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
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
