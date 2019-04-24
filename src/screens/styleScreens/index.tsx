// import {Navigation} from 'react-native-navigation';
import BorderRadiusesScreen from "./BorderRadiusesScreen";
import ColorsScreen from "./ColorsScreen";
import ShadowsScreen from "./ShadowsScreen";
import SpacingsScreen from "./SpacingsScreen";
import TypographyScreen from "./TypographyScreen";

Navigation.registerComponent("unicorn.style.BorderRadiusesScreen", () => BorderRadiusesScreen);
Navigation.registerComponent("unicorn.style.ColorsScreen", () => ColorsScreen);
Navigation.registerComponent("unicorn.style.TypographyScreen", () => TypographyScreen);
Navigation.registerComponent("unicorn.style.ShadowsScreen", () => ShadowsScreen);
Navigation.registerComponent("unicorn.style.SpacingsScreen", () => SpacingsScreen);
