import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, SectionList } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from "./BrowseFilmsStyle";
import Footer from "../../components/Footer";
import commonStyles from "../../themes/commonStyles";
import { colors } from "../../themes/colors";
import { useNavigation } from "@react-navigation/native";
import QuoteItem from "../../components/QuoteItem";
import InputField from "../../components/InputField";
import Header1 from "../../components/MainHeader";
import { useSelector } from "react-redux";

const BrowseFilms = (props) => {
  const [name, setName] = useState("")
  const [listOfItems, setListOfItems] = useState([[
    { name: "R Silver 20i" },
    { name: "R Silver 35i" },
    { name: "R Silver 50i" },
    { name: "Silver 20, Low-Ei" },
    { name: "NT PerLite 20i" },
    { name: "NT PerLite 35i" },
    { name: "NT PerLite 50i" },
    { name: "NT PerLite 70i" },
    { name: "NT Natura 05i" },
    { name: "NT Natura 15i" },
    { name: "NT Natura 30i" },
    { name: "DR OptiTune 05i" },
    { name: "DR OptiTune 15i" },
    { name: "DR OptiTune 20i" },
    { name: "DR OptiTune 30i" },
    { name: "DR OptiTune 40i" },
    { name: "DR OptiShade 15i" },
    { name: "DR OptiShade 25i" },
    { name: "DR OptiShade 35i" },
    { name: "e-Lite 45i" },
    { name: "e-Lite 70i" },
    { name: "Matte Translucent, 2 mil" },
    { name: "Black Out" },
    { name: "White Out" },
    { name: "UV Filter, 2 mil" },
    { name: "Silver 20 Xtra" },
    { name: "Silver 35 Xtra" },
    { name: "PolyZone Silver 20 Xtra" },
    { name: "Solar Bronze 20 Xtra" },
    { name: "DR Grey 10 x" },
    { name: "DR Grey 20 x" },
    { name: "DR Grey 35 x" },
    { name: "e-Lite 45 Xtra" },
    { name: "e-Lite 70 Xtra" },
    { name: "XTRM Silver 20" },
    { name: "XTRM Silver 35" },
    { name: "XTRM SkyLite S20X" },
    { name: "XTRM PolyZone SkyLite" },
    { name: "XTRM DR Grey 10" },
    { name: "XTRM Dr Grey 20" },
    { name: "XTRM DR Grey 35" },
    { name: "SF Clear 4 mil i" },
    { name: "SF Clear 7 mil i" },
    { name: "SF Clear 8 mil i" },
    { name: "SF Clear 12 mil i" },
    { name: "SF Clear 15 mil i" },
    { name: "R Silver 20 4 mil" },
    { name: "NT PerLite Ceramic 35 6 mil" },
    { name: "NT PerLite Ceramic 35 10 mil" },
    { name: "SF Matte 5 mil i" },
    { name: "SF Matte 12 mil i" },
    { name: "SP elite 70 8 mil" },
    { name: "AG Clear 4 mil ix" },
    { name: "AG Clear 6 mil ix" },
    { name: "Clear 4 mil Poly X" },
    { name: "Clear 6 mil Poly X" }
  ]])
  const [filteredListOfItems, setFilteredListOfItems] = useState([
    { name: "R Silver 20i" },
    { name: "R Silver 35i" },
    { name: "R Silver 50i" },
    { name: "Silver 20, Low-Ei" },
    { name: "NT PerLite 20i" },
    { name: "NT PerLite 35i" },
    { name: "NT PerLite 50i" },
    { name: "NT PerLite 70i" },
    { name: "NT Natura 05i" },
    { name: "NT Natura 15i" },
    { name: "NT Natura 30i" },
    { name: "DR OptiTune 05i" },
    { name: "DR OptiTune 15i" },
    { name: "DR OptiTune 20i" },
    { name: "DR OptiTune 30i" },
    { name: "DR OptiTune 40i" },
    { name: "DR OptiShade 15i" },
    { name: "DR OptiShade 25i" },
    { name: "DR OptiShade 35i" },
    { name: "e-Lite 45i" },
    { name: "e-Lite 70i" },
    { name: "Matte Translucent, 2 mil" },
    { name: "Black Out" },
    { name: "White Out" },
    { name: "UV Filter, 2 mil" },
    { name: "Silver 20 Xtra" },
    { name: "Silver 35 Xtra" },
    { name: "PolyZone Silver 20 Xtra" },
    { name: "Solar Bronze 20 Xtra" },
    { name: "DR Grey 10 x" },
    { name: "DR Grey 20 x" },
    { name: "DR Grey 35 x" },
    { name: "e-Lite 45 Xtra" },
    { name: "e-Lite 70 Xtra" },
    { name: "XTRM Silver 20" },
    { name: "XTRM Silver 35" },
    { name: "XTRM SkyLite S20X" },
    { name: "XTRM PolyZone SkyLite" },
    { name: "XTRM DR Grey 10" },
    { name: "XTRM Dr Grey 20" },
    { name: "XTRM DR Grey 35" },
    { name: "SF Clear 4 mil i" },
    { name: "SF Clear 7 mil i" },
    { name: "SF Clear 8 mil i" },
    { name: "SF Clear 12 mil i" },
    { name: "SF Clear 15 mil i" },
    { name: "R Silver 20 4 mil" },
    { name: "NT PerLite Ceramic 35 6 mil" },
    { name: "NT PerLite Ceramic 35 10 mil" },
    { name: "SF Matte 5 mil i" },
    { name: "SF Matte 12 mil i" },
    { name: "SP elite 70 8 mil" },
    { name: "AG Clear 4 mil ix" },
    { name: "AG Clear 6 mil ix" },
    { name: "Clear 4 mil Poly X" },
    { name: "Clear 6 mil Poly X" }])
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#E5E5E5",
          marginTop: 10,
          marginBottom: 9
        }}
      />
    );
  }
  const renderNoContent = ({ section }) => {
    if (section.data.length == 0) {
      return (
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={[commonStyles.bodyTextStyle, { color: colors.placeholderColor }]}>{section.title == "People who can send you verification request" ? "You have not allowed anyone to request you!" : "No iRhere user in your contact list!"}</Text>
        </View>
      )
    }
    return null
  }

  return (
    <View style={styles.mainView}>
      <Header1 left={"Window Films"} />
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
        <InputField
          placeholder={"Search films"}
          placeholderTextColor={colors.placeholderColor}
          containerStyle={[commonStyles.inputContainerStyle1, { width: "100%" }]}
          inputStyle={commonStyles.passwordInputinnerStyle}
          onChangeText={(text) => {
            setName(text)
            // if (text.length == 0) {
            //   setListOfItems([...filteredListOfItems])
            // }
            // else if (text.length > name.length) {
            //   let interestsDataTemp = listOfItems;
            //   interestsDataTemp = interestsDataTemp.filter((item) => (
            //     item?.name.toLowerCase().indexOf(text.toLowerCase()) == 0
            //   ))
            //   setListOfItems([...interestsDataTemp])

            // }
            // else if (name.length > text.length) {
            //   let interestsDataTemp = filteredListOfItems;
            //   interestsDataTemp = interestsDataTemp.filter((item) => (
            //     item?.name.toLowerCase().indexOf(text.toLowerCase()) == 0
            //   ))
            //   setListOfItems([...interestsDataTemp])
            // }
          }}
          value={name}
          search
        />
        <View style={{ flex: 1, width: '100%', backgroundColor: colors.whiteColor }}>
          {listOfItems.length > 0 &&
            <SectionList
              ItemSeparatorComponent={({ item, index }) => {
                return (<FlatListItemSeparator />)
              }
              }
              sections={[
                {
                  title: 'Reflective Films Interior',
                  data: [
                    { name: "R Silver 20i" },
                    { name: "R Silver 35i" },
                    { name: "R Silver 50i" },
                    { name: "Silver 20, Low-Ei" }
                  ]
                },
                {
                  title: 'Neutral Films Interior',
                  data: [
                    { name: "NT PerLite 20i" },
                    { name: "NT PerLite 35i" },
                    { name: "NT PerLite 50i" },
                    { name: "NT PerLite 70i" },
                    { name: "NT Natura 05i" },
                    { name: "NT Natura 15i" },
                    { name: "NT Natura 30i" }
                  ]
                },
                {
                  title: 'Dual Reflective Films Interior',
                  data: [
                    { name: "DR OptiTune 05i" },
                    { name: "DR OptiTune 15i" },
                    { name: "DR OptiTune 20i" },
                    { name: "DR OptiTune 30i" },
                    { name: "DR OptiTune 40i" },
                    { name: "DR OptiShade 15i" },
                    { name: "DR OptiShade 25i" },
                    { name: "DR OptiShade 35i" }
                  ]
                },
                {
                  title: 'Spectrally Selective Films Interior',
                  data: [
                    { name: "e-Lite 45i" },
                    { name: "e-Lite 70i" }
                  ]
                },
                {
                  title: 'Specialty Films Decorative/Privacy',
                  data: [
                    { name: "Matte Translucent, 2 mil" },
                    { name: "Black Out" },
                    { name: "White Out" },
                    { name: "UV Filter, 2 mil" }
                  ]
                },
                {
                  title: 'SolarZone Xtra Films Exterior',
                  data: [
                    { name: "Silver 20 Xtra" },
                    { name: "Silver 35 Xtra" },
                    { name: "PolyZone Silver 20 Xtra" },
                    { name: "Solar Bronze 20 Xtra" },
                    { name: "DR Grey 10 x" },
                    { name: "DR Grey 20 x" },
                    { name: "DR Grey 35 x" },
                    { name: "e-Lite 45 Xtra" },
                    { name: "e-Lite 70 Xtra" }
                  ]
                },
                {
                  title: 'XTRM SolarZone Films Exterior',
                  data: [
                    { name: "XTRM Silver 20" },
                    { name: "XTRM Silver 35" },
                    { name: "XTRM SkyLite S20X" },
                    { name: "XTRM PolyZone SkyLite" },
                    { name: "XTRM DR Grey 10" },
                    { name: "XTRM Dr Grey 20" },
                    { name: "XTRM DR Grey 35" }
                  ]
                },
                {
                  title: 'Safety & Security Films',
                  data: [
                    { name: "SF Clear 4 mil i" },
                    { name: "SF Clear 7 mil i" },
                    { name: "SF Clear 8 mil i" },
                    { name: "SF Clear 12 mil i" },
                    { name: "SF Clear 15 mil i" },
                    { name: "R Silver 20 4 mil" },
                    { name: "NT PerLite Ceramic 35 6 mil" },
                    { name: "NT PerLite Ceramic 35 10 mil" },
                    { name: "SF Matte 5 mil i" },
                    { name: "SF Matte 12 mil i" },
                    { name: "SP elite 70 8 mil" }
                  ]
                },
                {
                  title: 'Surface Protection',
                  data: [
                    { name: "AG Clear 4 mil ix" },
                    { name: "AG Clear 6 mil ix" },
                    { name: "Clear 4 mil Poly X" },
                    { name: "Clear 6 mil Poly X" }
                  ]
                },
              ]}
              stickySectionHeadersEnabled={false}
              renderSectionHeader={({ section }) => (
                <Text style={{ ...styles.QouteText1, fontSize: 15 }}> {section.title}</Text>
              )}
              // renderSectionFooter={renderNoContent}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ marginHorizontal: 20, borderRadius: 5, marginBottom: 2, backgroundColor: colors.whiteColor }}>
                    <QuoteItem title={item.name} onPress={() => navigation.navigate('SingleFilms', { title: item.Title })} />
                  </View>
                )
              }}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              extraData={{ list: listOfItems }}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={false}
            />
          }
          {
            (listOfItems.length == 0) &&
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "800" }}>{"No Window Films!"}</Text>
            </View>
          }
        </View>
        {/* <Text style={{ ...styles.QouteText1, fontSize: 15 }}>BROWSE TINT FILMS</Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            style={{ width: "100%" }}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginHorizontal: 20, borderRadius: 5, marginBottom: 2, backgroundColor: colors.whiteColor }}>
                  <QuoteItem title={item.Title} onPress={() => navigation.navigate('SingleFilms', { title: item.Title })} />
                </View>
              )
            }} />
          <Text style={{ ...styles.QouteText1, fontSize: 15 }}>DUAL REFLECTIVE FILMS</Text>
          <FlatList
            data={data2}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            style={{ width: "100%" }}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginHorizontal: 20, borderRadius: 5, marginBottom: 2, backgroundColor: colors.whiteColor }}>
                  <QuoteItem title={item.Title} />
                </View>
              )
            }}
          />
          <Text style={{ ...styles.QouteText1, fontSize: 15 }}>DUAL REFLECTIVE FILMS</Text>
          <FlatList
            data={data2}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            style={{ width: "100%" }}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginHorizontal: 20, borderRadius: 5, marginBottom: 2, backgroundColor: colors.whiteColor }}>
                  <QuoteItem title={item.Title} />
                </View>
              )
            }}
          /> */}
      </KeyboardAwareScrollView>
    </View>
  )
}
export default BrowseFilms;