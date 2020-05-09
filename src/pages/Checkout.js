import React from 'react';
import {total} from '../components/Cart/Cart';
class Checkout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
          return (
              <div className="red-bg page-covered">
              <div  className="center-card">
                <h1 style={{color:"white"}}>Your amount has been paid!</h1>
                <div className="button" style={{width:"100%"}} onClick={() => this.props.handleAccount()}>Go back Home</div>
              </div>
              </div>
          )
     }
}

export default Checkout;
