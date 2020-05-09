import React from 'react';
import {addToCart} from '../Cart/Cart';

class Frozen extends React.Component{
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
                            <img src={require("./images/Frozen Peas - 1Kg.png")} alt="peas"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Frozen Peas - 1Kg</div>
                            <div className="Price">Rs.180</div>
                        </div>
                        <div className="add-button"  onClick={()=>{this.handleClick("Frozen Peas - 1Kg",180)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Frozen Corn Cobs - 12Pcs.png")} alt="corn"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Frozen Corn Cobs - 12Pcs</div>
                            <div className="Price">Rs.140</div>
                        </div>
                        <div className="add-button"  onClick={()=>{this.handleClick("Frozen Corn Cobs - 12Pcs",140)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/McCains Pizza Supreme.png")} alt="pizza"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">McCains Pizza Supreme</div>
                            <div className="Price">Rs.120</div>
                        </div>
                        <div className="add-button"  onClick={()=>{this.handleClick("McCains Pizza Supreme",120)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/McCains French Fries.png")} alt="fries"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">McCains French Fries</div>
                            <div className="Price">Rs.100</div>
                        </div>
                        <div className="add-button"  onClick={()=>{this.handleClick("McCains French Fries",100)}}>Add</div>
                    </div>
              </div>
          </div>
      );
  }
}

export default Frozen;
