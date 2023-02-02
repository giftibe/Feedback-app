import propTypes from 'prop-types'
import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0) {
        <p>No feedback list</p>
    }
    else
    return (
    <div className='feedback-list'>
        {feedback.map((item)=>(<FeedbackItem key={item.id} item = {item} handleDelete ={handleDelete} />)
        )}
    </div>
    )
}

FeedbackList.propTypes = {
    feedback: propTypes.array.isRequired
}

export default FeedbackList