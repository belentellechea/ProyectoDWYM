import { View, StyleSheet, Image, Text } from 'react-native'
import {FlatGrid} from 'react-native-super-grid'

export default function PhotoGrid({photos}){
    return (
        <View style={styles.gridContainer}>
            {photos?.length > 0 ? (
                <FlatGrid 
                    itemDimension = {100}
                    data = {photos}
                    spacing = {5}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={({ item }) => (
                        <View style={styles.grid}>
                            <Image source={{ uri: item.uri }} style={styles.photo}/>
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
        width: 122,
        height: 122
    }, 
    grid: {
        justifyContent: 'center',
        alignItems: 'center' 
    }
})