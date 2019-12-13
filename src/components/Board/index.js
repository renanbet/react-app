import React, { useState } from 'react';
import List from '~/components/List'

import { Container } from './styles';
import { loadLists } from '~/services/api';

import produce from 'immer'

import BoardContext from './context';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data)

  const move = (fromList, toList, from, to) => {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  };

  return (
    <BoardContext.Provider value={{lists, move}}>
      <Container>
        {
          lists.map((item, index) => {
            return <List key={index} {...item} index={index} />
          })
        }
      </Container>
    </BoardContext.Provider>
  );
}
