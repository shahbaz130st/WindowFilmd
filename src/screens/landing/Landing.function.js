import { useState } from "react";
import axios from "axios";
import { reg } from "../../utils/ValidationConstants";
import constant from "../../utils/ApiConstants";

export default LandingFunction = (props) => {
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
    return [loading, data, error, fetchProfessionApiCall];
};