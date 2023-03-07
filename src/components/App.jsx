import { Component } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';


export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

   leaveFeedback = stateKey => () => {
    this.setState(prevState => {
      return { [stateKey]: prevState[stateKey] + 1 };
    });
  };

    countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage() {
    return Math.floor(this.state.good*100/this.countTotalFeedback())
  }

  render() {

    const {good, neutral, bad} = this.state
    return (
      <Container>
      

      <Section title="Please leave feedback">
         <FeedbackOptions
            options={Object.keys(this.state)}
            onFeedbackClick={this.leaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Staticstics">
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}>
           </Statistics>
      </Section>): <Notification message="There is no feedback"/>}
      
    </Container>
    )
  }
}
