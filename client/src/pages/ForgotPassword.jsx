import React, { useState } from 'react'

// Mock components for demonstration
const Link = ({ to, children, className }) => (
    <a href={to} className={className}>{children}</a>
);

// Mock functions for demonstration
const toast = {
    error: (msg) => console.log('Error:', msg),
    success: (msg) => console.log('Success:', msg)
};

const Axios = async (config) => {
    // Mock API response
    return { data: { success: true, message: 'OTP sent successfully!' } };
};

const SummaryApi = {
    forgot_password: { url: '/api/forgot-password', method: 'POST' }
};

const AxiosToastError = (error) => console.log('Axios Error:', error);

const useNavigate = () => (path, options) => console.log('Navigating to:', path, options);

const ForgotPassword = () => {
    const [data, setData] = useState({
        email: "",
    })
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

    const handleSubmit = async(e)=> {
        e.preventDefault()

        try {
            const response = await Axios({
                ...SummaryApi.forgot_password,
                data : data
            })

            if(response.data.error){
                toast.error(response.data.message)
            }

            if(response.data.success){
                toast.success(response.data.message)
                navigate("/verification-otp",{
                  state : data
                })
                setData({
                    email : "",
                })
            }

        } catch (error) {
            AxiosToastError(error)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm border border-gray-100">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m0 0a2 2 0 012 2m-2-2a2 2 0 00-2 2m0 0a2 2 0 002 2M9 7a2 2 0 012 2m0 0a2 2 0 012 2m-2-2a2 2 0 00-2 2m0 0a2 2 0 002 2" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password</h1>
                        <p className="text-gray-600">Enter your email address and we'll send you an OTP to reset your password</p>
                    </div>

                    {/* Form Container */}
                    <div onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        value={data.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={!valideValue}
                                className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                                    valideValue 
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                                        : 'bg-gray-300 cursor-not-allowed'
                                }`}
                            >
                                {valideValue ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send OTP
                                    </span>
                                ) : (
                                    'Send OTP'
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">or</span>
                            </div>
                        </div>
                        
                        <p className="mt-4 text-sm text-gray-600">
                            Remember your password?{' '}
                            <Link 
                                to="/login" 
                                className="font-semibold text-blue-600 hover:text-blue-500 transition-colors duration-200"
                            >
                                Back to Login
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Additional Security Note */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500 max-w-sm mx-auto">
                        🔒 We'll never share your email with anyone else. Check your spam folder if you don't receive the OTP within a few minutes.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword