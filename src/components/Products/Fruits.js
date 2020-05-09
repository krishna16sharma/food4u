import React from 'react';
import {addToCart} from '../Cart/Cart';

class Fruits extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick = (item,price)=>{
        if(this.props.isSignedIn){
            addToCart(item,price);
        }
        else{
            alert("You aren't signed in!\nSign in to add to cart.");
        }
    }
  render(){
      return (
          <div className="zone red-bg">
              <div className="items red-bg">
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Apple - 4 Pcs.png")} alt="apple"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Apple - 4 Pcs</div>
                            <div className="Price">Rs.200</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Apple - 4 Pcs",200)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Bananas - 6 in a bunch.png")} alt="banana"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Bananas - 6 in a bunch</div>
                            <div className="Price">Rs.24</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Bananas - 6 in a bunch",24)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Strawberries.png")} alt="strawberry"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Strawberries</div>
                            <div className="Price">Rs.170</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Strawberries",170)}}>Add</div>
                    </div>
              </div>
          </div>
      );
  }
}

export default Fruits;
