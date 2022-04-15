import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.secondaryColor,
    },headerView:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        padding:10,
        paddingVertical:20
    },
    headerText:{
        fontSize:17,
        color:colors.primaryColor,
        fontWeight:'400'
    },
    line:{
        height:0.8,
        backgroundColor:colors.greyColor
    },
    line1:{
        height:0.2,
        backgroundColor:colors.greyColor
    },
    line3:{
        height:1.3,
        backgroundColor:colors.greyColor
    },
    QouteText:{
        fontSize:23,
        padding:20,
        fontWeight:'400',
        marginTop:15
    },
    QouteText1:{
        fontSize:16,
        padding:15,
        fontWeight:'500'
    }
})