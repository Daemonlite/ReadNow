const router = require('express').Router()
const {getLibraries,getlibraryById,createLibrary,deleteLibrary,addStory,getUserLibStory,getUserlibStoryById} = require('../handlers/libraryHandler')
const {verifyToken} = require('../middleware/verify')

router.get('/',verifyToken,getLibraries)
router.get('/:id',verifyToken,getlibraryById)
router.post('/',verifyToken,createLibrary)
router.delete('/:id',verifyToken,deleteLibrary)
router.get('/user/lib/story',verifyToken,getUserLibStory)
router.get('/user/lib/story:id',verifyToken,getUserlibStoryById)
router.post('/user/lib/story',verifyToken,addStory)

module.exports = router