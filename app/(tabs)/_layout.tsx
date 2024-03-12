import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { View } from "@/components/Themed";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIconOptional(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  color: string;
  type?: string;
}) {
  return <Icon size={28} style={{ marginBottom: 0 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    "Instagram-Title": require("../../assets/fonts/Instagram-Title.ttf"),
  });

  return (
    <Tabs
    // screenOptions={{
    //   tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    //   headerShown: useClientOnlyValue(false, true),
    // }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Instagram",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <TabBarIconOptional name="home" color={color} />
          ),
          headerRight: () => (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Icon
                      name="heart"
                      type="feather"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="star-o"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Search",
          tabBarShowLabel: false,

          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="addPost"
        options={{
          title: "Add Post",
          tabBarIcon: ({ color }) => (
            <TabBarIconOptional
              name="plus-square"
              color={color}
              type="feather"
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Reels"
        options={{
          title: "Reels",
          tabBarIcon: ({ color }) => (
            <TabBarIconOptional name="film" color={color} type="feather" />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: ({ color }) => (
            <TabBarIconOptional name="user" color={color} type="font-awesome" />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
