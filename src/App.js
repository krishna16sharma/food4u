import React,{Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Grid from './components/Grid/Grid';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import CartPage from './components/Cart/CartPage';
import history from './history';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import{
    Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

//Pages
import Main from './pages/HomePage';
import Error from './pages/Error';
import Checkout from './pages/Checkout';

const initialState = {
    route: 'home',
    isSignedIn: false,
    product: '',
        user: {
                id: '',
                username: '',
                email: '',
                address: '',
                phone: '',
                joined: ''
        },
    cart:''
}

class App extends Component{
    constructor(){
        super();
        this.state = initialState;
    }

    loadUser = (data) => {
        this.setState(
            {user: {
                id: data.id,
                username: data.username,
                email: data.email,
                address: data.address,
                phone: data.phone,
                joined: data.joined
            }
        })
    }

    handleAccount = ()=>{
        if(this.state.isSignedIn){      //User needs to log out
            this.setState(initialState);
            window.location="/";
            localStorage.clear();
        }else{                          //User needs to log in
        this.setState({isSignedIn: true})
        }
    }

    setProduct = (product) => {
        console.log(product)
        this.setState({product : product});
    }
//Unused func
    onRouteChange = ( route ) =>{
        if(route === 'home'){
            this.setState(initialState)
        } else if( route === 'signin'){
            this.setState({isSignedIn: true})//Change later
        }
            this.setState({route: route});
    }

  render(){
      const {route,isSignedIn,user,product,cart} = this.state;
      //console.log(isSignedIn);
      console.log(localStorage.getItem("cartItems"));
        return(
        <Router history={history}>
            <Switch>
                <Route exact path="/" render={props => <Main isSignedIn={isSignedIn} handleAccount={this.handleAccount} user={user} product={product} setProduct={this.setProduct}/>}/>
                <Route exact path="/signin" render={props => <Signin loadUser = {this.loadUser} isSignedIn={isSignedIn} handleAccount={this.handleAccount}/>}/>
                <Route exact path="/register" render={props => <Register loadUser = {this.loadUser} handleAccount={this.handleAccount}/>}/>
                <Route exact path="/cart" render={props => <CartPage isSignedIn={isSignedIn} handleAccount={this.handleAccount} user={user} cart={cart}/>}/>
                <Route exact path="/checkout" render={props => <Checkout isSignedIn={isSignedIn} handleAccount={this.handleAccount}/>}/>
                <Route exact path="/404" component={Error}/>
                <Redirect to="/404"/>
            </Switch>
        </Router>);
    }
}

export default App;
