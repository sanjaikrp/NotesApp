import React, { useState } from "react";

function CreateArea(props) {
  const [tempNotes, setTempNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    // const eventName = event.target.name;
    // const eventValue = event.target.value;

    const { name, value } = event.target;
    setTempNotes((previous) => {
      return { ...previous, [name]: value };
    });

    // eventName === "title"
    //   ? setTempNotes((previous) => {
    //       return { nTitle: eventValue, nContent: previous.nContent };
    //     })
    //   : setTempNotes((previous) => {
    //       return { nTitle: previous.nTitle, nContent: eventValue };
    //     });
  }

  function handleClick(event) {
    props.text(tempNotes);
    setTempNotes({
      title: "",
      content: ""
    });
    // setTempNotes({ nTitle: "", nContent: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={tempNotes.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={tempNotes.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
