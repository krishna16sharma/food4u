import React from 'react';
import {addToCart} from '../Cart/Cart';

class Vegetable extends React.Component{
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
                            <img src={require("./images/Carrots - 1Kg.png")} alt="carrot"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Carrots - 1Kg</div>
                            <div className="Price">Rs.40</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Carrots - 1Kg",40)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Cauliflower.png")} alt="cauliflower"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Cauliflower</div>
                            <div className="Price">Rs.30</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Cauliflower",30)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Coriander Leaves.png")} alt="coriander"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Coriander Leaves</div>
                            <div className="Price">Rs.10</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Coriander Leaves",10)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Potatoes - 1Kg.png")} alt="potatoes"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Potatoes - 1Kg</div>
                            <div className="Price">Rs.45</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Potatoes - 1Kg",45)}}>Add</div>
                    </div>
              </div>
          </div>
      );
  }
}

export default Vegetable;
