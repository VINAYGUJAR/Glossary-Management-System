import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden'>
        {/* Background decorative elements */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none'></div>
        
        {/* Main Content */}
        <div className='relative z-10'>
            {/* Top Section with About and Contact */}
            <div className='container mx-auto px-6 py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    
                    {/* About Us Section */}
                    <div className='group'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full'></div>
                            <h3 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                                About Us
                            </h3>
                        </div>
                        <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10'>
                            <p className='text-gray-300 leading-relaxed text-lg'>
                                We are passionate about creating innovative solutions that make a difference. 
                                Our team is dedicated to delivering exceptional quality and service to our clients, 
                                pushing the boundaries of what's possible in the digital world.
                            </p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className='group'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-1 h-8 bg-gradient-to-b from-green-400 to-blue-500 rounded-full'></div>
                            <h3 className='text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'>
                                Contact Us
                            </h3>
                        </div>
                        <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10'>
                            <div className='space-y-4'>
                                <div className='flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300'>
                                    <div className='w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg'>
                                        <FaMapMarkerAlt className='text-white text-lg' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400 font-medium'>Address</p>
                                        <p className='text-gray-200'>Akola Maharashtra </p>
                                        <p className='text-gray-200'>City, Akot 444101</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300'>
                                    <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg'>
                                        <FaPhone className='text-white text-lg' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400 font-medium'>Phone</p>
                                        <p className='text-gray-200 font-semibold'>+91 8767535446</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300'>
                                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg'>
                                        <FaEnvelope className='text-white text-lg' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400 font-medium'>Email</p>
                                        <p className='text-gray-200 font-semibold'>abcd123@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className='container mx-auto px-6'>
                <div className='h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
            </div>

            {/* Your original footer logic enhanced */}
            <div className='container mx-auto p-6 flex flex-col lg:flex-row lg:justify-between items-center gap-6'>
                <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse'></div>
                    <p className='text-gray-300 font-medium'>© All Rights Reserved 2024.</p>
                </div>
                
                <div className='flex items-center gap-6'>
                    <p className='text-gray-400 text-sm hidden md:block'>Follow us on social media</p>
                    <div className='flex items-center gap-4 text-2xl'>
                        <a href='' className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group'>
                            <FaFacebook className='text-gray-300 group-hover:text-white transition-colors duration-300'/>
                        </a>
                        <a href='' className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group'>
                            <FaInstagram className='text-gray-300 group-hover:text-white transition-colors duration-300'/>
                        </a>
                        <a href='https://www.linkedin.com/in/vinay-gujar-b82a152b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group'>
                            <FaLinkedin className='text-gray-300 group-hover:text-white transition-colors duration-300'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   
  )
}

export default Footer