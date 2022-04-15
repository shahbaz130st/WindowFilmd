import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from "./BrowseFilmsStyle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigation, useRoute } from "@react-navigation/native";
import SingleFilmsItem from "../../components/SingleFilmsItem";
const SingleFilms = (props) => {
  const data=[
    {Title:'Group',subtitle:'',id:1},
    {Title:'Sub-Group',subtitle:'',id:2},
    {Title:'Code',subtitle:'RO5678Cv',id:4},
    {Title:'Type',subtitle:'Interior',id:5}
  ]
  const data3=[
    {Title:'24"wide',subtitle:'310 mm',id:1},
    {Title:'36"wide',subtitle:'510 mm',id:2},
    {Title:'62"wide',subtitle:'710 mm',id:4},
    {Title:'75"wide',subtitle:'910 mm',id:5}
  ]
  const data2=[
    {Title:'Single Clear',name:'controller-stop',iconType:'entypo',subtitle:'',id:1},
    {Title:'Single Tinted',name:'triangle',iconType:'ionicon',subtitle:'',id:2},
    {Title:'Single Tinted clear',name:'triangle',iconType:'ionicon',subtitle:'RO5678Cv',id:4},
    {Title:'Single lsminated clear',name:'triangle',iconType:'ionicon',subtitle:'Interior',id:5},
    {Title:'IGU Clear',name:'triangle',iconType:'ionicon',subtitle:'',id:6},
    {Title:'IGU Tinted',name:'triangle',iconType:'ionicon',subtitle:'',id:7},
    {Title:'IGU Tinted clear',name:'triangle',iconType:'ionicon',subtitle:'RO5678Cv',id:8},
    {Title:'IGU lsminated clear',name:'triangle',iconType:'ionicon',subtitle:'Interior',id:9},
    {Title:'IGU HP low-E',name:'controller-stop',iconType:'entypo',subtitle:'Interior',id:10}
  ]
  const route=useRoute()
  const navigation =useNavigation()

    return (
        <>
          <Header backArrow={true} rightOnPress={()=>navigation.navigate('DateSheet',{title:route.params.title})} leftOnPress={()=>navigation.goBack()} left={"Films"} right={"Datesheet"} center={route.params.title}/>
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
                    <SingleFilmsItem title={item.Title}
                    subtitle={item.subtitle}/>
                    )
                  }}/>
                  <Text style={styles.QouteText1}>GLASS COMPATIBILTY</Text>
                  <FlatList
                  data={data2}
                  keyExtractor={item =>item.id}
                  showsVerticalScrollIndicator={false}
                  removeClippedSubviews={false}
                  style={{ width: "100%" }}
                  renderItem={({ item, index }) => {
                    return (
                        <SingleFilmsItem 
                        title={item.Title}
                        iconVisible={true}
                        name={item.name}
                        type={item.iconType}/>
                      )}}
                      />
                  <Text style={styles.QouteText1}>FULL ROLE SIZES</Text>
                  <FlatList
                  data={data3}
                  keyExtractor={item =>item.id}
                  showsVerticalScrollIndicator={false}
                  removeClippedSubviews={false}
                  style={{ width: "100%" }}
                  renderItem={({ item, index }) => {
                    return (
                        <SingleFilmsItem 
                        title={item.Title}
                        subtitle={item.subtitle}/>
                      )}}
                      />
          </KeyboardAwareScrollView>
          </View>
          <Footer left={"Add to Order"} right={"Current Order"} />
        </>
    )
}
export default SingleFilms;