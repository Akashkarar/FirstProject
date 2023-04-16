import { FaTimes } from 'react-icons/fa';
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  console.log(task.status);
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => {
        onToggle(task.id);
      }}
    >
      <h3>
        {/* {task.text} */}
        {task.firstName} {task.lastName}
        <FaTimes
          style={{
            color: 'red',
            cursor: 'pointer',
          }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <h5>Email: {task.email}</h5>
      <h5>Gender: {task.gender}</h5>
      <h5>married : {task.status ? 'Yes' : 'No'}</h5>
      <h5>Age: {task.age}</h5>
    </div>
  );
};

export default Task;
