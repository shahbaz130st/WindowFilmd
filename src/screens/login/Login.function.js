import { useState } from "react";
import axios from "axios";
import { reg } from "../../utils/ValidationConstants";
import constant from "../../utils/ApiConstants";

export default LoginFunction = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const loginValidation = (email, password) => {
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
        else {
            loginApiCall(email, password)
            // Login_Auth();
        }

    }
    const loginApiCall = async (email, password) => {
        setLoading(true)
        var config = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        const data = {
            "email": email/* "xobac26042@royins.com" */,
            "password": password/* "12345678" */
        }
        console.log(constant.signin, data)
        axios
            .post(constant.signin, data, config)
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
    return [loading, data, error, loginApiCall, loginValidation];
};