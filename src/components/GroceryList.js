import React, { useState } from "react";

import List from "./List"; 
import InputField from "./InputField";

function GroceryList(props) {
    return (
        <section className="grocery-list__section">
            <h2>Shopping List</h2>
            <InputField onItemAdd={props.onItemAdd}/>
            <List items={props.items} onItemClick={props.onItemClick} />
        </section>
        
    )
}

export default GroceryList;