import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';
import fetchUserDetails from '../utils/fetchUserDetails';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/UserSlice';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

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

        try {
            const response = await Axios({
                ...SummaryApi.login,
                data : data
            })
            
            if(response.data.error){
                toast.error(response.data.message)
            }

            if(response.data.success){
                toast.success(response.data.message)
                localStorage.setItem('accesstoken',response.data.data.accesstoken)
                localStorage.setItem('refreshToken',response.data.data.refreshToken)

                const userDetails = await fetchUserDetails()
                dispatch(setUserDetails(userDetails.data))

                setData({
                    email : "",
                    password : "",
                })
                navigate("/")
            }

        } catch (error) {
            AxiosToastError(error)
        }
    }

    return (
        <section className='min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 py-8 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-32 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce delay-500"></div>

            <div className='relative z-10 bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl p-8 w-full max-w-md mx-auto transform transition-all duration-300 hover:shadow-3xl'>
                
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5Z"/>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Glossary Manager
                    </h1>
                    <p className="text-gray-600 font-medium">Sign in to manage your terminology database</p>
                </div>

                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='space-y-2'>
                        <label htmlFor='email' className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                            <input
                                type='email'
                                id='email'
                                className='w-full px-4 py-3 bg-gray-50/50 border-2 border-gray-200 rounded-xl outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-300 placeholder-gray-400 text-gray-800'
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
                        <div className='relative bg-gray-50/50 border-2 border-gray-200 rounded-xl focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-300 overflow-hidden'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id='password'
                                className='w-full px-4 py-3 bg-transparent outline-none placeholder-gray-400 text-gray-800 pr-12'
                                name='password'
                                value={data.password}
                                onChange={handleChange}
                                placeholder='Enter your password'
                            />
                            <div onClick={() => setShowPassword(preve => !preve)} className='absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer text-gray-400 hover:text-indigo-500 transition-colors duration-200'>
                                {showPassword ? <FaRegEye className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
                            </div>
                        </div>
                        <div className="text-right">
                            <Link to={"/forgot-password"} className='text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200 hover:underline'>
                                Forgot password?
                            </Link>
                        </div>
                    </div>
    
                    <button 
                        disabled={!valideValue} 
                        className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98] ${
                            valideValue 
                                ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-indigo-200" 
                                : "bg-gray-300 cursor-not-allowed"
                        }`}
                    >
                        {valideValue ? (
                            <span className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
                                </svg>
                                Sign In to Glossary
                            </span>
                        ) : (
                            "Please fill all fields"
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link to={"/register"} className='font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200 hover:underline'>
                            Create Account
                        </Link>
                    </p>
                </div>

                {/* Additional Features for Glossary System */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10.5V11.5H13.5V10.5C13.5,8.7 12.8,8.2 12,8.2Z"/>
                            </svg>
                            Secure Access
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                            </svg>
                            24/7 Support
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"/>
                            </svg>
                            Term Management
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login