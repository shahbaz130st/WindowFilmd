import { combineReducers } from "redux";
import authenticationReducer from "./AuthenticationReducer";
import themeChangeReducer from "./themeChangeReducer";
import notificationReducer from "./NotificationReducer";
import leadsReducer from "./LeadsReducer";
import dealReducer from "./DealReducer";
import contactReducer from "./ContactReducer";
const rootReducer = combineReducers({
    authenticationReducer: authenticationReducer,
    themeChangeReducer:themeChangeReducer,
    notificationReducer:notificationReducer,
    leadsReducer:leadsReducer,
    dealReducer:dealReducer,
    contactReducer:contactReducer
})
export default rootReducer;