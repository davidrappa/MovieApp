import { Icon } from "@/src/ui/components/Icon";
import { useAppTheme } from "@/src/ui/theme/useAppTheme";
import { useIsFocused } from "@react-navigation/native";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const { colors } = useAppTheme();
  useIsFocused();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purpleLight,
        tabBarInactiveTintColor: colors.gray200,
        tabBarStyle: {
          backgroundColor: colors.gray200,
          paddingTop: 10,
          height: 84,
          borderTopWidth: 1,
          borderColor: colors.gray300,
        },
        tabBarLabelStyle: {
          fontFamily: "NunitoSans",
          fontSize: 14,
          color: colors.gray700,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Populares",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon name="movie" color={focused ? "purpleBase" : "gray700"} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Buscar",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon name="search" color={focused ? "purpleBase" : "gray700"} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="favorites"
                color={focused ? "purpleBase" : "gray700"}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
