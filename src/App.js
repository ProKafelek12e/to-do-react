import './App.css';
import TodoList from './TodoList';
import Form from './Form'
import { useState,useEffect } from 'react';

//fetch(`http://localhost:5000/gettask`).then(response=> response.json())
//.then(data=>console.log(data)).catch(error => console.log(error))

function App() {
  const [todos,setTodos] = useState([{id:"1",title:'Tytul1',description:'opis1'}])
  //useEffect(() => {
  //  // Wywołaj fetch, aby pobrać dane z serwera
  //  fetch(`http://localhost:5000/gettask`)
  //    .then((response) => response.json())
  //    .then((data) => {
  //      // Aktualizuje stan todos na podstawie danych z serwera
  //      setTodos(data);
  //    })
  //    .catch((error) => console.log(error));
  //})
  return (
    <div className="App">
      <Form></Form>
      <TodoList todoList={todos}></TodoList>
    </div>
  );
  
}

export default App;
