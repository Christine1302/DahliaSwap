import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import {
    Row, Col, Progress, Card, CardBody,
    CardText, Badge, Button, Input, Tooltip as TooltipEl
} from 'reactstrap';
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import { AreaChart, Area, Cell, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import SellBio from '../elements/sellerBio'
import ReactSVG from 'react-svg';
import {FacebookIcon, TwitterIcon, TelegramIcon} from 'react-share';


class Seller extends Component{

    constructor(props) {
        super(props);

        this.state = {
            tooltipShare: false,
            selectedVariety: null,
            quantity: 0,
            showForm: false,
            exchangeOption: 'swap',
            userOffer: '',
            selectedSeller: null,
          };
    }

    componentDidMount() {
        const { location } = this.props;
        setTimeout(() => {
            this.setState({ tooltipShare: true });
        }, 500);

        // Move selectedSeller declaration to the class scope
        this.setState({
            selectedSeller: (location && location.state) ? location.state.seller : null,
        });
    }

    handleButtonClick(variety) {
        this.setState({
          selectedVariety: variety,
          showForm: true,
          quantity: 0,
        });
      }
    
      handleFormSubmit() {
        const { selectedVariety, quantity, exchangeOption, userOffer, selectedSeller } = this.state;

        // Handle the form submission logic here
        // You can access selectedVariety and quantity from this.state
        // Subtract the selected quantity from the available quantity
        const updatedInventory = selectedSeller.inventory.map(item => {
            if (item.name === selectedVariety.name) {
                return {
                    ...item,
                    quantity: item.quantity - quantity,
                };
            }
            return item;
        });

        // Update the selectedSeller with the modified inventory
        const updatedSelectedSeller = {
            ...selectedSeller,
            inventory: updatedInventory,
        };

        this.setState({
          selectedVariety: null,
          quantity: 0,
          showForm: false,
          exchangeOption: 'swap',
          userOffer: '',
          selectedSeller: updatedSelectedSeller
        });
    }

    render() {
        const { push, location } = this.props;
        const {
            tooltipShare, selectedVariety, quantity, showForm, exchangeOption, userOffer, selectedSeller,
        } = this.state;

        const sellerInventory = (selectedSeller && selectedSeller.inventory) || [];
    
        return (
            <BasePage
                active={[false, false, false]}
                sellers_active={true}
            >
                <div className='it-page'>
                    <div className='it-seller'>
                        <div className='d-flex justify-content-between mt-3'>
                            <div className='d-flex flex-row'>
                                <div className='back' onClick={() => push(URLS.Sellers)}>
                                    <ReactSVG
                                        path={require('../assets/icons/arrow-left.svg')}
                                    />
                                </div>
                                <span className='it_light_opacity it-fs14 back-label'>Back to sellers list</span>
                            </div>
                            <Col>
                                <div className='it_cycle_times' onClick={() => push(URLS.Sellers)}>
                                    <ReactSVG
                                        path={require('../assets/icons/close_bg.svg')}
                                    />
                                </div>
                            </Col>
                        </div>
                        <Row className='bio'>
                            <Col className='text-center' sm={3} md={3} xl={2} lg={2}>
                                <SellBio seller={selectedSeller} />
                            </Col>
                            <Col className='section-2' sm={9} md={9} xl={10} lg={10}>
                                {/* <div className='d-flex flex-row'>
                                    <strong className='it-fs16'>Return</strong>
                                    <div className="d-flex flex-row it-btn-group ml-2">
                                        <div className="it-btn active">Last Year</div>
                                        <div className="it-btn"><span>Last month</span></div>
                                        <div className="it-btn it-btn_m"><span>Last week</span></div>
                                        <div className="it-btn"><span>Last day</span></div>
                                    </div>
                                </div> */}
                                <Row className='pt-4'>
                                    <Col className='col-10' md={10} lg={10} xl={10}>
                                        {/* <ResponsiveContainer width='100%' height={170}> */}
                                            {/* <AreaChart data={data}> */}
                                                {/* <XAxis dataKey="name" axisLine={false} tickLine={false}/> */}
                                                {/* <Area type='monotone' dataKey='uv' strokeWidth={3} stroke={theme.seller_chart_stroke} fill={theme.seller_chart_fill} /> */}
                                            {/* </AreaChart> */}
                                        {/* </ResponsiveContainer> */}
                                    </Col>
                                    <Col className='col-10 text-center return-percent' md={2} lg={2} xl={2}>
                                        {/* <span className='text-success it-fs36'>64%</span>
                                        <div className='it-medium it-half-opacity'>
                                            Average Return for month
                                        </div> */}
                                    </Col>
                                </Row>
                                <Row className='border-bottom border-top investments_trades'>
                                    <Col className='col-6 investments' md={6} lg={6} xl={6}>
                                        <div className='d-flex justify-content-between investments-title'>
                                            <span className='it-fs16 it-fw6'>This Seller's Inventory</span>
                                            {/* <span className='text-primary it-fs16'>See all</span> */}
                                        </div>
                                        {sellerInventory.map((variety) => (
                                            <Row className='investments-row' key={variety.name}>
                                                    <Col className='col-8' md={8} xl={8} lg={8}>
                                                        <div className='d-flex flex-row'>
                                                            <div className='name'>
                                                                <span className='text-primary it-fs14 it-fw6'>{variety.name}</span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col className='col-2 text-center number' md={4} xl={4} lg={4}>
                                                        <span className='it-fs18'>{variety.quantity} available</span>
                                                    </Col>
                                                    <Col className="col-2 text-center">
                                                    <Button
                                                    color="primary"
                                                    onClick={() => this.handleButtonClick(variety)}
                                                    >
                                                    Swap/Purchase
                                                    </Button>
                                                    </Col>
                                                </Row>
                                            ))
                                        }
                                    </Col>
                                    </Row>
                                    {showForm && (
                                    <div>
                                        <Input
                                            type="number"
                                            placeholder="Quantity"
                                            value={quantity}
                                            onChange={(e) => this.setState({ quantity: e.target.value })}
                                        />
                                        <Input
                                            type='select'
                                            value={exchangeOption}
                                            onChange={(e) => this.setState({ exchangeOption: e.target.value })}
                                        >
                                            <option value='swap'>Swap</option>
                                            <option value='purchase'>Purchase</option>
                                        </Input>
                                        {exchangeOption === 'swap' && (
                                            <Input
                                                type='text'
                                                placeholder='Your Variety for Swap'
                                                value={userOffer}
                                                onChange={(e) => this.setState({ userOffer: e.target.value })}
                                            />
                                        )}
                                        <Button color="primary" onClick={() => this.handleFormSubmit()}>
                                            Submit
                                        </Button>
                                    </div>
                                )}
                                </Col>
                                </Row>
                            </div>
                        </div>
                    </BasePage>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Seller);