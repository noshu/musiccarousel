import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import CardListScreen from "./screens/CardListScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <CardListScreen />
      <StatusBar />
    </SafeAreaProvider>
  );
}
