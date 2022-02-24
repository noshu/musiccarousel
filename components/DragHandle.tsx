import { Ionicons, Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
type props = {
  dragStyle: { height: number; opacity: number };
};
export const DragHandle: React.FC<props> = ({ dragStyle }) => {
  return (
    <Animated.View
      style={[
        {
          alignItems: "center",
          justifyContent: "flex-end",
        },
        dragStyle,
      ]}
    >
      <Ionicons name="md-musical-notes" size={24} color="#424449" />
      <Text style={styles.text}>Drag to listen</Text>
      <View style={styles.chevron}>
        <Entypo
          name="chevron-thin-down"
          style={{ backgroundColor: "#fff" }}
          size={18}
          color="#424449"
        />
      </View>
      <View style={styles.dotView}>
        <View style={styles.dots} />
        <View style={styles.dots} />
        <View style={styles.dots} />
        <View style={styles.dots} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dots: {
    height: 7,
    width: "100%",
    borderWidth: 2,
    borderColor: "#E1E1E1",
    borderStyle: "dotted",
    borderRadius: 1,
    marginTop: 3,
  },
  dotView: {
    width: "95%",
    paddingBottom: 4,
    overflow: "hidden",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative",
  },
  text: {
    fontSize: 14,
    color: "#424449",
    marginTop: 5,
    marginBottom: 10,
  },
  chevron: {
    position: "absolute",
    bottom: 32,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    zIndex: 1,
  },
});
