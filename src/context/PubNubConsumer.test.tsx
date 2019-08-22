import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PubNubConsumer } from './PubNubConsumer';

describe('render component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PubNubConsumer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

// const value = 4;

// describe('value', () => {
//   expect(value).tob
// })