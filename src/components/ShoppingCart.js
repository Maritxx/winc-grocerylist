import React, {useState} from "react";

import List from "./List"; 

function ShoppingCart(props) {
    return (
        <List items={props.items} />
    )
}

export default ShoppingCart;