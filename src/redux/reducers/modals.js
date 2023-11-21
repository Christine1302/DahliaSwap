import {
    SET_ORDER_CLOSE_MODAL, SWITCH_SIGNIN_MODAL, SWITCH_SIGNUP_MODAL, SWITCH_RESET_PASSWORD_MODAL
} from '../../constants/actions'

const initialState = {
    order_close: false,
    signin: false,
    signup: false,
    reset_password: false
};


const state = (state=initialState, action) => {
    switch (action.type) {
        case SET_ORDER_CLOSE_MODAL:
            return {
                ...state,
                order_close: action.modal
            };
        case SWITCH_SIGNIN_MODAL:
            return {
                ...state,
                signin: action.signin
            };
        case SWITCH_SIGNUP_MODAL:
            return {
                ...state,
                signup: action.signup
            };
        case SWITCH_RESET_PASSWORD_MODAL:
            return {
                ...state,
                reset_password: action.reset_password
            };
        default:
            return state
    }
};

export default state