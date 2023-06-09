const express = require('express')
const dotenv = require('dotenv' ).config()
const app = express()
const cors = require('cors')
const port = 8000
const connectDb = require('./database/connect')


//middlewares
app.use((cors()))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//db connection 
connectDb()
//routes
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/stories',require('./routes/storyRoutes'))
app.use('/api/chapters',require('./routes/chapterRoutes'))
app.use('/api/comments/story',require('./routes/storyCommentRoutes'))
app.use('/api/comments/chapter',require('./routes/chapterCommentRoutes'))
app.use('/api/likes/chapter',require('./routes/likeChapterRoutes'))
app.use('/api/story/like',require('./routes/storyLikeRoutes'))
app.use('/api/library',require('./routes/libraryRoutes'))
app.use('/api/subscriber',require('./routes/subscriberRoutes'))
//server
app.listen(port,console.log(`SERVER RUNNING ON PORT ${port}`))