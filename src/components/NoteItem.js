import React, {useContext} from 'react'
import NoteContext from "../context/notes/noteContext";


const NoteItem = ({note, updateNote, showAlert}) => {

  const {deleteNote}=useContext(NoteContext);

  const handleOnDelete=()=>{
    deleteNote(note._id);
    showAlert("Deleted successfully","success")
  }

  return (
    <div className='col-md-3 my-3'>

    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-trash mx-2" onClick={handleOnDelete}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
  </div>
</div>
    </div>
  )
}

export default NoteItem