const Base_url = "https://shahjee-insurance.herokuapp.com/";

let link = "user/";

let image_base_url = "https://35.189.61.110/";

let android_map_key = "AIzaSyD4IakOtTxg5Ds4GhNEaHE03MQtFRE7tkE";
let ios_map_key = "AIzaSyBY2LBx91fNz4tvI4e1Gtu8ZGXJ0nTI43o";

let google_map_api_key = "&sensor=false&key=AIzaSyBosJOS3Vh5CqFhPW58AVdZ0AlZ_eWBE-I"

const constants =
{
    google_map_api_key: google_map_api_key,
    android_map_key: android_map_key,
    ios_map_key: ios_map_key,
    image_base_url: image_base_url,
    getProfession: Base_url + "profession/public",
    registration: Base_url + link + "auth/client/register",
    signin: Base_url + link + "auth/client/login",

}

export default constants;