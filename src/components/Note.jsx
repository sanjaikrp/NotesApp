import React from "react";

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title.title}</h1>
      <p>{props.title.content}</p>
      <button onClick={handleDelete} value={props.id}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
