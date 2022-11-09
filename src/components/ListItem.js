import React from "react";

function ListItem(props) {
    return (
        <li key={props.id}
            className="grocery-item"
            onClick={props.onItemClick}
        >
            {props.title}
        </li>        
    )

}

export default ListItem;