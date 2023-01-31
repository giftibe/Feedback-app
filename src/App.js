import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './components/data/FeedbackData';
import { useState } from 'react';

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <> 
            <Header />
            <div className="container">
            <FeedbackList 
            initialDisplay ={feedback}
            />
            </div>
        </>
    )
}



export default App