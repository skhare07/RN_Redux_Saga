import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import PostList from './src/components/PostList';

const App = () => {
  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  );
};

export default App;
