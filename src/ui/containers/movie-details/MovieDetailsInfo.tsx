import { Box } from "../../components/Box";
import { Icon } from "../../components/Icon";
import { Text } from "../../components/Text";

interface MovieDetailsInfoProps {
  title: string;
  duration: string;
  releaseDate: string;
  rating: string;
}

export function MovieDetailsInfo({
  title,
  duration,
  releaseDate,
  rating,
}: MovieDetailsInfoProps) {
  return (
    <Box>
      <Text
        mb="s8"
        variant="titleXL"
        color="gray700"
        accessibilityLabel={`Título do filme: ${title}`}
        accessibilityRole="text"
      >
        {title}
      </Text>
      <Box
        flexDirection="row"
        alignItems="center"
        mb="s20"
        justifyContent="space-between"
      >
        <Box>
          <Text mb="s2" color="gray600" variant="textMD">
            <Text
              variant="textMDB"
              color="gray600"
              accessibilityLabel={`Duração do filme: ${duration}`}
              accessibilityRole="text"
            >
              Duração:
            </Text>
            {` ` + duration}
          </Text>
          <Text mb="s2" color="gray600" variant="textMD">
            <Text
              variant="textMDB"
              color="gray600"
              accessibilityLabel={`Data de lançamento do filme: ${releaseDate}`}
              accessibilityRole="text"
            >
              Lançamento:
            </Text>
            {` ` + releaseDate}
          </Text>
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          gap="s6"
          alignSelf="baseline"
          borderWidth={1}
          borderColor="gray300"
          borderRadius="s6"
          paddingHorizontal="s10"
          paddingVertical="s4"
        >
          <Icon name="star" color="purpleLight" />
          <Text
            variant="titleLG"
            color="gray600"
            accessibilityRole="text"
            accessibilityLabel={`Avaliação do filme: ${rating} de 10`}
          >
            {rating}
          </Text>
          <Text variant="textMD" color="gray600" mt="s6" accessible={false}>
            / 10
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
