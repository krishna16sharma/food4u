import React from 'react';

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

export var total = 0;

export const addToCart= (name,price)=>{
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var found=0;
    total=0;
    const item={
        name: name,
        price:price,
        qty:1,
    }

    for(var i in cartItems){
        if(cartItems[i].name === name){
            cartItems[i].qty+=1;
            found=1;
            break;
        }
    }
    if(found === 0){
        cartItems.push(item);
    }
    for(var i in cartItems){
        total+=(cartItems[i].price * cartItems[i].qty);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
};
