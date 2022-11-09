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
        setCartItems((cartItems) => {
            return ([...cartItems, {id: (cartItems.length + 1), title: e.target.innerText, amount: 1}])
        })

        const itemAlreadyInCart = cartItems.find((item) => {
           return item.title === e.target.innerText
        })

        console.log(itemAlreadyInCart);
    }
    
    return (

    <div>
        <GroceryList items={groceryItems} onItemClick={addItemToCart} />
        <ShoppingCart items={cartItems} />
    </div>
    )
}

export default Container;