import React, { useState } from "react";
import { View, Text, TouchableOpacity,Image , Alert } from "react-native";
import { styles } from "./Login.style";
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
    const [loading, loginValidation] = LoginFunction(props)


    return (
        <View style={styles.mainView}>
            <Image source={require('../../assets/images/splash.jpeg')} style={styles.image}/>
                <View style={[commonStyles.innerViewStyle]} >
                    <InputField
                        placeholder={"Email"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={commonStyles.inputContainerStyle}
                        inputStyle={commonStyles.inputInnerStyle}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType={"email-address"}
                        autoComplete={"email"}
                        value={email}
                        onEndEditing={() => setEmail(email.trim())}
                    />
                    <InputField
                        placeholder={"Password"}
                        autoComplete={"password"}
                        placeholderTextColor={colors.placeholderColor}
                        containerStyle={[commonStyles.inputContainerStyle, { marginTop: 18 }]}
                        inputStyle={commonStyles.passwordInputinnerStyle}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />

                    </View>
                    <Text
                       style={{
                       marginBottom: 20,
                       fontSize: 14,
                        }}>
                     {"Don't have an account? "}
                     <Text
                    style={{
                       color: colors.tintColor,
                      fontSize: 14,
                     }}
                     onPress={() => props.navigation.navigate("Register")}
                     >
                  {'Sign Up'}
                  </Text>
                  </Text>
                        <Button
                            buttonStyle={[commonStyles.buttonStyle, { backgroundColor: colors.primaryColor, width: "40%" }]}
                            textStyle={commonStyles.textStyle}
                            text={"LogIn"}
                            onPress={() => {
                                // __doSingIn();
                                // props.navigation.dispatch(mainApp)
                                loginValidation(email, password)
                            }}
                        />
            <Loader visible={loading} />
        </View>
    )

}
export default Login;