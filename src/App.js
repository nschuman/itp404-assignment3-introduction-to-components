import React from 'react';
import './App.css';
import Loading from './Loading';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      threads: [],
      loading:true
    };
  }
  async componentDidMount(){
      

      let response=await fetch('https://www.reddit.com/r/publicfreakout.json');
      let threadsJson=await response.json();
      console.log(threadsJson.data.children.length);
      let threads=threadsJson.data.children;
      console.log(threads);
      console.log(threads[1].data.subreddit_subscribers);
      let subscribers=threads[1].data.subreddit_subscribers;
      console.log(subscribers)
      this.setState({threads, loading:false, subscribers});
    }
  render(){
    return (
      <div> <p>{this.state.subscribers}</p> 
      <div> {this.state.loading ? <Loading /> : this.state.threads.map((thread)=>{
        return <div> <a href={thread.data.url} target="_blank"> {thread.data.title}</a> <p>{thread.data.author}</p><p>{thread.data.ups.toLocaleString()} </p><p>{thread.data.num_comments ? thread.data.num_comments.toLocaleString():'No comments'}</p></div>
      })}</div>
      
      </div>
      );
  }
}

export default App;

