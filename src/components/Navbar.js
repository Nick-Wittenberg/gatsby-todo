import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Nav = styled.div`
  background-color: #27ae60;
  margin: 0 0 2rem;
  padding: 1rem;
  text-align: center;
  width: 100vw;

  && h1 {
    margin: 0;
  }
  && li {
    font-size: 1.4rem;
    font-weight: bold;
    padding: 0.5rem;
  }
`

export default function Navbar() {
  return (
    <Nav>
      <h1>Todo App</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </Nav>
  )
}
