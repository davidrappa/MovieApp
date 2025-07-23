import { Pressable } from "react-native";

import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";

import { FavoritesIcon } from "@/assets/icons/FavoritesIcon";
import { MovieIcon } from "@/assets/icons/MovieIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { ThemeColors } from "../theme/theme";
import { useAppTheme } from "../theme/useAppTheme";

export type IconBase = {
  color?: ThemeColors;
  size?: number;
};

export type IconProps = {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
};
export function Icon({
  name,
  color = "gray200",
  size = 24,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color] as ThemeColors} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color] as ThemeColors} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  favorites: FavoritesIcon,
  search: SearchIcon,
  movie: MovieIcon,
};

type IconType = typeof iconRegistry;
export type IconName = keyof IconType;
