import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ImageBackground } from "react-native";

import { Box } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

const MOVIE_URI =
  "https://ingresso-a.akamaihd.net/prd/img/movie/lilo-e-stitch/67b31f6d-e938-4cfe-a7dc-78a0a17c86e4.webp";

const SCREEN_WIDTH = Dimensions.get("window").width;

const POSTER_WIDTH = SCREEN_WIDTH / 2 - 28;
const POSTER_HEIGHT = POSTER_WIDTH * (4 / 3);

export function MovieCard() {
  return (
    <Box borderRadius="s10">
      <ImageBackground
        source={{ uri: MOVIE_URI }}
        style={{
          width: SCREEN_WIDTH / 2 - 28,
          height: POSTER_HEIGHT,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <LinearGradient
          style={{ width: "100%", height: "100%" }}
          colors={["transparent", "rgba(0,0,0,0.8)"]}
        >
          <Box justifyContent="flex-end" flex={1} padding="s12">
            <Text marginBottom="s4" variant="titleMD" color="gray700">
              Title
            </Text>

            <Box flexDirection="row" alignItems="center" gap="s6">
              <Icon name="star" size={10} color="white" />
              <Text variant="textXS" color="gray600">
                0,0
              </Text>
              <Box
                width={4}
                height={4}
                backgroundColor="gray600"
                borderRadius="s6"
              />
              <Text color="gray600" variant="textXS">
                AAAA
              </Text>
            </Box>
          </Box>
        </LinearGradient>
      </ImageBackground>
    </Box>
  );
}
