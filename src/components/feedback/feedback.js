import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = total === 0 ? 0 : Math.round((good / total) * 100);

    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onClickFeedback={this.onClickFeedback}
        />
        <h2>Statistics</h2>
        {total === 0 ? (
          <h3>There is no feedback</h3>
        ) : (
          <>
            <p>Good = {good}</p>
            <p>Neutral = {neutral}</p>
            <p>Bad = {bad}</p>
            <p>Total = {total}</p>
            <p>Positive feedback = {positiveFeedback}%</p>
          </>
        )}
      </div>
    );
  }
}
