import React, { useEffect, useState } from 'react'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import AxiosToastError from '../utils/AxiosToastError'
import NoData from '../components/NoData'

const formatDate = (value) => value ? new Date(value).toLocaleString() : '-'

const AllOrdersAdmin = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await Axios({
          ...SummaryApi.getAllOrderItems
        })
        if (response.data.success) {
          setOrders(response.data.data)
        }
      } catch (error) {
        AxiosToastError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllOrders()
  }, [])

  if (loading) {
    return <div className='p-4 text-neutral-500'>Loading orders...</div>
  }

  return (
    <div>
      <div className='bg-white shadow-md p-3 font-semibold flex items-center justify-between'>
        <h1>All Orders</h1>
        <span className='text-sm font-normal text-neutral-500'>{orders.length} items</span>
      </div>

      {!orders.length && <NoData />}

      <div className='p-3 grid gap-4'>
        {orders.map((order) => {
          const address = order.delivery_address
          const customer = order.userId

          return (
            <article key={order._id} className='border rounded p-4 bg-white shadow-sm grid gap-3'>
              <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2'>
                <div>
                  <p className='font-semibold'>Order: {order.orderId}</p>
                  <p className='text-xs text-neutral-500'>{formatDate(order.createdAt)}</p>
                </div>
                <div className='flex flex-wrap gap-2 text-xs'>
                  <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded'>{order.payment_status || 'Pending'}</span>
                  <span className='bg-green-100 text-green-800 px-2 py-1 rounded'>Rs. {order.totalAmt}</span>
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-4 text-sm'>
                <div className='border rounded p-3'>
                  <h2 className='font-semibold mb-1'>Customer</h2>
                  <p>{customer?.name || 'Unknown customer'}</p>
                  <p>{customer?.email || '-'}</p>
                  <p>{customer?.mobile || '-'}</p>
                </div>

                <div className='border rounded p-3'>
                  <h2 className='font-semibold mb-1'>Delivery Address</h2>
                  <p>{address?.address_line || '-'}</p>
                  <p>{[address?.city, address?.state].filter(Boolean).join(', ') || '-'}</p>
                  <p>{[address?.country, address?.pincode].filter(Boolean).join(' - ') || '-'}</p>
                  <p>Mobile: {address?.mobile || customer?.mobile || '-'}</p>
                </div>
              </div>

              <div className='flex gap-3 items-center border-t pt-3'>
                <img src={order.product_details?.image?.[0]} alt={order.product_details?.name || 'Product'} className='w-16 h-16 object-contain border rounded' />
                <div className='text-sm'>
                  <p className='font-medium'>{order.product_details?.name || 'Product unavailable'}</p>
                  <p className='text-neutral-500'>Payment ID: {order.paymentId || 'Cash on delivery'}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default AllOrdersAdmin
