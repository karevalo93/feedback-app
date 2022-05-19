import {createContext, useContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 1
    },
    {
      id: 2,
      text: 'This item is from context',
      rating: 8
    },
    {
      id: 3,
      text: 'This item is from context',
      rating: 7
    }
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem} : item))
  }
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext