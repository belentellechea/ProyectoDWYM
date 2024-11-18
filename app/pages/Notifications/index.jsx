import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import TopBarTabs from "../../components/Bars/TopBarTabs"
import BottomBarTabs from "../../components/Bars/BottomBarTabs"
import { useState } from "react"
import CreatePostModal from "../../components/CreatePostModal"
import Notification from "../../components/Notification"

export default function Notifications(){
    const [addVisible, setAddVisible] = useState(false); 

    return (
        <SafeAreaView style={styles.notificationsContainer}>
            <TopBarTabs 
                atPage='Notifications' 
                setAddVisible={setAddVisible}
                addVisible={addVisible}
            />
            <ScrollView style={styles.pageContent}>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
            </ScrollView>
            <BottomBarTabs atPage='Notifications' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    notificationsContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    pageContent: {
        flex: 1,
        marginTop: 45,
        marginLeft: 10, 
        marginRight: 10,
        marginBottom: 30
    }
});