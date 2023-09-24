import React from 'react'
import './auth.css'
import { FadeLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='flex items-stretch md:items-center'>
      <FadeLoader color="#36d7b7" />
      <h1>Loading...</h1>
    </div>
  )
}

export default Loader