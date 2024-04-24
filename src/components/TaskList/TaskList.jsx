// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../TaskList/TaskList.css";
// import { MyContext } from "../../MyContext";
// import { FaEdit } from "react-icons/fa";
// import { MdDeleteOutline } from "react-icons/md";

// const TaskList = () => {
//   const navigate = useNavigate();
//   const { tasks, setTasks } = useContext(MyContext);
//   const [searchTerm, setSearchTerm] = useState("");

//   const goToAddTask = () => {
//     navigate("/add-task");
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//   };

//   const markAsCompleted = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//   };

//   const editTask = (index) => {
//     const taskToEdit = tasks[index];
//     navigate("/edit-task", { state: { taskToEdit, index } });
//   };

//   const filteredTasks = tasks.filter((task) =>
//     task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="task-list">
//       <h1 className="task-list-heading">Task List</h1>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by task name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-input"
//         />
//       </div>
//       <div className="task-list-container">
//         {filteredTasks.length === 0 ? (
//           <div className="no-task-found">
//             <h1>No Task Found</h1>
//             <span>To add a task, click on </span>
//             <span className="no-task-found-btn" onClick={goToAddTask}>
//               Add Task
//             </span>
//           </div>
//         ) : (
//           filteredTasks.map((task, index) => (
//             <div
//               key={index}
//               className={`task-item ${task.completed ? "completed-task" : ""}`}
//             >
//               <div className="task-item-container">
//                 <h4>{task.taskName}</h4>
//                 <p>{task.description}</p>
//                 <div className="due-date-container">
//                 <span>Due Date: </span>
//                 <p className="due-date">{task.dueDate}</p>
//                 </div>
//               </div>
//               <div className="actions">
//                 <FaEdit onClick={() => editTask(index)} className="icons" />
//                 <MdDeleteOutline
//                   onClick={() => deleteTask(index)}
//                   className="icons"
//                 />
//               </div>
//               <p
//                 className={`${task.completed ? "completed" : "mark-done"}`}
//                 onClick={() => markAsCompleted(index)}
//               >
//                 {task.completed ? "Completed" : "Mark done"}
//               </p>
//             </div>
//           ))
//         )}
//       </div>

//       {filteredTasks.length > 0 && (
//         <button onClick={goToAddTask}>Add More Task</button>
//       )}
//     </div>
//   );
// };

// export default TaskList;













// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../TaskList/TaskList.css";
// import { MyContext } from "../../MyContext";
// import { FaEdit } from "react-icons/fa";
// import { MdDeleteOutline } from "react-icons/md";

// const TaskList = () => {
//   const navigate = useNavigate();
//   const { tasks, setTasks } = useContext(MyContext);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [dueDateFilter, setDueDateFilter] = useState("");
//   const [completionStatusFilter, setCompletionStatusFilter] = useState("");

//   const goToAddTask = () => {
//     navigate("/add-task");
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//   };

//   const markAsCompleted = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//   };

//   const editTask = (index) => {
//     const taskToEdit = tasks[index];
//     navigate("/edit-task", { state: { taskToEdit, index } });
//   };

//   const resetFilters = () => {
//     setSearchTerm("");
//     setDueDateFilter("");
//     setCompletionStatusFilter("");
//   };

//   const filteredTasks = tasks.filter((task) => {
//     const taskNameMatch = task.taskName.toLowerCase().includes(searchTerm.toLowerCase());
//     const dueDateMatch = !dueDateFilter || task.dueDate === dueDateFilter;
//     const completionStatusMatch = !completionStatusFilter || (completionStatusFilter === "completed" && task.completed) || (completionStatusFilter === "pending" && !task.completed);
//     return taskNameMatch && dueDateMatch && completionStatusMatch;
//   });

