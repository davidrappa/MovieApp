import { Screen } from "@/src/ui/components/Screen";

import { TabHeader } from "@/src/ui/containers/TabHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <Screen style={{ paddingHorizontal: 20, paddingTop: 28 }}>
      <SafeAreaView>
        <TabHeader
          icon="search"
          title="Buscar"
          subtitle="Encontre filmes buscando pelo título"
        />
      </SafeAreaView>
    </Screen>
  );
}
