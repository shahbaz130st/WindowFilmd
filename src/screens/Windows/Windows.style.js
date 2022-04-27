import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.lightGraay,
    },headerView:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        padding:10,
        paddingVertical:10,
        marginHorizontal:20,
        backgroundColor:colors.whiteColor,
        borderRadius:5,
        marginBottom:2
    },headerView1:{
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
    headerText5:{
        fontSize:17,
        color:colors.darkGray,
        fontWeight:'500'
    },
    headerText4:{
        fontSize:20,
        color:colors.greyColor,
        fontWeight:'500',
        textTransform:'uppercase',
        padding:15
    },
    headerText3:{
        fontSize:17,
        color:colors.redTextColor,
        fontWeight:'500',
        lineHeight: 30
    },
    headerText1:{
        fontSize:17,
        color:colors.blue,
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
    },view3:{
        borderColor:colors.darkGray,
        borderWidth:1,
        padding:8,
        paddingHorizontal:16,
        margin:0,
        flexDirection:'row',
        }, 
        recomView:{
        justifyContent:'space-around'
        }
})