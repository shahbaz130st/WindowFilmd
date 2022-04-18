import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from "./MapClient.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import commonStyles from "../../themes/commonStyles";
import { colors } from "../../themes/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import QuoteItem from "../../components/QuoteItem";
import InputField from "../../components/InputField";
import { Icon } from "@rneui/base";
const MapClient = (props) => {
  const data=[
    {Title:'Client',subtitle:"Nutter",id:1},
    {Title:'Tint Films',subtitle:"Natura 15",id:2},
    {Title:'Notes',subtitle:"",id:4}
  ]
  const data2=[
    {Title:'Office',subtitle:"1 Window",id:1},
    {Title:'Spare',subtitle:"1 Window",id:2},
  ]

  const navigation = useNavigation()
  const route=useRoute()
  const onPress=(i)=>{
    switch (i.Title) {
      case 'Client':
        navigation.navigate('NewQuote',{title:'Job'})
        break;
    
      case 'Tint Films':
        navigation.navigate('TintFilms')
        break;
    
      default:
        console.log('false')
        break;
    }
  }

    return (
        <>
          <Header rightIcon={true} backArrow={true} leftOnPress={()=>navigation.goBack()} left={route?.params?.title ? route.params.title:"Map"} center={"Client Name"}/>
          <View style={styles.mainView}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
               <FlatList
                data={data}
                keyExtractor={item =>item.id}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                style={{ width: "100%" }}
                renderItem={({ item, index }) => {
                  return (
                  <View style={{padding:10}}>
                    <QuoteItem 
                    title={item.Title}
                    subTitle={item.subtitle}
                    onPress={()=>onPress(item)}/>
                    <View style={styles.line1}/>
                    </View>
                    )
                  }}/>
                  <Text style={{...styles.QouteText,fontSize:20}}>Rooms</Text>
                  <TouchableOpacity>
                    <View style={styles.headerView}>
                  <View style={styles.NewTextView}>
                   <Icon
                    name='circle-with-plus' style={{marginRight:10}} type="entypo" color={colors.primaryColor} size={25}/>
                    <Text style={{...styles.headerText,color:colors.blackTextColor,fontWeight:'500'}}>
                    Add a new Room
                    </Text>
                  </View>
                  <Icon
                  name='right' type="antdesign" color={colors.greyColor} size={25}/>
                  </View>
                  </TouchableOpacity>
                  <View style={styles.line3}/>
                  <FlatList
                  data={data2}
                  keyExtractor={item =>item.id}
                  showsVerticalScrollIndicator={false}
                  removeClippedSubviews={false}
                  style={{ width: "100%" }}
                  renderItem={({ item, index }) => {
                    return (
                    <View style={{padding:10}}>
                      <QuoteItem title={item.Title}
                       subTitle={item.subtitle}/>
                      <View style={styles.line1}/>
                      </View>
                      )}}
                      />
               <View style={styles.area}/>
              <TouchableOpacity >
               <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',padding:15}}>
                   <Text style={styles.title1}>
                Duplicate Job
                   </Text>
                  <Icon
               name='right' type="antdesign" color={colors.greyColor} size={25}/>
                </View>
               </TouchableOpacity>
               <View style={styles.line3}/>
          </KeyboardAwareScrollView>
          </View>
          <Footer 
          left={"Create Quote"} 
          rightIcon 
          center={"Send Cut List"}
          leftOnPress={()=>navigation.navigate("CreateQuote")}/>
        </>
    )
}
export default MapClient;