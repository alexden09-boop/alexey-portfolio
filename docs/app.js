(()=>{function og(r){if(typeof r!="string"||!r.trim())return null;try{let e=new URL(r);if(!["https:","http:"].includes(e.protocol)||!["t.me","telegram.me"].includes(e.hostname))return null;let t=/^\/([a-z\d_]+)\/?$/i.exec(e.pathname);return{url:e.href,label:t?"@"+t[1]:"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram"}}catch{return null}}function Pr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function mg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ll={duration:.5,overwrite:!1,delay:0},Yf,Cn,Ht,zi=1e8,wt=1/zi,kf=Math.PI*2,Xy=kf/4,qy=0,gg=Math.sqrt,Yy=Math.cos,Ky=Math.sin,xn=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},Lr=function(e){return typeof e=="number"},qc=function(e){return typeof e>"u"},pr=function(e){return typeof e=="object"},pi=function(e){return e!==!1},Kf=function(){return typeof window<"u"},Oc=function(e){return Qt(e)||xn(e)},_g=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,Zy=/random\([^)]+\)/g,Jy=/,\s*/g,ag=/(?:-?\.?\d|\.)+/gi,Zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jf=/[+-]=-?[.\d]+/,$y=/[^,'"\[\]\s]+/gi,jy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,fr,zf,$f,Ai={},kc={},xg,yg=function(e){return(kc=Vo(e,Ai))&&Gn},Yc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},cl=function(e,t){return!t&&console.warn(e)},vg=function(e,t){return e&&(Ai[e]=t)&&kc&&(kc[e]=t)||Ai},ul=function(){return 0},Qy={suppressEvents:!0,isStart:!0,kill:!1},Uc={suppressEvents:!0,kill:!1},ev={suppressEvents:!0},jf={},ds=[],Hf={},Sg,fi={},Df={},lg=30,Fc=[],Qf="",ed=function(e){var t=e[0],n,i;if(pr(t)||Qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Fc.length;i--&&!Fc[i].targetTest(t););n=Fc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new rd(e[i],n)))||e.splice(i,1);return e},ps=function(e){return e._gsap||ed(Hi(e))[0]._gsap},td=function(e,t,n){return(n=e[t])&&Qt(n)?e[t]():qc(n)&&e.getAttribute&&e.getAttribute(t)||n},Qn=function(e,t){return(e=e.split(",")).forEach(t)||e},en=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},Zs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},tv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},zc=function(){var e=ds.length,t=ds.slice(0),n,i;for(Hf={},ds.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nd=function(e){return!!(e._initted||e._startAt||e.add)},Mg=function(e,t,n,i){ds.length&&!Cn&&zc(),e.render(t,n,i||!!(Cn&&t<0&&nd(e))),ds.length&&!Cn&&zc()},bg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($y).length<2?t:xn(e)?e.trim():e},Tg=function(e){return e},Ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Vo=function(e,t){for(var n in t)e[n]=t[n];return e},cg=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=pr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Hc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},sl=function(e){var t=e.parent||Xt,n=e.keyframes?nv(Hn(e.keyframes)):Ri;if(pi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},iv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},wg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Kc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},rv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gf=function(e,t,n,i){return e._startAt&&(Cn?e._startAt.revert(Uc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},sv=function r(e){return!e||e._ts&&r(e.parent)},ug=function(e){return e._repeat?Wo(e._tTime,e=e.duration()+e._rDelay)*e:0},Wo=function(e,t){var n=Math.floor(e=Wt(e/t));return e&&n===e?n-1:n},Gc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Zc=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Jc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Zc(e),n._dirty||Xs(n,e)),e},Eg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Gc(e.rawTime(),t),(!t._dur||pl(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),Xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},dr=function(e,t,n,i){return t.parent&&ms(t),t._start=Wt((Lr(n)?n:!n&&Vc(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Xt?ki(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wg(e,t,"_first","_last",e._sort?"_start":0),Vc(t)||(e._recent=t),i||Eg(e,t),e._ts<0&&Jc(e,e._tTime),e},Ag=function(e,t){return(Ai.ScrollTrigger||Yc("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},Rg=function(e,t,n,i,s){if(ad(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sg!==di.frame)return ds.push(e),e._lazy=[s,i],1},ov=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Vc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},av=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&ov(e)&&!(!e._initted&&Vc(e))||(e._ts<0||e._dp._ts<0)&&!Vc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=pl(0,e._tDur,t),u=Wo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Cn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&Rg(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Gf(e,t,n,!0),e._onUpdate&&!n&&Ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ms(e,1),!n&&!Cn&&(Ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Xo=function(e,t,n,i){var s=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Wt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Jc(e,e._tTime=e._tDur*a),e.parent&&Zc(e),n||Xs(e.parent,e),e},hg=function(e){return e instanceof zn?Xs(e):Xo(e,e._dur)},cv={_start:0,endTime:ul,totalDuration:ul},ki=function r(e,t,n){var i=e.labels,s=e._recent||cv,o=e.duration()>=zi?s.endTime(!1):e._dur,a,l,c;return xn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Hn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ol=function(e,t,n){var i=Lr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pi(l.vars.inherit)&&l.parent;o.immediateRender=pi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new sn(t[0],o,t[s+1])},gs=function(e,t){return e||e===0?t(e):t},pl=function(e,t,n){return n<e?e:n>t?t:n},Pn=function(e,t){return!xn(e)||!(t=jy.exec(e))?"":t[1]},uv=function(e,t,n){return gs(n,function(i){return pl(e,t,i)})},Vf=[].slice,Cg=function(e,t){return e&&pr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pr(e[0]))&&!e.nodeType&&e!==fr},hv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return xn(i)&&!t||Cg(i,1)?(s=n).push.apply(s,Hi(i)):n.push(i)})||n},Hi=function(e,t,n){return Ht&&!t&&Ht.selector?Ht.selector(e):xn(e)&&!n&&(zf||!qo())?Vf.call((t||$f).querySelectorAll(e),0):Hn(e)?hv(e,n):Cg(e)?Vf.call(e,0):e?[e]:[]},Wf=function(e){return e=Hi(e)[0]||cl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Hi(t,n.querySelectorAll?n:n===e?cl("Invalid scope")||$f.createElement("div"):e)}},Pg=function(e){return e.sort(function(){return .5-Math.random()})},Ig=function(e){if(Qt(e))return e;var t=pr(e)?e:{each:e},n=qs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return xn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,p){var _=(p||t).length,m=o[_],g,y,M,v,b,T,x,S,R;if(!m){if(R=t.grid==="auto"?0:(t.grid||[1,zi])[1],!R){for(x=-zi;x<(x=p[R++].getBoundingClientRect().left)&&R<_;);R<_&&R--}for(m=o[_]=[],g=l?Math.min(R,_)*u-.5:i%R,y=R===zi?0:l?_*h/R-.5:i/R|0,x=0,S=zi,T=0;T<_;T++)M=T%R-g,v=y-(T/R|0),m[T]=b=c?Math.abs(c==="y"?v:M):gg(M*M+v*v),b>x&&(x=b),b<S&&(S=b);i==="random"&&Pg(m),m.max=x-S,m.min=S,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(R>_?_-1:c?c==="y"?_/R:R:Math.max(R,_/R))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Pn(t.amount||t.each)||0,n=n&&_<0?Tv(n):n}return _=(m[f]-m.min)/m.max||0,Wt(m.b+(n?n(_):_)*m.v)+m.u}},Xf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Lr(n)?0:Pn(n))}},Lg=function(e,t){var n=Hn(e),i,s;return!n&&pr(e)&&(i=n=e.radius||zi,e.values?(e=Hi(e.values),(s=!Lr(e[0]))&&(i*=i)):e=Xf(e.increment)),gs(t,n?Qt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=zi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Lr(o)?u:u+Pn(o)}:Xf(e))},Dg=function(e,t,n,i){return gs(Hn(e)?!t:n===!0?!!(n=0):!i,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},fv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},dv=function(e,t){return function(n){return e(parseFloat(n))+(t||Pn(n))}},pv=function(e,t,n){return Og(e,t,0,1,n)},Ng=function(e,t,n){return gs(n,function(i){return e[~~t(i)]})},mv=function r(e,t,n){var i=t-e;return Hn(e)?Ng(e,r(0,e.length),t):gs(n,function(s){return(i+(s-e)%i)%i+e})},gv=function r(e,t,n){var i=t-e,s=i*2;return Hn(e)?Ng(e,r(0,e.length-1),t):gs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Yo=function(e){return e.replace(Zy,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Jy);return Dg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Og=function(e,t,n,i,s){var o=t-e,a=i-n;return gs(s,function(l){return n+((l-e)/o*a||0)})},_v=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=xn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(p){p*=h;var _=Math.min(f,~~p);return u[_](p-_)},n=t}else i||(e=Vo(Hn(e)?[]:{},e));if(!u){for(l in t)sd.call(a,e,l,"get",t[l]);s=function(p){return ud(p,a)||(o?e.p:e)}}}return gs(n,s)},fg=function(e,t,n){var i=e.labels,s=zi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ei=function(e,t,n){var i=e.vars,s=i[t],o=Ht,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ds.length&&zc(),a&&(Ht=a),u=l?s.apply(c,l):s.call(c),Ht=o,u},il=function(e){return ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Cn),e.progress()<1&&Ei(e,"onInterrupt"),e},Go,Ug=[],Fg=function(e){if(e)if(e=!e.name&&e.default||e,Kf()||e.headless){var t=e.name,n=Qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ul,render:ud,add:sd,kill:Nv,modifier:Dv,rawVars:0},o={targetTest:0,get:0,getSetter:$c,aliases:{},register:0};if(qo(),e!==i){if(fi[t])return;Ri(i,Ri(Hc(e,s),o)),Vo(i.prototype,Vo(s,Hc(e,o))),fi[i.prop=t]=i,e.targetTest&&(Fc.push(i),jf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vg(t,i),e.register&&e.register(Gn,i,ei)}else Ug.push(e)},Pt=255,rl={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Nf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},Bg=function(e,t,n){var i=e?Lr(e)?[e>>16,e>>8&Pt,e&Pt]:0:rl.black,s,o,a,l,c,u,h,f,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),rl[e])i=rl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Pt,i&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(ag),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Nf(l+1/3,s,o),i[1]=Nf(l,s,o),i[2]=Nf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Zf),n&&i.length<4&&(i[3]=1),i}else i=e.match(ag)||rl.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Pt,o=i[1]/Pt,a=i[2]/Pt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},kg=function(e){var t=[],n=[],i=-1;return e.split(Ir).forEach(function(s){var o=s.match(Ks)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},dg=function(e,t,n){var i="",s=(e+i).match(Ir),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Bg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=kg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ir,"1").split(Ks),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ir),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in rl)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),xv=/hsl[a]?\(/,id=function(e){var t=e.join(" "),n;if(Ir.lastIndex=0,Ir.test(t))return n=xv.test(t),e[1]=dg(e[1],n),e[0]=dg(e[0],n,kg(e[1])),!0},hl,di=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,p=function _(m){var g=r()-i,y=m===!0,M,v,b,T;if((g>e||g<0)&&(n+=g-t),i+=g,b=i-n,M=b-o,(M>0||y)&&(T=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=M+(M>=s?0:s-M),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](b,f,T,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){xg&&(!zf&&Kf()&&(fr=zf=window,$f=fr.document||{},Ai.gsap=Gn,(fr.gsapVersions||(fr.gsapVersions=[])).push(Gn.version),yg(kc||fr.GreenSockGlobals||!fr.gsap&&fr||{}),Ug.forEach(Fg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},hl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),hl=0,c=ul},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,g,y){var M=g?function(v,b,T,x){m(v,b,T,x),h.remove(M)}:m;return h.remove(m),a[y?"unshift":"push"](M),qo(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},h})(),qo=function(){return!hl&&di.wake()},ht={},yv=/^[\d.\-M][\d.\-,\s]/,vv=/["']/g,Sv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(vv,"").trim():+c,i=l.substr(a+1).trim();return t},Mv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},bv=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Sv(t[1])]:Mv(e).split(",").map(bg)):ht._CE&&yv.test(e)?ht._CE("",e):n},Tv=function(e){return function(t){return 1-e(1-t)}},qs=function(e,t){return e&&(Qt(e)?e:ht[e]||bv(e))||t},Js=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Qn(e,function(a){ht[a]=Ai[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},zg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Of=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/kf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ky((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:zg(a);return s=kf/s,l.config=function(c,u){return r(e,c,u)},l},Uf=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:zg(n);return i.config=function(s){return r(e,s)},i};Qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Js(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Js("Elastic",Of("in"),Of("out"),Of());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Js("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Js("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Js("Circ",function(r){return-(gg(1-r*r)-1)});Js("Sine",function(r){return r===1?1:-Yy(r*Xy)+1});Js("Back",Uf("in"),Uf("out"),Uf());ht.SteppedEase=ht.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-wt;return function(a){return((i*pl(0,o,a)|0)+s)*n}}};ll.ease=ht["quad.out"];Qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qf+=r+","+r+"Params,"});var rd=function(e,t){this.id=qy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:td,this.set=t?t.getSetter:$c},fl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xo(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),hl||di.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(qo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Jc(this,n),!s._dp||s.parent||Eg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&dr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Mg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ug(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ug(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Wo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Gc(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(pl(-Math.abs(this._delay),a,s),i!==!1),Zc(this),rv(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{qo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==wt,o;if(s)for(this._tTime-=wt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+wt){s=!1;break}o=o._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Wt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&dr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(pi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ev);var i=Cn;return Cn=n,nd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Cn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ki(this,n),pi(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,pi(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Qt(n)?n:Tg,l=function(){var u=i.then;i.then=null,s&&s(),Qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){il(this)},r})();Ri(fl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var zn=(function(r){mg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=pi(n.sortChildren),Xt&&dr(n.parent||Xt,Pr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ag(Pr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ol(0,arguments,this),this},t.from=function(i,s,o){return ol(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ol(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,sl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(i,s,ki(this,o),1),this},t.call=function(i,s,o){return dr(this,sn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new sn(i,o,ki(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,sl(o).immediateRender=pi(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,sl(a).immediateRender=pi(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Wt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,_,m,g,y,M,v,b,T,x;if(this!==Xt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,M=this._ts,g=!M,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Wt(u%m),u===l?(_=this._repeat,f=c):(b=Wt(u/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=Wo(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),T&&_&1&&(f=c-f,x=1),_!==b&&!this._lock){var S=T&&b&1,R=S===(T&&_&1);if(_<b&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(x?0:Wt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=lv(this,Wt(a),Wt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(Ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=-wt);break}}d=p}else{d=this._last;for(var A=i<0?i:f;d;){if(p=d._prev,(d._act||A<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||Cn&&nd(d)),f!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=A?-wt:wt);break}}d=p}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=v,Zc(this),this.render(i,s,o);this._onUpdate&&!s&&Ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ms(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Lr(s)||(s=ki(this,s,i)),!(i instanceof fl)){if(Hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(xn(i))return this.addLabel(i,s);if(Qt(i))i=sn.delayedCall(0,i);else return this}return this!==i?dr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return xn(i)?this.removeLabel(i):Qt(i)?this.killTweensOf(i):(i.parent===this&&Kc(this,i),i===this._recent&&(this._recent=this._last),Xs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(di.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ki(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=sn.delayedCall(0,s||ul,o);return a.data="isPause",this._hasPause=1,dr(this,a,ki(this,i))},t.removePause=function(i){var s=this._first;for(i=ki(this,i);s;)s._start===i&&s.data==="isPause"&&ms(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)fs!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Hi(i),l=this._first,c=Lr(s),u;l;)l instanceof sn?tv(l._targets,a)&&(c?(!fs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ki(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,p=sn.to(o,Ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Xo(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},s));return f?p.render(0):p},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ri({startAt:{time:ki(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),fg(this,ki(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),fg(this,ki(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Wt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Xs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=zi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,dr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Wt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xo(o,o===Xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Xt._ts&&(Mg(Xt,Gc(i,Xt)),Sg=di.frame),di.frame>=lg){lg+=mi.autoSleep||120;var s=Xt._first;if((!s||!s._ts)&&mi.autoSleep&&di._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||di.sleep()}}},e})(fl);Ri(zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var wv=function(e,t,n,i,s,o,a){var l=new ei(this._pt,e,t,0,1,cd,null,s),c=0,u=0,h,f,d,p,_,m,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Yo(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Lf)||[];h=Lf.exec(i);)p=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?Zs(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Lf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Jf.test(i)||g)&&(l.e=0),this._pt=l,l},sd=function(e,t,n,i,s,o,a,l,c,u){Qt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Qt(h)?c?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Qt(h)?c?Pv:Gg:ld,p;if(xn(i)&&(~i.indexOf("random(")&&(i=Yo(i)),i.charAt(1)==="="&&(p=Zs(f,i)+(Pn(f)||0),(p||p===0)&&(i=p))),!u||f!==i||qf)return!isNaN(f*i)&&i!==""?(p=new ei(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Lv:Vg,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!h&&!(t in e)&&Yc(t,i),wv.call(this,e,t,f,i,d,l||mi.stringFilter,c))},Ev=function(e,t,n,i,s){if(Qt(e)&&(e=al(e,s,t,n,i)),!pr(e)||e.style&&e.nodeType||Hn(e)||_g(e))return xn(e)?al(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=al(e[a],s,t,n,i);return o},od=function(e,t,n,i,s,o){var a,l,c,u;if(fi[e]&&(a=new fi[e]).init(s,a.rawVars?t[e]:Ev(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ei(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Go))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},fs,qf,ad=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:m,M=e._overwrite==="auto"&&!Yf,v=e.timeline,b=i.easeReverse||h,T,x,S,R,A,D,L,U,C,B,k,N,Z;if(v&&(!f||!s)&&(s="none"),e._ease=qs(s,ll.ease),e._rEase=b&&(qs(b)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||f&&!i.stagger){if(U=m[0]?ps(m[0]).harness:0,N=U&&i[U.prop],T=Hc(i,jf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?Uc:Qy),_._lazy=0),o){if(ms(e._startAt=sn.set(m,Ri({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&pi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn||!a&&!d)&&e._startAt.revert(Uc),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),S=Ri({overwrite:!1,data:"isFromStart",lazy:a&&!_&&pi(l),immediateRender:a,stagger:0,parent:g},T),N&&(S[U.prop]=N),ms(e._startAt=sn.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn?e._startAt.revert(Uc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&pi(l)||l&&!p,x=0;x<m.length;x++){if(A=m[x],L=A._gsap||ed(m)[x]._gsap,e._ptLookup[x]=B={},Hf[L.id]&&ds.length&&zc(),k=y===m?x:y.indexOf(A),U&&(C=new U).init(A,N||T,e,k,y)!==!1&&(e._pt=R=new ei(e._pt,A,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(G){B[G]=R}),C.priority&&(D=1)),!U||N)for(S in T)fi[S]&&(C=od(S,T,e,k,A,y))?C.priority&&(D=1):B[S]=R=sd.call(e,A,S,"get",T[S],k,y,0,i.stringFilter);e._op&&e._op[x]&&e.kill(A,e._op[x]),M&&e._pt&&(fs=e,Xt.killTweensOf(A,B,e.globalTime(t)),Z=!e.parent,fs=0),e._pt&&l&&(Hf[L.id]=1)}D&&hd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,f&&t<=0&&v.render(zi,!0,!0)},Av=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return qf=1,e.vars[t]="+=0",ad(e,a),qf=0,l?cl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=en(n)+Pn(h.e)),h.b&&(h.b=u.s+Pn(h.b))},Rv=function(e,t){var n=e[0]?ps(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Vo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Cv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Hn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},al=function(e,t,n,i,s){return Qt(e)?e.call(t,n,i,s):xn(e)&&~e.indexOf("random(")?Yo(e):e},Wc=Qf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Hg={};Qn(Wc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hg[r]=1});Wc=Wc.split(",");var sn=(function(r){mg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:sl(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Xt,y=(Hn(n)||_g(n)?Lr(n[0]):"length"in i)?[n]:Hi(n),M,v,b,T,x,S,R,A;if(a._targets=y.length?ed(y):cl("GSAP target "+n+" not found. https://gsap.com",!mi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Oc(c)||Oc(u)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(M=a.timeline=new zn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),M.kill(),M.parent=M._dp=Pr(a),M._start=0,f||Oc(c)||Oc(u)){if(T=y.length,R=f&&Ig(f),pr(f))for(x in f)~Wc.indexOf(x)&&(A||(A={}),A[x]=f[x]);for(v=0;v<T;v++)b=Hc(i,Hg),b.stagger=0,D&&(b.easeReverse=D),A&&Vo(b,A),S=y[v],b.duration=+al(c,Pr(a),v,S,y),b.delay=(+al(u,Pr(a),v,S,y)||0)-a._delay,!f&&T===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),M.to(S,b,R?R(v,S,y):0),M._ease=ht.none;M.duration()?c=u=0:a.timeline=0}else if(p){sl(Ri(M.vars.defaults,{ease:"none"})),M._ease=qs(p.ease||i.ease||"none");var L=0,U,C,B;if(Hn(p))p.forEach(function(k){return M.to(y,k,">")}),M.duration();else{b={};for(x in p)x==="ease"||x==="easeEach"||Cv(x,p[x],b,p.easeEach);for(x in b)for(U=b[x].sort(function(k,N){return k.t-N.t}),L=0,v=0;v<U.length;v++)C=U[v],B={ease:C.e,duration:(C.t-(v?U[v-1].t:0))/100*c},B[x]=C.v,M.to(y,B,L),L+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!Yf&&(fs=Pr(a),Xt.killTweensOf(y),fs=0),dr(g,Pr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!p&&a._start===Wt(g._time)&&pi(h)&&sv(Pr(a))&&g.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-u)||0)),m&&Ag(Pr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-wt&&!u?l:i<wt?0:i,f,d,p,_,m,g,y,M;if(!c)av(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Wt(h%_),h===l?(p=this._repeat,f=c):(m=Wt(h/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=Wo(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=h,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Wt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Rg(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var b=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Ei(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Gf(this,i,s,o),Ei(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Ei(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Gf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ms(this,1),!s&&!(u&&!a)&&(h||a||g)&&(Ei(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){hl||di.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ad(this,c),u=this._ease(c/this._dur),Av(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Jc(this,0),this.parent||wg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?il(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fs&&fs.vars.overwrite!==!0)._first||il(this),this.parent&&o!==this.timeline.totalDuration()&&Xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Hi(i):a,c=this._ptLookup,u=this._pt,h,f,d,p,_,m,g;if((!s||s==="all")&&iv(a,l))return s==="all"&&(this._pt=0),il(this);for(h=this._op=this._op||[],s!=="all"&&(xn(s)&&(_={},Qn(s,function(y){return _[y]=1}),s=_),s=Rv(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(h[g]=s,p=f,d={}):(d=h[g]=h[g]||{},p=s);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Kc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&il(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ol(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ol(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Xt.killTweensOf(i,s,o)},e})(fl);Ri(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qn("staggerTo,staggerFrom,staggerFromTo",function(r){sn[r]=function(){var e=new zn,t=Vf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ld=function(e,t,n){return e[t]=n},Gg=function(e,t,n){return e[t](n)},Pv=function(e,t,n,i){return e[t](i.fp,n)},Iv=function(e,t,n){return e.setAttribute(t,n)},$c=function(e,t){return Qt(e[t])?Gg:qc(e[t])&&e.setAttribute?Iv:ld},Vg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Lv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ud=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Dv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Nv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Kc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ov=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},hd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ei=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Vg,this.d=l||this,this.set=c||ld,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ov,this.m=n,this.mt=s,this.tween=i},r})();Qn(Qf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return jf[r]=1});Ai.TweenMax=Ai.TweenLite=sn;Ai.TimelineLite=Ai.TimelineMax=zn;Xt=new zn({sortChildren:!1,defaults:ll,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mi.stringFilter=id;var Ys=[],Bc={},Uv=[],pg=0,Fv=0,Ff=function(e){return(Bc[e]||Uv).map(function(t){return t()})},dl=function(){var e=Date.now(),t=[];e-pg>2&&(Ff("matchMediaInit"),Ys.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=fr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ff("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pg=e,Ff("matchMedia"))},Wg=(function(){function r(t,n){this.selector=n&&Wf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Fv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Qt(n)&&(s=i,i=n,n=Qt);var o=this,a=function(){var c=Ht,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Wf(s)),Ht=o,h=i.apply(o,arguments),Qt(h)&&o._r.push(h),Ht=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ht;Ht=null,n(this),Ht=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof sn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof zn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Ys.length;o--;)Ys[o].id===this.id&&Ys.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(dl):a.removeEventListener("change",dl)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),Bv=(function(){function r(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){pr(n)||(n={matches:n});var o=new Wg(0,s||this.scope),a=o.conditions={},l,c,u;Ht&&!o.selector&&(o.selector=Ht.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=fr.matchMedia(n[c]),l&&(Ys.indexOf(o)<0&&Ys.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(dl):l.addEventListener("change",dl),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Xc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Fg(i)})},timeline:function(e){return new zn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){xn(e)&&(e=Hi(e)[0]);var s=ps(e||{}).get,o=n?Tg:bg;return n==="native"&&(n=""),e&&(t?o((fi[t]&&fi[t].get||s)(e,t,n,i)):function(a,l,c){return o((fi[a]&&fi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Hi(e),e.length>1){var i=e.map(function(u){return Gn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=fi[t],a=ps(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Go._pt=0,h.init(e,n?u+n:u,Go,0,[e]),h.render(1,h),Go._pt&&ud(1,Go)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Gn.to(e,Ri((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qs(e.ease,ll.ease)),cg(ll,e||{})},config:function(e){return cg(mi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!fi[a]&&!Ai[a]&&cl(t+" effect requires "+a+" plugin.")}),Df[t]=function(a,l,c){return n(Hi(a),Ri(l||{},s),c)},o&&(zn.prototype[t]=function(a,l,c){return this.add(Df[t](a,pr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=qs(t)},parseEase:function(e,t){return arguments.length?qs(e,t):ht},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new zn(e),i,s;for(n.smoothChildTiming=pi(e.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,i=Xt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof sn&&i.vars.onComplete===i._targets[0]))&&dr(n,i,i._start-i._delay),i=s;return dr(Xt,n,0),n},context:function(e,t){return e?new Wg(e,t):Ht},matchMedia:function(e){return new Bv(e)},matchMediaRefresh:function(){return Ys.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||dl()},addEventListener:function(e,t){var n=Bc[e]||(Bc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:mv,wrapYoyo:gv,distribute:Ig,random:Dg,snap:Lg,normalize:pv,getUnit:Pn,clamp:uv,splitColor:Bg,toArray:Hi,selector:Wf,mapRange:Og,pipe:fv,unitize:dv,interpolate:_v,shuffle:Pg},install:yg,effects:Df,ticker:di,updateRoot:zn.updateRoot,plugins:fi,globalTimeline:Xt,core:{PropTween:ei,globals:vg,Tween:sn,Timeline:zn,Animation:fl,getCache:ps,_removeLinkedListItem:Kc,reverting:function(){return Cn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return Yf=e}}};Qn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xc[r]=sn[r]});di.add(zn.updateRoot);Go=Xc.to({},{duration:0});var kv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},zv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=kv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Bf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(xn(s)&&(l={},Qn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}zv(a,s)}}}},Gn=Xc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Bf("roundProps",Xf),Bf("modifiers"),Bf("snap",Lg))||Xc;sn.version=zn.version=Gn.version="3.15.1";xg=1;Kf()&&qo();var Hv=ht.Power0,Gv=ht.Power1,Vv=ht.Power2,Wv=ht.Power3,Xv=ht.Power4,qv=ht.Linear,Yv=ht.Quad,Kv=ht.Cubic,Zv=ht.Quart,Jv=ht.Quint,$v=ht.Strong,jv=ht.Elastic,Qv=ht.Back,eS=ht.SteppedEase,tS=ht.Bounce,nS=ht.Sine,iS=ht.Expo,rS=ht.Circ;var Xg,_s,Zo,_d,eo,sS,qg,xd,oS=function(){return typeof window<"u"},Nr={},Qs=180/Math.PI,Jo=Math.PI/180,Ko=Math.atan2,Yg=1e8,yd=/([A-Z])/g,aS=/(left|right|width|margin|padding|x)/i,lS=/[\s,\(]\S/,mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},t0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},n0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},dS=function(e,t,n){return e.style[t]=n},pS=function(e,t,n){return e.style.setProperty(t,n)},mS=function(e,t,n){return e._gsap[t]=n},gS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},_S=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},xS=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},qt="transform",gi=qt+"Origin",yS=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Nr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Dr(i,a)}):this.tfm[e]=o.x?o[e]:Dr(i,e),e===gi&&(this.tfm.zOrigin=o.zOrigin);else return mr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(qt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(gi,t,"")),e=qt}(s||t)&&this.props.push(e,t,s[e])},i0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xd(),(!s||!s.isStart)&&!n[qt]&&(i0(n),i.zOrigin&&n[gi]&&(n[gi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},r0=function(e,t){var n={target:e,props:[],revert:vS,save:yS};return e._gsap||Gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},s0,pd=function(e,t){var n=_s.createElementNS?_s.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_s.createElement(e);return n&&n.style?n:_s.createElement(e)},Ci=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,$o(t)||t,1)||""},Kg="O,Moz,ms,Ms,Webkit".split(","),$o=function(e,t,n){var i=t||eo,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Kg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Kg[o]:"")+e},md=function(){oS()&&window.document&&(Xg=window,_s=Xg.document,Zo=_s.documentElement,eo=pd("div")||{style:{}},sS=pd("div"),qt=$o(qt),gi=qt+"Origin",eo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",s0=!!$o("perspective"),xd=Gn.core.reverting,_d=1)},Zg=function(e){var t=e.ownerSVGElement,n=pd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Zo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Zo.removeChild(n),s},Jg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},o0=function(e){var t,n;try{t=e.getBBox()}catch{t=Zg(e),n=1}return t&&(t.width||t.height)||n||(t=Zg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Jg(e,["x","cx","x1"])||0,y:+Jg(e,["y","cy","y1"])||0,width:0,height:0}:t},a0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&o0(e))},ys=function(e,t){if(t){var n=e.style,i;t in Nr&&t!==gi&&(t=qt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(yd,"-$1").toLowerCase())):n.removeAttribute(t)}},xs=function(e,t,n,i,s,o){var a=new ei(e._pt,t,n,0,1,o?n0:t0);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},$g={deg:1,rad:1,turn:1},SS={grid:1,flex:1},vs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=eo.style,l=aS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",p,_,m,g;if(i===o||!s||$g[i]||$g[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&a0(e),(d||o==="%")&&(Nr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],en(d?s/p*h:s/100*p);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_s||!_.appendChild)&&(_=_s.body),m=_._gsap,m&&d&&m.width&&l&&m.time===di.time&&!m.uncache)return en(s/m.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,p=e[u],y?e.style[t]=y:ys(e,t)}else(d||o==="%")&&!SS[Ci(_,"display")]&&(a.position=Ci(e,"position")),_===e&&(a.position="static"),_.appendChild(eo),p=eo[u],_.removeChild(eo),a.position="absolute";return l&&d&&(m=ps(_),m.time=di.time,m.width=_[u]),en(f?p*s/h:p&&s?h/p*s:0)},Dr=function(e,t,n,i){var s;return _d||md(),t in mr&&t!=="transform"&&(t=mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Nr[t]&&t!=="transform"?(s=_l(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Qc(Ci(e,gi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=jc[t]&&jc[t](e,t,n)||Ci(e,t)||td(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?vs(e,t,s,n)+n:s},MS=function(e,t,n,i){if(!n||n==="none"){var s=$o(t,e,1),o=s&&Ci(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ci(e,"borderTopColor"))}var a=new ei(this._pt,e.style,t,0,1,cd),l=0,c=0,u,h,f,d,p,_,m,g,y,M,v,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ci(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ci(e,t)||i,_?e.style[t]=_:ys(e,t)),u=[n,i],id(u),n=u[0],i=u[1],f=n.match(Ks)||[],b=i.match(Ks)||[],b.length){for(;h=Ks.exec(i);)m=h[0],y=i.substring(l,h.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Zs(d,m)+v),g=parseFloat(m),M=m.substr((g+"").length),l=Ks.lastIndex-M.length,M||(M=M||mi.units[t]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(d=vs(e,t,_,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?n0:t0;return Jf.test(i)&&(a.e=0),this._pt=a,a},jg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=jg[n]||n,t[1]=jg[i]||i,t.join(" ")},TS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Nr[a]&&(l=1,a=a==="transformOrigin"?gi:qt),ys(n,a);l&&(ys(n,qt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",_l(n,1),o.uncache=1,i0(i)))}},jc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ei(e._pt,t,n,0,0,TS);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},gl=[1,0,0,1,0,0],l0={},c0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qg=function(e){var t=Ci(e,qt);return c0(t)?gl:t.substr(7).match(Zf).map(en)},vd=function(e,t){var n=e._gsap||ps(e),i=e.style,s=Qg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?gl:s):(s===gl&&!e.offsetParent&&e!==Zo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Zo.appendChild(e)),s=Qg(e),l?i.display=l:ys(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Zo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gd=function(e,t,n,i,s,o){var a=e._gsap,l=s||vd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],y=l[5],M=t.split(" "),v=parseFloat(M[0])||0,b=parseFloat(M[1])||0,T,x,S,R;n?l!==gl&&(x=d*m-p*_)&&(S=v*(m/x)+b*(-_/x)+(_*y-m*g)/x,R=v*(-p/x)+b*(d/x)-(d*y-p*g)/x,v=S,b=R):(T=o0(e),v=T.x+(~M[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(M[1]||M[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&a.smooth?(g=v-c,y=b-u,a.xOffset=h+(g*d+y*_)-g,a.yOffset=f+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[gi]="0px 0px",o&&(xs(o,a,"xOrigin",c,v),xs(o,a,"yOrigin",u,b),xs(o,a,"xOffset",h,a.xOffset),xs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},_l=function(e,t){var n=e._gsap||new rd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ci(e,gi)||"0",u,h,f,d,p,_,m,g,y,M,v,b,T,x,S,R,A,D,L,U,C,B,k,N,Z,G,P,J,le,be,X,ce;return u=h=f=_=m=g=y=M=v=0,d=p=1,n.svg=!!(e.getCTM&&a0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),i.scale=i.rotate=i.translate="none"),x=vd(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),gd(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,x)),b=n.xOrigin||0,T=n.yOrigin||0,x!==gl&&(D=x[0],L=x[1],U=x[2],C=x[3],u=B=x[4],h=k=x[5],x.length===6?(d=Math.sqrt(D*D+L*L),p=Math.sqrt(C*C+U*U),_=D||L?Ko(L,D)*Qs:0,y=U||C?Ko(U,C)*Qs+_:0,y&&(p*=Math.abs(Math.cos(y*Jo))),n.svg&&(u-=b-(b*D+T*U),h-=T-(b*L+T*C))):(ce=x[6],be=x[7],P=x[8],J=x[9],le=x[10],X=x[11],u=x[12],h=x[13],f=x[14],S=Ko(ce,le),m=S*Qs,S&&(R=Math.cos(-S),A=Math.sin(-S),N=B*R+P*A,Z=k*R+J*A,G=ce*R+le*A,P=B*-A+P*R,J=k*-A+J*R,le=ce*-A+le*R,X=be*-A+X*R,B=N,k=Z,ce=G),S=Ko(-U,le),g=S*Qs,S&&(R=Math.cos(-S),A=Math.sin(-S),N=D*R-P*A,Z=L*R-J*A,G=U*R-le*A,X=C*A+X*R,D=N,L=Z,U=G),S=Ko(L,D),_=S*Qs,S&&(R=Math.cos(S),A=Math.sin(S),N=D*R+L*A,Z=B*R+k*A,L=L*R-D*A,k=k*R-B*A,D=N,B=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=en(Math.sqrt(D*D+L*L+U*U)),p=en(Math.sqrt(k*k+ce*ce)),S=Ko(B,k),y=Math.abs(S)>2e-4?S*Qs:0,v=X?1/(X<0?-X:X):0),n.svg&&(N=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!c0(Ci(e,qt)),N&&e.setAttribute("transform",N))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=en(d),n.scaleY=en(p),n.rotation=en(_)+a,n.rotationX=en(m)+a,n.rotationY=en(g)+a,n.skewX=y+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[gi]=Qc(c)),n.xOffset=n.yOffset=0,n.force3D=mi.force3D,n.renderTransform=n.svg?ES:s0?u0:wS,n.uncache=0,n},Qc=function(e){return(e=e.split(" "))[0]+" "+e[1]},fd=function(e,t,n){var i=Pn(t);return en(parseFloat(t)+parseFloat(vs(e,"x",n+"px",i)))+i},wS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,u0(e,t)},$s="0deg",ml="0px",js=") ",u0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,y=n.target,M=n.zOrigin,v="",b=g==="auto"&&e&&e!==1||g===!0;if(M&&(h!==$s||u!==$s)){var T=parseFloat(u)*Jo,x=Math.sin(T),S=Math.cos(T),R;T=parseFloat(h)*Jo,R=Math.cos(T),o=fd(y,o,x*R*-M),a=fd(y,a,-Math.sin(T)*-M),l=fd(y,l,S*R*-M+M)}m!==ml&&(v+="perspective("+m+js),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(b||o!==ml||a!==ml||l!==ml)&&(v+=l!==ml||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+js),c!==$s&&(v+="rotate("+c+js),u!==$s&&(v+="rotateY("+u+js),h!==$s&&(v+="rotateX("+h+js),(f!==$s||d!==$s)&&(v+="skew("+f+", "+d+js),(p!==1||_!==1)&&(v+="scale("+p+", "+_+js),y.style[qt]=v||"translate(0, 0)"},ES=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,y=n.forceCSS,M=parseFloat(o),v=parseFloat(a),b,T,x,S,R;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Jo,c*=Jo,b=Math.cos(l)*h,T=Math.sin(l)*h,x=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=Jo,R=Math.tan(c-u),R=Math.sqrt(1+R*R),x*=R,S*=R,u&&(R=Math.tan(u),R=Math.sqrt(1+R*R),b*=R,T*=R)),b=en(b),T=en(T),x=en(x),S=en(S)):(b=h,S=f,T=x=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=vs(d,"x",o,"px"),v=vs(d,"y",a,"px")),(p||_||m||g)&&(M=en(M+p-(p*b+_*x)+m),v=en(v+_-(p*T+_*S)+g)),(i||s)&&(R=d.getBBox(),M=en(M+i/100*R.width),v=en(v+s/100*R.height)),R="matrix("+b+","+T+","+x+","+S+","+M+","+v+")",d.setAttribute("transform",R),y&&(d.style[qt]=R)},AS=function(e,t,n,i,s){var o=360,a=xn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Yg)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Yg)%o-~~(c/o)*o)),e._pt=f=new ei(e._pt,t,n,i,c,cS),f.e=u,f.u="deg",e._props.push(n),f},e0=function(e,t){for(var n in t)e[n]=t[n];return e},RS=function(e,t,n){var i=e0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[qt]=t,a=_l(n,1),ys(n,qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qt],o[qt]=t,a=_l(n,1),o[qt]=c);for(l in Nr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Pn(c),p=Pn(u),h=d!==p?vs(n,l,c,p):parseFloat(c),f=parseFloat(u),e._pt=new ei(e._pt,a,l,h,f-h,dd),e._pt.u=p||0,e._props.push(l));e0(a,i)};Qn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});jc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(p){return Dr(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Sd={name:"css",register:md,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,p,_,m,g,y,M,v,b,T,x,S,R;_d||md(),this.styles=this.styles||r0(e),S=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(fi[_]&&od(_,t,n,i,e,s)))){if(d=typeof u,p=jc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Yo(u)),p)p(this,e,_,u,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ir.lastIndex=0,Ir.test(c)||(m=Pn(c),g=Pn(u),g?m!==g&&(c=vs(e,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),S.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],xn(c)&&~c.indexOf("random(")&&(c=Yo(c)),Pn(c+"")||c==="auto"||(c+=mi.units[_]||Pn(Dr(e,_))||""),(c+"").charAt(1)==="="&&(c=Dr(e,_))):c=Dr(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in mr&&(_==="autoAlpha"&&(f===1&&Dr(e,"visibility")==="hidden"&&h&&(f=0),S.push("visibility",0,a.visibility),xs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=mr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Nr,M){if(this.styles.save(_),R=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ci(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=Ci(e,"perspective"),A?e.style.perspective=A:ys(e,"perspective")}h=parseFloat(u)}if(v||(b=e._gsap,b.renderTransform&&!t.parseTransform||_l(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new ei(this._pt,a,qt,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new ei(this._pt,b,"scaleY",b.scaleY,(y?Zs(b.scaleY,y+h):h)-b.scaleY||0,dd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(gi,0,a[gi]),u=bS(u),b.svg?gd(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==b.zOrigin&&xs(this,b,"zOrigin",b.zOrigin,g),xs(this,a,_,Qc(c),Qc(u)));continue}else if(_==="svgOrigin"){gd(e,u,1,T,0,this);continue}else if(_ in l0){AS(this,b,_,f,y?Zs(f,y+u):u);continue}else if(_==="smoothOrigin"){xs(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){RS(this,u,e);continue}}else _ in a||(_=$o(_)||_);if(M||(h||h===0)&&(f||f===0)&&!lS.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),g=Pn(u)||(_ in mi.units?mi.units[_]:m),m!==g&&(f=vs(e,_,c,g)),this._pt=new ei(this._pt,M?b:a,_,f,(y?Zs(f,y+h):h)-f,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?fS:dd),this._pt.u=g||0,M&&R!==u?(this._pt.b=c,this._pt.e=R,this._pt.r=hS):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=uS);else if(_ in a)MS.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Yc(_,u);continue}M||(_ in a?S.push(_,0,a[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),o.push(_)}}x&&hd(this)},render:function(e,t){if(t.tween._time||!xd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Dr,aliases:mr,getSetter:function(e,t,n){var i=mr[t];return i&&i.indexOf(",")<0&&(t=i),t in Nr&&t!==gi&&(e._gsap.x||Dr(e,"x"))?n&&qg===n?t==="scale"?gS:mS:(qg=n||{})&&(t==="scale"?_S:xS):e.style&&!qc(e.style[t])?dS:~t.indexOf("-")?pS:$c(e,t)},core:{_removeProperty:ys,_getMatrix:vd}};Gn.utils.checkPrefix=$o;Gn.core.getStyleSaver=r0;(function(r,e,t,n){var i=Qn(r+","+e+","+t,function(s){Nr[s]=1});Qn(e,function(s){mi.units[s]="deg",l0[s]=1}),mr[i[13]]=r+","+e,Qn(n,function(s){var o=s.split(":");mr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){mi.units[r]="px"});Gn.registerPlugin(Sd);var Yt=Gn.registerPlugin(Sd)||Gn,OA=Yt.core.Tween;function h0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function CS(r,e,t){return e&&h0(r.prototype,e),t&&h0(r,t),r}var In,nu,PS,_i,Ss,Ms,Qo,d0,to,ea,p0,Or,nr,m0,g0=function(){return In||typeof window<"u"&&(In=window.gsap)&&In.registerPlugin&&In},_0=1,jo=[],tt=[],ir=[],yl=Date.now,Md=function(e,t){return t},IS=function(){var e=ea.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,ir),tt=n,ir=i,Md=function(o,a){return t[o](a)}},Fr=function(e,t){return~ir.indexOf(e)&&ir[ir.indexOf(e)+1][t]},vl=function(e){return!!~p0.indexOf(e)},ni=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},ti=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},eu="scrollLeft",tu="scrollTop",bd=function(){return Or&&Or.isPressed||tt.cache++},iu=function(e,t){var n=function i(s){if(s||s===0){_0&&_i.history.scrollRestoration!=="manual"&&(_i.history.scrollRestoration="manual");var o=Or&&Or.isPressed;s=i.v=Math.round(s)||(Or&&Or.iOS?1:0),e(s),i.cacheID=tt.cache,o&&Md("ss",s)}else(t||tt.cache!==i.cacheID||Md("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Vn={s:eu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:iu(function(r){return arguments.length?_i.scrollTo(r,hn.sc()):_i.pageXOffset||Ss[eu]||Ms[eu]||Qo[eu]||0})},hn={s:tu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:iu(function(r){return arguments.length?_i.scrollTo(Vn.sc(),r):_i.pageYOffset||Ss[tu]||Ms[tu]||Qo[tu]||0})},ii=function(e,t){return(t&&t._ctx&&t._ctx.selector||In.utils.toArray)(e)[0]||(typeof e=="string"&&In.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},LS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ur=function(e,t){var n=t.s,i=t.sc;vl(e)&&(e=Ss.scrollingElement||Ms);var s=tt.indexOf(e),o=i===hn.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+o]||ni(e,"scroll",bd);var a=tt[s+o],l=a||(tt[s+o]=iu(Fr(e,n),!0)||(vl(e)?i:iu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=In.getProperty(e,"scrollBehavior")==="smooth"),l},ru=function(e,t,n){var i=e,s=e,o=yl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=yl();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(p){var _=a,m=s,g=yl();return(p||p===0)&&p!==i&&u(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},xl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},f0=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},x0=function(){ea=In.core.globals().ScrollTrigger,ea&&ea.core&&IS()},y0=function(e){return In=e||g0(),!nu&&In&&typeof document<"u"&&document.body&&(_i=window,Ss=document,Ms=Ss.documentElement,Qo=Ss.body,p0=[_i,Ss,Ms,Qo],PS=In.utils.clamp,m0=In.core.context||function(){},to="onpointerenter"in Qo?"pointer":"mouse",d0=tn.isTouch=_i.matchMedia&&_i.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _i||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,nr=tn.eventTypes=("ontouchstart"in Ms?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ms?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _0=0},500),nu=1),ea||x0(),nu};Vn.op=hn;tt.cache=0;var tn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){nu||y0(In)||console.warn("Please gsap.registerPlugin(Observer)"),ea||x0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,y=n.onDrag,M=n.onPress,v=n.onRelease,b=n.onRight,T=n.onLeft,x=n.onUp,S=n.onDown,R=n.onChangeX,A=n.onChangeY,D=n.onChange,L=n.onToggleX,U=n.onToggleY,C=n.onHover,B=n.onHoverEnd,k=n.onMove,N=n.ignoreCheck,Z=n.isNormalizer,G=n.onGestureStart,P=n.onGestureEnd,J=n.onWheel,le=n.onEnable,be=n.onDisable,X=n.onClick,ce=n.scrollSpeed,_e=n.capture,Te=n.allowClicks,de=n.lockAxis,ae=n.onLockAxis;this.target=a=ii(a)||Ms,this.vars=n,d&&(d=In.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,ce=ce||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(_i.getComputedStyle(Qo).lineHeight)||22);var Ne,oe,Re,ee,pe,De,Fe,Y=this,Qe=0,Bt=0,pt=n.passive||!u&&n.passive!==!1,Je=Ur(a,Vn),Lt=Ur(a,hn),rn=Je(),H=Lt(),_t=~o.indexOf("touch")&&!~o.indexOf("pointer")&&nr[0]==="pointerdown",ft=vl(a),Ye=a.ownerDocument||Ss,xe=[0,0,0],mt=[0,0,0],ze=0,We=function(){return ze=yl()},I=function(Se,se){return(Y.event=Se)&&d&&LS(Se.target,d)||se&&_t&&Se.pointerType!=="touch"||N&&N(Se,se)},w=function(){Y._vx.reset(),Y._vy.reset(),oe.pause(),h&&h(Y)},W=function(){var Se=Y.deltaX=f0(xe),se=Y.deltaY=f0(mt),ne=Math.abs(Se)>=i,we=Math.abs(se)>=i;D&&(ne||we)&&D(Y,Se,se,xe,mt),ne&&(b&&Y.deltaX>0&&b(Y),T&&Y.deltaX<0&&T(Y),R&&R(Y),L&&Y.deltaX<0!=Qe<0&&L(Y),Qe=Y.deltaX,xe[0]=xe[1]=xe[2]=0),we&&(S&&Y.deltaY>0&&S(Y),x&&Y.deltaY<0&&x(Y),A&&A(Y),U&&Y.deltaY<0!=Bt<0&&U(Y),Bt=Y.deltaY,mt[0]=mt[1]=mt[2]=0),(ee||Re)&&(k&&k(Y),Re&&(m&&Re===1&&m(Y),y&&y(Y),Re=0),ee=!1),De&&!(De=!1)&&ae&&ae(Y),pe&&(J(Y),pe=!1),Ne=0},ue=function(Se,se,ne){xe[ne]+=Se,mt[ne]+=se,Y._vx.update(Se),Y._vy.update(se),c?Ne||(Ne=requestAnimationFrame(W)):W()},re=function(Se,se){de&&!Fe&&(Y.axis=Fe=Math.abs(Se)>Math.abs(se)?"x":"y",De=!0),Fe!=="y"&&(xe[2]+=Se,Y._vx.update(Se,!0)),Fe!=="x"&&(mt[2]+=se,Y._vy.update(se,!0)),c?Ne||(Ne=requestAnimationFrame(W)):W()},ge=function(Se){if(!I(Se,1)){Se=xl(Se,u);var se=Se.clientX,ne=Se.clientY,we=se-Y.x,ie=ne-Y.y,Ie=Y.isDragging;Y.x=se,Y.y=ne,(Ie||(we||ie)&&(Math.abs(Y.startX-se)>=s||Math.abs(Y.startY-ne)>=s))&&(Re||(Re=Ie?2:1),Ie||(Y.isDragging=!0),re(we,ie))}},Me=Y.onPress=function(he){I(he,1)||he&&he.button||(Y.axis=Fe=null,oe.pause(),Y.isPressed=!0,he=xl(he),Qe=Bt=0,Y.startX=Y.x=he.clientX,Y.startY=Y.y=he.clientY,Y._vx.reset(),Y._vy.reset(),ni(Z?a:Ye,nr[1],ge,pt,!0),Y.deltaX=Y.deltaY=0,M&&M(Y))},q=Y.onRelease=function(he){if(!I(he,1)){ti(Z?a:Ye,nr[1],ge,!0);var Se=!isNaN(Y.y-Y.startY),se=Y.isDragging,ne=se&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),we=xl(he);!ne&&Se&&(Y._vx.reset(),Y._vy.reset(),u&&Te&&In.delayedCall(.08,function(){if(yl()-ze>300&&!he.defaultPrevented){if(he.target.click)he.target.click();else if(Ye.createEvent){var ie=Ye.createEvent("MouseEvents");ie.initMouseEvent("click",!0,!0,_i,1,we.screenX,we.screenY,we.clientX,we.clientY,!1,!1,!1,!1,0,null),he.target.dispatchEvent(ie)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,h&&se&&!Z&&oe.restart(!0),Re&&W(),g&&se&&g(Y),v&&v(Y,ne)}},te=function(Se){return Se.touches&&Se.touches.length>1&&(Y.isGesturing=!0)&&G(Se,Y.isDragging)},me=function(){return(Y.isGesturing=!1)||P(Y)},O=function(Se){if(!I(Se)){var se=Je(),ne=Lt();ue((se-rn)*ce,(ne-H)*ce,1),rn=se,H=ne,h&&oe.restart(!0)}},Q=function(Se){if(!I(Se)){Se=xl(Se,u),J&&(pe=!0);var se=(Se.deltaMode===1?l:Se.deltaMode===2?_i.innerHeight:1)*p;ue(Se.deltaX*se,Se.deltaY*se,0),h&&!Z&&oe.restart(!0)}},j=function(Se){if(!I(Se)){var se=Se.clientX,ne=Se.clientY,we=se-Y.x,ie=ne-Y.y;Y.x=se,Y.y=ne,ee=!0,h&&oe.restart(!0),(we||ie)&&re(we,ie)}},ye=function(Se){Y.event=Se,C(Y)},fe=function(Se){Y.event=Se,B(Y)},ve=function(Se){return I(Se)||xl(Se,u)&&X(Y)};oe=Y._dc=In.delayedCall(f||.25,w).pause(),Y.deltaX=Y.deltaY=0,Y._vx=ru(0,50,!0),Y._vy=ru(0,50,!0),Y.scrollX=Je,Y.scrollY=Lt,Y.isDragging=Y.isGesturing=Y.isPressed=!1,m0(this),Y.enable=function(he){return Y.isEnabled||(ni(ft?Ye:a,"scroll",bd),o.indexOf("scroll")>=0&&ni(ft?Ye:a,"scroll",O,pt,_e),o.indexOf("wheel")>=0&&ni(a,"wheel",Q,pt,_e),(o.indexOf("touch")>=0&&d0||o.indexOf("pointer")>=0)&&(ni(a,nr[0],Me,pt,_e),ni(Ye,nr[2],q),ni(Ye,nr[3],q),Te&&ni(a,"click",We,!0,!0),X&&ni(a,"click",ve),G&&ni(Ye,"gesturestart",te),P&&ni(Ye,"gestureend",me),C&&ni(a,to+"enter",ye),B&&ni(a,to+"leave",fe),k&&ni(a,to+"move",j)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=ee=Re=!1,Y._vx.reset(),Y._vy.reset(),rn=Je(),H=Lt(),he&&he.type&&Me(he),le&&le(Y)),Y},Y.disable=function(){Y.isEnabled&&(jo.filter(function(he){return he!==Y&&vl(he.target)}).length||ti(ft?Ye:a,"scroll",bd),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),ti(Z?a:Ye,nr[1],ge,!0)),ti(ft?Ye:a,"scroll",O,_e),ti(a,"wheel",Q,_e),ti(a,nr[0],Me,_e),ti(Ye,nr[2],q),ti(Ye,nr[3],q),ti(a,"click",We,!0),ti(a,"click",ve),ti(Ye,"gesturestart",te),ti(Ye,"gestureend",me),ti(a,to+"enter",ye),ti(a,to+"leave",fe),ti(a,to+"move",j),Y.isEnabled=Y.isPressed=Y.isDragging=!1,be&&be(Y))},Y.kill=Y.revert=function(){Y.disable();var he=jo.indexOf(Y);he>=0&&jo.splice(he,1),Or===Y&&(Or=0)},jo.push(Y),Z&&vl(a)&&(Or=Y),Y.enable(_)},CS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();tn.version="3.15.1";tn.create=function(r){return new tn(r)};tn.register=y0;tn.getAll=function(){return jo.slice()};tn.getById=function(r){return jo.filter(function(e){return e.vars.id===r})[0]};g0()&&In.registerPlugin(tn);var Oe,ra,rt,Tt,Li,St,Fd,vu,Dl,Al,Ml,su,Wn,bu,Pd,si,v0,S0,sa,F0,Td,B0,ri,Id,k0,z0,bs,Ld,Bd,oa,kd,Ts,Dd,wd,ou=1,Xn=Date.now,Ed=Xn(),Wi=0,bl=0,M0=function(e,t,n){var i=Ii(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},b0=function(e,t){return t&&(!Ii(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},DS=function r(){return bl&&requestAnimationFrame(r)},T0=function(){return bu=1},w0=function(){return bu=0},gr=function(e){return e},Tl=function(e){return Math.round(e*1e5)/1e5||0},H0=function(){return typeof window<"u"},G0=function(){return Oe||H0()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},ao=function(e){return!!~Fd.indexOf(e)},V0=function(e){return(e==="Height"?kd:rt["inner"+e])||Li["client"+e]||St["client"+e]},W0=function(e){return Fr(e,"getBoundingClientRect")||(ao(e)?function(){return yu.width=rt.innerWidth,yu.height=kd,yu}:function(){return Br(e)})},NS=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Fr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?V0(s):e["client"+s])||0}},OS=function(e,t){return!t||~ir.indexOf(e)?W0(e):function(){return yu}},_r=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Fr(e,n))?o()-W0(e)()[s]:ao(e)?(Li[n]||St[n])-V0(i):e[n]-e["offset"+i])},au=function(e,t){for(var n=0;n<sa.length;n+=3)(!t||~t.indexOf(sa[n+1]))&&e(sa[n],sa[n+1],sa[n+2])},Ii=function(e){return typeof e=="string"},qn=function(e){return typeof e=="function"},wl=function(e){return typeof e=="number"},no=function(e){return typeof e=="object"},Sl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ta=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},na=Math.abs,X0="left",q0="top",zd="right",Hd="bottom",ro="width",so="height",Rl="Right",Cl="Left",Pl="Top",Il="Bottom",fn="padding",Gi="margin",la="Width",Gd="Height",yn="px",Vi=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},US=function(e){var t=Vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},E0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Br=function(e,t){var n=t&&Vi(e)[Pd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Su=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Y0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},FS=function(e){return function(t){return Oe.utils.snap(Y0(e),t)}},Vd=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},BS=function(e){return function(t,n){return Vd(Y0(e))(t,n.direction)}},lu=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},En=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},A0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},uu={toggleActions:"play",anticipatePin:0},Mu={top:0,left:0,center:.5,bottom:1,right:1},mu=function(e,t){if(Ii(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Mu?Mu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},hu=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,p=Tt.createElement("div"),_=ao(n)||Fr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?St:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,M=y?c:u,v="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===hn?zd:Hd)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=v,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],gu(p,0,i,y),p},gu=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+la]=1,s["border"+a+la]=0,s[n.p]=t+"px",Oe.set(e,s)},it=[],Nd={},Nl,R0=function(){return Xn()-Wi>34&&(Nl||(Nl=requestAnimationFrame(kr)))},ia=function(){(!ri||!ri.isPressed||ri.startX>St.clientWidth)&&(tt.cache++,ri?Nl||(Nl=requestAnimationFrame(kr)):kr(),Wi||co("scrollStart"),Wi=Xn())},Ad=function(){z0=rt.innerWidth,k0=rt.innerHeight},El=function(e){tt.cache++,(e===!0||!Wn&&!B0&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!Id||z0!==rt.innerWidth||Math.abs(rt.innerHeight-k0)>rt.innerHeight*.25))&&vu.restart(!0)},lo={},kS=[],K0=function r(){return wn(Ze,"scrollEnd",r)||io(!0)},co=function(e){return lo[e]&&lo[e].map(function(t){return t()})||kS},Pi=[],Z0=function(e){for(var t=0;t<Pi.length;t+=5)(!e||Pi[t+4]&&Pi[t+4].query===e)&&(Pi[t].style.cssText=Pi[t+1],Pi[t].getBBox&&Pi[t].setAttribute("transform",Pi[t+2]||""),Pi[t+3].uncache=1)},J0=function(){tt.cache++,tt.forEach(function(e){return qn(e)&&(e.rec=e())})},Wd=function(e,t){var n;for(si=0;si<it.length;si++)n=it[si],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ts=!0,t&&Z0(t),t||co("revert")},$0=function(e,t){tt.cache++,(t||!oi)&&tt.forEach(function(n){return qn(n)&&n.cacheID++&&(n.rec=0)}),Ii(e)&&(Bd=e,rt.history.scrollRestoration!==e&&(rt.history.scrollRestoration=e))},oi,oo=0,C0,zS=function(){if(C0!==oo){var e=C0=oo;requestAnimationFrame(function(){return e===oo&&io(!0)})}},j0=function(){St.appendChild(oa),kd=!ri&&oa.offsetHeight||rt.innerHeight,St.removeChild(oa)},P0=function(e){return Dl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},io=function(e,t){if(Li=Tt.documentElement,St=Tt.body,Fd=[rt,Tt,Li,St],Wi&&!e&&!Ts){En(Ze,"scrollEnd",K0);return}j0(),oi=Ze.isRefreshing=!0,Ts||J0();var n=co("refreshInit");F0&&Ze.sort(),t||Wd(),tt.forEach(function(i){qn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Ts=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Dd=1,P0(!0),it.forEach(function(i){var s=_r(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),P0(!1),Dd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){qn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),$0(Bd,1),vu.pause(),oo++,oi=2,kr(2),it.forEach(function(i){return qn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),oi=Ze.isRefreshing=!1,co("refresh")},Od=0,_u=1,Ll,kr=function(e){if(e===2||!oi&&!Ts){Ze.isUpdating=!0,Ll&&Ll.update(0);var t=it.length,n=Xn(),i=n-Ed>=50,s=t&&it[0].scroll();if(_u=Od>s?-1:1,oi||(Od=s),i&&(Wi&&!bu&&n-Wi>200&&(Wi=0,co("scrollEnd")),Ml=Ed,Ed=n),_u<0){for(si=t;si-- >0;)it[si]&&it[si].update(0,i);_u=1}else for(si=0;si<t;si++)it[si]&&it[si].update(0,i);Ze.isUpdating=!1}Nl=0},Ud=[X0,q0,Hd,zd,Gi+Il,Gi+Rl,Gi+Pl,Gi+Cl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xu=Ud.concat([ro,so,"boxSizing","max"+la,"max"+Gd,"position",Gi,fn,fn+Pl,fn+Rl,fn+Il,fn+Cl]),HS=function(e,t,n){aa(n);var i=e._gsap;if(i.spacerIsNative)aa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Rd=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ud.length,o=t.style,a=e.style,l;s--;)l=Ud[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Hd]=a[zd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ro]=Su(e,Vn)+yn,o[so]=Su(e,hn)+yn,o[fn]=a[Gi]=a[q0]=a[X0]="0",aa(i),a[ro]=a["max"+la]=n[ro],a[so]=a["max"+Gd]=n[so],a[fn]=n[fn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},GS=/([A-Z])/g,aa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(GS,"-$1").toLowerCase())}},fu=function(e){for(var t=xu.length,n=e.style,i=[],s=0;s<t;s++)i.push(xu[s],n[xu[s]]);return i.t=e,i},VS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},yu={left:0,top:0},I0=function(e,t,n,i,s,o,a,l,c,u,h,f,d,p){qn(e)&&(e=e(l)),Ii(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?mu("0"+e.substr(3),n):0));var _=d?d.time():0,m,g,y;if(d&&d.seek(0),isNaN(e)||(e=+e),wl(e))d&&(e=Oe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&gu(a,n,i,!0);else{qn(t)&&(t=t(l));var M=(e||"0").split(" "),v,b,T,x;y=ii(t,l)||St,v=Br(y)||{},(!v||!v.left&&!v.top)&&Vi(y).display==="none"&&(x=y.style.display,y.style.display="block",v=Br(y),x?y.style.display=x:y.style.removeProperty("display")),b=mu(M[0],v[i.d]),T=mu(M[1]||"0",n),e=v[i.p]-c[i.p]-u+b+s-T,a&&gu(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var S=e+n,R=o._isStart;m="scroll"+i.d2,gu(o,S,i,R&&S>20||!R&&(h?Math.max(St[m],Li[m]):o.parentNode[m])<=S+1),h&&(c=Br(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+yn))}return d&&y&&(m=Br(y),d.seek(f),g=Br(y),d._caScrollDist=m[i.p]-g[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},WS=/(webkit|moz|length|cssText|inset)/i,L0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Vi(e);for(o in a)!+o&&!WS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},Q0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},du=function(e,t,n){var i={};i[t.p]="+="+n,Oe.set(e,i)},D0=function(e,t){var n=Ur(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,p={};c=c||n();var _=Q0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){tt.cache++,o.tween&&kr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Oe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},En(e,"wheel",n.wheelHandler),Ze.isTouch&&En(e,"touchmove",n.wheelHandler),s},Ze=(function(){function r(t,n){ra||r.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ld(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!bl){this.update=this.refresh=this.kill=gr;return}n=E0(Ii(n)||wl(n)||n.nodeType?{trigger:n}:n,uu);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,M=s.once,v=s.snap,b=s.pinReparent,T=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,R=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Vn:hn,D=!h&&h!==0,L=ii(n.scroller||rt),U=Oe.core.getCache(L),C=ao(L),B=("pinType"in n?n.pinType:Fr(L,"pinType")||C&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=D&&n.toggleActions.split(" "),Z="markers"in n?n.markers:uu.markers,G=C?0:parseFloat(Vi(L)["border"+A.p2+la])||0,P=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(P)},le=NS(L,C,A),be=OS(L,C),X=0,ce=0,_e=0,Te=Ur(L,A),de,ae,Ne,oe,Re,ee,pe,De,Fe,Y,Qe,Bt,pt,Je,Lt,rn,H,_t,ft,Ye,xe,mt,ze,We,I,w,W,ue,re,ge,Me,q,te,me,O,Q,j,ye,fe;if(P._startClamp=P._endClamp=!1,P._dir=A,m*=45,P.scroller=L,P.scroll=x?x.time.bind(x):Te,oe=Te(),Ts&&Te.rec==null&&(Te.rec=oe),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(F0=1,n.refreshPriority===-9999&&(Ll=P)),U.tweenScroll=U.tweenScroll||{top:D0(L,hn),left:D0(L,Vn)},P.tweenTo=de=U.tweenScroll[A.p],P.scrubDuration=function(ne){te=wl(ne)&&ne,te?q?q.duration(ne):q=Oe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:te,paused:!0,onComplete:function(){return g&&g(P)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),ge=0,l||(l=i.vars.id)),v&&((!no(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in St.style&&Oe.set(C?[St,Li]:L,{scrollBehavior:"auto"}),tt.forEach(function(ne){return qn(ne)&&ne.target===(C?Tt.scrollingElement||Li:L)&&(ne.smooth=!1)}),Ne=qn(v.snapTo)?v.snapTo:v.snapTo==="labels"?FS(i):v.snapTo==="labelsDirectional"?BS(i):v.directional!==!1?function(ne,we){return Vd(v.snapTo)(ne,Xn()-ce<500?0:we.direction)}:Oe.utils.snap(v.snapTo),me=v.duration||{min:.1,max:2},me=no(me)?Al(me.min,me.max):Al(me,me),O=Oe.delayedCall(v.delay||te/2||.1,function(){var ne=Te(),we=Xn()-ce<500,ie=de.tween;if((we||Math.abs(P.getVelocity())<10)&&!ie&&!bu&&X!==ne){var Ie=(ne-ee)/Je,lt=i&&!D?i.totalProgress():Ie,$e=we?0:(lt-Me)/(Xn()-Ml)*1e3||0,kt=Oe.utils.clamp(-Ie,1-Ie,na($e/2)*$e/.185),ln=Ie+(v.inertia===!1?0:kt),zt,At,vt=v,mn=vt.onStart,Rt=vt.onInterrupt,Fn=vt.onComplete;if(zt=Ne(ln,P),wl(zt)||(zt=ln),At=Math.max(0,Math.round(ee+zt*Je)),ne<=pe&&ne>=ee&&At!==ne){if(ie&&!ie._initted&&ie.data<=na(At-ne))return;v.inertia===!1&&(kt=zt-Ie),de(At,{duration:me(na(Math.max(na(ln-lt),na(zt-lt))*.185/$e/.05||0)),ease:v.ease||"power3",data:na(At-ne),onInterrupt:function(){return O.restart(!0)&&Rt&&ta(P,Rt)},onComplete:function(){P.update(),X=Te(),i&&!D&&(q?q.resetTo("totalProgress",zt,i._tTime/i._tDur):i.progress(zt)),ge=Me=i&&!D?i.totalProgress():P.progress,y&&y(P),Fn&&ta(P,Fn)}},ne,kt*Je,At-ne-kt*Je),mn&&ta(P,mn,de.tween)}}else P.isActive&&X!==ne&&O.restart(!0)}).pause()),l&&(Nd[l]=P),f=P.trigger=ii(f||d!==!0&&d),fe=f&&f._gsap&&f._gsap.stRevert,fe&&(fe=fe(P)),d=d===!0?f:ii(d),Ii(a)&&(a={targets:f,className:a}),d&&(p===!1||p===Gi||(p=!p&&d.parentNode&&d.parentNode.style&&Vi(d.parentNode).display==="flex"?!1:fn),P.pin=d,ae=Oe.core.getCache(d),ae.spacer?Lt=ae.pinState:(T&&(T=ii(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ae.spacerIsNative=!!T,T&&(ae.spacerState=fu(T))),ae.spacer=_t=T||Tt.createElement("div"),_t.classList.add("pin-spacer"),l&&_t.classList.add("pin-spacer-"+l),ae.pinState=Lt=fu(d)),n.force3D!==!1&&Oe.set(d,{force3D:!0}),P.spacer=_t=ae.spacer,re=Vi(d),We=re[p+A.os2],Ye=Oe.getProperty(d),xe=Oe.quickSetter(d,A.a,yn),Rd(d,_t,re),H=fu(d)),Z){Bt=no(Z)?E0(Z,A0):A0,Y=hu("scroller-start",l,L,A,Bt,0),Qe=hu("scroller-end",l,L,A,Bt,0,Y),ft=Y["offset"+A.op.d2];var ve=ii(Fr(L,"content")||L);De=this.markerStart=hu("start",l,ve,A,Bt,ft,0,x),Fe=this.markerEnd=hu("end",l,ve,A,Bt,ft,0,x),x&&(ye=Oe.quickSetter([De,Fe],A.a,yn)),!B&&!(ir.length&&Fr(L,"fixedMarkers")===!0)&&(US(C?St:L),Oe.set([Y,Qe],{force3D:!0}),w=Oe.quickSetter(Y,A.a,yn),ue=Oe.quickSetter(Qe,A.a,yn))}if(x){var he=x.vars.onUpdate,Se=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){P.update(0,0,1),he&&he.apply(x,Se||[])})}if(P.previous=function(){return it[it.indexOf(P)-1]},P.next=function(){return it[it.indexOf(P)+1]},P.revert=function(ne,we){if(!we)return P.kill(!0);var ie=ne!==!1||!P.enabled,Ie=Wn;ie!==P.isReverted&&(ie&&(Q=Math.max(Te(),P.scroll.rec||0),_e=P.progress,j=i&&i.progress()),De&&[De,Fe,Y,Qe].forEach(function(lt){return lt.style.display=ie?"none":"block"}),ie&&(Wn=P,P.update(ie)),d&&(!b||!P.isActive)&&(ie?HS(d,_t,Lt):Rd(d,_t,Vi(d),I)),ie||P.update(ie),Wn=Ie,P.isReverted=ie)},P.refresh=function(ne,we,ie,Ie){if(!((Wn||!P.enabled)&&!we)){if(d&&ne&&Wi){En(r,"scrollEnd",K0);return}!oi&&J&&J(P),Wn=P,de.tween&&!ie&&(de.tween.kill(),de.tween=0),q&&q.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(V){return V.vars.immediateRender&&V.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var lt=le(),$e=be(),kt=x?x.duration():_r(L,A),ln=Je<=.01||!Je,zt=0,At=Ie||0,vt=no(ie)?ie.end:n.end,mn=n.endTrigger||f,Rt=no(ie)?ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Fn=P.pinnedContainer=n.pinnedContainer&&ii(n.pinnedContainer,P),Ti=f&&Math.max(0,it.indexOf(P))||0,$t=Ti,cn,gn,wi,Ho,_n,jt,Bi,nl,Dc,us,E,F,$;for(Z&&no(ie)&&(F=Oe.getProperty(Y,A.p),$=Oe.getProperty(Qe,A.p));$t-- >0;)jt=it[$t],jt.end||jt.refresh(0,1)||(Wn=P),Bi=jt.pin,Bi&&(Bi===f||Bi===d||Bi===Fn)&&!jt.isReverted&&(us||(us=[]),us.unshift(jt),jt.revert(!0,!0)),jt!==it[$t]&&(Ti--,$t--);for(qn(Rt)&&(Rt=Rt(P)),Rt=M0(Rt,"start",P),ee=I0(Rt,f,lt,A,Te(),De,Y,P,$e,G,B,kt,x,P._startClamp&&"_startClamp")||(d?-.001:0),qn(vt)&&(vt=vt(P)),Ii(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Ii(Rt)?Rt.split(" ")[0]:"")+vt:(zt=mu(vt.substr(2),lt),vt=Ii(Rt)?Rt:(x?Oe.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,ee):ee)+zt,mn=f)),vt=M0(vt,"end",P),pe=Math.max(ee,I0(vt||(mn?"100% 0":kt),mn,lt,A,Te()+zt,Fe,Qe,P,$e,G,B,kt,x,P._endClamp&&"_endClamp"))||-.001,zt=0,$t=Ti;$t--;)jt=it[$t]||{},Bi=jt.pin,Bi&&jt.start-jt._pinPush<=ee&&!x&&jt.end>0&&(cn=jt.end-(P._startClamp?Math.max(0,jt.start):jt.start),(Bi===f&&jt.start-jt._pinPush<ee||Bi===Fn)&&isNaN(Rt)&&(zt+=cn*(1-jt.progress)),Bi===d&&(At+=cn));if(ee+=zt,pe+=zt,P._startClamp&&(P._startClamp+=zt),P._endClamp&&!oi&&(P._endClamp=pe||-.001,pe=Math.min(pe,_r(L,A))),Je=pe-ee||(ee-=.01)&&.001,ln&&(_e=Oe.utils.clamp(0,1,Oe.utils.normalize(ee,pe,Q))),P._pinPush=At,De&&zt&&(cn={},cn[A.a]="+="+zt,Fn&&(cn[A.p]="-="+Te()),Oe.set([De,Fe],cn)),d&&!(Dd&&P.end>=_r(L,A)))cn=Vi(d),Ho=A===hn,wi=Te(),mt=parseFloat(Ye(A.a))+At,!kt&&pe>1&&(E=(C?Tt.scrollingElement||Li:L).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},C&&Vi(St)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),Rd(d,_t,cn),H=fu(d),gn=Br(d,!0),nl=B&&Ur(L,Ho?Vn:hn)(),p?(I=[p+A.os2,Je+At+yn],I.t=_t,$t=p===fn?Su(d,A)+Je+At:0,$t&&(I.push(A.d,$t+yn),_t.style.flexBasis!=="auto"&&(_t.style.flexBasis=$t+yn)),aa(I),Fn&&it.forEach(function(V){V.pin===Fn&&V.vars.pinSpacing!==!1&&(V._subPinOffset=!0)}),B&&Te(Q)):($t=Su(d,A),$t&&_t.style.flexBasis!=="auto"&&(_t.style.flexBasis=$t+yn)),B&&(_n={top:gn.top+(Ho?wi-ee:nl)+yn,left:gn.left+(Ho?nl:wi-ee)+yn,boxSizing:"border-box",position:"fixed"},_n[ro]=_n["max"+la]=Math.ceil(gn.width)+yn,_n[so]=_n["max"+Gd]=Math.ceil(gn.height)+yn,_n[Gi]=_n[Gi+Pl]=_n[Gi+Rl]=_n[Gi+Il]=_n[Gi+Cl]="0",_n[fn]=cn[fn],_n[fn+Pl]=cn[fn+Pl],_n[fn+Rl]=cn[fn+Rl],_n[fn+Il]=cn[fn+Il],_n[fn+Cl]=cn[fn+Cl],rn=VS(Lt,_n,b),oi&&Te(0)),i?(Dc=i._initted,Td(1),i.render(i.duration(),!0,!0),ze=Ye(A.a)-mt+Je+At,W=Math.abs(Je-ze)>1,B&&W&&rn.splice(rn.length-2,2),i.render(0,!0,!0),Dc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Td(0)):ze=Je,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(f&&Te()&&!x)for(gn=f.parentNode;gn&&gn!==St;)gn._pinOffset&&(ee-=gn._pinOffset,pe-=gn._pinOffset),gn=gn.parentNode;us&&us.forEach(function(V){return V.revert(!1,!0)}),P.start=ee,P.end=pe,oe=Re=oi?Q:Te(),!x&&!oi&&!Ts&&(oe<Q&&Te(Q),P.scroll.rec=0),P.revert(!1,!0),ce=Xn(),O&&(X=-1,O.restart(!0)),Wn=0,i&&D&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(ln||_e!==P.progress||x||_||i&&!i._initted)&&(i&&!D&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(x&&ee<-.001&&!_e?Oe.utils.normalize(ee,pe,0):_e,!0),P.progress=ln||(oe-ee)/Je===_e?0:_e),d&&p&&(_t._pinOffset=Math.round(P.progress*ze)),q&&q.invalidate(),isNaN(F)||(F-=Oe.getProperty(Y,A.p),$-=Oe.getProperty(Qe,A.p),du(Y,A,F),du(De,A,F-(Ie||0)),du(Qe,A,$),du(Fe,A,$-(Ie||0))),ln&&!oi&&P.update(),u&&!oi&&!pt&&(pt=!0,u(P),pt=!1)}},P.getVelocity=function(){return(Te()-Re)/(Xn()-Ml)*1e3||0},P.endAnimation=function(){Sl(P.callbackAnimation),i&&(q?q.progress(1):i.paused()?D||Sl(i,P.direction<0,1):Sl(i,i.reversed()))},P.labelToScroll=function(ne){return i&&i.labels&&(ee||P.refresh()||ee)+i.labels[ne]/i.duration()*Je||0},P.getTrailing=function(ne){var we=it.indexOf(P),ie=P.direction>0?it.slice(0,we).reverse():it.slice(we+1);return(Ii(ne)?ie.filter(function(Ie){return Ie.vars.preventOverlaps===ne}):ie).filter(function(Ie){return P.direction>0?Ie.end<=ee:Ie.start>=pe})},P.update=function(ne,we,ie){if(!(x&&!ie&&!ne)){var Ie=oi===!0?Q:P.scroll(),lt=ne?0:(Ie-ee)/Je,$e=lt<0?0:lt>1?1:lt||0,kt=P.progress,ln,zt,At,vt,mn,Rt,Fn,Ti;if(we&&(Re=oe,oe=x?Te():Ie,v&&(Me=ge,ge=i&&!D?i.totalProgress():$e)),m&&d&&!Wn&&!ou&&Wi&&(!$e&&ee<Ie+(Ie-Re)/(Xn()-Ml)*m?$e=1e-4:$e===1&&pe>Ie+(Ie-Re)/(Xn()-Ml)*m&&($e=.9999)),$e!==kt&&P.enabled){if(ln=P.isActive=!!$e&&$e<1,zt=!!kt&&kt<1,Rt=ln!==zt,mn=Rt||!!$e!=!!kt,P.direction=$e>kt?1:-1,P.progress=$e,mn&&!Wn&&(At=$e&&!kt?0:$e===1?1:kt===1?2:3,D&&(vt=!Rt&&N[At+1]!=="none"&&N[At+1]||N[At],Ti=i&&(vt==="complete"||vt==="reset"||vt in i))),R&&(Rt||Ti)&&(Ti||h||!i)&&(qn(R)?R(P):P.getTrailing(R).forEach(function(wi){return wi.endAnimation()})),D||(q&&!Wn&&!ou?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",$e,i._tTime/i._tDur):(q.vars.totalProgress=$e,q.invalidate().restart())):i&&i.totalProgress($e,!!(Wn&&(ce||ne)))),d){if(ne&&p&&(_t.style[p+A.os2]=We),!B)xe(Tl(mt+ze*$e));else if(mn){if(Fn=!ne&&$e>kt&&pe+1>Ie&&Ie+1>=_r(L,A),b)if(!ne&&(ln||Fn)){var $t=Br(d,!0),cn=Ie-ee;L0(d,St,$t.top+(A===hn?cn:0)+yn,$t.left+(A===hn?0:cn)+yn)}else L0(d,_t);aa(ln||Fn?rn:H),W&&$e<1&&ln||xe(mt+($e===1&&!Fn?ze:0))}}v&&!de.tween&&!Wn&&!ou&&O.restart(!0),a&&(Rt||M&&$e&&($e<1||!wd))&&Dl(a.targets).forEach(function(wi){return wi.classList[ln||M?"add":"remove"](a.className)}),o&&!D&&!ne&&o(P),mn&&!Wn?(D&&(Ti&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(P)),(Rt||!wd)&&(c&&Rt&&ta(P,c),k[At]&&ta(P,k[At]),M&&($e===1?P.kill(!1,1):k[At]=0),Rt||(At=$e===1?1:3,k[At]&&ta(P,k[At]))),S&&!ln&&Math.abs(P.getVelocity())>(wl(S)?S:2500)&&(Sl(P.callbackAnimation),q?q.progress(1):Sl(i,vt==="reverse"?1:!$e,1))):D&&o&&!Wn&&o(P)}if(ue){var gn=x?Ie/x.duration()*(x._caScrollDist||0):Ie;w(gn+(Y._isFlipped?1:0)),ue(gn)}ye&&ye(-Ie/x.duration()*(x._caScrollDist||0))}},P.enable=function(ne,we){P.enabled||(P.enabled=!0,En(L,"resize",El),C||En(L,"scroll",ia),J&&En(r,"refreshInit",J),ne!==!1&&(P.progress=_e=0,oe=Re=X=Te()),we!==!1&&P.refresh())},P.getTween=function(ne){return ne&&de?de.tween:q},P.setPositions=function(ne,we,ie,Ie){if(x){var lt=x.scrollTrigger,$e=x.duration(),kt=lt.end-lt.start;ne=lt.start+kt*ne/$e,we=lt.start+kt*we/$e}P.refresh(!1,!1,{start:b0(ne,ie&&!!P._startClamp),end:b0(we,ie&&!!P._endClamp)},Ie),P.update()},P.adjustPinSpacing=function(ne){if(I&&ne){var we=I.indexOf(A.d)+1;I[we]=parseFloat(I[we])+ne+yn,I[1]=parseFloat(I[1])+ne+yn,aa(I)}},P.disable=function(ne,we){if(ne!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,we||q&&q.pause(),Q=0,ae&&(ae.uncache=1),J&&wn(r,"refreshInit",J),O&&(O.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!C)){for(var ie=it.length;ie--;)if(it[ie].scroller===L&&it[ie]!==P)return;wn(L,"resize",El),C||wn(L,"scroll",ia)}},P.kill=function(ne,we){P.disable(ne,we),q&&!we&&q.kill(),l&&delete Nd[l];var ie=it.indexOf(P);ie>=0&&it.splice(ie,1),ie===si&&_u>0&&si--,ie=0,it.forEach(function(Ie){return Ie.scroller===P.scroller&&(ie=1)}),ie||oi||Ts||(P.scroll.rec=0),i&&(i.scrollTrigger=null,ne&&i.revert({kill:!1}),we||i.kill()),De&&[De,Fe,Y,Qe].forEach(function(Ie){return Ie.parentNode&&Ie.parentNode.removeChild(Ie)}),Ll===P&&(Ll=0),d&&(ae&&(ae.uncache=1),ie=0,it.forEach(function(Ie){return Ie.pin===d&&ie++}),ie||(ae.spacer=0)),n.onKill&&n.onKill(P)},it.push(P),P.enable(!1,!1),fe&&fe(P),i&&i.add&&!Je){var se=P.update;P.update=function(){P.update=se,tt.cache++,ee||pe||P.refresh()},Oe.delayedCall(.01,P.update),Je=.01,ee=pe=0}else P.refresh();d&&zS()},r.register=function(n){return ra||(Oe=n||G0(),H0()&&window.document&&r.enable(),ra=bl),ra},r.defaults=function(n){if(n)for(var i in n)uu[i]=n[i];return uu},r.disable=function(n,i){bl=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),wn(rt,"wheel",ia),wn(Tt,"scroll",ia),clearInterval(su),wn(Tt,"touchcancel",gr),wn(St,"touchstart",gr),lu(wn,Tt,"pointerdown,touchstart,mousedown",T0),lu(wn,Tt,"pointerup,touchend,mouseup",w0),vu.kill(),au(wn);for(var s=0;s<tt.length;s+=3)cu(wn,tt[s],tt[s+1]),cu(wn,tt[s],tt[s+2])},r.enable=function(){if(rt=window,Tt=document,Li=Tt.documentElement,St=Tt.body,Oe){if(Dl=Oe.utils.toArray,Al=Oe.utils.clamp,Ld=Oe.core.context||gr,Td=Oe.core.suppressOverwrites||gr,Bd=rt.history.scrollRestoration||"auto",Od=rt.pageYOffset||0,Oe.core.globals("ScrollTrigger",r),St){bl=1,oa=document.createElement("div"),oa.style.height="100vh",oa.style.position="absolute",j0(),DS(),tn.register(Oe),r.isTouch=tn.isTouch,bs=tn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Id=tn.isTouch===1,En(rt,"wheel",ia),Fd=[rt,Tt,Li,St],Oe.matchMedia?(r.matchMedia=function(u){var h=Oe.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Oe.addEventListener("matchMediaInit",function(){J0(),Wd()}),Oe.addEventListener("matchMediaRevert",function(){return Z0()}),Oe.addEventListener("matchMedia",function(){io(0,1),co("matchMedia")}),Oe.matchMedia().add("(orientation: portrait)",function(){return Ad(),Ad})):console.warn("Requires GSAP 3.11.0 or later"),Ad(),En(Tt,"scroll",ia);var n=St.hasAttribute("style"),i=St.style,s=i.borderTopStyle,o=Oe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Br(St),hn.m=Math.round(a.top+hn.sc())||0,Vn.m=Math.round(a.left+Vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),su=setInterval(R0,250),Oe.delayedCall(.5,function(){return ou=0}),En(Tt,"touchcancel",gr),En(St,"touchstart",gr),lu(En,Tt,"pointerdown,touchstart,mousedown",T0),lu(En,Tt,"pointerup,touchend,mouseup",w0),Pd=Oe.utils.checkPrefix("transform"),xu.push(Pd),ra=Xn(),vu=Oe.delayedCall(.2,io).pause(),sa=[Tt,"visibilitychange",function(){var u=rt.innerWidth,h=rt.innerHeight;Tt.hidden?(v0=u,S0=h):(v0!==u||S0!==h)&&El()},Tt,"DOMContentLoaded",io,rt,"load",io,rt,"resize",El],au(En),it.forEach(function(u){return u.enable(0,1)}),l=0;l<tt.length;l+=3)cu(wn,tt[l],tt[l+1]),cu(wn,tt[l],tt[l+2])}else if(Tt){var c=function u(){r.enable(),Tt.removeEventListener("DOMContentLoaded",u)};Tt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(wd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(su)||(su=i)&&setInterval(R0,i),"ignoreMobileResize"in n&&(Id=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(au(wn)||au(En,n.autoRefreshEvents||"none"),B0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ii(n),o=tt.indexOf(s),a=ao(s);~o&&tt.splice(o,a?6:2),i&&(a?ir.unshift(rt,i,St,i,Li,i):ir.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Ii(n)?ii(n):n).getBoundingClientRect(),a=o[s?ro:so]*i||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},r.positionInViewport=function(n,i,s){Ii(n)&&(n=ii(n));var o=n.getBoundingClientRect(),a=o[s?ro:so],l=i==null?a/2:i in Mu?Mu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=lo.killAll||[];lo={},i.forEach(function(s){return s()})}},r})();Ze.version="3.15.1";Ze.saveStyles=function(r){return r?Dl(r).forEach(function(e){if(e&&e.style){var t=Pi.indexOf(e);t>=0&&Pi.splice(t,5),Pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),Ld())}}):Pi};Ze.revert=function(r,e){return Wd(!r,e)};Ze.create=function(r,e){return new Ze(r,e)};Ze.refresh=function(r){return r?El(!0):(ra||Ze.register())&&io(!0)};Ze.update=function(r){return++tt.cache&&kr(r===!0?2:0)};Ze.clearScrollMemory=$0;Ze.maxScroll=function(r,e){return _r(r,e?Vn:hn)};Ze.getScrollFunc=function(r,e){return Ur(ii(r),e?Vn:hn)};Ze.getById=function(r){return Nd[r]};Ze.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!Wi};Ze.snapDirectional=Vd;Ze.addEventListener=function(r,e){var t=lo[r]||(lo[r]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(r,e){var t=lo[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Oe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(p){h.length||d.restart(!0),h.push(p.trigger),f.push(p),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&qn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return qn(s)&&(s=s(),En(Ze,"refresh",function(){return s=e.batchMax()})),Dl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ze.create(c))}),t};var N0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Cd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(tn.isTouch?" pinch-zoom":""):"none",e===Li&&r(St,t)},pu={auto:1,scroll:1},XS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=Xn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(pu[(l=Vi(s)).overflowY]||pu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ao(s)&&(pu[(l=Vi(s)).overflowY]||pu[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},e_=function(e,t,n,i){return tn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&XS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&En(Tt,tn.eventTypes[0],U0,!1,!0)},onDisable:function(){return wn(Tt,tn.eventTypes[0],U0,!0)}})},qS=/(input|label|select|textarea)/i,O0,U0=function(e){var t=qS.test(e.target.tagName);(t||O0)&&(e._gsapAllow=!0,O0=t)},YS=function(e){no(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ii(e.target)||Li,u=Oe.core.globals().ScrollSmoother,h=u&&u.get(),f=bs&&(e.content&&ii(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Ur(c,hn),p=Ur(c,Vn),_=1,m=(tn.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,g=0,y=qn(i)?function(){return i(a)}:function(){return i||2.8},M,v,b=e_(c,e.type,!0,s),T=function(){return v=!1},x=gr,S=gr,R=function(){l=_r(c,hn),S=Al(bs?1:0,l),n&&(x=Al(0,_r(c,Vn))),M=oo},A=function(){f._gsap.y=Tl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(v){requestAnimationFrame(T);var Z=Tl(a.deltaY/2),G=S(d.v-Z);if(f&&G!==d.v+d.offset){d.offset=G-d.v;var P=Tl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=tt.cache,kr()}return!0}d.offset&&A(),v=!0},L,U,C,B,k=function(){R(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Oe.set(f,{y:"+=0"}),e.ignoreCheck=function(N){return bs&&N.type==="touchmove"&&D(N)||_>1.05&&N.type!=="touchstart"||a.isGesturing||N.touches&&N.touches.length>1},e.onPress=function(){v=!1;var N=_;_=Tl((rt.visualViewport&&rt.visualViewport.scale||1)/m),L.pause(),N!==_&&Cd(c,_>1.01?!0:n?!1:"x"),U=p(),C=d(),R(),M=oo},e.onRelease=e.onGestureStart=function(N,Z){if(d.offset&&A(),!Z)B.restart(!0);else{tt.cache++;var G=y(),P,J;n&&(P=p(),J=P+G*.05*-N.velocityX/.227,G*=N0(p,P,J,_r(c,Vn)),L.vars.scrollX=x(J)),P=d(),J=P+G*.05*-N.velocityY/.227,G*=N0(d,P,J,_r(c,hn)),L.vars.scrollY=S(J),L.invalidate().duration(G).play(.01),(bs&&L.vars.scrollY>=l||P>=l-1)&&Oe.to({},{onUpdate:k,duration:G})}o&&o(N)},e.onWheel=function(){L._ts&&L.pause(),Xn()-g>1e3&&(M=0,g=Xn())},e.onChange=function(N,Z,G,P,J){if(oo!==M&&R(),Z&&n&&p(x(P[2]===Z?U+(N.startX-N.x):p()+Z-P[1])),G){d.offset&&A();var le=J[2]===G,be=le?C+N.startY-N.y:d()+G-J[1],X=S(be);le&&be!==X&&(C+=X-be),d(X)}(G||Z)&&kr()},e.onEnable=function(){Cd(c,n?!1:"x"),Ze.addEventListener("refresh",k),En(rt,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){Cd(c,!0),wn(rt,"resize",k),Ze.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new tn(e),a.iOS=bs,bs&&!d()&&d(1),bs&&Oe.ticker.add(gr),B=a._dc,L=Oe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Q0(d,d(),function(){return L.pause()})},onUpdate:kr,onComplete:B.vars.onComplete}),a};Ze.sort=function(r){if(qn(r))return it.sort(r);var e=rt.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(r){return new tn(r)};Ze.normalizeScroll=function(r){if(typeof r>"u")return ri;if(r===!0&&ri)return ri.enable();if(r===!1){ri&&ri.kill(),ri=r;return}var e=r instanceof tn?r:YS(r);return ri&&ri.target===e.target&&ri.kill(),ao(e.target)&&(ri=e),e};Ze.core={_getVelocityProp:ru,_inputObserver:e_,_scrollers:tt,_proxies:ir,bridge:{ss:function(){Wi||co("scrollStart"),Wi=Xn()},ref:function(){return Wn}}};G0()&&Oe.registerPlugin(Ze);var H_=0,Rp=1,G_=2;var Ao=1,V_=2,ka=3,Mr=0,On=1,Un=2,Ro=0,za=1,pc=2,Cp=3,Pp=4,W_=5;var Co=100,X_=101,q_=102,Y_=103,K_=104,Z_=200,J_=201,$_=202,j_=203,Ip=204,Lp=205,Q_=206,ex=207,tx=208,nx=209,ix=210,rx=211,sx=212,ox=213,ax=214,eh=0,th=1,nh=2,wa=3,ih=4,rh=5,sh=6,oh=7,Th=0,lx=1,cx=2,br=0,Dp=1,Np=2,Op=3,Po=4,Up=5,Fp=6,Bp=7,gp="attached",ux="detached",kp=300,Io=301,Ha=302,wh=303,Eh=304,Yi=1e3,xi=1001,Ea=1002,on=1003,Ah=1004;var Lo=1005;var Ut=1006,Ga=1007;var Fi=1008;var bi=1009,zp=1010,Hp=1011,Va=1012,Rh=1013,ur=1014,Jn=1015,ui=1016,Ch=1017,Ph=1018,Do=1020,Gp=35902,Vp=35899,Wp=1021,Xp=1022,Ji=1023,Zr=1026,ss=1027,Ih=1028,Lh=1029,Fs=1030,Dh=1031;var Nh=1033,mc=33776,gc=33777,_c=33778,xc=33779,Oh=35840,Uh=35841,Fh=35842,Bh=35843,kh=36196,zh=37492,Hh=37496,Gh=37488,Vh=37489,yc=37490,Wh=37491,Xh=37808,qh=37809,Yh=37810,Kh=37811,Zh=37812,Jh=37813,$h=37814,jh=37815,Qh=37816,ef=37817,tf=37818,nf=37819,rf=37820,sf=37821,of=36492,af=36494,lf=36495,cf=36283,uf=36284,vc=36285,hf=36286;var go=2300,_o=2301,ju=2302,_p=2303,xp=2400,yp=2401,vp=2402,hx=2500;var qp=0,Sc=1,Wa=2,fx=3200;var Mc=0,dx=1,os="",Ot="srgb",Dn="srgb-linear",Xl="linear",Mt="srgb";var Qu=7680;var px=519,mx=512,gx=513,_x=514,Yp=515,xx=516,yx=517,Kp=518,Zp=519,Jp=35044,ff=35048;var $p="300 es",qi=2e3,Aa=2001;function KS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ZS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ra(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vx(){let r=Ra("canvas");return r.style.display="block",r}var t_={},Ca=null;function ql(...r){let e="THREE."+r.shift();Ca?Ca("log",e,...r):console.log(e,...r)}function Sx(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ge(...r){r=Sx(r);let e="THREE."+r.shift();if(Ca)Ca("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Xe(...r){r=Sx(r);let e="THREE."+r.shift();if(Ca)Ca("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function mo(...r){let e=r.join(" ");e in t_||(t_[e]=!0,Ge(...r))}function Mx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var bx={[eh]:eh,[nh]:sh,[ih]:ih,[wa]:rh,[th]:th,[sh]:nh,[oh]:oh,[rh]:wa},vr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],n_=1234567,ba=Math.PI/180,xo=180/Math.PI;function Tr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[n&255]+Yn[n>>8&255]+Yn[n>>16&255]+Yn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function jp(r,e){return(r%e+e)%e}function JS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function $S(r,e,t){return r!==e?(t-r)/(e-r):0}function Wl(r,e,t){return(1-t)*r+t*e}function jS(r,e,t,n){return Wl(r,e,1-Math.exp(-t*n))}function QS(r,e=1){return e-Math.abs(jp(r,e*2)-e)}function eM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function tM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function nM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function iM(r,e){return r+Math.random()*(e-r)}function rM(r){return r*(.5-Math.random())}function sM(r){r!==void 0&&(n_=r);let e=n_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oM(r){return r*ba}function aM(r){return r*xo}function lM(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function cM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function uM(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*u,a*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function df(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function em(r,e){if(e.constructor===Float32Array)return r;let t=df(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function tm(r,e){if(e.constructor===Float32Array)return r;let t=df(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Ft={DEG2RAD:ba,RAD2DEG:xo,generateUUID:Tr,clamp:at,euclideanModulo:jp,mapLinear:JS,inverseLerp:$S,lerp:Wl,damp:jS,pingpong:QS,smoothstep:eM,smootherstep:tM,randInt:nM,randFloat:iM,randFloatSpread:rM,seededRandom:sM,degToRad:oM,radToDeg:aM,isPowerOfTwo:lM,ceilPowerOfTwo:cM,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:uM,normalize:tm,denormalize:em},et=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(h!==_||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+h*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(i_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(i_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xd=new z,i_=new vn,Ke=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],y=i[1],M=i[4],v=i[7],b=i[2],T=i[5],x=i[8];return s[0]=o*_+a*y+l*b,s[3]=o*m+a*M+l*T,s[6]=o*g+a*v+l*x,s[1]=c*_+u*y+h*b,s[4]=c*m+u*M+h*T,s[7]=c*g+u*v+h*x,s[2]=f*_+d*y+p*b,s[5]=f*m+d*M+p*T,s[8]=f*g+d*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qd.makeScale(e,t)),this}rotate(e){return mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qd.makeRotation(-e)),this}translate(e,t){return mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qd=new Ke,r_=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s_=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hM(){let r={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(i.r=Kr(i.r),i.g=Kr(i.g),i.b=Kr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(i.r=Ta(i.r),i.g=Ta(i.g),i.b=Ta(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===os?Xl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Dn]:{primaries:e,whitePoint:n,transfer:Xl,toXYZ:r_,fromXYZ:s_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:r_,fromXYZ:s_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),r}var st=hM();function Kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ca,ah=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ca===void 0&&(ca=Ra("canvas")),ca.width=e.width,ca.height=e.height;let i=ca.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ca}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ra("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Kr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kr(t[n]/255)*255):t[n]=Kr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fM=0,Pa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Yd(i[o].image)):s.push(Yd(i[o]))}else s=Yd(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Yd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ah.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var dM=0,Kd=new z,an=class r extends vr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=xi,i=xi,s=Ut,o=Fi,a=Ji,l=bi,c=r.DEFAULT_ANISOTROPY,u=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Tr(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kd).x}get height(){return this.source.getSize(Kd).y}get depth(){return this.source.getSize(Kd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=kp;an.DEFAULT_ANISOTROPY=1;var yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(d+1)/2,b=(g+1)/2,T=(u+f)/4,x=(h+_)/4,S=(p+m)/4;return M>v&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=T/n,s=x/n):v>b?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=S/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=x/s,i=S/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lh=class extends vr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new an({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Pa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oi=class extends lh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yl=class extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ch=class extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qe=class r{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,p,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ua.setFromMatrixColumn(e,0).length(),s=1/ua.setFromMatrixColumn(e,1).length(),o=1/ua.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,_=c*h;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pM,e,mM)}lookAt(e,t,n){let i=this.elements;return Di.subVectors(e,t),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),ws.crossVectors(n,Di),ws.lengthSq()===0&&(Math.abs(n.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),ws.crossVectors(n,Di)),ws.normalize(),Tu.crossVectors(Di,ws),i[0]=ws.x,i[4]=Tu.x,i[8]=Di.x,i[1]=ws.y,i[5]=Tu.y,i[9]=Di.y,i[2]=ws.z,i[6]=Tu.z,i[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],M=n[7],v=n[11],b=n[15],T=i[0],x=i[4],S=i[8],R=i[12],A=i[1],D=i[5],L=i[9],U=i[13],C=i[2],B=i[6],k=i[10],N=i[14],Z=i[3],G=i[7],P=i[11],J=i[15];return s[0]=o*T+a*A+l*C+c*Z,s[4]=o*x+a*D+l*B+c*G,s[8]=o*S+a*L+l*k+c*P,s[12]=o*R+a*U+l*N+c*J,s[1]=u*T+h*A+f*C+d*Z,s[5]=u*x+h*D+f*B+d*G,s[9]=u*S+h*L+f*k+d*P,s[13]=u*R+h*U+f*N+d*J,s[2]=p*T+_*A+m*C+g*Z,s[6]=p*x+_*D+m*B+g*G,s[10]=p*S+_*L+m*k+g*P,s[14]=p*R+_*U+m*N+g*J,s[3]=y*T+M*A+v*C+b*Z,s[7]=y*x+M*D+v*B+b*G,s[11]=y*S+M*L+v*k+b*P,s[15]=y*R+M*U+v*N+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*d-c*f,M=a*d-c*h,v=a*f-l*h,b=o*d-c*u,T=o*f-l*u,x=o*h-a*u;return t*(_*y-m*M+g*v)-n*(p*y-m*b+g*T)+i*(p*M-_*b+g*x)-s*(p*v-_*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=t*a-n*o,M=t*l-i*o,v=t*c-s*o,b=n*l-i*a,T=n*c-s*a,x=i*c-s*l,S=u*_-h*p,R=u*m-f*p,A=u*g-d*p,D=h*m-f*_,L=h*g-d*_,U=f*g-d*m,C=y*U-M*L+v*D+b*A-T*R+x*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(a*U-l*L+c*D)*B,e[1]=(i*L-n*U-s*D)*B,e[2]=(_*x-m*T+g*b)*B,e[3]=(f*T-h*x-d*b)*B,e[4]=(l*A-o*U-c*R)*B,e[5]=(t*U-i*A+s*R)*B,e[6]=(m*v-p*x-g*M)*B,e[7]=(u*x-f*v+d*M)*B,e[8]=(o*L-a*A+c*S)*B,e[9]=(n*A-t*L-s*S)*B,e[10]=(p*T-_*v+g*y)*B,e[11]=(h*v-u*T-d*y)*B,e[12]=(a*R-o*D-l*S)*B,e[13]=(t*D-n*R+i*S)*B,e[14]=(_*M-p*b-m*y)*B,e[15]=(u*b-h*M+f*y)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,_=o*u,m=o*h,g=a*h,y=l*c,M=l*u,v=l*h,b=n.x,T=n.y,x=n.z;return i[0]=(1-(_+g))*b,i[1]=(d+v)*b,i[2]=(p-M)*b,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+g))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(p+M)*x,i[9]=(m-y)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ua.set(i[0],i[1],i[2]).length(),a=ua.set(i[4],i[5],i[6]).length(),l=ua.set(i[8],i[9],i[10]).length();s<0&&(o=-o),rr.copy(this);let c=1/o,u=1/a,h=1/l;return rr.elements[0]*=c,rr.elements[1]*=c,rr.elements[2]*=c,rr.elements[4]*=u,rr.elements[5]*=u,rr.elements[6]*=u,rr.elements[8]*=h,rr.elements[9]*=h,rr.elements[10]*=h,t.setFromRotationMatrix(rr),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=qi,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===qi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Aa)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=qi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===qi)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Aa)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ua=new z,rr=new qe,pM=new z(0,0,0),mM=new z(1,1,1),ws=new z,Tu=new z,Di=new z,o_=new qe,a_=new vn,Ki=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return o_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a_.setFromEuler(this),this.setFromQuaternion(a_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var Kl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gM=0,l_=new z,ha=new vn,zr=new qe,wu=new z,Ol=new z,_M=new z,xM=new vn,c_=new z(1,0,0),u_=new z(0,1,0),h_=new z(0,0,1),f_={type:"added"},yM={type:"removed"},fa={type:"childadded",child:null},Zd={type:"childremoved",child:null},Et=class r extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new z,t=new Ki,n=new vn,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.multiply(ha),this}rotateOnWorldAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.premultiply(ha),this}rotateX(e){return this.rotateOnAxis(c_,e)}rotateY(e){return this.rotateOnAxis(u_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,t){return l_.copy(e).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c_,e)}translateY(e){return this.translateOnAxis(u_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wu.copy(e):wu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zr.lookAt(Ol,wu,this.up):zr.lookAt(wu,Ol,this.up),this.quaternion.setFromRotationMatrix(zr),i&&(zr.extractRotation(i.matrixWorld),ha.setFromRotationMatrix(zr),this.quaternion.premultiply(ha.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),fa.child=e,this.dispatchEvent(fa),fa.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yM),Zd.child=e,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zr.multiply(e.parent.matrixWorld)),e.applyMatrix4(zr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),fa.child=e,this.dispatchEvent(fa),fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,e,_M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,xM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new z(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zt=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},vM={type:"move"},Ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function Jd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=jp(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Jd(o,s,e+1/3),this.g=Jd(o,s,e),this.b=Jd(o,s,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Tx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return st.workingToColorSpace(Kn.copy(this),e),Math.round(at(Kn.r*255,0,255))*65536+Math.round(at(Kn.g*255,0,255))*256+Math.round(at(Kn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Kn.copy(this),t);let n=Kn.r,i=Kn.g,s=Kn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Ot){st.workingToColorSpace(Kn.copy(this),e);let t=Kn.r,n=Kn.g,i=Kn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(Eu);let n=Wl(Es.h,Eu.h,t),i=Wl(Es.s,Eu.s,t),s=Wl(Es.l,Eu.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new Ve;Ve.NAMES=Tx;var lr=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},sr=new z,Hr=new z,$d=new z,Gr=new z,da=new z,pa=new z,d_=new z,jd=new z,Qd=new z,ep=new z,tp=new yt,np=new yt,ip=new yt,qr=class r{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sr.subVectors(e,t),i.cross(sr);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){sr.subVectors(i,t),Hr.subVectors(n,t),$d.subVectors(e,t);let o=sr.dot(sr),a=sr.dot(Hr),l=sr.dot($d),c=Hr.dot(Hr),u=Hr.dot($d),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gr)===null?!1:Gr.x>=0&&Gr.y>=0&&Gr.x+Gr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gr.x),l.addScaledVector(o,Gr.y),l.addScaledVector(a,Gr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return tp.setScalar(0),np.setScalar(0),ip.setScalar(0),tp.fromBufferAttribute(e,t),np.fromBufferAttribute(e,n),ip.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(tp,s.x),o.addScaledVector(np,s.y),o.addScaledVector(ip,s.z),o}static isFrontFacing(e,t,n,i){return sr.subVectors(n,t),Hr.subVectors(e,t),sr.cross(Hr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),Hr.subVectors(this.a,this.b),sr.cross(Hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;da.subVectors(i,n),pa.subVectors(s,n),jd.subVectors(e,n);let l=da.dot(jd),c=pa.dot(jd);if(l<=0&&c<=0)return t.copy(n);Qd.subVectors(e,i);let u=da.dot(Qd),h=pa.dot(Qd);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(da,o);ep.subVectors(e,s);let d=da.dot(ep),p=pa.dot(ep);if(p>=0&&d<=p)return t.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(pa,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return d_.subVectors(s,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(d_,a);let g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(da,o).addScaledVector(pa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,or):or.fromBufferAttribute(s,o),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Au.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Au.copy(n.boundingBox)),Au.applyMatrix4(e.matrixWorld),this.union(Au)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ul),Ru.subVectors(this.max,Ul),ma.subVectors(e.a,Ul),ga.subVectors(e.b,Ul),_a.subVectors(e.c,Ul),As.subVectors(ga,ma),Rs.subVectors(_a,ga),uo.subVectors(ma,_a);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-uo.z,uo.y,As.z,0,-As.x,Rs.z,0,-Rs.x,uo.z,0,-uo.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-uo.y,uo.x,0];return!rp(t,ma,ga,_a,Ru)||(t=[1,0,0,0,1,0,0,0,1],!rp(t,ma,ga,_a,Ru))?!1:(Cu.crossVectors(As,Rs),t=[Cu.x,Cu.y,Cu.z],rp(t,ma,ga,_a,Ru))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vr=[new z,new z,new z,new z,new z,new z,new z,new z],or=new z,Au=new pn,ma=new z,ga=new z,_a=new z,As=new z,Rs=new z,uo=new z,Ul=new z,Ru=new z,Cu=new z,ho=new z;function rp(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ho.fromArray(r,s);let a=i.x*Math.abs(ho.x)+i.y*Math.abs(ho.y)+i.z*Math.abs(ho.z),l=e.dot(ho),c=t.dot(ho),u=n.dot(ho);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Yr=SM();function SM(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function MM(r){Math.abs(r)>65504&&Ge("DataUtils.toHalfFloat(): Value out of range."),r=at(r,-65504,65504),Yr.floatView[0]=r;let e=Yr.uint32View[0],t=e>>23&511;return Yr.baseTable[t]+((e&8388607)>>Yr.shiftTable[t])}function bM(r){let e=r>>10;return Yr.uint32View[0]=Yr.mantissaTable[Yr.offsetTable[e]+(r&1023)]+Yr.exponentTable[e],Yr.floatView[0]}var Is=class{static toHalfFloat(e){return MM(e)}static fromHalfFloat(e){return bM(e)}},dn=new z,Pu=new et,TM=0,Ln=class extends vr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jp,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?df(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pu.fromBufferAttribute(this,t),Pu.applyMatrix3(e),this.setXY(t,Pu.x,Pu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):em(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tm(e,this.array)}};var Zl=class extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Jl=class extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var bt=class extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},wM=new pn,Fl=new z,sp=new z,yi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fl.subVectors(e,this.center);let t=Fl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fl.copy(e.center).add(sp)),this.expandByPoint(Fl.copy(e.center).sub(sp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},EM=0,Xi=new qe,op=new Et,xa=new z,Ni=new pn,Bl=new pn,An=new z,nn=class r extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KS(e)?Jl:Zl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,t,n){return Xi.makeTranslation(e,t,n),this.applyMatrix4(Xi),this}scale(e,t,n){return Xi.makeScale(e,t,n),this.applyMatrix4(Xi),this}lookAt(e){return op.lookAt(e),op.updateMatrix(),this.applyMatrix4(op.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ni.setFromBufferAttribute(s),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Ni.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Bl.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(Ni.min,Bl.min),Ni.expandByPoint(An),An.addVectors(Ni.max,Bl.max),Ni.expandByPoint(An)):(Ni.expandByPoint(Bl.min),Ni.expandByPoint(Bl.max))}Ni.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)An.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(An));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)An.fromBufferAttribute(a,c),l&&(xa.fromBufferAttribute(e,c),An.add(xa)),i=Math.max(i,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new z,l[R]=new z;let u=new z,h=new z,f=new z,d=new et,p=new et,_=new et,m=new z,g=new z;function y(R,A,D){c[R]=c[A]=c[D]=1,u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,D),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,D),h.sub(u),f.sub(u),p.sub(d),_.sub(d);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(m.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[R].add(m),a[A].add(m),a[D].add(m),l[R].add(g),l[A].add(g),l[D].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,A=M.length;R<A;++R){let D=M[R],L=D.start,U=D.count;for(let C=L,B=L+U;C<B;C+=3)y(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let v=new z,b=new z,T=new z,x=new z;function S(R){T.fromBufferAttribute(i,R),x.copy(T);let A=a[R];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),b.crossVectors(x,A);let L=b.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,A=n.count;R<A;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new Ln(f,u,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},La=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jp,this.updateRanges=[],this.version=0,this.uuid=Tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=p_(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=p_(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function p_(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Tr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var ai=new z,Da=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?df(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ql("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ql("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):em(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tm(e,this.data.array)}},ap=new z,AM=new z,RM=new Ke,ar=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ap.subVectors(n,t).cross(AM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(ap),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||RM.getNormalMatrix(e),i=this.coplanarPoint(ap).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},CM=0,li=class extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=za,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ip,this.blendDst=Lp,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qu,this.stencilZFail=Qu,this.stencilZPass=Qu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ar().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Wr=new z,lp=new z,Iu=new z,Lu=new z,yo=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wr.copy(this.origin).addScaledVector(this.direction,t),Wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){lp.copy(e).add(t).multiplyScalar(.5),Iu.copy(t).sub(e).normalize(),Lu.copy(this.origin).sub(lp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Iu),a=Lu.dot(this.direction),l=-Lu.dot(Iu),c=Lu.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(lp).addScaledVector(Iu,f),d}intersectSphere(e,t){if(e.radius<0)return null;Wr.subVectors(e.center,this.origin);let n=Wr.dot(this.direction),i=Wr.dot(Wr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wr)!==null}intersectTriangle(e,t,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,M=n.z-o.z,v=Math.abs(l),b=Math.abs(c),T=Math.abs(u),x,S,R,A,D,L,U,C,B,k,N,Z;if(v>=b&&v>=T?(R=l,L=h,B=p,Z=g,l>=0?(x=c,S=u,A=f,D=d,U=_,C=m,k=y,N=M):(x=u,S=c,A=d,D=f,U=m,C=_,k=M,N=y)):b>=T?(R=c,L=f,B=_,Z=y,c>=0?(x=u,S=l,A=d,D=h,U=m,C=p,k=M,N=g):(x=l,S=u,A=h,D=d,U=p,C=m,k=g,N=M)):(R=u,L=d,B=m,Z=M,u>=0?(x=l,S=c,A=h,D=f,U=p,C=_,k=g,N=y):(x=c,S=l,A=f,D=h,U=_,C=p,k=y,N=g)),R===0)return null;let G=x/R,P=S/R,J=1/R,le=A-G*L,be=D-P*L,X=U-G*B,ce=C-P*B,_e=k-G*Z,Te=N-P*Z,de=_e*ce-Te*X,ae=le*Te-be*_e,Ne=X*be-ce*le;if(i){if(de<0||ae<0||Ne<0)return null}else if((de<0||ae<0||Ne<0)&&(de>0||ae>0||Ne>0))return null;let oe=de+ae+Ne;if(oe===0)return null;let Re=J*(de*L+ae*B+Ne*Z);return(oe>0?Re<0:Re>0)?null:this.at(Re/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zn=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},m_=new qe,fo=new yo,Du=new yi,g_=new z,Nu=new z,Ou=new z,Uu=new z,cp=new z,Fu=new z,__=new z,Bu=new z,gt=class extends Et{constructor(e=new nn,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Fu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(cp.fromBufferAttribute(h,e),o?Fu.addScaledVector(cp,u):Fu.addScaledVector(cp.sub(t),u))}t.add(Fu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Du.copy(n.boundingSphere),Du.applyMatrix4(s),fo.copy(e.ray).recast(e.near),!(Du.containsPoint(fo.origin)===!1&&(fo.intersectSphere(Du,g_)===null||fo.origin.distanceToSquared(g_)>(e.far-e.near)**2))&&(m_.copy(s).invert(),fo.copy(e.ray).applyMatrix4(m_),!(n.boundingBox!==null&&fo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fo)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=M;v<b;v+=3){let T=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);i=ku(this,g,e,n,c,u,h,T,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=ku(this,o,e,n,c,u,h,y,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=M;v<b;v+=3){let T=v,x=v+1,S=v+2;i=ku(this,g,e,n,c,u,h,T,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=m,M=m+1,v=m+2;i=ku(this,o,e,n,c,u,h,y,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function PM(r,e,t,n,i,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Mr,a),l===null)return null;Bu.copy(a),Bu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Bu);return c<t.near||c>t.far?null:{distance:c,point:Bu.clone(),object:r}}function ku(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Nu),r.getVertexPosition(l,Ou),r.getVertexPosition(c,Uu);let u=PM(r,e,t,n,Nu,Ou,Uu,__);if(u){let h=new z;qr.getBarycoord(__,Nu,Ou,Uu,h),i&&(u.uv=qr.getInterpolatedAttribute(i,a,l,c,h,new et)),s&&(u.uv1=qr.getInterpolatedAttribute(s,a,l,c,h,new et)),o&&(u.normal=qr.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};qr.getNormal(Nu,Ou,Uu,f.normal),u.face=f,u.barycoord=h}return u}var kl=new yt,x_=new yt,y_=new yt,IM=new yt,v_=new qe,zu=new z,up=new yi,S_=new qe,hp=new yo,$l=class extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gp,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zu),this.boundingBox.expandByPoint(zu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zu),this.boundingSphere.expandByPoint(zu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),up.copy(this.boundingSphere),up.applyMatrix4(i),e.ray.intersectsSphere(up)!==!1&&(S_.copy(i).invert(),hp.copy(e.ray).applyMatrix4(S_),!(this.boundingBox!==null&&hp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ux?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ge("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;x_.fromBufferAttribute(i.attributes.skinIndex,e),y_.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(kl.copy(t),t.set(0,0,0,0)):(kl.set(t.x,t.y,t.z,1),t.set(0,0,0)),kl.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=y_.getComponent(s);if(o!==0){let a=x_.getComponent(s);v_.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(IM.copy(kl).applyMatrix4(v_),o)}}return t.isVector4&&(t.w=kl.w),t.applyMatrix4(this.bindMatrixInverse)}},Na=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ls=class extends an{constructor(e=null,t=1,n=1,i,s,o,a,l,c=on,u=on,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},M_=new qe,LM=new qe,jl=class r{constructor(e=[],t=[]){this.uuid=Tr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ge("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:LM;M_.multiplyMatrices(a,t[s]),M_.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ls(t,e,e,Ji,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(Ge("Skeleton: No bone found with UUID:",s),o=new Na),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Jr=class extends Ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ya=new qe,b_=new qe,Hu=[],T_=new pn,DM=new qe,zl=new gt,Hl=new yi,vo=class extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,DM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ya),T_.copy(e.boundingBox).applyMatrix4(ya),this.boundingBox.union(T_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ya),Hl.copy(e.boundingSphere).applyMatrix4(ya),this.boundingSphere.union(Hl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(zl.geometry=this.geometry,zl.material=this.material,zl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hl.copy(this.boundingSphere),Hl.applyMatrix4(n),e.ray.intersectsSphere(Hl)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ya),b_.multiplyMatrices(n,ya),zl.matrixWorld=b_,zl.raycast(e,Hu);for(let o=0,a=Hu.length;o<a;o++){let l=Hu[o];l.instanceId=s,l.object=this,t.push(l)}Hu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(i*this.count),i,this.count,Ih,Jn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},po=new yi,NM=new et(.5,.5),Gu=new z,Ds=class{constructor(e=new ar,t=new ar,n=new ar,i=new ar,s=new ar,o=new ar){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],y=s[12],M=s[13],v=s[14],b=s[15];if(i[0].setComponents(c-o,d-u,g-p,b-y).normalize(),i[1].setComponents(c+o,d+u,g+p,b+y).normalize(),i[2].setComponents(c+a,d+h,g+_,b+M).normalize(),i[3].setComponents(c-a,d-h,g-_,b-M).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,d-f,g-m,b-v).normalize();else if(i[4].setComponents(c-l,d-f,g-m,b-v).normalize(),t===qi)i[5].setComponents(c+l,d+f,g+m,b+v).normalize();else if(t===Aa)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(po)}intersectsSprite(e){po.center.set(0,0,0);let t=NM.distanceTo(e.center);return po.radius=.7071067811865476+t,po.applyMatrix4(e.matrixWorld),this.intersectsSphere(po)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Gu.x=i.normal.x>0?e.max.x:e.min.x,Gu.y=i.normal.y>0?e.max.y:e.min.y,Gu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},w_=new qe,uh=class r{constructor(){this.coordinateSystem=qi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];w_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ds),n[i].setFromProjectionMatrix(w_,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ds),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Ns=class extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hh=new z,fh=new z,E_=new qe,Gl=new yo,Vu=new yi,fp=new z,A_=new z,So=class extends Et{constructor(e=new nn,t=new Ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)hh.fromBufferAttribute(t,i-1),fh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hh.distanceTo(fh);e.setAttribute("lineDistance",new bt(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vu.copy(n.boundingSphere),Vu.applyMatrix4(i),Vu.radius+=s,e.ray.intersectsSphere(Vu)===!1)return;E_.copy(i).invert(),Gl.copy(e.ray).applyMatrix4(E_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=u.getX(_),y=u.getX(_+1),M=Wu(this,e,Gl,l,g,y,_);M&&t.push(M)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(d),g=Wu(this,e,Gl,l,_,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=Wu(this,e,Gl,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Wu(this,e,Gl,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Wu(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(hh.fromBufferAttribute(a,i),fh.fromBufferAttribute(a,s),t.distanceSqToSegment(hh,fh,fp,A_)>n)return;fp.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(fp);if(!(c<e.near||c>e.far))return{distance:c,point:A_.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var R_=new z,C_=new z,Mo=class extends So{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)R_.fromBufferAttribute(t,i),C_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+R_.distanceTo(C_);e.setAttribute("lineDistance",new bt(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ql=class extends So{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Oa=class extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},P_=new qe,Sp=new yo,Xu=new yi,qu=new z,$r=class extends Et{constructor(e=new nn,t=new Oa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xu.copy(n.boundingSphere),Xu.applyMatrix4(i),Xu.radius+=s,e.ray.intersectsSphere(Xu)===!1)return;P_.copy(i).invert(),Sp.copy(e.ray).applyMatrix4(P_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let m=c.getX(p);qu.fromBufferAttribute(h,m),I_(qu,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)qu.fromBufferAttribute(h,p),I_(qu,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function I_(r,e,t,n,i,s,o){let a=Sp.distanceSqToPoint(r);if(a<t){let l=new z;Sp.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ec=class extends an{constructor(e=[],t=Io,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vi=class extends an{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var jr=class extends an{constructor(e,t,n=ur,i,s,o,a=on,l=on,c,u=Zr,h=1){if(u!==Zr&&u!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},tc=class extends jr{constructor(e,t=ur,n=Io,i,s,o=on,a=on,l,c=Zr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},nc=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ui=class r extends nn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function p(_,m,g,y,M,v,b,T,x,S,R){let A=v/x,D=b/S,L=v/2,U=b/2,C=T/2,B=x+1,k=S+1,N=0,Z=0,G=new z;for(let P=0;P<k;P++){let J=P*D-U;for(let le=0;le<B;le++){let be=le*A-L;G[_]=be*y,G[m]=J*M,G[g]=C,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[g]=T>0?1:-1,u.push(G.x,G.y,G.z),h.push(le/x),h.push(1-P/S),N+=1}}for(let P=0;P<S;P++)for(let J=0;J<x;J++){let le=f+J+B*P,be=f+J+B*(P+1),X=f+(J+1)+B*(P+1),ce=f+(J+1)+B*P;l.push(le,be,ce),l.push(be,X,ce),Z+=6}a.addGroup(d,Z,R),d+=Z,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Os=class r extends nn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],f=[],d=[],p=0,_=[],m=n/2,g=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(d,2));function y(){let v=new z,b=new z,T=0,x=(t-e)/n;for(let S=0;S<=s;S++){let R=[],A=S/s,D=A*(t-e)+e;for(let L=0;L<=i;L++){let U=L/i,C=U*l+a,B=Math.sin(C),k=Math.cos(C);b.x=D*B,b.y=-A*n+m,b.z=D*k,h.push(b.x,b.y,b.z),v.set(B,x,k).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-A),R.push(p++)}_.push(R)}for(let S=0;S<i;S++)for(let R=0;R<s;R++){let A=_[R][S],D=_[R+1][S],L=_[R+1][S+1],U=_[R][S+1];(e>0||R!==0)&&(u.push(A,D,U),T+=3),(t>0||R!==s-1)&&(u.push(D,L,U),T+=3)}c.addGroup(g,T,0),g+=T}function M(v){let b=p,T=new et,x=new z,S=0,R=v===!0?e:t,A=v===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),p++;let D=p;for(let L=0;L<=i;L++){let C=L/i*l+a,B=Math.cos(C),k=Math.sin(C);x.x=R*k,x.y=m*A,x.z=R*B,h.push(x.x,x.y,x.z),f.push(0,A,0),T.x=B*.5+.5,T.y=k*.5*A+.5,d.push(T.x,T.y),p++}for(let L=0;L<i;L++){let U=b+L,C=D+L;v===!0?u.push(C,C+1,U):u.push(C+1,C,U),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ic=class r extends Os{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Yu=new z,Ku=new z,dp=new z,Zu=new qr,rc=class extends nn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(ba*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=Zu;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Zu.getNormal(dp),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let M=(y+1)%3,v=h[y],b=h[M],T=Zu[u[y]],x=Zu[u[M]],S=`${v}_${b}`,R=`${b}_${v}`,A=f.get(R);A?(dp.dot(A.normal)<=s&&(d.push(T.x,T.y,T.z),d.push(x.x,x.y,x.z)),f.set(R,null)):f.has(S)||f.set(S,{index0:c[y],index1:c[M],normal:dp.clone()})}}for(let p of f.values())if(p){let{index0:_,index1:m}=p;Yu.fromBufferAttribute(a,_),Ku.fromBufferAttribute(a,m),d.push(Yu.x,Yu.y,Yu.z),d.push(Ku.x,Ku.y,Ku.z)}this.setAttribute("position",new bt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Zi=class r extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*f-o;for(let M=0;M<c;M++){let v=M*h-s;p.push(v,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,v=y+c*(g+1),b=y+1+c*(g+1),T=y+1+c*g;d.push(M,v,T),d.push(v,b,T)}this.setIndex(d),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var sc=class r extends nn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new z,f=new z,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let y=[],M=g/n,v=o+M*a,b=e*Math.cos(v),T=Math.sqrt(e*e-b*b),x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let R=S/t,A=i+R*s;h.x=-T*Math.cos(A),h.y=b,h.z=T*Math.sin(A),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(R+x,1-M),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let M=u[g][y+1],v=u[g][y],b=u[g+1][y],T=u[g+1][y+1];(g!==0||o>0)&&d.push(M,v,T),(g!==n-1||l<Math.PI)&&d.push(v,b,T)}this.setIndex(d),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ua=class r extends nn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],h=[],f=new z,d=new z,p=new z;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=i;g++){let y=g/i*s;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(g/i),h.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,y=(i+1)*(_-1)+m-1,M=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(g,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function No(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(L_(i))i.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(L_(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function $n(r){let e={};for(let t=0;t<r.length;t++){let n=No(r[t]);for(let i in n)e[i]=n[i]}return e}function L_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function OM(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nm(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var wx={clone:No,merge:$n},UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=OM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},dh=class extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Sn=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends Sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return mo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){mo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var oc=class extends li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Th,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ph=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mh=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ps(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Vl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function BM(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function D_(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function kM(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var Sr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gh=class extends Sr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xp,endingEnd:xp}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case yp:s=e,a=2*t-n;break;case vp:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yp:o=e,l=2*n-t;break;case vp:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,M=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let b=0;b!==a;++b)s[b]=g*o[u+b]+y*o[c+b]+M*o[l+b]+v*o[h+b];return s}},_h=class extends Sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},xh=class extends Sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},yh=class extends Sr{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(i-t),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*f+p*2,y=h[g],M=h[g+1],v=e*f+p*2,b=u[v],T=u[v+1],x=HM(n,t,y,b,i);s[p]=Ex(x,_,M,T,m)}return s}};function Ex(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function zM(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function HM(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){let a=Ex(s,e,t,n,i)-r;if(Math.abs(a)<1e-10)break;let l=zM(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Mi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Vl(e.settings)&&(n.settings={inTangents:Ps(e.settings.inTangents,Array),outTangents:Ps(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case go:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case ju:t=this.InterpolantFactoryMethodSmooth;break;case _p:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return ju;case this.InterpolantFactoryMethodBezier:return _p}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Vl(this.settings)&&(N_(this.settings.inTangents,e),N_(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Vl(this.settings)&&(O_(this.settings.inTangents,e),O_(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ZS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ju,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Vl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function N_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function O_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=_o;var Qr=class extends Mi{constructor(e,t,n){super(e,t,n)}};Qr.prototype.ValueTypeName="bool";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=go;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}};ac.prototype.ValueTypeName="color";var es=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}};es.prototype.ValueTypeName="number";var vh=class extends Sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)vn.slerpFlat(s,0,o,c-a,o,c,l);return s}},ts=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new vh(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Mi{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=go;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}};Us.prototype.ValueTypeName="vector";var lc=class{constructor(e="",t=-1,n=[],i=hx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Tr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(VM(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Mi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=BM(l);l=D_(l,1,u),c=D_(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new es(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function GM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return ac;case"quaternion":return ts;case"bool":case"boolean":return Qr;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function VM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=GM(r.type);if(r.times===void 0){let n=[],i=[];kM(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Vl(r.settings)&&(t.settings={inTangents:Ps(r.settings.inTangents,Float32Array),outTangents:Ps(r.settings.outTangents,Float32Array)}),t}var yr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(U_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!U_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function U_(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Sh=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ax=new Sh,cr=class{constructor(e){this.manager=e!==void 0?e:Ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};cr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr={},Mp=class extends Error{constructor(e,t){super(e),this.response=t}},bo=class extends cr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=yr.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Xr[e]!==void 0){Xr[e].push({onLoad:t,onProgress:n,onError:i});return}Xr[e]=[],Xr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ge("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Xr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,_=0,m=new ReadableStream({start(g){y();function y(){h.read().then(({done:M,value:v})=>{if(M)g.close();else{_+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let T=0,x=u.length;T<x;T++){let S=u[T];S.onProgress&&S.onProgress(b)}g.enqueue(v),y()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Mp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{yr.add(`file:${e}`,c);let u=Xr[e];delete Xr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Xr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var va=new WeakMap,Mh=class extends cr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=yr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=va.get(o);h===void 0&&(h=[],va.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Ra("img");function l(){u(),t&&t(this);let h=va.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}va.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),yr.remove(`image:${e}`);let f=va.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}va.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yr.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var cc=class extends cr{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new Ls,a=new bo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){i!==void 0?i(u):Xe(u);return}s._applyTexData(o,c),t&&t(o,c)},n,i),o}createDataTexture(e){let t=new Ls;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:xi,e.wrapT=t.wrapT!==void 0?t.wrapT:xi,e.magFilter=t.magFilter!==void 0?t.magFilter:Ut,e.minFilter=t.minFilter!==void 0?t.minFilter:Ut,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Fi),t.mipmapCount===1&&(e.minFilter=Ut),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},To=class extends cr{constructor(e){super(e)}load(e,t,n,i){let s=new an,o=new Mh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},wo=class extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},uc=class extends wo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},pp=new qe,F_=new z,B_=new z,Fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;F_.setFromMatrixPosition(e.matrixWorld),t.position.copy(F_),B_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(B_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){pp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pp,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===Aa||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(pp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ju=new z,$u=new vn,xr=new z,hc=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ju,$u,xr),xr.x===1&&xr.y===1&&xr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ju,$u,xr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ju,$u,xr),xr.x===1&&xr.y===1&&xr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ju,$u,xr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new z,k_=new et,z_=new et,Kt=class extends hc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,k_,z_),t.subVectors(z_,k_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bp=class extends Fa{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=xo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fc=class extends wo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new bp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Tp=class extends Fa{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},is=class extends wo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Eo=class extends hc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wp=class extends Fa{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ci=class extends wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new wp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var mp=new WeakMap,dc=class extends cr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ge("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ge("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=yr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{mp.has(o)===!0?(i&&i(mp.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return yr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),mp.set(l,c),yr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});yr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sa=-90,Ma=1,Ba=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Kt(Sa,Ma,e,t);i.layers=this.layers,this.add(i);let s=new Kt(Sa,Ma,e,t);s.layers=this.layers,this.add(s);let o=new Kt(Sa,Ma,e,t);o.layers=this.layers,this.add(o);let a=new Kt(Sa,Ma,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Sa,Ma,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Sa,Ma,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},bh=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var im="\\[\\]\\.:\\/",WM=new RegExp("["+im+"]","g"),rm="[^"+im+"]",XM="[^"+im.replace("\\.","")+"]",qM=/((?:WC+[\/:])*)/.source.replace("WC",rm),YM=/(WCOD+)?/.source.replace("WCOD",XM),KM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rm),ZM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rm),JM=new RegExp("^"+qM+YM+KM+ZM+"$"),$M=["material","materials","bones","map"],Ep=class{constructor(e,t,n){let i=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(WM,"")}static parseTrackName(e){let t=JM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);$M.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Ep;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zA=new Float32Array(1);var Ap=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function sm(r,e,t,n){let i=jM(n);switch(t){case Wp:return r*e;case Ih:return r*e/i.components*i.byteLength;case Lh:return r*e/i.components*i.byteLength;case Fs:return r*e*2/i.components*i.byteLength;case Dh:return r*e*2/i.components*i.byteLength;case Xp:return r*e*3/i.components*i.byteLength;case Ji:return r*e*4/i.components*i.byteLength;case Nh:return r*e*4/i.components*i.byteLength;case mc:case gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _c:case xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Bh:return Math.max(r,16)*Math.max(e,8)/4;case Oh:case Fh:return Math.max(r,8)*Math.max(e,8)/2;case kh:case zh:case Gh:case Vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hh:case yc:case Wh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ef:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case tf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case nf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case of:case af:case lf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case cf:case uf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vc:case hf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jM(r){switch(r){case bi:case zp:return{byteLength:1,components:1};case Va:case Hp:case ui:return{byteLength:2,components:1};case Ch:case Ph:return{byteLength:2,components:4};case ur:case Rh:case Jn:return{byteLength:4,components:1};case Gp:case Vp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Zx(){let r=null,e=!1,t=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),t(s,o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function eb(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ab=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,db=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$b=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nT=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,iT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pT=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ET=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,PT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:tb,alphahash_pars_fragment:nb,alphamap_fragment:ib,alphamap_pars_fragment:rb,alphatest_fragment:sb,alphatest_pars_fragment:ob,aomap_fragment:ab,aomap_pars_fragment:lb,batching_pars_vertex:cb,batching_vertex:ub,begin_vertex:hb,beginnormal_vertex:fb,bsdfs:db,iridescence_fragment:pb,bumpmap_pars_fragment:mb,clipping_planes_fragment:gb,clipping_planes_pars_fragment:_b,clipping_planes_pars_vertex:xb,clipping_planes_vertex:yb,color_fragment:vb,color_pars_fragment:Sb,color_pars_vertex:Mb,color_vertex:bb,common:Tb,defaultnormal_vertex:wb,displacementmap_pars_vertex:Eb,displacementmap_vertex:Ab,emissivemap_fragment:Rb,emissivemap_pars_fragment:Cb,colorspace_fragment:Pb,colorspace_pars_fragment:Ib,envmap_fragment:Lb,envmap_common_pars_fragment:Db,envmap_pars_fragment:Nb,envmap_pars_vertex:Ob,envmap_physical_pars_fragment:qb,envmap_vertex:Ub,fog_vertex:Fb,fog_pars_vertex:Bb,fog_fragment:kb,fog_pars_fragment:zb,gradientmap_pars_fragment:Hb,lightmap_pars_fragment:Gb,lights_lambert_fragment:Vb,lights_lambert_pars_fragment:Wb,lights_pars_begin:Xb,lights_toon_fragment:Yb,lights_toon_pars_fragment:Kb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Jb,lights_physical_fragment:$b,lights_physical_pars_fragment:jb,lights_fragment_begin:Qb,lights_fragment_maps:eT,lights_fragment_end:tT,lightprobes_pars_fragment:nT,logdepthbuf_fragment:iT,logdepthbuf_pars_fragment:rT,logdepthbuf_pars_vertex:sT,logdepthbuf_vertex:oT,map_fragment:aT,map_pars_fragment:lT,map_particle_fragment:cT,map_particle_pars_fragment:uT,metalnessmap_fragment:hT,metalnessmap_pars_fragment:fT,morphinstance_vertex:dT,morphcolor_vertex:pT,morphnormal_vertex:mT,morphtarget_pars_vertex:gT,morphtarget_vertex:_T,normal_fragment_begin:xT,normal_fragment_maps:yT,normal_pars_fragment:vT,normal_pars_vertex:ST,normal_vertex:MT,normalmap_pars_fragment:bT,clearcoat_normal_fragment_begin:TT,clearcoat_normal_fragment_maps:wT,clearcoat_pars_fragment:ET,iridescence_pars_fragment:AT,opaque_fragment:RT,packing:CT,premultiplied_alpha_fragment:PT,project_vertex:IT,dithering_fragment:LT,dithering_pars_fragment:DT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:OT,shadowmap_pars_fragment:UT,shadowmap_pars_vertex:FT,shadowmap_vertex:BT,shadowmask_pars_fragment:kT,skinbase_vertex:zT,skinning_pars_vertex:HT,skinning_vertex:GT,skinnormal_vertex:VT,specularmap_fragment:WT,specularmap_pars_fragment:XT,tonemapping_fragment:qT,tonemapping_pars_fragment:YT,transmission_fragment:KT,transmission_pars_fragment:ZT,uv_pars_fragment:JT,uv_pars_vertex:$T,uv_vertex:jT,worldpos_vertex:QT,background_vert:e1,background_frag:t1,backgroundCube_vert:n1,backgroundCube_frag:i1,cube_vert:r1,cube_frag:s1,depth_vert:o1,depth_frag:a1,distance_vert:l1,distance_frag:c1,equirect_vert:u1,equirect_frag:h1,linedashed_vert:f1,linedashed_frag:d1,meshbasic_vert:p1,meshbasic_frag:m1,meshlambert_vert:g1,meshlambert_frag:_1,meshmatcap_vert:x1,meshmatcap_frag:y1,meshnormal_vert:v1,meshnormal_frag:S1,meshphong_vert:M1,meshphong_frag:b1,meshphysical_vert:T1,meshphysical_frag:w1,meshtoon_vert:E1,meshtoon_frag:A1,points_vert:R1,points_frag:C1,shadow_vert:P1,shadow_frag:I1,sprite_vert:L1,sprite_frag:D1},Ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Er={basic:{uniforms:$n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:$n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:$n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:$n([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:$n([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:$n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:$n([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:$n([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:$n([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:$n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:$n([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:$n([Ce.common,Ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:$n([Ce.lights,Ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Er.physical={uniforms:$n([Er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var pf={r:0,b:0,g:0},N1=new qe,Jx=new Ke;Jx.set(-1,0,0,0,1,0,0,0,1);function O1(r,e,t,n,i,s){let o=new Ve(0),a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=e.get(M,v)}return M}function p(y){let M=!1,v=d(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,M){let v=d(M);v&&v.isCubeTexture?(c===void 0&&(c=new gt(new Ui(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:No(Er.backgroundCube.uniforms),vertexShader:Er.backgroundCube.vertexShader,fragmentShader:Er.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(N1.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jx),c.material.toneMapped=st.getTransfer(v.colorSpace)!==Mt,(u!==v||h!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new gt(new Zi(2,2),new Si({name:"BackgroundMaterial",uniforms:No(Er.background.uniforms),vertexShader:Er.background.vertexShader,fragmentShader:Er.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=st.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(pf,nm(r)),t.buffers.color.setClear(pf.r,pf.g,pf.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:g}}function U1(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(D,L,U,C,B){let k=!1,N=h(D,C,U,L);s!==N&&(s=N,c(s.object)),k=d(D,C,U,B),k&&p(D,C,U,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(D,L,U,C),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function h(D,L,U,C){let B=C.wireframe===!0,k=n[L.id];k===void 0&&(k={},n[L.id]=k);let N=D.isInstancedMesh===!0?D.id:0,Z=k[N];Z===void 0&&(Z={},k[N]=Z);let G=Z[U.id];G===void 0&&(G={},Z[U.id]=G);let P=G[B];return P===void 0&&(P=f(l()),G[B]=P),P}function f(D){let L=[],U=[],C=[];for(let B=0;B<t;B++)L[B]=0,U[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:C,object:D,attributes:{},index:null}}function d(D,L,U,C){let B=s.attributes,k=L.attributes,N=0,Z=U.getAttributes();for(let G in Z)if(Z[G].location>=0){let J=B[G],le=k[G];if(le===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;N++}return s.attributesNum!==N||s.index!==C}function p(D,L,U,C){let B={},k=L.attributes,N=0,Z=U.getAttributes();for(let G in Z)if(Z[G].location>=0){let J=k[G];J===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let le={};le.attribute=J,J&&J.data&&(le.data=J.data),B[G]=le,N++}s.attributes=B,s.attributesNum=N,s.index=C}function _(){let D=s.newAttributes;for(let L=0,U=D.length;L<U;L++)D[L]=0}function m(D){g(D,0)}function g(D,L){let U=s.newAttributes,C=s.enabledAttributes,B=s.attributeDivisors;U[D]=1,C[D]===0&&(r.enableVertexAttribArray(D),C[D]=1),B[D]!==L&&(r.vertexAttribDivisor(D,L),B[D]=L)}function y(){let D=s.newAttributes,L=s.enabledAttributes;for(let U=0,C=L.length;U<C;U++)L[U]!==D[U]&&(r.disableVertexAttribArray(U),L[U]=0)}function M(D,L,U,C,B,k,N){N===!0?r.vertexAttribIPointer(D,L,U,B,k):r.vertexAttribPointer(D,L,U,C,B,k)}function v(D,L,U,C){_();let B=C.attributes,k=U.getAttributes(),N=L.defaultAttributeValues;for(let Z in k){let G=k[Z];if(G.location>=0){let P=B[Z];if(P===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){let J=P.normalized,le=P.itemSize,be=e.get(P);if(be===void 0)continue;let X=be.buffer,ce=be.type,_e=be.bytesPerElement,Te=ce===r.INT||ce===r.UNSIGNED_INT||P.gpuType===Rh;if(P.isInterleavedBufferAttribute){let de=P.data,ae=de.isInterleavedBuffer===!0?de.stride:de.itemSize,Ne=P.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)g(G.location+oe,de.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);r.bindBuffer(r.ARRAY_BUFFER,X);for(let oe=0;oe<G.locationSize;oe++)M(G.location+oe,le/G.locationSize,ce,J,ae*_e,(Ne+le/G.locationSize*oe)*_e,Te)}else{if(P.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)g(G.location+de,P.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);r.bindBuffer(r.ARRAY_BUFFER,X);for(let de=0;de<G.locationSize;de++)M(G.location+de,le/G.locationSize,ce,J,le*_e,le/G.locationSize*de*_e,Te)}}else if(N!==void 0){let J=N[Z];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(G.location,J);break;case 3:r.vertexAttrib3fv(G.location,J);break;case 4:r.vertexAttrib4fv(G.location,J);break;default:r.vertexAttrib1fv(G.location,J)}}}}y()}function b(){R();for(let D in n){let L=n[D];for(let U in L){let C=L[U];for(let B in C){let k=C[B];for(let N in k)u(k[N].object),delete k[N];delete C[B]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let U in L){let C=L[U];for(let B in C){let k=C[B];for(let N in k)u(k[N].object),delete k[N];delete C[B]}}delete n[D.id]}function x(D){for(let L in n){let U=n[L];for(let C in U){let B=U[C];if(B[D.id]===void 0)continue;let k=B[D.id];for(let N in k)u(k[N].object),delete k[N];delete B[D.id]}}}function S(D){for(let L in n){let U=n[L],C=D.isInstancedMesh===!0?D.id:0,B=U[C];if(B!==void 0){for(let k in B){let N=B[k];for(let Z in N)u(N[Z].object),delete N[Z];delete B[k]}delete U[C],Object.keys(U).length===0&&delete n[L]}}}function R(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function F1(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function B1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Ji&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==bi&&x!==Jn&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:T}}function k1(r){let e=this,t=null,n=0,i=!1,s=!1,o=new ar,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=r.get(h);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,M=y*4,v=g.clippingState||null;l.value=v,v=u(p,f,M,d);for(let b=0;b!==M;++b)v[b]=t[b];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var wc=class extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ec(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ui(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:No(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Ro});s.uniforms.tEquirect.value=t;let o=new gt(i,s),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Ut),new Ba(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Rx=256,z1=3,H1=20,$x=256,jx=16,G1=3,V1=new z,W1=new Ve,Bs=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ba(1,10,null),this._boxMesh=new gt(new Ui(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=V1}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(W1));let m=new Ba(n,i,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Rx,Qp(e))}_fromTexture(e,t){e.mapping===Io||e.mapping===Ha?this._setSize(e.image.length===0?Rx:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Cx(e,!1,!1),n=Math.log2(e)-z1;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Io||e.mapping===Ha?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ix()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Px()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=X1(),this._integrationMaterial=q1());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/jx);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-G1)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/($x*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Y1());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function Cx(r,e,t){return new wc(r,{minFilter:Fi,generateMipmaps:e,type:ui,colorSpace:Dn,depthBuffer:t})}function Ec(r,e,t){return new Si({name:r,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:On,blending:Ro,depthTest:!1,depthWrite:!1})}function X1(){return Ec("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$x}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function q1(){return Ec("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Y1(){return Ec("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${H1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Px(){return Ec("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ix(){return Ec("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function K1(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===wh||d===Eh)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new wc(p.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===wh||d===Eh,_=d===Io||d===Ha;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Bs(r)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Bs(r)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===wh?f.mapping=Io:d===Eh&&(f.mapping=Ha),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Z1(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&mo("WebGLRenderer: "+n+" extension not supported."),i}}}function J1(r,e,t,n){let i={},s=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let _=s.get(p);_&&(e.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],r.ARRAY_BUFFER)}function h(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,M=m.count>=65535?Jl:Zl,v=new M(Math.ceil(y/3)*6,1),b=v.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,R=0;S<y;S+=3){let A=x[S+0],D=x[S+1],L=x[S+2];b[R++]=A,b[R++]=D,b[R++]=D,b[R++]=L,b[R++]=L,b[R++]=A}}else{g=m.version;for(let x=0,S=0;x<y;x+=3){let R=x+0,A=x+1,D=x+2;b[S++]=R,b[S++]=A,b[S++]=A,b[S++]=D,b[S++]=D,b[S++]=R}}v.version=g;let T=s.get(p);T&&e.remove(T),s.set(p,v)}function f(p){let _=s.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&h(p)}else h(p);return s.get(p)}function d(){for(let p in i){let _=i[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function $1(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function j1(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Q1(r,e,t){let n=new WeakMap,i=new yt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let R=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*b*4*h),x=new Yl(T,v,b,h);x.type=Jn,x.needsUpdate=!0;let S=M*4;for(let A=0;A<h;A++){let D=m[A],L=g[A],U=y[A],C=v*b*4*A;for(let B=0;B<D.count;B++){let k=B*S;d===!0&&(i.fromBufferAttribute(D,B),T[C+k+0]=i.x,T[C+k+1]=i.y,T[C+k+2]=i.z,T[C+k+3]=0),p===!0&&(i.fromBufferAttribute(L,B),T[C+k+4]=i.x,T[C+k+5]=i.y,T[C+k+6]=i.z,T[C+k+7]=0),_===!0&&(i.fromBufferAttribute(U,B),T[C+k+8]=i.x,T[C+k+9]=i.y,T[C+k+10]=i.z,T[C+k+11]=U.itemSize===4?i.w:1)}}f={count:h,texture:x,size:new et(v,b)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function ew(r,e,t,n,i){let s=new WeakMap;function o(c){let u=i.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var tw={[Dp]:"LINEAR_TONE_MAPPING",[Np]:"REINHARD_TONE_MAPPING",[Op]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[Fp]:"AGX_TONE_MAPPING",[Bp]:"NEUTRAL_TONE_MAPPING",[Up]:"CUSTOM_TONE_MAPPING"};function nw(r,e,t,n,i,s){let o=new Oi(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new nn;u.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new bt([0,2,0,0,2,0],2));let h=new dh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new gt(u,h),d=new Eo(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,M=[],v=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let x=0;x<M.length;x++){let S=M[x];S.setSize&&S.setSize(b,T)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;let T=o.width,x=o.height;M.length>0&&a===null&&(a=new Oi(T,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}),l=new Oi(T,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&M.some(R=>R.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new jr(T,x),s===!0&&(c.format=ss,c.type=Do)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let R=0;R<M.length;R++){let A=M[R];A.setSize&&A.setSize(T,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,T){if(m||b.toneMapping===br&&M.length===0)return!1;if(y=T,T!==null){let x=T.width,S=T.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=br,!0},this.hasRenderPass=function(){return v},this.end=function(b,T){b.toneMapping=g,m=!0;let x=o,S=a;for(let R=0;R<M.length;R++){let A=M[R];A.enabled!==!1&&(A.render(b,S,x,T),A.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(p!==b.outputColorSpace||_!==b.toneMapping){p=b.outputColorSpace,_=b.toneMapping,h.defines={},st.getTransfer(p)===Mt&&(h.defines.SRGB_TRANSFER="");let R=tw[_];R&&(h.defines[R]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(y),b.render(f,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Qx=new an,ey=new jr(1,1),ty=new tc(1),ny=new Yl,iy=new ch,ry=new ec,Lx=[],Dx=[],Nx=new Float32Array(16),Ox=new Float32Array(9),Ux=new Float32Array(4);function Ya(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Lx[i];if(s===void 0&&(s=new Float32Array(i),Lx[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Mn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function bn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function gf(r,e){let t=Dx[e];t===void 0&&(t=new Int32Array(e),Dx[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function iw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;r.uniform2fv(this.addr,e),bn(t,e)}}function sw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;r.uniform3fv(this.addr,e),bn(t,e)}}function ow(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;r.uniform4fv(this.addr,e),bn(t,e)}}function aw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Ux.set(n),r.uniformMatrix2fv(this.addr,!1,Ux),bn(t,n)}}function lw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Ox.set(n),r.uniformMatrix3fv(this.addr,!1,Ox),bn(t,n)}}function cw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Nx.set(n),r.uniformMatrix4fv(this.addr,!1,Nx),bn(t,n)}}function uw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;r.uniform2iv(this.addr,e),bn(t,e)}}function fw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;r.uniform3iv(this.addr,e),bn(t,e)}}function dw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;r.uniform4iv(this.addr,e),bn(t,e)}}function pw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;r.uniform2uiv(this.addr,e),bn(t,e)}}function gw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;r.uniform3uiv(this.addr,e),bn(t,e)}}function _w(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;r.uniform4uiv(this.addr,e),bn(t,e)}}function _f(r){return r.version===0&&(r.compareFunction=Zp,r.needsUpdate=!0),r}function xw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=_f(ey):s=Qx,t.setTexture2D(e||s,i)}function yw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||iy,i)}function vw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=_f(ty):s=ry,t.setTextureCube(e||s,i)}function Sw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ny,i)}function Mw(r){switch(r){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return hw;case 35668:case 35672:return fw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return Sw}}function bw(r,e){r.uniform1fv(this.addr,e)}function Tw(r,e){let t=Ya(e,this.size,2);r.uniform2fv(this.addr,t)}function ww(r,e){let t=Ya(e,this.size,3);r.uniform3fv(this.addr,t)}function Ew(r,e){let t=Ya(e,this.size,4);r.uniform4fv(this.addr,t)}function Aw(r,e){let t=Ya(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rw(r,e){let t=Ya(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cw(r,e){let t=Ya(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pw(r,e){r.uniform1iv(this.addr,e)}function Iw(r,e){r.uniform2iv(this.addr,e)}function Lw(r,e){r.uniform3iv(this.addr,e)}function Dw(r,e){r.uniform4iv(this.addr,e)}function Nw(r,e){r.uniform1uiv(this.addr,e)}function Ow(r,e){r.uniform2uiv(this.addr,e)}function Uw(r,e){r.uniform3uiv(this.addr,e)}function Fw(r,e){r.uniform4uiv(this.addr,e)}function Bw(r,e,t){let n=this.cache,i=e.length,s=gf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=_f(ey):o=Qx;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function kw(r,e,t){let n=this.cache,i=e.length,s=gf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||iy,s[o])}function zw(r,e,t){let n=this.cache,i=e.length,s=gf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=_f(ty):o=ry;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,s[a])}function Hw(r,e,t){let n=this.cache,i=e.length,s=gf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ny,s[o])}function Gw(r){switch(r){case 5126:return bw;case 35664:return Tw;case 35665:return ww;case 35666:return Ew;case 35674:return Aw;case 35675:return Rw;case 35676:return Cw;case 5124:case 35670:return Pw;case 35667:case 35671:return Iw;case 35668:case 35672:return Lw;case 35669:case 35673:return Dw;case 5125:return Nw;case 36294:return Ow;case 36295:return Uw;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return zw;case 36289:case 36303:case 36311:case 36292:return Hw}}var lm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mw(t.type)}},cm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gw(t.type)}},um=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},om=/(\w+)(\])?(\[|\.)?/g;function Fx(r,e){r.seq.push(e),r.map[e.id]=e}function Vw(r,e,t){let n=r.name,i=n.length;for(om.lastIndex=0;;){let s=om.exec(n),o=om.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fx(t,c===void 0?new lm(a,r,e):new cm(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new um(a),Fx(t,h)),t=h}}}var Xa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Vw(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Bx(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Ww=37297,Xw=0;function qw(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var kx=new Ke;function Yw(r){st._getMatrix(kx,st.workingColorSpace,r);let e=`mat3( ${kx.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case Xl:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function zx(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+qw(r.getShaderSource(e),a)}else return s}function Kw(r,e){let t=Yw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Zw={[Dp]:"Linear",[Np]:"Reinhard",[Op]:"Cineon",[Po]:"ACESFilmic",[Fp]:"AgX",[Bp]:"Neutral",[Up]:"Custom"};function Jw(r,e){let t=Zw[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mf=new z;function $w(){st.getLuminanceCoefficients(mf);let r=mf.x.toFixed(4),e=mf.y.toFixed(4),t=mf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tc).join(`
`)}function Qw(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eE(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Tc(r){return r!==""}function Hx(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Gx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function hm(r){return r.replace(tE,nE)}function nE(r,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return hm(t)}var iE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vx(r){return r.replace(iE,rE)}function rE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var sE={[Ao]:"SHADOWMAP_TYPE_PCF",[ka]:"SHADOWMAP_TYPE_VSM"};function oE(r){return sE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var aE={[Ha]:"ENVMAP_MODE_REFRACTION"};function lE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":aE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cE={[Th]:"ENVMAP_BLENDING_MULTIPLY",[lx]:"ENVMAP_BLENDING_MIX",[cx]:"ENVMAP_BLENDING_ADD"};function uE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cE[r.combine]||"ENVMAP_BLENDING_NONE"}function hE(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=oE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=lE(t),h=uE(t),f=jw(t),d=Qw(s),p=i.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Tc).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Tc).join(`
`),m.length>0&&(m+=`
`)):(_=[Wx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tc).join(`
`),m=[Wx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?nt.tonemapping_pars_fragment:"",t.toneMapping!==br?Jw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Kw("linearToOutputTexel",t.outputColorSpace),$w(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tc).join(`
`)),o=hm(o),o=Hx(o,t),o=Gx(o,t),a=hm(a),a=Hx(a,t),a=Gx(a,t),o=Vx(o),a=Vx(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+o,M=g+m+a,v=Bx(i,i.VERTEX_SHADER,y),b=Bx(i,i.FRAGMENT_SHADER,M);i.attachShader(p,v),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function T(A){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(v)||"",U=i.getShaderInfoLog(b)||"",C=D.trim(),B=L.trim(),k=U.trim(),N=!0,Z=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,v,b);else{let G=zx(i,v,"vertex"),P=zx(i,b,"fragment");Xe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+G+`
`+P)}else C!==""?Ge("WebGLProgram: Program Info Log:",C):(B===""||k==="")&&(Z=!1);Z&&(A.diagnostics={runnable:N,programLog:C,vertexShader:{log:B,prefix:_},fragmentShader:{log:k,prefix:m}})}i.deleteShader(v),i.deleteShader(b),x=new Xa(i,p),S=eE(i,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(p,Ww)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}var fE=0,fm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dm(e),t.set(e,n)),n}},dm=class{constructor(e){this.id=fE++,this.code=e,this.usedTimes=0}};function dE(r){return r===Fs||r===yc||r===vc}function pE(r,e,t,n,i,s){let o=new Kl,a=new fm,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,R,A,D,L){let U=A.fog,C=D.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=e.get(x.envMap||B,k),Z=f[x.type],G=n.precision;x.precision!==null&&(G=n.getMaxPrecision(x.precision),G!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let P=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,J=P!==void 0?P.length:0,le=0;C.morphAttributes.position!==void 0&&(le=1),C.morphAttributes.normal!==void 0&&(le=2),C.morphAttributes.color!==void 0&&(le=3);let be,X,ce,_e;if(Z){let ie=Er[Z];be=ie.vertexShader,X=ie.fragmentShader}else{be=x.vertexShader,X=x.fragmentShader;let ie=a.getVertexShaderStage(x),Ie=a.getFragmentShaderStage(x);a.update(x,ie,Ie),ce=ie.id,_e=Ie.id}let Te=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),ae=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,oe=!!x.map,Re=!!x.matcap,ee=!!N,pe=ee&&N.isPMREMTexture===!0,De=!!x.aoMap,Fe=!!x.lightMap,Y=!!x.bumpMap&&x.wireframe===!1,Qe=!!x.normalMap,Bt=!!x.displacementMap,pt=!!x.emissiveMap,Je=!!x.metalnessMap,Lt=!!x.roughnessMap,rn=x.anisotropy>0,H=x.clearcoat>0,_t=x.diffuseRoughness>0,ft=x.dispersion>0,Ye=x.retroreflectivity>0,xe=x.iridescence>0,mt=x.sheen>0,ze=x.transmission>0,We=rn&&!!x.anisotropyMap,I=H&&!!x.clearcoatMap,w=H&&!!x.clearcoatNormalMap,W=H&&!!x.clearcoatRoughnessMap,ue=_t&&!!x.diffuseRoughnessMap,re=xe&&!!x.iridescenceMap,ge=xe&&!!x.iridescenceThicknessMap,Me=mt&&!!x.sheenColorMap,q=mt&&!!x.sheenRoughnessMap,te=!!x.specularMap,me=!!x.specularColorMap,O=!!x.specularIntensityMap,Q=ze&&!!x.transmissionMap,j=ze&&!!x.thicknessMap,ye=!!x.gradientMap,fe=!!x.alphaMap,ve=x.alphaTest>0,he=!!x.alphaHash,Se=!!x.extensions,se=br;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(se=r.toneMapping);let ne=pe?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,we={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:be,fragmentShader:X,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:ae,instancingColor:ae&&D.instanceColor!==null,instancingMorph:ae&&D.morphTexture!==null,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:Re,envMap:ee,envMapMode:ee&&N.mapping,envMapPMREM:pe,envMapMaxLod:pe?ne.length-1:null,envMapSize:pe?ne[0].width:null,aoMap:De,lightMap:Fe,bumpMap:Y,normalMap:Qe,displacementMap:Bt,emissiveMap:pt,normalMapObjectSpace:Qe&&x.normalMapType===dx,normalMapTangentSpace:Qe&&x.normalMapType===Mc,packedNormalMap:Qe&&x.normalMapType===Mc&&dE(x.normalMap.format),metalnessMap:Je,roughnessMap:Lt,anisotropy:rn,anisotropyMap:We,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:W,diffuseRoughness:_t,diffuseRoughnessMap:ue,dispersion:ft,retroreflection:Ye,iridescence:xe,iridescenceMap:re,iridescenceThicknessMap:ge,sheen:mt,sheenColorMap:Me,sheenRoughnessMap:q,specularMap:te,specularColorMap:me,specularIntensityMap:O,transmission:ze,transmissionMap:Q,thicknessMap:j,gradientMap:ye,opaque:x.transparent===!1&&x.blending===za&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:ve,alphaHash:he,combine:x.combine,mapUv:oe&&d(x.map.channel),aoMapUv:De&&d(x.aoMap.channel),lightMapUv:Fe&&d(x.lightMap.channel),bumpMapUv:Y&&d(x.bumpMap.channel),normalMapUv:Qe&&d(x.normalMap.channel),displacementMapUv:Bt&&d(x.displacementMap.channel),emissiveMapUv:pt&&d(x.emissiveMap.channel),metalnessMapUv:Je&&d(x.metalnessMap.channel),roughnessMapUv:Lt&&d(x.roughnessMap.channel),anisotropyMapUv:We&&d(x.anisotropyMap.channel),clearcoatMapUv:I&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(x.sheenRoughnessMap.channel),specularMapUv:te&&d(x.specularMap.channel),specularColorMapUv:me&&d(x.specularColorMap.channel),specularIntensityMapUv:O&&d(x.specularIntensityMap.channel),transmissionMapUv:Q&&d(x.transmissionMap.channel),thicknessMapUv:j&&d(x.thicknessMap.channel),alphaMapUv:fe&&d(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Qe||rn),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(oe||fe),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&Qe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:le,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(ie=>ie.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:pt&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)S.push(R),S.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(S,x),g(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let S=f[x.type],R;if(S){let A=Er[S];R=wx.clone(A.uniforms)}else R=x.uniforms;return R}function M(x,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new hE(r,S,x,i),c.push(R),u.set(S,R)),R}function v(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:T}}function mE(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function gE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Xx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qx(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,g){let y=r[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},r[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=g),e++,y}function l(f,d,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let M=a(f,d,p,_,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function c(f,d,p,_,m,g){let y=a(f,d,p,_,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||gE),n.length>1&&n.sort(d||Xx),i.length>1&&i.sort(d||Xx)}function h(){for(let f=e,d=r.length;f<d;f++){let p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function _E(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new qx,r.set(n,[o])):i>=s.length?(o=new qx,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function xE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ve};break;case"SpotLight":t={position:new z,direction:new z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function yE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var vE=0;function SE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ME(r){let e=new xE,t=yE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,s=new qe,o=new qe;function a(c){let u=0,h=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,y=0,M=0,v=0,b=0,T=0,x=0,S=0,R=0,A=0;c.sort(SE);for(let L=0,U=c.length;L<U;L++){let C=c[L],B=C.color,k=C.intensity,N=C.distance,Z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Fs?Z=C.shadow.map.texture:Z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=B.r*k,h+=B.g*k,f+=B.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],k);A++}else if(C.isSunLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let P=C.shadow,J=t.get(C);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=Z;let le=P.getViewportCount();for(let be=0;be<le;be++)n.sunShadowMatrix[_+be]=P.getMatrix(be),n.sunShadowCascade[_+be]=P._cascadeData[be];_+=le,p++}n.sun[d]=G,d++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let P=C.shadow,J=t.get(C);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=G,m++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(B).multiplyScalar(k),G.distance=N,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[y]=G;let P=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,P.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[y]=P.matrix,C.castShadow){let J=t.get(C);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=Z,x++}y++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(B).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[M]=G,M++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let P=C.shadow,J=t.get(C);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,J.shadowCameraNear=P.camera.near,J.shadowCameraFar=P.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[v]=G,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.sunLength=d,D.directionalLength=m,D.pointLength=g,D.spotLength=y,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=A,n.version=vE++)}function l(c,u){let h=0,f=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let b=n.sun[h];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),h++}else if(v.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Yx(r){let e=new ME(r),t=[],n=[],i=[];function s(h){u.camera=h,t.length=0,n.length=0,i.length=0}function o(h){h.isLightProbeGrid?i.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),i.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bE(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Yx(r),e.set(i,[a])):s>=o.length?(a=new Yx(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,EE=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],AE=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Kx=new qe,bc=new z,am=new z;function RE(r,e,t){let n=new Ds,i=new et,s=new et,o=new yt,a=new ph,l=new mh,c={},u=t.maxTextureSize,h={[Mr]:On,[On]:Mr,[Un]:Un},f=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:TE,fragmentShader:wE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new nn;p.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let g=this.type;this.render=function(T,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===V_&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ao);let R=r.getRenderTarget(),A=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Ro),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=g!==this.type;U&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=T.length;C<B;C++){let k=T[C],N=k.shadow;if(N===void 0){Ge("WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);let Z=N.getFrameExtents();i.multiply(Z),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,N.mapSize.y=s.y));let G=r.state.buffers.depth.getReversed();if(N.camera._reversedDepth=G,N.map===null||U===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ka){if(k.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Oi(i.x,i.y,{format:Fs,type:ui,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),N.map.texture.name=k.name+".shadowMap",N.map.depthTexture=new jr(i.x,i.y,Jn),N.map.depthTexture.name=k.name+".shadowMapDepth",N.map.depthTexture.format=Zr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=on,N.map.depthTexture.magFilter=on}else k.isPointLight?(N.map=new wc(i.x),N.map.depthTexture=new tc(i.x,ur)):(N.map=new Oi(i.x,i.y),N.map.depthTexture=new jr(i.x,i.y,ur)),N.map.depthTexture.name=k.name+".shadowMap",N.map.depthTexture.format=Zr,this.type===Ao?(N.map.depthTexture.compareFunction=G?Kp:Yp,N.map.depthTexture.minFilter=Ut,N.map.depthTexture.magFilter=Ut):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=on,N.map.depthTexture.magFilter=on);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==i.x||N.map.height!==i.y)&&N.map.setSize(i.x,i.y);let P=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();k.isPointLight!==!0&&N.updateMatrices(k,S);let J=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:S.layers;for(let le=0;le<P;le++){let be=N.getCamera(le);if(k.isPointLight){let X=N.camera,ce=N.matrix,_e=k.distance||X.far;_e!==X.far&&(X.far=_e,X.updateProjectionMatrix()),bc.setFromMatrixPosition(k.matrixWorld),X.position.copy(bc),am.copy(X.position),am.add(EE[le]),X.up.copy(AE[le]),X.lookAt(am),X.updateMatrixWorld(),ce.makeTranslation(-bc.x,-bc.y,-bc.z),Kx.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Kx,X.coordinateSystem,X.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)r.setRenderTarget(N.map,le),r.clear();else{le===0&&(r.setRenderTarget(N.map),r.clear());let X=N.getViewport(le);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),L.viewport(o)}n=N.getFrustum(le),v(x,S,be,k,J,this.type)}N.isPointLightShadow!==!0&&this.type===ka&&y(N,S),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(R,A,D)};function y(T,x){let S=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Oi(i.x,i.y,{format:Fs,type:ui}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(x,null,S,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(x,null,S,d,_,null)}function M(T,x,S,R){let A=null,D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=A.uuid,U=x.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let B=C[U];B===void 0&&(B=A.clone(),C[U]=B,x.addEventListener("dispose",b)),A=B}if(A.visible=x.visible,A.wireframe=x.wireframe,R===ka?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:h[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=r.properties.get(A);L.light=S}return A}function v(T,x,S,R,A,D){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===ka)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let C=e.update(T),B=T.material;if(Array.isArray(B)){let k=C.groups;for(let N=0,Z=k.length;N<Z;N++){let G=k[N],P=B[G.materialIndex];if(P&&P.visible){let J=M(T,P,R,D);T.onBeforeShadow(r,T,x,S,C,J,G),r.renderBufferDirect(S,null,C,J,T,G),T.onAfterShadow(r,T,x,S,C,J,G)}}}else if(B.visible){let k=M(T,B,R,D);T.onBeforeShadow(r,T,x,S,C,k,null),r.renderBufferDirect(S,null,C,k,T,null),T.onAfterShadow(r,T,x,S,C,k,null)}}let U=T.children;for(let C=0,B=U.length;C<B;C++)v(U[C],x,S,R,A,D)}function b(T){T.target.removeEventListener("dispose",b);for(let S in c){let R=c[S],A=T.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function CE(r,e){function t(){let O=!1,Q=new yt,j=null,ye=new yt(0,0,0,0);return{setMask:function(fe){j!==fe&&!O&&(r.colorMask(fe,fe,fe,fe),j=fe)},setLocked:function(fe){O=fe},setClear:function(fe,ve,he,Se,se){se===!0&&(fe*=Se,ve*=Se,he*=Se),Q.set(fe,ve,he,Se),ye.equals(Q)===!1&&(r.clearColor(fe,ve,he,Se),ye.copy(Q))},reset:function(){O=!1,j=null,ye.set(-1,0,0,0)}}}function n(){let O=!1,Q=!1,j=null,ye=null,fe=null;return{setReversed:function(ve){if(Q!==ve){let he=e.get("EXT_clip_control");ve?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),Q=ve;let Se=fe;fe=null,this.setClear(Se)}},getReversed:function(){return Q},setTest:function(ve){ve?de(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(ve){j!==ve&&!O&&(r.depthMask(ve),j=ve)},setFunc:function(ve){if(Q&&(ve=bx[ve]),ye!==ve){switch(ve){case eh:r.depthFunc(r.NEVER);break;case th:r.depthFunc(r.ALWAYS);break;case nh:r.depthFunc(r.LESS);break;case wa:r.depthFunc(r.LEQUAL);break;case ih:r.depthFunc(r.EQUAL);break;case rh:r.depthFunc(r.GEQUAL);break;case sh:r.depthFunc(r.GREATER);break;case oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ye=ve}},setLocked:function(ve){O=ve},setClear:function(ve){fe!==ve&&(fe=ve,Q&&(ve=1-ve),r.clearDepth(ve))},reset:function(){O=!1,j=null,ye=null,fe=null,Q=!1}}}function i(){let O=!1,Q=null,j=null,ye=null,fe=null,ve=null,he=null,Se=null,se=null;return{setTest:function(ne){O||(ne?de(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(ne){Q!==ne&&!O&&(r.stencilMask(ne),Q=ne)},setFunc:function(ne,we,ie){(j!==ne||ye!==we||fe!==ie)&&(r.stencilFunc(ne,we,ie),j=ne,ye=we,fe=ie)},setOp:function(ne,we,ie){(ve!==ne||he!==we||Se!==ie)&&(r.stencilOp(ne,we,ie),ve=ne,he=we,Se=ie)},setLocked:function(ne){O=ne},setClear:function(ne){se!==ne&&(r.clearStencil(ne),se=ne)},reset:function(){O=!1,Q=null,j=null,ye=null,fe=null,ve=null,he=null,Se=null,se=null}}}let s=new t,o=new n,a=new i,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,v=null,b=null,T=null,x=null,S=new Ve(0,0,0),R=0,A=!1,D=null,L=null,U=null,C=null,B=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Z=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=Z>=2);let P=null,J={},le=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),X=new yt().fromArray(le),ce=new yt().fromArray(be);function _e(O,Q,j,ye){let fe=new Uint8Array(4),ve=r.createTexture();r.bindTexture(O,ve),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let he=0;he<j;he++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,ye,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(Q+he,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return ve}let Te={};Te[r.TEXTURE_2D]=_e(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=_e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=_e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=_e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(r.DEPTH_TEST),o.setFunc(wa),Y(!1),Qe(Rp),de(r.CULL_FACE),De(Ro);function de(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function ae(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Ne(O,Q){return f[O]!==Q?(r.bindFramebuffer(O,Q),f[O]=Q,O===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Q),O===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function oe(O,Q){let j=p,ye=!1;if(O){j=d.get(Q),j===void 0&&(j=[],d.set(Q,j));let fe=O.textures;if(j.length!==fe.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,he=fe.length;ve<he;ve++)j[ve]=r.COLOR_ATTACHMENT0+ve;j.length=fe.length,ye=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,ye=!0);ye&&r.drawBuffers(j)}function Re(O){return _!==O?(r.useProgram(O),_=O,!0):!1}let ee={[Co]:r.FUNC_ADD,[X_]:r.FUNC_SUBTRACT,[q_]:r.FUNC_REVERSE_SUBTRACT};ee[Y_]=r.MIN,ee[K_]=r.MAX;let pe={[Z_]:r.ZERO,[J_]:r.ONE,[$_]:r.SRC_COLOR,[Ip]:r.SRC_ALPHA,[ix]:r.SRC_ALPHA_SATURATE,[tx]:r.DST_COLOR,[Q_]:r.DST_ALPHA,[j_]:r.ONE_MINUS_SRC_COLOR,[Lp]:r.ONE_MINUS_SRC_ALPHA,[nx]:r.ONE_MINUS_DST_COLOR,[ex]:r.ONE_MINUS_DST_ALPHA,[rx]:r.CONSTANT_COLOR,[sx]:r.ONE_MINUS_CONSTANT_COLOR,[ox]:r.CONSTANT_ALPHA,[ax]:r.ONE_MINUS_CONSTANT_ALPHA};function De(O,Q,j,ye,fe,ve,he,Se,se,ne){if(O===Ro){m===!0&&(ae(r.BLEND),m=!1);return}if(m===!1&&(de(r.BLEND),m=!0),O!==W_){if(O!==g||ne!==A){if((y!==Co||b!==Co)&&(r.blendEquation(r.FUNC_ADD),y=Co,b=Co),ne)switch(O){case za:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pc:r.blendFunc(r.ONE,r.ONE);break;case Cp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",O);break}else switch(O){case za:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Cp:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pp:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",O);break}M=null,v=null,T=null,x=null,S.set(0,0,0),R=0,g=O,A=ne}return}fe=fe||Q,ve=ve||j,he=he||ye,(Q!==y||fe!==b)&&(r.blendEquationSeparate(ee[Q],ee[fe]),y=Q,b=fe),(j!==M||ye!==v||ve!==T||he!==x)&&(r.blendFuncSeparate(pe[j],pe[ye],pe[ve],pe[he]),M=j,v=ye,T=ve,x=he),(Se.equals(S)===!1||se!==R)&&(r.blendColor(Se.r,Se.g,Se.b,se),S.copy(Se),R=se),g=O,A=!1}function Fe(O,Q){O.side===Un?ae(r.CULL_FACE):de(r.CULL_FACE);let j=O.side===On;Q&&(j=!j),Y(j),O.blending===za&&O.transparent===!1?De(Ro):De(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let ye=O.stencilWrite;a.setTest(ye),ye&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Y(O){D!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),D=O)}function Qe(O){O!==H_?(de(r.CULL_FACE),O!==L&&(O===Rp?r.cullFace(r.BACK):O===G_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),L=O}function Bt(O){O!==U&&(N&&r.lineWidth(O),U=O)}function pt(O,Q,j){O?(de(r.POLYGON_OFFSET_FILL),(C!==Q||B!==j)&&(C=Q,B=j,o.getReversed()&&(Q=-Q,j=-j),r.polygonOffset(Q,j))):ae(r.POLYGON_OFFSET_FILL)}function Je(O){O?de(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function Lt(O){O===void 0&&(O=r.TEXTURE0+k-1),P!==O&&(r.activeTexture(O),P=O)}function rn(O,Q,j){j===void 0&&(P===null?j=r.TEXTURE0+k-1:j=P);let ye=J[j];ye===void 0&&(ye={type:void 0,texture:void 0},J[j]=ye),(ye.type!==O||ye.texture!==Q)&&(P!==j&&(r.activeTexture(j),P=j),r.bindTexture(O,Q||Te[O]),ye.type=O,ye.texture=Q)}function H(){let O=J[P];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _t(){try{r.compressedTexImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function ft(){try{r.compressedTexImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function Ye(){try{r.texSubImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function xe(){try{r.texSubImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function ze(){try{r.compressedTexSubImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function We(){try{r.texStorage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function I(){try{r.texStorage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function w(){try{r.texImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function W(){try{r.texImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function ue(O){return h[O]!==void 0?h[O]:r.getParameter(O)}function re(O,Q){h[O]!==Q&&(r.pixelStorei(O,Q),h[O]=Q)}function ge(O){X.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),X.copy(O))}function Me(O){ce.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ce.copy(O))}function q(O,Q){let j=c.get(Q);j===void 0&&(j=new WeakMap,c.set(Q,j));let ye=j.get(O);ye===void 0&&(ye=r.getUniformBlockIndex(Q,O.name),r.uniformBlockBinding(Q,ye,ye),j.set(O,ye))}function te(O,Q,j){let fe=c.get(Q).get(O);l[fe]!==j&&(r.bindBufferBase(r.UNIFORM_BUFFER,fe,j),l[fe]=j)}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},P=null,J={},f={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,v=null,b=null,T=null,x=null,S=new Ve(0,0,0),R=0,A=!1,D=null,L=null,U=null,C=null,B=null,X.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:ae,bindFramebuffer:Ne,drawBuffers:oe,useProgram:Re,setBlending:De,setMaterial:Fe,setFlipSided:Y,setCullFace:Qe,setLineWidth:Bt,setPolygonOffset:pt,setScissorTest:Je,activeTexture:Lt,bindTexture:rn,unbindTexture:H,compressedTexImage2D:_t,compressedTexImage3D:ft,texImage2D:w,texImage3D:W,pixelStorei:re,getParameter:ue,updateUBOMapping:q,uniformBlockBinding:te,texStorage2D:We,texStorage3D:I,texSubImage2D:Ye,texSubImage3D:xe,compressedTexSubImage2D:mt,compressedTexSubImage3D:ze,scissor:ge,viewport:Me,reset:me}}function PE(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,h=new Set,f,d=new WeakMap,p=new Set,_=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return m?new OffscreenCanvas(I,w):Ra("canvas")}function y(I,w,W){let ue=1,re=We(I);if((re.width>W||re.height>W)&&(ue=W/Math.max(re.width,re.height)),ue<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ge=Math.floor(ue*re.width),Me=Math.floor(ue*re.height);f===void 0&&(f=g(ge,Me));let q=w?g(ge,Me):f;return q.width=ge,q.height=Me,q.getContext("2d").drawImage(I,0,0,ge,Me),Ge("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ge+"x"+Me+")."),q}else return"data"in I&&Ge("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),I;return I}function M(I){return I.generateMipmaps}function v(I){r.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(I,w,W,ue,re,ge=!1){if(I!==null){if(r[I]!==void 0)return r[I];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Me;ue&&(Me=e.get("EXT_texture_norm16"),Me||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=w;if(w===r.RED&&(W===r.FLOAT&&(q=r.R32F),W===r.HALF_FLOAT&&(q=r.R16F),W===r.UNSIGNED_BYTE&&(q=r.R8),W===r.UNSIGNED_SHORT&&Me&&(q=Me.R16_EXT),W===r.SHORT&&Me&&(q=Me.R16_SNORM_EXT)),w===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.R8UI),W===r.UNSIGNED_SHORT&&(q=r.R16UI),W===r.UNSIGNED_INT&&(q=r.R32UI),W===r.BYTE&&(q=r.R8I),W===r.SHORT&&(q=r.R16I),W===r.INT&&(q=r.R32I)),w===r.RG&&(W===r.FLOAT&&(q=r.RG32F),W===r.HALF_FLOAT&&(q=r.RG16F),W===r.UNSIGNED_BYTE&&(q=r.RG8),W===r.UNSIGNED_SHORT&&Me&&(q=Me.RG16_EXT),W===r.SHORT&&Me&&(q=Me.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.RG8UI),W===r.UNSIGNED_SHORT&&(q=r.RG16UI),W===r.UNSIGNED_INT&&(q=r.RG32UI),W===r.BYTE&&(q=r.RG8I),W===r.SHORT&&(q=r.RG16I),W===r.INT&&(q=r.RG32I)),w===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.RGB8UI),W===r.UNSIGNED_SHORT&&(q=r.RGB16UI),W===r.UNSIGNED_INT&&(q=r.RGB32UI),W===r.BYTE&&(q=r.RGB8I),W===r.SHORT&&(q=r.RGB16I),W===r.INT&&(q=r.RGB32I)),w===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),W===r.UNSIGNED_INT&&(q=r.RGBA32UI),W===r.BYTE&&(q=r.RGBA8I),W===r.SHORT&&(q=r.RGBA16I),W===r.INT&&(q=r.RGBA32I)),w===r.RGB&&(W===r.UNSIGNED_SHORT&&Me&&(q=Me.RGB16_EXT),W===r.SHORT&&Me&&(q=Me.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),w===r.RGBA){let te=ge?Xl:st.getTransfer(re);W===r.FLOAT&&(q=r.RGBA32F),W===r.HALF_FLOAT&&(q=r.RGBA16F),W===r.UNSIGNED_BYTE&&(q=te===Mt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&Me&&(q=Me.RGBA16_EXT),W===r.SHORT&&Me&&(q=Me.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(I,w){let W;return I?w===null||w===ur||w===Do?W=r.DEPTH24_STENCIL8:w===Jn?W=r.DEPTH32F_STENCIL8:w===Va&&(W=r.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ur||w===Do?W=r.DEPTH_COMPONENT24:w===Jn?W=r.DEPTH_COMPONENT32F:w===Va&&(W=r.DEPTH_COMPONENT16),W}function S(I,w){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==Ut?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function R(I){let w=new WeakRef(I);n.get(I).__ref=w,p.add(w),_.register(I,w,w)}function A(I){let w=n.get(I).__ref;w!==void 0&&(p.delete(w),_.unregister(w))}function D(I){U(I.target)}function L(I){C(I.target)}function U(I){I.removeEventListener("dispose",D),A(I),k(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&h.delete(I)}function C(I){I.removeEventListener("dispose",L),A(I),Z(I)}function B(){for(let I of p){let w=I.deref();w!==void 0&&(w.isRenderTarget===!0?C(w):U(w))}p.clear(),h.clear()}function k(I){let w=n.get(I);if(w.__webglInit===void 0)return;let W=I.source,ue=d.get(W);if(ue){let re=ue[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(I),Object.keys(ue).length===0&&d.delete(W)}n.remove(I)}function N(I){let w=n.get(I);r.deleteTexture(w.__webglTexture);let W=I.source,ue=d.get(W);delete ue[w.__cacheKey],o.memory.textures--}function Z(I){let w=n.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();let W=I.depthTexture;if(W&&W.renderTarget===I&&U(W),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let ge=0;ge<w.__webglFramebuffer[re].length;ge++)r.deleteFramebuffer(w.__webglFramebuffer[re][ge]);else r.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)r.deleteFramebuffer(w.__webglFramebuffer[re]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ue=I.textures;for(let re=0,ge=ue.length;re<ge;re++){let Me=n.get(ue[re]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(ue[re])}n.remove(I)}let G=0;function P(){G=0}function J(){return G}function le(I){G=I}function be(){let I=G;return I>=i.maxTextures&&Ge("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),G+=1,I}function X(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function ce(I,w){let W=n.get(I);if(I.isVideoTexture&&mt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let ue=I.image;if(ue===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(W,I,w);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+w)}function _e(I,w){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){Fe(W,I,w);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+w)}function Te(I,w){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){Fe(W,I,w);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+w)}function de(I,w){let W=n.get(I);if(I.version>0&&W.__version!==I.version){Y(W,I,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+w)}let ae={[Yi]:r.REPEAT,[xi]:r.CLAMP_TO_EDGE,[Ea]:r.MIRRORED_REPEAT},Ne={[on]:r.NEAREST,[Ah]:r.NEAREST_MIPMAP_NEAREST,[Lo]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[Ga]:r.LINEAR_MIPMAP_NEAREST,[Fi]:r.LINEAR_MIPMAP_LINEAR},oe={[mx]:r.NEVER,[Zp]:r.ALWAYS,[gx]:r.LESS,[Yp]:r.LEQUAL,[_x]:r.EQUAL,[Kp]:r.GEQUAL,[xx]:r.GREATER,[yx]:r.NOTEQUAL};function Re(I,w){if(w.type===Jn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ut||w.magFilter===Ga||w.magFilter===Lo||w.magFilter===Fi||w.minFilter===Ut||w.minFilter===Ga||w.minFilter===Lo||w.minFilter===Fi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,ae[w.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,ae[w.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,ae[w.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Ne[w.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Ne[w.minFilter]),w.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,oe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===on||w.minFilter!==Lo&&w.minFilter!==Fi||w.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ee(I,w){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",D),R(w));let ue=w.source,re=d.get(ue);re===void 0&&(re={},d.set(ue,re));let ge=X(w);if(ge!==I.__cacheKey){re[ge]===void 0&&(re[ge]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[ge].usedTimes++;let Me=re[I.__cacheKey];Me!==void 0&&(re[I.__cacheKey].usedTimes--,Me.usedTimes===0&&N(w)),I.__cacheKey=ge,I.__webglTexture=re[ge].texture}return W}function pe(I,w,W){return Math.floor(Math.floor(I/W)/w)}function De(I,w,W,ue){let ge=I.updateRanges;if(ge.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,W,ue,w.data);else{ge.sort((O,Q)=>O.start-Q.start);let Me=0;for(let O=1;O<ge.length;O++){let Q=ge[Me],j=ge[O],ye=Q.start+Q.count,fe=pe(j.start,w.width,4),ve=pe(Q.start,w.width,4);j.start<=ye+1&&fe===ve&&pe(j.start+j.count-1,w.width,4)===fe?Q.count=Math.max(Q.count,j.start+j.count-Q.start):(++Me,ge[Me]=j)}ge.length=Me+1;let q=t.getParameter(r.UNPACK_ROW_LENGTH),te=t.getParameter(r.UNPACK_SKIP_PIXELS),me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let O=0,Q=ge.length;O<Q;O++){let j=ge[O],ye=Math.floor(j.start/4),fe=Math.ceil(j.count/4),ve=ye%w.width,he=Math.floor(ye/w.width),Se=fe,se=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(r.UNPACK_SKIP_ROWS,he),t.texSubImage2D(r.TEXTURE_2D,0,ve,he,Se,se,W,ue,w.data)}I.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,q),t.pixelStorei(r.UNPACK_SKIP_PIXELS,te),t.pixelStorei(r.UNPACK_SKIP_ROWS,me)}}function Fe(I,w,W){let ue=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=r.TEXTURE_3D);let re=ee(I,w),ge=w.source;t.bindTexture(ue,I.__webglTexture,r.TEXTURE0+W);let Me=n.get(ge);if(ge.version!==Me.__version||re===!0){if(t.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let se=st.getPrimaries(st.workingColorSpace),ne=w.colorSpace===os?null:st.getPrimaries(w.colorSpace),we=w.colorSpace===os||se===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let te=y(w.image,!1,i.maxTextureSize);te=ze(w,te);let me=s.convert(w.format,w.colorSpace),O=s.convert(w.type),Q=T(w.internalFormat,me,O,w.normalized,w.colorSpace,w.isVideoTexture);Re(ue,w);let j,ye=w.mipmaps,fe=w.isVideoTexture!==!0,ve=Me.__version===void 0||re===!0,he=ge.dataReady,Se=S(w,te);if(w.isDepthTexture)Q=x(w.format===ss,w.type),ve&&(fe?t.texStorage2D(r.TEXTURE_2D,1,Q,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,Q,te.width,te.height,0,me,O,null));else if(w.isDataTexture)if(ye.length>0){fe&&ve&&t.texStorage2D(r.TEXTURE_2D,Se,Q,ye[0].width,ye[0].height);for(let se=0,ne=ye.length;se<ne;se++)j=ye[se],fe?he&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,j.width,j.height,me,O,j.data):t.texImage2D(r.TEXTURE_2D,se,Q,j.width,j.height,0,me,O,j.data);w.generateMipmaps=!1}else fe?(ve&&t.texStorage2D(r.TEXTURE_2D,Se,Q,te.width,te.height),he&&De(w,te,me,O)):t.texImage2D(r.TEXTURE_2D,0,Q,te.width,te.height,0,me,O,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){fe&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Q,ye[0].width,ye[0].height,te.depth);for(let se=0,ne=ye.length;se<ne;se++)if(j=ye[se],w.format!==Ji)if(me!==null)if(fe){if(he)if(w.layerUpdates.size>0){let we=sm(j.width,j.height,w.format,w.type);for(let ie of w.layerUpdates){let Ie=j.data.subarray(ie*we/j.data.BYTES_PER_ELEMENT,(ie+1)*we/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,ie,j.width,j.height,1,me,Ie)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,j.width,j.height,te.depth,me,j.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,Q,j.width,j.height,te.depth,0,j.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?he&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,j.width,j.height,te.depth,me,O,j.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,Q,j.width,j.height,te.depth,0,me,O,j.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{fe&&ve&&t.texStorage2D(r.TEXTURE_2D,Se,Q,ye[0].width,ye[0].height);for(let se=0,ne=ye.length;se<ne;se++)j=ye[se],w.format!==Ji?me!==null?fe?he&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,j.width,j.height,me,j.data):t.compressedTexImage2D(r.TEXTURE_2D,se,Q,j.width,j.height,0,j.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?he&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,j.width,j.height,me,O,j.data):t.texImage2D(r.TEXTURE_2D,se,Q,j.width,j.height,0,me,O,j.data)}else if(w.isDataArrayTexture)if(fe){if(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Q,te.width,te.height,te.depth),he)if(w.layerUpdates.size>0){let se=sm(te.width,te.height,w.format,w.type);for(let ne of w.layerUpdates){let we=te.data.subarray(ne*se/te.data.BYTES_PER_ELEMENT,(ne+1)*se/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,te.width,te.height,1,me,O,we)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,O,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,te.width,te.height,te.depth,0,me,O,te.data);else if(w.isData3DTexture)fe?(ve&&t.texStorage3D(r.TEXTURE_3D,Se,Q,te.width,te.height,te.depth),he&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,O,te.data)):t.texImage3D(r.TEXTURE_3D,0,Q,te.width,te.height,te.depth,0,me,O,te.data);else if(w.isFramebufferTexture){if(ve)if(fe)t.texStorage2D(r.TEXTURE_2D,Se,Q,te.width,te.height);else{let se=te.width,ne=te.height;for(let we=0;we<Se;we++)t.texImage2D(r.TEXTURE_2D,we,Q,se,ne,0,me,O,null),se>>=1,ne>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){let se=r.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),te.parentNode!==se){se.appendChild(te),h.add(w),se.onpaint=ne=>{let we=ne.changedElements;for(let ie of h)we.includes(ie.image)&&(ie.needsUpdate=!0)},se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,te);else{let we=r.RGBA,ie=r.RGBA,Ie=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,we,ie,Ie,te)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ye.length>0){if(fe&&ve){let se=We(ye[0]);t.texStorage2D(r.TEXTURE_2D,Se,Q,se.width,se.height)}for(let se=0,ne=ye.length;se<ne;se++)j=ye[se],fe?he&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,me,O,j):t.texImage2D(r.TEXTURE_2D,se,Q,me,O,j);w.generateMipmaps=!1}else if(fe){if(ve){let se=We(te);t.texStorage2D(r.TEXTURE_2D,Se,Q,se.width,se.height)}he&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,O,te)}else t.texImage2D(r.TEXTURE_2D,0,Q,me,O,te);M(w)&&w.mipmapsAutoUpdate===!0&&v(ue),Me.__version=ge.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Y(I,w,W){if(w.image.length!==6)return;let ue=ee(I,w),re=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+W);let ge=n.get(re);if(re.version!==ge.__version||ue===!0){t.activeTexture(r.TEXTURE0+W);let Me=st.getPrimaries(st.workingColorSpace),q=w.colorSpace===os?null:st.getPrimaries(w.colorSpace),te=w.colorSpace===os||Me===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let me=w.isCompressedTexture||w.image[0].isCompressedTexture,O=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!me&&!O?Q[ie]=y(w.image[ie],!0,i.maxCubemapSize):Q[ie]=O?w.image[ie].image:w.image[ie],Q[ie]=ze(w,Q[ie]);let j=Q[0],ye=s.convert(w.format,w.colorSpace),fe=s.convert(w.type),ve=T(w.internalFormat,ye,fe,w.normalized,w.colorSpace),he=w.isVideoTexture!==!0,Se=ge.__version===void 0||ue===!0,se=re.dataReady,ne=S(w,j);Re(r.TEXTURE_CUBE_MAP,w);let we;if(w.isDepthTexture){if(ve=x(w.format===ss,w.type),Se)if(he)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,ve,j.width,j.height);else for(let ie=0;ie<6;ie++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ve,j.width,j.height,0,ye,fe,null)}else if(me){he&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,ve,j.width,j.height);for(let ie=0;ie<6;ie++){we=Q[ie].mipmaps;for(let Ie=0;Ie<we.length;Ie++){let lt=we[Ie];w.format!==Ji?ye!==null?he?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,lt.width,lt.height,ye,lt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,ve,lt.width,lt.height,0,lt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,lt.width,lt.height,ye,fe,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,ve,lt.width,lt.height,0,ye,fe,lt.data)}}}else{if(we=w.mipmaps,he&&Se){we.length>0&&ne++;let ie=We(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(O){he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q[ie].width,Q[ie].height,ye,fe,Q[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ve,Q[ie].width,Q[ie].height,0,ye,fe,Q[ie].data);for(let Ie=0;Ie<we.length;Ie++){let $e=we[Ie].image[ie].image;he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,$e.width,$e.height,ye,fe,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,ve,$e.width,$e.height,0,ye,fe,$e.data)}}else{he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ye,fe,Q[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ve,ye,fe,Q[ie]);for(let Ie=0;Ie<we.length;Ie++){let lt=we[Ie];he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,ye,fe,lt.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,ve,ye,fe,lt.image[ie])}}}M(w)&&w.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),ge.__version=re.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Qe(I,w,W,ue,re,ge){let Me=s.convert(W.format,W.colorSpace),q=s.convert(W.type),te=T(W.internalFormat,Me,q,W.normalized,W.colorSpace),me=n.get(w),O=n.get(W);if(O.__renderTarget=w,!me.__hasExternalTextures){let Q=Math.max(1,w.width>>ge),j=Math.max(1,w.height>>ge);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,ge,te,Q,j,w.depth,0,Me,q,null):t.texImage2D(re,ge,te,Q,j,0,Me,q,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),xe(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,re,O.__webglTexture,0,Ye(w)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ue,re,O.__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(I,w,W){if(r.bindRenderbuffer(r.RENDERBUFFER,I),w.depthBuffer){let ue=w.depthTexture,re=ue&&ue.isDepthTexture?ue.type:null,ge=x(w.stencilBuffer,re),Me=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xe(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(w),ge,w.width,w.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(w),ge,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ge,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,I)}else{let ue=w.textures;for(let re=0;re<ue.length;re++){let ge=ue[re],Me=s.convert(ge.format,ge.colorSpace),q=s.convert(ge.type),te=T(ge.internalFormat,Me,q,ge.normalized,ge.colorSpace);xe(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(w),te,w.width,w.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(w),te,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,te,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(I,w,W){let ue=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(w.depthTexture);re.__renderTarget=w;let ge=ue?w.depthTexture.image[0]:w.depthTexture.image;(!re.__webglTexture||ge.width!==w.width||ge.height!==w.height)&&(ge.width=w.width,ge.height=w.height,w.depthTexture.needsUpdate=!0),ue?de(w.depthTexture,0):ce(w.depthTexture,0);let Me=re.__webglTexture,q=Ye(w),te=ue?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,me=w.depthTexture.format===ss?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===Zr)xe(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,te,Me,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,me,te,Me,0);else if(w.depthTexture.format===ss)xe(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,te,Me,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,me,te,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(I){let w=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let ue=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){let re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",re)};ue.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=ue}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let ue=0;ue<6;ue++)pt(w.__webglFramebuffer[ue],I,ue);else I.texture.mipmaps.length>0?pt(w.__webglFramebuffer[0],I,0):pt(w.__webglFramebuffer,I,0);else if(W){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=r.createRenderbuffer(),Bt(w.__webglDepthbuffer[ue],I,!1);else{let re=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer[ue];r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,ge)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Bt(w.__webglDepthbuffer,I,!1);else{let re=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,ge)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(I,w,W){let ue=n.get(I);w!==void 0&&Qe(ue.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Je(I)}function rn(I){let w=I.texture,W=n.get(I),ue=n.get(w);I.addEventListener("dispose",L),R(I);let re=I.textures,ge=I.isWebGLCubeRenderTarget===!0,Me=re.length>1;if(Me||(ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture()),ue.__version=w.version,o.memory.textures++),ge){W.__webglFramebuffer=[];for(let q=0;q<6;q++)if(w.mipmaps.length>0){W.__webglFramebuffer[q]=[];for(let te=0;te<w.mipmaps.length;te++)W.__webglFramebuffer[q][te]=r.createFramebuffer()}else W.__webglFramebuffer[q]=r.createFramebuffer()}else{if(w.mipmaps.length>0){W.__webglFramebuffer=[];for(let q=0;q<w.mipmaps.length;q++)W.__webglFramebuffer[q]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Me)for(let q=0,te=re.length;q<te;q++){let me=n.get(re[q]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&xe(I)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let q=0;q<re.length;q++){let te=re[q];W.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let me=s.convert(te.format,te.colorSpace),O=s.convert(te.type),Q=T(te.internalFormat,me,O,te.normalized,te.colorSpace,I.isXRRenderTarget===!0),j=Ye(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,Q,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,W.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture),Re(r.TEXTURE_CUBE_MAP,w);for(let q=0;q<6;q++)if(w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)Qe(W.__webglFramebuffer[q][te],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,te);else Qe(W.__webglFramebuffer[q],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);M(w)?v(r.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let q=0,te=re.length;q<te;q++){let me=re[q],O=n.get(me),Q=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,O.__webglTexture),Re(Q,me),Qe(W.__webglFramebuffer,I,me,r.COLOR_ATTACHMENT0+q,Q,0),M(me)&&v(Q)}t.unbindTexture()}else{let q=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(q=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(q,ue.__webglTexture),Re(q,w),w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)Qe(W.__webglFramebuffer[te],I,w,r.COLOR_ATTACHMENT0,q,te);else Qe(W.__webglFramebuffer,I,w,r.COLOR_ATTACHMENT0,q,0);M(w)?v(q):w.mipmaps.length>0&&r.texParameteri(q,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Je(I)}function H(I){let w=I.textures;for(let W=0,ue=w.length;W<ue;W++){let re=w[W];if(M(re)&&re.mipmapsAutoUpdate===!0){let ge=b(I),Me=n.get(re).__webglTexture;t.bindTexture(ge,Me),v(ge),t.unbindTexture()}}}let _t=[];function ft(I){if(I.samples>0){if(xe(I)===!1){let w=I.textures,W=I.width,ue=I.height,re=r.COLOR_BUFFER_BIT,ge=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(I),q=w.length>1;if(q)for(let me=0;me<w.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let me=0;me<w.length;me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);let O=n.get(w[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,O,0)}r.blitFramebuffer(0,0,W,ue,0,0,W,ue,re,r.NEAREST),l===!0&&(_t.length=0,_t.push(r.COLOR_ATTACHMENT0+me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&_t.push(ge),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let me=0;me<w.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);let O=n.get(w[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,O,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let w=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ye(I){return Math.min(i.maxSamples,I.samples)}function xe(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function mt(I){let w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function ze(I,w){let W=I.colorSpace,ue=I.format,re=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Dn&&W!==os&&(st.getTransfer(W)===Mt?(ue!==Ji||re!==bi)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",W)),w}function We(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=be,this.resetTextureUnits=P,this.getTextureUnits=J,this.setTextureUnits=le,this.setTexture2D=ce,this.setTexture2DArray=_e,this.setTexture3D=Te,this.setTextureCube=de,this.rebindTextures=Lt,this.setupRenderTarget=rn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=xe,this.dispose=B}function IE(r,e){function t(n,i=os){let s,o=st.getTransfer(i);if(n===bi)return r.UNSIGNED_BYTE;if(n===Ch)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ph)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===zp)return r.BYTE;if(n===Hp)return r.SHORT;if(n===Va)return r.UNSIGNED_SHORT;if(n===Rh)return r.INT;if(n===ur)return r.UNSIGNED_INT;if(n===Jn)return r.FLOAT;if(n===ui)return r.HALF_FLOAT;if(n===Wp)return r.ALPHA;if(n===Xp)return r.RGB;if(n===Ji)return r.RGBA;if(n===Zr)return r.DEPTH_COMPONENT;if(n===ss)return r.DEPTH_STENCIL;if(n===Ih)return r.RED;if(n===Lh)return r.RED_INTEGER;if(n===Fs)return r.RG;if(n===Dh)return r.RG_INTEGER;if(n===Nh)return r.RGBA_INTEGER;if(n===mc||n===gc||n===_c||n===xc)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oh||n===Uh||n===Fh||n===Bh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kh||n===zh||n===Hh||n===Gh||n===Vh||n===yc||n===Wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===kh||n===zh)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gh)return s.COMPRESSED_R11_EAC;if(n===Vh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yc)return s.COMPRESSED_RG11_EAC;if(n===Wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xh||n===qh||n===Yh||n===Kh||n===Zh||n===Jh||n===$h||n===jh||n===Qh||n===ef||n===tf||n===nf||n===rf||n===sf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$h)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ef)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===of||n===af||n===lf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===of)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===af)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cf||n===uf||n===vc||n===hf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===cf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Do?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var LE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new nc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Si({vertexShader:LE,fragmentShader:DE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mm=class extends vr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new pm,g={},y=t.getContextAttributes(),M=null,v=null,b=[],T=[],x=new et,S=null,R=null,A=new Kt;A.viewport=new yt;let D=new Kt;D.viewport=new yt;let L=[A,D],U=new bh,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ce=b[X];return ce===void 0&&(ce=new Ia,b[X]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(X){let ce=b[X];return ce===void 0&&(ce=new Ia,b[X]=ce),ce.getGripSpace()},this.getHand=function(X){let ce=b[X];return ce===void 0&&(ce=new Ia,b[X]=ce),ce.getHandSpace()};function k(X){let ce=T.indexOf(X.inputSource);if(ce===-1)return;let _e=b[ce];_e!==void 0&&(_e.update(X.inputSource,X.frame,c||o),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",Z);for(let X=0;X<b.length;X++){let ce=T[X];ce!==null&&(T[X]=null,b[X].disconnect(ce))}C=null,B=null,m.reset();for(let X in g)delete g[X];if(e.setRenderTarget(M),d=null,f=null,h=null,i=null,v=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),R!==null){let X=R.camera;X.fov=R.fov,X.zoom=R.zoom,X.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",N),i.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Te=null,de=null;y.depth&&(de=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?ss:Zr,Te=y.stencil?Do:ur);let ae={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ae),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Oi(f.textureWidth,f.textureHeight,{format:Ji,type:bi,depthTexture:new jr(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Oi(d.framebufferWidth,d.framebufferHeight,{format:Ji,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(X){for(let ce=0;ce<X.removed.length;ce++){let _e=X.removed[ce],Te=T.indexOf(_e);Te>=0&&(T[Te]=null,b[Te].disconnect(_e))}for(let ce=0;ce<X.added.length;ce++){let _e=X.added[ce],Te=T.indexOf(_e);if(Te===-1){for(let ae=0;ae<b.length;ae++)if(ae>=T.length){T.push(_e),Te=ae;break}else if(T[ae]===null){T[ae]=_e,Te=ae;break}if(Te===-1)break}let de=b[Te];de&&de.connect(_e)}}function G(X,ce){ce===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ce.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ce=X.near,_e=X.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),U.near=D.near=A.near=ce,U.far=D.far=A.far=_e,(C!==U.near||B!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,B=U.far),U.layers.mask=X.layers.mask|6,A.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let Te=X.parent,de=U.cameras;G(U,Te);for(let ae=0;ae<de.length;ae++)G(de[ae],Te);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&X.isPerspectiveCamera&&(R={camera:X,fov:X.fov,zoom:X.zoom}),P(X,U,Te)};function P(X,ce,_e){_e===null?X.matrix.copy(ce.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(ce.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=xo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(X){return g[X]};let J=null;function le(X,ce){if(u=ce.getViewerPose(c||o),p=ce,u!==null){let _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Te=!1;_e.length!==U.cameras.length&&(U.cameras.length=0,Te=!0);for(let oe=0;oe<_e.length;oe++){let Re=_e[oe],ee=null;if(d!==null)ee=d.getViewport(Re);else{let De=h.getViewSubImage(f,Re);ee=De.viewport,oe===0&&(e.setRenderTargetTextures(v,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(v))}let pe=L[oe];pe===void 0&&(pe=new Kt,pe.layers.enable(oe),pe.viewport=new yt,L[oe]=pe),pe.matrix.fromArray(Re.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Re.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ee.x,ee.y,ee.width,ee.height),oe===0&&(U.matrix.copy(pe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Te===!0&&U.cameras.push(pe)}let de=i.enabledFeatures;if(de&&de.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let oe=h.getDepthInformation(_e[0]);oe&&oe.isValid&&oe.texture&&m.init(oe,i.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let oe=0;oe<_e.length;oe++){let Re=_e[oe].camera;if(Re){let ee=g[Re];ee||(ee=new nc,g[Re]=ee);let pe=h.getCameraImage(Re);ee.sourceTexture=pe}}}}for(let _e=0;_e<b.length;_e++){let Te=T[_e],de=b[_e];Te!==null&&de!==void 0&&de.update(Te,ce,c||o)}J&&J(X,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),p=null}let be=new Zx;be.setAnimationLoop(le),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}},NE=new qe,sy=new Ke;sy.set(-1,0,0,0,1,0,0,0,1);function OE(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,nm(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===On&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===On&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(NE.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sy),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function UE(r,e,t,n){let i={},s={};function o(y,M){let v=M.program;n.uniformBlockBinding(y,v,i[y.id])}function a(y,M){let v=i[y.id];v===void 0&&(p(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(y,b);let T=e.render.frame;s[y.id]!==T&&(c(y),s[y.id]=T)}function l(y){let M=r.createBuffer(),v=y.__size,b=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,v,b),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function c(y){let M=i[y.id],v=y.uniforms,b=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let T=0,x=v.length;T<x;T++){let S=v[T];if(Array.isArray(S))for(let R=0,A=S.length;R<A;R++)u(S[R],T,R,b);else u(S,T,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,M,v,b){if(f(y,M,v,b)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let R=0;R<x.length;R++){let A=x[R],D=_(A,!0);h(A,y.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,y.__data)}}function h(y,M,v){typeof y=="number"||typeof y=="boolean"?M[v]=y:y.isMatrix3?(M[v]=y.elements[0],M[v+1]=y.elements[1],M[v+2]=y.elements[2],M[v+3]=0,M[v+4]=y.elements[3],M[v+5]=y.elements[4],M[v+6]=y.elements[5],M[v+7]=0,M[v+8]=y.elements[6],M[v+9]=y.elements[7],M[v+10]=y.elements[8],M[v+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-v),v):y.toArray(M,v)}function f(y,M,v,b){let T=y.value,x=M+"_"+v;if(Array.isArray(T)){b[x]===void 0&&(b[x]=[]);let S=b[x],R=!1;for(let A=0;A<T.length;A++)d(T[A],S,A)===!0&&(R=!0);return R}return d(T,b,x)}function d(y,M,v){if(M[v]===void 0)return typeof y=="number"||typeof y=="boolean"?M[v]=y:ArrayBuffer.isView(y)?M[v]=y.slice():M[v]=y.clone(),!0;{let b=M[v];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return M[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function p(y){let M=y.uniforms,v=0,b=16;for(let x=0,S=M.length;x<S;x++){let R=Array.isArray(M[x])?M[x]:[M[x]];for(let A=0,D=R.length;A<D;A++){let L=R[A],U=Array.isArray(L.value)?L.value:[L.value],C=Array.isArray(M[x])||Array.isArray(L.value),B=v;for(let N=0,Z=U.length;N<Z;N++){let G=U[N],P=_(G,C),J=v%b,le=J%P.boundary,be=J+le;v+=le,be!==0&&b-be<P.storage&&(v+=b-be),N===0&&(B=v),v+=P.storage}let k=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new k((v-B)/Float32Array.BYTES_PER_ELEMENT),L.__offset=B}}let T=v%b;return T>0&&(v+=b-T),y.__size=v,y.__cache={},this}function _(y,M){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let M=y.target;M.removeEventListener("dispose",m),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(let y in i)r.deleteBuffer(i[y]);i={},s={}}return{bind:o,update:a,dispose:g}}var FE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wr=null;function BE(){return wr===null&&(wr=new Ls(FE,16,16,Fs,ui),wr.name="DFG_LUT",wr.minFilter=Ut,wr.magFilter=Ut,wr.wrapS=xi,wr.wrapT=xi,wr.generateMipmaps=!1,wr.needsUpdate=!0),wr}var qa=class{constructor(e={}){let{canvas:t=vx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([Nh,Dh,Lh]),g=new Set([bi,ur,Va,Do,Ch,Ph]),y=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,T=null,x=[],S=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,L=null,U=null,C=null,B=null;this._outputColorSpace=Ot;let k=0,N=0,Z=null,G=-1,P=null,J=new yt,le=new yt,be=null,X=new Ve(0),ce=0,_e=t.width,Te=t.height,de=1,ae=null,Ne=null,oe=new yt(0,0,_e,Te),Re=new yt(0,0,_e,Te),ee=!1,pe=new Ds,De=new uh,Fe=!1,Y=!1,Qe=new qe,Bt=new z,pt=new yt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function rn(){return Z===null?de:1}let H=n;function _t(E,F){return t.getContext(E,F)}let ft,Ye,xe,mt,ze,We,I,w,W,ue,re,ge,Me,q,te,me,O,Q,j,ye,fe,ve,he;try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ie,!1),H===null){let F="webgl2";if(H=_t(F,E),H===null)throw _t(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Se()}catch(E){throw t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Xe("WebGLRenderer: "+E.message),E}function Se(){ft=new Z1(H),ft.init(),fe=new IE(H,ft),Ye=new B1(H,ft,e,fe),xe=new CE(H,ft),Ye.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),U=H.createFramebuffer(),C=H.createFramebuffer(),B=H.createFramebuffer(),mt=new j1(H),ze=new mE,We=new PE(H,ft,xe,ze,Ye,fe,mt),I=new K1(A),w=new eb(H),ve=new U1(H,w),W=new J1(H,w,mt,ve),ue=new ew(H,W,w,ve,mt),Q=new Q1(H,Ye,We),te=new k1(ze),re=new pE(A,I,ft,Ye,ve,te),ge=new OE(A,ze),Me=new _E,q=new bE(ft),O=new O1(A,I,xe,ue,p,l),me=new RE(A,ue,Ye),he=new UE(H,mt,Ye,xe),j=new F1(H,ft,mt),ye=new $1(H,ft,mt),mt.programs=re.programs,A.capabilities=Ye,A.extensions=ft,A.properties=ze,A.renderLists=Me,A.shadowMap=me,A.state=xe,A.info=mt}_!==bi&&(R=new nw(_,t.width,t.height,a,i,s));let se=new mm(A,H);this.xr=se,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(_e,Te,!1))},this.getSize=function(E){return E.set(_e,Te)},this.setSize=function(E,F,$=!0){if(se.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=E,Te=F,t.width=Math.floor(E*de),t.height=Math.floor(F*de),$===!0&&(t.style.width=E+"px",t.style.height=F+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(_e*de,Te*de).floor()},this.setDrawingBufferSize=function(E,F,$){_e=E,Te=F,de=$,t.width=Math.floor(E*$),t.height=Math.floor(F*$),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(_===bi){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,F,$,V){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,F,$,V),xe.viewport(J.copy(oe).multiplyScalar(rn()).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,F,$,V){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,F,$,V),xe.scissor(le.copy(Re).multiplyScalar(rn()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){xe.setScissorTest(ee=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){Ne=E},this.getClearColor=function(E){return E.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,$=!0){let V=0;if(E){let K=!1;if(Z!==null){let Ae=Z.texture.format;K=m.has(Ae)}if(K){let Ae=Z.texture.type,Ue=g.has(Ae),Ee=O.getClearColor(),Le=O.getClearAlpha(),He=Ee.r,je=Ee.g,ct=Ee.b;Ue?(y[0]=He,y[1]=je,y[2]=ct,y[3]=Le,H.clearBufferuiv(H.COLOR,0,y)):(M[0]=He,M[1]=je,M[2]=ct,M[3]=Le,H.clearBufferiv(H.COLOR,0,M))}else V|=H.COLOR_BUFFER_BIT}F&&(V|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),O.dispose(),Me.dispose(),q.dispose(),We.dispose(),ze.dispose(),I.dispose(),ue.dispose(),W.dispose(),ve.dispose(),he.dispose(),re.dispose(),se.dispose(),se.removeEventListener("sessionstart",At),se.removeEventListener("sessionend",vt),mn.stop()};function ne(E){E.preventDefault(),ql("WebGLRenderer: Context Lost."),D=!0}function we(){ql("WebGLRenderer: Context Restored."),D=!1;let E=mt.autoReset,F=me.enabled,$=me.autoUpdate,V=me.needsUpdate,K=me.type;Se(),mt.autoReset=E,me.enabled=F,me.autoUpdate=$,me.needsUpdate=V,me.type=K}function ie(E){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){let F=E.target;F.removeEventListener("dispose",Ie),lt(F)}function lt(E){$e(E),ze.remove(E)}function $e(E){let F=ze.get(E).programs;F!==void 0&&(F.forEach(function($){re.releaseProgram($)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,$,V,K,Ae){F===null&&(F=Je);let Ue=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ee=Bi(E,F,$,V,K);xe.setMaterial(V,Ue);let Le=$.index,He=1;if(V.wireframe===!0){if(Le=W.getWireframeAttribute($),Le===void 0)return;He=2}let je=$.drawRange,ct=$.attributes.position,Be=je.start*He,ut=(je.start+je.count)*He;Ae!==null&&(Be=Math.max(Be,Ae.start*He),ut=Math.min(ut,(Ae.start+Ae.count)*He)),Le!==null?(Be=Math.max(Be,0),ut=Math.min(ut,Le.count)):ct!=null&&(Be=Math.max(Be,0),ut=Math.min(ut,ct.count));let un=ut-Be;if(un<0||un===1/0)return;ve.setup(K,V,Ee,$,Le);let Dt,Ct=j;if(Le!==null&&(Dt=w.get(Le),Ct=ye,Ct.setIndex(Dt)),K.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*rn()),Ct.setMode(H.LINES)):Ct.setMode(H.TRIANGLES);else if(K.isLine){let Bn=V.linewidth;Bn===void 0&&(Bn=1),xe.setLineWidth(Bn*rn()),K.isLineSegments?Ct.setMode(H.LINES):K.isLineLoop?Ct.setMode(H.LINE_LOOP):Ct.setMode(H.LINE_STRIP)}else K.isPoints?Ct.setMode(H.POINTS):K.isSprite&&Ct.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Ct.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Bn=K._multiDrawStarts,ke=K._multiDrawCounts,jn=K._multiDrawCount,xt=Le?w.get(Le).bytesPerElement:1,Vs=ze.get(V).currentProgram.getUniforms();for(let kn=0;kn<jn;kn++)Vs.setValue(H,"_gl_DrawID",kn),Ct.render(Bn[kn]/xt,ke[kn])}else if(K.isInstancedMesh)Ct.renderInstances(Be,un,K.count);else if($.isInstancedBufferGeometry){let Bn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ke=Math.min($.instanceCount,Bn);Ct.renderInstances(Be,un,ke)}else Ct.render(Be,un)};function kt(E,F,$,V){L!==null&&E.isNodeMaterial&&L.setObject(V,E),Fe===!0&&te.setState(E,$,!1),E.transparent===!0&&E.side===Un&&E.forceSinglePass===!1?(E.side=On,E.needsUpdate=!0,wi(E,F,V),E.side=Mr,E.needsUpdate=!0,wi(E,F,V),E.side=Un):wi(E,F,V)}this.compile=function(E,F,$=null){$===null&&($=E),L!==null&&L.renderStart(E,F,$),T=q.get($),T.init(F),S.push(T),$.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),E!==$&&E.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),Y=this.localClippingEnabled,Fe=te.init(this.clippingPlanes,Y),Fe===!0&&te.setGlobalState(this.clippingPlanes,F),L!==null&&me.render(T.state.shadowsArray,$,F);let V=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){let Ee=Ae[Ue];kt(Ee,$,F,K),V.add(Ee)}else kt(Ae,$,F,K),V.add(Ae)}),T=S.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(E,F,$=null){let V=this.compile(E,F,$);return new Promise(K=>{function Ae(){if(V.forEach(function(Ue){let Le=ze.get(Ue).currentProgram;(Le===void 0||Le.isReady())&&V.delete(Ue)}),V.size===0){K(E);return}setTimeout(Ae,10)}ft.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let ln=null;function zt(E){ln&&ln(E)}function At(){mn.stop()}function vt(){mn.start()}let mn=new Zx;mn.setAnimationLoop(zt),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(E){ln=E,se.setAnimationLoop(E),E===null?mn.stop():mn.start()},se.addEventListener("sessionstart",At),se.addEventListener("sessionend",vt),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,F);let $=se.enabled===!0&&se.isPresenting===!0,V=R!==null&&(Z===null||$)&&R.begin(A,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,F,Z),T=q.get(E,S.length),T.init(F),T.state.textureUnits=We.getTextureUnits(),S.push(T),Qe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?De.setFromArrayCamera(F):pe.setFromProjectionMatrix(Qe,qi,F.reversedDepth),Y=this.localClippingEnabled,Fe=te.init(this.clippingPlanes,Y),b=Me.get(E,x.length),b.init(),x.push(b),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Ue=A.xr.getDepthSensingMesh();Ue!==null&&Rt(Ue,F,-1/0,A.sortObjects)}Rt(E,F,0,A.sortObjects),b.finish(),L!==null&&L.updateLights(T.state.lightsArray),A.sortObjects===!0&&b.sort(ae,Ne),Lt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Lt&&O.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),Fe===!0&&te.beginShadows();let K=T.state.shadowsArray;if(me.render(K,E,F),Fe===!0&&te.endShadows(),(V&&R.hasRenderPass())===!1){let Ue=b.opaque,Ee=b.transmissive;if(T.setupLights(),F.isArrayCamera){let Le=F.cameras;if(Ee.length>0)for(let He=0,je=Le.length;He<je;He++){let ct=Le[He];Ti(Ue,Ee,E,ct)}Lt&&O.render(E);for(let He=0,je=Le.length;He<je;He++){let ct=Le[He];Fn(b,E,ct,ct.viewport)}}else Ee.length>0&&Ti(Ue,Ee,E,F),Lt&&O.render(E),Fn(b,E,F)}Z!==null&&N===0&&(We.updateMultisampleRenderTarget(Z),We.updateRenderTargetMipmap(Z)),V&&R.end(A),E.isScene===!0&&E.onAfterRender(A,E,F),ve.resetDefaultState(),G=-1,P=null,S.pop(),S.length>0?(T=S[S.length-1],We.setTextureUnits(T.state.textureUnits),Fe===!0&&te.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,L!==null&&L.renderEnd()};function Rt(E,F,$,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Ue=F.isArrayCamera?De:pe;if(!E.frustumCulled||E.intersectsFrustum(Ue)){V&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Qe);let Ee=ue.update(E),Le=E.material;Le.visible&&b.push(E,Ee,Le,$,pt.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Ue=F.isArrayCamera?De:pe;if(!E.frustumCulled||E.intersectsFrustum(Ue)){let Ee=ue.update(E),Le=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),pt.copy(Ee.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(Qe)),Array.isArray(Le)){let He=Ee.groups;for(let je=0,ct=He.length;je<ct;je++){let Be=He[je],ut=Le[Be.materialIndex];ut&&ut.visible&&b.push(E,Ee,ut,$,pt.z,Be,F)}}else Le.visible&&b.push(E,Ee,Le,$,pt.z,null,F)}}}let Ae=E.children;for(let Ue=0,Ee=Ae.length;Ue<Ee;Ue++)Rt(Ae[Ue],F,$,V)}function Fn(E,F,$,V){let{opaque:K,transmissive:Ae,transparent:Ue}=E;T.setupLightsView($),Fe===!0&&te.setGlobalState(A.clippingPlanes,$),V&&xe.viewport(J.copy(V)),K.length>0&&$t(K,F,$),Ae.length>0&&$t(Ae,F,$),Ue.length>0&&$t(Ue,F,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ti(E,F,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Be=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Oi(1,1,{generateMipmaps:!0,type:Be?ui:bi,minFilter:Fi,samples:Math.max(4,Ye.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Ae=T.state.transmissionRenderTarget[V.id],Ue=V.viewport||J;Ae.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);let Ee=A.getRenderTarget(),Le=A.getActiveCubeFace(),He=A.getActiveMipmapLevel();A.setRenderTarget(Ae),A.getClearColor(X),ce=A.getClearAlpha(),ce<1&&A.setClearColor(16777215,.5),A.clear(),Lt&&O.render($);let je=A.toneMapping;A.toneMapping=br;let ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Fe===!0&&te.setGlobalState(A.clippingPlanes,V),$t(E,$,V),We.updateMultisampleRenderTarget(Ae),We.updateRenderTargetMipmap(Ae),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let ut=0,un=F.length;ut<un;ut++){let Dt=F[ut],{object:Ct,geometry:Bn,material:ke,group:jn}=Dt;if(ke.side===Un&&Ct.layers.test(V.layers)){let xt=ke.side;ke.side=On,ke.needsUpdate=!0,cn(Ct,$,V,Bn,ke,jn),ke.side=xt,ke.needsUpdate=!0,Be=!0}}Be===!0&&(We.updateMultisampleRenderTarget(Ae),We.updateRenderTargetMipmap(Ae))}A.setRenderTarget(Ee,Le,He),A.setClearColor(X,ce),ct!==void 0&&(V.viewport=ct),A.toneMapping=je}function $t(E,F,$){let V=F.isScene===!0?F.overrideMaterial:null;for(let K=0,Ae=E.length;K<Ae;K++){let Ue=E[K],{object:Ee,geometry:Le,group:He}=Ue,je=Ue.material;je.allowOverride===!0&&V!==null&&(je=V),Ee.layers.test($.layers)&&cn(Ee,F,$,Le,je,He)}}function cn(E,F,$,V,K,Ae){L!==null&&K.isNodeMaterial&&L.setObject(E,K),E.onBeforeRender(A,F,$,V,K,Ae),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(A,F,$,V,E,Ae),K.transparent===!0&&K.side===Un&&K.forceSinglePass===!1?(K.side=On,K.needsUpdate=!0,A.renderBufferDirect($,F,V,K,E,Ae),K.side=Mr,K.needsUpdate=!0,A.renderBufferDirect($,F,V,K,E,Ae),K.side=Un):A.renderBufferDirect($,F,V,K,E,Ae),E.onAfterRender(A,F,$,V,K,Ae)}function gn(E){let F=0;for(let $ of E)$.texture!==null&&F++;return F}function wi(E,F,$){F.isScene!==!0&&(F=Je);let V=ze.get(E),K=T.state.lights,Ae=T.state.shadowsArray,Ue=K.state.version,Ee=re.getParameters(E,K.state,Ae,F,$,T.state.lightProbeGridArray),Le=re.getProgramCacheKey(Ee),He=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=I.get(E.envMap||V.environment,je),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",Ie),He=new Map,V.programs=He,V.programVariants=new Map);let ct=He.get(Le);if(ct!==void 0){if(V.currentProgram===ct&&V.lightsStateVersion===Ue)return jt(E,Ee),ct}else Ee.uniforms=re.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,$,Ee),E.onBeforeCompile(Ee,A),ct=re.acquireProgram(Ee,Le),He.set(Le,ct),V.uniforms=Ee.uniforms;let Be=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=te.uniform),jt(E,Ee),V.needsLights=Dc(E),V.lightsStateVersion=Ue,V.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.sunLights.value=K.state.sun,Be.sunLightShadows.value=K.state.sunShadow,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.sunShadowMatrix.value=K.state.sunShadowMatrix,Be.sunShadowCascade.value=K.state.sunShadowCascade,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotLightMatrix.value=K.state.spotLightMatrix,Be.spotLightMap.value=K.state.spotLightMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix),V.numLightProbeGrids=gn(T.state.lightProbeGridArray),V.currentProgram=ct,V.uniformsList=null,ct}function Ho(E,F,$,V,K){let Ae=ze.get(E),Ue=Ae.currentProgram.id+","+V+","+K,Ee=Ae.programVariants.get(Ue);return Ee===void 0?(Ee=wi(E,F,$),Ae.programVariants.set(Ue,Ee)):(Ae.currentProgram=Ee,Ae.uniformsList=null,Ae.outputColorSpace=V,Ae.toneMapping=K),Ee}function _n(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Xa.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function jt(E,F){let $=ze.get(E);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Bi(E,F,$,V,K){F.isScene!==!0&&(F=Je),We.resetTextureUnits();let Ae=F.fog,Ue=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,Ee=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:st.workingColorSpace,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,He=I.get(V.envMap||Ue,Le),je=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ct=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,un=!!$.morphAttributes.color,Dt=br;V.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Dt=A.toneMapping);let Ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Bn=Ct!==void 0?Ct.length:0,ke=ze.get(V),jn=T.state.lights;if(Fe===!0&&(Y===!0||E!==P)){let Vt=E===P&&V.id===G;te.setState(V,E,Vt)}let xt=!1,Vs=!1;V.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==jn.state.version||K.isBatchedMesh&&ke.batching===!1||!K.isBatchedMesh&&ke.batching===!0||K.isBatchedMesh&&ke.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&ke.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||K.isInstancedMesh&&ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ke.instancingMorph===!1&&K.morphTexture!==null||ke.envMap!==He||V.fog===!0&&ke.fog!==Ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==te.numPlanes||ke.numIntersection!==te.numIntersection)||ke.vertexAlphas!==je||ke.vertexTangents!==ct||ke.morphTargets!==Be||ke.morphNormals!==ut||ke.morphColors!==un||ke.morphTargetsCount!==Bn||ke.numLightProbeGrids!==gn(T.state.lightProbeGridArray)?xt=!0:(ke.outputColorSpace!==Ee||ke.toneMapping!==Dt)&&(Vs=!0):(xt=!0,ke.__version=V.version);let kn=ke.currentProgram;(xt===!0||Vs===!0)&&(kn=Vs===!0?Ho(V,F,K,Ee,Dt):wi(V,F,K),L&&V.isNodeMaterial&&L.onUpdateProgram(V,kn,ke));let Nc=!1,hs=!1,Ws=!1,dt=kn.getUniforms(),Rn=ke.uniforms;if(xe.useProgram(kn.program)&&(Nc=!0,hs=!0,Ws=!0),V.id!==G&&(G=V.id,hs=!0),Nc||P!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),dt.setValue(H,"projectionMatrix",E.projectionMatrix),dt.setValue(H,"viewMatrix",E.matrixWorldInverse);let Tn=dt.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,Bt.setFromMatrixPosition(E.matrixWorld)),Ye.logarithmicDepthBuffer&&dt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,hs=!0,Ws=!0)}if(ke.needsLights&&(jn.state.sunShadowMap.length>0&&dt.setValue(H,"sunShadowMap",jn.state.sunShadowMap,We),jn.state.directionalShadowMap.length>0&&dt.setValue(H,"directionalShadowMap",jn.state.directionalShadowMap,We),jn.state.spotShadowMap.length>0&&dt.setValue(H,"spotShadowMap",jn.state.spotShadowMap,We),jn.state.pointShadowMap.length>0&&dt.setValue(H,"pointShadowMap",jn.state.pointShadowMap,We)),K.isSkinnedMesh){dt.setOptional(H,K,"bindMatrix"),dt.setOptional(H,K,"bindMatrixInverse");let Vt=K.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),dt.setValue(H,"boneTexture",Vt.boneTexture,We))}K.isBatchedMesh&&(dt.setOptional(H,K,"batchingTexture"),dt.setValue(H,"batchingTexture",K._matricesTexture,We),dt.setOptional(H,K,"batchingIdTexture"),dt.setValue(H,"batchingIdTexture",K._indirectTexture,We),dt.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&dt.setValue(H,"batchingColorTexture",K._colorsTexture,We));let tr=$.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&Q.update(K,$,kn),(hs||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,dt.setValue(H,"receiveShadow",K.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Rn.envMapIntensity.value=F.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=BE()),hs){if(dt.setValue(H,"toneMappingExposure",A.toneMappingExposure),ke.needsLights&&nl(Rn,Ws),Ae&&V.fog===!0&&ge.refreshFogUniforms(Rn,Ae),ge.refreshMaterialUniforms(Rn,V,de,Te,T.state.transmissionRenderTarget[E.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Vt=v,Tn=0;for(let Cr of T.state.lightProbeGridArray)Cr.texture!==null&&(Vt.textures[Tn]=Cr.texture,Vt.min[Tn]=Cr.boundingBox.min,Vt.max[Tn]=Cr.boundingBox.max,Vt.resolution[Tn]=Cr.resolution,Tn++);for(let Cr in Vt)Vt[Cr].length=Tn;Rn.probesSH.value=Vt.textures,Rn.probesMin.value=Vt.min,Rn.probesMax.value=Vt.max,Rn.probesResolution.value=Vt.resolution}Xa.upload(H,_n(ke),Rn,We)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xa.upload(H,_n(ke),Rn,We),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(H,"center",K.center),dt.setValue(H,"modelViewMatrix",K.modelViewMatrix),dt.setValue(H,"normalMatrix",K.normalMatrix),dt.setValue(H,"modelMatrix",K.matrixWorld),V.uniformsGroups!==void 0){let Vt=V.uniformsGroups;for(let Tn=0,Cr=Vt.length;Tn<Cr;Tn++){let sg=Vt[Tn];he.update(sg,kn),he.bind(sg,kn)}}return kn}function nl(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Dc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,F,$){let V=ze.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ze.get(E.texture).__webglTexture=F,ze.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let $=ze.get(E);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,$=0){Z=E,k=F,N=$;let V=null,K=!1,Ae=!1;if(E){let Ee=ze.get(E);if(Ee.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(H.FRAMEBUFFER,Ee.__webglFramebuffer),J.copy(E.viewport),le.copy(E.scissor),be=E.scissorTest,xe.viewport(J),xe.scissor(le),xe.setScissorTest(be),G=-1;return}else if(Ee.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(Ee.__hasExternalTextures)We.rebindTextures(E,ze.get(E.texture).__webglTexture,ze.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let je=E.depthTexture;if(Ee.__boundDepthTexture!==je){if(je!==null&&ze.has(je)&&(E.width!==je.image.width||E.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}let Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ae=!0);let He=ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[F])?V=He[F][$]:V=He[F],K=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?V=ze.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?V=He[$]:V=He,J.copy(E.viewport),le.copy(E.scissor),be=E.scissorTest}else J.copy(oe).multiplyScalar(de).floor(),le.copy(Re).multiplyScalar(de).floor(),be=ee;if($!==0&&(V=U),xe.bindFramebuffer(H.FRAMEBUFFER,V)&&xe.drawBuffers(E,V),xe.viewport(J),xe.scissor(le),xe.setScissorTest(be),K){let Ee=ze.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,$)}else if(Ae){let Ee=F;for(let Le=0;Le<E.textures.length;Le++){let He=ze.get(E.textures[Le]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Le,He.__webglTexture,$,Ee)}}else if(E!==null&&$!==0){let Ee=ze.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ee.__webglTexture,$)}G=-1};function us(E){let F=ze.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Ye.textureFormatReadable(E.format),F.__typeReadable=Ye.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,$,V,K,Ae,Ue,Ee=0){if(!(E&&E.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Le=Le[Ue],Array.isArray(Le)&&(Le=Le[0])),Le){xe.bindFramebuffer(H.FRAMEBUFFER,Le);try{let He=E.textures[Ee],je=He.format,ct=He.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ee);let Be=us(He);if(Be.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&$>=0&&$<=E.height-K&&H.readPixels(F,$,V,K,fe.convert(je),fe.convert(ct),Ae)}finally{let He=Z!==null?ze.get(Z).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(E,F,$,V,K,Ae,Ue,Ee=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Le=Le[Ue],Array.isArray(Le)&&(Le=Le[0])),Le)if(F>=0&&F<=E.width-V&&$>=0&&$<=E.height-K){xe.bindFramebuffer(H.FRAMEBUFFER,Le);let He=E.textures[Ee],je=He.format,ct=He.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ee);let Be=us(He);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ut),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),H.readPixels(F,$,V,K,fe.convert(je),fe.convert(ct),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let un=Z!==null?ze.get(Z).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,un);let Dt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Mx(H,Dt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ut),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ut),H.deleteSync(Dt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,$=0){let V=Math.pow(2,-$),K=Math.floor(E.image.width*V),Ae=Math.floor(E.image.height*V),Ue=F!==null?F.x:0,Ee=F!==null?F.y:0;We.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,Ue,Ee,K,Ae),xe.unbindTexture()},this.copyTextureToTexture=function(E,F,$=null,V=null,K=0,Ae=0){let Ue,Ee,Le,He,je,ct,Be,ut,un,Dt=E.isCompressedTexture?E.mipmaps[Ae]:E.image;if($!==null)Ue=$.max.x-$.min.x,Ee=$.max.y-$.min.y,Le=$.isBox3?$.max.z-$.min.z:1,He=$.min.x,je=$.min.y,ct=$.isBox3?$.min.z:0;else{let dt=Math.pow(2,-K);Ue=Math.floor(Dt.width*dt),Ee=Math.floor(Dt.height*dt),E.isDataArrayTexture?Le=Dt.depth:E.isData3DTexture?Le=Math.floor(Dt.depth*dt):Le=1,He=0,je=0,ct=0}V!==null?(Be=V.x,ut=V.y,un=V.z):(Be=0,ut=0,un=0);let Ct=fe.convert(F.format),Bn=fe.convert(F.type),ke;F.isData3DTexture?(We.setTexture3D(F,0),ke=H.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(We.setTexture2DArray(F,0),ke=H.TEXTURE_2D_ARRAY):(We.setTexture2D(F,0),ke=H.TEXTURE_2D),xe.activeTexture(H.TEXTURE0),xe.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,F.flipY),xe.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),xe.pixelStorei(H.UNPACK_ALIGNMENT,F.unpackAlignment);let jn=xe.getParameter(H.UNPACK_ROW_LENGTH),xt=xe.getParameter(H.UNPACK_IMAGE_HEIGHT),Vs=xe.getParameter(H.UNPACK_SKIP_PIXELS),kn=xe.getParameter(H.UNPACK_SKIP_ROWS),Nc=xe.getParameter(H.UNPACK_SKIP_IMAGES);xe.pixelStorei(H.UNPACK_ROW_LENGTH,Dt.width),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dt.height),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,He),xe.pixelStorei(H.UNPACK_SKIP_ROWS,je),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,ct);let hs=E.isDataArrayTexture||E.isData3DTexture,Ws=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let dt=ze.get(E),Rn=ze.get(F),tr=ze.get(dt.__renderTarget),Vt=ze.get(Rn.__renderTarget);xe.bindFramebuffer(H.READ_FRAMEBUFFER,tr.__webglFramebuffer),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Tn=0;Tn<Le;Tn++)hs&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.get(E).__webglTexture,K,ct+Tn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.get(F).__webglTexture,Ae,un+Tn)),H.blitFramebuffer(He,je,He+Ue,je+Ee,Be,ut,Be+Ue,ut+Ee,H.DEPTH_BUFFER_BIT,H.NEAREST);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||ze.has(E)){let dt=ze.get(E),Rn=ze.get(F);xe.bindFramebuffer(H.READ_FRAMEBUFFER,C),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,B);for(let tr=0;tr<Le;tr++)hs?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,dt.__webglTexture,K,ct+tr):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,dt.__webglTexture,K),Ws?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Rn.__webglTexture,Ae,un+tr):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Rn.__webglTexture,Ae),K!==0?H.blitFramebuffer(He,je,He+Ue,je+Ee,Be,ut,Be+Ue,ut+Ee,H.COLOR_BUFFER_BIT,H.NEAREST):Ws?H.copyTexSubImage3D(ke,Ae,Be,ut,un+tr,He,je,Ue,Ee):H.copyTexSubImage2D(ke,Ae,Be,ut,He,je,Ue,Ee);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ws?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(ke,Ae,Be,ut,un,Ue,Ee,Le,Ct,Bn,Dt.data):F.isCompressedArrayTexture?H.compressedTexSubImage3D(ke,Ae,Be,ut,un,Ue,Ee,Le,Ct,Dt.data):H.texSubImage3D(ke,Ae,Be,ut,un,Ue,Ee,Le,Ct,Bn,Dt):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,Be,ut,Ue,Ee,Ct,Bn,Dt.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,Be,ut,Dt.width,Dt.height,Ct,Dt.data):H.texSubImage2D(H.TEXTURE_2D,Ae,Be,ut,Ue,Ee,Ct,Bn,Dt);xe.pixelStorei(H.UNPACK_ROW_LENGTH,jn),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Vs),xe.pixelStorei(H.UNPACK_SKIP_ROWS,kn),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,Nc),Ae===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&H.generateMipmap(ke),xe.unbindTexture()},this.initRenderTarget=function(E){ze.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){k=0,N=0,Z=null,xe.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};function gm(r,e){if(e===qp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Wa||e===Sc){let t=r.getIndex();if(t===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Wa)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function oy(r){let e=new Map,t=new Map,n=r.clone();return ay(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function ay(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)ay(r.children[n],e.children[n],t)}var xf=class extends cr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bm(t)}),this.register(function(t){return new Tm(t)}),this.register(function(t){return new wm(t)}),this.register(function(t){return new Nm(t)}),this.register(function(t){return new Om(t)}),this.register(function(t){return new Um(t)}),this.register(function(t){return new Am(t)}),this.register(function(t){return new Rm(t)}),this.register(function(t){return new Cm(t)}),this.register(function(t){return new Pm(t)}),this.register(function(t){return new Mm(t)}),this.register(function(t){return new Im(t)}),this.register(function(t){return new Em(t)}),this.register(function(t){return new Dm(t)}),this.register(function(t){return new Lm(t)}),this.register(function(t){return new vm(t)}),this.register(function(t){return new yf(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new yf(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Fm(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=rs.extractUrlBase(e);o=rs.resolveURL(c,this.path)}else o=rs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new bo(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fy){try{o[ot.KHR_BINARY_GLTF]=new Bm(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Xm(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new Sm;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new km(s,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new zm;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new Hm;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function kE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Jt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vm=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Dn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ci(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new is(u),c.distance=h;break;case"spot":c=new fc(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ar(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Sm=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Zn}extendParams(e,t,n){let i=[];e.color=new Ve(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Dn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(i)}},Mm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},bm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new et(s,s)}return Promise.all(i)}},Tm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},wm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Em=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Am=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ot)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Rm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Cm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(s[0],s[1],s[2],Dn),Promise.all(i)}},Pm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Im=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(s[0],s[1],s[2],Dn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ot)),Promise.all(i)}},Lm=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Dm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Nm=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Om=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Um=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},yf=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},Fm=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==$i.TRIANGLES&&c.mode!==$i.TRIANGLE_STRIP&&c.mode!==$i.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let p of h){let _=new qe,m=new z,g=new vn,y=new z(1,1,1),M=new vo(p.geometry,p.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),M.setMatrixAt(b,_.compose(m,g,y));let v=null;for(let b in l)if(b==="_COLOR_0"){let T=l[b];M.instanceColor=new Jr(T.array,T.itemSize,T.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let x=M.geometry;v=new nn,v.name=x.name;for(let S in x.attributes)v.setAttribute(S,x.attributes[S]);for(let S in x.morphAttributes)v.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let S of x.groups)v.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),M.geometry=v}let T=l[b];v.setAttribute(b,new Jr(T.array,T.itemSize,T.normalized))}Et.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},fy="glTF",Ac=12,ly={JSON:1313821514,BIN:5130562},Bm=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ac),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ac,s=new DataView(e,Ac),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===ly.JSON){let c=new Uint8Array(e,Ac+o,a);this.content=n.decode(c)}else if(l===ly.BIN){let c=Ac+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},km=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Vm[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Vm[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Ka[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let p in d.attributes){let _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}h(d)},a,c,Dn,f)})})}},zm=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Hm=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},vf=class extends Sr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,p=e*c,_=p-c,m=-2*d+3*f,g=d-f,y=1-m,M=g-f+h;for(let v=0;v!==a;v++){let b=o[_+v+a],T=o[_+v+l]*u,x=o[p+v+a],S=o[p+v]*u;s[v]=y*b+M*T+m*x+g*S}return s}},zE=new vn,Gm=class extends vf{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return zE.fromArray(s).normalize().toArray(s),s}},$i={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ka={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cy={9728:on,9729:Ut,9984:Ah,9985:Ga,9986:Lo,9987:Fi},uy={33071:xi,33648:Ea,10497:Yi},_m={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ks={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HE={CUBICSPLINE:void 0,LINEAR:_o,STEP:go},xm={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Sn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),r.DefaultMaterial}function Oo(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ar(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function WE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XE(r){let e,t=r.extensions&&r.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ym(t.attributes):e=r.indices+":"+ym(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ym(r.targets[n]);return e}function ym(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Wm(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var YE=new qe,Xm=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?(this.textureLoader=new To(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new dc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Oo(s,a,i),Ar(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(rs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=_m[i.type],a=Ka[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ln(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=_m[i.type],c=Ka[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,m;if(d&&d!==h){let g=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,M=t.cache.get(y);M||(_=new c(a,g*d,i.count*d/u),M=new La(_,d/u),t.cache.add(y,M)),m=new Da(M,l,f%d/u,p)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Ln(_,l,p);if(i.sparse!==void 0){let g=_m.SCALAR,y=Ka[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new y(o[1],M,i.sparse.count*g),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Ln(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,S=b.length;x<S;x++){let R=b[x];if(m.setX(R,T[x*l]),l>=2&&m.setY(R,T[x*l+1]),l>=3&&m.setZ(R,T[x*l+2]),l>=4&&m.setW(R,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=cy[f.magFilter]||Ut,u.minFilter=cy[f.minFilter]||Fi,u.wrapS=uy[f.wrapS]||Yi,u.wrapT=uy[f.wrapT]||Yi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==on&&u.minFilter!==Ut,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(m){let g=new an(m);g.needsUpdate=!0,d(g)}),t.load(rs.resolveURL(f,s.path),_,void 0,p)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Ar(f,o),f.userData.mimeType=o.mimeType||qE(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Oa,li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ns,li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Sn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let h=i[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Dn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Un);let u=s.alphaMode||xm.OPAQUE;if(u===xm.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===xm.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new et(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Zn){let h=s.emissiveFactor;a.emissive=new Ve().setRGB(h[0],h[1],h[2],Dn)}return s.emissiveTexture!==void 0&&o!==Zn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),Ar(h,s),t.associations.set(h,{materials:e}),s.extensions&&Oo(i,h,s),h})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return hy(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=XE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=hy(new nn,c,t),c.mode===$i.TRIANGLE_STRIP?f=f.then(d=>gm(d,Sc)):c.mode===$i.TRIANGLE_FAN&&(f=f.then(d=>gm(d,Wa))),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?GE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let _=u[d],m=o[d],g,y=c[d];if(m.mode===$i.TRIANGLES||m.mode===$i.TRIANGLE_STRIP||m.mode===$i.TRIANGLE_FAN||m.mode===void 0){let M=s.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&v?new $l(_,y):new gt(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===$i.LINES)g=new Mo(_,y);else if(m.mode===$i.LINE_STRIP)g=new So(_,y);else if(m.mode===$i.LINE_LOOP)g=new Ql(_,y);else if(m.mode===$i.POINTS)g=new $r(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&WE(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Ar(g,s),m.extensions&&Oo(i,g,m),t.assignFinalMaterial(g),h.push(g)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Oo(i,h[0],s),h[0];let f=new Zt;s.extensions&&Oo(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(Ft.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Eo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ar(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new qe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],_=h[3],m=h[4],g=[];for(let M=0,v=f.length;M<v;M++){let b=f[M],T=d[M],x=p[M],S=_[M],R=m[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let A=n._createAnimationTracks(b,T,x,S,R);if(A)for(let D=0;D<A.length;D++)g.push(A[D])}let y=new lc(s,void 0,g);return Ar(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,YE)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,p=h[0];u.pivot=new z().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Na:c.length>1?u=new Zt:c.length===1?u=c[0]:u=new Et,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ar(u,s),s.extensions&&Oo(n,u,s),s.matrix!==void 0){let h=new qe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Zt;n.name&&(s.name=i.createUniqueName(n.name)),Ar(s,n),n.extensions&&Oo(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?s.add(oy(f)):s.add(f)}let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof li||f instanceof an)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}ks[s.path]===ks.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(ks[s.path]){case ks.weights:u=es;break;case ks.rotation:u=ts;break;case ks.translation:case ks.scale:u=Us;break;default:n.itemSize===1?u=es:u=Us;break}let h=i.interpolation!==void 0?HE[i.interpolation]:_o,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let _=new u(l[d]+"."+ks[s.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Wm(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ts?Gm:vf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function KE(r,e,t){let n=e.attributes,i=new pn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){let u=Wm(Ka[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new z,l=new z;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let _=Wm(Ka[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new yi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function hy(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=Vm[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return st.workingColorSpace!==Dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Ar(r,e),KE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?VE(r,e.targets,t):r})}var Sf=class extends cc{constructor(e){super(e),this.type=ui}parse(e){let o=function(S,R){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},h=function(S,R,A){R=R||1024;let L=S.pos,U=-1,C=0,B="",k=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));for(;0>(U=k.indexOf(`
`))&&C<R&&L<S.byteLength;)B+=k,C+=k.length,L+=128,k=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));return-1<U?(A!==!1&&(S.pos+=C+U+1),B+k.slice(0,U)):!1},f=function(S){let R=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},B,k;for((S.pos>=S.byteLength||!(B=h(S)))&&o(1,"no header found"),(k=B.match(R))||o(3,"bad initial token"),C.valid|=1,C.programtype=k[1],C.string+=B+`
`;B=h(S),B!==!1;){if(C.string+=B+`
`,B.charAt(0)==="#"){C.comments+=B+`
`;continue}if((k=B.match(A))&&(C.gamma=parseFloat(k[1])),(k=B.match(D))&&(C.exposure=parseFloat(k[1])),(k=B.match(L))&&(C.valid|=2,C.format=k[1]),(k=B.match(U))&&(C.valid|=4,C.height=parseInt(k[1],10),C.width=parseInt(k[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||o(3,"missing format specifier"),C.valid&4||o(3,"missing image size specifier"),C},d=function(S,R,A){let D=R;if(D<8||D>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);D!==(S[2]<<8|S[3])&&o(3,"wrong scanline width");let L=new Uint8Array(4*R*A);L.length||o(4,"unable to allocate buffer space");let U=0,C=0,B=4*D,k=new Uint8Array(4),N=new Uint8Array(B),Z=A;for(;Z>0&&C<S.byteLength;){C+4>S.byteLength&&o(1),k[0]=S[C++],k[1]=S[C++],k[2]=S[C++],k[3]=S[C++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=D)&&o(3,"bad rgbe scanline format");let G=0,P;for(;G<B&&C<S.byteLength;){P=S[C++];let le=P>128;if(le&&(P-=128),(P===0||G+P>B)&&o(3,"bad scanline data"),le){let be=S[C++];for(let X=0;X<P;X++)N[G++]=be}else N.set(S.subarray(C,C+P),G),G+=P,C+=P}let J=D;for(let le=0;le<J;le++){let be=0;L[U]=N[le+be],be+=D,L[U+1]=N[le+be],be+=D,L[U+2]=N[le+be],be+=D,L[U+3]=N[le+be],U+=4}Z--}return L},p=function(S,R,A,D){let L=S[R+3],U=Math.pow(2,L-128)/255;A[D+0]=S[R+0]*U,A[D+1]=S[R+1]*U,A[D+2]=S[R+2]*U,A[D+3]=1},_=function(S,R,A,D){let L=S[R+3],U=Math.pow(2,L-128)/255;A[D+0]=Is.toHalfFloat(Math.min(S[R+0]*U,65504)),A[D+1]=Is.toHalfFloat(Math.min(S[R+1]*U,65504)),A[D+2]=Is.toHalfFloat(Math.min(S[R+2]*U,65504)),A[D+3]=Is.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let g=f(m),y=g.width,M=g.height,v=d(m.subarray(m.pos),y,M),b,T,x;switch(this.type){case Jn:x=v.length/4;let S=new Float32Array(x*4);for(let A=0;A<x;A++)p(v,A*4,S,A*4);b=S,T=Jn;break;case ui:x=v.length/4;let R=new Uint16Array(x*4);for(let A=0;A<x;A++)_(v,A*4,R,A*4);b=R,T=ui;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:M,data:b,header:g.string,gamma:g.gamma,exposure:g.exposure,type:T,colorSpace:Dn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};function dy(r,e){let t=new Zt;r.position.y=-1.78,r.scale.setScalar(1.54),t.add(r);let n=[1,2,3,4].map(s=>r.getObjectByName("GothicCabinet_01_door"+s));for(let[s,o]of[[0,.32],[1,1.32]]){for(let l of[-1,1]){let c=l*1.04;for(let u=0;u<4;u++){let h=e[(u+s+(l+1))%e.length].clone(!0),f=new pn().setFromObject(h).getSize(new z),d=(.99+.12*Math.sin(u*1.8+l+s))/f.y,p=f.x*d;h.scale.setScalar(d),h.position.set(c-l*p/2,o*1.54-1.78+.008,.38+.036*Math.sin(u+s)),h.rotation.y=.02*Math.sin(u+l),t.add(h),c-=l*(p+.012)}}let a=-.21;for(let l=0;l<3;l++){let c=e[(s+l+2)%e.length].clone(!0),u=new pn().setFromObject(c).getSize(new z),h=(1.04+.11*Math.cos(l*.9+s))/u.y,f=u.x*h;c.scale.setScalar(h),c.position.set(a+f/2,o*1.54-1.78+.008,.22+.035*Math.cos(l+s)),t.add(c),a+=f+.012}}function i(s,o){for(let[a,l]of n.entries()){let c=s-[0,.11,.23,.33][a],u=Ft.smootherstep(c,0,1.28),h=Ft.smootherstep(c,3.62,5.28),f=[.57,.76,.42,.6][a],d=1.59,p=o?f:u*(d-(d-f)*h);l.rotation.y=(a%2===0?-1:1)*p}}return{object:t,update:i}}function py(){let r=[[-2.3,1.1,1.85],[-1.56,1.64,1.45],[-.72,1.82,.75],[.36,1.66,.96],[1.34,1.41,1.67],[2.17,1.09,2.18],[2.23,.28,1.77],[1.62,-.05,2.31],[2.16,-.96,1.96],[1.28,-1.32,1.35],[.34,-1.46,.97],[-1.31,-1.28,1.63],[-2.17,-.82,2.15],[-1.55,-.2,2.35],[-2.08,.29,1.65],[-.58,.34,1.12],[.64,.65,1.29],[-.41,1.12,1.28]],e=new nn;e.setAttribute("position",new bt(r.flat(),3)),e.setAttribute("seed",new bt(r.map((s,o)=>o*2.39996),1));let t={time:{value:0},pixelScale:{value:1}},n=new Si({uniforms:t,transparent:!0,depthWrite:!1,blending:pc,toneMapped:!1,vertexShader:`
      attribute float seed;
      uniform float time, pixelScale;
      varying float glow;
      void main() {
        float phase = seed + time * (.38 + .11 * sin(seed));
        vec3 p = position + vec3(.16*sin(phase)+.045*cos(1.7*phase), .12*cos(phase*1.3), .11*sin(.8*phase));
        vec4 view = modelViewMatrix * vec4(p, 1.);
        glow = .28 + .72 * smoothstep(-.70, .9, sin(seed*3. + time*(.72+.25*cos(seed))));
        gl_Position = projectionMatrix * view;
        gl_PointSize = pixelScale * (12. + 6.*glow + 2.*sin(seed)) * clamp(8. / -view.z, .8, 1.2);
      }`,fragmentShader:`
      varying float glow;
      void main() {
        vec2 p = gl_PointCoord * 2. - 1.;
        float r = dot(p,p);
        float core = exp(-r*64.);
        float halo = exp(-r*5.5);
        gl_FragColor = vec4(mix(vec3(.92,.49,.19),vec3(1.,.91,.64),core),
          glow * (.96*core + .23*halo) * (1.-smoothstep(.70,1.,r)));
      }`}),i=new $r(e,n);return i.frustumCulled=!1,{points:i,update(s,o){t.time.value=s,t.pixelScale.value=o},dispose(){e.dispose(),n.dispose()}}}function ls(r,e,t,n,i){r.beginPath(),r.moveTo(e,t),r.lineTo(n,i),r.stroke()}function my(r,e,t,n,i){r.beginPath(),r.ellipse(e,t,n,i,0,0,2*Math.PI),r.stroke()}function ZE(r){for(let i=0;i<7;i++){let s=83+i*8;r.lineWidth=i===6?3:1.7,r.beginPath(),r.moveTo(320-s,411),r.lineTo(320-s,293),r.arc(320,293,s,Math.PI,Math.PI*2),r.lineTo(320+s,411),r.stroke()}for(let i=1;i<16;i++){let s=Math.PI+i*Math.PI/16,o=Math.cos(s),a=Math.sin(s);ls(r,320+96*o,293+96*a,320+130*o,293+130*a)}for(let i of[-1,1]){let s=320+i*108;for(let[o,a]of[[289,61],[296,56],[304,50],[407,52],[414,61],[422,69]])ls(r,s-a/2,o,s+a/2,o);for(let o=-2;o<=2;o++)ls(r,s+o*6,310,s+o*6,401)}r.lineWidth=1.5;for(let i=-3;i<=3;i++)ls(r,320+i*14,378,320+i*52,451);for(let i of[381,388,398,411,428,450])ls(r,320-(i-354)*1.6,i,320+(i-354)*1.6,i)}function JE(r){r.save(),r.translate(320,302);for(let e=0;e<32;e++){r.rotate(Math.PI/16);let t=e%4===0?148:e%2===0?127:108;r.fillStyle=e%2===0?"#dedede":"#909090",r.beginPath(),r.moveTo(22,0),r.quadraticCurveTo(61,-15,t,0),r.lineTo(65,6),r.closePath(),r.fill(),r.strokeStyle="#fafafa",r.lineWidth=1.5,r.beginPath(),r.moveTo(25,0),r.quadraticCurveTo(68,10,t,0),r.stroke()}r.strokeStyle="#fff",r.lineWidth=2;for(let e of[21,27,68,88,153])my(r,0,0,e,e);r.lineWidth=1;for(let e=0;e<144;e++)r.rotate(Math.PI/72),ls(r,157,0,e%6?161:165,0);r.restore()}function $E(r){r.save(),r.translate(320,313);let e=(t,n)=>{r.beginPath(),r.moveTo(-137,t-4),r.lineTo(-4,t-64),r.lineTo(137,t-7),r.lineTo(7,t+58+n),r.closePath()};for(let t=0;t<4;t++){let n=77-t*50;r.fillStyle="#000",e(n,7),r.fill(),r.lineWidth=2.8,r.stroke(),e(n,0),r.fill(),r.stroke(),r.lineWidth=1.2;for(let i=1;i<21;i++){let s=i/21;ls(r,-137+144*s,n-4+62*s,-137+144*s,n-1+63*s)}for(let[i,s]of[[-99,-4],[-4,-45],[100,-7],[7,39]])my(r,i,n+s,5,2.3);if(t===3)for(let i=0;i<4;i++)r.beginPath(),r.moveTo(-80+i*14,n+1+i*5),r.lineTo(-2+i*7,n-33+i*9),r.lineTo(76-i*11,n-2+i*6),r.stroke()}r.restore()}function jE(r){let e=[];function t(n,i){let s=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),c=(102+46*a)*s,u=(102+46*a)*o,h=46*l,f=.56*u-.83*h;return[320+c*.91-f*.42,306+c*.42+f*.91,.83*u+.56*h]}for(let n=0;n<54;n++)for(let i=0;i<18;i++){let s=2*Math.PI*n/54,o=2*Math.PI*i/18,a=[t(s,o),t(s+2*Math.PI/54,o),t(s+2*Math.PI/54,o+2*Math.PI/18),t(s,o+2*Math.PI/18)];e.push({points:a,depth:a.reduce((l,c)=>l+c[2],0)/4})}e.sort((n,i)=>n.depth-i.depth),r.fillStyle="#000",r.lineJoin="round";for(let{points:n,depth:i}of e){r.beginPath(),r.moveTo(...n[0].slice(0,2));for(let s of n.slice(1))r.lineTo(s[0],s[1]);r.closePath(),r.fill(),r.lineWidth=i>45?2.5:1.65,r.strokeStyle=i>15?"#fff":"#aaa",r.stroke()}}var QE={sites:ZE,ads:JE,apps:$E,"3d":jE},eA={sites:15125659,ads:15973768,apps:15193766,"3d":15455419};function tA(r,e){let t=document.createElement("canvas");t.width=1280,t.height=1712;let n=t.getContext("2d",{alpha:!1});n.scale(2,2),n.fillStyle="#000",n.fillRect(0,0,640,856),n.strokeStyle="#e9e9e9",n.lineWidth=2.8,n.strokeRect(46,39,548,778),n.lineWidth=1.2,n.strokeRect(54,47,532,762);for(let[s,o,a]of[[61,54,0],[579,54,Math.PI/2],[579,802,Math.PI],[61,802,-Math.PI/2]])n.save(),n.translate(s,o),n.rotate(a),n.lineWidth=1.8,n.beginPath(),n.moveTo(0,54),n.bezierCurveTo(8,37,2,10,42,8),n.quadraticCurveTo(26,24,16,16),n.stroke(),n.beginPath(),n.moveTo(6,6),n.quadraticCurveTo(22,1,53,0),n.stroke(),n.restore();n.save(),QE[e](n),n.restore(),n.fillStyle="#fff",n.strokeStyle="#cacaca",n.lineWidth=1.75,ls(n,139,494,302,494),ls(n,338,494,501,494),n.save(),n.translate(320,494),n.rotate(Math.PI/4),n.strokeRect(-3.5,-3.5,7,7),n.restore(),n.textAlign="center",n.font="600 "+(e==="apps"?90:113)+"px Georgia, serif",n.fillText(r,320,618,520),n.lineWidth=1.8;for(let s of[-1,1])n.beginPath(),n.moveTo(320,710),n.bezierCurveTo(320+s*15,710,320+s*24,694,320+s*51,702),n.stroke();let i=new vi(t);return i.anisotropy=8,i}function gy(r,e,t,n,i,s){let o=tA(t.title,t.key),a=r.material.clone(),l=e.getSize(new z);return a.onBeforeCompile=c=>{c.uniforms.boardAngle=i,c.uniforms.foilGleam=s,c.uniforms.boardJoint={value:new z(e.max.x-.002,e.max.z-.004,l.x)},c.uniforms.foilMask={value:o},c.uniforms.bindingGrain={value:n},c.uniforms.coverExtent={value:new yt(e.max.z,e.min.y,l.z,l.y)},c.uniforms.coverDye={value:new z(...t.dye)},c.uniforms.foilColor={value:new Ve(eA[t.key])},c.vertexShader=`varying vec2 foilUV; varying float coverFace; uniform vec4 coverExtent;
       uniform vec3 boardJoint; uniform float boardAngle;
       vec2 bendJoint(vec2 v,float a){ return vec2(cos(a)*v.x+sin(a)*v.y,-sin(a)*v.x+cos(a)*v.y); }
       `+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
      float hingeTurn=-boardAngle*smoothstep(boardJoint.x-boardJoint.z*.72,boardJoint.x-boardJoint.z*.15,position.x);
      objectNormal.xz=bendJoint(objectNormal.xz,hingeTurn);`),c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      foilUV=vec2((coverExtent.x-position.z)/coverExtent.z,(position.y-coverExtent.y)/coverExtent.w);
      coverFace=normal.x;
      transformed.xz=boardJoint.xy+bendJoint(transformed.xz-boardJoint.xy,hingeTurn);`),c.fragmentShader=`varying vec2 foilUV; varying float coverFace; uniform sampler2D foilMask,bindingGrain; uniform vec3 coverDye,foilColor; uniform float foilGleam;
`+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float foil=texture2D(foilMask,foilUV).r*smoothstep(.55,.95,coverFace);
      float grain=dot(diffuseColor.rgb,vec3(.24,.56,.20));
      vec3 leather=texture2D(bindingGrain,foilUV*vec2(1.02,1.36)).rgb;
      float board=smoothstep(.35,.9,abs(coverFace));
      diffuseColor.rgb=mix(diffuseColor.rgb,grain*coverDye*(.74+.56*leather.r),board*.97);
      diffuseColor.rgb=mix(diffuseColor.rgb,foilColor*(.91+min(.09,grain)+.17*foilGleam),foil);`),c.fragmentShader=c.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(mix(roughnessFactor,.39+.29*leather.g,board*.75),.31,foil);`),c.fragmentShader=c.fragmentShader.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor=mix(metalnessFactor,.56,foil);`),c.fragmentShader=c.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      vec3 stampX=dFdx(-vViewPosition), stampY=dFdy(-vViewPosition);
      vec3 edgeX=cross(stampY,normal), edgeY=cross(normal,stampX);
      float det=dot(stampX,edgeX);
      float relief=.0009*foil+.0024*leather.b*board*(1.-foil);
      vec3 emboss=(edgeX*dFdx(relief)+edgeY*dFdy(relief))*sign(det)/max(abs(det),1.e-7);
      normal=normalize(normal-clamp(emboss,vec3(-.20),vec3(.20)));`)},a.customProgramCacheKey=()=>"archive-engraving",r.material=a,()=>{a.dispose(),o.dispose()}}var nA=[{key:"sites",title:"\u0421\u0430\u0439\u0442\u044B",dye:[.76,1.05,1.5],height:1.24,slot:-.32,floor:1.32,x:-1.89,y:1.04,yaw:-.27,roll:.085,delay:.97},{key:"ads",title:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",dye:[2.03,.77,.62],height:1.2,slot:.32,floor:1.32,x:1.9,y:.89,yaw:.42,roll:-.105,delay:1.19},{key:"apps",title:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",dye:[.68,1.34,1.03],height:1.22,slot:-.34,floor:.32,x:-1.92,y:-.66,yaw:-.15,roll:-.064,delay:1.48},{key:"3d",title:"3D",dye:[1.55,.97,1.48],height:1.17,slot:.32,floor:.32,x:1.85,y:-.82,yaw:.52,roll:.069,delay:1.72}],{smootherstep:Rc,lerp:Za,clamp:iA}=Ft;function _y(r,e,t,n,i,s){let o=nA.map((f,d)=>{let p=new Zt,_=i[d].clone(!0),m=new pn().setFromObject(_),g=m.getSize(new z),y=m.getCenter(new z),M=f.height/g.y;_.scale.set(M*1.1,M,M*1.22),_.position.copy(y).multiply(_.scale).negate();let v=_.getObjectByProperty("isMesh",!0),b={value:0},T={value:0},x=gy(v,m,f,s,b,T),S=new Zt;return S.rotation.y=-Math.PI/2,S.add(_),p.add(S),r.add(p),{...f,index:d,body:p,releaseStamp:x,hinge:b,gleam:T,width:g.z*_.scale.z,depth:g.x*_.scale.x,link:n.querySelector('[data-document="'+f.key+'"]'),progress:0,hover:0,screen:null,rest:new Et,restWorld:new qe}}),a=new z,l=new vn;function c(f,d){l.copy(r.quaternion).invert();for(let p of o){let _=Math.max(p.progress,t.paused?1:iA((f-p.delay)/1.94,0,1));p.progress=_;let m=Rc(_,0,.5),g=Rc(_,.43,.98),y=Rc(_,.48,.96),M=Math.sin(g*Math.PI),v=Rc(_,.79,1),b=Math.sin(v*Math.PI*2)*(1-v),T=Math.sign(p.slot),x=t.heroFocus===p.key?1:0;p.hover=Za(p.hover,x,t.paused?1:1-Math.exp(-d*9)),p.gleam.value=p.hover;let S=p.floor*1.54-1.78+p.height/2+.009,R=.58-p.width/2,A=t.paused?0:Rc(_,.8,1),D=f*(.83+.055*p.index)+p.index*1.79;a.set(p.x+A*.009*Math.sin(D*.72),p.y+A*.026*Math.sin(D),2.04+A*.013*Math.cos(D*.87)),a.applyQuaternion(l),p.body.position.set(Za(p.slot,a.x,g)+T*.055*M,Za(S,a.y,g)+.031*m+.112*M,Za(Za(R,1.92,m),a.z,g)+.21*M+.032*b),p.body.rotation.set(-.085*y-.105*M,Za(Math.PI/2,p.yaw,y)+A*.011*Math.sin(D*.75),p.roll*y+T*(.069*M-.018*b)+A*.009*Math.cos(D)),p.rest.position.copy(p.body.position),p.rest.quaternion.copy(p.body.quaternion),p.rest.updateMatrix();let L=p.hover*g;p.body.position.y+=L*.065,p.body.position.z+=L*.1,p.body.rotation.y-=T*.08*L,p.body.rotation.z-=T*.025*L}n.classList.toggle("books-presented",o[o.length-1].progress>=.9)}let u=new z;function h(){let f=n.clientWidth,d=n.clientHeight;for(let p of o){p.restWorld.multiplyMatrices(r.matrixWorld,p.rest.matrix);let _=1/0,m=1/0,g=-1/0,y=-1/0;for(let b of[p.body.matrixWorld,p.restWorld])for(let T of[-p.width/2,p.width/2])for(let x of[-p.height/2,p.height/2]){u.set(T,x,p.depth/2).applyMatrix4(b).project(e);let S=(u.x+1)*f/2,R=(1-u.y)*d/2;_=Math.min(_,S),g=Math.max(g,S),m=Math.min(m,R),y=Math.max(y,R)}let M=p.screen,v={left:Math.round(_)-2,top:Math.round(m)-2,right:Math.round(g)+2,bottom:Math.round(y)+2};if(!M||p.viewWidth!==f||p.viewHeight!==d||v.left!==M.left||v.top!==M.top||v.right!==M.right||v.bottom!==M.bottom){let b=p.link.style;b.setProperty("--doc-x",100*v.left/f+"%"),b.setProperty("--doc-y",100*v.top/d+"%"),b.setProperty("--doc-w",100*(v.right-v.left)/f+"%"),b.setProperty("--doc-h",100*(v.bottom-v.top)/d+"%"),p.screen=v,p.viewWidth=f,p.viewHeight=d}p.link.classList.toggle("book-in-cabinet",p.progress<=.5)}}return{find:f=>o.find(d=>d.key===f),update:c,project:h,status:()=>o.map(f=>({key:f.key,progress:f.progress,hover:f.hover,position:f.body.position.toArray(),screen:f.screen})),dispose(){for(let f of o)r.remove(f.body),f.releaseStamp()}}}var cs=720,hi=960,rA=Ft.clamp,sA=()=>matchMedia("(orientation: portrait)").matches?"portrait":"wide",oA=new URL("3d/assets/images/",document.baseURI),qm=new Map;function Cc(){let r=sA();if(!qm.has(r)){let e=new Image;e.decoding="async",e.src=new URL("entrance-"+r+".webp?v=ice-2",oA).href,qm.set(r,e)}return qm.get(r)}function hr(r,e,t,n,i){r.beginPath(),r.moveTo(e,t),r.lineTo(n,i),r.stroke()}function aA(){let r=document.createElement("canvas");r.width=r.height=160;let e=r.getContext("2d"),t=e.createImageData(160,160),n=321;for(let i=0;i<t.data.length;i+=4){n=Math.imul(1664525,n)+1013904223>>>0;let s=(n/4294967296-.5)*13;t.data[i]=233+s,t.data[i+1]=224+s,t.data[i+2]=202+s,t.data[i+3]=255}return e.putImageData(t,0,0),r}function xy(r,e){r.fillStyle=r.createPattern(e,"repeat"),r.fillRect(0,0,cs,hi);let t=r.createLinearGradient(0,0,cs,0);t.addColorStop(0,"#62472844"),t.addColorStop(.035,"#fff4cd22"),t.addColorStop(.13,"#fff0"),t.addColorStop(1,"#66563f17"),r.fillStyle=t,r.fillRect(0,0,cs,hi)}function lA(r,e){r.fillStyle="#193345",r.fillRect(30,34,660,892),r.save(),r.translate(60,85),r.strokeStyle="#92adac80",r.lineWidth=1;for(let t=0;t<=600;t+=24)hr(r,t,0,t,675);for(let t=0;t<=675;t+=24)hr(r,0,t,600,t);r.strokeStyle="#e3dcbf",r.lineWidth=2.5;for(let t=0;t<6;t++){let n=73+t*17,i=1-e,s=n+e*(116+t*20-n),o=541;r.beginPath(),r.moveTo(300-s,o),r.lineTo(300-s,240),r.bezierCurveTo(300-s,240-i*n*.55-e*100,300-i*n*.55,240-n,300,240-n),r.bezierCurveTo(300+i*n*.55,240-n,300+s,240-i*n*.55-e*100,300+s,240),r.lineTo(300+s,o),r.stroke()}r.globalAlpha=e,r.fillStyle="#152932",r.fillRect(10,275,580,391),r.strokeStyle="#ccb68e";for(let t of[10,198,390,590])hr(r,t,257,t,667);for(let t of[271,362,570,666])hr(r,10,t,590,t);r.fillStyle="#cdc8af",r.fillRect(32,302,119,8),r.fillRect(32,324,88,4),r.strokeRect(218,386,151,150),r.strokeRect(411,386,151,150),r.restore()}function cA(r,e){r.fillStyle="#c87856",r.fillRect(28,32,664,896),r.save(),r.translate(360,370);for(let[t,n]of[["#edba8e",11],["#672e2b",-4]]){r.save(),r.translate(n*(1.5-e),0),r.rotate((1-e)*.17),r.fillStyle=t,r.globalAlpha=t==="#672e2b"?e:1;for(let i=0;i<40;i++)r.rotate(Math.PI/20),r.beginPath(),r.moveTo(32,0),r.bezierCurveTo(110,-9,193,-72,242,-16),r.quadraticCurveTo(158,-9,32,2),r.fill();r.restore()}r.restore(),r.strokeStyle="#512f29",r.lineWidth=2;for(let[t,n]of[[65,72],[650,72],[65,880],[650,880]])hr(r,t-10,n,t+10,n),hr(r,t,n-10,t,n+10);r.fillStyle="#5b2e2b";for(let t=0;t<5;t++)r.fillRect(68+t*39,796,28,31)}function uA(r,e){r.fillStyle="#24423e",r.fillRect(30,34,660,892);for(let t=0;t<3;t++){r.save();let n=(t-1)*(1-e);r.translate(87+n*43,208-n*76),r.transform(1,-.22*(1-e),.28*(1-e),1,0,0),r.fillStyle=t===2?"#d9dcc6":"rgba(149,188,165,.72)",r.strokeStyle="#e4dcb6",r.lineWidth=3,r.fillRect(0,0,525,370),r.strokeRect(0,0,525,370),r.fillStyle="#395950",r.fillRect(0,0,525,48);for(let i=0;i<3;i++)r.beginPath(),r.arc(22+i*14,24,3,0,2*Math.PI),r.fillStyle="#d7d2b7",r.fill();r.fillStyle="#a5b4a0",r.fillRect(18,69,91,279);for(let i=0;i<3;i++)r.strokeStyle="#819786",r.strokeRect(134,80+i*80,364,54),r.fillStyle="#829884",r.fillRect(156,101+i*80,181-i*24,7);r.restore()}}function hA(r,e,t){let n=cs*(t*1.55-.09),i=o=>n+17*Math.sin(o*.031)+9*Math.sin(o*.089);if(e?.complete&&e.naturalWidth){r.save(),r.beginPath(),r.moveTo(0,0);for(let a=0;a<=hi;a+=8)r.lineTo(i(a),a);r.lineTo(0,hi),r.closePath(),r.clip();let o=Math.max(cs/e.width,hi/e.height);r.drawImage(e,(cs-e.width*o)/2,(hi-e.height*o)/2,e.width*o,e.height*o),r.restore()}r.save(),r.lineCap="round";for(let o=0;o<19;o++){let a=23+o*51,l=i(a),c=25+24*Math.sin(o*7.1)**2;r.strokeStyle="#c2e1e7",r.lineWidth=1.8,hr(r,l-22,a,l+c,a-c*.55);for(let u=1;u<5;u++){let h=l+c*u/6,f=a-c*u/6*.55;hr(r,h,f,h+2,f-10),hr(r,h,f,h+10,f+2)}}let s=r.createLinearGradient(n-52,0,n+50,0);s.addColorStop(0,"#c6e5ef00"),s.addColorStop(.48,"#e3f7ff88"),s.addColorStop(1,"#efffff00"),r.fillStyle=s,r.fillRect(n-52,0,102,hi),r.restore()}function yy(r){let e=aA();function t(){let u=document.createElement("canvas");u.width=cs,u.height=hi;let h=u.getContext("2d");xy(h,e);let f=new vi(u);return f.colorSpace=Ot,f.anisotropy=4,{ctx:h,texture:f}}let n=t(),i=t(),s=n.ctx;s.strokeStyle="#9f927655",s.lineWidth=1.6;for(let u=-hi;u<cs+hi;u+=30)hr(s,u,0,u+hi,hi),hr(s,u,0,u-hi,hi);s.strokeStyle="#a39579",s.strokeRect(34,32,cs-68,hi-64);let o=r==="3d"?Cc():null,a={sites:lA,ads:cA,apps:uA},l=-1;function c(u){let h=Math.round(rA(u,0,1)*30);l!==h&&(l=h,xy(i.ctx,e),r==="3d"?hA(i.ctx,o,h/30):a[r](i.ctx,h/30),i.texture.needsUpdate=!0)}return c(0),{lining:n.texture,face:i.texture,update:c,dispose(){n.texture.dispose(),i.texture.dispose()}}}function fA(r){let t=document.createElement("canvas");t.width=288,t.height=96;let n=t.getContext("2d");function i(o){n.beginPath(),n.moveTo(...o[0]);for(let a of o.slice(1))n.lineTo(...a);n.stroke()}for(let o=0;o<3;o++){if(n.save(),n.translate(96*(o+.5),96/2),r==="3d"){n.strokeStyle=["#f0f9ff","#cae1f6","#fffaff"][o],n.lineWidth=o===2?6:4.4,n.lineCap="round";for(let a=0;a<6;a++)i([[0,0],[0,-34]]),i([[-8,-26],[0,-17],[8,-26]]),o===0&&i([[-6,-32],[0,-26],[6,-32]]),n.rotate(Math.PI/3)}else r==="sites"?(n.strokeStyle=["#a8d6da","#efe2bf","#a3bfcf"][o],n.lineWidth=6,o===0?(i([[-22,0],[22,0]]),i([[0,-22],[0,22]])):o===1?i([[-21,-19],[-21,18],[20,18]]):(i([[-31,0],[28,0]]),i([[18,-9],[18,9]]))):r==="ads"?(n.fillStyle=["#efcb91","#b45d43","#66392f"][o],n.beginPath(),n.moveTo(-24,5),n.lineTo(-7,-14-o*2),n.lineTo(27,-7),n.lineTo(10,11),n.lineTo(-21,16),n.fill()):(n.fillStyle=["#b7e1cd","#eadfb7","#7ca89c"][o],o===0?(n.strokeStyle=n.fillStyle,n.lineWidth=7,n.strokeRect(-19,-19,38,38)):(n.fillRect(-17,-17,34,34),o===2&&n.clearRect(2,-17,15,13)));n.restore()}let s=new vi(t);return s.colorSpace=Ot,s}function vy(r,e,t,n,i){let s=r==="3d",o=r==="apps",a=r==="ads",l=s?49:o?30:36,c=new nn,u=[],h=[],f=[],d=[],p=[],_=271+r.charCodeAt(0),m=()=>(_=Math.imul(1664525,_)+1013904223>>>0,_/4294967296);for(let b=0;b<l;b++){let T=b%3!==0,x=b%5<3,S=x?.44+m()*.27:(T?.39:.27)+m()*.2,R=i(T,S),A=Ft.smoothstep(S,.4,.81),D=s?Math.min(.94,Math.max(.03,A*1.55-.09)):.25+.54*m(),L=x?e*(D-.5):R.x-e/2,U=(m()-(a&&x?.27:.46))*t*(x&&!s?.6:.92);u.push(L,U,n+(x?.014:R.z+.009));let C=Math.sign(L)||1;h.push(C*e*(x?.08+.23*m():.22+.52*m()),t*((s?.22:.04)+.45*m()),.065+m()*.19),f.push(e*(.03+b%6*.07),t*(.27+Math.floor(b/6)*.048),n+.15),d.push(S,(s?.37:.29)+m()*.13);let B=(s?.038:.031)+m()**2*(s?.032:.027);p.push(B,m()*Math.PI*2,b%3,m())}for(let[b,T,x]of[["position",u,3],["drift",h,3],["socket",f,3],["life",d,2],["style",p,4]])c.setAttribute(b,new bt(T,x));let g=fA(r),y={atlas:{value:g},time:{value:0},snowTime:{value:0},focal:{value:1},dpr:{value:1},snow:{value:Number(s)},pixels:{value:Number(o)},foil:{value:Number(a)}},M=new Si({uniforms:y,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`
      attribute vec3 drift, socket;
      attribute vec2 life;
      attribute vec4 style;
      uniform float time, snowTime, focal, dpr, snow, pixels, foil;
      varying float alpha, angle, tile, glint;
      void main() {
        float age = clamp((time - life.x) / life.y, 0., 1.);
        if (snowTime > 0.) age = fract(max(0., (time + snowTime - life.x) / life.y));
        float arc = sin(3.14159 * age);
        vec3 p = position + drift * (age * (1.65 - .65 * age));
        p.x += sin(age * 5. + style.y) * arc * (.035 + snow * .06);
        p.y -= age * age * (.18 + snow * .42);
        p.z += .12 * arc;
        float snap = pixels * smoothstep(.36, .76, age);
        p = mix(p, socket, snap);
        angle = (style.y + age * (style.w - .5) * (3. + foil * 8.)) * (1. - snap);
        tile = style.z;
        glint = .75 + .25 * cos(style.y + age * (2. + foil * 8.));
        alpha = smoothstep(0., .17, age) * (1. - smoothstep(.68, 1., age));
        vec4 view = modelViewMatrix * vec4(p, 1.);
        gl_Position = projectionMatrix * view;
        gl_PointSize = dpr * clamp(style.x * focal / max(.09, -view.z), 5., 23.);
      }`,fragmentShader:`
      uniform sampler2D atlas;
      varying float alpha, angle, tile, glint;
      void main() {
        vec2 uv = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * (gl_PointCoord - .5) + .5;
        if (min(uv.x,uv.y) < 0. || max(uv.x,uv.y) > 1.) discard;
        vec4 ink = texture2D(atlas, vec2((tile + uv.x) / 3., uv.y));
        if (ink.a * alpha < .015) discard;
        gl_FragColor = vec4(ink.rgb * glint, ink.a * alpha * .94);
        #include <colorspace_fragment>
      }`}),v=new $r(c,M);return v.frustumCulled=!1,{points:v,update(b,T,x,S){y.time.value=b,y.snowTime.value=S,y.focal.value=T,y.dpr.value=x},dispose(){c.dispose(),M.dispose(),g.dispose()}}}var{smoothstep:Zm,smootherstep:Mf,lerp:Ym}=Ft,Uo=32,Sy=(r,e)=>r?Zm(e,.34,.68):Zm(e,.24,.56),My=r=>.98*Math.sin(Math.PI*r);function by(r,e,t,n){let i=0,s=0,o=a=>e+t*(.32+.84*Math.sin(Math.PI*a)-a);for(let a=0;a<=Uo;a++){if(a){let l=o((a-.5)/Uo);i+=Math.cos(l)*r/Uo,s+=Math.sin(l)*r/Uo}n?.(a,i,s,o(a/Uo))}return{x:i,z:s}}function Km(r,e,t){let n=new Zi(r,e,Uo,1),i=n.attributes.position,s=n.attributes.normal;i.setUsage(ff),s.setUsage(ff);let o=new gt(n,t);o.frustumCulled=!1;function a(l,c){by(r,l,c,(u,h,f,d)=>{for(let p=0;p<2;p++){let _=u+p*(Uo+1);i.setXYZ(_,h,(.5-p)*e,f),s.setXYZ(_,-Math.sin(d),0,Math.cos(d))}}),i.needsUpdate=s.needsUpdate=!0}return{mesh:o,bend:a,dispose:()=>n.dispose()}}function Ty({renderer:r,scene:e,camera:t,container:n,book:i,host:s}){let o=r.domElement,a=document.createElement("canvas");a.className="folio-snapshot",a.width=o.width,a.height=o.height,a.setAttribute("aria-hidden","true"),i.body.visible=!1,r.render(e,t),a.getContext("2d").drawImage(o,0,0),n.append(a);let l=new lr;l.environment=e.environment,l.environmentIntensity=e.environmentIntensity,l.environmentRotation.copy(e.environmentRotation);let c=new Kt(40,1,.025,50),u=i.body.clone(!0);u.visible=!0,l.add(u);let h=new qe().multiplyMatrices(t.matrixWorldInverse,i.body.matrixWorld),f=new z,d=new vn,p=new z;h.decompose(f,d,p);let _=new ci(16772050,1.85);_.position.set(-3,4,5);let m=new ci(14146033,.85);m.position.set(3,1,4),l.add(_,m);let g=yy(i.key),y=new Sn({map:g.lining,roughness:.9,side:Un}),M=new Zn({map:g.face,toneMapped:!1}),v,b=new et(1,1),T={value:1},x={value:0};i.key==="3d"&&(v=new an(Cc()),v.colorSpace=Ot,M.onBeforeCompile=oe=>{Object.assign(oe.uniforms,{iceFrame:{value:v},screenSize:{value:b},iceAspect:T,iceMix:x}),oe.fragmentShader=`uniform sampler2D iceFrame; uniform vec2 screenSize; uniform float iceAspect,iceMix;
`+oe.fragmentShader,oe.fragmentShader=oe.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        vec2 uvScreen=gl_FragCoord.xy/screenSize;
        float ratio=screenSize.x/(screenSize.y*iceAspect);
        vec2 uvPhoto=(uvScreen-.5)*vec2(min(1.,ratio),min(1.,1./ratio))+.5;
        diffuseColor.rgb=mix(diffuseColor.rgb,texture2D(iceFrame,uvPhoto).rgb,iceMix);`)});let S=new Sn({color:15656400,roughness:.91,side:Un}),{width:R,height:A,depth:D}=i,L=R*.95,U=A*.97,C=Km(L,U,y),B=Km(L,U,y),k=Km(L,U,S),N=new gt(new Zi(L,U),M);N.position.set(.008,0,D*.51+7e-4),u.add(N);for(let[oe,Re]of[k,B,C].entries())Re.mesh.position.set(N.position.x-L/2,0,D*.51+.002+oe*.0025),u.add(Re.mesh);let Z=vy(i.key,L,U,N.position.z,(oe,Re)=>{let ee=Sy(oe,Re);return by(L,2.96*ee,My(ee))});Z.points.position.x=N.position.x,u.add(Z.points),u.traverse(oe=>{oe.isMesh&&(oe.castShadow=!1,oe.receiveShadow=!1)});let G=r.shadowMap.enabled,P=r.getPixelRatio();r.shadowMap.enabled=!1,s.append(o);let J=n.getBoundingClientRect(),le=J.height/(2*Math.tan(Ft.degToRad(t.fov)/2)),be=0,X=0,ce=new z,_e=new vn,Te=new z,de=new vn().setFromEuler(new Ki(-.07,-.1,.024));function ae(oe,Re=0){let ee=s.clientWidth,pe=s.clientHeight;if(ee!==be||pe!==X){be=ee,X=pe;let Je=Math.min(P,Math.max(1,Math.sqrt(24e5/(be*X))));r.getPixelRatio()!==Je&&r.setPixelRatio(Je),r.setSize(be,X,!1)}let De=Mf(oe,0,.52),Fe=Mf(oe,.59,.91);c.aspect=be/X,c.fov=Ft.radToDeg(2*Math.atan(X/(2*le))),c.updateProjectionMatrix(),c.projectionMatrix.elements[8]=(1-2*(J.left+J.width/2)/be)*(1-De),c.projectionMatrix.elements[9]=(2*(J.top+J.height/2)/X-1)*(1-De);let Y=Math.min(be*.8/(2*R),X*.67/A),Qe=le/Y,Bt=le/Math.max(be/L,X/U)*.91+N.position.z;ce.set(Ym(R*.43,0,Fe),Ym(.015,0,Fe),-Ym(Qe,Bt,Fe)),u.position.lerpVectors(f,ce,De),u.quaternion.slerpQuaternions(d,de,De).slerp(_e,Fe),u.scale.copy(p);let pt=2.98*Mf(oe,.1,.51);i.hinge.value=pt,u.updateMatrixWorld(!0),N.visible=oe>.13,C.mesh.visible=oe>.19,C.bend(pt,0);for(let Je of[B,k]){let Lt=Sy(Je===k,oe);Je.mesh.visible=oe>.16&&Lt<.999,Je.bend(Lt*2.96,My(Lt))}return Z.update(oe,le,r.getPixelRatio(),Re),g.update(Zm(oe,.4,.81)),v?.image.naturalWidth&&(v.version===0&&(v.needsUpdate=!0),r.getDrawingBufferSize(b),T.value=v.image.naturalWidth/v.image.naturalHeight,x.value=Mf(oe,.66,.87)),r.render(l,c),Te.set(-R*.32,-A*.17,N.position.z+.008).applyMatrix4(u.matrixWorld).project(c),{x:(1+Te.x)*be/2,y:(1-Te.y)*X/2,scale:Math.min(1.25,le*R/Math.max(.1,-u.position.z)/440)}}function Ne(){i.hinge.value=0,i.body.visible=!0,r.shadowMap.enabled=G,r.shadowMap.needsUpdate=!0,r.getPixelRatio()!==P&&r.setPixelRatio(P),n.append(o),a.remove();for(let oe of[B,k,C])oe.dispose();N.geometry.dispose(),y.dispose(),M.dispose(),S.dispose(),g.dispose(),v?.dispose(),Z.dispose()}return{frame:ae,dispose:Ne}}async function wy(r,e){let t=document.querySelector("#scene"),n=document.createElement("canvas"),i=n.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!i)return t.dataset.renderer="fallback",null;t.classList.toggle("archive-loading",!r.paused);let s=new xf,[o,a,l,c]=await Promise.all([s.loadAsync("assets/archive/cabinet.glb"),s.loadAsync("assets/archive/volumes.glb?v=2"),new Sf().loadAsync("assets/archive/studio.hdr"),new To().loadAsync("assets/archive/binding-grain.webp")]),u=new qa({canvas:n,context:i,antialias:!0,alpha:!0});u.setPixelRatio(Math.min(devicePixelRatio,2)),u.setClearColor(0,0),u.toneMapping=Po,u.toneMappingExposure=1.03,u.shadowMap.enabled=!0,u.shadowMap.type=Ao,t.append(n),n.setAttribute("aria-hidden","true");let h=new lr,f=new Kt(29,1,.1,36);f.position.set(0,.64,10.5),f.lookAt(0,-.06,0);let d=new Bs(u),p=d.fromEquirectangular(l);h.environment=p.texture,h.environmentIntensity=.76,h.environmentRotation.y=-.65,l.dispose(),d.dispose();let _=new ci(16771799,2.1);_.position.set(-3.8,6,4.2),_.castShadow=!0,_.shadow.mapSize.setScalar(t.clientWidth>600?1024:512),Object.assign(_.shadow.camera,{left:-3.3,right:3.3,top:3.3,bottom:-3.3,near:.5,far:16}),_.shadow.camera.updateProjectionMatrix(),_.shadow.bias=-45e-5,_.shadow.normalBias=.018,_.shadow.radius=2.8;let m=new ci(14211578,.79);m.position.set(4,1.5,2.6);let g=new ci(16764570,1.45);g.position.set(2,3,-3),h.add(_,m,g);let y=new Zt;h.add(y);let M=a.scene.children,v=Math.min(8,u.capabilities.getMaxAnisotropy());c.anisotropy=v,c.wrapS=c.wrapT=Yi,a.scene.traverse(ee=>{if(ee.isMesh)for(let pe of[ee.material.map,ee.material.normalMap,ee.material.roughnessMap])pe&&(pe.anisotropy=v)});let b=M[0].children.find(ee=>ee.material?.name.endsWith("_paper"))?.material;b&&(b.color.setHex(14601641),b.onBeforeCompile=ee=>{ee.vertexShader=`varying vec3 paperPoint;
`+ee.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
paperPoint=position;`),ee.fragmentShader=`varying vec3 paperPoint;
`+ee.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float layer = paperPoint.x * 9500. + .25 * sin(paperPoint.z * 148. + paperPoint.y * 41.);
        float fiber = .5 + .5*cos(layer);
        float lod = 1.-smoothstep(.6,3.,fwidth(layer));
        diffuseColor.rgb *= .93 - .19*fiber*lod - .045*cos(paperPoint.x*830.);
      `)});let T=dy(o.scene,M);y.add(T.object);let x=new is(16763532,.42,2.9,2);x.position.set(0,.24,.94),y.add(x);let S=_y(y,f,r,t,M,c),R=py();y.add(R.points),y.traverse(ee=>{ee.isMesh&&(ee.castShadow=!0,ee.receiveShadow=!0)});let A=document.createElement("canvas");A.width=A.height=128;let D=A.getContext("2d"),L=D.createRadialGradient(64,64,2,64,64,63);L.addColorStop(0,"#000b"),L.addColorStop(.42,"#0008"),L.addColorStop(1,"#0000"),D.fillStyle=L,D.fillRect(0,0,128,128);let U=new vi(A),C=new Zi(4.5,2.2),B=new Zn({map:U,transparent:!0,depthWrite:!1}),k=new gt(C,B);k.position.set(0,-1.795,0),k.rotation.x=-Math.PI/2,h.add(k);let N=!1,Z=!1,G=0,P=r.time,J=-1,le=0,be=-10,X=0,ce=0,_e=0,Te=null;function de(){Z||N||(u.render(h,f),S.project(),r.frames++)}function ae(ee){if(Z||N||((r.tx!==X||r.ty!==ce||r.dragRotation!==_e||r.heroFocus!==Te)&&(X=r.tx,ce=r.ty,_e=r.dragRotation,Te=r.heroFocus,be=r.time),le=Math.max(le,r.paused?5.7:r.time-P),ee>0&&le>5.65&&r.time-be>2.3&&r.time-J<1/30-.001))return;J=r.time;let pe=1-Math.exp(-ee*2.8);r.x=Ft.lerp(r.x,r.tx,pe),r.y=Ft.lerp(r.y,r.ty,pe),G=Ft.lerp(G,r.dragRotation,pe),y.rotation.set(.025-r.y*.023,-.2+G+r.x*.045-(1-e.arrival)*.07,-.008),y.position.set(0,0,0),T.update(le,r.paused),S.update(le,ee),R.update(r.paused?0:r.time,u.getPixelRatio()*Math.min(1.18,Math.max(.79,t.clientWidth/690))),de()}function Ne(){if(N||document.body.classList.contains("ice-open"))return;let ee=t.clientWidth,pe=t.clientHeight;if(!ee||!pe)return;u.setSize(ee,pe,!1);let De=ee/pe,Fe=Math.max(4.3,6.35/De);f.aspect=De,f.fov=Ft.radToDeg(2*Math.atan(Fe/(2*f.position.z))),f.updateProjectionMatrix(),ae(0)}function oe(){let ee=new pn().setFromObject(T.object),pe=new z,De=1/0,Fe=-1/0,Y=-1/0,Qe=1/0;for(let Bt of[ee.min.x,ee.max.x])for(let pt of[ee.min.y,ee.max.y])for(let Je of[ee.min.z,ee.max.z])pe.set(Bt,pt,Je).project(f),De=Math.min(De,pe.x),Fe=Math.max(Fe,pe.x),Y=Math.max(Y,pe.y),Qe=Math.min(Qe,pe.y);return{left:De,right:Fe,top:Y,bottom:Qe}}n.addEventListener("webglcontextlost",ee=>{ee.preventDefault(),Z=!0,t.classList.remove("ready"),t.dataset.renderer="fallback"}),n.addEventListener("webglcontextrestored",()=>{Z=!1,Ne(),t.classList.add("ready"),t.dataset.renderer="webgl"});let Re=new ResizeObserver(Ne);Re.observe(t),t.addEventListener("pointerdown",ee=>{r.paused||ee.pointerType==="touch"||ee.target.closest("a")||(r.dragging=!0,r.dragStart=ee.clientX,t.setPointerCapture(ee.pointerId))}),t.addEventListener("pointermove",ee=>{r.dragging&&(r.dragRotation=Ft.clamp(r.dragRotation+(ee.clientX-r.dragStart)*.0015,-.17,.22),r.dragStart=ee.clientX)});for(let ee of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(ee,()=>{r.dragging=!1});return Ne(),t.classList.remove("archive-loading"),t.classList.add("ready"),t.dataset.renderer="webgl",{resize:Ne,render:de,frame:ae,bounds:oe,documentStatus:S.status,openFolio(ee,pe){let De=S.find(ee);if(N||Z||!De||De.progress<.5)return null;N=!0;try{let Fe=Ty({renderer:u,scene:h,camera:f,container:t,book:De,host:pe});return{frame:Fe.frame,dispose(){Fe.dispose(),N=!1,Ne()}}}catch(Fe){throw De.body.visible=!0,De.hinge.value=0,u.shadowMap.enabled=!0,t.append(n),t.querySelector(".folio-snapshot")?.remove(),N=!1,Ne(),Fe}},dispose(){Re.disconnect(),S.dispose(),R.dispose(),c.dispose(),_.shadow.dispose();let ee=new Set,pe=new Set,De=new Set;for(let Fe of[o.scene,a.scene])Fe.traverse(Y=>{Y.isMesh&&(pe.add(Y.geometry),ee.add(Y.material))});for(let Fe of ee){for(let Y of Object.values(Fe))Y?.isTexture&&De.add(Y);Fe.dispose()}for(let Fe of pe)Fe.dispose();for(let Fe of De)Fe.dispose();U.dispose(),C.dispose(),B.dispose(),p.dispose(),u.dispose()}}}var bf=class extends lr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ui;e.deleteAttribute("uv");let t=new Sn({side:On}),n=new Sn,i=new is(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new gt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new vo(e,n,6),a=new Et;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new gt(e,Ja(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new gt(e,Ja(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new gt(e,Ja(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new gt(e,Ja(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new gt(e,Ja(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new gt(e,Ja(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ja(r){return new oc({color:0,emissive:16777215,emissiveIntensity:r})}var Pc=new z;function ji(r,e,t,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Pc.copy(e),Pc[n]=0,Pc.normalize();let c=.5*o/(o+a),u=1-Pc.angleTo(r)/l;return Math.sign(Pc[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Fo=class r extends Ui{constructor(e=1,t=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new z,c=new z,u=new z(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,_=new z,m=.5/o;for(let g=0,y=0;g<h.length;g+=3,y+=2)switch(l.fromArray(h,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[g+0]=u.x*Math.sign(l.x)+c.x*s,h[g+1]=u.y*Math.sign(l.y)+c.y*s,h[g+2]=u.z*Math.sign(l.z)+c.z*s,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[y+0]=ji(_,c,"z","y",s,n),d[y+1]=1-ji(_,c,"y","z",s,t);break;case 1:_.set(-1,0,0),d[y+0]=1-ji(_,c,"z","y",s,n),d[y+1]=1-ji(_,c,"y","z",s,t);break;case 2:_.set(0,1,0),d[y+0]=1-ji(_,c,"x","z",s,e),d[y+1]=ji(_,c,"z","x",s,n);break;case 3:_.set(0,-1,0),d[y+0]=1-ji(_,c,"x","z",s,e),d[y+1]=1-ji(_,c,"z","x",s,n);break;case 4:_.set(0,0,1),d[y+0]=1-ji(_,c,"x","y",s,e),d[y+1]=1-ji(_,c,"y","x",s,t);break;case 5:_.set(0,0,-1),d[y+0]=ji(_,c,"x","y",s,e),d[y+1]=1-ji(_,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};function Ey(){let r=document.querySelector("#study-scene"),e=document.createElement("canvas"),t=e.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"low-power"});if(!t)return r.dataset.renderer="fallback",null;let n=new qa({canvas:e,context:t,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(2.5,Math.max(1.72,devicePixelRatio))),n.setClearColor(0,0),n.toneMapping=Po,n.toneMappingExposure=.92,r.append(e),e.setAttribute("aria-hidden","true");let i=new lr,s=new Kt(33,1,.1,30);s.position.set(0,.8,6.7),s.lookAt(0,0,0);let o=new bf,a=new Bs(n),l=a.fromScene(o,.04);i.environment=l.texture,i.environmentIntensity=.65,o.dispose(),a.dispose();let c=new ci(16771803,3.5);c.position.set(-3,5,5),i.add(c,new uc(14210540,1578269,.85));let u=new ci(12694747,4.5);u.position.set(4,2,-1),i.add(u);let h=new Zt;i.add(h);let f=new Nn({color:7828605,metalness:.88,roughness:.23,clearcoat:.35}),d=new Sn({color:3420216,roughness:.55,metalness:.35}),p=new Sn({color:2105380,roughness:.85}),_=document.createElement("canvas");_.width=_.height=64;let m=_.getContext("2d");m.fillStyle="#414047",m.fillRect(0,0,64,64);for(let ae=0;ae<64;ae+=8)for(let Ne=0;Ne<64;Ne+=8)m.fillStyle="#222126",m.fillRect(Ne,ae,3,4),m.fillStyle="#64616a",m.fillRect(Ne+4,ae+4,2,3);let g=new vi(_);g.wrapS=g.wrapT=Yi,g.repeat.set(7,11);let y=new Sn({color:5591387,map:g,bumpMap:g,bumpScale:.025,roughness:.92});function M(ae,Ne,oe=0,Re=0,ee=0){let pe=new gt(ae,Ne);return pe.position.set(oe,Re,ee),h.add(pe),pe}let v=[];function b(ae,Ne,oe,Re,ee=0,pe="z"){return v.push({object:ae,home:ae.position.clone(),delta:Ne,start:oe,end:Re,turn:ee,axis:pe,angle:ae.rotation[pe]}),ae}let T=(ae,Ne,oe)=>new z(ae,Ne,oe),x=M(new Fo(1.64,2.56,1.08,6,.18),f);b(x,T(-.14,0,-.34),.03,.35);let S=M(new Fo(1.48,2.36,.13,5,.14),d,0,0,.51);b(S,T(0,0,.46),.18,.42);let R=new Sn({color:2434089,roughness:.71,metalness:.2,side:Un}),A=new Sn({color:8880522,roughness:.32,metalness:.85});function D(ae,Ne,oe,Re,ee,pe){let De=new gt(ae,Ne);return De.position.set(Re,ee,pe),oe.add(De),De}for(let[ae,Ne,oe]of[[.52,.27,.22],[-.3,.45,.27]]){let Re=new Zt;Re.position.set(0,ae,.568),h.add(Re);let ee=D(new ic(Ne,.15,48,1,!0),R,Re,0,0,-.055);ee.rotation.x=-Math.PI/2,D(new Ua(Ne,.035,8,48),p,Re,0,0,.008);let pe=D(new sc(Ne*.29,24,12),d,Re,0,0,-.022);pe.scale.z=.35,b(Re,T(0,.03,.85),oe,oe+.24)}for(let[ae,[Ne,oe]]of[[-.58,.96],[.58,.96],[-.58,-.96],[.58,-.96]].entries()){let Re=new Zt;Re.position.set(Ne,oe,.567),h.add(Re);let ee=D(new Os(.04,.035,.024,14),A,Re,0,0,0);ee.rotation.x=Math.PI/2,D(new Ui(.043,.009,.004),p,Re,0,0,.013),b(Re,T(0,0,1.18),.35+ae*.025,.55+ae*.02,Math.PI*2)}let L=M(new Fo(1.36,2.24,.06,4,.12),y,0,0,.607);D(new Fo(.18,.025,.012,2,.006),A,L,0,-.88,.034),b(L,T(.04,.07,1.66),.47,.72,.055);let U=new Zt;U.position.set(.44,1.315,.08),h.add(U),D(new Os(.22,.22,.105,56),f,U,0,0,0);let C=D(new Ua(.19,.009,8,48),d,U,0,.056,0);C.rotation.x=Math.PI/2,D(new Ui(.025,.007,.08),p,U,0,.057,.12),b(U,T(0,.61,0),.55,.77,1.1,"y");for(let ae of[-.52,.52]){let Ne=M(new Os(.12,.12,.07,24),p,ae,-1.305,.19);b(Ne,T(0,-.24,0),.19,.43)}let B=new Ns({color:12955589,transparent:!0,opacity:.75,depthWrite:!1});for(let ae of[x,S,L])ae.add(new Mo(new rc(ae.geometry,16),B));let k=[f,d,p,y,R,A];for(let ae of k)ae.transparent=!0;let N=document.createElement("canvas");N.width=N.height=128;let Z=N.getContext("2d"),G=Z.createRadialGradient(64,64,2,64,64,64);G.addColorStop(0,"#21152560"),G.addColorStop(1,"#21152500"),Z.fillStyle=G,Z.fillRect(0,0,128,128);let P=new vi(N),J=new gt(new Zi(4.2,3),new Zn({map:P,transparent:!0,depthWrite:!1}));J.rotation.x=-Math.PI/2,J.position.y=-1.34,i.add(J);let le=!1,be=-1,X=0,ce=0;function _e(ae=X,Ne=!1){if(X=ae,le||!Ne&&Math.abs(be-ae)<5e-5)return;be=ae;let oe=(De,Fe)=>Ft.smoothstep(ae,De,Fe),Re=oe(.03,.24);B.opacity=(1-oe(.12,.41))*.72;for(let De of k)De.opacity=Re,De.depthWrite=Re>.5;for(let De of v){let Fe=1-oe(De.start,De.end);De.object.position.copy(De.home).addScaledVector(De.delta,Fe),De.object.rotation[De.axis]=De.angle+De.turn*Fe}J.material.opacity=.8*Re;let ee=oe(.48,.93);h.rotation.set(.07-.045*ee,-1.02+.59*ee,-.025+.014*ee);let pe=oe(.54,.91);c.position.set(-3.4+pe*2.1,5,4.6),s.position.set(0,1.08-.34*ee,8-1.3*ee),s.lookAt(0,.04,.46*(1-ee)),n.render(i,s),ce++}function Te(){if(document.body.classList.contains("ice-open"))return;let ae=r.clientWidth,Ne=r.clientHeight;!ae||!Ne||(n.setSize(ae,Ne,!1),s.aspect=ae/Ne,s.updateProjectionMatrix(),_e(X,!0))}e.addEventListener("webglcontextlost",ae=>{ae.preventDefault(),le=!0,r.classList.remove("ready"),r.dataset.renderer="fallback"}),e.addEventListener("webglcontextrestored",()=>{le=!1,r.classList.add("ready"),r.dataset.renderer="webgl",_e(X,!0)});let de=new ResizeObserver(Te);return de.observe(r),r.classList.add("ready"),r.dataset.renderer="webgl",Te(),{frame:_e,resize:Te,get frames(){return ce},dispose(){de.disconnect(),h.traverse(ae=>ae.geometry?.dispose());for(let ae of[...k,B])ae.dispose();J.geometry.dispose(),J.material.dispose(),P.dispose(),g.dispose(),l.dispose(),n.dispose()}}}function Ay(r){if(!document.querySelector("base[href]")){let M=document.createElement("base");M.href=location.href.split("#")[0],document.head.prepend(M)}let e=r.href,t=document.title,n=matchMedia("(hover: hover) and (pointer: fine)"),i,s,o,a=!1,l=!1,c,u,h=[];function f(M){s?.contentWindow?.postMessage({type:"portfolio-ice-active",active:M},location.origin)}function d(){clearTimeout(c),clearTimeout(u),i?.remove(),i=s=null,o=!1,l=!1}function p(){a&&history.state?.portfolioIce&&history.back()}function _(){if(i)return;Cc(),i=document.createElement("section"),i.className="ice-portal",i.inert=!0,i.setAttribute("aria-label","\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u0441\u0446\u0435\u043D\u0430"),i.innerHTML=`<div class="ice-wait-snow" aria-hidden="true"></div>
      <button class="ice-return" type="button">\u2190 \u041D\u0430\u0437\u0430\u0434</button>
      <p class="ice-status" role="status">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F 3D-\u0441\u0446\u0435\u043D\u0430</p>
      <a class="ice-retry">\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0446\u0435\u043D\u0443 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u2197</a>`;let M=i.querySelector(".ice-wait-snow");for(let v=0;v<18;v++){let b=document.createElement("i");b.style.left=v*37.17%100+"%",b.style.top=v*23.49%100+"%",b.style.setProperty("--delay",-(v*.41)+"s"),b.style.setProperty("--drift",(v%3-1)*25+8+"px"),M.append(b)}i.querySelector(".ice-return").addEventListener("click",p),i.querySelector(".ice-retry").href=e,s=document.createElement("iframe"),s.name="portfolio-ice",s.title="\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043B\u0435\u0434\u044F\u043D\u0430\u044F \u0441\u0446\u0435\u043D\u0430",s.tabIndex=-1,s.src=e,i.prepend(s),document.body.append(i),u=setTimeout(()=>{a||d()},9e4)}function m(){!a||!o||(clearTimeout(c),f(!0),i.classList.add("ice-ready"),s.tabIndex=0,s.focus({preventScroll:!0}))}window.addEventListener("message",M=>{M.origin!==location.origin||!s||M.source!==s.contentWindow||(M.data?.type==="portfolio-ice-ready"?(o=!0,a?m():f(!1)):M.data?.type==="portfolio-ice-back"?p():M.data?.type==="portfolio-ice-error"&&i.classList.add("ice-slow"))});function g(){_(),!a&&(a=!0,clearTimeout(u),h=[...document.querySelectorAll("body > header, body > main, body > nav, body > footer, body > .skip-link")].filter(M=>!M.inert),h.forEach(M=>{M.inert=!0}),document.body.classList.add("ice-open"),document.dispatchEvent(new Event("portfolio-view-change")),i.inert=!1,i.classList.add("ice-opened"),document.title="\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u0441\u0446\u0435\u043D\u0430 \xB7 3D",i.querySelector(".ice-return").focus({preventScroll:!0}),c=setTimeout(()=>i?.classList.add("ice-slow"),22e3),m())}function y(){a&&(h.forEach(M=>{M.inert=!1}),h=[],document.body.classList.remove("ice-open"),document.title=t,document.dispatchEvent(new Event("portfolio-view-change")),r.focus({preventScroll:!0}),a=!1,d())}window.addEventListener("popstate",()=>{history.state?.portfolioIce&&location.href===e?g():y()});for(let M of["pointerenter","focus","pointerdown"])r.addEventListener(M,_,{passive:!0});if(!n.matches){let M=new IntersectionObserver(v=>{v.some(b=>b.isIntersecting)&&(_(),M.disconnect())},{threshold:.1});M.observe(r.closest(".scene"))}return{prepare:_,get ready(){return o},preview(){!o||a||l||(l=!0,clearTimeout(u),i.classList.add("ice-preview"),f(!0))},cancelPreview(){a||!l||d()},enter(){a||history.pushState({portfolioIce:!0},"",e),g()}}}var Jm=(r,e,t)=>r+(e-r)*t;function Bo(r,e,t){let n=Math.max(0,Math.min(1,(r-e)/(t-e)));return n*n*(3-2*n)}function Ry(r,e,t){let n=Ay(r.find(s=>s.dataset.document==="3d")),i;for(let s of r)s.addEventListener("click",o=>{if(o.defaultPrevented||o.button!==0||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||s.target==="_blank")return;if(i){o.preventDefault();return}let a=s.hash?document.getElementById(s.hash.slice(1)):null,l=a?.querySelector("h3"),c=s.dataset.document==="3d";if(c&&(n.prepare(),t.matches)){o.preventDefault(),n.enter();return}if(t.matches||s.hash&&!l)return;let u=document.createElement("div");u.className="folio-transition",u.dataset.book=s.dataset.document,u.setAttribute("aria-hidden","true");function h(N){let Z=document.createElement("div");return Z.className="folio-"+N,u.append(Z),Z}let f=h("veil"),d=c&&h("ice-frame"),p=h("canvas"),_=l&&h("heading");document.body.append(u);let m;try{m=e(s.dataset.document,p),m&&m.frame(0)}catch(N){console.warn("Book transition unavailable",N),m?.dispose(),m=null}if(!m){u.remove(),c&&(o.preventDefault(),n.enter());return}o.preventDefault();let g,y,M,v=0,b,T,x=!1,S=!1,R=N=>N.preventDefault();u.addEventListener("wheel",R,{passive:!1});let A=N=>{if(N.key==="Escape"&&c&&!n.ready){N.preventDefault(),L(),s.focus({preventScroll:!0});return}N.key==="Escape"||N.key==="Tab"?(N.key==="Escape"&&N.preventDefault(),C()):[" ","PageUp","PageDown","ArrowDown","ArrowUp","Home","End"].includes(N.key)&&N.preventDefault()},D=()=>{document.hidden&&C()};function L(){if(i){cancelAnimationFrame(g),document.removeEventListener("keydown",A),document.removeEventListener("visibilitychange",D),window.removeEventListener("pagehide",L),window.removeEventListener("popstate",L),t.removeEventListener("change",C),y?.remove(),c&&n.cancelPreview(),l?.classList.remove("folio-title-held");try{m.dispose()}finally{u.remove(),i=!1}}}function U(){x||(x=!0,location.hash!==s.hash&&history.pushState(null,"",s.hash),a.classList.remove("arrival-pending","scroll-arrival"),a.focus({preventScroll:!0}),a.scrollIntoView({behavior:"instant",block:"start"}),l.classList.add("folio-title-held"),b=l.getBoundingClientRect(),_.style.color=getComputedStyle(l).color)}function C(){if(!(S||!i)){if(a){U(),L();return}if(S=!0,cancelAnimationFrame(g),!c){L(),window.location.assign(s.href);return}d.style.opacity=1,p.style.opacity=0,f.style.opacity=1,n.enter(),L()}}if(_){_.textContent=l.textContent;let N=getComputedStyle(l);for(let Z of["fontFamily","fontSize","fontStyle","fontWeight","lineHeight","letterSpacing","textWrap","textTransform"])_.style[Z]=N[Z];_.style.width=l.getBoundingClientRect().width+"px"}i=!0,document.addEventListener("keydown",A),document.addEventListener("visibilitychange",D),window.addEventListener("popstate",L),window.addEventListener("pagehide",L),p.addEventListener("webglcontextlost",C,{capture:!0,once:!0}),t.addEventListener("change",C);let B=performance.now();function k(N){let Z=Math.max(0,(N-B)/1490),G=.64;if(c&&Z>=G&&!n.ready){if(M??=N,v=Z-G,!y&&N-M>1100&&(y=document.createElement("div"),y.className="folio-wait-controls",y.innerHTML='<span role="status">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F 3D-\u0441\u0446\u0435\u043D\u0430</span><button type="button">\u041D\u0430\u0437\u0430\u0434</button>',y.querySelector("button").addEventListener("click",()=>{L(),s.focus({preventScroll:!0})}),document.body.append(y)),N-M>15e3){C();return}}else y&&(y.remove(),y=null);let P=Math.min(1,Math.max(0,Z-v));try{if(P===1){C();return}let J=m.frame(P,v*.4);c&&P>=.72&&n.ready&&n.preview();let le=a?Bo(P,.81,1):c?Bo(P,.72,.96):0;if(f.style.opacity=Bo(P,.03,.64)*(1-le),p.style.opacity=1-Bo(P,.76,.97),d&&(d.style.opacity=n.ready?0:Bo(P,.72,.94)),_){_.style.opacity=Bo(P,.54,.73),P>=.76&&!x&&(T=J,U());let be=Bo(P,.76,.98),X=x?Jm(T.x,b.left,be):J.x,ce=x?Jm(T.y,b.top,be):J.y,_e=x?Jm(T.scale,1,be):J.scale;_.style.transform="translate3d("+X+"px,"+ce+"px,0) scale("+_e+")"}g=requestAnimationFrame(k)}catch(J){console.warn("Finishing book navigation",J),C()}}g=requestAnimationFrame(k)})}Yt.registerPlugin(Ze);var Pe=(r,e=document)=>e.querySelector(r),Nt=(r,e=document)=>[...e.querySelectorAll(r)],ng=matchMedia("(prefers-reduced-motion: reduce)"),dA=matchMedia("(min-width: 901px)"),Rf={get(r){try{return localStorage.getItem(r)}catch{return null}},set(r,e){try{localStorage.setItem(r,e)}catch{}},remove(r){try{localStorage.removeItem(r)}catch{}}},Gt={concept:"hybrid",paused:ng.matches,time:0,scroll:0,x:0,y:0,tx:0,ty:0,dragging:!1,dragRotation:0,dragStart:0,frames:0,heroVisible:!0};Gt.heroFocus=null;var Tf={arrival:1,beat:0},Hs={value:0},Gs=null,Cf=!1,Qi=null,jm=!1,zs=null,Ly=!1,el=[],Qm=new Set,ig=innerWidth<=760,Pf=-1,wf={count:0},eg=[["const ","speaker"," = new Mesh("],["  body.geometry,"],["  brushedAluminium"],[");"],[""],["scene",".add","(speaker);"],["camera",".lookAt","(speaker.position);"],["renderer",".render","(scene, camera);"]],Cy=eg.flat().join("").length+eg.length-1,Dy=9.86,Ny=2.2,Oy=6.8,$a=Dy+.77*Oy/Ny,ko=[{at:0,name:"\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430",caption:"\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u043D\u0443\u0436\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430. \u0412 \u0447\u0430\u0442\u0435 \u0443\u0442\u043E\u0447\u043D\u044F\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0447\u0435\u0440\u0442\u0451\u0436."},{at:4.2,name:"\u041F\u043B\u0430\u043D \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",caption:"\u041D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u043A\u0430\u0436\u0435\u043C \u0441\u0430\u043C\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0443. \u041D\u0438\u0436\u0435 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438."},{at:7.15,name:"\u041F\u0438\u0448\u0443 \u043A\u043E\u0434",caption:"\u0417\u0430\u0434\u0430\u044E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043A\u043E\u0440\u043F\u0443\u0441\u0430, \u0441\u0442\u0430\u0432\u043B\u044E \u043A\u0430\u043C\u0435\u0440\u0443 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0432 \u0441\u0446\u0435\u043D\u0443."},{at:10.1,name:"\u0421\u0431\u043E\u0440\u043A\u0430",caption:"\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0438, \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E \u0438\u0445 \u0440\u0435\u0448\u0451\u0442\u043A\u043E\u0439 \u0438 \u0441\u0442\u0430\u0432\u043B\u044E \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438."},{at:$a+1.42,name:"\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",caption:"\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u0441\u0430\u0439\u0442 SONA. \u0422\u0430 \u0436\u0435 \u043A\u043E\u043B\u043E\u043D\u043A\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430, \u0442\u0435\u043F\u0435\u0440\u044C \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435."}],tg=[],Py=-1;function pA(){let r=Pe(".code-content"),e=0;eg.forEach((t,n)=>{n&&(r.append(document.createTextNode("")),tg.push({node:r.lastChild,value:`
`,offset:e++})),t.forEach((i,s)=>{let o=document.createElement("span");o.className=n===0&&s===0?"syntax-keyword":s===1?"syntax-method":"syntax-base",r.append(o),tg.push({node:o,value:i,offset:e}),e+=i.length})})}pA();var Rr=null,Ef=null,ja=null,Uy=null,Ic=!1;function rg(){return!Gt.paused&&!document.hidden&&!Ic&&!document.body.classList.contains("ice-open")&&!Pe("dialog[open]")}function er(){let r=!rg();ja&&ja.progress()<1&&ja.paused(r),Qi?.paused(r||!Cf),zs?.paused(r||!Ly),el.forEach((e,t)=>e.paused(r||!Qm.has(t)))}function Lc(r=!1,e=!1){let t=Qi?.time()||0,n=el.map(s=>s.time()),i=e?0:zs?.time()||0;Ef?.revert(),Ef=null,ja=null,Qi=null,zs=null,el=[],Tf.arrival=1,Tf.beat=0,Hs.value=0,Gs?.frame(0,!0),Ef=Yt.context(()=>{if(ig=innerWidth<=760,jm&&(Fy(),Qi.time(Gt.paused?Qi.duration():t).pause(),Gs?.frame(Hs.value,!0)),!Gt.paused){r&&(ja=Yt.timeline({defaults:{ease:"power3.out"}}),ja.from(".scene",{opacity:.45,duration:.55},.05).from(Tf,{arrival:0,duration:2.8,ease:"sine.out"},.15).from(".hybrid-intro",{y:24,opacity:0,duration:1},.7).from(".hybrid-actions",{y:18,opacity:0,duration:.9},.85)),zs=Yt.timeline({paused:!0}),Nt(".digit-strip").forEach((s,o)=>{let a=Number(s.dataset.end);zs.fromTo(s,{y:0,yPercent:0},{y:0,yPercent:-a/(a+1)*100,duration:[3.4,3.9,3.65][o],ease:"power2.inOut"},[0,.12,.28][o])}),zs.fromTo(".project-total",{y:18},{y:0,duration:3.6,ease:"power2.out"},0).fromTo(".total-plus",{rotation:-10,y:6},{rotation:0,y:0,duration:3.5,ease:"power2.inOut"},.2).time(i).pause(),_A(n);for(let s of Nt(".service-item"))Yt.timeline({scrollTrigger:{trigger:s,start:"top 98%",end:"center 65%",scrub:.65}}).from(s,{"--rule-progress":.08,ease:"sine.out",duration:1},0).from(Pe(".service-art",s),{"--turn":"-46deg","--spread":"12px",y:10,duration:1},0);for(let s of Nt(".process-list li"))Yt.timeline({scrollTrigger:{trigger:s,start:"top 95%",end:"center 65%",scrub:.7}}).from(s,{"--step-progress":.02,duration:1},0).from(Pe(".step-number",s),{y:16,duration:1},0).from(Pe("h4",s),{x:11,duration:1},0)}}),er()}function mA(r){if(Gt.paused=r,r)for(let e of Nt(".scroll-arrival"))e.classList.remove("scroll-arrival");document.body.classList.toggle("motion-paused",r),Lc(!1,!r),Ze.refresh(),Rr?.frame(0)}for(let r of Nt("[data-document]")){let e=()=>{Gt.heroFocus=r.dataset.document,Rr?.frame(0)},t=()=>{Gt.heroFocus===r.dataset.document&&(Gt.heroFocus=null),Rr?.frame(0)};r.addEventListener("pointerenter",e),r.addEventListener("pointerleave",()=>{document.activeElement!==r&&t()}),r.addEventListener("focus",e),r.addEventListener("blur",t)}Ry(Nt("[data-document]"),(r,e)=>Rr?.openFolio(r,e),ng);function Iy(){let r=Qi?.time()||0,e=ko.findLastIndex(n=>r>=n.at);Pf!==e&&(Pf=e,Pe(".showcase-stage").dataset.phase=String(e),Pe("#story-heading").textContent=ko[e].name,Pe("#story-caption").textContent=ko[e].caption);let t=Math.floor(wf.count);if(t!==Py){for(let{node:n,value:i,offset:s}of tg){let o=i.slice(0,Math.max(0,t-s));n.textContent!==o&&(n.textContent=o)}Py=t}Gt.paused&&Gs?.frame(Hs.value,!0)}function gA(){let r=Pe(".film-scenes"),e=Pe(".drawing-flight"),t=Pe(".drawing-source"),n=Pe(".drawing-target");function i(a){let l=a.offsetWidth/2,c=a.offsetHeight/2;for(let u=a;u&&u!==r;u=u.offsetParent)l+=u.offsetLeft,c+=u.offsetTop;return{x:l,y:c}}function s(){let a=i(t),l=i(n);e.style.width=n.offsetWidth+"px",e.style.height=n.offsetHeight+"px",e.style.setProperty("--from-x",a.x+"px"),e.style.setProperty("--from-y",a.y+"px"),e.style.setProperty("--dx",l.x-a.x+"px"),e.style.setProperty("--dy",l.y-a.y+"px"),e.style.setProperty("--start-w",t.offsetWidth/Math.max(1,n.offsetWidth)),e.style.setProperty("--start-h",t.offsetHeight/Math.max(1,n.offsetHeight))}s();let o=new ResizeObserver(s);[r,t,n].forEach(a=>o.observe(a))}function Fy(){let[r,e,t,n]=Nt(".film-scene"),i=Yt.timeline({paused:!0,defaults:{ease:"sine.inOut"},onUpdate:Iy});Qi=i,Pf=-1,Yt.set([e,t,n],{autoAlpha:0,scale:.98,y:10}),Yt.set(r,{autoAlpha:1,scale:1,y:0}),Yt.set(".chat-bubble, .chat-typing, .system-preview, .assembly-drawing, .editor-preview, .drawing-target",{autoAlpha:0}),Yt.set(".drawing-flight",{autoAlpha:0,"--travel":0}),Yt.set(".plan-draw",{clipPath:"inset(0 100% 0 0)"}),Yt.set(".dimension-rule",{scaleX:0}),Yt.set(".model-panel",{xPercent:-51,scale:1.72}),Yt.set(".film-site",{scale:1.02}),wf.count=0,Hs.value=0;let[s,o,a]=Nt(".chat-bubble");function l(h,f){i.fromTo(h,{autoAlpha:0,y:9,scale:.975},{autoAlpha:1,y:0,scale:1,duration:.46,ease:"power2.out",immediateRender:!1},f)}function c(h,f,d){i.to(h,{autoAlpha:0,scale:1.018,y:-8,duration:.72},d-.45).to(f,{autoAlpha:1,scale:1,y:0,duration:.78},d-.36)}for(let h of ko.slice(1))i.to(".film-caption",{opacity:0,y:-4,duration:.25},h.at-.25).fromTo(".film-caption",{opacity:0,y:5},{opacity:1,y:0,duration:.37,immediateRender:!1},h.at);i.fromTo(".chat-window",{scale:.94,y:7},{scale:1,y:0,duration:2,ease:"power2.out"},0).fromTo(".film-editor",{rotateZ:-.6,scale:.985},{rotateZ:0,scale:1,duration:1.8,immediateRender:!1},7),l(s,.15),i.to(".chat-typing",{autoAlpha:1,duration:.2},.76).fromTo(".chat-typing i",{y:0},{y:-3,stagger:.08,duration:.21,repeat:1,yoyo:!0},.91).to(".chat-typing",{autoAlpha:0,duration:.2},1.53),l(o,1.65),l(a,2.66),i.to(".drawing-flight",{autoAlpha:1,duration:.18},3.46).to(".drawing-source",{opacity:0,duration:.18},3.47).to(".drawing-flight",{"--travel":1,duration:1.2,ease:"power2.inOut"},3.6),c(r,e,ko[1].at),i.to(".drawing-target",{autoAlpha:1,duration:.25},4.76).to(".drawing-flight",{autoAlpha:0,duration:.32},4.8).to(".plan-draw",{clipPath:"inset(0 0% 0 0)",duration:.68,stagger:.22},4.52).to(".dimension-rule",{scaleX:1,duration:.64},5.24).fromTo(".draft-text i",{scaleX:.35,transformOrigin:"left"},{scaleX:1,duration:.55,stagger:.12},5.38),c(e,t,ko[2].at),i.to(wf,{count:Cy*.49,duration:.91,ease:"none"},7.37).to(wf,{count:Cy,duration:1.15,ease:"none"},8.44).to(".editor-preview",{autoAlpha:1,duration:.65},8.27).fromTo(".editor-preview .speaker-print",{rotateY:-32},{rotateY:10,duration:1.18},8.58),c(t,n,ko[3].at),Yt.set(".fallback-drivers",{xPercent:-17}),Yt.set(".product-fallback i",{xPercent:-72,rotateY:-21,opacity:.52}),Yt.set(".fallback-dial",{yPercent:-240});let u=Yt.timeline({defaults:{ease:"sine.inOut"}});u.fromTo(Hs,{value:0},{value:1,duration:Oy,ease:"none",immediateRender:!1},0).to(".assembly-drawing",{autoAlpha:1,duration:.68},.56).fromTo(".assembly-drawing span",{yPercent:9,opacity:0},{yPercent:0,opacity:1,stagger:.3,duration:.64},.7).to(".assembly-drawing",{autoAlpha:0,duration:.62},4.42).to(".fallback-drivers",{xPercent:0,duration:1.3},1.44).to(".product-fallback i",{xPercent:0,rotateY:0,opacity:1,duration:1.7},2.94).to(".fallback-dial",{yPercent:0,duration:.95},4.14),i.add(u.timeScale(Ny),Dy).to(".model-panel",{xPercent:0,scale:1,duration:1.95,ease:"power2.inOut"},$a).to(".system-preview",{autoAlpha:1,duration:1.25},$a+.45).to(".film-site",{scale:.96,duration:1.64},$a+.44).fromTo(".preview-header,.preview-copy,.preview-details > div",{y:7,opacity:0},{y:0,opacity:1,duration:.64,stagger:.15,immediateRender:!1},$a+.69).to({},{duration:.8},$a+2.57),Iy()}Pe(".story-start").addEventListener("click",()=>{if(!jm){jm=!0,Pe("#story-presentation").hidden=!1,Pe(".showcase-stage").dataset.story="started",gA(),Pe(".story-start").hidden=!0;try{Gs=Ey()}catch{let r=Pe("#study-scene");r.classList.remove("ready"),r.dataset.renderer="fallback",Pe("canvas",r)?.remove()}Ef.add(()=>Fy()),Gt.paused&&Qi.progress(1).pause(),Pe("#studies-title").focus({preventScroll:!0}),er()}});Pe(".story-replay").addEventListener("click",()=>{Qi?.time(0).pause(),er()});function _A(r){el=Nt(".toolkit-group").map((e,t)=>{let n=Pe(".toolkit-reel",e),i=Nt("li",e);if(n.childElementCount===1)for(let o of[...i.slice(1),i[0]]){let a=n.firstElementChild.cloneNode(!1);a.textContent=o.textContent,n.append(a)}let s=Yt.timeline({paused:!0,repeat:-1});return s.fromTo(n,{yPercent:0},{yPercent:-100*i.length/n.childElementCount,duration:i.length,ease:"none"}),s.time(r[t]??t*.17)})}ng.addEventListener("change",r=>mA(r.matches));dA.addEventListener("change",()=>{document.body.classList.contains("ice-open")||(tl(),Lc(!1),Ze.refresh())});window.addEventListener("resize",()=>{!document.body.classList.contains("ice-open")&&ig!==innerWidth<=760&&(Lc(!1),Ze.refresh())});document.addEventListener("visibilitychange",er);document.addEventListener("portfolio-view-change",()=>{document.body.classList.contains("ice-open")||(ig!==innerWidth<=760&&Lc(!1),Rr?.resize(),Gs?.resize(),Ze.refresh()),er()});function tl(r=!1){Ic=!1,Pe("#mobile-menu").hidden=!0,Pe(".menu-toggle").setAttribute("aria-expanded","false"),Pe(".menu-toggle").setAttribute("aria-label","\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.remove("menu-open"),Pe("#main").inert=!1,Pe(".site-footer").inert=!1,r&&Pe(".menu-toggle").focus(),er()}Pe(".menu-toggle").addEventListener("click",()=>{if(Ic){tl(!0);return}Ic=!0,Pe("#mobile-menu").hidden=!1,Pe(".menu-toggle").setAttribute("aria-expanded","true"),Pe(".menu-toggle").setAttribute("aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.add("menu-open"),Pe("#main").inert=!0,Pe(".site-footer").inert=!0,Pe("#mobile-menu a").focus(),er()});for(let r of Nt("#mobile-menu a"))r.addEventListener("click",()=>tl());document.addEventListener("keydown",r=>{if(Ic&&(r.key==="Escape"&&(r.preventDefault(),tl(!0)),r.key==="Tab")){let e=[...Nt(".site-header a,.site-header button"),...Nt("#mobile-menu a")].filter(n=>n.getClientRects().length),t=e.indexOf(document.activeElement);r.shiftKey&&t<=0&&(r.preventDefault(),e.at(-1).focus()),!r.shiftKey&&t===e.length-1&&(r.preventDefault(),e[0].focus())}});function By(r){let e=document.activeElement;tl(),Uy=e,r.showModal(),r.scrollTop=0,er()}for(let r of Nt('[data-open="brief"]'))r.addEventListener("click",()=>By(Pe("#brief-dialog")));for(let r of Nt("[data-scroll]"))r.addEventListener("click",()=>document.getElementById(r.dataset.scroll)?.scrollIntoView({behavior:Gt.paused?"instant":"smooth"}));for(let r of Nt("dialog"))Pe(".close-dialog",r).addEventListener("click",()=>r.close()),r.addEventListener("close",()=>{er(),Uy?.focus({preventScroll:!0})}),r.addEventListener("click",e=>{let t=r.getBoundingClientRect();e.target===r&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&r.close()});var If="alexey-project-draft-v1",ky=Nt('#brief-form input[name="service"]');function zy(){return{services:ky.filter(r=>r.checked).map(r=>r.value),idea:Pe("#idea").value.trim(),timing:Pe("#timing").value.trim()}}function xA(){Rf.set(If,JSON.stringify(zy()))}try{let r=JSON.parse(Rf.get(If)||"null");r&&typeof r=="object"&&(ky.forEach(e=>{e.checked=Array.isArray(r.services)&&r.services.includes(e.value)}),typeof r.idea=="string"&&(Pe("#idea").value=r.idea.slice(0,3e3)),typeof r.timing=="string"&&(Pe("#timing").value=r.timing.slice(0,150)))}catch{Rf.remove(If)}Pe("#brief-form").addEventListener("input",xA);function Hy(){let r=zy();return!r.services.length&&!r.idea?(Pe("#brief-status").textContent="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u043F\u0438\u0448\u0438\u0442\u0435 \u0438\u0434\u0435\u044E.",Pe("#idea").focus(),null):`\u0410\u043B\u0435\u043A\u0441\u0435\u0439, \u043F\u0440\u0438\u0432\u0435\u0442! \u0425\u043E\u0447\u0443 \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442.

\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: ${r.services.join(", ")||"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043C \u0432\u043C\u0435\u0441\u0442\u0435"}.${r.idea?`

\u0418\u0434\u0435\u044F:
${r.idea}`:""}${r.timing?`

\u0421\u0440\u043E\u043A\u0438: ${r.timing}`:""}`}function Gy(r){let e=URL.createObjectURL(new Blob(["\uFEFF"+r],{type:"text/plain;charset=utf-8"})),t=document.createElement("a");t.href=e,t.download="\u041C\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u2014 \u0431\u0440\u0438\u0444 \u0434\u043B\u044F \u0410\u043B\u0435\u043A\u0441\u0435\u044F.txt",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),Pe("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u0444\u0430\u0439\u043B. \u041C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u044C \u0435\u0433\u043E \u043A \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044E."}Pe("#brief-form").addEventListener("submit",async r=>{r.preventDefault();let e=Hy();if(e)try{await navigator.clipboard.writeText(e),Pe("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D. \u041C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435."}catch{Gy(e)}});Pe(".download-brief").addEventListener("click",()=>{let r=Hy();r&&Gy(r)});Pe(".clear-draft").addEventListener("click",()=>{Pe("#brief-form").reset(),Rf.remove(If),Pe("#brief-status").textContent="\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043E\u0447\u0438\u0449\u0435\u043D."});var zo=window.PORTFOLIO_CONTENT&&typeof window.PORTFOLIO_CONTENT=="object"?window.PORTFOLIO_CONTENT:{};function $m(r,e=!1){if(typeof r!="string"||!r.trim())return null;try{let t=new URL(r,location.href);if(["https:","http:"].includes(t.protocol)||e&&t.protocol==="file:"&&!/^[a-z]+:/i.test(r))return t.href}catch{}return null}function yA(r,e){let t=document.createElement("a");t.textContent=r,t.href=e,e.startsWith("https:")&&(t.target="_blank",t.rel="noopener noreferrer"),Pe("#contact-links").append(t),Pe("#contact-links").hidden=!1}var Qa=og(zo.telegram);for(let r of Nt("[data-telegram-link]"))r.hidden=!Qa,Qa?r.href=Qa.url:r.removeAttribute("href");Pe(".contact-invitation").hidden=!Qa;Pe("[data-telegram-label]").textContent=Qa?.label??"";for(let r of Nt("[data-without-telegram]"))r.hidden=!!Qa;typeof zo.email=="string"&&/^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(zo.email)&&yA(zo.email,`mailto:${encodeURIComponent(zo.email)}`);var Af=Array.isArray(zo.projects)?zo.projects.filter(r=>r&&typeof r.title=="string"&&r.title.trim()&&typeof r.description=="string"):[];if(Af.length){let e=function(n){Pe("#project-title").textContent=n.title,Pe(".project-detail-description").textContent=n.description,Pe(".project-detail-tags").textContent=Array.isArray(n.tags)?n.tags.filter(l=>typeof l=="string").join(" / "):"";let i=Pe(".project-detail-image"),s=$m(n.image,!0);i.hidden=!s,s?(i.src=s,i.alt=n.title,i.onerror=()=>{i.hidden=!0}):i.removeAttribute("src");let o=Pe(".project-detail-link"),a=$m(n.url);o.hidden=!a,a?o.href=a:o.removeAttribute("href"),By(Pe("#project-dialog"))},t=function(n){let i=Af.filter(s=>n==="\u0412\u0441\u0435"||s.category===n);Pe(".project-grid").replaceChildren();for(let s of i){let o=document.createElement("button");o.className="project-card";let a=$m(s.image,!0);if(a){let u=document.createElement("img");u.src=a,u.alt=s.title,u.loading="lazy",u.onerror=()=>{u.remove()},o.append(u)}let l=document.createElement("h3");l.textContent=s.title;let c=document.createElement("p");c.textContent=s.category||"\u041F\u0440\u043E\u0435\u043A\u0442",o.append(l,c),o.addEventListener("click",()=>e(s)),Pe(".project-grid").append(o)}for(let s of Nt(".project-filters button"))s.setAttribute("aria-pressed",String(s.textContent===n));Pe(".project-count").textContent=`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432: ${i.length}`,Ze.refresh()};Pe("#projects").hidden=!1;let r=["\u0412\u0441\u0435",...new Set(Af.map(n=>n.category).filter(n=>typeof n=="string"&&n))];for(let n of r){let i=document.createElement("button");i.textContent=n,i.setAttribute("aria-pressed",String(n==="\u0412\u0441\u0435")),i.addEventListener("click",()=>t(n)),Pe(".project-filters").append(i)}for(let n of Nt(".desktop-nav,#mobile-menu")){let i=document.createElement("a");i.href="#projects",i.textContent="\u0420\u0430\u0431\u043E\u0442\u044B",i.addEventListener("click",()=>tl()),n.prepend(i)}t("\u0412\u0441\u0435")}var Vy=new IntersectionObserver(r=>{for(let e of r){if(!e.isIntersecting)continue;let{target:t,rootBounds:n,boundingClientRect:i}=e;Vy.unobserve(t),t.classList.remove("arrival-pending"),!(!n||Gt.paused||t.matches(":target, :focus-within"))&&i.top>=n.top+n.height*.35&&t.classList.add("scroll-arrival")}},{rootMargin:"0px 0px -64px"}),vA=document.documentElement.clientHeight;for(let r of Nt(".expertise-intro, .service-item, .collaboration-intro, .questions-list article, #contact-title"))r.getBoundingClientRect().top>=vA&&(r.classList.add("arrival-pending"),Vy.observe(r));var SA=new IntersectionObserver(r=>{for(let e of r)e.target.classList.toggle("in-view",e.isIntersecting)});Nt(".service-item").forEach(r=>SA.observe(r));var MA=new IntersectionObserver(r=>{for(let e of r)if(e.isIntersecting)for(let t of Nt(".desktop-nav a"))t.hash==="#"+e.target.id?t.setAttribute("aria-current","location"):t.removeAttribute("aria-current")},{rootMargin:"-20% 0px -60% 0px"});for(let r of Nt("main > section"))r.hidden||MA.observe(r);window.addEventListener("scroll",()=>{Pe(".site-header").classList.toggle("scrolled",scrollY>30),Gt.paused||(Gt.scroll=Math.min(1,scrollY/innerHeight))},{passive:!0});document.addEventListener("pointermove",r=>{!rg()||r.pointerType==="touch"||(Gt.tx=r.clientX/innerWidth*2-1,Gt.ty=r.clientY/innerHeight*2-1)},{passive:!0});wy(Gt,Tf).then(r=>{Rr=r}).catch(()=>{Pe("#scene").classList.remove("ready","archive-loading"),Pe("#scene").dataset.renderer="fallback",Pe("#scene canvas")?.remove()});var bA=new IntersectionObserver(([r])=>{Cf=r.isIntersecting&&r.intersectionRatio>=.25,Cf&&Gs?.frame(Hs.value,!0),er()},{threshold:[0,.25]});bA.observe(Pe(".showcase-stage"));var TA=new IntersectionObserver(([r])=>{Ly=r.isIntersecting&&r.intersectionRatio>=.2,er()},{threshold:[0,.2]});TA.observe(Pe("#experience"));var Wy=Nt(".toolkit-group"),wA=new IntersectionObserver(r=>{for(let e of r){let t=Wy.indexOf(e.target);e.isIntersecting&&e.intersectionRatio>=.15?Qm.add(t):Qm.delete(t)}er()},{threshold:[0,.15]});Wy.forEach(r=>wA.observe(r));var EA=new IntersectionObserver(([r])=>{Gt.heroVisible=r.isIntersecting});EA.observe(Pe(".hybrid-hero"));Yt.ticker.add((r,e)=>{rg()&&(Cf&&Gs?.frame(Hs.value),Gt.heroVisible&&(Gt.time+=Math.min(e/1e3,.15),Rr?.frame(Math.min(e/1e3,.05))))});document.body.classList.toggle("motion-paused",Gt.paused);Lc(!0);document.fonts.ready.then(()=>{Rr?.resize(),Ze.refresh(),document.documentElement.dataset.ready="true"});Object.defineProperty(window,"portfolioStatus",{value:()=>({paused:Gt.paused,frames:Gt.frames,heroBounds:Rr?.bounds(),documents:Rr?.documentStatus()||[],renderer:Pe("#scene").dataset.renderer,heroVisible:Gt.heroVisible,projects:Af.length,scrollScenes:Ze.getAll().length,studyRenderer:Pe("#study-scene").dataset.renderer,studyProgress:Hs.value,studyFrames:Gs?.frames||0,storyTime:Qi?.time()||0,storyDuration:Qi?.duration()||0,storyPhase:Pf,storyPlaying:Qi?.isActive()||!1,counterTime:zs?.time()||0,counterPlaying:zs?.isActive()||!1,toolkitTimes:el.map(r=>r.totalTime()),toolkitPlaying:el.map(r=>r.isActive())})});})();
/*! For license information please see app.js.LEGAL.txt */
