import { useReducer } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';


function countRating(state, actions){
  switch (actions) {
    case 'good':
      return { ...state, good: state.good + 1 }
    
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 }
    
    case 'bad':
      return {...state, bad: state.bad + 1}
  
    default:
      break;
  }
}


export function App() {
  const [state, dispatch] = useReducer(countRating, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  
  const {good, neutral, bad} = state
  function countTotalFeedback() {
    return good + neutral + bad
  }
  
  function countPositiveFeedbackPercentage() {
    return Math.floor(good*100/countTotalFeedback())
  }

  return (
      <Container>
      <Section title="Please leave feedback">
         <FeedbackOptions
          options={Object.keys(state)}
            onFeedbackClick={(action) => dispatch(action)}
          />
        </Section>
        {countTotalFeedback() > 0 ? (
          <Section title="Staticstics">
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}>
           </Statistics>
      </Section>): <Notification message="There is no feedback"/>}
    </Container>
    )
}


