import React, { useState } from "react";

function NewTaskForm({ categories,onTaskFormSubmit }) {
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const createdItem = {
      text: taskName,
      category: taskCategory,
    };
    //let updatedItems = [...items, newItem];
    onTaskFormSubmit(createdItem);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          value={taskName}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(e) => {
            setTaskCategory(e.target.value);
          }}
          value={taskCategory}
        >
          {categories.map((category,index) => (
            <option key={index}>{category}</option>
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
