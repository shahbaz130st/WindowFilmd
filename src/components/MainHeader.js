import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import { colors } from "../themes/colors"
import { Icon } from "@rneui/base";

const Header1 = (props) => {
    return (
        <View style={styles.Head}> 
            <Text style={styles.textHead}>
                {props.left}
            </Text>
        </View>
    )

}
export default Header1;
const styles = StyleSheet.create(
    {
        Head: {
            backgroundColor: colors.whiteColor,
            alignItems: 'center',
            justifyContent: 'space-between',flexDirection:'row',
            padding:10,
        },textHead:{
            fontSize:30,
            fontWeight:'bold',
            color:colors.darkGray
        }
    }
)