"use strict";(self.webpackChunkcommit_tracker=self.webpackChunkcommit_tracker||[]).push([[850],{43946:(t,e,n)=>{n.d(e,{Z:()=>O});var r=n(15671),o=n(43144),c=n(60136),a=n(6215),s=n(61120),i=n(45697),u=n.n(i),p=n(93264),l=n.n(p),f=n(73685),m=n(88931),h=n(87462),v=n(45987),d=n(15861),y=n(87757),g=n.n(y),P=n(63383);function Z(t){return function(e){(0,c.Z)(f,e);var n,i,u,p=(i=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=(0,s.Z)(i);if(u){var n=(0,s.Z)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,a.Z)(this,t)});function f(t){var e;return(0,r.Z)(this,f),(e=p.call(this,t)).state={component:null},e}return(0,o.Z)(f,[{key:"componentDidMount",value:(n=(0,d.Z)(g().mark((function e(){var n,r;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n=e.sent,r=n.default,this.setState({component:r});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var t=this.state.component;return t?l().createElement(t,this.props):l().createElement(P.Skeleton,null)}}]),f}(p.Component)}var E=n(59704),k=n.n(E),C=["component","rootClass"],R=Z((function(){return Promise.all([n.e(577),n.e(669),n.e(167)]).then(n.bind(n,59910))})),A=Z((function(){return n.e(196).then(n.bind(n,24947))})),b=Z((function(){return n.e(452).then(n.bind(n,53963))})),w={pageAppCommit:"/:app/:commit",pageApp:"/:app",page:"/",oops:"/oops",noPermissions:"/no-permissions"},_=function(t){var e=t.component,n=t.rootClass,r=(0,v.Z)(t,C),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.setAttribute("role","main"),l().createElement(f.Route,(0,h.Z)({},r,{component:e}))};_.propTypes={component:u().func,rootClass:u().string};var B=function(){var t=(0,f.useLocation)().pathname;return l().createElement(f.Switch,null,l().createElement(_,{path:w.pageAppCommit,component:R,rootClass:"samplePage"}),l().createElement(_,{path:w.pageApp,component:R,rootClass:"samplePage"}),l().createElement(_,{path:w.page,component:R,rootClass:"samplePage"}),l().createElement(_,{path:w.oops,component:A,rootClass:"oopsPage"}),l().createElement(_,{path:w.noPermissions,component:b,rootClass:"noPermissionsPage"}),l().createElement(f.Route,{render:function(){return k()(w,(function(e){return e===t}))?null:l().createElement(f.Redirect,{to:w.samplePage})}}))};B.propTypes={childProps:u().shape({history:u().shape({push:u().func})})};var S=n(67336),x=n(51344),I=n(83215);var N=(0,S.JH)();N.register({notifications:I.ee});var T=function(t){(0,c.Z)(u,t);var e,n,i=(e=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,s.Z)(e);if(n){var o=(0,s.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)});function u(){return(0,r.Z)(this,u),i.apply(this,arguments)}return(0,o.Z)(u,[{key:"componentDidMount",value:function(){var t=this;insights.chrome.init(),insights.chrome.identifyApp("commit-tracker"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(e){return t.props.history.push("/".concat(e.navId))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return l().createElement(m.Provider,{store:N.getStore()},l().createElement(x.ZP,null),l().createElement(B,{childProps:this.props}))}}]),u}(p.Component);T.propTypes={history:u().object};const O=(0,f.withRouter)((0,m.connect)()(T))},83653:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t){var e="/",n=t.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),e="/beta/"),"".concat(e).concat(n[0],"/").concat(n[1]||"")}},30319:(t,e,n)=>{n.d(e,{S1:()=>s});var r,o=n(18546),c=n(68573),a=n.n(c);function s(){if(r)throw new Error("store already initialized");for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r=new o.ZP({},[a()].concat(e))}}}]);
//# sourceMappingURL=../sourcemaps/850.264e2f23a514ae3e3286b3d59efee3bd.js.map