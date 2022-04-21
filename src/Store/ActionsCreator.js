import { SIGN_IN, SIGN_OUT,CHANGE_PRIMARY_THEME,CHANGE_SECONDARY_THEME,CHANGE_NOTIFICATION_COUNT, LEADSDATA, DEALSDATA, CONTACTDATA } from "./Actions";

export const signIn = (user) => {
    return {
        type: SIGN_IN,
        user: user.userData,
        isLogin: user.isLogin,
    }
}
export const LeadsData = (data) => {
    return {
        type: LEADSDATA,
        Data: data.LeadsData
    }
}
export const DealData = (data) => {
    return {
        type: DEALSDATA,
        Data: data.DealData
    }
}
export const ContactData = (data) => {
    return {
        type: CONTACTDATA,
        Data: data.contactsData
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
        user: null,
        isLogin: false
    }
}
export const setPrimaryColor = (primaryColor) => {
    return {
        type: CHANGE_PRIMARY_THEME,
        primaryColor: primaryColor
    }
}

export const setSecondaryColor = (secondaryColor) => {
    return {
        type: CHANGE_SECONDARY_THEME,
        secondaryColor: secondaryColor
    }
}
export const setNotificationCount = (notificationCount) => {
    return {
        type: CHANGE_NOTIFICATION_COUNT,
        notificationCount: notificationCount
    }
}