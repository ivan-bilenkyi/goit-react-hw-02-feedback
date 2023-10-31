import { Component } from 'react';

const Button = ({ onUpdate, text }) => {
  return (
    <>
      <button onClick={onUpdate}>{text}</button>
    </>
  );
};

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  updateBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = Math.round((good / total) * 100);

    return (
      <div>
        <h1>Please leave feedback</h1>
        <Button onUpdate={this.updateGood} text="Good" />
        <Button onUpdate={this.updateNeutral} text="Neutral" />
        <Button onUpdate={this.updateBad} text="Bad" />
        <h2>Statistics</h2>
        {total === 0 && <h3>There is no feedback</h3>}
        {total > 0 && (
          <>
            <p>Good = {good}</p>
            <p>Neutral = {neutral}</p>
            <p>Bad = {bad}</p>
            <p>Total = {total}</p>
            <p>Positive fedback = {positiveFeedback}%</p>
          </>
        )}
      </div>
    );
  }
}
