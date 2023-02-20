//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContex";

// const defaultTodos = [
//   {text: 'Costar Cebolla', completed:true},
//   {text: 'Tomar el curso de intro a React', completed:false},
//   {text: 'Llorar por la cebolla', completed:false}
// ];



function App(props) {  

        
  return (

    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );

}

export default App;
