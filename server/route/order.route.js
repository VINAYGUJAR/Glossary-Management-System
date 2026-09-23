import { Router } from 'express'
import auth from '../middleware/auth.js'
import { CashOnDeliveryOrderController, paymentController, finalizePaymentController, webhookStripe,getOrderDetailsController, getAllOrderDetailsController } from '../controllers/order.controller.js'
import { admin } from '../middleware/Admin.js'

const orderRouter = Router()

orderRouter.post("/cash-on-delivery",auth,CashOnDeliveryOrderController)
orderRouter.post('/checkout',auth,paymentController)
orderRouter.post('/payment-success',auth,finalizePaymentController)
orderRouter.post('/webhook',webhookStripe)
orderRouter.get("/order-list",auth,getOrderDetailsController)
orderRouter.get("/all-orders",auth,admin,getAllOrderDetailsController)

export default orderRouter