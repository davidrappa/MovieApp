import { useMovieById } from "@/src/domain/Movies/useCases/useMovieById";
import { ActivityIndicator } from "@/src/ui/components/ActivityIndicator";
import { Box } from "@/src/ui/components/Box";
import { Screen } from "@/src/ui/components/Screen";
import { MovieDetailsHeader } from "@/src/ui/containers/movie-details/MovieDetailsHeader";
import { MovieDetailsInfo } from "@/src/ui/containers/movie-details/MovieDetailsInfo";
import { MovieDetailsOverview } from "@/src/ui/containers/movie-details/MovieDetailsOverview";
import { useLocalSearchParams } from "expo-router";
import { Fragment } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();

  const { data, isLoading } = useMovieById(Number(id));
  return (
    <Screen scrollable>
      <SafeAreaView style={{ flex: 1 }}>
        {isLoading && (
          <Box flex={1} alignItems="center" justifyContent="center">
            <ActivityIndicator />
          </Box>
        )}
        {!isLoading && data && (
          <Fragment>
            <MovieDetailsHeader backdropURL={data.backdropURL} />
            <MovieDetailsInfo
              title={data.title}
              duration={data.duration}
              rating={data.rating}
              releaseDate={data.releaseDate}
            />
            <MovieDetailsOverview overview={data.overview} />
          </Fragment>
        )}
      </SafeAreaView>
    </Screen>
  );
}
