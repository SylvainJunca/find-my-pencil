import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Network from "expo-network";
import { useEffect, useState } from "react";
import RNBluetoothClassic, {
  BluetoothEventType,
} from "react-native-bluetooth-classic";

export default function App() {
  const [ip, setIp] = useState("");
  const [bluetoothCapable, setBluetoothCapable] = useState(false);

  useEffect(() => {
    const checkNetwork = async () => {
      try {
        const available = await RNBluetoothClassic.isBluetoothAvailable();
        const actualIp = await Network.getIpAddressAsync();
        setIp(actualIp);
        setBluetoothCapable(available);
      } catch (err) {
        // Handle accordingly
      }
    };

    checkNetwork();
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{`Actual IP is: ${(ip && ip) || "not found"}`}</Text>
      <Text>{`Bluetooth capable: ${bluetoothCapable}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
