const router = require('express').Router()
const { Router } = require('express')
const {getComments,getcommentById,addComment,deleteComment} = require('../handlers/storyCommentHandler')
const {verifyToken} = require('../middleware/verify')

router.get('/',verifyToken,getComments)
router.get('/:id',verifyToken,getcommentById)
router.post('/',verifyToken,addComment)
router.delete('/:id',verifyToken,deleteComment)

module.exports = router