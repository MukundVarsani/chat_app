
import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {Container, Navbar, Stack} from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'


export const NavBar = () => {

  const {user} = useContext(AuthContext);
console.log(`User is ${user}`);

  return (
    <Navbar bg='dark' className='mb-4' style={{height : "3.75rem"}}>
        <Container >
            <h2>
                <Link  to="/" className='link-light text-decoration-none'>
                ChattApp
                </Link>
            </h2>

            <span className='text-warning'> Logged in as {user ?? "miky"}..</span>
                <Stack direction='horizontal' gap='3'>
                <Link  to="/login" className='link-light text-decoration-none'>
                Login
                </Link> <Link  to="/register" className='link-light text-decoration-none'>
                Register
                </Link>
                </Stack>
        </Container>
    </Navbar>
  )
}
   