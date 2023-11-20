import React, { useContext, useState } from 'react'
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Text,View } from 'react-native'
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
     const {addBlogPost} = useContext(Context);

    const handleSaveBlogPost = () => {
        addBlogPost(title, content, () => {
            navigation.navigate("Index");
        });
        
    }

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText = {(text)=> setTitle(text)}></TextInput>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText = {(text)=> setContent(text)}></TextInput>

      <Button title="Add Blog Post" onPress = {handleSaveBlogPost} />
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

export default CreateScreen;
