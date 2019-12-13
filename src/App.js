import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle />
        <Routes></Routes>
      </DndProvider>
    </Provider>
  );
}

export default App;
