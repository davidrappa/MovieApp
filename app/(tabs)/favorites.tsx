import { Movie } from "@/src/domain/Movies/moviesTypes";
import { useFavoritesStore } from "@/src/infra/store/favoritesStore";
import { EmptyList } from "@/src/ui/components/EmptyList";
import { MovieCard } from "@/src/ui/components/MovieCard";
import { Screen } from "@/src/ui/components/Screen";
import { Separator } from "@/src/ui/components/Separator";
import { TabHeader } from "@/src/ui/containers/TabHeader";
import { FlatList, ListRenderItemInfo } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function FavoritesScreen() {
  const { favorites } = useFavoritesStore();
  return (
    <Screen>
      <SafeAreaView edges={["top"]}>
        <FlatList
          ListHeaderComponent={
            <TabHeader
              icon="favorites"
              title="Favoritos"
              subtitle="Sua lista de filmes salvos"
            />
          }
          accessibilityRole="list"
          importantForAccessibility="no"
          showsVerticalScrollIndicator={false}
          data={favorites}
          ListEmptyComponent={
            <EmptyList
              title="Nenhum filme salvo"
              subtitle={`Encontre seus filmes favoritos\n e adicione à sua lista`}
              containerProps={{ mt: "s48" }}
            />
          }
          numColumns={2}
          bounces={favorites.length > 4}
          ItemSeparatorComponent={() => <Separator />}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ paddingBottom: 32 }}
          renderItem={({ item }: ListRenderItemInfo<Movie>) => (
            <MovieCard item={item} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </SafeAreaView>
    </Screen>
  );
}
