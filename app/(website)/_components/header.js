import React from 'react'
import Logo from './logo'
import Box from './box'
import { auth, signIn, signOut } from '@/auth'
import { FiLogOut, FiUser } from "react-icons/fi"
import Link from 'next/link'

const Header = async () => {
    const session = await auth()
    const user = session?.user
  return (
    <header className='py-4'>
        <Box>
        <nav className='flex justify-between items-center border-b py-4'>
            <Logo />
            {user ? 
            <div className='flex space-x-2 items-center'>
                <Link href={'/dashboard'}>
                    Dashboard
                </Link>
                <LogoutButton />
            </div>   
            :
            <>
            <SignInButton />
            </> 
        }
        </nav>
        </Box>
    </header>
  )
}

function SignInButton(){
    return (
        <form
        action={async () => {
            'use server'
            await signIn()
        }}
        >
            <button
            type='submit'>
                <FiUser className='h-4 w-4' />
            </button>
        </form>
    )
  }
  
  function LogoutButton(){
    return(
        <form
        action={async () => {
            'use server'
            await signOut()
        }}
        >
            <button
            type='submit'
            >
                <FiLogOut className='h-4 w-4' />
            </button>
        </form>
    )
  }


export default Header