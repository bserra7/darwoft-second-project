import React from 'react'
import useUser from '../hooks/useUser'

const Home = () => {
    const { logout } = useUser();
  return (
    <div>
        <h1>Home component</h1>
        <button onClick={logout}>Log out</button>
    </div>
  )
}

export default Home