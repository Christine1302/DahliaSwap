import React, { Component } from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../../../constants/urls'
import BaseSignModal from './baseSignModal'
import {signIN, switchSignINModal, switchSignUPModal, switchResetPasswordModal} from '../../../actions/index'


class SignUpModal extends Component {

    render() {

        const {
            push, switchSignINModal, signin, switchSignUPModal, switchResetPasswordModal, signIN
        } = this.props;

        return (
            <BaseSignModal
                isOpen={signin}
                toggle={() => switchSignINModal(false)}
            >
                <div className='text-center'>
                    <strong className='it-fs24 it-fw6'>
                        Sign In
                    </strong>
                </div>
                <FormGroup className='text-left mt-4'>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" />
                </FormGroup>
                <FormGroup className='text-left mt-2'>
                    <Label for="exampleEmail">Password</Label>
                    <Input type="password" name="password" />
                </FormGroup>
                <div className='text-center it-fs16 mt-4'>
                    <span
                        className='text-primary it-pointer'
                        onClick={() => {
                            switchSignINModal(false);
                            setTimeout(() => switchResetPasswordModal(true), 150)
                        }}
                    >
                        Forgot your password?
                    </span>
                </div>
                <Button color="primary" size="lg" block className='mt-4' onClick={() => {
                    switchSignINModal(false);
                    signIN()
                }}>
                    Sign in
                </Button>
                <div className='text-center it-fs16 mt-4'>
                    Don't have an account?
                    <span
                        className='text-primary ml-1 it-pointer'
                        onClick={() => {
                            switchSignINModal(false);
                            setTimeout(() => switchSignUPModal(true), 150)
                        }}
                    >
                        Sign up
                    </span>
                </div>
            </BaseSignModal>
        )
    }
}

const mapStateToProps = state => {
    return {
        signin: state.modals.signin
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        switchSignINModal: state => dispatch(switchSignINModal(state)),
        switchSignUPModal: state => dispatch(switchSignUPModal(state)),
        switchResetPasswordModal: state => dispatch(switchResetPasswordModal(state)),
        signIN: () => dispatch(signIN())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);