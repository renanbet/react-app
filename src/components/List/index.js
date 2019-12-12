import React from 'react';
import Card from '~/components/Card';

import { Container } from './styles';

export default function List({title, creatable, cards}) {
  return (
    <Container>
      {
        cards.map((item, index) => {
          return <Card key={index} {...item} />
        })
      }
    </Container>
  );
}
