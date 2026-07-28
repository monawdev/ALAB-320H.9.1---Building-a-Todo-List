import { useState } from "react";

function TodoForm({ dispatch }) {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        title: text,
        completed: false
      }
    });

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={text}
        placeholder="Add Todo..."
        onChange={(e) => setText(e.target.value)}
      />

      <button>Add</button>

    </form>
  );
}

export default TodoForm;