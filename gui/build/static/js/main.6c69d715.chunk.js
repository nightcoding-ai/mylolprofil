(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{10:function(e,a,t){},24:function(e,a,t){e.exports=t(40)},29:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(21),r=t.n(c),s=t(13),o=(t(29),t(6)),i=["btn--classic","btn--connect"],m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,s=i.includes(c)?c:i[0],u=m.includes(r)?r:m[0];return l.a.createElement(o.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(35);var E=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),i=Object(s.a)(r,2),m=i[0],E=i[1],b=function(){return c(!1)},p=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement("img",{alt:"",src:"/images/icon.png",className:"logo"}),l.a.createElement(o.b,{to:"/",className:"navbar-title",onClick:b},"Azakana"),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/statistiques",className:"nav-links",onClick:b},"Statistiques")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/team",className:"nav-links",onClick:b},"Equipe")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/patch-notes",className:"nav-links",onClick:b},"Notes de patch")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/champions",className:"nav-links",onClick:b},"Champions")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/e-sport",className:"nav-links",onClick:b},"E-sport")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/sign-up",className:"nav-links-mobile",onClick:b},"Connexion"))),m&&l.a.createElement(u,{buttonStyle:"btn--connect"},"Connexion"))))};t(10),t(36);var b=function(){return l.a.createElement("div",{className:"mid-container"},l.a.createElement("video",{src:"/videos/yone-fanart-login-screen-animation-loop-league-of-legends.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("div",{className:"search"},l.a.createElement("select",{className:"servers"},l.a.createElement("option",{value:"NA"},"NA"),l.a.createElement("option",{value:"EUW"},"EUW"),l.a.createElement("option",{value:"EUNA"},"EUNA"),l.a.createElement("option",{value:"TU"},"TU"),l.a.createElement("option",{value:"JP"},"JP"),l.a.createElement("option",{value:"OC"},"OC")),l.a.createElement("label",{for:"summoner"}),l.a.createElement("input",{type:"search",id:"site-search",className:"input","aria-label":"Search through site content",placeholder:"Ton pseudo"}),l.a.createElement("button",{className:"Research"},"Rechercher")))};t(37);var p=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(o.b,{to:"/",className:"social-logo"},"Azakana",l.a.createElement("i",{class:""}))),l.a.createElement("small",{class:"website-rights"},"Azakana \xa9 2021"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(o.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(o.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(o.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(o.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(o.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(p,null))},f=t(5);function d(){return l.a.createElement("h1",{className:"statistiques"},"Statistiques")}var h=t(12),N=t(23);t(38);function g(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],m=o[1];return l.a.createElement("div",{className:"Login"},l.a.createElement(h.a,{onSubmit:function(e){e.preventDefault()}},l.a.createElement(h.a.Group,{size:"lg",controlId:"email"},l.a.createElement(h.a.Label,null,"Pseudo"),l.a.createElement(h.a.Control,{autoFocus:!0,type:"email",value:t,onChange:function(e){return c(e.target.value)}})),l.a.createElement(h.a.Group,{size:"lg",controlId:"password"},l.a.createElement(h.a.Label,null,"Password"),l.a.createElement(h.a.Control,{type:"password",value:i,onChange:function(e){return m(e.target.value)}})),l.a.createElement(N.a,{block:!0,size:"lg",type:"submit",disabled:!(t.length>0&&i.length>0)},"Connexion")))}function k(){return l.a.createElement("h1",{className:"sign-up"},l.a.createElement(g,null))}function C(){return l.a.createElement("h1",{className:"patch-notes"},"notes de patch")}function w(){return l.a.createElement("h1",{className:"team"},"TEAM MANAGEMENT")}function y(){return l.a.createElement("h1",{className:"champions"},"infos sur les champions")}function O(){return l.a.createElement("h1",{className:"e-sport"},"lien vers page esport LoL")}var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(E,null),l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0,component:v}),l.a.createElement(f.a,{path:"/statistiques",component:d}),l.a.createElement(f.a,{path:"/team",component:w}),l.a.createElement(f.a,{path:"/patch-notes",component:C}),l.a.createElement(f.a,{path:"/champions",component:y}),l.a.createElement(f.a,{path:"/e-sport",component:O}),l.a.createElement(f.a,{path:"/sign-up",component:k}))))};r.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6c69d715.chunk.js.map