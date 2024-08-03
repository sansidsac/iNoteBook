import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const host = "http://localhost:5000";

    const notesInitial = []
    
    const [notes, setNotes] = useState(notesInitial);

    //get note

    const getNotes = async() => {

      //Api call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhODIyMTRlMWQwMzdhNTZjZDg3MmNmIn0sImlhdCI6MTcyMjMyOTE3Nn0.rSOAVto_XFB9jw2_-N1mFns6XyuO0PxRwxGvLxZn3mE"
        }
      });

      const json = await response.json();
      setNotes(json);
    }
    //add note

    const addNote = async(title, description, tag) => {

      //Api call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhODIyMTRlMWQwMzdhNTZjZDg3MmNmIn0sImlhdCI6MTcyMjMyOTE3Nn0.rSOAVto_XFB9jw2_-N1mFns6XyuO0PxRwxGvLxZn3mE"
        },
        body: JSON.stringify({title, description, tag})
      });

      const note = await response.json();
      setNotes(notes.concat(note))

    }

    //delete note

    const deleteNote = (id) => {

      const newNotes = notes.filter((note)=>{return note._id!==id});
      setNotes(newNotes);

    }

    //update note

    const updateNote = async (id, title, description, tag) => {
      //Api call

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhODIyMTRlMWQwMzdhNTZjZDg3MmNmIn0sImlhdCI6MTcyMjMyOTE3Nn0.rSOAVto_XFB9jw2_-N1mFns6XyuO0PxRwxGvLxZn3mE"
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json();
      console.log(json);

      
      //Logic to update in client 
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
        
      }

    }


    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, updateNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState