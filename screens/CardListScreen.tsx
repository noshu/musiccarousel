import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Card from "../components/Card";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Layout from "../constants/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { songs, songType } from "../constants/data";
const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
export default function CardListScreen() {
  const cardH = Layout.window.height * 0.65;
  const cardW = Layout.window.width * 0.7;
  const spacerSize = (Layout.window.width - cardW) / 2;
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX.value = contentOffset.x;
    },
  });
  return (
    <View style={styles.container}>
      <Header />
      <AnimatedFlatlist
        horizontal={true}
        data={songs}
        snapToInterval={cardW}
        decelerationRate={0.98}
        disableIntervalMomentum={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        onScroll={scrollHandler}
        ListHeaderComponent={() => <View />}
        ListFooterComponent={() => <View />}
        ListHeaderComponentStyle={{
          backgroundColor: "#d9dad5",
          width: spacerSize,
        }}
        ListFooterComponentStyle={{
          backgroundColor: "#d9dad5",
          width: spacerSize,
        }}
        // don't use index as a key :P
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ index, item }) => {
          return <Card {...{ index, item, scrollX, cardH, cardW }} />;
        }}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#d9dad5",
  },
});
