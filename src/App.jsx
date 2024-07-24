import { useState } from "react";
import NoteCard from "./components/NoteCard";
import "./App.css";
import MDEditor from '@uiw/react-md-editor';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentEditing, setCurrentEditing] = useState(null);

  const addNote = () => {
    const newNote = {
      title: "#Title",
      desc: "",
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    let newArray = notes.filter((item, ind) => ind !== index);
    if (newArray.length === 0) {
      setCurrentEditing(null);
    }
    setNotes(newArray);
  };

  const handleEditorChange = (value) => {
    let newValue = value || "";
    let localCopy = [...notes];
    localCopy[currentEditing].desc = newValue;
    localCopy[currentEditing].title = newValue.split("\n")[0];
    setNotes(localCopy);
  };

  return (
    <div className="container" style={{ display: "flex", gap: "10px" }}>
      <div>
        <button onClick={addNote} className="add">ADD NOTE</button>

        {notes.map((item, index) => (
          <NoteCard
            key={index}
            title={item.title}
            setCurrentEditing={() => setCurrentEditing(index)}
            index={index}
            deleteNote={deleteNote}
          />
        ))}
      </div>
      <div>
        {currentEditing !== null ? (
          <MDEditor
            height={700} 
            value={notes[currentEditing].desc}
            onChange={handleEditorChange}
            style={{ width: '1200px' }}
          />
        ) : (
          <p className="bounce" style={{fontSize: "4.5rem", textAlign: "center", color: "white"}}>Please click on a specific note to edit</p>
        )}
      </div>
    </div>
  );
}

export default App;