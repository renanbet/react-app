import React from 'react';

import { Container } from './styles';

export default function Card({id, content, labels, user}) {
  return (
    <Container>
      <span>{id}</span>
      <span>{content}</span>
      <span>{labels}</span>
      <span>{user}</span>
    </Container>
  );
}
