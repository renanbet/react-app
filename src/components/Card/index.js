import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd'

import { Container } from './styles';

import BoardContext from '~/components/Board/context'

export default function Card({id, content, labels, user, index, listIndex}) {
  const ref = useRef();

  const { move } = useContext(BoardContext)

  const [{ isDragging }, dragRef] = useDrag(
    {
      item: {
        type: 'CARD',
        id,
        index,
        listIndex
      },
      collect: monitor => (
        {
          isDragging: monitor.isDragging()
        }
      )
    }
  )

  const [{isDropped}, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      if (draggedListIndex === targetListIndex && draggedIndex === targetIndex)
        return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2

      //mouse
      const draggedOffset = monitor.getClientOffset()

      const graggedTop = draggedOffset.y - targetSize.top

      if (draggedListIndex === targetListIndex && draggedIndex === targetIndex - 1 && graggedTop < targetCenter)
        return;

      if (draggedListIndex === targetListIndex && draggedIndex === targetIndex + 1 && graggedTop > targetCenter)
        return;

      move(draggedListIndex, targetListIndex , draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <span>{id}</span>
      <span>{content}</span>
      <span>{labels}</span>

      {user && <img src={user} alt='user' />}
    </Container>
  );
}
