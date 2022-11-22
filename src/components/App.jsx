import React from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { SectionTitle } from "./SectionTitle";
import { Statictics } from "./Statistics";
import { NotificationMessage } from "./NotificationMessage";

export class App extends React.Component{
  static propTypes = {
    //
  }
  
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleFeedback = (options) => {
    console.log(options);

  }

      handleGoodClick = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    }

    handleNeutralClick = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }

    handleBadClick = () => {
        this.setState(prevState => ({    
            bad: prevState.bad + 1,
        }));
    }

    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    }

    countPositiveFeedbackPercentage = () => {
        let positive = 0;
        if (this.state.good !== 0) {
            positive = Math.round(this.state.good / this.countTotalFeedback() * 100);
        }
        return positive;
    }
  
  render() {
    return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <SectionTitle title={"Please leave feedback"}>
          <FeedbackOptions onGoodClick={this.handleGoodClick} onNeutralClick={this.handleNeutralClick} onBadClick={this.handleBadClick}></FeedbackOptions>
        </SectionTitle>
        <SectionTitle title={"Statistics"}>
          {!this.state.good && !this.state.neutral && !this.state.bad ?
            <NotificationMessage></NotificationMessage> :
            <Statictics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statictics>}
        </SectionTitle>
      </div>
    );
  }
}