import React from 'react';
import {addToCart} from '../Cart/Cart';

class Grains extends React.Component{
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
                            <img src={require("./images/Organic Brown Rice Flakes.png")} alt="rice flakes"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Organic Brown Rice Flakes</div>
                            <div className="Price">Rs.72</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Organic Brown Rice Flakes",72)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Aashirvaad Whole Wheat Atta.png")} alt="flour"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Aashirvaad Whole Wheat Atta</div>
                            <div className="Price">Rs.205</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Aashirvaad Whole Wheat Atta",205)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Golden Harvest Baasmathi Rice.png")} alt="rice"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Golden Harvest Baasmathi Rice</div>
                            <div className="Price">Rs.100</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Golden Harvest Baasmathi Rice",100)}}>Add</div>
                    </div>
              </div>
          </div>
      );
  }
}

export default Grains;
