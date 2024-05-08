/* eslint-disable react/prop-types */
import Task from './Task.jsx';

export default function Column ({ title, tasks }) {
    return (
      <div className="column">
        <h2>{title}</h2>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  }