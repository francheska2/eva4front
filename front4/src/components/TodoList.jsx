import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { TodoItem } from "./TodoItem";

import {v4 as uuid} from "uuid";

export function TodoList() {


    const [todos, setTodos] = useState([
        { id: 1, Imagen: 'Imagen 1' }, 
        { id: 2, Imagen: 'Imagen 2' },
        { id: 3, Imagen: 'Imagen 3' }, 
        { id: 4, Imagen: 'Imagen 4' },
        { id: 5, Imagen: 'Imagen 5'}
    ]);

    const miImagenRef = useRef();


    const agregarImagen = () => {
        //alert("agregando Imagen...");
        const ImagenInput = miImagenRef.current.value;
        const id = uuid();
        //alert(id);


        if(ImagenInput === ''){
            return;
        }






        


        setTodos((prevTodos)=>{
            const nuevaImagen = {
                id: uuid(), 
                Imagen: ImagenInput
            }


 
        
            miImagenRef.current.value = '';
            return[...prevTodos, nuevaImagen]
        });


    }



    return (
        <Fragment>

            <center><h1>Mi Álbum</h1>

            <div className="input-group mt-4 mb-4">
                <input ref={miImagenRef} placeholder="Ingrese un Titulo" className="from-control" type="text"></input>
                <button onClick={agregarImagen} className="btn btn-success ">+</button>
            </div>

            <div className="list-group">
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id}></TodoItem>
                ))}
            </div></center>
        </Fragment>
    )
}