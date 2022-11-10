import React, {useState} from "react";

import List from "./List"; 

function ShoppingCart(props) {
    return (
        <div>
            <button onClick={props.onButtonClick}>Empty the shopping cart</button>
            <List items={props.items} />
        </div>
    )
}

export default ShoppingCart;