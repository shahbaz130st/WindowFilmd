import { useState } from "react";
import { reg } from "../../utils/ValidationConstants";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import { registerData } from "../../Store/ActionsCreator";
import { useDispatch, useSelector } from "react-redux";

export default RegisterFunction = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigation=useNavigation()
    const dispatch = useDispatch()
    const {registerReducer}=useSelector(state=>state)
  
    const createQuote = async(data) => {
      setLoading(true)
      firestore().collection('create_quote')
      .add(data).then((res) => {
        alert("Quote created successfully")
        setLoading(false)
        navigation.navigate('MapClient', { title: 'Quotes',quotesData:data })
      }).catch((e)=>{
        setLoading(false)
        console.log('erroorr==>>',e)
      })
    }

    
    return [loading, createQuote];
};