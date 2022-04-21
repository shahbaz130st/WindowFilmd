import { CONTACTDATA } from "../Actions";

const initialState = { data: null }


const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACTDATA:
            return {
                ...state,
                data: action.Data,
            }
        default:
            return state
    }
}
export default authenticationReducer;