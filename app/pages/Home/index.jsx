import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomBarTabs from '../../components/Bars/BottomBarTabs';
import TopBarTabs from '../../components/Bars/TopBarTabs';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBarTabs atPage='Home'/>
      <View style={styles.pageContent}>
        <Text>Homeeeee</Text>
      </View>
     
      <BottomBarTabs 
        atPage='Home' 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    marginTop: 45,
    marginLeft: 10, 
    marginRight: 10
  }
});