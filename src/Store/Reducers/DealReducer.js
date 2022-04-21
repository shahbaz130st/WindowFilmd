import { DEALSDATA } from "../Actions";

const initialState = { data: null }


const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEALSDATA:
            return {
                ...state,
                data: action.Data,
            }
        default:
            return state
    }
}
export default authenticationReducer;