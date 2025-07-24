import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MovieCard } from "@/src/ui/components/MovieCard";
import { Screen } from "@/src/ui/components/Screen";
import { Separator } from "@/src/ui/components/Separator";
import { TabHeader } from "@/src/ui/containers/TabHeader";

export default function PopularScreen() {
  return (
    <Screen style={{ flex: 1, paddingHorizontal: 20 }}>
      <SafeAreaView edges={["top"]}>
        <FlatList
          ListHeaderComponent={
            <TabHeader
              icon="movie"
              title="Populares"
              subtitle="Explore os filmes populares hoje e encontre coisas novas para assistir!"
            />
          }
          showsVerticalScrollIndicator={false}
          data={[0, 1, 3, 5, 6, 7, 8, 9]}
          numColumns={2}
          ItemSeparatorComponent={() => <Separator />}
          columnWrapperStyle={{ gap: 12, justifyContent: "center" }}
          contentContainerStyle={{ paddingBottom: 32 }}
          renderItem={() => <MovieCard />}
          keyExtractor={(_, index) => index.toString()}
        />
      </SafeAreaView>
    </Screen>
  );
}
