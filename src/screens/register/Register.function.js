import { useState } from "react";
import axios from "axios";
import { reg } from "../../utils/ValidationConstants";
import constant from "../../utils/ApiConstants";

export default RegisterFunction = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const fetchProfessionApiCall = async () => {
        setLoading(true)
        var config = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        console.log(constant.getProfession)
        axios.get(constant.getProfession, config)
            .then(function (response) {
                setLoading(false)
                console.log(response.data.status)
                if (response.data.status == 200) {
                    setData(response.data.data)
                }
            })
            .catch(function (error) {
                console.log(error)
                setLoading(false)
                // AlertComponent({ msg: error.message, type: "error", title: "Error" })
            });
    }
    const registerValidation = (legalName, email, phoneNumber, password, confirmPassword, businessName, location, value) => {
        if (legalName === "") {
            alert("Legal name is required")
            // AlertComponent({ msg: "Email/Mobile Number is required", title: "Error", type: "error" })
        }
        else if (email === "") {
            alert("Email is required")
            // AlertComponent({ msg: "Email/Mobile Number is required", title: "Error", type: "error" })
        }
        else if (reg.test(email) == false) {
            alert("Email is invalid")
            // AlertComponent({ msg: "Email is invalid", title: "Error", type: "error" })
        }
        else if (phoneNumber == "") {
            alert("Phone number is required")
            // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        }
        else if (password == "") {
            alert("Password is required")
            // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        }
        else if (password.length <= 7) {
            alert("Password must be 8 characters")
            // AlertComponent({ msg: "Password must be 8 characters", type: "error", title: "Error" })
        }
        else if (confirmPassword == "") {
            alert("Confirm Password is required")
            // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        }
        else if (confirmPassword.length <= 7) {
            alert("Confirm password must be 8 characters")
            // AlertComponent({ msg: "Password must be 8 characters", type: "error", title: "Error" })
        }
        else if (confirmPassword !== password) {
            alert("Confirm password does not match with password")
            // AlertComponent({ msg: "Password must be 8 characters", type: "error", title: "Error" })
        }
        else if (businessName == "") {
            alert("Business name is required")
            // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        }
        else if (location == "") {
            alert("location is required")
            // AlertComponent({ msg: "Password is required", type: "error", title: "Error" })
        }
        else if (value.length == 0) {
            alert("Select atleast on profession")
        }
        else {
            // loginApiCall(email, password)
            registerApiCall(legalName, email, phoneNumber, password, confirmPassword, businessName, location, value);
        }
    }
    const registerApiCall = async (legalName, email, phoneNumber, password, confirmPassword, businessName, location, value) => {
        setLoading(true)
        var config = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        const data = {
            "fullName": legalName,
            "email": email/* "xobac26042@royins.com" */,
            "password": password/* "12345678" */,
            "location": location,
            "businessName": businessName,
            "profession": value.toString()
        }
        console.log(constant.registration, data)
        axios
            .post(constant.registration, data, config)
            .then(function (response) {
                setLoading(false)
                console.log(response.data.status)
                if (response.data.status == 200) {
                    alert(response.data.message)
                }
            })
            .catch(function (error) {
                console.log(error)
                setLoading(false)
            });
    }
    return [loading, data, error, fetchProfessionApiCall, registerValidation];
};