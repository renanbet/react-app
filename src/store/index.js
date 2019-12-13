import { createStore } from 'redux'

const INITIAL_STATE = {
  lists: []
}

function lists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INITIALIZE':
      console.log(action)
      state.lists = action.lists
      return state;
    default:
      return state;
  }
}

const store = createStore(lists);

export default store;