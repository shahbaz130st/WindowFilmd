import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import Splash from "../screens/splash/Splash";
import Landing from "../screens/landing/Landing";
import BrowseFilms from "../screens/BrowseFilms/BrowseFilms";
import SingleFilms from "../screens/BrowseFilms/SingleFilms";
import DateSheet from "../screens/BrowseFilms/DateSheet";
import Map from "../screens/Map/Map";
import MapClient from "../screens/MapClient/MapClient";
import CreateQuote from "../screens/CreateQuote/CreateQuote";
import SelectRoom from "../screens/CreateQuote/SelectRoom";
import NewQuote from "../screens/NewQuote/NewQuote";
import TintFilms from "../screens/TintFilms/TintFilms";
import Room from "../screens/Room/Room";
import Windows from "../screens/Windows/Windows";

const OnBoardingStack = createNativeStackNavigator();
const SignInStack = createNativeStackNavigator();

function SignInScreens() {
    return (
        <SignInStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Splash"}>
            <OnBoardingStack.Screen name="Splash" component={Splash} />
            <OnBoardingStack.Screen name="Login" component={Login} />
            <OnBoardingStack.Screen name="Register" component={Register} />
        </SignInStack.Navigator>
    )
}
function OnBoarding() {
    return (
        <OnBoardingStack.Navigator screenOptions={{ headerShown: false }}>
            <OnBoardingStack.Screen name="Landing" component={Landing} />
            <OnBoardingStack.Screen name="BrowseFilms" component={BrowseFilms} />
            <OnBoardingStack.Screen name="SingleFilms" component={SingleFilms} />
            <OnBoardingStack.Screen name="DateSheet" component={DateSheet} />
            <OnBoardingStack.Screen name="Map" component={Map} />
            <OnBoardingStack.Screen name="MapClient" component={MapClient} />
            <OnBoardingStack.Screen name="CreateQuote" component={CreateQuote} />
            <OnBoardingStack.Screen name="SelectRoom" component={SelectRoom} />
            <OnBoardingStack.Screen name="NewQuote" component={NewQuote} />
            <OnBoardingStack.Screen name="TintFilms" component={TintFilms} />
            <OnBoardingStack.Screen name="Room" component={Room} />
            <OnBoardingStack.Screen name="Windows" component={Windows} />
        </OnBoardingStack.Navigator>
    )
}

export {OnBoarding,SignInScreens};