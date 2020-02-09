(this["webpackJsonptasks-app"]=this["webpackJsonptasks-app"]||[]).push([[0],{10:function(e,t,n){e.exports={errors:n(42),validators:n(43),polyfills:n(79),validate:n(81)}},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),o=n.n(s),c=n(1),i=n.n(c),u=n(2),l=n(4),p=n(13),f=(n(67),n(68),function(e){var t=e.message;return r.a.createElement("p",{className:"feedback"},t)}),m=n(10).validate,d="http://localhost:8000";function h(){return(h=Object(u.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.string(t),m.string.notVoid("username",t),m.string(n),m.string.notVoid("password",n),e.next=6,fetch("".concat(d,"/users/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 6:return a=e.sent,e.next=9,a.json();case 9:if(r=e.sent,!a.ok){e.next=14;break}return e.abrupt("return",r.token);case 14:throw new Error(r.message);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=n(10).validate,b="http://localhost:8000";function g(){return(g=Object(u.a)(i.a.mark((function e(t,n,a,r,s){var o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.string(t),k.string.notVoid("name",t),k.string(n),k.string.notVoid("surname",n),k.string(a),k.string.notVoid("e-mail",a),k.email(a),k.string(r),k.string.notVoid("username",r),k.string(s),k.string.notVoid("password",s),e.next=13,fetch("".concat(b,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,surname:n,email:a,username:r,password:s})});case 13:return o=e.sent,e.next=16,o.text();case 16:if(c=e.sent,!o.ok){e.next=21;break}return e.abrupt("return");case 21:throw new Error(c.message);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(10).validate,v="http://localhost:8000";function x(){return(x=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.string(t),E.string.notVoid("token",t),e.next=4,fetch("".concat(v,"/users"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 4:return n=e.sent,e.next=7,n.json();case 7:if(a=e.sent,!n.ok){e.next=12;break}return e.abrupt("return",a.user);case 12:throw new Error(a.message);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(10).validate,w="http://localhost:8000";function _(){return(_=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.string(t),y.string.notVoid("token",t),e.next=4,fetch("".concat(w,"/columns"),{method:"GET",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:if(a=e.sent,!n.ok){e.next=12;break}return e.abrupt("return",a.columns);case 12:throw new Error(a.message);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=n(10).validate,j="http://localhost:8000";function N(){return(N=Object(u.a)(i.a.mark((function e(t,n,a){var r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O.string(t),O.string.notVoid("token",t),O.string(n),O.string.notVoid("status",n),O.string(a),O.string.notVoid("title",a),e.next=8,fetch("".concat(j,"/tasks"),{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({status:n,title:a})});case 8:return r=e.sent,e.next=11,r.json();case 11:if(s=e.sent,!r.ok){e.next=16;break}return e.abrupt("return",s.task);case 16:throw new Error(s.message);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=n(10).validate,C="http://localhost:8000";function S(){return(S=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T.string(t),T.string.notVoid("token",t),e.next=4,fetch("".concat(C,"/columns"),{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.text();case 7:if(a=e.sent,!n.ok){e.next=12;break}return e.abrupt("return");case 12:throw new Error(a.message);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=n(10).validate,A="http://localhost:8000";function B(){return(B=Object(u.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V.string(t),V.string.notVoid("token",t),e.next=4,fetch("".concat(A,"/columns"),{method:"PUT",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({column:n})});case 4:return a=e.sent,e.next=7,a.text();case 7:if(r=e.sent,!a.ok){e.next=12;break}return e.abrupt("return");case 12:throw new Error(r.message);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=n(10).validate,D="http://localhost:8000";function L(){return(L=Object(u.a)(i.a.mark((function e(t,n,a){var r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.string(t),I.string.notVoid("token",t),I.string(n),I.string.notVoid("task id",n),I.string(a),I.string.notVoid("status",a),e.next=8,fetch("".concat(D,"/tasks/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({status:a})});case 8:return r=e.sent,e.next=11,r.text();case 11:if(s=e.sent,!r.ok){e.next=16;break}return e.abrupt("return");case 16:throw new Error(s.message);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=n(10).validate,z="http://localhost:8000";function F(){return(F=Object(u.a)(i.a.mark((function e(t,n,a){var r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.string(t),P.string.notVoid("token",t),P.string(n),P.string.notVoid("task id",n),P.string(a),P.string.notVoid("newTitle",a),e.next=8,fetch("".concat(z,"/tasks/").concat(n),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({newTitle:a})});case 8:return r=e.sent,e.next=11,r.text();case 11:if(s=e.sent,!r.ok){e.next=16;break}return e.abrupt("return");case 16:throw new Error(s.message);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e,t){return h.apply(this,arguments)},K=function(e){return x.apply(this,arguments)},R=function(e){return _.apply(this,arguments)},M=function(e,t,n){return N.apply(this,arguments)},G=function(e){return S.apply(this,arguments)},H=function(e,t){return B.apply(this,arguments)},W=function(e,t,n){return L.apply(this,arguments)},Z=function(e,t,n){return F.apply(this,arguments)},$=function(e,t,n,a,r){return g.apply(this,arguments)},U=Object(p.f)((function(e){var t=e.onBack,n=e.history,s=Object(a.useState)(),o=Object(l.a)(s,2),c=o[0],p=o[1];function m(){return(m=Object(u.a)(i.a.mark((function e(t,a,r,s,o){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$(t,a,r,s,o);case 3:n.push("/login"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c=e.t0.message,p(c);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"login-title"},r.a.createElement("h1",null,"Kanban")),r.a.createElement("section",{className:"register"},r.a.createElement("h2",{className:"register__title"},"Please, introduce your details"),r.a.createElement("form",{className:"register__form",onSubmit:function(e){e.preventDefault();var t=e.target;!function(e,t,n,a,r){m.apply(this,arguments)}(t.name.value,t.surname.value,t.email.value,t.username.value,t.password.value)}},r.a.createElement("input",{className:"form__input",type:"text",name:"name",placeholder:"name"}),r.a.createElement("input",{className:"form__input",type:"text",name:"surname",placeholder:"surname"}),r.a.createElement("input",{className:"form__input",type:"text",name:"email",placeholder:"email"}),r.a.createElement("input",{className:"form__input",type:"username",name:"username",placeholder:"username"}),r.a.createElement("input",{className:"form__input",type:"password",name:"password",placeholder:"password"}),r.a.createElement("button",{className:"form__button form__button--register"},"Create account"),r.a.createElement("button",{type:"button",className:"form__button form__button--register-back",onClick:function(e){e.preventDefault(),t()}},"Go back")),c&&r.a.createElement(f,{message:c})))})),q=(n(86),J),Q=Object(p.f)((function(e){e.onBack;var t=e.history,n=Object(a.useState)(),s=Object(l.a)(n,2),o=s[0],c=s[1];function p(){return(p=Object(u.a)(i.a.mark((function e(n,a){var r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(n,a);case 3:r=e.sent,sessionStorage.token=r,t.push("/tasks"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),s=e.t0.message,c(s);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"login-title"},r.a.createElement("h1",null,"Kanban")),r.a.createElement("section",{className:"landing"},r.a.createElement("h2",{className:"landing__title"},"Login to enter"),r.a.createElement("form",{className:"landing__form",onSubmit:function(e){e.preventDefault();var t=e.target;!function(e,t){p.apply(this,arguments)}(t.username.value,t.password.value)}},r.a.createElement("input",{className:"form__input",type:"text",name:"username",placeholder:"username"}),r.a.createElement("input",{className:"form__input",type:"password",name:"password",placeholder:"password"}),r.a.createElement("button",{type:"submit",className:"form__button form__button--login"},"Login"),r.a.createElement("button",{type:"button",className:"form__button form__button--register",onClick:function(e){e.preventDefault(),t.push("/register")}},r.a.createElement("a",{href:""},"Create account"))),o&&r.a.createElement(f,{message:o})))})),X=n(60),Y=n(18),ee=(n(87),n(88),n(89),function(e){var t=e.status,n=e.title,s=e.modifier,o=e.index,c=e.id,i=e.onDeleteTask,u=e.onEditTask,p=Object(a.useState)(!1),f=Object(l.a)(p,2),m=f[0],d=f[1],h=Object(a.useState)(n),k=Object(l.a)(h,2),b=k[0],g=k[1];function E(){d(!1)}function v(){n!==b&&u(c,b)}Object(a.useEffect)((function(){m&&x.current.focus()}),[m]);var x=Object(a.useRef)(null);return function(e){function t(t){e.current&&!e.current.contains(t.target)&&"delete"!==t.target.getAttribute("name")&&(v(),E())}Object(a.useEffect)((function(){return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}))}(x),r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.b,{draggableId:c,index:o},(function(e){return r.a.createElement(r.a.Fragment,null,!m&&r.a.createElement("li",Object.assign({className:"task"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onClick:function(){d(!0)}}),r.a.createElement("h3",{className:"task__title task__title--".concat(s)},n)))})),m&&r.a.createElement("li",{className:"task task__edit-mode task__edit-mode--".concat(s)},r.a.createElement("input",{type:"text",className:"item__input task__title--".concat(s),value:b,onKeyDown:function(e){"Enter"===e.key&&(v(),E())},onChange:function(e){g(e.target.value)},ref:x}),r.a.createElement("i",{name:"delete",className:"material-icons item__delete",onClick:function(){i(c,t),E()}},"clear")))}),te=(n(125),Object(p.f)((function(e){var t=e.history,n=e.message,a=(e.onBack,e.tasks),s=e.status,o=e.onDeleteTask,c=e.toggleEmptyTrashMode;return r.a.createElement("section",{className:"modal"},r.a.createElement("div",{className:"modal__container"},r.a.createElement("div",{className:"modal__message"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"modal__button-container"},r.a.createElement("button",{className:"modal__button modal__button--cancel",onClick:function(){t.push("/tasks"),c()}},"Cancel"),r.a.createElement("button",{className:"modal__button modal__button--confirm",onClick:function(){a.forEach((function(e){return o(e._id,s)})),c()}},"Confirm"))))}))),ne=M,ae=function(e){var t=e.status,n=e.index,s=e.tasks,o=e.onCreateNewTask,c=e.onDeleteTask,p=e.onEditTask,f=e.onBack,m=t.toLowerCase(),d=sessionStorage.token,h=Object(a.useState)(!1),k=Object(l.a)(h,2),b=k[0],g=k[1],E=Object(a.useState)(null),v=Object(l.a)(E,2),x=v[0],y=v[1],w=Object(a.useState)(!1),_=Object(l.a)(w,2),O=_[0],j=_[1],N=s.length>0?"All done notes are going to be deleted, do you want to confirm?":"There is nothing to delete.";function T(){return(T=Object(u.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==n.key||!b){e.next=9;break}if(!x&&g(!1),!x){e.next=7;break}return e.next=5,ne(d,t,x);case 5:a=e.sent,o(a,t);case 7:g(!1),y(null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){y(null),b&&C.current.focus()}),[b]);var C=Object(a.useRef)(null);function S(e){e&&e.stopPropagation(),j(!O)}return function(e){function n(e){return r.apply(this,arguments)}function r(){return(r=Object(u.a)(i.a.mark((function n(a){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!b||!e.current||e.current.contains(a.target)){n.next=9;break}if(!x&&g(!1),!x){n.next=7;break}return n.next=5,ne(d,t,x);case 5:r=n.sent,o(r,t);case 7:g(!1),y(null);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(a.useEffect)((function(){return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}))}(C),r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"tasks__column tasks__column-".concat(m)},r.a.createElement("h2",{className:"tasks__title"},t),r.a.createElement("ul",{className:"tasks__task"},r.a.createElement("li",{className:"task task__add task__add--".concat(m),onClick:function(){g(!0)}},r.a.createElement("h3",{className:"task__title"},"+ Add new card"),"DONE"===t&&r.a.createElement("i",{className:"material-icons trash",onClick:S,title:"Empty notes"},"delete_outline")),b&&r.a.createElement("li",{className:"task task--".concat(m)},r.a.createElement("input",{type:"text",className:"task__title task__title--".concat(m," task__new"),placeholder:"Enter a title for this card",onChange:function(e){var t=e.target.value;y(t)},ref:C,onKeyDown:function(e){return T.apply(this,arguments)}})),r.a.createElement(Y.c,{droppableId:t,index:n},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),s&&s.map((function(e,n){return r.a.createElement(ee,{status:t,key:e._id,title:e.title,modifier:m,index:n,id:e._id,onDeleteTask:c,onEditTask:p})})),e.placeholder)})))),O&&r.a.createElement(te,{onBack:f,tasks:s,status:t,onDeleteTask:c,toggleEmptyTrashMode:S,message:N}))},re=R,se=H,oe=G,ce=W,ie=Z,ue=function(e){e.user;var t=e.onLogout,n=e.onBack,s=sessionStorage.token,o=Object(a.useState)(),c=Object(l.a)(o,2),p=c[0],f=c[1],m=Object(a.useState)(!1),d=Object(l.a)(m,2),h=d[0],k=d[1];function b(){return(b=Object(u.a)(i.a.mark((function e(t){var n,a,r,o,c,u,l,m,d,h,b,g,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.destination,a=t.source,t.draggableId,k(!1),n){e.next=4;break}return e.abrupt("return");case 4:if(n.droppableId!==a.droppableId||n.index!==a.index){e.next=6;break}return e.abrupt("return");case 6:if(r=p.filter((function(e){return e.status===a.droppableId})),o=p.filter((function(e){return e.status===n.droppableId})),c=Object(X.a)(p),r[0].id!==o[0].id){e.next=20;break}return u=p.findIndex((function(e){return e.status===a.droppableId})),l=Array.from(r[0].tasks),m=l.splice(a.index,1),l.splice(n.index,0,m[0]),c[u].tasks=l,f(c),e.next=18,se(s,c[u]);case 18:return k(!0),e.abrupt("return");case 20:return d=p.findIndex((function(e){return e.status===a.droppableId})),h=Array.from(r[0].tasks),b=h.splice(a.index,1),g=p.findIndex((function(e){return e.status===n.droppableId})),(E=Array.from(o[0].tasks)).splice(n.index,0,b[0]),c[d].tasks=h,c[g].tasks=E,f(c),e.next=31,se(s,c[d]);case 31:return e.next=33,se(s,c[g]);case 33:k(!0);case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){var n=p.findIndex((function(e){return e.status===t}));p[n].tasks.push(e),f(p)}function E(e,t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce(s,t,n);case 3:k(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function x(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie(s,t,n);case 3:k(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(s);case 2:return e.next=4,re(s);case 4:t=e.sent,f(t),k(!1);case 7:case"end":return e.stop()}}),e)})))()}),[h]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Kanban"),r.a.createElement("h2",{onClick:t},"Logout"),r.a.createElement("i",{onClick:t,className:"fas fa-sign-out-alt"})),r.a.createElement("main",null,r.a.createElement(Y.a,{onDragEnd:function(e){return b.apply(this,arguments)}},r.a.createElement("ul",{className:"tasks"},p&&p.sort((function(e,t){return e.index-t.index})).map((function(e,t){return r.a.createElement(ae,{key:e.status,status:e.status,index:t,tasks:e.tasks,onCreateNewTask:g,onDeleteTask:E,onEditTask:x,onBack:n})}))))))},le=K,pe=Object(p.f)((function(e){var t=e.history,n=Object(a.useState)(),s=Object(l.a)(n,2),o=s[0],c=s[1];Object(a.useEffect)((function(){Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=6;break}return e.next=3,le(f);case 3:t=e.sent,n=t.name,c(n);case 6:case"end":return e.stop()}}),e)})))()}),[sessionStorage.token]);var f=sessionStorage.token;function m(){t.push("/")}return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(Q,{onBack:m})}}),r.a.createElement(p.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(Q,{onBack:m})}}),r.a.createElement(p.b,{path:"/register",render:function(){return r.a.createElement(U,{onBack:m})}}),r.a.createElement(p.b,{path:"/tasks"},f?r.a.createElement(ue,{user:o,onLogout:function(){sessionStorage.clear(),m()},onBack:m}):r.a.createElement(p.a,{to:"/"})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=n(16);o.a.render(r.a.createElement(fe.a,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},42:function(e,t,n){e.exports={ConflictError:n(69),ContentError:n(73),CredentialsError:n(74),NotFoundError:n(75)}},43:function(e,t,n){e.exports={isTypeOf:n(76),isInstanceOf:n(77),isEmail:n(78)}},61:function(e,t,n){e.exports=n(126)},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){var a=n(24),r=n(25),s=n(20),o=n(19),c=n(26),i=n(27);e.exports=function(e){"use strict";function t(e){var n;return a(this,t),n=r(this,s(t).call(this,e)),Error.captureStackTrace(o(n),t),n.name=t.name,n}return c(t,e),t}(i(Error))},73:function(e,t,n){var a=n(24),r=n(25),s=n(20),o=n(19),c=n(26),i=n(27);e.exports=function(e){"use strict";function t(e){var n;return a(this,t),n=r(this,s(t).call(this,e)),Error.captureStackTrace(o(n),t),n.name=t.name,n}return c(t,e),t}(i(Error))},74:function(e,t,n){var a=n(24),r=n(25),s=n(20),o=n(19),c=n(26),i=n(27);e.exports=function(e){"use strict";function t(e){var n;return a(this,t),n=r(this,s(t).call(this,e)),Error.captureStackTrace(o(n),t),n.name=t.name,n}return c(t,e),t}(i(Error))},75:function(e,t,n){var a=n(24),r=n(25),s=n(20),o=n(19),c=n(26),i=n(27);e.exports=function(e){"use strict";function t(e){var n;return a(this,t),n=r(this,s(t).call(this,e)),Error.captureStackTrace(o(n),t),n.name=t.name,n}return c(t,e),t}(i(Error))},76:function(e,t){e.exports=function(e,t){return typeof e===t}},77:function(e,t){e.exports=function(e,t){return e instanceof t}},78:function(e,t){var n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;e.exports=function(e){return n.test(e)}},79:function(e,t,n){e.exports={arrayRandom:n(80)}},80:function(e,t){e.exports=function(){"function"!==typeof Array.prototype.random&&(Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]})}},81:function(e,t,n){var a=n(42).ContentError,r=n(43),s=r.isTypeOf,o=r.isInstanceOf,c=r.isEmail,i={typeOf:function(e,t){if(!s(t,e))throw new TypeError("".concat(t," is not a ").concat(e))},string:function(e){this.typeOf("string",e)},function:function(e){this.typeOf("function",e)},number:function(e){this.typeOf("number",e)},boolean:function(e){this.typeOf("boolean",e)},instanceOf:function(e,t){if(!o(t,e))throw TypeError("".concat(t," is not a ").concat(e.name))},array:function(e){this.instanceOf(Array,e)},email:function(e){if(!c(String(e).toLowerCase()))throw new a("".concat(e," is not an e-mail"))},matches:function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];if(!r.includes(t))throw new a("".concat(t," does not match any of the valid ").concat(e," values: ").concat(r))}};i.string.notVoid=function(e,t){if(!t.trim().length)throw new a("".concat(e," is empty or blank"))},e.exports=i},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){}},[[61,1,2]]]);
//# sourceMappingURL=main.01828123.chunk.js.map