import React, { useState } from "react";

import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

function Container() {
    const [groceryItems, setGroceryItems] = useState([]);

    const [cartItems, setCartItems] = useState([]);


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


    function addNewGroceryItem(itemName) {
        if (itemName == "") {
            alert("The input can't be empty")
        } else {
            setGroceryItems((groceryItems) => {
                return ([...groceryItems, {id: (groceryItems.length + 1), title: itemName}])
            });            
        };
    };

    
    return (
    <main className="grocery__container">
        <GroceryList items={groceryItems} onItemClick={addItemToCart} onItemAdd={addNewGroceryItem} />
        <ShoppingCart items={cartItems} onButtonClick={emptyCart} />
    </main>
    )
}

export default Container;