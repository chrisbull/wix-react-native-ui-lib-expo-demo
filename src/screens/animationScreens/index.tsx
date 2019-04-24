// import {Navigation} from 'react-native-navigation';
import CardAnimationsScreen from "./CardAnimationsScreen";
import CardScannerScreen from "./CardScannerScreen";
import ListAnimationsScreen from "./ListAnimationsScreen";
import ProgressBarScreen from "./ProgressBarScreen";

Navigation.registerComponent("unicorn.animations.CardScannerScreen", () => CardScannerScreen);
Navigation.registerComponent("unicorn.animations.CardAnimationsScreen", () => CardAnimationsScreen);
Navigation.registerComponent("unicorn.animations.ListAnimationsScreen", () => ListAnimationsScreen);
Navigation.registerComponent("unicorn.animations.ProgressBarScreen", () => ProgressBarScreen);
