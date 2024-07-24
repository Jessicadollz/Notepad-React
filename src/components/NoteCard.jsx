import React from "react";
import "./NoteCard.css"

export default function NoteCard({
  title,
  setCurrentEditing,
  index,
  deleteNote,
}) {

  return (
    <div>
      <div style={{ display: "flex", gap: "20px", width: "300px"}}>
        <h2 className="temp" onClick={() => setCurrentEditing(index)}>
          {title.substr(0, 10)}....
        </h2>
        <button onClick={() => deleteNote(index)} className="delete">Delete</button>
      </div>
      <hr style={{color:"white"}}/>
    </div>
  );

} 