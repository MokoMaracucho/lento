(this["webpackJsonplento-eu"]=this["webpackJsonplento-eu"]||[]).push([[0],{21:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),r=n(14),o=n.n(r),s=(n(21),n(16)),u=n(15),a=n.n(u),j=n(0),d=Object(c.memo)((function(t){return Object(j.jsx)(j.Fragment,{children:t.data.map((function(t,e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:t.vheId}),Object(j.jsx)("div",{children:t.vheName})]},e)}))})})),h=function(t){var e=Object(c.useState)([]),n=Object(s.a)(e,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){a.a.get("http://localhost:8080/vhe/vhes_list").then((function(t){console.log(t);var e=t.data;r(e)}))}),[]),i?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(d,{data:i})}):null},l=(n(41),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h,{})})}),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.61b25de2.chunk.js.map