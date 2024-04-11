import Swal from 'sweetalert2';
import { useState } from "react";

const Controlado = ({AddTodo}) => { 
    
    const [todo, setTodo] = useState({
        title: "",
        completed: false
    })

    const handleSubmit = ()=>{
        e.preventDefault()
        setTodo({
            title: "",
            completed: false
        })

        if(!title.trim()){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Completa el casillero"
            })
        }

        AddTodo({
            id: Date.now(),
            ...todo
        })

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Todo agregado!",
            showConfirmButton: false,
            timer: 1500
        })
    }

    return(
        <form 
            className="mt-8 overflow-hidden py-4 px-4 rounded-md bg-white flex justify-between items-center"
            onSubmit={handleSubmit}
        >
            <button className="h-3 w-3 rounded-full border-2 mx-2"></button>
            <input 
                type="text"
                className="w-full outline-none text-gray-400 border-none" 
                placeholder="Create a new ToDo"
                name="title"
            ></input>
            <button 
                className="w-22 h-2/6 mb-4 mt-2 border-black border-double rounded-md bg-blue-800 text-white p-2" 
                onSubmit={handleSubmit}
            > 
                Agregar Tarea
            </button>
        </form>
    )
}

export default Controlado;