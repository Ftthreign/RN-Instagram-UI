import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { users } from "../../data/users";
import { StyleSheet } from "react-native";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((data, index) => (
          <TouchableOpacity key={index}>
            <View style={{ alignItems: "center" }}>
              <Image style={Styles.storyImage} source={{ uri: data.image }} />
              <Text style={Styles.userText}>
                {data.user.length > 20
                  ? data.user.slice(0, 19).toLowerCase() + "..."
                  : data.user}
              </Text>
            </View>
          </TouchableOpacity>
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
    margin: 8,
    borderColor: "#d62976",
    borderWidth: 3,
  },
  userText: {
    fontSize: 12,
    justifyContent: "center",
  },
});

export default Stories;
