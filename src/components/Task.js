import React from 'react'
import styled from 'styled-components'
import { BiCheckbox, BiCheckSquare } from 'react-icons/bi'
import { GoTrash } from 'react-icons/go'
import { useGlobal } from '../context/context'

const Task = ({ id, desc, type, idx, state }) => {
  const { handleTaskState, handleDelete } = useGlobal()
  return (
    <Wrapper>
      <span className={`dot ${type}`}></span>
      <h5>
        {desc}
      </h5>
      <div className="btn-container">
        <button
          type="button"
          className='task-btn delete-btn'
          onClick={() => handleDelete(id, idx)}
        >
          <GoTrash />
        </button>
        <button
          type="button"
          className={`task-btn check-btn`}
          onClick={() => {
            handleTaskState(id, idx, state)
          }}
        >
          {state === 'done' ? <BiCheckSquare className='checked' /> : <BiCheckbox />}
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
width: 80%;
margin: 1rem auto;
padding: 0.5rem 0;
background: #fff;
border-radius: 1rem;
min-height: 3rem;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
display: grid;
grid-template-columns: auto 1fr auto;

h5 {
  margin: auto 0;
  font-size: 1rem;
  font-weight: 500;
}
.dot {
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  display: inline-block;
  margin: auto;
  margin-left: 0.75rem;
  margin-right: 0.75rem
}
.event {
  background: #ff3d00;
}
.work {
  background: #707070;
}
.education {
  background: #124c85;
}
.chores {
  background: #4caf50;
}
.btn-container {
  display: flex;
}
.task-btn {
  cursor: pointer;
}
.delete-btn {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  margin-right: 0.25rem;
  color: #bb2525;
}
.check-btn {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #747474;
}
.checked {
  color: #4caf50;
}
`

export default Task