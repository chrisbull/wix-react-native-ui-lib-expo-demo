import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import CardAnimationsScreen from "./src/screens/animationScreens/CardAnimationsScreen";
import ListAnimationsScreen from "./src/screens/animationScreens/ListAnimationsScreen";
import ProgressBarScreen from "./src/screens/animationScreens/ProgressBarScreen";
import ActionBarScreen from "./src/screens/componentScreens/ActionBarScreen";
import ActionSheetScreen from "./src/screens/componentScreens/ActionSheetScreen";
import AnimatedImageScreen from "./src/screens/componentScreens/AnimatedImageScreen";
import AvatarsScreen from "./src/screens/componentScreens/AvatarsScreen";
import BadgesScreen from "./src/screens/componentScreens/BadgesScreen";
import ButtonsScreen from "./src/screens/componentScreens/ButtonsScreen";
import CardsScreen from "./src/screens/componentScreens/CardsScreen";
import CarouselScreen from "./src/screens/componentScreens/CarouselScreen";
import CheckboxScreen from "./src/screens/componentScreens/CheckboxScreen";
import ConnectionStatusBarScreen from "./src/screens/componentScreens/ConnectionStatusBarScreen";
import DialogScreen from "./src/screens/componentScreens/DialogScreen";
import FeatureHighlightScreen from "./src/screens/componentScreens/FeatureHighlightScreen";
import HintsScreen from "./src/screens/componentScreens/HintsScreen";
import InputsScreen from "./src/screens/componentScreens/InputsScreen";
import MaskedInputScreen from "./src/screens/componentScreens/MaskedInputScreen";
import PageControlScreen from "./src/screens/componentScreens/PageControlScreen";
import PickerScreen from "./src/screens/componentScreens/PickerScreen";
import RadioButtonScreen from "./src/screens/componentScreens/RadioButtonScreen";
import StepperScreen from "./src/screens/componentScreens/StepperScreen";
import SwitchScreen from "./src/screens/componentScreens/SwitchScreen";
import TabBarScreen from "./src/screens/componentScreens/TabBarScreen";
import TagsInputScreen from "./src/screens/componentScreens/TagsInputScreen";
import ToastsScreen from "./src/screens/componentScreens/ToastsScreen";
import TourScreen from "./src/screens/componentScreens/TourScreen";
import WheelPickerDialogScreen from "./src/screens/componentScreens/WheelPickerDialogScreen";
import EmptyStateScreen from "./src/screens/componentScreenScreens/EmptyStateScreen";
import LoadingScreen from "./src/screens/componentScreenScreens/LoadingScreen";
import ModalScreen from "./src/screens/componentScreenScreens/ModalScreen";
import CustomScreen from "./src/screens/CustomScreen";
import DemoSCreen from "./src/screens/DemoScreen";
import DemoScreen from "./src/screens/DemoScreen";
import TabControllerScreen from "./src/screens/incubatorScreens/TabControllerScreen";
import DrawerScreen from "./src/screens/interactableComponentScreens/DrawerScreen";
import BasicListScreen from "./src/screens/listScreens/BasicListScreen";
import ContactsListScreen from "./src/screens/listScreens/ContactsListScreen";
import ConversationListScreen from "./src/screens/listScreens/ConversationListScreen";
import MainScreen from "./src/screens/MainScreen";
import HighlightOverlayViewScreen from "./src/screens/nativeComponentScreens/HighlightOverlayViewScreen";
import WheelPickerViewScreen from "./src/screens/nativeComponentScreens/WheelPickerViewScreen";
import PlaygroundScreen from "./src/screens/PlaygroundScreen";
import AppleMusic from "./src/screens/realExamples/AppleMusic";
import ActionsList from "./src/screens/realExamples/ListActions/ActionsList";
import ListActionsScreen from "./src/screens/realExamples/ListActions/ListActionsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import BorderRadiusesScreen from "./src/screens/styleScreens/BorderRadiusesScreen";
import ColorsScreen from "./src/screens/styleScreens/ColorsScreen";
import ShadowsScreen from "./src/screens/styleScreens/ShadowsScreen";
import SpacingsScreen from "./src/screens/styleScreens/SpacingsScreen";
import TypographyScreen from "./src/screens/styleScreens/TypographyScreen";
import TouchableOpacityScreen from "./src/screens/wrapperScreens/TouchableOpacityScreen";

const HomeScreen = () => (
  <View>
    <Text>Home</Text>
  </View>
);

const RootNavigator = createAppContainer(
  createStackNavigator({
    // HomeScreen,
    CardAnimationsScreen,
    //     // ListAnimationsScreen,
    //     // ProgressBarScreen,
    //     // ActionBarScreen,
    //     // ActionSheetScreen,
    //     // AnimatedImageScreen,
    //     // AvatarsScreen,
    //     // BadgesScreen,
    //     // ButtonsScreen,
    //     // CardsScreen,
    //     // CarouselScreen,
    //     // CheckboxScreen,
    //     // ConnectionStatusBarScreen,
    //     // DialogScreen,
    //     // FeatureHighlightScreen,
    //     // HintsScreen,
    //     // InputsScreen,
    //     // MaskedInputScreen,
    //     // PageControlScreen,
    //     // PickerScreen,
    //     // RadioButtonScreen,
    //     // StepperScreen,
    //     // SwitchScreen,
    //     // TabBarScreen,
    //     // TagsInputScreen,
    //     // ToastsScreen,
    //     // TourScreen,
    //     // WheelPickerDialogScreen,
    //     // EmptyStateScreen,
    //     // LoadingScreen,
    //     // ModalScreen,
    //     // CustomScreen,
    //     // DemoSCreen,
    //     // DemoScreen,
    //     // TabControllerScreen,
    //     // DrawerScreen,
    //     // BasicListScreen,
    //     // ContactsListScreen,
    //     // ConversationListScreen,
    //     // MainScreen,
    //     // HighlightOverlayViewScreen,
    //     // WheelPickerViewScreen,
    //     // PlaygroundScreen,
    //     // AppleMusic,
    //     // ActionsList,
    //     // ListActionsScreen,
    //     // SettingsScreen,
    //     // BorderRadiusesScreen,
    //     // ColorsScreen,
    //     // ShadowsScreen,
    //     // SpacingsScreen,
    //     // TypographyScreen,
    //     // TouchableOpacityScreen,
  }),
);

export default class App extends React.Component {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
