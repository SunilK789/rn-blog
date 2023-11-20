import React from 'react'
import { Text, View } from 'react-native'
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {
    const blogId = navigation.getParam('id');

    return <BlogPostForm />
}

export default EditScreen
