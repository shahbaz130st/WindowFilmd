import { Platform, StyleSheet } from "react-native";
import { colors } from "./colors";
import { phoneScreen } from "./phoneScreen";
// import { HeaderHeight } from '../Utils/Dimensions';
const styles = StyleSheet.create(
    {
        mainViewStyle: {
            flex: 1
        },
        innerViewStyle: {
            // height: phoneScreen.height - HeaderHeight,
            paddingHorizontal: 24,
            paddingBottom: 50,
            padding: 30
        },
        buttonStyle: {
            marginTop: 18,
            width: "100%",
            height: Platform.OS === "android" ? phoneScreen.height * 7 / 100 : phoneScreen.height * 6 / 100,
            alignItems: "center",
            borderRadius: phoneScreen.height * 1 / 100,
        },
        buttonTextStyle: {
            textAlign: "center",
            color: colors.secondaryColor,
            fontWeight: "500",
            fontSize: 16
        },
        shadowStyle: {
            shadowColor: colors.primaryColor,
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,

            elevation: 14,
        },
        inputContainerStyle: {
            backgroundColor: colors.whiteColor,
            width: "100%",
            height: Platform.OS === "android" ? phoneScreen.height * 7 / 100 : phoneScreen.height * 6 / 100,
            borderRadius: phoneScreen.height * 1 / 100,
            paddingHorizontal: 15,
            borderColor: colors.greyColor,
            borderWidth: 2,
            flexDirection: "row"
        },
        inputInnerStyle: {
            height: "100%",
            width: "100%",
            padding: 0,
            color: colors.placeholderColor,
            fontSize: 16,
            fontWeight: "400",
        },
        passwordInputinnerStyle: {
            height: "100%",
            width: "85%",
            padding: 0,
            color: colors.placeholderColor,
            fontSize: 16,
            fontWeight: "400",
        },
        mobileInputInnerStyle: {
            height: "100%",
            width: "75%",
            padding: 0,
            color: colors.placeholderColor,
            fontSize: 16,
            fontWeight: "400",
        },
        selectionInputTextStyle: {
            height: "100%",
            width: "85%",
            justifyContent: "center",
            alignItems: "flex-start"
        },

        selectionRightArrowView: {
            height: "100%",
            width: "15%",
            alignItems: "flex-end",
            justifyContent: "center"
        },
        selectionRightArrow: {
            height: 6,
            width: 12,
            resizeMode: "contain",
            tintColor: colors.placeholderColor
        },
        mobileFlagStyle: {
            justifyContent: "center",
            width: "10%",
            height: "100%",
            alignItems: "flex-start"
        },
        mobileCountryCodeStyle: {
            height: "100%",
            width: "15%",
            justifyContent: "center",
            alignItems: "flex-start"
        },
        checkLabelStyle: {
            color: colors.blackTextColor,
            fontSize: 14
        },
        WhiteButtonStyle: {
            padding:7,
            flexDirection: "row",
            width: "100%",
            borderRadius: 16,
            marginTop: 25,
            alignItems: "center",
            paddingHorizontal: 10,
            justifyContent: "space-between",
          },
          lWhiteImageStyle: {
            height: 24,
            width: 28,
            resizeMode: "contain",
            tintColor: colors.whiteColor
          },
          leftImageViewStyle:{
              height:47,
              width:47,
              borderRadius:9,
              alignItems:"center",
              justifyContent:"center",
              marginRight:14
          },
          textStyle: {
            fontSize: 16,
            fontWeight: "400",
            fontStyle: "normal",
          },
          text1Style: {
            fontSize: 14,
            fontWeight: "700",
            fontStyle: "normal",
          },
    }
)
export default styles;