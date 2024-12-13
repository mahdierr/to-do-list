import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onEdit={onEditTask} 
          onDelete={onDeleteTask} 
          onToggleComplete={onToggleComplete} 
        />
      ))}
    </div>
  );
};

export default TaskList;
