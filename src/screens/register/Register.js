import React, { useState, useEffect } from "react";
import { View, Text,Image, Alert } from "react-native";
import { styles } from "./Register.style";
import { strings } from "../../localization/i18n";
import InputField from "../../components/InputField";
import { colors } from "../../themes/colors";
import commonStyles from "../../themes/commonStyles";
import Button from "../../components/Button";
import CustomCheckBox from "../../components/CustomCheckBox";
import RegisterFunction from "./Register.function";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
// import DropDownPicker from 'react-native-dropdown-picker';
import Loader from "../../utils/Loader";
import { useNavigation } from "@react-navigation/native";

import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



const Register = (props) => {
    const [purchaser, setPurchaser] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [contactPerson, setContactPerson] = useState("")
    const [instalationAddress, setInstalationAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [value, setValue] = useState('');
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const navigation=useNavigation()

    const [loading, registerValidation] = RegisterFunction(props)

    const onChange=(i)=>{
        switch (i) {
            case 1:
                setCheck2(false)
                setCheck1(true)
                setValue('Commercial')
                break;
            case 2:
                setCheck1(false)
                setCheck2(true)
                setValue('Residential')
                break;
        
            default:
                setCheck1(false)
                setCheck2(false)
                setValue('')
                break;
        }
    }
    return (
        <View style={styles.mainView}>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} showsVerticalScrollIndicator={false} >
            <View style={{ width: "100%", alignItems: "center" }}>
               <Image source={require('../../assets/images/splash.jpeg')} style={styles.image}/>
                {/* <Text style={styles.blackTextStyle}>{"Customer Information"}</Text> */}
                <View style={[commonStyles.innerViewStyle]} >
                    <InputField
                        placeholder={"Purchaser Name"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={commonStyles.inputContainerStyle}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setPurchaser(text)}
                        value={purchaser}
                        // sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={"Contact Person"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setContactPerson(text)}
                        value={contactPerson}
                        // sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={"Phone"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setPhoneNumber(text)}
                        value={phoneNumber}
                        // sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={"Email"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        // secureTextEntry={true}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        // sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={"Password"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.passwordInputinnerStyle}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <InputField
                        placeholder={"Re-enter Password"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.passwordInputinnerStyle}
                        secureTextEntry={true}
                        onChangeText={(text) => setRePassword(text)}
                        value={rePassword}
                    />
                    <InputField
                        placeholder={"Instalation Address"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        // secureTextEntry={true}
                        onChangeText={(text) => setInstalationAddress(text)}
                        value={instalationAddress}
                        // sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={"City/Suburb"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setCity(text)}
                        value={city}
                        // sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={"State"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setState(text)}
                        value={state}
                        // sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <Text style={styles.typeText}>Type</Text>
                    <CustomCheckBox isChecked={check1} onChange={()=>onChange(1)} label1={"Commercial"}/>
                    <CustomCheckBox isChecked={check2} onChange={()=>onChange(2)} label1={"Residential"}/>
                    <Text
                       style={{
                       marginVertical: 10,
                       fontSize: 14,
                        }}>
                     {"Already have an account? "}
                     <Text
                    style={{
                       color: colors.tintColor,
                      fontSize: 14,
                     }}
                     onPress={() => navigation.navigate("Login")}
                     >
                  {'LogIn'}
                  </Text>
                  </Text>
                    <View style={{ alignItems: "center" }}>
                        <Button
                            buttonStyle={[commonStyles.buttonStyle, { backgroundColor: colors.primaryColor, width: 161 }]}
                            textStyle={commonStyles.textStyle}
                            text={"SignUp"}
                            onPress={() => {
                                // signUpUser();
                                registerValidation(purchaser, email, phoneNumber, contactPerson, instalationAddress, city, state, password, rePassword,value)
                            }}
                        />
                    </View>
                </View>
            </View>
            </KeyboardAwareScrollView>
            <Loader visible={loading} />
        </View>
    )

}
export default Register;