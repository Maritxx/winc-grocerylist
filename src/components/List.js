import React from "react";

import ListItem from "./ListItem";

function List(props) {
    function handleClick(listItem) {
        console.log(listItem)
    }

    return (
        <div>
            <ul>
                {props.listItems.map((listItem) => { 
                    return (
                    <ListItem 
                        title={listItem.title}
                        key={listItem.id}
                        clickItem={() => handleClick(listItem)}
                    />
                )})}
            </ul>
        </div>
    )
}

export default List;