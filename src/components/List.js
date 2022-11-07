import React, { useState } from "react";

import ListItem from "./ListItem";

function List() {
    const [groceryItems, setGroceryItems] = useState([
        { id: 1, title: "Apples"},
        { id: 2, title: "Oranges"},
        { id: 3, title: "Bananas"}
    ]);

    function handleClick(groceryItem) {
        console.log(groceryItem.title)
    }

    return (
        <div>
            <ul>
                {groceryItems.map((groceryItem) => { 
                    return (
                    <ListItem 
                        title={groceryItem.title}
                        key={groceryItem.id}
                        clickItem={() => handleClick(groceryItem)}
                    />
                )})}
            </ul>
        </div>
    )
}

export default List;