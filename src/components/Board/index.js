import React, { useEffect } from 'react';
import List from '~/components/List'

import { Container } from './styles';
import { loadLists } from '~/services/api';

// import produce from 'immer'


import { useSelector, useDispatch } from 'react-redux';

const initializeLists = () => {
  return { type: 'INITIALIZE', lists: loadLists() };
}

export default function Board() {
  const dispatch = useDispatch();

  let lists = useSelector(state => state.lists);

  useEffect(() => {
    dispatch(initializeLists());
  }, [])

  // const move = (fromList, toList, from, to) => {
  //   setLists(produce(lists, draft => {
  //     const dragged = draft[fromList].cards[from];
  //     draft[fromList].cards.splice(from, 1);
  //     draft[toList].cards.splice(to, 0, dragged);
  //   }))
  // };

  return (
    <Container>
      {
        lists.length && lists.map((item, index) => {
          return <List key={index} {...item} index={index} />
        })
      }
    </Container>
  );
}
