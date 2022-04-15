import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import { colors } from "../themes/colors"
import { Icon } from "@rneui/base";

const QuoteItem = (props) => {
    return (
        <View style={styles.Head}> 
        <TouchableOpacity onPress={props.onPress}>
            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.title1}>
                {props.title}
            </Text>
            <View>
            <Icon
               name='right' type="antdesign" color={colors.greyColor} size={25}/>
            </View>
            </View>
        </TouchableOpacity>
        </View>
    )

}
export default QuoteItem;
const styles = StyleSheet.create(
    {
        Head: {
            padding:15,
        },title1:{
            fontSize:15,
            fontWeight:'500',
            color:colors.blackTextColor
        }
    }
)