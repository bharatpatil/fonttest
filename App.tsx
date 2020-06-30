import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { View, Text, Icon } from "native-base";


export default function App() {
  const [isReady, setIsReady] = useState(false);

  // load font effect
  useEffect(() => {
    const loadFont = async (): Promise<any> => {
      console.log("======= loading fonts");
      try {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          "Roboto-medium": require("native-base/Fonts/Roboto_medium.ttf"),
          "Montserrat-SemiBold": require("./assets/fonts/Montserrat-Bold.ttf"),
          "Montserrat-Regular": require("./assets/fonts/Montserrat-Light.ttf"),
          "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
          "Montserrat-Bold": require("./assets/fonts/Montserrat-Regular.ttf"),
          "Montserrat-Light": require("./assets/fonts/Montserrat-SemiBold.ttf"),
          "SpaceMono-Bold": require("./assets/fonts/SpaceMono-Bold.ttf"),
          "SpaceMono-Regular": require("./assets/fonts/SpaceMono-Regular.ttf"),
          ...Ionicons.font,
        });
      } catch (err) {
        console.log("======= font load error:");
        console.log(err);
      }
      console.log("======= loading fonts setting flag");
      setIsReady(true);
    };

    loadFont();
  }, []);

  if (!isReady) return <View style={styles.container}>
    <Text>Loading...</Text>
  </View>;

  const Fonts = {
    Roboto: "Roboto",
    RobotoMedium: "Roboto-medium",
    heading: "Montserrat-SemiBold",
    headingBold: "Montserrat-Bold",
    subHeading: "SpaceMono-Regular",
    subHeadingBold: "SpaceMono-Bold",
    body: "Montserrat-Regular",
    bodyBold: "Montserrat-Medium",
    serif: "SpaceMono-Regular",
    serifBold: "SpaceMono-Bold",
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 22 }}>Default Font</Text>
      <Text style={{ fontSize: 18, marginBottom: 22 }}>Default Font 1</Text>
      {Object.keys(Fonts).map((key) => (
        <Text key={key} style={{ fontFamily: Fonts[key], backgroundColor: '#ff0' }}>
          {Fonts[key]}
        </Text>
      ))}
      <Icon name="close" style={{ fontSize: 80 }} />
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
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
  textStyle: {
    fontSize: 18,
    backgroundColor: '#ff0'
  },
});
