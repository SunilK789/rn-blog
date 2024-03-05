import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const ShowScreen = ({ navigation }) => {
  const blogId = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((b) => b.id === blogId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

/**
 * Returns the navigation options for the given screen.
 * @param {Object} navigation - The navigation object for the screen.
 * @returns {Object} The navigation options for the screen.
 */

ShowScreen.navigationOptions = ShowScreen.navigationOptions = ({
  navigation,
}) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
