import express from 'express'
import {superAdminCreation,superAdminLogin } from '../controller/admin.js';
import { adminSignupValidation, adminLoginValidation} from '../controller/inputValidation.js';

const adminRouter=express.Router()
// routing, validation middleware and controller of admin
adminRouter.post("/signup", adminSignupValidation, superAdminCreation)
adminRouter.post("/login", adminLoginValidation, superAdminLogin)

export default adminRouter;