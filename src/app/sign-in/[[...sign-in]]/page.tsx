import { SignIn, UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
    /* const { isSignedIn, user, isLoaded } = useUser();
    if(!isLoaded){
        return null
    }

    if(isSignedIn) {
        console.log('USER',user);
    } */
  return (
    <div className="container relative h-screen grid items-center justify-center justify-items-center lg:max-w-none lg:px-0">
        <SignIn signInFallbackRedirectUrl={'/dashboard'} />
        <UserButton />
    </div>
  )
}

export default Page