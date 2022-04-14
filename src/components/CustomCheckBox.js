import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { colors } from '../themes/colors';
const checkIcon = require("../assets/images/check.png")
const CustomCheckBox = props => {
    return (
        <TouchableOpacity style={[{
            alignItems: 'center', flexDirection: 'row',
            marginVertical: 5
        }, props.containerStyle]} onPress={props.onChange}>
            <View
                style={[styles.checkBoxContainer,{borderColor:props.isChecked?colors.primaryColor:colors.greyColor},props.checkstyle]}>
                {props.isChecked &&
                    <Image
                        style={{ width: '80%', height: '80%', resizeMode: "contain", tintColor: props.tintColor }}
                        source={checkIcon}
                    />
                }
            </View>
            <View style={[{ marginLeft: 10, }, props.textStyle]}>
                <Text style={[{
                    fontSize: 18,
                    color: 'black',
                }, props.labelStyle]}>{props.label}<Text style={props.label1Style}>{props.label1}</Text></Text>
                {!_.isNil(props.label2) &&
                    <Text style={[{
                        fontSize: 14,
                        color: '#999999',
                    }, props.labelStyle2]}>{props.label2}</Text>
                }
            </View>
        </TouchableOpacity >
    )
}

export default CustomCheckBox;
const styles = StyleSheet.create(
    {
        checkBoxContainer: {
            width: 16,
            height: 16,
            borderRadius: 2,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth:2
        },
    }
)