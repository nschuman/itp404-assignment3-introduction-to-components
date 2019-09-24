import React from 'react';
export default function ThreadCard(props){
   let thread=props.thread;

   return(
      <div>
        <a href={thread.data.url} target="_blank" onClick={(e) => { props.increaseReads(); console.log(props.reads); document.getElementById('reads').innerHTML=props.reads+1;}}>{thread.data.title}</a>
        <p>{thread.data.author}</p>
        <p>{thread.data.ups.toLocaleString()}</p>
        <p>{thread.data.num_comments ? thread.data.num_comments.toLocaleString():'No comments'}</p>
      </div>
   	);
}