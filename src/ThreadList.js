import React from 'react';
import ThreadCard from './ThreadCard'

export default function ThreadList(props){
	console.log(props.reads)
	let reads=props.reads

	return(
       <div>
          {props.threads.map((thread)=>{
          	return <ThreadCard thread={thread} increaseReads={props.increaseReads} reads={props.reads}/>
          })}
       </div>
		);
}