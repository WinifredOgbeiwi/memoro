import React from 'react'
import ThemeToggleButton from './components/ThemeToggleButton'
import { redirect } from 'next/navigation'

const page = () => {
     redirect('/dashboard') //temporarily redirecting to dashbaord page till landing page is ready
  return (
    <div className=' flex flex-col items-center justify-center min-h-screen '>
  
      <h1 className="text-2xl font-bold">Welcome to LearnTeca</h1>
      <p className="mt-4">Your AI-powered learning companion.</p>
          <ThemeToggleButton />
    </div>
  )
}

export default page