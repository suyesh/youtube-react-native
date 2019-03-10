/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react";
import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./App";
import { name as appName } from "./app.json";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white"
  }
};

const YoutubeApp = () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => YoutubeApp);
