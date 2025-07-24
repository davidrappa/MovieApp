import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Box, BoxProps } from "./Box";

export function Screen({
  children,
  scrollable = false,
  noPaddingsHorizontal = false,
  ...boxProps
}: PropsWithChildren &
  BoxProps & { scrollable?: boolean; noPaddingsHorizontal?: boolean }) {
  const Container = scrollable ? ScrollView : View;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Box
        flex={1}
        backgroundColor="gray100"
        paddingHorizontal={noPaddingsHorizontal ? undefined : "s20"}
        {...boxProps}
      >
        <Container
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {children}
        </Container>
      </Box>
    </KeyboardAvoidingView>
  );
}
