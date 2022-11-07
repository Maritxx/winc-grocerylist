import React, {useState} from "react";

import List from "./List"; 

function GroceryList() {
    const [groceryItems, setGroceryItems] = useState([
        { id: 1, title: "Apples"},
        { id: 2, title: "Oranges"},
        { id: 3, title: "Bananas"}
    ]);

    return (
        <List listItems={groceryItems} />
    )
}

export default GroceryList;