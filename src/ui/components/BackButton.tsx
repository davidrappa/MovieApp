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
      minHeight={44}
      accessibilityLabel="Voltar"
      accessibilityHint="Toque duas vezes para voltar para a tela anterior"
      accessibilityRole="button"
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <Icon 
        name="arrowLeft" 
        size={20} 
        color="gray600"
        accessibilityLabel=""
        accessibilityRole="image"
      />
      <Text variant="textMD" color="gray600" accessibilityRole="none">
        Voltar
      </Text>
    </TouchableOpacityBox>
  );
}
