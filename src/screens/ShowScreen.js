import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Context } from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
    const blogId = navigation.getParam('id');
    const {state} = useContext(Context);
    const blogPost = state.find((b) => b.id === blogId);

    return (
        <View>
        <Text>{blogPost.title}</Text>
        </View>
    )
}

export default ShowScreen;
