import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function NotesItem({ note, onDelete, editNote }) {
    return (
        <div className="container">
            <div className="notesItem">
                <h4 className='text-center'>{note.title}</h4>
                <p>{note.description}</p>
                <EditIcon className='deleteNoteBtn' onClick={() => { editNote(note.sno) }} style={{ width: "fit-content", position: "absolute", bottom: "5px" }} />
                {/* <button className="btn btn-primary float-start" onClick={()=>{editNote(note.sno)}} style={{width: "fit-content", position: "absolute", bottom: "5px"}}>Edit</button> */}
                <DeleteForeverIcon className='deleteNoteBtn' onClick={() => { onDelete(note.sno) }} style={{ position: "relative", left: "88%", bottom: "-20px" }} />
            </div>
        </div>
    )
}

export default NotesItem