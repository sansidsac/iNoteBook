import React, { useState , useContext} from 'react'
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {

    const {addNote}=useContext(NoteContext);
    const [note, setNote]=useState({title:"",description:"",tag:""});
    const handleOnClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }

    const handleOnChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }

  return (
    <div>
        <h2>Enter your Note</h2>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              aria-describedby="emailHelp"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name='description'
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name='tag'
              aria-describedby="emailHelp"
              onChange={handleOnChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleOnClick}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddNote