import React from 'react';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onClick
}) => (
  <List>
    <Button type="button" name="good" onClick={onClick}>
      Good
    </Button>
    <Button type="button" name="neutral" onClick={onClick}>
      Neutral
    </Button>
    <Button type="button" name="bad" onClick={onClick}>
      Bad
    </Button>
  </List>
);
