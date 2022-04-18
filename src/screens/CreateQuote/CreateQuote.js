import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Switch } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from "./CreateQuote.style";
import Header from "../../components/Header";
import commonStyles from "../../themes/commonStyles";
import Footer from "../../components/Footer";
import { Icon } from "@rneui/base";
import { colors } from "../../themes/colors";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../components/InputField";
const CreateQuote = (props) => {
  const [password, setPassword] = useState("")
  const data=[
    {Title:'KBSC job center',subTitle:"quote 26",place:'KBSC in kombay',date:'last modified:2/12/21',id:1},
    {Title:'KBSC job center',subTitle:"quote 26",place:'KBSC in kombay',date:'last modified:2/12/21',id:2},
    {Title:'KBSC job center',subTitle:"quote 26",place:'KBSC in kombay',date:'last modified:2/12/21',id:3},
    {Title:'KBSC job center2',subTitle:"quote 27",place:'KBSC in khiyali',date:'last modified:2/14/21',id:4}
  ]
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);

  const navigation =useNavigation()
    return (
        <>
          <Header rightIcon={true} backArrow={true} leftOnPress={()=>navigation.goBack()} left={"Job"} center={"Create Quote"}/>
          <View style={styles.mainView}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
            <TouchableOpacity>
              <View style={styles.headerView}>
              <Text style={styles.headerText}>
                Film area plus wastage
              </Text>
              <Text style={styles.headerText1}>
                2.53m
              </Text>
               </View>
            </TouchableOpacity>
            <View style={styles.line}/>
              <View style={styles.headerView}>
                <View style={{flexDirection:'row'}}>
              <Text style={styles.headerText3}>
               Price Per m
              </Text>
               <Text style={styles.sub}>2</Text>
                </View>
                <InputField
                placeholder={"$ per m" + "\u00B2"}
                autoComplete={"password"}
                placeholderTextColor={colors.greyTypeColor}
                containerStyle={[commonStyles.inputContainerStyle,{width:'40%',borderColor:colors.whiteColor}]}
                inputStyle={commonStyles.passwordInputinnerStyle}
                onChangeText={(text) => setPassword(text)}
                value={password}
                    />
               </View>
            <View style={styles.line}/>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
                Film and labour total
              </Text>
              <Text style={styles.headerText1}>
              $0.00
              </Text>
               </View>
            <View style={styles.line}/>
            <View style={styles.area}/>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
                Discount
              </Text>
              <Text style={styles.headerText1}>
              $0.00
              </Text>
               </View>
            <View style={styles.line}/>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
                Extra costs
              </Text>
              <Text style={styles.headerText1}>
              $0.00
              </Text>
               </View>
            <View style={styles.line}/>
            <View style={styles.area}/>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
                GST (10%)
              </Text>
              <Text style={styles.headerText1}>
              $0.00
              </Text>
               </View>
            <View style={styles.line}/>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
               Total
              </Text>
              <Text style={styles.headerText1}>
                $0.00
              </Text>
               </View>
            <View style={styles.line}/>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
               Attach energy savings
              </Text>
              <View style={{ backgroundColor: isEnabled ? colors.greyColor : colors.whiteColor, borderRadius: 20 }}>
               <Switch
                 ios_backgroundColor={colors.greyColor}
                thumbColor={isEnabled ? colors.whiteColor : colors.greyColor}
                 trackColor={{true: colors.greyColor, false: colors.greyColor}}
                 onValueChange={toggleSwitch}
                 value={isEnabled}
                />
          </View>
               </View>
            <View style={styles.line}/>
          </KeyboardAwareScrollView>
          </View>
          <Footer leftOnPress={()=>navigation.navigate('SelectRoom')} left={"Select Rooms"} right={"Email Quotes"}/>
        </>
    )
}
export default CreateQuote;