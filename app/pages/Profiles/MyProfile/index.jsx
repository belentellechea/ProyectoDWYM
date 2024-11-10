import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, Image, ImageBackground} from 'react-native';
import BottomBarTabs from '../../../components/Bars/BottomBarTabs';

export default function Profile() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>My profileee</Text>
            <BottomBarTabs atPage='Profile' />
        </SafeAreaView>
    )
}