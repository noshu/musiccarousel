import React from "react";
import { StyleSheet, View } from "react-native";
import { Cover } from "../components/Cover";
import { Details } from "../components/Details";
import { DragHandle } from "../components/DragHandle";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { songType } from "../constants/data";
type props = {
  index: number;
  scrollX: SharedValue<number>;
  item: songType | any;
  cardH: number;
  cardW: number;
};
export default function Card({ index, item, scrollX, cardH, cardW }: props) {
  const coverHeight = cardH * 0.45;
  const detailsHeight = cardH * 0.2;
  const dragHandleHeight = cardH * 0.3;
  const inputRange = [
    (index - 2) * cardW,
    (index - 1) * cardW,
    index * cardW,
    (index + 1) * cardW,
    (index + 2) * cardW,
  ];
  const dragStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollX.value, inputRange, [
        0,
        0,
        dragHandleHeight,
        0,
        0,
      ]),
      opacity: interpolate(scrollX.value, inputRange, [-1, -1, 1, -1, -1]),
    };
  });
  const cardStyle = useAnimatedStyle(() => {
    return {
      elevation: interpolate(scrollX.value, inputRange, [0, 0, 12, 0, 0]),
    };
  });
  const scale = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollX.value, inputRange, [2, 2, 1, 2, 2]),
        },
      ],
    };
  });
  return (
    <View
      style={{
        padding: 12,
        width: cardW,
        backgroundColor: "#d9dad5",
      }}
    >
      <Animated.View style={[styles.card, cardStyle]}>
        <Cover
          height={coverHeight}
          source={item.cover}
          scale={scale}
          borderRadius={24}
        />
        <Details
          height={detailsHeight}
          rating={item.rating}
          singer={item.artist}
          song={item.title}
        />
        <DragHandle dragStyle={dragStyle} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 25,
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
});
