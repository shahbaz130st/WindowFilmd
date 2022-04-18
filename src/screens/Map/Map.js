import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from "./Map.style";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import Footer1 from "../../components/Footer1";
const Map = (props) => {
  const navigation =useNavigation()
    return (
        <>
          <Header rightOnPress={()=>navigation.navigate('MapClient')} backArrow leftOnPress={()=>navigation.goBack()} left={"Quotes"} right={"Map"} center={"Nearby Clients"}/>
          <View style={styles.mainView}>
          <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
           
          </KeyboardAwareScrollView>
          </View>
          <Footer1 left={"About"} right={"Settings"}/>
        </>
    )
}
export default Map;