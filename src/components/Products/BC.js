import React from 'react';
import './Products.css';
import {addToCart} from '../Cart/Cart';


class BC extends React.Component{
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
                        <img src={require("./images/Golden Yolks Eggs.png")} alt="Eggs"/>
                    </div>
                    <div className="text-flex">
                        <div className="ProductName">Golden Yolks Eggs</div>
                        <div className="Price">Rs.40</div>
                    </div>
                    <div className="add-button" onClick={()=>{this.handleClick("Golden Yolks Eggs",40)}}>Add</div>
                </div>
                <div className="product">
                    <div className="image">
                        <img src={require("./images/Kellogg's Corn Flakes - 475g.png")} alt="Corn Flakes"/>
                    </div>
                    <div className="text-flex">
                        <div className="ProductName">Kellogg's Corn Flakes - 475g</div>
                        <div className="Price">Rs.180</div>
                    </div>
                    <div className="add-button" onClick={()=>{this.handleClick("Kellogg's Corn Flakes - 475g",180)}}>Add</div>
                </div>
                <div className="product">
                    <div className="image">
                        <img src={require("./images/Kellogg's Froot Loops - 350g.png")} alt="Froot Loops"/>
                    </div>
                    <div className="text-flex">
                        <div className="ProductName">Kellogg's Froot Loops - 350g</div>
                        <div className="Price">Rs.170</div>
                    </div>
                    <div className="add-button" onClick={()=>{this.handleClick("Kellogg's Froot Loops - 350g",170)}}>Add</div>
                </div>
                <div className="product">
                    <div className="image">
                        <img src={require("./images/Reese's Puffs - 649g.png")} alt="Reese's Puffs"/>
                    </div>
                    <div className="text-flex">
                        <div className="ProductName">Reese's Puffs - 849g</div>
                        <div className="Price">Rs.389</div>
                    </div>
                    <div className="add-button" onClick={()=>{this.handleClick("Reese's Puffs - 649g",389)}}>Add</div>
                </div>
          </div>
      </div>
    );
    }
}

export default BC;
