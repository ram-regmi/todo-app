import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Priority = 'p1' | 'p2' | 'p3';

type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidv4(),
      title: 'Learn React',
      isCompleted: true,
      priority: 'p1',
    },
  ]);
  const [taskName, setTaskName] = useState('');

  const onAddTask = () => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskName,
        isCompleted: false,
      },
    ]);
    setTaskName('');
  };

  return (
    <div>
      <h1>Tasks</h1>

      <label htmlFor="task-input">Add Task: </label>
      <input
        id="task-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <button onClick={onAddTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
