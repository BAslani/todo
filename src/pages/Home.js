import React from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task'
import styled from 'styled-components'
import { useGlobal } from '../context/context'
import { BsFillPlusCircleFill, BsSortDownAlt, BsCalendar3 } from 'react-icons/bs'

const Home = () => {
  const { tasks } = useGlobal()
  return (
    <Wrapper>
      <Navbar />
      <main className='tasks-container'>
        {
          tasks.map((task) => {
            return <Task key={task.id} {...task} />
          })
        }
        <div className="btn-container">
          <button className="add-btn" type='button'>
            <BsFillPlusCircleFill />
          </button>
          <button type="button" className="sort-btn">
            <BsSortDownAlt />
          </button>
        </div>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.main`

`

export default Home