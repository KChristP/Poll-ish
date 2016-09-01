import React from 'react'

const HowItWorks = () => (
  <div className="how-it-works-container box">
    <div className="hiw-block box">
      <div className="hiw-image">
        <img src="assets/ask_question-1.gif"/>
      </div>
      <div className="hiw-text">
        1. You write and publish a poll through Poll-ish
      </div>
    </div>

    <div className="hiw-block box">
      <div className="hiw-image">
        <img src="assets/audience_answers-2.gif"/>
      </div>
      <div className="hiw-text">
        2. Your audience answers with a web browser or by text message
      </div>
    </div>

    <div className="hiw-block box">
      <div className="hiw-image">
        <img src="assets/see_response-3.gif"/>
      </div>
      <div className="hiw-text">
        3. View the poll results in real time as they update
      </div>
    </div>
  </div>
)

export default HowItWorks;
