import { SafeAreaView } from "react-native-safe-area-context";

import { Movie } from "@/src/domain/Movies/moviesTypes";
import { usePopularList } from "@/src/domain/Movies/useCases/usePopularList";
import { ActivityIndicator } from "@/src/ui/components/ActivityIndicator";
import { Box } from "@/src/ui/components/Box";
import { MovieCard } from "@/src/ui/components/MovieCard";
import { Screen } from "@/src/ui/components/Screen";
import { Separator } from "@/src/ui/components/Separator";
import { TabHeader } from "@/src/ui/containers/TabHeader";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function PopularScreen() {
  const { isLoading, list } = usePopularList();

  return (
    <Screen alignItems="center">
      <SafeAreaView edges={["top"]}>
        {isLoading && (
          <Box flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator />
          </Box>
        )}
        {!isLoading && (
          <FlatList
            importantForAccessibility="no"
            accessibilityRole="list"
            ListHeaderComponent={
              <TabHeader
                icon="movie"
                title="Populares"
                subtitle="Explore os filmes populares hoje e encontre coisas novas para assistir!"
              />
            }
            showsVerticalScrollIndicator={false}
            data={list}
            numColumns={2}
            onEndReachedThreshold={0.2}
            ItemSeparatorComponent={() => <Separator />}
            columnWrapperStyle={{ gap: 12, justifyContent: "center" }}
            contentContainerStyle={{ paddingBottom: 32 }}
            renderItem={({ item }: ListRenderItemInfo<Movie>) => (
              <MovieCard item={item} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </SafeAreaView>
    </Screen>
  );
}
