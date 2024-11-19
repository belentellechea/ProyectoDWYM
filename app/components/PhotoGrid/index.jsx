import { View, StyleSheet, Image, Text } from 'react-native'
import {FlatGrid} from 'react-native-super-grid'

export default function PhotoGrid({photos}){
    return (
        <View style={styles.gridContainer}>
            {photos?.length > 0 ? (
                <FlatGrid 
                    itemDimension = {100}
                    data = {photos}
                    spacing = {2}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={({ item }) => (
                        <View style={styles.grid}>
                            <Image source={{ uri: "http://172.20.10.7:3001/"+item.imageUrl }} style={styles.photo}/>
                        </View>
                    )}
                /> 
            ) : (
                <Text style={styles.noPhotos}>No posts yet</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    }, 
    contentContainer: {
        paddingBottom: 40, 
    },
    noPhotos: {
        fontSize: 15, 
        fontWeight: 'bold',
        color: 'grey'
    }, 
    photo: {
        width: 127,
        height: 127
    }, 
    grid: {
        justifyContent: 'center',
        alignItems: 'center' 
    }
})