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
    <Box alignItems="center" {...containerProps}>
      <Icon name="list" size={44} color="gray500" />
      <Box mt="s12" alignItems="center">
        {title && (
          <Text variant="textMD" color="gray500" mb="s4">
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
