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

  return (
    <Box flexGrow={1} flexShrink={1} backgroundColor="gray100" {...boxProps}>
      <Pressable onPress={focusInput}>
        {label && (
          <Text variant="textMD" marginBottom="s4">
            {label}
          </Text>
        )}
        <Box
          {...$textInputContainer}
          {...containerProps}
          backgroundColor="gray100"
        >
          {LeftComponent && (
            <Box justifyContent="center" mr="s16">
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
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
      </Pressable>
    </Box>
  );
}
