import { Tabs } from "expo-router";

export default function Tabslayout() {
  //consistent components
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
    </Tabs>
  );
}
