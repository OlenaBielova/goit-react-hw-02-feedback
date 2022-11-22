import React from 'react';
import { Item, List } from './Statistics.styled';

export const Statictics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <List>
    <Item>Good: {good}</Item>
    <Item>Neutral: {neutral}</Item>
    <Item>Bad: {bad}</Item>
    <Item>Total: {total}</Item>
    <Item>Positive feedback: {positivePercentage}%</Item>
  </List>
);
