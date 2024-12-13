import React, { useState } from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleSaveEdit = () => {
    if (taskName && taskDescription) {
      onEdit(task.id, { ...task, name: taskName, description: taskDescription });
      setIsEditing(false);
    } else {
      alert('Both fields are required!');
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
            placeholder="Task Name"
          />
          <textarea 
            value={taskDescription} 
            onChange={(e) => setTaskDescription(e.target.value)} 
            placeholder="Task Description"
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <span onClick={() => onToggleComplete(task.id)} className="task-name">{task.name}</span>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
