import React from "react";
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from "react-native";
import { ThemeColors } from "../theme/theme";
import { useAppTheme } from "../theme/useAppTheme";

interface Props extends Omit<ActivityIndicatorProps, "color"> {
  color?: ThemeColors;
}
export function ActivityIndicator({ color = "purpleBase", ...rest }: Props) {
  const { colors } = useAppTheme();

  return <RNActivityIndicator color={colors[color]} {...rest} />;
}
