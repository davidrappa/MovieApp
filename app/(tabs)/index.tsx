import { Screen } from "@/src/ui/components/Screen";

import { TabHeader } from "@/src/ui/containers/TabHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PopularScreen() {
  return (
    <Screen style={{ paddingHorizontal: 20, paddingTop: 28 }}>
      <SafeAreaView>
        <TabHeader
          icon="movie"
          title="Populares"
          subtitle="Explore os filmes populares hoje e encontre coisas novas para assistir!"
        />
      </SafeAreaView>
    </Screen>
  );
}
