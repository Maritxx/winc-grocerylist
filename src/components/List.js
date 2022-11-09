import React from "react";

import ListItem from "./ListItem";

function List(props) {
    return (
        <div>
            <ul>
                {props.items.map((item) => { 
                    return (
                    <ListItem 
                        item={item}
                        key={item.id}
                        onItemClick={props.onItemClick}
                    />
                )})}
            </ul>
        </div>
    )
}

export default List;