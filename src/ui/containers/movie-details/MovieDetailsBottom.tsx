import { useMovieVideoById } from "@/src/domain/Movies/useCases/useMovieVideoById";
import { Linking } from "react-native";
import { Box, TouchableOpacityBox } from "../../components/Box";
import { Icon } from "../../components/Icon";
import { Text } from "../../components/Text";

interface MovieDetailsBottomProps {
  id: number;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

export function MovieDetailsBottom({
  id,
  isFavorite,
  toggleFavorite,
}: MovieDetailsBottomProps) {
  const { data, isLoading } = useMovieVideoById(id);

  function openTrailerLink() {
    const url = `https://www.youtube.com/watch?v=${data?.key}`;
    Linking.openURL(url);
  }

  return (
    <Box flexDirection="row" paddingHorizontal="s20" gap="s8">
      <TouchableOpacityBox
        onPress={toggleFavorite}
        backgroundColor="gray300"
        borderRadius="s6"
        justifyContent="center"
        alignItems="center"
        width={48}
        height={48}
        accessibilityHint="Adicione o filme nos seus favoritos"
        accessibilityLabel={
          isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
        }
        accessibilityRole="button"
      >
        {isFavorite ? (
          <Icon name="trash" size={24} color="purpleLight" />
        ) : (
          <Icon name="save" size={24} color="purpleLight" />
        )}
      </TouchableOpacityBox>
      <TouchableOpacityBox
        disabled={isLoading}
        onPress={openTrailerLink}
        accessibilityHint="Abra para ver o trailer do filme"
        accessibilityLabel="Trailer do filme no YouTube"
        accessibilityRole="button"
        backgroundColor="purpleBase"
        borderRadius="s6"
        flexDirection="row"
        gap="s8"
        justifyContent="center"
        alignItems="center"
        flex={1}
        height={48}
      >
        <Icon name="youtube" size={24} color="gray700" />
        <Text variant="textMD" color="gray700">
          Assistir trailer
        </Text>
      </TouchableOpacityBox>
    </Box>
  );
}
