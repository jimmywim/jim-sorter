(this["webpackJsonpjim-sorter"]=this["webpackJsonpjim-sorter"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(6),a=n.n(r),s=(n(12),n(7)),o=n(2),l=(n(13),n(0));function u(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:e.title}),e.showItems?e.items.map((function(e,t){return Object(l.jsxs)("div",{children:[e.name," (",e.rank,")"]},t)})):Object(l.jsx)("div",{children:"Items hidden until game complete"})]})}function j(e){var t=c.a.useState(-300),n=Object(o.a)(t,2),i=n[0],r=n[1],a=c.a.useState(""),s=Object(o.a)(a,2),u=s[0],j=s[1],d=function(){r(-300)};return Object(l.jsxs)("div",{children:[!i<=0&&Object(l.jsx)("button",{onClick:function(){r(0)},children:"Set Items to Rank"}),0===i&&Object(l.jsxs)("div",{style:{width:"300px",height:"100%",position:"absolute",left:i.toString()+"px",top:"0",border:"1px solid black",padding:"20px 0px"},children:[Object(l.jsx)("div",{children:"Paste a new-line seperate list of items below"}),Object(l.jsx)("textarea",{rows:30,style:{width:"95%"},onChange:function(e){j(e.target.value)},value:u}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){d(),e.itemsSelected(u.split(/\r?\n/))},children:"OK"}),Object(l.jsx)("button",{onClick:d,children:"Cancel"})]})]})]})}n(15);function d(e){return Object(l.jsx)("div",{className:"rankerContainer",children:e.contestItems?Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("div",{className:"rankTile",onClick:function(){return e.onItem1Click()},children:Object(l.jsx)("span",{children:e.contestItems[0].name})}),Object(l.jsx)("div",{className:"rankTile",onClick:function(){return e.onItem2Click()},children:Object(l.jsx)("span",{children:e.contestItems[1].name})})]}):Object(l.jsx)("div",{className:"startButton",onClick:e.onStart,children:"Start!"})})}var m=[{name:"Item 1",rank:0},{name:"Item 2",rank:0},{name:"Item 3",rank:0},{name:"Item 4",rank:0},{name:"Item 5",rank:0},{name:"Item 6",rank:0},{name:"Item 7",rank:0}];function h(e,t){return Math.floor(Math.random()*(t-e+1))+e}var b=function(){var e=c.a.useState(null),t=Object(o.a)(e,2),n=t[0],i=t[1],r=c.a.useState(!1),a=Object(o.a)(r,2),b=a[0],f=a[1],x=c.a.useState(m),O=Object(o.a)(x,2),p=O[0],k=O[1],v=c.a.useState([]),g=Object(o.a)(v,2),I=g[0],C=g[1],S=function e(){if(!b)if(I.length>=w())f(!0);else{var t=p.sort((function(e,t){return e.rank-t.rank})).reverse(),n=h(0,p.length-1),c=h(0,p.length-1);if(n===c)return e();var r,a,o=t[n],l=t[c],u=(r=[o,l],a="name",r.slice(0).sort((function(e,t){return e[a]>t[a]?1:e[a]<t[a]?-1:0}))).map((function(e){return e.name})).join("-");console.log("Contest: ",u);var j=[o,l];if(y(u))return console.log("Contest has already been run"),e();C([].concat(Object(s.a)(I),[u])),i(j)}},w=function(){return(p.length-1)*p.length/2},y=function(e){return I.filter((function(t){return t===e})).length>0};return Object(l.jsxs)("div",{className:"App",style:{width:"100%",margin:"0 auto"},children:[Object(l.jsxs)("div",{children:["Game: ",I.length," / ",w()]}),Object(l.jsx)(j,{itemsSelected:function(e){var t=e.map((function(e){return{name:e,rank:0}}));k(t),i(null),C([]),f(!1)}}),b&&Object(l.jsx)("div",{children:"Game complete!"}),Object(l.jsxs)("section",{style:{display:"flex",flexDirection:"column",width:"800px",height:"800px",margin:"0 auto",paddingTop:"20px"},children:[!b&&Object(l.jsx)(d,{contestItems:n,onStart:S,onItem1Click:function(){n[0].rank++,S()},onItem2Click:function(){n[1].rank++,S()}}),Object(l.jsx)(u,{items:p,title:"The List",showItems:b})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.ba7f6a70.chunk.js.map