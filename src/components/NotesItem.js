import React from 'react'

function NotesItem({note,onDelete}) {
    return (
        <div className="container">
            <div className="notesItem">
                <h4 className='text-center'>{note.title}</h4>
                <p>{note.description}</p>
                <button className='btn btn-danger' style={{width: "fit-content"}} onClick={()=>{onDelete(note.sno)}}>Delete</button>
            </div>
        </div>
    )
}

export default NotesItem