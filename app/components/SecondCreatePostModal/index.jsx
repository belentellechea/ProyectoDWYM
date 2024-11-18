// import { View, Text, Modal, StyleSheet, Pressable, Image, TextInput } from "react-native";
// import Icon from '@expo/vector-icons/AntDesign';

// export default function SecondCreatePostModal ({visible2, setVisible2, image}) {
//     return (
//         <>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={visible2}
//             >
//                 <Pressable style={styles.centeredView}>
//                     <View style={styles.modalView}>
//                         <Pressable style={styles.closeButton} onPress={() => setVisible2(!visible2)}>
//                             <Icon name='close' size={20} />
//                         </Pressable>
//                         <Text style={styles.modalText}>Add a caption to your post</Text>
//                         <View style={styles.buttonContainer}>
//                            <Image 
//                             source={{ uri: image}}
//                             style={styles.image}
//                            />
//                            <TextInput 
//                                 placeholder='Enter your caption'
//                                 style={styles.input}
//                             />
//                         </View>
        
//                     </View>
//                 </Pressable>
//             </Modal>
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         gap: 35,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalText: {
//         textAlign: 'center',
//         fontWeight: 'bold', 
//         fontSize: 18
//     },
//     closeButton: {
//         alignSelf: 'flex-end'
//     }, 
//     buttonContainer: {
//         display: 'flex', 
//         flexDirection: 'row', 
//         justifyContent: 'space-around'
//     }, 
//     image: {
//         width: 200,
//         height: 200
//     }, 
//     input: {
//         backgroundColor: 'white',
//         borderRadius: 15, 
//         fontSize: 20,
//         padding: 10,
//         marginTop: 10,
//         marginBottom: 25,
//         fontSize: 20,
//         paddingRight: 40,
//         width: '100%'
//     }
// })