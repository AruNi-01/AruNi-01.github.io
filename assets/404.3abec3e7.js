import{C as i}from"./Common.ab4f97db.js";import{_ as p,f as d,u as h,r as f,o as g,g as v,w as _,b as e,t as o,a as x,e as B,h as C}from"./app.9901ce19.js";const F={class:"not-found-wrapper"},k={class:"emoji"},A=d({__name:"404",setup(D){var n,u;const t=h(),a=(n=t.value.notFound)!=null?n:["Not Found"],r=()=>a[Math.floor(Math.random()*a.length)],c=(u=t.value.backToHome)!=null?u:"$ cd /home/",s=["\\(o_o)/","(o^^)o","(\u02DA\u0394\u02DA)b","(^-^*)","(^_^)b","(\u256F\u2035\u25A1\u2032)\u256F","(='X'=)","(>_<)","\\(\xB0\u02CA\u0414\u02CB\xB0)/","\u311F(\u2594\u25BD\u2594)\u310F"],l=()=>s[Math.floor(Math.random()*s.length)];return(M,b)=>{const m=f("RouterLink");return g(),v(i,null,{page:_(()=>[e("div",F,[e("p",k,o(l()),1),e("h1",null,"404 - "+o(r()),1),x(m,{to:"/"},{default:_(()=>[B(o(C(c)),1)]),_:1})])]),_:1})}}});var N=p(A,[["__file","404.vue"]]);export{N as default};
