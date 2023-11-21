import React, { Component } from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import URLS from '../../../constants/urls'
import BaseSignModal from './baseSignModal'
import {switchSignUPModal, switchSignINModal} from '../../../actions/modals'


class SignUpModal extends Component {

    render() {

        const {push, signup, switchSignUPModal, switchSignINModal} = this.props;

        return (
            <BaseSignModal
                isOpen={signup}
                toggle={() => switchSignUPModal(false)}
            >
                <div className='text-center'>
                    <strong className='it-fs24 it-fw6'>
                        Create an account
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
                <FormGroup className='text-left mt-2'>
                    <Label for="exampleEmail">Password confirmation</Label>
                    <Input type="password" name="password_confirmation"/>
                </FormGroup>
                <div className='text-center it-fs16 mt-4'>
                    By creating an account, you are agreeing
                    <p className='text-primary'>to the Terms</p>
                </div>
                <Button color="primary" size="lg" block className='mt-4'>
                    Sign up
                </Button>
                <div className='text-center it-fs16 mt-4'>
                    Already have an account?
                    <span
                        className='text-primary it-pointer ml-1'
                        onClick={() => {
                            switchSignUPModal(false);
                            setTimeout(() => switchSignINModal(true), 150)
                        }}
                    >
                        Sign in
                    </span>
                </div>
            </BaseSignModal>
        )
    }
}

const mapStateToProps = state => {
    return {
        signup: state.modals.signup
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url)),
        switchSignUPModal: state => dispatch(switchSignUPModal(state)),
        switchSignINModal: state => dispatch(switchSignINModal(state))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);