import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [todos,setTodos] = useState([{id:"1",title:'Tytul1',description:'opis1'},{id:"2",title:'Tytul2',description:'opis2'}])
  return (
    <div className="App">
      <TodoList todoList={todos}></TodoList>
    </div>
  );
}

export default App;
