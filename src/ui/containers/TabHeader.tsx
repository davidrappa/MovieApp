import { Box } from "../components/Box";
import { Icon, IconName } from "../components/Icon";
import { Text } from "../components/Text";

interface TabHeaderProps {
  title: string;
  subtitle: string;
  icon: IconName;
}

export function TabHeader({ title, subtitle, icon }: TabHeaderProps) {
  return (
    <Box paddingBottom="s20">
      <Icon name={icon} size={40} color="purpleBase" />
      <Text variant="displayLG" marginTop="s12" color="white" marginBottom="s4">
        {title}
      </Text>
      <Text fontFamily="NunitoSans" fontSize={16} color="gray700">
        {subtitle}
      </Text>
    </Box>
  );
}
