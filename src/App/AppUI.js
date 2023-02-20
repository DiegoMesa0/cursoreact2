import React from "react";
import { TodoContext } from "../TodoContex";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import { TodoForm } from "../TodoForm";
import {CreateTodoButtom} from '../CreateTodoButtom';
import {Modal} from "../modal";

function AppUI(){
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
        } = React.useContext(TodoContext);
    return(

    <React.Fragment>

    <TodoCounter />
    
    <TodoSearch />
    
            <TodoList>
            {error && <p>Hubo un errore</p>}
            {loading && <p>Estamos cargando</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
    
          {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={ () => completeTodo(todo.text) }
            onDelete={()=> deleteTodo(todo.text)}
          />))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}

    <CreateTodoButtom 
    />

    </React.Fragment>

    );
}

export {AppUI};