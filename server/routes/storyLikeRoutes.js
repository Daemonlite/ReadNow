const router = require('express').Router()
const {getLikes,getLikeById,likeStory,unlikeStory} = require('../handlers/storyLikesHandler')
const {verifyToken} = require('../middleware/verify')

router.get('/',verifyToken,getLikes)
router.get('/:id',verifyToken,getLikeById)
router.post('/',verifyToken,likeStory)
router.delete('/:id',verifyToken,unlikeStory)



module.exports = router