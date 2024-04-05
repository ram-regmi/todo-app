import { useState } from 'react';

type TaskInputProps = {
  onAddTask: (taskName: string) => void;
};
export default function AddTask({ onAddTask }: TaskInputProps) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();
    if (!trimmedTaskName) {
      return;
    }
    onAddTask(taskName);
    setTaskName('');
  };
  return (
    <form onSubmit={handleAddTask}>
      <label htmlFor="task-input">Add Task: </label>
      <input
        required
        id="task-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
