(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,function(t,n,e){},,,,,,function(t,n,e){},function(t,n,e){},,function(t,n,e){"use strict";e.r(n);var c=e(1),r=e.n(c),s=e(5),i=e.n(s),a=(e(10),e(11),e(2)),j=(e(4),e(0)),o=function(t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:"square",onClick:t.onClick,children:t.state})})},u=["","","","","","","","","",""],l=function(){var t=Object(c.useState)(u),n=Object(a.a)(t,2),e=n[0],r=n[1],s=Object(c.useState)(!1),i=Object(a.a)(s,2),l=i[0],b=i[1],O=function(t){var n=Array.from(e);n[t]=l?"X":"O",r(n),b(!l)};Object(c.useEffect)((function(){var t=f();t&&(alert("Winner ".concat(t)),r(u))}),[e]);var f=function(){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(a.a)(t[n],3),r=c[0],s=c[1],i=c[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return e[r]}return null};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("p",{children:"Tic tac toe"}),Object(j.jsxs)("div",{className:"row jc-content",children:[Object(j.jsx)(o,{state:e[0],onClick:function(){return O(0)}}),Object(j.jsx)(o,{state:e[1],onClick:function(){return O(1)}}),Object(j.jsx)(o,{state:e[2],onClick:function(){return O(2)}})]}),Object(j.jsxs)("div",{className:"row jc-content",children:[Object(j.jsx)(o,{state:e[3],onClick:function(){return O(3)}}),Object(j.jsx)(o,{state:e[4],onClick:function(){return O(4)}}),Object(j.jsx)(o,{state:e[5],onClick:function(){return O(5)}})]}),Object(j.jsxs)("div",{className:"row jc-content",children:[Object(j.jsx)(o,{state:e[6],onClick:function(){return O(6)}}),Object(j.jsx)(o,{state:e[7],onClick:function(){return O(7)}}),Object(j.jsx)(o,{state:e[8],onClick:function(){return O(8)}})]}),Object(j.jsx)("button",{className:"btn-style",onClick:function(){return r(u)},children:"Clear Game"})]})})};var b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l,{})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.2dee6cbf.chunk.js.map