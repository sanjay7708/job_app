import React from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await api.post('auth/logout/')
            alert(res.data['message'])
            navigate('/')
            
        }catch(err){
            console.error(err)
        }
    }
  return (
    <div>Home
        <form action="" method='post' onSubmit={handleSubmit}>
            <button type='submit'>Logout</button>
        </form>
    </div>
    
  )
}
