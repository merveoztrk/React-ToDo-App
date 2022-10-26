import React from 'react';
import TaskItem from './taskItem';

const TaskList = ({ showTask, toggleDone, onDelete }) => {
    return (
        <div class="ui container">
            {showTask.map((item) => (
                <TaskItem key={item.id} item={item} toggleDone={toggleDone} onDelete={onDelete} color={!item.isDone ? "white" : "lightgreen"} />
            ))}

        </div>
    )
}

export default TaskList;
