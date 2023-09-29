import React from "react";

export default function TodoList () {
    function getfetch(){
        fetch(`http://localhost:5000/addtask/${document.getElementById('tytul').value}/${document.getElementById('opis').value}`)
    }
    return (
        <div className="form">
            <input type='text' placeholder="title" id='tytul'></input>
            <input type='text' placeholder="descritpion" id='opis'></input>
            <button onClick={getfetch}>dodaj zadanie</button>
        </div>           
    )
}
