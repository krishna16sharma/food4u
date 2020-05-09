import React from 'react';
import {addToCart} from '../Cart/Cart';

class Dairy extends React.Component{
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
                            <img src={require("./images/Amul Butter.png")} alt="butter"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Amul Butter</div>
                            <div className="Price">Rs.50</div>
                        </div>
                        <div className="add-button"  onClick={()=>{this.handleClick("Amul Butter",50)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Amul Milk - 1L.png")} alt="amul_milk"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Amul Milk - 1L</div>
                            <div className="Price">Rs.64</div>
                        </div>
                        <div className="add-button"  onClick={()=>{this.handleClick("Amul Milk - 1L",64)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Amul Paneer - 200g.png")} alt="Amul paneer"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Amul Paneer - 200g</div>
                            <div className="Price">Rs.75</div>
                        </div>
                        <div className="add-button"  onClick={()=>{this.handleClick("Amul Paneer - 200g",75)}}>Add</div>
                    </div>
              </div>
          </div>
      );
    }
}

export default Dairy;
