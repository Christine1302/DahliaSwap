import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import { store, history } from '../redux/store'
import URLS from '../constants/urls'
//Views
import Trading from './trading'
import Inventory from './inventory'
import AddDahlia from '././add_dahlia'
// import Analytics from './analytics'
import Sellers from './sellers'
import Seller from './seller'
import Post from './post'
import Messages from './messages'
import MarketsList from './marketsList/index'
import Account from './account/index'
import SignIn from './sign/signIn'
import SignUp from './sign/signUp'
import ResetPassword from './sign/resetPassword'
import AddDahliaForm from './addDahliaForm'



class Root extends Component {

    render() {

        return(
            <Provider store={store()}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path={URLS.Trading} component={Trading} />
                        <Route path={URLS.Inventory} component={Inventory} />
                        <Route path={URLS.AddDahlia} component={AddDahlia} />
                        {/* <Route path={URLS.Analytics} component={Analytics} /> */}
                        <Route path={URLS.Sellers} component={Sellers} />
                        <Route path={URLS.Seller} component={Seller} />
                        <Route path={URLS.Post} component={Post} />
                        <Route path={URLS.Messages} component={Messages} />
                        <Route path={URLS.MarketsList} component={MarketsList} />
                        <Route path={URLS.Account} component={Account} />
                        <Route path={URLS.SIGNIN} component={SignIn} />
                        <Route path={URLS.SIGNUP} component={SignUp} />
                        <Route path={URLS.RESETPASSWORD} component={ResetPassword} />
                        <Route path={URLS.AddDahliaForm} component={AddDahliaForm} />
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default Root