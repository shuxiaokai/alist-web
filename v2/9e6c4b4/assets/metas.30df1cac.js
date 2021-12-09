var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{j as o,h as c,R as m,E as i,r as p,s as d,k as u,v as E,ao as h,ap as b,aq as f,ar as C,as as O,at as g,M as j,G as y,J as w,K as v,N as k,O as S,V as x,Q as P}from"./vendor.cc756816.js";import{a as q}from"./index.153c9be1.js";import{F}from"./form-item.daa0d2e2.js";import"./index.dfc2e03d.js";import"./index.c53992a6.js";import"./index.esm.77356c16.js";import"./useTitle.ba04131e.js";const z={path:"",password:"",hide:""},D=()=>{const e=o(),{t:D}=c(),[G,H]=m.useState([]),[I,J]=m.useState(z),[K,L]=m.useState(!1),[M,N]=m.useState(!1),Q=i(),R=()=>{N(!0),q.get("metas").then((t=>{N(!1);const a=t.data;200!==a.code?e({title:D(a.message),status:"error",duration:3e3,isClosable:!0}):H(a.data)}))};return p.exports.useEffect((()=>{R()}),[]),m.createElement(d,{w:"full"},m.createElement(u,null,m.createElement(E,{onClick:()=>{J(z),L(!1),Q.onOpen()}},D("add")),m.createElement(E,{colorScheme:"orange",isLoading:M,onClick:()=>{R()}},D("refresh"))),m.createElement(d,{overflowX:"auto"},m.createElement(h,{w:"full"},m.createElement(b,null,m.createElement(f,null,m.createElement(C,null,D("path")),m.createElement(C,null,D("password")),m.createElement(C,null,D("hide")),m.createElement(C,null,D("operation")))),m.createElement(O,null,G.map((t=>m.createElement(f,{key:t.path},m.createElement(g,null,t.path),m.createElement(g,null,t.password),m.createElement(g,null,t.hide),m.createElement(g,null,m.createElement(E,{onClick:()=>{J(t),L(!0),Q.onOpen()}},D("edit")),m.createElement(E,{colorScheme:"red",ml:"1",onClick:()=>{q.delete("meta",{params:{path:t.path}}).then((t=>{const a=t.data;200!==a.code?e({title:D(a.message),status:"error",duration:3e3,isClosable:!0}):(e({title:D(a.message),status:"success",duration:3e3,isClosable:!0}),R())}))}},D("delete"))))))))),m.createElement(j,{isOpen:Q.isOpen,onClose:Q.onClose,size:"6xl"},m.createElement(y,null),m.createElement(w,null,m.createElement(v,null,D("add")+" / "+D("save")),m.createElement(k,null),m.createElement(S,{pb:6},m.createElement(x,{spacing:"2"},[{name:"path",description:"Path"},{name:"password",description:"Password"},{name:"hide",description:"Hide Files(split by ,)"}].map((e=>m.createElement(F,{key:e.name,label:e.name,type:"string",description:e.description,value:I[e.name],required:"path"===e.name,readOnly:K&&"path"===e.name,onChange:o=>{var c,m;J((c=((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&r(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&r(e,a,t[a]);return e})({},I),m={[e.name]:o},t(c,a(m))))}}))))),m.createElement(P,null,m.createElement(E,{colorScheme:"blue",mr:3,onClick:()=>{q.post("meta",I).then((t=>{const a=t.data;200!==a.code?e({title:D(a.message),status:"error",duration:3e3,isClosable:!0}):(e({title:D(a.message),status:"success",duration:3e3,isClosable:!0}),R(),Q.onClose())}))}},D("save")),m.createElement(E,{onClick:Q.onClose},D("cancle"))))))};export{D as default};