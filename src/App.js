import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <GlobalStyle />
    <Routes></Routes>
    </DndProvider>
  );
}

export default App;
