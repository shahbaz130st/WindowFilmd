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
        color:colors.greyColor,
        fontWeight:'500'
    },
    headerText4:{
        fontSize:22,
        color:colors.blackTextColor,
        fontWeight:'500'
    },
    headerText3:{
        fontSize:17,
        color:colors.redTextColor,
        fontWeight:'500',
        lineHeight: 30
    },
    headerText1:{
        fontSize:17,
        color:colors.greyColor,
        fontWeight:'400'
    },
    line:{
        height:0.8,
        backgroundColor:colors.greyColor
    },sub:{
        fontSize:10,
        lineHeight: 24,
        color:colors.redTextColor,
        fontWeight:'500',
    },area:{
        height:50,
        borderBottomColor:colors.greyColor,
        borderBottomWidth:1.2
    }
})