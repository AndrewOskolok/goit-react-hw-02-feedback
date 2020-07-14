import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addToGood = () => {
    this.setState((prev) => ({
      good: prev.good++,
    }));
  };

  addToNeutral = () => {
    this.setState((prev) => ({
      neutral: prev.neutral++,
    }));
  };

  addToBad = () => {
    this.setState((prev) => ({
      bad: prev.bad++,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    );
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            addToGood={this.addToGood}
            addToNeutral={this.addToNeutral}
            addToBad={this.addToBad}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
