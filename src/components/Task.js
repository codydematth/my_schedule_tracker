import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`text-lg font-normal text-yellow-200 font-sans italic md:w-2/5 p-1 m-auto bg-gray-600 mb-2 cursor-pointer ${
        task.reminder ? 'reminder' : ''
      } `}
      onDoubleClick={() => onToggle(task.id)}>
      <h3 className='inline'> {task.text}</h3>{' '}
      <span
        className='text-red-500 text-2xl font-bold float-right px-4 cursor-pointer'
        onClick={() => onDelete(task.id)}>
        X
      </span>
      <p className='bg-gray-400 text-white text-sm'> {task.day}</p>
    </div>
  );
};

export default Task;
