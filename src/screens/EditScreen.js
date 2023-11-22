import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const { state, editBlogPost } = useContext(Context);

    const blogId = navigation.getParam('id');
    const blogPost = state.find((b) => b.id === blogId);

    const handleSaveBlog = (id, title, content) => {
        editBlogPost(id, title, content);
    }

    return (
            <BlogPostForm 
                initialValues ={{title: blogPost.title, content: blogPost.content}} 
                onSubmit={(title, content) => {
                    handleSaveBlog(blogId, title, content);
                }}
            />
        )
}

export default EditScreen
