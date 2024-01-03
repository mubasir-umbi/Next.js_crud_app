"use client"

import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const homePage = () => {
  const router = useRouter()

  const logout = () => {
    try {
      const response = axios.get('/api/users/logout')
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className='mt-8 text-center text-500 font-bold text-4xl'>HOME PAGE</h1>
      <div className='flex justify-center mt-4'>
      <button onClick={() => logout()} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mr-1"> Logout </button>
      <Link href={'/profile'} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded ml-1"> Profile </Link>
      </div>
    </div>
  )
}

export default homePage
