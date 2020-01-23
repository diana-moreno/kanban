(this["webpackJsonptasks-app"]=this["webpackJsonptasks-app"]||[]).push([[0],{12:function(e,t,n){e.exports={errors:n(42),validators:n(43),polyfills:n(79),validate:n(81)}},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(16),o=n.n(s),c=n(1),i=n.n(c),u=n(2),l=n(6),p=n(13),f=(n(67),n(68),function(e){var t=e.message;return r.a.createElement("p",{className:"feedback"},t)}),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.method,a=void 0===n?"GET":n,r=t.headers,s=t.body;return new Promise((function(t,n){try{var o=new XMLHttpRequest;if(o.open(a,e),o.onreadystatechange=function(){if(4===this.readyState)if(0===this.status)n(new Error("fail to call ".concat(e)));else{var a={status:this.status,body:this.responseText};t(a)}},r)for(var c in r)o.setRequestHeader(c,r[c]);s?o.send(s):o.send()}catch(i){n(i)}}))},d=n(12),h=d.validate,b=d.errors.CredentialsError,k=n(12),g=k.validate,E=k.errors.ConflictError,w=n(12),x=w.validate,y=w.errors.NotFoundError,v=n(12),O=v.validate,N=v.errors,_=N.NotFoundError,S=N.CredentialsError,j=n(12),C=j.validate,J=j.errors,T=J.CredentialsError,V=J.NotFoundError,I=J.ConflictError,A=n(12),B=A.validate,F=A.errors,D=F.CredentialsError,L=F.NotFoundError,P=F.ConflictError,z=n(12),R=z.validate,G=z.errors,K=G.NotFoundError,H=G.CredentialsError,M=n(12),q=M.validate,W=M.errors,Z=W.CredentialsError,$=W.NotFoundError,U=W.ConflictError,X=function(e,t){return h.string(e),h.string.notVoid("username",e),h.string(t),h.string.notVoid("password",t),Object(u.a)(i.a.mark((function n(){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m("".concat("https://kanban-api-1.herokuapp.com","/users/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})});case 2:if(200!==(a=n.sent).status){n.next=5;break}return n.abrupt("return",JSON.parse(a.body).token);case 5:if(401!==a.status){n.next=7;break}throw new b(JSON.parse(a.body).message);case 7:throw new Error(JSON.parse(a.body).message);case 8:case"end":return n.stop()}}),n)})))()},Q=function(e,t,n,a,r){return g.string(e),g.string.notVoid("name",e),g.string(t),g.string.notVoid("surname",t),g.string(n),g.string.notVoid("e-mail",n),g.email(n),g.string(a),g.string.notVoid("username",a),g.string(r),g.string.notVoid("password",r),Object(u.a)(i.a.mark((function s(){var o;return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m("".concat("https://kanban-api-1.herokuapp.com","/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,surname:t,email:n,username:a,password:r})});case 2:if(201!==(o=s.sent).status){s.next=5;break}return s.abrupt("return");case 5:if(409!==o.status){s.next=7;break}throw new E(JSON.parse(o.body).message);case 7:throw new Error(JSON.parse(o.body).message);case 8:case"end":return s.stop()}}),s)})))()},Y=function(e){return x.string(e),x.string.notVoid("token",e),Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("".concat("https://kanban-api-1.herokuapp.com","/users"),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}});case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",JSON.parse(n.body).user);case 5:if(404!==n.status){t.next=7;break}throw new y(JSON.parse(n.body).message);case 7:throw new Error(JSON.parse(n.body).message);case 8:case"end":return t.stop()}}),t)})))()},ee=function(e){return O.string(e),O.string.notVoid("token",e),Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("".concat("https://kanban-api-1.herokuapp.com","/columns"),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",JSON.parse(n.body).columns);case 5:if(401!==n.status){t.next=7;break}throw new S(JSON.parse(n.body).message);case 7:if(404!==n.status){t.next=9;break}throw new _(JSON.parse(n.body).message);case 9:throw new Error(JSON.parse(n.body).message);case 10:case"end":return t.stop()}}),t)})))()},te=function(e,t,n){return C.string(e),C.string.notVoid("token",e),C.string(t),C.string.notVoid("status",t),C.string(n),C.string.notVoid("title",n),Object(u.a)(i.a.mark((function a(){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m("".concat("https://kanban-api-1.herokuapp.com","/tasks"),{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({status:t,title:n})});case 2:if(200!==(r=a.sent).status){a.next=5;break}return a.abrupt("return",JSON.parse(r.body).task);case 5:if(401!==r.status){a.next=7;break}throw new T(JSON.parse(r.body).message);case 7:if(404!==r.status){a.next=9;break}throw new V(JSON.parse(r.body).message);case 9:if(409!==r.status){a.next=11;break}throw new I(JSON.parse(r.body).message);case 11:case"end":return a.stop()}}),a)})))()},ne=function(e){return B.string(e),B.string.notVoid("token",e),Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("".concat("https://kanban-api-1.herokuapp.com","/columns"),{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return");case 5:if(401!==n.status){t.next=7;break}throw new D(JSON.parse(n.body).message);case 7:if(404!==n.status){t.next=9;break}throw new L(JSON.parse(n.body).message);case 9:if(409!==n.status){t.next=11;break}throw new P(JSON.parse(n.body).message);case 11:case"end":return t.stop()}}),t)})))()},ae=function(e,t){return R.string(e),R.string.notVoid("token",e),Object(u.a)(i.a.mark((function n(){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m("".concat("https://kanban-api-1.herokuapp.com","/columns"),{method:"PUT",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({column:t})});case 2:if(201!==(a=n.sent).status){n.next=5;break}return n.abrupt("return");case 5:if(401!==a.status){n.next=7;break}throw new H(JSON.parse(a.body).message);case 7:if(404!==a.status){n.next=9;break}throw new K(JSON.parse(a.body).message);case 9:throw new Error(JSON.parse(a.body).message);case 10:case"end":return n.stop()}}),n)})))()},re=function(e,t,n){return q.string(e),q.string.notVoid("token",e),q.string(t),q.string.notVoid("task id",t),q.string(n),q.string.notVoid("status",n),Object(u.a)(i.a.mark((function a(){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m("".concat("https://kanban-api-1.herokuapp.com","/tasks/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({status:n})});case 2:if(201!==(r=a.sent).status){a.next=5;break}return a.abrupt("return");case 5:if(401!==r.status){a.next=7;break}throw new Z(JSON.parse(r.body).message);case 7:if(404!==r.status){a.next=9;break}throw new $(JSON.parse(r.body).message);case 9:if(409!==r.status){a.next=11;break}throw new U(JSON.parse(r.body).message);case 11:throw new Error(JSON.parse(r.body).message);case 12:case"end":return a.stop()}}),a)})))()},se=Q,oe=Object(p.e)((function(e){var t=e.onBack,n=e.history,s=Object(a.useState)(),o=Object(l.a)(s,2),c=o[0],p=o[1];function m(){return(m=Object(u.a)(i.a.mark((function e(t,a,r,s,o){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se(t,a,r,s,o);case 3:n.push("/login"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c=e.t0.message,p(c);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"login-title"},r.a.createElement("h1",null,"Kanban")),r.a.createElement("section",{className:"register"},r.a.createElement("h2",{className:"register__title"},"Please, introduce your details"),r.a.createElement("form",{className:"register__form",onSubmit:function(e){e.preventDefault();var t=e.target;!function(e,t,n,a,r){m.apply(this,arguments)}(t.name.value,t.surname.value,t.email.value,t.username.value,t.password.value)}},r.a.createElement("input",{className:"form__input",type:"text",name:"name",placeholder:"name"}),r.a.createElement("input",{className:"form__input",type:"text",name:"surname",placeholder:"surname"}),r.a.createElement("input",{className:"form__input",type:"text",name:"email",placeholder:"email"}),r.a.createElement("input",{className:"form__input",type:"username",name:"username",placeholder:"username"}),r.a.createElement("input",{className:"form__input",type:"password",name:"password",placeholder:"password"}),r.a.createElement("button",{className:"form__button form__button--register"},"Create account"),r.a.createElement("button",{type:"button",className:"form__button form__button--register-back",onClick:function(e){e.preventDefault(),t()}},"Go back")),c&&r.a.createElement(f,{message:c})))})),ce=(n(86),X),ie=Object(p.e)((function(e){e.onBack;var t=e.history,n=Object(a.useState)(),s=Object(l.a)(n,2),o=s[0],c=s[1];function p(){return(p=Object(u.a)(i.a.mark((function e(n,a){var r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce(n,a);case 3:r=e.sent,sessionStorage.token=r,t.push("/tasks"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),s=e.t0.message,c(s);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"login-title"},r.a.createElement("h1",null,"Kanban")),r.a.createElement("section",{className:"landing"},r.a.createElement("h2",{className:"landing__title"},"Login to enter"),r.a.createElement("form",{className:"landing__form",onSubmit:function(e){e.preventDefault();var t=e.target;!function(e,t){p.apply(this,arguments)}(t.username.value,t.password.value)}},r.a.createElement("input",{className:"form__input",type:"text",name:"username",placeholder:"username"}),r.a.createElement("input",{className:"form__input",type:"password",name:"password",placeholder:"password"}),r.a.createElement("button",{type:"submit",className:"form__button form__button--login"},"Login"),r.a.createElement("button",{type:"button",className:"form__button form__button--register",onClick:function(e){e.preventDefault(),t.push("/register")}},r.a.createElement("a",{href:""},"Create account"))),o&&r.a.createElement(f,{message:o})))})),ue=n(60),le=n(17),pe=(n(87),n(88),n(89),function(e){var t=e.status,n=e.title,a=e.modifier,s=e.index,o=e.id,c=e.onDeleteTask;return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.b,{draggableId:o,index:s},(function(e){return r.a.createElement("li",Object.assign({className:"task task--doing"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement("h3",{className:"task__title task__title--".concat(a)},n),r.a.createElement("i",{className:"fas fa-times",onClick:function(){c(o,t)}}))})))}),fe=te,me=function(e){var t=e.status,n=e.index,s=e.tasks,o=e.onCreateNewTask,c=e.onDeleteTask,p=t.toLowerCase(),f=sessionStorage.token,m=Object(a.useState)(!1),d=Object(l.a)(m,2),h=d[0],b=d[1],k=Object(a.useState)(null),g=Object(l.a)(k,2),E=g[0],w=g[1];function x(){return(x=Object(u.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==n.key){e.next=9;break}if(!E&&b(!1),!E){e.next=7;break}return e.next=5,fe(f,t,E);case 5:a=e.sent,o(a,t);case 7:b(!1),w(null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){w(null),h&&y.current.focus()}),[h]);var y=Object(a.useRef)(null);return function(e){function n(e){return r.apply(this,arguments)}function r(){return(r=Object(u.a)(i.a.mark((function n(a){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.current||e.current.contains(a.target)){n.next=9;break}if(!E&&b(!1),!E){n.next=7;break}return n.next=5,fe(f,t,E);case 5:r=n.sent,o(r,t);case 7:b(!1),w(null);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(a.useEffect)((function(){return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}))}(y),r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"tasks__column tasks__column-".concat(p)},r.a.createElement("h2",{className:"tasks__title"},t),r.a.createElement("ul",{className:"tasks__task"},r.a.createElement("li",{className:"task task__add task__add--".concat(p),onClick:function(){b(!0)}},r.a.createElement("h3",{className:"task__title"},"+ Add new card")),h&&r.a.createElement("li",{className:"task task--".concat(p)},r.a.createElement("input",{type:"text",className:"task__title task__title--".concat(p," task__new"),placeholder:"Enter a title for this card",onChange:function(e){var t=e.target.value;w(t)},ref:y,onKeyDown:function(e){return x.apply(this,arguments)}})),r.a.createElement(le.c,{droppableId:t,index:n},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),s&&s.map((function(e,n){return r.a.createElement(pe,{status:t,key:e._id,title:e.title,modifier:p,index:n,id:e._id,onDeleteTask:c})})),e.placeholder)})))))},de=ee,he=ae,be=ne,ke=re,ge=function(e){e.user;var t=e.onLogout,n=sessionStorage.token,s=Object(a.useState)(),o=Object(l.a)(s,2),c=o[0],p=o[1],f=Object(a.useState)(!1),m=Object(l.a)(f,2),d=m[0],h=m[1];function b(){return(b=Object(u.a)(i.a.mark((function e(t){var a,r,s,o,u,l,f,m,d,b,k,g,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.destination,r=t.source,t.draggableId,h(!1),a){e.next=4;break}return e.abrupt("return");case 4:if(a.droppableId!==r.droppableId||a.index!==r.index){e.next=6;break}return e.abrupt("return");case 6:if(s=c.filter((function(e){return e.status===r.droppableId})),o=c.filter((function(e){return e.status===a.droppableId})),u=Object(ue.a)(c),s[0].id!==o[0].id){e.next=20;break}return l=c.findIndex((function(e){return e.status===r.droppableId})),f=Array.from(s[0].tasks),m=f.splice(r.index,1),f.splice(a.index,0,m[0]),u[l].tasks=f,p(u),e.next=18,he(n,u[l]);case 18:return h(!0),e.abrupt("return");case 20:return d=c.findIndex((function(e){return e.status===r.droppableId})),b=Array.from(s[0].tasks),k=b.splice(r.index,1),g=c.findIndex((function(e){return e.status===a.droppableId})),(E=Array.from(o[0].tasks)).splice(a.index,0,k[0]),u[d].tasks=b,u[g].tasks=E,p(u),e.next=31,he(n,u[d]);case 31:return e.next=33,he(n,u[g]);case 33:h(!0);case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){var n=c.findIndex((function(e){return e.status===t}));c[n].tasks.push(e),p(c)}function g(e,t){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ke(n,t,a);case 3:h(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be(n);case 2:return e.next=4,de(n);case 4:t=e.sent,p(t),h(!1);case 7:case"end":return e.stop()}}),e)})))()}),[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Kanban"),r.a.createElement("h2",{onClick:t},"Logout"),r.a.createElement("i",{onClick:t,className:"fas fa-sign-out-alt"})),r.a.createElement("main",null,r.a.createElement(le.a,{onDragEnd:function(e){return b.apply(this,arguments)}},r.a.createElement("ul",{className:"tasks"},c&&c.sort((function(e,t){return e.index-t.index})).map((function(e,t){return r.a.createElement(me,{key:e.status,status:e.status,index:t,tasks:e.tasks,onCreateNewTask:k,onDeleteTask:g})}))))))},Ee=Y,we=Object(p.e)((function(e){var t=e.history,n=Object(a.useState)(),s=Object(l.a)(n,2),o=s[0],c=s[1];function f(){t.push("/")}function m(){sessionStorage.clear(),f()}return Object(a.useEffect)((function(){var e=sessionStorage.token;Object(u.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,Ee(e);case 3:n=t.sent,a=n.name,c(a);case 6:case"end":return t.stop()}}),t)})))()}),[sessionStorage.token]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(ie,{onBack:f})}}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(ie,{onBack:f})}}),r.a.createElement(p.a,{path:"/register",render:function(){return r.a.createElement(oe,{onBack:f})}}),r.a.createElement(p.a,{path:"/tasks",render:function(){return r.a.createElement(ge,{user:o,onLogout:m})}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=n(20);o.a.render(r.a.createElement(xe.a,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},42:function(e,t,n){e.exports={ConflictError:n(69),ContentError:n(73),CredentialsError:n(74),NotFoundError:n(75)}},43:function(e,t,n){e.exports={isTypeOf:n(76),isInstanceOf:n(77),isEmail:n(78)}},61:function(e,t,n){e.exports=n(125)},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){var a=n(24),r=n(25),s=n(19),o=n(18),c=n(26),i=n(27);e.exports=function(e){"use strict";function t(e){var n;return a(this,t),n=r(this,s(t).call(this,e)),Error.captureStackTrace(o(n),t),n.name=t.name,n}return c(t,e),t}(i(Error))},73:function(e,t,n){var a=n(24),r=n(25),s=n(19),o=n(18),c=n(26),i=n(27);e.exports=function(e){"use strict";function t(e){var n;return a(this,t),n=r(this,s(t).call(this,e)),Error.captureStackTrace(o(n),t),n.name=t.name,n}return c(t,e),t}(i(Error))},74:function(e,t,n){var a=n(24),r=n(25),s=n(19),o=n(18),c=n(26),i=n(27);e.exports=function(e){"use strict";function t(e){var n;return a(this,t),n=r(this,s(t).call(this,e)),Error.captureStackTrace(o(n),t),n.name=t.name,n}return c(t,e),t}(i(Error))},75:function(e,t,n){var a=n(24),r=n(25),s=n(19),o=n(18),c=n(26),i=n(27);e.exports=function(e){"use strict";function t(e){var n;return a(this,t),n=r(this,s(t).call(this,e)),Error.captureStackTrace(o(n),t),n.name=t.name,n}return c(t,e),t}(i(Error))},76:function(e,t){e.exports=function(e,t){return typeof e===t}},77:function(e,t){e.exports=function(e,t){return e instanceof t}},78:function(e,t){var n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;e.exports=function(e){return n.test(e)}},79:function(e,t,n){e.exports={arrayRandom:n(80)}},80:function(e,t){e.exports=function(){"function"!==typeof Array.prototype.random&&(Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]})}},81:function(e,t,n){var a=n(42).ContentError,r=n(43),s=r.isTypeOf,o=r.isInstanceOf,c=r.isEmail,i={typeOf:function(e,t){if(!s(t,e))throw new TypeError("".concat(t," is not a ").concat(e))},string:function(e){this.typeOf("string",e)},function:function(e){this.typeOf("function",e)},number:function(e){this.typeOf("number",e)},boolean:function(e){this.typeOf("boolean",e)},instanceOf:function(e,t){if(!o(t,e))throw TypeError("".concat(t," is not a ").concat(e.name))},array:function(e){this.instanceOf(Array,e)},email:function(e){if(!c(String(e).toLowerCase()))throw new a("".concat(e," is not an e-mail"))},matches:function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];if(!r.includes(t))throw new a("".concat(t," does not match any of the valid ").concat(e," values: ").concat(r))}};i.string.notVoid=function(e,t){if(!t.trim().length)throw new a("".concat(e," is empty or blank"))},e.exports=i},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){}},[[61,1,2]]]);
//# sourceMappingURL=main.adcc8997.chunk.js.map