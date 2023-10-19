import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const Stats = ({ tasks }) => {
    const [eventTasks, setEventTasks] = useState({
        done: 0,
        failed: 0
    })
    const [workTasks, setworkTasks] = useState({
        done: 0,
        failed: 0
    })
    const [educationTasks, seteducationTasks] = useState({
        done: 0,
        failed: 0
    })
    const [choreTasks, setchoreTasks] = useState({
        done: 0,
        failed: 0
    })

    const fetchStats = useCallback(async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/calculateStats", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'message': 'get stats',
                    'tasks': tasks
                })
            })
            const data = await response.json();
            if (response.status === 200) {
                setEventTasks({
                    done: data.eventsDone,
                    failed: data.eventsFailed
                })
                setworkTasks({
                    done: data.worksDone,
                    failed: data.worksFailed

                })
                seteducationTasks({
                    done: data.educationsDone,
                    failed: data.educationsFailed
                })
                setchoreTasks({
                    done: data.choresDone,
                    failed: data.choresFailed
                })
            }
        } catch (error) {
            console.log(error);
        }
    },[tasks])

    useEffect(() => {
        fetchStats()
    }, [tasks,fetchStats])

    return (
        <Wrapper>
            <h4 className='title'>Your journey</h4>
            <div className="stats-container">
                <div className="stat-container">
                    <h4>Events</h4>
                    <h5 className='success'>completed : <span>{eventTasks.done}</span></h5>
                    <h5 className='fail'>Failed : <span>{eventTasks.failed}</span></h5>
                </div>
                <div className="stat-container">
                    <h4>Works</h4>
                    <h5 className='success'>completed : <span>{workTasks.done}</span></h5>
                    <h5 className='fail'>Failed : <span>{workTasks.failed}</span></h5>
                </div>
                <div className="stat-container">
                    <h4>Educations</h4>
                    <h5 className='success'>completed : <span>{educationTasks.done}</span></h5>
                    <h5 className='fail'>Failed : <span>{educationTasks.failed}</span></h5>
                </div>
                <div className="stat-container">
                    <h4>Chores</h4>
                    <h5 className='success'>completed : <span>{choreTasks.done}</span></h5>
                    <h5 className='fail'>Failed : <span>{choreTasks.failed}</span></h5>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
margin-top: 1rem;

.stat-container {
    width: 80%;
    margin: 1rem auto;
    background: #fff;
    border-radius: 1rem;
    height: 3rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr 1fr;

    h4 {
      margin: auto 0;
      margin-left: 1.5rem;
      font-size: 1.25rem;
      font-weight: 700;
    }
}
.success {
    color: #4caf50
}
.fail {
    color: #bb2525
}
`

export default Stats