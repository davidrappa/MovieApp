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
    <Box paddingBottom="s20" accessibilityRole="header">
      <Icon 
        name={icon} 
        size={40} 
        color="purpleBase"
        accessibilityLabel=""
        accessibilityRole="image"
      />
      <Text
        variant="displayLG"
        marginTop="s12"
        color="white"
        marginBottom="s4"
        accessibilityRole="header"
        accessibilityLevel={1}
      >
        {title}
      </Text>
      <Text
        variant="textMD"
        color="gray700"
        accessibilityRole="text"
      >
        {subtitle}
      </Text>
    </Box>
  );
}
