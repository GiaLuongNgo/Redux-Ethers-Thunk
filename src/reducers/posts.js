import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

// initial state
const initialState = {
  isFetching: false,
  subreddit: '',
  items: []
};

const txHistory = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isFetching: true, subreddit: action.subreddit };
    case RECEIVE_POSTS:
      return { ...state, isFetching: false, items: action.posts, lastUpdated: action.receivedAt };
    default:
      return state;
  }
};

export default txHistory;
