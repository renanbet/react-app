import React from 'react';
import List from '~/components/List'

import { Container } from './styles';
import { loadLists } from '~/services/api';

export default function Board() {
  const list = loadLists();

  return (
    <Container>
      {
        list.map((item, index) => {
          return <List key={index} {...item} />
        })
      }

    </Container>
  );
}
