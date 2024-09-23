import{r as f}from"./index.DhYZZe0J.js";var c={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=f,u=Symbol.for("react.element"),m=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,x=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function p(o,e,s){var r,t={},n=null,l=null;s!==void 0&&(n=""+s),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)h.call(e,r)&&!_.hasOwnProperty(r)&&(t[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:u,type:o,key:n,ref:l,props:t,_owner:x.current}}a.Fragment=m;a.jsx=p;a.jsxs=p;c.exports=a;var i=c.exports;const w=()=>{const o=()=>{navigator.share?navigator.share({title:"Mi Página de Contacto",url:window.location.href}).then(()=>console.log("Página compartida con éxito!")).catch(e=>console.error("Error al compartir:",e)):(alert("Copiado el enlace: "+window.location.href),navigator.clipboard.writeText(window.location.href))};return i.jsx("div",{className:"absolute top-4 right-4",children:i.jsxs("button",{onClick:o,className:"flex items-center bg-blue-500 text-white px-3 py-2 rounded shadow hover:bg-blue-600",children:[i.jsx("i",{className:"fas fa-share-alt mr-2"}),"Compartir"]})})};export{w as default};
