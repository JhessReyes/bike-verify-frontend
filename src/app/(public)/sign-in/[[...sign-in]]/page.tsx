import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className="container relative h-screen grid items-center justify-center justify-items-center lg:max-w-none lg:px-0">
      <SignIn routing="hash" />
    </div>
  )
}

export default Page