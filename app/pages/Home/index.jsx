import {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomBarTabs from '../../components/Bars/BottomBarTabs';
import TopBarTabs from '../../components/Bars/TopBarTabs';
import PostContainer from '../../components/PostContainer';

export default function Home() {
  const [addVisible, setAddVisible] = useState(false); 

  useEffect(() => {
    console.log("estoy en home");
  }, []);

  return (
    <SafeAreaView style={styles.homeContainer}>
      <TopBarTabs 
        atPage='Home' 
        setAddVisible={setAddVisible} 
        addVisible={addVisible}
      />
      <View style={styles.pageContent}>
        <PostContainer></PostContainer>
      </View>
      <BottomBarTabs 
        atPage='Home' 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  pageContent: {
    flex: 1,
    marginTop: 45,
    marginBottom: 35
  }
});