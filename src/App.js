import { useState, useEffect } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

function App() {

  const [localStorageArray, setLocalStorageArray] = useState([]);

  var sno =-1;

  const [page, setPage] = useState(0);

  useEffect(() => {
    document.addEventListener('mouseup', (element) => {
      var container = document.querySelector('.editNote');
      if (container.contains(element.target) === false && sno>=0) {
        let temp = {sno: sno, title: document.querySelector('.editNote input').value, description: document.querySelector('.editNote textarea').value};
        // document.querySelector('.editNote input').value = JSON.parse(localStorage.getItem('note'))[index].title;
        // document.querySelector('.editNote textarea').value = JSON.parse(localStorage.getItem('note'))[index].description;
        let tempArray = JSON.parse(localStorage.getItem('note'));
        tempArray[sno] = temp;
        setLocalStorageArray(tempArray);
        localStorage.setItem('note',JSON.stringify(tempArray));
        console.log(sno);
        document.querySelector('.editNote').style.display = "none";
        // eslint-disable-next-line
        sno=-1;
      }
    });
  }, [localStorageArray])

  const editNote = (index) => {
    document.querySelector('.editNote').style.display = 'flex'
    document.querySelector('.editNote input').value = JSON.parse(localStorage.getItem('note'))[index].title;
    document.querySelector('.editNote textarea').value = JSON.parse(localStorage.getItem('note'))[index].description;
    console.log(sno);
    sno=index;
  }

  const updateSetPage = (element) => {
    setPage(element);
  }

  const createNote = async () => {
    let title = document.querySelector('.addNote input').value;
    let description = document.querySelector('.addNote textarea').value;
    if (localStorage.getItem('note')===null || JSON.parse(localStorage.getItem('note')).length === 0) {
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
    document.querySelector('.addNote input').value="";
    document.querySelector('.addNote textarea').value="";
  }

  const onDelete = (index) => {
    let temp = JSON.parse(localStorage.getItem("note"));
    temp.splice(index, 1);
    if (temp.length === page * 6)
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
      <Notes onDelete={onDelete} createNote={createNote} updateSetPage={updateSetPage} page={page} editNote={editNote} />
    </div>
  );
}

export default App;
