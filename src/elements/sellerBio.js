import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Badge, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import {push} from "react-router-redux";
import ReactSVG from 'react-svg';


class SellerBio extends Component{
    render() {

        const {theme, short = false, seller} = this.props;

        return (
            <div className='it-sell_bio' >
                <div className={`${short ? 'text-primary text-center' : ''}`}>
                {seller && (
                <img src={seller.avatar} className='rounded-circle avatar' alt='Seller Avatar' />
                )}
                    <div>
                        <span className='it-fs24 it-fw6'>{seller ? seller.name : 'Default Name'}</span>
                    </div>
                </div>
                {
                    !short ? (
                        <div>
                            <div className='d-flex flex-column it-fs13 it-half-opacity mt-3'>
                                <div>
                                    {seller && seller.location && (
                                        <React.Fragment>
                                            <FontAwesome name='map-marker' /> {seller.location}
                                        </React.Fragment>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className='d-flex justify-content-center mt-3'>
                    <div>
                    </div>
                </div>
                {
                    !short ? (
                        <div>
                            <div className='it-fs14 mt-4 text-left'>
                                {seller && seller.bio}    
                            </div>
                        </div>
                    ) : null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SellerBio);