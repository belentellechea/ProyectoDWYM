import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, Image, ImageBackground} from 'react-native';
import BottomBarTabs from '../../../components/Bars/BottomBarTabs';
import TopBarTabs from '../../../components/Bars/TopBarTabs';

export default function Profile() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopBarTabs atPage='Profile'/>
            <View style={styles.pageContent}>
                <Text>My profileee</Text>
            </View>
            <BottomBarTabs atPage='Profile' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pageContent: {
      flex: 1,
      marginTop: 45,
      marginLeft: 10, 
      marginRight: 10
    }
});