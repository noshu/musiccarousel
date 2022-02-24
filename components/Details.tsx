import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
type props = {
  singer: string;
  song: string;
  rating: number;
  height: number;
};
export const Details: React.FC<props> = ({ singer, song, rating, height }) => {
  return (
    <View style={{ height, alignItems: "center", marginBottom: 5 }}>
      <Text style={styles.subtitle}>{singer}</Text>
      <Text style={styles.title}>{song}</Text>
      <View style={styles.ratingView}>
        <AntDesign
          name="star"
          size={18}
          color={rating > 0 ? "#FFB700" : "#FFDF9B"}
        />
        <AntDesign
          name="star"
          size={18}
          color={rating > 1 ? "#FFB700" : "#FFDF9B"}
        />
        <AntDesign
          name="star"
          size={18}
          color={rating > 2 ? "#FFB700" : "#FFDF9B"}
        />
        <AntDesign
          name="star"
          size={18}
          color={rating > 3 ? "#FFB700" : "#FFDF9B"}
        />
        <AntDesign
          name="star"
          size={18}
          color={rating > 4 ? "#FFB700" : "#FFDF9B"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ratingView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "50%",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#424449",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    color: "#424449",
    marginTop: 15,
  },
});
