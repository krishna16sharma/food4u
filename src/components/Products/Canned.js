import React from 'react';
import {addToCart} from '../Cart/Cart';

class Canned extends React.Component{
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
                            <img src={require("./images/Canned Carrot Slices - 411g.png")} alt="carrot slices"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Canned Carrot Slices - 411g</div>
                            <div className="Price">Rs.70</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Canned Carrot Slices - 411g",70)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Canned Green Peas - 241g.png")} alt="peas"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Canned Green Peas - 241g</div>
                            <div className="Price">Rs.45</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Canned Green Peas - 241g",45)}}>Add</div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={require("./images/Canned Baked Beans - 794g.png")} alt="beans"/>
                        </div>
                        <div className="text-flex">
                            <div className="ProductName">Canned Baked Beans - 794g</div>
                            <div className="Price">Rs.300</div>
                        </div>
                        <div className="add-button" onClick={()=>{this.handleClick("Canned Baked Beans - 794g",300)}}>Add</div>
                    </div>
              </div>
          </div>
      );
    }
}

export default Canned;
