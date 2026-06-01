import React, { useState } from 'react'
import api from '../../api'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate=useNavigate()
  const [user,setUser]=useState({
    username:'',
    'password':''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setUser((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const res=await api.post('auth/login/',user)
      alert(res.data.message)
      navigate('/home')
    }
    catch(err){
      console.error(err)
    }
  }
  return (
    <>
    
      <div className='h-full'>
        <h1 className='text-green-500 '>Login</h1>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <input className='border rounded-sm' type="text"  name='username' value={user.username} onChange={handleChange}/>
            </div>
            <div className='py-5'>
              <input className='border rounded-sm' type="password" name='password' value={user.password} onChange={handleChange}  />
            </div>
            <div>
              <button type='submit' className='border rounded-sm'>Login</button>
            </div>
          </form>
        </div>
        <Link to={"/signup"}>New User?</Link>
      </div>
    </>
  )
}
