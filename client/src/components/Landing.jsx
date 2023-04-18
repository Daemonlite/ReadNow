import React from 'react'
import Button from '@mui/material/Button'

const Landing = () => {
  return (
    <div className='land'>
        <div className="head">
            <h1 className="headText">Welcome to ReadNow</h1>
            <p className="head-para">The world's most-loved social storytelling platform
    ReadNow connects a global community of millions readers and writers through the power of story.</p>

    <div className="btns">
    <Button variant='contained'>Start Reading</Button>
    <Button variant='outlined'>Publish your Story</Button>
    </div>
        </div>

        <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADwuZqn6EwTVaa4iplqsDTDONQPDSlVFU2vOTrYH46ql_EAES" alt=""  className='comp'/>
        </div>
    </div>
  )
}

export default Landing