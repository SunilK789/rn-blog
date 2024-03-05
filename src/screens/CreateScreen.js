import React, { useContext } from 'react'
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const CreateScreen = ({navigation}) => {
    const { addBlogPost} = useContext(Context);
    const handleSaveBlog = (title, content) => {
        addBlogPost(title, content, ()=> {
            navigation.navigate('Index');
        })
    }

    return <BlogPostForm 
                onSubmit={(title, content) => {
                    handleSaveBlog(title, content);
                }} 
            />
}

const styles = StyleSheet.create({
   
});

export default CreateScreen;
