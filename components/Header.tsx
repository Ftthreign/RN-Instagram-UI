import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

function TabBarIconOptional(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  color?: string;
  type?: string;
}) {
  return <Icon size={28} style={{ marginBottom: 0 }} {...props} />;
}

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/Instagram_logo.png")}
      />
      <TouchableOpacity />

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={{ paddingRight: 8 }}>
          <TabBarIconOptional name="heart" type="feather" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>7</Text>
          </View>
          <Image
            source={require("../assets/icons/message.png")}
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
    height: 50,
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
    width: 25,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
