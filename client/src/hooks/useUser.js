import React from 'react'
import { useSelector } from 'react-redux'

const useUser = () => {
    const reduxUser = useSelector(state => state.userLogged);

  return {
    isLogged: Boolean(reduxUser)
  }
}

export default useUser