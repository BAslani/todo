import React from 'react'
import styled from 'styled-components'
import { BsPersonCircle } from 'react-icons/bs'
import { TbLogout } from 'react-icons/tb'
import { useGlobal } from '../context/context'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const {user, setUser} = useGlobal()
  return (
    <Wrapper>
      <div className="user">
        <BsPersonCircle className='avatar' />
        <h5>{user.username}</h5>
      </div>
      <button
      className="logout-btn"
      onClick={() => {
        setUser({
          id: null,
          username: '',
          tasks: []
        });
        localStorage.clear()
        navigate('/login')
      }}
      >
        <TbLogout />
      </button>
    </Wrapper>
  )
}


const Wrapper = styled.nav`
display: flex;
justify-content: space-between;
background: var(--clr-primary-5);
padding: 2rem;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

.avatar {
  font-size: 3rem;
}
.logout-btn {
  font-size: 3rem;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}
.user h5 {
  color: #fff;
}

@media screen and (min-width: 992px) {
  padding: 1rem 5rem;
}
`

export default Navbar