//   return (
//     <div className="task-list">
//       <h1 className="task-list-heading">Task List</h1>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by task name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-input"
//         />
//         <select
//           value={dueDateFilter}
//           onChange={(e) => setDueDateFilter(e.target.value)}
//           className="filter-select"
//         >
//           <option value="">Filter by due date</option>
//           {tasks.map((task, index) => (
//             <option key={index} value={task.dueDate}>
//               {task.dueDate}
//             </option>
//           ))}
//         </select>
//         <select
//           value={completionStatusFilter}
//           onChange={(e) => setCompletionStatusFilter(e.target.value)}
//           className="filter-select"
//         >
//           <option value="">Filter by completion status</option>
//           <option value="completed">Completed</option>
//           <option value="pending">Pending</option>
//         </select>
//         <button onClick={resetFilters} className="reset-button">Reset Filters</button>
//       </div>
//       <div className="task-list-container">
//         {filteredTasks.length === 0 ? (
//           <div className="no-task-found">
//             <h1>No Task Found</h1>
//             <span>To add a task, click on </span>
//             <span className="no-task-found-btn" onClick={goToAddTask}>
//               Add Task
//             </span>
//           </div>
//         ) : (
//           filteredTasks.map((task, index) => (
//             <div
//               key={index}
//               className={`task-item ${task.completed ? "completed-task" : ""}`}
//             >
//               <div className="task-item-container">
//                 <h4>{task.taskName}</h4>
//                 <p>{task.description}</p>
//                 <div className="due-date-container">
//                 <span>Due Date: </span>
//                 <p className="due-date">{task.dueDate}</p>
//                 </div>
//               </div>
//               <div className="actions">
//                 <FaEdit onClick={() => editTask(index)} className="icons" />
//                 <MdDeleteOutline
//                   onClick={() => deleteTask(index)}
//                   className="icons"
//                 />
//               </div>
//               <p
//                 className={`${task.completed ? "completed" : "mark-done"}`}
//                 onClick={() => markAsCompleted(index)}
//               >
//                 {task.completed ? "Completed" : "Mark done"}
//               </p>
//             </div>
//           ))
//         )}
//       </div>

//       {filteredTasks.length > 0 && (
//         <button onClick={goToAddTask}>Add More Task</button>
//       )}
//     </div>
//   );
// };

// export default TaskList;














import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../TaskList/TaskList.css";
import { MyContext } from "../../MyContext";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const TaskList = () => {
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [dueDateFilter, setDueDateFilter] = useState("");
  const [completionStatusFilter, setCompletionStatusFilter] = useState("");

  const goToAddTask = () => {
    navigate("/add-task");
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const markAsCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    navigate("/edit-task", { state: { taskToEdit, index } });
  };

  const resetFilters = () => {
    setSearchTerm("");
    setDueDateFilter("");
    setCompletionStatusFilter("");
  };

  const filteredTasks = tasks.filter((task) => {
    const taskNameMatch = task.taskName.toLowerCase().includes(searchTerm.toLowerCase());
    const dueDateMatch = !dueDateFilter || task.dueDate === dueDateFilter;
    const completionStatusMatch = !completionStatusFilter || (completionStatusFilter === "completed" && task.completed) || (completionStatusFilter === "pending" && !task.completed);
    return taskNameMatch && dueDateMatch && completionStatusMatch;
  });

  const uniqueDueDates = Array.from(new Set(tasks.map(task => task.dueDate)));

  return (
    <div className="task-list">
      <h1 className="task-list-heading">Task List</h1>
        <div className="filters-container">
          <input
            type="text"
            placeholder="Search by task name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={dueDateFilter}
            onChange={(e) => setDueDateFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Filter by due date</option>
            {uniqueDueDates.map((dueDate, index) => (
              <option key={index} value={dueDate}>
                {dueDate}
              </option>
            ))}
          </select>
          <select
            value={completionStatusFilter}
            onChange={(e) => setCompletionStatusFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Filter by completion status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <button onClick={resetFilters} className="reset-button">Reset Filters</button>
        </div>
      <div className="task-list-container">
        {filteredTasks.length === 0 ? (
          <div className="no-task-found">
            <h1>No Task Found</h1>
            <span>To add a task, click on </span>
            <span className="no-task-found-btn" onClick={goToAddTask}>
              Add Task
            </span>
          </div>
        ) : (
          filteredTasks.map((task, index) => (
            <div
              key={index}
              className={`task-item ${task.completed ? "completed-task" : ""}`}
            >
              <div className="task-item-container">
                <h4>{task.taskName}</h4>
                <p>{task.description}</p>
                <div className="due-date-container">
                <span>Due Date: </span>
                <p className="due-date">{task.dueDate}</p>
                </div>
              </div>
              <div className="actions">
                <FaEdit onClick={() => editTask(index)} className="icons" />
                <MdDeleteOutline
                  onClick={() => deleteTask(index)}
                  className="icons"
                />
              </div>
              <p
                className={`${task.completed ? "completed" : "mark-done"}`}
                onClick={() => markAsCompleted(index)}
              >
                {task.completed ? "Completed" : "Mark done"}
              </p>
            </div>
          ))
        )}
      </div>

      {filteredTasks.length > 0 && (
        <button onClick={goToAddTask}>Add More Task</button>
      )}
    </div>
  );
};

export default TaskList;
