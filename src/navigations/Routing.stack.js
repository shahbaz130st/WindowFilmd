import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./Onboarding.stack";

const RootStack = createNativeStackNavigator();

const Routing = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="OnBoarding" component={OnBoarding} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default Routing;