import React from "react";

import ListItem from "./ListItem";

function List(props) {
    return (
            <ul className="grocery__list">
                {props.items.map((item) => { 
                    return (
                    <ListItem 
                        item={item}
                        key={item.id}
                        onItemClick={props.onItemClick}
                    />
                )})}
            </ul>
    )
}

export default List;