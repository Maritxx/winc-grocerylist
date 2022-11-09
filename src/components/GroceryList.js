import React, {useState} from "react";

import List from "./List"; 

function GroceryList(props) {
    return (
        <List items={props.items} onItemClick={props.onItemClick} />
    )
}

export default GroceryList;