import React from "react";
import notes from "../notes";

function createNote(note) {
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}

function Note() {
  return notes.map(createNote);
}

export default Note;
