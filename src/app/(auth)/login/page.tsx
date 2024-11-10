import React from 'react'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    //<div className='flex items-center justify-center align-middle min-h-screen'>
    //<div className='flex items-center justify-center' style={{height: 'calc(100vh - 64px)'}}> Moved to globals.css
    <div className='flex items-center justify-center vertical-center'>
      <LoginForm />
    </div>    
  )
}
