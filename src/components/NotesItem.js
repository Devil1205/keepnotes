import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function NotesItem({note,onDelete}) {
    return (
        <div className="container">
            <div className="notesItem">
                <h4 className='text-center'>{note.title}</h4>
                <p>{note.description}</p>
                <DeleteForeverIcon className='deleteNoteBtn' onClick={()=>{onDelete(note.sno)}}/>
                {/* // <button className='btn btn-danger' style={{width: "fit-content"}} onClick={()=>{onDelete(note.sno)}}>Delete</button> */}
            </div>
        </div>
    )
}

export default NotesItem