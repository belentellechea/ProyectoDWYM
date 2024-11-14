import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, Image, ImageBackground} from 'react-native';
import TopBarTabs from '../../../components/Bars/TopBarTabs';
import { useState } from 'react';
import CreatePostModal from '../../../components/CreatePostModal';
import BottomBarTabs from '../../../components/Bars/BottomBarTabs';
import PhotoGrid from '../../../components/PhotoGrid';

export default function FriendProfile() {
    const [addVisible, setAddVisible] = useState(false);

    return (
        <SafeAreaView style={styles.background}>
            <TopBarTabs 
                atPage='FriendProfile'
                addVisible={addVisible}
                setAddVisible={setAddVisible}
            />
            <View style={styles.pageContent}>
            <View style={styles.profileInfo}>
                    <Image source={require('../../../assets/user.png')} style={styles.userImage}/>
                    <View style={styles.friendsPosts}>
                        <View>
                            <Text style={[styles.boldText, styles.centeredText]}>153</Text>
                            <Text style={[styles.text, styles.centeredText]}>posts</Text>
                        </View>
                        <View>
                            <Text style={[styles.boldText, styles.centeredText]}>209</Text>
                            <Text style={[styles.text, styles.centeredText]}>friends</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.infoEdit}>
                    <Text style={styles.boldText}>user_name</Text>
                    <Text style={styles.text}>user description</Text>
                    <Pressable style={styles.editButton}>
                        <Text style={styles.editText}>Follow</Text>
                    </Pressable>
                </View>
                <PhotoGrid 
                    photos = {[ 
                        { uri: 'https://i.pinimg.com/564x/61/2b/5a/612b5a6b17a8ac212aa71513597d3004.jpg' },
                        { uri: 'https://i.pinimg.com/564x/be/ed/e6/beede66da0162da5b5f5bc27504951cc.jpg' },
                        { uri: 'https://i.pinimg.com/564x/df/1e/a1/df1ea1ac5276ed555c88866f01fb717d.jpg'}, 
                        { uri: 'https://i.pinimg.com/564x/f7/bf/3b/f7bf3b501c0622a596a77193ef7296ce.jpg'},
                        { uri: 'https://i.pinimg.com/564x/28/db/86/28db8637659550a68d591d40b25c8f85.jpg'}, 
                        { uri: 'https://i.pinimg.com/564x/0a/0f/ff/0a0fff585b7738252d5c2492539ad42c.jpg'},
                        { uri: 'https://i.pinimg.com/564x/b8/0a/cd/b80acd70a2293cfec875a0f7f98ea73e.jpg'},
                        { uri: 'https://i.pinimg.com/564x/df/30/7f/df307f952ab9ffdc823f23cab70d07b0.jpg'},
                        { uri: 'https://i.pinimg.com/736x/55/d3/ad/55d3add0d3e6564c7dfc8d04291f626e.jpg'},
                        { uri: 'https://i.pinimg.com/736x/d6/a5/06/d6a5069a4f3ab7d19a69fca4f504fb90.jpg'},
                        { uri: 'https://i.pinimg.com/736x/00/f5/f5/00f5f5339efc77495fe21533dc208fd7.jpg'},
                        { uri: 'https://i.pinimg.com/736x/02/ce/7a/02ce7a6792f9ae85dfe17b8ee9b6a74e.jpg'},
                        { uri: 'https://i.pinimg.com/736x/b6/bd/91/b6bd91bd0957e4adf91c3457299565c5.jpg'}
                    ]}
                />
            </View>
            <CreatePostModal 
                visible={addVisible}
                setVisible={setAddVisible}
            />
            <BottomBarTabs atPage='FriendProfile'/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    pageContent: {
      flex: 1,
      marginTop: 70
    }, 
    userImage: {
        width: 100, 
        height: 100,
        borderRadius: 50
    }, 
    profileInfo: {
        marginLeft: 25,
        marginRight: 25,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'
    }, 
    friendsPosts: {
        display: 'flex', 
        flexDirection: 'row', 
        gap: 40,
        marginRight: 30
    }, 
    boldText: {
        fontWeight: 'bold',
        fontSize: 18
    }, 
    text: {
        fontSize: 18
    }, 
    centeredText: {
        alignSelf:'center'
    },
    editButton: {
        backgroundColor: '#cae9ff',
        marginTop: 30,
        padding: 8,
        borderRadius: 10
    }, 
    infoEdit: {
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25
    }, 
    editText: {
        alignSelf: 'center',
        fontSize: 16
    }
});