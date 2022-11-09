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
        { id: 1, title: "Apples"},
    ]);

    function addItemToCart(item) {
        console.log(item)
    }
    
    return (
    <div>
        <GroceryList items={groceryItems} onItemClick={addItemToCart} />
        <ShoppingCart items={cartItems} />
    </div>
    )
}

export default Container;