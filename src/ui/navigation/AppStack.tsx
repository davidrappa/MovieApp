import { Stack } from "expo-router";
import theme from "../theme/theme";

export function AppStack() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.gray100 },
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
