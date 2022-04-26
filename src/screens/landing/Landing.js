import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from "./Landing.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Icon } from "@rneui/base";
import { colors } from "../../themes/colors";
import Quote from "../../components/Quotes";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Store/ActionsCreator";
import auth from '@react-native-firebase/auth';

const Landing = (props) => {
  const data=[
    {Title:'KBSC job center',subTitle:"quote 26",place:'KBSC in kombay',date:'last modified:2/12/21',id:1},
    {Title:'KBSC job center',subTitle:"quote 26",place:'KBSC in kombay',date:'last modified:2/12/21',id:2},
    {Title:'KBSC job center',subTitle:"quote 26",place:'KBSC in kombay',date:'last modified:2/12/21',id:3},
    {Title:'KBSC job center2',subTitle:"quote 27",place:'KBSC in khiyali',date:'last modified:2/14/21',id:4}
  ]
  const navigation =useNavigation()
  const dispatch=useDispatch()
  const mainApp = StackActions.replace("SignInScreens")
  const Logout=()=>{
    auth().signOut()
    dispatch(signOut())
    props.navigation.dispatch(mainApp)
  }

    return (
        <>
          <Header left={"Log out"} right={"Map"} leftOnPress={Logout} rightOnPress={()=>navigation.navigate('Map')} center={"22 Quotes"}/>
          <View style={styles.mainView}>
          <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
            <TouchableOpacity onPress={()=>navigation.navigate('BrowseFilms')}>
              <View style={styles.headerView}>
              <Text style={styles.headerText}>
                Browse film and performance data
              </Text>
              <Icon
               name='right' type="antdesign" color={colors.greyColor} size={25}/>
               </View>
            </TouchableOpacity>
            <View style={styles.line}/>
            <Text style={styles.QouteText}>QUOTE CENTER</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("NewQuote")}>
              <View style={styles.headerView}>
              <View style={{flexDirection:'row'}}>
              <Icon
               name='circle-with-plus' style={{marginRight:10}} type="entypo" color={colors.primaryColor} size={25}/>
              <Text style={{...styles.headerText,color:colors.blackTextColor,fontWeight:'500'}}>
               Create a new quote
              </Text>
               </View>
              <Icon
               name='right' type="antdesign" color={colors.greyColor} size={25}/>
               </View>
            </TouchableOpacity>
            <View style={styles.line1}/>
            <Text style={{...styles.QouteText,fontSize:19}}>19 UNSENT QUOTES</Text>
            <View style={styles.line3}/>
                    <FlatList
                         data={data}
                         keyExtractor={(item, index) => {
                           return index.toString();
                            }}
                        showsVerticalScrollIndicator={false}
                        removeClippedSubviews={false}
                        style={{ width: "100%" }}
                        renderItem={({ item, index }) => {
                                return (
                                  <>
                                    <Quote title={item.Title}
                                    subtitle={item.subTitle}
                                    place={item.place}
                                    date={item.date}
                                    onPress={()=>navigation.navigate('MapClient',{title:'Quotes'})}/>
                                    <View style={styles.line}/>
                                    </>
                                )
                            }}
                        /> 
          </KeyboardAwareScrollView>
          </View>
          {/* <Footer left={"About"} right={"Settings"}/> */}
        </>
    )
}
export default Landing;