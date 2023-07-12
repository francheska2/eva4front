import React from "react";
import ReactDOM from "react-dom";

export function TodoItem({todo}){

    const {id, Imagen} = todo;

    return(
        <li className="list-group-item">{Imagen}</li>
    );
}