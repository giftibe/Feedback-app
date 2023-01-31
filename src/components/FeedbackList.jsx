import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({initialDisplay}) {
    if(!initialDisplay || initialDisplay.length === 0) {
        <p>No feedback list</p>
    }
    else
    return (
    <div className='feedback-list'>
        {initialDisplay.map((item)=>(<FeedbackItem key={item.id} item = {item} />)
        )}
    </div>
    )
}

export default FeedbackList