import React, { useState } from "react";

function InputField(props) {
    const [newGrocery, setNewGrocery] = useState("");

    return (
        <form>
            <input 
                type="text" 
                placeholder="Add a grocery item" 
                onChange={(e) => { setNewGrocery(e.target.value)}}
            />
            <button 
                type="button" 
                onClick={(e) => props.onItemAdd(newGrocery)}>
                Add</button>
        </form>
    )
}

export default InputField