import React, { useState } from 'react';
import './Tasks.css'

const Tasks = () => {
  // Sample tasks data
  const tasksData = [
    { id: 1, staffId: 101, name: 'Mary Kom', roomNo: 101, task: 'Clean room', status: 'pending' },
    // Add more tasks as needed
  ];

  // State to manage task status
  const [taskStatus, setTaskStatus] = useState('');

  // Function to handle status change
  const handleStatusChange = (taskId, newStatus) => {
    // Implement logic to update task status
    console.log(`Task ${taskId} status changed to ${newStatus}`);
  };

  return (
    <div className="content">
      <h2>Tasks</h2>
      <p>View and manage your tasks here.</p>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Room No.</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasksData.map((task) => (
            <tr key={task.id}>
              <td>{task.staffId}</td>
              <td>{task.name}</td>
              <td>{task.roomNo}</td>
              <td>{task.task}</td>
              <td>
                <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
                  <option value="pending">Pending</option>
                  <option value="done">Done</option>
                </select>
                <button onClick={() => handleStatusChange(task.id, taskStatus)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
