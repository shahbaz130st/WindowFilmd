import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Switch } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from "./NewQuote.style";
import Header from "../../components/Header";
import commonStyles from "../../themes/commonStyles";
import Footer from "../../components/Footer";
import { Icon } from "@rneui/base";
import { colors } from "../../themes/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import InputField from "../../components/InputField";
import QuoteItem from "../../components/QuoteItem";
import Button from "../../components/Button";
const NewQuote = (props) => {
  const [password, setPassword] = useState("")
  const [job, setJob] = useState("")
  const [state, setState] = useState("")
  const [address, setAddress] = useState("")
  const [state1, setState1] = useState("")
  const [address1, setAddress1] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [Mobile, setMobile] = useState("")
  const navigation =useNavigation()
  const route=useRoute()
  const data=[
    {Title:'Quote Number',subtitle:'12',id:1},
    {Title:'Customer Name',subtitle:'Rusian',id:2},
    {Title:'Job Name',subtitle:'Rusian Job',id:3},
  ]
  const data2=[
    {Title:'Address',subtitle:'32 Cambridge road',id:1},
    {Title:'Suburb / State',subtitle:'1 window',id:1},
  ]
  const data3=[
    {Title:'Name',subtitle:'12',id:1},
    {Title:'Email',subtitle:'Rusian',id:1},
    {Title:'Phone',subtitle:'Rusian Job',id:1},
    {Title:'Mobile',subtitle:'Rusian Job',id:1},
  ]
  const data4=[
    {Title:'Address',subtitle:'32 Cambridge road',id:1},
    {Title:'Suburb / State',subtitle:'1 window',id:1}
  ]
    return (
        <>
          {route?.params?.title ?
          <Header backArrow leftOnPress={()=>navigation.goBack()} left={"Cancel"} center={"Request a Quote"}/>:
          <Header backArrow rightOnPress={()=>navigation.goBack()} leftOnPress={()=>navigation.goBack()} left={"Cancel"} right={"Save"} center={"New Quote"}/> }
          <View style={styles.mainView}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
            <View style={{height:20}}/>
          <FlatList
                data={data}
                keyExtractor={item =>item.id}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                style={{ width: "100%" }}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{marginHorizontal:20,borderRadius:5,marginBottom:2,backgroundColor:colors.whiteColor}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={styles.titleText}>
                          {item.Title}
                        </Text>
                        <Text style={styles.subTitleText}>
                          {item.subtitle}
                        </Text>
                      </View>
                    </View>
                    )
                  }}/>
              <Text style={styles.headerText4}>
               Site Address
              </Text>
              <FlatList
                data={data2}
                keyExtractor={item =>item.id}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                style={{ width: "100%" }}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{marginHorizontal:20,borderRadius:5,marginBottom:2,backgroundColor:colors.whiteColor}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={styles.titleText}>
                          {item.Title}
                        </Text>
                        <Text style={styles.subTitleText}>
                          {item.subtitle}
                        </Text>
                      </View>
                    </View>
                    )
                  }}/>
              <Text style={styles.headerText4}>
               Pictures
              </Text>
              <View style={{marginHorizontal:20,borderRadius:5,marginBottom:2,backgroundColor:colors.whiteColor}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <Text style={styles.titleText}>
                     View Pictures
                   </Text>
                   <Icon style={{padding:10}}
                    name='right' type="antdesign" color={colors.primaryColor} size={17}/>
              </View>
              </View>
              <Text style={styles.headerText4}>
               Contact
              </Text>
              <FlatList
                data={data3}
                keyExtractor={item =>item.id}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                style={{ width: "100%" }}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{marginHorizontal:20,borderRadius:5,marginBottom:2,backgroundColor:colors.whiteColor}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={styles.titleText}>
                          {item.Title}
                        </Text>
                        <Text style={styles.subTitleText}>
                          {item.subtitle}
                        </Text>
                      </View>
                    </View>
                    )
                  }}/>
              <Text style={styles.headerText4}>
               Building Address
              </Text>
              <FlatList
                data={data4}
                keyExtractor={item =>item.id}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                style={{ width: "100%" }}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{marginHorizontal:20,borderRadius:5,marginBottom:2,backgroundColor:colors.whiteColor}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={styles.titleText}>
                          {item.Title}
                        </Text>
                        <Text style={styles.subTitleText}>
                          {item.subtitle}
                        </Text>
                      </View>
                    </View>
                    )
                  }}/>
            {/* <TouchableOpacity>
              <View style={styles.headerView1}>
              <Text style={styles.headerText}>
                Quote number
              </Text>
              <Text style={styles.headerText1}>
                28
              </Text>
               </View>
            </TouchableOpacity>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Customer Name
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle1}
                onChangeText={(text) => setPassword(text)}
                value={password}
                    />
               </View>
               <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Job Name
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setJob(text)}
                value={job}
                    />
               </View>
               <Text style={styles.headerText4}>
               Site Address
              </Text>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Address
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setAddress(text)}
                value={address}
                    />
               </View>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Suburb / state
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setState(text)}
                value={state}
                    />
               </View>
               <Text style={styles.headerText4}>
               Contact
              </Text>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Name
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setName(text)}
                value={name}
                    />
               </View>
               <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Email
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setEmail(text)}
                value={email}
                    />
               </View>
               <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Phone
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setPhone(text)}
                value={phone}
                    />
               </View>
               <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Mobile
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setMobile(text)}
                value={Mobile}
                    />
               </View>
               <Text style={styles.headerText4}>
               Billing Address
              </Text>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Address
              </Text>
                <InputField
                placeholder={"As above"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setAddress1(text)}
                value={address1}
                    />
               </View>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Suburb / state
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',height:30,borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setState1(text)}
                value={state1}
                    />
               </View> */}
          </KeyboardAwareScrollView>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',backgroundColor:colors.lightGraay,paddingBottom:20,paddingHorizontal:20}}>
                        <Button
                            buttonStyle={[commonStyles.buttonStyle,{backgroundColor:colors.whiteColor} ]}
                            textStyle={[commonStyles.buttonTextStyle,{fontWeight:'bold'}]}
                            text={route?.params?.title ?'Send Quote':"Send Cut List"}
                            onPress={() => props.navigation.navigate("Landing",{screen:"BrowseFilms"})}
                            />
                </View>
        </>
    )
}
export default NewQuote;