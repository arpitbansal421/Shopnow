import React from 'react'
import { githubLogo,googleLogo } from '../assests'

import {GoogleAuthProvider, getAuth, signInWithPopup,
    signOut
    
} from 'firebase/auth'
import { ToastContainer,toast } from 'react-toastify'
import { addUser, removeUser } from '../../redux/Shopnowslice'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  const auth=getAuth()
  const provider=new GoogleAuthProvider()
  const handleGoogleLogin=(e)=>{
    signInWithPopup(auth,provider).then((result)=>{
      const user=result.user;
      dispatch(addUser({
        id:user.uid,
        name:user.displayName,
        email:user.email,
        image:user.photoURL
      }))
      setTimeout(()=>{
        navigate("/")
      },1500)



    }).catch((error)=>{
      console.log(error)

    })


    
      
      e.preventDefault()
      

    }

  const handleSignOut=()=>{

    signOut(auth).then(()=>{
      //sign-out succesful

      toast.success("Log Out Successfully!")
      dispatch(removeUser())

    }).catch((error)=>{
      console.log(error)
    })

  }
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex  items-center justify-center gap-10'>
        <div  onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>

        <img className='w-8' src={googleLogo} alt="googleLogo" /> 
        <span   className='text-sm text-gray-900'>Sign in with google</span>
        </div>
        <button  onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign out</button>
      </div>

      <div className='w-full flex  items-center justify-center gap-10'>
        <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>

        <img className='w-8' src={githubLogo} alt="githublogo" /> 
        <span className='text-sm text-gray-900'>Sign in with github</span>
        </div>
        <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign out</button>
      </div>
    </div>

    <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />



    </>
  
  )
}

export default Login
