import { useState } from "react";
import { reg } from "../../utils/ValidationConstants";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";

export default RegisterFunction = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigation=useNavigation()
  
    const registerValidation = ( email, password) => {
        // if (purchaser === "") {
        //     alert("Purchaser name is required")
        //     // AlertComponent({ msg: "Email/Mobile Number is required", title: "Error", type: "error" })
        // }else if (contactPerson == "") {
        //     alert("Contact Person name is required")
        //     // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        // }else if (phoneNumber == "") {
        //     alert("Phone number is required")
        //     // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        // }
         if (email === "") {
            alert("Email is required")
            // AlertComponent({ msg: "Email/Mobile Number is required", title: "Error", type: "error" })
        }
        else if (reg.test(email) == false) {
            alert("Email is invalid")
            // AlertComponent({ msg: "Email is invalid", title: "Error", type: "error" })
        }
        
        else if (password == "") {
            alert("Password is required")
            // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        }
        else if (password.length <= 7) {
            alert("Password must be 8 characters")
            // AlertComponent({ msg: "Password must be 8 characters", type: "error", title: "Error" })
        }
        // else if (rePassword == "") {
        //     alert("Confirm Password is required")
        //     // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        // }
        // else if (rePassword.length <= 7) {
        //     alert("Confirm password must be 8 characters")
        //     // AlertComponent({ msg: "Password must be 8 characters", type: "error", title: "Error" })
        // }
        // else if (rePassword !== password) {
        //     alert("Confirm password does not match with password")
        //     // AlertComponent({ msg: "Password must be 8 characters", type: "error", title: "Error" })
        // }
        
        // else if (instalationAddress == "") {
        //     alert("location is required")
        //     // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        // }
        // else if (city == '') {
        //     alert("City name is required")
        // }
        // else if (state == '') {
        //     alert("state name is required")
        // }
        // else if (value == '') {
        //     alert("Type is required")
        // }
        else {
            // loginApiCall(email, password)
            registerApiCall(email, password);
            // console.log(purchaser, email, phoneNumber, contactPerson, instalationAddress, city, state, password,rePassword,value)
        }
    }
    // const firestorer = async(userCredentials,purchaser, email, phoneNumber, contactPerson, instalationAddress, city, state,value) => {
    //   console.log("user",userCredentials.user.uid)
    //     firestore().collection('Users').doc(userCredentials.user.uid)
    //     .set({
    //       purchaser_name: purchaser,
    //       phone: phoneNumber,
    //       instalation_Address: instalationAddress,
    //       email: email,
    //       contactPerson:contactPerson,
    //       city:city,
    //       state:state,
    //       Type_of_property:value,
    //       user_id: userCredentials.user.uid
    //     }).then((res) => {
    //     console.log('res=====>>',res,'id',res)
    //     }).catch((e)=>console.log('erroorr==>>',e))
    //     console.log("user",userCredentials.user.uid)
    // }
    const registerApiCall = async ( email, password) => {
        setLoading(true)
        auth().createUserWithEmailAndPassword(email, password)
              .then(userCredentials => {
                //   firestorer(userCredentials,purchaser, email, phoneNumber, contactPerson, instalationAddress, city, state,value)
                  setLoading(false)
                alert("User Successfuly Registered")
                navigation.navigate("Login")
              })
              .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
        
          if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
            
              console.error(error);
              setLoading(false)
            });
    }
    return [loading, registerValidation];
};