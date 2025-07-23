import { AppStack } from "@/src/ui/navigation/AppStack";
import theme from "@/src/ui/theme/theme";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useFonts({
    NunitoSans: require("../assets/fonts/NunitoSans.ttf"),
    "Rajdhani-Bold": require("../assets/fonts/Rajdhani-Bold.ttf"),
    "Rajdhani-Light": require("../assets/fonts/Rajdhani-Light.ttf"),
    "Rajdhani-Medium": require("../assets/fonts/Rajdhani-Medium.ttf"),
    "Rajdhani-Regular": require("../assets/fonts/Rajdhani-Regular.ttf"),
    "Rajdhani-SemiBold": require("../assets/fonts/Rajdhani-SemiBold.ttf"),
    "RammettoOne-Regular": require("../assets/fonts/RammettoOne-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AppStack />
        <StatusBar style="light" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
