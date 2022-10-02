import React from 'react'
import NotesItem from './NotesItem'

function Notes(props) {

    const nextClick = ()=>{
        props.updateSetPage(props.page+1);
    }
    
    const prevClick = ()=>{
        props.updateSetPage(props.page-1);
    }

    return (
        <div className='container my-4'>
            <h1 className='text-center my-4'>Your Notes</h1>
            <div className="row">
                {localStorage.getItem("note") !== null && JSON.parse(localStorage.getItem("note")).map((note, index) => {
                    if(index<props.page*6+6 && index>=props.page*6)
                    return (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12 my-2" key={index}>
                            <NotesItem note={note} onDelete={() => { props.onDelete(note.sno) }} />
                        </div>
                    )
                    return null;
                })}
            </div>
            <div className="container d-flex my-4">
                <button className='btn btn-success' disabled={JSON.parse(localStorage.getItem("note")).length === 0 || props.page===0} onClick={prevClick}>Previous</button>
                <button className='btn btn-success' disabled={JSON.parse(localStorage.getItem("note")).length === 0 ? true : Math.floor((Object.keys(JSON.parse(localStorage.getItem('note'))).length-1)/6)===props.page} onClick={nextClick} style={{ marginLeft: "auto" }}>Next</button>
            </div>
        </div>
    )
}

export default Notes