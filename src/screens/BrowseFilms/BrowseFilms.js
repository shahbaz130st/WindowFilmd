import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from "./BrowseFilmsStyle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import commonStyles from "../../themes/commonStyles";
import { colors } from "../../themes/colors";
import { useNavigation } from "@react-navigation/native";
import QuoteItem from "../../components/QuoteItem";
import InputField from "../../components/InputField";
const BrowseFilms = (props) => {
  const data=[
    {Title:'Night Owl (4.0)',id:1},
    {Title:'Night Owl (6.0)',id:2},
    {Title:'Night Owl',id:4}
  ]
  const data2=[
    {Title:'Opti tune (4.0)',id:1},
    {Title:'Opti tune (6.0)',id:2},
    {Title:'Opti tune',id:4}
  ]
  const [password, setPassword] = useState("")

  const navigation = useNavigation()

    return (
        <>
          <Header rightIcon={true} backArrow={true} leftOnPress={()=>navigation.goBack()} left={"Quotes"} center={"Browse Tint Films"}/>
          <View style={styles.mainView}>
          <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
            <View style={{justifyContent:'center',alignItems:"center",backgroundColor:colors.greyColor}}>
            <InputField
              placeholder={"Search films"}
              placeholderTextColor={colors.blackTextColor}
              containerStyle={[commonStyles.inputContainerStyle1]}
              inputStyle={commonStyles.passwordInputinnerStyle}
              onChangeText={(text) => setPassword(text)}
              value={password}
              />
            </View>
            <View style={styles.line}/>
               <FlatList
                data={data}
                keyExtractor={item =>item.id}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                style={{ width: "100%" }}
                renderItem={({ item, index }) => {
                  return (
                  <View style={{padding:10}}>
                    <QuoteItem title={item.Title} onPress={()=>navigation.navigate('SingleFilms',{title:item.Title})}/>
                    <View style={styles.line1}/>
                    </View>
                    )
                  }}/>
                  <Text style={{...styles.QouteText,fontSize:20}}>DUAL REFLECTIVE FILMS</Text>
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
                      <QuoteItem title={item.Title}/>
                      <View style={styles.line1}/>
                      </View>
                      )}}
                      />
          </KeyboardAwareScrollView>
          </View>
          <Footer />
        </>
    )
}
export default BrowseFilms;