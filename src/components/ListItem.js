import React from "react";

function ListItem(props) {
    const hasAmount = props.item.amount;

    return (
        <li key={props.item.id}
            className="grocery-item"
            value={props.item.title}
            onClick={props.onItemClick}
            amount={props.item.amount}
        >
            {hasAmount 
            ? <span>{props.item.title} <span>Amount: {props.item.amount}</span></span>
            : <span>{props.item.title}</span>
            }
        </li>        
    )

}

export default ListItem;