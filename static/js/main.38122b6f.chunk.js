(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{25:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(17),r=a.n(s),i=(a(25),a(7)),u=a.n(i),j=a(18),b=a(4),o=(a(8),a(19)),l=a.n(o),d=a(0),m=function(t){var e=t.user;return Object(d.jsxs)("div",{className:"dib tc ma4 br3 pa3 ba card",children:[Object(d.jsx)("img",{src:e.avatar,className:"card-img-top",alt:e.first_name}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h5",{className:"card-title",children:[e.first_name,e.last_name]}),Object(d.jsxs)("p",{className:"card-subtitle mb-2 text-muted",children:["Email: ",e.email]})]})]})},p=function(t){return t.users.map((function(t){return Object(d.jsx)(m,{user:t},t.id)}))},O=a(20),f=function(t){var e=t.totalpages,a=t.handleClick,n=Object(O.a)(Array(e).keys()).map((function(t){return t+1}));return Object(d.jsx)("div",{className:"container text-center",children:n.map((function(t){return Object(d.jsx)("button",{className:"btn btn-success btn-sm m-1",onClick:function(){return a(t)},children:t},t)}))})};var h=function(){var t=Object(n.useState)([]),e=Object(b.a)(t,2),a=e[0],c=e[1],s=Object(n.useState)(!1),r=Object(b.a)(s,2),i=r[0],o=r[1],m=Object(n.useState)(1),O=Object(b.a)(m,2),h=O[0],x=O[1],g=Object(n.useState)(0),v=Object(b.a)(g,2),N=v[0],k=v[1];return Object(n.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,l.a.get("https://reqres.in/api/users?page=".concat(h));case 3:e=t.sent,o(!1),c(e.data.data),k(e.data.total_pages);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[h]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"",children:"Pagination"}),i?Object(d.jsx)("p",{children:"Loading..."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{users:a,page:h}),Object(d.jsx)(f,{totalpages:N,handleClick:function(t){x(t)}})]})]})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))},8:function(t,e,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.38122b6f.chunk.js.map