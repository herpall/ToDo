import { useState } from "react";
import Header from "./components/Controlado/Header";
import Todos from "./components/Controlado/Todos";


const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todos, setTodos] = useState(initialState);

  const AddTodo = (todo)=>{
    setTodos(...todos, todo)
  }

  return (
    <div className="min-h-screen bg-gray-400 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      

      <Header AddTodo={AddTodo} />
      
      <Todos />

    </div>
  )
}

export default App;