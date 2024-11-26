import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated } from "react-native";
import Icon from '@expo/vector-icons/Feather';
import Icon2 from '@expo/vector-icons/AntDesign';
import { useState, useRef, useEffect } from "react";
import CommentSection from '../CommentSection'
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { likePost, unLike } from "../../Services/postService";

export default function Post({post, profiles}) {
    const { auth } = useAuth();
    const { updatePost } = useUser();

    //const [isLiked, setIsLiked] = useState(false); 
    const [showComments, setShowComments] = useState(false); 
    const [tapCount, setTapCount] = useState(0); 

    // Handling likes
    const doILikeThis = post?.likes?.includes(auth.id);
    const [isLiked, setIsLiked] = useState(doILikeThis);
    const [likes, setLikes] = useState(post?.likes);

    // Who is the owner of this post?
    const profile = profiles?.find((profile) => profile._id == post.user._id);

    const scale = useRef(new Animated.Value(1)).current;

    const handleLike = () => {
        setIsLiked(prevState => !prevState); 
    }

    function likeUnLike() {
        if (isLiked) {
          setIsLiked(!isLiked);
          setLikes((prev) => prev.filter((id) => id !== auth.id));
          unLike(post, auth, updatePost);
        } else {
          setIsLiked(!isLiked);
          setLikes((prev) => [...prev, auth.id]);
          likePost(post, auth, updatePost);
        }
    }
    
      useEffect(() => {
        setIsLiked(doILikeThis);
        setLikes(post?.likes);
      }, [post]);
    
      useEffect(() => {}, [post?.likes]);

    const handleDoubleTap = () => {
        if (tapCount === 1) { //al hacer double tap
            //setIsLiked(prevState => !prevState); 
            likeUnLike();
            setTapCount(0); 

            //animación para el like 
            Animated.sequence([
                Animated.spring(scale, {
                    toValue: 1.5,  //el ícono agranda a este valor
                    friction: 3,   
                    useNativeDriver: true
                }),
                Animated.spring(scale, {
                    toValue: 1, //tamaño al que vuelve   
                    friction: 3,
                    useNativeDriver: true
                })
            ]).start();

        } else {
            setTapCount(1); //al hacer un tap
            setTimeout(() => setTapCount(0), 300); //se resetea el contador luego de determinado tiempo
        }
    };

    const handleComments = () => {
        setShowComments(prevState => !prevState);  
    }

    return (
        <View style={styles.post}>
            <View style={styles.topPost}>
                <View style={styles.imageAndUser}>
                    <Image source={profile?.profilePicture !== "" ? {uri: profile.profilePicture} : require('../../assets/user.png')} style={styles.userImage}/>
                    <Text style={styles.username}>{profile?.username}</Text>
                </View>

                <Icon name='more-horizontal' size={25}/>
            </View>
            
            <TouchableWithoutFeedback onPress={handleDoubleTap}>
                <Image 
                    source={{ uri: `http://172.20.10.7:3001/${post?.imageUrl}` }} 
                    style={styles.postImage}
                />
            </TouchableWithoutFeedback>
            
            <View style={styles.bottomPost}>
                <View style={styles.likeAndComments}>

                    <TouchableOpacity onPress={likeUnLike}>
                        <Animated.View style={{ transform: [{ scale }] }}>
                            <Icon2 
                                name={isLiked ? 'heart' : 'hearto'} 
                                size={30} 
                                color={isLiked ? 'red' : 'black'} 
                            />
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleComments}>
                        <Icon2 name='message1' size={27}/>
                    </TouchableOpacity>

                </View>

                <Text style={styles.boldText}>{likes?.length} likes</Text>

                <Text><Text style={styles.boldText}>{profile?.username}</Text> {post?.caption}</Text>
                {showComments && (
                    <CommentSection post={post}></CommentSection>
                )}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        backgroundColor: 'white',
        marginBottom: 30
    },
    topPost: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, 
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 50
    }, 
    imageAndUser: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }, 
    username: {
        fontSize: 16
    }, 
    postImage: {
        width: '100%', 
        aspectRatio: 1,     
        resizeMode: 'cover'
    }, 
    likeAndComments: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }, 
    bottomPost: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        gap: 10
    }, 
    boldText: {
        fontWeight: 'bold'
    }, 
    commentsSection: {
        marginTop: 5,
        gap: 4
    }
})