import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Statictics } from '../Statistics/Statistics';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
import { Container } from './App.styled';

export class App extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    title: PropTypes.string,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  handleClick = (e) =>{
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positive = 0;
    if (good !== 0) {
      positive = Math.round((good / this.countTotalFeedback()) * 100);
    }
    return positive;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <SectionTitle title={'Please leave feedback'}>
          <FeedbackOptions
            onClick={this.handleClick}
          />
        </SectionTitle>
        <SectionTitle title={'Statistics'}>
          {!good && !neutral && !bad ? (
            <NotificationMessage/>
          ) : (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </SectionTitle>
      </Container>
    );
  }
}
