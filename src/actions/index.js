// action types
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// action creators
export const requestPosts = subreddit => {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
};

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
};

export const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit));

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)));
};
