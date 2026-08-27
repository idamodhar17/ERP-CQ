import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { text: "how is this possible", done: false },
    { text: "it blows my mind", done: false },
    { text: "i cant believe i am doing this", done: true },
    { text: "how you make all of this so easy", done: false },
  ]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-white md:p-8 p-4 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
          To-Do List 📋
        </h2>
        <div className="flex items-center mb-6">
          <input
            type="text"
            className="flex-1 p-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="add your task here"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="ml-4 bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            Add
          </button>
        </div>
        <ul className="space-y-4">
          {tasks.map((t, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleTask(index)}
                  className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                    t.done
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-400"
                  }`}
                >
                  {t.done && (
                    <svg
                      className="text-white w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span
                  className={`${
                    t.done ? "line-through text-gray-500" : "text-gray-800"
                  }`}
                >
                  {t.text}
                </span>
              </div>
              <button
                onClick={() => removeTask(index)}
                className="text-xl text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
