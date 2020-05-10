import React from 'react';
import CartNav from './CartNav';
import {total} from './Cart';
import './Cart.css';
import history from '../../history';

class CartPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cart:'',
            total: total
        }

    }
    Remove = (cartItems,item) =>{
        var index = cartItems.indexOf(item);
        var newTotal= this.state.total-(cartItems[index].price*cartItems[index].qty);
        console.log("New",newTotal);
        cartItems.splice(index,1);
        console.log(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log("NewCart",JSON.parse(localStorage.getItem("cartItems")));
        this.setState({total: newTotal})

    }
    CartItems = (cartItems)=>(
        cartItems.map((item)=>{
            return(
                <div className='product'>
                    <div className='image'>
                        <img src={require(`../Products/images/${item.name}.png`)} alt={item.name}/>
                    </div>
                    <div>
                        <div className='ProductName'>{item.name}</div>
                        <div className='Price'>Qty: {item.qty}</div>
                    </div>
                    <div>
                    <div className='ProductName'>Rs.{item.price}</div>
                    <div className='rmv-button' onClick={()=>{this.Remove(cartItems,item)}}>Remove</div>
                    </div>
                </div>);
        })
    )

    render(){
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        return(
            <div>
                <CartNav isSignedIn={this.props.isSignedIn} handleAccount={this.props.handleAccount} user={this.props.user} setProduct={this.props.setProduct}/>
                <div className="page red-bg">
                    <div className="items">
                        {this.CartItems(cartItems)}
                    </div>
                </div>
                <div className="black-bg">Total is Rs.{this.state.total}
                        <div className="button" onClick={() => history.push("/checkout")}>Proceed to Payment</div>
                </div>
            </div>
        );
    }
}
export default CartPage;
