import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(newNote) {
    setNotes((previous) => {
      return [...previous, newNote];
    });
  }

  function deleteItem(noteId) {
    console.log(noteId);

    setNotes((previous) => {
      return previous.filter((item, index) => {
        return index !== noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea text={addItem} />
      {notes.map((x, index) => (
        <Note key={index} id={index} title={x} onDelete={deleteItem} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
