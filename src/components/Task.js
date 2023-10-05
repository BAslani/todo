import React from 'react'
import styled from 'styled-components'
import { BiEditAlt, BiCheckbox } from 'react-icons/bi'

const Task = ({ id, desc, date, priority }) => {
  return (
    <Wrapper>
      <span className="dot"></span>
      <h5>
        {desc}
      </h5>
      <div className="btn-container">
        <button type="button" className='edit-btn' >
          <BiEditAlt />
        </button>
        <button type="button" className='check-btn' >
          <BiCheckbox />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
width: 21rem;
margin: 1rem auto;
background: #fff;
border-radius: 1rem;
height: 3rem;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
display: grid;
grid-template-columns: auto 1fr auto;
align-content: center;

h5 {
  margin: auto 0;
  font-size: 1rem;
  font-weight: 500;
}
.dot {
  height: 1rem;
  width: 1rem;
  background: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  margin: auto;
  margin-left: 0.75rem;
  margin-right: 0.75rem
}
.btn-container {
  display: flex;
}
.edit-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #747474;
}
.check-btn {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #747474;
}
`

export default Task