(()=>{function Wm(r){if(typeof r!="string"||!r.trim())return null;try{let e=new URL(r);if(!["https:","http:"].includes(e.protocol)||!["t.me","telegram.me"].includes(e.hostname))return null;let t=/^\/([a-z\d_]+)\/?$/i.exec(e.pathname);return{url:e.href,label:t?"@"+t[1]:"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram"}}catch{return null}}function wr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Qm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ja={duration:.5,overwrite:!1,delay:0},Ff,En,Ft,Ui=1e8,bt=1/Ui,Cf=Math.PI*2,vy=Cf/4,Sy=0,eg=Math.sqrt,My=Math.cos,by=Math.sin,pn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},Ar=function(e){return typeof e=="number"},Uc=function(e){return typeof e>"u"},or=function(e){return typeof e=="object"},ci=function(e){return e!==!1},Bf=function(){return typeof window<"u"},wc=function(e){return Zt(e)||pn(e)},tg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,Ty=/random\([^)]+\)/g,wy=/,\s*/g,Xm=/(?:-?\.?\d|\.)+/gi,kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zf=/[+-]=-?[.\d]+/,Ey=/[^,'"\[\]\s]+/gi,Ay=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,rr,Pf,Hf,Mi={},Cc={},ng,ig=function(e){return(Cc=No(e,Mi))&&kn},Fc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qa=function(e,t){return!t&&console.warn(e)},rg=function(e,t){return e&&(Mi[e]=t)&&Cc&&(Cc[e]=t)||Mi},el=function(){return 0},Ry={suppressEvents:!0,isStart:!0,kill:!1},Ec={suppressEvents:!0,kill:!1},Cy={suppressEvents:!0},Gf={},ss=[],If={},sg,ai={},bf={},qm=30,Ac=[],Vf="",Wf=function(e){var t=e[0],n,i;if(or(t)||Zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ac.length;i--&&!Ac[i].targetTest(t););n=Ac[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kf(e[i],n)))||e.splice(i,1);return e},os=function(e){return e._gsap||Wf(Fi(e))[0]._gsap},Xf=function(e,t,n){return(n=e[t])&&Zt(n)?e[t]():Uc(n)&&e.getAttribute&&e.getAttribute(t)||n},Jn=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Hs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Py=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Pc=function(){var e=ss.length,t=ss.slice(0),n,i;for(If={},ss.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qf=function(e){return!!(e._initted||e._startAt||e.add)},og=function(e,t,n,i){ss.length&&!En&&Pc(),e.render(t,n,i||!!(En&&t<0&&qf(e))),ss.length&&!En&&Pc()},ag=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ey).length<2?t:pn(e)?e.trim():e},lg=function(e){return e},bi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Iy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},No=function(e,t){for(var n in t)e[n]=t[n];return e},Ym=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=or(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ic=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Za=function(e){var t=e.parent||Ht,n=e.keyframes?Iy(Bn(e.keyframes)):bi;if(ci(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ly=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},cg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Bc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},as=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Dy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lf=function(e,t,n,i){return e._startAt&&(En?e._startAt.revert(Ec):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ny=function r(e){return!e||e._ts&&r(e.parent)},Km=function(e){return e._repeat?Oo(e._tTime,e=e.duration()+e._rDelay)*e:0},Oo=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},Lc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},zc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kc(e),n._dirty||Fs(n,e)),e},ug=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Lc(e.rawTime(),t),(!t._dur||rl(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),Fs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},sr=function(e,t,n,i){return t.parent&&as(t),t._start=zt((Ar(n)?n:!n&&Dc(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Ht?Oi(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),cg(e,t,"_first","_last",e._sort?"_start":0),Dc(t)||(e._recent=t),i||ug(e,t),e._ts<0&&zc(e,e._tTime),e},hg=function(e,t){return(Mi.ScrollTrigger||Fc("scrollTrigger",t))&&Mi.ScrollTrigger.create(t,e)},fg=function(e,t,n,i,s){if($f(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!En&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sg!==li.frame)return ss.push(e),e._lazy=[s,i],1},Oy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Dc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Uy=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Oy(e)&&!(!e._initted&&Dc(e))||(e._ts<0||e._dp._ts<0)&&!Dc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=rl(0,e._tDur,t),u=Oo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Oo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||En||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&fg(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Lf(e,t,n,!0),e._onUpdate&&!n&&Si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&as(e,1),!n&&!En&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Uo=function(e,t,n,i){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&zc(e,e._tTime=e._tDur*a),e.parent&&kc(e),n||Fs(e.parent,e),e},Zm=function(e){return e instanceof Fn?Fs(e):Uo(e,e._dur)},By={_start:0,endTime:el,totalDuration:el},Oi=function r(e,t,n){var i=e.labels,s=e._recent||By,o=e.duration()>=Ui?s.endTime(!1):e._dur,a,l,c;return pn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Bn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ja=function(e,t,n){var i=Ar(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},ls=function(e,t){return e||e===0?t(e):t},rl=function(e,t,n){return n<e?e:n>t?t:n},An=function(e,t){return!pn(e)||!(t=Ay.exec(e))?"":t[1]},ky=function(e,t,n){return ls(n,function(i){return rl(e,t,i)})},Df=[].slice,dg=function(e,t){return e&&or(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&or(e[0]))&&!e.nodeType&&e!==rr},zy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return pn(i)&&!t||dg(i,1)?(s=n).push.apply(s,Fi(i)):n.push(i)})||n},Fi=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):pn(e)&&!n&&(Pf||!Fo())?Df.call((t||Hf).querySelectorAll(e),0):Bn(e)?zy(e,n):dg(e)?Df.call(e,0):e?[e]:[]},Nf=function(e){return e=Fi(e)[0]||Qa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Fi(t,n.querySelectorAll?n:n===e?Qa("Invalid scope")||Hf.createElement("div"):e)}},pg=function(e){return e.sort(function(){return .5-Math.random()})},mg=function(e){if(Zt(e))return e;var t=or(e)?e:{each:e},n=Bs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return pn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,m){var _=(m||t).length,p=o[_],g,y,b,v,M,w,x,S,R;if(!p){if(R=t.grid==="auto"?0:(t.grid||[1,Ui])[1],!R){for(x=-Ui;x<(x=m[R++].getBoundingClientRect().left)&&R<_;);R<_&&R--}for(p=o[_]=[],g=l?Math.min(R,_)*u-.5:i%R,y=R===Ui?0:l?_*h/R-.5:i/R|0,x=0,S=Ui,w=0;w<_;w++)b=w%R-g,v=y-(w/R|0),p[w]=M=c?Math.abs(c==="y"?v:b):eg(b*b+v*v),M>x&&(x=M),M<S&&(S=M);i==="random"&&pg(p),p.max=x-S,p.min=S,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(R>_?_-1:c?c==="y"?_/R:R:Math.max(R,_/R))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=An(t.amount||t.each)||0,n=n&&_<0?Qy(n):n}return _=(p[f]-p.min)/p.max||0,zt(p.b+(n?n(_):_)*p.v)+p.u}},Of=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ar(n)?0:An(n))}},gg=function(e,t){var n=Bn(e),i,s;return!n&&or(e)&&(i=n=e.radius||Ui,e.values?(e=Fi(e.values),(s=!Ar(e[0]))&&(i*=i)):e=Of(e.increment)),ls(t,n?Zt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ui,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Ar(o)?u:u+An(o)}:Of(e))},_g=function(e,t,n,i){return ls(Bn(e)?!t:n===!0?!!(n=0):!i,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Hy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Gy=function(e,t){return function(n){return e(parseFloat(n))+(t||An(n))}},Vy=function(e,t,n){return yg(e,t,0,1,n)},xg=function(e,t,n){return ls(n,function(i){return e[~~t(i)]})},Wy=function r(e,t,n){var i=t-e;return Bn(e)?xg(e,r(0,e.length),t):ls(n,function(s){return(i+(s-e)%i)%i+e})},Xy=function r(e,t,n){var i=t-e,s=i*2;return Bn(e)?xg(e,r(0,e.length-1),t):ls(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Bo=function(e){return e.replace(Ty,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(wy);return _g(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},yg=function(e,t,n,i,s){var o=t-e,a=i-n;return ls(s,function(l){return n+((l-e)/o*a||0)})},qy=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=pn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(f,~~m);return u[_](m-_)},n=t}else i||(e=No(Bn(e)?[]:{},e));if(!u){for(l in t)Zf.call(a,e,l,"get",t[l]);s=function(m){return ed(m,a)||(o?e.p:e)}}}return ls(n,s)},Jm=function(e,t,n){var i=e.labels,s=Ui,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,n){var i=e.vars,s=i[t],o=Ft,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ss.length&&Pc(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},Ya=function(e){return as(e),e.scrollTrigger&&e.scrollTrigger.kill(!!En),e.progress()<1&&Si(e,"onInterrupt"),e},Do,vg=[],Sg=function(e){if(e)if(e=!e.name&&e.default||e,Bf()||e.headless){var t=e.name,n=Zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:el,render:ed,add:Zf,kill:cv,modifier:lv,rawVars:0},o={targetTest:0,get:0,getSetter:Hc,aliases:{},register:0};if(Fo(),e!==i){if(ai[t])return;bi(i,bi(Ic(e,s),o)),No(i.prototype,No(s,Ic(e,o))),ai[i.prop=t]=i,e.targetTest&&(Ac.push(i),Gf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rg(t,i),e.register&&e.register(kn,i,$n)}else vg.push(e)},Ct=255,Ka={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Tf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},Mg=function(e,t,n){var i=e?Ar(e)?[e>>16,e>>8&Ct,e&Ct]:0:Ka.black,s,o,a,l,c,u,h,f,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ka[e])i=Ka[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Xm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Tf(l+1/3,s,o),i[1]=Tf(l,s,o),i[2]=Tf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(kf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Xm)||Ka.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/Ct,o=i[1]/Ct,a=i[2]/Ct,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},bg=function(e){var t=[],n=[],i=-1;return e.split(Er).forEach(function(s){var o=s.match(zs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},$m=function(e,t,n){var i="",s=(e+i).match(Er),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Mg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=bg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Er,"1").split(zs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Er),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Er=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ka)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Yy=/hsl[a]?\(/,Yf=function(e){var t=e.join(" "),n;if(Er.lastIndex=0,Er.test(t))return n=Yy.test(t),e[1]=$m(e[1],n),e[0]=$m(e[0],n,bg(e[1])),!0},tl,li=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,m=function _(p){var g=r()-i,y=p===!0,b,v,M,w;if((g>e||g<0)&&(n+=g-t),i+=g,M=i-n,b=M-o,(b>0||y)&&(w=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=b+(b>=s?0:s-b),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](M,f,w,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){ng&&(!Pf&&Bf()&&(rr=Pf=window,Hf=rr.document||{},Mi.gsap=kn,(rr.gsapVersions||(rr.gsapVersions=[])).push(kn.version),ig(Cc||rr.GreenSockGlobals||!rr.gsap&&rr||{}),vg.forEach(Sg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},tl=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),tl=0,c=el},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,g,y){var b=g?function(v,M,w,x){p(v,M,w,x),h.remove(b)}:p;return h.remove(p),a[y?"unshift":"push"](b),Fo(),b},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},h})(),Fo=function(){return!tl&&li.wake()},ht={},Ky=/^[\d.\-M][\d.\-,\s]/,Zy=/["']/g,Jy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Zy,"").trim():+c,i=l.substr(a+1).trim();return t},$y=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},jy=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Jy(t[1])]:$y(e).split(",").map(ag)):ht._CE&&Ky.test(e)?ht._CE("",e):n},Qy=function(e){return function(t){return 1-e(1-t)}},Bs=function(e,t){return e&&(Zt(e)?e:ht[e]||jy(e))||t},Gs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Jn(e,function(a){ht[a]=Mi[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},Tg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Cf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*by((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Tg(a);return s=Cf/s,l.config=function(c,u){return r(e,c,u)},l},Ef=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Tg(n);return i.config=function(s){return r(e,s)},i};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Gs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Gs("Elastic",wf("in"),wf("out"),wf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Gs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Gs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gs("Circ",function(r){return-(eg(1-r*r)-1)});Gs("Sine",function(r){return r===1?1:-My(r*vy)+1});Gs("Back",Ef("in"),Ef("out"),Ef());ht.SteppedEase=ht.steps=Mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((i*rl(0,o,a)|0)+s)*n}}};ja.ease=ht["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vf+=r+","+r+"Params,"});var Kf=function(e,t){this.id=Sy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xf,this.set=t?t.getSetter:Hc},nl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Uo(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),tl||li.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Uo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Fo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zc(this,n),!s._dp||s.parent||ug(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&sr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),og(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Km(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Km(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Oo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Lc(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(rl(-Math.abs(this._delay),a,s),i!==!1),kc(this),Dy(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Fo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==bt,o;if(s)for(this._tTime-=bt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+bt){s=!1;break}o=o._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&sr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ci(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Cy);var i=En;return En=n,qf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),En=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Oi(this,n),ci(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ci(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Zt(n)?n:lg,l=function(){var u=i.then;i.then=null,s&&s(),Zt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ya(this)},r})();bi(nl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Fn=(function(r){Qm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ci(n.sortChildren),Ht&&sr(n.parent||Ht,wr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hg(wr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ja(0,arguments,this),this},t.from=function(i,s,o){return Ja(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ja(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Za(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(i,s,Oi(this,o),1),this},t.call=function(i,s,o){return sr(this,Qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Qt(i,o,Oi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Za(o).immediateRender=ci(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Za(a).immediateRender=ci(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,_,p,g,y,b,v,M,w,x;if(this!==Ht&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,b=this._ts,g=!b,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=zt(u%p),u===l?(_=this._repeat,f=c):(M=zt(u/p),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=Oo(this._tTime,p),!a&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),w&&_&1&&(f=c-f,x=1),_!==M&&!this._lock){var S=w&&M&1,R=S===(w&&_&1);if(_<M&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(x?0:zt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Fy(this,zt(a),zt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!M&&(Si(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){y=0,m&&(u+=this._zTime=-bt);break}}d=m}else{d=this._last;for(var A=i<0?i:f;d;){if(m=d._prev,(d._act||A<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||En&&qf(d)),f!==this._time||!this._ts&&!g){y=0,m&&(u+=this._zTime=A?-bt:bt);break}}d=m}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-bt)._zTime=f>=a?1:-1,this._ts))return this._start=v,kc(this),this.render(i,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&as(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Si(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ar(s)||(s=Oi(this,s,i)),!(i instanceof nl)){if(Bn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(pn(i))return this.addLabel(i,s);if(Zt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?sr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ui);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return pn(i)?this.removeLabel(i):Zt(i)?this.killTweensOf(i):(i.parent===this&&Bc(this,i),i===this._recent&&(this._recent=this._last),Fs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(li.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Oi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Qt.delayedCall(0,s||el,o);return a.data="isPause",this._hasPause=1,sr(this,a,Oi(this,i))},t.removePause=function(i){var s=this._first;for(i=Oi(this,i);s;)s._start===i&&s.data==="isPause"&&as(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)rs!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Fi(i),l=this._first,c=Ar(s),u;l;)l instanceof Qt?Py(l._targets,a)&&(c?(!rs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Oi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=Qt.to(o,bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Uo(m,p,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,bi({startAt:{time:Oi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Jm(this,Oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Jm(this,Oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=zt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Fs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ui,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,sr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=zt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Uo(o,o===Ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ht._ts&&(og(Ht,Lc(i,Ht)),sg=li.frame),li.frame>=qm){qm+=ui.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&ui.autoSleep&&li._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||li.sleep()}}},e})(nl);bi(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ev=function(e,t,n,i,s,o,a){var l=new $n(this._pt,e,t,0,1,Qf,null,s),c=0,u=0,h,f,d,m,_,p,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Bo(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Mf)||[];h=Mf.exec(i);)m=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?Hs(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},c=Mf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(zf.test(i)||g)&&(l.e=0),this._pt=l,l},Zf=function(e,t,n,i,s,o,a,l,c,u){Zt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Zt(h)?c?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Zt(h)?c?sv:Eg:jf,m;if(pn(i)&&(~i.indexOf("random(")&&(i=Bo(i)),i.charAt(1)==="="&&(m=Hs(f,i)+(An(f)||0),(m||m===0)&&(i=m))),!u||f!==i||Uf)return!isNaN(f*i)&&i!==""?(m=new $n(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?av:Ag,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&Fc(t,i),ev.call(this,e,t,f,i,d,l||ui.stringFilter,c))},tv=function(e,t,n,i,s){if(Zt(e)&&(e=$a(e,s,t,n,i)),!or(e)||e.style&&e.nodeType||Bn(e)||tg(e))return pn(e)?$a(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=$a(e[a],s,t,n,i);return o},Jf=function(e,t,n,i,s,o){var a,l,c,u;if(ai[e]&&(a=new ai[e]).init(s,a.rawVars?t[e]:tv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new $n(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Do))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},rs,Uf,$f=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:p,b=e._overwrite==="auto"&&!Ff,v=e.timeline,M=i.easeReverse||h,w,x,S,R,A,L,D,F,P,k,B,U,$;if(v&&(!f||!s)&&(s="none"),e._ease=Bs(s,ja.ease),e._rEase=M&&(Bs(M)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||f&&!i.stagger){if(F=p[0]?os(p[0]).harness:0,U=F&&i[F.prop],w=Ic(i,Gf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&m?Ec:Ry),_._lazy=0),o){if(as(e._startAt=Qt.set(p,bi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ci(l),startAt:null,delay:0,onUpdate:c&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En||!a&&!d)&&e._startAt.revert(Ec),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),S=bi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ci(l),immediateRender:a,stagger:0,parent:g},w),U&&(S[F.prop]=U),as(e._startAt=Qt.set(p,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En?e._startAt.revert(Ec):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ci(l)||l&&!m,x=0;x<p.length;x++){if(A=p[x],D=A._gsap||Wf(p)[x]._gsap,e._ptLookup[x]=k={},If[D.id]&&ss.length&&Pc(),B=y===p?x:y.indexOf(A),F&&(P=new F).init(A,U||w,e,B,y)!==!1&&(e._pt=R=new $n(e._pt,A,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(G){k[G]=R}),P.priority&&(L=1)),!F||U)for(S in w)ai[S]&&(P=Jf(S,w,e,B,A,y))?P.priority&&(L=1):k[S]=R=Zf.call(e,A,S,"get",w[S],B,y,0,i.stringFilter);e._op&&e._op[x]&&e.kill(A,e._op[x]),b&&e._pt&&(rs=e,Ht.killTweensOf(A,k,e.globalTime(t)),$=!e.parent,rs=0),e._pt&&l&&(If[D.id]=1)}L&&td(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&v.render(Ui,!0,!0)},nv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Uf=1,e.vars[t]="+=0",$f(e,a),Uf=0,l?Qa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Jt(n)+An(h.e)),h.b&&(h.b=u.s+An(h.b))},iv=function(e,t){var n=e[0]?os(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=No({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},rv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Bn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},$a=function(e,t,n,i,s){return Zt(e)?e.call(t,n,i,s):pn(e)&&~e.indexOf("random(")?Bo(e):e},Nc=Vf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wg={};Jn(Nc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return wg[r]=1});Nc=Nc.split(",");var Qt=(function(r){Qm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Za(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Ht,y=(Bn(n)||tg(n)?Ar(n[0]):"length"in i)?[n]:Fi(n),b,v,M,w,x,S,R,A;if(a._targets=y.length?Wf(y):Qa("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||wc(c)||wc(u)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(b=a.timeline=new Fn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),b.kill(),b.parent=b._dp=wr(a),b._start=0,f||wc(c)||wc(u)){if(w=y.length,R=f&&mg(f),or(f))for(x in f)~Nc.indexOf(x)&&(A||(A={}),A[x]=f[x]);for(v=0;v<w;v++)M=Ic(i,wg),M.stagger=0,L&&(M.easeReverse=L),A&&No(M,A),S=y[v],M.duration=+$a(c,wr(a),v,S,y),M.delay=(+$a(u,wr(a),v,S,y)||0)-a._delay,!f&&w===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),b.to(S,M,R?R(v,S,y):0),b._ease=ht.none;b.duration()?c=u=0:a.timeline=0}else if(m){Za(bi(b.vars.defaults,{ease:"none"})),b._ease=Bs(m.ease||i.ease||"none");var D=0,F,P,k;if(Bn(m))m.forEach(function(B){return b.to(y,B,">")}),b.duration();else{M={};for(x in m)x==="ease"||x==="easeEach"||rv(x,m[x],M,m.easeEach);for(x in M)for(F=M[x].sort(function(B,U){return B.t-U.t}),D=0,v=0;v<F.length;v++)P=F[v],k={ease:P.e,duration:(P.t-(v?F[v-1].t:0))/100*c},k[x]=P.v,b.to(y,k,D),D+=k.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!Ff&&(rs=wr(a),Ht.killTweensOf(y),rs=0),sr(g,wr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===zt(g._time)&&ci(h)&&Ny(wr(a))&&g.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-u)||0)),p&&hg(wr(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-bt&&!u?l:i<bt?0:i,f,d,m,_,p,g,y,b;if(!c)Uy(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=zt(h%_),h===l?(m=this._repeat,f=c):(p=zt(h/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=Oo(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=h,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(zt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(fg(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var M=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(v?-1:1)/M:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!p&&(Si(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Lf(this,i,s,o),Si(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Lf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&as(this,1),!s&&!(u&&!a)&&(h||a||g)&&(Si(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){tl||li.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||$f(this,c),u=this._ease(c/this._dur),nv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(zc(this,0),this.parent||cg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ya(this):this.scrollTrigger&&this.scrollTrigger.kill(!!En),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,rs&&rs.vars.overwrite!==!0)._first||Ya(this),this.parent&&o!==this.timeline.totalDuration()&&Uo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Fi(i):a,c=this._ptLookup,u=this._pt,h,f,d,m,_,p,g;if((!s||s==="all")&&Ly(a,l))return s==="all"&&(this._pt=0),Ya(this);for(h=this._op=this._op||[],s!=="all"&&(pn(s)&&(_={},Jn(s,function(y){return _[y]=1}),s=_),s=iv(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(h[g]=s,m=f,d={}):(d=h[g]=h[g]||{},m=s);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Bc(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ya(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ja(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ja(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ht.killTweensOf(i,s,o)},e})(nl);bi(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var e=new Fn,t=Df.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var jf=function(e,t,n){return e[t]=n},Eg=function(e,t,n){return e[t](n)},sv=function(e,t,n,i){return e[t](i.fp,n)},ov=function(e,t,n){return e.setAttribute(t,n)},Hc=function(e,t){return Zt(e[t])?Eg:Uc(e[t])&&e.setAttribute?ov:jf},Ag=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},av=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Qf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ed=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},cv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Bc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},uv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},td=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},$n=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ag,this.d=l||this,this.set=c||jf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=uv,this.m=n,this.mt=s,this.tween=i},r})();Jn(Vf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Gf[r]=1});Mi.TweenMax=Mi.TweenLite=Qt;Mi.TimelineLite=Mi.TimelineMax=Fn;Ht=new Fn({sortChildren:!1,defaults:ja,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=Yf;var ks=[],Rc={},hv=[],jm=0,fv=0,Af=function(e){return(Rc[e]||hv).map(function(t){return t()})},il=function(){var e=Date.now(),t=[];e-jm>2&&(Af("matchMediaInit"),ks.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=rr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Af("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jm=e,Af("matchMedia"))},Rg=(function(){function r(t,n){this.selector=n&&Nf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=fv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Zt(n)&&(s=i,i=n,n=Zt);var o=this,a=function(){var c=Ft,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Nf(s)),Ft=o,h=i.apply(o,arguments),Zt(h)&&o._r.push(h),Ft=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ft;Ft=null,n(this),Ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=ks.length;o--;)ks[o].id===this.id&&ks.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(il):a.removeEventListener("change",il)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),dv=(function(){function r(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){or(n)||(n={matches:n});var o=new Rg(0,s||this.scope),a=o.conditions={},l,c,u;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=rr.matchMedia(n[c]),l&&(ks.indexOf(o)<0&&ks.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(il):l.addEventListener("change",il),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Oc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Sg(i)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){pn(e)&&(e=Fi(e)[0]);var s=os(e||{}).get,o=n?lg:ag;return n==="native"&&(n=""),e&&(t?o((ai[t]&&ai[t].get||s)(e,t,n,i)):function(a,l,c){return o((ai[a]&&ai[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Fi(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=ai[t],a=os(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Do._pt=0,h.init(e,n?u+n:u,Do,0,[e]),h.render(1,h),Do._pt&&ed(1,Do)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=kn.to(e,bi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Bs(e.ease,ja.ease)),Ym(ja,e||{})},config:function(e){return Ym(ui,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ai[a]&&!Mi[a]&&Qa(t+" effect requires "+a+" plugin.")}),bf[t]=function(a,l,c){return n(Fi(a),bi(l||{},s),c)},o&&(Fn.prototype[t]=function(a,l,c){return this.add(bf[t](a,or(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Bs(t)},parseEase:function(e,t){return arguments.length?Bs(e,t):ht},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Fn(e),i,s;for(n.smoothChildTiming=ci(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&sr(n,i,i._start-i._delay),i=s;return sr(Ht,n,0),n},context:function(e,t){return e?new Rg(e,t):Ft},matchMedia:function(e){return new dv(e)},matchMediaRefresh:function(){return ks.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||il()},addEventListener:function(e,t){var n=Rc[e]||(Rc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Rc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Wy,wrapYoyo:Xy,distribute:mg,random:_g,snap:gg,normalize:Vy,getUnit:An,clamp:ky,splitColor:Mg,toArray:Fi,selector:Nf,mapRange:yg,pipe:Hy,unitize:Gy,interpolate:qy,shuffle:pg},install:ig,effects:bf,ticker:li,updateRoot:Fn.updateRoot,plugins:ai,globalTimeline:Ht,core:{PropTween:$n,globals:rg,Tween:Qt,Timeline:Fn,Animation:nl,getCache:os,_removeLinkedListItem:Bc,reverting:function(){return En},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return Ff=e}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Oc[r]=Qt[r]});li.add(Fn.updateRoot);Do=Oc.to({},{duration:0});var pv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=pv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Rf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(pn(s)&&(l={},Jn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}mv(a,s)}}}},kn=Oc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)En?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Rf("roundProps",Of),Rf("modifiers"),Rf("snap",gg))||Oc;Qt.version=Fn.version=kn.version="3.15.1";ng=1;Bf()&&Fo();var gv=ht.Power0,_v=ht.Power1,xv=ht.Power2,yv=ht.Power3,vv=ht.Power4,Sv=ht.Linear,Mv=ht.Quad,bv=ht.Cubic,Tv=ht.Quart,wv=ht.Quint,Ev=ht.Strong,Av=ht.Elastic,Rv=ht.Back,Cv=ht.SteppedEase,Pv=ht.Bounce,Iv=ht.Sine,Lv=ht.Expo,Dv=ht.Circ;var Cg,cs,zo,ad,qs,Nv,Pg,ld,Ov=function(){return typeof window<"u"},Cr={},Xs=180/Math.PI,Ho=Math.PI/180,ko=Math.atan2,Ig=1e8,cd=/([A-Z])/g,Uv=/(left|right|width|margin|padding|x)/i,Fv=/[\s,\(]\S/,ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},id=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},kg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gv=function(e,t,n){return e.style[t]=n},Vv=function(e,t,n){return e.style.setProperty(t,n)},Wv=function(e,t,n){return e._gsap[t]=n},Xv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qv=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Yv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",hi=Gt+"Origin",Kv=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Cr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ar[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Rr(i,a)}):this.tfm[e]=o.x?o[e]:Rr(i,e),e===hi&&(this.tfm.zOrigin=o.zOrigin);else return ar.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},Hg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Zv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ld(),(!s||!s.isStart)&&!n[Gt]&&(Hg(n),i.zOrigin&&n[hi]&&(n[hi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Gg=function(e,t){var n={target:e,props:[],revert:Zv,save:Kv};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Vg,rd=function(e,t){var n=cs.createElementNS?cs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cs.createElement(e);return n&&n.style?n:cs.createElement(e)},Ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Go(t)||t,1)||""},Lg="O,Moz,ms,Ms,Webkit".split(","),Go=function(e,t,n){var i=t||qs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Lg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Lg[o]:"")+e},sd=function(){Ov()&&window.document&&(Cg=window,cs=Cg.document,zo=cs.documentElement,qs=rd("div")||{style:{}},Nv=rd("div"),Gt=Go(Gt),hi=Gt+"Origin",qs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vg=!!Go("perspective"),ld=kn.core.reverting,ad=1)},Dg=function(e){var t=e.ownerSVGElement,n=rd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),zo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),zo.removeChild(n),s},Ng=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wg=function(e){var t,n;try{t=e.getBBox()}catch{t=Dg(e),n=1}return t&&(t.width||t.height)||n||(t=Dg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ng(e,["x","cx","x1"])||0,y:+Ng(e,["y","cy","y1"])||0,width:0,height:0}:t},Xg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wg(e))},hs=function(e,t){if(t){var n=e.style,i;t in Cr&&t!==hi&&(t=Gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cd,"-$1").toLowerCase())):n.removeAttribute(t)}},us=function(e,t,n,i,s,o){var a=new $n(e._pt,t,n,0,1,o?zg:kg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Og={deg:1,rad:1,turn:1},Jv={grid:1,flex:1},fs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=qs.style,l=Uv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",m,_,p,g;if(i===o||!s||Og[i]||Og[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&Xg(e),(d||o==="%")&&(Cr[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],Jt(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===cs||!_.appendChild)&&(_=cs.body),p=_._gsap,p&&d&&p.width&&l&&p.time===li.time&&!p.uncache)return Jt(s/p.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,m=e[u],y?e.style[t]=y:hs(e,t)}else(d||o==="%")&&!Jv[Ti(_,"display")]&&(a.position=Ti(e,"position")),_===e&&(a.position="static"),_.appendChild(qs),m=qs[u],_.removeChild(qs),a.position="absolute";return l&&d&&(p=os(_),p.time=li.time,p.width=_[u]),Jt(f?m*s/h:m&&s?h/m*s:0)},Rr=function(e,t,n,i){var s;return ad||sd(),t in ar&&t!=="transform"&&(t=ar[t],~t.indexOf(",")&&(t=t.split(",")[0])),Cr[t]&&t!=="transform"?(s=al(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Vc(Ti(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gc[t]&&Gc[t](e,t,n)||Ti(e,t)||Xf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fs(e,t,s,n)+n:s},$v=function(e,t,n,i){if(!n||n==="none"){var s=Go(t,e,1),o=s&&Ti(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ti(e,"borderTopColor"))}var a=new $n(this._pt,e.style,t,0,1,Qf),l=0,c=0,u,h,f,d,m,_,p,g,y,b,v,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ti(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ti(e,t)||i,_?e.style[t]=_:hs(e,t)),u=[n,i],Yf(u),n=u[0],i=u[1],f=n.match(zs)||[],M=i.match(zs)||[],M.length){for(;h=zs.exec(i);)p=h[0],y=i.substring(l,h.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),p.charAt(1)==="="&&(p=Hs(d,p)+v),g=parseFloat(p),b=p.substr((g+"").length),l=zs.lastIndex-b.length,b||(b=b||ui.units[t]||v,l===i.length&&(i+=b,a.e+=b)),v!==b&&(d=fs(e,t,_,b)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?zg:kg;return zf.test(i)&&(a.e=0),this._pt=a,a},Ug={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ug[n]||n,t[1]=Ug[i]||i,t.join(" ")},Qv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Cr[a]&&(l=1,a=a==="transformOrigin"?hi:Gt),hs(n,a);l&&(hs(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",al(n,1),o.uncache=1,Hg(i)))}},Gc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new $n(e._pt,t,n,0,0,Qv);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ol=[1,0,0,1,0,0],qg={},Yg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fg=function(e){var t=Ti(e,Gt);return Yg(t)?ol:t.substr(7).match(kf).map(Jt)},ud=function(e,t){var n=e._gsap||os(e),i=e.style,s=Fg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ol:s):(s===ol&&!e.offsetParent&&e!==zo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,zo.appendChild(e)),s=Fg(e),l?i.display=l:hs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):zo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},od=function(e,t,n,i,s,o){var a=e._gsap,l=s||ud(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],_=l[2],p=l[3],g=l[4],y=l[5],b=t.split(" "),v=parseFloat(b[0])||0,M=parseFloat(b[1])||0,w,x,S,R;n?l!==ol&&(x=d*p-m*_)&&(S=v*(p/x)+M*(-_/x)+(_*y-p*g)/x,R=v*(-m/x)+M*(d/x)-(d*y-m*g)/x,v=S,M=R):(w=Wg(e),v=w.x+(~b[0].indexOf("%")?v/100*w.width:v),M=w.y+(~(b[1]||b[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&a.smooth?(g=v-c,y=M-u,a.xOffset=h+(g*d+y*_)-g,a.yOffset=f+(g*m+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[hi]="0px 0px",o&&(us(o,a,"xOrigin",c,v),us(o,a,"yOrigin",u,M),us(o,a,"xOffset",h,a.xOffset),us(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},al=function(e,t){var n=e._gsap||new Kf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ti(e,hi)||"0",u,h,f,d,m,_,p,g,y,b,v,M,w,x,S,R,A,L,D,F,P,k,B,U,$,G,I,j,pe,Ie,Y,he;return u=h=f=_=p=g=y=b=v=0,d=m=1,n.svg=!!(e.getCTM&&Xg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),i.scale=i.rotate=i.translate="none"),x=ud(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),od(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,x)),M=n.xOrigin||0,w=n.yOrigin||0,x!==ol&&(L=x[0],D=x[1],F=x[2],P=x[3],u=k=x[4],h=B=x[5],x.length===6?(d=Math.sqrt(L*L+D*D),m=Math.sqrt(P*P+F*F),_=L||D?ko(D,L)*Xs:0,y=F||P?ko(F,P)*Xs+_:0,y&&(m*=Math.abs(Math.cos(y*Ho))),n.svg&&(u-=M-(M*L+w*F),h-=w-(M*D+w*P))):(he=x[6],Ie=x[7],I=x[8],j=x[9],pe=x[10],Y=x[11],u=x[12],h=x[13],f=x[14],S=ko(he,pe),p=S*Xs,S&&(R=Math.cos(-S),A=Math.sin(-S),U=k*R+I*A,$=B*R+j*A,G=he*R+pe*A,I=k*-A+I*R,j=B*-A+j*R,pe=he*-A+pe*R,Y=Ie*-A+Y*R,k=U,B=$,he=G),S=ko(-F,pe),g=S*Xs,S&&(R=Math.cos(-S),A=Math.sin(-S),U=L*R-I*A,$=D*R-j*A,G=F*R-pe*A,Y=P*A+Y*R,L=U,D=$,F=G),S=ko(D,L),_=S*Xs,S&&(R=Math.cos(S),A=Math.sin(S),U=L*R+D*A,$=k*R+B*A,D=D*R-L*A,B=B*R-k*A,L=U,k=$),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),d=Jt(Math.sqrt(L*L+D*D+F*F)),m=Jt(Math.sqrt(B*B+he*he)),S=ko(k,B),y=Math.abs(S)>2e-4?S*Xs:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Yg(Ti(e,Gt)),U&&e.setAttribute("transform",U))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Jt(d),n.scaleY=Jt(m),n.rotation=Jt(_)+a,n.rotationX=Jt(p)+a,n.rotationY=Jt(g)+a,n.skewX=y+a,n.skewY=b+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[hi]=Vc(c)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?tS:Vg?Kg:eS,n.uncache=0,n},Vc=function(e){return(e=e.split(" "))[0]+" "+e[1]},nd=function(e,t,n){var i=An(t);return Jt(parseFloat(t)+parseFloat(fs(e,"x",n+"px",i)))+i},eS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Kg(e,t)},Vs="0deg",sl="0px",Ws=") ",Kg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,b=n.zOrigin,v="",M=g==="auto"&&e&&e!==1||g===!0;if(b&&(h!==Vs||u!==Vs)){var w=parseFloat(u)*Ho,x=Math.sin(w),S=Math.cos(w),R;w=parseFloat(h)*Ho,R=Math.cos(w),o=nd(y,o,x*R*-b),a=nd(y,a,-Math.sin(w)*-b),l=nd(y,l,S*R*-b+b)}p!==sl&&(v+="perspective("+p+Ws),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||o!==sl||a!==sl||l!==sl)&&(v+=l!==sl||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ws),c!==Vs&&(v+="rotate("+c+Ws),u!==Vs&&(v+="rotateY("+u+Ws),h!==Vs&&(v+="rotateX("+h+Ws),(f!==Vs||d!==Vs)&&(v+="skew("+f+", "+d+Ws),(m!==1||_!==1)&&(v+="scale("+m+", "+_+Ws),y.style[Gt]=v||"translate(0, 0)"},tS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,b=parseFloat(o),v=parseFloat(a),M,w,x,S,R;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ho,c*=Ho,M=Math.cos(l)*h,w=Math.sin(l)*h,x=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=Ho,R=Math.tan(c-u),R=Math.sqrt(1+R*R),x*=R,S*=R,u&&(R=Math.tan(u),R=Math.sqrt(1+R*R),M*=R,w*=R)),M=Jt(M),w=Jt(w),x=Jt(x),S=Jt(S)):(M=h,S=f,w=x=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=fs(d,"x",o,"px"),v=fs(d,"y",a,"px")),(m||_||p||g)&&(b=Jt(b+m-(m*M+_*x)+p),v=Jt(v+_-(m*w+_*S)+g)),(i||s)&&(R=d.getBBox(),b=Jt(b+i/100*R.width),v=Jt(v+s/100*R.height)),R="matrix("+M+","+w+","+x+","+S+","+b+","+v+")",d.setAttribute("transform",R),y&&(d.style[Gt]=R)},nS=function(e,t,n,i,s){var o=360,a=pn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Xs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Ig)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Ig)%o-~~(c/o)*o)),e._pt=f=new $n(e._pt,t,n,i,c,Bv),f.e=u,f.u="deg",e._props.push(n),f},Bg=function(e,t){for(var n in t)e[n]=t[n];return e},iS=function(e,t,n){var i=Bg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=al(n,1),hs(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=al(n,1),o[Gt]=c);for(l in Cr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=An(c),m=An(u),h=d!==m?fs(n,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new $n(e._pt,a,l,h,f-h,id),e._pt.u=m||0,e._props.push(l));Bg(a,i)};Jn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Gc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return Rr(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,_){return d[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var hd={name:"css",register:sd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,m,_,p,g,y,b,v,M,w,x,S,R;ad||sd(),this.styles=this.styles||Gg(e),S=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ai[_]&&Jf(_,t,n,i,e,s)))){if(d=typeof u,m=Gc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Bo(u)),m)m(this,e,_,u,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Er.lastIndex=0,Er.test(c)||(p=An(c),g=An(u),g?p!==g&&(c=fs(e,_,c,g)+g):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),S.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],pn(c)&&~c.indexOf("random(")&&(c=Bo(c)),An(c+"")||c==="auto"||(c+=ui.units[_]||An(Rr(e,_))||""),(c+"").charAt(1)==="="&&(c=Rr(e,_))):c=Rr(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in ar&&(_==="autoAlpha"&&(f===1&&Rr(e,"visibility")==="hidden"&&h&&(f=0),S.push("visibility",0,a.visibility),us(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ar[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Cr,b){if(this.styles.save(_),R=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=Ti(e,"perspective"),A?e.style.perspective=A:hs(e,"perspective")}h=parseFloat(u)}if(v||(M=e._gsap,M.renderTransform&&!t.parseTransform||al(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new $n(this._pt,a,Gt,0,1,M.renderTransform,M,0,-1),v.dep=1),_==="scale")this._pt=new $n(this._pt,M,"scaleY",M.scaleY,(y?Hs(M.scaleY,y+h):h)-M.scaleY||0,id),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(hi,0,a[hi]),u=jv(u),M.svg?od(e,u,0,w,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&us(this,M,"zOrigin",M.zOrigin,g),us(this,a,_,Vc(c),Vc(u)));continue}else if(_==="svgOrigin"){od(e,u,1,w,0,this);continue}else if(_ in qg){nS(this,M,_,f,y?Hs(f,y+u):u);continue}else if(_==="smoothOrigin"){us(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){iS(this,u,e);continue}}else _ in a||(_=Go(_)||_);if(b||(h||h===0)&&(f||f===0)&&!Fv.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),g=An(u)||(_ in ui.units?ui.units[_]:p),p!==g&&(f=fs(e,_,c,g)),this._pt=new $n(this._pt,b?M:a,_,f,(y?Hs(f,y+h):h)-f,!b&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Hv:id),this._pt.u=g||0,b&&R!==u?(this._pt.b=c,this._pt.e=R,this._pt.r=zv):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=kv);else if(_ in a)$v.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Fc(_,u);continue}b||(_ in a?S.push(_,0,a[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),o.push(_)}}x&&td(this)},render:function(e,t){if(t.tween._time||!ld())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Rr,aliases:ar,getSetter:function(e,t,n){var i=ar[t];return i&&i.indexOf(",")<0&&(t=i),t in Cr&&t!==hi&&(e._gsap.x||Rr(e,"x"))?n&&Pg===n?t==="scale"?Xv:Wv:(Pg=n||{})&&(t==="scale"?qv:Yv):e.style&&!Uc(e.style[t])?Gv:~t.indexOf("-")?Vv:Hc(e,t)},core:{_removeProperty:hs,_getMatrix:ud}};kn.utils.checkPrefix=Go;kn.core.getStyleSaver=Gg;(function(r,e,t,n){var i=Jn(r+","+e+","+t,function(s){Cr[s]=1});Jn(e,function(s){ui.units[s]="deg",qg[s]=1}),ar[i[13]]=r+","+e,Jn(n,function(s){var o=s.split(":");ar[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ui.units[r]="px"});kn.registerPlugin(hd);var Vt=kn.registerPlugin(hd)||kn,ZE=Vt.core.Tween;function Zg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function rS(r,e,t){return e&&Zg(r.prototype,e),t&&Zg(r,t),r}var Rn,qc,sS,fi,ds,ps,Wo,$g,Ys,Xo,jg,Pr,Zi,Qg,e_=function(){return Rn||typeof window<"u"&&(Rn=window.gsap)&&Rn.registerPlugin&&Rn},t_=1,Vo=[],je=[],Ji=[],cl=Date.now,fd=function(e,t){return t},oS=function(){var e=Xo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,je),i.push.apply(i,Ji),je=n,Ji=i,fd=function(o,a){return t[o](a)}},Lr=function(e,t){return~Ji.indexOf(e)&&Ji[Ji.indexOf(e)+1][t]},ul=function(e){return!!~jg.indexOf(e)},Qn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},jn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Wc="scrollLeft",Xc="scrollTop",dd=function(){return Pr&&Pr.isPressed||je.cache++},Yc=function(e,t){var n=function i(s){if(s||s===0){t_&&fi.history.scrollRestoration!=="manual"&&(fi.history.scrollRestoration="manual");var o=Pr&&Pr.isPressed;s=i.v=Math.round(s)||(Pr&&Pr.iOS?1:0),e(s),i.cacheID=je.cache,o&&fd("ss",s)}else(t||je.cache!==i.cacheID||fd("ref"))&&(i.cacheID=je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},zn={s:Wc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yc(function(r){return arguments.length?fi.scrollTo(r,an.sc()):fi.pageXOffset||ds[Wc]||ps[Wc]||Wo[Wc]||0})},an={s:Xc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:zn,sc:Yc(function(r){return arguments.length?fi.scrollTo(zn.sc(),r):fi.pageYOffset||ds[Xc]||ps[Xc]||Wo[Xc]||0})},ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||Rn.utils.toArray)(e)[0]||(typeof e=="string"&&Rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},aS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ir=function(e,t){var n=t.s,i=t.sc;ul(e)&&(e=ds.scrollingElement||ps);var s=je.indexOf(e),o=i===an.sc?1:2;!~s&&(s=je.push(e)-1),je[s+o]||Qn(e,"scroll",dd);var a=je[s+o],l=a||(je[s+o]=Yc(Lr(e,n),!0)||(ul(e)?i:Yc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Rn.getProperty(e,"scrollBehavior")==="smooth"),l},Kc=function(e,t,n){var i=e,s=e,o=cl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var p=cl();_||p-o>l?(s=i,i=m,a=o,o=p):n?i+=m:i=s+(m-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(m){var _=a,p=s,g=cl();return(m||m===0)&&m!==i&&u(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},ll=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Jg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},n_=function(){Xo=Rn.core.globals().ScrollTrigger,Xo&&Xo.core&&oS()},i_=function(e){return Rn=e||e_(),!qc&&Rn&&typeof document<"u"&&document.body&&(fi=window,ds=document,ps=ds.documentElement,Wo=ds.body,jg=[fi,ds,ps,Wo],sS=Rn.utils.clamp,Qg=Rn.core.context||function(){},Ys="onpointerenter"in Wo?"pointer":"mouse",$g=$t.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=$t.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return t_=0},500),qc=1),Xo||n_(),qc};zn.op=an;je.cache=0;var $t=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){qc||i_(Rn)||console.warn("Please gsap.registerPlugin(Observer)"),Xo||n_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,y=n.onDrag,b=n.onPress,v=n.onRelease,M=n.onRight,w=n.onLeft,x=n.onUp,S=n.onDown,R=n.onChangeX,A=n.onChangeY,L=n.onChange,D=n.onToggleX,F=n.onToggleY,P=n.onHover,k=n.onHoverEnd,B=n.onMove,U=n.ignoreCheck,$=n.isNormalizer,G=n.onGestureStart,I=n.onGestureEnd,j=n.onWheel,pe=n.onEnable,Ie=n.onDisable,Y=n.onClick,he=n.scrollSpeed,Se=n.capture,se=n.allowClicks,ae=n.lockAxis,oe=n.onLockAxis;this.target=a=ei(a)||ps,this.vars=n,d&&(d=Rn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,he=he||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(fi.getComputedStyle(Wo).lineHeight)||22);var De,fe,Le,we,Re,He,rt,Z=this,ot=0,nn=0,wt=n.passive||!u&&n.passive!==!1,ut=Ir(a,zn),qt=Ir(a,an),jt=ut(),z=qt(),mt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Zi[0]==="pointerdown",ft=ul(a),Xe=a.ownerDocument||ds,ge=[0,0,0],pt=[0,0,0],Be=0,Ve=function(){return Be=cl()},C=function(ye,re){return(Z.event=ye)&&d&&aS(ye.target,d)||re&&mt&&ye.pointerType!=="touch"||U&&U(ye,re)},T=function(){Z._vx.reset(),Z._vy.reset(),fe.pause(),h&&h(Z)},W=function(){var ye=Z.deltaX=Jg(ge),re=Z.deltaY=Jg(pt),te=Math.abs(ye)>=i,Me=Math.abs(re)>=i;L&&(te||Me)&&L(Z,ye,re,ge,pt),te&&(M&&Z.deltaX>0&&M(Z),w&&Z.deltaX<0&&w(Z),R&&R(Z),D&&Z.deltaX<0!=ot<0&&D(Z),ot=Z.deltaX,ge[0]=ge[1]=ge[2]=0),Me&&(S&&Z.deltaY>0&&S(Z),x&&Z.deltaY<0&&x(Z),A&&A(Z),F&&Z.deltaY<0!=nn<0&&F(Z),nn=Z.deltaY,pt[0]=pt[1]=pt[2]=0),(we||Le)&&(B&&B(Z),Le&&(p&&Le===1&&p(Z),y&&y(Z),Le=0),we=!1),He&&!(He=!1)&&oe&&oe(Z),Re&&(j(Z),Re=!1),De=0},le=function(ye,re,te){ge[te]+=ye,pt[te]+=re,Z._vx.update(ye),Z._vy.update(re),c?De||(De=requestAnimationFrame(W)):W()},ie=function(ye,re){ae&&!rt&&(Z.axis=rt=Math.abs(ye)>Math.abs(re)?"x":"y",He=!0),rt!=="y"&&(ge[2]+=ye,Z._vx.update(ye,!0)),rt!=="x"&&(pt[2]+=re,Z._vy.update(re,!0)),c?De||(De=requestAnimationFrame(W)):W()},me=function(ye){if(!C(ye,1)){ye=ll(ye,u);var re=ye.clientX,te=ye.clientY,Me=re-Z.x,ne=te-Z.y,Ce=Z.isDragging;Z.x=re,Z.y=te,(Ce||(Me||ne)&&(Math.abs(Z.startX-re)>=s||Math.abs(Z.startY-te)>=s))&&(Le||(Le=Ce?2:1),Ce||(Z.isDragging=!0),ie(Me,ne))}},ve=Z.onPress=function(ce){C(ce,1)||ce&&ce.button||(Z.axis=rt=null,fe.pause(),Z.isPressed=!0,ce=ll(ce),ot=nn=0,Z.startX=Z.x=ce.clientX,Z.startY=Z.y=ce.clientY,Z._vx.reset(),Z._vy.reset(),Qn($?a:Xe,Zi[1],me,wt,!0),Z.deltaX=Z.deltaY=0,b&&b(Z))},X=Z.onRelease=function(ce){if(!C(ce,1)){jn($?a:Xe,Zi[1],me,!0);var ye=!isNaN(Z.y-Z.startY),re=Z.isDragging,te=re&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),Me=ll(ce);!te&&ye&&(Z._vx.reset(),Z._vy.reset(),u&&se&&Rn.delayedCall(.08,function(){if(cl()-Be>300&&!ce.defaultPrevented){if(ce.target.click)ce.target.click();else if(Xe.createEvent){var ne=Xe.createEvent("MouseEvents");ne.initMouseEvent("click",!0,!0,fi,1,Me.screenX,Me.screenY,Me.clientX,Me.clientY,!1,!1,!1,!1,0,null),ce.target.dispatchEvent(ne)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,h&&re&&!$&&fe.restart(!0),Le&&W(),g&&re&&g(Z),v&&v(Z,te)}},ee=function(ye){return ye.touches&&ye.touches.length>1&&(Z.isGesturing=!0)&&G(ye,Z.isDragging)},de=function(){return(Z.isGesturing=!1)||I(Z)},N=function(ye){if(!C(ye)){var re=ut(),te=qt();le((re-jt)*he,(te-z)*he,1),jt=re,z=te,h&&fe.restart(!0)}},Q=function(ye){if(!C(ye)){ye=ll(ye,u),j&&(Re=!0);var re=(ye.deltaMode===1?l:ye.deltaMode===2?fi.innerHeight:1)*m;le(ye.deltaX*re,ye.deltaY*re,0),h&&!$&&fe.restart(!0)}},J=function(ye){if(!C(ye)){var re=ye.clientX,te=ye.clientY,Me=re-Z.x,ne=te-Z.y;Z.x=re,Z.y=te,we=!0,h&&fe.restart(!0),(Me||ne)&&ie(Me,ne)}},_e=function(ye){Z.event=ye,P(Z)},ue=function(ye){Z.event=ye,k(Z)},xe=function(ye){return C(ye)||ll(ye,u)&&Y(Z)};fe=Z._dc=Rn.delayedCall(f||.25,T).pause(),Z.deltaX=Z.deltaY=0,Z._vx=Kc(0,50,!0),Z._vy=Kc(0,50,!0),Z.scrollX=ut,Z.scrollY=qt,Z.isDragging=Z.isGesturing=Z.isPressed=!1,Qg(this),Z.enable=function(ce){return Z.isEnabled||(Qn(ft?Xe:a,"scroll",dd),o.indexOf("scroll")>=0&&Qn(ft?Xe:a,"scroll",N,wt,Se),o.indexOf("wheel")>=0&&Qn(a,"wheel",Q,wt,Se),(o.indexOf("touch")>=0&&$g||o.indexOf("pointer")>=0)&&(Qn(a,Zi[0],ve,wt,Se),Qn(Xe,Zi[2],X),Qn(Xe,Zi[3],X),se&&Qn(a,"click",Ve,!0,!0),Y&&Qn(a,"click",xe),G&&Qn(Xe,"gesturestart",ee),I&&Qn(Xe,"gestureend",de),P&&Qn(a,Ys+"enter",_e),k&&Qn(a,Ys+"leave",ue),B&&Qn(a,Ys+"move",J)),Z.isEnabled=!0,Z.isDragging=Z.isGesturing=Z.isPressed=we=Le=!1,Z._vx.reset(),Z._vy.reset(),jt=ut(),z=qt(),ce&&ce.type&&ve(ce),pe&&pe(Z)),Z},Z.disable=function(){Z.isEnabled&&(Vo.filter(function(ce){return ce!==Z&&ul(ce.target)}).length||jn(ft?Xe:a,"scroll",dd),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),jn($?a:Xe,Zi[1],me,!0)),jn(ft?Xe:a,"scroll",N,Se),jn(a,"wheel",Q,Se),jn(a,Zi[0],ve,Se),jn(Xe,Zi[2],X),jn(Xe,Zi[3],X),jn(a,"click",Ve,!0),jn(a,"click",xe),jn(Xe,"gesturestart",ee),jn(Xe,"gestureend",de),jn(a,Ys+"enter",_e),jn(a,Ys+"leave",ue),jn(a,Ys+"move",J),Z.isEnabled=Z.isPressed=Z.isDragging=!1,Ie&&Ie(Z))},Z.kill=Z.revert=function(){Z.disable();var ce=Vo.indexOf(Z);ce>=0&&Vo.splice(ce,1),Pr===Z&&(Pr=0)},Vo.push(Z),$&&ul(a)&&(Pr=Z),Z.enable(_)},rS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$t.version="3.15.1";$t.create=function(r){return new $t(r)};$t.register=i_;$t.getAll=function(){return Vo.slice()};$t.getById=function(r){return Vo.filter(function(e){return e.vars.id===r})[0]};e_()&&Rn.registerPlugin($t);var Ne,Zo,tt,St,Ai,yt,Ad,uu,bl,_l,fl,Zc,Hn,du,vd,ni,r_,s_,Jo,S_,pd,M_,ti,Sd,b_,T_,ms,Md,Rd,$o,Cd,gs,bd,md,Jc=1,Gn=Date.now,gd=Gn(),zi=0,dl=0,o_=function(e,t,n){var i=Ei(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},a_=function(e,t){return t&&(!Ei(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},lS=function r(){return dl&&requestAnimationFrame(r)},l_=function(){return du=1},c_=function(){return du=0},lr=function(e){return e},pl=function(e){return Math.round(e*1e5)/1e5||0},w_=function(){return typeof window<"u"},E_=function(){return Ne||w_()&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},Qs=function(e){return!!~Ad.indexOf(e)},A_=function(e){return(e==="Height"?Cd:tt["inner"+e])||Ai["client"+e]||yt["client"+e]},R_=function(e){return Lr(e,"getBoundingClientRect")||(Qs(e)?function(){return cu.width=tt.innerWidth,cu.height=Cd,cu}:function(){return Dr(e)})},cS=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?A_(s):e["client"+s])||0}},uS=function(e,t){return!t||~Ji.indexOf(e)?R_(e):function(){return cu}},cr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Lr(e,n))?o()-R_(e)()[s]:Qs(e)?(Ai[n]||yt[n])-A_(i):e[n]-e["offset"+i])},$c=function(e,t){for(var n=0;n<Jo.length;n+=3)(!t||~t.indexOf(Jo[n+1]))&&e(Jo[n],Jo[n+1],Jo[n+2])},Ei=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},ml=function(e){return typeof e=="number"},Ks=function(e){return typeof e=="object"},hl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},qo=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Yo=Math.abs,C_="left",P_="top",Pd="right",Id="bottom",Js="width",$s="height",xl="Right",yl="Left",vl="Top",Sl="Bottom",ln="padding",Bi="margin",Qo="Width",Ld="Height",mn="px",ki=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},hS=function(e){var t=ki(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},u_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Dr=function(e,t){var n=t&&ki(e)[vd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ne.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},hu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},I_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},fS=function(e){return function(t){return Ne.utils.snap(I_(e),t)}},Dd=function(e){var t=Ne.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},dS=function(e){return function(t,n){return Dd(I_(e))(t,n.direction)}},jc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},h_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},eu={toggleActions:"play",anticipatePin:0},fu={top:0,left:0,center:.5,bottom:1,right:1},su=function(e,t){if(Ei(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in fu?fu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},tu=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=St.createElement("div"),_=Qs(n)||Lr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?yt:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,b=y?c:u,v="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(i===an?Pd:Id)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],ou(m,0,i,y),m},ou=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Qo]=1,s["border"+a+Qo]=0,s[n.p]=t+"px",Ne.set(e,s)},et=[],Td={},Tl,f_=function(){return Gn()-zi>34&&(Tl||(Tl=requestAnimationFrame(Nr)))},Ko=function(){(!ti||!ti.isPressed||ti.startX>yt.clientWidth)&&(je.cache++,ti?Tl||(Tl=requestAnimationFrame(Nr)):Nr(),zi||to("scrollStart"),zi=Gn())},_d=function(){T_=tt.innerWidth,b_=tt.innerHeight},gl=function(e){je.cache++,(e===!0||!Hn&&!M_&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!Sd||T_!==tt.innerWidth||Math.abs(tt.innerHeight-b_)>tt.innerHeight*.25))&&uu.restart(!0)},eo={},pS=[],L_=function r(){return Sn(Je,"scrollEnd",r)||Zs(!0)},to=function(e){return eo[e]&&eo[e].map(function(t){return t()})||pS},wi=[],D_=function(e){for(var t=0;t<wi.length;t+=5)(!e||wi[t+4]&&wi[t+4].query===e)&&(wi[t].style.cssText=wi[t+1],wi[t].getBBox&&wi[t].setAttribute("transform",wi[t+2]||""),wi[t+3].uncache=1)},N_=function(){je.cache++,je.forEach(function(e){return Vn(e)&&(e.rec=e())})},Nd=function(e,t){var n;for(ni=0;ni<et.length;ni++)n=et[ni],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));gs=!0,t&&D_(t),t||to("revert")},O_=function(e,t){je.cache++,(t||!ii)&&je.forEach(function(n){return Vn(n)&&n.cacheID++&&(n.rec=0)}),Ei(e)&&(Rd=e,tt.history.scrollRestoration!==e&&(tt.history.scrollRestoration=e))},ii,js=0,d_,mS=function(){if(d_!==js){var e=d_=js;requestAnimationFrame(function(){return e===js&&Zs(!0)})}},U_=function(){yt.appendChild($o),Cd=!ti&&$o.offsetHeight||tt.innerHeight,yt.removeChild($o)},p_=function(e){return bl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Zs=function(e,t){if(Ai=St.documentElement,yt=St.body,Ad=[tt,St,Ai,yt],zi&&!e&&!gs){Mn(Je,"scrollEnd",L_);return}U_(),ii=Je.isRefreshing=!0,gs||N_();var n=to("refreshInit");S_&&Je.sort(),t||Nd(),je.forEach(function(i){Vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),gs=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),bd=1,p_(!0),et.forEach(function(i){var s=cr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),p_(!1),bd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),je.forEach(function(i){Vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),O_(Rd,1),uu.pause(),js++,ii=2,Nr(2),et.forEach(function(i){return Vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ii=Je.isRefreshing=!1,to("refresh")},wd=0,au=1,Ml,Nr=function(e){if(e===2||!ii&&!gs){Je.isUpdating=!0,Ml&&Ml.update(0);var t=et.length,n=Gn(),i=n-gd>=50,s=t&&et[0].scroll();if(au=wd>s?-1:1,ii||(wd=s),i&&(zi&&!du&&n-zi>200&&(zi=0,to("scrollEnd")),fl=gd,gd=n),au<0){for(ni=t;ni-- >0;)et[ni]&&et[ni].update(0,i);au=1}else for(ni=0;ni<t;ni++)et[ni]&&et[ni].update(0,i);Je.isUpdating=!1}Tl=0},Ed=[C_,P_,Id,Pd,Bi+Sl,Bi+xl,Bi+vl,Bi+yl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],lu=Ed.concat([Js,$s,"boxSizing","max"+Qo,"max"+Ld,"position",Bi,ln,ln+vl,ln+xl,ln+Sl,ln+yl]),gS=function(e,t,n){jo(n);var i=e._gsap;if(i.spacerIsNative)jo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xd=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ed.length,o=t.style,a=e.style,l;s--;)l=Ed[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Id]=a[Pd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Js]=hu(e,zn)+mn,o[$s]=hu(e,an)+mn,o[ln]=a[Bi]=a[P_]=a[C_]="0",jo(i),a[Js]=a["max"+Qo]=n[Js],a[$s]=a["max"+Ld]=n[$s],a[ln]=n[ln],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_S=/([A-Z])/g,jo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ne.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(_S,"-$1").toLowerCase())}},nu=function(e){for(var t=lu.length,n=e.style,i=[],s=0;s<t;s++)i.push(lu[s],n[lu[s]]);return i.t=e,i},xS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},cu={left:0,top:0},m_=function(e,t,n,i,s,o,a,l,c,u,h,f,d,m){Vn(e)&&(e=e(l)),Ei(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?su("0"+e.substr(3),n):0));var _=d?d.time():0,p,g,y;if(d&&d.seek(0),isNaN(e)||(e=+e),ml(e))d&&(e=Ne.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&ou(a,n,i,!0);else{Vn(t)&&(t=t(l));var b=(e||"0").split(" "),v,M,w,x;y=ei(t,l)||yt,v=Dr(y)||{},(!v||!v.left&&!v.top)&&ki(y).display==="none"&&(x=y.style.display,y.style.display="block",v=Dr(y),x?y.style.display=x:y.style.removeProperty("display")),M=su(b[0],v[i.d]),w=su(b[1]||"0",n),e=v[i.p]-c[i.p]-u+M+s-w,a&&ou(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var S=e+n,R=o._isStart;p="scroll"+i.d2,ou(o,S,i,R&&S>20||!R&&(h?Math.max(yt[p],Ai[p]):o.parentNode[p])<=S+1),h&&(c=Dr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+mn))}return d&&y&&(p=Dr(y),d.seek(f),g=Dr(y),d._caScrollDist=p[i.p]-g[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},yS=/(webkit|moz|length|cssText|inset)/i,g_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=ki(e);for(o in a)!+o&&!yS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ne.core.getCache(e).uncache=1,t.appendChild(e)}},F_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},iu=function(e,t,n){var i={};i[t.p]="+="+n,Ne.set(e,i)},__=function(e,t){var n=Ir(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,m={};c=c||n();var _=F_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){je.cache++,o.tween&&Nr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ne.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Mn(e,"wheel",n.wheelHandler),Je.isTouch&&Mn(e,"touchmove",n.wheelHandler),s},Je=(function(){function r(t,n){Zo||r.register(Ne)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Md(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!dl){this.update=this.refresh=this.kill=lr;return}n=u_(Ei(n)||ml(n)||n.nodeType?{trigger:n}:n,eu);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,b=s.once,v=s.snap,M=s.pinReparent,w=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,R=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?zn:an,L=!h&&h!==0,D=ei(n.scroller||tt),F=Ne.core.getCache(D),P=Qs(D),k=("pinType"in n?n.pinType:Lr(D,"pinType")||P&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=L&&n.toggleActions.split(" "),$="markers"in n?n.markers:eu.markers,G=P?0:parseFloat(ki(D)["border"+A.p2+Qo])||0,I=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(I)},pe=cS(D,P,A),Ie=uS(D,P),Y=0,he=0,Se=0,se=Ir(D,A),ae,oe,De,fe,Le,we,Re,He,rt,Z,ot,nn,wt,ut,qt,jt,z,mt,ft,Xe,ge,pt,Be,Ve,C,T,W,le,ie,me,ve,X,ee,de,N,Q,J,_e,ue;if(I._startClamp=I._endClamp=!1,I._dir=A,p*=45,I.scroller=D,I.scroll=x?x.time.bind(x):se,fe=se(),gs&&se.rec==null&&(se.rec=fe),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(S_=1,n.refreshPriority===-9999&&(Ml=I)),F.tweenScroll=F.tweenScroll||{top:__(D,an),left:__(D,zn)},I.tweenTo=ae=F.tweenScroll[A.p],I.scrubDuration=function(te){ee=ml(te)&&te,ee?X?X.duration(te):X=Ne.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return g&&g(I)}}):(X&&X.progress(1).kill(),X=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),me=0,l||(l=i.vars.id)),v&&((!Ks(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in yt.style&&Ne.set(P?[yt,Ai]:D,{scrollBehavior:"auto"}),je.forEach(function(te){return Vn(te)&&te.target===(P?St.scrollingElement||Ai:D)&&(te.smooth=!1)}),De=Vn(v.snapTo)?v.snapTo:v.snapTo==="labels"?fS(i):v.snapTo==="labelsDirectional"?dS(i):v.directional!==!1?function(te,Me){return Dd(v.snapTo)(te,Gn()-he<500?0:Me.direction)}:Ne.utils.snap(v.snapTo),de=v.duration||{min:.1,max:2},de=Ks(de)?_l(de.min,de.max):_l(de,de),N=Ne.delayedCall(v.delay||ee/2||.1,function(){var te=se(),Me=Gn()-he<500,ne=ae.tween;if((Me||Math.abs(I.getVelocity())<10)&&!ne&&!du&&Y!==te){var Ce=(te-we)/ut,at=i&&!L?i.totalProgress():Ce,Ke=Me?0:(at-ve)/(Gn()-fl)*1e3||0,Ot=Ne.utils.clamp(-Ce,1-Ce,Yo(Ke/2)*Ke/.185),rn=Ce+(v.inertia===!1?0:Ot),Ut,Et,xt=v,hn=xt.onStart,At=xt.onInterrupt,Nn=xt.onComplete;if(Ut=De(rn,I),ml(Ut)||(Ut=rn),Et=Math.max(0,Math.round(we+Ut*ut)),te<=Re&&te>=we&&Et!==te){if(ne&&!ne._initted&&ne.data<=Yo(Et-te))return;v.inertia===!1&&(Ot=Ut-Ce),ae(Et,{duration:de(Yo(Math.max(Yo(rn-at),Yo(Ut-at))*.185/Ke/.05||0)),ease:v.ease||"power3",data:Yo(Et-te),onInterrupt:function(){return N.restart(!0)&&At&&qo(I,At)},onComplete:function(){I.update(),Y=se(),i&&!L&&(X?X.resetTo("totalProgress",Ut,i._tTime/i._tDur):i.progress(Ut)),me=ve=i&&!L?i.totalProgress():I.progress,y&&y(I),Nn&&qo(I,Nn)}},te,Ot*ut,Et-te-Ot*ut),hn&&qo(I,hn,ae.tween)}}else I.isActive&&Y!==te&&N.restart(!0)}).pause()),l&&(Td[l]=I),f=I.trigger=ei(f||d!==!0&&d),ue=f&&f._gsap&&f._gsap.stRevert,ue&&(ue=ue(I)),d=d===!0?f:ei(d),Ei(a)&&(a={targets:f,className:a}),d&&(m===!1||m===Bi||(m=!m&&d.parentNode&&d.parentNode.style&&ki(d.parentNode).display==="flex"?!1:ln),I.pin=d,oe=Ne.core.getCache(d),oe.spacer?qt=oe.pinState:(w&&(w=ei(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),oe.spacerIsNative=!!w,w&&(oe.spacerState=nu(w))),oe.spacer=mt=w||St.createElement("div"),mt.classList.add("pin-spacer"),l&&mt.classList.add("pin-spacer-"+l),oe.pinState=qt=nu(d)),n.force3D!==!1&&Ne.set(d,{force3D:!0}),I.spacer=mt=oe.spacer,ie=ki(d),Ve=ie[m+A.os2],Xe=Ne.getProperty(d),ge=Ne.quickSetter(d,A.a,mn),xd(d,mt,ie),z=nu(d)),$){nn=Ks($)?u_($,h_):h_,Z=tu("scroller-start",l,D,A,nn,0),ot=tu("scroller-end",l,D,A,nn,0,Z),ft=Z["offset"+A.op.d2];var xe=ei(Lr(D,"content")||D);He=this.markerStart=tu("start",l,xe,A,nn,ft,0,x),rt=this.markerEnd=tu("end",l,xe,A,nn,ft,0,x),x&&(_e=Ne.quickSetter([He,rt],A.a,mn)),!k&&!(Ji.length&&Lr(D,"fixedMarkers")===!0)&&(hS(P?yt:D),Ne.set([Z,ot],{force3D:!0}),T=Ne.quickSetter(Z,A.a,mn),le=Ne.quickSetter(ot,A.a,mn))}if(x){var ce=x.vars.onUpdate,ye=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){I.update(0,0,1),ce&&ce.apply(x,ye||[])})}if(I.previous=function(){return et[et.indexOf(I)-1]},I.next=function(){return et[et.indexOf(I)+1]},I.revert=function(te,Me){if(!Me)return I.kill(!0);var ne=te!==!1||!I.enabled,Ce=Hn;ne!==I.isReverted&&(ne&&(Q=Math.max(se(),I.scroll.rec||0),Se=I.progress,J=i&&i.progress()),He&&[He,rt,Z,ot].forEach(function(at){return at.style.display=ne?"none":"block"}),ne&&(Hn=I,I.update(ne)),d&&(!M||!I.isActive)&&(ne?gS(d,mt,qt):xd(d,mt,ki(d),C)),ne||I.update(ne),Hn=Ce,I.isReverted=ne)},I.refresh=function(te,Me,ne,Ce){if(!((Hn||!I.enabled)&&!Me)){if(d&&te&&zi){Mn(r,"scrollEnd",L_);return}!ii&&j&&j(I),Hn=I,ae.tween&&!ne&&(ae.tween.kill(),ae.tween=0),X&&X.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(V){return V.vars.immediateRender&&V.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var at=pe(),Ke=Ie(),Ot=x?x.duration():cr(D,A),rn=ut<=.01||!ut,Ut=0,Et=Ce||0,xt=Ks(ne)?ne.end:n.end,hn=n.endTrigger||f,At=Ks(ne)?ne.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Nn=I.pinnedContainer=n.pinnedContainer&&ei(n.pinnedContainer,I),yi=f&&Math.max(0,et.indexOf(I))||0,Yt=yi,sn,fn,vi,Lo,dn,Kt,Ni,qa,bc,ns,E,O,K;for($&&Ks(ne)&&(O=Ne.getProperty(Z,A.p),K=Ne.getProperty(ot,A.p));Yt-- >0;)Kt=et[Yt],Kt.end||Kt.refresh(0,1)||(Hn=I),Ni=Kt.pin,Ni&&(Ni===f||Ni===d||Ni===Nn)&&!Kt.isReverted&&(ns||(ns=[]),ns.unshift(Kt),Kt.revert(!0,!0)),Kt!==et[Yt]&&(yi--,Yt--);for(Vn(At)&&(At=At(I)),At=o_(At,"start",I),we=m_(At,f,at,A,se(),He,Z,I,Ke,G,k,Ot,x,I._startClamp&&"_startClamp")||(d?-.001:0),Vn(xt)&&(xt=xt(I)),Ei(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(Ei(At)?At.split(" ")[0]:"")+xt:(Ut=su(xt.substr(2),at),xt=Ei(At)?At:(x?Ne.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,we):we)+Ut,hn=f)),xt=o_(xt,"end",I),Re=Math.max(we,m_(xt||(hn?"100% 0":Ot),hn,at,A,se()+Ut,rt,ot,I,Ke,G,k,Ot,x,I._endClamp&&"_endClamp"))||-.001,Ut=0,Yt=yi;Yt--;)Kt=et[Yt]||{},Ni=Kt.pin,Ni&&Kt.start-Kt._pinPush<=we&&!x&&Kt.end>0&&(sn=Kt.end-(I._startClamp?Math.max(0,Kt.start):Kt.start),(Ni===f&&Kt.start-Kt._pinPush<we||Ni===Nn)&&isNaN(At)&&(Ut+=sn*(1-Kt.progress)),Ni===d&&(Et+=sn));if(we+=Ut,Re+=Ut,I._startClamp&&(I._startClamp+=Ut),I._endClamp&&!ii&&(I._endClamp=Re||-.001,Re=Math.min(Re,cr(D,A))),ut=Re-we||(we-=.01)&&.001,rn&&(Se=Ne.utils.clamp(0,1,Ne.utils.normalize(we,Re,Q))),I._pinPush=Et,He&&Ut&&(sn={},sn[A.a]="+="+Ut,Nn&&(sn[A.p]="-="+se()),Ne.set([He,rt],sn)),d&&!(bd&&I.end>=cr(D,A)))sn=ki(d),Lo=A===an,vi=se(),pt=parseFloat(Xe(A.a))+Et,!Ot&&Re>1&&(E=(P?St.scrollingElement||Ai:D).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},P&&ki(yt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),xd(d,mt,sn),z=nu(d),fn=Dr(d,!0),qa=k&&Ir(D,Lo?zn:an)(),m?(C=[m+A.os2,ut+Et+mn],C.t=mt,Yt=m===ln?hu(d,A)+ut+Et:0,Yt&&(C.push(A.d,Yt+mn),mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Yt+mn)),jo(C),Nn&&et.forEach(function(V){V.pin===Nn&&V.vars.pinSpacing!==!1&&(V._subPinOffset=!0)}),k&&se(Q)):(Yt=hu(d,A),Yt&&mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Yt+mn)),k&&(dn={top:fn.top+(Lo?vi-we:qa)+mn,left:fn.left+(Lo?qa:vi-we)+mn,boxSizing:"border-box",position:"fixed"},dn[Js]=dn["max"+Qo]=Math.ceil(fn.width)+mn,dn[$s]=dn["max"+Ld]=Math.ceil(fn.height)+mn,dn[Bi]=dn[Bi+vl]=dn[Bi+xl]=dn[Bi+Sl]=dn[Bi+yl]="0",dn[ln]=sn[ln],dn[ln+vl]=sn[ln+vl],dn[ln+xl]=sn[ln+xl],dn[ln+Sl]=sn[ln+Sl],dn[ln+yl]=sn[ln+yl],jt=xS(qt,dn,M),ii&&se(0)),i?(bc=i._initted,pd(1),i.render(i.duration(),!0,!0),Be=Xe(A.a)-pt+ut+Et,W=Math.abs(ut-Be)>1,k&&W&&jt.splice(jt.length-2,2),i.render(0,!0,!0),bc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pd(0)):Be=ut,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(f&&se()&&!x)for(fn=f.parentNode;fn&&fn!==yt;)fn._pinOffset&&(we-=fn._pinOffset,Re-=fn._pinOffset),fn=fn.parentNode;ns&&ns.forEach(function(V){return V.revert(!1,!0)}),I.start=we,I.end=Re,fe=Le=ii?Q:se(),!x&&!ii&&!gs&&(fe<Q&&se(Q),I.scroll.rec=0),I.revert(!1,!0),he=Gn(),N&&(Y=-1,N.restart(!0)),Hn=0,i&&L&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(rn||Se!==I.progress||x||_||i&&!i._initted)&&(i&&!L&&(i._initted||Se||i.vars.immediateRender!==!1)&&i.totalProgress(x&&we<-.001&&!Se?Ne.utils.normalize(we,Re,0):Se,!0),I.progress=rn||(fe-we)/ut===Se?0:Se),d&&m&&(mt._pinOffset=Math.round(I.progress*Be)),X&&X.invalidate(),isNaN(O)||(O-=Ne.getProperty(Z,A.p),K-=Ne.getProperty(ot,A.p),iu(Z,A,O),iu(He,A,O-(Ce||0)),iu(ot,A,K),iu(rt,A,K-(Ce||0))),rn&&!ii&&I.update(),u&&!ii&&!wt&&(wt=!0,u(I),wt=!1)}},I.getVelocity=function(){return(se()-Le)/(Gn()-fl)*1e3||0},I.endAnimation=function(){hl(I.callbackAnimation),i&&(X?X.progress(1):i.paused()?L||hl(i,I.direction<0,1):hl(i,i.reversed()))},I.labelToScroll=function(te){return i&&i.labels&&(we||I.refresh()||we)+i.labels[te]/i.duration()*ut||0},I.getTrailing=function(te){var Me=et.indexOf(I),ne=I.direction>0?et.slice(0,Me).reverse():et.slice(Me+1);return(Ei(te)?ne.filter(function(Ce){return Ce.vars.preventOverlaps===te}):ne).filter(function(Ce){return I.direction>0?Ce.end<=we:Ce.start>=Re})},I.update=function(te,Me,ne){if(!(x&&!ne&&!te)){var Ce=ii===!0?Q:I.scroll(),at=te?0:(Ce-we)/ut,Ke=at<0?0:at>1?1:at||0,Ot=I.progress,rn,Ut,Et,xt,hn,At,Nn,yi;if(Me&&(Le=fe,fe=x?se():Ce,v&&(ve=me,me=i&&!L?i.totalProgress():Ke)),p&&d&&!Hn&&!Jc&&zi&&(!Ke&&we<Ce+(Ce-Le)/(Gn()-fl)*p?Ke=1e-4:Ke===1&&Re>Ce+(Ce-Le)/(Gn()-fl)*p&&(Ke=.9999)),Ke!==Ot&&I.enabled){if(rn=I.isActive=!!Ke&&Ke<1,Ut=!!Ot&&Ot<1,At=rn!==Ut,hn=At||!!Ke!=!!Ot,I.direction=Ke>Ot?1:-1,I.progress=Ke,hn&&!Hn&&(Et=Ke&&!Ot?0:Ke===1?1:Ot===1?2:3,L&&(xt=!At&&U[Et+1]!=="none"&&U[Et+1]||U[Et],yi=i&&(xt==="complete"||xt==="reset"||xt in i))),R&&(At||yi)&&(yi||h||!i)&&(Vn(R)?R(I):I.getTrailing(R).forEach(function(vi){return vi.endAnimation()})),L||(X&&!Hn&&!Jc?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",Ke,i._tTime/i._tDur):(X.vars.totalProgress=Ke,X.invalidate().restart())):i&&i.totalProgress(Ke,!!(Hn&&(he||te)))),d){if(te&&m&&(mt.style[m+A.os2]=Ve),!k)ge(pl(pt+Be*Ke));else if(hn){if(Nn=!te&&Ke>Ot&&Re+1>Ce&&Ce+1>=cr(D,A),M)if(!te&&(rn||Nn)){var Yt=Dr(d,!0),sn=Ce-we;g_(d,yt,Yt.top+(A===an?sn:0)+mn,Yt.left+(A===an?0:sn)+mn)}else g_(d,mt);jo(rn||Nn?jt:z),W&&Ke<1&&rn||ge(pt+(Ke===1&&!Nn?Be:0))}}v&&!ae.tween&&!Hn&&!Jc&&N.restart(!0),a&&(At||b&&Ke&&(Ke<1||!md))&&bl(a.targets).forEach(function(vi){return vi.classList[rn||b?"add":"remove"](a.className)}),o&&!L&&!te&&o(I),hn&&!Hn?(L&&(yi&&(xt==="complete"?i.pause().totalProgress(1):xt==="reset"?i.restart(!0).pause():xt==="restart"?i.restart(!0):i[xt]()),o&&o(I)),(At||!md)&&(c&&At&&qo(I,c),B[Et]&&qo(I,B[Et]),b&&(Ke===1?I.kill(!1,1):B[Et]=0),At||(Et=Ke===1?1:3,B[Et]&&qo(I,B[Et]))),S&&!rn&&Math.abs(I.getVelocity())>(ml(S)?S:2500)&&(hl(I.callbackAnimation),X?X.progress(1):hl(i,xt==="reverse"?1:!Ke,1))):L&&o&&!Hn&&o(I)}if(le){var fn=x?Ce/x.duration()*(x._caScrollDist||0):Ce;T(fn+(Z._isFlipped?1:0)),le(fn)}_e&&_e(-Ce/x.duration()*(x._caScrollDist||0))}},I.enable=function(te,Me){I.enabled||(I.enabled=!0,Mn(D,"resize",gl),P||Mn(D,"scroll",Ko),j&&Mn(r,"refreshInit",j),te!==!1&&(I.progress=Se=0,fe=Le=Y=se()),Me!==!1&&I.refresh())},I.getTween=function(te){return te&&ae?ae.tween:X},I.setPositions=function(te,Me,ne,Ce){if(x){var at=x.scrollTrigger,Ke=x.duration(),Ot=at.end-at.start;te=at.start+Ot*te/Ke,Me=at.start+Ot*Me/Ke}I.refresh(!1,!1,{start:a_(te,ne&&!!I._startClamp),end:a_(Me,ne&&!!I._endClamp)},Ce),I.update()},I.adjustPinSpacing=function(te){if(C&&te){var Me=C.indexOf(A.d)+1;C[Me]=parseFloat(C[Me])+te+mn,C[1]=parseFloat(C[1])+te+mn,jo(C)}},I.disable=function(te,Me){if(te!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Me||X&&X.pause(),Q=0,oe&&(oe.uncache=1),j&&Sn(r,"refreshInit",j),N&&(N.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!P)){for(var ne=et.length;ne--;)if(et[ne].scroller===D&&et[ne]!==I)return;Sn(D,"resize",gl),P||Sn(D,"scroll",Ko)}},I.kill=function(te,Me){I.disable(te,Me),X&&!Me&&X.kill(),l&&delete Td[l];var ne=et.indexOf(I);ne>=0&&et.splice(ne,1),ne===ni&&au>0&&ni--,ne=0,et.forEach(function(Ce){return Ce.scroller===I.scroller&&(ne=1)}),ne||ii||gs||(I.scroll.rec=0),i&&(i.scrollTrigger=null,te&&i.revert({kill:!1}),Me||i.kill()),He&&[He,rt,Z,ot].forEach(function(Ce){return Ce.parentNode&&Ce.parentNode.removeChild(Ce)}),Ml===I&&(Ml=0),d&&(oe&&(oe.uncache=1),ne=0,et.forEach(function(Ce){return Ce.pin===d&&ne++}),ne||(oe.spacer=0)),n.onKill&&n.onKill(I)},et.push(I),I.enable(!1,!1),ue&&ue(I),i&&i.add&&!ut){var re=I.update;I.update=function(){I.update=re,je.cache++,we||Re||I.refresh()},Ne.delayedCall(.01,I.update),ut=.01,we=Re=0}else I.refresh();d&&mS()},r.register=function(n){return Zo||(Ne=n||E_(),w_()&&window.document&&r.enable(),Zo=dl),Zo},r.defaults=function(n){if(n)for(var i in n)eu[i]=n[i];return eu},r.disable=function(n,i){dl=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),Sn(tt,"wheel",Ko),Sn(St,"scroll",Ko),clearInterval(Zc),Sn(St,"touchcancel",lr),Sn(yt,"touchstart",lr),jc(Sn,St,"pointerdown,touchstart,mousedown",l_),jc(Sn,St,"pointerup,touchend,mouseup",c_),uu.kill(),$c(Sn);for(var s=0;s<je.length;s+=3)Qc(Sn,je[s],je[s+1]),Qc(Sn,je[s],je[s+2])},r.enable=function(){if(tt=window,St=document,Ai=St.documentElement,yt=St.body,Ne){if(bl=Ne.utils.toArray,_l=Ne.utils.clamp,Md=Ne.core.context||lr,pd=Ne.core.suppressOverwrites||lr,Rd=tt.history.scrollRestoration||"auto",wd=tt.pageYOffset||0,Ne.core.globals("ScrollTrigger",r),yt){dl=1,$o=document.createElement("div"),$o.style.height="100vh",$o.style.position="absolute",U_(),lS(),$t.register(Ne),r.isTouch=$t.isTouch,ms=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sd=$t.isTouch===1,Mn(tt,"wheel",Ko),Ad=[tt,St,Ai,yt],Ne.matchMedia?(r.matchMedia=function(u){var h=Ne.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ne.addEventListener("matchMediaInit",function(){N_(),Nd()}),Ne.addEventListener("matchMediaRevert",function(){return D_()}),Ne.addEventListener("matchMedia",function(){Zs(0,1),to("matchMedia")}),Ne.matchMedia().add("(orientation: portrait)",function(){return _d(),_d})):console.warn("Requires GSAP 3.11.0 or later"),_d(),Mn(St,"scroll",Ko);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=Ne.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Dr(yt),an.m=Math.round(a.top+an.sc())||0,zn.m=Math.round(a.left+zn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),Zc=setInterval(f_,250),Ne.delayedCall(.5,function(){return Jc=0}),Mn(St,"touchcancel",lr),Mn(yt,"touchstart",lr),jc(Mn,St,"pointerdown,touchstart,mousedown",l_),jc(Mn,St,"pointerup,touchend,mouseup",c_),vd=Ne.utils.checkPrefix("transform"),lu.push(vd),Zo=Gn(),uu=Ne.delayedCall(.2,Zs).pause(),Jo=[St,"visibilitychange",function(){var u=tt.innerWidth,h=tt.innerHeight;St.hidden?(r_=u,s_=h):(r_!==u||s_!==h)&&gl()},St,"DOMContentLoaded",Zs,tt,"load",Zs,tt,"resize",gl],$c(Mn),et.forEach(function(u){return u.enable(0,1)}),l=0;l<je.length;l+=3)Qc(Sn,je[l],je[l+1]),Qc(Sn,je[l],je[l+2])}else if(St){var c=function u(){r.enable(),St.removeEventListener("DOMContentLoaded",u)};St.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(md=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Zc)||(Zc=i)&&setInterval(f_,i),"ignoreMobileResize"in n&&(Sd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($c(Sn)||$c(Mn,n.autoRefreshEvents||"none"),M_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ei(n),o=je.indexOf(s),a=Qs(s);~o&&je.splice(o,a?6:2),i&&(a?Ji.unshift(tt,i,yt,i,Ai,i):Ji.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Ei(n)?ei(n):n).getBoundingClientRect(),a=o[s?Js:$s]*i||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},r.positionInViewport=function(n,i,s){Ei(n)&&(n=ei(n));var o=n.getBoundingClientRect(),a=o[s?Js:$s],l=i==null?a/2:i in fu?fu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=eo.killAll||[];eo={},i.forEach(function(s){return s()})}},r})();Je.version="3.15.1";Je.saveStyles=function(r){return r?bl(r).forEach(function(e){if(e&&e.style){var t=wi.indexOf(e);t>=0&&wi.splice(t,5),wi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ne.core.getCache(e),Md())}}):wi};Je.revert=function(r,e){return Nd(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?gl(!0):(Zo||Je.register())&&Zs(!0)};Je.update=function(r){return++je.cache&&Nr(r===!0?2:0)};Je.clearScrollMemory=O_;Je.maxScroll=function(r,e){return cr(r,e?zn:an)};Je.getScrollFunc=function(r,e){return Ir(ei(r),e?zn:an)};Je.getById=function(r){return Td[r]};Je.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!zi};Je.snapDirectional=Dd;Je.addEventListener=function(r,e){var t=eo[r]||(eo[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=eo[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ne.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Vn(s)&&(s=s(),Mn(Je,"refresh",function(){return s=e.batchMax()})),bl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var x_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},yd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===Ai&&r(yt,t)},ru={auto:1,scroll:1},vS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ne.core.getCache(s),a=Gn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ru[(l=ki(s)).overflowY]||ru[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Qs(s)&&(ru[(l=ki(s)).overflowY]||ru[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},B_=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&vS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Mn(St,$t.eventTypes[0],v_,!1,!0)},onDisable:function(){return Sn(St,$t.eventTypes[0],v_,!0)}})},SS=/(input|label|select|textarea)/i,y_,v_=function(e){var t=SS.test(e.target.tagName);(t||y_)&&(e._gsapAllow=!0,y_=t)},MS=function(e){Ks(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ei(e.target)||Ai,u=Ne.core.globals().ScrollSmoother,h=u&&u.get(),f=ms&&(e.content&&ei(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Ir(c,an),m=Ir(c,zn),_=1,p=($t.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,g=0,y=Vn(i)?function(){return i(a)}:function(){return i||2.8},b,v,M=B_(c,e.type,!0,s),w=function(){return v=!1},x=lr,S=lr,R=function(){l=cr(c,an),S=_l(ms?1:0,l),n&&(x=_l(0,cr(c,zn))),b=js},A=function(){f._gsap.y=pl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(w);var $=pl(a.deltaY/2),G=S(d.v-$);if(f&&G!==d.v+d.offset){d.offset=G-d.v;var I=pl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=je.cache,Nr()}return!0}d.offset&&A(),v=!0},D,F,P,k,B=function(){R(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return f&&Ne.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return ms&&U.type==="touchmove"&&L(U)||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){v=!1;var U=_;_=pl((tt.visualViewport&&tt.visualViewport.scale||1)/p),D.pause(),U!==_&&yd(c,_>1.01?!0:n?!1:"x"),F=m(),P=d(),R(),b=js},e.onRelease=e.onGestureStart=function(U,$){if(d.offset&&A(),!$)k.restart(!0);else{je.cache++;var G=y(),I,j;n&&(I=m(),j=I+G*.05*-U.velocityX/.227,G*=x_(m,I,j,cr(c,zn)),D.vars.scrollX=x(j)),I=d(),j=I+G*.05*-U.velocityY/.227,G*=x_(d,I,j,cr(c,an)),D.vars.scrollY=S(j),D.invalidate().duration(G).play(.01),(ms&&D.vars.scrollY>=l||I>=l-1)&&Ne.to({},{onUpdate:B,duration:G})}o&&o(U)},e.onWheel=function(){D._ts&&D.pause(),Gn()-g>1e3&&(b=0,g=Gn())},e.onChange=function(U,$,G,I,j){if(js!==b&&R(),$&&n&&m(x(I[2]===$?F+(U.startX-U.x):m()+$-I[1])),G){d.offset&&A();var pe=j[2]===G,Ie=pe?P+U.startY-U.y:d()+G-j[1],Y=S(Ie);pe&&Ie!==Y&&(P+=Y-Ie),d(Y)}(G||$)&&Nr()},e.onEnable=function(){yd(c,n?!1:"x"),Je.addEventListener("refresh",B),Mn(tt,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),M.enable()},e.onDisable=function(){yd(c,!0),Sn(tt,"resize",B),Je.removeEventListener("refresh",B),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=ms,ms&&!d()&&d(1),ms&&Ne.ticker.add(lr),k=a._dc,D=Ne.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:F_(d,d(),function(){return D.pause()})},onUpdate:Nr,onComplete:k.vars.onComplete}),a};Je.sort=function(r){if(Vn(r))return et.sort(r);var e=tt.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new $t(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return ti;if(r===!0&&ti)return ti.enable();if(r===!1){ti&&ti.kill(),ti=r;return}var e=r instanceof $t?r:MS(r);return ti&&ti.target===e.target&&ti.kill(),Qs(e.target)&&(ti=e),e};Je.core={_getVelocityProp:Kc,_inputObserver:B_,_scrollers:je,_proxies:Ji,bridge:{ss:function(){zi||to("scrollStart"),zi=Gn()},ref:function(){return Hn}}};E_()&&Ne.registerPlugin(Je);var w0=0,xp=1,E0=2;var yo=1,A0=2,Pa=3,xr=0,Ln=1,_i=2,vo=0,Ia=1,yp=2,vp=3,Sp=4,R0=5;var So=100,C0=101,P0=102,I0=103,L0=104,D0=200,N0=201,O0=202,U0=203,Mp=204,bp=205,F0=206,B0=207,k0=208,z0=209,H0=210,G0=211,V0=212,W0=213,X0=214,Wu=0,Xu=1,qu=2,ga=3,Yu=4,Ku=5,Zu=6,Ju=7,ph=0,q0=1,Y0=2,yr=0,Tp=1,wp=2,Ep=3,Mo=4,Ap=5,Rp=6,Cp=7,op="attached",K0="detached",Pp=300,bo=301,La=302,mh=303,gh=304,fr=1e3,di=1001,_a=1002,tn=1003,_h=1004;var To=1005;var Lt=1006,Da=1007;var Di=1008;var xi=1009,Ip=1010,Lp=1011,Na=1012,xh=1013,nr=1014,Yn=1015,oi=1016,yh=1017,vh=1018,wo=1020,Dp=35902,Np=35899,Op=1021,Up=1022,Wi=1023,Wr=1026,es=1027,Sh=1028,Mh=1029,Cs=1030,bh=1031;var Th=1033,oc=33776,ac=33777,lc=33778,cc=33779,wh=35840,Eh=35841,Ah=35842,Rh=35843,Ch=36196,Ph=37492,Ih=37496,Lh=37488,Dh=37489,uc=37490,Nh=37491,Oh=37808,Uh=37809,Fh=37810,Bh=37811,kh=37812,zh=37813,Hh=37814,Gh=37815,Vh=37816,Wh=37817,Xh=37818,qh=37819,Yh=37820,Kh=37821,Zh=36492,Jh=36494,$h=36495,jh=36283,Qh=36284,hc=36285,ef=36286;var ao=2300,lo=2301,Gu=2302,ap=2303,lp=2400,cp=2401,up=2402,Z0=2500;var Fp=0,fc=1,Oa=2,J0=3200;var dc=0,$0=1,ts="",gn="srgb",Pn="srgb-linear",Ol="linear",vt="srgb";var Vu=7680;var j0=519,Q0=512,ex=513,tx=514,Bp=515,nx=516,ix=517,kp=518,zp=519,Hp=35044;var Gp="300 es",Gi=2e3,xa=2001;function bS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function TS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ya(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rx(){let r=ya("canvas");return r.style.display="block",r}var k_={},va=null;function Ul(...r){let e="THREE."+r.shift();va?va("log",e,...r):console.log(e,...r)}function sx(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ze(...r){r=sx(r);let e="THREE."+r.shift();if(va)va("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function We(...r){r=sx(r);let e="THREE."+r.shift();if(va)va("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function oo(...r){let e=r.join(" ");e in k_||(k_[e]=!0,ze(...r))}function ox(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var ax={[Wu]:Wu,[qu]:Zu,[Yu]:Yu,[ga]:Ku,[Xu]:Xu,[Zu]:qu,[Ju]:Ju,[Ku]:ga},dr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],z_=1234567,pa=Math.PI/180,co=180/Math.PI;function vr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function Vp(r,e){return(r%e+e)%e}function wS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ES(r,e,t){return r!==e?(t-r)/(e-r):0}function Nl(r,e,t){return(1-t)*r+t*e}function AS(r,e,t,n){return Nl(r,e,1-Math.exp(-t*n))}function RS(r,e=1){return e-Math.abs(Vp(r,e*2)-e)}function CS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function PS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function IS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function LS(r,e){return r+Math.random()*(e-r)}function DS(r){return r*(.5-Math.random())}function NS(r){r!==void 0&&(z_=r);let e=z_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OS(r){return r*pa}function US(r){return r*co}function FS(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function BS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Wp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kS(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*u,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xp(r,e){if(e.constructor===Float32Array)return r;let t=tf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function qp(r,e){if(e.constructor===Float32Array)return r;let t=tf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Dn={DEG2RAD:pa,RAD2DEG:co,generateUUID:vr,clamp:st,euclideanModulo:Vp,mapLinear:wS,inverseLerp:ES,lerp:Nl,damp:AS,pingpong:RS,smoothstep:CS,smootherstep:PS,randInt:IS,randFloat:LS,randFloatSpread:DS,seededRandom:NS,degToRad:OS,radToDeg:US,isPowerOfTwo:FS,ceilPowerOfTwo:BS,floorPowerOfTwo:Wp,setQuaternionFromProperEuler:kS,normalize:qp,denormalize:Xp},$e=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(h!==_||l!==f||c!==d||u!==m){let p=l*f+c*d+u*m+h*_;p<0&&(f=-f,d=-d,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+_*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(H_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(H_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Od=new H,H_=new Pi,qe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],b=i[4],v=i[7],M=i[2],w=i[5],x=i[8];return s[0]=o*_+a*y+l*M,s[3]=o*p+a*b+l*w,s[6]=o*g+a*v+l*x,s[1]=c*_+u*y+h*M,s[4]=c*p+u*b+h*w,s[7]=c*g+u*v+h*x,s[2]=f*_+d*y+m*M,s[5]=f*p+d*b+m*w,s[8]=f*g+d*v+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ud.makeScale(e,t)),this}rotate(e){return oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ud.makeRotation(-e)),this}translate(e,t){return oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ud.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ud=new qe,G_=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zS(){let r={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(i.r=Vr(i.r),i.g=Vr(i.g),i.b=Vr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(i.r=ma(i.r),i.g=ma(i.g),i.b=ma(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ts?Ol:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Pn]:{primaries:e,whitePoint:n,transfer:Ol,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),r}var nt=zS();function Vr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ma(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ea,$u=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ea===void 0&&(ea=ya("canvas")),ea.width=e.width,ea.height=e.height;let i=ea.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ea}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ya("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Vr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vr(t[n]/255)*255):t[n]=Vr(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},HS=0,Sa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Fd(i[o].image)):s.push(Fd(i[o]))}else s=Fd(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Fd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$u.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var GS=0,Bd=new H,_n=class r extends dr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=di,i=di,s=Lt,o=Di,a=Wi,l=xi,c=r.DEFAULT_ANISOTROPY,u=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=vr(),this.name="",this.source=new Sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Pp;_n.DEFAULT_ANISOTROPY=1;var _t=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(d+1)/2,M=(g+1)/2,w=(u+f)/4,x=(h+_)/4,S=(m+p)/4;return b>v&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=w/n,s=x/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=S/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=x/s,i=S/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ju=class extends dr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new _n({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Sa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends ju{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fl=class extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qu=class extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ye=class r{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,_,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ta.setFromMatrixColumn(e,0).length(),s=1/ta.setFromMatrixColumn(e,1).length(),o=1/ta.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VS,e,WS)}lookAt(e,t,n){let i=this.elements;return Ri.subVectors(e,t),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),_s.crossVectors(n,Ri),_s.lengthSq()===0&&(Math.abs(n.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),_s.crossVectors(n,Ri)),_s.normalize(),pu.crossVectors(Ri,_s),i[0]=_s.x,i[4]=pu.x,i[8]=Ri.x,i[1]=_s.y,i[5]=pu.y,i[9]=Ri.y,i[2]=_s.z,i[6]=pu.z,i[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],b=n[7],v=n[11],M=n[15],w=i[0],x=i[4],S=i[8],R=i[12],A=i[1],L=i[5],D=i[9],F=i[13],P=i[2],k=i[6],B=i[10],U=i[14],$=i[3],G=i[7],I=i[11],j=i[15];return s[0]=o*w+a*A+l*P+c*$,s[4]=o*x+a*L+l*k+c*G,s[8]=o*S+a*D+l*B+c*I,s[12]=o*R+a*F+l*U+c*j,s[1]=u*w+h*A+f*P+d*$,s[5]=u*x+h*L+f*k+d*G,s[9]=u*S+h*D+f*B+d*I,s[13]=u*R+h*F+f*U+d*j,s[2]=m*w+_*A+p*P+g*$,s[6]=m*x+_*L+p*k+g*G,s[10]=m*S+_*D+p*B+g*I,s[14]=m*R+_*F+p*U+g*j,s[3]=y*w+b*A+v*P+M*$,s[7]=y*x+b*L+v*k+M*G,s[11]=y*S+b*D+v*B+M*I,s[15]=y*R+b*F+v*U+M*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15],y=l*d-c*f,b=a*d-c*h,v=a*f-l*h,M=o*d-c*u,w=o*f-l*u,x=o*h-a*u;return t*(_*y-p*b+g*v)-n*(m*y-p*M+g*w)+i*(m*b-_*M+g*x)-s*(m*v-_*w+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],y=t*a-n*o,b=t*l-i*o,v=t*c-s*o,M=n*l-i*a,w=n*c-s*a,x=i*c-s*l,S=u*_-h*m,R=u*p-f*m,A=u*g-d*m,L=h*p-f*_,D=h*g-d*_,F=f*g-d*p,P=y*F-b*D+v*L+M*A-w*R+x*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(a*F-l*D+c*L)*k,e[1]=(i*D-n*F-s*L)*k,e[2]=(_*x-p*w+g*M)*k,e[3]=(f*w-h*x-d*M)*k,e[4]=(l*A-o*F-c*R)*k,e[5]=(t*F-i*A+s*R)*k,e[6]=(p*v-m*x-g*b)*k,e[7]=(u*x-f*v+d*b)*k,e[8]=(o*D-a*A+c*S)*k,e[9]=(n*A-t*D-s*S)*k,e[10]=(m*w-_*v+g*y)*k,e[11]=(h*v-u*w-d*y)*k,e[12]=(a*R-o*L-l*S)*k,e[13]=(t*L-n*R+i*S)*k,e[14]=(_*b-m*M-p*y)*k,e[15]=(u*M-h*b+f*y)*k,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,_=o*u,p=o*h,g=a*h,y=l*c,b=l*u,v=l*h,M=n.x,w=n.y,x=n.z;return i[0]=(1-(_+g))*M,i[1]=(d+v)*M,i[2]=(m-b)*M,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+g))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(m+b)*x,i[9]=(p-y)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ta.set(i[0],i[1],i[2]).length(),a=ta.set(i[4],i[5],i[6]).length(),l=ta.set(i[8],i[9],i[10]).length();s<0&&(o=-o),$i.copy(this);let c=1/o,u=1/a,h=1/l;return $i.elements[0]*=c,$i.elements[1]*=c,$i.elements[2]*=c,$i.elements[4]*=u,$i.elements[5]*=u,$i.elements[6]*=u,$i.elements[8]*=h,$i.elements[9]*=h,$i.elements[10]*=h,t.setFromRotationMatrix($i),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Gi,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Gi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===xa)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Gi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Gi)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===xa)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ta=new H,$i=new Ye,VS=new H(0,0,0),WS=new H(1,1,1),_s=new H,pu=new H,Ri=new H,W_=new Ye,X_=new Pi,pr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return W_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(W_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return X_.setFromEuler(this),this.setFromQuaternion(X_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pr.DEFAULT_ORDER="XYZ";var Bl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},XS=0,q_=new H,na=new Pi,Or=new Ye,mu=new H,wl=new H,qS=new H,YS=new Pi,Y_=new H(1,0,0),K_=new H(0,1,0),Z_=new H(0,0,1),J_={type:"added"},KS={type:"removed"},ia={type:"childadded",child:null},kd={type:"childremoved",child:null},Tt=class r extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new H,t=new pr,n=new Pi,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new qe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(Y_,e)}rotateY(e){return this.rotateOnAxis(K_,e)}rotateZ(e){return this.rotateOnAxis(Z_,e)}translateOnAxis(e,t){return q_.copy(e).applyQuaternion(this.quaternion),this.position.add(q_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Y_,e)}translateY(e){return this.translateOnAxis(K_,e)}translateZ(e){return this.translateOnAxis(Z_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mu.copy(e):mu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Or.lookAt(wl,mu,this.up):Or.lookAt(mu,wl,this.up),this.quaternion.setFromRotationMatrix(Or),i&&(Or.extractRotation(i.matrixWorld),na.setFromRotationMatrix(Or),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(J_),ia.child=e,this.dispatchEvent(ia),ia.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(KS),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Or.multiply(e.parent.matrixWorld)),e.applyMatrix4(Or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(J_),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,YS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tt.DEFAULT_UP=new H(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ZS={type:"move"},Ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},gu={h:0,s:0,l:0};function zd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=Vp(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zd(o,s,e+1/3),this.g=zd(o,s,e),this.b=zd(o,s,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=gn){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let n=lx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return nt.workingToColorSpace(Xn.copy(this),e),Math.round(st(Xn.r*255,0,255))*65536+Math.round(st(Xn.g*255,0,255))*256+Math.round(st(Xn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Xn.copy(this),t);let n=Xn.r,i=Xn.g,s=Xn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=gn){nt.workingToColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,i=Xn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(gu);let n=Nl(xs.h,gu.h,t),i=Nl(xs.s,gu.s,t),s=Nl(xs.l,gu.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new Ge;Ge.NAMES=lx;var Xr=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ji=new H,Ur=new H,Hd=new H,Fr=new H,ra=new H,sa=new H,$_=new H,Gd=new H,Vd=new H,Wd=new H,Xd=new _t,qd=new _t,Yd=new _t,Hr=class r{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ji.subVectors(e,t),i.cross(ji);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ji.subVectors(i,t),Ur.subVectors(n,t),Hd.subVectors(e,t);let o=ji.dot(ji),a=ji.dot(Ur),l=ji.dot(Hd),c=Ur.dot(Ur),u=Ur.dot(Hd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fr.x),l.addScaledVector(o,Fr.y),l.addScaledVector(a,Fr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Xd.setScalar(0),qd.setScalar(0),Yd.setScalar(0),Xd.fromBufferAttribute(e,t),qd.fromBufferAttribute(e,n),Yd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Xd,s.x),o.addScaledVector(qd,s.y),o.addScaledVector(Yd,s.z),o}static isFrontFacing(e,t,n,i){return ji.subVectors(n,t),Ur.subVectors(e,t),ji.cross(Ur).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),ji.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;ra.subVectors(i,n),sa.subVectors(s,n),Gd.subVectors(e,n);let l=ra.dot(Gd),c=sa.dot(Gd);if(l<=0&&c<=0)return t.copy(n);Vd.subVectors(e,i);let u=ra.dot(Vd),h=sa.dot(Vd);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(ra,o);Wd.subVectors(e,s);let d=ra.dot(Wd),m=sa.dot(Wd);if(m>=0&&d<=m)return t.copy(s);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(sa,a);let p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return $_.subVectors(s,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector($_,a);let g=1/(p+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(ra,o).addScaledVector(sa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},un=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(s,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_u.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_u.copy(n.boundingBox)),_u.applyMatrix4(e.matrixWorld),this.union(_u)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),xu.subVectors(this.max,El),oa.subVectors(e.a,El),aa.subVectors(e.b,El),la.subVectors(e.c,El),ys.subVectors(aa,oa),vs.subVectors(la,aa),no.subVectors(oa,la);let t=[0,-ys.z,ys.y,0,-vs.z,vs.y,0,-no.z,no.y,ys.z,0,-ys.x,vs.z,0,-vs.x,no.z,0,-no.x,-ys.y,ys.x,0,-vs.y,vs.x,0,-no.y,no.x,0];return!Kd(t,oa,aa,la,xu)||(t=[1,0,0,0,1,0,0,0,1],!Kd(t,oa,aa,la,xu))?!1:(yu.crossVectors(ys,vs),t=[yu.x,yu.y,yu.z],Kd(t,oa,aa,la,xu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Br=[new H,new H,new H,new H,new H,new H,new H,new H],Qi=new H,_u=new un,oa=new H,aa=new H,la=new H,ys=new H,vs=new H,no=new H,El=new H,xu=new H,yu=new H,io=new H;function Kd(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){io.fromArray(r,s);let a=i.x*Math.abs(io.x)+i.y*Math.abs(io.y)+i.z*Math.abs(io.z),l=e.dot(io),c=t.dot(io),u=n.dot(io);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Gr=JS();function JS(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function $S(r){Math.abs(r)>65504&&ze("DataUtils.toHalfFloat(): Value out of range."),r=st(r,-65504,65504),Gr.floatView[0]=r;let e=Gr.uint32View[0],t=e>>23&511;return Gr.baseTable[t]+((e&8388607)>>Gr.shiftTable[t])}function jS(r){let e=r>>10;return Gr.uint32View[0]=Gr.mantissaTable[Gr.offsetTable[e]+(r&1023)]+Gr.exponentTable[e],Gr.floatView[0]}var bs=class{static toHalfFloat(e){return $S(e)}static fromHalfFloat(e){return jS(e)}},cn=new H,vu=new $e,QS=0,Cn=class extends dr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hp,this.updateRanges=[],this.gpuType=Yn,this.version=0,this._normalizationScale=e!==void 0?tf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vu.fromBufferAttribute(this,t),vu.applyMatrix3(e),this.setXY(t,vu.x,vu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Xp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):qp(e,this.array)}};var kl=class extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zl=class extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Dt=class extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}},eM=new un,Al=new H,Zd=new H,pi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):eM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Al.subVectors(e,this.center);let t=Al.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Al,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Al.copy(e.center).add(Zd)),this.expandByPoint(Al.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tM=0,Hi=new Ye,Jd=new Tt,ca=new H,Ci=new un,Rl=new un,bn=new H,Tn=class r extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bS(e)?zl:kl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,t,n){return Hi.makeTranslation(e,t,n),this.applyMatrix4(Hi),this}scale(e,t,n){return Hi.makeScale(e,t,n),this.applyMatrix4(Hi),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ci.setFromBufferAttribute(s),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Rl.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(Ci.min,Rl.min),Ci.expandByPoint(bn),bn.addVectors(Ci.max,Rl.max),Ci.expandByPoint(bn)):(Ci.expandByPoint(Rl.min),Ci.expandByPoint(Rl.max))}Ci.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)bn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(bn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bn.fromBufferAttribute(a,c),l&&(ca.fromBufferAttribute(e,c),bn.add(ca)),i=Math.max(i,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new H,l[R]=new H;let u=new H,h=new H,f=new H,d=new $e,m=new $e,_=new $e,p=new H,g=new H;function y(R,A,L){c[R]=c[A]=c[L]=1,u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,L),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,L),h.sub(u),f.sub(u),m.sub(d),_.sub(d);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(D),a[R].add(p),a[A].add(p),a[L].add(p),l[R].add(g),l[A].add(g),l[L].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,A=b.length;R<A;++R){let L=b[R],D=L.start,F=L.count;for(let P=D,k=D+F;P<k;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new H,M=new H,w=new H,x=new H;function S(R){w.fromBufferAttribute(i,R),x.copy(w);let A=a[R];v.copy(A),v.sub(w.multiplyScalar(w.dot(A))).normalize(),M.crossVectors(x,A);let D=M.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,D)}for(let R=0,A=n.count;R<A;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new Cn(f,u,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ba=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hp,this.updateRanges=[],this.version=0,this.uuid=vr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=j_(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=j_(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function j_(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=vr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var ri=new H,Ta=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?tf(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ul("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ul("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Xp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):qp(e,this.data.array)}},$d=new H,nM=new H,iM=new qe,er=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=$d.subVectors(n,t).cross(nM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta($d),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||iM.getNormalMatrix(e),i=this.coplanarPoint($d).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rM=0,si=class extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=Ia,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mp,this.blendDst=bp,this.blendEquation=So,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vu,this.stencilZFail=Vu,this.stencilZPass=Vu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new er().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var kr=new H,jd=new H,Su=new H,Mu=new H,uo=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jd.copy(e).add(t).multiplyScalar(.5),Su.copy(t).sub(e).normalize(),Mu.copy(this.origin).sub(jd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Su),a=Mu.dot(this.direction),l=-Mu.dot(Su),c=Mu.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(jd).addScaledVector(Su,f),d}intersectSphere(e,t){if(e.radius<0)return null;kr.subVectors(e.center,this.origin);let n=kr.dot(this.direction),i=kr.dot(kr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,_=t.y-o.y,p=t.z-o.z,g=n.x-o.x,y=n.y-o.y,b=n.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(u),x,S,R,A,L,D,F,P,k,B,U,$;if(v>=M&&v>=w?(R=l,D=h,k=m,$=g,l>=0?(x=c,S=u,A=f,L=d,F=_,P=p,B=y,U=b):(x=u,S=c,A=d,L=f,F=p,P=_,B=b,U=y)):M>=w?(R=c,D=f,k=_,$=y,c>=0?(x=u,S=l,A=d,L=h,F=p,P=m,B=b,U=g):(x=l,S=u,A=h,L=d,F=m,P=p,B=g,U=b)):(R=u,D=d,k=p,$=b,u>=0?(x=l,S=c,A=h,L=f,F=m,P=_,B=g,U=y):(x=c,S=l,A=f,L=h,F=_,P=m,B=y,U=g)),R===0)return null;let G=x/R,I=S/R,j=1/R,pe=A-G*D,Ie=L-I*D,Y=F-G*k,he=P-I*k,Se=B-G*$,se=U-I*$,ae=Se*he-se*Y,oe=pe*se-Ie*Se,De=Y*Ie-he*pe;if(i){if(ae<0||oe<0||De<0)return null}else if((ae<0||oe<0||De<0)&&(ae>0||oe>0||De>0))return null;let fe=ae+oe+De;if(fe===0)return null;let Le=j*(ae*D+oe*k+De*$);return(fe>0?Le<0:Le>0)?null:this.at(Le/fe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mi=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Q_=new Ye,ro=new uo,bu=new pi,e0=new H,Tu=new H,wu=new H,Eu=new H,Qd=new H,Au=new H,t0=new H,Ru=new H,Mt=class extends Tt{constructor(e=new Tn,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Au.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Qd.fromBufferAttribute(h,e),o?Au.addScaledVector(Qd,u):Au.addScaledVector(Qd.sub(t),u))}t.add(Au)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bu.copy(n.boundingSphere),bu.applyMatrix4(s),ro.copy(e.ray).recast(e.near),!(bu.containsPoint(ro.origin)===!1&&(ro.intersectSphere(bu,e0)===null||ro.origin.distanceToSquared(e0)>(e.far-e.near)**2))&&(Q_.copy(s).invert(),ro.copy(e.ray).applyMatrix4(Q_),!(n.boundingBox!==null&&ro.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ro)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,M=b;v<M;v+=3){let w=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);i=Cu(this,g,e,n,c,u,h,w,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let y=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);i=Cu(this,o,e,n,c,u,h,y,b,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,M=b;v<M;v+=3){let w=v,x=v+1,S=v+2;i=Cu(this,g,e,n,c,u,h,w,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let y=p,b=p+1,v=p+2;i=Cu(this,o,e,n,c,u,h,y,b,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function sM(r,e,t,n,i,s,o,a){let l;if(e.side===Ln?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===xr,a),l===null)return null;Ru.copy(a),Ru.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Ru);return c<t.near||c>t.far?null:{distance:c,point:Ru.clone(),object:r}}function Cu(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Tu),r.getVertexPosition(l,wu),r.getVertexPosition(c,Eu);let u=sM(r,e,t,n,Tu,wu,Eu,t0);if(u){let h=new H;Hr.getBarycoord(t0,Tu,wu,Eu,h),i&&(u.uv=Hr.getInterpolatedAttribute(i,a,l,c,h,new $e)),s&&(u.uv1=Hr.getInterpolatedAttribute(s,a,l,c,h,new $e)),o&&(u.normal=Hr.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};Hr.getNormal(Tu,wu,Eu,f.normal),u.face=f,u.barycoord=h}return u}var Cl=new _t,n0=new _t,i0=new _t,oM=new _t,r0=new Ye,Pu=new H,ep=new pi,s0=new Ye,tp=new uo,Hl=class extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=op,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pu),this.boundingBox.expandByPoint(Pu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pu),this.boundingSphere.expandByPoint(Pu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ep.copy(this.boundingSphere),ep.applyMatrix4(i),e.ray.intersectsSphere(ep)!==!1&&(s0.copy(i).invert(),tp.copy(e.ray).applyMatrix4(s0),!(this.boundingBox!==null&&tp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===op?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===K0?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;n0.fromBufferAttribute(i.attributes.skinIndex,e),i0.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Cl.copy(t),t.set(0,0,0,0)):(Cl.set(t.x,t.y,t.z,1),t.set(0,0,0)),Cl.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=i0.getComponent(s);if(o!==0){let a=n0.getComponent(s);r0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(oM.copy(Cl).applyMatrix4(r0),o)}}return t.isVector4&&(t.w=Cl.w),t.applyMatrix4(this.bindMatrixInverse)}},wa=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ts=class extends _n{constructor(e=null,t=1,n=1,i,s,o,a,l,c=tn,u=tn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},o0=new Ye,aM=new Ye,Gl=class r{constructor(e=[],t=[]){this.uuid=vr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:aM;o0.multiplyMatrices(a,t[s]),o0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ts(t,e,e,Wi,Yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(ze("Skeleton: No bone found with UUID:",s),o=new wa),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},qr=class extends Cn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ua=new Ye,a0=new Ye,Iu=[],l0=new un,lM=new Ye,Pl=new Mt,Il=new pi,ho=class extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ua),l0.copy(e.boundingBox).applyMatrix4(ua),this.boundingBox.union(l0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ua),Il.copy(e.boundingSphere).applyMatrix4(ua),this.boundingSphere.union(Il)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Pl.geometry=this.geometry,Pl.material=this.material,Pl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Il.copy(this.boundingSphere),Il.applyMatrix4(n),e.ray.intersectsSphere(Il)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ua),a0.multiplyMatrices(n,ua),Pl.matrixWorld=a0,Pl.raycast(e,Iu);for(let o=0,a=Iu.length;o<a;o++){let l=Iu[o];l.instanceId=s,l.object=this,t.push(l)}Iu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ts(new Float32Array(i*this.count),i,this.count,Sh,Yn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},so=new pi,cM=new $e(.5,.5),Lu=new H,ws=class{constructor(e=new er,t=new er,n=new er,i=new er,s=new er,o=new er){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],_=s[9],p=s[10],g=s[11],y=s[12],b=s[13],v=s[14],M=s[15];if(i[0].setComponents(c-o,d-u,g-m,M-y).normalize(),i[1].setComponents(c+o,d+u,g+m,M+y).normalize(),i[2].setComponents(c+a,d+h,g+_,M+b).normalize(),i[3].setComponents(c-a,d-h,g-_,M-b).normalize(),n)i[4].setComponents(l,f,p,v).normalize(),i[5].setComponents(c-l,d-f,g-p,M-v).normalize();else if(i[4].setComponents(c-l,d-f,g-p,M-v).normalize(),t===Gi)i[5].setComponents(c+l,d+f,g+p,M+v).normalize();else if(t===xa)i[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),so.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){so.center.set(0,0,0);let t=cM.distanceTo(e.center);return so.radius=.7071067811865476+t,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Lu.x=i.normal.x>0?e.max.x:e.min.x,Lu.y=i.normal.y>0?e.max.y:e.min.y,Lu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},c0=new Ye,eh=class r{constructor(){this.coordinateSystem=Gi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];c0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new ws),n[i].setFromProjectionMatrix(c0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new ws),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Es=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},th=new H,nh=new H,u0=new Ye,Ll=new uo,Du=new pi,np=new H,h0=new H,fo=class extends Tt{constructor(e=new Tn,t=new Es){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)th.fromBufferAttribute(t,i-1),nh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=th.distanceTo(nh);e.setAttribute("lineDistance",new Dt(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Du.copy(n.boundingSphere),Du.applyMatrix4(i),Du.radius+=s,e.ray.intersectsSphere(Du)===!1)return;u0.copy(i).invert(),Ll.copy(e.ray).applyMatrix4(u0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){let g=u.getX(_),y=u.getX(_+1),b=Nu(this,e,Ll,l,g,y,_);b&&t.push(b)}if(this.isLineLoop){let _=u.getX(m-1),p=u.getX(d),g=Nu(this,e,Ll,l,_,p,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){let g=Nu(this,e,Ll,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Nu(this,e,Ll,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Nu(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(th.fromBufferAttribute(a,i),nh.fromBufferAttribute(a,s),t.distanceSqToSegment(th,nh,np,h0)>n)return;np.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(np);if(!(c<e.near||c>e.far))return{distance:c,point:h0.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var f0=new H,d0=new H,po=class extends fo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)f0.fromBufferAttribute(t,i),d0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+f0.distanceTo(d0);e.setAttribute("lineDistance",new Dt(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vl=class extends fo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ea=class extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},p0=new Ye,hp=new uo,Ou=new pi,Uu=new H,Wl=class extends Tt{constructor(e=new Tn,t=new Ea){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ou.copy(n.boundingSphere),Ou.applyMatrix4(i),Ou.radius+=s,e.ray.intersectsSphere(Ou)===!1)return;p0.copy(i).invert(),hp.copy(e.ray).applyMatrix4(p0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){let p=c.getX(m);Uu.fromBufferAttribute(h,p),m0(Uu,p,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Uu.fromBufferAttribute(h,m),m0(Uu,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function m0(r,e,t,n,i,s,o){let a=hp.distanceSqToPoint(r);if(a<t){let l=new H;hp.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xl=class extends _n{constructor(e=[],t=bo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mr=class extends _n{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yr=class extends _n{constructor(e,t,n=nr,i,s,o,a=tn,l=tn,c,u=Wr,h=1){if(u!==Wr&&u!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ql=class extends Yr{constructor(e,t=nr,n=bo,i,s,o=tn,a=tn,l,c=Wr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yl=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Li=class r extends Tn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function m(_,p,g,y,b,v,M,w,x,S,R){let A=v/x,L=M/S,D=v/2,F=M/2,P=w/2,k=x+1,B=S+1,U=0,$=0,G=new H;for(let I=0;I<B;I++){let j=I*L-F;for(let pe=0;pe<k;pe++){let Ie=pe*A-D;G[_]=Ie*y,G[p]=j*b,G[g]=P,c.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[g]=w>0?1:-1,u.push(G.x,G.y,G.z),h.push(pe/x),h.push(1-I/S),U+=1}}for(let I=0;I<S;I++)for(let j=0;j<x;j++){let pe=f+j+k*I,Ie=f+j+k*(I+1),Y=f+(j+1)+k*(I+1),he=f+(j+1)+k*I;l.push(pe,Ie,he),l.push(Ie,Y,he),$+=6}a.addGroup(d,$,R),d+=$,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var As=class r extends Tn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],f=[],d=[],m=0,_=[],p=n/2,g=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(d,2));function y(){let v=new H,M=new H,w=0,x=(t-e)/n;for(let S=0;S<=s;S++){let R=[],A=S/s,L=A*(t-e)+e;for(let D=0;D<=i;D++){let F=D/i,P=F*l+a,k=Math.sin(P),B=Math.cos(P);M.x=L*k,M.y=-A*n+p,M.z=L*B,h.push(M.x,M.y,M.z),v.set(k,x,B).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-A),R.push(m++)}_.push(R)}for(let S=0;S<i;S++)for(let R=0;R<s;R++){let A=_[R][S],L=_[R+1][S],D=_[R+1][S+1],F=_[R][S+1];(e>0||R!==0)&&(u.push(A,L,F),w+=3),(t>0||R!==s-1)&&(u.push(L,D,F),w+=3)}c.addGroup(g,w,0),g+=w}function b(v){let M=m,w=new $e,x=new H,S=0,R=v===!0?e:t,A=v===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,p*A,0),f.push(0,A,0),d.push(.5,.5),m++;let L=m;for(let D=0;D<=i;D++){let P=D/i*l+a,k=Math.cos(P),B=Math.sin(P);x.x=R*B,x.y=p*A,x.z=R*k,h.push(x.x,x.y,x.z),f.push(0,A,0),w.x=k*.5+.5,w.y=B*.5*A+.5,d.push(w.x,w.y),m++}for(let D=0;D<i;D++){let F=M+D,P=L+D;v===!0?u.push(P,P+1,F):u.push(P+1,P,F),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kl=class r extends As{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Fu=new H,Bu=new H,ip=new H,ku=new Hr,Zl=class extends Tn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(pa*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:p,c:g}=ku;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),ku.getNormal(ip),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let b=(y+1)%3,v=h[y],M=h[b],w=ku[u[y]],x=ku[u[b]],S=`${v}_${M}`,R=`${M}_${v}`,A=f.get(R);A?(ip.dot(A.normal)<=s&&(d.push(w.x,w.y,w.z),d.push(x.x,x.y,x.z)),f.set(R,null)):f.has(S)||f.set(S,{index0:c[y],index1:c[b],normal:ip.clone()})}}for(let m of f.values())if(m){let{index0:_,index1:p}=m;Fu.fromBufferAttribute(a,_),Bu.fromBufferAttribute(a,p),d.push(Fu.x,Fu.y,Fu.z),d.push(Bu.x,Bu.y,Bu.z)}this.setAttribute("position",new Dt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Kr=class r extends Tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],_=[],p=[];for(let g=0;g<u;g++){let y=g*f-o;for(let b=0;b<c;b++){let v=b*h-s;m.push(v,-y,0),_.push(0,0,1),p.push(b/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let b=y+c*g,v=y+c*(g+1),M=y+1+c*(g+1),w=y+1+c*g;d.push(b,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Jl=class r extends Tn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let y=[],b=g/n,v=o+b*a,M=e*Math.cos(v),w=Math.sqrt(e*e-M*M),x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let R=S/t,A=i+R*s;h.x=-w*Math.cos(A),h.y=M,h.z=w*Math.sin(A),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(R+x,1-b),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let b=u[g][y+1],v=u[g][y],M=u[g+1][y],w=u[g+1][y+1];(g!==0||o>0)&&d.push(b,v,w),(g!==n-1||l<Math.PI)&&d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Aa=class r extends Tn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],h=[],f=new H,d=new H,m=new H;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let g=0;g<=i;g++){let y=g/i*s;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(g/i),h.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let g=(i+1)*_+p-1,y=(i+1)*(_-1)+p-1,b=(i+1)*(_-1)+p,v=(i+1)*_+p;l.push(g,y,v),l.push(y,b,v)}this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Eo(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(g0(i))i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(g0(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Kn(r){let e={};for(let t=0;t<r.length;t++){let n=Eo(r[t]);for(let i in n)e[i]=n[i]}return e}function g0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function uM(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yp(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var cx={clone:Eo,merge:Kn},hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gr=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=uM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(i.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ih=class extends gr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qn=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends qn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return oo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){oo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $l=class extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=ph,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rh=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sh=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ms(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Dl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function dM(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _0(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function pM(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var _r=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oh=class extends _r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lp,endingEnd:lp}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case cp:s=e,a=2*t-n;break;case up:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cp:o=e,l=2*n-t;break;case up:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,y=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,b=(-1-d)*p+(1.5+d)*_+.5*m,v=d*p-d*_;for(let M=0;M!==a;++M)s[M]=g*o[u+M]+y*o[c+M]+b*o[l+M]+v*o[h+M];return s}},ah=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},lh=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ch=class extends _r{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(i-t),_=1-m;for(let p=0;p!==a;++p)s[p]=o[c+p]*_+o[l+p]*m;return s}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=d*f+m*2,y=h[g],b=h[g+1],v=e*f+m*2,M=u[v],w=u[v+1],x=gM(n,t,y,M,i);s[m]=ux(x,_,b,w,p)}return s}};function ux(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function mM(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function gM(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){let a=ux(s,e,t,n,i)-r;if(Math.abs(a)<1e-10)break;let l=mM(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var gi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Dl(e.settings)&&(n.settings={inTangents:Ms(e.settings.inTangents,Array),outTangents:Ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ch(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ao:t=this.InterpolantFactoryMethodDiscrete;break;case lo:t=this.InterpolantFactoryMethodLinear;break;case Gu:t=this.InterpolantFactoryMethodSmooth;break;case ap:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Gu;case this.InterpolantFactoryMethodBezier:return ap}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Dl(this.settings)&&(x0(this.settings.inTangents,e),x0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Dl(this.settings)&&(y0(this.settings.inTangents,e),y0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&TS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gu,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let _=t[h+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Dl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function x0(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function y0(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}gi.prototype.ValueTypeName="";gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=lo;var Zr=class extends gi{constructor(e,t,n){super(e,t,n)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=ao;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}};jl.prototype.ValueTypeName="color";var Jr=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}};Jr.prototype.ValueTypeName="number";var uh=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Pi.slerpFlat(s,0,o,c-a,o,c,l);return s}},$r=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new uh(this.times,this.values,this.getValueSize(),e)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends gi{constructor(e,t,n){super(e,t,n)}};jr.prototype.ValueTypeName="string";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=ao;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}};Rs.prototype.ValueTypeName="vector";var Ql=class{constructor(e="",t=-1,n=[],i=Z0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xM(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(gi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=dM(l);l=_0(l,1,u),c=_0(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Jr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function _M(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jr;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return jl;case"quaternion":return $r;case"bool":case"boolean":return Zr;case"string":return jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function xM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_M(r.type);if(r.times===void 0){let n=[],i=[];pM(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Dl(r.settings)&&(t.settings={inTangents:Ms(r.settings.inTangents,Float32Array),outTangents:Ms(r.settings.outTangents,Float32Array)}),t}var hr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(v0(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!v0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function v0(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var hh=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hx=new hh,tr=class{constructor(e){this.manager=e!==void 0?e:hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};tr.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr={},fp=class extends Error{constructor(e,t){super(e),this.response=t}},mo=class extends tr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=hr.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(zr[e]!==void 0){zr[e].push({onLoad:t,onProgress:n,onError:i});return}zr[e]=[],zr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=zr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,_=0,p=new ReadableStream({start(g){y();function y(){h.read().then(({done:b,value:v})=>{if(b)g.close();else{_+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,x=u.length;w<x;w++){let S=u[w];S.onProgress&&S.onProgress(M)}g.enqueue(v),y()}},b=>{g.error(b)})}}});return new Response(p)}else throw new fp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{hr.add(`file:${e}`,c);let u=zr[e];delete zr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=zr[e];if(u===void 0)throw this.manager.itemError(e),c;delete zr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ha=new WeakMap,fh=class extends tr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=hr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=ha.get(o);h===void 0&&(h=[],ha.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=ya("img");function l(){u(),t&&t(this);let h=ha.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}ha.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),hr.remove(`image:${e}`);let f=ha.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}ha.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),hr.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ec=class extends tr{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new Ts,a=new mo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){i!==void 0?i(u):We(u);return}s._applyTexData(o,c),t&&t(o,c)},n,i),o}createDataTexture(e){let t=new Ts;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:di,e.wrapT=t.wrapT!==void 0?t.wrapT:di,e.magFilter=t.magFilter!==void 0?t.magFilter:Lt,e.minFilter=t.minFilter!==void 0?t.minFilter:Lt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Di),t.mipmapCount===1&&(e.minFilter=Lt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},tc=class extends tr{constructor(e){super(e)}load(e,t,n,i){let s=new _n,o=new fh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},go=class extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},nc=class extends go{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},rp=new Ye,S0=new H,M0=new H,Ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;S0.setFromMatrixPosition(e.matrixWorld),t.position.copy(S0),M0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(M0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){rp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rp,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===xa||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(rp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zu=new H,Hu=new Pi,ur=new H,ic=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zu,Hu,ur),ur.x===1&&ur.y===1&&ur.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Hu,ur.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zu,Hu,ur),ur.x===1&&ur.y===1&&ur.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Hu,ur.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new H,b0=new $e,T0=new $e,en=class extends ic{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,b0,T0),t.subVectors(T0,b0)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dp=class extends Ra{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=co*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},rc=class extends go{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new dp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},pp=class extends Ra{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},_o=class extends go{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xo=class extends ic{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mp=class extends Ra{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new mp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var sp=new WeakMap,sc=class extends tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=hr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{sp.has(o)===!0?(i&&i(sp.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return hr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),sp.set(l,c),hr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});hr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fa=-90,da=1,Ca=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new en(fa,da,e,t);i.layers=this.layers,this.add(i);let s=new en(fa,da,e,t);s.layers=this.layers,this.add(s);let o=new en(fa,da,e,t);o.layers=this.layers,this.add(o);let a=new en(fa,da,e,t);a.layers=this.layers,this.add(a);let l=new en(fa,da,e,t);l.layers=this.layers,this.add(l);let c=new en(fa,da,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},dh=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Kp="\\[\\]\\.:\\/",yM=new RegExp("["+Kp+"]","g"),Zp="[^"+Kp+"]",vM="[^"+Kp.replace("\\.","")+"]",SM=/((?:WC+[\/:])*)/.source.replace("WC",Zp),MM=/(WCOD+)?/.source.replace("WCOD",vM),bM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zp),TM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zp),wM=new RegExp("^"+SM+MM+bM+TM+"$"),EM=["material","materials","bones","map"],gp=class{constructor(e,t,n){let i=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yM,"")}static parseTrackName(e){let t=wM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);EM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=gp;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eA=new Float32Array(1);var _p=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function Jp(r,e,t,n){let i=AM(n);switch(t){case Op:return r*e;case Sh:return r*e/i.components*i.byteLength;case Mh:return r*e/i.components*i.byteLength;case Cs:return r*e*2/i.components*i.byteLength;case bh:return r*e*2/i.components*i.byteLength;case Up:return r*e*3/i.components*i.byteLength;case Wi:return r*e*4/i.components*i.byteLength;case Th:return r*e*4/i.components*i.byteLength;case oc:case ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eh:case Rh:return Math.max(r,16)*Math.max(e,8)/4;case wh:case Ah:return Math.max(r,8)*Math.max(e,8)/2;case Ch:case Ph:case Lh:case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ih:case uc:case Nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zh:case Jh:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*16;case jh:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case hc:case ef:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function AM(r){switch(r){case xi:case Ip:return{byteLength:1,components:1};case Na:case Lp:case oi:return{byteLength:2,components:1};case yh:case vh:return{byteLength:2,components:4};case nr:case xh:case Yn:return{byteLength:4,components:1};case Dp:case Np:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dx(){let r=null,e=!1,t=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),t(s,o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function CM(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
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
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
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
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
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
#endif`,kM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VM=`#ifdef USE_IRIDESCENCE
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
#endif`,WM=`#ifdef USE_BUMPMAP
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,QM=`#define PI 3.141592653589793
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
} // validated`,eb=`vec3 transformedNormal = objectNormal;
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
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ab=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
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
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eb=`PhysicalMaterial material;
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
#endif`,Ab=`uniform sampler2D dfgLUT;
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
}`,Rb=`
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ib=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kb=`#if defined( USE_POINTS_UV )
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
#endif`,zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
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
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
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
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pT=`float getShadowMask() {
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
}`,mT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gT=`#ifdef USE_SKINNING
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
#endif`,_T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,yT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ST=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bT=`#ifdef USE_TRANSMISSION
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
#endif`,TT=`#ifdef USE_TRANSMISSION
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,CT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PT=`uniform sampler2D t2D;
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`uniform float backgroundBlurriness;
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`#include <common>
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
}`,UT=`#if DEPTH_PACKING == 3200
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
}`,FT=`#define DISTANCE
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
}`,BT=`#define DISTANCE
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
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`uniform float scale;
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
}`,GT=`uniform vec3 diffuse;
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
}`,VT=`#include <common>
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
}`,WT=`uniform vec3 diffuse;
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
}`,XT=`#define LAMBERT
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
}`,qT=`#define LAMBERT
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
}`,YT=`#define MATCAP
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
}`,KT=`#define MATCAP
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
}`,ZT=`#define NORMAL
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
}`,JT=`#define NORMAL
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
}`,$T=`#define PHONG
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
}`,jT=`#define PHONG
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
}`,QT=`#define STANDARD
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
}`,ew=`#define STANDARD
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
}`,tw=`#define TOON
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
}`,nw=`#define TOON
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
}`,iw=`uniform float size;
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
}`,rw=`uniform vec3 diffuse;
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
}`,sw=`#include <common>
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
}`,ow=`uniform vec3 color;
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
}`,aw=`uniform float rotation;
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
}`,lw=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:PM,alphahash_pars_fragment:IM,alphamap_fragment:LM,alphamap_pars_fragment:DM,alphatest_fragment:NM,alphatest_pars_fragment:OM,aomap_fragment:UM,aomap_pars_fragment:FM,batching_pars_vertex:BM,batching_vertex:kM,begin_vertex:zM,beginnormal_vertex:HM,bsdfs:GM,iridescence_fragment:VM,bumpmap_pars_fragment:WM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:YM,clipping_planes_vertex:KM,color_fragment:ZM,color_pars_fragment:JM,color_pars_vertex:$M,color_vertex:jM,common:QM,defaultnormal_vertex:eb,displacementmap_pars_vertex:tb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:rb,colorspace_fragment:sb,colorspace_pars_fragment:ob,envmap_fragment:ab,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:Sb,envmap_vertex:hb,fog_vertex:fb,fog_pars_vertex:db,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:_b,lights_lambert_fragment:xb,lights_lambert_pars_fragment:yb,lights_pars_begin:vb,lights_toon_fragment:Mb,lights_toon_pars_fragment:bb,lights_phong_fragment:Tb,lights_phong_pars_fragment:wb,lights_physical_fragment:Eb,lights_physical_pars_fragment:Ab,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:Pb,lightprobes_pars_fragment:Ib,logdepthbuf_fragment:Lb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Nb,logdepthbuf_vertex:Ob,map_fragment:Ub,map_pars_fragment:Fb,map_particle_fragment:Bb,map_particle_pars_fragment:kb,metalnessmap_fragment:zb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:Gb,morphcolor_vertex:Vb,morphnormal_vertex:Wb,morphtarget_pars_vertex:Xb,morphtarget_vertex:qb,normal_fragment_begin:Yb,normal_fragment_maps:Kb,normal_pars_fragment:Zb,normal_pars_vertex:Jb,normal_vertex:$b,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:eT,clearcoat_pars_fragment:tT,iridescence_pars_fragment:nT,opaque_fragment:iT,packing:rT,premultiplied_alpha_fragment:sT,project_vertex:oT,dithering_fragment:aT,dithering_pars_fragment:lT,roughnessmap_fragment:cT,roughnessmap_pars_fragment:uT,shadowmap_pars_fragment:hT,shadowmap_pars_vertex:fT,shadowmap_vertex:dT,shadowmask_pars_fragment:pT,skinbase_vertex:mT,skinning_pars_vertex:gT,skinning_vertex:_T,skinnormal_vertex:xT,specularmap_fragment:yT,specularmap_pars_fragment:vT,tonemapping_fragment:ST,tonemapping_pars_fragment:MT,transmission_fragment:bT,transmission_pars_fragment:TT,uv_pars_fragment:wT,uv_pars_vertex:ET,uv_vertex:AT,worldpos_vertex:RT,background_vert:CT,background_frag:PT,backgroundCube_vert:IT,backgroundCube_frag:LT,cube_vert:DT,cube_frag:NT,depth_vert:OT,depth_frag:UT,distance_vert:FT,distance_frag:BT,equirect_vert:kT,equirect_frag:zT,linedashed_vert:HT,linedashed_frag:GT,meshbasic_vert:VT,meshbasic_frag:WT,meshlambert_vert:XT,meshlambert_frag:qT,meshmatcap_vert:YT,meshmatcap_frag:KT,meshnormal_vert:ZT,meshnormal_frag:JT,meshphong_vert:$T,meshphong_frag:jT,meshphysical_vert:QT,meshphysical_frag:ew,meshtoon_vert:tw,meshtoon_frag:nw,points_vert:iw,points_frag:rw,shadow_vert:sw,shadow_frag:ow,sprite_vert:aw,sprite_frag:lw},Ee={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Mr={basic:{uniforms:Kn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Kn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Kn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Kn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Kn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Kn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Kn([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Kn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Kn([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Kn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Kn([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Kn([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Kn([Ee.lights,Ee.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Mr.physical={uniforms:Kn([Mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var nf={r:0,b:0,g:0},cw=new Ye,Nx=new qe;Nx.set(-1,0,0,0,1,0,0,0,1);function uw(r,e,t,n,i,s){let o=new Ge(0),a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=e.get(b,v)}return b}function m(y){let b=!1,v=d(y);v===null?p(o,a):v&&v.isColor&&(p(v,1),b=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,b){let v=d(b);v&&v.isCubeTexture?(c===void 0&&(c=new Mt(new Li(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:Eo(Mr.backgroundCube.uniforms),vertexShader:Mr.backgroundCube.vertexShader,fragmentShader:Mr.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cw.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nx),c.material.toneMapped=nt.getTransfer(v.colorSpace)!==vt,(u!==v||h!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Mt(new Kr(2,2),new gr({name:"BackgroundMaterial",uniforms:Eo(Mr.background.uniforms),vertexShader:Mr.background.vertexShader,fragmentShader:Mr.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(nf,Yp(r)),t.buffers.color.setClear(nf.r,nf.g,nf.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:g}}function hw(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(L,D,F,P,k){let B=!1,U=h(L,P,F,D);s!==U&&(s=U,c(s.object)),B=d(L,P,F,k),B&&m(L,P,F,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(L,D,F,P),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function h(L,D,F,P){let k=P.wireframe===!0,B=n[D.id];B===void 0&&(B={},n[D.id]=B);let U=L.isInstancedMesh===!0?L.id:0,$=B[U];$===void 0&&($={},B[U]=$);let G=$[F.id];G===void 0&&(G={},$[F.id]=G);let I=G[k];return I===void 0&&(I=f(l()),G[k]=I),I}function f(L){let D=[],F=[],P=[];for(let k=0;k<t;k++)D[k]=0,F[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:P,object:L,attributes:{},index:null}}function d(L,D,F,P){let k=s.attributes,B=D.attributes,U=0,$=F.getAttributes();for(let G in $)if($[G].location>=0){let j=k[G],pe=B[G];if(pe===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),j===void 0||j.attribute!==pe||pe&&j.data!==pe.data)return!0;U++}return s.attributesNum!==U||s.index!==P}function m(L,D,F,P){let k={},B=D.attributes,U=0,$=F.getAttributes();for(let G in $)if($[G].location>=0){let j=B[G];j===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let pe={};pe.attribute=j,j&&j.data&&(pe.data=j.data),k[G]=pe,U++}s.attributes=k,s.attributesNum=U,s.index=P}function _(){let L=s.newAttributes;for(let D=0,F=L.length;D<F;D++)L[D]=0}function p(L){g(L,0)}function g(L,D){let F=s.newAttributes,P=s.enabledAttributes,k=s.attributeDivisors;F[L]=1,P[L]===0&&(r.enableVertexAttribArray(L),P[L]=1),k[L]!==D&&(r.vertexAttribDivisor(L,D),k[L]=D)}function y(){let L=s.newAttributes,D=s.enabledAttributes;for(let F=0,P=D.length;F<P;F++)D[F]!==L[F]&&(r.disableVertexAttribArray(F),D[F]=0)}function b(L,D,F,P,k,B,U){U===!0?r.vertexAttribIPointer(L,D,F,k,B):r.vertexAttribPointer(L,D,F,P,k,B)}function v(L,D,F,P){_();let k=P.attributes,B=F.getAttributes(),U=D.defaultAttributeValues;for(let $ in B){let G=B[$];if(G.location>=0){let I=k[$];if(I===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(I=L.instanceColor)),I!==void 0){let j=I.normalized,pe=I.itemSize,Ie=e.get(I);if(Ie===void 0)continue;let Y=Ie.buffer,he=Ie.type,Se=Ie.bytesPerElement,se=he===r.INT||he===r.UNSIGNED_INT||I.gpuType===xh;if(I.isInterleavedBufferAttribute){let ae=I.data,oe=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,De=I.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)g(G.location+fe,ae.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let fe=0;fe<G.locationSize;fe++)p(G.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let fe=0;fe<G.locationSize;fe++)b(G.location+fe,pe/G.locationSize,he,j,oe*Se,(De+pe/G.locationSize*fe)*Se,se)}else{if(I.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)g(G.location+ae,I.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ae=0;ae<G.locationSize;ae++)p(G.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let ae=0;ae<G.locationSize;ae++)b(G.location+ae,pe/G.locationSize,he,j,pe*Se,pe/G.locationSize*ae*Se,se)}}else if(U!==void 0){let j=U[$];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(G.location,j);break;case 3:r.vertexAttrib3fv(G.location,j);break;case 4:r.vertexAttrib4fv(G.location,j);break;default:r.vertexAttrib1fv(G.location,j)}}}}y()}function M(){R();for(let L in n){let D=n[L];for(let F in D){let P=D[F];for(let k in P){let B=P[k];for(let U in B)u(B[U].object),delete B[U];delete P[k]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let F in D){let P=D[F];for(let k in P){let B=P[k];for(let U in B)u(B[U].object),delete B[U];delete P[k]}}delete n[L.id]}function x(L){for(let D in n){let F=n[D];for(let P in F){let k=F[P];if(k[L.id]===void 0)continue;let B=k[L.id];for(let U in B)u(B[U].object),delete B[U];delete k[L.id]}}}function S(L){for(let D in n){let F=n[D],P=L.isInstancedMesh===!0?L.id:0,k=F[P];if(k!==void 0){for(let B in k){let U=k[B];for(let $ in U)u(U[$].object),delete U[$];delete k[B]}delete F[P],Object.keys(F).length===0&&delete n[D]}}}function R(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function fw(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function dw(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Wi&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==xi&&x!==Yn&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:M,samples:w}}function pw(r){let e=this,t=null,n=0,i=!1,s=!1,o=new er,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=r.get(h);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{let y=s?0:n,b=y*4,v=g.clippingState||null;l.value=v,v=u(m,f,b,d);for(let M=0;M!==b;++M)v[M]=t[M];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,v=d;b!==_;++b,v+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var gc=class extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Li(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:vo});s.uniforms.tEquirect.value=t;let o=new Mt(i,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Lt),new Ca(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},fx=256,mw=3,gw=20,Ox=256,Ux=16,_w=3,xw=new H,yw=new Ge,Ps=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ca(1,10,null),this._boxMesh=new Mt(new Li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=xw}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(yw));let p=new Ca(n,i,u);return p.position.copy(a),p.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(fx,Wp(e))}_fromTexture(e,t){e.mapping===bo||e.mapping===La?this._setSize(e.image.length===0?fx:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=dx(e,!1,!1),n=Math.log2(e)-mw;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===bo||e.mapping===La?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=px()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=vw(),this._integrationMaterial=Sw());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Ux);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-_w)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Ox*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Mw());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function dx(r,e,t){return new gc(r,{minFilter:Di,generateMipmaps:e,type:oi,colorSpace:Pn,depthBuffer:t})}function _c(r,e,t){return new gr({name:r,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:Ln,blending:vo,depthTest:!1,depthWrite:!1})}function vw(){return _c("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ox}u

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
	`)}function Sw(){return _c("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ux}},`

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
	`)}function Mw(){return _c("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gw}
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
	`)}function px(){return _c("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function mx(){return _c("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bw(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===mh||d===gh)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new gc(m.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===mh||d===gh,_=d===bo||d===La;if(m||_){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ps(r)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let y=f.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Ps(r)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===mh?f.mapping=bo:d===gh&&(f.mapping=La),f}function l(f){let d=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Tw(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&oo("WebGLRenderer: "+n+" extension not supported."),i}}}function ww(r,e,t,n){let i={},s=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(m){let _=m.attributes;for(let p in _)e.update(_[p],r.ARRAY_BUFFER)}function h(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=_!==null?_.array.length:p.array.length/3-1,b=p.count>=65535?zl:kl,v=new b(Math.ceil(y/3)*6,1),M=v.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,R=0;S<y;S+=3){let A=x[S+0],L=x[S+1],D=x[S+2];M[R++]=A,M[R++]=L,M[R++]=L,M[R++]=D,M[R++]=D,M[R++]=A}}else{g=p.version;for(let x=0,S=0;x<y;x+=3){let R=x+0,A=x+1,L=x+2;M[S++]=R,M[S++]=A,M[S++]=A,M[S++]=L,M[S++]=L,M[S++]=R}}v.version=g;let w=s.get(m);w&&e.remove(w),s.set(m,v)}function f(m){let _=s.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&h(m)}else h(m);return s.get(m)}function d(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function Ew(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Aw(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Rw(r,e,t){let n=new WeakMap,i=new _t;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let R=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;d===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*M*4*h),x=new Fl(w,v,M,h);x.type=Yn,x.needsUpdate=!0;let S=b*4;for(let A=0;A<h;A++){let L=p[A],D=g[A],F=y[A],P=v*M*4*A;for(let k=0;k<L.count;k++){let B=k*S;d===!0&&(i.fromBufferAttribute(L,k),w[P+B+0]=i.x,w[P+B+1]=i.y,w[P+B+2]=i.z,w[P+B+3]=0),m===!0&&(i.fromBufferAttribute(D,k),w[P+B+4]=i.x,w[P+B+5]=i.y,w[P+B+6]=i.z,w[P+B+7]=0),_===!0&&(i.fromBufferAttribute(F,k),w[P+B+8]=i.x,w[P+B+9]=i.y,w[P+B+10]=i.z,w[P+B+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:x,size:new $e(v,M)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Cw(r,e,t,n,i){let s=new WeakMap;function o(c){let u=i.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Pw={[Tp]:"LINEAR_TONE_MAPPING",[wp]:"REINHARD_TONE_MAPPING",[Ep]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[Rp]:"AGX_TONE_MAPPING",[Cp]:"NEUTRAL_TONE_MAPPING",[Ap]:"CUSTOM_TONE_MAPPING"};function Iw(r,e,t,n,i,s){let o=new Ii(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Tn;u.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let h=new ih({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Mt(u,h),d=new xo(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,y=null,b=[],v=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let x=0;x<b.length;x++){let S=b[x];S.setSize&&S.setSize(M,w)}},this.setEffects=function(M){b=M,v=b.length>0&&b[0].isRenderPass===!0;let w=o.width,x=o.height;b.length>0&&a===null&&(a=new Ii(w,x,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new Ii(w,x,{type:oi,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&b.some(R=>R.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Yr(w,x),s===!0&&(c.format=es,c.type=wo)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let R=0;R<b.length;R++){let A=b[R];A.setSize&&A.setSize(w,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(M,w){if(p||M.toneMapping===yr&&b.length===0)return!1;if(y=w,w!==null){let x=w.width,S=w.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return v===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=yr,!0},this.hasRenderPass=function(){return v},this.end=function(M,w){M.toneMapping=g,p=!0;let x=o,S=a;for(let R=0;R<b.length;R++){let A=b[R];A.enabled!==!1&&(A.render(M,S,x,w),A.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(m!==M.outputColorSpace||_!==M.toneMapping){m=M.outputColorSpace,_=M.toneMapping,h.defines={},nt.getTransfer(m)===vt&&(h.defines.SRGB_TRANSFER="");let R=Pw[_];R&&(h.defines[R]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(y),M.render(f,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Fx=new _n,Bx=new Yr(1,1),kx=new ql(1),zx=new Fl,Hx=new Qu,Gx=new Xl,gx=[],_x=[],xx=new Float32Array(16),yx=new Float32Array(9),vx=new Float32Array(4);function Ba(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=gx[i];if(s===void 0&&(s=new Float32Array(i),gx[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function xn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function yn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function sf(r,e){let t=_x[e];t===void 0&&(t=new Int32Array(e),_x[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Lw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;r.uniform2fv(this.addr,e),yn(t,e)}}function Nw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;r.uniform3fv(this.addr,e),yn(t,e)}}function Ow(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;r.uniform4fv(this.addr,e),yn(t,e)}}function Uw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;vx.set(n),r.uniformMatrix2fv(this.addr,!1,vx),yn(t,n)}}function Fw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;yx.set(n),r.uniformMatrix3fv(this.addr,!1,yx),yn(t,n)}}function Bw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;xx.set(n),r.uniformMatrix4fv(this.addr,!1,xx),yn(t,n)}}function kw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function zw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;r.uniform2iv(this.addr,e),yn(t,e)}}function Hw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;r.uniform3iv(this.addr,e),yn(t,e)}}function Gw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;r.uniform4iv(this.addr,e),yn(t,e)}}function Vw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ww(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;r.uniform2uiv(this.addr,e),yn(t,e)}}function Xw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;r.uniform3uiv(this.addr,e),yn(t,e)}}function qw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;r.uniform4uiv(this.addr,e),yn(t,e)}}function of(r){return r.version===0&&(r.compareFunction=zp,r.needsUpdate=!0),r}function Yw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=of(Bx):s=Fx,t.setTexture2D(e||s,i)}function Kw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hx,i)}function Zw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=of(kx):s=Gx,t.setTextureCube(e||s,i)}function Jw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zx,i)}function $w(r){switch(r){case 5126:return Lw;case 35664:return Dw;case 35665:return Nw;case 35666:return Ow;case 35674:return Uw;case 35675:return Fw;case 35676:return Bw;case 5124:case 35670:return kw;case 35667:case 35671:return zw;case 35668:case 35672:return Hw;case 35669:case 35673:return Gw;case 5125:return Vw;case 36294:return Ww;case 36295:return Xw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return Jw}}function jw(r,e){r.uniform1fv(this.addr,e)}function Qw(r,e){let t=Ba(e,this.size,2);r.uniform2fv(this.addr,t)}function e1(r,e){let t=Ba(e,this.size,3);r.uniform3fv(this.addr,t)}function t1(r,e){let t=Ba(e,this.size,4);r.uniform4fv(this.addr,t)}function n1(r,e){let t=Ba(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function i1(r,e){let t=Ba(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function r1(r,e){let t=Ba(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function s1(r,e){r.uniform1iv(this.addr,e)}function o1(r,e){r.uniform2iv(this.addr,e)}function a1(r,e){r.uniform3iv(this.addr,e)}function l1(r,e){r.uniform4iv(this.addr,e)}function c1(r,e){r.uniform1uiv(this.addr,e)}function u1(r,e){r.uniform2uiv(this.addr,e)}function h1(r,e){r.uniform3uiv(this.addr,e)}function f1(r,e){r.uniform4uiv(this.addr,e)}function d1(r,e,t){let n=this.cache,i=e.length,s=sf(t,i);xn(n,s)||(r.uniform1iv(this.addr,s),yn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=of(Bx):o=Fx;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function p1(r,e,t){let n=this.cache,i=e.length,s=sf(t,i);xn(n,s)||(r.uniform1iv(this.addr,s),yn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Hx,s[o])}function m1(r,e,t){let n=this.cache,i=e.length,s=sf(t,i);xn(n,s)||(r.uniform1iv(this.addr,s),yn(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=of(kx):o=Gx;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,s[a])}function g1(r,e,t){let n=this.cache,i=e.length,s=sf(t,i);xn(n,s)||(r.uniform1iv(this.addr,s),yn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zx,s[o])}function _1(r){switch(r){case 5126:return jw;case 35664:return Qw;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return a1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return h1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}var Qp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$w(t.type)}},em=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_1(t.type)}},tm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},$p=/(\w+)(\])?(\[|\.)?/g;function Sx(r,e){r.seq.push(e),r.map[e.id]=e}function x1(r,e,t){let n=r.name,i=n.length;for($p.lastIndex=0;;){let s=$p.exec(n),o=$p.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Sx(t,c===void 0?new Qp(a,r,e):new em(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new tm(a),Sx(t,h)),t=h}}}var Ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);x1(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Mx(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var y1=37297,v1=0;function S1(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var bx=new qe;function M1(r){nt._getMatrix(bx,nt.workingColorSpace,r);let e=`mat3( ${bx.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(r)){case Ol:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Tx(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+S1(r.getShaderSource(e),a)}else return s}function b1(r,e){let t=M1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var T1={[Tp]:"Linear",[wp]:"Reinhard",[Ep]:"Cineon",[Mo]:"ACESFilmic",[Rp]:"AgX",[Cp]:"Neutral",[Ap]:"Custom"};function w1(r,e){let t=T1[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rf=new H;function E1(){nt.getLuminanceCoefficients(rf);let r=rf.x.toFixed(4),e=rf.y.toFixed(4),t=rf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mc).join(`
`)}function R1(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C1(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function mc(r){return r!==""}function wx(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ex(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P1=/^[ \t]*#include +<([\w\d./]+)>/gm;function nm(r){return r.replace(P1,I1)}function I1(r,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return nm(t)}var L1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ax(r){return r.replace(L1,D1)}function D1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rx(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var N1={[yo]:"SHADOWMAP_TYPE_PCF",[Pa]:"SHADOWMAP_TYPE_VSM"};function O1(r){return N1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var U1={[La]:"ENVMAP_MODE_REFRACTION"};function F1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":U1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var B1={[ph]:"ENVMAP_BLENDING_MULTIPLY",[q0]:"ENVMAP_BLENDING_MIX",[Y0]:"ENVMAP_BLENDING_ADD"};function k1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":B1[r.combine]||"ENVMAP_BLENDING_NONE"}function z1(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=O1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=F1(t),h=k1(t),f=A1(t),d=R1(s),m=i.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(mc).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(mc).join(`
`),p.length>0&&(p+=`
`)):(_=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mc).join(`
`),p=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==yr?w1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,b1("linearToOutputTexel",t.outputColorSpace),E1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mc).join(`
`)),o=nm(o),o=wx(o,t),o=Ex(o,t),a=nm(a),a=wx(a,t),a=Ex(a,t),o=Ax(o),a=Ax(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+_+o,b=g+p+a,v=Mx(i,i.VERTEX_SHADER,y),M=Mx(i,i.FRAGMENT_SHADER,b);i.attachShader(m,v),i.attachShader(m,M),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(A){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(v)||"",F=i.getShaderInfoLog(M)||"",P=L.trim(),k=D.trim(),B=F.trim(),U=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,v,M);else{let G=Tx(i,v,"vertex"),I=Tx(i,M,"fragment");We("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+G+`
`+I)}else P!==""?ze("WebGLProgram: Program Info Log:",P):(k===""||B==="")&&($=!1);$&&(A.diagnostics={runnable:U,programLog:P,vertexShader:{log:k,prefix:_},fragmentShader:{log:B,prefix:p}})}i.deleteShader(v),i.deleteShader(M),x=new Ua(i,m),S=C1(i,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(m,y1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=M,this}var H1=0,im=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rm(e),t.set(e,n)),n}},rm=class{constructor(e){this.id=H1++,this.code=e,this.usedTimes=0}};function G1(r){return r===Cs||r===uc||r===hc}function V1(r,e,t,n,i,s){let o=new Bl,a=new im,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,R,A,L,D){let F=A.fog,P=L.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||k,B),$=f[x.type],G=n.precision;x.precision!==null&&(G=n.getMaxPrecision(x.precision),G!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let I=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=I!==void 0?I.length:0,pe=0;P.morphAttributes.position!==void 0&&(pe=1),P.morphAttributes.normal!==void 0&&(pe=2),P.morphAttributes.color!==void 0&&(pe=3);let Ie,Y,he,Se;if($){let ne=Mr[$];Ie=ne.vertexShader,Y=ne.fragmentShader}else{Ie=x.vertexShader,Y=x.fragmentShader;let ne=a.getVertexShaderStage(x),Ce=a.getFragmentShaderStage(x);a.update(x,ne,Ce),he=ne.id,Se=Ce.id}let se=r.getRenderTarget(),ae=r.state.buffers.depth.getReversed(),oe=L.isInstancedMesh===!0,De=L.isBatchedMesh===!0,fe=!!x.map,Le=!!x.matcap,we=!!U,Re=we&&U.isPMREMTexture===!0,He=!!x.aoMap,rt=!!x.lightMap,Z=!!x.bumpMap&&x.wireframe===!1,ot=!!x.normalMap,nn=!!x.displacementMap,wt=!!x.emissiveMap,ut=!!x.metalnessMap,qt=!!x.roughnessMap,jt=x.anisotropy>0,z=x.clearcoat>0,mt=x.diffuseRoughness>0,ft=x.dispersion>0,Xe=x.retroreflectivity>0,ge=x.iridescence>0,pt=x.sheen>0,Be=x.transmission>0,Ve=jt&&!!x.anisotropyMap,C=z&&!!x.clearcoatMap,T=z&&!!x.clearcoatNormalMap,W=z&&!!x.clearcoatRoughnessMap,le=mt&&!!x.diffuseRoughnessMap,ie=ge&&!!x.iridescenceMap,me=ge&&!!x.iridescenceThicknessMap,ve=pt&&!!x.sheenColorMap,X=pt&&!!x.sheenRoughnessMap,ee=!!x.specularMap,de=!!x.specularColorMap,N=!!x.specularIntensityMap,Q=Be&&!!x.transmissionMap,J=Be&&!!x.thicknessMap,_e=!!x.gradientMap,ue=!!x.alphaMap,xe=x.alphaTest>0,ce=!!x.alphaHash,ye=!!x.extensions,re=yr;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(re=r.toneMapping);let te=Re?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,Me={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:Y,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:De,batchingColor:De&&L._colorsTexture!==null,instancing:oe,instancingColor:oe&&L.instanceColor!==null,instancingMorph:oe&&L.morphTexture!==null,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:fe,matcap:Le,envMap:we,envMapMode:we&&U.mapping,envMapPMREM:Re,envMapMaxLod:Re?te.length-1:null,envMapSize:Re?te[0].width:null,aoMap:He,lightMap:rt,bumpMap:Z,normalMap:ot,displacementMap:nn,emissiveMap:wt,normalMapObjectSpace:ot&&x.normalMapType===$0,normalMapTangentSpace:ot&&x.normalMapType===dc,packedNormalMap:ot&&x.normalMapType===dc&&G1(x.normalMap.format),metalnessMap:ut,roughnessMap:qt,anisotropy:jt,anisotropyMap:Ve,clearcoat:z,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:W,diffuseRoughness:mt,diffuseRoughnessMap:le,dispersion:ft,retroreflection:Xe,iridescence:ge,iridescenceMap:ie,iridescenceThicknessMap:me,sheen:pt,sheenColorMap:ve,sheenRoughnessMap:X,specularMap:ee,specularColorMap:de,specularIntensityMap:N,transmission:Be,transmissionMap:Q,thicknessMap:J,gradientMap:_e,opaque:x.transparent===!1&&x.blending===Ia&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:xe,alphaHash:ce,combine:x.combine,mapUv:fe&&d(x.map.channel),aoMapUv:He&&d(x.aoMap.channel),lightMapUv:rt&&d(x.lightMap.channel),bumpMapUv:Z&&d(x.bumpMap.channel),normalMapUv:ot&&d(x.normalMap.channel),displacementMapUv:nn&&d(x.displacementMap.channel),emissiveMapUv:wt&&d(x.emissiveMap.channel),metalnessMapUv:ut&&d(x.metalnessMap.channel),roughnessMapUv:qt&&d(x.roughnessMap.channel),anisotropyMapUv:Ve&&d(x.anisotropyMap.channel),clearcoatMapUv:C&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&d(x.sheenRoughnessMap.channel),specularMapUv:ee&&d(x.specularMap.channel),specularColorMapUv:de&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:Q&&d(x.transmissionMap.channel),thicknessMapUv:J&&d(x.thicknessMap.channel),alphaMapUv:ue&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ot||jt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(fe||ue),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ot===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:pe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(ne=>ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:fe&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:wt&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_i,flipSided:x.side===Ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)S.push(R),S.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let S=f[x.type],R;if(S){let A=Mr[S];R=cx.clone(A.uniforms)}else R=x.uniforms;return R}function b(x,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new z1(r,S,x,i),c.push(R),u.set(S,R)),R}function v(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){a.remove(x)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:w}}function W1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function X1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Cx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Px(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,_,p,g){let y=r[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},r[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=m,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=p,y.group=g),e++,y}function l(f,d,m,_,p,g,y){y.reversedDepth===!0&&(p=-p);let b=a(f,d,m,_,p,g);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function c(f,d,m,_,p,g){let y=a(f,d,m,_,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||X1),n.length>1&&n.sort(d||Cx),i.length>1&&i.sort(d||Cx)}function h(){for(let f=e,d=r.length;f<d;f++){let m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function q1(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Px,r.set(n,[o])):i>=s.length?(o=new Px,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Y1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Ge};break;case"SpotLight":t={position:new H,direction:new H,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function K1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Z1=0;function J1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $1(r){let e=new Y1,t=K1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,s=new Ye,o=new Ye;function a(c){let u=0,h=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,y=0,b=0,v=0,M=0,w=0,x=0,S=0,R=0,A=0;c.sort(J1);for(let D=0,F=c.length;D<F;D++){let P=c[D],k=P.color,B=P.intensity,U=P.distance,$=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Cs?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*B,h+=k.g*B,f+=k.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],B);A++}else if(P.isSunLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let I=P.shadow,j=t.get(P);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=$;let pe=I.getViewportCount();for(let Ie=0;Ie<pe;Ie++)n.sunShadowMatrix[_+Ie]=I.getMatrix(Ie),n.sunShadowCascade[_+Ie]=I._cascadeData[Ie];_+=pe,m++}n.sun[d]=G,d++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let I=P.shadow,j=t.get(P);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize=I.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=G,p++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(k).multiplyScalar(B),G.distance=U,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[y]=G;let I=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,I.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[y]=I.matrix,P.castShadow){let j=t.get(P);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize=I.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=$,x++}y++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(k).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=G,b++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let I=P.shadow,j=t.get(P);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize=I.mapSize,j.shadowCameraNear=I.camera.near,j.shadowCameraFar=I.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=G,g++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[v]=G,v++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==b||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==M||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==S||L.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=p,n.spot.length=y,n.rectArea.length=b,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,L.sunLength=d,L.directionalLength=p,L.pointLength=g,L.spotLength=y,L.rectAreaLength=b,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=M,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=S,L.numLightProbes=A,n.version=Z1++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0,p=0,g=u.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let v=c[y];if(v.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),h++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Ix(r){let e=new $1(r),t=[],n=[],i=[];function s(h){u.camera=h,t.length=0,n.length=0,i.length=0}function o(h){h.isLightProbeGrid?i.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),i.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function j1(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Ix(r),e.set(i,[a])):s>=o.length?(a=new Ix(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eE=`uniform sampler2D shadow_pass;
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
}`,tE=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],nE=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Lx=new Ye,pc=new H,jp=new H;function iE(r,e,t){let n=new ws,i=new $e,s=new $e,o=new _t,a=new rh,l=new sh,c={},u=t.maxTextureSize,h={[xr]:Ln,[Ln]:xr,[_i]:_i},f=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Q1,fragmentShader:eE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Tn;m.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Mt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let g=this.type;this.render=function(w,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===A0&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yo);let R=r.getRenderTarget(),A=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(vo),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=g!==this.type;F&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=w.length;P<k;P++){let B=w[P],U=B.shadow;if(U===void 0){ze("WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let $=U.getFrameExtents();i.multiply($),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,U.mapSize.y=s.y));let G=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=G,U.map===null||F===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Pa){if(B.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ii(i.x,i.y,{format:Cs,type:oi,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),U.map.texture.name=B.name+".shadowMap",U.map.depthTexture=new Yr(i.x,i.y,Yn),U.map.depthTexture.name=B.name+".shadowMapDepth",U.map.depthTexture.format=Wr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=tn,U.map.depthTexture.magFilter=tn}else B.isPointLight?(U.map=new gc(i.x),U.map.depthTexture=new ql(i.x,nr)):(U.map=new Ii(i.x,i.y),U.map.depthTexture=new Yr(i.x,i.y,nr)),U.map.depthTexture.name=B.name+".shadowMap",U.map.depthTexture.format=Wr,this.type===yo?(U.map.depthTexture.compareFunction=G?kp:Bp,U.map.depthTexture.minFilter=Lt,U.map.depthTexture.magFilter=Lt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=tn,U.map.depthTexture.magFilter=tn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let I=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();B.isPointLight!==!0&&U.updateMatrices(B,S);let j=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:S.layers;for(let pe=0;pe<I;pe++){let Ie=U.getCamera(pe);if(B.isPointLight){let Y=U.camera,he=U.matrix,Se=B.distance||Y.far;Se!==Y.far&&(Y.far=Se,Y.updateProjectionMatrix()),pc.setFromMatrixPosition(B.matrixWorld),Y.position.copy(pc),jp.copy(Y.position),jp.add(tE[pe]),Y.up.copy(nE[pe]),Y.lookAt(jp),Y.updateMatrixWorld(),he.makeTranslation(-pc.x,-pc.y,-pc.z),Lx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Lx,Y.coordinateSystem,Y.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,pe),r.clear();else{pe===0&&(r.setRenderTarget(U.map),r.clear());let Y=U.getViewport(pe);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),D.viewport(o)}n=U.getFrustum(pe),v(x,S,Ie,B,j,this.type)}U.isPointLightShadow!==!0&&this.type===Pa&&y(U,S),U.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(R,A,L)};function y(w,x){let S=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ii(i.x,i.y,{format:Cs,type:oi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(x,null,S,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(x,null,S,d,_,null)}function b(w,x,S,R){let A=null,L=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)A=L;else if(A=S.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=A.uuid,F=x.uuid,P=c[D];P===void 0&&(P={},c[D]=P);let k=P[F];k===void 0&&(k=A.clone(),P[F]=k,x.addEventListener("dispose",M)),A=k}if(A.visible=x.visible,A.wireframe=x.wireframe,R===Pa?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:h[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=r.properties.get(A);D.light=S}return A}function v(w,x,S,R,A,L){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Pa)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let P=e.update(w),k=w.material;if(Array.isArray(k)){let B=P.groups;for(let U=0,$=B.length;U<$;U++){let G=B[U],I=k[G.materialIndex];if(I&&I.visible){let j=b(w,I,R,L);w.onBeforeShadow(r,w,x,S,P,j,G),r.renderBufferDirect(S,null,P,j,w,G),w.onAfterShadow(r,w,x,S,P,j,G)}}}else if(k.visible){let B=b(w,k,R,L);w.onBeforeShadow(r,w,x,S,P,B,null),r.renderBufferDirect(S,null,P,B,w,null),w.onAfterShadow(r,w,x,S,P,B,null)}}let F=w.children;for(let P=0,k=F.length;P<k;P++)v(F[P],x,S,R,A,L)}function M(w){w.target.removeEventListener("dispose",M);for(let S in c){let R=c[S],A=w.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function rE(r,e){function t(){let N=!1,Q=new _t,J=null,_e=new _t(0,0,0,0);return{setMask:function(ue){J!==ue&&!N&&(r.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){N=ue},setClear:function(ue,xe,ce,ye,re){re===!0&&(ue*=ye,xe*=ye,ce*=ye),Q.set(ue,xe,ce,ye),_e.equals(Q)===!1&&(r.clearColor(ue,xe,ce,ye),_e.copy(Q))},reset:function(){N=!1,J=null,_e.set(-1,0,0,0)}}}function n(){let N=!1,Q=!1,J=null,_e=null,ue=null;return{setReversed:function(xe){if(Q!==xe){let ce=e.get("EXT_clip_control");xe?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),Q=xe;let ye=ue;ue=null,this.setClear(ye)}},getReversed:function(){return Q},setTest:function(xe){xe?ae(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(xe){J!==xe&&!N&&(r.depthMask(xe),J=xe)},setFunc:function(xe){if(Q&&(xe=ax[xe]),_e!==xe){switch(xe){case Wu:r.depthFunc(r.NEVER);break;case Xu:r.depthFunc(r.ALWAYS);break;case qu:r.depthFunc(r.LESS);break;case ga:r.depthFunc(r.LEQUAL);break;case Yu:r.depthFunc(r.EQUAL);break;case Ku:r.depthFunc(r.GEQUAL);break;case Zu:r.depthFunc(r.GREATER);break;case Ju:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_e=xe}},setLocked:function(xe){N=xe},setClear:function(xe){ue!==xe&&(ue=xe,Q&&(xe=1-xe),r.clearDepth(xe))},reset:function(){N=!1,J=null,_e=null,ue=null,Q=!1}}}function i(){let N=!1,Q=null,J=null,_e=null,ue=null,xe=null,ce=null,ye=null,re=null;return{setTest:function(te){N||(te?ae(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(te){Q!==te&&!N&&(r.stencilMask(te),Q=te)},setFunc:function(te,Me,ne){(J!==te||_e!==Me||ue!==ne)&&(r.stencilFunc(te,Me,ne),J=te,_e=Me,ue=ne)},setOp:function(te,Me,ne){(xe!==te||ce!==Me||ye!==ne)&&(r.stencilOp(te,Me,ne),xe=te,ce=Me,ye=ne)},setLocked:function(te){N=te},setClear:function(te){re!==te&&(r.clearStencil(te),re=te)},reset:function(){N=!1,Q=null,J=null,_e=null,ue=null,xe=null,ce=null,ye=null,re=null}}}let s=new t,o=new n,a=new i,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,y=null,b=null,v=null,M=null,w=null,x=null,S=new Ge(0,0,0),R=0,A=!1,L=null,D=null,F=null,P=null,k=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,$=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=$>=2);let I=null,j={},pe=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),Y=new _t().fromArray(pe),he=new _t().fromArray(Ie);function Se(N,Q,J,_e){let ue=new Uint8Array(4),xe=r.createTexture();r.bindTexture(N,xe),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<J;ce++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(Q+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return xe}let se={};se[r.TEXTURE_2D]=Se(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=Se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=Se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=Se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(r.DEPTH_TEST),o.setFunc(ga),Z(!1),ot(xp),ae(r.CULL_FACE),He(vo);function ae(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function oe(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function De(N,Q){return f[N]!==Q?(r.bindFramebuffer(N,Q),f[N]=Q,N===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Q),N===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function fe(N,Q){let J=m,_e=!1;if(N){J=d.get(Q),J===void 0&&(J=[],d.set(Q,J));let ue=N.textures;if(J.length!==ue.length||J[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,ce=ue.length;xe<ce;xe++)J[xe]=r.COLOR_ATTACHMENT0+xe;J.length=ue.length,_e=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,_e=!0);_e&&r.drawBuffers(J)}function Le(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let we={[So]:r.FUNC_ADD,[C0]:r.FUNC_SUBTRACT,[P0]:r.FUNC_REVERSE_SUBTRACT};we[I0]=r.MIN,we[L0]=r.MAX;let Re={[D0]:r.ZERO,[N0]:r.ONE,[O0]:r.SRC_COLOR,[Mp]:r.SRC_ALPHA,[H0]:r.SRC_ALPHA_SATURATE,[k0]:r.DST_COLOR,[F0]:r.DST_ALPHA,[U0]:r.ONE_MINUS_SRC_COLOR,[bp]:r.ONE_MINUS_SRC_ALPHA,[z0]:r.ONE_MINUS_DST_COLOR,[B0]:r.ONE_MINUS_DST_ALPHA,[G0]:r.CONSTANT_COLOR,[V0]:r.ONE_MINUS_CONSTANT_COLOR,[W0]:r.CONSTANT_ALPHA,[X0]:r.ONE_MINUS_CONSTANT_ALPHA};function He(N,Q,J,_e,ue,xe,ce,ye,re,te){if(N===vo){p===!0&&(oe(r.BLEND),p=!1);return}if(p===!1&&(ae(r.BLEND),p=!0),N!==R0){if(N!==g||te!==A){if((y!==So||M!==So)&&(r.blendEquation(r.FUNC_ADD),y=So,M=So),te)switch(N){case Ia:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yp:r.blendFunc(r.ONE,r.ONE);break;case vp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case Ia:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vp:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sp:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}b=null,v=null,w=null,x=null,S.set(0,0,0),R=0,g=N,A=te}return}ue=ue||Q,xe=xe||J,ce=ce||_e,(Q!==y||ue!==M)&&(r.blendEquationSeparate(we[Q],we[ue]),y=Q,M=ue),(J!==b||_e!==v||xe!==w||ce!==x)&&(r.blendFuncSeparate(Re[J],Re[_e],Re[xe],Re[ce]),b=J,v=_e,w=xe,x=ce),(ye.equals(S)===!1||re!==R)&&(r.blendColor(ye.r,ye.g,ye.b,re),S.copy(ye),R=re),g=N,A=!1}function rt(N,Q){N.side===_i?oe(r.CULL_FACE):ae(r.CULL_FACE);let J=N.side===Ln;Q&&(J=!J),Z(J),N.blending===Ia&&N.transparent===!1?He(vo):He(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let _e=N.stencilWrite;a.setTest(_e),_e&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Z(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function ot(N){N!==w0?(ae(r.CULL_FACE),N!==D&&(N===xp?r.cullFace(r.BACK):N===E0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),D=N}function nn(N){N!==F&&(U&&r.lineWidth(N),F=N)}function wt(N,Q,J){N?(ae(r.POLYGON_OFFSET_FILL),(P!==Q||k!==J)&&(P=Q,k=J,o.getReversed()&&(Q=-Q,J=-J),r.polygonOffset(Q,J))):oe(r.POLYGON_OFFSET_FILL)}function ut(N){N?ae(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function qt(N){N===void 0&&(N=r.TEXTURE0+B-1),I!==N&&(r.activeTexture(N),I=N)}function jt(N,Q,J){J===void 0&&(I===null?J=r.TEXTURE0+B-1:J=I);let _e=j[J];_e===void 0&&(_e={type:void 0,texture:void 0},j[J]=_e),(_e.type!==N||_e.texture!==Q)&&(I!==J&&(r.activeTexture(J),I=J),r.bindTexture(N,Q||se[N]),_e.type=N,_e.texture=Q)}function z(){let N=j[I];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function mt(){try{r.compressedTexImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ft(){try{r.compressedTexImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Xe(){try{r.texSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ge(){try{r.texSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function Be(){try{r.compressedTexSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Ve(){try{r.texStorage2D(...arguments)}catch(N){We("WebGLState:",N)}}function C(){try{r.texStorage3D(...arguments)}catch(N){We("WebGLState:",N)}}function T(){try{r.texImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function W(){try{r.texImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function le(N){return h[N]!==void 0?h[N]:r.getParameter(N)}function ie(N,Q){h[N]!==Q&&(r.pixelStorei(N,Q),h[N]=Q)}function me(N){Y.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Y.copy(N))}function ve(N){he.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),he.copy(N))}function X(N,Q){let J=c.get(Q);J===void 0&&(J=new WeakMap,c.set(Q,J));let _e=J.get(N);_e===void 0&&(_e=r.getUniformBlockIndex(Q,N.name),r.uniformBlockBinding(Q,_e,_e),J.set(N,_e))}function ee(N,Q,J){let ue=c.get(Q).get(N);l[ue]!==J&&(r.bindBufferBase(r.UNIFORM_BUFFER,ue,J),l[ue]=J)}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},I=null,j={},f={},l={},d=new WeakMap,m=[],_=null,p=!1,g=null,y=null,b=null,v=null,M=null,w=null,x=null,S=new Ge(0,0,0),R=0,A=!1,L=null,D=null,F=null,P=null,k=null,Y.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:oe,bindFramebuffer:De,drawBuffers:fe,useProgram:Le,setBlending:He,setMaterial:rt,setFlipSided:Z,setCullFace:ot,setLineWidth:nn,setPolygonOffset:wt,setScissorTest:ut,activeTexture:qt,bindTexture:jt,unbindTexture:z,compressedTexImage2D:mt,compressedTexImage3D:ft,texImage2D:T,texImage3D:W,pixelStorei:ie,getParameter:le,updateUBOMapping:X,uniformBlockBinding:ee,texStorage2D:Ve,texStorage3D:C,texSubImage2D:Xe,texSubImage3D:ge,compressedTexSubImage2D:pt,compressedTexSubImage3D:Be,scissor:me,viewport:ve,reset:de}}function sE(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,h=new Set,f,d=new WeakMap,m=new Set,_=new FinalizationRegistry(C=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return p?new OffscreenCanvas(C,T):ya("canvas")}function y(C,T,W){let le=1,ie=Ve(C);if((ie.width>W||ie.height>W)&&(le=W/Math.max(ie.width,ie.height)),le<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let me=Math.floor(le*ie.width),ve=Math.floor(le*ie.height);f===void 0&&(f=g(me,ve));let X=T?g(me,ve):f;return X.width=me,X.height=ve,X.getContext("2d").drawImage(C,0,0,me,ve),ze("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+me+"x"+ve+")."),X}else return"data"in C&&ze("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function b(C){return C.generateMipmaps}function v(C){r.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,T,W,le,ie,me=!1){if(C!==null){if(r[C]!==void 0)return r[C];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ve;le&&(ve=e.get("EXT_texture_norm16"),ve||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=T;if(T===r.RED&&(W===r.FLOAT&&(X=r.R32F),W===r.HALF_FLOAT&&(X=r.R16F),W===r.UNSIGNED_BYTE&&(X=r.R8),W===r.UNSIGNED_SHORT&&ve&&(X=ve.R16_EXT),W===r.SHORT&&ve&&(X=ve.R16_SNORM_EXT)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(X=r.R8UI),W===r.UNSIGNED_SHORT&&(X=r.R16UI),W===r.UNSIGNED_INT&&(X=r.R32UI),W===r.BYTE&&(X=r.R8I),W===r.SHORT&&(X=r.R16I),W===r.INT&&(X=r.R32I)),T===r.RG&&(W===r.FLOAT&&(X=r.RG32F),W===r.HALF_FLOAT&&(X=r.RG16F),W===r.UNSIGNED_BYTE&&(X=r.RG8),W===r.UNSIGNED_SHORT&&ve&&(X=ve.RG16_EXT),W===r.SHORT&&ve&&(X=ve.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(X=r.RG8UI),W===r.UNSIGNED_SHORT&&(X=r.RG16UI),W===r.UNSIGNED_INT&&(X=r.RG32UI),W===r.BYTE&&(X=r.RG8I),W===r.SHORT&&(X=r.RG16I),W===r.INT&&(X=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(X=r.RGB8UI),W===r.UNSIGNED_SHORT&&(X=r.RGB16UI),W===r.UNSIGNED_INT&&(X=r.RGB32UI),W===r.BYTE&&(X=r.RGB8I),W===r.SHORT&&(X=r.RGB16I),W===r.INT&&(X=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),W===r.UNSIGNED_INT&&(X=r.RGBA32UI),W===r.BYTE&&(X=r.RGBA8I),W===r.SHORT&&(X=r.RGBA16I),W===r.INT&&(X=r.RGBA32I)),T===r.RGB&&(W===r.UNSIGNED_SHORT&&ve&&(X=ve.RGB16_EXT),W===r.SHORT&&ve&&(X=ve.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),T===r.RGBA){let ee=me?Ol:nt.getTransfer(ie);W===r.FLOAT&&(X=r.RGBA32F),W===r.HALF_FLOAT&&(X=r.RGBA16F),W===r.UNSIGNED_BYTE&&(X=ee===vt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&ve&&(X=ve.RGBA16_EXT),W===r.SHORT&&ve&&(X=ve.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(C,T){let W;return C?T===null||T===nr||T===wo?W=r.DEPTH24_STENCIL8:T===Yn?W=r.DEPTH32F_STENCIL8:T===Na&&(W=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===nr||T===wo?W=r.DEPTH_COMPONENT24:T===Yn?W=r.DEPTH_COMPONENT32F:T===Na&&(W=r.DEPTH_COMPONENT16),W}function S(C,T){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==Lt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function R(C){let T=new WeakRef(C);n.get(C).__ref=T,m.add(T),_.register(C,T,T)}function A(C){let T=n.get(C).__ref;T!==void 0&&(m.delete(T),_.unregister(T))}function L(C){F(C.target)}function D(C){P(C.target)}function F(C){C.removeEventListener("dispose",L),A(C),B(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function P(C){C.removeEventListener("dispose",D),A(C),$(C)}function k(){for(let C of m){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):F(T))}m.clear(),h.clear()}function B(C){let T=n.get(C);if(T.__webglInit===void 0)return;let W=C.source,le=d.get(W);if(le){let ie=le[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&U(C),Object.keys(le).length===0&&d.delete(W)}n.remove(C)}function U(C){let T=n.get(C);r.deleteTexture(T.__webglTexture);let W=C.source,le=d.get(W);delete le[T.__cacheKey],o.memory.textures--}function $(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let W=C.depthTexture;if(W&&W.renderTarget===C&&F(W),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let me=0;me<T.__webglFramebuffer[ie].length;me++)r.deleteFramebuffer(T.__webglFramebuffer[ie][me]);else r.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)r.deleteFramebuffer(T.__webglFramebuffer[ie]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let le=C.textures;for(let ie=0,me=le.length;ie<me;ie++){let ve=n.get(le[ie]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(le[ie])}n.remove(C)}let G=0;function I(){G=0}function j(){return G}function pe(C){G=C}function Ie(){let C=G;return C>=i.maxTextures&&ze("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),G+=1,C}function Y(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function he(C,T){let W=n.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){let le=C.image;if(le===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(W,C,T);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function Se(C,T){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){rt(W,C,T);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function se(C,T){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){rt(W,C,T);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function ae(C,T){let W=n.get(C);if(C.version>0&&W.__version!==C.version){Z(W,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}let oe={[fr]:r.REPEAT,[di]:r.CLAMP_TO_EDGE,[_a]:r.MIRRORED_REPEAT},De={[tn]:r.NEAREST,[_h]:r.NEAREST_MIPMAP_NEAREST,[To]:r.NEAREST_MIPMAP_LINEAR,[Lt]:r.LINEAR,[Da]:r.LINEAR_MIPMAP_NEAREST,[Di]:r.LINEAR_MIPMAP_LINEAR},fe={[Q0]:r.NEVER,[zp]:r.ALWAYS,[ex]:r.LESS,[Bp]:r.LEQUAL,[tx]:r.EQUAL,[kp]:r.GEQUAL,[nx]:r.GREATER,[ix]:r.NOTEQUAL};function Le(C,T){if(T.type===Yn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Lt||T.magFilter===Da||T.magFilter===To||T.magFilter===Di||T.minFilter===Lt||T.minFilter===Da||T.minFilter===To||T.minFilter===Di)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,oe[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,oe[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,oe[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,De[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,De[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,fe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===tn||T.minFilter!==To&&T.minFilter!==Di||T.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function we(C,T){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",L),R(T));let le=T.source,ie=d.get(le);ie===void 0&&(ie={},d.set(le,ie));let me=Y(T);if(me!==C.__cacheKey){ie[me]===void 0&&(ie[me]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[me].usedTimes++;let ve=ie[C.__cacheKey];ve!==void 0&&(ie[C.__cacheKey].usedTimes--,ve.usedTimes===0&&U(T)),C.__cacheKey=me,C.__webglTexture=ie[me].texture}return W}function Re(C,T,W){return Math.floor(Math.floor(C/W)/T)}function He(C,T,W,le){let me=C.updateRanges;if(me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,W,le,T.data);else{me.sort((N,Q)=>N.start-Q.start);let ve=0;for(let N=1;N<me.length;N++){let Q=me[ve],J=me[N],_e=Q.start+Q.count,ue=Re(J.start,T.width,4),xe=Re(Q.start,T.width,4);J.start<=_e+1&&ue===xe&&Re(J.start+J.count-1,T.width,4)===ue?Q.count=Math.max(Q.count,J.start+J.count-Q.start):(++ve,me[ve]=J)}me.length=ve+1;let X=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),de=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let N=0,Q=me.length;N<Q;N++){let J=me[N],_e=Math.floor(J.start/4),ue=Math.ceil(J.count/4),xe=_e%T.width,ce=Math.floor(_e/T.width),ye=ue,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(r.UNPACK_SKIP_ROWS,ce),t.texSubImage2D(r.TEXTURE_2D,0,xe,ce,ye,re,W,le,T.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,X),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function rt(C,T,W){let le=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=r.TEXTURE_3D);let ie=we(C,T),me=T.source;t.bindTexture(le,C.__webglTexture,r.TEXTURE0+W);let ve=n.get(me);if(me.version!==ve.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let re=nt.getPrimaries(nt.workingColorSpace),te=T.colorSpace===ts?null:nt.getPrimaries(T.colorSpace),Me=T.colorSpace===ts||re===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ee=y(T.image,!1,i.maxTextureSize);ee=Be(T,ee);let de=s.convert(T.format,T.colorSpace),N=s.convert(T.type),Q=w(T.internalFormat,de,N,T.normalized,T.colorSpace,T.isVideoTexture);Le(le,T);let J,_e=T.mipmaps,ue=T.isVideoTexture!==!0,xe=ve.__version===void 0||ie===!0,ce=me.dataReady,ye=S(T,ee);if(T.isDepthTexture)Q=x(T.format===es,T.type),xe&&(ue?t.texStorage2D(r.TEXTURE_2D,1,Q,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Q,ee.width,ee.height,0,de,N,null));else if(T.isDataTexture)if(_e.length>0){ue&&xe&&t.texStorage2D(r.TEXTURE_2D,ye,Q,_e[0].width,_e[0].height);for(let re=0,te=_e.length;re<te;re++)J=_e[re],ue?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,J.width,J.height,de,N,J.data):t.texImage2D(r.TEXTURE_2D,re,Q,J.width,J.height,0,de,N,J.data);T.generateMipmaps=!1}else ue?(xe&&t.texStorage2D(r.TEXTURE_2D,ye,Q,ee.width,ee.height),ce&&He(T,ee,de,N)):t.texImage2D(r.TEXTURE_2D,0,Q,ee.width,ee.height,0,de,N,ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ue&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Q,_e[0].width,_e[0].height,ee.depth);for(let re=0,te=_e.length;re<te;re++)if(J=_e[re],T.format!==Wi)if(de!==null)if(ue){if(ce)if(T.layerUpdates.size>0){let Me=Jp(J.width,J.height,T.format,T.type);for(let ne of T.layerUpdates){let Ce=J.data.subarray(ne*Me/J.data.BYTES_PER_ELEMENT,(ne+1)*Me/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ne,J.width,J.height,1,de,Ce)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,ee.depth,de,J.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Q,J.width,J.height,ee.depth,0,J.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,ee.depth,de,N,J.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Q,J.width,J.height,ee.depth,0,de,N,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ue&&xe&&t.texStorage2D(r.TEXTURE_2D,ye,Q,_e[0].width,_e[0].height);for(let re=0,te=_e.length;re<te;re++)J=_e[re],T.format!==Wi?de!==null?ue?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,J.width,J.height,de,J.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Q,J.width,J.height,0,J.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,J.width,J.height,de,N,J.data):t.texImage2D(r.TEXTURE_2D,re,Q,J.width,J.height,0,de,N,J.data)}else if(T.isDataArrayTexture)if(ue){if(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Q,ee.width,ee.height,ee.depth),ce)if(T.layerUpdates.size>0){let re=Jp(ee.width,ee.height,T.format,T.type);for(let te of T.layerUpdates){let Me=ee.data.subarray(te*re/ee.data.BYTES_PER_ELEMENT,(te+1)*re/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ee.width,ee.height,1,de,N,Me)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,N,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,ee.width,ee.height,ee.depth,0,de,N,ee.data);else if(T.isData3DTexture)ue?(xe&&t.texStorage3D(r.TEXTURE_3D,ye,Q,ee.width,ee.height,ee.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,N,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Q,ee.width,ee.height,ee.depth,0,de,N,ee.data);else if(T.isFramebufferTexture){if(xe)if(ue)t.texStorage2D(r.TEXTURE_2D,ye,Q,ee.width,ee.height);else{let re=ee.width,te=ee.height;for(let Me=0;Me<ye;Me++)t.texImage2D(r.TEXTURE_2D,Me,Q,re,te,0,de,N,null),re>>=1,te>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ee.parentNode!==re){re.appendChild(ee),h.add(T),re.onpaint=te=>{let Me=te.changedElements;for(let ne of h)Me.includes(ne.image)&&(ne.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{let Me=r.RGBA,ne=r.RGBA,Ce=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Me,ne,Ce,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(_e.length>0){if(ue&&xe){let re=Ve(_e[0]);t.texStorage2D(r.TEXTURE_2D,ye,Q,re.width,re.height)}for(let re=0,te=_e.length;re<te;re++)J=_e[re],ue?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,de,N,J):t.texImage2D(r.TEXTURE_2D,re,Q,de,N,J);T.generateMipmaps=!1}else if(ue){if(xe){let re=Ve(ee);t.texStorage2D(r.TEXTURE_2D,ye,Q,re.width,re.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,N,ee)}else t.texImage2D(r.TEXTURE_2D,0,Q,de,N,ee);b(T)&&T.mipmapsAutoUpdate===!0&&v(le),ve.__version=me.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Z(C,T,W){if(T.image.length!==6)return;let le=we(C,T),ie=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+W);let me=n.get(ie);if(ie.version!==me.__version||le===!0){t.activeTexture(r.TEXTURE0+W);let ve=nt.getPrimaries(nt.workingColorSpace),X=T.colorSpace===ts?null:nt.getPrimaries(T.colorSpace),ee=T.colorSpace===ts||ve===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let de=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!de&&!N?Q[ne]=y(T.image[ne],!0,i.maxCubemapSize):Q[ne]=N?T.image[ne].image:T.image[ne],Q[ne]=Be(T,Q[ne]);let J=Q[0],_e=s.convert(T.format,T.colorSpace),ue=s.convert(T.type),xe=w(T.internalFormat,_e,ue,T.normalized,T.colorSpace),ce=T.isVideoTexture!==!0,ye=me.__version===void 0||le===!0,re=ie.dataReady,te=S(T,J);Le(r.TEXTURE_CUBE_MAP,T);let Me;if(T.isDepthTexture){if(xe=x(T.format===es,T.type),ye)if(ce)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,xe,J.width,J.height);else for(let ne=0;ne<6;ne++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,xe,J.width,J.height,0,_e,ue,null)}else if(de){ce&&ye&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,xe,J.width,J.height);for(let ne=0;ne<6;ne++){Me=Q[ne].mipmaps;for(let Ce=0;Ce<Me.length;Ce++){let at=Me[Ce];T.format!==Wi?_e!==null?ce?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,at.width,at.height,_e,at.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,xe,at.width,at.height,0,at.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,at.width,at.height,_e,ue,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,xe,at.width,at.height,0,_e,ue,at.data)}}}else{if(Me=T.mipmaps,ce&&ye){Me.length>0&&te++;let ne=Ve(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,xe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(N){ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,_e,ue,Q[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,xe,Q[ne].width,Q[ne].height,0,_e,ue,Q[ne].data);for(let Ce=0;Ce<Me.length;Ce++){let Ke=Me[Ce].image[ne].image;ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Ke.width,Ke.height,_e,ue,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,xe,Ke.width,Ke.height,0,_e,ue,Ke.data)}}else{ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e,ue,Q[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,xe,_e,ue,Q[ne]);for(let Ce=0;Ce<Me.length;Ce++){let at=Me[Ce];ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,_e,ue,at.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,xe,_e,ue,at.image[ne])}}}b(T)&&T.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),me.__version=ie.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ot(C,T,W,le,ie,me){let ve=s.convert(W.format,W.colorSpace),X=s.convert(W.type),ee=w(W.internalFormat,ve,X,W.normalized,W.colorSpace),de=n.get(T),N=n.get(W);if(N.__renderTarget=T,!de.__hasExternalTextures){let Q=Math.max(1,T.width>>me),J=Math.max(1,T.height>>me);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,me,ee,Q,J,T.depth,0,ve,X,null):t.texImage2D(ie,me,ee,Q,J,0,ve,X,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ge(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ie,N.__webglTexture,0,Xe(T)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,ie,N.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function nn(C,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){let le=T.depthTexture,ie=le&&le.isDepthTexture?le.type:null,me=x(T.stencilBuffer,ie),ve=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ge(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe(T),me,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe(T),me,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,me,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,C)}else{let le=T.textures;for(let ie=0;ie<le.length;ie++){let me=le[ie],ve=s.convert(me.format,me.colorSpace),X=s.convert(me.type),ee=w(me.internalFormat,ve,X,me.normalized,me.colorSpace);ge(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe(T),ee,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe(T),ee,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ee,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(C,T,W){let le=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(T.depthTexture);ie.__renderTarget=T;let me=le?T.depthTexture.image[0]:T.depthTexture.image;(!ie.__webglTexture||me.width!==T.width||me.height!==T.height)&&(me.width=T.width,me.height=T.height,T.depthTexture.needsUpdate=!0),le?ae(T.depthTexture,0):he(T.depthTexture,0);let ve=ie.__webglTexture,X=Xe(T),ee=le?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,de=T.depthTexture.format===es?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Wr)ge(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ee,ve,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,de,ee,ve,0);else if(T.depthTexture.format===es)ge(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ee,ve,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,de,ee,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(C){let T=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let le=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),le){let ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,le.removeEventListener("dispose",ie)};le.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=le}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let le=0;le<6;le++)wt(T.__webglFramebuffer[le],C,le);else C.texture.mipmaps.length>0?wt(T.__webglFramebuffer[0],C,0):wt(T.__webglFramebuffer,C,0);else if(W){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]===void 0)T.__webglDepthbuffer[le]=r.createRenderbuffer(),nn(T.__webglDepthbuffer[le],C,!1);else{let ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,me)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),nn(T.__webglDepthbuffer,C,!1);else{let ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,me)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(C,T,W){let le=n.get(C);T!==void 0&&ot(le.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&ut(C)}function jt(C){let T=C.texture,W=n.get(C),le=n.get(T);C.addEventListener("dispose",D),R(C);let ie=C.textures,me=C.isWebGLCubeRenderTarget===!0,ve=ie.length>1;if(ve||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=T.version,o.memory.textures++),me){W.__webglFramebuffer=[];for(let X=0;X<6;X++)if(T.mipmaps.length>0){W.__webglFramebuffer[X]=[];for(let ee=0;ee<T.mipmaps.length;ee++)W.__webglFramebuffer[X][ee]=r.createFramebuffer()}else W.__webglFramebuffer[X]=r.createFramebuffer()}else{if(T.mipmaps.length>0){W.__webglFramebuffer=[];for(let X=0;X<T.mipmaps.length;X++)W.__webglFramebuffer[X]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ve)for(let X=0,ee=ie.length;X<ee;X++){let de=n.get(ie[X]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&ge(C)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let X=0;X<ie.length;X++){let ee=ie[X];W.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[X]);let de=s.convert(ee.format,ee.colorSpace),N=s.convert(ee.type),Q=w(ee.internalFormat,de,N,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),J=Xe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,J,Q,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,W.__webglColorRenderbuffer[X])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),nn(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),Le(r.TEXTURE_CUBE_MAP,T);for(let X=0;X<6;X++)if(T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)ot(W.__webglFramebuffer[X][ee],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee);else ot(W.__webglFramebuffer[X],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);b(T)?v(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let X=0,ee=ie.length;X<ee;X++){let de=ie[X],N=n.get(de),Q=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),Le(Q,de),ot(W.__webglFramebuffer,C,de,r.COLOR_ATTACHMENT0+X,Q,0),b(de)&&v(Q)}t.unbindTexture()}else{let X=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(X,le.__webglTexture),Le(X,T),T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)ot(W.__webglFramebuffer[ee],C,T,r.COLOR_ATTACHMENT0,X,ee);else ot(W.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,X,0);b(T)?v(X):T.mipmaps.length>0&&r.texParameteri(X,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&ut(C)}function z(C){let T=C.textures;for(let W=0,le=T.length;W<le;W++){let ie=T[W];if(b(ie)&&ie.mipmapsAutoUpdate===!0){let me=M(C),ve=n.get(ie).__webglTexture;t.bindTexture(me,ve),v(me),t.unbindTexture()}}}let mt=[];function ft(C){if(C.samples>0){if(ge(C)===!1){let T=C.textures,W=C.width,le=C.height,ie=r.COLOR_BUFFER_BIT,me=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(C),X=T.length>1;if(X)for(let de=0;de<T.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let de=0;de<T.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),X){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);let N=n.get(T[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,W,le,0,0,W,le,ie,r.NEAREST),l===!0&&(mt.length=0,mt.push(r.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&mt.push(me),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),X)for(let de=0;de<T.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);let N=n.get(T[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Xe(C){return Math.min(i.maxSamples,C.samples)}function ge(C){let T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pt(C){let T=o.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function Be(C,T){let W=C.colorSpace,le=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Pn&&W!==ts&&(nt.getTransfer(W)===vt?(le!==Wi||ie!==xi)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",W)),T}function Ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ie,this.resetTextureUnits=I,this.getTextureUnits=j,this.setTextureUnits=pe,this.setTexture2D=he,this.setTexture2DArray=Se,this.setTexture3D=se,this.setTextureCube=ae,this.rebindTextures=qt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=ge,this.dispose=k}function oE(r,e){function t(n,i=ts){let s,o=nt.getTransfer(i);if(n===xi)return r.UNSIGNED_BYTE;if(n===yh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Dp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Np)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ip)return r.BYTE;if(n===Lp)return r.SHORT;if(n===Na)return r.UNSIGNED_SHORT;if(n===xh)return r.INT;if(n===nr)return r.UNSIGNED_INT;if(n===Yn)return r.FLOAT;if(n===oi)return r.HALF_FLOAT;if(n===Op)return r.ALPHA;if(n===Up)return r.RGB;if(n===Wi)return r.RGBA;if(n===Wr)return r.DEPTH_COMPONENT;if(n===es)return r.DEPTH_STENCIL;if(n===Sh)return r.RED;if(n===Mh)return r.RED_INTEGER;if(n===Cs)return r.RG;if(n===bh)return r.RG_INTEGER;if(n===Th)return r.RGBA_INTEGER;if(n===oc||n===ac||n===lc||n===cc)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wh||n===Eh||n===Ah||n===Rh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Ph||n===Ih||n===Lh||n===Dh||n===uc||n===Nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ch||n===Ph)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ih)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lh)return s.COMPRESSED_R11_EAC;if(n===Dh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===uc)return s.COMPRESSED_RG11_EAC;if(n===Nh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oh||n===Uh||n===Fh||n===Bh||n===kh||n===zh||n===Hh||n===Gh||n===Vh||n===Wh||n===Xh||n===qh||n===Yh||n===Kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zh||n===Jh||n===$h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zh)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jh||n===Qh||n===hc||n===ef)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===jh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ef)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var aE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lE=`
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

}`,sm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Yl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gr({vertexShader:aE,fragmentShader:lE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},om=class extends dr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,_=typeof XRWebGLBinding<"u",p=new sm,g={},y=t.getContextAttributes(),b=null,v=null,M=[],w=[],x=new $e,S=null,R=null,A=new en;A.viewport=new _t;let L=new en;L.viewport=new _t;let D=[A,L],F=new dh,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let he=M[Y];return he===void 0&&(he=new Ma,M[Y]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Y){let he=M[Y];return he===void 0&&(he=new Ma,M[Y]=he),he.getGripSpace()},this.getHand=function(Y){let he=M[Y];return he===void 0&&(he=new Ma,M[Y]=he),he.getHandSpace()};function B(Y){let he=w.indexOf(Y.inputSource);if(he===-1)return;let Se=M[he];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,c||o),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",$);for(let Y=0;Y<M.length;Y++){let he=w[Y];he!==null&&(w[Y]=null,M[Y].disconnect(he))}P=null,k=null,p.reset();for(let Y in g)delete g[Y];if(e.setRenderTarget(b),d=null,f=null,h=null,i=null,v=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),R!==null){let Y=R.camera;Y.fov=R.fov,Y.zoom=R.zoom,Y.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",U),i.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,se=null,ae=null;y.depth&&(ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?es:Wr,se=y.stencil?wo:nr);let oe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ii(f.textureWidth,f.textureHeight,{format:Wi,type:xi,depthTexture:new Yr(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ii(d.framebufferWidth,d.framebufferHeight,{format:Wi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ie.setContext(i),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(Y){for(let he=0;he<Y.removed.length;he++){let Se=Y.removed[he],se=w.indexOf(Se);se>=0&&(w[se]=null,M[se].disconnect(Se))}for(let he=0;he<Y.added.length;he++){let Se=Y.added[he],se=w.indexOf(Se);if(se===-1){for(let oe=0;oe<M.length;oe++)if(oe>=w.length){w.push(Se),se=oe;break}else if(w[oe]===null){w[oe]=Se,se=oe;break}if(se===-1)break}let ae=M[se];ae&&ae.connect(Se)}}function G(Y,he){he===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(he.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let he=Y.near,Se=Y.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),F.near=L.near=A.near=he,F.far=L.far=A.far=Se,(P!==F.near||k!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,k=F.far),F.layers.mask=Y.layers.mask|6,A.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;let se=Y.parent,ae=F.cameras;G(F,se);for(let oe=0;oe<ae.length;oe++)G(ae[oe],se);F.projectionMatrix.copy(A.projectionMatrix),F.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&Y.isPerspectiveCamera&&(R={camera:Y,fov:Y.fov,zoom:Y.zoom}),I(Y,F,se)};function I(Y,he,Se){Se===null?Y.matrix.copy(he.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(he.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(he.projectionMatrix),Y.projectionMatrixInverse.copy(he.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=co*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Y){return g[Y]};let j=null;function pe(Y,he){if(u=he.getViewerPose(c||o),m=he,u!==null){let Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let se=!1;Se.length!==F.cameras.length&&(F.cameras.length=0,se=!0);for(let fe=0;fe<Se.length;fe++){let Le=Se[fe],we=null;if(d!==null)we=d.getViewport(Le);else{let He=h.getViewSubImage(f,Le);we=He.viewport,fe===0&&(e.setRenderTargetTextures(v,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(v))}let Re=D[fe];Re===void 0&&(Re=new en,Re.layers.enable(fe),Re.viewport=new _t,D[fe]=Re),Re.matrix.fromArray(Le.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Le.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(we.x,we.y,we.width,we.height),fe===0&&(F.matrix.copy(Re.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),se===!0&&F.cameras.push(Re)}let ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let fe=h.getDepthInformation(Se[0]);fe&&fe.isValid&&fe.texture&&p.init(fe,i.renderState)}if(ae&&ae.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let fe=0;fe<Se.length;fe++){let Le=Se[fe].camera;if(Le){let we=g[Le];we||(we=new Yl,g[Le]=we);let Re=h.getCameraImage(Le);we.sourceTexture=Re}}}}for(let Se=0;Se<M.length;Se++){let se=w[Se],ae=M[Se];se!==null&&ae!==void 0&&ae.update(se,he,c||o)}j&&j(Y,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null}let Ie=new Dx;Ie.setAnimationLoop(pe),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}},cE=new Ye,Vx=new qe;Vx.set(-1,0,0,0,1,0,0,0,1);function uE(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Yp(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),h(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ln&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ln&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),b=y.envMap,v=y.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(cE.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Vx),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hE(r,e,t,n){let i={},s={};function o(y,b){let v=b.program;n.uniformBlockBinding(y,v,i[y.id])}function a(y,b){let v=i[y.id];v===void 0&&(m(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",p));let M=b.program;n.updateUBOMapping(y,M);let w=e.render.frame;s[y.id]!==w&&(c(y),s[y.id]=w)}function l(y){let b=r.createBuffer(),v=y.__size,M=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,v,M),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function c(y){let b=i[y.id],v=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,x=v.length;w<x;w++){let S=v[w];if(Array.isArray(S))for(let R=0,A=S.length;R<A;R++)u(S[R],w,R,M);else u(S,w,0,M)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,b,v,M){if(f(y,b,v,M)===!0){let w=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let R=0;R<x.length;R++){let A=x[R],L=_(A,!0);h(A,y.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,y.__data)}}function h(y,b,v){typeof y=="number"||typeof y=="boolean"?b[v]=y:y.isMatrix3?(b[v]=y.elements[0],b[v+1]=y.elements[1],b[v+2]=y.elements[2],b[v+3]=0,b[v+4]=y.elements[3],b[v+5]=y.elements[4],b[v+6]=y.elements[5],b[v+7]=0,b[v+8]=y.elements[6],b[v+9]=y.elements[7],b[v+10]=y.elements[8],b[v+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-v),v):y.toArray(b,v)}function f(y,b,v,M){let w=y.value,x=b+"_"+v;if(Array.isArray(w)){M[x]===void 0&&(M[x]=[]);let S=M[x],R=!1;for(let A=0;A<w.length;A++)d(w[A],S,A)===!0&&(R=!0);return R}return d(w,M,x)}function d(y,b,v){if(b[v]===void 0)return typeof y=="number"||typeof y=="boolean"?b[v]=y:ArrayBuffer.isView(y)?b[v]=y.slice():b[v]=y.clone(),!0;{let M=b[v];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return b[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function m(y){let b=y.uniforms,v=0,M=16;for(let x=0,S=b.length;x<S;x++){let R=Array.isArray(b[x])?b[x]:[b[x]];for(let A=0,L=R.length;A<L;A++){let D=R[A],F=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(b[x])||Array.isArray(D.value),k=v;for(let U=0,$=F.length;U<$;U++){let G=F[U],I=_(G,P),j=v%M,pe=j%I.boundary,Ie=j+pe;v+=pe,Ie!==0&&M-Ie<I.storage&&(v+=M-Ie),U===0&&(k=v),v+=I.storage}let B=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new B((v-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}let w=v%M;return w>0&&(v+=M-w),y.__size=v,y.__cache={},this}function _(y,b){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(y){let b=y.target;b.removeEventListener("dispose",p),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(let y in i)r.deleteBuffer(i[y]);i={},s={}}return{bind:o,update:a,dispose:g}}var fE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sr=null;function dE(){return Sr===null&&(Sr=new Ts(fE,16,16,Cs,oi),Sr.name="DFG_LUT",Sr.minFilter=Lt,Sr.magFilter=Lt,Sr.wrapS=di,Sr.wrapT=di,Sr.generateMipmaps=!1,Sr.needsUpdate=!0),Sr}var Fa=class{constructor(e={}){let{canvas:t=rx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=xi}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=d,p=new Set([Th,bh,Mh]),g=new Set([xi,nr,Na,wo,yh,vh]),y=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,w=null,x=[],S=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,F=null,P=null,k=null;this._outputColorSpace=gn;let B=0,U=0,$=null,G=-1,I=null,j=new _t,pe=new _t,Ie=null,Y=new Ge(0),he=0,Se=t.width,se=t.height,ae=1,oe=null,De=null,fe=new _t(0,0,Se,se),Le=new _t(0,0,Se,se),we=!1,Re=new ws,He=new eh,rt=!1,Z=!1,ot=new Ye,nn=new H,wt=new _t,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function jt(){return $===null?ae:1}let z=n;function mt(E,O){return t.getContext(E,O)}let ft,Xe,ge,pt,Be,Ve,C,T,W,le,ie,me,ve,X,ee,de,N,Q,J,_e,ue,xe,ce;try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ne,!1),z===null){let O="webgl2";if(z=mt(O,E),z===null)throw mt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ye()}catch(E){throw t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),We("WebGLRenderer: "+E.message),E}function ye(){ft=new Tw(z),ft.init(),ue=new oE(z,ft),Xe=new dw(z,ft,e,ue),ge=new rE(z,ft),Xe.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),F=z.createFramebuffer(),P=z.createFramebuffer(),k=z.createFramebuffer(),pt=new Aw(z),Be=new W1,Ve=new sE(z,ft,ge,Be,Xe,ue,pt),C=new bw(A),T=new CM(z),xe=new hw(z,T),W=new ww(z,T,pt,xe),le=new Cw(z,W,T,xe,pt),Q=new Rw(z,Xe,Ve),ee=new pw(Be),ie=new V1(A,C,ft,Xe,xe,ee),me=new uE(A,Be),ve=new q1,X=new j1(ft),N=new uw(A,C,ge,le,m,l),de=new iE(A,le,Xe),ce=new hE(z,pt,Xe,ge),J=new fw(z,ft,pt),_e=new Ew(z,ft,pt),pt.programs=ie.programs,A.capabilities=Xe,A.extensions=ft,A.properties=Be,A.renderLists=ve,A.shadowMap=de,A.state=ge,A.info=pt}_!==xi&&(R=new Iw(_,t.width,t.height,a,i,s));let re=new om(A,z);this.xr=re,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(Se,se,!1))},this.getSize=function(E){return E.set(Se,se)},this.setSize=function(E,O,K=!0){if(re.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=E,se=O,t.width=Math.floor(E*ae),t.height=Math.floor(O*ae),K===!0&&(t.style.width=E+"px",t.style.height=O+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Se*ae,se*ae).floor()},this.setDrawingBufferSize=function(E,O,K){Se=E,se=O,ae=K,t.width=Math.floor(E*K),t.height=Math.floor(O*K),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===xi){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(fe)},this.setViewport=function(E,O,K,V){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,O,K,V),ge.viewport(j.copy(fe).multiplyScalar(jt()).round())},this.getScissor=function(E){return E.copy(Le)},this.setScissor=function(E,O,K,V){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,O,K,V),ge.scissor(pe.copy(Le).multiplyScalar(jt()).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(E){ge.setScissorTest(we=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){De=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,K=!0){let V=0;if(E){let q=!1;if($!==null){let Te=$.texture.format;q=p.has(Te)}if(q){let Te=$.texture.type,Oe=g.has(Te),be=N.getClearColor(),Pe=N.getClearAlpha(),ke=be.r,Ze=be.g,lt=be.b;Oe?(y[0]=ke,y[1]=Ze,y[2]=lt,y[3]=Pe,z.clearBufferuiv(z.COLOR,0,y)):(b[0]=ke,b[1]=Ze,b[2]=lt,b[3]=Pe,z.clearBufferiv(z.COLOR,0,b))}else V|=z.COLOR_BUFFER_BIT}O&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),N.dispose(),ve.dispose(),X.dispose(),Ve.dispose(),Be.dispose(),C.dispose(),le.dispose(),W.dispose(),xe.dispose(),ce.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",Et),re.removeEventListener("sessionend",xt),hn.stop()};function te(E){E.preventDefault(),Ul("WebGLRenderer: Context Lost."),L=!0}function Me(){Ul("WebGLRenderer: Context Restored."),L=!1;let E=pt.autoReset,O=de.enabled,K=de.autoUpdate,V=de.needsUpdate,q=de.type;ye(),pt.autoReset=E,de.enabled=O,de.autoUpdate=K,de.needsUpdate=V,de.type=q}function ne(E){We("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){let O=E.target;O.removeEventListener("dispose",Ce),at(O)}function at(E){Ke(E),Be.remove(E)}function Ke(E){let O=Be.get(E).programs;O!==void 0&&(O.forEach(function(K){ie.releaseProgram(K)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,K,V,q,Te){O===null&&(O=ut);let Oe=q.isMesh&&q.matrixWorld.determinantAffine()<0,be=Ni(E,O,K,V,q);ge.setMaterial(V,Oe);let Pe=K.index,ke=1;if(V.wireframe===!0){if(Pe=W.getWireframeAttribute(K),Pe===void 0)return;ke=2}let Ze=K.drawRange,lt=K.attributes.position,Ue=Ze.start*ke,ct=(Ze.start+Ze.count)*ke;Te!==null&&(Ue=Math.max(Ue,Te.start*ke),ct=Math.min(ct,(Te.start+Te.count)*ke)),Pe!==null?(Ue=Math.max(Ue,0),ct=Math.min(ct,Pe.count)):lt!=null&&(Ue=Math.max(Ue,0),ct=Math.min(ct,lt.count));let on=ct-Ue;if(on<0||on===1/0)return;xe.setup(q,V,be,K,Pe);let It,Rt=J;if(Pe!==null&&(It=T.get(Pe),Rt=_e,Rt.setIndex(It)),q.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*jt()),Rt.setMode(z.LINES)):Rt.setMode(z.TRIANGLES);else if(q.isLine){let On=V.linewidth;On===void 0&&(On=1),ge.setLineWidth(On*jt()),q.isLineSegments?Rt.setMode(z.LINES):q.isLineLoop?Rt.setMode(z.LINE_LOOP):Rt.setMode(z.LINE_STRIP)}else q.isPoints?Rt.setMode(z.POINTS):q.isSprite&&Rt.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Rt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let On=q._multiDrawStarts,Fe=q._multiDrawCounts,Zn=q._multiDrawCount,gt=Pe?T.get(Pe).bytesPerElement:1,Os=Be.get(V).currentProgram.getUniforms();for(let Un=0;Un<Zn;Un++)Os.setValue(z,"_gl_DrawID",Un),Rt.render(On[Un]/gt,Fe[Un])}else if(q.isInstancedMesh)Rt.renderInstances(Ue,on,q.count);else if(K.isInstancedBufferGeometry){let On=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Fe=Math.min(K.instanceCount,On);Rt.renderInstances(Ue,on,Fe)}else Rt.render(Ue,on)};function Ot(E,O,K,V){D!==null&&E.isNodeMaterial&&D.setObject(V,E),rt===!0&&ee.setState(E,K,!1),E.transparent===!0&&E.side===_i&&E.forceSinglePass===!1?(E.side=Ln,E.needsUpdate=!0,vi(E,O,V),E.side=xr,E.needsUpdate=!0,vi(E,O,V),E.side=_i):vi(E,O,V)}this.compile=function(E,O,K=null){K===null&&(K=E),D!==null&&D.renderStart(E,O,K),w=X.get(K),w.init(O),S.push(w),K.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),E!==K&&E.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Z=this.localClippingEnabled,rt=ee.init(this.clippingPlanes,Z),rt===!0&&ee.setGlobalState(this.clippingPlanes,O),D!==null&&de.render(w.state.shadowsArray,K,O);let V=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Te=q.material;if(Te)if(Array.isArray(Te))for(let Oe=0;Oe<Te.length;Oe++){let be=Te[Oe];Ot(be,K,O,q),V.add(be)}else Ot(Te,K,O,q),V.add(Te)}),w=S.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(E,O,K=null){let V=this.compile(E,O,K);return new Promise(q=>{function Te(){if(V.forEach(function(Oe){let Pe=Be.get(Oe).currentProgram;(Pe===void 0||Pe.isReady())&&V.delete(Oe)}),V.size===0){q(E);return}setTimeout(Te,10)}ft.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let rn=null;function Ut(E){rn&&rn(E)}function Et(){hn.stop()}function xt(){hn.start()}let hn=new Dx;hn.setAnimationLoop(Ut),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(E){rn=E,re.setAnimationLoop(E),E===null?hn.stop():hn.start()},re.addEventListener("sessionstart",Et),re.addEventListener("sessionend",xt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(E,O);let K=re.enabled===!0&&re.isPresenting===!0,V=R!==null&&($===null||K)&&R.begin(A,$);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,O,$),w=X.get(E,S.length),w.init(O),w.state.textureUnits=Ve.getTextureUnits(),S.push(w),ot.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?He.setFromArrayCamera(O):Re.setFromProjectionMatrix(ot,Gi,O.reversedDepth),Z=this.localClippingEnabled,rt=ee.init(this.clippingPlanes,Z),M=ve.get(E,x.length),M.init(),x.push(M),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Oe=A.xr.getDepthSensingMesh();Oe!==null&&At(Oe,O,-1/0,A.sortObjects)}At(E,O,0,A.sortObjects),M.finish(),D!==null&&D.updateLights(w.state.lightsArray),A.sortObjects===!0&&M.sort(oe,De),qt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,qt&&N.addToRenderList(M,E),this.info.autoReset===!0&&this.info.reset(),rt===!0&&ee.beginShadows();let q=w.state.shadowsArray;if(de.render(q,E,O),rt===!0&&ee.endShadows(),(V&&R.hasRenderPass())===!1){let Oe=M.opaque,be=M.transmissive;if(w.setupLights(),O.isArrayCamera){let Pe=O.cameras;if(be.length>0)for(let ke=0,Ze=Pe.length;ke<Ze;ke++){let lt=Pe[ke];yi(Oe,be,E,lt)}qt&&N.render(E);for(let ke=0,Ze=Pe.length;ke<Ze;ke++){let lt=Pe[ke];Nn(M,E,lt,lt.viewport)}}else be.length>0&&yi(Oe,be,E,O),qt&&N.render(E),Nn(M,E,O)}$!==null&&U===0&&(Ve.updateMultisampleRenderTarget($),Ve.updateRenderTargetMipmap($)),V&&R.end(A),E.isScene===!0&&E.onAfterRender(A,E,O),xe.resetDefaultState(),G=-1,I=null,S.pop(),S.length>0?(w=S[S.length-1],Ve.setTextureUnits(w.state.textureUnits),rt===!0&&ee.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?M=x[x.length-1]:M=null,D!==null&&D.renderEnd()};function At(E,O,K,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Oe=O.isArrayCamera?He:Re;if(!E.frustumCulled||E.intersectsFrustum(Oe)){V&&wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ot);let be=le.update(E),Pe=E.material;Pe.visible&&M.push(E,be,Pe,K,wt.z,null,O)}}else if(E.isMesh||E.isLine||E.isPoints){let Oe=O.isArrayCamera?He:Re;if(!E.frustumCulled||E.intersectsFrustum(Oe)){let be=le.update(E),Pe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),wt.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),wt.copy(be.boundingSphere.center)),wt.applyMatrix4(E.matrixWorld).applyMatrix4(ot)),Array.isArray(Pe)){let ke=be.groups;for(let Ze=0,lt=ke.length;Ze<lt;Ze++){let Ue=ke[Ze],ct=Pe[Ue.materialIndex];ct&&ct.visible&&M.push(E,be,ct,K,wt.z,Ue,O)}}else Pe.visible&&M.push(E,be,Pe,K,wt.z,null,O)}}}let Te=E.children;for(let Oe=0,be=Te.length;Oe<be;Oe++)At(Te[Oe],O,K,V)}function Nn(E,O,K,V){let{opaque:q,transmissive:Te,transparent:Oe}=E;w.setupLightsView(K),rt===!0&&ee.setGlobalState(A.clippingPlanes,K),V&&ge.viewport(j.copy(V)),q.length>0&&Yt(q,O,K),Te.length>0&&Yt(Te,O,K),Oe.length>0&&Yt(Oe,O,K),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function yi(E,O,K,V){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Ue=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Ii(1,1,{generateMipmaps:!0,type:Ue?oi:xi,minFilter:Di,samples:Math.max(4,Xe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Te=w.state.transmissionRenderTarget[V.id],Oe=V.viewport||j;Te.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);let be=A.getRenderTarget(),Pe=A.getActiveCubeFace(),ke=A.getActiveMipmapLevel();A.setRenderTarget(Te),A.getClearColor(Y),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),qt&&N.render(K);let Ze=A.toneMapping;A.toneMapping=yr;let lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),rt===!0&&ee.setGlobalState(A.clippingPlanes,V),Yt(E,K,V),Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ct=0,on=O.length;ct<on;ct++){let It=O[ct],{object:Rt,geometry:On,material:Fe,group:Zn}=It;if(Fe.side===_i&&Rt.layers.test(V.layers)){let gt=Fe.side;Fe.side=Ln,Fe.needsUpdate=!0,sn(Rt,K,V,On,Fe,Zn),Fe.side=gt,Fe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te))}A.setRenderTarget(be,Pe,ke),A.setClearColor(Y,he),lt!==void 0&&(V.viewport=lt),A.toneMapping=Ze}function Yt(E,O,K){let V=O.isScene===!0?O.overrideMaterial:null;for(let q=0,Te=E.length;q<Te;q++){let Oe=E[q],{object:be,geometry:Pe,group:ke}=Oe,Ze=Oe.material;Ze.allowOverride===!0&&V!==null&&(Ze=V),be.layers.test(K.layers)&&sn(be,O,K,Pe,Ze,ke)}}function sn(E,O,K,V,q,Te){D!==null&&q.isNodeMaterial&&D.setObject(E,q),E.onBeforeRender(A,O,K,V,q,Te),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(A,O,K,V,E,Te),q.transparent===!0&&q.side===_i&&q.forceSinglePass===!1?(q.side=Ln,q.needsUpdate=!0,A.renderBufferDirect(K,O,V,q,E,Te),q.side=xr,q.needsUpdate=!0,A.renderBufferDirect(K,O,V,q,E,Te),q.side=_i):A.renderBufferDirect(K,O,V,q,E,Te),E.onAfterRender(A,O,K,V,q,Te)}function fn(E){let O=0;for(let K of E)K.texture!==null&&O++;return O}function vi(E,O,K){O.isScene!==!0&&(O=ut);let V=Be.get(E),q=w.state.lights,Te=w.state.shadowsArray,Oe=q.state.version,be=ie.getParameters(E,q.state,Te,O,K,w.state.lightProbeGridArray),Pe=ie.getProgramCacheKey(be),ke=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=C.get(E.envMap||V.environment,Ze),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Ce),ke=new Map,V.programs=ke,V.programVariants=new Map);let lt=ke.get(Pe);if(lt!==void 0){if(V.currentProgram===lt&&V.lightsStateVersion===Oe)return Kt(E,be),lt}else be.uniforms=ie.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,K,be),E.onBeforeCompile(be,A),lt=ie.acquireProgram(be,Pe),ke.set(Pe,lt),V.uniforms=be.uniforms;let Ue=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=ee.uniform),Kt(E,be),V.needsLights=bc(E),V.lightsStateVersion=Oe,V.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.sunLights.value=q.state.sun,Ue.sunLightShadows.value=q.state.sunShadow,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.sunShadowMatrix.value=q.state.sunShadowMatrix,Ue.sunShadowCascade.value=q.state.sunShadowCascade,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix),V.numLightProbeGrids=fn(w.state.lightProbeGridArray),V.currentProgram=lt,V.uniformsList=null,lt}function Lo(E,O,K,V,q){let Te=Be.get(E),Oe=Te.currentProgram.id+","+V+","+q,be=Te.programVariants.get(Oe);return be===void 0?(be=vi(E,O,K),Te.programVariants.set(Oe,be)):(Te.currentProgram=be,Te.uniformsList=null,Te.outputColorSpace=V,Te.toneMapping=q),be}function dn(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Ua.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Kt(E,O){let K=Be.get(E);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Ni(E,O,K,V,q){O.isScene!==!0&&(O=ut),Ve.resetTextureUnits();let Te=O.fog,Oe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,be=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:nt.workingColorSpace,Pe=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,ke=C.get(V.envMap||Oe,Pe),Ze=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,lt=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,on=!!K.morphAttributes.color,It=yr;V.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(It=A.toneMapping);let Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,On=Rt!==void 0?Rt.length:0,Fe=Be.get(V),Zn=w.state.lights;if(rt===!0&&(Z===!0||E!==I)){let kt=E===I&&V.id===G;ee.setState(V,E,kt)}let gt=!1,Os=!1;V.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==Zn.state.version||q.isBatchedMesh&&Fe.batching===!1||!q.isBatchedMesh&&Fe.batching===!0||q.isBatchedMesh&&Fe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Fe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Fe.instancing===!1||!q.isInstancedMesh&&Fe.instancing===!0||q.isSkinnedMesh&&Fe.skinning===!1||!q.isSkinnedMesh&&Fe.skinning===!0||q.isInstancedMesh&&Fe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Fe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Fe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Fe.instancingMorph===!1&&q.morphTexture!==null||Fe.envMap!==ke||V.fog===!0&&Fe.fog!==Te||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ee.numPlanes||Fe.numIntersection!==ee.numIntersection)||Fe.vertexAlphas!==Ze||Fe.vertexTangents!==lt||Fe.morphTargets!==Ue||Fe.morphNormals!==ct||Fe.morphColors!==on||Fe.morphTargetsCount!==On||Fe.numLightProbeGrids!==fn(w.state.lightProbeGridArray)?gt=!0:(Fe.outputColorSpace!==be||Fe.toneMapping!==It)&&(Os=!0):(gt=!0,Fe.__version=V.version);let Un=Fe.currentProgram;(gt===!0||Os===!0)&&(Un=Os===!0?Lo(V,O,q,be,It):vi(V,O,q),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Un,Fe));let Tc=!1,is=!1,Us=!1,dt=Un.getUniforms(),wn=Fe.uniforms;if(ge.useProgram(Un.program)&&(Tc=!0,is=!0,Us=!0),V.id!==G&&(G=V.id,is=!0),Tc||I!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),dt.setValue(z,"projectionMatrix",E.projectionMatrix),dt.setValue(z,"viewMatrix",E.matrixWorldInverse);let vn=dt.map.cameraPosition;vn!==void 0&&vn.setValue(z,nn.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&dt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,is=!0,Us=!0)}if(Fe.needsLights&&(Zn.state.sunShadowMap.length>0&&dt.setValue(z,"sunShadowMap",Zn.state.sunShadowMap,Ve),Zn.state.directionalShadowMap.length>0&&dt.setValue(z,"directionalShadowMap",Zn.state.directionalShadowMap,Ve),Zn.state.spotShadowMap.length>0&&dt.setValue(z,"spotShadowMap",Zn.state.spotShadowMap,Ve),Zn.state.pointShadowMap.length>0&&dt.setValue(z,"pointShadowMap",Zn.state.pointShadowMap,Ve)),q.isSkinnedMesh){dt.setOptional(z,q,"bindMatrix"),dt.setOptional(z,q,"bindMatrixInverse");let kt=q.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),dt.setValue(z,"boneTexture",kt.boneTexture,Ve))}q.isBatchedMesh&&(dt.setOptional(z,q,"batchingTexture"),dt.setValue(z,"batchingTexture",q._matricesTexture,Ve),dt.setOptional(z,q,"batchingIdTexture"),dt.setValue(z,"batchingIdTexture",q._indirectTexture,Ve),dt.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&dt.setValue(z,"batchingColorTexture",q._colorsTexture,Ve));let Ki=K.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Q.update(q,K,Un),(is||Fe.receiveShadow!==q.receiveShadow)&&(Fe.receiveShadow=q.receiveShadow,dt.setValue(z,"receiveShadow",q.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(wn.envMapIntensity.value=O.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=dE()),is){if(dt.setValue(z,"toneMappingExposure",A.toneMappingExposure),Fe.needsLights&&qa(wn,Us),Te&&V.fog===!0&&me.refreshFogUniforms(wn,Te),me.refreshMaterialUniforms(wn,V,ae,se,w.state.transmissionRenderTarget[E.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let kt=v,vn=0;for(let Tr of w.state.lightProbeGridArray)Tr.texture!==null&&(kt.textures[vn]=Tr.texture,kt.min[vn]=Tr.boundingBox.min,kt.max[vn]=Tr.boundingBox.max,kt.resolution[vn]=Tr.resolution,vn++);for(let Tr in kt)kt[Tr].length=vn;wn.probesSH.value=kt.textures,wn.probesMin.value=kt.min,wn.probesMax.value=kt.max,wn.probesResolution.value=kt.resolution}Ua.upload(z,dn(Fe),wn,Ve)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ua.upload(z,dn(Fe),wn,Ve),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(z,"center",q.center),dt.setValue(z,"modelViewMatrix",q.modelViewMatrix),dt.setValue(z,"normalMatrix",q.normalMatrix),dt.setValue(z,"modelMatrix",q.matrixWorld),V.uniformsGroups!==void 0){let kt=V.uniformsGroups;for(let vn=0,Tr=kt.length;vn<Tr;vn++){let Vm=kt[vn];ce.update(Vm,Un),ce.bind(Vm,Un)}}return Un}function qa(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function bc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(E,O,K){let V=Be.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Be.get(E.texture).__webglTexture=O,Be.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:K,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let K=Be.get(E);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,K=0){$=E,B=O,U=K;let V=null,q=!1,Te=!1;if(E){let be=Be.get(E);if(be.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),j.copy(E.viewport),pe.copy(E.scissor),Ie=E.scissorTest,ge.viewport(j),ge.scissor(pe),ge.setScissorTest(Ie),G=-1;return}else if(be.__webglFramebuffer===void 0)Ve.setupRenderTarget(E);else if(be.__hasExternalTextures)Ve.rebindTextures(E,Be.get(E.texture).__webglTexture,Be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ze=E.depthTexture;if(be.__boundDepthTexture!==Ze){if(Ze!==null&&Be.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(E)}}let Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);let ke=Be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?V=ke[O][K]:V=ke[O],q=!0):E.samples>0&&Ve.useMultisampledRTT(E)===!1?V=Be.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[K]:V=ke,j.copy(E.viewport),pe.copy(E.scissor),Ie=E.scissorTest}else j.copy(fe).multiplyScalar(ae).floor(),pe.copy(Le).multiplyScalar(ae).floor(),Ie=we;if(K!==0&&(V=F),ge.bindFramebuffer(z.FRAMEBUFFER,V)&&ge.drawBuffers(E,V),ge.viewport(j),ge.scissor(pe),ge.setScissorTest(Ie),q){let be=Be.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,K)}else if(Te){let be=O;for(let Pe=0;Pe<E.textures.length;Pe++){let ke=Be.get(E.textures[Pe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Pe,ke.__webglTexture,K,be)}}else if(E!==null&&K!==0){let be=Be.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,K)}G=-1};function ns(E){let O=Be.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=Xe.textureFormatReadable(E.format),O.__typeReadable=Xe.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,K,V,q,Te,Oe,be=0){if(!(E&&E.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(Pe=Pe[Oe],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){ge.bindFramebuffer(z.FRAMEBUFFER,Pe);try{let ke=E.textures[be],Ze=ke.format,lt=ke.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);let Ue=ns(ke);if(Ue.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&K>=0&&K<=E.height-q&&z.readPixels(O,K,V,q,ue.convert(Ze),ue.convert(lt),Te)}finally{let ke=$!==null?Be.get($).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,O,K,V,q,Te,Oe,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(Pe=Pe[Oe],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(O>=0&&O<=E.width-V&&K>=0&&K<=E.height-q){ge.bindFramebuffer(z.FRAMEBUFFER,Pe);let ke=E.textures[be],Ze=ke.format,lt=ke.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);let Ue=ns(ke);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.bufferData(z.PIXEL_PACK_BUFFER,Te.byteLength,z.STREAM_READ),z.readPixels(O,K,V,q,ue.convert(Ze),ue.convert(lt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let on=$!==null?Be.get($).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,on);let It=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ox(z,It,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Te),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ct),z.deleteSync(It),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,K=0){let V=Math.pow(2,-K),q=Math.floor(E.image.width*V),Te=Math.floor(E.image.height*V),Oe=O!==null?O.x:0,be=O!==null?O.y:0;Ve.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,Oe,be,q,Te),ge.unbindTexture()},this.copyTextureToTexture=function(E,O,K=null,V=null,q=0,Te=0){let Oe,be,Pe,ke,Ze,lt,Ue,ct,on,It=E.isCompressedTexture?E.mipmaps[Te]:E.image;if(K!==null)Oe=K.max.x-K.min.x,be=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,Ze=K.min.y,lt=K.isBox3?K.min.z:0;else{let dt=Math.pow(2,-q);Oe=Math.floor(It.width*dt),be=Math.floor(It.height*dt),E.isDataArrayTexture?Pe=It.depth:E.isData3DTexture?Pe=Math.floor(It.depth*dt):Pe=1,ke=0,Ze=0,lt=0}V!==null?(Ue=V.x,ct=V.y,on=V.z):(Ue=0,ct=0,on=0);let Rt=ue.convert(O.format),On=ue.convert(O.type),Fe;O.isData3DTexture?(Ve.setTexture3D(O,0),Fe=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ve.setTexture2DArray(O,0),Fe=z.TEXTURE_2D_ARRAY):(Ve.setTexture2D(O,0),Fe=z.TEXTURE_2D),ge.activeTexture(z.TEXTURE0),ge.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),ge.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ge.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let Zn=ge.getParameter(z.UNPACK_ROW_LENGTH),gt=ge.getParameter(z.UNPACK_IMAGE_HEIGHT),Os=ge.getParameter(z.UNPACK_SKIP_PIXELS),Un=ge.getParameter(z.UNPACK_SKIP_ROWS),Tc=ge.getParameter(z.UNPACK_SKIP_IMAGES);ge.pixelStorei(z.UNPACK_ROW_LENGTH,It.width),ge.pixelStorei(z.UNPACK_IMAGE_HEIGHT,It.height),ge.pixelStorei(z.UNPACK_SKIP_PIXELS,ke),ge.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),ge.pixelStorei(z.UNPACK_SKIP_IMAGES,lt);let is=E.isDataArrayTexture||E.isData3DTexture,Us=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let dt=Be.get(E),wn=Be.get(O),Ki=Be.get(dt.__renderTarget),kt=Be.get(wn.__renderTarget);ge.bindFramebuffer(z.READ_FRAMEBUFFER,Ki.__webglFramebuffer),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let vn=0;vn<Pe;vn++)is&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.get(E).__webglTexture,q,lt+vn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.get(O).__webglTexture,Te,on+vn)),z.blitFramebuffer(ke,Ze,ke+Oe,Ze+be,Ue,ct,Ue+Oe,ct+be,z.DEPTH_BUFFER_BIT,z.NEAREST);ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||Be.has(E)){let dt=Be.get(E),wn=Be.get(O);ge.bindFramebuffer(z.READ_FRAMEBUFFER,P),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,k);for(let Ki=0;Ki<Pe;Ki++)is?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dt.__webglTexture,q,lt+Ki):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dt.__webglTexture,q),Us?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wn.__webglTexture,Te,on+Ki):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wn.__webglTexture,Te),q!==0?z.blitFramebuffer(ke,Ze,ke+Oe,Ze+be,Ue,ct,Ue+Oe,ct+be,z.COLOR_BUFFER_BIT,z.NEAREST):Us?z.copyTexSubImage3D(Fe,Te,Ue,ct,on+Ki,ke,Ze,Oe,be):z.copyTexSubImage2D(Fe,Te,Ue,ct,ke,Ze,Oe,be);ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Us?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Fe,Te,Ue,ct,on,Oe,be,Pe,Rt,On,It.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Fe,Te,Ue,ct,on,Oe,be,Pe,Rt,It.data):z.texSubImage3D(Fe,Te,Ue,ct,on,Oe,be,Pe,Rt,On,It):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Te,Ue,ct,Oe,be,Rt,On,It.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Te,Ue,ct,It.width,It.height,Rt,It.data):z.texSubImage2D(z.TEXTURE_2D,Te,Ue,ct,Oe,be,Rt,On,It);ge.pixelStorei(z.UNPACK_ROW_LENGTH,Zn),ge.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt),ge.pixelStorei(z.UNPACK_SKIP_PIXELS,Os),ge.pixelStorei(z.UNPACK_SKIP_ROWS,Un),ge.pixelStorei(z.UNPACK_SKIP_IMAGES,Tc),Te===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&z.generateMipmap(Fe),ge.unbindTexture()},this.initRenderTarget=function(E){Be.get(E).__webglFramebuffer===void 0&&Ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ve.setTextureCube(E,0):E.isData3DTexture?Ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ve.setTexture2DArray(E,0):Ve.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){B=0,U=0,$=null,ge.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};function am(r,e){if(e===Fp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Oa||e===fc){let t=r.getIndex();if(t===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Oa)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Wx(r){let e=new Map,t=new Map,n=r.clone();return Xx(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Xx(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Xx(r.children[n],e.children[n],t)}var af=class extends tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pm(t)}),this.register(function(t){return new mm(t)}),this.register(function(t){return new gm(t)}),this.register(function(t){return new wm(t)}),this.register(function(t){return new Em(t)}),this.register(function(t){return new Am(t)}),this.register(function(t){return new xm(t)}),this.register(function(t){return new ym(t)}),this.register(function(t){return new vm(t)}),this.register(function(t){return new Sm(t)}),this.register(function(t){return new dm(t)}),this.register(function(t){return new Mm(t)}),this.register(function(t){return new _m(t)}),this.register(function(t){return new Tm(t)}),this.register(function(t){return new bm(t)}),this.register(function(t){return new hm(t)}),this.register(function(t){return new lf(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new lf(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rm(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Qr.extractUrlBase(e);o=Qr.resolveURL(c,this.path)}else o=Qr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new mo(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jx){try{o[it.KHR_BINARY_GLTF]=new Cm(e)}catch(h){i&&i(h);return}s=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Um(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case it.KHR_MATERIALS_UNLIT:o[h]=new fm;break;case it.KHR_DRACO_MESH_COMPRESSION:o[h]=new Pm(s,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[h]=new Im;break;case it.KHR_MESH_QUANTIZATION:o[h]=new Lm;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function pE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Xt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hm=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Pn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _o(u),c.distance=h;break;case"spot":c=new rc(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),br(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},fm=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return mi}extendParams(e,t,n){let i=[];e.color=new Ge(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,gn))}return Promise.all(i)}},dm=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},pm=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(s,s)}return Promise.all(i)}},mm=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},gm=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},_m=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},xm=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,gn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},ym=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},vm=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(s[0],s[1],s[2],Pn),Promise.all(i)}},Sm=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Mm=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(s[0],s[1],s[2],Pn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,gn)),Promise.all(i)}},bm=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Tm=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},wm=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Em=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Am=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},lf=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},Rm=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Xi.TRIANGLES&&c.mode!==Xi.TRIANGLE_STRIP&&c.mode!==Xi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let _=new Ye,p=new H,g=new Pi,y=new H(1,1,1),b=new ho(m.geometry,m.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,_.compose(p,g,y));let v=null;for(let M in l)if(M==="_COLOR_0"){let w=l[M];b.instanceColor=new qr(w.array,w.itemSize,w.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(v===null){let x=b.geometry;v=new Tn,v.name=x.name;for(let S in x.attributes)v.setAttribute(S,x.attributes[S]);for(let S in x.morphAttributes)v.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let S of x.groups)v.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),b.geometry=v}let w=l[M];v.setAttribute(M,new qr(w.array,w.itemSize,w.normalized))}Tt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Jx="glTF",yc=12,qx={JSON:1313821514,BIN:5130562},Cm=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,yc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-yc,s=new DataView(e,yc),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===qx.JSON){let c=new Uint8Array(e,yc+o,a);this.content=n.decode(c)}else if(l===qx.BIN){let c=yc+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pm=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Nm[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Nm[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=ka[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let m in d.attributes){let _=d.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}h(d)},a,c,Pn,f)})})}},Im=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Lm=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},cf=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,_=m-c,p=-2*d+3*f,g=d-f,y=1-p,b=g-f+h;for(let v=0;v!==a;v++){let M=o[_+v+a],w=o[_+v+l]*u,x=o[m+v+a],S=o[m+v]*u;s[v]=y*M+b*w+p*x+g*S}return s}},mE=new Pi,Dm=class extends cf{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return mE.fromArray(s).normalize().toArray(s),s}},Xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ka={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yx={9728:tn,9729:Lt,9984:_h,9985:Da,9986:To,9987:Di},Kx={33071:di,33648:_a,10497:fr},lm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gE={CUBICSPLINE:void 0,LINEAR:lo,STEP:ao},cm={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _E(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new qn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xr})),r.DefaultMaterial}function Ao(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function br(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function yE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vE(r){let e,t=r.extensions&&r.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+um(t.attributes):e=r.indices+":"+um(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+um(r.targets[n]);return e}function um(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Om(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ME=new Ye,Um=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?(this.textureLoader=new tc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new sc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ao(s,a,i),br(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Qr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=lm[i.type],a=ka[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Cn(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=lm[i.type],c=ka[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,_,p;if(d&&d!==h){let g=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,b=t.cache.get(y);b||(_=new c(a,g*d,i.count*d/u),b=new ba(_,d/u),t.cache.add(y,b)),p=new Ta(b,l,f%d/u,m)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),p=new Cn(_,l,m);if(i.sparse!==void 0){let g=lm.SCALAR,y=ka[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,M=new y(o[1],b,i.sparse.count*g),w=new c(o[2],v,i.sparse.count*l);a!==null&&(p=new Cn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,S=M.length;x<S;x++){let R=M[x];if(p.setX(R,w[x*l]),l>=2&&p.setY(R,w[x*l+1]),l>=3&&p.setZ(R,w[x*l+2]),l>=4&&p.setW(R,w[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Yx[f.magFilter]||Lt,u.minFilter=Yx[f.minFilter]||Di,u.wrapS=Kx[f.wrapS]||fr,u.wrapT=Kx[f.wrapT]||fr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==tn&&u.minFilter!==Lt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,m){t.parse(f,d,m)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,m){let _=d;t.isImageBitmapLoader===!0&&(_=function(p){let g=new _n(p);g.needsUpdate=!0,d(g)}),t.load(Qr.resolveURL(f,s.path),_,void 0,m)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),br(f,o),f.userData.mimeType=o.mimeType||SE(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[it.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ea,si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Es,si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return qn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){let h=i[it.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Pn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,gn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=_i);let u=s.alphaMode||cm.OPAQUE;if(u===cm.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===cm.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==mi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $e(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==mi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==mi){let h=s.emissiveFactor;a.emissive=new Ge().setRGB(h[0],h[1],h[2],Pn)}return s.emissiveTexture!==void 0&&o!==mi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,gn)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),br(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ao(i,h,s),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Zx(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=vE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Zx(new Tn,c,t),c.mode===Xi.TRIANGLE_STRIP?f=f.then(d=>am(d,fc)):c.mode===Xi.TRIANGLE_FAN&&(f=f.then(d=>am(d,Oa))),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?_E(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let _=u[d],p=o[d],g,y=c[d];if(p.mode===Xi.TRIANGLES||p.mode===Xi.TRIANGLE_STRIP||p.mode===Xi.TRIANGLE_FAN||p.mode===void 0){let b=s.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&v?new Hl(_,y):new Mt(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===Xi.LINES)g=new po(_,y);else if(p.mode===Xi.LINE_STRIP)g=new fo(_,y);else if(p.mode===Xi.LINE_LOOP)g=new Vl(_,y);else if(p.mode===Xi.POINTS)g=new Wl(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&yE(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),br(g,s),p.extensions&&Ao(i,g,p),t.assignFinalMaterial(g),h.push(g)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ao(i,h[0],s),h[0];let f=new Wt;s.extensions&&Ao(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(Dn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),br(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Ye;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Gl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],m=i.samplers[d.sampler],_=d.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],_=h[3],p=h[4],g=[];for(let b=0,v=f.length;b<v;b++){let M=f[b],w=d[b],x=m[b],S=_[b],R=p[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let A=n._createAnimationTracks(M,w,x,S,R);if(A)for(let L=0;L<A.length;L++)g.push(A[L])}let y=new Ql(s,void 0,g);return br(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ME)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new H().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new wa:c.length>1?u=new Wt:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),br(u,s),s.extensions&&Ao(n,u,s),s.matrix!==void 0){let h=new Ye;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Wt;n.name&&(s.name=i.createUniqueName(n.name)),br(s,n),n.extensions&&Ao(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?s.add(Wx(f)):s.add(f)}let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof si||f instanceof _n)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Is[s.path]===Is.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Is[s.path]){case Is.weights:u=Jr;break;case Is.rotation:u=$r;break;case Is.translation:case Is.scale:u=Rs;break;default:n.itemSize===1?u=Jr:u=Rs;break}let h=i.interpolation!==void 0?gE[i.interpolation]:lo,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let _=new u(l[d]+"."+Is[s.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Om(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof $r?Dm:cf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bE(r,e,t){let n=e.attributes,i=new un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let u=Om(ka[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new H,l=new H;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let _=Om(ka[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new pi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Zx(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=Nm[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return nt.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),br(r,e),bE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xE(r,e.targets,t):r})}var uf=class extends ec{constructor(e){super(e),this.type=oi}parse(e){let o=function(S,R){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},h=function(S,R,A){R=R||1024;let D=S.pos,F=-1,P=0,k="",B=String.fromCharCode.apply(null,new Uint16Array(S.subarray(D,D+128)));for(;0>(F=B.indexOf(`
`))&&P<R&&D<S.byteLength;)k+=B,P+=B.length,D+=128,B=String.fromCharCode.apply(null,new Uint16Array(S.subarray(D,D+128)));return-1<F?(A!==!1&&(S.pos+=P+F+1),k+B.slice(0,F)):!1},f=function(S){let R=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},k,B;for((S.pos>=S.byteLength||!(k=h(S)))&&o(1,"no header found"),(B=k.match(R))||o(3,"bad initial token"),P.valid|=1,P.programtype=B[1],P.string+=k+`
`;k=h(S),k!==!1;){if(P.string+=k+`
`,k.charAt(0)==="#"){P.comments+=k+`
`;continue}if((B=k.match(A))&&(P.gamma=parseFloat(B[1])),(B=k.match(L))&&(P.exposure=parseFloat(B[1])),(B=k.match(D))&&(P.valid|=2,P.format=B[1]),(B=k.match(F))&&(P.valid|=4,P.height=parseInt(B[1],10),P.width=parseInt(B[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},d=function(S,R,A){let L=R;if(L<8||L>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);L!==(S[2]<<8|S[3])&&o(3,"wrong scanline width");let D=new Uint8Array(4*R*A);D.length||o(4,"unable to allocate buffer space");let F=0,P=0,k=4*L,B=new Uint8Array(4),U=new Uint8Array(k),$=A;for(;$>0&&P<S.byteLength;){P+4>S.byteLength&&o(1),B[0]=S[P++],B[1]=S[P++],B[2]=S[P++],B[3]=S[P++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=L)&&o(3,"bad rgbe scanline format");let G=0,I;for(;G<k&&P<S.byteLength;){I=S[P++];let pe=I>128;if(pe&&(I-=128),(I===0||G+I>k)&&o(3,"bad scanline data"),pe){let Ie=S[P++];for(let Y=0;Y<I;Y++)U[G++]=Ie}else U.set(S.subarray(P,P+I),G),G+=I,P+=I}let j=L;for(let pe=0;pe<j;pe++){let Ie=0;D[F]=U[pe+Ie],Ie+=L,D[F+1]=U[pe+Ie],Ie+=L,D[F+2]=U[pe+Ie],Ie+=L,D[F+3]=U[pe+Ie],F+=4}$--}return D},m=function(S,R,A,L){let D=S[R+3],F=Math.pow(2,D-128)/255;A[L+0]=S[R+0]*F,A[L+1]=S[R+1]*F,A[L+2]=S[R+2]*F,A[L+3]=1},_=function(S,R,A,L){let D=S[R+3],F=Math.pow(2,D-128)/255;A[L+0]=bs.toHalfFloat(Math.min(S[R+0]*F,65504)),A[L+1]=bs.toHalfFloat(Math.min(S[R+1]*F,65504)),A[L+2]=bs.toHalfFloat(Math.min(S[R+2]*F,65504)),A[L+3]=bs.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;let g=f(p),y=g.width,b=g.height,v=d(p.subarray(p.pos),y,b),M,w,x;switch(this.type){case Yn:x=v.length/4;let S=new Float32Array(x*4);for(let A=0;A<x;A++)m(v,A*4,S,A*4);M=S,w=Yn;break;case oi:x=v.length/4;let R=new Uint16Array(x*4);for(let A=0;A<x;A++)_(v,A*4,R,A*4);M=R,w=oi;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:b,data:M,header:g.string,gamma:g.gamma,exposure:g.exposure,type:w,colorSpace:Pn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};function $x(r,e){let t=new Wt;r.position.y=-1.78,r.scale.setScalar(1.54),t.add(r);let n=[1,2,3,4].map(s=>r.getObjectByName("GothicCabinet_01_door"+s));for(let[s,o]of[[0,.32],[1,1.32]]){for(let l of[-1,1]){let c=l*1.04;for(let u=0;u<4;u++){let h=e[(u+s+(l+1))%e.length].clone(!0),f=new un().setFromObject(h).getSize(new H),d=(.81+.12*Math.sin(u*1.8+l+s))/f.y,m=f.x*d;h.scale.setScalar(d),h.position.set(c-l*m/2,o*1.54-1.78+.008,.38+.036*Math.sin(u+s)),h.rotation.y=.02*Math.sin(u+l),t.add(h),c-=l*(m+.012)}}let a=-.25;for(let l=0;l<5;l++){let c=e[(s+l+2)%e.length].clone(!0),u=new un().setFromObject(c).getSize(new H),h=(.6+.11*Math.cos(l*.9+s))/u.y,f=u.x*h;c.scale.setScalar(h),c.position.set(a+f/2,o*1.54-1.78+.008,-.23),t.add(c),a+=f+.012}}function i(s,o){for(let[a,l]of n.entries()){let c=s-[0,.11,.23,.33][a],u=Dn.smootherstep(c,0,1.28),h=Dn.smootherstep(c,3.62,5.28),f=[.57,.76,.42,.6][a],d=o?f:u*(1.86-(1.86-f)*h);l.rotation.y=(a%2===0?-1:1)*d}}return{object:t,update:i}}function TE(r,e){let t=document.createElement("canvas");t.width=640,t.height=856;let n=t.getContext("2d");n.strokeStyle=n.fillStyle="#fff",n.lineWidth=2.3,n.strokeRect(41,35,558,785),n.strokeRect(49,43,542,769);for(let[o,a,l]of[[54,48,0],[586,48,Math.PI/2],[586,808,Math.PI],[54,808,-Math.PI/2]])n.save(),n.translate(o,a),n.rotate(l),n.beginPath(),n.moveTo(0,40),n.quadraticCurveTo(3,3,40,0),n.moveTo(0,26),n.quadraticCurveTo(12,14,26,0),n.stroke(),n.restore();if(n.save(),n.translate(320,300),n.lineWidth=3.5,n.beginPath(),n.arc(0,0,100,0,Math.PI*2),n.stroke(),n.lineWidth=1.8,n.beginPath(),n.arc(0,0,93,0,Math.PI*2),n.stroke(),e==="sites"){for(let o=0;o<5;o++){let a=22+o*9;n.beginPath(),n.moveTo(-a,52),n.lineTo(-a,1),n.arc(0,1,a,Math.PI,2*Math.PI),n.lineTo(a,52),n.stroke()}n.fillRect(-66,52,132,3)}else if(e==="ads"){for(let o=0;o<32;o++)n.rotate(Math.PI/16),n.beginPath(),n.moveTo(23,0),n.quadraticCurveTo(43,-8,72,0),n.lineTo(66,3),n.stroke();n.beginPath(),n.arc(0,0,18,0,2*Math.PI),n.stroke()}else if(e==="apps")for(let o=0;o<4;o++){let a=o*17-29;n.beginPath(),n.moveTo(-62,a),n.lineTo(0,a-26),n.lineTo(62,a),n.lineTo(0,a+26),n.closePath(),n.stroke()}else{n.rotate(-.35);for(let o=1;o<=5;o++)n.beginPath(),n.ellipse(0,0,12*o,64,0,0,Math.PI*2),n.stroke();for(let o of[-38,-18,0,18,38])n.beginPath(),n.ellipse(0,o,Math.sqrt(64**2-o**2),9,0,0,Math.PI*2),n.stroke()}n.restore(),n.textAlign="center";let i=115;do n.font="bold "+i+"px Georgia, serif",i--;while(i>90&&n.measureText(r).width>526);n.fillText(r,320,554,526),n.fillRect(217,615,206,2),n.beginPath(),n.moveTo(320,643),n.lineTo(325,650),n.lineTo(320,657),n.lineTo(315,650),n.closePath(),n.fill();let s=new mr(t);return s.anisotropy=6,s}function jx(r,e,t){let n=TE(t.title,t.key),i=r.material.clone(),s=e.getSize(new H);return i.onBeforeCompile=o=>{o.uniforms.foilMask={value:n},o.uniforms.coverExtent={value:new _t(e.max.z,e.min.y,s.z,s.y)},o.uniforms.coverDye={value:new H(...t.dye)},o.vertexShader=`varying vec2 foilUV; varying float coverFace; uniform vec4 coverExtent;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      foilUV=vec2((coverExtent.x-position.z)/coverExtent.z,(position.y-coverExtent.y)/coverExtent.w);
      coverFace=normal.x;`),o.fragmentShader=`varying vec2 foilUV; varying float coverFace; uniform sampler2D foilMask; uniform vec3 coverDye;
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float front=smoothstep(.55,.95,coverFace);
      float foil=texture2D(foilMask,foilUV).a*front;
      float grain=dot(diffuseColor.rgb,vec3(.24,.56,.20));
      diffuseColor.rgb=mix(diffuseColor.rgb,grain*coverDye,smoothstep(.35,.9,abs(coverFace))*.96);
      diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.91,.69,.37),foil);`),o.fragmentShader=o.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.37,foil);`),o.fragmentShader=o.fragmentShader.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor=mix(metalnessFactor,.39,foil);`)},i.customProgramCacheKey=()=>"archive-foil",r.material=i,()=>{i.dispose(),n.dispose()}}var wE=[{key:"sites",title:"\u0421\u0430\u0439\u0442\u044B",dye:[.76,1.05,1.5],height:1.24,slot:-.32,floor:1.32,x:-1.31,y:1.04,yaw:-.27,roll:.085,delay:.97},{key:"ads",title:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",dye:[2.03,.77,.62],height:1.2,slot:.32,floor:1.32,x:1.55,y:.89,yaw:.42,roll:-.105,delay:1.19},{key:"apps",title:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",dye:[.68,1.34,1.03],height:1.22,slot:-.34,floor:.32,x:-1.32,y:-.66,yaw:-.15,roll:-.064,delay:1.48},{key:"3d",title:"3D",dye:[1.55,.97,1.48],height:1.17,slot:.32,floor:.32,x:1.42,y:-.82,yaw:.52,roll:.069,delay:1.72}],{smootherstep:hf,lerp:vc,clamp:EE}=Dn;function Qx(r,e,t,n,i){let s=wE.map((c,u)=>{let h=new Wt,f=i[u].clone(!0),d=new un().setFromObject(f),m=d.getSize(new H),_=d.getCenter(new H),p=c.height/m.y;f.scale.set(p*1.1,p,p*1.22),f.position.copy(_).multiply(f.scale).negate();let g=f.getObjectByProperty("isMesh",!0),y=jx(g,d,c),b=new Wt;return b.rotation.y=-Math.PI/2,b.add(f),h.add(b),r.add(h),{...c,index:u,body:h,releaseStamp:y,width:m.z*f.scale.z,depth:m.x*f.scale.x,link:n.querySelector('[data-document="'+c.key+'"]'),progress:0,hover:0,screen:null,rest:new Tt,restWorld:new Ye}});function o(c,u){for(let h of s){let f=Math.max(h.progress,t.paused?1:EE((c-h.delay)/1.94,0,1));h.progress=f;let d=hf(f,0,.5),m=hf(f,.43,.98),_=hf(f,.48,.96),p=Math.sin(m*Math.PI),g=hf(f,.79,1),y=Math.sin(g*Math.PI*2)*(1-g),b=Math.sign(h.slot),v=t.heroFocus===h.key?1:0;h.hover=vc(h.hover,v,t.paused?1:1-Math.exp(-u*9));let M=h.floor*1.54-1.78+h.height/2+.009,w=.58-h.width/2;h.body.position.set(vc(h.slot,h.x,m)+b*.055*p,vc(M,h.y,m)+.031*d+.112*p,vc(w,1.62,d)+.21*p+.032*y),h.body.rotation.set(-.085*_-.105*p,vc(Math.PI/2,h.yaw,_),h.roll*_+b*(.069*p-.018*y)),h.rest.position.copy(h.body.position),h.rest.quaternion.copy(h.body.quaternion),h.rest.updateMatrix();let x=h.hover*m;h.body.position.y+=x*.065,h.body.position.z+=x*.1,h.body.rotation.y-=b*.08*x,h.body.rotation.z-=b*.025*x}}let a=new H;function l(){let c=n.clientWidth,u=n.clientHeight;for(let h of s){h.restWorld.multiplyMatrices(r.matrixWorld,h.rest.matrix);let f=1/0,d=1/0,m=-1/0,_=-1/0;for(let y of[h.body.matrixWorld,h.restWorld])for(let b of[-h.width/2,h.width/2])for(let v of[-h.height/2,h.height/2]){a.set(b,v,h.depth/2).applyMatrix4(y).project(e);let M=(a.x+1)*c/2,w=(1-a.y)*u/2;f=Math.min(f,M),m=Math.max(m,M),d=Math.min(d,w),_=Math.max(_,w)}let p=h.screen,g={left:Math.round(f)-2,top:Math.round(d)-2,right:Math.round(m)+2,bottom:Math.round(_)+2};if(!p||h.viewWidth!==c||h.viewHeight!==u||g.left!==p.left||g.top!==p.top||g.right!==p.right||g.bottom!==p.bottom){let y=h.link.style;y.setProperty("--doc-x",100*g.left/c+"%"),y.setProperty("--doc-y",100*g.top/u+"%"),y.setProperty("--doc-w",100*(g.right-g.left)/c+"%"),y.setProperty("--doc-h",100*(g.bottom-g.top)/u+"%"),h.screen=g,h.viewWidth=c,h.viewHeight=u}h.link.classList.toggle("book-in-cabinet",h.progress<=.5)}}return{update:o,project:l,status:()=>s.map(c=>({key:c.key,progress:c.progress,hover:c.hover,position:c.body.position.toArray(),screen:c.screen})),dispose(){for(let c of s)r.remove(c.body),c.releaseStamp()}}}async function ey(r,e){let t=document.querySelector("#scene"),n=document.createElement("canvas"),i=n.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!i)return t.dataset.renderer="fallback",null;t.classList.toggle("archive-loading",!r.paused);let s=new af,[o,a,l]=await Promise.all([s.loadAsync("assets/archive/cabinet.glb"),s.loadAsync("assets/archive/volumes.glb"),new uf().loadAsync("assets/archive/studio.hdr")]),c=new Fa({canvas:n,context:i,antialias:!0,alpha:!0});c.setPixelRatio(Math.min(devicePixelRatio,1.75)),c.setClearColor(0,0),c.toneMapping=Mo,c.toneMappingExposure=1.03,c.shadowMap.enabled=!0,c.shadowMap.type=yo,t.append(n),n.setAttribute("aria-hidden","true");let u=new Xr,h=new en(29,1,.1,36);h.position.set(0,.64,10.5),h.lookAt(0,-.06,0);let f=new Ps(c),d=f.fromEquirectangular(l);u.environment=d.texture,u.environmentIntensity=.76,u.environmentRotation.y=-.65,l.dispose(),f.dispose();let m=new Vi(16771799,2.1);m.position.set(-3.8,6,4.2),m.castShadow=!0,m.shadow.mapSize.setScalar(t.clientWidth>600?1024:512),Object.assign(m.shadow.camera,{left:-3.3,right:3.3,top:3.3,bottom:-3.3,near:.5,far:16}),m.shadow.camera.updateProjectionMatrix(),m.shadow.bias=-45e-5,m.shadow.normalBias=.018,m.shadow.radius=2.8;let _=new Vi(14211578,.79);_.position.set(4,1.5,2.6);let p=new Vi(16764570,1.45);p.position.set(2,3,-3),u.add(m,_,p);let g=new Wt;u.add(g);let y=a.scene.children,b=y[0].children.find(se=>se.material?.name.endsWith("_paper"))?.material;b&&(b.color.setHex(14601641),b.onBeforeCompile=se=>{se.vertexShader=`varying vec3 paperPoint;
`+se.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
paperPoint=position;`),se.fragmentShader=`varying vec3 paperPoint;
`+se.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float layer = paperPoint.x * 9500. + .25 * sin(paperPoint.z * 148. + paperPoint.y * 41.);
        float fiber = .5 + .5*cos(layer);
        float lod = 1.-smoothstep(.6,3.,fwidth(layer));
        diffuseColor.rgb *= .93 - .19*fiber*lod - .045*cos(paperPoint.x*830.);
      `)});let v=$x(o.scene,y);g.add(v.object);let M=Qx(g,h,r,t,y);g.traverse(se=>{se.isMesh&&(se.castShadow=!0,se.receiveShadow=!0)});let w=document.createElement("canvas");w.width=w.height=128;let x=w.getContext("2d"),S=x.createRadialGradient(64,64,2,64,64,63);S.addColorStop(0,"#000b"),S.addColorStop(.42,"#0008"),S.addColorStop(1,"#0000"),x.fillStyle=S,x.fillRect(0,0,128,128);let R=new mr(w),A=new Kr(4.5,2.2),L=new mi({map:R,transparent:!0,depthWrite:!1}),D=new Mt(A,L);D.position.set(0,-1.795,0),D.rotation.x=-Math.PI/2,u.add(D);let F=!1,P=0,k=r.time,B=0,U=-10,$=0,G=0,I=0,j=null;function pe(){F||(c.render(u,h),M.project(),r.frames++)}function Ie(se){if(F||((r.tx!==$||r.ty!==G||r.dragRotation!==I||r.heroFocus!==j)&&($=r.tx,G=r.ty,I=r.dragRotation,j=r.heroFocus,U=r.time),B=Math.max(B,r.paused?5.7:r.time-k),se>0&&B>5.65&&r.time-U>2.3))return;let ae=1-Math.exp(-se*2.8);r.x=Dn.lerp(r.x,r.tx,ae),r.y=Dn.lerp(r.y,r.ty,ae),P=Dn.lerp(P,r.dragRotation,ae),g.rotation.set(.025-r.y*.023,-.2+P+r.x*.045-(1-e.arrival)*.07,-.008),g.position.set(.14,0,0),v.update(B,r.paused),M.update(B,se),pe()}function Y(){let se=t.clientWidth,ae=t.clientHeight;if(!se||!ae)return;c.setSize(se,ae,!1);let oe=se/ae,De=Math.max(4.3,5.05/oe);h.aspect=oe,h.fov=Dn.radToDeg(2*Math.atan(De/(2*h.position.z))),h.updateProjectionMatrix(),Ie(0)}function he(){let se=new un().setFromObject(v.object),ae=new H,oe=1/0,De=-1/0,fe=-1/0,Le=1/0;for(let we of[se.min.x,se.max.x])for(let Re of[se.min.y,se.max.y])for(let He of[se.min.z,se.max.z])ae.set(we,Re,He).project(h),oe=Math.min(oe,ae.x),De=Math.max(De,ae.x),fe=Math.max(fe,ae.y),Le=Math.min(Le,ae.y);return{left:oe,right:De,top:fe,bottom:Le}}n.addEventListener("webglcontextlost",se=>{se.preventDefault(),F=!0,t.classList.remove("ready"),t.dataset.renderer="fallback"}),n.addEventListener("webglcontextrestored",()=>{F=!1,Y(),t.classList.add("ready"),t.dataset.renderer="webgl"});let Se=new ResizeObserver(Y);Se.observe(t),t.addEventListener("pointerdown",se=>{r.paused||se.pointerType==="touch"||se.target.closest("a")||(r.dragging=!0,r.dragStart=se.clientX,t.setPointerCapture(se.pointerId))}),t.addEventListener("pointermove",se=>{r.dragging&&(r.dragRotation=Dn.clamp(r.dragRotation+(se.clientX-r.dragStart)*.0015,-.17,.22),r.dragStart=se.clientX)});for(let se of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(se,()=>{r.dragging=!1});return Y(),t.classList.remove("archive-loading"),t.classList.add("ready"),t.dataset.renderer="webgl",{resize:Y,render:pe,frame:Ie,bounds:he,documentStatus:M.status,dispose(){Se.disconnect(),M.dispose(),m.shadow.dispose();let se=new Set,ae=new Set,oe=new Set;for(let De of[o.scene,a.scene])De.traverse(fe=>{fe.isMesh&&(ae.add(fe.geometry),se.add(fe.material))});for(let De of se){for(let fe of Object.values(De))fe?.isTexture&&oe.add(fe);De.dispose()}for(let De of ae)De.dispose();for(let De of oe)De.dispose();R.dispose(),A.dispose(),L.dispose(),d.dispose(),c.dispose()}}}var ff=class extends Xr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Li;e.deleteAttribute("uv");let t=new qn({side:Ln}),n=new qn,i=new _o(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Mt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new ho(e,n,6),a=new Tt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Mt(e,za(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Mt(e,za(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Mt(e,za(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Mt(e,za(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Mt(e,za(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Mt(e,za(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function za(r){return new $l({color:0,emissive:16777215,emissiveIntensity:r})}var Sc=new H;function qi(r,e,t,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Sc.copy(e),Sc[n]=0,Sc.normalize();let c=.5*o/(o+a),u=1-Sc.angleTo(r)/l;return Math.sign(Sc[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Ro=class r extends Li{constructor(e=1,t=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new H,c=new H,u=new H(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,_=new H,p=.5/o;for(let g=0,y=0;g<h.length;g+=3,y+=2)switch(l.fromArray(h,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),h[g+0]=u.x*Math.sign(l.x)+c.x*s,h[g+1]=u.y*Math.sign(l.y)+c.y*s,h[g+2]=u.z*Math.sign(l.z)+c.z*s,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/m)){case 0:_.set(1,0,0),d[y+0]=qi(_,c,"z","y",s,n),d[y+1]=1-qi(_,c,"y","z",s,t);break;case 1:_.set(-1,0,0),d[y+0]=1-qi(_,c,"z","y",s,n),d[y+1]=1-qi(_,c,"y","z",s,t);break;case 2:_.set(0,1,0),d[y+0]=1-qi(_,c,"x","z",s,e),d[y+1]=qi(_,c,"z","x",s,n);break;case 3:_.set(0,-1,0),d[y+0]=1-qi(_,c,"x","z",s,e),d[y+1]=1-qi(_,c,"z","x",s,n);break;case 4:_.set(0,0,1),d[y+0]=1-qi(_,c,"x","y",s,e),d[y+1]=1-qi(_,c,"y","x",s,t);break;case 5:_.set(0,0,-1),d[y+0]=qi(_,c,"x","y",s,e),d[y+1]=1-qi(_,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};function ty(){let r=document.querySelector("#study-scene"),e=document.createElement("canvas"),t=e.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"low-power"});if(!t)return r.dataset.renderer="fallback",null;let n=new Fa({canvas:e,context:t,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(2.5,Math.max(1.72,devicePixelRatio))),n.setClearColor(0,0),n.toneMapping=Mo,n.toneMappingExposure=.92,r.append(e),e.setAttribute("aria-hidden","true");let i=new Xr,s=new en(33,1,.1,30);s.position.set(0,.8,6.7),s.lookAt(0,0,0);let o=new ff,a=new Ps(n),l=a.fromScene(o,.04);i.environment=l.texture,i.environmentIntensity=.65,o.dispose(),a.dispose();let c=new Vi(16771803,3.5);c.position.set(-3,5,5),i.add(c,new nc(14210540,1578269,.85));let u=new Vi(12694747,4.5);u.position.set(4,2,-1),i.add(u);let h=new Wt;i.add(h);let f=new In({color:7828605,metalness:.88,roughness:.23,clearcoat:.35}),d=new qn({color:3420216,roughness:.55,metalness:.35}),m=new qn({color:2105380,roughness:.85}),_=document.createElement("canvas");_.width=_.height=64;let p=_.getContext("2d");p.fillStyle="#414047",p.fillRect(0,0,64,64);for(let oe=0;oe<64;oe+=8)for(let De=0;De<64;De+=8)p.fillStyle="#222126",p.fillRect(De,oe,3,4),p.fillStyle="#64616a",p.fillRect(De+4,oe+4,2,3);let g=new mr(_);g.wrapS=g.wrapT=fr,g.repeat.set(7,11);let y=new qn({color:5591387,map:g,bumpMap:g,bumpScale:.025,roughness:.92});function b(oe,De,fe=0,Le=0,we=0){let Re=new Mt(oe,De);return Re.position.set(fe,Le,we),h.add(Re),Re}let v=[];function M(oe,De,fe,Le,we=0,Re="z"){return v.push({object:oe,home:oe.position.clone(),delta:De,start:fe,end:Le,turn:we,axis:Re,angle:oe.rotation[Re]}),oe}let w=(oe,De,fe)=>new H(oe,De,fe),x=b(new Ro(1.64,2.56,1.08,6,.18),f);M(x,w(-.14,0,-.34),.03,.35);let S=b(new Ro(1.48,2.36,.13,5,.14),d,0,0,.51);M(S,w(0,0,.46),.18,.42);let R=new qn({color:2434089,roughness:.71,metalness:.2,side:_i}),A=new qn({color:8880522,roughness:.32,metalness:.85});function L(oe,De,fe,Le,we,Re){let He=new Mt(oe,De);return He.position.set(Le,we,Re),fe.add(He),He}for(let[oe,De,fe]of[[.52,.27,.22],[-.3,.45,.27]]){let Le=new Wt;Le.position.set(0,oe,.568),h.add(Le);let we=L(new Kl(De,.15,48,1,!0),R,Le,0,0,-.055);we.rotation.x=-Math.PI/2,L(new Aa(De,.035,8,48),m,Le,0,0,.008);let Re=L(new Jl(De*.29,24,12),d,Le,0,0,-.022);Re.scale.z=.35,M(Le,w(0,.03,.85),fe,fe+.24)}for(let[oe,[De,fe]]of[[-.58,.96],[.58,.96],[-.58,-.96],[.58,-.96]].entries()){let Le=new Wt;Le.position.set(De,fe,.567),h.add(Le);let we=L(new As(.04,.035,.024,14),A,Le,0,0,0);we.rotation.x=Math.PI/2,L(new Li(.043,.009,.004),m,Le,0,0,.013),M(Le,w(0,0,1.18),.35+oe*.025,.55+oe*.02,Math.PI*2)}let D=b(new Ro(1.36,2.24,.06,4,.12),y,0,0,.607);L(new Ro(.18,.025,.012,2,.006),A,D,0,-.88,.034),M(D,w(.04,.07,1.66),.47,.72,.055);let F=new Wt;F.position.set(.44,1.315,.08),h.add(F),L(new As(.22,.22,.105,56),f,F,0,0,0);let P=L(new Aa(.19,.009,8,48),d,F,0,.056,0);P.rotation.x=Math.PI/2,L(new Li(.025,.007,.08),m,F,0,.057,.12),M(F,w(0,.61,0),.55,.77,1.1,"y");for(let oe of[-.52,.52]){let De=b(new As(.12,.12,.07,24),m,oe,-1.305,.19);M(De,w(0,-.24,0),.19,.43)}let k=new Es({color:12955589,transparent:!0,opacity:.75,depthWrite:!1});for(let oe of[x,S,D])oe.add(new po(new Zl(oe.geometry,16),k));let B=[f,d,m,y,R,A];for(let oe of B)oe.transparent=!0;let U=document.createElement("canvas");U.width=U.height=128;let $=U.getContext("2d"),G=$.createRadialGradient(64,64,2,64,64,64);G.addColorStop(0,"#21152560"),G.addColorStop(1,"#21152500"),$.fillStyle=G,$.fillRect(0,0,128,128);let I=new mr(U),j=new Mt(new Kr(4.2,3),new mi({map:I,transparent:!0,depthWrite:!1}));j.rotation.x=-Math.PI/2,j.position.y=-1.34,i.add(j);let pe=!1,Ie=-1,Y=0,he=0;function Se(oe=Y,De=!1){if(Y=oe,pe||!De&&Math.abs(Ie-oe)<5e-5)return;Ie=oe;let fe=(He,rt)=>Dn.smoothstep(oe,He,rt),Le=fe(.03,.24);k.opacity=(1-fe(.12,.41))*.72;for(let He of B)He.opacity=Le,He.depthWrite=Le>.5;for(let He of v){let rt=1-fe(He.start,He.end);He.object.position.copy(He.home).addScaledVector(He.delta,rt),He.object.rotation[He.axis]=He.angle+He.turn*rt}j.material.opacity=.8*Le;let we=fe(.48,.93);h.rotation.set(.07-.045*we,-1.02+.59*we,-.025+.014*we);let Re=fe(.54,.91);c.position.set(-3.4+Re*2.1,5,4.6),s.position.set(0,1.08-.34*we,8-1.3*we),s.lookAt(0,.04,.46*(1-we)),n.render(i,s),he++}function se(){let oe=r.clientWidth,De=r.clientHeight;!oe||!De||(n.setSize(oe,De,!1),s.aspect=oe/De,s.updateProjectionMatrix(),Se(Y,!0))}e.addEventListener("webglcontextlost",oe=>{oe.preventDefault(),pe=!0,r.classList.remove("ready"),r.dataset.renderer="fallback"}),e.addEventListener("webglcontextrestored",()=>{pe=!1,r.classList.add("ready"),r.dataset.renderer="webgl",Se(Y,!0)});let ae=new ResizeObserver(se);return ae.observe(r),r.classList.add("ready"),r.dataset.renderer="webgl",se(),{frame:Se,resize:se,get frames(){return he},dispose(){ae.disconnect(),h.traverse(oe=>oe.geometry?.dispose());for(let oe of[...B,k])oe.dispose();j.geometry.dispose(),j.material.dispose(),I.dispose(),g.dispose(),l.dispose(),n.dispose()}}}Vt.registerPlugin(Je);var Ae=(r,e=document)=>e.querySelector(r),Nt=(r,e=document)=>[...e.querySelectorAll(r)],sy=matchMedia("(prefers-reduced-motion: reduce)"),AE=matchMedia("(min-width: 901px)"),_f={get(r){try{return localStorage.getItem(r)}catch{return null}},set(r,e){try{localStorage.setItem(r,e)}catch{}},remove(r){try{localStorage.removeItem(r)}catch{}}},Bt={concept:"hybrid",paused:sy.matches,time:0,scroll:0,x:0,y:0,tx:0,ty:0,dragging:!1,dragRotation:0,dragStart:0,frames:0,heroVisible:!0};Bt.heroFocus=null;var df={arrival:1,beat:0},Ds={value:0},Io=null,xf=!1,Yi=null,Bm=!1,Ls=null,oy=!1,Wa=[],km=new Set,ay=innerWidth<=760,yf=-1,pf={count:0},zm=[["const ","speaker"," = new Mesh("],["  body.geometry,"],["  brushedAluminium"],[");"],[""],["scene",".add","(speaker);"],["camera",".lookAt","(speaker.position);"],["renderer",".render","(scene, camera);"]],ny=zm.flat().join("").length+zm.length-1,ly=9.86,cy=2.2,uy=6.8,Ha=ly+.77*uy/cy,Co=[{at:0,name:"\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430",caption:"\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u043D\u0443\u0436\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430. \u0412 \u0447\u0430\u0442\u0435 \u0443\u0442\u043E\u0447\u043D\u044F\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0447\u0435\u0440\u0442\u0451\u0436."},{at:4.2,name:"\u041F\u043B\u0430\u043D \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",caption:"\u041D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u043A\u0430\u0436\u0435\u043C \u0441\u0430\u043C\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0443. \u041D\u0438\u0436\u0435 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438."},{at:7.15,name:"\u041F\u0438\u0448\u0443 \u043A\u043E\u0434",caption:"\u0417\u0430\u0434\u0430\u044E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043A\u043E\u0440\u043F\u0443\u0441\u0430, \u0441\u0442\u0430\u0432\u043B\u044E \u043A\u0430\u043C\u0435\u0440\u0443 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0432 \u0441\u0446\u0435\u043D\u0443."},{at:10.1,name:"\u0421\u0431\u043E\u0440\u043A\u0430",caption:"\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0438, \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E \u0438\u0445 \u0440\u0435\u0448\u0451\u0442\u043A\u043E\u0439 \u0438 \u0441\u0442\u0430\u0432\u043B\u044E \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438."},{at:Ha+1.42,name:"\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",caption:"\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u0441\u0430\u0439\u0442 SONA. \u0422\u0430 \u0436\u0435 \u043A\u043E\u043B\u043E\u043D\u043A\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430, \u0442\u0435\u043F\u0435\u0440\u044C \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435."}],Hm=[],iy=-1;function RE(){let r=Ae(".code-content"),e=0;zm.forEach((t,n)=>{n&&(r.append(document.createTextNode("")),Hm.push({node:r.lastChild,value:`
`,offset:e++})),t.forEach((i,s)=>{let o=document.createElement("span");o.className=n===0&&s===0?"syntax-keyword":s===1?"syntax-method":"syntax-base",r.append(o),Hm.push({node:o,value:i,offset:e}),e+=i.length})})}RE();var Ns=null,mf=null,Ga=null,hy=null,Mc=!1;function Gm(){return!Bt.paused&&!document.hidden&&!Mc&&!Ae("dialog[open]")}function ir(){let r=!Gm();Ga&&Ga.progress()<1&&Ga.paused(r),Yi?.paused(r||!xf),Ls?.paused(r||!oy),Wa.forEach((e,t)=>e.paused(r||!km.has(t)))}function Sf(r=!1,e=!1){let t=Yi?.time()||0,n=Wa.map(s=>s.time()),i=e?0:Ls?.time()||0;mf?.revert(),mf=null,Ga=null,Yi=null,Ls=null,Wa=[],df.arrival=1,df.beat=0,Ds.value=0,Io?.frame(0,!0),mf=Vt.context(()=>{if(ay=innerWidth<=760,Bm&&(fy(),Yi.time(Bt.paused?Yi.duration():t).pause(),Io?.frame(Ds.value,!0)),!Bt.paused){r&&(Ga=Vt.timeline({defaults:{ease:"power3.out"}}),Ga.from(".hybrid-line",{y:45,opacity:0,stagger:.14,duration:1.2},.1).from(".scene",{opacity:.45,duration:.55},.05).from(df,{arrival:0,duration:2.8,ease:"sine.out"},.15).from(".hybrid-intro",{y:24,opacity:0,duration:1},.7).from(".hybrid-actions",{y:18,opacity:0,duration:.9},.85)),Ls=Vt.timeline({paused:!0}),Nt(".digit-strip").forEach((s,o)=>{let a=Number(s.dataset.end);Ls.fromTo(s,{y:0,yPercent:0},{y:0,yPercent:-a/(a+1)*100,duration:[3.4,3.9,3.65][o],ease:"power2.inOut"},[0,.12,.28][o])}),Ls.fromTo(".project-total",{y:18},{y:0,duration:3.6,ease:"power2.out"},0).fromTo(".total-plus",{rotation:-10,y:6},{rotation:0,y:0,duration:3.5,ease:"power2.inOut"},.2).time(i).pause(),IE(n);for(let s of Nt(".service-item"))Vt.timeline({scrollTrigger:{trigger:s,start:"top 98%",end:"center 65%",scrub:.65}}).from(s,{"--rule-progress":.08,ease:"sine.out",duration:1},0).from(Ae(".service-art",s),{"--turn":"-46deg","--spread":"12px",y:10,duration:1},0);for(let s of Nt(".process-list li"))Vt.timeline({scrollTrigger:{trigger:s,start:"top 95%",end:"center 65%",scrub:.7}}).from(s,{"--step-progress":.02,duration:1},0).from(Ae(".step-number",s),{y:16,duration:1},0).from(Ae("h4",s),{x:11,duration:1},0)}}),ir()}function CE(r){if(Bt.paused=r,r)for(let e of Nt(".scroll-arrival"))e.classList.remove("scroll-arrival");document.body.classList.toggle("motion-paused",r),Sf(!1,!r),Je.refresh(),Ns?.frame(0)}for(let r of Nt("[data-document]")){let e=()=>{Bt.heroFocus=r.dataset.document,Ns?.frame(0)},t=()=>{Bt.heroFocus===r.dataset.document&&(Bt.heroFocus=null),Ns?.frame(0)};r.addEventListener("pointerenter",e),r.addEventListener("pointerleave",()=>{document.activeElement!==r&&t()}),r.addEventListener("focus",e),r.addEventListener("blur",t),r.addEventListener("click",()=>{t(),r.hash&&Ae(r.hash)?.focus({preventScroll:!0})})}function ry(){let r=Yi?.time()||0,e=Co.findLastIndex(n=>r>=n.at);yf!==e&&(yf=e,Ae(".showcase-stage").dataset.phase=String(e),Ae("#story-heading").textContent=Co[e].name,Ae("#story-caption").textContent=Co[e].caption);let t=Math.floor(pf.count);if(t!==iy){for(let{node:n,value:i,offset:s}of Hm){let o=i.slice(0,Math.max(0,t-s));n.textContent!==o&&(n.textContent=o)}iy=t}Bt.paused&&Io?.frame(Ds.value,!0)}function PE(){let r=Ae(".film-scenes"),e=Ae(".drawing-flight"),t=Ae(".drawing-source"),n=Ae(".drawing-target");function i(a){let l=a.offsetWidth/2,c=a.offsetHeight/2;for(let u=a;u&&u!==r;u=u.offsetParent)l+=u.offsetLeft,c+=u.offsetTop;return{x:l,y:c}}function s(){let a=i(t),l=i(n);e.style.width=n.offsetWidth+"px",e.style.height=n.offsetHeight+"px",e.style.setProperty("--from-x",a.x+"px"),e.style.setProperty("--from-y",a.y+"px"),e.style.setProperty("--dx",l.x-a.x+"px"),e.style.setProperty("--dy",l.y-a.y+"px"),e.style.setProperty("--start-w",t.offsetWidth/Math.max(1,n.offsetWidth)),e.style.setProperty("--start-h",t.offsetHeight/Math.max(1,n.offsetHeight))}s();let o=new ResizeObserver(s);[r,t,n].forEach(a=>o.observe(a))}function fy(){let[r,e,t,n]=Nt(".film-scene"),i=Vt.timeline({paused:!0,defaults:{ease:"sine.inOut"},onUpdate:ry});Yi=i,yf=-1,Vt.set([e,t,n],{autoAlpha:0,scale:.98,y:10}),Vt.set(r,{autoAlpha:1,scale:1,y:0}),Vt.set(".chat-bubble, .chat-typing, .system-preview, .assembly-drawing, .editor-preview, .drawing-target",{autoAlpha:0}),Vt.set(".drawing-flight",{autoAlpha:0,"--travel":0}),Vt.set(".plan-draw",{clipPath:"inset(0 100% 0 0)"}),Vt.set(".dimension-rule",{scaleX:0}),Vt.set(".model-panel",{xPercent:-51,scale:1.72}),Vt.set(".film-site",{scale:1.02}),pf.count=0,Ds.value=0;let[s,o,a]=Nt(".chat-bubble");function l(h,f){i.fromTo(h,{autoAlpha:0,y:9,scale:.975},{autoAlpha:1,y:0,scale:1,duration:.46,ease:"power2.out",immediateRender:!1},f)}function c(h,f,d){i.to(h,{autoAlpha:0,scale:1.018,y:-8,duration:.72},d-.45).to(f,{autoAlpha:1,scale:1,y:0,duration:.78},d-.36)}for(let h of Co.slice(1))i.to(".film-caption",{opacity:0,y:-4,duration:.25},h.at-.25).fromTo(".film-caption",{opacity:0,y:5},{opacity:1,y:0,duration:.37,immediateRender:!1},h.at);i.fromTo(".chat-window",{scale:.94,y:7},{scale:1,y:0,duration:2,ease:"power2.out"},0).fromTo(".film-editor",{rotateZ:-.6,scale:.985},{rotateZ:0,scale:1,duration:1.8,immediateRender:!1},7),l(s,.15),i.to(".chat-typing",{autoAlpha:1,duration:.2},.76).fromTo(".chat-typing i",{y:0},{y:-3,stagger:.08,duration:.21,repeat:1,yoyo:!0},.91).to(".chat-typing",{autoAlpha:0,duration:.2},1.53),l(o,1.65),l(a,2.66),i.to(".drawing-flight",{autoAlpha:1,duration:.18},3.46).to(".drawing-source",{opacity:0,duration:.18},3.47).to(".drawing-flight",{"--travel":1,duration:1.2,ease:"power2.inOut"},3.6),c(r,e,Co[1].at),i.to(".drawing-target",{autoAlpha:1,duration:.25},4.76).to(".drawing-flight",{autoAlpha:0,duration:.32},4.8).to(".plan-draw",{clipPath:"inset(0 0% 0 0)",duration:.68,stagger:.22},4.52).to(".dimension-rule",{scaleX:1,duration:.64},5.24).fromTo(".draft-text i",{scaleX:.35,transformOrigin:"left"},{scaleX:1,duration:.55,stagger:.12},5.38),c(e,t,Co[2].at),i.to(pf,{count:ny*.49,duration:.91,ease:"none"},7.37).to(pf,{count:ny,duration:1.15,ease:"none"},8.44).to(".editor-preview",{autoAlpha:1,duration:.65},8.27).fromTo(".editor-preview .speaker-print",{rotateY:-32},{rotateY:10,duration:1.18},8.58),c(t,n,Co[3].at),Vt.set(".fallback-drivers",{xPercent:-17}),Vt.set(".product-fallback i",{xPercent:-72,rotateY:-21,opacity:.52}),Vt.set(".fallback-dial",{yPercent:-240});let u=Vt.timeline({defaults:{ease:"sine.inOut"}});u.fromTo(Ds,{value:0},{value:1,duration:uy,ease:"none",immediateRender:!1},0).to(".assembly-drawing",{autoAlpha:1,duration:.68},.56).fromTo(".assembly-drawing span",{yPercent:9,opacity:0},{yPercent:0,opacity:1,stagger:.3,duration:.64},.7).to(".assembly-drawing",{autoAlpha:0,duration:.62},4.42).to(".fallback-drivers",{xPercent:0,duration:1.3},1.44).to(".product-fallback i",{xPercent:0,rotateY:0,opacity:1,duration:1.7},2.94).to(".fallback-dial",{yPercent:0,duration:.95},4.14),i.add(u.timeScale(cy),ly).to(".model-panel",{xPercent:0,scale:1,duration:1.95,ease:"power2.inOut"},Ha).to(".system-preview",{autoAlpha:1,duration:1.25},Ha+.45).to(".film-site",{scale:.96,duration:1.64},Ha+.44).fromTo(".preview-header,.preview-copy,.preview-details > div",{y:7,opacity:0},{y:0,opacity:1,duration:.64,stagger:.15,immediateRender:!1},Ha+.69).to({},{duration:.8},Ha+2.57),ry()}Ae(".story-start").addEventListener("click",()=>{if(!Bm){Bm=!0,Ae("#story-presentation").hidden=!1,Ae(".showcase-stage").dataset.story="started",PE(),Ae(".story-start").hidden=!0;try{Io=ty()}catch{let r=Ae("#study-scene");r.classList.remove("ready"),r.dataset.renderer="fallback",Ae("canvas",r)?.remove()}mf.add(()=>fy()),Bt.paused&&Yi.progress(1).pause(),Ae("#studies-title").focus({preventScroll:!0}),ir()}});Ae(".story-replay").addEventListener("click",()=>{Yi?.time(0).pause(),ir()});function IE(r){Wa=Nt(".toolkit-group").map((e,t)=>{let n=Ae(".toolkit-reel",e),i=Nt("li",e);if(n.childElementCount===1)for(let o of[...i.slice(1),i[0]]){let a=n.firstElementChild.cloneNode(!1);a.textContent=o.textContent,n.append(a)}let s=Vt.timeline({paused:!0,repeat:-1});return s.fromTo(n,{yPercent:0},{yPercent:-100*i.length/n.childElementCount,duration:i.length,ease:"none"}),s.time(r[t]??t*.17)})}sy.addEventListener("change",r=>CE(r.matches));AE.addEventListener("change",()=>{Xa(),Sf(!1),Je.refresh()});window.addEventListener("resize",()=>{ay!==innerWidth<=760&&(Sf(!1),Je.refresh())});document.addEventListener("visibilitychange",ir);function Xa(r=!1){Mc=!1,Ae("#mobile-menu").hidden=!0,Ae(".menu-toggle").setAttribute("aria-expanded","false"),Ae(".menu-toggle").setAttribute("aria-label","\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.remove("menu-open"),Ae("#main").inert=!1,Ae(".site-footer").inert=!1,r&&Ae(".menu-toggle").focus(),ir()}Ae(".menu-toggle").addEventListener("click",()=>{if(Mc){Xa(!0);return}Mc=!0,Ae("#mobile-menu").hidden=!1,Ae(".menu-toggle").setAttribute("aria-expanded","true"),Ae(".menu-toggle").setAttribute("aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.add("menu-open"),Ae("#main").inert=!0,Ae(".site-footer").inert=!0,Ae("#mobile-menu a").focus(),ir()});for(let r of Nt("#mobile-menu a"))r.addEventListener("click",()=>Xa());document.addEventListener("keydown",r=>{if(Mc&&(r.key==="Escape"&&(r.preventDefault(),Xa(!0)),r.key==="Tab")){let e=[...Nt(".site-header a,.site-header button"),...Nt("#mobile-menu a")].filter(n=>n.getClientRects().length),t=e.indexOf(document.activeElement);r.shiftKey&&t<=0&&(r.preventDefault(),e.at(-1).focus()),!r.shiftKey&&t===e.length-1&&(r.preventDefault(),e[0].focus())}});function dy(r){let e=document.activeElement;Xa(),hy=e,r.showModal(),r.scrollTop=0,ir()}for(let r of Nt('[data-open="brief"]'))r.addEventListener("click",()=>dy(Ae("#brief-dialog")));for(let r of Nt("[data-scroll]"))r.addEventListener("click",()=>document.getElementById(r.dataset.scroll)?.scrollIntoView({behavior:Bt.paused?"instant":"smooth"}));for(let r of Nt("dialog"))Ae(".close-dialog",r).addEventListener("click",()=>r.close()),r.addEventListener("close",()=>{ir(),hy?.focus({preventScroll:!0})}),r.addEventListener("click",e=>{let t=r.getBoundingClientRect();e.target===r&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&r.close()});var vf="alexey-project-draft-v1",py=Nt('#brief-form input[name="service"]');function my(){return{services:py.filter(r=>r.checked).map(r=>r.value),idea:Ae("#idea").value.trim(),timing:Ae("#timing").value.trim()}}function LE(){_f.set(vf,JSON.stringify(my()))}try{let r=JSON.parse(_f.get(vf)||"null");r&&typeof r=="object"&&(py.forEach(e=>{e.checked=Array.isArray(r.services)&&r.services.includes(e.value)}),typeof r.idea=="string"&&(Ae("#idea").value=r.idea.slice(0,3e3)),typeof r.timing=="string"&&(Ae("#timing").value=r.timing.slice(0,150)))}catch{_f.remove(vf)}Ae("#brief-form").addEventListener("input",LE);function gy(){let r=my();return!r.services.length&&!r.idea?(Ae("#brief-status").textContent="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u043F\u0438\u0448\u0438\u0442\u0435 \u0438\u0434\u0435\u044E.",Ae("#idea").focus(),null):`\u0410\u043B\u0435\u043A\u0441\u0435\u0439, \u043F\u0440\u0438\u0432\u0435\u0442! \u0425\u043E\u0447\u0443 \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442.

\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: ${r.services.join(", ")||"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043C \u0432\u043C\u0435\u0441\u0442\u0435"}.${r.idea?`

\u0418\u0434\u0435\u044F:
${r.idea}`:""}${r.timing?`

\u0421\u0440\u043E\u043A\u0438: ${r.timing}`:""}`}function _y(r){let e=URL.createObjectURL(new Blob(["\uFEFF"+r],{type:"text/plain;charset=utf-8"})),t=document.createElement("a");t.href=e,t.download="\u041C\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u2014 \u0431\u0440\u0438\u0444 \u0434\u043B\u044F \u0410\u043B\u0435\u043A\u0441\u0435\u044F.txt",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),Ae("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u0444\u0430\u0439\u043B. \u041C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u044C \u0435\u0433\u043E \u043A \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044E."}Ae("#brief-form").addEventListener("submit",async r=>{r.preventDefault();let e=gy();if(e)try{await navigator.clipboard.writeText(e),Ae("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D. \u041C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435."}catch{_y(e)}});Ae(".download-brief").addEventListener("click",()=>{let r=gy();r&&_y(r)});Ae(".clear-draft").addEventListener("click",()=>{Ae("#brief-form").reset(),_f.remove(vf),Ae("#brief-status").textContent="\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043E\u0447\u0438\u0449\u0435\u043D."});var Po=window.PORTFOLIO_CONTENT&&typeof window.PORTFOLIO_CONTENT=="object"?window.PORTFOLIO_CONTENT:{};function Fm(r,e=!1){if(typeof r!="string"||!r.trim())return null;try{let t=new URL(r,location.href);if(["https:","http:"].includes(t.protocol)||e&&t.protocol==="file:"&&!/^[a-z]+:/i.test(r))return t.href}catch{}return null}function DE(r,e){let t=document.createElement("a");t.textContent=r,t.href=e,e.startsWith("https:")&&(t.target="_blank",t.rel="noopener noreferrer"),Ae("#contact-links").append(t),Ae("#contact-links").hidden=!1}var Va=Wm(Po.telegram);for(let r of Nt("[data-telegram-link]"))r.hidden=!Va,Va?r.href=Va.url:r.removeAttribute("href");Ae(".contact-invitation").hidden=!Va;Ae("[data-telegram-label]").textContent=Va?.label??"";for(let r of Nt("[data-without-telegram]"))r.hidden=!!Va;typeof Po.email=="string"&&/^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(Po.email)&&DE(Po.email,`mailto:${encodeURIComponent(Po.email)}`);var gf=Array.isArray(Po.projects)?Po.projects.filter(r=>r&&typeof r.title=="string"&&r.title.trim()&&typeof r.description=="string"):[];if(gf.length){let e=function(n){Ae("#project-title").textContent=n.title,Ae(".project-detail-description").textContent=n.description,Ae(".project-detail-tags").textContent=Array.isArray(n.tags)?n.tags.filter(l=>typeof l=="string").join(" / "):"";let i=Ae(".project-detail-image"),s=Fm(n.image,!0);i.hidden=!s,s?(i.src=s,i.alt=n.title,i.onerror=()=>{i.hidden=!0}):i.removeAttribute("src");let o=Ae(".project-detail-link"),a=Fm(n.url);o.hidden=!a,a?o.href=a:o.removeAttribute("href"),dy(Ae("#project-dialog"))},t=function(n){let i=gf.filter(s=>n==="\u0412\u0441\u0435"||s.category===n);Ae(".project-grid").replaceChildren();for(let s of i){let o=document.createElement("button");o.className="project-card";let a=Fm(s.image,!0);if(a){let u=document.createElement("img");u.src=a,u.alt=s.title,u.loading="lazy",u.onerror=()=>{u.remove()},o.append(u)}let l=document.createElement("h3");l.textContent=s.title;let c=document.createElement("p");c.textContent=s.category||"\u041F\u0440\u043E\u0435\u043A\u0442",o.append(l,c),o.addEventListener("click",()=>e(s)),Ae(".project-grid").append(o)}for(let s of Nt(".project-filters button"))s.setAttribute("aria-pressed",String(s.textContent===n));Ae(".project-count").textContent=`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432: ${i.length}`,Je.refresh()};Ae("#projects").hidden=!1;let r=["\u0412\u0441\u0435",...new Set(gf.map(n=>n.category).filter(n=>typeof n=="string"&&n))];for(let n of r){let i=document.createElement("button");i.textContent=n,i.setAttribute("aria-pressed",String(n==="\u0412\u0441\u0435")),i.addEventListener("click",()=>t(n)),Ae(".project-filters").append(i)}for(let n of Nt(".desktop-nav,#mobile-menu")){let i=document.createElement("a");i.href="#projects",i.textContent="\u0420\u0430\u0431\u043E\u0442\u044B",i.addEventListener("click",()=>Xa()),n.prepend(i)}t("\u0412\u0441\u0435")}var xy=new IntersectionObserver(r=>{for(let e of r){if(!e.isIntersecting)continue;let{target:t,rootBounds:n,boundingClientRect:i}=e;xy.unobserve(t),t.classList.remove("arrival-pending"),!(!n||Bt.paused||t.matches(":target, :focus-within"))&&i.top>=n.top+n.height*.35&&t.classList.add("scroll-arrival")}},{rootMargin:"0px 0px -64px"}),NE=document.documentElement.clientHeight;for(let r of Nt(".expertise-intro, .service-item, .collaboration-intro, .questions-list article, #contact-title"))r.getBoundingClientRect().top>=NE&&(r.classList.add("arrival-pending"),xy.observe(r));var OE=new IntersectionObserver(r=>{for(let e of r)e.target.classList.toggle("in-view",e.isIntersecting)});Nt(".service-item").forEach(r=>OE.observe(r));var UE=new IntersectionObserver(r=>{for(let e of r)if(e.isIntersecting)for(let t of Nt(".desktop-nav a"))t.hash==="#"+e.target.id?t.setAttribute("aria-current","location"):t.removeAttribute("aria-current")},{rootMargin:"-20% 0px -60% 0px"});for(let r of Nt("main > section"))r.hidden||UE.observe(r);window.addEventListener("scroll",()=>{Ae(".site-header").classList.toggle("scrolled",scrollY>30),Bt.paused||(Bt.scroll=Math.min(1,scrollY/innerHeight))},{passive:!0});document.addEventListener("pointermove",r=>{!Gm()||r.pointerType==="touch"||(Bt.tx=r.clientX/innerWidth*2-1,Bt.ty=r.clientY/innerHeight*2-1)},{passive:!0});ey(Bt,df).then(r=>{Ns=r}).catch(()=>{Ae("#scene").classList.remove("ready","archive-loading"),Ae("#scene").dataset.renderer="fallback",Ae("#scene canvas")?.remove()});var FE=new IntersectionObserver(([r])=>{xf=r.isIntersecting&&r.intersectionRatio>=.25,xf&&Io?.frame(Ds.value,!0),ir()},{threshold:[0,.25]});FE.observe(Ae(".showcase-stage"));var BE=new IntersectionObserver(([r])=>{oy=r.isIntersecting&&r.intersectionRatio>=.2,ir()},{threshold:[0,.2]});BE.observe(Ae("#experience"));var yy=Nt(".toolkit-group"),kE=new IntersectionObserver(r=>{for(let e of r){let t=yy.indexOf(e.target);e.isIntersecting&&e.intersectionRatio>=.15?km.add(t):km.delete(t)}ir()},{threshold:[0,.15]});yy.forEach(r=>kE.observe(r));var zE=new IntersectionObserver(([r])=>{Bt.heroVisible=r.isIntersecting});zE.observe(Ae(".hybrid-hero"));Vt.ticker.add((r,e)=>{Gm()&&(xf&&Io?.frame(Ds.value),Bt.heroVisible&&(Bt.time+=Math.min(e/1e3,.15),Ns?.frame(Math.min(e/1e3,.05))))});document.body.classList.toggle("motion-paused",Bt.paused);Sf(!0);document.fonts.ready.then(()=>{Ns?.resize(),Je.refresh(),document.documentElement.dataset.ready="true"});Object.defineProperty(window,"portfolioStatus",{value:()=>({paused:Bt.paused,frames:Bt.frames,heroBounds:Ns?.bounds(),documents:Ns?.documentStatus()||[],renderer:Ae("#scene").dataset.renderer,heroVisible:Bt.heroVisible,projects:gf.length,scrollScenes:Je.getAll().length,studyRenderer:Ae("#study-scene").dataset.renderer,studyProgress:Ds.value,studyFrames:Io?.frames||0,storyTime:Yi?.time()||0,storyDuration:Yi?.duration()||0,storyPhase:yf,storyPlaying:Yi?.isActive()||!1,counterTime:Ls?.time()||0,counterPlaying:Ls?.isActive()||!1,toolkitTimes:Wa.map(r=>r.totalTime()),toolkitPlaying:Wa.map(r=>r.isActive())})});})();
/*! For license information please see app.js.LEGAL.txt */
