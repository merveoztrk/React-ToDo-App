import React from 'react';
import { useState } from "react";

function Task({ onCreate }) {
    const [text, setText] = useState("");
    const handleTextChange = (e) => setText(e.target.value)
    const onClick = (e) => {
        if (!text) {
            alert("Please fill field")
        } else {
            e.preventDefault();
            onCreate({ text, isDone: false })
            setText("")
        }
    }
    return (
        <div className="add-task">
            <div className="add-input">
                <label for="task"></label>
                <input
                    type="text"
                    id="task"
                    value={text}
                    name="task"
                    placeholder="Add item"
                    onChange={handleTextChange}
                />
                <button className="positive ui button" onClick={onClick}> 😸 </button>
            </div>
        </div>
    );
}
export default Task;
