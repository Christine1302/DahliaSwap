import {switchSignINModal} from './modals'


export const baseWrapper = (event) => {
    return (dispatch, getState) => {
        const {account} = getState();

        if (account) {
            event()
        } else {
            dispatch(switchSignINModal(true))
        }
    }
};