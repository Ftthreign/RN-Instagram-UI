import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import usersData from "../data/users.json";
import { StyleSheet } from "react-native";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {usersData.stories.map((data, index) => (
          <>
            <Image style={Styles.storyImage} source={{ uri: data.image }} />
          </>
        ))}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});

export default Stories;
