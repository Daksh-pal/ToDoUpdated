import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DeleteTask from './DeleteTask';

const AllTasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    navigate('/addTask');
  };

  const handleLogout = async() => {
    const token = localStorage.removeItem('token');
  }

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      toast.error("You need to be logged in to view tasks");
      navigate('/login');
      return;
    }
    try {
      const res = await axios.get('http://localhost:8080/api/task/allTasks', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch tasks, " + (error.response?.data?.message || error.message));
    }
  };

  const handleDelete = async ({ taskId }) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/task/deleteTask/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
      toast.success("Task deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete task: " + (error.response?.data?.message || error.message));
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4 border-red-500 relative">
      <h2 className="text-3xl font-bold text-white mb-6 ">Your Tasks</h2>
      <button 
        onClick={handleLogout} 
        className='py-1 px-3 rounded-lg hover:bg-gray-300 bg-white absolute top-5 right-5'
      >
        Logout
      </button>

      {tasks.length === 0 ? (
        <p className="text-lg text-gray-400 text-center">
          No tasks found. <br /> Add some tasks to get started.
        </p>
      ) : (
        <ul className="w-full max-w-xl bg-gray-800 rounded-lg shadow-md p-4 space-y-4">
          {tasks.map((task) => (
            <li key={task._id} className="p-4 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">{task.title}</h3>
              <p className="text-gray-300">{task.description}</p>
              <DeleteTask taskId={task._id} onDelete={handleDelete} />
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleAddTask}
        className="mt-6 py-2 px-4 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300"
      >
        Add New Task
      </button>
    </div>
  );
};

export default AllTasks;
