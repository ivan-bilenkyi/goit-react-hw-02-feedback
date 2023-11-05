import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
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
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          }
        />
        <Section
          title="Statistic"
          children={
            total !== 0 && (
              <Statistics
                good={good}
                bad={bad}
                neutral={neutral}
                total={total}
                positiveFeedback={positiveFeedback}
              />
            )
          }
        />
      </div>
    );
  }
}
