import Column from './Column';
import { useBoard } from './BoardContext';

function Board() {
  const { tasks } = useBoard();

  return (
    <div className="board">
      <Column title="To Do" tasks={tasks.filter(task => task.status === 'todo')} />
      <Column title="In Progress" tasks={tasks.filter(task => task.status === 'inProgress')} />
      <Column title="Done" tasks={tasks.filter(task => task.status === 'done')} />
    </div>
  );
}

export default Board;
