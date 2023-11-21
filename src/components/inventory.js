import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Progress, Card, CardBody, CardText } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import ReactSVG from 'react-svg';
import BaseLeftPage from '../elements/BaseLeftPage'
import AddDahliaForm from './addDahliaForm';
import {ClosePageAction} from '../actions/LeftPage';


class Inventory extends Component{
    constructor(props) {
        super(props);

        const storedInventoryList = localStorage.getItem('inventoryList');
        const initialInventoryList = storedInventoryList ? JSON.parse(storedInventoryList) : [];

        this.state = {
        inventoryList: initialInventoryList,
        };
    }

    // Function to handle form submission and update inventoryList
    handleFormSubmit = (formData) => {
        // Add the new item to the inventoryList
        this.setState(
            (prevState) => ({
              inventoryList: [...prevState.inventoryList, formData],
            }),
            () => {
              // Update local storage with the latest inventoryList
              localStorage.setItem('inventoryList', JSON.stringify(this.state.inventoryList));
            }
          );
        };

    render() {

        const {push, theme, ClosePageAction} = this.props;

        return (
            <BaseLeftPage
                BasePageProps={{
                    active: [false, false, false],
                    inventory_active: true
                }}
            >
                <div className='it_inventory'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>My Inventory</p>
                        </Col>
                    </Row>
                    {/* <div className="d-flex flex-row it-fs24 info-block">
                        <div className='mr-2'>
                            <span className='night-opacity'>Total</span>
                        </div>
                        <div className='pr-2'>
                            $ 94 560
                        </div>
                        <div className='vertical-hr' />
                        <div className='ml-2'>
                            5.51BTC
                        </div>
                    </div> */}
                    {/* <Progress multi className='mt-3 mr-4'>
                        {
                            [
                                ['32', '#ff9300', '32% BTC'],
                                ['15', '#aeaeae', '15% LTC'],
                                ['36', '#d8d8d8', '36% ETH'],
                                ['17', '#008fec', '17% DASH'],
                                ['22', '#ff6600', '22% XMR'],
                            ].map((item, i) => (
                                <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${item[0]}%`, backgroundColor: item[1] }}
                                aria-valuenow={item[0]}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                key={i}
                            >
                                <span className="progress_text">{item[2]}</span>
                            </div>
                            ))
                        }
                    </Progress> */}
                    <Row className='dahlia-block'>
                        <Col md={3} xl={3} lg={3} className='col-3 it-pointer'>
                            {/* Pass the handleFormSubmit function as a prop */}
                            <AddDahliaForm onSubmit={this.handleFormSubmit}/>
                            {this.state.inventoryList.map((item,index) => (
                                <Card key= {index} className="">
                                    <CardBody>
                                        <CardText className="text-center">
                                            <span className="it-fs18 it-medium">{item.name}</span>
                                            <div className="it-fs14 it_light_opacity">
                                                Value: ${item.value}
                                            </div>
                                            <div className="it-fs14 it_light_opacity">
                                                Quantity: {item.quantity}
                                            </div>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            ))}
                            {/* <Card onClick={() => push(URLS.AddDahliaForm)}>
                                <CardBody>
                                    <div className='add_dahlia'>
                                        <ReactSVG
                                            path={require('../assets/icons/plus.svg')}
                                        />
                                    </div>
                                    <div className='text-center mt-1'>
                                        <span className='add_dahlia_title'>Add Dahlia</span>
                                    </div>
                                </CardBody>
                            </Card> */}
                            
                        </Col>
                    </Row>
                </div>
            </BaseLeftPage>
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
        push: url => dispatch(push(url)),
        ClosePageAction: url => dispatch(ClosePageAction(url))
    }
};

// {/* <Card onClick={() => push(URLS.AddDahliaForm)}>
//     {/* Card content */}
// </Card> */}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);