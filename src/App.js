import { useState } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

function App() {

  const [localStorageArray, setLocalStorageArray] = useState([]);

  const [page, setPage] = useState(0);

  const updateSetPage = (element) => {
    setPage(element);
  }

  const createNote = async () => {
    let title = document.querySelector('.addNote input').value;
    let description = document.querySelector('.addNote textarea').value;
    if (localStorage.getItem('note') === null) {
      setLocalStorageArray(localStorageArray.push({ sno: 0, title: title, description: description }));
      localStorage.setItem("note", JSON.stringify(localStorageArray));
      console.log(localStorage.getItem('note'));
    }
    else {
      let temp = await JSON.parse(localStorage.getItem("note"));
      temp.push({ sno: Object.keys(temp).length, title: title, description: description });
      if (temp.length % 6 === 1)
        setPage(page + 1);
      setLocalStorageArray(temp);
      localStorage.setItem("note", JSON.stringify(temp));
      console.log(localStorage.getItem("note"));
    }
  }

  const onDelete = (index) => {
    let temp = JSON.parse(localStorage.getItem("note"));
    temp.splice(index, 1);
    if (temp.length === page*6)
      setPage(page - 1);
    for (let i = index; i < Object.keys(temp).length; i++) {
      temp[i].sno -= 1;
    }
    setLocalStorageArray(temp);
    localStorage.setItem("note", JSON.stringify(temp));
    console.log(localStorage.getItem('note'));
  }

  return (
    <div>
      <Navbar />
      <AddNote createNote={createNote} />
      <Notes onDelete={onDelete} createNote={createNote} updateSetPage={updateSetPage} page={page} />
    </div>
  );
}

export default App;
