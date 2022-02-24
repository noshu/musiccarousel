import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Footer() {
  const chips = ["Indie Rock", "Pop", "Nazrul", "Robindro"];
  return (
    <View style={Styles.container}>
      <Text style={Styles.genre}>Indie Rock</Text>
      <View style={Styles.seperatorContainer}>
        <Text style={{ fontSize: 18 }}>Genres</Text>
        <View style={Styles.seperatorContainer} />
      </View>
      <ScrollView horizontal={true}>
        <View style={{ width: 30 }} />
        {chips.map((val, idx) => (
          <View
            key={idx.toString()}
            style={[
              Styles.chips,
              {
                backgroundColor: idx == 0 ? "#424449" : "#d9dad5",
              },
            ]}
          >
            <Text style={{ color: idx == 0 ? "#fff" : "#424449" }}>{val}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: { alignItems: "center" },
  genre: { fontSize: 24, fontWeight: "bold", color: "#424449" },
  seperatorContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 25,
  },
  seperator: {
    flex: 2,
    height: 1,
    borderBottomWidth: 1,
    borderColor: "#424449",
  },
  chips: {
    borderColor: "#424449",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginHorizontal: 5,
    marginVertical: 24,
  },
});
