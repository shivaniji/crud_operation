const express = require("express")
const router = express.Router()

const {insertdata,getall,get_user_by_id,update_user_by_id} = require('../controllers/controller' )

const knex = require('../database/db')

router.post('/insertdata',insertdata)
router.get("/getall",getall)
router.get('/get_user_by_id/:id',get_user_by_id)
router.put("/update/:id",update_user_by_id)





module.exports=router



