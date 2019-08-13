import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts('ethereum'));
  }

  render() {
    const { items, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <p>
          {lastUpdated && <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}</span>}
        </p>
        {isFetching ? (
          <h2>Loading...</h2>
        ) : (
          <List>
            {items.map((item, idx) => (
              <ListItem key={idx}>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isFetching, items, lastUpdated } = state.posts;
  return {
    isFetching,
    items,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
