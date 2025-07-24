import { EmptyList } from "@/src/ui/components/EmptyList";
import { Icon } from "@/src/ui/components/Icon";
import { Screen } from "@/src/ui/components/Screen";
import { TextInput } from "@/src/ui/components/TextInput";

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
        <TextInput
          LeftComponent={<Icon name="search" color="gray500" />}
          placeholder="Pesquisar filme"
        />
        <EmptyList
          subtitle="Nenhuma pesquisa realizada"
          containerProps={{ mt: "s48" }}
        />
      </SafeAreaView>
    </Screen>
  );
}
