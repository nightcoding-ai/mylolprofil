(this.webpackJsonpAzakana=this.webpackJsonpAzakana||[]).push([[0],{10:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/icon.3fe78924.png"},35:function(e,t,a){e.exports=a.p+"static/media/God King Garen Login Screen - League of Legends.d40d52bc.mp4"},36:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),s=a.n(c),l=a(1),i=a(2),o=a(4),u=a(3),m=(a(22),a(5)),p=["btn--classic","btn--connect"],d=["btn--medium","btn--large"],h=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,s=e.buttonSize,l=p.includes(c)?c:p[0],i=d.includes(s)?s:d[0];return r.a.createElement(m.b,{to:"/sign-in",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(l," ").concat(i),onClick:n,type:a},t))},v=["btn--classic","btn--connect"],b=["btn--medium","btn--large"],f=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,s=e.buttonSize,l=v.includes(c)?c:v[0],i=b.includes(s)?s:b[0];return r.a.createElement("button",{className:"btn ".concat(l," ").concat(i),onClick:n,type:a},t)},E=(a(46),a(34)),g=a.n(E),y=a(6),k=a.n(y),j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={token:k.a.get("Token"),click:!1,button:!0,element:"",str:""},e.handleClick=function(){return e.setState({click:!e.state.click})},e.closeMobileMenu=function(){return e.setState({click:!1})},e.showButton=function(){window.innerWidth<=960?e.setState({button:!1}):e.setState({button:!0})},e.useEffect=[],e.deleteToken=function(){k.a.remove("Token"),k.a.remove("Pseudo"),document.location.href="/"},e.render_token=function(){"undefined"!=typeof e.state.token?e.setState({str:r.a.createElement(f,{onClick:e.deleteToken,buttonStyle:"btn--connect"},"D\xe9connexion")}):e.setState({str:r.a.createElement(h,{buttonStyle:"btn--connect"},"Connexion")})},e}return Object(i.a)(a,[{key:"render",value:function(){return window.addEventListener("resize",this.showButton),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar",onLoad:this.render_token},r.a.createElement("div",{className:"navbar-container"},r.a.createElement("img",{alt:"",src:g.a,className:"logo"}),r.a.createElement(m.b,{to:"/",className:"navbar-title",onClick:this.closeMobileMenu},"Azakana"),r.a.createElement("div",{className:"menu-icon",onClick:this.handleClick},r.a.createElement("i",{className:this.state.click?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:this.state.click?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/statistiques",className:"nav-links",onClick:this.closeMobileMenu},"Statistiques")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/team",className:"nav-links",onClick:this.closeMobileMenu},"Equipe")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/patch-notes",className:"nav-links",onClick:this.closeMobileMenu},"Notes de patch")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/champions",className:"nav-links",onClick:this.closeMobileMenu},"Champions")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/e-sport",className:"nav-links",onClick:this.closeMobileMenu},"E-sport"))),this.state.str)))}}]),a}(r.a.Component),N=(a(10),a(47),a(35)),O=a.n(N),C=a(9),T=a.n(C),M=Object,S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"handleClick",value:function(){var e=document.getElementById("servers").value;console.log(e);var t=document.getElementById("summoner").value;console.log(t);var a=document.getElementById("profile"),n=String,r=String,c=[],s=[],l="",i="http://127.0.0.1:8000/api/";T.a.get(i+"profile/"+e+"/"+t).then((function(t){return M=t.data,n=M.id,r=M.puuid,console.log(M,n),a.innerHTML="<div id='Level' class='level'>"+String(M.summonerLevel)+"</div><div id='summoner_name' class='summoner_name'>"+String(M.name)+"</div><div id='stats' class='stats'></div>",T.a.get(i+"ranks/"+e+"/"+n)})).then((function(t){M=t.data;for(var a=document.getElementById("stats"),r=0;r<M.length;r++)"RANKED_SOLO_5x5"===M[r].queueType&&(a.innerHTML+=a.innerHTML+="Rang Solo/Duo: "+M[r].tier+" "+M[r].rank+"<br>",a.innerHTML+="Pourcentage de victoire: "+Math.round(M[r].wins/(M[r].wins+M[r].losses)*100)+"%<br>",a.innerHTML+="Victoires:"+String(M[r].wins)+" /D\xe9faites: "+String(M[r].losses)+"<br>"),"RANKED_FLEX_SR"===M[r].queueType&&(a.innerHTML+="Rang Flex: "+M[r].tier+" "+M[r].rank+"<br>",a.innerHTML+="Pourcentage de victoire: "+Math.round(M[r].wins/(M[r].wins+M[r].losses)*100)+"%<br>",a.innerHTML+="Victoires:"+String(M[r].wins)+" /D\xe9faites: "+String(M[r].losses)+"<br>"),a.innerHTML+="<br>";return T.a.get(i+"masteries/"+e+"/"+n)})).then((function(e){var t=document.getElementById("stats");t.innerHTML+="<H3>Top 3 des champions les plus jou\xe9s :</H3>";for(var a=0;a<3;a++)t.innerHTML+="id du champion : "+String(e.data[a].championId)+", points de maitrise : "+String(e.data[a].championPoints)+"<br>";return t.innerHTML+="<br>",T.a.get(i+"history/europe/"+r)})).then((function(a){c=a.data;for(var n=0;n<c.length;n++)s.push(c[n].slice(5));for(var r=0;r<s.length;r++)T.a.get(i+"details/"+e+"/"+s[r]).then((function(e){l=e.data;var a=document.getElementById("stats");a.innerHTML+="<br>",a.innerHTML+=l.gameMode;var n=Math.floor(l.gameDuration/60),r=l.gameDuration%60;a.innerHTML+=r<10?" "+n+":0"+r:" "+n+":"+r;for(var c=0;c<l.participantIdentities.length;c++)l.participantIdentities[c].player.summonerName===t&&(!0===l.participants[c].stats.win?a.innerHTML+=" Victoire<br>":a.innerHTML+=" D\xe9faite<br>",a.innerHTML+=l.participants[c].stats.kills+"/"+l.participants[c].stats.deaths+"/"+l.participants[c].stats.assists+"<br>")}))})).catch((function(e){console.log(e.response),a.innerHTML="<div id='stats' class='inexistant'>Cet utilisateur n'existe pas.<br>Veuillez v\xe9rifier le pseudo et/ou le serveur.</div>"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"mid-container"},r.a.createElement("video",{src:O.a,autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("div",{className:"search",id:"search"},r.a.createElement("select",{id:"servers",className:"servers"},r.a.createElement("option",{value:"euw1"},"EUW"),r.a.createElement("option",{value:"na1"},"NA"),r.a.createElement("option",{value:"euna1"},"EUNA"),r.a.createElement("option",{value:"tr1"},"TR"),r.a.createElement("option",{value:"jp1"},"JP"),r.a.createElement("option",{value:"oc1"},"OC"),r.a.createElement("option",{value:"kr"},"KR"),r.a.createElement("option",{value:"ru"},"RU")),r.a.createElement("input",{type:"search",id:"summoner",className:"input","aria-label":"Search through site content",placeholder:"Ton pseudo"}),r.a.createElement("button",{onClick:this.handleClick,className:"research"},"Rechercher")),r.a.createElement("div",{id:"profile",className:"profile"}))}}]),a}(r.a.Component),w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null))}}]),a}(r.a.Component),L=a(7);a(66);var H=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement(m.b,{to:"/",className:"social-logo"},"Azakana"))},A=(a(67),a(68),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Offline"},r.a.createElement("h3",null,"Veuillez-vous connecter ou cr\xe9er un compte pour avoir acc\xe8s \xe0 cette page."),r.a.createElement(m.b,{to:"/sign-in"},r.a.createElement("button",{className:"button-connect",to:"/sign-in"},"Connexion")))}}]),a}(n.Component)),x=(a(69),Object),_=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"Click",value:function(){var e=document.getElementById("serv").value,t=k.a.get("Pseudo"),a=document.getElementById("Stats_perso"),n=String,r=String,c=[],s=[],l="",i="http://127.0.0.1:8000/api/";T.a.get(i+"profile/"+e+"/"+t).then((function(t){return x=t.data,n=x.id,r=x.puuid,console.log(x,n),a.innerHTML="<div id='Lvl' class='Lvl'>"+String(x.summonerLevel)+"</div><div id='smr_name' class='smr_name'>"+String(x.name)+"</div><div id='games' class='games'></div>",T.a.get(i+"ranks/"+e+"/"+n)})).then((function(t){x=t.data;for(var a=document.getElementById("games"),r=0;r<x.length;r++)"RANKED_SOLO_5x5"===x[r].queueType&&(a.innerHTML+=a.innerHTML+="Rang Solo/Duo: "+x[r].tier+" "+x[r].rank+"<br>",a.innerHTML+="Pourcentage de victoire: "+Math.round(x[r].wins/(x[r].wins+x[r].losses)*100)+"%<br>",a.innerHTML+="Victoires:"+String(x[r].wins)+" /D\xe9faites: "+String(x[r].losses)+"<br>"),"RANKED_FLEX_SR"===x[r].queueType&&(a.innerHTML+="Rang Flex: "+x[r].tier+" "+x[r].rank+"<br>",a.innerHTML+="Pourcentage de victoire: "+Math.round(x[r].wins/(x[r].wins+x[r].losses)*100)+"%<br>",a.innerHTML+="Victoires:"+String(x[r].wins)+" /D\xe9faites: "+String(x[r].losses)+"<br>"),a.innerHTML+="<br>";return T.a.get(i+"masteries/"+e+"/"+n)})).then((function(e){var t=document.getElementById("games");t.innerHTML+="<H3>Top 3 des champions les plus jou\xe9s :</H3>";for(var a=0;a<3;a++)t.innerHTML+="id du champion : "+String(e.data[a].championId)+", points de maitrise : "+String(e.data[a].championPoints)+"<br>";return t.innerHTML+="<br>",T.a.get(i+"history/europe/"+r)})).then((function(a){c=a.data;for(var n=0;n<c.length;n++)s.push(c[n].slice(5));for(var r=0;r<s.length;r++)T.a.get(i+"details/"+e+"/"+s[r]).then((function(e){l=e.data;var a=document.getElementById("games");a.innerHTML+="<br>",a.innerHTML+=l.gameMode;var n=Math.floor(l.gameDuration/60),r=l.gameDuration%60;a.innerHTML+=r<10?" "+n+":0"+r:" "+n+":"+r;for(var c=0;c<l.participantIdentities.length;c++)l.participantIdentities[c].player.summonerName===t&&(!0===l.participants[c].stats.win?a.innerHTML+=" Victoire<br>":a.innerHTML+=" D\xe9faite<br>",a.innerHTML+=l.participants[c].stats.kills+"/"+l.participants[c].stats.deaths+"/"+l.participants[c].stats.assists+"<br>")}))})).catch((function(e){a.innerHTML="<div id='Stats_perso' class='inex'>Cet utilisateur n'existe pas.<br>Veuillez v\xe9rifier le pseudo et/ou le serveur.</div>"}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"stats_server"},r.a.createElement("h3",null," Vous \xeates bien connect\xe9, choissisez votre serveur pour afficher vos statistiques."),r.a.createElement("select",{id:"serv",className:"serv"},r.a.createElement("option",{value:"euw1"},"EUW"),r.a.createElement("option",{value:"na1"},"NA"),r.a.createElement("option",{value:"euna1"},"EUNA"),r.a.createElement("option",{value:"tr1"},"TR"),r.a.createElement("option",{value:"jp1"},"JP"),r.a.createElement("option",{value:"oc1"},"OC"),r.a.createElement("option",{value:"kr"},"KR"),r.a.createElement("option",{value:"ru"},"RU")),r.a.createElement("button",{className:"button_stats",onClick:this.Click},"Rechercher")),r.a.createElement("div",{className:"Stats_perso",id:"Stats_perso"}))}}]),a}(n.Component),I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={token:k.a.get("Token"),pseudo:k.a.get("Pseudo"),str:"",count:0},e.render_token=function(){"undefined"!=typeof e.state.token?e.setState({str:r.a.createElement(_,null)}):e.setState({str:r.a.createElement(A,null)})},e}return Object(i.a)(a,[{key:"render",value:function(){return 0==this.state.count&&(this.render_token(),this.setState({count:1})),r.a.createElement("div",{className:"cont"},this.state.str)}}]),a}(r.a.Component),B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"statistiques",id:"statistiques"},r.a.createElement(I,null)),r.a.createElement(H,null))}}]),a}(r.a.Component),R=(a(18),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{username:"",password:""},token:k.a.get("Token")},e.login=function(t){fetch("http://127.0.0.1:8000/api/rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(t){var a=e.state.credentials.username.toString();t.key?(k.a.set("Token",t.key,{expires:1}),k.a.set("Pseudo",a,{expires:1}),document.location.href="/connected"):document.getElementById("error").innerHTML="<h3 id='incorrect'>Pseudo/mot de passe incorrect</h3>"})).catch((function(e){return console.error(e)}))},e.inputChanged=function(t){var a=e.state.credentials;a[t.target.name]=t.target.value,e.setState({credentials:a})},e.connect=function(){"undefined"!=typeof e.state.token&&(document.location.href="/")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"login",className:"login"},r.a.createElement("label",{className:"label-form"},"Nom d'utilisateur",r.a.createElement("input",{type:"text",name:"username",className:"input-form",value:this.state.credentials.username,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("label",{className:"label-form"},"Mot de passe",r.a.createElement("input",{type:"password",name:"password",className:"input-form",id:"mdp",value:this.state.credentials.password,onChange:this.inputChanged})),r.a.createElement("label",{id:"error"}),r.a.createElement("button",{id:"button-form",className:"button-form",onClick:this.login},"Connexion"),r.a.createElement(m.b,{to:"/sign-up"},r.a.createElement("button",{className:"button-register",to:"/sign-up"},"Inscription")))}}]),a}(n.Component)),q=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sign-in"},r.a.createElement(R,null)),r.a.createElement(H,null))}}]),a}(r.a.Component),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={credentials:{username:"",password1:"",password2:"",email:""},alert:"",erreur:!1},e.inputChanged=function(t){var a=e.state.credentials;a[t.target.name]=t.target.value,e.setState({credentials:a})},e.register=function(t){""==e.state.credentials.password1||""==e.state.credentials.password2||""==e.state.credentials.username||""==e.state.credentials.email?e.setState({alert:r.a.createElement("p",{id:"alert"},"Veuillez remplir tous les champs")}):e.state.credentials.password1==e.state.credentials.password2?e.state.credentials.password1.length>8?fetch("http://127.0.0.1:8000/api/rest-auth/registration/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).catch((function(e){console.error(e)})):e.setState({alert:r.a.createElement("p",{id:"alert"},"Mot de passe trop court")}):e.setState({alert:r.a.createElement("p",{id:"alert"},"Veuillez confirmer le mot de passe")})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"register"},r.a.createElement("h2",null,"Mettez le m\xeame pseudo en jeu de votre compte League Of Legends pour une exp\xe9rience utilisateur incroyable ! "),r.a.createElement("label",{className:"label-form"},"Nom d'utilisateur",r.a.createElement("input",{type:"text",name:"username",className:"input-form",value:this.state.credentials.user_name,onChange:this.inputChanged})),r.a.createElement("label",{className:"label-form"},"Mot de passe",r.a.createElement("input",{type:"password",name:"password1",className:"input-form",value:this.state.credentials.password1,onChange:this.inputChanged})),r.a.createElement("label",{className:"label-form"},"Confirmation mot de passe",r.a.createElement("input",{type:"password",name:"password2",className:"input-form",value:this.state.password2,onChange:this.inputChanged})),r.a.createElement("label",{className:"label-form"},"Adresse email",r.a.createElement("input",{type:"mail",name:"email",className:"input-form",value:this.state.credentials.email,onChange:this.inputChanged})),this.state.alert,r.a.createElement("button",{className:"button-save",onClick:this.register,to:"/sign-in"},"Enregistrer"))}}]),a}(n.Component),P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sign-up"},r.a.createElement(D,null)),r.a.createElement(H,null))}}]),a}(r.a.Component),F=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"patch-notes"},r.a.createElement("button",{onClick:function(){return window.open("https://euw.leagueoflegends.com/fr-fr/news/tags/patch-notes")},className:"btn-patch"},"Acc\xe9der aux notes de patch")),r.a.createElement(H,null))}}]),a}(r.a.Component),z="http://127.0.0.1:8000/api/",V=z+"users/",G=String,K=Number,J=[],U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pseudo:k.a.get("Pseudo"),token:k.a.get("Token"),team:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.a.get(V+this.state.pseudo).then((function(t){null!=(K=t.data.team)&&T.a.get("http://127.0.0.1:8000/api/teams/"+K.toString()).then((function(t){G=t.data.name,e.setState({team:G})}))}))}},{key:"handleClick",value:function(){T.a.get(V).then((function(e){for(var t=e.data,a=0;a<t.length;a++)t[a].team==K&&J.push(t[a].username)}));for(var e=0;e<J.length;e++)document.getElementById("team").innerHTML+=J[e]+"<br>"}},{key:"createTeam",value:function(){document.getElementById("team").innerHTML='<div className="mid-team"><label className="label-form">Choisissez un nom d\'\xe9quipe <input type="text" name="team_name" /></label><button className="btn-team">Enregistrer</button></div>'}},{key:"joinTeam",value:function(){}},{key:"render",value:function(){return this.state.token?""!==this.state.team?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team",id:"team"},"Bienvenue ",this.state.pseudo," !",r.a.createElement("br",null),"Membre de: ",this.state.team,r.a.createElement("br",null),r.a.createElement("button",{className:"btn-team",onClick:this.handleClick},"Afficher les membres"),r.a.createElement("br",null)),r.a.createElement(H,null)):""===this.state.team?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team",id:"team"},r.a.createElement("h3",null,"Bienvenue dans la cr\xe9ation d'\xe9quipe,",r.a.createElement("br",null),this.state.pseudo," ! Vous n'appartenez pas encore \xe0 une \xe9quipe.",r.a.createElement("br",null),r.a.createElement("button",{className:"btn-team",onClick:this.createTeam},"Cr\xe9er une \xe9quipe"),r.a.createElement("br",null),r.a.createElement("button",{className:"btn-team",onClick:this.joinTeam},"Rejoindre une \xe9quipe"))),r.a.createElement(H,null)):void 0:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team",id:"team"},r.a.createElement(A,null)),r.a.createElement(H,null))}}]),a}(r.a.Component),W=(a(70),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={count:0,champions:[],element:""},e.champs=function(){fetch("http://127.0.0.1:8000/api/Champions/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var a=[];for(var n in t.data)a.push([n,t.data[n]]);e.setState({champions:a})})).catch((function(e){return console.error(e)}))},e.handleClick=function(){window.location.reload(!1)},e.champSelect=function(t){fetch("http://127.0.0.1:8000/api/Champions/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){for(var n in a.data)n==t&&(e.setState({champions:[]}),console.log(a.data[n]),e.setState({element:r.a.createElement("div",{className:"stats_champs"},r.a.createElement("p",null,"Champion: ",a.data[n].id),r.a.createElement("p",null,"Titre: ",a.data[n].title),r.a.createElement("p",null,"Type: ",a.data[n].partype),r.a.createElement("p",null,"Mp: ",a.data[n].stats.mp),r.a.createElement("p",null,"HP: ",a.data[n].stats.hp),r.a.createElement("p",null,"Hp per lebel: ",a.data[n].stats.hpperlevel),r.a.createElement("p",null,"Hp regen: ",a.data[n].stats.hpregen),r.a.createElement("p",null,"Attack: ",a.data[n].stats.attackdamage),r.a.createElement("p",null,"Attack per level: ",a.data[n].stats.attackdamageperlevel),r.a.createElement("p",null,"Attack range: ",a.data[n].stats.attackrange),r.a.createElement("button",{className:"button-return",onClick:e.handleClick},"Retour"))}))})).catch((function(e){return console.error(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return 0==this.state.count&&(this.champs(),this.setState({count:1})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"champs"},this.state.champions.map((function(t){return r.a.createElement("button",{className:"champs-name",onClick:e.champSelect.bind(e,t[0])},t[0])})),this.state.element))}}]),a}(r.a.Component)),X=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"champions"},r.a.createElement(W,null)),r.a.createElement(H,null))}}]),a}(r.a.Component),Q=(a(71),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={streamer:[{url:"https://player.twitch.tv/?channel=solary&parent=127.0.0.1",nom:"Solary"},{url:"https://player.twitch.tv/?channel=ogaminglol&parent=127.0.0.1",nom:"Ogaming"},{url:"https://player.twitch.tv/?channel=gobgg&parent=127.0.0.1",nom:"GoBGG"},{url:"https://player.twitch.tv/?channel=sixentv&parent=127.0.0.1",nom:"SixenTV"}],encours:"https://player.twitch.tv/?channel=solary&parent=127.0.0.1"},e.onAdd=function(t){e.setState({encours:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flux"},r.a.createElement("ul",null,this.state.streamer.map((function(t){return r.a.createElement("button",{className:"stream-link",onClick:function(){return e.onAdd(t.url)}},t.nom)}))),r.a.createElement("iframe",{src:this.state.encours,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"600",width:"1066",className:"streaming"}))}}]),a}(r.a.Component)),Y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"e-sport"},r.a.createElement(Q,null)),r.a.createElement(H,null))}}]),a}(r.a.Component),Z=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).disconnect=function(e){k.a.remove("Token"),k.a.remove("Pseudo")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"connect",className:"connect"},r.a.createElement("label",{className:"label-form"},"Vous \xeates connect\xe9"),r.a.createElement("h3",null,"Maintenant que vous \xeates connect\xe9, vous avez acc\xe8s \xe0 la page statistiques et la page \xe9quipe."),r.a.createElement(m.b,{to:"/sign-in"},r.a.createElement("button",{className:"button-disconnect",to:"/sign-in",onClick:this.disconnect},"D\xe9connexion")))}}]),a}(n.Component),$=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"connected"},r.a.createElement(Z,null)),r.a.createElement(H,null))}}]),a}(r.a.Component),ee=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(j,null),r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/",component:w}),r.a.createElement(L.a,{path:"/statistiques",component:B}),r.a.createElement(L.a,{path:"/team",component:U}),r.a.createElement(L.a,{path:"/patch-notes",component:F}),r.a.createElement(L.a,{path:"/champions",component:X}),r.a.createElement(L.a,{path:"/e-sport",component:Y}),r.a.createElement(L.a,{path:"/sign-in",component:q}),r.a.createElement(L.a,{path:"/sign-up",component:P}),r.a.createElement(L.a,{path:"/connected",component:$}))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.209b9ace.chunk.js.map