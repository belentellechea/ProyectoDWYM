import React from 'react';
import { SafeAreaView } from 'react-native';
import BottomBarTabs from '../../components/Bars/BottomBarTabs';
// import TopBarTabs from '../../components/Bars/TopBarTabs';

export default function MainPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopBarTabs /> */}
      <BottomBarTabs />
    </SafeAreaView>
  );
}
