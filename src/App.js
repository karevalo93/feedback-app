import { v4 as uuidv4 } from "uuid"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {Header} from "./components/Header";
import {FeedbackList} from "./components/FeedbackList";
import {FeedbackForm} from "./components/FeedbackForm";
import {FeedbackStats} from "./components/FeedbackStats";
import {AboutPage} from "./pages/AboutPage";
import FeedbackData from "./data/FeedbackData";
import {AboutIconLink} from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";

export const App = () => {

  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>
          <AboutIconLink/>
        </div>
      </Router>
    </FeedbackProvider>
  )
}