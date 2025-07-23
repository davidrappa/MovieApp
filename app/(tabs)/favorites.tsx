import { Screen } from "@/src/ui/components/Screen";
import { TabHeader } from "@/src/ui/containers/TabHeader";

import { SafeAreaView } from "react-native-safe-area-context";

export default function FavoritesScreen() {
  return (
    <Screen style={{ paddingHorizontal: 20, paddingTop: 28 }}>
      <SafeAreaView>
        <TabHeader
          icon="favorites"
          title="Favoritos"
          subtitle="Sua lista de filmes salvos"
        />
      </SafeAreaView>
    </Screen>
  );
}
