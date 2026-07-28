import { useState } from "react";

function TodoItem({ todo, dispatch }) {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.title);

  function saveEdit() {

    dispatch({
      type: "EDIT",
      payload: {
        id: todo.id,
        title: text
      }
    });

    setEditing(false);
  }

  return (
    <div style={{ margin: "10px 0" }}>

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          dispatch({
            type: "TOGGLE",
            payload: todo.id
          })
        }
      />

      {editing ? (

        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={saveEdit}>
            Save
          </button>

        </>

      ) : (

        <>
          <span
            style={{
              marginLeft: "10px",
              textDecoration: todo.completed
                ? "line-through"
                : "none"
            }}
          >
            {todo.title}
          </span>

          <button
            onClick={() => setEditing(true)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </button>

          <button
            disabled={!todo.completed}
            onClick={() =>
              dispatch({
                type: "DELETE",
                payload: todo.id
              })
            }
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>

        </>

      )}

    </div>
  );
}

export default TodoItem;