import { CHANGE_NOTIFICATION_COUNT } from "../Actions";
const initialState = { notificationCount: 0 }


const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NOTIFICATION_COUNT:
            return {
                ...state,
                notificationCount: action.notificationCount
            }
        default:
            return state
    }
}
export default notificationReducer;