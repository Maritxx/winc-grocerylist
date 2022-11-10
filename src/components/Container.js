import React, { useState } from "react";

import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

function Container() {
    const [groceryItems, setGroceryItems] = useState([
        { id: 1, title: "Apples"},
        { id: 2, title: "Oranges"},
        { id: 3, title: "Bananas"}
    ]);

    const [cartItems, setCartItems] = useState([
        { id: 1, title: "Apples", amount: 1},
    ]);


    function addItemToCart(e) {
        const itemAlreadyInCart = cartItems.some((item) => {
           return item.title === e.target.innerText
        });

        if (itemAlreadyInCart) {
            setCartItems(cartItems.map((item) => {
                if (item.title === e.target.innerText) {
                    return {...item, amount: item.amount + 1}
                } else {
                    return item
                }
            }));            
        } else {
            setCartItems((cartItems) => {
                return ([...cartItems, {id: (cartItems.length + 1), title: e.target.innerText, amount: 1}])
            });
        };
    };


    function emptyCart() {
        setCartItems([])
    };

    
    return (
    <div>
        <GroceryList items={groceryItems} onItemClick={addItemToCart} />
        <ShoppingCart items={cartItems} onButtonClick={emptyCart} />
    </div>
    )
}

export default Container;