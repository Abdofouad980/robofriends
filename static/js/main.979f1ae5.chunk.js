(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),c=n.n(o),s=n(4),i=n(7),l=n(13),u=n(12),h=(n(23),n(2)),d=n(3),b=n(6),E=n(5),p=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},m=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,n){return a.a.createElement(p,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))},g=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. that is not good "):this.props.children}}]),n}(r.Component),O=(n(24),function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)}),v=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,r=e.onSearchChange,o=e.isPending,c=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return o?a.a.createElement("h1",{className:"f1 tc"},"Loading ....."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(f,{searchChange:r}),a.a.createElement(O,null,a.a.createElement(g,null,a.a.createElement(m,{robots:c}))))}}]),n}(r.Component),R=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("http://jsonplaceholder.typicode.com/users",{map:'no-cors'}).then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(v),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})},y=n(9),C={searchField:""},j={isPending:!1,robots:[],error:""},_=(n(25),Object(u.createLogger)()),w=Object(i.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(y.a)(Object(y.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),F=Object(i.c)(w,Object(i.a)(l.a,_));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:F},a.a.createElement(R,null))),document.getElementById("root")),S()}},[[14,1,2]]]);
//# sourceMappingURL=main.979f1ae5.chunk.js.map
