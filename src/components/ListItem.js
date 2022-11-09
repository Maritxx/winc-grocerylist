import React from "react";

function ListItem(props) {
    return (
        <li key={props.item.id}
            className="grocery-item"
            value={props.item.title}
            onClick={props.onItemClick}
            amount={props.item.amount}
        >
            {props.item.title}  
            {props.item.amount}
        </li>        
    )

}

export default ListItem;