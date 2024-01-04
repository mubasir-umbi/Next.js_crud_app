"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProfilePage = () => {

    type User = {
        email: string;
        isAdmin: boolean;
        isVerified: boolean;
        name:string;
      };
      

    const [userData, setUserData ] = useState<User>()

    const getUserDetails = async () => {
        try {
            const res = await axios.get('api/users/me')
            setUserData(res.data)
        } catch (error: any) {
            console.log(error);
        }
    } 

    useEffect(() => {
        getUserDetails()
    },[])


    return (
        <div>
            <h1 className='mt-8 text-center text-500 font-bold text-4xl'>PROFILE PAGE</h1>
            <h1 className='text-center mt-10'> Welcome {userData?.name} </h1>
            <h1 className='text-center mt-1'> {userData?.email} </h1>
        </div>
    )
}

export default ProfilePage
