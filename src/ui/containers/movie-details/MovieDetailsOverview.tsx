import { Box } from "../../components/Box";
import { Text } from "../../components/Text";

interface MovieDetailsOverviewProps {
  overview: string;
}

export function MovieDetailsOverview({ overview }: MovieDetailsOverviewProps) {
  return (
    <Box borderTopWidth={1} borderBottomWidth={1} borderColor="gray300">
      <Text variant="textMD" color="gray600" paddingVertical="s16">
        {overview}
      </Text>
    </Box>
  );
}
