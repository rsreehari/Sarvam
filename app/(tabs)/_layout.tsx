import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#999",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Login"
        options={{
          tabBarLabel: "Login",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Loading-page"
        options={{
          tabBarLabel: "Loading",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
