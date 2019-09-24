export async function getThreads(topic){
	console.log('https://www.reddit.com/r/'+topic+'.json')
	let response=await fetch('https://www.reddit.com/r/'+topic+'.json');
	let threadsJson=await response.json();
	let threads=threadsJson.data.children;
	return threads;
}