import React from 'react'
import styled from 'styled-components'

const Stats = () => {
    return (
        <Wrapper>
            <h4 className='title'>Your journey</h4>
            <div className="stats-container">
                <div className="stat-container">
                    <h4>Events</h4>
                    <h5 className='success'>completed : <span>5</span></h5>
                    <h5 className='fail'>Failed : <span>5</span></h5>
                </div>
                <div className="stat-container">
                    <h4>Works</h4>
                    <h5 className='success'>completed : <span>5</span></h5>
                    <h5 className='fail'>Failed : <span>5</span></h5>
                </div>
                <div className="stat-container">
                    <h4>Educations</h4>
                    <h5 className='success'>completed : <span>5</span></h5>
                    <h5 className='fail'>Failed : <span>5</span></h5>
                </div>
                <div className="stat-container">
                    <h4>Chores</h4>
                    <h5 className='success'>completed : <span>5</span></h5>
                    <h5 className='fail'>Failed : <span>5</span></h5>
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