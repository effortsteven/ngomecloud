(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(26)},26:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),o=t(4),s=t(5),i=t(7),m=t(6),d=t(8),u=t(27),v=t(15),p=t(28),b=function(e){var a=e.navs;return l.a.createElement("ul",{className:" navbar-nav  mx-auto"},a.map(function(e){return""!==e.name?l.a.createElement("li",{className:"nav-item nav-item-a",key:e.id},l.a.createElement(p.a,{exact:!0,to:e.url,className:"nav-link text-center"},l.a.createElement("span",null,e.name))):null}))},h={backgroundImage:"url(assets/img/kit/bg21.jpg)"},g=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={navs:[{id:1,name:"Home",url:"/"},{id:2,name:"About US",url:"/About"},{id:3,name:"Contact US",url:"/Contact"},{id:4,name:"Gallery",url:"/Gallery"}]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"header-2"},l.a.createElement("nav",{className:"navbar fixed-top  navbar-expand-lg ",id:"sectionsNav"},l.a.createElement("label",{className:"call-us-top"},"Call Free: 080 011 0041 "),l.a.createElement("div",{className:"container col-lg-12"},l.a.createElement("div",{className:"navbar-translate col-lg-3 ml-5",id:"mainTitle"},l.a.createElement("a",{className:"navbar-brand nav-a",href:"index.html"},l.a.createElement("img",{src:"../assets/img/kit/nic_2.png",alt:"logo",style:{marginTop:"-5px"},className:"bland-img"}),"National Insurance Corparation"),l.a.createElement("button",{className:"navbar-toggler navbar-toggler-btn",type:"button","data-toggle":"collapse","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("span",{className:"navbar-toggler-icon"}),l.a.createElement("span",{className:"navbar-toggler-icon"}),l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("span",{className:"navbar-toggler-title"},"Menu"))),l.a.createElement("div",{className:"collapse navbar-collapse col-lg-9"},l.a.createElement(b,{navs:this.state.navs})))),l.a.createElement("div",{className:"land-page-1"},l.a.createElement("div",{className:"page-header header-filter",style:h},l.a.createElement("div",{className:"container land-page-cont-1"}))))}}]),a}(n.Component),E=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"hello"))}}]),a}(n.Component),f=t(14),j=function(e){var a=e.todos,t=e.deletetodo,n=a.length?a.map(function(e){return l.a.createElement("div",{className:"collection-item",key:e.id},l.a.createElement("span",{onClick:function(){t(e.id)}},e.desc))}):l.a.createElement("p",{className:"text-success"},"You have no Todos!!");return l.a.createElement("div",{className:"todos container"},n)},y={margin:"100px 0 0 0"},N=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={desc:""},t.handlechange=function(e){t.setState({desc:e.target.value})},t.handlesubmit=function(e){e.preventDefault(),t.props.addTodo(t.state),t.setState({desc:""})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{style:y,onSubmit:this.handlesubmit},l.a.createElement("label",{htmlFor:"desc"},"Add Todo:"),l.a.createElement("input",{type:"text",onChange:this.handlechange,name:"desc",className:"form-control",value:this.state.desc})))}}]),a}(n.Component),O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={tempnavs:[{}],todos:[{id:1,desc:"send files"},{id:2,desc:"delete files"}]},t.deletetodo=function(e){var a=t.state.todos.filter(function(a){return a.id!==e});t.setState({todos:a}),console.log("ID "+e+": was deleted!")},t.addTodo=function(e){e.id=Math.random();var a=[].concat(Object(f.a)(t.state.todos),[e]);t.setState({todos:a})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"text-info"},"Todos"),l.a.createElement(j,{todos:this.state.todos,deletetodo:this.deletetodo}),l.a.createElement(N,{addTodo:this.addTodo}))}}]),a}(n.Component),k=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(v.a,{path:"/",component:E}),l.a.createElement(v.a,{path:"/about",component:O})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.eb1077a6.chunk.js.map