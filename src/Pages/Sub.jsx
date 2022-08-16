import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Button = styled.button`
  border: none;
  width: 100px;
  height: 50px;
  font-size: 24px;
  background-color: black;
  color: white;
`

export default function Sub() {
  return(
    <div>
      <h1>React!</h1>
      <Link to='/'><Button>이동</Button></Link>
    </div>
  )
}