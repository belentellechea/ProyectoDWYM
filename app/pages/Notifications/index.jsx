import { Text, View, StyleSheet, SafeAreaView } from "react-native"
import TopBarTabs from "../../components/Bars/TopBarTabs"
import BottomBarTabs from "../../components/Bars/BottomBarTabs"

export default function Notifications(){
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopBarTabs atPage='Notifications'/>
            <View style={styles.pageContent}>
                <Text>Notificationsssss</Text>
            </View>
            <BottomBarTabs atPage='Notifications' />
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