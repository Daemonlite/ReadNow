const router = require('express').Router()
const {getLibraries,getlibraryById,createLibrary,deleteLibrary} = require('../handlers/libraryHandler')
const {verifyToken} = require('../middleware/verify')

router.get('/',verifyToken,getLibraries)
router.get('/:id',verifyToken,getlibraryById)
router.post('/',verifyToken,createLibrary)
router.delete('/:id',verifyToken,deleteLibrary)

module.exports = router