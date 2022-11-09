import React from "react";

import ListItem from "./ListItem";

function List(props) {
    return (
        <div>
            <ul>
                {props.items.map((item) => { 
                    return (
                    <ListItem 
                        title={item.title}
                        key={item.id}
                        onItemClick={() => props.onItemClick(item)}
                    />
                )})}
            </ul>
        </div>
    )
}

export default List;