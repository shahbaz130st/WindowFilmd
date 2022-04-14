import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.secondaryColor
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
    },
    typeText:{
        marginTop:10,
        fontSize:18,
        fontWeight:'500',
        color:colors.blackTextColor
    }

})