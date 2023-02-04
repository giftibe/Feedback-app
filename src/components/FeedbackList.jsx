import { motion, AnimatePresence } from "framer-motion"
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
        <AnimatePresence>
            {feedback.map((item)=>(
        <motion.div 
            key={item.id}
            initial = {{opacity: 0}}
            animate = {{opacity:1}}
            exit = {{opacity: 0}}
            > 
            <FeedbackItem 
            key={item.id} item = {item} 
            handleDelete ={handleDelete} 
            />
        </motion.div>)
            )}
        </AnimatePresence>
    </div>
    )
}

FeedbackList.propTypes = {
    feedback: propTypes.array.isRequired
}

export default FeedbackList