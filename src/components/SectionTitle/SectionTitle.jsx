import React from 'react';
import { Title } from './SectionTitle.styled';

export const SectionTitle = ({ title, children }) => (
  <section className="section-title">
    <Title>{title}</Title>
    {children}
  </section>
);
