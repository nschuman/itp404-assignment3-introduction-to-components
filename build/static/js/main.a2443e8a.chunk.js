(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=(n(16),n(1)),l=n.n(s),i=n(5),u=n(6),d=n(7),m=n(9),h=n(8),p=n(10);n(3);function b(e){return r.a.createElement("div",{className:"loader"})}var f=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={threads:[],loading:!0},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,n,a,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/r/publicfreakout.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.data.children.length),a=n.data.children,console.log(a),console.log(a[1].data.subreddit_subscribers),r=a[1].data.subreddit_subscribers,console.log(r),this.setState({threads:a,loading:!1,subscribers:r});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement("p",null,this.state.subscribers),r.a.createElement("div",null," ",this.state.loading?r.a.createElement(b,null):this.state.threads.map(function(e){return r.a.createElement("div",null," ",r.a.createElement("a",{href:e.data.url,target:"_blank"}," ",e.data.title)," ",r.a.createElement("p",null,e.data.author),r.a.createElement("p",null,e.data.ups.toLocaleString()," "),r.a.createElement("p",null,e.data.num_comments?e.data.num_comments.toLocaleString():"No comments"))})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.a2443e8a.chunk.js.map