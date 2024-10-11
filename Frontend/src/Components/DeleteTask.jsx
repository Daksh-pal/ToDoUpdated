import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DeleteTask = ({ taskId }) => {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8080/api/task/deleteTask/${taskId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      console.log("Task deleted successfully:", response.data);
      navigate("/allTasks");
      toast.success("Task deleted successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className=" text-red-500 hover:text-red-700 font-semibold transition duration-200 bg-gray-900 p-3 rounded-md hover:bg-black"
      >
        Complete
      </button>
    </div>
  );
};

export default DeleteTask;
