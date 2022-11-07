import React, {useState} from "react";

import List from "./List"; 

function ShoppingCart() {
    const [shoppingListItems, setShoppingListItems] = useState([
        { id: 1, title: "Apples"},
    ]);

    return (
        <List listItems={shoppingListItems} />
    )
}

export default ShoppingCart;