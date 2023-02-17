import { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";


export class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  percentage: 0,
  }

  addFeedback = event => {
    const name = event.target.name
    this.setState(prevState => ({ [name]: prevState[name] + 1}))

    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  countTotalFeedback = () => {
    this.setState(state => {
      return { total: state.good + state.neutral + state.bad };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(state => {
      return {
        percentage: Math.round((state.good / state.total) * 100),
      };
    });
  };
  
  render() {
    return (
      <>
      <Section title="Please leave Feedback">
        <FeedbackOptions options={(this.countPositiveFeedbackPercentage, this.countTotalFeedback)} addFeedback={this.addFeedback}></FeedbackOptions>
      </Section>
      
        <Section title="Statisticks">
          {this.state.total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.percentage}>
            </Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
      </Section>
      
      
      </>
    )
  }
}
