import { Box, TouchableOpacityBox } from "../../components/Box";
import { Icon } from "../../components/Icon";
import { Text } from "../../components/Text";

export function MovieDetailsBottom() {
  return (
    <Box flexDirection="row" paddingHorizontal="s20" gap="s8">
      <TouchableOpacityBox
        backgroundColor="gray300"
        borderRadius="s6"
        justifyContent="center"
        alignItems="center"
        width={48}
        height={48}
      >
        <Icon name="save" size={24} color="purpleLight" />
      </TouchableOpacityBox>
      <TouchableOpacityBox
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
