import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';

const Register = () => {

const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }) 

 const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate()


 const handleChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

     const valideValue = Object.values(data).every(el => el)  

      const handleSubmit = async(e)=>{
        e.preventDefault()

        if(data.password !== data.confirmPassword){
            toast.error(
                "password and confirm password must be same"
            )
            return
        }

        try {
            const response = await Axios({
                ...SummaryApi.register,
                data : data
            })
            
            if(response.data.error){
                toast.error(response.data.message)
            }

            if(response.data.success){
                toast.success(response.data.message)
                setData({
                    name : "",
                    email : "",
                    password : "",
                    confirmPassword : ""
                })
                navigate("/login")
            }

        } catch (error) {
            AxiosToastError(error)
        }
    }

  return (
   <section className='min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 flex items-center justify-center px-4 py-8 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-16 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-300"></div>
            <div className="absolute bottom-24 left-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute top-1/3 right-10 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-white/8 rounded-full blur-xl animate-pulse delay-500"></div>

            <div className='relative z-10 bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl p-8 w-full max-w-lg mx-auto transform transition-all duration-300 hover:shadow-3xl'>
                
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                        Join Glossary Manager
                    </h1>
                    <p className="text-gray-600 font-medium">Create your account to start managing terminology</p>
                </div>

                <form className='space-y-6' onSubmit={handleSubmit} >
                    <div className='space-y-2'>
                        <label htmlFor='name' className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <div className="relative">
                            <input
                                type='text'
                                id='name'
                                autoFocus
                                className='w-full px-4 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all duration-300 placeholder-gray-400 text-gray-800'
                                name='name'
                                value={data.name}
                                onChange={handleChange}
                                placeholder='Enter your full name'
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='email' className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                            <input
                                type='email'
                                id='email'
                                className='w-full px-4 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all duration-300 placeholder-gray-400 text-gray-800'
                                name='email'
                                value={data.email}
                                onChange={handleChange}
                                placeholder='Enter your email address'
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='password' className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <div className='relative bg-gray-50/50 border-2 border-gray-200 rounded-xl focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-100 transition-all duration-300 overflow-hidden'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id='password'
                                className='w-full px-4 py-3 bg-transparent outline-none placeholder-gray-400 text-gray-800 pr-12'
                                name='password'
                                value={data.password}
                                onChange={handleChange}
                                placeholder='Create a strong password'
                            />
                            <div 
                            onClick={() => setShowPassword(preve => !preve)} 
                            className='absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer text-gray-400 hover:text-emerald-500 transition-colors duration-200'>
                                {showPassword ? <FaRegEye className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
                            </div>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='confirmPassword' className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                        <div className='relative bg-gray-50/50 border-2 border-gray-200 rounded-xl focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-100 transition-all duration-300 overflow-hidden'>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id='confirmPassword'
                                className='w-full px-4 py-3 bg-transparent outline-none placeholder-gray-400 text-gray-800 pr-12'
                                name='confirmPassword'
                                value={data.confirmPassword}
                                onChange={handleChange}
                                placeholder='Confirm your password'
                            />
                            <div onClick={() => setShowConfirmPassword(preve => !preve)} className='absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer text-gray-400 hover:text-emerald-500 transition-colors duration-200'>
                                {showConfirmPassword ? <FaRegEye className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
                            </div>
                        </div>
                    </div>

                    <button 
                        disabled={!valideValue} 
                        className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98] ${
                            valideValue 
                                ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-emerald-200" 
                                : "bg-gray-300 cursor-not-allowed"
                        }`}
                    >
                        {valideValue ? (
                            <span className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                                </svg>
                                Create Account
                            </span>
                        ) : (
                            "Please fill all fields"
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to={"/login"} className='font-semibold text-emerald-600 hover:text-emerald-800 transition-colors duration-200 hover:underline'>
                            Sign In
                        </Link>
                    </p>
                </div>

                {/* Additional Features for Registration */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                            </svg>
                            Free Account
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                            </svg>
                            Unlimited Terms
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                            </svg>
                            Cloud Sync
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                            </svg>
                            Export Options
                        </div>
                    </div>
                </div>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10.5V11.5H13.5V10.5C13.5,8.7 12.8,8.2 12,8.2Z"/>
                        </svg>
                        <div>
                            <p className="text-sm font-medium text-emerald-800">Secure Registration</p>
                            <p className="text-xs text-emerald-600 mt-1">Your data is encrypted and protected with industry-standard security measures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Register