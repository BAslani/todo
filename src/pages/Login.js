import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobal } from '../context/context'


const Login = () => {
  const navigate = useNavigate()
  const { user, setUser } = useGlobal()
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (response.status === 200) {
        setUser({
          ...user,
          id: data.id,
          username: data.username
        })
        navigate('/')
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  }
  return (
    <Wrapper>
      <header>
        <div className="container">
          <svg xmlns="http://www.w3.org/2000/svg" width="84" height="97" viewBox="0 0 84 97" fill="none" className='check'>
            <path d="M53.2174 0H30.6038C25.5999 0 21.5103 4.04155 21.5103 9.04538V13.5681C21.5103 18.5719 25.5518 22.6135 30.5556 22.6135H53.2174C58.2212 22.6135 62.2627 18.5719 62.2627 13.5681V9.04538C62.3109 4.04155 58.2212 0 53.2174 0Z" fill="white" />
            <path d="M67.1189 13.5656C67.1189 21.2157 60.8641 27.4705 53.214 27.4705H30.6003C22.9503 27.4705 16.6955 21.2157 16.6955 13.5656C16.6955 10.8713 13.8086 9.18727 11.403 10.4382C4.61892 14.0468 0 21.2157 0 29.4432V74.7182C0 86.5542 9.67086 96.2251 21.5068 96.2251H62.3075C74.1435 96.2251 83.8143 86.5542 83.8143 74.7182V29.4432C83.8143 21.2157 79.1954 14.0468 72.4114 10.4382C70.0057 9.18727 67.1189 10.8713 67.1189 13.5656ZM57.9772 51.6236L38.7318 70.8691C38.01 71.5908 37.0959 71.9276 36.1817 71.9276C35.2676 71.9276 34.3534 71.5908 33.6317 70.8691L26.4144 63.6521C25.0191 62.2568 25.0191 59.9473 26.4144 58.552C27.8097 57.1567 30.1192 57.1567 31.5145 58.552L36.1817 63.2191L52.8772 46.5236C54.2725 45.1283 56.582 45.1283 57.9772 46.5236C59.3725 47.9189 59.3725 50.2283 57.9772 51.6236Z" fill="white" />
          </svg>
        </div>
        <h4 className='title'>Let's get started!</h4>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder='Username'
            className="form-control"
            name='username'
            value={loginData.username}
            onChange={(e) => {
              setLoginData({ ...loginData, username: e.target.value })
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='password'
            className="form-control"
            name='password'
            value={loginData.password}
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value })
            }}
          />
        </div>
        <button
          className="btn"
          type='submit'
          disabled={!loginData.username || !loginData.password}
        >Login</button>
      </form>
      <div className='redirect'>
        <h5>If you don't have an account</h5>
        <Link to='/register'>
          <h4>sign up</h4>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
.container {
  background: #3e9fbd;
  width: 10rem;
  margin: 5rem auto;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  text-align: center;
}
.check {
  font-size: 7rem;
  margin: 1.5rem auto;
  color: #fff;
}
form {
  text-align: center;
  margin-top: 3rem;
}
.form-control {
  width: 16rem;
  background: #F0F0F0;
  padding: 0.75rem;
  border: 1px solid #747474;
  border-radius: 0.75rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.btn {
  border-radius: 0.75rem;
  padding: 0.75rem 2rem;
}
.redirect {
  margin-top: 3rem;
  text-align: center;
}
.btn:disabled {
  background: grey;
  cursor: default;
  color: #fff;;
}
`

export default Login