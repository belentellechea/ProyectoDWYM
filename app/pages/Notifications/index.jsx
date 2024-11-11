import { Text, View, StyleSheet } from "react-native"
import TopBarTabs from "../../components/Bars/TopBarTabs"
import BottomBarTabs from "../../components/Bars/BottomBarTabs"

export default function Notifications(){
    return (
        <View>
            <TopBarTabs atPage='Notifications'/>
            <View style={styles.pageContent}>
                <Text>Notificationss</Text>
            </View>
            <BottomBarTabs atPage='Notifications'/>
        </View>
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