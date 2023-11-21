import {SIGNIN, SIGNOUT} from '../constants/actions'


export const signIN = () => {
    return (distpatch, getState) => {
        distpatch({type: SIGNIN})
    }
};

export const signOUT = () => {
    return (dispatch, getState) => {
        dispatch({type: SIGNOUT})
    }
};