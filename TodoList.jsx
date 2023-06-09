import { useState } from "react"
import "./todo.css"
import { TodoItem } from "./TodoItem"
import { AddTodo } from "./Addtodo"

export const TodoList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn React"
    },
    {
      id: 2,
      title: "Learn Node"
    },
    {
      id: 3,
      title: "Learn code"
    },
    {
      id: 4,
      title: "hello world"
    }
  ])

  const deleteTodo = (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
  }

  const addTask = (title) => {
    if (!title) {
      return
    }
    const newTask = { id: items.length + 1, title }
    const newItems = [...items, newTask]
    setItems(newItems)
  }

  const changeColor = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isTitleColored: !item.isTitleColored
        }
      }
      return item
    })
    setItems(updatedItems)
  }

  return (
    <div>
      <div className="bar">
        <h2 className="heading">Website Todo</h2>
      </div>
      <div className="todo-list shadow-lg">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            deleteTodo={() => deleteTodo(item.id)}
            changeColor={() => changeColor(item.id)}
          />
        ))}
      </div>
      <AddTodo addTodo={addTask} />
    </div>
  )
}
