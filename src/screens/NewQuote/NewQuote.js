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
    return (
        <>
          {route?.params?.title ?
          <Header backArrow leftOnPress={()=>navigation.goBack()} left={route?.params?.title} center={"Edit Client Name"}/>:
          <Header leftOnPress={()=>navigation.goBack()} left={"Cancel"} right={"Save"} center={"New Quote"}/> }
          <View style={styles.mainView}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
            <TouchableOpacity>
              <View style={styles.headerView1}>
              <Text style={styles.headerText}>
                Quote number
              </Text>
              <Text style={styles.headerText1}>
                28
              </Text>
               </View>
            </TouchableOpacity>
            <View style={styles.line}/>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Customer Name
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setPassword(text)}
                value={password}
                    />
               </View>
               <View style={styles.line}/>
               <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Job Name
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setJob(text)}
                value={job}
                    />
               </View>
               <View style={styles.line}/>
               <Text style={styles.headerText4}>
               Site Address
              </Text>
              <View style={styles.line}/>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Address
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setAddress(text)}
                value={address}
                    />
               </View>
               <View style={styles.line}/>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Suburb / state
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setState(text)}
                value={state}
                    />
               </View>
               <View style={styles.line}/>
               <Text style={styles.headerText4}>
               Contact
              </Text>
              <View style={styles.line}/>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Name
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setName(text)}
                value={name}
                    />
               </View>
               <View style={styles.line}/><View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Email
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setEmail(text)}
                value={email}
                    />
               </View>
               <View style={styles.line}/><View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Phone
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setPhone(text)}
                value={phone}
                    />
               </View>
               <View style={styles.line}/><View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Mobile
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setMobile(text)}
                value={Mobile}
                    />
               </View>
               <View style={styles.line}/>
               <Text style={styles.headerText4}>
               Billing Address
              </Text>
              <View style={styles.line}/>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Address
              </Text>
                <InputField
                placeholder={"As above"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setAddress1(text)}
                value={address1}
                    />
               </View>
               <View style={styles.line}/>
              <View style={styles.headerView}>
              <Text style={styles.headerText3}>
               Suburb / state
              </Text>
                <InputField
                placeholder={"required"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setState1(text)}
                value={state1}
                    />
               </View>
               <View style={styles.line}/>
          </KeyboardAwareScrollView>
          </View>
          {route?.params?.title ? <Footer right={"Show on Map"}/>
          :null}
        </>
    )
}
export default NewQuote;