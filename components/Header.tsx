import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Header() {
  return (
    <View style={Styles.container}>
      <View style={Styles.menuContainer}>
        <View style={Styles.menu}>
          <Entypo name="dots-three-vertical" size={28} color="#424449" />
          <Text>Menu</Text>
        </View>
      </View>
      <View style={Styles.musicIcon}>
        <MaterialCommunityIcons
          name="music-circle-outline"
          size={42}
          color="#424449"
        />
      </View>
      <View style={Styles.userIcon}>
        <FontAwesome5 name="user-circle" size={32} color="#424449" />
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 60,
    marginBottom: 20,
  },
  text: {
    color: "#424449",
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  musicIcon: { flex: 3, alignItems: "center" },
  userIcon: { flex: 1, alignItems: "center" },
});
