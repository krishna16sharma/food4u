import React from 'react';
import {addToCart} from '../Cart/Cart';

class Snacks extends React.Component{
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
                            <img src={require("./images/B Natural Cloudy Apple juice.png")} alt="apple juice"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">B Natural Cloudy Apple juice</div>
                            <div className="Price">Rs.199</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("B Natural Cloudy Apple juice",199)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Cadbury Dairy Milk.png")} alt="dairy milk"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Cadbury Dairy Milk</div>
                            <div className="Price">Rs.10</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Cadbury Dairy Milk",10)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Doritos Cheese Supreme.png")} alt="doritos"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Doritos Cheese Supreme</div>
                            <div className="Price">Rs.20</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Doritos Cheese Supreme",20)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Real Guava juice.png")} alt="guava juice"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Real Guava juice</div>
                            <div className="Price">Rs.75</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Real Guava juice",75)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Lays American Style Cream & Onion.png")} alt="lays"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Lays American Style Cream & Onion</div>
                            <div className="Price">Rs.10</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Lays American Style Cream & Onion",10)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Parle Marie.png")} alt="Marie"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Parle Marie</div>
                            <div className="Price">Rs.20</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Parle Marie",20)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Cadbury Oreo.png")} alt="oreo"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Cadbury Oreo</div>
                            <div className="Price">Rs.20</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Cadbury Oreo",20)}}>Add</div>
                    </div>
              </div>
          </div>
      );
  }
}

export default Snacks;
