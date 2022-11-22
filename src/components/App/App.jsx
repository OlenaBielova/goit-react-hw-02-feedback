import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Statictics } from '../Statistics/Statistics';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
import { Container } from './App.styled';

export class App extends React.Component {
  static propTypes = {
    onGoodClick: PropTypes.func,
    onNeutralClick: PropTypes.func,
    onBadClick: PropTypes.func,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    title: PropTypes.string,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positive = 0;
    if (this.state.good !== 0) {
      positive = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );
    }
    return positive;
  };

  render() {
    return (
      <Container>
        <SectionTitle title={'Please leave feedback'}>
          <FeedbackOptions
            onGoodClick={this.handleGoodClick}
            onNeutralClick={this.handleNeutralClick}
            onBadClick={this.handleBadClick}
          ></FeedbackOptions>
        </SectionTitle>
        <SectionTitle title={'Statistics'}>
          {!this.state.good && !this.state.neutral && !this.state.bad ? (
            <NotificationMessage></NotificationMessage>
          ) : (
            <Statictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statictics>
          )}
        </SectionTitle>
      </Container>
    );
  }
}
