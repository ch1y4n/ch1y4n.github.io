import{h as F,r as I,c as d,S as L}from"./web.B9Ub_C9K.js";var R=t=>(u,l,s,{client:a})=>{if(!t.hasAttribute("ssr"))return;const i=a!=="only",c=i?F:I;let o,r={};if(Object.keys(s).length>0){if(a!=="only"){const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,n=>n===t?NodeFilter.FILTER_SKIP:n.nodeName==="ASTRO-SLOT"?NodeFilter.FILTER_ACCEPT:n.nodeName==="ASTRO-ISLAND"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP);for(;o=e.nextNode();)r[o.getAttribute("name")||"default"]=o}for(const[e,n]of Object.entries(s))r[e]||(r[e]=document.createElement("astro-slot"),e!=="default"&&r[e].setAttribute("name",e),r[e].innerHTML=n)}const{default:f,...E}=r,T=t.dataset.solidRenderId,N=c(()=>{const e=()=>d(u,{...l,...E,children:f});return i?d(L,{get children(){return e()}}):e()},t,{renderId:T});t.addEventListener("astro:unmount",()=>N(),{once:!0})};export{R as default};
