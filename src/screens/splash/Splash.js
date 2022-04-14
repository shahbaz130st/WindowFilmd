import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { strings } from "../../localization/i18n";
import { styles } from "./Splash.style";
import SplashFunctions from "./Splash.function";
const Splash = (props) => {
    useEffect(() => {
        SplashFunctions.timeOut(props)
    }, [])
    return (
        <View style={styles.mainView}>
            <Text style={styles.shahjeeTextStyle}>{strings("splashScreen.shahjee")}<Text style={styles.incTextStyle}>{" "}{strings("splashScreen.inc")}</Text></Text>
        </View>
    )
}
export default Splash;