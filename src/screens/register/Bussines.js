
import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import PhoneInput from "react-native-phone-number-input";
import moment from "moment";
import { styles } from "./Register.style";
import InputField from "../../components/InputField";
import { colors } from "../../themes/colors";
import commonStyles from "../../themes/commonStyles";
import Button from "../../components/Button";
import CustomCheckBox from "../../components/CustomCheckBox";
import RegisterFunction from "./Register.function";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Loader from "../../utils/Loader";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import { Icon } from "@rneui/base";


const ImageOptions = {
    width: 500,
    height: 500,
    quality: 0.6,
    mediaType: 'photo',
};
const Bussines = (props) => {


    const [Bussiness, setBussiness] = useState("")
    const [ABN, setABN] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [formattedValue, setFormattedValue] = useState("");
    const [contactPerson, setContactPerson] = useState("")
    const [instalationAddress, setInstalationAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [WFAANZ, setWFAANZ] = useState("")
    const [member, setMember] = useState(false);
    const [installer, setInstaller] = useState(false);
    const [companyLogo, setCompanyLogo] = useState('');
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const navigation = useNavigation()
    const phoneInput = useRef()

    const [loading, , BussinessValidation] = RegisterFunction(props)

    const addImage = () => {
        launchImageLibrary(ImageOptions, imageCallBack);
    };
    const imageCallBack = async response => {
        console.log('image response', response);
        if (response.didCancel) {
            console.log('Image Picker Canceled');
        } else if (response.error) {
            console.log('image picker error', response.error);
        } else {
            const uploadImageSource = {
                name: moment().format('x') + ".jpeg",
                uri: response.assets[0].uri,
                type: "image/jpeg",
            };
            setCompanyLogo(uploadImageSource);
        }
    };

    const onChange = () => {
        if (member) {
            setMember(false)
        } else {
            setMember(true)
        }
    }
    const onChange1 = () => {
        if (installer) {
            setInstaller(false)
        } else {
            setInstaller(true)
        }
    }
    return (
        <>
            <Header center={"Bussiness Profile"} />
            <View style={styles.mainView}>
                <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} showsVerticalScrollIndicator={false} >
                    <View style={{ width: "100%", alignItems: "center" }}>
                        {/* <Text style={styles.blackTextStyle}>{"Customer Information"}</Text> */}
                        <View style={[commonStyles.innerViewStyle]} >
                            <InputField
                                placeholder={"Bussiness Name"}
                                placeholderTextColor={colors.placeholderColor}
                                containerStyle={commonStyles.inputContainerStyle}
                                inputStyle={commonStyles.inputInnerStyle}
                                onChangeText={(text) => setBussiness(text)}
                                value={Bussiness}
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

                            {/* <View style={[commonStyles.numberContainerStyle]}> */}
                            <PhoneInput
                                containerStyle={{ width: '100%', height: 52, borderRadius: 5, marginTop: 18 }}
                                textContainerStyle={{ backgroundColor: colors.whiteColor, borderRadius: 5 }}
                                textInputStyle={{ height: 52 }}
                                ref={phoneInput}
                                defaultValue={phoneNumber}
                                defaultCode='AU'
                                layout="first"
                                onChangeText={(text) => {
                                    setPhoneNumber(text);
                                    // console.log(text);
                                }}
                                onChangeFormattedText={(text) => {
                                    setFormattedValue(text);
                                    // console.log(text+phoneNumber);
                                }}
                                withDarkTheme
                            />
                            {/* </View> */}
                            {/* <InputField
                                placeholder={"Phone"}
                                placeholderTextColor={colors.placeholderColor}
                                containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                                inputStyle={commonStyles.inputInnerStyle}
                                onChangeText={(text) => setPhoneNumber(text)}
                                value={phoneNumber}
                                // sterick={"*"}
                                sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                                sterickTextStyle={commonStyles.sterickTextStyle}
                            /> */}
                            <InputField
                                placeholder={"ABN Number"}
                                placeholderTextColor={colors.placeholderColor}
                                containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                                inputStyle={commonStyles.inputInnerStyle}
                                // secureTextEntry={true}
                                onChangeText={(text) => setABN(text)}
                                value={ABN}
                                // sterick={"*"}
                                sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                                sterickTextStyle={commonStyles.sterickTextStyle}
                            />
                            <InputField
                                placeholder={"Bussiness Address"}
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
                            <CustomCheckBox isChecked={member} onChange={() => onChange()}
                                checkstyle={{ marginTop: 10 }} containerStyle={{ alignItems: 'flex-start' }}
                                label1={"Are you a member of Window Film Association Ausdtralia New Zealand ? If so WFAANZ logo will appear on your sales quotes to customers with your membership number"} />
                            <InputField
                                placeholder={"WFAANZ Member Number"}
                                placeholderTextColor={colors.placeholderColor}
                                containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                                inputStyle={commonStyles.inputInnerStyle}
                                onChangeText={(text) => setWFAANZ(text)}
                                value={WFAANZ}
                                // sterick={"*"}
                                sterickTextViewStyle={commonStyles.sterickTextViewStyle}
                                sterickTextStyle={commonStyles.sterickTextStyle}
                            />
                            <CustomCheckBox checkstyle={{ marginTop: 10 }} containerStyle={{ alignItems: 'flex-start' }}
                                isChecked={installer} onChange={() => onChange1()}
                                label2={"by checking this box and adding your WERS for film membership number, the WERS for film logo will also appear on your sales quotes and you will have the option to to issue WERS certificates and establishes you as a window film energy expert"}
                                label1={"Are you an accredited WERS for film for Film installer ?"} />
                            <Text style={styles.textUpload}>
                                Upload Company Logo
                            </Text>
                            <TouchableOpacity activeOpacity={0.4} onPress={() => addImage()} style={{ alignItems: 'center' }}>
                                <View style={styles.uploadBox}>
                                    {companyLogo ?
                                        <Image source={companyLogo} style={{ width: '100%', height: '90%' }} />
                                        :
                                        <>
                                            <Icon type="antdesign" name="clouduploado" />
                                            <Text>Upload Company Logo</Text>
                                        </>
                                    }
                                </View>
                            </TouchableOpacity>
                            <View style={{ alignItems: "center" }}>
                                <Button
                                    buttonStyle={[commonStyles.buttonStyle, { backgroundColor: colors.primaryColor, width: '100%' }]}
                                    textStyle={commonStyles.textStyle}
                                    text={"Done"}
                                    onPress={() => {
                                        // signUpUser();
                                        BussinessValidation(Bussiness, contactPerson, formattedValue + phoneNumber, ABN, instalationAddress, city, state, member, WFAANZ, installer, companyLogo)
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                <Loader visible={loading} />
            </View>
        </>
    )

}
export default Bussines;