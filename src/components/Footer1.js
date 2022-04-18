import React, { useState } from "react";
import {  Text, View, StyleSheet, FlatList, TouchableWithoutFeedback } from "react-native";
import { colors } from "../themes/colors"
const Footer1 = (props) => {
    const [listOfItems, setListOfItems] = useState([
        { id:1,data: "All Quotes" }
        ,{ id:2,data: "Pending Quotes"},
        { id:3,data: 'Sent Quotes' },
    ])
        const [selectedId, setSelectedId] = useState(1);
    return (
        <View style={styles.Head}> 
        <View style={{marginLeft:15,overflow:'hidden',borderRadius:10,borderColor:colors.whiteColor,borderWidth:0.5}}>
       <FlatList
            data={listOfItems}
            horizontal={true}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
                const iconVisible = item.id === selectedId ? true : false
                return(
                    <View style={styles.recomView}>
            <TouchableWithoutFeedback
            onPress={()=>{
                setSelectedId(item.id)
            }}
            >
        <View style={{...styles.view3,backgroundColor:iconVisible?colors.whiteColor:colors.darkGray}}>
          <Text style={{color:iconVisible?colors.darkGray:colors.whiteColor}}>
                {item.data}
            </Text>
         </View>
       </TouchableWithoutFeedback>
       </View>
            )}}
            extraData={selectedId}/>
            </View>
        </View>
    )

}
export default Footer1;
const styles = StyleSheet.create(
    {
        Head: {
            backgroundColor: colors.darkGray,
            alignItems: 'center',
            justifyContent: 'space-between',flexDirection:'row',
            padding:15,
        },textHead:{
            fontSize:16,
            fontWeight:'400',
            color:colors.whiteColor
        },view3:{
            borderColor:colors.whiteColor,
            borderWidth:1,
            padding:8,
            margin:0,
            flexDirection:'row',
            }, 
            recomView:{
            justifyContent:'space-around'
            }
    }
)