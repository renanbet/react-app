import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  min-height: 100px;
  background-color: #fff;
  margin: 3px 2px;
  padding: 5px;
  border: #e0e0e0 solid 1px;
  border-radius: 7px;
  cursor: grab;

  img {
    width: 24px;
    height: 24px;
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;
    p, img, header, span {
      opacity: 0;
    }
  `}
`;
