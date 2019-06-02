import React from 'react';
import './App.css';
import { Header, H1 } from '@flexera/ui-react-components';
import RepoList from './components/Repos/RepoList/RepoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header>
        <H1>
          Browse Github
        </H1>
      </Header>
      <RepoList />
    </div>
  );
}

export default App;
