import React,{useContext} from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {

    const {notes}=useContext(NoteContext);

  return (
    <div className="row my-3">
    <h2>Your Notes</h2>
    {notes.map((note) => (
      <NoteItem key={note._id} note={note} />
    ))}
    </div>
  )
}

export default Notes