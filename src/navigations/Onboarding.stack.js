import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import Splash from "../screens/splash/Splash";
import Landing from "../screens/landing/Landing";
import BrowseFilms from "../screens/BrowseFilms/BrowseFilms";
import SingleFilms from "../screens/BrowseFilms/SingleFilms";
import DateSheet from "../screens/BrowseFilms/DateSheet";

const OnBoardingStack = createNativeStackNavigator();

const OnBoarding = () => {
    return (
        <OnBoardingStack.Navigator screenOptions={{ headerShown: false }}>
            <OnBoardingStack.Screen name="Splash" component={Splash} />
            <OnBoardingStack.Screen name="Landing" component={Landing} />
            <OnBoardingStack.Screen name="Login" component={Login} />
            <OnBoardingStack.Screen name="Register" component={Register} />
            <OnBoardingStack.Screen name="BrowseFilms" component={BrowseFilms} />
            <OnBoardingStack.Screen name="SingleFilms" component={SingleFilms} />
            <OnBoardingStack.Screen name="DateSheet" component={DateSheet} />
        </OnBoardingStack.Navigator>
    )
}
export default OnBoarding;