import React, { useState } from 'react'
import api from '../../api'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({
        username:'',
        email:'',
        password:'',
        confirm_password:''
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
            const res=await api.post('auth/signup/',user)
            alert(res.data.message)
            navigate('/')
        }
        catch(err){
            console.error(err)
        }
    }
  return (
    <>
        <div>
            <div>
                <form action="" method='post' onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder='username' name='username' value={user.username} onChange={handleChange}/>
                    </div>
                    <div>
                        <input type="text" placeholder='eamil' name='email' value={user.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <input type="password" placeholder='password' name='password' value={user.password} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" placeholder='confirm_password' name='confirm_password' value={user.confirm_password} onChange={handleChange} />
                    </div>
                    <div>
                        <button type='submit'>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
