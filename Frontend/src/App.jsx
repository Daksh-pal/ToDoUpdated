import "./App.css";
import Landing from "./Components/Landing.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddTask from "./Components/AddTask.jsx";
import AllTasks from "./Components/AllTasks.jsx";
import UpdateTask from "./Components/UpdateTask.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/allTasks" element={<AllTasks />} />
        <Route path="/updateTask/:id" element={<UpdateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
