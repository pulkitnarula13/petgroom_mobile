import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Greetings from "../screens/Greetings";


const screens = {
Greetings:{
    screen:Greetings
}

};

const Navigator = createStackNavigator(screens);
export default createAppContainer(Navigator);