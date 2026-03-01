//this is a client component because it will handle user interactions and state related to logging in, which cannot be done on the server side.
"use client";
import { loginAction } from '@/app/actions/auth';
import React from 'react'

const LoginForm = () => {
  return (
    <form action= {loginAction} className='space-x-4'>
        <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
            <input type="email" name="email" placeholder='Enter your email'required className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'/>
        </div>
        <div className='mt-3'>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
            <input type="password" name="password" placeholder='Enter your password'required className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'/>
        </div>
        <button type="submit" className='mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer'>Login</button>
    </form>
  )
}

export default LoginForm;