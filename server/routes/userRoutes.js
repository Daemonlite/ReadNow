const router = require('express').Router()
const {getUsers,register,loginUser,updateUserInfo,deleteUser,getUserById} = require('../handlers/userHandler')
const {verifyToken} = require('../middleware/verify')

router.get('/',verifyToken,getUsers)
router.post('/register',register)
router.post('/login',loginUser)
router.put('/:id',updateUserInfo)
router.delete('/:id',deleteUser)
router.get('/:id',getUserById)

  

module.exports = router