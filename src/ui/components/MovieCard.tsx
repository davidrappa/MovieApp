import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ImageBackground } from "react-native";

import { Movie } from "@/src/domain/Movies/moviesTypes";
import { useFavoritesStore } from "@/src/infra/store/favoritesStore";
import { Link } from "expo-router";
import { Box, TouchableOpacityBox } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

const SCREEN_WIDTH = Dimensions.get("window").width;

const POSTER_WIDTH = SCREEN_WIDTH / 2 - 28;
const POSTER_HEIGHT = POSTER_WIDTH * (4 / 3);

interface MovieCardProps {
  item: Movie;
}

export function MovieCard({ item }: MovieCardProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  return (
    <Link push href={`/movie-details/${item.id}`} asChild>
      <TouchableOpacityBox borderRadius="s10">
        <ImageBackground
          source={{ uri: item.posterURL }}
          style={{
            width: SCREEN_WIDTH / 2 - 28,
            height: POSTER_HEIGHT,
            borderRadius: 10,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {isFavorite(item.id) && (
            <Box position="absolute" right={4} top={4} zIndex={3}>
              <TouchableOpacityBox
                onPress={() => toggleFavorite(item)}
                width={36}
                height={36}
                backgroundColor="gray300"
                borderRadius="s6"
                justifyContent="center"
                alignItems="center"
              >
                <Icon name="trash" size={20} color="purpleLight" />
              </TouchableOpacityBox>
            </Box>
          )}
          <LinearGradient
            style={{ width: "100%", height: "100%" }}
            colors={["transparent", "rgba(0,0,0,0.8)"]}
          >
            <Box justifyContent="flex-end" flex={1} padding="s12">
              <Text marginBottom="s4" variant="titleMD" color="gray700">
                {item.title}
              </Text>

              <Box flexDirection="row" alignItems="center" gap="s6">
                <Icon name="star" size={10} color="white" />
                <Text variant="textXS" color="gray600">
                  {item.rating}
                </Text>
                <Box
                  width={4}
                  height={4}
                  backgroundColor="gray600"
                  borderRadius="s6"
                />
                <Text color="gray600" variant="textXS">
                  {item.releaseYear}
                </Text>
              </Box>
            </Box>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacityBox>
    </Link>
  );
}
