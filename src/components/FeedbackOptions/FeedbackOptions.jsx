import React from 'react';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
}) => (
  <List className="feedback-list">
    <Button className="feedback-button" type="button" onClick={onGoodClick}>
      Good
    </Button>
    <Button className="feedback-button" type="button" onClick={onNeutralClick}>
      Neutral
    </Button>
    <Button className="feedback-button" type="button" onClick={onBadClick}>
      Bad
    </Button>
  </List>
);
