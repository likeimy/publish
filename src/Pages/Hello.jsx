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

export default function Hello() {
  return(
    <div>
      <h1>Hello~</h1>
      <Link to='/sub'><Button>이동</Button></Link>
    </div>
  )
}