import { Stack } from "expo-router";

export default function RootLayout() {
  //consistent components
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
