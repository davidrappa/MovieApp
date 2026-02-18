import { router } from "expo-router";
import { TouchableOpacityBox } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

export function BackButton() {
  function onPress() {
    router.back();
  }

  return (
    <TouchableOpacityBox
      onPress={onPress}
      backgroundColor="gray300"
      alignSelf="baseline"
      borderRadius="s8"
      flexDirection="row"
      gap="s8"
      alignItems="center"
      paddingHorizontal="s10"
      paddingVertical="s6"
      accessibilityLabel="Voltar para a tela anterior"
      accessibilityHint="Aperte para voltar para tela anterior"
      accessibilityRole="button"
    >
      <Icon name="arrowLeft" size={20} color="gray600" />
      <Text variant="textMD" color="gray600">
        Voltar
      </Text>
    </TouchableOpacityBox>
  );
}
