import React, { useState, useEffect } from "react";
import { View, Text,Image } from "react-native";
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
const Register = () => {
    const [purchaser, setPurchaser] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [contactPerson, setContactPerson] = useState("")
    const [instalationAddress, setInstalationAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([]);
    const navigation=useNavigation()

    const [loading, data, error, fetchProfessionApiCall, registerValidation] = RegisterFunction()
    return (
        <View style={styles.mainView}>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} showsVerticalScrollIndicator={false} >
            <View style={{ width: "100%", alignItems: "center" }}>
               <Image source={require('../../assets/images/splash.jpeg')} style={styles.image}/>
                {/* <Text style={styles.blackTextStyle}>{"Customer Information"}</Text> */}
                <View style={[commonStyles.innerViewStyle]} >
                    <InputField
                        placeholder={"Purchaser Name"}
                        placeholderTextColor={colors.blackTextColor}
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
                        placeholderTextColor={colors.blackTextColor}
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
                        placeholderTextColor={colors.blackTextColor}
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
                        placeholderTextColor={colors.blackTextColor}
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
                        placeholder={"Instalation Address"}
                        placeholderTextColor={colors.blackTextColor}
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
                        placeholderTextColor={colors.blackTextColor}
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
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setState(text)}
                        value={state}
                        // sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <Text style={styles.typeText}>Type</Text>
                    <CustomCheckBox label1={"Commercial"}/>
                    <CustomCheckBox label1={"Residential"}/>
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
                                // registerValidation( email, phoneNumber,value)
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