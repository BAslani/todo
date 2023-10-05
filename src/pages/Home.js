import React from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task'
import styled from 'styled-components'
import { useGlobal } from '../context/context'
import { BsFillPlusCircleFill, BsSortDownAlt } from 'react-icons/bs'

const Home = () => {
  const { tasks } = useGlobal()
  return (
    <Wrapper>
      <Navbar />
      <section className='tasks-container'>
        {
          tasks.map((task) => {
            return <Task key={task.id} {...task} />
          })
        }
      </section>
      <section className="footer">
        <button className="add-btn" type='button'>
          <BsFillPlusCircleFill />
        </button>
        <button type="button" className="sort-btn">
          <BsSortDownAlt />
        </button>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
height: 100vh;
display: grid;
grid-template-rows: auto 1fr auto;

.tasks-container {
  background: #eee;
  overflow-x: scroll;
}
.footer {
  height: 9rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  display: flex;
  justify-content: space-around;
}
.add-btn {
  background: transparent;
  border: none;
  font-size: 5rem;
  color: #3E9FBD;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.sort-btn {
  background: transparent;
  border: none;
  font-size: 5rem;
  color: #747474;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
`

export default Home