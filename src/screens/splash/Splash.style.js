import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.secondaryColor,
        alignItems: "center",
        justifyContent: "center"
    },
    shahjeeTextStyle: {
        color: colors.primaryColor,
        fontSize: 28,
        fontWeight: "900"
    },
    incTextStyle: {
        color: colors.blackTextColor,
        fontSize: 28,
        fontWeight: "900"
    }
})