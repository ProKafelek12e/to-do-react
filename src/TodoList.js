import React from "react";

export default function TodoList ({todoList}) {
    return (
            todoList.map((task) =>{
                return( 
                <div key={task.id} className="task">
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                
                </div>
                )
            })
    )
}