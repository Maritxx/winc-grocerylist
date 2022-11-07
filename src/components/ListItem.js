import React from "react";

function ListItem(props) {
    return (
        <li key={props.id}
            className="grocery-item"
            onClick={props.clickItem}
        >
            {props.title}
        </li>        
    )

}

export default ListItem;