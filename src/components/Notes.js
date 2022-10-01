import React from 'react'
import NotesItem from './NotesItem'

function Notes(props) {


    return (
        <div className='container py-4'>
            <h1 className='text-center'>Your Notes</h1>
            <div className="row">
                {localStorage.getItem("note") !== null && JSON.parse(localStorage.getItem("note")).map((note, index) => {
                    return (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12 m-2" key={index}>
                            <NotesItem note={note} onDelete={() => { props.onDelete(note.sno) }} />
                        </div>
                    )
                })}
            </div>
            <div className="container d-flex">
                <button className='btn btn-success'>Previous</button>
                <button className='btn btn-success' style={{ marginLeft: "auto" }}>Next</button>
            </div>
        </div>
    )
}

export default Notes