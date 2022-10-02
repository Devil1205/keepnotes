import React from 'react'
import NotesItem from './NotesItem'

function Notes(props) {

    const nextClick = () => {
        props.updateSetPage(props.page + 1);
    }

    const prevClick = () => {
        props.updateSetPage(props.page - 1);
    }

    return (
        <div>
            <div className='container my-4'>
                <h1 className='text-center my-4'>Your Notes</h1>
                <div className="row">
                    {localStorage.getItem("note") !== null && JSON.parse(localStorage.getItem("note")).map((note, index) => {
                        if (index < props.page * 6 + 6 && index >= props.page * 6)
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-12 my-2" key={index}>
                                    <NotesItem note={note} editNote={props.editNote} onDelete={() => { props.onDelete(note.sno) }} />
                                </div>
                            )
                        return null;
                    })}
                </div>
                <div className="container d-flex my-4">
                    <button className='btn btn-success' disabled={localStorage.getItem('note')===null || JSON.parse(localStorage.getItem("note")).length === 0 || props.page === 0} onClick={prevClick}>Previous</button>
                    <button className='btn btn-success' disabled={localStorage.getItem('note')===null || JSON.parse(localStorage.getItem("note")).length === 0 ? true : Math.floor((Object.keys(JSON.parse(localStorage.getItem('note'))).length - 1) / 6) === props.page} onClick={nextClick} style={{ marginLeft: "auto" }}>Next</button>
                </div>
            </div>
            <div className="container-fluid" style={{display: "flex",justifyContent: "center"}}>
            <div className="addNote editNote" style={{ position: "absolute", top: "70px", left: "auto", minHeight: "calc(100vh - 70px)", padding: "10px", boxSizing: "border-box", backgroundColor: "white", display: "none" }}>
                <input type="text" placeholder='Title' />
                <textarea rows="10" placeholder='Write a note'></textarea>
            </div>
        </div>
        </div >
    )
}

export default Notes