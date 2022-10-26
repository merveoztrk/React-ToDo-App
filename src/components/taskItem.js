import React from "react";

const TaskItem = ({ item, toggleDone, onDelete, color }) => {

    return (

        <div className="taskitem" style={{ background: color }}  >
            <h6 className={`${item.isDone ? "overline" : ""}`} style={{ color: "black" }}>
                {!item.isDone ?
                    <button className="positive ui button" onClick={() => toggleDone(item.id)} style={{ color: "lightgrey", cursor: "pointer" }}> 🖊️ </button>
                    :
                    <button className="positive ui button" onClick={() => toggleDone(item.id)} style={{ color: "pink", cursor: "pointer" }} > 👍 </button>
                }
                {"  " + item.text}
            </h6>
            <button className="negative ui button" onClick={() => onDelete(item.id)} style={!item.isDone ? { color: "lightgrey", cursor: "pointer" } : { color: "pink", cursor: "pointer" }}> ❌ </button>
        </div>

    )
}
export default TaskItem;
