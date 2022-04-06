import {useState, useEffect} from "react"
import DragMove from "./DragMove"
import ToDo from "./ToDo"
import {nanoid} from "nanoid"
import { Button } from '@mantine/core'

export default function ToDoList({checked, color}) {
  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem("todos")) || []); //should contain all todos
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  })
  const [isDragging, setIsDragging] = useState(false);
  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  const toDoElements = todos.map(todo => {
    return <ToDo
      value={todo.text}
      key={todo.id}
      handleTyping={(e) => handleTyping(e, todo.id)}
      checked={checked}
      deleteTodo={() => deleteTodo(todo.id)}
    />
  })

  // function createDummyTodos() {
  //   setTodos([{
  //     id: nanoid(),
  //     text: 'Today, I\'d like to...'
  //   },])
  // }

  function handleTyping(e, id) {
    setTodos(prevTodos => {
      let newTodos = [];
      prevTodos.forEach(todo => {
        id === todo.id ? newTodos.unshift({...todo, text: e.target.value}) : newTodos.push(todo)
      })
      return newTodos;
    })
  }

  function createNote() {
    setTodos(prevTodos => [{
      id: nanoid(),
      text: ''
    }, ...prevTodos])
  }

  function deleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // useEffect(() => {
  //   createDummyTodos()
  // }, [])

  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos])

  return (
    <DragMove onDragMove={handleDragMove} isDragging={isDragging} setIsDragging={setIsDragging}>
      <main className="todo-list" style={{padding: "20px",
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        transform: `translateX(${translate.x}px) translateY(${translate.y}px) scale(${isDragging ? '101%' : '100%'})`,
        borderRadius: "8px",
        overflowX: "visible"}}>
        <h1 style={{marginTop: "0", marginBottom: "10px"}}>Tasks</h1>
        <Button className="Add Note" onClick={createNote} color="orange" compact>Add Task</Button>
        <div styles={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          {toDoElements}
        </div>
      </main>
    </DragMove>
  )
}