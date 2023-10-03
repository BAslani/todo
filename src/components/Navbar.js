import React from 'react'
import styled from 'styled-components'
import { BsPersonCircle } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="user">
        <BsPersonCircle />
        <h4>username</h4>
      </div>
      <button className="toggle-btn">
        <FaBars />
      </button>
    </Wrapper>
  )
}


const Wrapper = styled.nav`

`

export default Navbar