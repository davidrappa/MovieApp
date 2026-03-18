import { Movie } from "@/src/domain/Movies/moviesTypes";
import { useMoviesByQuery } from "@/src/domain/Movies/useCases/useMoviesByQuery";
import { useDebounce } from "@/src/infra/hooks/useAppDebounce";
import { Box } from "@/src/ui/components/Box";
import { EmptyList } from "@/src/ui/components/EmptyList";
import { Icon } from "@/src/ui/components/Icon";
import { MovieCard } from "@/src/ui/components/MovieCard";
import { Screen } from "@/src/ui/components/Screen";
import { Separator } from "@/src/ui/components/Separator";
import { TextInput } from "@/src/ui/components/TextInput";

import { TabHeader } from "@/src/ui/containers/TabHeader";
import { useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query);

  const { list, fetchNextPage } = useMoviesByQuery(
    debounceQuery.toLocaleLowerCase(),
  );

  return (
    <Screen>
      <SafeAreaView edges={["top"]}>
        <FlatList
          ListHeaderComponent={
            <Box marginBottom="s16">
              <TabHeader
                icon="search"
                title="Buscar"
                subtitle="Encontre filmes buscando pelo título"
              />
              <TextInput
                onChangeText={setQuery}
                value={query}
                LeftComponent={<Icon name="search" color="gray500" />}
                placeholder="Pesquisar filme"
              />
            </Box>
          }
          accessibilityRole="list"
          importantForAccessibility="no"
          showsVerticalScrollIndicator={false}
          data={list}
          ListEmptyComponent={
            <EmptyList
              subtitle="Nenhuma pesquisa realizada"
              containerProps={{ mt: "s48" }}
            />
          }
          numColumns={2}
          onEndReachedThreshold={0.2}
          onEndReached={fetchNextPage}
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
