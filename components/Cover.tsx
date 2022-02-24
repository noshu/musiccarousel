import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
type props = {
  source: any;
  height: number;
  scale: {
    transform: {
      scale: number;
    }[];
  };
  borderRadius: number;
};
export const Cover: React.FC<props> = ({
  height,
  scale,
  borderRadius,
  source,
}) => {
  return (
    <View style={[styles.coverView, { height, borderRadius }]}>
      <Animated.Image style={[styles.cover, scale]} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  coverView: {
    marginTop: 10,
    width: "90%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});
