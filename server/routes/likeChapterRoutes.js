const router = require('express').Router()
const {getLikes,getLikeById,likeChapter,unlikechapter} = require('../handlers/likeChapterHandler')
const {verifyToken} = require('../middleware/verify')

router.get('/',verifyToken,getLikes)
router.get('/:id',verifyToken,getLikeById)
router.post('/',verifyToken,likeChapter)
router.delete('/:id',verifyToken,unlikechapter)

module.exports = router