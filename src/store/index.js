import { createStore } from 'redux'

const INITIAL_STATE = {
  lists: []
}

function lists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INITIALIZE':
      state.lists = action.lists
      return state;
    case 'MOVE':
      const dragged = state.lists[action.fromList].cards[action.from];
      state.lists[action.fromList].cards.splice(action.from, 1);
      state.lists[action.toList].cards.splice(action.to, 0, dragged);
      console.log(state.lists)
      return state
    default:
      return state;
  }
}

const store = createStore(lists);

export default store;