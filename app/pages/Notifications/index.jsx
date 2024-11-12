import { Text, View, StyleSheet, SafeAreaView } from "react-native"
import TopBarTabs from "../../components/Bars/TopBarTabs"
import BottomBarTabs from "../../components/Bars/BottomBarTabs"
import { useState } from "react"
import CreatePostModal from "../../components/CreatePostModal"

export default function Notifications(){
    const [addVisible, setAddVisible] = useState(false); 

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopBarTabs 
                atPage='Notifications' 
                setAddVisible={setAddVisible}
                addVisible={addVisible}
            />
            <View style={styles.pageContent}>
                <Text>Notificationsssss</Text>
            </View>
            <BottomBarTabs atPage='Notifications' />
        <CreatePostModal 
            visible={addVisible}
            setVisible={setAddVisible}
        />
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