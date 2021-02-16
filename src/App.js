import React, { useState,useEffect } from 'react';
import "./styles.css";
//importing components
import Form from './components/form'
import TodoList from './components/TodoList'

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos,setFilteredTodos] = useState([])
 //useEffect 
 useEffect(() => {
  filterHandler();
 },[todos, status])
 
  //filtering the completed todos
  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
          break;
    }
  };
  
  return (
    <div className="App">
      <header>
        <h1>Solo's ToDo List </h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}
 