import { Router } from 'express'
import { registerUserController } from '../controllers/user.controller.js'
import { verifyEmailController } from '../controllers/user.controller.js'
import { loginController } from '../controllers/user.controller.js'
import { logoutController } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js'
import { uploadAvatar } from '../controllers/user.controller.js'
import multer from 'multer'
import upload from '../middleware/multer.js'
import { updateUserDetails } from '../controllers/user.controller.js'
import { forgotPasswordController } from '../controllers/user.controller.js'
import { verifyForgotPasswordOtp } from '../controllers/user.controller.js'
import { resetpassword } from '../controllers/user.controller.js'
import { refreshToken } from '../controllers/user.controller.js'
import {userDetails} from '../controllers/user.controller.js'

// import { forgotPasswordController, loginController, logoutController, refreshToken, registerUserController, resetpassword, updateUserDetails, uploadAvatar, userDetails, verifyEmailController, verifyForgotPasswordOtp } from '../controllers/user.controller.js'



const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/verify-email',verifyEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)
userRouter.put('/update-user',auth,updateUserDetails)
userRouter.put('/forgot-password',forgotPasswordController)
userRouter.put('/verify-forgot-password-otp',verifyForgotPasswordOtp)
userRouter.put('/reset-password',resetpassword)
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details',auth,userDetails)




export default userRouter// Compare this snippet from server/route/user.route.js:
// import { Router } from 'express'