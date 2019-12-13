import React from 'react';
import Card from '~/components/Card';

import { Container } from './styles';

export default function List({title, creatable, cards, index}) {
  const listIndex = index;

  return (
    <Container>
      <h2>{title}</h2>
      <br/>
      {
        cards.map((item, index) => {
          return <Card key={index} {...item} index={index} listIndex={listIndex} />
        })
      }
    </Container>
  );
}
