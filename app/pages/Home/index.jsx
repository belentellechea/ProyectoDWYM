import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import BottomBarTabs from '../../components/Bars/BottomBarTabs';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Homeeeee</Text>
      <BottomBarTabs atPage='Home' style={styles.bottombar}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});