import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Task } from './types';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHearder';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskName,
        isCompleted: false,
      },
    ]);
  };
  return (
    <div>
      <h1>Tasks</h1>

      <AddTask onAddTask={onAddTask} />

      <TaskList>
        <TaskListHeader count={tasks.length} />
        {tasks.map((task) => (
          <TaskListItem key={task.id}>{task.title}</TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}

export default App;
