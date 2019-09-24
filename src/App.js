import React from 'react';
import './App.css';
import Loading from './Loading';
import ThreadCard from './ThreadCard'
import ThreadList from './ThreadList'
import SearchForm from './SearchForm';
import { getThreads } from './RedditApi';
import History from './History';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      threads: [],
      loading:false,
      previousSearch: [],
      reads: 0
    };

  }
  handleSearch = async (searchValue) => {
    this.setState({ loading: true });

    let [threads] = await Promise.all([
      getThreads(searchValue)   
    ]);
    console.log(searchValue)
    

    this.setState({ threads, loading: false, previousSearch:this.state.previousSearch.concat(searchValue)});
  }
  increaseReads= async ()=>{
    console.log(this.state.reads);
    let reads=this.state.reads+1;
    console.log(reads);
    this.setState({reads});
  }
  render(){
    return (
      <div>
        <SearchForm onSearch={this.handleSearch}/>
        <div> Previous searches:<History previousSearches={this.state.previousSearch} applyPreviousSearch={this.handleSearch}/> </div>
        <div>Number of threads read: </div>
        <div id="reads">0</div>
        {this.state.loading && <Loading />}
        <div>
        <ThreadList threads={this.state.threads} increaseReads={this.increaseReads} reads={this.state.reads}/>
        </div>
      </div>
      );
  }
}

export default App;

