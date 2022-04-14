import React, { useEffect } from "react";
import { View, Text,Image } from "react-native";
import { styles } from "./Splash.style";
import SplashFunctions from "./Splash.function";
const Splash = (props) => {
    useEffect(() => {
        SplashFunctions.timeOut(props)
    }, [])
    return (
        <View style={styles.mainView}>
            <Image source={require('../../assets/images/splash.jpeg')} style={styles.image}/>
        </View>
    )
}
export default Splash;