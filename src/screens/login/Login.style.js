import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.secondaryColor,
        alignItems: "center",
        justifyContent:"center"
    },
    primaryTextStyle: {
        color: colors.primaryColor,
        fontSize: 20,
        fontWeight: "700"
    },
    blackTextStyle: {
        color: colors.blackTextColor,
        fontSize: 20,
        fontWeight: "700"
    },image:{
        width:320,
        height:120
    }

})