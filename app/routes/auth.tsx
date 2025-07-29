export const meta = () => ([
    {title: "CVision | Authentication"},
    {name: "description", content: "Log in to your Account"},
])

import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'


const auth = () => {
    const {isLoading, auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1];
    const naviate = useNavigate();

    useEffect(()=>{
        if(auth.isAuthenticated) naviate(next);
    },[auth.isAuthenticated, next])

  return (
    <main className='bg-[url(/images/bg-auth.svg)] bg-cover min-h-screen flex items-center justify-center'>
        <div className='gradient-border shadow-lg'>
            <section className='flex flex-col gap-8 bg-white rounded-2xl p-10 justify-center items-center'>
                <div className='flex flex-col items-center gap-2 text-center'>
                    <h1>Namaste Doston. <span className='text-7xl'>🙏🏼</span></h1>
                    <h2>Your dream job is just a click away - login karke badlo apna kal!</h2>
                </div>
                <div>
                    {isLoading ? (
                        <button className='auth-button animate-pulse'>
                            <p>Signing you in...</p>
                        </button>
                    ) : (
                        <>
                        {auth.isAuthenticated ? (
                            <button className='auth-button' onClick={auth.signOut}>
                                <p>Log Out</p>
                            </button>
                        ): (
                            <button className='auth-button' onClick={auth.signIn}>
                                <p>Log In</p>
                            </button>
                        )}
                        </>
                    )}
                </div>
            </section>
        </div>
    </main>
  )
}

export default auth
