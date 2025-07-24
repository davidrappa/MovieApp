import { EmptyList } from "@/src/ui/components/EmptyList";
import { Screen } from "@/src/ui/components/Screen";
import { TabHeader } from "@/src/ui/containers/TabHeader";

import { SafeAreaView } from "react-native-safe-area-context";

export default function FavoritesScreen() {
  return (
    <Screen>
      <SafeAreaView>
        <TabHeader
          icon="favorites"
          title="Favoritos"
          subtitle="Sua lista de filmes salvos"
        />
        <EmptyList
          title="Nenhum filme salvo"
          subtitle={`Encontre seus filmes favoritos\n e adicione à sua lista`}
          containerProps={{ mt: "s48" }}
        />
      </SafeAreaView>
    </Screen>
  );
}
