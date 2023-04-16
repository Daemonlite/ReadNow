const router = require('express').Router()
const {getSubscriberById,getSubscribers,unSubscribe,addSubscriber} = require('../handlers/subscriptionHandler')
const {verifyToken} = require('../middleware/verify')
const { unsubscribe } = require('./userRoutes')

router.get('/',verifyToken,getSubscribers)
router.get('/:id',verifyToken,getSubscriberById)
router.post('/',verifyToken,addSubscriber)
router.delete('/:id',verifyToken,unsubscribe)


module.exports = router