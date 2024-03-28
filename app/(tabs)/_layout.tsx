import React from "react";
import { Tabs } from "expo-router";
import { Icon } from "react-native-elements";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { users } from "@/data/users";
import { View, Image, TouchableOpacity } from "react-native";

function TabBarIconOptional(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  color: string;
  type?: string;
}) {
  return <Icon size={28} style={{ marginBottom: 0 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      {/* This is Home Screen Page */}
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: "Instagram",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIconOptional
              name="home"
              color={
                focused ? (colorScheme === "dark" ? "white" : "black") : "grey"
              }
            />
          ),
        }}
      />

      {/* This is Search bar Page */}
      <Tabs.Screen
        name="two"
        options={{
          title: "Search",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIconOptional
              name="search"
              color={
                focused ? (colorScheme === "dark" ? "white" : "black") : "grey"
              }
            />
          ),
        }}
      />

      {/* This is add Post Page */}
      <Tabs.Screen
        name="addPost"
        options={{
          title: "Add Post",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIconOptional
              name="plus-square"
              color={
                focused ? (colorScheme === "dark" ? "white" : "black") : "grey"
              }
              type="feather"
            />
          ),
        }}
      />

      {/* This is Reels Page */}
      <Tabs.Screen
        name="Reels"
        options={{
          title: "Reels",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIconOptional
              name="film"
              color={
                focused ? (colorScheme === "dark" ? "white" : "black") : "grey"
              }
              type="feather"
            />
          ),
        }}
      />

      {/* This is User Profile Page */}
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View>
              <TouchableOpacity>
                <Image
                  source={{ uri: users[0].image }}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
