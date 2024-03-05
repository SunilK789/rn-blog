import React, { useState } from 'react'
import { Context } from '../context/BlogContext';
import { Button, StyleSheet, View } from 'react-native';
import { Input, Text } from '@rneui/themed';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
         <View>
            <Text style={styles.label}>Enter Title:</Text>

            <Input placeholder='title' style={styles.input} value={title} onChangeText = {(text)=> setTitle(text)}></Input>
            <Text style={styles.label}>Enter Content:</Text>
            <Input placeholder='content' style={styles.input} value={content} onChangeText = {(text)=> setContent(text)}></Input>

            <Button 
                title="Save Blog Post" 
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input:{
        // borderWidth: 1,
        // borderColor: 'black',
        // fontSize: 18,
        // marginBottom: 5
    },
    label:{
        margin: 10,
        fontSize: 16
    }
});


export default BlogPostForm
