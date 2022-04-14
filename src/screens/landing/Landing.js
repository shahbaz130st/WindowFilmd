import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import commonStyles from "../../themes/commonStyles";
import { colors } from "../../themes/colors";
import { strings } from "../../localization/i18n";
import { styles } from "./Landing.style";
import LandingFunction from "./Landing.function";
const Landing = (props) => {
    return (
        <View style={styles.mainView}>
            <Button
                buttonStyle={[commonStyles.buttonStyle, { backgroundColor: colors.primaryColor }]}
                textStyle={commonStyles.textStyle}
                text={strings("landingScreen.agentSingIn")}
                onPress={() => {
                    // props.navigation.navigate("Register")
                    // loginValidation(email, password)
                }}
            />
            <Button
                buttonStyle={[commonStyles.buttonStyle, { backgroundColor: colors.transparentColor, borderColor: colors.primaryColor, borderWidth: 1 }]}
                textStyle={[commonStyles.textStyle, { color: colors.primaryColor }]}
                text={strings("landingScreen.clientSignIn")}
                onPress={() => {
                    props.navigation.navigate("Login")
                    // loginValidation(email, password)
                }}
            />
        </View>
    )
}
export default Landing;