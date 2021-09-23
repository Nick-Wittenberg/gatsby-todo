import React, { useState } from "react"
import styled, { css } from "styled-components"
import Navbar from "../components/Navbar"
import { GlobalStyles } from "../GlobalStyles.style"

const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: all ease 100ms;

  &&:hover {
    cursor: pointer;
    color: white;
    background-color: palevioletred;
  }

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
const Container = styled.div`
  text-align: center;
`

const CloseButton = styled.button`
  background-color: palevioletred;
  padding: 0.1rem 0.4rem;
  border-radius: 0.2rem;
  margin-left: 0.4rem;
  position: relative;
  font-weight: "bold";
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
`

export default function Home() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const onSubmit = event => {
    event.preventDefault()
    if (todo !== "") {
      setTodos([{ title: todo }, ...todos])
      setTodo("")
    }
  }

  const onClose = event => {
    setTodos([...todos].filter(todo => todo.title !== event.target.value))
  }

  return (
    <Container
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <GlobalStyles />
      <Navbar />
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Add to do</label>
        <input
          type="text"
          id="todo"
          value={todo}
          placeholder="Enter Todo here"
          onChange={event => {
            setTodo(event.target.value)
          }}
        />

        <Button primary={todo === "" ? false : true} type="submit">
          Submit
        </Button>
      </form>
      <h2>Todo List</h2>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "space-between",
          maxWidth: "15rem",
          textAlign: "center",
        }}
      >
        {todos.map((todo, index) => {
          return (
            <li
              key={`todo-${index}`}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {todo.title}
              <CloseButton value={todo.title} onClick={onClose}>
                x
              </CloseButton>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
