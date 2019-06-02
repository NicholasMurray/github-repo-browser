import React from 'react';
import axios from 'axios';
import './RepoList.css';
import { Spinner } from '@flexera/ui-react-components';
import RepoListItem from './../ReposListItem/RepoListItem';

interface RepoDetails {
  html_url: "",
  name: "",
  description: "",
  id: "",
  owner: {
    avatar_url: ""
  }
}

class RepoList extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      repos: [],
      loadingRepos: true,
      page: 1
    }
  }

  componentDidMount() {
    this.getReposList();
  }

  prev = () => {
    if (this.state.page > 1) {
      this.setState(
        { page: this.state.page - 1 },
        () => this.getReposList()
      );
    }
  }

  next = () =>  {
    this.setState(
      { page: this.state.page + 1 },
      () => this.getReposList()
    );
  }


  getReposList = (query = 'sort=stars&q=javascript&per_page=10&page=' + this.state.page) => {
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
      .then(response => {
        this.setState({
          query: query,
          repos: response.data.items,
          loadingRepos: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }

  render() {
    return (
      <div className="RepoList">
          <div className="navigate">
            <button onClick={this.prev} disabled={this.state.page === 1}>&#8249;</button>
            <button onClick={this.next}>&#8250;</button>
          </div>
        <div>
          {
            (this.state.loadingRepos)
            ? <Spinner color="red"></Spinner>
            : <div>
                {
                  this.state.repos.map((repo: RepoDetails) => {
                      return <RepoListItem 
                              name={repo.name} 
                              url={repo.html_url} 
                              description={repo.description} 
                              avatar_url={repo.owner.avatar_url}
                              key={repo.id} 
                            />
                      }
                  )
                }
              </div>
          }
        </div>
      </div>
  )};
}

export default RepoList;