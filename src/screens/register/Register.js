import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./Register.style";
import { strings } from "../../localization/i18n";
import InputField from "../../components/InputField";
import { colors } from "../../themes/colors";
import commonStyles from "../../themes/commonStyles";
import Button from "../../components/Button";
import RegisterFunction from "./Register.function";
import DropDownPicker from 'react-native-dropdown-picker';
import Loader from "../../utils/Loader";
const Register = () => {
    useEffect(() => {
        fetchProfessionApiCall()
    }, [])
    const [legalName, setLegalName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmedPassword] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [location, setLocation] = useState("")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([]);

    const [loading, data, error, fetchProfessionApiCall, registerValidation] = RegisterFunction()
    return (
        <View style={styles.mainView}>
            <View style={{ flex: 1 }} />
            <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 40, fontWeight: "900" }}>{strings("signUpScreen.Hello")}</Text>
                <Text style={styles.blackTextStyle}>{strings("loginScreen.Please")}<Text style={styles.primaryTextStyle}>{" "}{strings("signUpScreen.signUp")}<Text style={styles.blackTextStyle}>{" "}{strings("signUpScreen.toStartJourny")}</Text></Text></Text>
                <View style={[commonStyles.innerViewStyle]} >
                    <InputField
                        placeholder={strings("signUpScreen.legalName")}
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={commonStyles.inputContainerStyle}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setLegalName(text)}
                        keyboardType={"email-address"}
                        autoComplete={"email"}
                        value={legalName}
                        sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={strings("signUpScreen.email")}
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType={"email-address"}
                        autoComplete={"email"}
                        value={email}
                        onEndEditing={() => setEmail(email.trim())}
                        sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={strings("signUpScreen.phoneNumber")}
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setPhoneNumber(text)}
                        keyboardType={"email-address"}
                        value={phoneNumber}
                        sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={strings("signUpScreen.password")}
                        autoComplete={"password"}
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.passwordInputinnerStyle}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={strings("signUpScreen.confirmPassword")}
                        autoComplete={"password"}
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.passwordInputinnerStyle}
                        secureTextEntry={true}
                        onChangeText={(text) => setConfirmedPassword(text)}
                        value={confirmPassword}
                        sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={strings("signUpScreen.businessName")}
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setBusinessName(text)}
                        keyboardType={"email-address"}
                        value={businessName}
                        sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    <InputField
                        placeholder={strings("signUpScreen.location")}
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setLocation(text)}
                        keyboardType={"email-address"}
                        value={location}
                        sterick={"*"}
                        sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                        sterickTextStyle={commonStyles.sterickTextStyle}
                    />
                    {
                        data !== null &&
                        <DropDownPicker
                            schema={{
                                label: 'title',
                                value: '_id'
                            }}
                            // multiple={true}
                            style={{ width: "100%", marginTop: 20, borderTopColor: "white", borderLeftColor: "white", borderRightColor: "white" }}
                            placeholder={"Select Profession"}
                            open={open}
                            value={value}
                            items={data}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            multiple={true}
                            min={0}
                            max={5}
                        />
                    }
                    <View style={{ alignItems: "center" }}>
                        <Button
                            buttonStyle={[commonStyles.buttonStyle, { backgroundColor: colors.primaryColor, width: 161 }]}
                            textStyle={commonStyles.textStyle}
                            text={strings("signUpScreen.signUpButtonText")}
                            onPress={() => {
                                registerValidation(legalName, email, phoneNumber, password, confirmPassword, businessName, location, value)
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }} />
            <Loader visible={loading} />
        </View>
    )

}
export default Register;