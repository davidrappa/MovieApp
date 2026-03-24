import { Box, BoxProps } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

interface EmptyListProps {
  title?: string;
  subtitle?: string;
  containerProps?: BoxProps;
}

export function EmptyList({ title, subtitle, containerProps }: EmptyListProps) {
  return (
    <Box 
      alignItems="center" 
      {...containerProps}
      accessibilityRole="text"
      accessibilityLabel={title && subtitle ? `${title}. ${subtitle}` : title || subtitle || "Lista vazia"}
    >
      <Icon 
        name="list" 
        size={44} 
        color="gray500"
        accessibilityLabel=""
        accessibilityRole="image"
      />
      <Box mt="s12" alignItems="center">
        {title && (
          <Text variant="textMDB" color="gray500" mb="s4" accessibilityRole="header">
            {title}
          </Text>
        )}
        {subtitle && (
          <Text textAlign="center" variant="textMD" color="gray500">
            {subtitle}
          </Text>
        )}
      </Box>
    </Box>
  );
}
