(this["webpackJsonpsearch-gif-app"]=this["webpackJsonpsearch-gif-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),i=(n(14),n(1)),l=n(8),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t((function(e){return[u].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){var t=e.target.value;return o(t)}}))},s=n(4),m=n.n(s),f=n(7),p=function(){var e=Object(f.a)(m.a.mark((function e(t){var n,a,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=ZefmqMjz8uhy3xSYf0SYps5gjRRYj9Om"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.title,n=e.url;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null,t))},g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,u=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),r.a.createElement("hr",null),u&&"Loading",r.a.createElement("div",{className:"card-grid animate__animated animate__fadeIn"},c.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}))))},E=function(e){var t=Object(a.useState)(["soccer"]),n=Object(i.a)(t,2),c=n[0],u=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Gif Expert App"),r.a.createElement(o,{setCategories:u}),r.a.createElement("hr",null),r.a.createElement("ol",null,c.map((function(e){return r.a.createElement(g,{category:e,key:e})}))))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.08acf278.chunk.js.map