(this["webpackJsonpveve-sets"]=this["webpackJsonpveve-sets"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(7),o=n.n(i),s=(n(32),n(33),n(27)),l=n(16),a=n(25),d=n.n(a),j=n(26),u=n(1);var b=function(e){return e.field===e.sortConfig.key?Object(u.jsx)("span",{style:{"margin-left":3},children:(t=e.sortConfig.direction,"ascending"===t?Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-up-circle",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"})}):Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down-circle",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})}))}):null;var t};var h=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({field:"total",direction:"ascending"}),o=Object(l.a)(i,2),a=o[0],h=o[1];function f(e,t){return"ascending"===t?function(t,n){return t[e]-n[e]}:function(t,n){return n[e]-t[e]}}function g(e,t){return"ascending"===t?function(t,n){return t[e].localeCompare(n[e])}:function(t,n){return n[e].localeCompare(t[e])}}function O(e,t){return"ascending"===t?function(t,n){return t[e].getTime()-n[e].getTime()}:function(t,n){return n[e].getTime()-t[e].getTime()}}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,c="ascending";a.key===e&&"ascending"===a.direction&&(c="descending");var i=Object(s.a)(n);i.sort(t(e,c)),h({key:e,direction:c}),r(i)}Object(c.useEffect)((function(){console.log("fetching data");d.a.get("https://cmar.github.io/veve-price-scraper/current.json").then((function(e){var t=e.data.filter((function(e){return e.collectibles})).map((function(e){return e.date=new Date(e.date),e.collectiblesCount=e.collectibles.length,e}));t.sort((function(e,t){return e.total-t.total}));h({key:"total",direction:"ascending"}),r(t)})).catch((function(e){console.log(e)}))}),[]);var m=n.map((function(e,t){var n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.total),c=e.date.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"});return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.season}),Object(u.jsx)("td",{children:c}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.collectiblesCount}),Object(u.jsx)("td",{children:n})]},t)}));return Object(u.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("th",{onClick:function(e){return x("season")},children:["Season",Object(u.jsx)(b,{sortConfig:a,field:"season"})]}),Object(u.jsxs)("th",{onClick:function(e){return x("date",O)},children:["Drop",Object(u.jsx)(b,{sortConfig:a,field:"date"})]}),Object(u.jsxs)("th",{onClick:function(e){return x("name",g)},children:["Set",Object(u.jsx)(b,{sortConfig:a,field:"name"})]}),Object(u.jsxs)("th",{onClick:function(e){return x("collectiblesCount")},children:["Collectibles",Object(u.jsx)(b,{sortConfig:a,field:"collectiblesCount"})]}),Object(u.jsxs)("th",{onClick:function(e){return x("total")},children:["Price",Object(u.jsx)(b,{sortConfig:a,field:"total"})]})]})}),Object(u.jsx)("tbody",{children:m})]})},f=n(14),g=n(15);var O=function(){return Object(u.jsxs)(f.a,{children:[Object(u.jsx)(g.a,{className:"navbar-dark bg-primary mb-3",children:Object(u.jsx)(f.a,{children:Object(u.jsx)(g.a.Brand,{href:"#home",children:Object(u.jsx)("h3",{children:"VeVe Setlist"})})})}),Object(u.jsx)(h,{}),Object(u.jsxs)("p",{children:["Data provided by ",Object(u.jsx)("a",{href:"https://ecomiwiki.com/marketplace/floors",children:"ECOMI WIKI"})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};n(56);o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}},[[57,1,2]]]);
//# sourceMappingURL=main.9eebe51d.chunk.js.map