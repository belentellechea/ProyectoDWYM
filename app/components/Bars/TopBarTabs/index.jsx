import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Icon2 from '@expo/vector-icons/Ionicons';
import Icon3 from '@expo/vector-icons/Entypo';
import { getUser } from '../../../Services/userService';
import { useUser } from '../../../Context/UserContext';
import { useAuth } from '../../../Context/AuthContext';

export default function TopBarTabs({atPage, setAddVisible = () => {}, setExitVisible = () => {}, addVisible = () => {} }) {
  const navigation = useNavigation(); 
  const [buttonAdd, setButtonAdd] = useState('add-circle'); 

  const { user } = useUser();
  const { auth } = useAuth();

  useEffect(() => {
    getUser(auth.id, auth.token);
  }, []);

  useEffect(() => {
    if (!addVisible) {
      setButtonAdd('add-circle-outline');  
    }
  }, [addVisible]);

  function goToNotifications(){
    navigation.navigate('Notifications'); 
  }

  function addButton(){
    setButtonAdd('add-circle'); 
    setAddVisible(true); 
    navigation.navigate('AddPost'); 
  }

  function exitButton(){
    setExitVisible(true); 
  }

  function goBack(){
    navigation.goBack()
  }

  return (
    <>
      <View style={styles.bar}>
        <View>
          {atPage === 'Home'|| atPage === 'Notifications' || atPage === 'AddPost' ? (
            <Image source={require('../../../assets/name.png')} style={styles.name} />
          ) : null}
          {atPage === 'Profile' ? (
            <Text style={styles.userName}>{ user.username ? user.username : "user_name"}</Text>
          ): null}
          {atPage === 'FriendProfile' ? (
              <Pressable onPress={goBack}>
                <Icon2 name='arrow-back' size={23}/>
              </Pressable> 
          ) : null}
        </View>
        <View >
          {atPage === 'Home' || atPage==='FriendProfile' || atPage==='AddPost' ? (
            <View style={styles.buttons}>
              <Pressable onPress={goToNotifications}>
                <Icon name='hearto' size={23}/>
              </Pressable>
              <Pressable onPress={addButton}>
                <Icon2 name={buttonAdd} size={25}/>
              </Pressable>
            </View>
          ) : null}
          {atPage === 'Profile' ? (
            <View style={styles.buttons}>
              <Pressable onPress={addButton}>
                <Icon2 name={buttonAdd} size={25}/>
              </Pressable>
              <Pressable onPress={exitButton}>
                <Icon3 name='menu' size={25}/>
              </Pressable>
          </View>
          ): null}
          {atPage === 'Notifications' ? (
            <View style={styles.buttons}>
              <Pressable onPress={goToNotifications}>
                <Icon name='heart' size={23}/>
              </Pressable>
              <Pressable onPress={addButton}>
                <Icon2 name={buttonAdd} size={25}/>
              </Pressable>
            </View>
          ) : null}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bar: {
    display: 'flex',
    height: '12%',
    position: 'absolute', 
    top: 0, 
    left: 0,
    right: 0,
    paddingTop: 50,
    paddingBottom: 15, 
    paddingLeft: 25, 
    paddingRight: 25, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: '#ffcad4', 
    alignItems: 'center'
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
  }, 
  name: {
    width: 150, 
    height: 30
  }, 
  userName: {
    fontSize: 20,
    fontWeight: 'bold'
  }, 
  buttons: {
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }

});
