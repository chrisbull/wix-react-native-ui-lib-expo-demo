// import {Navigation} from 'react-native-navigation';
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import "./animationScreens";
import "./componentScreens";
import "./componentScreenScreens";
import "./incubatorScreens";
import "./interactableComponentScreens";
import "./listScreens";
import "./nativeComponentScreens";
import "./realExamples";
import "./styleScreens";
import "./wrapperScreens";

import CustomScreen from "./CustomScreen";
import MainScreen from "./MainScreen";
import Playground from "./PlaygroundScreen";
import SettingsScreen from "./SettingsScreen";

export function registerScreens() {
  Navigation.registerComponent("unicorn.MainScreen", () => MainScreen);
  Navigation.registerComponent("unicorn.PlaygroundScreen", () => gestureHandlerRootHOC(Playground));
  Navigation.registerComponent("unicorn.Settings", () => SettingsScreen);
  Navigation.registerComponent("unicorn.CustomScreen", () => CustomScreen);
}
