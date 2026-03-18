import React, { useRef, useState } from "react";
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box, BoxProps } from "./Box";
import { Text } from "./Text";

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  boxProps?: BoxProps;
  containerProps?: BoxProps;
}
export function TextInput({
  label,
  RightComponent,
  LeftComponent,
  boxProps,
  containerProps,
  ...rnTextInputProps
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: "row",
    borderWidth: isFocused ? 2 : 1,
    borderColor: isFocused ? "purpleBase" : "gray300",
    padding: "s16",
    borderRadius: "s8",
  };

  const $textInputStyle: TextStyle = {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    color: colors.gray700,
    fontFamily: "NunitoSans",
    fontSize: 16,
    lineHeight: 24,
  };

  function focusInput() {
    inputRef.current?.focus();

    setIsFocused(true);
  }

  const accessibilityLabel =
    rnTextInputProps.accessibilityLabel ||
    label ||
    rnTextInputProps.placeholder;
  const accessibilityHint =
    rnTextInputProps.accessibilityHint || "Digite o texto no campo de entrada";

  return (
    <Box flexGrow={1} flexShrink={1} backgroundColor="gray100" {...boxProps}>
      <Pressable onPress={focusInput} accessibilityRole="none">
        {label && (
          <Text variant="textMD" marginBottom="s4" accessibilityRole="text">
            {label}
          </Text>
        )}
        <Box
          {...$textInputContainer}
          {...containerProps}
          backgroundColor="gray100"
          accessibilityElementsHidden={true}
          importantForAccessibility="no"
        >
          {LeftComponent && (
            <Box
              justifyContent="center"
              mr="s16"
              accessibilityElementsHidden={true}
              importantForAccessibility="no"
            >
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            placeholderTextColor={colors.gray500}
            style={$textInputStyle}
            accessibilityLabel={accessibilityLabel}
            accessibilityHint={accessibilityHint}
            accessibilityRole="search"
            accessibilityState={{
              disabled: rnTextInputProps.editable === false,
            }}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box
              justifyContent="center"
              ml="s16"
              accessibilityElementsHidden={true}
              importantForAccessibility="no"
            >
              {RightComponent}
            </Box>
          )}
        </Box>
      </Pressable>
    </Box>
  );
}
