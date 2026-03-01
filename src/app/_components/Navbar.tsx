import Link from 'next/link';
import React from 'react'
import LogoutButton from './LogoutButton';
import { getSession } from '../_lib/session';

const Navbar = async () => {
    const session = await getSession(); // this is just for testing if we have a session or not in the future we will replace this with the actual session from next auth;
  return (
    <nav className='bg-white shadow-sm'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
            <Link href="/" className='text-xl font-bold text-blue-600'>Contact Manager</Link>
            <div className='flex items-center space-x-4'>
                {/* if we have a session the session is true we have to display some jsx if not then show the other jsx */}
                {session ? (
                    <>
                        <Link href="/contanct" className='hover:text-blue-600 mr-8'>Contacts</Link>
                        <LogoutButton />
                        
                    </>
                ) : (
                    <>
                        <Link href="/login" className='     hover:text-blue-600 mr-5'>Login</Link>
                        <Link href="/register"  className='hover:text-blue-600'>Register</Link>
                    </>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar;