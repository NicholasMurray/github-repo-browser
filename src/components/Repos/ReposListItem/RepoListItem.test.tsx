import React from 'react';
import ReactDOM from 'react-dom';
import RepoListItem from './RepoListItem';

const testProps = {
  url: "http://test.com",
  name: "Test name",
  description: "test description",
  avatar_url: "http://avatar.com"
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoListItem 
    url={testProps.url} 
    name={testProps.name} 
    description={testProps.description} 
    avatar_url={testProps.avatar_url} 
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});