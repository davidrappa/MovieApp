import { Dimensions, ImageBackground } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Box } from "../../components/Box";

const SCREEN_WIDTH = Dimensions.get("window").width;
const IMAGE_WIDTH = SCREEN_WIDTH - 40;
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.6;

interface MovieDetailsHeaderProps {
  backdropURL: string;
}

export function MovieDetailsHeader({ backdropURL }: MovieDetailsHeaderProps) {
  return (
    <Box paddingTop="s24" paddingBottom="s24">
      <ImageBackground
        resizeMode="cover"
        source={{ uri: backdropURL }}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          borderRadius: 10,
          overflow: "hidden",
          padding: 8,
        }}
      >
        <BackButton />
      </ImageBackground>
    </Box>
  );
}
