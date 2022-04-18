import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import { colors } from "../themes/colors"
import { Icon } from "@rneui/base";

const SingleFilmsItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.Head}> 
            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            {props.iconVisible? 
              <Icon
               name={props.name} 
               type={props.type} 
               color={props.name=="controller-stop"?colors.greanColor:colors.darkred} 
               size={props.name=="controller-stop"?22:16}
               style={{paddingRight:5}}
               />:null}
            <Text style={styles.title1}>
                {props.title}
            </Text>
                </View>
            <View>
            {props.iconVisible? 
              <Icon
               name="exclamationcircleo"
               type="antdesign"
               color={colors.greyColor}
               size={20}
               />
               :props.circleIcon?
               <Icon
               name="exclamationcircleo"
               type="antdesign"
               color={colors.greyColor}
               size={20}
               />:
              <Text style={styles.subtitle1}>
                {props.subtitle}
              </Text>
            }
            </View>
            </View>
        </View>
        <View style={styles.line}/>
        </TouchableOpacity>
    )

}
export default SingleFilmsItem;
const styles = StyleSheet.create(
    {
        Head: {
            padding:15,
        },title1:{
            fontSize:15,
            fontWeight:'500',
            color:colors.blackTextColor
        },subtitle1:{
            fontSize:15,
            fontWeight:'500',
            color:colors.greyColor
        },line:{
            height:0.2,
            backgroundColor:colors.greyColor
        }
    }
)