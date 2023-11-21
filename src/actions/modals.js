import {
    SWITCH_SIGNIN_MODAL, SWITCH_SIGNUP_MODAL, SWITCH_RESET_PASSWORD_MODAL
} from '../constants/actions'


export const switchSignUPModal = (state) => {
    return (dispatch, getState) => {
        dispatch({type: SWITCH_SIGNUP_MODAL, signup: state})
    }
};

export const switchSignINModal = (state) => {
    return (dispatch, getState) => {
        dispatch({type: SWITCH_SIGNIN_MODAL, signin: state})
    }
};

export const switchResetPasswordModal = (state) => {
    return (dispatch, getState) => {
        dispatch({type: SWITCH_RESET_PASSWORD_MODAL, reset_password: state})
    }
};