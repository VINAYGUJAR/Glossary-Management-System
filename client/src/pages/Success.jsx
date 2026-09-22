import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Success = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const sessionId = new URLSearchParams(location.search).get('session_id')
  const successText = location?.state?.text || 'Payment'

  useEffect(() => {
    const hasValidRedirect = Boolean(sessionId)
    const hasOrderState = Boolean(location?.state?.text)

    if (!hasValidRedirect && !hasOrderState) {
      navigate('/checkout', { replace: true })
    }
  }, [location, sessionId, navigate])

  return (
    <div className='m-2 w-full max-w-md bg-green-200 p-4 py-5 rounded mx-auto flex flex-col justify-center items-center gap-5'>
      <p className='text-green-800 font-bold text-lg text-center'>{successText} Successfully</p>
      <Link to="/" className="border border-green-900 text-green-900 hover:bg-green-900 hover:text-white transition-all px-4 py-1">Go To Home</Link>
    </div>
  )
}

export default Success