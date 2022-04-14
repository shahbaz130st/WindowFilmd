import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Login.style";
import { strings } from "../../localization/i18n";
import InputField from "../../components/InputField";
import { colors } from "../../themes/colors";
import commonStyles from "../../themes/commonStyles";
import CustomCheckBox from "../../components/CustomCheckBox";
import Button from "../../components/Button";
import LoginFunction from "./Login.function";
import Loader from "../../utils/Loader";
const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, data, error, loginApiCall, loginValidation] = LoginFunction(props)
    return (
        <View style={styles.mainView}>
            <View style={{ flex: 1 }} />
            <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 40, fontWeight: "900" }}>{strings("loginScreen.welcomBack")}</Text>
                <Text style={styles.blackTextStyle}>{strings("loginScreen.Please")}<Text style={styles.primaryTextStyle}>{" "}{strings("loginScreen.sign in")}<Text style={styles.blackTextStyle}>{" "}{strings("loginScreen.to continue")}</Text></Text></Text>
                <View style={[commonStyles.innerViewStyle]} >
                    <InputField
                        placeholder={strings("loginScreen.email")}
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={commonStyles.inputContainerStyle}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType={"email-address"}
                        autoComplete={"email"}
                        value={email}
                        onEndEditing={() => setEmail(email.trim())}
                    />
                    <InputField
                        placeholder={strings("loginScreen.password")}
                        autoComplete={"password"}
                        placeholderTextColor={colors.blackTextColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.passwordInputinnerStyle}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity style={{ marginVertical: 18 }} onPress={() => { props.navigation.navigate("Register") }}>
                            <Text style={{ color: colors.greyColor, fontSize: 14, fontWeight: "400" }} >{strings("loginScreen.forgetPassword?")}</Text>
                        </TouchableOpacity>
                        <CustomCheckBox
                            isChecked={true}
                            label={strings("loginScreen.rememberMe")}
                            labelStyle={{ color: colors.greyColor, fontSize: 14, fontWeight: "400" }}
                            checkstyle={{ borderColor: colors.greyColor, borderWidth: 1 }} />

                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Button
                            buttonStyle={[commonStyles.buttonStyle, { backgroundColor: colors.primaryColor, width: "40%" }]}
                            textStyle={commonStyles.textStyle}
                            text={strings("loginScreen.signInButtonText")}
                            onPress={() => {
                                // props.navigation.navigate("Register")
                                loginValidation(email, password)
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
export default Login;