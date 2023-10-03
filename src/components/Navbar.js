import React from 'react'
import styled from 'styled-components'
import { BsPersonCircle } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="user">
        <BsPersonCircle className='avatar'/>
        <h5>username</h5>
      </div>
      <button className="toggle-btn">
        <FaBars />
      </button>
    </Wrapper>
  )
}


const Wrapper = styled.nav`
display: flex;
justify-content: space-between;
background: #3e9fbd;
padding: 2rem;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

.avatar {
  font-size: 3rem;
}
.toggle-btn {
  font-size: 3rem;
  background: transparent;
  border: none;
  color: #fff;
}
.user h5 {
  color: #fff;
}
`

export default Navbar