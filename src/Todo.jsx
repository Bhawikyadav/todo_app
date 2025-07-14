import React, { useState } from 'react';

function Todo() {
  const [display, setDisplay] = useState("");
  const [addTodo, setAddtodo] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setDisplay(e.target.value);
  };

  const handleAdd = () => {
    if (display.trim() !== "") {
      if (isEditing) {
        // Updating existing item
        const updatedList = addTodo.map((item, index) =>
          index === editIndex ? { ...item, text: display } : item
        );
        setAddtodo(updatedList);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        // Adding new item
        setAddtodo((prev) => [...prev, { text: display, completed: false }]);
      }
      setDisplay("");
    }
  };

  const editItem = (i) => {
    setDisplay(addTodo[i].text); // load the text only
    setIsEditing(true);
    setEditIndex(i);
  };

  const removeItem = (i) => {
    const updatedList = addTodo.filter((_, id) => id !== i);
    setAddtodo(updatedList);
  };

  const removeAll = () => {
    setAddtodo([]);
    setDisplay("");
  };

  const toggleCheck = (i) => {
    const updatedList = addTodo.map((item, index) =>
      index === i ? { ...item, completed: !item.completed } : item
    );
    setAddtodo(updatedList);
  };

  return (
    <div className="container m-auto bg-gradient-to-l bg-violet-300 text-center py-10">
      <h1 className='text-3xl pb-4 font-bold'>Hey I am Todo list</h1>

      <div className='h-16 text-2xl'>
        <input
          className='border-2 border-black p-2 w-2/3 mr-4'
          value={display}
          onChange={handleChange}
          type="text"
          placeholder='Add Activity'
        />
        <button
          onClick={handleAdd}
          className='border-2 border-black p-2 bg-blue-800 text-white'
        >
          {isEditing ? "Update Item" : "Add Item"}
        </button>
      </div>

      <div className='display-Todo'>
        <p className='text-3xl text-left p-6 font-bold'>Here is your list</p>

        {addTodo.map((data, i) => (
          <div
            key={i}
            className='bg-slate-200 text-left flex justify-between items-center rounded-sm p-2 m-2'
          >
            <input
              type="checkbox"
              checked={data.completed}
              onChange={() => toggleCheck(i)}
              className='mr-4 scale-150'
            />
            <p className={`text-3xl flex-1 ${data.completed ? "line-through text-gray-500" : ""}`}>
              {data.text}
            </p>
            <div>
              <button
                onClick={() => removeItem(i)}
                className='border-2 border-black p-1 mx-2 bg-blue-800 text-white rounded-sm'
              >
                Delete
              </button>
              <button
                onClick={() => editItem(i)}
                className='border-2 border-black p-1 bg-blue-800 text-white rounded-sm'
              >
                Edit
              </button>
            </div>
          </div>
        ))}

        {addTodo.length >= 1 && (
          <button
            onClick={removeAll}
            className='border-2 border-black p-2 bg-blue-800 text-white mt-4'
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;
