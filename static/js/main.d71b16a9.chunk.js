(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(3),b=n.n(c),i=n(4),a=n(1),r=n(0),s=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,b=e.find((function(t){return t.id===n}));return Object(r.jsxs)("div",{children:[e.map((function(t){return Object(r.jsx)("button",{type:"button",onClick:function(){return c(t.id)},children:t.title})})),b&&Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),b.content]})]})},o=(n(10),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),d=function(){var t=Object(a.useState)("tab-1"),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Selected tab is ".concat(n)}),Object(r.jsx)("div",{children:"tabsFromServer.length: ".concat(o.length)}),Object(r.jsx)("hr",{}),Object(r.jsx)(s,{tabs:o,selectedTabId:n,onTabSelected:function(t){c(t)}})]})};b.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.d71b16a9.chunk.js.map