import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import TopBarTabs from '../../components/Bars/TopBarTabs';

export default function Feed() {
  return (
    <>
      {/* <View>
        <View style={styles.bar}>
          <Text style={styles.title}>Fakestagram</Text>
          <TopBarTabs> </TopBarTabs>
        </View>
      </View> */} 
      <TopBarTabs> </TopBarTabs>
      <Text>My feed</Text>
    </>
  );
}

const styles = StyleSheet.create({
  bar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});