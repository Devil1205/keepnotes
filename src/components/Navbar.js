import React from 'react'

function Navbar() {
  return (
    <div className='customNavbar'>
      <span style={{ cursor: "pointer" }} onClick={() => {
        window.scroll({top: 0,left: 0,behavior: 'smooth'});
      }}>KeepNotes</span>
    </div>
  )
}

export default Navbar