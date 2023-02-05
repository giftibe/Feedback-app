import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './components/data/FeedbackData';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    function  deleteFeedback(id){
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    return (
        <Router> 
            <Header />
            <div className="container">

            {/* <Route exact path='/'> */}
                <FeedbackForm handleAdd = {addFeedback} />
                <FeedbackStats feedback={feedback}/>
                <FeedbackList 
                feedback ={feedback}
                handleDelete = {deleteFeedback}/>
            {/* </Route>     */}

            <Routes>    
            <Route  path='/about' components={AboutPage}/> 
            </Routes>   
            </div>
        </Router>
    )
}



export default App