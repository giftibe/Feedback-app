import React from 'react'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

import Card from './shared/Card'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    function handleTextChange(event) {

        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be at let 10 character')
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }


        const newValue = event.target.value
        setText(newValue)
    }

return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select = {(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='write a review' value = {text} />
                <Button 
                type="submit"
                version='secondary'
                isDisabled = {btnDisabled}
                >Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
    )
}

export default FeedbackForm