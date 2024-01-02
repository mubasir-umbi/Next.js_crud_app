"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios, { AxiosError } from 'axios'


export default function signupPage() {
    const router = useRouter()
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    })

    const setRegData = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
       setUserData((prev) => ({
        ...prev,
        [name]: value
       }))
    }

    const onRegister = async () => {      
        console.log('k'); 
        try {
          const response = await axios.post('/api/users/signup', userData)
          console.log(response)
          router.push('/login')
        } catch (error) {
          console.error('Error',error);
          
        }
    }


    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
            //   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create new account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={userData.email}
                    onChange={(e) => setRegData(e)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    value={userData.name}
                    onChange={(e) => setRegData(e)}
                    id="userName"
                    name="name"
                    type="userName"
                    autoComplete="userName"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={userData.password}
                    onChange={(e)=> setRegData(e)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900 mt-2">
                    Confirm Password
                  </label>
                <div className="mt-2">
                  <input
                    value={userData.confirmPassword}
                    onChange={(e) => setRegData(e)}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="confirmPassword"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  onClick={() => onRegister()}
                  type="button"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Alredy have an account?{' '}
              <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }


