import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 320px;
  height: 100%;
  padding: 0 10px;

  & + div {
    border-left: 2px solid rgba(0, 0, 0, 0.05)
  }
`;
