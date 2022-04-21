import { LEADSDATA } from "../Actions";

const initialState = { data: null }


const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LEADSDATA:
            return {
                ...state,
                data: action.Data,
            }
        default:
            return state
    }
}
export default authenticationReducer;