import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:8080/api/task/addTask",
        { title, description },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Task added successfully");
      navigate("/allTasks");
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Failed to add task, please login first", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4">
      <h2 className="text-3xl font-bold text-white mb-6">Add New Task</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-md"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring focus:ring-green-500"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
          className="w-full p-2 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
