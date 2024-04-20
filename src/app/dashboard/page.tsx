"use client";
import { UserButton, useUser } from '@clerk/nextjs';
import React from 'react'

const Page = () => {
    const { isSignedIn, user, isLoaded } = useUser();
    if(!isLoaded){
        return null
    }

    if(isSignedIn) {
        console.log('USER',user);
    }
    return (
        <div>
            Hola Mundo
            <UserButton  />
        </div>
    );
}

export default Page