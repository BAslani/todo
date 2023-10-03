import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Task from '../components/Task'
import styled from 'styled-components'
import { useGlobal } from '../context/context'
import { BsFillPlusCircleFill, BsSortDownAlt, BsCalendar3 } from 'react-icons/bs'

const Home = () => {
  const { tasks } = useGlobal()
  return (
    <Wrapper>
      <Navbar />
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
    </Wrapper>
  )
}

const Wrapper = styled.main`

`

export default Home