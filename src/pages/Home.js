import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task'
import styled from 'styled-components'
import { useGlobal } from '../context/context'
import { BsFillPlusCircleFill, BsSortDownAlt } from 'react-icons/bs'
import Modal from '../components/Modal'
import Stats from '../components/Stats'
import Filters from '../components/Filters'

const Home = () => {
  const { filteredTasks, isModalOpen, setIsModalOpen, setIsSidebarOpen } = useGlobal()
  filteredTasks.sort((a,b) => (a.date > b.date) ? 1 : -1)
  let newDate = new Date()
  let today = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  let tomorrow = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate() + 1}`

  const [pastTasks, setPastTasks] = useState(false)
  const prevTasks = filteredTasks.filter((task) => task.date < today)
  return (
    <Wrapper>
      {isModalOpen && <Modal />}
      <Navbar />
      <div className="main">
        <section className='tasks-container'>
          <div className="filters">
            <Filters />
          </div>
          <button className="btn togglePast" onClick={() => setPastTasks(!pastTasks)}>{
            pastTasks ? 'Hide previous tasks' :
            'Show previous tasks'
          }</button>
          {pastTasks &&
            prevTasks.map((task) => {
              return <Task key={task.idx} {...task} />
            })
          }
          <h4 className='day'>today</h4>
          {
            filteredTasks.map((task) => {
              if (task.date === today) {
                return <Task key={task.idx} {...task} />
              }
              return
            })
          }
          <h4 className='day'>tomorrow</h4>
          {
            filteredTasks.map((task) => {
              if (task.date === tomorrow) {
                return <Task key={task.idx} {...task} />
              }
              return
            })
          }
          <h4 className='day'>next</h4>
          {
            filteredTasks.map((task) => {
              if (task.date > tomorrow) {
                return <Task key={task.idx} {...task} />
              }
              return
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
.day {
  margin-top: 2rem;
  margin-left: 2rem;
}
.togglePast {
  display: block;
  margin-left: 2.5rem;
  margin-top: 1.5rem;
  background: #fff;
  color: #222;
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
  .filters button {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    border-color: transparent;
  }
  .filters button:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-7);
  }

  .main {
   display: grid;
   grid-template-columns: 1fr 1fr;
  }
  .tasks-container {
    overflow-x: scroll;
  }
  .togglePast {
    margin-left: 5rem;
  }
  .day {
    margin-left: 4rem;
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
        margin-right: 1rem;
      }
    }
  }
}

`

export default Home