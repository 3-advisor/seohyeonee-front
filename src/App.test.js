import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('non-crush rendering test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(<App />, div);
  });
});
