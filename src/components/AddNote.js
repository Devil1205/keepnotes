import React from 'react'
import { useEffect } from 'react';
import addNoteBtn from '../images/addNoteBtn.png'

function AddNote(props) {

    useEffect(() => {
        document.addEventListener('mouseup', (element) => {
            var container = document.querySelector('.addNote');
            if (container.contains(element.target) === true) {
                document.querySelector('.addNote textarea').style.maxHeight = "120px";
                document.querySelector('.addNoteBtn').style.maxHeight = "50px";
            }
            else {
                document.querySelector('.addNote textarea').style.maxHeight = "0px";
                document.querySelector('.addNoteBtn').style.maxHeight = "0px";

            }
            // console.log(container.contains(e.target));
        });
    }, [])


    return (
        <div className='my-4'>
            <div className="container addNote">
                <input type="text" placeholder='Title' style={{ minHeight: "50px" }} />
                <textarea rows={5} placeholder='Write a note' style={{maxHeight: "0px"}}/>
                <span className='addNoteBtn' onClick={props.createNote} style={{maxHeight: "0px"}}>
                    <img src={addNoteBtn} alt="ADD NOTE" />
                </span>
            </div>
        </div>
    )
}

export default AddNote