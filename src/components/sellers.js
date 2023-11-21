import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Card, CardBody, Badge } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";
import BaseLeftPage from '../elements/BaseLeftPage'
import {ClosePageAction} from '../actions/LeftPage'
import ReactSVG from 'react-svg';


class Sellers extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedSeller: null,
          searchInput: '',
        };
      }

    sellersData = [
        {
            id: 1,
            name: 'John Grinthal',
            trades: 12,
            location: 'Sussex County, NJ',
            bio: 'Working with Sunset Dahlia Farms since 2017',
            inventory: [
                {name: 'Copper Boy', quantity: 7, value: 18},
                {name: 'Orsett Beauty', quantity: 5, value: 10},
                {name: 'Sheer Heaven', quantity: 10, value: 16},
                {name: ' Kelvin Floodlight', quantity: 8, value: 13}
            ]
        },
    
        {
            id: 2,
            name: 'Christine Jones',
            trades: 4,
            location: 'Detroit, MI',
            bio: 'Just here with some dahlias',
            inventory: [
                {name: 'Neon Splendor', quantity: 6, value: 10},
                {name: 'Caitlins Joy', quantity: 9, value: 12},
                {name: 'Diva', quantity: 7, value: 10},
            ]
        },
        {
            id: 3,
            name: 'Justin McFadden',
            trades: 2,
            location: 'Westchester County, NY',
            bio:'',
            inventory: [
                {name: 'Eternal Snow', quantity: 8, value: 12},
                {name: 'Jowey Linda', quantity: 4, value: 12},
                {name: 'Painted Black', quantity: 10, value: 13},
            ]
        },
        {
            id: 4,
            name: 'Kade Eldred',
            trades: 6,
            location: 'MD',
            bio: '',
            inventory: [
                {name: 'Polka', quantity: 13, value: 14},
                {name: 'Rip City', quantity: 8, value: 11},
                {name: 'Sheer Heaven', quantity: 3, value: 16},
            ]
        },
        {
            id: 5,
            name: 'Desire Chiruza',
            trades: 3,
            location: 'Rochester, NY',
            bio: '',
            inventory: [
                {name: 'Zundert Mystery Fox', quantity: 5, value: 12},
                {name: 'Maarn', quantity: 6, value: 10},
                {name: 'Kelvin Floodlight', quantity: 8, value: 13},
            ]
        }
    ];

    handleSellerClick = (seller) => {
        // this.setState({ selectedSeller: seller });
        this.props.push({ pathname: URLS.Seller, state: { seller: seller } });
      };
    
    handleSearchInputChange = (e) => {
        this.setState({ searchInput: e.target.value });
      };
    
      render() {

        const { ClosePageAction, theme } = this.props;
    const { selectedSeller, searchInput } = this.state;

    const filteredSellers = this.sellersData.filter((seller) => {
      const lowerCaseSearch = searchInput.toLowerCase();
      const lowerCaseName = seller.name.toLowerCase();
      const lowerCaseLocation = seller.location.toLowerCase();

      const nameMatch = lowerCaseName.includes(lowerCaseSearch);
      const locationMatch = lowerCaseLocation.includes(lowerCaseSearch);

      const varietyMatch = seller.inventory.some(
        (variety) => variety.name.toLowerCase().includes(lowerCaseSearch)
      );

      return nameMatch || locationMatch || varietyMatch;
    });
        
        return (
            <BaseLeftPage
                BasePageProps={{
                    active: [false, false, false],
                    sellers_active: true
                }}
            >
                <div className='it-sellers'>
                    <Row className='justify-content-between'>
                        <Col className='mt-3'>
                            <p className='it_page_title'>Swappers</p>
                        </Col>
                        <Col className='mt-3'>
                            <div className="input-group search">
                            <input
                            type='text'
                            className='form-control border-right-0'
                            placeholder='Search'
                            value={searchInput}
                            onChange={this.handleSearchInputChange}
                            />
                                <div className="input-group-append">
                                    <span className="input-group-text border-left-0">
                                        <FontAwesome name='search' />
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-3'>
                            <div className='it_cycle_times' onClick={() => ClosePageAction(URLS.Trading)}>
                                <ReactSVG
                                    path={require('../assets/icons/close_bg.svg')}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='sellers-cards'>
                        {/* Map through the sellersData array to generate unique sellers */}
                        {filteredSellers.map((seller) => (
                                <Col key={seller.id} className='col-3 it-pointer' sm={4} md={4} lg={3} xl={3}>
                                    <Card onClick={() => this.handleSellerClick(seller)}>
                                        <CardBody>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex flex-row align-items-center'>
                                                <img src={`http://via.placeholder.com/70x70?text=${seller.name}`} className='rounded-circle' />
                                                    <div className='it-ml-10'>
                                                        <div className='d-flex flex-column'>
                                                            <div><strong className='it-fs18'>{seller.name}</strong></div>
                                                            <div className='it-fs12 it-medium it-half-opacity'>
                                                                <FontAwesome name='map-marker'/> {seller.location}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='plus_icon mt-3' onClick={() => push(URLS.Trading)}>
                                                        <img src={theme['plus']} />
                                                    </div>
                                                </div>
                                            </div>
                                            <Row className='mt-4'>
                                                <Col sm={4} md={4}>
                                                    <div className='d-flex flex-column text-center'>
                                                        <div><span className='it-medium text-success it-fs22'>{seller.trades}</span></div>
                                                        <div><span className='it-fs12 it-half-opacity'>trades</span></div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Sellers);