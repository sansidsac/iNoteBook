import React, { useState , useContext} from 'react'
import NoteContext from "../context/notes/noteContext";

const AddNote = ({showAlert}) => {

    const {addNote}=useContext(NoteContext);
    const [note, setNote]=useState({title:"",description:"",tag:""});
    const handleOnClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
        showAlert("Added successfully","success");
    }

    const handleOnChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }

  return (
    <div>
        <h2>Enter your Note</h2>
      <div className="container my-3">
        <form className='form'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              value={note.title}
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
              value={note.description}
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
              value={note.tag}
              onChange={handleOnChange}
            />
          </div>

          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleOnClick}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddNote