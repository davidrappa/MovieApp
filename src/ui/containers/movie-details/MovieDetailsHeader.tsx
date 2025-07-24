import { Fragment } from "react";
import { Dimensions, Image, ImageBackground, StyleSheet } from "react-native";
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
    <Fragment>
      <Image
        source={{ uri: backdropURL }}
        style={{
          position: "absolute",
          width: SCREEN_WIDTH,
          height: SCREEN_WIDTH / 1.5,
          justifyContent: "flex-end",
        }}
        blurRadius={5}
      />
      <Box
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH / 1.5,
          },
        ]}
      />
      <Box paddingTop="s24" paddingBottom="s24" marginBottom="s24">
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
    </Fragment>
  );
}
