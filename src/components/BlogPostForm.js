import React, { useState } from 'react'
import { Context } from '../context/BlogContext';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const BlogPostForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
         <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText = {(text)=> setTitle(text)}></TextInput>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText = {(text)=> setContent(text)}></TextInput>

            <Button 
                title="Save Blog Post" 
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    label:{
        marginBottom: 5,
        fontSize: 20
    }
});


export default BlogPostForm
