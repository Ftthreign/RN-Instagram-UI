import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { Icon } from "react-native-elements";
import { useColorScheme } from "../useColorScheme";

function TabBarIconOptional(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  color: string;
  type?: string;
}) {
  return <Icon size={28} style={{ marginBottom: 0 }} {...props} />;
}

interface IPost {
  username: string;
  image: string;
  likes: number;
  caption: string;
  commentsCount: number;
}

interface IProps {
  post: IPost;
}

const Posts: React.FC<IProps> = ({ post }) => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <View style={Styles.outerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{ uri: post.image }} style={Styles.profileImage} />
          <Text style={{ marginLeft: 5, fontWeight: "600" }}>
            {post.username}
          </Text>
        </View>
        <Text style={{ fontWeight: "700", fontSize: 18 }}>...</Text>
      </View>
      <View>
        <Image source={{ uri: post.image }} style={Styles.postImage} />
      </View>
      <View style={Styles.outerContainer}>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity style={{ marginRight: 15 }}>
            <TabBarIconOptional
              name="heart"
              type="feather"
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 15 }}>
            <TabBarIconOptional
              name="message-circle"
              type="feather"
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 15 }}>
            <TabBarIconOptional
              name="send"
              type="feather"
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ marginRight: 15 }}>
            <TabBarIconOptional
              name="bookmark"
              type="feather"
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginLeft: 14 }}>
        <Text style={{ fontWeight: "700" }}>{`${
          post.likes >= 1000
            ? (post.likes / 1000).toFixed(3)
            : post.likes.toString()
        } Likes`}</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 14, marginTop: 8 }}>
        <Text style={{ fontWeight: "700", marginRight: 10 }}>
          {post.username}
        </Text>
        <Text>{post.caption}</Text>
      </View>
      <View style={{ flexDirection: "row", margin: 14 }}>
        <TouchableOpacity>
          <Text
            style={{ color: "grey" }}
          >{`See ${post.commentsCount} Comments`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  postImage: {
    height: 360,
    width: 360,
    resizeMode: "cover",
  },
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    margin: 8,
    borderColor: "#ff8501",
    borderWidth: 1,
  },
});

export default Posts;
