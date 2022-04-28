import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from "./BrowseFilmsStyle";
import Footer from "../../components/Footer";
import commonStyles from "../../themes/commonStyles";
import { colors } from "../../themes/colors";
import { useNavigation } from "@react-navigation/native";
import QuoteItem from "../../components/QuoteItem";
import InputField from "../../components/InputField";
import Header1 from "../../components/MainHeader";
import { useSelector } from "react-redux";

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
  const {registerReducer}=useSelector(state=>state)

    return (
        <>
          <Header1 left={"Window Films"}/>
          <View style={styles.mainView}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
            <InputField
              placeholder={"Search films"}
              placeholderTextColor={colors.placeholderColor}
              containerStyle={[commonStyles.inputContainerStyle1,{width: "100%"}]}
              inputStyle={commonStyles.passwordInputinnerStyle}
              onChangeText={(text) => setPassword(text)}
              value={password}
              search
              />
              <Text style={{...styles.QouteText1,fontSize:15}}>BROWSE TINT FILMS</Text>
               <FlatList
                data={data}
                keyExtractor={item =>item.id}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                style={{ width: "100%" }}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{marginHorizontal:20,borderRadius:5,marginBottom:2,backgroundColor:colors.whiteColor}}>
                    <QuoteItem title={item.Title} onPress={()=>navigation.navigate('SingleFilms',{title:item.Title})}/>
                    </View>
                    )
                  }}/>
                  <Text style={{...styles.QouteText1,fontSize:15}}>DUAL REFLECTIVE FILMS</Text>
                  <FlatList
                  data={data2}
                  keyExtractor={item =>item.id}
                  showsVerticalScrollIndicator={false}
                  removeClippedSubviews={false}
                  style={{ width: "100%" }}
                  renderItem={({ item, index }) => {
                    return (
                      <View style={{marginHorizontal:20,borderRadius:5,marginBottom:2,backgroundColor:colors.whiteColor}}>
                      <QuoteItem title={item.Title}/>
                      </View>
                      )}}
                      />
                  <Text style={{...styles.QouteText1,fontSize:15}}>DUAL REFLECTIVE FILMS</Text>
                  <FlatList
                  data={data2}
                  keyExtractor={item =>item.id}
                  showsVerticalScrollIndicator={false}
                  removeClippedSubviews={false}
                  style={{ width: "100%" }}
                  renderItem={({ item, index }) => {
                    return (
                      <View style={{marginHorizontal:20,borderRadius:5,marginBottom:2,backgroundColor:colors.whiteColor}}>
                      <QuoteItem title={item.Title}/>
                      </View>
                      )}}
                      />
          </KeyboardAwareScrollView>
          </View>
          {/* <Footer /> */}
        </>
    )
}
export default BrowseFilms;