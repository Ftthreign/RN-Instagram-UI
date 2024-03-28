import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useColorScheme } from "../useColorScheme";

function TabBarIconOptional(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  color?: string;
  type?: string;
}) {
  return <Icon size={28} style={{ marginBottom: 0 }} {...props} />;
}

const Header = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/Instagram_text_logo.png")}
      />
      <TouchableOpacity />

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={{ paddingRight: 8 }}>
          <View style={styles.unreadBadge}></View>
          <TabBarIconOptional
            name="heart"
            type="feather"
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={
              colorScheme === "dark"
                ? require("../../assets/icons/message-circle.svg")
                : require("../../assets/icons/message.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    marginHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 12,
    height: 12,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
});

export default Header;
