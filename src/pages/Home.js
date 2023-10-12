import React from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task'
import styled from 'styled-components'
import { useGlobal } from '../context/context'
import { BsFillPlusCircleFill, BsSortDownAlt } from 'react-icons/bs'
import Modal from '../components/Modal'
import Stats from '../components/Stats'

const Home = () => {
  const { tasks, isModalOpen, setIsModalOpen, setIsSidebarOpen } = useGlobal()
  return (
    <Wrapper>
      {isModalOpen && <Modal />}
      <Navbar />
      <div className="main">
        <section className='tasks-container'>
          <div className="filters">
            <ul>
              <li>
                <button type="button" className="btn sidebar-btn">Events</button>
              </li>
              <li>
                <button type="button" className="btn sidebar-btn">Work</button>
              </li>
              <li>
                <button type="button" className="btn sidebar-btn">Educations</button>
              </li>
              <li>
                <button type="button" className="btn sidebar-btn">Chores</button>
              </li>
            </ul>
          </div>
          {
            tasks.map((task) => {
              return <Task key={task.idx} {...task} />
            })
          }
        </section>
        <div className="stats">
          <Stats />
        </div>
      </div>
      <section className="footer">
        <button className="add-btn" type='button' onClick={() => setIsModalOpen(true)}>
          <BsFillPlusCircleFill />
        </button>
        <button type="button" className="sort-btn" onClick={() => setIsSidebarOpen(true)}>
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

.main {
  background: #eee;
  overflow-x: scroll;
}
.filters {
  display: none;
}
.stats {
  display: none;
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
  cursor: pointer;
}
.sort-btn {
  background: transparent;
  border: none;
  font-size: 5rem;
  color: #747474;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
}

@media (min-width: 992px) {

  .main {
   display: grid;
   grid-template-columns: 1fr 1fr;
  }
  .tasks-container {
    overflow-x: scroll;
  }
  .stats {
    display: block;
  }
  .footer {
    height: 7rem;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    display: flex;
    justify-content: space-around;
  }
  .add-btn {
    background: transparent;
    border: none;
    font-size: 4rem;
    color: #3E9FBD;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
  .sort-btn {
    display: none;
  }
  .filters {
    display: block;
    margin-top: 1rem;
    ul {
      display: flex;
      justify-content: center;
      li {
        margin-right: 1.5rem;
      }
    }
  }
}

`

export default Home