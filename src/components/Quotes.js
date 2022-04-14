import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import { colors } from "../themes/colors"
import { Icon } from "@rneui/base";

const Quote = (props) => {
    return (
        <View style={styles.Head}> 
        <TouchableOpacity onPress={props.onPress}>
            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>   
            <View>
            <Text style={styles.title1}>
                {props.title}
            </Text>
            <Text style={styles.subtitle1}>
                {props.subtitle}
            </Text>
            <Text style={styles.subtitle1}>
                {props.place}
            </Text>
            <Text style={styles.subtitle1}>
                {props.date}
            </Text>
            </View>
            <View>
            <Icon
               name='right' type="antdesign" color={colors.greyColor} size={25}/>
            </View>
            </View>
        </TouchableOpacity>
        </View>
    )

}
export default Quote;
const styles = StyleSheet.create(
    {
        Head: {
            padding:15,
        },title1:{
            fontSize:16,
            fontWeight:'700'
        },subtitle1:{
            fontSize:13,
            fontWeight:'500'
        }
    }
)