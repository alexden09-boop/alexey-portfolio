(()=>{function Lm(r){if(typeof r!="string"||!r.trim())return null;try{let e=new URL(r);if(!["https:","http:"].includes(e.protocol)||!["t.me","telegram.me"].includes(e.hostname))return null;let t=/^\/([a-z\d_]+)\/?$/i.exec(e.pathname);return{url:e.href,label:t?"@"+t[1]:"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram"}}catch{return null}}function wr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ya={duration:.5,overwrite:!1,delay:0},Sf,An,Ft,Oi=1e8,bt=1/Oi,df=Math.PI*2,cv=df/4,uv=0,Gm=Math.sqrt,hv=Math.cos,fv=Math.sin,mn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},Ar=function(e){return typeof e=="number"},Ac=function(e){return typeof e>"u"},sr=function(e){return typeof e=="object"},ci=function(e){return e!==!1},Mf=function(){return typeof window<"u"},gc=function(e){return Yt(e)||mn(e)},Vm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Un=Array.isArray,dv=/random\([^)]+\)/g,pv=/,\s*/g,Dm=/(?:-?\.?\d|\.)+/gi,bf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,of=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Tf=/[+-]=-?[.\d]+/,mv=/[^,'"\[\]\s]+/gi,gv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,ir,pf,wf,bi={},yc={},Wm,Xm=function(e){return(yc=Co(e,bi))&&Fn},Rc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ka=function(e,t){return!t&&console.warn(e)},qm=function(e,t){return e&&(bi[e]=t)&&yc&&(yc[e]=t)||bi},Za=function(){return 0},_v={suppressEvents:!0,isStart:!0,kill:!1},_c={suppressEvents:!0,kill:!1},xv={suppressEvents:!0},Ef={},as=[],mf={},Ym,ai={},af={},Nm=30,xc=[],Af="",Rf=function(e){var t=e[0],n,i;if(sr(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xc.length;i--&&!xc[i].targetTest(t););n=xc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Lf(e[i],n)))||e.splice(i,1);return e},ls=function(e){return e._gsap||Rf(Ui(e))[0]._gsap},Cf=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():Ac(n)&&e.getAttribute&&e.getAttribute(t)||n},Yn=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},zs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},vv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Sc=function(){var e=as.length,t=as.slice(0),n,i;for(mf={},as.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pf=function(e){return!!(e._initted||e._startAt||e.add)},Km=function(e,t,n,i){as.length&&!An&&Sc(),e.render(t,n,i||!!(An&&t<0&&Pf(e))),as.length&&!An&&Sc()},Zm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(mv).length<2?t:mn(e)?e.trim():e},Jm=function(e){return e},Ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Co=function(e,t){for(var n in t)e[n]=t[n];return e},Om=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=sr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Mc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Wa=function(e){var t=e.parent||Ht,n=e.keyframes?yv(Un(e.keyframes)):Ti;if(ci(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Sv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$m=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Cc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},cs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Mv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gf=function(e,t,n,i){return e._startAt&&(An?e._startAt.revert(_c):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},bv=function r(e){return!e||e._ts&&r(e.parent)},Um=function(e){return e._repeat?Po(e._tTime,e=e.duration()+e._rDelay)*e:0},Po=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},bc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Ic=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pc(e),n._dirty||Us(n,e)),e},jm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=bc(e.rawTime(),t),(!t._dur||Qa(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),Us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},rr=function(e,t,n,i){return t.parent&&cs(t),t._start=zt((Ar(n)?n:!n&&Tc(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Ht?Ni(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$m(e,t,"_first","_last",e._sort?"_start":0),Tc(t)||(e._recent=t),i||jm(e,t),e._ts<0&&Ic(e,e._tTime),e},Qm=function(e,t){return(bi.ScrollTrigger||Rc("scrollTrigger",t))&&bi.ScrollTrigger.create(t,e)},eg=function(e,t,n,i,s){if(Of(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ym!==li.frame)return as.push(e),e._lazy=[s,i],1},Tv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Tc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Tv(e)&&!(!e._initted&&Tc(e))||(e._ts<0||e._dp._ts<0)&&!Tc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Qa(0,e._tDur,t),u=Po(l,a),e._yoyo&&u&1&&(o=1-o),u!==Po(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&eg(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&gf(e,t,n,!0),e._onUpdate&&!n&&Mi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&cs(e,1),!n&&!An&&(Mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ev=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Io=function(e,t,n,i){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Ic(e,e._tTime=e._tDur*a),e.parent&&Pc(e),n||Us(e.parent,e),e},Fm=function(e){return e instanceof On?Us(e):Io(e,e._dur)},Av={_start:0,endTime:Za,totalDuration:Za},Ni=function r(e,t,n){var i=e.labels,s=e._recent||Av,o=e.duration()>=Oi?s.endTime(!1):e._dur,a,l,c;return mn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Un(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Xa=function(e,t,n){var i=Ar(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},us=function(e,t){return e||e===0?t(e):t},Qa=function(e,t,n){return n<e?e:n>t?t:n},Rn=function(e,t){return!mn(e)||!(t=gv.exec(e))?"":t[1]},Rv=function(e,t,n){return us(n,function(i){return Qa(e,t,i)})},_f=[].slice,tg=function(e,t){return e&&sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&sr(e[0]))&&!e.nodeType&&e!==ir},Cv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return mn(i)&&!t||tg(i,1)?(s=n).push.apply(s,Ui(i)):n.push(i)})||n},Ui=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):mn(e)&&!n&&(pf||!Lo())?_f.call((t||wf).querySelectorAll(e),0):Un(e)?Cv(e,n):tg(e)?_f.call(e,0):e?[e]:[]},xf=function(e){return e=Ui(e)[0]||Ka("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ui(t,n.querySelectorAll?n:n===e?Ka("Invalid scope")||wf.createElement("div"):e)}},ng=function(e){return e.sort(function(){return .5-Math.random()})},ig=function(e){if(Yt(e))return e;var t=sr(e)?e:{each:e},n=Fs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return mn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,p){var _=(p||t).length,m=o[_],g,y,M,v,b,E,x,S,C;if(!m){if(C=t.grid==="auto"?0:(t.grid||[1,Oi])[1],!C){for(x=-Oi;x<(x=p[C++].getBoundingClientRect().left)&&C<_;);C<_&&C--}for(m=o[_]=[],g=l?Math.min(C,_)*u-.5:i%C,y=C===Oi?0:l?_*f/C-.5:i/C|0,x=0,S=Oi,E=0;E<_;E++)M=E%C-g,v=y-(E/C|0),m[E]=b=c?Math.abs(c==="y"?v:M):Gm(M*M+v*v),b>x&&(x=b),b<S&&(S=b);i==="random"&&ng(m),m.max=x-S,m.min=S,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(C>_?_-1:c?c==="y"?_/C:C:Math.max(C,_/C))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Rn(t.amount||t.each)||0,n=n&&_<0?Gv(n):n}return _=(m[h]-m.min)/m.max||0,zt(m.b+(n?n(_):_)*m.v)+m.u}},vf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ar(n)?0:Rn(n))}},rg=function(e,t){var n=Un(e),i,s;return!n&&sr(e)&&(i=n=e.radius||Oi,e.values?(e=Ui(e.values),(s=!Ar(e[0]))&&(i*=i)):e=vf(e.increment)),us(t,n?Yt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Oi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Ar(o)?u:u+Rn(o)}:vf(e))},sg=function(e,t,n,i){return us(Un(e)?!t:n===!0?!!(n=0):!i,function(){return Un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Pv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Iv=function(e,t){return function(n){return e(parseFloat(n))+(t||Rn(n))}},Lv=function(e,t,n){return ag(e,t,0,1,n)},og=function(e,t,n){return us(n,function(i){return e[~~t(i)]})},Dv=function r(e,t,n){var i=t-e;return Un(e)?og(e,r(0,e.length),t):us(n,function(s){return(i+(s-e)%i)%i+e})},Nv=function r(e,t,n){var i=t-e,s=i*2;return Un(e)?og(e,r(0,e.length-1),t):us(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Do=function(e){return e.replace(dv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(pv);return sg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ag=function(e,t,n,i,s){var o=t-e,a=i-n;return us(s,function(l){return n+((l-e)/o*a||0)})},Ov=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=mn(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Un(e)&&!Un(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(p){p*=f;var _=Math.min(h,~~p);return u[_](p-_)},n=t}else i||(e=Co(Un(e)?[]:{},e));if(!u){for(l in t)Df.call(a,e,l,"get",t[l]);s=function(p){return Bf(p,a)||(o?e.p:e)}}}return us(n,s)},Bm=function(e,t,n){var i=e.labels,s=Oi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mi=function(e,t,n){var i=e.vars,s=i[t],o=Ft,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&as.length&&Sc(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},Ga=function(e){return cs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&Mi(e,"onInterrupt"),e},Ro,lg=[],cg=function(e){if(e)if(e=!e.name&&e.default||e,Mf()||e.headless){var t=e.name,n=Yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Za,render:Bf,add:Df,kill:jv,modifier:$v,rawVars:0},o={targetTest:0,get:0,getSetter:Lc,aliases:{},register:0};if(Lo(),e!==i){if(ai[t])return;Ti(i,Ti(Mc(e,s),o)),Co(i.prototype,Co(s,Mc(e,o))),ai[i.prop=t]=i,e.targetTest&&(xc.push(i),Ef[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qm(t,i),e.register&&e.register(Fn,i,Kn)}else lg.push(e)},At=255,Va={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},lf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},ug=function(e,t,n){var i=e?Ar(e)?[e>>16,e>>8&At,e&At]:0:Va.black,s,o,a,l,c,u,f,h,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Va[e])i=Va[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Dm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=lf(l+1/3,s,o),i[1]=lf(l,s,o),i[2]=lf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(bf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Dm)||Va.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/At,o=i[1]/At,a=i[2]/At,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},hg=function(e){var t=[],n=[],i=-1;return e.split(Er).forEach(function(s){var o=s.match(ks)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},km=function(e,t,n){var i="",s=(e+i).match(Er),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=ug(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=hg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Er,"1").split(ks),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Er),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Er=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Va)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Uv=/hsl[a]?\(/,If=function(e){var t=e.join(" "),n;if(Er.lastIndex=0,Er.test(t))return n=Uv.test(t),e[1]=km(e[1],n),e[0]=km(e[0],n,hg(e[1])),!0},Ja,li=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,p=function _(m){var g=r()-i,y=m===!0,M,v,b,E;if((g>e||g<0)&&(n+=g-t),i+=g,b=i-n,M=b-o,(M>0||y)&&(E=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=M+(M>=s?0:s-M),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](b,h,E,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Wm&&(!pf&&Mf()&&(ir=pf=window,wf=ir.document||{},bi.gsap=Fn,(ir.gsapVersions||(ir.gsapVersions=[])).push(Fn.version),Xm(yc||ir.GreenSockGlobals||!ir.gsap&&ir||{}),lg.forEach(cg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ja=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ja=0,c=Za},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,g,y){var M=g?function(v,b,E,x){m(v,b,E,x),f.remove(M)}:m;return f.remove(m),a[y?"unshift":"push"](M),Lo(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},f})(),Lo=function(){return!Ja&&li.wake()},ht={},Fv=/^[\d.\-M][\d.\-,\s]/,Bv=/["']/g,kv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Bv,"").trim():+c,i=l.substr(a+1).trim();return t},zv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Hv=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[kv(t[1])]:zv(e).split(",").map(Zm)):ht._CE&&Fv.test(e)?ht._CE("",e):n},Gv=function(e){return function(t){return 1-e(1-t)}},Fs=function(e,t){return e&&(Yt(e)?e:ht[e]||Hv(e))||t},Hs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Yn(e,function(a){ht[a]=bi[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},fg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/df*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*fv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:fg(a);return s=df/s,l.config=function(c,u){return r(e,c,u)},l},uf=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:fg(n);return i.config=function(s){return r(e,s)},i};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Hs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Hs("Elastic",cf("in"),cf("out"),cf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Hs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Hs("Circ",function(r){return-(Gm(1-r*r)-1)});Hs("Sine",function(r){return r===1?1:-hv(r*cv)+1});Hs("Back",uf("in"),uf("out"),uf());ht.SteppedEase=ht.steps=bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((i*Qa(0,o,a)|0)+s)*n}}};Ya.ease=ht["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Af+=r+","+r+"Params,"});var Lf=function(e,t){this.id=uv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cf,this.set=t?t.getSetter:Lc},$a=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Io(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),Ja||li.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Io(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Lo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ic(this,n),!s._dp||s.parent||jm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&rr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Km(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Um(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Um(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Po(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?bc(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(Qa(-Math.abs(this._delay),a,s),i!==!1),Pc(this),Mv(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Lo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==bt,o;if(s)for(this._tTime-=bt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+bt){s=!1;break}o=o._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&rr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ci(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=xv);var i=An;return An=n,Pf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),An=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ni(this,n),ci(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ci(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Yt(n)?n:Jm,l=function(){var u=i.then;i.then=null,s&&s(),Yt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ga(this)},r})();Ti($a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var On=(function(r){Hm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ci(n.sortChildren),Ht&&rr(n.parent||Ht,wr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Qm(wr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Xa(0,arguments,this),this},t.from=function(i,s,o){return Xa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Xa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(i,s,Ni(this,o),1),this},t.call=function(i,s,o){return rr(this,$t.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new $t(i,o,Ni(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Wa(o).immediateRender=ci(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Wa(a).immediateRender=ci(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,p,_,m,g,y,M,v,b,E,x;if(this!==Ht&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,v=this._start,M=this._ts,g=!M,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=zt(u%m),u===l?(_=this._repeat,h=c):(b=zt(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=Po(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),E&&_&1&&(h=c-h,x=1),_!==b&&!this._lock){var S=E&&b&1,C=S===(E&&_&1);if(_<b&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(x?0:zt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Ev(this,zt(a),zt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(Mi(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=-bt);break}}d=p}else{d=this._last;for(var A=i<0?i:h;d;){if(p=d._prev,(d._act||A<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||An&&Pf(d)),h!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=A?-bt:bt);break}}d=p}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-bt)._zTime=h>=a?1:-1,this._ts))return this._start=v,Pc(this),this.render(i,s,o);this._onUpdate&&!s&&Mi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&cs(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Mi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ar(s)||(s=Ni(this,s,i)),!(i instanceof $a)){if(Un(i))return i.forEach(function(a){return o.add(a,s)}),this;if(mn(i))return this.addLabel(i,s);if(Yt(i))i=$t.delayedCall(0,i);else return this}return this!==i?rr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Oi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return mn(i)?this.removeLabel(i):Yt(i)?this.killTweensOf(i):(i.parent===this&&Cc(this,i),i===this._recent&&(this._recent=this._last),Us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(li.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ni(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=$t.delayedCall(0,s||Za,o);return a.data="isPause",this._hasPause=1,rr(this,a,Ni(this,i))},t.removePause=function(i){var s=this._first;for(i=Ni(this,i);s;)s._start===i&&s.data==="isPause"&&cs(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)os!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Ui(i),l=this._first,c=Ar(s),u;l;)l instanceof $t?vv(l._targets,a)&&(c?(!os||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Ni(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=$t.to(o,Ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Io(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ti({startAt:{time:Ni(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bm(this,Ni(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bm(this,Ni(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=zt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Us(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Oi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,rr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=zt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Io(o,o===Ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ht._ts&&(Km(Ht,bc(i,Ht)),Ym=li.frame),li.frame>=Nm){Nm+=ui.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&ui.autoSleep&&li._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||li.sleep()}}},e})($a);Ti(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vv=function(e,t,n,i,s,o,a){var l=new Kn(this._pt,e,t,0,1,Ff,null,s),c=0,u=0,f,h,d,p,_,m,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Do(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),h=n.match(of)||[];f=of.exec(i);)p=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?zs(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=of.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Tf.test(i)||g)&&(l.e=0),this._pt=l,l},Df=function(e,t,n,i,s,o,a,l,c,u){Yt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Yt(f)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Yt(f)?c?Kv:pg:Uf,p;if(mn(i)&&(~i.indexOf("random(")&&(i=Do(i)),i.charAt(1)==="="&&(p=zs(h,i)+(Rn(h)||0),(p||p===0)&&(i=p))),!u||h!==i||yf)return!isNaN(h*i)&&i!==""?(p=new Kn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Jv:mg,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&Rc(t,i),Vv.call(this,e,t,h,i,d,l||ui.stringFilter,c))},Wv=function(e,t,n,i,s){if(Yt(e)&&(e=qa(e,s,t,n,i)),!sr(e)||e.style&&e.nodeType||Un(e)||Vm(e))return mn(e)?qa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=qa(e[a],s,t,n,i);return o},Nf=function(e,t,n,i,s,o){var a,l,c,u;if(ai[e]&&(a=new ai[e]).init(s,a.rawVars?t[e]:Wv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Kn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ro))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},os,yf,Of=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:m,M=e._overwrite==="auto"&&!Sf,v=e.timeline,b=i.easeReverse||f,E,x,S,C,A,L,D,B,I,F,k,O,$;if(v&&(!h||!s)&&(s="none"),e._ease=Fs(s,Ya.ease),e._rEase=b&&(Fs(b)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||h&&!i.stagger){if(B=m[0]?ls(m[0]).harness:0,O=B&&i[B.prop],E=Mc(i,Ef),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?_c:_v),_._lazy=0),o){if(cs(e._startAt=$t.set(m,Ti({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ci(l),startAt:null,delay:0,onUpdate:c&&function(){return Mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!d)&&e._startAt.revert(_c),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),S=Ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ci(l),immediateRender:a,stagger:0,parent:g},E),O&&(S[B.prop]=O),cs(e._startAt=$t.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(_c):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ci(l)||l&&!p,x=0;x<m.length;x++){if(A=m[x],D=A._gsap||Rf(m)[x]._gsap,e._ptLookup[x]=F={},mf[D.id]&&as.length&&Sc(),k=y===m?x:y.indexOf(A),B&&(I=new B).init(A,O||E,e,k,y)!==!1&&(e._pt=C=new Kn(e._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(G){F[G]=C}),I.priority&&(L=1)),!B||O)for(S in E)ai[S]&&(I=Nf(S,E,e,k,A,y))?I.priority&&(L=1):F[S]=C=Df.call(e,A,S,"get",E[S],k,y,0,i.stringFilter);e._op&&e._op[x]&&e.kill(A,e._op[x]),M&&e._pt&&(os=e,Ht.killTweensOf(A,F,e.globalTime(t)),$=!e.parent,os=0),e._pt&&l&&(mf[D.id]=1)}L&&kf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&v.render(Oi,!0,!0)},Xv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return yf=1,e.vars[t]="+=0",Of(e,a),yf=0,l?Ka(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Kt(n)+Rn(f.e)),f.b&&(f.b=u.s+Rn(f.b))},qv=function(e,t){var n=e[0]?ls(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Co({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Yv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Un(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},qa=function(e,t,n,i,s){return Yt(e)?e.call(t,n,i,s):mn(e)&&~e.indexOf("random(")?Do(e):e},wc=Af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",dg={};Yn(wc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return dg[r]=1});wc=wc.split(",");var $t=(function(r){Hm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Wa(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Ht,y=(Un(n)||Vm(n)?Ar(n[0]):"length"in i)?[n]:Ui(n),M,v,b,E,x,S,C,A;if(a._targets=y.length?Rf(y):Ka("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||h||gc(c)||gc(u)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(M=a.timeline=new On({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),M.kill(),M.parent=M._dp=wr(a),M._start=0,h||gc(c)||gc(u)){if(E=y.length,C=h&&ig(h),sr(h))for(x in h)~wc.indexOf(x)&&(A||(A={}),A[x]=h[x]);for(v=0;v<E;v++)b=Mc(i,dg),b.stagger=0,L&&(b.easeReverse=L),A&&Co(b,A),S=y[v],b.duration=+qa(c,wr(a),v,S,y),b.delay=(+qa(u,wr(a),v,S,y)||0)-a._delay,!h&&E===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),M.to(S,b,C?C(v,S,y):0),M._ease=ht.none;M.duration()?c=u=0:a.timeline=0}else if(p){Wa(Ti(M.vars.defaults,{ease:"none"})),M._ease=Fs(p.ease||i.ease||"none");var D=0,B,I,F;if(Un(p))p.forEach(function(k){return M.to(y,k,">")}),M.duration();else{b={};for(x in p)x==="ease"||x==="easeEach"||Yv(x,p[x],b,p.easeEach);for(x in b)for(B=b[x].sort(function(k,O){return k.t-O.t}),D=0,v=0;v<B.length;v++)I=B[v],F={ease:I.e,duration:(I.t-(v?B[v-1].t:0))/100*c},F[x]=I.v,M.to(y,F,D),D+=F.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!Sf&&(os=wr(a),Ht.killTweensOf(y),os=0),rr(g,wr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!p&&a._start===zt(g._time)&&ci(f)&&bv(wr(a))&&g.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-u)||0)),m&&Qm(wr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-bt&&!u?l:i<bt?0:i,h,d,p,_,m,g,y,M;if(!c)wv(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=zt(f%_),f===l?(p=this._repeat,h=c):(m=zt(f/_),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),g=this._yoyo&&p&1,g&&(h=c-h),m=Po(this._tTime,_),h===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(zt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(eg(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=h<a;if(v!==this._inv){var b=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Mi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&gf(this,i,s,o),Mi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Mi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&gf(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&cs(this,1),!s&&!(u&&!a)&&(f||a||g)&&(Mi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ja||li.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Of(this,c),u=this._ease(c/this._dur),Xv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Ic(this,0),this.parent||$m(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ga(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,os&&os.vars.overwrite!==!0)._first||Ga(this),this.parent&&o!==this.timeline.totalDuration()&&Io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ui(i):a,c=this._ptLookup,u=this._pt,f,h,d,p,_,m,g;if((!s||s==="all")&&Sv(a,l))return s==="all"&&(this._pt=0),Ga(this);for(f=this._op=this._op||[],s!=="all"&&(mn(s)&&(_={},Yn(s,function(y){return _[y]=1}),s=_),s=qv(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){h=c[g],s==="all"?(f[g]=s,p=h,d={}):(d=f[g]=f[g]||{},p=s);for(_ in p)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Cc(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ga(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Xa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Xa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ht.killTweensOf(i,s,o)},e})($a);Ti($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var e=new On,t=_f.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Uf=function(e,t,n){return e[t]=n},pg=function(e,t,n){return e[t](n)},Kv=function(e,t,n,i){return e[t](i.fp,n)},Zv=function(e,t,n){return e.setAttribute(t,n)},Lc=function(e,t){return Yt(e[t])?pg:Ac(e[t])&&e.setAttribute?Zv:Uf},mg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Jv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ff=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Bf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},$v=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},jv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Cc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Qv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},kf=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Kn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||mg,this.d=l||this,this.set=c||Uf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Qv,this.m=n,this.mt=s,this.tween=i},r})();Yn(Af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ef[r]=1});bi.TweenMax=bi.TweenLite=$t;bi.TimelineLite=bi.TimelineMax=On;Ht=new On({sortChildren:!1,defaults:Ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=If;var Bs=[],vc={},ey=[],zm=0,ty=0,hf=function(e){return(vc[e]||ey).map(function(t){return t()})},ja=function(){var e=Date.now(),t=[];e-zm>2&&(hf("matchMediaInit"),Bs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ir.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),hf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zm=e,hf("matchMedia"))},gg=(function(){function r(t,n){this.selector=n&&xf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ty++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Yt(n)&&(s=i,i=n,n=Yt);var o=this,a=function(){var c=Ft,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=xf(s)),Ft=o,f=i.apply(o,arguments),Yt(f)&&o._r.push(f),Ft=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Yt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ft;Ft=null,n(this),Ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Bs.length;o--;)Bs[o].id===this.id&&Bs.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(ja):a.removeEventListener("change",ja)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),ny=(function(){function r(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){sr(n)||(n={matches:n});var o=new gg(0,s||this.scope),a=o.conditions={},l,c,u;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ir.matchMedia(n[c]),l&&(Bs.indexOf(o)<0&&Bs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ja):l.addEventListener("change",ja),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ec={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return cg(i)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){mn(e)&&(e=Ui(e)[0]);var s=ls(e||{}).get,o=n?Jm:Zm;return n==="native"&&(n=""),e&&(t?o((ai[t]&&ai[t].get||s)(e,t,n,i)):function(a,l,c){return o((ai[a]&&ai[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ui(e),e.length>1){var i=e.map(function(u){return Fn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=ai[t],a=ls(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Ro._pt=0,f.init(e,n?u+n:u,Ro,0,[e]),f.render(1,f),Ro._pt&&Bf(1,Ro)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Fn.to(e,Ti((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fs(e.ease,Ya.ease)),Om(Ya,e||{})},config:function(e){return Om(ui,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ai[a]&&!bi[a]&&Ka(t+" effect requires "+a+" plugin.")}),af[t]=function(a,l,c){return n(Ui(a),Ti(l||{},s),c)},o&&(On.prototype[t]=function(a,l,c){return this.add(af[t](a,sr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Fs(t)},parseEase:function(e,t){return arguments.length?Fs(e,t):ht},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),i,s;for(n.smoothChildTiming=ci(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)s=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&rr(n,i,i._start-i._delay),i=s;return rr(Ht,n,0),n},context:function(e,t){return e?new gg(e,t):Ft},matchMedia:function(e){return new ny(e)},matchMediaRefresh:function(){return Bs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ja()},addEventListener:function(e,t){var n=vc[e]||(vc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Dv,wrapYoyo:Nv,distribute:ig,random:sg,snap:rg,normalize:Lv,getUnit:Rn,clamp:Rv,splitColor:ug,toArray:Ui,selector:xf,mapRange:ag,pipe:Pv,unitize:Iv,interpolate:Ov,shuffle:ng},install:Xm,effects:af,ticker:li,updateRoot:On.updateRoot,plugins:ai,globalTimeline:Ht,core:{PropTween:Kn,globals:qm,Tween:$t,Timeline:On,Animation:$a,getCache:ls,_removeLinkedListItem:Cc,reverting:function(){return An},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return Sf=e}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ec[r]=$t[r]});li.add(On.updateRoot);Ro=Ec.to({},{duration:0});var iy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ry=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=iy(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ff=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(mn(s)&&(l={},Yn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ry(a,s)}}}},Fn=Ec.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)An?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ff("roundProps",vf),ff("modifiers"),ff("snap",rg))||Ec;$t.version=On.version=Fn.version="3.15.1";Wm=1;Mf()&&Lo();var sy=ht.Power0,oy=ht.Power1,ay=ht.Power2,ly=ht.Power3,cy=ht.Power4,uy=ht.Linear,hy=ht.Quad,fy=ht.Cubic,dy=ht.Quart,py=ht.Quint,my=ht.Strong,gy=ht.Elastic,_y=ht.Back,xy=ht.SteppedEase,vy=ht.Bounce,yy=ht.Sine,Sy=ht.Expo,My=ht.Circ;var _g,hs,Oo,Xf,Xs,by,xg,qf,Ty=function(){return typeof window<"u"},Cr={},Ws=180/Math.PI,Uo=Math.PI/180,No=Math.atan2,vg=1e8,Yf=/([A-Z])/g,wy=/(left|right|width|margin|padding|x)/i,Ey=/[\s,\(]\S/,or={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ay=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ry=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Cy=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Py=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ag=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Iy=function(e,t,n){return e.style[t]=n},Ly=function(e,t,n){return e.style.setProperty(t,n)},Dy=function(e,t,n){return e._gsap[t]=n},Ny=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Oy=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Uy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",hi=Gt+"Origin",Fy=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Cr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=or[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Rr(i,a)}):this.tfm[e]=o.x?o[e]:Rr(i,e),e===hi&&(this.tfm.zOrigin=o.zOrigin);else return or.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},Cg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},By=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Yf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=qf(),(!s||!s.isStart)&&!n[Gt]&&(Cg(n),i.zOrigin&&n[hi]&&(n[hi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pg=function(e,t){var n={target:e,props:[],revert:By,save:Fy};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ig,Gf=function(e,t){var n=hs.createElementNS?hs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hs.createElement(e);return n&&n.style?n:hs.createElement(e)},wi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Yf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Fo(t)||t,1)||""},yg="O,Moz,ms,Ms,Webkit".split(","),Fo=function(e,t,n){var i=t||Xs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(yg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?yg[o]:"")+e},Vf=function(){Ty()&&window.document&&(_g=window,hs=_g.document,Oo=hs.documentElement,Xs=Gf("div")||{style:{}},by=Gf("div"),Gt=Fo(Gt),hi=Gt+"Origin",Xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ig=!!Fo("perspective"),qf=Fn.core.reverting,Xf=1)},Sg=function(e){var t=e.ownerSVGElement,n=Gf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Oo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Oo.removeChild(n),s},Mg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Lg=function(e){var t,n;try{t=e.getBBox()}catch{t=Sg(e),n=1}return t&&(t.width||t.height)||n||(t=Sg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mg(e,["x","cx","x1"])||0,y:+Mg(e,["y","cy","y1"])||0,width:0,height:0}:t},Dg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Lg(e))},ds=function(e,t){if(t){var n=e.style,i;t in Cr&&t!==hi&&(t=Gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Yf,"-$1").toLowerCase())):n.removeAttribute(t)}},fs=function(e,t,n,i,s,o){var a=new Kn(e._pt,t,n,0,1,o?Rg:Ag);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},bg={deg:1,rad:1,turn:1},ky={grid:1,flex:1},ps=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Xs.style,l=wy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",p,_,m,g;if(i===o||!s||bg[i]||bg[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&Dg(e),(d||o==="%")&&(Cr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Kt(d?s/p*f:s/100*p);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===hs||!_.appendChild)&&(_=hs.body),m=_._gsap,m&&d&&m.width&&l&&m.time===li.time&&!m.uncache)return Kt(s/m.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,p=e[u],y?e.style[t]=y:ds(e,t)}else(d||o==="%")&&!ky[wi(_,"display")]&&(a.position=wi(e,"position")),_===e&&(a.position="static"),_.appendChild(Xs),p=Xs[u],_.removeChild(Xs),a.position="absolute";return l&&d&&(m=ls(_),m.time=li.time,m.width=_[u]),Kt(h?p*s/f:p&&s?f/p*s:0)},Rr=function(e,t,n,i){var s;return Xf||Vf(),t in or&&t!=="transform"&&(t=or[t],~t.indexOf(",")&&(t=t.split(",")[0])),Cr[t]&&t!=="transform"?(s=nl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Nc(wi(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Dc[t]&&Dc[t](e,t,n)||wi(e,t)||Cf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ps(e,t,s,n)+n:s},zy=function(e,t,n,i){if(!n||n==="none"){var s=Fo(t,e,1),o=s&&wi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=wi(e,"borderTopColor"))}var a=new Kn(this._pt,e.style,t,0,1,Ff),l=0,c=0,u,f,h,d,p,_,m,g,y,M,v,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=wi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=wi(e,t)||i,_?e.style[t]=_:ds(e,t)),u=[n,i],If(u),n=u[0],i=u[1],h=n.match(ks)||[],b=i.match(ks)||[],b.length){for(;f=ks.exec(i);)m=f[0],y=i.substring(l,f.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=zs(d,m)+v),g=parseFloat(m),M=m.substr((g+"").length),l=ks.lastIndex-M.length,M||(M=M||ui.units[t]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(d=ps(e,t,_,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Rg:Ag;return Tf.test(i)&&(a.e=0),this._pt=a,a},Tg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Tg[n]||n,t[1]=Tg[i]||i,t.join(" ")},Gy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Cr[a]&&(l=1,a=a==="transformOrigin"?hi:Gt),ds(n,a);l&&(ds(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",nl(n,1),o.uncache=1,Cg(i)))}},Dc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Kn(e._pt,t,n,0,0,Gy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},tl=[1,0,0,1,0,0],Ng={},Og=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wg=function(e){var t=wi(e,Gt);return Og(t)?tl:t.substr(7).match(bf).map(Kt)},Kf=function(e,t){var n=e._gsap||ls(e),i=e.style,s=wg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?tl:s):(s===tl&&!e.offsetParent&&e!==Oo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Oo.appendChild(e)),s=wg(e),l?i.display=l:ds(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Oo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wf=function(e,t,n,i,s,o){var a=e._gsap,l=s||Kf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],y=l[5],M=t.split(" "),v=parseFloat(M[0])||0,b=parseFloat(M[1])||0,E,x,S,C;n?l!==tl&&(x=d*m-p*_)&&(S=v*(m/x)+b*(-_/x)+(_*y-m*g)/x,C=v*(-p/x)+b*(d/x)-(d*y-p*g)/x,v=S,b=C):(E=Lg(e),v=E.x+(~M[0].indexOf("%")?v/100*E.width:v),b=E.y+(~(M[1]||M[0]).indexOf("%")?b/100*E.height:b)),i||i!==!1&&a.smooth?(g=v-c,y=b-u,a.xOffset=f+(g*d+y*_)-g,a.yOffset=h+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[hi]="0px 0px",o&&(fs(o,a,"xOrigin",c,v),fs(o,a,"yOrigin",u,b),fs(o,a,"xOffset",f,a.xOffset),fs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},nl=function(e,t){var n=e._gsap||new Lf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=wi(e,hi)||"0",u,f,h,d,p,_,m,g,y,M,v,b,E,x,S,C,A,L,D,B,I,F,k,O,$,G,R,J,ae,me,X,le;return u=f=h=_=m=g=y=M=v=0,d=p=1,n.svg=!!(e.getCTM&&Dg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),i.scale=i.rotate=i.translate="none"),x=Kf(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Wf(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,x)),b=n.xOrigin||0,E=n.yOrigin||0,x!==tl&&(L=x[0],D=x[1],B=x[2],I=x[3],u=F=x[4],f=k=x[5],x.length===6?(d=Math.sqrt(L*L+D*D),p=Math.sqrt(I*I+B*B),_=L||D?No(D,L)*Ws:0,y=B||I?No(B,I)*Ws+_:0,y&&(p*=Math.abs(Math.cos(y*Uo))),n.svg&&(u-=b-(b*L+E*B),f-=E-(b*D+E*I))):(le=x[6],me=x[7],R=x[8],J=x[9],ae=x[10],X=x[11],u=x[12],f=x[13],h=x[14],S=No(le,ae),m=S*Ws,S&&(C=Math.cos(-S),A=Math.sin(-S),O=F*C+R*A,$=k*C+J*A,G=le*C+ae*A,R=F*-A+R*C,J=k*-A+J*C,ae=le*-A+ae*C,X=me*-A+X*C,F=O,k=$,le=G),S=No(-B,ae),g=S*Ws,S&&(C=Math.cos(-S),A=Math.sin(-S),O=L*C-R*A,$=D*C-J*A,G=B*C-ae*A,X=I*A+X*C,L=O,D=$,B=G),S=No(D,L),_=S*Ws,S&&(C=Math.cos(S),A=Math.sin(S),O=L*C+D*A,$=F*C+k*A,D=D*C-L*A,k=k*C-F*A,L=O,F=$),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=Kt(Math.sqrt(L*L+D*D+B*B)),p=Kt(Math.sqrt(k*k+le*le)),S=No(F,k),y=Math.abs(S)>2e-4?S*Ws:0,v=X?1/(X<0?-X:X):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Og(wi(e,Gt)),O&&e.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Kt(d),n.scaleY=Kt(p),n.rotation=Kt(_)+a,n.rotationX=Kt(m)+a,n.rotationY=Kt(g)+a,n.skewX=y+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[hi]=Nc(c)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?Wy:Ig?Ug:Vy,n.uncache=0,n},Nc=function(e){return(e=e.split(" "))[0]+" "+e[1]},zf=function(e,t,n){var i=Rn(t);return Kt(parseFloat(t)+parseFloat(ps(e,"x",n+"px",i)))+i},Vy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ug(e,t)},Gs="0deg",el="0px",Vs=") ",Ug=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,y=n.target,M=n.zOrigin,v="",b=g==="auto"&&e&&e!==1||g===!0;if(M&&(f!==Gs||u!==Gs)){var E=parseFloat(u)*Uo,x=Math.sin(E),S=Math.cos(E),C;E=parseFloat(f)*Uo,C=Math.cos(E),o=zf(y,o,x*C*-M),a=zf(y,a,-Math.sin(E)*-M),l=zf(y,l,S*C*-M+M)}m!==el&&(v+="perspective("+m+Vs),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(b||o!==el||a!==el||l!==el)&&(v+=l!==el||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vs),c!==Gs&&(v+="rotate("+c+Vs),u!==Gs&&(v+="rotateY("+u+Vs),f!==Gs&&(v+="rotateX("+f+Vs),(h!==Gs||d!==Gs)&&(v+="skew("+h+", "+d+Vs),(p!==1||_!==1)&&(v+="scale("+p+", "+_+Vs),y.style[Gt]=v||"translate(0, 0)"},Wy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,y=n.forceCSS,M=parseFloat(o),v=parseFloat(a),b,E,x,S,C;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Uo,c*=Uo,b=Math.cos(l)*f,E=Math.sin(l)*f,x=Math.sin(l-c)*-h,S=Math.cos(l-c)*h,c&&(u*=Uo,C=Math.tan(c-u),C=Math.sqrt(1+C*C),x*=C,S*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),b*=C,E*=C)),b=Kt(b),E=Kt(E),x=Kt(x),S=Kt(S)):(b=f,S=h,E=x=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=ps(d,"x",o,"px"),v=ps(d,"y",a,"px")),(p||_||m||g)&&(M=Kt(M+p-(p*b+_*x)+m),v=Kt(v+_-(p*E+_*S)+g)),(i||s)&&(C=d.getBBox(),M=Kt(M+i/100*C.width),v=Kt(v+s/100*C.height)),C="matrix("+b+","+E+","+x+","+S+","+M+","+v+")",d.setAttribute("transform",C),y&&(d.style[Gt]=C)},Xy=function(e,t,n,i,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ws:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*vg)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*vg)%o-~~(c/o)*o)),e._pt=h=new Kn(e._pt,t,n,i,c,Ay),h.e=u,h.u="deg",e._props.push(n),h},Eg=function(e,t){for(var n in t)e[n]=t[n];return e},qy=function(e,t,n){var i=Eg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=nl(n,1),ds(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=nl(n,1),o[Gt]=c);for(l in Cr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Rn(c),p=Rn(u),f=d!==p?ps(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new Kn(e._pt,a,l,f,h-f,Hf),e._pt.u=p||0,e._props.push(l));Eg(a,i)};Yn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Dc[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(p){return Rr(a,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Zf={name:"css",register:Vf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,p,_,m,g,y,M,v,b,E,x,S,C;Xf||Vf(),this.styles=this.styles||Pg(e),S=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ai[_]&&Nf(_,t,n,i,e,s)))){if(d=typeof u,p=Dc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Do(u)),p)p(this,e,_,u,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Er.lastIndex=0,Er.test(c)||(m=Rn(c),g=Rn(u),g?m!==g&&(c=ps(e,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),S.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],mn(c)&&~c.indexOf("random(")&&(c=Do(c)),Rn(c+"")||c==="auto"||(c+=ui.units[_]||Rn(Rr(e,_))||""),(c+"").charAt(1)==="="&&(c=Rr(e,_))):c=Rr(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in or&&(_==="autoAlpha"&&(h===1&&Rr(e,"visibility")==="hidden"&&f&&(h=0),S.push("visibility",0,a.visibility),fs(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=or[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Cr,M){if(this.styles.save(_),C=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=wi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=wi(e,"perspective"),A?e.style.perspective=A:ds(e,"perspective")}f=parseFloat(u)}if(v||(b=e._gsap,b.renderTransform&&!t.parseTransform||nl(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new Kn(this._pt,a,Gt,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new Kn(this._pt,b,"scaleY",b.scaleY,(y?zs(b.scaleY,y+f):f)-b.scaleY||0,Hf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(hi,0,a[hi]),u=Hy(u),b.svg?Wf(e,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==b.zOrigin&&fs(this,b,"zOrigin",b.zOrigin,g),fs(this,a,_,Nc(c),Nc(u)));continue}else if(_==="svgOrigin"){Wf(e,u,1,E,0,this);continue}else if(_ in Ng){Xy(this,b,_,h,y?zs(h,y+u):u);continue}else if(_==="smoothOrigin"){fs(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){qy(this,u,e);continue}}else _ in a||(_=Fo(_)||_);if(M||(f||f===0)&&(h||h===0)&&!Ey.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),g=Rn(u)||(_ in ui.units?ui.units[_]:m),m!==g&&(h=ps(e,_,c,g)),this._pt=new Kn(this._pt,M?b:a,_,h,(y?zs(h,y+f):f)-h,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Py:Hf),this._pt.u=g||0,M&&C!==u?(this._pt.b=c,this._pt.e=C,this._pt.r=Cy):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Ry);else if(_ in a)zy.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Rc(_,u);continue}M||(_ in a?S.push(_,0,a[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),o.push(_)}}x&&kf(this)},render:function(e,t){if(t.tween._time||!qf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Rr,aliases:or,getSetter:function(e,t,n){var i=or[t];return i&&i.indexOf(",")<0&&(t=i),t in Cr&&t!==hi&&(e._gsap.x||Rr(e,"x"))?n&&xg===n?t==="scale"?Ny:Dy:(xg=n||{})&&(t==="scale"?Oy:Uy):e.style&&!Ac(e.style[t])?Iy:~t.indexOf("-")?Ly:Lc(e,t)},core:{_removeProperty:ds,_getMatrix:Kf}};Fn.utils.checkPrefix=Fo;Fn.core.getStyleSaver=Pg;(function(r,e,t,n){var i=Yn(r+","+e+","+t,function(s){Cr[s]=1});Yn(e,function(s){ui.units[s]="deg",Ng[s]=1}),or[i[13]]=r+","+e,Yn(n,function(s){var o=s.split(":");or[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ui.units[r]="px"});Fn.registerPlugin(Zf);var ar=Fn.registerPlugin(Zf)||Fn,JE=ar.core.Tween;function Fg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Yy(r,e,t){return e&&Fg(r.prototype,e),t&&Fg(r,t),r}var Cn,Fc,Ky,fi,ms,gs,ko,kg,qs,zo,zg,Pr,qi,Hg,Gg=function(){return Cn||typeof window<"u"&&(Cn=window.gsap)&&Cn.registerPlugin&&Cn},Vg=1,Bo=[],et=[],Yi=[],rl=Date.now,Jf=function(e,t){return t},Zy=function(){var e=zo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,Yi),et=n,Yi=i,Jf=function(o,a){return t[o](a)}},Lr=function(e,t){return~Yi.indexOf(e)&&Yi[Yi.indexOf(e)+1][t]},sl=function(e){return!!~zg.indexOf(e)},Jn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Zn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Oc="scrollLeft",Uc="scrollTop",$f=function(){return Pr&&Pr.isPressed||et.cache++},Bc=function(e,t){var n=function i(s){if(s||s===0){Vg&&fi.history.scrollRestoration!=="manual"&&(fi.history.scrollRestoration="manual");var o=Pr&&Pr.isPressed;s=i.v=Math.round(s)||(Pr&&Pr.iOS?1:0),e(s),i.cacheID=et.cache,o&&Jf("ss",s)}else(t||et.cache!==i.cacheID||Jf("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Bn={s:Oc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bc(function(r){return arguments.length?fi.scrollTo(r,on.sc()):fi.pageXOffset||ms[Oc]||gs[Oc]||ko[Oc]||0})},on={s:Uc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:Bc(function(r){return arguments.length?fi.scrollTo(Bn.sc(),r):fi.pageYOffset||ms[Uc]||gs[Uc]||ko[Uc]||0})},$n=function(e,t){return(t&&t._ctx&&t._ctx.selector||Cn.utils.toArray)(e)[0]||(typeof e=="string"&&Cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Jy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ir=function(e,t){var n=t.s,i=t.sc;sl(e)&&(e=ms.scrollingElement||gs);var s=et.indexOf(e),o=i===on.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||Jn(e,"scroll",$f);var a=et[s+o],l=a||(et[s+o]=Bc(Lr(e,n),!0)||(sl(e)?i:Bc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Cn.getProperty(e,"scrollBehavior")==="smooth"),l},kc=function(e,t,n){var i=e,s=e,o=rl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=rl();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(p){var _=a,m=s,g=rl();return(p||p===0)&&p!==i&&u(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},il=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Bg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Wg=function(){zo=Cn.core.globals().ScrollTrigger,zo&&zo.core&&Zy()},Xg=function(e){return Cn=e||Gg(),!Fc&&Cn&&typeof document<"u"&&document.body&&(fi=window,ms=document,gs=ms.documentElement,ko=ms.body,zg=[fi,ms,gs,ko],Ky=Cn.utils.clamp,Hg=Cn.core.context||function(){},qs="onpointerenter"in ko?"pointer":"mouse",kg=Zt.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qi=Zt.eventTypes=("ontouchstart"in gs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Vg=0},500),Fc=1),zo||Wg(),Fc};Bn.op=on;et.cache=0;var Zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Fc||Xg(Cn)||console.warn("Please gsap.registerPlugin(Observer)"),zo||Wg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,y=n.onDrag,M=n.onPress,v=n.onRelease,b=n.onRight,E=n.onLeft,x=n.onUp,S=n.onDown,C=n.onChangeX,A=n.onChangeY,L=n.onChange,D=n.onToggleX,B=n.onToggleY,I=n.onHover,F=n.onHoverEnd,k=n.onMove,O=n.ignoreCheck,$=n.isNormalizer,G=n.onGestureStart,R=n.onGestureEnd,J=n.onWheel,ae=n.onEnable,me=n.onDisable,X=n.onClick,le=n.scrollSpeed,he=n.capture,be=n.allowClicks,fe=n.lockAxis,Pe=n.onLockAxis;this.target=a=$n(a)||gs,this.vars=n,d&&(d=Cn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,le=le||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(fi.getComputedStyle(ko).lineHeight)||22);var ot,de,ze,se,Te,He,Be,Y=this,je=0,Nt=0,pt=n.passive||!u&&n.passive!==!1,Ke=Ir(a,Bn),Ct=Ir(a,on),Jt=Ke(),z=Ct(),gt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&qi[0]==="pointerdown",ft=sl(a),qe=a.ownerDocument||ms,_e=[0,0,0],mt=[0,0,0],Oe=0,Ge=function(){return Oe=rl()},P=function(ye,re){return(Y.event=ye)&&d&&Jy(ye.target,d)||re&&gt&&ye.pointerType!=="touch"||O&&O(ye,re)},T=function(){Y._vx.reset(),Y._vy.reset(),de.pause(),f&&f(Y)},W=function(){var ye=Y.deltaX=Bg(_e),re=Y.deltaY=Bg(mt),te=Math.abs(ye)>=i,Me=Math.abs(re)>=i;L&&(te||Me)&&L(Y,ye,re,_e,mt),te&&(b&&Y.deltaX>0&&b(Y),E&&Y.deltaX<0&&E(Y),C&&C(Y),D&&Y.deltaX<0!=je<0&&D(Y),je=Y.deltaX,_e[0]=_e[1]=_e[2]=0),Me&&(S&&Y.deltaY>0&&S(Y),x&&Y.deltaY<0&&x(Y),A&&A(Y),B&&Y.deltaY<0!=Nt<0&&B(Y),Nt=Y.deltaY,mt[0]=mt[1]=mt[2]=0),(se||ze)&&(k&&k(Y),ze&&(m&&ze===1&&m(Y),y&&y(Y),ze=0),se=!1),He&&!(He=!1)&&Pe&&Pe(Y),Te&&(J(Y),Te=!1),ot=0},oe=function(ye,re,te){_e[te]+=ye,mt[te]+=re,Y._vx.update(ye),Y._vy.update(re),c?ot||(ot=requestAnimationFrame(W)):W()},ie=function(ye,re){fe&&!Be&&(Y.axis=Be=Math.abs(ye)>Math.abs(re)?"x":"y",He=!0),Be!=="y"&&(_e[2]+=ye,Y._vx.update(ye,!0)),Be!=="x"&&(mt[2]+=re,Y._vy.update(re,!0)),c?ot||(ot=requestAnimationFrame(W)):W()},ge=function(ye){if(!P(ye,1)){ye=il(ye,u);var re=ye.clientX,te=ye.clientY,Me=re-Y.x,ne=te-Y.y,Re=Y.isDragging;Y.x=re,Y.y=te,(Re||(Me||ne)&&(Math.abs(Y.startX-re)>=s||Math.abs(Y.startY-te)>=s))&&(ze||(ze=Re?2:1),Re||(Y.isDragging=!0),ie(Me,ne))}},Se=Y.onPress=function(ce){P(ce,1)||ce&&ce.button||(Y.axis=Be=null,de.pause(),Y.isPressed=!0,ce=il(ce),je=Nt=0,Y.startX=Y.x=ce.clientX,Y.startY=Y.y=ce.clientY,Y._vx.reset(),Y._vy.reset(),Jn($?a:qe,qi[1],ge,pt,!0),Y.deltaX=Y.deltaY=0,M&&M(Y))},q=Y.onRelease=function(ce){if(!P(ce,1)){Zn($?a:qe,qi[1],ge,!0);var ye=!isNaN(Y.y-Y.startY),re=Y.isDragging,te=re&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Me=il(ce);!te&&ye&&(Y._vx.reset(),Y._vy.reset(),u&&be&&Cn.delayedCall(.08,function(){if(rl()-Oe>300&&!ce.defaultPrevented){if(ce.target.click)ce.target.click();else if(qe.createEvent){var ne=qe.createEvent("MouseEvents");ne.initMouseEvent("click",!0,!0,fi,1,Me.screenX,Me.screenY,Me.clientX,Me.clientY,!1,!1,!1,!1,0,null),ce.target.dispatchEvent(ne)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,f&&re&&!$&&de.restart(!0),ze&&W(),g&&re&&g(Y),v&&v(Y,te)}},ee=function(ye){return ye.touches&&ye.touches.length>1&&(Y.isGesturing=!0)&&G(ye,Y.isDragging)},pe=function(){return(Y.isGesturing=!1)||R(Y)},N=function(ye){if(!P(ye)){var re=Ke(),te=Ct();oe((re-Jt)*le,(te-z)*le,1),Jt=re,z=te,f&&de.restart(!0)}},Q=function(ye){if(!P(ye)){ye=il(ye,u),J&&(Te=!0);var re=(ye.deltaMode===1?l:ye.deltaMode===2?fi.innerHeight:1)*p;oe(ye.deltaX*re,ye.deltaY*re,0),f&&!$&&de.restart(!0)}},j=function(ye){if(!P(ye)){var re=ye.clientX,te=ye.clientY,Me=re-Y.x,ne=te-Y.y;Y.x=re,Y.y=te,se=!0,f&&de.restart(!0),(Me||ne)&&ie(Me,ne)}},xe=function(ye){Y.event=ye,I(Y)},ue=function(ye){Y.event=ye,F(Y)},ve=function(ye){return P(ye)||il(ye,u)&&X(Y)};de=Y._dc=Cn.delayedCall(h||.25,T).pause(),Y.deltaX=Y.deltaY=0,Y._vx=kc(0,50,!0),Y._vy=kc(0,50,!0),Y.scrollX=Ke,Y.scrollY=Ct,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Hg(this),Y.enable=function(ce){return Y.isEnabled||(Jn(ft?qe:a,"scroll",$f),o.indexOf("scroll")>=0&&Jn(ft?qe:a,"scroll",N,pt,he),o.indexOf("wheel")>=0&&Jn(a,"wheel",Q,pt,he),(o.indexOf("touch")>=0&&kg||o.indexOf("pointer")>=0)&&(Jn(a,qi[0],Se,pt,he),Jn(qe,qi[2],q),Jn(qe,qi[3],q),be&&Jn(a,"click",Ge,!0,!0),X&&Jn(a,"click",ve),G&&Jn(qe,"gesturestart",ee),R&&Jn(qe,"gestureend",pe),I&&Jn(a,qs+"enter",xe),F&&Jn(a,qs+"leave",ue),k&&Jn(a,qs+"move",j)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=se=ze=!1,Y._vx.reset(),Y._vy.reset(),Jt=Ke(),z=Ct(),ce&&ce.type&&Se(ce),ae&&ae(Y)),Y},Y.disable=function(){Y.isEnabled&&(Bo.filter(function(ce){return ce!==Y&&sl(ce.target)}).length||Zn(ft?qe:a,"scroll",$f),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Zn($?a:qe,qi[1],ge,!0)),Zn(ft?qe:a,"scroll",N,he),Zn(a,"wheel",Q,he),Zn(a,qi[0],Se,he),Zn(qe,qi[2],q),Zn(qe,qi[3],q),Zn(a,"click",Ge,!0),Zn(a,"click",ve),Zn(qe,"gesturestart",ee),Zn(qe,"gestureend",pe),Zn(a,qs+"enter",xe),Zn(a,qs+"leave",ue),Zn(a,qs+"move",j),Y.isEnabled=Y.isPressed=Y.isDragging=!1,me&&me(Y))},Y.kill=Y.revert=function(){Y.disable();var ce=Bo.indexOf(Y);ce>=0&&Bo.splice(ce,1),Pr===Y&&(Pr=0)},Bo.push(Y),$&&sl(a)&&(Pr=Y),Y.enable(_)},Yy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Zt.version="3.15.1";Zt.create=function(r){return new Zt(r)};Zt.register=Xg;Zt.getAll=function(){return Bo.slice()};Zt.getById=function(r){return Bo.filter(function(e){return e.vars.id===r})[0]};Gg()&&Cn.registerPlugin(Zt);var Ie,Wo,it,Mt,Ri,yt,hd,tu,xl,fl,al,zc,kn,ru,rd,Qn,qg,Yg,Xo,c0,jf,u0,jn,sd,h0,f0,_s,od,fd,qo,dd,xs,ad,Qf,Hc=1,zn=Date.now,ed=zn(),ki=0,ll=0,Kg=function(e,t,n){var i=Ai(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Zg=function(e,t){return t&&(!Ai(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},$y=function r(){return ll&&requestAnimationFrame(r)},Jg=function(){return ru=1},$g=function(){return ru=0},lr=function(e){return e},cl=function(e){return Math.round(e*1e5)/1e5||0},d0=function(){return typeof window<"u"},p0=function(){return Ie||d0()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},js=function(e){return!!~hd.indexOf(e)},m0=function(e){return(e==="Height"?dd:it["inner"+e])||Ri["client"+e]||yt["client"+e]},g0=function(e){return Lr(e,"getBoundingClientRect")||(js(e)?function(){return eu.width=it.innerWidth,eu.height=dd,eu}:function(){return Dr(e)})},jy=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?m0(s):e["client"+s])||0}},Qy=function(e,t){return!t||~Yi.indexOf(e)?g0(e):function(){return eu}},cr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Lr(e,n))?o()-g0(e)()[s]:js(e)?(Ri[n]||yt[n])-m0(i):e[n]-e["offset"+i])},Gc=function(e,t){for(var n=0;n<Xo.length;n+=3)(!t||~t.indexOf(Xo[n+1]))&&e(Xo[n],Xo[n+1],Xo[n+2])},Ai=function(e){return typeof e=="string"},Hn=function(e){return typeof e=="function"},ul=function(e){return typeof e=="number"},Ys=function(e){return typeof e=="object"},ol=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ho=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Go=Math.abs,_0="left",x0="top",pd="right",md="bottom",Zs="width",Js="height",dl="Right",pl="Left",ml="Top",gl="Bottom",an="padding",Fi="margin",Ko="Width",gd="Height",gn="px",Bi=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},eS=function(e){var t=Bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},jg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Dr=function(e,t){var n=t&&Bi(e)[rd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},nu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},v0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},tS=function(e){return function(t){return Ie.utils.snap(v0(e),t)}},_d=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},nS=function(e){return function(t,n){return _d(v0(e))(t,n.direction)}},Vc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Wc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Qg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xc={toggleActions:"play",anticipatePin:0},iu={top:0,left:0,center:.5,bottom:1,right:1},Jc=function(e,t){if(Ai(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in iu?iu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},qc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,p=Mt.createElement("div"),_=js(n)||Lr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?yt:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,M=y?c:u,v="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===on?pd:md)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=v,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],$c(p,0,i,y),p},$c=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ko]=1,s["border"+a+Ko]=0,s[n.p]=t+"px",Ie.set(e,s)},nt=[],ld={},vl,e0=function(){return zn()-ki>34&&(vl||(vl=requestAnimationFrame(Nr)))},Vo=function(){(!jn||!jn.isPressed||jn.startX>yt.clientWidth)&&(et.cache++,jn?vl||(vl=requestAnimationFrame(Nr)):Nr(),ki||eo("scrollStart"),ki=zn())},td=function(){f0=it.innerWidth,h0=it.innerHeight},hl=function(e){et.cache++,(e===!0||!kn&&!u0&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!sd||f0!==it.innerWidth||Math.abs(it.innerHeight-h0)>it.innerHeight*.25))&&tu.restart(!0)},Qs={},iS=[],y0=function r(){return Sn($e,"scrollEnd",r)||Ks(!0)},eo=function(e){return Qs[e]&&Qs[e].map(function(t){return t()})||iS},Ei=[],S0=function(e){for(var t=0;t<Ei.length;t+=5)(!e||Ei[t+4]&&Ei[t+4].query===e)&&(Ei[t].style.cssText=Ei[t+1],Ei[t].getBBox&&Ei[t].setAttribute("transform",Ei[t+2]||""),Ei[t+3].uncache=1)},M0=function(){et.cache++,et.forEach(function(e){return Hn(e)&&(e.rec=e())})},xd=function(e,t){var n;for(Qn=0;Qn<nt.length;Qn++)n=nt[Qn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));xs=!0,t&&S0(t),t||eo("revert")},b0=function(e,t){et.cache++,(t||!ei)&&et.forEach(function(n){return Hn(n)&&n.cacheID++&&(n.rec=0)}),Ai(e)&&(fd=e,it.history.scrollRestoration!==e&&(it.history.scrollRestoration=e))},ei,$s=0,t0,rS=function(){if(t0!==$s){var e=t0=$s;requestAnimationFrame(function(){return e===$s&&Ks(!0)})}},T0=function(){yt.appendChild(qo),dd=!jn&&qo.offsetHeight||it.innerHeight,yt.removeChild(qo)},n0=function(e){return xl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ks=function(e,t){if(Ri=Mt.documentElement,yt=Mt.body,hd=[it,Mt,Ri,yt],ki&&!e&&!xs){Mn($e,"scrollEnd",y0);return}T0(),ei=$e.isRefreshing=!0,xs||M0();var n=eo("refreshInit");c0&&$e.sort(),t||xd(),et.forEach(function(i){Hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),xs=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),ad=1,n0(!0),nt.forEach(function(i){var s=cr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),n0(!1),ad=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){Hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),b0(fd,1),tu.pause(),$s++,ei=2,Nr(2),nt.forEach(function(i){return Hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ei=$e.isRefreshing=!1,eo("refresh")},cd=0,jc=1,_l,Nr=function(e){if(e===2||!ei&&!xs){$e.isUpdating=!0,_l&&_l.update(0);var t=nt.length,n=zn(),i=n-ed>=50,s=t&&nt[0].scroll();if(jc=cd>s?-1:1,ei||(cd=s),i&&(ki&&!ru&&n-ki>200&&(ki=0,eo("scrollEnd")),al=ed,ed=n),jc<0){for(Qn=t;Qn-- >0;)nt[Qn]&&nt[Qn].update(0,i);jc=1}else for(Qn=0;Qn<t;Qn++)nt[Qn]&&nt[Qn].update(0,i);$e.isUpdating=!1}vl=0},ud=[_0,x0,md,pd,Fi+gl,Fi+dl,Fi+ml,Fi+pl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qc=ud.concat([Zs,Js,"boxSizing","max"+Ko,"max"+gd,"position",Fi,an,an+ml,an+dl,an+gl,an+pl]),sS=function(e,t,n){Yo(n);var i=e._gsap;if(i.spacerIsNative)Yo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},nd=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=ud.length,o=t.style,a=e.style,l;s--;)l=ud[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[md]=a[pd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Zs]=nu(e,Bn)+gn,o[Js]=nu(e,on)+gn,o[an]=a[Fi]=a[x0]=a[_0]="0",Yo(i),a[Zs]=a["max"+Ko]=n[Zs],a[Js]=a["max"+gd]=n[Js],a[an]=n[an],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},oS=/([A-Z])/g,Yo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(oS,"-$1").toLowerCase())}},Yc=function(e){for(var t=Qc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Qc[s],n[Qc[s]]);return i.t=e,i},aS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},eu={left:0,top:0},i0=function(e,t,n,i,s,o,a,l,c,u,f,h,d,p){Hn(e)&&(e=e(l)),Ai(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Jc("0"+e.substr(3),n):0));var _=d?d.time():0,m,g,y;if(d&&d.seek(0),isNaN(e)||(e=+e),ul(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&$c(a,n,i,!0);else{Hn(t)&&(t=t(l));var M=(e||"0").split(" "),v,b,E,x;y=$n(t,l)||yt,v=Dr(y)||{},(!v||!v.left&&!v.top)&&Bi(y).display==="none"&&(x=y.style.display,y.style.display="block",v=Dr(y),x?y.style.display=x:y.style.removeProperty("display")),b=Jc(M[0],v[i.d]),E=Jc(M[1]||"0",n),e=v[i.p]-c[i.p]-u+b+s-E,a&&$c(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var S=e+n,C=o._isStart;m="scroll"+i.d2,$c(o,S,i,C&&S>20||!C&&(f?Math.max(yt[m],Ri[m]):o.parentNode[m])<=S+1),f&&(c=Dr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+gn))}return d&&y&&(m=Dr(y),d.seek(h),g=Dr(y),d._caScrollDist=m[i.p]-g[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},lS=/(webkit|moz|length|cssText|inset)/i,r0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=Bi(e);for(o in a)!+o&&!lS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},w0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Kc=function(e,t,n){var i={};i[t.p]="+="+n,Ie.set(e,i)},s0=function(e,t){var n=Ir(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,p={};c=c||n();var _=w0(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){et.cache++,o.tween&&Nr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Ie.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Mn(e,"wheel",n.wheelHandler),$e.isTouch&&Mn(e,"touchmove",n.wheelHandler),s},$e=(function(){function r(t,n){Wo||r.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),od(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ll){this.update=this.refresh=this.kill=lr;return}n=jg(Ai(n)||ul(n)||n.nodeType?{trigger:n}:n,Xc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,M=s.once,v=s.snap,b=s.pinReparent,E=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,C=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Bn:on,L=!f&&f!==0,D=$n(n.scroller||it),B=Ie.core.getCache(D),I=js(D),F=("pinType"in n?n.pinType:Lr(D,"pinType")||I&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=L&&n.toggleActions.split(" "),$="markers"in n?n.markers:Xc.markers,G=I?0:parseFloat(Bi(D)["border"+A.p2+Ko])||0,R=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(R)},ae=jy(D,I,A),me=Qy(D,I),X=0,le=0,he=0,be=Ir(D,A),fe,Pe,ot,de,ze,se,Te,He,Be,Y,je,Nt,pt,Ke,Ct,Jt,z,gt,ft,qe,_e,mt,Oe,Ge,P,T,W,oe,ie,ge,Se,q,ee,pe,N,Q,j,xe,ue;if(R._startClamp=R._endClamp=!1,R._dir=A,m*=45,R.scroller=D,R.scroll=x?x.time.bind(x):be,de=be(),xs&&be.rec==null&&(be.rec=de),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(c0=1,n.refreshPriority===-9999&&(_l=R)),B.tweenScroll=B.tweenScroll||{top:s0(D,on),left:s0(D,Bn)},R.tweenTo=fe=B.tweenScroll[A.p],R.scrubDuration=function(te){ee=ul(te)&&te,ee?q?q.duration(te):q=Ie.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return g&&g(R)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),ge=0,l||(l=i.vars.id)),v&&((!Ys(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in yt.style&&Ie.set(I?[yt,Ri]:D,{scrollBehavior:"auto"}),et.forEach(function(te){return Hn(te)&&te.target===(I?Mt.scrollingElement||Ri:D)&&(te.smooth=!1)}),ot=Hn(v.snapTo)?v.snapTo:v.snapTo==="labels"?tS(i):v.snapTo==="labelsDirectional"?nS(i):v.directional!==!1?function(te,Me){return _d(v.snapTo)(te,zn()-le<500?0:Me.direction)}:Ie.utils.snap(v.snapTo),pe=v.duration||{min:.1,max:2},pe=Ys(pe)?fl(pe.min,pe.max):fl(pe,pe),N=Ie.delayedCall(v.delay||ee/2||.1,function(){var te=be(),Me=zn()-le<500,ne=fe.tween;if((Me||Math.abs(R.getVelocity())<10)&&!ne&&!ru&&X!==te){var Re=(te-se)/Ke,lt=i&&!L?i.totalProgress():Re,Ze=Me?0:(lt-Se)/(zn()-al)*1e3||0,Ot=Ie.utils.clamp(-Re,1-Re,Go(Ze/2)*Ze/.185),nn=Re+(v.inertia===!1?0:Ot),Ut,Tt,vt=v,fn=vt.onStart,wt=vt.onInterrupt,Ln=vt.onComplete;if(Ut=ot(nn,R),ul(Ut)||(Ut=nn),Tt=Math.max(0,Math.round(se+Ut*Ke)),te<=Te&&te>=se&&Tt!==te){if(ne&&!ne._initted&&ne.data<=Go(Tt-te))return;v.inertia===!1&&(Ot=Ut-Re),fe(Tt,{duration:pe(Go(Math.max(Go(nn-lt),Go(Ut-lt))*.185/Ze/.05||0)),ease:v.ease||"power3",data:Go(Tt-te),onInterrupt:function(){return N.restart(!0)&&wt&&Ho(R,wt)},onComplete:function(){R.update(),X=be(),i&&!L&&(q?q.resetTo("totalProgress",Ut,i._tTime/i._tDur):i.progress(Ut)),ge=Se=i&&!L?i.totalProgress():R.progress,y&&y(R),Ln&&Ho(R,Ln)}},te,Ot*Ke,Tt-te-Ot*Ke),fn&&Ho(R,fn,fe.tween)}}else R.isActive&&X!==te&&N.restart(!0)}).pause()),l&&(ld[l]=R),h=R.trigger=$n(h||d!==!0&&d),ue=h&&h._gsap&&h._gsap.stRevert,ue&&(ue=ue(R)),d=d===!0?h:$n(d),Ai(a)&&(a={targets:h,className:a}),d&&(p===!1||p===Fi||(p=!p&&d.parentNode&&d.parentNode.style&&Bi(d.parentNode).display==="flex"?!1:an),R.pin=d,Pe=Ie.core.getCache(d),Pe.spacer?Ct=Pe.pinState:(E&&(E=$n(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Pe.spacerIsNative=!!E,E&&(Pe.spacerState=Yc(E))),Pe.spacer=gt=E||Mt.createElement("div"),gt.classList.add("pin-spacer"),l&&gt.classList.add("pin-spacer-"+l),Pe.pinState=Ct=Yc(d)),n.force3D!==!1&&Ie.set(d,{force3D:!0}),R.spacer=gt=Pe.spacer,ie=Bi(d),Ge=ie[p+A.os2],qe=Ie.getProperty(d),_e=Ie.quickSetter(d,A.a,gn),nd(d,gt,ie),z=Yc(d)),$){Nt=Ys($)?jg($,Qg):Qg,Y=qc("scroller-start",l,D,A,Nt,0),je=qc("scroller-end",l,D,A,Nt,0,Y),ft=Y["offset"+A.op.d2];var ve=$n(Lr(D,"content")||D);He=this.markerStart=qc("start",l,ve,A,Nt,ft,0,x),Be=this.markerEnd=qc("end",l,ve,A,Nt,ft,0,x),x&&(xe=Ie.quickSetter([He,Be],A.a,gn)),!F&&!(Yi.length&&Lr(D,"fixedMarkers")===!0)&&(eS(I?yt:D),Ie.set([Y,je],{force3D:!0}),T=Ie.quickSetter(Y,A.a,gn),oe=Ie.quickSetter(je,A.a,gn))}if(x){var ce=x.vars.onUpdate,ye=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),ce&&ce.apply(x,ye||[])})}if(R.previous=function(){return nt[nt.indexOf(R)-1]},R.next=function(){return nt[nt.indexOf(R)+1]},R.revert=function(te,Me){if(!Me)return R.kill(!0);var ne=te!==!1||!R.enabled,Re=kn;ne!==R.isReverted&&(ne&&(Q=Math.max(be(),R.scroll.rec||0),he=R.progress,j=i&&i.progress()),He&&[He,Be,Y,je].forEach(function(lt){return lt.style.display=ne?"none":"block"}),ne&&(kn=R,R.update(ne)),d&&(!b||!R.isActive)&&(ne?sS(d,gt,Ct):nd(d,gt,Bi(d),P)),ne||R.update(ne),kn=Re,R.isReverted=ne)},R.refresh=function(te,Me,ne,Re){if(!((kn||!R.enabled)&&!Me)){if(d&&te&&ki){Mn(r,"scrollEnd",y0);return}!ei&&J&&J(R),kn=R,fe.tween&&!ne&&(fe.tween.kill(),fe.tween=0),q&&q.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(V){return V.vars.immediateRender&&V.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var lt=ae(),Ze=me(),Ot=x?x.duration():cr(D,A),nn=Ke<=.01||!Ke,Ut=0,Tt=Re||0,vt=Ys(ne)?ne.end:n.end,fn=n.endTrigger||h,wt=Ys(ne)?ne.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Ln=R.pinnedContainer=n.pinnedContainer&&$n(n.pinnedContainer,R),yi=h&&Math.max(0,nt.indexOf(R))||0,Xt=yi,rn,dn,Si,Ao,pn,qt,Di,Ha,pc,rs,w,U,Z;for($&&Ys(ne)&&(U=Ie.getProperty(Y,A.p),Z=Ie.getProperty(je,A.p));Xt-- >0;)qt=nt[Xt],qt.end||qt.refresh(0,1)||(kn=R),Di=qt.pin,Di&&(Di===h||Di===d||Di===Ln)&&!qt.isReverted&&(rs||(rs=[]),rs.unshift(qt),qt.revert(!0,!0)),qt!==nt[Xt]&&(yi--,Xt--);for(Hn(wt)&&(wt=wt(R)),wt=Kg(wt,"start",R),se=i0(wt,h,lt,A,be(),He,Y,R,Ze,G,F,Ot,x,R._startClamp&&"_startClamp")||(d?-.001:0),Hn(vt)&&(vt=vt(R)),Ai(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Ai(wt)?wt.split(" ")[0]:"")+vt:(Ut=Jc(vt.substr(2),lt),vt=Ai(wt)?wt:(x?Ie.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,se):se)+Ut,fn=h)),vt=Kg(vt,"end",R),Te=Math.max(se,i0(vt||(fn?"100% 0":Ot),fn,lt,A,be()+Ut,Be,je,R,Ze,G,F,Ot,x,R._endClamp&&"_endClamp"))||-.001,Ut=0,Xt=yi;Xt--;)qt=nt[Xt]||{},Di=qt.pin,Di&&qt.start-qt._pinPush<=se&&!x&&qt.end>0&&(rn=qt.end-(R._startClamp?Math.max(0,qt.start):qt.start),(Di===h&&qt.start-qt._pinPush<se||Di===Ln)&&isNaN(wt)&&(Ut+=rn*(1-qt.progress)),Di===d&&(Tt+=rn));if(se+=Ut,Te+=Ut,R._startClamp&&(R._startClamp+=Ut),R._endClamp&&!ei&&(R._endClamp=Te||-.001,Te=Math.min(Te,cr(D,A))),Ke=Te-se||(se-=.01)&&.001,nn&&(he=Ie.utils.clamp(0,1,Ie.utils.normalize(se,Te,Q))),R._pinPush=Tt,He&&Ut&&(rn={},rn[A.a]="+="+Ut,Ln&&(rn[A.p]="-="+be()),Ie.set([He,Be],rn)),d&&!(ad&&R.end>=cr(D,A)))rn=Bi(d),Ao=A===on,Si=be(),mt=parseFloat(qe(A.a))+Tt,!Ot&&Te>1&&(w=(I?Mt.scrollingElement||Ri:D).style,w={style:w,value:w["overflow"+A.a.toUpperCase()]},I&&Bi(yt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+A.a.toUpperCase()]="scroll")),nd(d,gt,rn),z=Yc(d),dn=Dr(d,!0),Ha=F&&Ir(D,Ao?Bn:on)(),p?(P=[p+A.os2,Ke+Tt+gn],P.t=gt,Xt=p===an?nu(d,A)+Ke+Tt:0,Xt&&(P.push(A.d,Xt+gn),gt.style.flexBasis!=="auto"&&(gt.style.flexBasis=Xt+gn)),Yo(P),Ln&&nt.forEach(function(V){V.pin===Ln&&V.vars.pinSpacing!==!1&&(V._subPinOffset=!0)}),F&&be(Q)):(Xt=nu(d,A),Xt&&gt.style.flexBasis!=="auto"&&(gt.style.flexBasis=Xt+gn)),F&&(pn={top:dn.top+(Ao?Si-se:Ha)+gn,left:dn.left+(Ao?Ha:Si-se)+gn,boxSizing:"border-box",position:"fixed"},pn[Zs]=pn["max"+Ko]=Math.ceil(dn.width)+gn,pn[Js]=pn["max"+gd]=Math.ceil(dn.height)+gn,pn[Fi]=pn[Fi+ml]=pn[Fi+dl]=pn[Fi+gl]=pn[Fi+pl]="0",pn[an]=rn[an],pn[an+ml]=rn[an+ml],pn[an+dl]=rn[an+dl],pn[an+gl]=rn[an+gl],pn[an+pl]=rn[an+pl],Jt=aS(Ct,pn,b),ei&&be(0)),i?(pc=i._initted,jf(1),i.render(i.duration(),!0,!0),Oe=qe(A.a)-mt+Ke+Tt,W=Math.abs(Ke-Oe)>1,F&&W&&Jt.splice(Jt.length-2,2),i.render(0,!0,!0),pc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),jf(0)):Oe=Ke,w&&(w.value?w.style["overflow"+A.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+A.a));else if(h&&be()&&!x)for(dn=h.parentNode;dn&&dn!==yt;)dn._pinOffset&&(se-=dn._pinOffset,Te-=dn._pinOffset),dn=dn.parentNode;rs&&rs.forEach(function(V){return V.revert(!1,!0)}),R.start=se,R.end=Te,de=ze=ei?Q:be(),!x&&!ei&&!xs&&(de<Q&&be(Q),R.scroll.rec=0),R.revert(!1,!0),le=zn(),N&&(X=-1,N.restart(!0)),kn=0,i&&L&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(nn||he!==R.progress||x||_||i&&!i._initted)&&(i&&!L&&(i._initted||he||i.vars.immediateRender!==!1)&&i.totalProgress(x&&se<-.001&&!he?Ie.utils.normalize(se,Te,0):he,!0),R.progress=nn||(de-se)/Ke===he?0:he),d&&p&&(gt._pinOffset=Math.round(R.progress*Oe)),q&&q.invalidate(),isNaN(U)||(U-=Ie.getProperty(Y,A.p),Z-=Ie.getProperty(je,A.p),Kc(Y,A,U),Kc(He,A,U-(Re||0)),Kc(je,A,Z),Kc(Be,A,Z-(Re||0))),nn&&!ei&&R.update(),u&&!ei&&!pt&&(pt=!0,u(R),pt=!1)}},R.getVelocity=function(){return(be()-ze)/(zn()-al)*1e3||0},R.endAnimation=function(){ol(R.callbackAnimation),i&&(q?q.progress(1):i.paused()?L||ol(i,R.direction<0,1):ol(i,i.reversed()))},R.labelToScroll=function(te){return i&&i.labels&&(se||R.refresh()||se)+i.labels[te]/i.duration()*Ke||0},R.getTrailing=function(te){var Me=nt.indexOf(R),ne=R.direction>0?nt.slice(0,Me).reverse():nt.slice(Me+1);return(Ai(te)?ne.filter(function(Re){return Re.vars.preventOverlaps===te}):ne).filter(function(Re){return R.direction>0?Re.end<=se:Re.start>=Te})},R.update=function(te,Me,ne){if(!(x&&!ne&&!te)){var Re=ei===!0?Q:R.scroll(),lt=te?0:(Re-se)/Ke,Ze=lt<0?0:lt>1?1:lt||0,Ot=R.progress,nn,Ut,Tt,vt,fn,wt,Ln,yi;if(Me&&(ze=de,de=x?be():Re,v&&(Se=ge,ge=i&&!L?i.totalProgress():Ze)),m&&d&&!kn&&!Hc&&ki&&(!Ze&&se<Re+(Re-ze)/(zn()-al)*m?Ze=1e-4:Ze===1&&Te>Re+(Re-ze)/(zn()-al)*m&&(Ze=.9999)),Ze!==Ot&&R.enabled){if(nn=R.isActive=!!Ze&&Ze<1,Ut=!!Ot&&Ot<1,wt=nn!==Ut,fn=wt||!!Ze!=!!Ot,R.direction=Ze>Ot?1:-1,R.progress=Ze,fn&&!kn&&(Tt=Ze&&!Ot?0:Ze===1?1:Ot===1?2:3,L&&(vt=!wt&&O[Tt+1]!=="none"&&O[Tt+1]||O[Tt],yi=i&&(vt==="complete"||vt==="reset"||vt in i))),C&&(wt||yi)&&(yi||f||!i)&&(Hn(C)?C(R):R.getTrailing(C).forEach(function(Si){return Si.endAnimation()})),L||(q&&!kn&&!Hc?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",Ze,i._tTime/i._tDur):(q.vars.totalProgress=Ze,q.invalidate().restart())):i&&i.totalProgress(Ze,!!(kn&&(le||te)))),d){if(te&&p&&(gt.style[p+A.os2]=Ge),!F)_e(cl(mt+Oe*Ze));else if(fn){if(Ln=!te&&Ze>Ot&&Te+1>Re&&Re+1>=cr(D,A),b)if(!te&&(nn||Ln)){var Xt=Dr(d,!0),rn=Re-se;r0(d,yt,Xt.top+(A===on?rn:0)+gn,Xt.left+(A===on?0:rn)+gn)}else r0(d,gt);Yo(nn||Ln?Jt:z),W&&Ze<1&&nn||_e(mt+(Ze===1&&!Ln?Oe:0))}}v&&!fe.tween&&!kn&&!Hc&&N.restart(!0),a&&(wt||M&&Ze&&(Ze<1||!Qf))&&xl(a.targets).forEach(function(Si){return Si.classList[nn||M?"add":"remove"](a.className)}),o&&!L&&!te&&o(R),fn&&!kn?(L&&(yi&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(R)),(wt||!Qf)&&(c&&wt&&Ho(R,c),k[Tt]&&Ho(R,k[Tt]),M&&(Ze===1?R.kill(!1,1):k[Tt]=0),wt||(Tt=Ze===1?1:3,k[Tt]&&Ho(R,k[Tt]))),S&&!nn&&Math.abs(R.getVelocity())>(ul(S)?S:2500)&&(ol(R.callbackAnimation),q?q.progress(1):ol(i,vt==="reverse"?1:!Ze,1))):L&&o&&!kn&&o(R)}if(oe){var dn=x?Re/x.duration()*(x._caScrollDist||0):Re;T(dn+(Y._isFlipped?1:0)),oe(dn)}xe&&xe(-Re/x.duration()*(x._caScrollDist||0))}},R.enable=function(te,Me){R.enabled||(R.enabled=!0,Mn(D,"resize",hl),I||Mn(D,"scroll",Vo),J&&Mn(r,"refreshInit",J),te!==!1&&(R.progress=he=0,de=ze=X=be()),Me!==!1&&R.refresh())},R.getTween=function(te){return te&&fe?fe.tween:q},R.setPositions=function(te,Me,ne,Re){if(x){var lt=x.scrollTrigger,Ze=x.duration(),Ot=lt.end-lt.start;te=lt.start+Ot*te/Ze,Me=lt.start+Ot*Me/Ze}R.refresh(!1,!1,{start:Zg(te,ne&&!!R._startClamp),end:Zg(Me,ne&&!!R._endClamp)},Re),R.update()},R.adjustPinSpacing=function(te){if(P&&te){var Me=P.indexOf(A.d)+1;P[Me]=parseFloat(P[Me])+te+gn,P[1]=parseFloat(P[1])+te+gn,Yo(P)}},R.disable=function(te,Me){if(te!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Me||q&&q.pause(),Q=0,Pe&&(Pe.uncache=1),J&&Sn(r,"refreshInit",J),N&&(N.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!I)){for(var ne=nt.length;ne--;)if(nt[ne].scroller===D&&nt[ne]!==R)return;Sn(D,"resize",hl),I||Sn(D,"scroll",Vo)}},R.kill=function(te,Me){R.disable(te,Me),q&&!Me&&q.kill(),l&&delete ld[l];var ne=nt.indexOf(R);ne>=0&&nt.splice(ne,1),ne===Qn&&jc>0&&Qn--,ne=0,nt.forEach(function(Re){return Re.scroller===R.scroller&&(ne=1)}),ne||ei||xs||(R.scroll.rec=0),i&&(i.scrollTrigger=null,te&&i.revert({kill:!1}),Me||i.kill()),He&&[He,Be,Y,je].forEach(function(Re){return Re.parentNode&&Re.parentNode.removeChild(Re)}),_l===R&&(_l=0),d&&(Pe&&(Pe.uncache=1),ne=0,nt.forEach(function(Re){return Re.pin===d&&ne++}),ne||(Pe.spacer=0)),n.onKill&&n.onKill(R)},nt.push(R),R.enable(!1,!1),ue&&ue(R),i&&i.add&&!Ke){var re=R.update;R.update=function(){R.update=re,et.cache++,se||Te||R.refresh()},Ie.delayedCall(.01,R.update),Ke=.01,se=Te=0}else R.refresh();d&&rS()},r.register=function(n){return Wo||(Ie=n||p0(),d0()&&window.document&&r.enable(),Wo=ll),Wo},r.defaults=function(n){if(n)for(var i in n)Xc[i]=n[i];return Xc},r.disable=function(n,i){ll=0,nt.forEach(function(o){return o[i?"kill":"disable"](n)}),Sn(it,"wheel",Vo),Sn(Mt,"scroll",Vo),clearInterval(zc),Sn(Mt,"touchcancel",lr),Sn(yt,"touchstart",lr),Vc(Sn,Mt,"pointerdown,touchstart,mousedown",Jg),Vc(Sn,Mt,"pointerup,touchend,mouseup",$g),tu.kill(),Gc(Sn);for(var s=0;s<et.length;s+=3)Wc(Sn,et[s],et[s+1]),Wc(Sn,et[s],et[s+2])},r.enable=function(){if(it=window,Mt=document,Ri=Mt.documentElement,yt=Mt.body,Ie){if(xl=Ie.utils.toArray,fl=Ie.utils.clamp,od=Ie.core.context||lr,jf=Ie.core.suppressOverwrites||lr,fd=it.history.scrollRestoration||"auto",cd=it.pageYOffset||0,Ie.core.globals("ScrollTrigger",r),yt){ll=1,qo=document.createElement("div"),qo.style.height="100vh",qo.style.position="absolute",T0(),$y(),Zt.register(Ie),r.isTouch=Zt.isTouch,_s=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),sd=Zt.isTouch===1,Mn(it,"wheel",Vo),hd=[it,Mt,Ri,yt],Ie.matchMedia?(r.matchMedia=function(u){var f=Ie.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Ie.addEventListener("matchMediaInit",function(){M0(),xd()}),Ie.addEventListener("matchMediaRevert",function(){return S0()}),Ie.addEventListener("matchMedia",function(){Ks(0,1),eo("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return td(),td})):console.warn("Requires GSAP 3.11.0 or later"),td(),Mn(Mt,"scroll",Vo);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=Ie.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Dr(yt),on.m=Math.round(a.top+on.sc())||0,Bn.m=Math.round(a.left+Bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),zc=setInterval(e0,250),Ie.delayedCall(.5,function(){return Hc=0}),Mn(Mt,"touchcancel",lr),Mn(yt,"touchstart",lr),Vc(Mn,Mt,"pointerdown,touchstart,mousedown",Jg),Vc(Mn,Mt,"pointerup,touchend,mouseup",$g),rd=Ie.utils.checkPrefix("transform"),Qc.push(rd),Wo=zn(),tu=Ie.delayedCall(.2,Ks).pause(),Xo=[Mt,"visibilitychange",function(){var u=it.innerWidth,f=it.innerHeight;Mt.hidden?(qg=u,Yg=f):(qg!==u||Yg!==f)&&hl()},Mt,"DOMContentLoaded",Ks,it,"load",Ks,it,"resize",hl],Gc(Mn),nt.forEach(function(u){return u.enable(0,1)}),l=0;l<et.length;l+=3)Wc(Sn,et[l],et[l+1]),Wc(Sn,et[l],et[l+2])}else if(Mt){var c=function u(){r.enable(),Mt.removeEventListener("DOMContentLoaded",u)};Mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Qf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(zc)||(zc=i)&&setInterval(e0,i),"ignoreMobileResize"in n&&(sd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Gc(Sn)||Gc(Mn,n.autoRefreshEvents||"none"),u0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=$n(n),o=et.indexOf(s),a=js(s);~o&&et.splice(o,a?6:2),i&&(a?Yi.unshift(it,i,yt,i,Ri,i):Yi.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Ai(n)?$n(n):n).getBoundingClientRect(),a=o[s?Zs:Js]*i||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},r.positionInViewport=function(n,i,s){Ai(n)&&(n=$n(n));var o=n.getBoundingClientRect(),a=o[s?Zs:Js],l=i==null?a/2:i in iu?iu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Qs.killAll||[];Qs={},i.forEach(function(s){return s()})}},r})();$e.version="3.15.1";$e.saveStyles=function(r){return r?xl(r).forEach(function(e){if(e&&e.style){var t=Ei.indexOf(e);t>=0&&Ei.splice(t,5),Ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),od())}}):Ei};$e.revert=function(r,e){return xd(!r,e)};$e.create=function(r,e){return new $e(r,e)};$e.refresh=function(r){return r?hl(!0):(Wo||$e.register())&&Ks(!0)};$e.update=function(r){return++et.cache&&Nr(r===!0?2:0)};$e.clearScrollMemory=b0;$e.maxScroll=function(r,e){return cr(r,e?Bn:on)};$e.getScrollFunc=function(r,e){return Ir($n(r),e?Bn:on)};$e.getById=function(r){return ld[r]};$e.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!ki};$e.snapDirectional=_d;$e.addEventListener=function(r,e){var t=Qs[r]||(Qs[r]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(r,e){var t=Qs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Ie.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Hn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Hn(s)&&(s=s(),Mn($e,"refresh",function(){return s=e.batchMax()})),xl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push($e.create(c))}),t};var o0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},id=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===Ri&&r(yt,t)},Zc={auto:1,scroll:1},cS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ie.core.getCache(s),a=zn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Zc[(l=Bi(s)).overflowY]||Zc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!js(s)&&(Zc[(l=Bi(s)).overflowY]||Zc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},E0=function(e,t,n,i){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&cS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Mn(Mt,Zt.eventTypes[0],l0,!1,!0)},onDisable:function(){return Sn(Mt,Zt.eventTypes[0],l0,!0)}})},uS=/(input|label|select|textarea)/i,a0,l0=function(e){var t=uS.test(e.target.tagName);(t||a0)&&(e._gsapAllow=!0,a0=t)},hS=function(e){Ys(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=$n(e.target)||Ri,u=Ie.core.globals().ScrollSmoother,f=u&&u.get(),h=_s&&(e.content&&$n(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Ir(c,on),p=Ir(c,Bn),_=1,m=(Zt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,g=0,y=Hn(i)?function(){return i(a)}:function(){return i||2.8},M,v,b=E0(c,e.type,!0,s),E=function(){return v=!1},x=lr,S=lr,C=function(){l=cr(c,on),S=fl(_s?1:0,l),n&&(x=fl(0,cr(c,Bn))),M=$s},A=function(){h._gsap.y=cl(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(E);var $=cl(a.deltaY/2),G=S(d.v-$);if(h&&G!==d.v+d.offset){d.offset=G-d.v;var R=cl((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",d.cacheID=et.cache,Nr()}return!0}d.offset&&A(),v=!0},D,B,I,F,k=function(){C(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Ie.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return _s&&O.type==="touchmove"&&L(O)||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){v=!1;var O=_;_=cl((it.visualViewport&&it.visualViewport.scale||1)/m),D.pause(),O!==_&&id(c,_>1.01?!0:n?!1:"x"),B=p(),I=d(),C(),M=$s},e.onRelease=e.onGestureStart=function(O,$){if(d.offset&&A(),!$)F.restart(!0);else{et.cache++;var G=y(),R,J;n&&(R=p(),J=R+G*.05*-O.velocityX/.227,G*=o0(p,R,J,cr(c,Bn)),D.vars.scrollX=x(J)),R=d(),J=R+G*.05*-O.velocityY/.227,G*=o0(d,R,J,cr(c,on)),D.vars.scrollY=S(J),D.invalidate().duration(G).play(.01),(_s&&D.vars.scrollY>=l||R>=l-1)&&Ie.to({},{onUpdate:k,duration:G})}o&&o(O)},e.onWheel=function(){D._ts&&D.pause(),zn()-g>1e3&&(M=0,g=zn())},e.onChange=function(O,$,G,R,J){if($s!==M&&C(),$&&n&&p(x(R[2]===$?B+(O.startX-O.x):p()+$-R[1])),G){d.offset&&A();var ae=J[2]===G,me=ae?I+O.startY-O.y:d()+G-J[1],X=S(me);ae&&me!==X&&(I+=X-me),d(X)}(G||$)&&Nr()},e.onEnable=function(){id(c,n?!1:"x"),$e.addEventListener("refresh",k),Mn(it,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){id(c,!0),Sn(it,"resize",k),$e.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=_s,_s&&!d()&&d(1),_s&&Ie.ticker.add(lr),F=a._dc,D=Ie.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:w0(d,d(),function(){return D.pause()})},onUpdate:Nr,onComplete:F.vars.onComplete}),a};$e.sort=function(r){if(Hn(r))return nt.sort(r);var e=it.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),nt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$e.observe=function(r){return new Zt(r)};$e.normalizeScroll=function(r){if(typeof r>"u")return jn;if(r===!0&&jn)return jn.enable();if(r===!1){jn&&jn.kill(),jn=r;return}var e=r instanceof Zt?r:hS(r);return jn&&jn.target===e.target&&jn.kill(),js(e.target)&&(jn=e),e};$e.core={_getVelocityProp:kc,_inputObserver:E0,_scrollers:et,_proxies:Yi,bridge:{ss:function(){ki||eo("scrollStart"),ki=zn()},ref:function(){return kn}}};p0()&&Ie.registerPlugin($e);var d_=0,tp=1,p_=2;var _o=1,m_=2,Ea=3,_r=0,ii=1,ri=2,xo=0,Aa=1,$l=2,np=3,ip=4,g_=5;var vo=100,__=101,x_=102,v_=103,y_=104,S_=200,M_=201,b_=202,T_=203,rp=204,sp=205,w_=206,E_=207,A_=208,R_=209,C_=210,P_=211,I_=212,L_=213,D_=214,Lu=0,Du=1,Nu=2,ua=3,Ou=4,Uu=5,Fu=6,Bu=7,op=0,N_=1,O_=2,xr=0,ap=1,lp=2,cp=3,jl=4,up=5,hp=6,fp=7,Vd="attached",U_="detached",dp=300,yo=301,Ra=302,nh=303,ih=304,fr=1e3,di=1001,ha=1002,Qt=1003,rh=1004;var So=1005;var Lt=1006,Ca=1007;var Li=1008;var vi=1009,pp=1010,mp=1011,Pa=1012,sh=1013,tr=1014,Wn=1015,si=1016,oh=1017,ah=1018,Mo=1020,gp=35902,_p=35899,xp=1021,vp=1022,Vi=1023,Vr=1026,jr=1027,lh=1028,ch=1029,Ps=1030,uh=1031;var hh=1033,Ql=33776,ec=33777,tc=33778,nc=33779,fh=35840,dh=35841,ph=35842,mh=35843,gh=36196,_h=37492,xh=37496,vh=37488,yh=37489,ic=37490,Sh=37491,Mh=37808,bh=37809,Th=37810,wh=37811,Eh=37812,Ah=37813,Rh=37814,Ch=37815,Ph=37816,Ih=37817,Lh=37818,Dh=37819,Nh=37820,Oh=37821,Uh=36492,Fh=36494,Bh=36495,kh=36283,zh=36284,rc=36285,Hh=36286;var oo=2300,ao=2301,Pu=2302,Wd=2303,Xd=2400,qd=2401,Yd=2402,F_=2500;var yp=0,sc=1,Ia=2,B_=3200;var Gh=0,k_=1,Qr="",It="srgb",In="srgb-linear",Il="linear",St="srgb";var Iu=7680;var z_=519,H_=512,G_=513,V_=514,Sp=515,W_=516,X_=517,Mp=518,bp=519,Tp=35044,Vh=35048;var wp="300 es",Hi=2e3,fa=2001;function fS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function dS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function q_(){let r=da("canvas");return r.style.display="block",r}var A0={},pa=null;function Ll(...r){let e="THREE."+r.shift();pa?pa("log",e,...r):console.log(e,...r)}function Y_(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Fe(...r){r=Y_(r);let e="THREE."+r.shift();if(pa)pa("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function We(...r){r=Y_(r);let e="THREE."+r.shift();if(pa)pa("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function so(...r){let e=r.join(" ");e in A0||(A0[e]=!0,Fe(...r))}function K_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Z_={[Lu]:Lu,[Nu]:Fu,[Ou]:Ou,[ua]:Uu,[Du]:Du,[Fu]:Nu,[Bu]:Bu,[Uu]:ua},dr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],R0=1234567,Cl=Math.PI/180,lo=180/Math.PI;function vr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function Ep(r,e){return(r%e+e)%e}function pS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function mS(r,e,t){return r!==e?(t-r)/(e-r):0}function Pl(r,e,t){return(1-t)*r+t*e}function gS(r,e,t,n){return Pl(r,e,1-Math.exp(-t*n))}function _S(r,e=1){return e-Math.abs(Ep(r,e*2)-e)}function xS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function yS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function SS(r,e){return r+Math.random()*(e-r)}function MS(r){return r*(.5-Math.random())}function bS(r){r!==void 0&&(R0=r);let e=R0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TS(r){return r*Cl}function wS(r){return r*lo}function ES(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function AS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ap(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function RS(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*u,a*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wh(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rp(r,e){if(e.constructor===Float32Array)return r;let t=Wh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Cp(r,e){if(e.constructor===Float32Array)return r;let t=Wh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Vt={DEG2RAD:Cl,RAD2DEG:lo,generateUUID:vr,clamp:at,euclideanModulo:Ep,mapLinear:pS,inverseLerp:mS,lerp:Pl,damp:gS,pingpong:_S,smoothstep:xS,smootherstep:vS,randInt:yS,randFloat:SS,randFloatSpread:MS,seededRandom:bS,degToRad:TS,radToDeg:wS,isPowerOfTwo:ES,ceilPowerOfTwo:AS,floorPowerOfTwo:Ap,setQuaternionFromProperEuler:RS,normalize:Cp,denormalize:Rp},Qe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(f!==_||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*_;m<0&&(h=-h,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+_*a}else{l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(C0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(C0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vd=new H,C0=new _n,Ye=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],y=i[1],M=i[4],v=i[7],b=i[2],E=i[5],x=i[8];return s[0]=o*_+a*y+l*b,s[3]=o*m+a*M+l*E,s[6]=o*g+a*v+l*x,s[1]=c*_+u*y+f*b,s[4]=c*m+u*M+f*E,s[7]=c*g+u*v+f*x,s[2]=h*_+d*y+p*b,s[5]=h*m+d*M+p*E,s[8]=h*g+d*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,p=t*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return so("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(e,t)),this}rotate(e){return so("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return so("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yd=new Ye,P0=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CS(){let r={enabled:!0,workingColorSpace:In,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(i.r=Gr(i.r),i.g=Gr(i.g),i.b=Gr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=ca(i.r),i.g=ca(i.g),i.b=ca(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qr?Il:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[In]:{primaries:e,whitePoint:n,transfer:Il,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:St,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),r}var rt=CS();function Gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ca(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Zo,ku=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zo===void 0&&(Zo=da("canvas")),Zo.width=e.width,Zo.height=e.height;let i=Zo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=da("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gr(t[n]/255)*255):t[n]=Gr(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},PS=0,ma=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Sd(i[o].image)):s.push(Sd(i[o]))}else s=Sd(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Sd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ku.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var IS=0,Md=new H,en=class r extends dr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=di,i=di,s=Lt,o=Li,a=Vi,l=vi,c=r.DEFAULT_ANISOTROPY,u=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=vr(),this.name="",this.source=new ma(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=dp;en.DEFAULT_ANISOTROPY=1;var xt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(d+1)/2,b=(g+1)/2,E=(u+h)/4,x=(f+_)/4,S=(p+m)/4;return M>v&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=x/n):v>b?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=S/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=x/s,i=S/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zu=class extends dr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new en({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ma(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dl=class extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hu=class extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xe=class r{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,p,_,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Jo.setFromMatrixColumn(e,0).length(),s=1/Jo.setFromMatrixColumn(e,1).length(),o=1/Jo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,d=o*f,p=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,p=a*u,_=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-_*f}else if(e.order==="XZY"){let h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LS,e,DS)}lookAt(e,t,n){let i=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),vs.crossVectors(n,Ci),vs.lengthSq()===0&&(Math.abs(n.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),vs.crossVectors(n,Ci)),vs.normalize(),su.crossVectors(Ci,vs),i[0]=vs.x,i[4]=su.x,i[8]=Ci.x,i[1]=vs.y,i[5]=su.y,i[9]=Ci.y,i[2]=vs.z,i[6]=su.z,i[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],M=n[7],v=n[11],b=n[15],E=i[0],x=i[4],S=i[8],C=i[12],A=i[1],L=i[5],D=i[9],B=i[13],I=i[2],F=i[6],k=i[10],O=i[14],$=i[3],G=i[7],R=i[11],J=i[15];return s[0]=o*E+a*A+l*I+c*$,s[4]=o*x+a*L+l*F+c*G,s[8]=o*S+a*D+l*k+c*R,s[12]=o*C+a*B+l*O+c*J,s[1]=u*E+f*A+h*I+d*$,s[5]=u*x+f*L+h*F+d*G,s[9]=u*S+f*D+h*k+d*R,s[13]=u*C+f*B+h*O+d*J,s[2]=p*E+_*A+m*I+g*$,s[6]=p*x+_*L+m*F+g*G,s[10]=p*S+_*D+m*k+g*R,s[14]=p*C+_*B+m*O+g*J,s[3]=y*E+M*A+v*I+b*$,s[7]=y*x+M*L+v*F+b*G,s[11]=y*S+M*D+v*k+b*R,s[15]=y*C+M*B+v*O+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*d-c*h,M=a*d-c*f,v=a*h-l*f,b=o*d-c*u,E=o*h-l*u,x=o*f-a*u;return t*(_*y-m*M+g*v)-n*(p*y-m*b+g*E)+i*(p*M-_*b+g*x)-s*(p*v-_*E+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=t*a-n*o,M=t*l-i*o,v=t*c-s*o,b=n*l-i*a,E=n*c-s*a,x=i*c-s*l,S=u*_-f*p,C=u*m-h*p,A=u*g-d*p,L=f*m-h*_,D=f*g-d*_,B=h*g-d*m,I=y*B-M*D+v*L+b*A-E*C+x*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return e[0]=(a*B-l*D+c*L)*F,e[1]=(i*D-n*B-s*L)*F,e[2]=(_*x-m*E+g*b)*F,e[3]=(h*E-f*x-d*b)*F,e[4]=(l*A-o*B-c*C)*F,e[5]=(t*B-i*A+s*C)*F,e[6]=(m*v-p*x-g*M)*F,e[7]=(u*x-h*v+d*M)*F,e[8]=(o*D-a*A+c*S)*F,e[9]=(n*A-t*D-s*S)*F,e[10]=(p*E-_*v+g*y)*F,e[11]=(f*v-u*E-d*y)*F,e[12]=(a*C-o*L-l*S)*F,e[13]=(t*L-n*C+i*S)*F,e[14]=(_*M-p*b-m*y)*F,e[15]=(u*b-f*M+h*y)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,p=s*f,_=o*u,m=o*f,g=a*f,y=l*c,M=l*u,v=l*f,b=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*b,i[1]=(d+v)*b,i[2]=(p-M)*b,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(h+g))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(p+M)*x,i[9]=(m-y)*x,i[10]=(1-(h+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Jo.set(i[0],i[1],i[2]).length(),a=Jo.set(i[4],i[5],i[6]).length(),l=Jo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ki.copy(this);let c=1/o,u=1/a,f=1/l;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=u,Ki.elements[5]*=u,Ki.elements[6]*=u,Ki.elements[8]*=f,Ki.elements[9]*=f,Ki.elements[10]*=f,t.setFromRotationMatrix(Ki),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Hi,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Hi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fa)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Hi,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Hi)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===fa)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Jo=new H,Ki=new Xe,LS=new H(0,0,0),DS=new H(1,1,1),vs=new H,su=new H,Ci=new H,L0=new Xe,D0=new _n,ji=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return L0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D0.setFromEuler(this),this.setFromQuaternion(D0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var Nl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},NS=0,N0=new H,$o=new _n,Or=new Xe,ou=new H,yl=new H,OS=new H,US=new _n,O0=new H(1,0,0),U0=new H(0,1,0),F0=new H(0,0,1),B0={type:"added"},FS={type:"removed"},jo={type:"childadded",child:null},bd={type:"childremoved",child:null},Dt=class r extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new H,t=new ji,n=new _n,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ye}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.multiply($o),this}rotateOnWorldAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.premultiply($o),this}rotateX(e){return this.rotateOnAxis(O0,e)}rotateY(e){return this.rotateOnAxis(U0,e)}rotateZ(e){return this.rotateOnAxis(F0,e)}translateOnAxis(e,t){return N0.copy(e).applyQuaternion(this.quaternion),this.position.add(N0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(O0,e)}translateY(e){return this.translateOnAxis(U0,e)}translateZ(e){return this.translateOnAxis(F0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ou.copy(e):ou.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Or.lookAt(yl,ou,this.up):Or.lookAt(ou,yl,this.up),this.quaternion.setFromRotationMatrix(Or),i&&(Or.extractRotation(i.matrixWorld),$o.setFromRotationMatrix(Or),this.quaternion.premultiply($o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(B0),jo.child=e,this.dispatchEvent(jo),jo.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(FS),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Or.multiply(e.parent.matrixWorld)),e.applyMatrix4(Or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(B0),jo.child=e,this.dispatchEvent(jo),jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,US,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dt.DEFAULT_UP=new H(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},BS={type:"move"},ga=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},au={h:0,s:0,l:0};function Td(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Ep(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Td(o,s,e+1/3),this.g=Td(o,s,e),this.b=Td(o,s,e-1/3)}return rt.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=J_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return rt.workingToColorSpace(Vn.copy(this),e),Math.round(at(Vn.r*255,0,255))*65536+Math.round(at(Vn.g*255,0,255))*256+Math.round(at(Vn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,i=Vn.g,s=Vn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=It){rt.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,i=Vn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(au);let n=Pl(ys.h,au.h,t),i=Pl(ys.s,au.s,t),s=Pl(ys.l,au.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new Ve;Ve.NAMES=J_;var co=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zi=new H,Ur=new H,wd=new H,Fr=new H,Qo=new H,ea=new H,k0=new H,Ed=new H,Ad=new H,Rd=new H,Cd=new xt,Pd=new xt,Id=new xt,ws=class r{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zi.subVectors(e,t),i.cross(Zi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Zi.subVectors(i,t),Ur.subVectors(n,t),wd.subVectors(e,t);let o=Zi.dot(Zi),a=Zi.dot(Ur),l=Zi.dot(wd),c=Ur.dot(Ur),u=Ur.dot(wd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fr.x),l.addScaledVector(o,Fr.y),l.addScaledVector(a,Fr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Cd.setScalar(0),Pd.setScalar(0),Id.setScalar(0),Cd.fromBufferAttribute(e,t),Pd.fromBufferAttribute(e,n),Id.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Cd,s.x),o.addScaledVector(Pd,s.y),o.addScaledVector(Id,s.z),o}static isFrontFacing(e,t,n,i){return Zi.subVectors(n,t),Ur.subVectors(e,t),Zi.cross(Ur).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),Zi.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Qo.subVectors(i,n),ea.subVectors(s,n),Ed.subVectors(e,n);let l=Qo.dot(Ed),c=ea.dot(Ed);if(l<=0&&c<=0)return t.copy(n);Ad.subVectors(e,i);let u=Qo.dot(Ad),f=ea.dot(Ad);if(u>=0&&f<=u)return t.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(Qo,o);Rd.subVectors(e,s);let d=Qo.dot(Rd),p=ea.dot(Rd);if(p>=0&&d<=p)return t.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ea,a);let m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return k0.subVectors(s,i),a=(f-u)/(f-u+(d-p)),t.copy(i).addScaledVector(k0,a);let g=1/(m+_+h);return o=_*g,a=h*g,t.copy(n).addScaledVector(Qo,o).addScaledVector(ea,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},un=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ji):Ji.fromBufferAttribute(s,o),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lu.copy(n.boundingBox)),lu.applyMatrix4(e.matrixWorld),this.union(lu)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),cu.subVectors(this.max,Sl),ta.subVectors(e.a,Sl),na.subVectors(e.b,Sl),ia.subVectors(e.c,Sl),Ss.subVectors(na,ta),Ms.subVectors(ia,na),to.subVectors(ta,ia);let t=[0,-Ss.z,Ss.y,0,-Ms.z,Ms.y,0,-to.z,to.y,Ss.z,0,-Ss.x,Ms.z,0,-Ms.x,to.z,0,-to.x,-Ss.y,Ss.x,0,-Ms.y,Ms.x,0,-to.y,to.x,0];return!Ld(t,ta,na,ia,cu)||(t=[1,0,0,0,1,0,0,0,1],!Ld(t,ta,na,ia,cu))?!1:(uu.crossVectors(Ss,Ms),t=[uu.x,uu.y,uu.z],Ld(t,ta,na,ia,cu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Br=[new H,new H,new H,new H,new H,new H,new H,new H],Ji=new H,lu=new un,ta=new H,na=new H,ia=new H,Ss=new H,Ms=new H,to=new H,Sl=new H,cu=new H,uu=new H,no=new H;function Ld(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){no.fromArray(r,s);let a=i.x*Math.abs(no.x)+i.y*Math.abs(no.y)+i.z*Math.abs(no.z),l=e.dot(no),c=t.dot(no),u=n.dot(no);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Hr=kS();function kS(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function zS(r){Math.abs(r)>65504&&Fe("DataUtils.toHalfFloat(): Value out of range."),r=at(r,-65504,65504),Hr.floatView[0]=r;let e=Hr.uint32View[0],t=e>>23&511;return Hr.baseTable[t]+((e&8388607)>>Hr.shiftTable[t])}function HS(r){let e=r>>10;return Hr.uint32View[0]=Hr.mantissaTable[Hr.offsetTable[e]+(r&1023)]+Hr.exponentTable[e],Hr.floatView[0]}var Es=class{static toHalfFloat(e){return zS(e)}static fromHalfFloat(e){return HS(e)}},ln=new H,hu=new Qe,GS=0,Pn=class extends dr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tp,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?Wh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hu.fromBufferAttribute(this,t),hu.applyMatrix3(e),this.setXY(t,hu.x,hu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Rp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cp(e,this.array)}};var Ol=class extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ul=class extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var cn=class extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}},VS=new un,Ml=new H,Dd=new H,pi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):VS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ml.subVectors(e,this.center);let t=Ml.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ml,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ml.copy(e.center).add(Dd)),this.expandByPoint(Ml.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},WS=0,zi=new Xe,Nd=new Dt,ra=new H,Pi=new un,bl=new un,bn=new H,wn=class r extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fS(e)?Ul:Ol)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,n){return zi.makeTranslation(e,t,n),this.applyMatrix4(zi),this}scale(e,t,n){return zi.makeScale(e,t,n),this.applyMatrix4(zi),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Pi.setFromBufferAttribute(s),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Pi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];bl.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(Pi.min,bl.min),Pi.expandByPoint(bn),bn.addVectors(Pi.max,bl.max),Pi.expandByPoint(bn)):(Pi.expandByPoint(bl.min),Pi.expandByPoint(bl.max))}Pi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)bn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(bn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bn.fromBufferAttribute(a,c),l&&(ra.fromBufferAttribute(e,c),bn.add(ra)),i=Math.max(i,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new H,l[C]=new H;let u=new H,f=new H,h=new H,d=new Qe,p=new Qe,_=new Qe,m=new H,g=new H;function y(C,A,L){c[C]=c[A]=c[L]=1,u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,A),h.fromBufferAttribute(n,L),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,L),f.sub(u),h.sub(u),p.sub(d),_.sub(d);let D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(m.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(D),a[C].add(m),a[A].add(m),a[L].add(m),l[C].add(g),l[A].add(g),l[L].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,A=M.length;C<A;++C){let L=M[C],D=L.start,B=L.count;for(let I=D,F=D+B;I<F;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new H,b=new H,E=new H,x=new H;function S(C){E.fromBufferAttribute(i,C),x.copy(E);let A=a[C];v.copy(A),v.sub(E.multiplyScalar(E.dot(A))).normalize(),b.crossVectors(x,A);let D=b.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,D)}for(let C=0,A=n.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new Pn(h,u,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_a=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tp,this.updateRanges=[],this.version=0,this.uuid=vr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=z0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=z0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function z0(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=vr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var ti=new H,xa=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Wh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ll("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ll("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Rp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cp(e,this.data.array)}},Od=new H,XS=new H,qS=new Ye,$i=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Od.subVectors(n,t).cross(XS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Od),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qS.getNormalMatrix(e),i=this.coplanarPoint(Od).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},YS=0,mi=class extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=Aa,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rp,this.blendDst=sp,this.blendEquation=vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Iu,this.stencilZFail=Iu,this.stencilZPass=Iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $i().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var kr=new H,Ud=new H,fu=new H,du=new H,uo=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ud.copy(e).add(t).multiplyScalar(.5),fu.copy(t).sub(e).normalize(),du.copy(this.origin).sub(Ud);let s=e.distanceTo(t)*.5,o=-this.direction.dot(fu),a=du.dot(this.direction),l=-du.dot(fu),c=du.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=s*u,f>=0)if(h>=-p)if(h<=p){let _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ud).addScaledVector(fu,h),d}intersectSphere(e,t){if(e.radius<0)return null;kr.subVectors(e.center,this.origin);let n=kr.dot(this.direction),i=kr.dot(kr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,M=n.z-o.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(u),x,S,C,A,L,D,B,I,F,k,O,$;if(v>=b&&v>=E?(C=l,D=f,F=p,$=g,l>=0?(x=c,S=u,A=h,L=d,B=_,I=m,k=y,O=M):(x=u,S=c,A=d,L=h,B=m,I=_,k=M,O=y)):b>=E?(C=c,D=h,F=_,$=y,c>=0?(x=u,S=l,A=d,L=f,B=m,I=p,k=M,O=g):(x=l,S=u,A=f,L=d,B=p,I=m,k=g,O=M)):(C=u,D=d,F=m,$=M,u>=0?(x=l,S=c,A=f,L=h,B=p,I=_,k=g,O=y):(x=c,S=l,A=h,L=f,B=_,I=p,k=y,O=g)),C===0)return null;let G=x/C,R=S/C,J=1/C,ae=A-G*D,me=L-R*D,X=B-G*F,le=I-R*F,he=k-G*$,be=O-R*$,fe=he*le-be*X,Pe=ae*be-me*he,ot=X*me-le*ae;if(i){if(fe<0||Pe<0||ot<0)return null}else if((fe<0||Pe<0||ot<0)&&(fe>0||Pe>0||ot>0))return null;let de=fe+Pe+ot;if(de===0)return null;let ze=J*(fe*D+Pe*F+ot*$);return(de>0?ze<0:ze>0)?null:this.at(ze/de,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gi=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},H0=new Xe,io=new uo,pu=new pi,G0=new H,mu=new H,gu=new H,_u=new H,Fd=new H,xu=new H,V0=new H,vu=new H,hn=class extends Dt{constructor(e=new wn,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){xu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(Fd.fromBufferAttribute(f,e),o?xu.addScaledVector(Fd,u):xu.addScaledVector(Fd.sub(t),u))}t.add(xu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pu.copy(n.boundingSphere),pu.applyMatrix4(s),io.copy(e.ray).recast(e.near),!(pu.containsPoint(io.origin)===!1&&(io.intersectSphere(pu,G0)===null||io.origin.distanceToSquared(G0)>(e.far-e.near)**2))&&(H0.copy(s).invert(),io.copy(e.ray).applyMatrix4(H0),!(n.boundingBox!==null&&io.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=M;v<b;v+=3){let E=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);i=yu(this,g,e,n,c,u,f,E,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=yu(this,o,e,n,c,u,f,y,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=M;v<b;v+=3){let E=v,x=v+1,S=v+2;i=yu(this,g,e,n,c,u,f,E,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=m,M=m+1,v=m+2;i=yu(this,o,e,n,c,u,f,y,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function KS(r,e,t,n,i,s,o,a){let l;if(e.side===ii?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===_r,a),l===null)return null;vu.copy(a),vu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(vu);return c<t.near||c>t.far?null:{distance:c,point:vu.clone(),object:r}}function yu(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,mu),r.getVertexPosition(l,gu),r.getVertexPosition(c,_u);let u=KS(r,e,t,n,mu,gu,_u,V0);if(u){let f=new H;ws.getBarycoord(V0,mu,gu,_u,f),i&&(u.uv=ws.getInterpolatedAttribute(i,a,l,c,f,new Qe)),s&&(u.uv1=ws.getInterpolatedAttribute(s,a,l,c,f,new Qe)),o&&(u.normal=ws.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new H,materialIndex:0};ws.getNormal(mu,gu,_u,h.normal),u.face=h,u.barycoord=f}return u}var Tl=new xt,W0=new xt,X0=new xt,ZS=new xt,q0=new Xe,Su=new H,Bd=new pi,Y0=new Xe,kd=new uo,Fl=class extends hn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vd,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Su),this.boundingBox.expandByPoint(Su)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Su),this.boundingSphere.expandByPoint(Su)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bd.copy(this.boundingSphere),Bd.applyMatrix4(i),e.ray.intersectsSphere(Bd)!==!1&&(Y0.copy(i).invert(),kd.copy(e.ray).applyMatrix4(Y0),!(this.boundingBox!==null&&kd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===U_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;W0.fromBufferAttribute(i.attributes.skinIndex,e),X0.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Tl.copy(t),t.set(0,0,0,0)):(Tl.set(t.x,t.y,t.z,1),t.set(0,0,0)),Tl.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=X0.getComponent(s);if(o!==0){let a=W0.getComponent(s);q0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ZS.copy(Tl).applyMatrix4(q0),o)}}return t.isVector4&&(t.w=Tl.w),t.applyMatrix4(this.bindMatrixInverse)}},va=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},As=class extends en{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Qt,u=Qt,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},K0=new Xe,JS=new Xe,Bl=class r{constructor(e=[],t=[]){this.uuid=vr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:JS;K0.multiplyMatrices(a,t[s]),K0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new As(t,e,e,Vi,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(Fe("Skeleton: No bone found with UUID:",s),o=new va),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Wr=class extends Pn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sa=new Xe,Z0=new Xe,Mu=[],J0=new un,$S=new Xe,wl=new hn,El=new pi,kl=class extends hn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$S)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sa),J0.copy(e.boundingBox).applyMatrix4(sa),this.boundingBox.union(J0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sa),El.copy(e.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(El)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(wl.geometry=this.geometry,wl.material=this.material,wl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),El.copy(this.boundingSphere),El.applyMatrix4(n),e.ray.intersectsSphere(El)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,sa),Z0.multiplyMatrices(n,sa),wl.matrixWorld=Z0,wl.raycast(e,Mu);for(let o=0,a=Mu.length;o<a;o++){let l=Mu[o];l.instanceId=s,l.object=this,t.push(l)}Mu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(i*this.count),i,this.count,lh,Wn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ro=new pi,jS=new Qe(.5,.5),bu=new H,Rs=class{constructor(e=new $i,t=new $i,n=new $i,i=new $i,s=new $i,o=new $i){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],y=s[12],M=s[13],v=s[14],b=s[15];if(i[0].setComponents(c-o,d-u,g-p,b-y).normalize(),i[1].setComponents(c+o,d+u,g+p,b+y).normalize(),i[2].setComponents(c+a,d+f,g+_,b+M).normalize(),i[3].setComponents(c-a,d-f,g-_,b-M).normalize(),n)i[4].setComponents(l,h,m,v).normalize(),i[5].setComponents(c-l,d-h,g-m,b-v).normalize();else if(i[4].setComponents(c-l,d-h,g-m,b-v).normalize(),t===Hi)i[5].setComponents(c+l,d+h,g+m,b+v).normalize();else if(t===fa)i[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){ro.center.set(0,0,0);let t=jS.distanceTo(e.center);return ro.radius=.7071067811865476+t,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(bu.x=i.normal.x>0?e.max.x:e.min.x,bu.y=i.normal.y>0?e.max.y:e.min.y,bu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$0=new Xe,Gu=class r{constructor(){this.coordinateSystem=Hi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];$0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Rs),n[i].setFromProjectionMatrix($0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Rs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var ya=class extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vu=new H,Wu=new H,j0=new Xe,Al=new uo,Tu=new pi,zd=new H,Q0=new H,ho=class extends Dt{constructor(e=new wn,t=new ya){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Vu.fromBufferAttribute(t,i-1),Wu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vu.distanceTo(Wu);e.setAttribute("lineDistance",new cn(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tu.copy(n.boundingSphere),Tu.applyMatrix4(i),Tu.radius+=s,e.ray.intersectsSphere(Tu)===!1)return;j0.copy(i).invert(),Al.copy(e.ray).applyMatrix4(j0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=u.getX(_),y=u.getX(_+1),M=wu(this,e,Al,l,g,y,_);M&&t.push(M)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(d),g=wu(this,e,Al,l,_,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=wu(this,e,Al,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=wu(this,e,Al,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function wu(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(Vu.fromBufferAttribute(a,i),Wu.fromBufferAttribute(a,s),t.distanceSqToSegment(Vu,Wu,zd,Q0)>n)return;zd.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(zd);if(!(c<e.near||c>e.far))return{distance:c,point:Q0.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var e_=new H,t_=new H,zl=class extends ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)e_.fromBufferAttribute(t,i),t_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+e_.distanceTo(t_);e.setAttribute("lineDistance",new cn(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Hl=class extends ho{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Sa=class extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},n_=new Xe,Kd=new uo,Eu=new pi,Au=new H,Xr=class extends Dt{constructor(e=new wn,t=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eu.copy(n.boundingSphere),Eu.applyMatrix4(i),Eu.radius+=s,e.ray.intersectsSphere(Eu)===!1)return;n_.copy(i).invert(),Kd.copy(e.ray).applyMatrix4(n_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,_=d;p<_;p++){let m=c.getX(p);Au.fromBufferAttribute(f,m),i_(Au,m,l,i,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,_=d;p<_;p++)Au.fromBufferAttribute(f,p),i_(Au,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function i_(r,e,t,n,i,s,o){let a=Kd.distanceSqToPoint(r);if(a<t){let l=new H;Kd.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Gl=class extends en{constructor(e=[],t=yo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qi=class extends en{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qr=class extends en{constructor(e,t,n=tr,i,s,o,a=Qt,l=Qt,c,u=Vr,f=1){if(u!==Vr&&u!==jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ma(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vl=class extends qr{constructor(e,t=tr,n=yo,i,s,o=Qt,a=Qt,l,c=Vr){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wl=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ma=class r extends wn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(f,2));function p(_,m,g,y,M,v,b,E,x,S,C){let A=v/x,L=b/S,D=v/2,B=b/2,I=E/2,F=x+1,k=S+1,O=0,$=0,G=new H;for(let R=0;R<k;R++){let J=R*L-B;for(let ae=0;ae<F;ae++){let me=ae*A-D;G[_]=me*y,G[m]=J*M,G[g]=I,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[g]=E>0?1:-1,u.push(G.x,G.y,G.z),f.push(ae/x),f.push(1-R/S),O+=1}}for(let R=0;R<S;R++)for(let J=0;J<x;J++){let ae=h+J+F*R,me=h+J+F*(R+1),X=h+(J+1)+F*(R+1),le=h+(J+1)+F*R;l.push(ae,me,le),l.push(me,X,le),$+=6}a.addGroup(d,$,C),d+=$,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var pr=class r extends wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*h-o;for(let M=0;M<c;M++){let v=M*f-s;p.push(v,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,v=y+c*(g+1),b=y+1+c*(g+1),E=y+1+c*g;d.push(M,v,E),d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new cn(p,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function bo(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(r_(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(r_(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Xn(r){let e={};for(let t=0;t<r.length;t++){let n=bo(r[t]);for(let i in n)e[i]=n[i]}return e}function r_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function QS(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Pp(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var $_={clone:bo,merge:Xn},eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_i=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=QS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(i.value);break;case"v2":this.uniforms[n].value=new Qe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xu=class extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mr=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ni=class extends mr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return so('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){so('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qu=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yu=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ts(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Rl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function nM(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function s_(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function iM(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var gr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ku=class extends gr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xd,endingEnd:Xd}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qd:s=e,a=2*t-n;break;case Yd:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qd:o=e,l=2*n-t;break;case Yd:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,M=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let b=0;b!==a;++b)s[b]=g*o[u+b]+y*o[c+b]+M*o[l+b]+v*o[f+b];return s}},Zu=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},Ju=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},$u=class extends gr{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-t)/(i-t),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let h=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*h+p*2,y=f[g],M=f[g+1],v=e*h+p*2,b=u[v],E=u[v+1],x=sM(n,t,y,b,i);s[p]=j_(x,_,M,E,m)}return s}};function j_(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function rM(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function sM(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){let a=j_(s,e,t,n,i)-r;if(Math.abs(a)<1e-10)break;let l=rM(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var xi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Rl(e.settings)&&(n.settings={inTangents:Ts(e.settings.inTangents,Array),outTangents:Ts(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $u(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case Pu:t=this.InterpolantFactoryMethodSmooth;break;case Wd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Pu;case this.InterpolantFactoryMethodBezier:return Wd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Rl(this.settings)&&(o_(this.settings.inTangents,e),o_(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Rl(this.settings)&&(a_(this.settings.inTangents,e),a_(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&dS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pu,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){let _=t[f+p];if(_!==t[h+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Rl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function o_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function a_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=ao;var Yr=class extends xi{constructor(e,t,n){super(e,t,n)}};Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=oo;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends xi{constructor(e,t,n,i){super(e,t,n,i)}};Xl.prototype.ValueTypeName="color";var Kr=class extends xi{constructor(e,t,n,i){super(e,t,n,i)}};Kr.prototype.ValueTypeName="number";var ju=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)_n.slerpFlat(s,0,o,c-a,o,c,l);return s}},Zr=class extends xi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ju(this.times,this.values,this.getValueSize(),e)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends xi{constructor(e,t,n){super(e,t,n)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=oo;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends xi{constructor(e,t,n,i){super(e,t,n,i)}};Cs.prototype.ValueTypeName="vector";var ql=class{constructor(e="",t=-1,n=[],i=F_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(aM(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(xi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=nM(l);l=s_(l,1,u),c=s_(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Kr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let f=u[1],h=i[f];h||(i[f]=h=[]),h.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function oM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kr;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return Xl;case"quaternion":return Zr;case"bool":case"boolean":return Yr;case"string":return Jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function aM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=oM(r.type);if(r.times===void 0){let n=[],i=[];iM(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Rl(r.settings)&&(t.settings={inTangents:Ts(r.settings.inTangents,Float32Array),outTangents:Ts(r.settings.outTangents,Float32Array)}),t}var hr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(l_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!l_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function l_(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Qu=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Q_=new Qu,er=class{constructor(e){this.manager=e!==void 0?e:Q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};er.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr={},Zd=class extends Error{constructor(e,t){super(e),this.response=t}},fo=class extends er{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=hr.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(zr[e]!==void 0){zr[e].push({onLoad:t,onProgress:n,onError:i});return}zr[e]=[],zr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=zr[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0,_=0,m=new ReadableStream({start(g){y();function y(){f.read().then(({done:M,value:v})=>{if(M)g.close();else{_+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let E=0,x=u.length;E<x;E++){let S=u[E];S.onProgress&&S.onProgress(b)}g.enqueue(v),y()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Zd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{hr.add(`file:${e}`,c);let u=zr[e];delete zr[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=zr[e];if(u===void 0)throw this.manager.itemError(e),c;delete zr[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var oa=new WeakMap,eh=class extends er{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=hr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=oa.get(o);f===void 0&&(f=[],oa.set(o,f)),f.push({onLoad:t,onError:i})}return o}let a=da("img");function l(){u(),t&&t(this);let f=oa.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}oa.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),hr.remove(`image:${e}`);let h=oa.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onError&&p.onError(f)}oa.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),hr.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Yl=class extends er{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new As,a=new fo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){i!==void 0?i(u):We(u);return}s._applyTexData(o,c),t&&t(o,c)},n,i),o}createDataTexture(e){let t=new As;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:di,e.wrapT=t.wrapT!==void 0?t.wrapT:di,e.magFilter=t.magFilter!==void 0?t.magFilter:Lt,e.minFilter=t.minFilter!==void 0?t.minFilter:Lt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Li),t.mipmapCount===1&&(e.minFilter=Lt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},po=class extends er{constructor(e){super(e)}load(e,t,n,i){let s=new en,o=new eh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},ba=class extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Hd=new Xe,c_=new H,u_=new H,Ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;c_.setFromMatrixPosition(e.matrixWorld),t.position.copy(c_),u_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(u_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Hd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hd,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===fa||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ru=new H,Cu=new _n,ur=new H,Kl=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ru,Cu,ur),ur.x===1&&ur.y===1&&ur.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,Cu,ur.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ru,Cu,ur),ur.x===1&&ur.y===1&&ur.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,Cu,ur.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bs=new H,h_=new Qe,f_=new Qe,jt=class extends Kl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,t){return this.getViewBounds(e,h_,f_),t.subVectors(f_,h_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jd=class extends Ta{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=lo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Zl=class extends ba{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Jd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},$d=class extends Ta{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},mo=class extends ba{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $d}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},go=class extends Kl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jd=class extends Ta{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gi=class extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new jd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $r=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Gd=new WeakMap,Jl=class extends er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=hr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{Gd.has(o)===!0?(i&&i(Gd.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return hr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Gd.set(l,c),hr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});hr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var aa=-90,la=1,wa=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jt(aa,la,e,t);i.layers=this.layers,this.add(i);let s=new jt(aa,la,e,t);s.layers=this.layers,this.add(s);let o=new jt(aa,la,e,t);o.layers=this.layers,this.add(o);let a=new jt(aa,la,e,t);a.layers=this.layers,this.add(a);let l=new jt(aa,la,e,t);l.layers=this.layers,this.add(l);let c=new jt(aa,la,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},th=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ip="\\[\\]\\.:\\/",lM=new RegExp("["+Ip+"]","g"),Lp="[^"+Ip+"]",cM="[^"+Ip.replace("\\.","")+"]",uM=/((?:WC+[\/:])*)/.source.replace("WC",Lp),hM=/(WCOD+)?/.source.replace("WCOD",cM),fM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lp),dM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lp),pM=new RegExp("^"+uM+hM+fM+dM+"$"),mM=["material","materials","bones","map"],Qd=class{constructor(e,t,n){let i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lM,"")}static parseTrackName(e){let t=pM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);mM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Qd;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tA=new Float32Array(1);var ep=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function Dp(r,e,t,n){let i=gM(n);switch(t){case xp:return r*e;case lh:return r*e/i.components*i.byteLength;case ch:return r*e/i.components*i.byteLength;case Ps:return r*e*2/i.components*i.byteLength;case uh:return r*e*2/i.components*i.byteLength;case vp:return r*e*3/i.components*i.byteLength;case Vi:return r*e*4/i.components*i.byteLength;case hh:return r*e*4/i.components*i.byteLength;case Ql:case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dh:case mh:return Math.max(r,16)*Math.max(e,8)/4;case fh:case ph:return Math.max(r,8)*Math.max(e,8)/2;case gh:case _h:case vh:case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xh:case ic:case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Uh:case Fh:case Bh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kh:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rc:case Hh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gM(r){switch(r){case vi:case pp:return{byteLength:1,components:1};case Pa:case mp:case si:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case tr:case sh:case Wn:return{byteLength:4,components:1};case gp:case _p:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sx(){let r=null,e=!1,t=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),t(s,o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function xM(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yM=`#ifdef USE_ALPHAHASH
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
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wM=`#ifdef USE_AOMAP
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
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM=`#ifdef USE_BATCHING
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LM=`#ifdef USE_IRIDESCENCE
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
#endif`,DM=`#ifdef USE_BUMPMAP
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,GM=`#define PI 3.141592653589793
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
} // validated`,VM=`vec3 transformedNormal = objectNormal;
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
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
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
#endif`,tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sb=`#ifdef USE_GRADIENTMAP
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
}`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ub=`#ifdef USE_ENVMAP
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
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mb=`PhysicalMaterial material;
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
#endif`,gb=`uniform sampler2D dfgLUT;
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
}`,_b=`
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
#endif`,xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rb=`#if defined( USE_POINTS_UV )
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
#endif`,Cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lb=`#if defined( USE_MORPHCOLORS )
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
#endif`,Db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hb=`#ifdef USE_NORMALMAP
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
#endif`,Gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iT=`float getShadowMask() {
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
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,oT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aT=`#ifdef USE_SKINNING
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
#endif`,lT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#ifdef USE_TRANSMISSION
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform float backgroundBlurriness;
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`#include <common>
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
}`,wT=`#if DEPTH_PACKING == 3200
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
}`,ET=`#define DISTANCE
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
}`,AT=`#define DISTANCE
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`uniform float scale;
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
}`,IT=`uniform vec3 diffuse;
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
}`,LT=`#include <common>
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
}`,DT=`uniform vec3 diffuse;
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
}`,NT=`#define LAMBERT
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
}`,OT=`#define LAMBERT
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
}`,UT=`#define MATCAP
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
}`,FT=`#define MATCAP
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
}`,BT=`#define NORMAL
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
}`,kT=`#define NORMAL
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
}`,zT=`#define PHONG
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
}`,HT=`#define PHONG
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
}`,GT=`#define STANDARD
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
}`,VT=`#define STANDARD
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
}`,WT=`#define TOON
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
}`,XT=`#define TOON
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
}`,qT=`uniform float size;
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
}`,YT=`uniform vec3 diffuse;
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
}`,KT=`#include <common>
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
}`,ZT=`uniform vec3 color;
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
}`,JT=`uniform float rotation;
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
}`,$T=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:vM,alphahash_pars_fragment:yM,alphamap_fragment:SM,alphamap_pars_fragment:MM,alphatest_fragment:bM,alphatest_pars_fragment:TM,aomap_fragment:wM,aomap_pars_fragment:EM,batching_pars_vertex:AM,batching_vertex:RM,begin_vertex:CM,beginnormal_vertex:PM,bsdfs:IM,iridescence_fragment:LM,bumpmap_pars_fragment:DM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:UM,clipping_planes_vertex:FM,color_fragment:BM,color_pars_fragment:kM,color_pars_vertex:zM,color_vertex:HM,common:GM,defaultnormal_vertex:VM,displacementmap_pars_vertex:WM,displacementmap_vertex:XM,emissivemap_fragment:qM,emissivemap_pars_fragment:YM,colorspace_fragment:KM,colorspace_pars_fragment:ZM,envmap_fragment:JM,envmap_common_pars_fragment:$M,envmap_pars_fragment:jM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:ub,envmap_vertex:eb,fog_vertex:tb,fog_pars_vertex:nb,fog_fragment:ib,fog_pars_fragment:rb,gradientmap_pars_fragment:sb,lightmap_pars_fragment:ob,lights_lambert_fragment:ab,lights_lambert_pars_fragment:lb,lights_pars_begin:cb,lights_toon_fragment:hb,lights_toon_pars_fragment:fb,lights_phong_fragment:db,lights_phong_pars_fragment:pb,lights_physical_fragment:mb,lights_physical_pars_fragment:gb,lights_fragment_begin:_b,lights_fragment_maps:xb,lights_fragment_end:vb,lightprobes_pars_fragment:yb,logdepthbuf_fragment:Sb,logdepthbuf_pars_fragment:Mb,logdepthbuf_pars_vertex:bb,logdepthbuf_vertex:Tb,map_fragment:wb,map_pars_fragment:Eb,map_particle_fragment:Ab,map_particle_pars_fragment:Rb,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:Pb,morphinstance_vertex:Ib,morphcolor_vertex:Lb,morphnormal_vertex:Db,morphtarget_pars_vertex:Nb,morphtarget_vertex:Ob,normal_fragment_begin:Ub,normal_fragment_maps:Fb,normal_pars_fragment:Bb,normal_pars_vertex:kb,normal_vertex:zb,normalmap_pars_fragment:Hb,clearcoat_normal_fragment_begin:Gb,clearcoat_normal_fragment_maps:Vb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:Xb,opaque_fragment:qb,packing:Yb,premultiplied_alpha_fragment:Kb,project_vertex:Zb,dithering_fragment:Jb,dithering_pars_fragment:$b,roughnessmap_fragment:jb,roughnessmap_pars_fragment:Qb,shadowmap_pars_fragment:eT,shadowmap_pars_vertex:tT,shadowmap_vertex:nT,shadowmask_pars_fragment:iT,skinbase_vertex:rT,skinning_pars_vertex:sT,skinning_vertex:oT,skinnormal_vertex:aT,specularmap_fragment:lT,specularmap_pars_fragment:cT,tonemapping_fragment:uT,tonemapping_pars_fragment:hT,transmission_fragment:fT,transmission_pars_fragment:dT,uv_pars_fragment:pT,uv_pars_vertex:mT,uv_vertex:gT,worldpos_vertex:_T,background_vert:xT,background_frag:vT,backgroundCube_vert:yT,backgroundCube_frag:ST,cube_vert:MT,cube_frag:bT,depth_vert:TT,depth_frag:wT,distance_vert:ET,distance_frag:AT,equirect_vert:RT,equirect_frag:CT,linedashed_vert:PT,linedashed_frag:IT,meshbasic_vert:LT,meshbasic_frag:DT,meshlambert_vert:NT,meshlambert_frag:OT,meshmatcap_vert:UT,meshmatcap_frag:FT,meshnormal_vert:BT,meshnormal_frag:kT,meshphong_vert:zT,meshphong_frag:HT,meshphysical_vert:GT,meshphysical_frag:VT,meshtoon_vert:WT,meshtoon_frag:XT,points_vert:qT,points_frag:YT,shadow_vert:KT,shadow_frag:ZT,sprite_vert:JT,sprite_frag:$T},Ae={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Sr={basic:{uniforms:Xn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Xn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Xn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Xn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Xn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Xn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Xn([Ae.points,Ae.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Xn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Xn([Ae.common,Ae.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Xn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Xn([Ae.sprite,Ae.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Xn([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Xn([Ae.lights,Ae.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Sr.physical={uniforms:Xn([Sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Xh={r:0,b:0,g:0},jT=new Xe,Mx=new Ye;Mx.set(-1,0,0,0,1,0,0,0,1);function QT(r,e,t,n,i,s){let o=new Ve(0),a=i===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=e.get(M,v)}return M}function p(y){let M=!1,v=d(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,M){let v=d(M);v&&v.isCubeTexture?(c===void 0&&(c=new hn(new Ma(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:bo(Sr.backgroundCube.uniforms),vertexShader:Sr.backgroundCube.vertexShader,fragmentShader:Sr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jT.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mx),c.material.toneMapped=rt.getTransfer(v.colorSpace)!==St,(u!==v||f!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new hn(new pr(2,2),new _i({name:"BackgroundMaterial",uniforms:bo(Sr.background.uniforms),vertexShader:Sr.background.vertexShader,fragmentShader:Sr.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=rt.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(Xh,Pp(r)),t.buffers.color.setClear(Xh.r,Xh.g,Xh.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:g}}function e1(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,o=!1;function a(L,D,B,I,F){let k=!1,O=f(L,I,B,D);s!==O&&(s=O,c(s.object)),k=d(L,I,B,F),k&&p(L,I,B,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(L,D,B,I),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function f(L,D,B,I){let F=I.wireframe===!0,k=n[D.id];k===void 0&&(k={},n[D.id]=k);let O=L.isInstancedMesh===!0?L.id:0,$=k[O];$===void 0&&($={},k[O]=$);let G=$[B.id];G===void 0&&(G={},$[B.id]=G);let R=G[F];return R===void 0&&(R=h(l()),G[F]=R),R}function h(L){let D=[],B=[],I=[];for(let F=0;F<t;F++)D[F]=0,B[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,D,B,I){let F=s.attributes,k=D.attributes,O=0,$=B.getAttributes();for(let G in $)if($[G].location>=0){let J=F[G],ae=k[G];if(ae===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function p(L,D,B,I){let F={},k=D.attributes,O=0,$=B.getAttributes();for(let G in $)if($[G].location>=0){let J=k[G];J===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),F[G]=ae,O++}s.attributes=F,s.attributesNum=O,s.index=I}function _(){let L=s.newAttributes;for(let D=0,B=L.length;D<B;D++)L[D]=0}function m(L){g(L,0)}function g(L,D){let B=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;B[L]=1,I[L]===0&&(r.enableVertexAttribArray(L),I[L]=1),F[L]!==D&&(r.vertexAttribDivisor(L,D),F[L]=D)}function y(){let L=s.newAttributes,D=s.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==L[B]&&(r.disableVertexAttribArray(B),D[B]=0)}function M(L,D,B,I,F,k,O){O===!0?r.vertexAttribIPointer(L,D,B,F,k):r.vertexAttribPointer(L,D,B,I,F,k)}function v(L,D,B,I){_();let F=I.attributes,k=B.getAttributes(),O=D.defaultAttributeValues;for(let $ in k){let G=k[$];if(G.location>=0){let R=F[$];if(R===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(R=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(R=L.instanceColor)),R!==void 0){let J=R.normalized,ae=R.itemSize,me=e.get(R);if(me===void 0)continue;let X=me.buffer,le=me.type,he=me.bytesPerElement,be=le===r.INT||le===r.UNSIGNED_INT||R.gpuType===sh;if(R.isInterleavedBufferAttribute){let fe=R.data,Pe=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,ot=R.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)g(G.location+de,fe.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);r.bindBuffer(r.ARRAY_BUFFER,X);for(let de=0;de<G.locationSize;de++)M(G.location+de,ae/G.locationSize,le,J,Pe*he,(ot+ae/G.locationSize*de)*he,be)}else{if(R.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)g(G.location+fe,R.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe);r.bindBuffer(r.ARRAY_BUFFER,X);for(let fe=0;fe<G.locationSize;fe++)M(G.location+fe,ae/G.locationSize,le,J,ae*he,ae/G.locationSize*fe*he,be)}}else if(O!==void 0){let J=O[$];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(G.location,J);break;case 3:r.vertexAttrib3fv(G.location,J);break;case 4:r.vertexAttrib4fv(G.location,J);break;default:r.vertexAttrib1fv(G.location,J)}}}}y()}function b(){C();for(let L in n){let D=n[L];for(let B in D){let I=D[B];for(let F in I){let k=I[F];for(let O in k)u(k[O].object),delete k[O];delete I[F]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let B in D){let I=D[B];for(let F in I){let k=I[F];for(let O in k)u(k[O].object),delete k[O];delete I[F]}}delete n[L.id]}function x(L){for(let D in n){let B=n[D];for(let I in B){let F=B[I];if(F[L.id]===void 0)continue;let k=F[L.id];for(let O in k)u(k[O].object),delete k[O];delete F[L.id]}}}function S(L){for(let D in n){let B=n[D],I=L.isInstancedMesh===!0?L.id:0,F=B[I];if(F!==void 0){for(let k in F){let O=F[k];for(let $ in O)u(O[$].object),delete O[$];delete F[k]}delete B[I],Object.keys(B).length===0&&delete n[D]}}}function C(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function t1(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function n1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Vi&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==vi&&x!==Wn&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:E}}function i1(r){let e=this,t=null,n=0,i=!1,s=!1,o=new $i,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=r.get(f);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,M=y*4,v=g.clippingState||null;l.value=v,v=u(p,h,M,d);for(let b=0;b!==M;++b)v[b]=t[b];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var lc=class extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ma(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ii,blending:xo});s.uniforms.tEquirect.value=t;let o=new hn(i,s),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=Lt),new wa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},ex=256,r1=3,s1=20,bx=256,Tx=16,o1=3,a1=new H,l1=new Ve,Da=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wa(1,10,null),this._boxMesh=new hn(new Ma(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=a1}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(l1));let m=new wa(n,i,u);return m.position.copy(a),m.update(l,e),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ex,Ap(e))}_fromTexture(e,t){e.mapping===yo||e.mapping===Ra?this._setSize(e.image.length===0?ex:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=tx(e,!1,!1),n=Math.log2(e)-r1;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=tx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===yo||e.mapping===Ra?(this._cubemapMaterial===null&&(this._cubemapMaterial=ix()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nx()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=c1(),this._integrationMaterial=u1());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Tx);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-o1)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(bx*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=h1());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function tx(r,e,t){return new lc(r,{minFilter:Li,generateMipmaps:e,type:si,colorSpace:In,depthBuffer:t})}function cc(r,e,t){return new _i({name:r,uniforms:e,vertexShader:tt.cube_vert,fragmentShader:t,side:ii,blending:xo,depthTest:!1,depthWrite:!1})}function c1(){return cc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bx}u

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
	`)}function u1(){return cc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tx}},`

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
	`)}function h1(){return cc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${s1}
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
	`)}function nx(){return cc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ix(){return cc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function f1(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===nh||d===ih)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let _=new lc(p.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,p=d===nh||d===ih,_=d===yo||d===Ra;if(p||_){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Da(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Da(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===nh?h.mapping=yo:d===ih&&(h.mapping=Ra),h}function l(h){let d=0,p=6;for(let _=0;_<p;_++)h[_]!==void 0&&d++;return d===p}function c(h){let d=h.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function d1(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&so("WebGLRenderer: "+n+" extension not supported."),i}}}function p1(r,e,t,n){let i={},s=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let _=s.get(p);_&&(e.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],r.ARRAY_BUFFER)}function f(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,M=m.count>=65535?Ul:Ol,v=new M(Math.ceil(y/3)*6,1),b=v.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,C=0;S<y;S+=3){let A=x[S+0],L=x[S+1],D=x[S+2];b[C++]=A,b[C++]=L,b[C++]=L,b[C++]=D,b[C++]=D,b[C++]=A}}else{g=m.version;for(let x=0,S=0;x<y;x+=3){let C=x+0,A=x+1,L=x+2;b[S++]=C,b[S++]=A,b[S++]=A,b[S++]=L,b[S++]=L,b[S++]=C}}v.version=g;let E=s.get(p);E&&e.remove(E),s.set(p,v)}function h(p){let _=s.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&f(p)}else f(p);return s.get(p)}function d(){for(let p in i){let _=i[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function m1(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*o),t.update(h,n,1)}function c(f,h,d){d!==0&&(r.drawElementsInstanced(n,h,s,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let _=0;for(let m=0;m<d;m++)_+=h[m];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function g1(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _1(r,e,t){let n=new WeakMap,i=new xt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*b*4*f),x=new Dl(E,v,b,f);x.type=Wn,x.needsUpdate=!0;let S=M*4;for(let A=0;A<f;A++){let L=m[A],D=g[A],B=y[A],I=v*b*4*A;for(let F=0;F<L.count;F++){let k=F*S;d===!0&&(i.fromBufferAttribute(L,F),E[I+k+0]=i.x,E[I+k+1]=i.y,E[I+k+2]=i.z,E[I+k+3]=0),p===!0&&(i.fromBufferAttribute(D,F),E[I+k+4]=i.x,E[I+k+5]=i.y,E[I+k+6]=i.z,E[I+k+7]=0),_===!0&&(i.fromBufferAttribute(B,F),E[I+k+8]=i.x,E[I+k+9]=i.y,E[I+k+10]=i.z,E[I+k+11]=B.itemSize===4?i.w:1)}}h={count:f,texture:x,size:new Qe(v,b)},n.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function x1(r,e,t,n,i){let s=new WeakMap;function o(c){let u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var v1={[ap]:"LINEAR_TONE_MAPPING",[lp]:"REINHARD_TONE_MAPPING",[cp]:"CINEON_TONE_MAPPING",[jl]:"ACES_FILMIC_TONE_MAPPING",[hp]:"AGX_TONE_MAPPING",[fp]:"NEUTRAL_TONE_MAPPING",[up]:"CUSTOM_TONE_MAPPING"};function y1(r,e,t,n,i,s){let o=new Ii(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new wn;u.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new cn([0,2,0,0,2,0],2));let f=new Xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new hn(u,f),d=new go(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,M=[],v=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let x=0;x<M.length;x++){let S=M[x];S.setSize&&S.setSize(b,E)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;let E=o.width,x=o.height;M.length>0&&a===null&&(a=new Ii(E,x,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new Ii(E,x,{type:si,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&M.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new qr(E,x),s===!0&&(c.format=jr,c.type=Mo)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<M.length;C++){let A=M[C];A.setSize&&A.setSize(E,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===xr&&M.length===0)return!1;if(y=E,E!==null){let x=E.width,S=E.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=xr,!0},this.hasRenderPass=function(){return v},this.end=function(b,E){b.toneMapping=g,m=!0;let x=o,S=a;for(let C=0;C<M.length;C++){let A=M[C];A.enabled!==!1&&(A.render(b,S,x,E),A.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(p!==b.outputColorSpace||_!==b.toneMapping){p=b.outputColorSpace,_=b.toneMapping,f.defines={},rt.getTransfer(p)===St&&(f.defines.SRGB_TRANSFER="");let C=v1[_];C&&(f.defines[C]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(y),b.render(h,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var wx=new en,Ex=new qr(1,1),Ax=new Vl(1),Rx=new Dl,Cx=new Hu,Px=new Gl,rx=[],sx=[],ox=new Float32Array(16),ax=new Float32Array(9),lx=new Float32Array(4);function Na(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=rx[i];if(s===void 0&&(s=new Float32Array(i),rx[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function xn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Kh(r,e){let t=sx[e];t===void 0&&(t=new Int32Array(e),sx[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function S1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function M1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;r.uniform2fv(this.addr,e),vn(t,e)}}function b1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;r.uniform3fv(this.addr,e),vn(t,e)}}function T1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;r.uniform4fv(this.addr,e),vn(t,e)}}function w1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;lx.set(n),r.uniformMatrix2fv(this.addr,!1,lx),vn(t,n)}}function E1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;ax.set(n),r.uniformMatrix3fv(this.addr,!1,ax),vn(t,n)}}function A1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;ox.set(n),r.uniformMatrix4fv(this.addr,!1,ox),vn(t,n)}}function R1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function C1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;r.uniform2iv(this.addr,e),vn(t,e)}}function P1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;r.uniform3iv(this.addr,e),vn(t,e)}}function I1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;r.uniform4iv(this.addr,e),vn(t,e)}}function L1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function D1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;r.uniform2uiv(this.addr,e),vn(t,e)}}function N1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;r.uniform3uiv(this.addr,e),vn(t,e)}}function O1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;r.uniform4uiv(this.addr,e),vn(t,e)}}function Zh(r){return r.version===0&&(r.compareFunction=bp,r.needsUpdate=!0),r}function U1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Zh(Ex):s=wx,t.setTexture2D(e||s,i)}function F1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cx,i)}function B1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Zh(Ax):s=Px,t.setTextureCube(e||s,i)}function k1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rx,i)}function z1(r){switch(r){case 5126:return S1;case 35664:return M1;case 35665:return b1;case 35666:return T1;case 35674:return w1;case 35675:return E1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return P1;case 35669:case 35673:return I1;case 5125:return L1;case 36294:return D1;case 36295:return N1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return k1}}function H1(r,e){r.uniform1fv(this.addr,e)}function G1(r,e){let t=Na(e,this.size,2);r.uniform2fv(this.addr,t)}function V1(r,e){let t=Na(e,this.size,3);r.uniform3fv(this.addr,t)}function W1(r,e){let t=Na(e,this.size,4);r.uniform4fv(this.addr,t)}function X1(r,e){let t=Na(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function q1(r,e){let t=Na(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Y1(r,e){let t=Na(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function K1(r,e){r.uniform1iv(this.addr,e)}function Z1(r,e){r.uniform2iv(this.addr,e)}function J1(r,e){r.uniform3iv(this.addr,e)}function $1(r,e){r.uniform4iv(this.addr,e)}function j1(r,e){r.uniform1uiv(this.addr,e)}function Q1(r,e){r.uniform2uiv(this.addr,e)}function ew(r,e){r.uniform3uiv(this.addr,e)}function tw(r,e){r.uniform4uiv(this.addr,e)}function nw(r,e,t){let n=this.cache,i=e.length,s=Kh(t,i);xn(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Zh(Ex):o=wx;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function iw(r,e,t){let n=this.cache,i=e.length,s=Kh(t,i);xn(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Cx,s[o])}function rw(r,e,t){let n=this.cache,i=e.length,s=Kh(t,i);xn(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=Zh(Ax):o=Px;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,s[a])}function sw(r,e,t){let n=this.cache,i=e.length,s=Kh(t,i);xn(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Rx,s[o])}function ow(r){switch(r){case 5126:return H1;case 35664:return G1;case 35665:return V1;case 35666:return W1;case 35674:return X1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return K1;case 35667:case 35671:return Z1;case 35668:case 35672:return J1;case 35669:case 35673:return $1;case 5125:return j1;case 36294:return Q1;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}var Up=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=z1(t.type)}},Fp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ow(t.type)}},Bp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Np=/(\w+)(\])?(\[|\.)?/g;function cx(r,e){r.seq.push(e),r.map[e.id]=e}function aw(r,e,t){let n=r.name,i=n.length;for(Np.lastIndex=0;;){let s=Np.exec(n),o=Np.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){cx(t,c===void 0?new Up(a,r,e):new Fp(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Bp(a),cx(t,f)),t=f}}}var La=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);aw(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function ux(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var lw=37297,cw=0;function uw(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var hx=new Ye;function hw(r){rt._getMatrix(hx,rt.workingColorSpace,r);let e=`mat3( ${hx.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(r)){case Il:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function fx(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+uw(r.getShaderSource(e),a)}else return s}function fw(r,e){let t=hw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var dw={[ap]:"Linear",[lp]:"Reinhard",[cp]:"Cineon",[jl]:"ACESFilmic",[hp]:"AgX",[fp]:"Neutral",[up]:"Custom"};function pw(r,e){let t=dw[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qh=new H;function mw(){rt.getLuminanceCoefficients(qh);let r=qh.x.toFixed(4),e=qh.y.toFixed(4),t=qh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ac).join(`
`)}function _w(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xw(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ac(r){return r!==""}function dx(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function px(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(r){return r.replace(vw,yw)}function yw(r,e){let t=tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return kp(t)}var Sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mx(r){return r.replace(Sw,Mw)}function Mw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gx(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var bw={[_o]:"SHADOWMAP_TYPE_PCF",[Ea]:"SHADOWMAP_TYPE_VSM"};function Tw(r){return bw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ww={[Ra]:"ENVMAP_MODE_REFRACTION"};function Ew(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ww[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Aw={[op]:"ENVMAP_BLENDING_MULTIPLY",[N_]:"ENVMAP_BLENDING_MIX",[O_]:"ENVMAP_BLENDING_ADD"};function Rw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Aw[r.combine]||"ENVMAP_BLENDING_NONE"}function Cw(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Tw(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Ew(t),f=Rw(t),h=gw(t),d=_w(s),p=i.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ac).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ac).join(`
`),m.length>0&&(m+=`
`)):(_=[gx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ac).join(`
`),m=[gx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xr?"#define TONE_MAPPING":"",t.toneMapping!==xr?tt.tonemapping_pars_fragment:"",t.toneMapping!==xr?pw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,fw("linearToOutputTexel",t.outputColorSpace),mw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ac).join(`
`)),o=kp(o),o=dx(o,t),o=px(o,t),a=kp(a),a=dx(a,t),a=px(a,t),o=mx(o),a=mx(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+o,M=g+m+a,v=ux(i,i.VERTEX_SHADER,y),b=ux(i,i.FRAGMENT_SHADER,M);i.attachShader(p,v),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(A){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(v)||"",B=i.getShaderInfoLog(b)||"",I=L.trim(),F=D.trim(),k=B.trim(),O=!0,$=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,v,b);else{let G=fx(i,v,"vertex"),R=fx(i,b,"fragment");We("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+G+`
`+R)}else I!==""?Fe("WebGLProgram: Program Info Log:",I):(F===""||k==="")&&($=!1);$&&(A.diagnostics={runnable:O,programLog:I,vertexShader:{log:F,prefix:_},fragmentShader:{log:k,prefix:m}})}i.deleteShader(v),i.deleteShader(b),x=new La(i,p),S=xw(i,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(p,lw)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}var Pw=0,zp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hp(e),t.set(e,n)),n}},Hp=class{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}};function Iw(r){return r===Ps||r===ic||r===rc}function Lw(r,e,t,n,i,s){let o=new Nl,a=new zp,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,C,A,L,D){let B=A.fog,I=L.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||F,k),$=h[x.type],G=n.precision;x.precision!==null&&(G=n.getMaxPrecision(x.precision),G!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=R!==void 0?R.length:0,ae=0;I.morphAttributes.position!==void 0&&(ae=1),I.morphAttributes.normal!==void 0&&(ae=2),I.morphAttributes.color!==void 0&&(ae=3);let me,X,le,he;if($){let ne=Sr[$];me=ne.vertexShader,X=ne.fragmentShader}else{me=x.vertexShader,X=x.fragmentShader;let ne=a.getVertexShaderStage(x),Re=a.getFragmentShaderStage(x);a.update(x,ne,Re),le=ne.id,he=Re.id}let be=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,ot=L.isBatchedMesh===!0,de=!!x.map,ze=!!x.matcap,se=!!O,Te=se&&O.isPMREMTexture===!0,He=!!x.aoMap,Be=!!x.lightMap,Y=!!x.bumpMap&&x.wireframe===!1,je=!!x.normalMap,Nt=!!x.displacementMap,pt=!!x.emissiveMap,Ke=!!x.metalnessMap,Ct=!!x.roughnessMap,Jt=x.anisotropy>0,z=x.clearcoat>0,gt=x.diffuseRoughness>0,ft=x.dispersion>0,qe=x.retroreflectivity>0,_e=x.iridescence>0,mt=x.sheen>0,Oe=x.transmission>0,Ge=Jt&&!!x.anisotropyMap,P=z&&!!x.clearcoatMap,T=z&&!!x.clearcoatNormalMap,W=z&&!!x.clearcoatRoughnessMap,oe=gt&&!!x.diffuseRoughnessMap,ie=_e&&!!x.iridescenceMap,ge=_e&&!!x.iridescenceThicknessMap,Se=mt&&!!x.sheenColorMap,q=mt&&!!x.sheenRoughnessMap,ee=!!x.specularMap,pe=!!x.specularColorMap,N=!!x.specularIntensityMap,Q=Oe&&!!x.transmissionMap,j=Oe&&!!x.thicknessMap,xe=!!x.gradientMap,ue=!!x.alphaMap,ve=x.alphaTest>0,ce=!!x.alphaHash,ye=!!x.extensions,re=xr;x.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(re=r.toneMapping);let te=Te?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Me={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:me,fragmentShader:X,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:ot,batchingColor:ot&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:de,matcap:ze,envMap:se,envMapMode:se&&O.mapping,envMapPMREM:Te,envMapMaxLod:Te?te.length-1:null,envMapSize:Te?te[0].width:null,aoMap:He,lightMap:Be,bumpMap:Y,normalMap:je,displacementMap:Nt,emissiveMap:pt,normalMapObjectSpace:je&&x.normalMapType===k_,normalMapTangentSpace:je&&x.normalMapType===Gh,packedNormalMap:je&&x.normalMapType===Gh&&Iw(x.normalMap.format),metalnessMap:Ke,roughnessMap:Ct,anisotropy:Jt,anisotropyMap:Ge,clearcoat:z,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:W,diffuseRoughness:gt,diffuseRoughnessMap:oe,dispersion:ft,retroreflection:qe,iridescence:_e,iridescenceMap:ie,iridescenceThicknessMap:ge,sheen:mt,sheenColorMap:Se,sheenRoughnessMap:q,specularMap:ee,specularColorMap:pe,specularIntensityMap:N,transmission:Oe,transmissionMap:Q,thicknessMap:j,gradientMap:xe,opaque:x.transparent===!1&&x.blending===Aa&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:ve,alphaHash:ce,combine:x.combine,mapUv:de&&d(x.map.channel),aoMapUv:He&&d(x.aoMap.channel),lightMapUv:Be&&d(x.lightMap.channel),bumpMapUv:Y&&d(x.bumpMap.channel),normalMapUv:je&&d(x.normalMap.channel),displacementMapUv:Nt&&d(x.displacementMap.channel),emissiveMapUv:pt&&d(x.emissiveMap.channel),metalnessMapUv:Ke&&d(x.metalnessMap.channel),roughnessMapUv:Ct&&d(x.roughnessMap.channel),anisotropyMapUv:Ge&&d(x.anisotropyMap.channel),clearcoatMapUv:P&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(x.sheenRoughnessMap.channel),specularMapUv:ee&&d(x.specularMap.channel),specularColorMapUv:pe&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:Q&&d(x.transmissionMap.channel),thicknessMapUv:j&&d(x.thicknessMap.channel),alphaMapUv:ue&&d(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(je||Jt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(de||ue),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&je===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ae,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(ne=>ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:de&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:pt&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===ii,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||ot)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(S,x),g(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let S=h[x.type],C;if(S){let A=Sr[S];C=$_.clone(A.uniforms)}else C=x.uniforms;return C}function M(x,S){let C=u.get(S);return C!==void 0?++C.usedTimes:(C=new Cw(r,S,x,i),c.push(C),u.set(S,C)),C}function v(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:E}}function Dw(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Nw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function _x(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xx(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,_,m,g){let y=r[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},r[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=p,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=m,y.group=g),e++,y}function l(h,d,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let M=a(h,d,p,_,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function c(h,d,p,_,m,g){let y=a(h,d,p,_,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):t.unshift(y)}function u(h,d){t.length>1&&t.sort(h||Nw),n.length>1&&n.sort(d||_x),i.length>1&&i.sort(d||_x)}function f(){for(let h=e,d=r.length;h<d;h++){let p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function Ow(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new xx,r.set(n,[o])):i>=s.length?(o=new xx,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Uw(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Ve};break;case"SpotLight":t={position:new H,direction:new H,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function Fw(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Bw=0;function kw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zw(r){let e=new Uw,t=Fw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,s=new Xe,o=new Xe;function a(c){let u=0,f=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,y=0,M=0,v=0,b=0,E=0,x=0,S=0,C=0,A=0;c.sort(kw);for(let D=0,B=c.length;D<B;D++){let I=c[D],F=I.color,k=I.intensity,O=I.distance,$=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ps?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*k,f+=F.g*k,h+=F.b*k;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],k);A++}else if(I.isSunLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,J=t.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=$;let ae=R.getViewportCount();for(let me=0;me<ae;me++)n.sunShadowMatrix[_+me]=R.getMatrix(me),n.sunShadowCascade[_+me]=R._cascadeData[me];_+=ae,p++}n.sun[d]=G,d++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,J=t.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=G,m++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=O,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[y]=G;let R=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,R.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[y]=R.matrix,I.castShadow){let J=t.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=$,x++}y++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=G,M++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let R=I.shadow,J=t.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,J.shadowCameraNear=R.camera.near,J.shadowCameraFar=R.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=G,g++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(k),G.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[v]=G,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==M||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==x||L.numSpotMaps!==S||L.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,L.sunLength=d,L.directionalLength=m,L.pointLength=g,L.spotLength=y,L.rectAreaLength=M,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=x,L.numSpotMaps=S,L.numLightProbes=A,n.version=Bw++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),f++}else if(v.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),h++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function vx(r){let e=new zw(r),t=[],n=[],i=[];function s(f){u.camera=f,t.length=0,n.length=0,i.length=0}function o(f){f.isLightProbeGrid?i.push(f):t.push(f)}function a(f){n.push(f)}function l(){e.setup(t),i.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Hw(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new vx(r),e.set(i,[a])):s>=o.length?(a=new vx(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vw=`uniform sampler2D shadow_pass;
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
}`,Ww=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Xw=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],yx=new Xe,oc=new H,Op=new H;function qw(r,e,t){let n=new Rs,i=new Qe,s=new Qe,o=new xt,a=new qu,l=new Yu,c={},u=t.maxTextureSize,f={[_r]:ii,[ii]:_r,[ri]:ri},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Gw,fragmentShader:Vw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new wn;p.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new hn(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let g=this.type;this.render=function(E,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===m_&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_o);let C=r.getRenderTarget(),A=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(xo),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=E.length;I<F;I++){let k=E[I],O=k.shadow;if(O===void 0){Fe("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let $=O.getFrameExtents();i.multiply($),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,O.mapSize.y=s.y));let G=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ea){if(k.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ii(i.x,i.y,{format:Ps,type:si,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new qr(i.x,i.y,Wn),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=Vr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Qt,O.map.depthTexture.magFilter=Qt}else k.isPointLight?(O.map=new lc(i.x),O.map.depthTexture=new Vl(i.x,tr)):(O.map=new Ii(i.x,i.y),O.map.depthTexture=new qr(i.x,i.y,tr)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=Vr,this.type===_o?(O.map.depthTexture.compareFunction=G?Mp:Sp,O.map.depthTexture.minFilter=Lt,O.map.depthTexture.magFilter=Lt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Qt,O.map.depthTexture.magFilter=Qt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();k.isPointLight!==!0&&O.updateMatrices(k,S);let J=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let ae=0;ae<R;ae++){let me=O.getCamera(ae);if(k.isPointLight){let X=O.camera,le=O.matrix,he=k.distance||X.far;he!==X.far&&(X.far=he,X.updateProjectionMatrix()),oc.setFromMatrixPosition(k.matrixWorld),X.position.copy(oc),Op.copy(X.position),Op.add(Ww[ae]),X.up.copy(Xw[ae]),X.lookAt(Op),X.updateMatrixWorld(),le.makeTranslation(-oc.x,-oc.y,-oc.z),yx.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),O._frustum.setFromProjectionMatrix(yx,X.coordinateSystem,X.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,ae),r.clear();else{ae===0&&(r.setRenderTarget(O.map),r.clear());let X=O.getViewport(ae);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),D.viewport(o)}n=O.getFrustum(ae),v(x,S,me,k,J,this.type)}O.isPointLightShadow!==!0&&this.type===Ea&&y(O,S),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(C,A,L)};function y(E,x){let S=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ii(i.x,i.y,{format:Ps,type:si}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,S,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,S,d,_,null)}function M(E,x,S,C){let A=null,L=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)A=L;else if(A=S.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=A.uuid,B=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let F=I[B];F===void 0&&(F=A.clone(),I[B]=F,x.addEventListener("dispose",b)),A=F}if(A.visible=x.visible,A.wireframe=x.wireframe,C===Ea?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=r.properties.get(A);D.light=S}return A}function v(E,x,S,C,A,L){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Ea)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=e.update(E),F=E.material;if(Array.isArray(F)){let k=I.groups;for(let O=0,$=k.length;O<$;O++){let G=k[O],R=F[G.materialIndex];if(R&&R.visible){let J=M(E,R,C,L);E.onBeforeShadow(r,E,x,S,I,J,G),r.renderBufferDirect(S,null,I,J,E,G),E.onAfterShadow(r,E,x,S,I,J,G)}}}else if(F.visible){let k=M(E,F,C,L);E.onBeforeShadow(r,E,x,S,I,k,null),r.renderBufferDirect(S,null,I,k,E,null),E.onAfterShadow(r,E,x,S,I,k,null)}}let B=E.children;for(let I=0,F=B.length;I<F;I++)v(B[I],x,S,C,A,L)}function b(E){E.target.removeEventListener("dispose",b);for(let S in c){let C=c[S],A=E.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function Yw(r,e){function t(){let N=!1,Q=new xt,j=null,xe=new xt(0,0,0,0);return{setMask:function(ue){j!==ue&&!N&&(r.colorMask(ue,ue,ue,ue),j=ue)},setLocked:function(ue){N=ue},setClear:function(ue,ve,ce,ye,re){re===!0&&(ue*=ye,ve*=ye,ce*=ye),Q.set(ue,ve,ce,ye),xe.equals(Q)===!1&&(r.clearColor(ue,ve,ce,ye),xe.copy(Q))},reset:function(){N=!1,j=null,xe.set(-1,0,0,0)}}}function n(){let N=!1,Q=!1,j=null,xe=null,ue=null;return{setReversed:function(ve){if(Q!==ve){let ce=e.get("EXT_clip_control");ve?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),Q=ve;let ye=ue;ue=null,this.setClear(ye)}},getReversed:function(){return Q},setTest:function(ve){ve?fe(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(ve){j!==ve&&!N&&(r.depthMask(ve),j=ve)},setFunc:function(ve){if(Q&&(ve=Z_[ve]),xe!==ve){switch(ve){case Lu:r.depthFunc(r.NEVER);break;case Du:r.depthFunc(r.ALWAYS);break;case Nu:r.depthFunc(r.LESS);break;case ua:r.depthFunc(r.LEQUAL);break;case Ou:r.depthFunc(r.EQUAL);break;case Uu:r.depthFunc(r.GEQUAL);break;case Fu:r.depthFunc(r.GREATER);break;case Bu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=ve}},setLocked:function(ve){N=ve},setClear:function(ve){ue!==ve&&(ue=ve,Q&&(ve=1-ve),r.clearDepth(ve))},reset:function(){N=!1,j=null,xe=null,ue=null,Q=!1}}}function i(){let N=!1,Q=null,j=null,xe=null,ue=null,ve=null,ce=null,ye=null,re=null;return{setTest:function(te){N||(te?fe(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(te){Q!==te&&!N&&(r.stencilMask(te),Q=te)},setFunc:function(te,Me,ne){(j!==te||xe!==Me||ue!==ne)&&(r.stencilFunc(te,Me,ne),j=te,xe=Me,ue=ne)},setOp:function(te,Me,ne){(ve!==te||ce!==Me||ye!==ne)&&(r.stencilOp(te,Me,ne),ve=te,ce=Me,ye=ne)},setLocked:function(te){N=te},setClear:function(te){re!==te&&(r.clearStencil(te),re=te)},reset:function(){N=!1,Q=null,j=null,xe=null,ue=null,ve=null,ce=null,ye=null,re=null}}}let s=new t,o=new n,a=new i,l={},c=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,v=null,b=null,E=null,x=null,S=new Ve(0,0,0),C=0,A=!1,L=null,D=null,B=null,I=null,F=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=$>=2);let R=null,J={},ae=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),X=new xt().fromArray(ae),le=new xt().fromArray(me);function he(N,Q,j,xe){let ue=new Uint8Array(4),ve=r.createTexture();r.bindTexture(N,ve),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<j;ce++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(Q+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return ve}let be={};be[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(r.DEPTH_TEST),o.setFunc(ua),Y(!1),je(tp),fe(r.CULL_FACE),He(xo);function fe(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function Pe(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function ot(N,Q){return h[N]!==Q?(r.bindFramebuffer(N,Q),h[N]=Q,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Q),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function de(N,Q){let j=p,xe=!1;if(N){j=d.get(Q),j===void 0&&(j=[],d.set(Q,j));let ue=N.textures;if(j.length!==ue.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,ce=ue.length;ve<ce;ve++)j[ve]=r.COLOR_ATTACHMENT0+ve;j.length=ue.length,xe=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,xe=!0);xe&&r.drawBuffers(j)}function ze(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let se={[vo]:r.FUNC_ADD,[__]:r.FUNC_SUBTRACT,[x_]:r.FUNC_REVERSE_SUBTRACT};se[v_]=r.MIN,se[y_]=r.MAX;let Te={[S_]:r.ZERO,[M_]:r.ONE,[b_]:r.SRC_COLOR,[rp]:r.SRC_ALPHA,[C_]:r.SRC_ALPHA_SATURATE,[A_]:r.DST_COLOR,[w_]:r.DST_ALPHA,[T_]:r.ONE_MINUS_SRC_COLOR,[sp]:r.ONE_MINUS_SRC_ALPHA,[R_]:r.ONE_MINUS_DST_COLOR,[E_]:r.ONE_MINUS_DST_ALPHA,[P_]:r.CONSTANT_COLOR,[I_]:r.ONE_MINUS_CONSTANT_COLOR,[L_]:r.CONSTANT_ALPHA,[D_]:r.ONE_MINUS_CONSTANT_ALPHA};function He(N,Q,j,xe,ue,ve,ce,ye,re,te){if(N===xo){m===!0&&(Pe(r.BLEND),m=!1);return}if(m===!1&&(fe(r.BLEND),m=!0),N!==g_){if(N!==g||te!==A){if((y!==vo||b!==vo)&&(r.blendEquation(r.FUNC_ADD),y=vo,b=vo),te)switch(N){case Aa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $l:r.blendFunc(r.ONE,r.ONE);break;case np:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ip:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case Aa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $l:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case np:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ip:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}M=null,v=null,E=null,x=null,S.set(0,0,0),C=0,g=N,A=te}return}ue=ue||Q,ve=ve||j,ce=ce||xe,(Q!==y||ue!==b)&&(r.blendEquationSeparate(se[Q],se[ue]),y=Q,b=ue),(j!==M||xe!==v||ve!==E||ce!==x)&&(r.blendFuncSeparate(Te[j],Te[xe],Te[ve],Te[ce]),M=j,v=xe,E=ve,x=ce),(ye.equals(S)===!1||re!==C)&&(r.blendColor(ye.r,ye.g,ye.b,re),S.copy(ye),C=re),g=N,A=!1}function Be(N,Q){N.side===ri?Pe(r.CULL_FACE):fe(r.CULL_FACE);let j=N.side===ii;Q&&(j=!j),Y(j),N.blending===Aa&&N.transparent===!1?He(xo):He(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let xe=N.stencilWrite;a.setTest(xe),xe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Y(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function je(N){N!==d_?(fe(r.CULL_FACE),N!==D&&(N===tp?r.cullFace(r.BACK):N===p_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),D=N}function Nt(N){N!==B&&(O&&r.lineWidth(N),B=N)}function pt(N,Q,j){N?(fe(r.POLYGON_OFFSET_FILL),(I!==Q||F!==j)&&(I=Q,F=j,o.getReversed()&&(Q=-Q,j=-j),r.polygonOffset(Q,j))):Pe(r.POLYGON_OFFSET_FILL)}function Ke(N){N?fe(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function Ct(N){N===void 0&&(N=r.TEXTURE0+k-1),R!==N&&(r.activeTexture(N),R=N)}function Jt(N,Q,j){j===void 0&&(R===null?j=r.TEXTURE0+k-1:j=R);let xe=J[j];xe===void 0&&(xe={type:void 0,texture:void 0},J[j]=xe),(xe.type!==N||xe.texture!==Q)&&(R!==j&&(r.activeTexture(j),R=j),r.bindTexture(N,Q||be[N]),xe.type=N,xe.texture=Q)}function z(){let N=J[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function gt(){try{r.compressedTexImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ft(){try{r.compressedTexImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function qe(){try{r.texSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function _e(){try{r.texSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function Oe(){try{r.compressedTexSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Ge(){try{r.texStorage2D(...arguments)}catch(N){We("WebGLState:",N)}}function P(){try{r.texStorage3D(...arguments)}catch(N){We("WebGLState:",N)}}function T(){try{r.texImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function W(){try{r.texImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function oe(N){return f[N]!==void 0?f[N]:r.getParameter(N)}function ie(N,Q){f[N]!==Q&&(r.pixelStorei(N,Q),f[N]=Q)}function ge(N){X.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),X.copy(N))}function Se(N){le.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),le.copy(N))}function q(N,Q){let j=c.get(Q);j===void 0&&(j=new WeakMap,c.set(Q,j));let xe=j.get(N);xe===void 0&&(xe=r.getUniformBlockIndex(Q,N.name),r.uniformBlockBinding(Q,xe,xe),j.set(N,xe))}function ee(N,Q,j){let ue=c.get(Q).get(N);l[ue]!==j&&(r.bindBufferBase(r.UNIFORM_BUFFER,ue,j),l[ue]=j)}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},R=null,J={},h={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,v=null,b=null,E=null,x=null,S=new Ve(0,0,0),C=0,A=!1,L=null,D=null,B=null,I=null,F=null,X.set(0,0,r.canvas.width,r.canvas.height),le.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Pe,bindFramebuffer:ot,drawBuffers:de,useProgram:ze,setBlending:He,setMaterial:Be,setFlipSided:Y,setCullFace:je,setLineWidth:Nt,setPolygonOffset:pt,setScissorTest:Ke,activeTexture:Ct,bindTexture:Jt,unbindTexture:z,compressedTexImage2D:gt,compressedTexImage3D:ft,texImage2D:T,texImage3D:W,pixelStorei:ie,getParameter:oe,updateUBOMapping:q,uniformBlockBinding:ee,texStorage2D:Ge,texStorage3D:P,texSubImage2D:qe,texSubImage3D:_e,compressedTexSubImage2D:mt,compressedTexSubImage3D:Oe,scissor:ge,viewport:Se,reset:pe}}function Kw(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap,f=new Set,h,d=new WeakMap,p=new Set,_=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return m?new OffscreenCanvas(P,T):da("canvas")}function y(P,T,W){let oe=1,ie=Ge(P);if((ie.width>W||ie.height>W)&&(oe=W/Math.max(ie.width,ie.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ge=Math.floor(oe*ie.width),Se=Math.floor(oe*ie.height);h===void 0&&(h=g(ge,Se));let q=T?g(ge,Se):h;return q.width=ge,q.height=Se,q.getContext("2d").drawImage(P,0,0,ge,Se),Fe("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ge+"x"+Se+")."),q}else return"data"in P&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function M(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(P,T,W,oe,ie,ge=!1){if(P!==null){if(r[P]!==void 0)return r[P];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Se;oe&&(Se=e.get("EXT_texture_norm16"),Se||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=T;if(T===r.RED&&(W===r.FLOAT&&(q=r.R32F),W===r.HALF_FLOAT&&(q=r.R16F),W===r.UNSIGNED_BYTE&&(q=r.R8),W===r.UNSIGNED_SHORT&&Se&&(q=Se.R16_EXT),W===r.SHORT&&Se&&(q=Se.R16_SNORM_EXT)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.R8UI),W===r.UNSIGNED_SHORT&&(q=r.R16UI),W===r.UNSIGNED_INT&&(q=r.R32UI),W===r.BYTE&&(q=r.R8I),W===r.SHORT&&(q=r.R16I),W===r.INT&&(q=r.R32I)),T===r.RG&&(W===r.FLOAT&&(q=r.RG32F),W===r.HALF_FLOAT&&(q=r.RG16F),W===r.UNSIGNED_BYTE&&(q=r.RG8),W===r.UNSIGNED_SHORT&&Se&&(q=Se.RG16_EXT),W===r.SHORT&&Se&&(q=Se.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.RG8UI),W===r.UNSIGNED_SHORT&&(q=r.RG16UI),W===r.UNSIGNED_INT&&(q=r.RG32UI),W===r.BYTE&&(q=r.RG8I),W===r.SHORT&&(q=r.RG16I),W===r.INT&&(q=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.RGB8UI),W===r.UNSIGNED_SHORT&&(q=r.RGB16UI),W===r.UNSIGNED_INT&&(q=r.RGB32UI),W===r.BYTE&&(q=r.RGB8I),W===r.SHORT&&(q=r.RGB16I),W===r.INT&&(q=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),W===r.UNSIGNED_INT&&(q=r.RGBA32UI),W===r.BYTE&&(q=r.RGBA8I),W===r.SHORT&&(q=r.RGBA16I),W===r.INT&&(q=r.RGBA32I)),T===r.RGB&&(W===r.UNSIGNED_SHORT&&Se&&(q=Se.RGB16_EXT),W===r.SHORT&&Se&&(q=Se.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),T===r.RGBA){let ee=ge?Il:rt.getTransfer(ie);W===r.FLOAT&&(q=r.RGBA32F),W===r.HALF_FLOAT&&(q=r.RGBA16F),W===r.UNSIGNED_BYTE&&(q=ee===St?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&Se&&(q=Se.RGBA16_EXT),W===r.SHORT&&Se&&(q=Se.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(P,T){let W;return P?T===null||T===tr||T===Mo?W=r.DEPTH24_STENCIL8:T===Wn?W=r.DEPTH32F_STENCIL8:T===Pa&&(W=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===tr||T===Mo?W=r.DEPTH_COMPONENT24:T===Wn?W=r.DEPTH_COMPONENT32F:T===Pa&&(W=r.DEPTH_COMPONENT16),W}function S(P,T){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==Lt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function C(P){let T=new WeakRef(P);n.get(P).__ref=T,p.add(T),_.register(P,T,T)}function A(P){let T=n.get(P).__ref;T!==void 0&&(p.delete(T),_.unregister(T))}function L(P){B(P.target)}function D(P){I(P.target)}function B(P){P.removeEventListener("dispose",L),A(P),k(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&f.delete(P)}function I(P){P.removeEventListener("dispose",D),A(P),$(P)}function F(){for(let P of p){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?I(T):B(T))}p.clear(),f.clear()}function k(P){let T=n.get(P);if(T.__webglInit===void 0)return;let W=P.source,oe=d.get(W);if(oe){let ie=oe[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&O(P),Object.keys(oe).length===0&&d.delete(W)}n.remove(P)}function O(P){let T=n.get(P);r.deleteTexture(T.__webglTexture);let W=P.source,oe=d.get(W);delete oe[T.__cacheKey],o.memory.textures--}function $(P){let T=n.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let W=P.depthTexture;if(W&&W.renderTarget===P&&B(W),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let ge=0;ge<T.__webglFramebuffer[ie].length;ge++)r.deleteFramebuffer(T.__webglFramebuffer[ie][ge]);else r.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)r.deleteFramebuffer(T.__webglFramebuffer[ie]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let oe=P.textures;for(let ie=0,ge=oe.length;ie<ge;ie++){let Se=n.get(oe[ie]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(oe[ie])}n.remove(P)}let G=0;function R(){G=0}function J(){return G}function ae(P){G=P}function me(){let P=G;return P>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),G+=1,P}function X(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function le(P,T){let W=n.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let oe=P.image;if(oe===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(W,P,T);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function he(P,T){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Be(W,P,T);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function be(P,T){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Be(W,P,T);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function fe(P,T){let W=n.get(P);if(P.version>0&&W.__version!==P.version){Y(W,P,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}let Pe={[fr]:r.REPEAT,[di]:r.CLAMP_TO_EDGE,[ha]:r.MIRRORED_REPEAT},ot={[Qt]:r.NEAREST,[rh]:r.NEAREST_MIPMAP_NEAREST,[So]:r.NEAREST_MIPMAP_LINEAR,[Lt]:r.LINEAR,[Ca]:r.LINEAR_MIPMAP_NEAREST,[Li]:r.LINEAR_MIPMAP_LINEAR},de={[H_]:r.NEVER,[bp]:r.ALWAYS,[G_]:r.LESS,[Sp]:r.LEQUAL,[V_]:r.EQUAL,[Mp]:r.GEQUAL,[W_]:r.GREATER,[X_]:r.NOTEQUAL};function ze(P,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Lt||T.magFilter===Ca||T.magFilter===So||T.magFilter===Li||T.minFilter===Lt||T.minFilter===Ca||T.minFilter===So||T.minFilter===Li)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Pe[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Pe[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Pe[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ot[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ot[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,de[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qt||T.minFilter!==So&&T.minFilter!==Li||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function se(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",L),C(T));let oe=T.source,ie=d.get(oe);ie===void 0&&(ie={},d.set(oe,ie));let ge=X(T);if(ge!==P.__cacheKey){ie[ge]===void 0&&(ie[ge]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[ge].usedTimes++;let Se=ie[P.__cacheKey];Se!==void 0&&(ie[P.__cacheKey].usedTimes--,Se.usedTimes===0&&O(T)),P.__cacheKey=ge,P.__webglTexture=ie[ge].texture}return W}function Te(P,T,W){return Math.floor(Math.floor(P/W)/T)}function He(P,T,W,oe){let ge=P.updateRanges;if(ge.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,W,oe,T.data);else{ge.sort((N,Q)=>N.start-Q.start);let Se=0;for(let N=1;N<ge.length;N++){let Q=ge[Se],j=ge[N],xe=Q.start+Q.count,ue=Te(j.start,T.width,4),ve=Te(Q.start,T.width,4);j.start<=xe+1&&ue===ve&&Te(j.start+j.count-1,T.width,4)===ue?Q.count=Math.max(Q.count,j.start+j.count-Q.start):(++Se,ge[Se]=j)}ge.length=Se+1;let q=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),pe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let N=0,Q=ge.length;N<Q;N++){let j=ge[N],xe=Math.floor(j.start/4),ue=Math.ceil(j.count/4),ve=xe%T.width,ce=Math.floor(xe/T.width),ye=ue,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(r.UNPACK_SKIP_ROWS,ce),t.texSubImage2D(r.TEXTURE_2D,0,ve,ce,ye,re,W,oe,T.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,q),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,pe)}}function Be(P,T,W){let oe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(oe=r.TEXTURE_3D);let ie=se(P,T),ge=T.source;t.bindTexture(oe,P.__webglTexture,r.TEXTURE0+W);let Se=n.get(ge);if(ge.version!==Se.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let re=rt.getPrimaries(rt.workingColorSpace),te=T.colorSpace===Qr?null:rt.getPrimaries(T.colorSpace),Me=T.colorSpace===Qr||re===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ee=y(T.image,!1,i.maxTextureSize);ee=Oe(T,ee);let pe=s.convert(T.format,T.colorSpace),N=s.convert(T.type),Q=E(T.internalFormat,pe,N,T.normalized,T.colorSpace,T.isVideoTexture);ze(oe,T);let j,xe=T.mipmaps,ue=T.isVideoTexture!==!0,ve=Se.__version===void 0||ie===!0,ce=ge.dataReady,ye=S(T,ee);if(T.isDepthTexture)Q=x(T.format===jr,T.type),ve&&(ue?t.texStorage2D(r.TEXTURE_2D,1,Q,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Q,ee.width,ee.height,0,pe,N,null));else if(T.isDataTexture)if(xe.length>0){ue&&ve&&t.texStorage2D(r.TEXTURE_2D,ye,Q,xe[0].width,xe[0].height);for(let re=0,te=xe.length;re<te;re++)j=xe[re],ue?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,j.width,j.height,pe,N,j.data):t.texImage2D(r.TEXTURE_2D,re,Q,j.width,j.height,0,pe,N,j.data);T.generateMipmaps=!1}else ue?(ve&&t.texStorage2D(r.TEXTURE_2D,ye,Q,ee.width,ee.height),ce&&He(T,ee,pe,N)):t.texImage2D(r.TEXTURE_2D,0,Q,ee.width,ee.height,0,pe,N,ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ue&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Q,xe[0].width,xe[0].height,ee.depth);for(let re=0,te=xe.length;re<te;re++)if(j=xe[re],T.format!==Vi)if(pe!==null)if(ue){if(ce)if(T.layerUpdates.size>0){let Me=Dp(j.width,j.height,T.format,T.type);for(let ne of T.layerUpdates){let Re=j.data.subarray(ne*Me/j.data.BYTES_PER_ELEMENT,(ne+1)*Me/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ne,j.width,j.height,1,pe,Re)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,j.width,j.height,ee.depth,pe,j.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Q,j.width,j.height,ee.depth,0,j.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,j.width,j.height,ee.depth,pe,N,j.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Q,j.width,j.height,ee.depth,0,pe,N,j.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ue&&ve&&t.texStorage2D(r.TEXTURE_2D,ye,Q,xe[0].width,xe[0].height);for(let re=0,te=xe.length;re<te;re++)j=xe[re],T.format!==Vi?pe!==null?ue?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,j.width,j.height,pe,j.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Q,j.width,j.height,0,j.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,j.width,j.height,pe,N,j.data):t.texImage2D(r.TEXTURE_2D,re,Q,j.width,j.height,0,pe,N,j.data)}else if(T.isDataArrayTexture)if(ue){if(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Q,ee.width,ee.height,ee.depth),ce)if(T.layerUpdates.size>0){let re=Dp(ee.width,ee.height,T.format,T.type);for(let te of T.layerUpdates){let Me=ee.data.subarray(te*re/ee.data.BYTES_PER_ELEMENT,(te+1)*re/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ee.width,ee.height,1,pe,N,Me)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,N,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,ee.width,ee.height,ee.depth,0,pe,N,ee.data);else if(T.isData3DTexture)ue?(ve&&t.texStorage3D(r.TEXTURE_3D,ye,Q,ee.width,ee.height,ee.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,N,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Q,ee.width,ee.height,ee.depth,0,pe,N,ee.data);else if(T.isFramebufferTexture){if(ve)if(ue)t.texStorage2D(r.TEXTURE_2D,ye,Q,ee.width,ee.height);else{let re=ee.width,te=ee.height;for(let Me=0;Me<ye;Me++)t.texImage2D(r.TEXTURE_2D,Me,Q,re,te,0,pe,N,null),re>>=1,te>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ee.parentNode!==re){re.appendChild(ee),f.add(T),re.onpaint=te=>{let Me=te.changedElements;for(let ne of f)Me.includes(ne.image)&&(ne.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{let Me=r.RGBA,ne=r.RGBA,Re=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Me,ne,Re,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(xe.length>0){if(ue&&ve){let re=Ge(xe[0]);t.texStorage2D(r.TEXTURE_2D,ye,Q,re.width,re.height)}for(let re=0,te=xe.length;re<te;re++)j=xe[re],ue?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe,N,j):t.texImage2D(r.TEXTURE_2D,re,Q,pe,N,j);T.generateMipmaps=!1}else if(ue){if(ve){let re=Ge(ee);t.texStorage2D(r.TEXTURE_2D,ye,Q,re.width,re.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,N,ee)}else t.texImage2D(r.TEXTURE_2D,0,Q,pe,N,ee);M(T)&&T.mipmapsAutoUpdate===!0&&v(oe),Se.__version=ge.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Y(P,T,W){if(T.image.length!==6)return;let oe=se(P,T),ie=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);let ge=n.get(ie);if(ie.version!==ge.__version||oe===!0){t.activeTexture(r.TEXTURE0+W);let Se=rt.getPrimaries(rt.workingColorSpace),q=T.colorSpace===Qr?null:rt.getPrimaries(T.colorSpace),ee=T.colorSpace===Qr||Se===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let pe=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!pe&&!N?Q[ne]=y(T.image[ne],!0,i.maxCubemapSize):Q[ne]=N?T.image[ne].image:T.image[ne],Q[ne]=Oe(T,Q[ne]);let j=Q[0],xe=s.convert(T.format,T.colorSpace),ue=s.convert(T.type),ve=E(T.internalFormat,xe,ue,T.normalized,T.colorSpace),ce=T.isVideoTexture!==!0,ye=ge.__version===void 0||oe===!0,re=ie.dataReady,te=S(T,j);ze(r.TEXTURE_CUBE_MAP,T);let Me;if(T.isDepthTexture){if(ve=x(T.format===jr,T.type),ye)if(ce)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,ve,j.width,j.height);else for(let ne=0;ne<6;ne++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ve,j.width,j.height,0,xe,ue,null)}else if(pe){ce&&ye&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,ve,j.width,j.height);for(let ne=0;ne<6;ne++){Me=Q[ne].mipmaps;for(let Re=0;Re<Me.length;Re++){let lt=Me[Re];T.format!==Vi?xe!==null?ce?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,lt.width,lt.height,xe,lt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ve,lt.width,lt.height,0,lt.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,lt.width,lt.height,xe,ue,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ve,lt.width,lt.height,0,xe,ue,lt.data)}}}else{if(Me=T.mipmaps,ce&&ye){Me.length>0&&te++;let ne=Ge(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(N){ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,xe,ue,Q[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ve,Q[ne].width,Q[ne].height,0,xe,ue,Q[ne].data);for(let Re=0;Re<Me.length;Re++){let Ze=Me[Re].image[ne].image;ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ze.width,Ze.height,xe,ue,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ve,Ze.width,Ze.height,0,xe,ue,Ze.data)}}else{ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe,ue,Q[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ve,xe,ue,Q[ne]);for(let Re=0;Re<Me.length;Re++){let lt=Me[Re];ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,xe,ue,lt.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ve,xe,ue,lt.image[ne])}}}M(T)&&T.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),ge.__version=ie.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function je(P,T,W,oe,ie,ge){let Se=s.convert(W.format,W.colorSpace),q=s.convert(W.type),ee=E(W.internalFormat,Se,q,W.normalized,W.colorSpace),pe=n.get(T),N=n.get(W);if(N.__renderTarget=T,!pe.__hasExternalTextures){let Q=Math.max(1,T.width>>ge),j=Math.max(1,T.height>>ge);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,ge,ee,Q,j,T.depth,0,Se,q,null):t.texImage2D(ie,ge,ee,Q,j,0,Se,q,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),_e(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ie,N.__webglTexture,0,qe(T)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ie,N.__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(P,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){let oe=T.depthTexture,ie=oe&&oe.isDepthTexture?oe.type:null,ge=x(T.stencilBuffer,ie),Se=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_e(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(T),ge,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(T),ge,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ge,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,P)}else{let oe=T.textures;for(let ie=0;ie<oe.length;ie++){let ge=oe[ie],Se=s.convert(ge.format,ge.colorSpace),q=s.convert(ge.type),ee=E(ge.internalFormat,Se,q,ge.normalized,ge.colorSpace);_e(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(T),ee,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(T),ee,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ee,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(P,T,W){let oe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(T.depthTexture);ie.__renderTarget=T;let ge=oe?T.depthTexture.image[0]:T.depthTexture.image;(!ie.__webglTexture||ge.width!==T.width||ge.height!==T.height)&&(ge.width=T.width,ge.height=T.height,T.depthTexture.needsUpdate=!0),oe?fe(T.depthTexture,0):le(T.depthTexture,0);let Se=ie.__webglTexture,q=qe(T),ee=oe?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,pe=T.depthTexture.format===jr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Vr)_e(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ee,Se,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ee,Se,0);else if(T.depthTexture.format===jr)_e(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ee,Se,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ee,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(P){let T=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let oe=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),oe){let ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,oe.removeEventListener("dispose",ie)};oe.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=oe}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let oe=0;oe<6;oe++)pt(T.__webglFramebuffer[oe],P,oe);else P.texture.mipmaps.length>0?pt(T.__webglFramebuffer[0],P,0):pt(T.__webglFramebuffer,P,0);else if(W){T.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[oe]),T.__webglDepthbuffer[oe]===void 0)T.__webglDepthbuffer[oe]=r.createRenderbuffer(),Nt(T.__webglDepthbuffer[oe],P,!1);else{let ie=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,ge)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Nt(T.__webglDepthbuffer,P,!1);else{let ie=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,ge)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(P,T,W){let oe=n.get(P);T!==void 0&&je(oe.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Ke(P)}function Jt(P){let T=P.texture,W=n.get(P),oe=n.get(T);P.addEventListener("dispose",D),C(P);let ie=P.textures,ge=P.isWebGLCubeRenderTarget===!0,Se=ie.length>1;if(Se||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=T.version,o.memory.textures++),ge){W.__webglFramebuffer=[];for(let q=0;q<6;q++)if(T.mipmaps.length>0){W.__webglFramebuffer[q]=[];for(let ee=0;ee<T.mipmaps.length;ee++)W.__webglFramebuffer[q][ee]=r.createFramebuffer()}else W.__webglFramebuffer[q]=r.createFramebuffer()}else{if(T.mipmaps.length>0){W.__webglFramebuffer=[];for(let q=0;q<T.mipmaps.length;q++)W.__webglFramebuffer[q]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Se)for(let q=0,ee=ie.length;q<ee;q++){let pe=n.get(ie[q]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&_e(P)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let q=0;q<ie.length;q++){let ee=ie[q];W.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let pe=s.convert(ee.format,ee.colorSpace),N=s.convert(ee.type),Q=E(ee.internalFormat,pe,N,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),j=qe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,Q,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,W.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),ze(r.TEXTURE_CUBE_MAP,T);for(let q=0;q<6;q++)if(T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)je(W.__webglFramebuffer[q][ee],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee);else je(W.__webglFramebuffer[q],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);M(T)?v(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Se){for(let q=0,ee=ie.length;q<ee;q++){let pe=ie[q],N=n.get(pe),Q=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),ze(Q,pe),je(W.__webglFramebuffer,P,pe,r.COLOR_ATTACHMENT0+q,Q,0),M(pe)&&v(Q)}t.unbindTexture()}else{let q=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(q,oe.__webglTexture),ze(q,T),T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)je(W.__webglFramebuffer[ee],P,T,r.COLOR_ATTACHMENT0,q,ee);else je(W.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,q,0);M(T)?v(q):T.mipmaps.length>0&&r.texParameteri(q,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&Ke(P)}function z(P){let T=P.textures;for(let W=0,oe=T.length;W<oe;W++){let ie=T[W];if(M(ie)&&ie.mipmapsAutoUpdate===!0){let ge=b(P),Se=n.get(ie).__webglTexture;t.bindTexture(ge,Se),v(ge),t.unbindTexture()}}}let gt=[];function ft(P){if(P.samples>0){if(_e(P)===!1){let T=P.textures,W=P.width,oe=P.height,ie=r.COLOR_BUFFER_BIT,ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(P),q=T.length>1;if(q)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);let N=n.get(T[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,W,oe,0,0,W,oe,ie,r.NEAREST),l===!0&&(gt.length=0,gt.push(r.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&gt.push(ge),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);let N=n.get(T[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function qe(P){return Math.min(i.maxSamples,P.samples)}function _e(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function mt(P){let T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Oe(P,T){let W=P.colorSpace,oe=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==In&&W!==Qr&&(rt.getTransfer(W)===St?(oe!==Vi||ie!==vi)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",W)),T}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=me,this.resetTextureUnits=R,this.getTextureUnits=J,this.setTextureUnits=ae,this.setTexture2D=le,this.setTexture2DArray=he,this.setTexture3D=be,this.setTextureCube=fe,this.rebindTextures=Ct,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=je,this.useMultisampledRTT=_e,this.dispose=F}function Zw(r,e){function t(n,i=Qr){let s,o=rt.getTransfer(i);if(n===vi)return r.UNSIGNED_BYTE;if(n===oh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return r.UNSIGNED_SHORT_5_5_5_1;if(n===gp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_p)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===pp)return r.BYTE;if(n===mp)return r.SHORT;if(n===Pa)return r.UNSIGNED_SHORT;if(n===sh)return r.INT;if(n===tr)return r.UNSIGNED_INT;if(n===Wn)return r.FLOAT;if(n===si)return r.HALF_FLOAT;if(n===xp)return r.ALPHA;if(n===vp)return r.RGB;if(n===Vi)return r.RGBA;if(n===Vr)return r.DEPTH_COMPONENT;if(n===jr)return r.DEPTH_STENCIL;if(n===lh)return r.RED;if(n===ch)return r.RED_INTEGER;if(n===Ps)return r.RG;if(n===uh)return r.RG_INTEGER;if(n===hh)return r.RGBA_INTEGER;if(n===Ql||n===ec||n===tc||n===nc)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fh||n===dh||n===ph||n===mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gh||n===_h||n===xh||n===vh||n===yh||n===ic||n===Sh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gh||n===_h)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===vh)return s.COMPRESSED_R11_EAC;if(n===yh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ic)return s.COMPRESSED_RG11_EAC;if(n===Sh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mh||n===bh||n===Th||n===wh||n===Eh||n===Ah||n===Rh||n===Ch||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ah)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ch)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ph)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ih)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uh||n===Fh||n===Bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Uh)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===zh||n===rc||n===Hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===kh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var Jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$w=`
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

}`,Gp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _i({vertexShader:Jw,fragmentShader:$w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vp=class extends dr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new Gp,g={},y=t.getContextAttributes(),M=null,v=null,b=[],E=[],x=new Qe,S=null,C=null,A=new jt;A.viewport=new xt;let L=new jt;L.viewport=new xt;let D=[A,L],B=new th,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let le=b[X];return le===void 0&&(le=new ga,b[X]=le),le.getTargetRaySpace()},this.getControllerGrip=function(X){let le=b[X];return le===void 0&&(le=new ga,b[X]=le),le.getGripSpace()},this.getHand=function(X){let le=b[X];return le===void 0&&(le=new ga,b[X]=le),le.getHandSpace()};function k(X){let le=E.indexOf(X.inputSource);if(le===-1)return;let he=b[le];he!==void 0&&(he.update(X.inputSource,X.frame,c||o),he.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",$);for(let X=0;X<b.length;X++){let le=E[X];le!==null&&(E[X]=null,b[X].disconnect(le))}I=null,F=null,m.reset();for(let X in g)delete g[X];if(e.setRenderTarget(M),d=null,h=null,f=null,i=null,v=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),C!==null){let X=C.camera;X.fov=C.fov,X.zoom=C.zoom,X.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",O),i.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,be=null,fe=null;y.depth&&(fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?jr:Vr,be=y.stencil?Mo:tr);let Pe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Pe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Ii(h.textureWidth,h.textureHeight,{format:Vi,type:vi,depthTexture:new qr(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ii(d.framebufferWidth,d.framebufferHeight,{format:Vi,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(X){for(let le=0;le<X.removed.length;le++){let he=X.removed[le],be=E.indexOf(he);be>=0&&(E[be]=null,b[be].disconnect(he))}for(let le=0;le<X.added.length;le++){let he=X.added[le],be=E.indexOf(he);if(be===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=E.length){E.push(he),be=Pe;break}else if(E[Pe]===null){E[Pe]=he,be=Pe;break}if(be===-1)break}let fe=b[be];fe&&fe.connect(he)}}function G(X,le){le===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(le.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let le=X.near,he=X.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(he=m.depthFar)),B.near=L.near=A.near=le,B.far=L.far=A.far=he,(I!==B.near||F!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,F=B.far),B.layers.mask=X.layers.mask|6,A.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;let be=X.parent,fe=B.cameras;G(B,be);for(let Pe=0;Pe<fe.length;Pe++)G(fe[Pe],be);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&X.isPerspectiveCamera&&(C={camera:X,fov:X.fov,zoom:X.zoom}),R(X,B,be)};function R(X,le,he){he===null?X.matrix.copy(le.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(le.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=lo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(X){return g[X]};let J=null;function ae(X,le){if(u=le.getViewerPose(c||o),p=le,u!==null){let he=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let be=!1;he.length!==B.cameras.length&&(B.cameras.length=0,be=!0);for(let de=0;de<he.length;de++){let ze=he[de],se=null;if(d!==null)se=d.getViewport(ze);else{let He=f.getViewSubImage(h,ze);se=He.viewport,de===0&&(e.setRenderTargetTextures(v,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(v))}let Te=D[de];Te===void 0&&(Te=new jt,Te.layers.enable(de),Te.viewport=new xt,D[de]=Te),Te.matrix.fromArray(ze.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ze.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(se.x,se.y,se.width,se.height),de===0&&(B.matrix.copy(Te.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),be===!0&&B.cameras.push(Te)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let de=f.getDepthInformation(he[0]);de&&de.isValid&&de.texture&&m.init(de,i.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let de=0;de<he.length;de++){let ze=he[de].camera;if(ze){let se=g[ze];se||(se=new Wl,g[ze]=se);let Te=f.getCameraImage(ze);se.sourceTexture=Te}}}}for(let he=0;he<b.length;he++){let be=E[he],fe=b[he];be!==null&&fe!==void 0&&fe.update(be,le,c||o)}J&&J(X,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),p=null}let me=new Sx;me.setAnimationLoop(ae),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}},jw=new Xe,Ix=new Ye;Ix.set(-1,0,0,0,1,0,0,0,1);function Qw(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Pp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),f(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ii&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ii&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(jw.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ix),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ii&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function eE(r,e,t,n){let i={},s={};function o(y,M){let v=M.program;n.uniformBlockBinding(y,v,i[y.id])}function a(y,M){let v=i[y.id];v===void 0&&(p(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(y,b);let E=e.render.frame;s[y.id]!==E&&(c(y),s[y.id]=E)}function l(y){let M=r.createBuffer(),v=y.__size,b=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,v,b),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function c(y){let M=i[y.id],v=y.uniforms,b=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,x=v.length;E<x;E++){let S=v[E];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)u(S[C],E,C,b);else u(S,E,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,M,v,b){if(h(y,M,v,b)===!0){let E=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let C=0;C<x.length;C++){let A=x[C],L=_(A,!0);f(A,y.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,y.__data)}}function f(y,M,v){typeof y=="number"||typeof y=="boolean"?M[v]=y:y.isMatrix3?(M[v]=y.elements[0],M[v+1]=y.elements[1],M[v+2]=y.elements[2],M[v+3]=0,M[v+4]=y.elements[3],M[v+5]=y.elements[4],M[v+6]=y.elements[5],M[v+7]=0,M[v+8]=y.elements[6],M[v+9]=y.elements[7],M[v+10]=y.elements[8],M[v+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-v),v):y.toArray(M,v)}function h(y,M,v,b){let E=y.value,x=M+"_"+v;if(Array.isArray(E)){b[x]===void 0&&(b[x]=[]);let S=b[x],C=!1;for(let A=0;A<E.length;A++)d(E[A],S,A)===!0&&(C=!0);return C}return d(E,b,x)}function d(y,M,v){if(M[v]===void 0)return typeof y=="number"||typeof y=="boolean"?M[v]=y:ArrayBuffer.isView(y)?M[v]=y.slice():M[v]=y.clone(),!0;{let b=M[v];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return M[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function p(y){let M=y.uniforms,v=0,b=16;for(let x=0,S=M.length;x<S;x++){let C=Array.isArray(M[x])?M[x]:[M[x]];for(let A=0,L=C.length;A<L;A++){let D=C[A],B=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(M[x])||Array.isArray(D.value),F=v;for(let O=0,$=B.length;O<$;O++){let G=B[O],R=_(G,I),J=v%b,ae=J%R.boundary,me=J+ae;v+=ae,me!==0&&b-me<R.storage&&(v+=b-me),O===0&&(F=v),v+=R.storage}let k=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new k((v-F)/Float32Array.BYTES_PER_ELEMENT),D.__offset=F}}let E=v%b;return E>0&&(v+=b-E),y.__size=v,y.__cache={},this}function _(y,M){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let M=y.target;M.removeEventListener("dispose",m),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(let y in i)r.deleteBuffer(i[y]);i={},s={}}return{bind:o,update:a,dispose:g}}var tE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yr=null;function nE(){return yr===null&&(yr=new As(tE,16,16,Ps,si),yr.name="DFG_LUT",yr.minFilter=Lt,yr.magFilter=Lt,yr.wrapS=di,yr.wrapT=di,yr.generateMipmaps=!1,yr.needsUpdate=!0),yr}var Yh=class{constructor(e={}){let{canvas:t=q_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=vi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([hh,uh,ch]),g=new Set([vi,tr,Pa,Mo,oh,ah]),y=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,E=null,x=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,B=null,I=null,F=null;this._outputColorSpace=It;let k=0,O=0,$=null,G=-1,R=null,J=new xt,ae=new xt,me=null,X=new Ve(0),le=0,he=t.width,be=t.height,fe=1,Pe=null,ot=null,de=new xt(0,0,he,be),ze=new xt(0,0,he,be),se=!1,Te=new Rs,He=new Gu,Be=!1,Y=!1,je=new Xe,Nt=new H,pt=new xt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Jt(){return $===null?fe:1}let z=n;function gt(w,U){return t.getContext(w,U)}let ft,qe,_e,mt,Oe,Ge,P,T,W,oe,ie,ge,Se,q,ee,pe,N,Q,j,xe,ue,ve,ce;try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ne,!1),z===null){let U="webgl2";if(z=gt(U,w),z===null)throw gt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ye()}catch(w){throw t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),We("WebGLRenderer: "+w.message),w}function ye(){ft=new d1(z),ft.init(),ue=new Zw(z,ft),qe=new n1(z,ft,e,ue),_e=new Yw(z,ft),qe.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),B=z.createFramebuffer(),I=z.createFramebuffer(),F=z.createFramebuffer(),mt=new g1(z),Oe=new Dw,Ge=new Kw(z,ft,_e,Oe,qe,ue,mt),P=new f1(A),T=new xM(z),ve=new e1(z,T),W=new p1(z,T,mt,ve),oe=new x1(z,W,T,ve,mt),Q=new _1(z,qe,Ge),ee=new i1(Oe),ie=new Lw(A,P,ft,qe,ve,ee),ge=new Qw(A,Oe),Se=new Ow,q=new Hw(ft),N=new QT(A,P,_e,oe,p,l),pe=new qw(A,oe,qe),ce=new eE(z,mt,qe,_e),j=new t1(z,ft,mt),xe=new m1(z,ft,mt),mt.programs=ie.programs,A.capabilities=qe,A.extensions=ft,A.properties=Oe,A.renderLists=Se,A.shadowMap=pe,A.state=_e,A.info=mt}_!==vi&&(C=new y1(_,t.width,t.height,a,i,s));let re=new Vp(A,z);this.xr=re,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(w){w!==void 0&&(fe=w,this.setSize(he,be,!1))},this.getSize=function(w){return w.set(he,be)},this.setSize=function(w,U,Z=!0){if(re.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}he=w,be=U,t.width=Math.floor(w*fe),t.height=Math.floor(U*fe),Z===!0&&(t.style.width=w+"px",t.style.height=U+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(he*fe,be*fe).floor()},this.setDrawingBufferSize=function(w,U,Z){he=w,be=U,fe=Z,t.width=Math.floor(w*Z),t.height=Math.floor(U*Z),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(_===vi){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,U,Z,V){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,U,Z,V),_e.viewport(J.copy(de).multiplyScalar(Jt()).round())},this.getScissor=function(w){return w.copy(ze)},this.setScissor=function(w,U,Z,V){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,U,Z,V),_e.scissor(ae.copy(ze).multiplyScalar(Jt()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){_e.setScissorTest(se=w)},this.setOpaqueSort=function(w){Pe=w},this.setTransparentSort=function(w){ot=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,Z=!0){let V=0;if(w){let K=!1;if($!==null){let Ee=$.texture.format;K=m.has(Ee)}if(K){let Ee=$.texture.type,Le=g.has(Ee),we=N.getClearColor(),Ce=N.getClearAlpha(),Ue=we.r,Je=we.g,ct=we.b;Le?(y[0]=Ue,y[1]=Je,y[2]=ct,y[3]=Ce,z.clearBufferuiv(z.COLOR,0,y)):(M[0]=Ue,M[1]=Je,M[2]=ct,M[3]=Ce,z.clearBufferiv(z.COLOR,0,M))}else V|=z.COLOR_BUFFER_BIT}U&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),N.dispose(),Se.dispose(),q.dispose(),Ge.dispose(),Oe.dispose(),P.dispose(),oe.dispose(),W.dispose(),ve.dispose(),ce.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",Tt),re.removeEventListener("sessionend",vt),fn.stop()};function te(w){w.preventDefault(),Ll("WebGLRenderer: Context Lost."),L=!0}function Me(){Ll("WebGLRenderer: Context Restored."),L=!1;let w=mt.autoReset,U=pe.enabled,Z=pe.autoUpdate,V=pe.needsUpdate,K=pe.type;ye(),mt.autoReset=w,pe.enabled=U,pe.autoUpdate=Z,pe.needsUpdate=V,pe.type=K}function ne(w){We("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){let U=w.target;U.removeEventListener("dispose",Re),lt(U)}function lt(w){Ze(w),Oe.remove(w)}function Ze(w){let U=Oe.get(w).programs;U!==void 0&&(U.forEach(function(Z){ie.releaseProgram(Z)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,Z,V,K,Ee){U===null&&(U=Ke);let Le=K.isMesh&&K.matrixWorld.determinantAffine()<0,we=Di(w,U,Z,V,K);_e.setMaterial(V,Le);let Ce=Z.index,Ue=1;if(V.wireframe===!0){if(Ce=W.getWireframeAttribute(Z),Ce===void 0)return;Ue=2}let Je=Z.drawRange,ct=Z.attributes.position,De=Je.start*Ue,ut=(Je.start+Je.count)*Ue;Ee!==null&&(De=Math.max(De,Ee.start*Ue),ut=Math.min(ut,(Ee.start+Ee.count)*Ue)),Ce!==null?(De=Math.max(De,0),ut=Math.min(ut,Ce.count)):ct!=null&&(De=Math.max(De,0),ut=Math.min(ut,ct.count));let sn=ut-De;if(sn<0||sn===1/0)return;ve.setup(K,V,we,Z,Ce);let Pt,Et=j;if(Ce!==null&&(Pt=T.get(Ce),Et=xe,Et.setIndex(Pt)),K.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*Jt()),Et.setMode(z.LINES)):Et.setMode(z.TRIANGLES);else if(K.isLine){let Dn=V.linewidth;Dn===void 0&&(Dn=1),_e.setLineWidth(Dn*Jt()),K.isLineSegments?Et.setMode(z.LINES):K.isLineLoop?Et.setMode(z.LINE_LOOP):Et.setMode(z.LINE_STRIP)}else K.isPoints?Et.setMode(z.POINTS):K.isSprite&&Et.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Dn=K._multiDrawStarts,Ne=K._multiDrawCounts,qn=K._multiDrawCount,_t=Ce?T.get(Ce).bytesPerElement:1,Ns=Oe.get(V).currentProgram.getUniforms();for(let Nn=0;Nn<qn;Nn++)Ns.setValue(z,"_gl_DrawID",Nn),Et.render(Dn[Nn]/_t,Ne[Nn])}else if(K.isInstancedMesh)Et.renderInstances(De,sn,K.count);else if(Z.isInstancedBufferGeometry){let Dn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ne=Math.min(Z.instanceCount,Dn);Et.renderInstances(De,sn,Ne)}else Et.render(De,sn)};function Ot(w,U,Z,V){D!==null&&w.isNodeMaterial&&D.setObject(V,w),Be===!0&&ee.setState(w,Z,!1),w.transparent===!0&&w.side===ri&&w.forceSinglePass===!1?(w.side=ii,w.needsUpdate=!0,Si(w,U,V),w.side=_r,w.needsUpdate=!0,Si(w,U,V),w.side=ri):Si(w,U,V)}this.compile=function(w,U,Z=null){Z===null&&(Z=w),D!==null&&D.renderStart(w,U,Z),E=q.get(Z),E.init(U),S.push(E),Z.traverseVisible(function(K){K.isLight&&K.layers.test(U.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),w!==Z&&w.traverseVisible(function(K){K.isLight&&K.layers.test(U.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),Y=this.localClippingEnabled,Be=ee.init(this.clippingPlanes,Y),Be===!0&&ee.setGlobalState(this.clippingPlanes,U),D!==null&&pe.render(E.state.shadowsArray,Z,U);let V=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){let we=Ee[Le];Ot(we,Z,U,K),V.add(we)}else Ot(Ee,Z,U,K),V.add(Ee)}),E=S.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(w,U,Z=null){let V=this.compile(w,U,Z);return new Promise(K=>{function Ee(){if(V.forEach(function(Le){let Ce=Oe.get(Le).currentProgram;(Ce===void 0||Ce.isReady())&&V.delete(Le)}),V.size===0){K(w);return}setTimeout(Ee,10)}ft.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let nn=null;function Ut(w){nn&&nn(w)}function Tt(){fn.stop()}function vt(){fn.start()}let fn=new Sx;fn.setAnimationLoop(Ut),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(w){nn=w,re.setAnimationLoop(w),w===null?fn.stop():fn.start()},re.addEventListener("sessionstart",Tt),re.addEventListener("sessionend",vt),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(w,U);let Z=re.enabled===!0&&re.isPresenting===!0,V=C!==null&&($===null||Z)&&C.begin(A,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,U,$),E=q.get(w,S.length),E.init(U),E.state.textureUnits=Ge.getTextureUnits(),S.push(E),je.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?He.setFromArrayCamera(U):Te.setFromProjectionMatrix(je,Hi,U.reversedDepth),Y=this.localClippingEnabled,Be=ee.init(this.clippingPlanes,Y),b=Se.get(w,x.length),b.init(),x.push(b),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Le=A.xr.getDepthSensingMesh();Le!==null&&wt(Le,U,-1/0,A.sortObjects)}wt(w,U,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&b.sort(Pe,ot),Ct=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ct&&N.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),Be===!0&&ee.beginShadows();let K=E.state.shadowsArray;if(pe.render(K,w,U),Be===!0&&ee.endShadows(),(V&&C.hasRenderPass())===!1){let Le=b.opaque,we=b.transmissive;if(E.setupLights(),U.isArrayCamera){let Ce=U.cameras;if(we.length>0)for(let Ue=0,Je=Ce.length;Ue<Je;Ue++){let ct=Ce[Ue];yi(Le,we,w,ct)}Ct&&N.render(w);for(let Ue=0,Je=Ce.length;Ue<Je;Ue++){let ct=Ce[Ue];Ln(b,w,ct,ct.viewport)}}else we.length>0&&yi(Le,we,w,U),Ct&&N.render(w),Ln(b,w,U)}$!==null&&O===0&&(Ge.updateMultisampleRenderTarget($),Ge.updateRenderTargetMipmap($)),V&&C.end(A),w.isScene===!0&&w.onAfterRender(A,w,U),ve.resetDefaultState(),G=-1,R=null,S.pop(),S.length>0?(E=S[S.length-1],Ge.setTextureUnits(E.state.textureUnits),Be===!0&&ee.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,D!==null&&D.renderEnd()};function wt(w,U,Z,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Le=U.isArrayCamera?He:Te;if(!w.frustumCulled||w.intersectsFrustum(Le)){V&&pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(je);let we=oe.update(w),Ce=w.material;Ce.visible&&b.push(w,we,Ce,Z,pt.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let Le=U.isArrayCamera?He:Te;if(!w.frustumCulled||w.intersectsFrustum(Le)){let we=oe.update(w),Ce=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pt.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),pt.copy(we.boundingSphere.center)),pt.applyMatrix4(w.matrixWorld).applyMatrix4(je)),Array.isArray(Ce)){let Ue=we.groups;for(let Je=0,ct=Ue.length;Je<ct;Je++){let De=Ue[Je],ut=Ce[De.materialIndex];ut&&ut.visible&&b.push(w,we,ut,Z,pt.z,De,U)}}else Ce.visible&&b.push(w,we,Ce,Z,pt.z,null,U)}}}let Ee=w.children;for(let Le=0,we=Ee.length;Le<we;Le++)wt(Ee[Le],U,Z,V)}function Ln(w,U,Z,V){let{opaque:K,transmissive:Ee,transparent:Le}=w;E.setupLightsView(Z),Be===!0&&ee.setGlobalState(A.clippingPlanes,Z),V&&_e.viewport(J.copy(V)),K.length>0&&Xt(K,U,Z),Ee.length>0&&Xt(Ee,U,Z),Le.length>0&&Xt(Le,U,Z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function yi(w,U,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let De=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Ii(1,1,{generateMipmaps:!0,type:De?si:vi,minFilter:Li,samples:Math.max(4,qe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Ee=E.state.transmissionRenderTarget[V.id],Le=V.viewport||J;Ee.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);let we=A.getRenderTarget(),Ce=A.getActiveCubeFace(),Ue=A.getActiveMipmapLevel();A.setRenderTarget(Ee),A.getClearColor(X),le=A.getClearAlpha(),le<1&&A.setClearColor(16777215,.5),A.clear(),Ct&&N.render(Z);let Je=A.toneMapping;A.toneMapping=xr;let ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Be===!0&&ee.setGlobalState(A.clippingPlanes,V),Xt(w,Z,V),Ge.updateMultisampleRenderTarget(Ee),Ge.updateRenderTargetMipmap(Ee),ft.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ut=0,sn=U.length;ut<sn;ut++){let Pt=U[ut],{object:Et,geometry:Dn,material:Ne,group:qn}=Pt;if(Ne.side===ri&&Et.layers.test(V.layers)){let _t=Ne.side;Ne.side=ii,Ne.needsUpdate=!0,rn(Et,Z,V,Dn,Ne,qn),Ne.side=_t,Ne.needsUpdate=!0,De=!0}}De===!0&&(Ge.updateMultisampleRenderTarget(Ee),Ge.updateRenderTargetMipmap(Ee))}A.setRenderTarget(we,Ce,Ue),A.setClearColor(X,le),ct!==void 0&&(V.viewport=ct),A.toneMapping=Je}function Xt(w,U,Z){let V=U.isScene===!0?U.overrideMaterial:null;for(let K=0,Ee=w.length;K<Ee;K++){let Le=w[K],{object:we,geometry:Ce,group:Ue}=Le,Je=Le.material;Je.allowOverride===!0&&V!==null&&(Je=V),we.layers.test(Z.layers)&&rn(we,U,Z,Ce,Je,Ue)}}function rn(w,U,Z,V,K,Ee){D!==null&&K.isNodeMaterial&&D.setObject(w,K),w.onBeforeRender(A,U,Z,V,K,Ee),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(A,U,Z,V,w,Ee),K.transparent===!0&&K.side===ri&&K.forceSinglePass===!1?(K.side=ii,K.needsUpdate=!0,A.renderBufferDirect(Z,U,V,K,w,Ee),K.side=_r,K.needsUpdate=!0,A.renderBufferDirect(Z,U,V,K,w,Ee),K.side=ri):A.renderBufferDirect(Z,U,V,K,w,Ee),w.onAfterRender(A,U,Z,V,K,Ee)}function dn(w){let U=0;for(let Z of w)Z.texture!==null&&U++;return U}function Si(w,U,Z){U.isScene!==!0&&(U=Ke);let V=Oe.get(w),K=E.state.lights,Ee=E.state.shadowsArray,Le=K.state.version,we=ie.getParameters(w,K.state,Ee,U,Z,E.state.lightProbeGridArray),Ce=ie.getProgramCacheKey(we),Ue=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let Je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=P.get(w.envMap||V.environment,Je),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Re),Ue=new Map,V.programs=Ue,V.programVariants=new Map);let ct=Ue.get(Ce);if(ct!==void 0){if(V.currentProgram===ct&&V.lightsStateVersion===Le)return qt(w,we),ct}else we.uniforms=ie.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,Z,we),w.onBeforeCompile(we,A),ct=ie.acquireProgram(we,Ce),Ue.set(Ce,ct),V.uniforms=we.uniforms;let De=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=ee.uniform),qt(w,we),V.needsLights=pc(w),V.lightsStateVersion=Le,V.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.sunLights.value=K.state.sun,De.sunLightShadows.value=K.state.sunShadow,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.sunShadowMatrix.value=K.state.sunShadowMatrix,De.sunShadowCascade.value=K.state.sunShadowCascade,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix),V.numLightProbeGrids=dn(E.state.lightProbeGridArray),V.currentProgram=ct,V.uniformsList=null,ct}function Ao(w,U,Z,V,K){let Ee=Oe.get(w),Le=Ee.currentProgram.id+","+V+","+K,we=Ee.programVariants.get(Le);return we===void 0?(we=Si(w,U,Z),Ee.programVariants.set(Le,we)):(Ee.currentProgram=we,Ee.uniformsList=null,Ee.outputColorSpace=V,Ee.toneMapping=K),we}function pn(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=La.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function qt(w,U){let Z=Oe.get(w);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Di(w,U,Z,V,K){U.isScene!==!0&&(U=Ke),Ge.resetTextureUnits();let Ee=U.fog,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,we=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:rt.workingColorSpace,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ue=P.get(V.envMap||Le,Ce),Je=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ct=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!Z.morphAttributes.position,ut=!!Z.morphAttributes.normal,sn=!!Z.morphAttributes.color,Pt=xr;V.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Pt=A.toneMapping);let Et=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Dn=Et!==void 0?Et.length:0,Ne=Oe.get(V),qn=E.state.lights;if(Be===!0&&(Y===!0||w!==R)){let kt=w===R&&V.id===G;ee.setState(V,w,kt)}let _t=!1,Ns=!1;V.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==qn.state.version||K.isBatchedMesh&&Ne.batching===!1||!K.isBatchedMesh&&Ne.batching===!0||K.isBatchedMesh&&Ne.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ne.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ne.instancing===!1||!K.isInstancedMesh&&Ne.instancing===!0||K.isSkinnedMesh&&Ne.skinning===!1||!K.isSkinnedMesh&&Ne.skinning===!0||K.isInstancedMesh&&Ne.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ne.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ne.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ne.instancingMorph===!1&&K.morphTexture!==null||Ne.envMap!==Ue||V.fog===!0&&Ne.fog!==Ee||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ee.numPlanes||Ne.numIntersection!==ee.numIntersection)||Ne.vertexAlphas!==Je||Ne.vertexTangents!==ct||Ne.morphTargets!==De||Ne.morphNormals!==ut||Ne.morphColors!==sn||Ne.morphTargetsCount!==Dn||Ne.numLightProbeGrids!==dn(E.state.lightProbeGridArray)?_t=!0:(Ne.outputColorSpace!==we||Ne.toneMapping!==Pt)&&(Ns=!0):(_t=!0,Ne.__version=V.version);let Nn=Ne.currentProgram;(_t===!0||Ns===!0)&&(Nn=Ns===!0?Ao(V,U,K,we,Pt):Si(V,U,K),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Nn,Ne));let mc=!1,ss=!1,Os=!1,dt=Nn.getUniforms(),En=Ne.uniforms;if(_e.useProgram(Nn.program)&&(mc=!0,ss=!0,Os=!0),V.id!==G&&(G=V.id,ss=!0),mc||R!==w){_e.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(z,"projectionMatrix",w.projectionMatrix),dt.setValue(z,"viewMatrix",w.matrixWorldInverse);let yn=dt.map.cameraPosition;yn!==void 0&&yn.setValue(z,Nt.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&dt.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,ss=!0,Os=!0)}if(Ne.needsLights&&(qn.state.sunShadowMap.length>0&&dt.setValue(z,"sunShadowMap",qn.state.sunShadowMap,Ge),qn.state.directionalShadowMap.length>0&&dt.setValue(z,"directionalShadowMap",qn.state.directionalShadowMap,Ge),qn.state.spotShadowMap.length>0&&dt.setValue(z,"spotShadowMap",qn.state.spotShadowMap,Ge),qn.state.pointShadowMap.length>0&&dt.setValue(z,"pointShadowMap",qn.state.pointShadowMap,Ge)),K.isSkinnedMesh){dt.setOptional(z,K,"bindMatrix"),dt.setOptional(z,K,"bindMatrixInverse");let kt=K.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),dt.setValue(z,"boneTexture",kt.boneTexture,Ge))}K.isBatchedMesh&&(dt.setOptional(z,K,"batchingTexture"),dt.setValue(z,"batchingTexture",K._matricesTexture,Ge),dt.setOptional(z,K,"batchingIdTexture"),dt.setValue(z,"batchingIdTexture",K._indirectTexture,Ge),dt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&dt.setValue(z,"batchingColorTexture",K._colorsTexture,Ge));let Xi=Z.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&Q.update(K,Z,Nn),(ss||Ne.receiveShadow!==K.receiveShadow)&&(Ne.receiveShadow=K.receiveShadow,dt.setValue(z,"receiveShadow",K.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(En.envMapIntensity.value=U.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=nE()),ss){if(dt.setValue(z,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&Ha(En,Os),Ee&&V.fog===!0&&ge.refreshFogUniforms(En,Ee),ge.refreshMaterialUniforms(En,V,fe,be,E.state.transmissionRenderTarget[w.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let kt=v,yn=0;for(let Tr of E.state.lightProbeGridArray)Tr.texture!==null&&(kt.textures[yn]=Tr.texture,kt.min[yn]=Tr.boundingBox.min,kt.max[yn]=Tr.boundingBox.max,kt.resolution[yn]=Tr.resolution,yn++);for(let Tr in kt)kt[Tr].length=yn;En.probesSH.value=kt.textures,En.probesMin.value=kt.min,En.probesMax.value=kt.max,En.probesResolution.value=kt.resolution}La.upload(z,pn(Ne),En,Ge)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(La.upload(z,pn(Ne),En,Ge),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(z,"center",K.center),dt.setValue(z,"modelViewMatrix",K.modelViewMatrix),dt.setValue(z,"normalMatrix",K.normalMatrix),dt.setValue(z,"modelMatrix",K.matrixWorld),V.uniformsGroups!==void 0){let kt=V.uniformsGroups;for(let yn=0,Tr=kt.length;yn<Tr;yn++){let Im=kt[yn];ce.update(Im,Nn),ce.bind(Im,Nn)}}return Nn}function Ha(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function pc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,U,Z){let V=Oe.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Oe.get(w.texture).__webglTexture=U,Oe.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let Z=Oe.get(w);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,Z=0){$=w,k=U,O=Z;let V=null,K=!1,Ee=!1;if(w){let we=Oe.get(w);if(we.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(z.FRAMEBUFFER,we.__webglFramebuffer),J.copy(w.viewport),ae.copy(w.scissor),me=w.scissorTest,_e.viewport(J),_e.scissor(ae),_e.setScissorTest(me),G=-1;return}else if(we.__webglFramebuffer===void 0)Ge.setupRenderTarget(w);else if(we.__hasExternalTextures)Ge.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Je=w.depthTexture;if(we.__boundDepthTexture!==Je){if(Je!==null&&Oe.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(w)}}let Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);let Ue=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?V=Ue[U][Z]:V=Ue[U],K=!0):w.samples>0&&Ge.useMultisampledRTT(w)===!1?V=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[Z]:V=Ue,J.copy(w.viewport),ae.copy(w.scissor),me=w.scissorTest}else J.copy(de).multiplyScalar(fe).floor(),ae.copy(ze).multiplyScalar(fe).floor(),me=se;if(Z!==0&&(V=B),_e.bindFramebuffer(z.FRAMEBUFFER,V)&&_e.drawBuffers(w,V),_e.viewport(J),_e.scissor(ae),_e.setScissorTest(me),K){let we=Oe.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,Z)}else if(Ee){let we=U;for(let Ce=0;Ce<w.textures.length;Ce++){let Ue=Oe.get(w.textures[Ce]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ce,Ue.__webglTexture,Z,we)}}else if(w!==null&&Z!==0){let we=Oe.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,we.__webglTexture,Z)}G=-1};function rs(w){let U=Oe.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=qe.textureFormatReadable(w.format),U.__typeReadable=qe.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,Z,V,K,Ee,Le,we=0){if(!(w&&w.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ce=Ce[Le],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){_e.bindFramebuffer(z.FRAMEBUFFER,Ce);try{let Ue=w.textures[we],Je=Ue.format,ct=Ue.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+we);let De=rs(Ue);if(De.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&Z>=0&&Z<=w.height-K&&z.readPixels(U,Z,V,K,ue.convert(Je),ue.convert(ct),Ee)}finally{let Ue=$!==null?Oe.get($).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,U,Z,V,K,Ee,Le,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ce=Ce[Le],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(U>=0&&U<=w.width-V&&Z>=0&&Z<=w.height-K){_e.bindFramebuffer(z.FRAMEBUFFER,Ce);let Ue=w.textures[we],Je=Ue.format,ct=Ue.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+we);let De=rs(Ue);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.bufferData(z.PIXEL_PACK_BUFFER,Ee.byteLength,z.STREAM_READ),z.readPixels(U,Z,V,K,ue.convert(Je),ue.convert(ct),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let sn=$!==null?Oe.get($).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,sn);let Pt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await K_(z,Pt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ee),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ut),z.deleteSync(Pt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,Z=0){let V=Math.pow(2,-Z),K=Math.floor(w.image.width*V),Ee=Math.floor(w.image.height*V),Le=U!==null?U.x:0,we=U!==null?U.y:0;Ge.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Le,we,K,Ee),_e.unbindTexture()},this.copyTextureToTexture=function(w,U,Z=null,V=null,K=0,Ee=0){let Le,we,Ce,Ue,Je,ct,De,ut,sn,Pt=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(Z!==null)Le=Z.max.x-Z.min.x,we=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,Ue=Z.min.x,Je=Z.min.y,ct=Z.isBox3?Z.min.z:0;else{let dt=Math.pow(2,-K);Le=Math.floor(Pt.width*dt),we=Math.floor(Pt.height*dt),w.isDataArrayTexture?Ce=Pt.depth:w.isData3DTexture?Ce=Math.floor(Pt.depth*dt):Ce=1,Ue=0,Je=0,ct=0}V!==null?(De=V.x,ut=V.y,sn=V.z):(De=0,ut=0,sn=0);let Et=ue.convert(U.format),Dn=ue.convert(U.type),Ne;U.isData3DTexture?(Ge.setTexture3D(U,0),Ne=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ge.setTexture2DArray(U,0),Ne=z.TEXTURE_2D_ARRAY):(Ge.setTexture2D(U,0),Ne=z.TEXTURE_2D),_e.activeTexture(z.TEXTURE0),_e.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),_e.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_e.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let qn=_e.getParameter(z.UNPACK_ROW_LENGTH),_t=_e.getParameter(z.UNPACK_IMAGE_HEIGHT),Ns=_e.getParameter(z.UNPACK_SKIP_PIXELS),Nn=_e.getParameter(z.UNPACK_SKIP_ROWS),mc=_e.getParameter(z.UNPACK_SKIP_IMAGES);_e.pixelStorei(z.UNPACK_ROW_LENGTH,Pt.width),_e.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt.height),_e.pixelStorei(z.UNPACK_SKIP_PIXELS,Ue),_e.pixelStorei(z.UNPACK_SKIP_ROWS,Je),_e.pixelStorei(z.UNPACK_SKIP_IMAGES,ct);let ss=w.isDataArrayTexture||w.isData3DTexture,Os=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let dt=Oe.get(w),En=Oe.get(U),Xi=Oe.get(dt.__renderTarget),kt=Oe.get(En.__renderTarget);_e.bindFramebuffer(z.READ_FRAMEBUFFER,Xi.__webglFramebuffer),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let yn=0;yn<Ce;yn++)ss&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.get(w).__webglTexture,K,ct+yn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.get(U).__webglTexture,Ee,sn+yn)),z.blitFramebuffer(Ue,Je,Ue+Le,Je+we,De,ut,De+Le,ut+we,z.DEPTH_BUFFER_BIT,z.NEAREST);_e.bindFramebuffer(z.READ_FRAMEBUFFER,null),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||Oe.has(w)){let dt=Oe.get(w),En=Oe.get(U);_e.bindFramebuffer(z.READ_FRAMEBUFFER,I),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,F);for(let Xi=0;Xi<Ce;Xi++)ss?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dt.__webglTexture,K,ct+Xi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dt.__webglTexture,K),Os?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,En.__webglTexture,Ee,sn+Xi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,En.__webglTexture,Ee),K!==0?z.blitFramebuffer(Ue,Je,Ue+Le,Je+we,De,ut,De+Le,ut+we,z.COLOR_BUFFER_BIT,z.NEAREST):Os?z.copyTexSubImage3D(Ne,Ee,De,ut,sn+Xi,Ue,Je,Le,we):z.copyTexSubImage2D(Ne,Ee,De,ut,Ue,Je,Le,we);_e.bindFramebuffer(z.READ_FRAMEBUFFER,null),_e.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Os?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Ne,Ee,De,ut,sn,Le,we,Ce,Et,Dn,Pt.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Ne,Ee,De,ut,sn,Le,we,Ce,Et,Pt.data):z.texSubImage3D(Ne,Ee,De,ut,sn,Le,we,Ce,Et,Dn,Pt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ee,De,ut,Le,we,Et,Dn,Pt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ee,De,ut,Pt.width,Pt.height,Et,Pt.data):z.texSubImage2D(z.TEXTURE_2D,Ee,De,ut,Le,we,Et,Dn,Pt);_e.pixelStorei(z.UNPACK_ROW_LENGTH,qn),_e.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t),_e.pixelStorei(z.UNPACK_SKIP_PIXELS,Ns),_e.pixelStorei(z.UNPACK_SKIP_ROWS,Nn),_e.pixelStorei(z.UNPACK_SKIP_IMAGES,mc),Ee===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(Ne),_e.unbindTexture()},this.initRenderTarget=function(w){Oe.get(w).__webglFramebuffer===void 0&&Ge.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ge.setTextureCube(w,0):w.isData3DTexture?Ge.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ge.setTexture2DArray(w,0):Ge.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){k=0,O=0,$=null,_e.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};function Wp(r,e){if(e===yp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ia||e===sc){let t=r.getIndex();if(t===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Ia)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Lx(r){let e=new Map,t=new Map,n=r.clone();return Dx(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Dx(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Dx(r.children[n],e.children[n],t)}var Jh=class extends er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $p(t)}),this.register(function(t){return new jp(t)}),this.register(function(t){return new Qp(t)}),this.register(function(t){return new lm(t)}),this.register(function(t){return new cm(t)}),this.register(function(t){return new um(t)}),this.register(function(t){return new tm(t)}),this.register(function(t){return new nm(t)}),this.register(function(t){return new im(t)}),this.register(function(t){return new rm(t)}),this.register(function(t){return new Jp(t)}),this.register(function(t){return new sm(t)}),this.register(function(t){return new em(t)}),this.register(function(t){return new am(t)}),this.register(function(t){return new om(t)}),this.register(function(t){return new Kp(t)}),this.register(function(t){return new $h(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new $h(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new hm(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=$r.extractUrlBase(e);o=$r.resolveURL(c,this.path)}else o=$r.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new fo(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Bx){try{o[st.KHR_BINARY_GLTF]=new fm(e)}catch(f){i&&i(f);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new vm(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case st.KHR_MATERIALS_UNLIT:o[f]=new Zp;break;case st.KHR_DRACO_MESH_COMPRESSION:o[f]=new dm(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[f]=new pm;break;case st.KHR_MESH_QUANTIZATION:o[f]=new mm;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function iE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Wt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Kp=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],In);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new mo(u),c.distance=f;break;case"spot":c=new Zl(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Mr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Zp=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,n){let i=[];e.color=new Ve(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],In),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,It))}return Promise.all(i)}},Jp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},$p=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(s,s)}return Promise.all(i)}},jp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Qp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},em=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},tm=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],In)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,It)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},nm=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},im=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(s[0],s[1],s[2],In),Promise.all(i)}},rm=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},sm=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(s[0],s[1],s[2],In),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,It)),Promise.all(i)}},om=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},am=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?ni:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},lm=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},cm=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},um=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},$h=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}},hm=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Wi.TRIANGLES&&c.mode!==Wi.TRIANGLE_STRIP&&c.mode!==Wi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(let p of f){let _=new Xe,m=new H,g=new _n,y=new H(1,1,1),M=new kl(p.geometry,p.material,h);for(let b=0;b<h;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),M.setMatrixAt(b,_.compose(m,g,y));let v=null;for(let b in l)if(b==="_COLOR_0"){let E=l[b];M.instanceColor=new Wr(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let x=M.geometry;v=new wn,v.name=x.name;for(let S in x.attributes)v.setAttribute(S,x.attributes[S]);for(let S in x.morphAttributes)v.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let S of x.groups)v.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),M.geometry=v}let E=l[b];v.setAttribute(b,new Wr(E.array,E.itemSize,E.normalized))}Dt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Bx="glTF",uc=12,Nx={JSON:1313821514,BIN:5130562},fm=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,uc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-uc,s=new DataView(e,uc),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===Nx.JSON){let c=new Uint8Array(e,uc+o,a);this.content=n.decode(c)}else if(l===Nx.BIN){let c=uc+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},dm=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let f=_m[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=_m[u]||u.toLowerCase();if(o[u]!==void 0){let h=n.accessors[e.attributes[u]],d=Oa[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(let p in d.attributes){let _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}f(d)},a,c,In,h)})})}},pm=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},mm=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},jh=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,p=e*c,_=p-c,m=-2*d+3*h,g=d-h,y=1-m,M=g-h+f;for(let v=0;v!==a;v++){let b=o[_+v+a],E=o[_+v+l]*u,x=o[p+v+a],S=o[p+v]*u;s[v]=y*b+M*E+m*x+g*S}return s}},rE=new _n,gm=class extends jh{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return rE.fromArray(s).normalize().toArray(s),s}},Wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Oa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ox={9728:Qt,9729:Lt,9984:rh,9985:Ca,9986:So,9987:Li},Ux={33071:di,33648:ha,10497:fr},Xp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_m={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sE={CUBICSPLINE:void 0,LINEAR:ao,STEP:oo},qp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new mr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_r})),r.DefaultMaterial}function To(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let f=e[c];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(h)}if(i){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(h)}if(s){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],f=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function lE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cE(r){let e,t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yp(t.attributes):e=r.indices+":"+Yp(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Yp(r.targets[n]);return e}function Yp(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function xm(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hE=new Xe,vm=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?(this.textureLoader=new po(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Jl(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return To(s,a,i),Mr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load($r.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Xp[i.type],a=Oa[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Pn(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=Xp[i.type],c=Oa[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,m;if(d&&d!==f){let g=Math.floor(h/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,M=t.cache.get(y);M||(_=new c(a,g*d,i.count*d/u),M=new _a(_,d/u),t.cache.add(y,M)),m=new xa(M,l,h%d/u,p)}else a===null?_=new c(i.count*l):_=new c(a,h,i.count*l),m=new Pn(_,l,p);if(i.sparse!==void 0){let g=Xp.SCALAR,y=Oa[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new y(o[1],M,i.sparse.count*g),E=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Pn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,S=b.length;x<S;x++){let C=b[x];if(m.setX(C,E[x*l]),l>=2&&m.setY(C,E[x*l+1]),l>=3&&m.setZ(C,E[x*l+2]),l>=4&&m.setW(C,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ox[h.magFilter]||Lt,u.minFilter=Ox[h.minFilter]||Li,u.wrapS=Ux[h.wrapS]||fr,u.wrapT=Ux[h.wrapT]||fr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==Lt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(h){return new Promise(function(d,p){t.parse(h,d,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(m){let g=new en(m);g.needsUpdate=!0,d(g)}),t.load($r.resolveURL(h,s.path),_,void 0,p)})})}let f=u.then(function(h){return c===!0&&a.revokeObjectURL(l),Mr(h,o),h.userData.mimeType=o.mimeType||uE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Sa,mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ya,mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let f=i[st.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{let f=s.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],In),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,It)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ri);let u=s.alphaMode||qp.OPAQUE;if(u===qp.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===qp.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==gi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Qe(1,1),s.normalTexture.scale!==void 0)){let f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==gi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==gi){let f=s.emissiveFactor;a.emissive=new Ve().setRGB(f[0],f[1],f[2],In)}return s.emissiveTexture!==void 0&&o!==gi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,It)),Promise.all(c).then(function(){let f=new o(a);return s.name&&(f.name=s.name),Mr(f,s),t.associations.set(f,{materials:e}),s.extensions&&To(i,f,s),f})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Fx(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=cE(c),f=i[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Fx(new wn,c,t),c.mode===Wi.TRIANGLE_STRIP?h=h.then(d=>Wp(d,sc)):c.mode===Wi.TRIANGLE_FAN&&(h=h.then(d=>Wp(d,Ia))),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?oE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,p=u.length;d<p;d++){let _=u[d],m=o[d],g,y=c[d];if(m.mode===Wi.TRIANGLES||m.mode===Wi.TRIANGLE_STRIP||m.mode===Wi.TRIANGLE_FAN||m.mode===void 0){let M=s.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&v?new Fl(_,y):new hn(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Wi.LINES)g=new zl(_,y);else if(m.mode===Wi.LINE_STRIP)g=new ho(_,y);else if(m.mode===Wi.LINE_LOOP)g=new Hl(_,y);else if(m.mode===Wi.POINTS)g=new Xr(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&lE(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Mr(g,s),m.extensions&&To(i,g,m),t.assignFinalMaterial(g),f.push(g)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&To(i,f[0],s),f[0];let h=new Tn;s.extensions&&To(i,h,s),t.associations.set(h,{meshes:e});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Vt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new go(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let f=o[c];if(f){a.push(f);let h=new Xe;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Bl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){let d=i.channels[f],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){let h=f[0],d=f[1],p=f[2],_=f[3],m=f[4],g=[];for(let M=0,v=h.length;M<v;M++){let b=h[M],E=d[M],x=p[M],S=_[M],C=m[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let A=n._createAnimationTracks(b,E,x,S,C);if(A)for(let L=0;L<A.length;L++)g.push(A[L])}let y=new ql(s,void 0,g);return Mr(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,hE)});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){let d=u.userData.pivot,p=f[0];u.pivot=new H().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new va:c.length>1?u=new Tn:c.length===1?u=c[0]:u=new Dt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Mr(u,s),s.extensions&&To(n,u,s),s.matrix!==void 0){let f=new Xe;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Tn;n.name&&(s.name=i.createUniqueName(n.name)),Mr(s,n),n.extensions&&To(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++){let h=l[u];h.parent!==null?s.add(Lx(h)):s.add(h)}let c=u=>{let f=new Map;for(let[h,d]of i.associations)(h instanceof mi||h instanceof en)&&f.set(h,d);return u.traverse(h=>{let d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ls[s.path]===Ls.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Ls[s.path]){case Ls.weights:u=Kr;break;case Ls.rotation:u=Zr;break;case Ls.translation:case Ls.scale:u=Cs;break;default:n.itemSize===1?u=Kr:u=Cs;break}let f=i.interpolation!==void 0?sE[i.interpolation]:ao,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let _=new u(l[d]+"."+Ls[s.path],t.array,h,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=xm(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Zr?gm:jh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fE(r,e,t){let n=e.attributes,i=new un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let u=xm(Oa[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new H,l=new H;for(let c=0,u=s.length;c<u;c++){let f=s[c];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),h.normalized){let _=xm(Oa[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new pi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Fx(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=_m[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return rt.workingColorSpace!==In&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Mr(r,e),fE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?aE(r,e.targets,t):r})}var Qh=class extends Yl{constructor(e){super(e),this.type=si}parse(e){let o=function(S,C){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(C||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(C||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(C||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(C||""))}},f=function(S,C,A){C=C||1024;let D=S.pos,B=-1,I=0,F="",k=String.fromCharCode.apply(null,new Uint16Array(S.subarray(D,D+128)));for(;0>(B=k.indexOf(`
`))&&I<C&&D<S.byteLength;)F+=k,I+=k.length,D+=128,k=String.fromCharCode.apply(null,new Uint16Array(S.subarray(D,D+128)));return-1<B?(A!==!1&&(S.pos+=I+B+1),F+k.slice(0,B)):!1},h=function(S){let C=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,I={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},F,k;for((S.pos>=S.byteLength||!(F=f(S)))&&o(1,"no header found"),(k=F.match(C))||o(3,"bad initial token"),I.valid|=1,I.programtype=k[1],I.string+=F+`
`;F=f(S),F!==!1;){if(I.string+=F+`
`,F.charAt(0)==="#"){I.comments+=F+`
`;continue}if((k=F.match(A))&&(I.gamma=parseFloat(k[1])),(k=F.match(L))&&(I.exposure=parseFloat(k[1])),(k=F.match(D))&&(I.valid|=2,I.format=k[1]),(k=F.match(B))&&(I.valid|=4,I.height=parseInt(k[1],10),I.width=parseInt(k[2],10)),I.valid&2&&I.valid&4)break}return I.valid&2||o(3,"missing format specifier"),I.valid&4||o(3,"missing image size specifier"),I},d=function(S,C,A){let L=C;if(L<8||L>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);L!==(S[2]<<8|S[3])&&o(3,"wrong scanline width");let D=new Uint8Array(4*C*A);D.length||o(4,"unable to allocate buffer space");let B=0,I=0,F=4*L,k=new Uint8Array(4),O=new Uint8Array(F),$=A;for(;$>0&&I<S.byteLength;){I+4>S.byteLength&&o(1),k[0]=S[I++],k[1]=S[I++],k[2]=S[I++],k[3]=S[I++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=L)&&o(3,"bad rgbe scanline format");let G=0,R;for(;G<F&&I<S.byteLength;){R=S[I++];let ae=R>128;if(ae&&(R-=128),(R===0||G+R>F)&&o(3,"bad scanline data"),ae){let me=S[I++];for(let X=0;X<R;X++)O[G++]=me}else O.set(S.subarray(I,I+R),G),G+=R,I+=R}let J=L;for(let ae=0;ae<J;ae++){let me=0;D[B]=O[ae+me],me+=L,D[B+1]=O[ae+me],me+=L,D[B+2]=O[ae+me],me+=L,D[B+3]=O[ae+me],B+=4}$--}return D},p=function(S,C,A,L){let D=S[C+3],B=Math.pow(2,D-128)/255;A[L+0]=S[C+0]*B,A[L+1]=S[C+1]*B,A[L+2]=S[C+2]*B,A[L+3]=1},_=function(S,C,A,L){let D=S[C+3],B=Math.pow(2,D-128)/255;A[L+0]=Es.toHalfFloat(Math.min(S[C+0]*B,65504)),A[L+1]=Es.toHalfFloat(Math.min(S[C+1]*B,65504)),A[L+2]=Es.toHalfFloat(Math.min(S[C+2]*B,65504)),A[L+3]=Es.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let g=h(m),y=g.width,M=g.height,v=d(m.subarray(m.pos),y,M),b,E,x;switch(this.type){case Wn:x=v.length/4;let S=new Float32Array(x*4);for(let A=0;A<x;A++)p(v,A*4,S,A*4);b=S,E=Wn;break;case si:x=v.length/4;let C=new Uint16Array(x*4);for(let A=0;A<x;A++)_(v,A*4,C,A*4);b=C,E=si;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:M,data:b,header:g.string,gamma:g.gamma,exposure:g.exposure,type:E,colorSpace:In,minFilter:Lt,magFilter:Lt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};function kx(r,e){let t=new Tn;r.position.y=-1.78,r.scale.setScalar(1.54),t.add(r);let n=[1,2,3,4].map(s=>r.getObjectByName("GothicCabinet_01_door"+s));for(let[s,o]of[[0,.32],[1,1.32]]){for(let l of[-1,1]){let c=l*1.04;for(let u=0;u<4;u++){let f=e[(u+s+(l+1))%e.length].clone(!0),h=new un().setFromObject(f).getSize(new H),d=(.99+.12*Math.sin(u*1.8+l+s))/h.y,p=h.x*d;f.scale.setScalar(d),f.position.set(c-l*p/2,o*1.54-1.78+.008,.38+.036*Math.sin(u+s)),f.rotation.y=.02*Math.sin(u+l),t.add(f),c-=l*(p+.012)}}let a=-.21;for(let l=0;l<3;l++){let c=e[(s+l+2)%e.length].clone(!0),u=new un().setFromObject(c).getSize(new H),f=(1.04+.11*Math.cos(l*.9+s))/u.y,h=u.x*f;c.scale.setScalar(f),c.position.set(a+h/2,o*1.54-1.78+.008,.22+.035*Math.cos(l+s)),t.add(c),a+=h+.012}}function i(s,o){for(let[a,l]of n.entries()){let c=s-[0,.11,.23,.33][a],u=Vt.smootherstep(c,0,1.28),f=Vt.smootherstep(c,3.62,5.28),h=[.57,.76,.42,.6][a],d=1.59,p=o?h:u*(d-(d-h)*f);l.rotation.y=(a%2===0?-1:1)*p}}return{object:t,update:i}}function zx(){let r=[[-2.3,1.1,1.85],[-1.56,1.64,1.45],[-.72,1.82,.75],[.36,1.66,.96],[1.34,1.41,1.67],[2.17,1.09,2.18],[2.23,.28,1.77],[1.62,-.05,2.31],[2.16,-.96,1.96],[1.28,-1.32,1.35],[.34,-1.46,.97],[-1.31,-1.28,1.63],[-2.17,-.82,2.15],[-1.55,-.2,2.35],[-2.08,.29,1.65],[-.58,.34,1.12],[.64,.65,1.29],[-.41,1.12,1.28]],e=new wn;e.setAttribute("position",new cn(r.flat(),3)),e.setAttribute("seed",new cn(r.map((s,o)=>o*2.39996),1));let t={time:{value:0},pixelScale:{value:1}},n=new _i({uniforms:t,transparent:!0,depthWrite:!1,blending:$l,toneMapped:!1,vertexShader:`
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
      }`}),i=new Xr(e,n);return i.frustumCulled=!1,{points:i,update(s,o){t.time.value=s,t.pixelScale.value=o},dispose(){e.dispose(),n.dispose()}}}function es(r,e,t,n,i){r.beginPath(),r.moveTo(e,t),r.lineTo(n,i),r.stroke()}function Hx(r,e,t,n,i){r.beginPath(),r.ellipse(e,t,n,i,0,0,2*Math.PI),r.stroke()}function dE(r){for(let i=0;i<7;i++){let s=83+i*8;r.lineWidth=i===6?3:1.7,r.beginPath(),r.moveTo(320-s,411),r.lineTo(320-s,293),r.arc(320,293,s,Math.PI,Math.PI*2),r.lineTo(320+s,411),r.stroke()}for(let i=1;i<16;i++){let s=Math.PI+i*Math.PI/16,o=Math.cos(s),a=Math.sin(s);es(r,320+96*o,293+96*a,320+130*o,293+130*a)}for(let i of[-1,1]){let s=320+i*108;for(let[o,a]of[[289,61],[296,56],[304,50],[407,52],[414,61],[422,69]])es(r,s-a/2,o,s+a/2,o);for(let o=-2;o<=2;o++)es(r,s+o*6,310,s+o*6,401)}r.lineWidth=1.5;for(let i=-3;i<=3;i++)es(r,320+i*14,378,320+i*52,451);for(let i of[381,388,398,411,428,450])es(r,320-(i-354)*1.6,i,320+(i-354)*1.6,i)}function pE(r){r.save(),r.translate(320,302);for(let e=0;e<32;e++){r.rotate(Math.PI/16);let t=e%4===0?148:e%2===0?127:108;r.fillStyle=e%2===0?"#dedede":"#909090",r.beginPath(),r.moveTo(22,0),r.quadraticCurveTo(61,-15,t,0),r.lineTo(65,6),r.closePath(),r.fill(),r.strokeStyle="#fafafa",r.lineWidth=1.5,r.beginPath(),r.moveTo(25,0),r.quadraticCurveTo(68,10,t,0),r.stroke()}r.strokeStyle="#fff",r.lineWidth=2;for(let e of[21,27,68,88,153])Hx(r,0,0,e,e);r.lineWidth=1;for(let e=0;e<144;e++)r.rotate(Math.PI/72),es(r,157,0,e%6?161:165,0);r.restore()}function mE(r){r.save(),r.translate(320,313);let e=(t,n)=>{r.beginPath(),r.moveTo(-137,t-4),r.lineTo(-4,t-64),r.lineTo(137,t-7),r.lineTo(7,t+58+n),r.closePath()};for(let t=0;t<4;t++){let n=77-t*50;r.fillStyle="#000",e(n,7),r.fill(),r.lineWidth=2.8,r.stroke(),e(n,0),r.fill(),r.stroke(),r.lineWidth=1.2;for(let i=1;i<21;i++){let s=i/21;es(r,-137+144*s,n-4+62*s,-137+144*s,n-1+63*s)}for(let[i,s]of[[-99,-4],[-4,-45],[100,-7],[7,39]])Hx(r,i,n+s,5,2.3);if(t===3)for(let i=0;i<4;i++)r.beginPath(),r.moveTo(-80+i*14,n+1+i*5),r.lineTo(-2+i*7,n-33+i*9),r.lineTo(76-i*11,n-2+i*6),r.stroke()}r.restore()}function gE(r){let e=[];function t(n,i){let s=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),c=(102+46*a)*s,u=(102+46*a)*o,f=46*l,h=.56*u-.83*f;return[320+c*.91-h*.42,306+c*.42+h*.91,.83*u+.56*f]}for(let n=0;n<54;n++)for(let i=0;i<18;i++){let s=2*Math.PI*n/54,o=2*Math.PI*i/18,a=[t(s,o),t(s+2*Math.PI/54,o),t(s+2*Math.PI/54,o+2*Math.PI/18),t(s,o+2*Math.PI/18)];e.push({points:a,depth:a.reduce((l,c)=>l+c[2],0)/4})}e.sort((n,i)=>n.depth-i.depth),r.fillStyle="#000",r.lineJoin="round";for(let{points:n,depth:i}of e){r.beginPath(),r.moveTo(...n[0].slice(0,2));for(let s of n.slice(1))r.lineTo(s[0],s[1]);r.closePath(),r.fill(),r.lineWidth=i>45?2.5:1.65,r.strokeStyle=i>15?"#fff":"#aaa",r.stroke()}}var _E={sites:dE,ads:pE,apps:mE,"3d":gE},xE={sites:15125659,ads:15973768,apps:15193766,"3d":15455419};function vE(r,e){let t=document.createElement("canvas");t.width=1280,t.height=1712;let n=t.getContext("2d",{alpha:!1});n.scale(2,2),n.fillStyle="#000",n.fillRect(0,0,640,856),n.strokeStyle="#e9e9e9",n.lineWidth=2.8,n.strokeRect(46,39,548,778),n.lineWidth=1.2,n.strokeRect(54,47,532,762);for(let[s,o,a]of[[61,54,0],[579,54,Math.PI/2],[579,802,Math.PI],[61,802,-Math.PI/2]])n.save(),n.translate(s,o),n.rotate(a),n.lineWidth=1.8,n.beginPath(),n.moveTo(0,54),n.bezierCurveTo(8,37,2,10,42,8),n.quadraticCurveTo(26,24,16,16),n.stroke(),n.beginPath(),n.moveTo(6,6),n.quadraticCurveTo(22,1,53,0),n.stroke(),n.restore();n.save(),_E[e](n),n.restore(),n.fillStyle="#fff",n.strokeStyle="#cacaca",n.lineWidth=1.75,es(n,139,494,302,494),es(n,338,494,501,494),n.save(),n.translate(320,494),n.rotate(Math.PI/4),n.strokeRect(-3.5,-3.5,7,7),n.restore(),n.textAlign="center",n.font="600 "+(e==="apps"?90:113)+"px Georgia, serif",n.fillText(r,320,618,520),n.lineWidth=1.8;for(let s of[-1,1])n.beginPath(),n.moveTo(320,710),n.bezierCurveTo(320+s*15,710,320+s*24,694,320+s*51,702),n.stroke();let i=new Qi(t);return i.anisotropy=8,i}function Gx(r,e,t,n,i,s){let o=vE(t.title,t.key),a=r.material.clone(),l=e.getSize(new H);return a.onBeforeCompile=c=>{c.uniforms.boardAngle=i,c.uniforms.foilGleam=s,c.uniforms.boardJoint={value:new H(e.max.x-.002,e.max.z-.004,l.x)},c.uniforms.foilMask={value:o},c.uniforms.bindingGrain={value:n},c.uniforms.coverExtent={value:new xt(e.max.z,e.min.y,l.z,l.y)},c.uniforms.coverDye={value:new H(...t.dye)},c.uniforms.foilColor={value:new Ve(xE[t.key])},c.vertexShader=`varying vec2 foilUV; varying float coverFace; uniform vec4 coverExtent;
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
      normal=normalize(normal-clamp(emboss,vec3(-.20),vec3(.20)));`)},a.customProgramCacheKey=()=>"archive-engraving",r.material=a,()=>{a.dispose(),o.dispose()}}var yE=[{key:"sites",title:"\u0421\u0430\u0439\u0442\u044B",dye:[.76,1.05,1.5],height:1.24,slot:-.32,floor:1.32,x:-1.89,y:1.04,yaw:-.27,roll:.085,delay:.97},{key:"ads",title:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",dye:[2.03,.77,.62],height:1.2,slot:.32,floor:1.32,x:1.9,y:.89,yaw:.42,roll:-.105,delay:1.19},{key:"apps",title:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",dye:[.68,1.34,1.03],height:1.22,slot:-.34,floor:.32,x:-1.92,y:-.66,yaw:-.15,roll:-.064,delay:1.48},{key:"3d",title:"3D",dye:[1.55,.97,1.48],height:1.17,slot:.32,floor:.32,x:1.85,y:-.82,yaw:.52,roll:.069,delay:1.72}],{smootherstep:hc,lerp:Ua,clamp:SE}=Vt;function Vx(r,e,t,n,i,s){let o=yE.map((h,d)=>{let p=new Tn,_=i[d].clone(!0),m=new un().setFromObject(_),g=m.getSize(new H),y=m.getCenter(new H),M=h.height/g.y;_.scale.set(M*1.1,M,M*1.22),_.position.copy(y).multiply(_.scale).negate();let v=_.getObjectByProperty("isMesh",!0),b={value:0},E={value:0},x=Gx(v,m,h,s,b,E),S=new Tn;return S.rotation.y=-Math.PI/2,S.add(_),p.add(S),r.add(p),{...h,index:d,body:p,releaseStamp:x,hinge:b,gleam:E,width:g.z*_.scale.z,depth:g.x*_.scale.x,link:n.querySelector('[data-document="'+h.key+'"]'),progress:0,hover:0,screen:null,rest:new Dt,restWorld:new Xe}}),a=new H,l=new _n;function c(h,d){l.copy(r.quaternion).invert();for(let p of o){let _=Math.max(p.progress,t.paused?1:SE((h-p.delay)/1.94,0,1));p.progress=_;let m=hc(_,0,.5),g=hc(_,.43,.98),y=hc(_,.48,.96),M=Math.sin(g*Math.PI),v=hc(_,.79,1),b=Math.sin(v*Math.PI*2)*(1-v),E=Math.sign(p.slot),x=t.heroFocus===p.key?1:0;p.hover=Ua(p.hover,x,t.paused?1:1-Math.exp(-d*9)),p.gleam.value=p.hover;let S=p.floor*1.54-1.78+p.height/2+.009,C=.58-p.width/2,A=t.paused?0:hc(_,.8,1),L=h*(.83+.055*p.index)+p.index*1.79;a.set(p.x+A*.009*Math.sin(L*.72),p.y+A*.026*Math.sin(L),2.04+A*.013*Math.cos(L*.87)),a.applyQuaternion(l),p.body.position.set(Ua(p.slot,a.x,g)+E*.055*M,Ua(S,a.y,g)+.031*m+.112*M,Ua(Ua(C,1.92,m),a.z,g)+.21*M+.032*b),p.body.rotation.set(-.085*y-.105*M,Ua(Math.PI/2,p.yaw,y)+A*.011*Math.sin(L*.75),p.roll*y+E*(.069*M-.018*b)+A*.009*Math.cos(L)),p.rest.position.copy(p.body.position),p.rest.quaternion.copy(p.body.quaternion),p.rest.updateMatrix();let D=p.hover*g;p.body.position.y+=D*.065,p.body.position.z+=D*.1,p.body.rotation.y-=E*.08*D,p.body.rotation.z-=E*.025*D}n.classList.toggle("books-presented",o[o.length-1].progress>=.9)}let u=new H;function f(){let h=n.clientWidth,d=n.clientHeight;for(let p of o){p.restWorld.multiplyMatrices(r.matrixWorld,p.rest.matrix);let _=1/0,m=1/0,g=-1/0,y=-1/0;for(let b of[p.body.matrixWorld,p.restWorld])for(let E of[-p.width/2,p.width/2])for(let x of[-p.height/2,p.height/2]){u.set(E,x,p.depth/2).applyMatrix4(b).project(e);let S=(u.x+1)*h/2,C=(1-u.y)*d/2;_=Math.min(_,S),g=Math.max(g,S),m=Math.min(m,C),y=Math.max(y,C)}let M=p.screen,v={left:Math.round(_)-2,top:Math.round(m)-2,right:Math.round(g)+2,bottom:Math.round(y)+2};if(!M||p.viewWidth!==h||p.viewHeight!==d||v.left!==M.left||v.top!==M.top||v.right!==M.right||v.bottom!==M.bottom){let b=p.link.style;b.setProperty("--doc-x",100*v.left/h+"%"),b.setProperty("--doc-y",100*v.top/d+"%"),b.setProperty("--doc-w",100*(v.right-v.left)/h+"%"),b.setProperty("--doc-h",100*(v.bottom-v.top)/d+"%"),p.screen=v,p.viewWidth=h,p.viewHeight=d}p.link.classList.toggle("book-in-cabinet",p.progress<=.5)}}return{find:h=>o.find(d=>d.key===h),update:c,project:f,status:()=>o.map(h=>({key:h.key,progress:h.progress,hover:h.hover,position:h.body.position.toArray(),screen:h.screen})),dispose(){for(let h of o)r.remove(h.body),h.releaseStamp()}}}var ts=720,oi=960,ME=Vt.clamp,bE=()=>matchMedia("(orientation: portrait)").matches?"portrait":"wide",TE=new URL("3d/assets/images/",document.baseURI),ym=new Map;function fc(){let r=bE();if(!ym.has(r)){let e=new Image;e.decoding="async",e.src=new URL("entrance-"+r+".webp?v=ice-2",TE).href,ym.set(r,e)}return ym.get(r)}function nr(r,e,t,n,i){r.beginPath(),r.moveTo(e,t),r.lineTo(n,i),r.stroke()}function wE(){let r=document.createElement("canvas");r.width=r.height=160;let e=r.getContext("2d"),t=e.createImageData(160,160),n=321;for(let i=0;i<t.data.length;i+=4){n=Math.imul(1664525,n)+1013904223>>>0;let s=(n/4294967296-.5)*13;t.data[i]=233+s,t.data[i+1]=224+s,t.data[i+2]=202+s,t.data[i+3]=255}return e.putImageData(t,0,0),r}function Wx(r,e){r.fillStyle=r.createPattern(e,"repeat"),r.fillRect(0,0,ts,oi);let t=r.createLinearGradient(0,0,ts,0);t.addColorStop(0,"#62472844"),t.addColorStop(.035,"#fff4cd22"),t.addColorStop(.13,"#fff0"),t.addColorStop(1,"#66563f17"),r.fillStyle=t,r.fillRect(0,0,ts,oi)}function EE(r,e){r.fillStyle="#193345",r.fillRect(30,34,660,892),r.save(),r.translate(60,85),r.strokeStyle="#92adac80",r.lineWidth=1;for(let t=0;t<=600;t+=24)nr(r,t,0,t,675);for(let t=0;t<=675;t+=24)nr(r,0,t,600,t);r.strokeStyle="#e3dcbf",r.lineWidth=2.5;for(let t=0;t<6;t++){let n=73+t*17,i=1-e,s=n+e*(116+t*20-n),o=541;r.beginPath(),r.moveTo(300-s,o),r.lineTo(300-s,240),r.bezierCurveTo(300-s,240-i*n*.55-e*100,300-i*n*.55,240-n,300,240-n),r.bezierCurveTo(300+i*n*.55,240-n,300+s,240-i*n*.55-e*100,300+s,240),r.lineTo(300+s,o),r.stroke()}r.globalAlpha=e,r.fillStyle="#152932",r.fillRect(10,275,580,391),r.strokeStyle="#ccb68e";for(let t of[10,198,390,590])nr(r,t,257,t,667);for(let t of[271,362,570,666])nr(r,10,t,590,t);r.fillStyle="#cdc8af",r.fillRect(32,302,119,8),r.fillRect(32,324,88,4),r.strokeRect(218,386,151,150),r.strokeRect(411,386,151,150),r.restore()}function AE(r,e){r.fillStyle="#c87856",r.fillRect(28,32,664,896),r.save(),r.translate(360,370);for(let[t,n]of[["#edba8e",11],["#672e2b",-4]]){r.save(),r.translate(n*(1.5-e),0),r.rotate((1-e)*.17),r.fillStyle=t,r.globalAlpha=t==="#672e2b"?e:1;for(let i=0;i<40;i++)r.rotate(Math.PI/20),r.beginPath(),r.moveTo(32,0),r.bezierCurveTo(110,-9,193,-72,242,-16),r.quadraticCurveTo(158,-9,32,2),r.fill();r.restore()}r.restore(),r.strokeStyle="#512f29",r.lineWidth=2;for(let[t,n]of[[65,72],[650,72],[65,880],[650,880]])nr(r,t-10,n,t+10,n),nr(r,t,n-10,t,n+10);r.fillStyle="#5b2e2b";for(let t=0;t<5;t++)r.fillRect(68+t*39,796,28,31)}function RE(r,e){r.fillStyle="#24423e",r.fillRect(30,34,660,892);for(let t=0;t<3;t++){r.save();let n=(t-1)*(1-e);r.translate(87+n*43,208-n*76),r.transform(1,-.22*(1-e),.28*(1-e),1,0,0),r.fillStyle=t===2?"#d9dcc6":"rgba(149,188,165,.72)",r.strokeStyle="#e4dcb6",r.lineWidth=3,r.fillRect(0,0,525,370),r.strokeRect(0,0,525,370),r.fillStyle="#395950",r.fillRect(0,0,525,48);for(let i=0;i<3;i++)r.beginPath(),r.arc(22+i*14,24,3,0,2*Math.PI),r.fillStyle="#d7d2b7",r.fill();r.fillStyle="#a5b4a0",r.fillRect(18,69,91,279);for(let i=0;i<3;i++)r.strokeStyle="#819786",r.strokeRect(134,80+i*80,364,54),r.fillStyle="#829884",r.fillRect(156,101+i*80,181-i*24,7);r.restore()}}function CE(r,e,t){let n=ts*(t*1.55-.09),i=o=>n+17*Math.sin(o*.031)+9*Math.sin(o*.089);if(e?.complete&&e.naturalWidth){r.save(),r.beginPath(),r.moveTo(0,0);for(let a=0;a<=oi;a+=8)r.lineTo(i(a),a);r.lineTo(0,oi),r.closePath(),r.clip();let o=Math.max(ts/e.width,oi/e.height);r.drawImage(e,(ts-e.width*o)/2,(oi-e.height*o)/2,e.width*o,e.height*o),r.restore()}r.save(),r.lineCap="round";for(let o=0;o<19;o++){let a=23+o*51,l=i(a),c=25+24*Math.sin(o*7.1)**2;r.strokeStyle="#c2e1e7",r.lineWidth=1.8,nr(r,l-22,a,l+c,a-c*.55);for(let u=1;u<5;u++){let f=l+c*u/6,h=a-c*u/6*.55;nr(r,f,h,f+2,h-10),nr(r,f,h,f+10,h+2)}}let s=r.createLinearGradient(n-52,0,n+50,0);s.addColorStop(0,"#c6e5ef00"),s.addColorStop(.48,"#e3f7ff88"),s.addColorStop(1,"#efffff00"),r.fillStyle=s,r.fillRect(n-52,0,102,oi),r.restore()}function Xx(r){let e=wE();function t(){let u=document.createElement("canvas");u.width=ts,u.height=oi;let f=u.getContext("2d");Wx(f,e);let h=new Qi(u);return h.colorSpace=It,h.anisotropy=4,{ctx:f,texture:h}}let n=t(),i=t(),s=n.ctx;s.strokeStyle="#9f927655",s.lineWidth=1.6;for(let u=-oi;u<ts+oi;u+=30)nr(s,u,0,u+oi,oi),nr(s,u,0,u-oi,oi);s.strokeStyle="#a39579",s.strokeRect(34,32,ts-68,oi-64);let o=r==="3d"?fc():null,a={sites:EE,ads:AE,apps:RE},l=-1;function c(u){let f=Math.round(ME(u,0,1)*30);l!==f&&(l=f,Wx(i.ctx,e),r==="3d"?CE(i.ctx,o,f/30):a[r](i.ctx,f/30),i.texture.needsUpdate=!0)}return c(0),{lining:n.texture,face:i.texture,update:c,dispose(){n.texture.dispose(),i.texture.dispose()}}}function PE(r){let t=document.createElement("canvas");t.width=288,t.height=96;let n=t.getContext("2d");function i(o){n.beginPath(),n.moveTo(...o[0]);for(let a of o.slice(1))n.lineTo(...a);n.stroke()}for(let o=0;o<3;o++){if(n.save(),n.translate(96*(o+.5),96/2),r==="3d"){n.strokeStyle=["#f0f9ff","#cae1f6","#fffaff"][o],n.lineWidth=o===2?6:4.4,n.lineCap="round";for(let a=0;a<6;a++)i([[0,0],[0,-34]]),i([[-8,-26],[0,-17],[8,-26]]),o===0&&i([[-6,-32],[0,-26],[6,-32]]),n.rotate(Math.PI/3)}else r==="sites"?(n.strokeStyle=["#a8d6da","#efe2bf","#a3bfcf"][o],n.lineWidth=6,o===0?(i([[-22,0],[22,0]]),i([[0,-22],[0,22]])):o===1?i([[-21,-19],[-21,18],[20,18]]):(i([[-31,0],[28,0]]),i([[18,-9],[18,9]]))):r==="ads"?(n.fillStyle=["#efcb91","#b45d43","#66392f"][o],n.beginPath(),n.moveTo(-24,5),n.lineTo(-7,-14-o*2),n.lineTo(27,-7),n.lineTo(10,11),n.lineTo(-21,16),n.fill()):(n.fillStyle=["#b7e1cd","#eadfb7","#7ca89c"][o],o===0?(n.strokeStyle=n.fillStyle,n.lineWidth=7,n.strokeRect(-19,-19,38,38)):(n.fillRect(-17,-17,34,34),o===2&&n.clearRect(2,-17,15,13)));n.restore()}let s=new Qi(t);return s.colorSpace=It,s}function qx(r,e,t,n,i){let s=r==="3d",o=r==="apps",a=r==="ads",l=s?49:o?30:36,c=new wn,u=[],f=[],h=[],d=[],p=[],_=271+r.charCodeAt(0),m=()=>(_=Math.imul(1664525,_)+1013904223>>>0,_/4294967296);for(let b=0;b<l;b++){let E=b%3!==0,x=b%5<3,S=x?.44+m()*.27:(E?.39:.27)+m()*.2,C=i(E,S),A=Vt.smoothstep(S,.4,.81),L=s?Math.min(.94,Math.max(.03,A*1.55-.09)):.25+.54*m(),D=x?e*(L-.5):C.x-e/2,B=(m()-(a&&x?.27:.46))*t*(x&&!s?.6:.92);u.push(D,B,n+(x?.014:C.z+.009));let I=Math.sign(D)||1;f.push(I*e*(x?.08+.23*m():.22+.52*m()),t*((s?.22:.04)+.45*m()),.065+m()*.19),h.push(e*(.03+b%6*.07),t*(.27+Math.floor(b/6)*.048),n+.15),d.push(S,(s?.37:.29)+m()*.13);let F=(s?.038:.031)+m()**2*(s?.032:.027);p.push(F,m()*Math.PI*2,b%3,m())}for(let[b,E,x]of[["position",u,3],["drift",f,3],["socket",h,3],["life",d,2],["style",p,4]])c.setAttribute(b,new cn(E,x));let g=PE(r),y={atlas:{value:g},time:{value:0},snowTime:{value:0},focal:{value:1},dpr:{value:1},snow:{value:Number(s)},pixels:{value:Number(o)},foil:{value:Number(a)}},M=new _i({uniforms:y,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`
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
      }`}),v=new Xr(c,M);return v.frustumCulled=!1,{points:v,update(b,E,x,S){y.time.value=b,y.snowTime.value=S,y.focal.value=E,y.dpr.value=x},dispose(){c.dispose(),M.dispose(),g.dispose()}}}var{smoothstep:bm,smootherstep:ef,lerp:Sm}=Vt,wo=32,Yx=(r,e)=>r?bm(e,.34,.68):bm(e,.24,.56),Kx=r=>.98*Math.sin(Math.PI*r);function Zx(r,e,t,n){let i=0,s=0,o=a=>e+t*(.32+.84*Math.sin(Math.PI*a)-a);for(let a=0;a<=wo;a++){if(a){let l=o((a-.5)/wo);i+=Math.cos(l)*r/wo,s+=Math.sin(l)*r/wo}n?.(a,i,s,o(a/wo))}return{x:i,z:s}}function Mm(r,e,t){let n=new pr(r,e,wo,1),i=n.attributes.position,s=n.attributes.normal;i.setUsage(Vh),s.setUsage(Vh);let o=new hn(n,t);o.frustumCulled=!1;function a(l,c){Zx(r,l,c,(u,f,h,d)=>{for(let p=0;p<2;p++){let _=u+p*(wo+1);i.setXYZ(_,f,(.5-p)*e,h),s.setXYZ(_,-Math.sin(d),0,Math.cos(d))}}),i.needsUpdate=s.needsUpdate=!0}return{mesh:o,bend:a,dispose:()=>n.dispose()}}function Jx({renderer:r,scene:e,camera:t,container:n,book:i,host:s}){let o=r.domElement,a=document.createElement("canvas");a.className="folio-snapshot",a.width=o.width,a.height=o.height,a.setAttribute("aria-hidden","true"),i.body.visible=!1,r.render(e,t),a.getContext("2d").drawImage(o,0,0),n.append(a);let l=new co;l.environment=e.environment,l.environmentIntensity=e.environmentIntensity,l.environmentRotation.copy(e.environmentRotation);let c=new jt(40,1,.025,50),u=i.body.clone(!0);u.visible=!0,l.add(u);let f=new Xe().multiplyMatrices(t.matrixWorldInverse,i.body.matrixWorld),h=new H,d=new _n,p=new H;f.decompose(h,d,p);let _=new Gi(16772050,1.85);_.position.set(-3,4,5);let m=new Gi(14146033,.85);m.position.set(3,1,4),l.add(_,m);let g=Xx(i.key),y=new mr({map:g.lining,roughness:.9,side:ri}),M=new gi({map:g.face,toneMapped:!1}),v,b=new Qe(1,1),E={value:1},x={value:0};i.key==="3d"&&(v=new en(fc()),v.colorSpace=It,M.onBeforeCompile=de=>{Object.assign(de.uniforms,{iceFrame:{value:v},screenSize:{value:b},iceAspect:E,iceMix:x}),de.fragmentShader=`uniform sampler2D iceFrame; uniform vec2 screenSize; uniform float iceAspect,iceMix;
`+de.fragmentShader,de.fragmentShader=de.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        vec2 uvScreen=gl_FragCoord.xy/screenSize;
        float ratio=screenSize.x/(screenSize.y*iceAspect);
        vec2 uvPhoto=(uvScreen-.5)*vec2(min(1.,ratio),min(1.,1./ratio))+.5;
        diffuseColor.rgb=mix(diffuseColor.rgb,texture2D(iceFrame,uvPhoto).rgb,iceMix);`)});let S=new mr({color:15656400,roughness:.91,side:ri}),{width:C,height:A,depth:L}=i,D=C*.95,B=A*.97,I=Mm(D,B,y),F=Mm(D,B,y),k=Mm(D,B,S),O=new hn(new pr(D,B),M);O.position.set(.008,0,L*.51+7e-4),u.add(O);for(let[de,ze]of[k,F,I].entries())ze.mesh.position.set(O.position.x-D/2,0,L*.51+.002+de*.0025),u.add(ze.mesh);let $=qx(i.key,D,B,O.position.z,(de,ze)=>{let se=Yx(de,ze);return Zx(D,2.96*se,Kx(se))});$.points.position.x=O.position.x,u.add($.points),u.traverse(de=>{de.isMesh&&(de.castShadow=!1,de.receiveShadow=!1)});let G=r.shadowMap.enabled,R=r.getPixelRatio();r.shadowMap.enabled=!1,s.append(o);let J=n.getBoundingClientRect(),ae=J.height/(2*Math.tan(Vt.degToRad(t.fov)/2)),me=0,X=0,le=new H,he=new _n,be=new H,fe=new _n().setFromEuler(new ji(-.07,-.1,.024));function Pe(de,ze=0){let se=s.clientWidth,Te=s.clientHeight;if(se!==me||Te!==X){me=se,X=Te;let Ke=Math.min(R,Math.max(1,Math.sqrt(24e5/(me*X))));r.getPixelRatio()!==Ke&&r.setPixelRatio(Ke),r.setSize(me,X,!1)}let He=ef(de,0,.52),Be=ef(de,.59,.91);c.aspect=me/X,c.fov=Vt.radToDeg(2*Math.atan(X/(2*ae))),c.updateProjectionMatrix(),c.projectionMatrix.elements[8]=(1-2*(J.left+J.width/2)/me)*(1-He),c.projectionMatrix.elements[9]=(2*(J.top+J.height/2)/X-1)*(1-He);let Y=Math.min(me*.8/(2*C),X*.67/A),je=ae/Y,Nt=ae/Math.max(me/D,X/B)*.91+O.position.z;le.set(Sm(C*.43,0,Be),Sm(.015,0,Be),-Sm(je,Nt,Be)),u.position.lerpVectors(h,le,He),u.quaternion.slerpQuaternions(d,fe,He).slerp(he,Be),u.scale.copy(p);let pt=2.98*ef(de,.1,.51);i.hinge.value=pt,u.updateMatrixWorld(!0),O.visible=de>.13,I.mesh.visible=de>.19,I.bend(pt,0);for(let Ke of[F,k]){let Ct=Yx(Ke===k,de);Ke.mesh.visible=de>.16&&Ct<.999,Ke.bend(Ct*2.96,Kx(Ct))}return $.update(de,ae,r.getPixelRatio(),ze),g.update(bm(de,.4,.81)),v?.image.naturalWidth&&(v.version===0&&(v.needsUpdate=!0),r.getDrawingBufferSize(b),E.value=v.image.naturalWidth/v.image.naturalHeight,x.value=ef(de,.66,.87)),r.render(l,c),be.set(-C*.32,-A*.17,O.position.z+.008).applyMatrix4(u.matrixWorld).project(c),{x:(1+be.x)*me/2,y:(1-be.y)*X/2,scale:Math.min(1.25,ae*C/Math.max(.1,-u.position.z)/440)}}function ot(){i.hinge.value=0,i.body.visible=!0,r.shadowMap.enabled=G,r.shadowMap.needsUpdate=!0,r.getPixelRatio()!==R&&r.setPixelRatio(R),n.append(o),a.remove();for(let de of[F,k,I])de.dispose();O.geometry.dispose(),y.dispose(),M.dispose(),S.dispose(),g.dispose(),v?.dispose(),$.dispose()}return{frame:Pe,dispose:ot}}async function $x(r,e){let t=document.querySelector("#scene"),n=document.createElement("canvas"),i=n.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!i)return t.dataset.renderer="fallback",null;t.classList.toggle("archive-loading",!r.paused);let s=new Jh,[o,a,l,c]=await Promise.all([s.loadAsync("assets/archive/cabinet.glb"),s.loadAsync("assets/archive/volumes.glb?v=2"),new Qh().loadAsync("assets/archive/studio.hdr"),new po().loadAsync("assets/archive/binding-grain.webp")]),u=new Yh({canvas:n,context:i,antialias:!0,alpha:!0});u.setPixelRatio(Math.min(devicePixelRatio,2)),u.setClearColor(0,0),u.toneMapping=jl,u.toneMappingExposure=1.03,u.shadowMap.enabled=!0,u.shadowMap.type=_o,t.append(n),n.setAttribute("aria-hidden","true");let f=new co,h=new jt(29,1,.1,36);h.position.set(0,.64,10.5),h.lookAt(0,-.06,0);let d=new Da(u),p=d.fromEquirectangular(l);f.environment=p.texture,f.environmentIntensity=.76,f.environmentRotation.y=-.65,l.dispose(),d.dispose();let _=new Gi(16771799,2.1);_.position.set(-3.8,6,4.2),_.castShadow=!0,_.shadow.mapSize.setScalar(t.clientWidth>600?1024:512),Object.assign(_.shadow.camera,{left:-3.3,right:3.3,top:3.3,bottom:-3.3,near:.5,far:16}),_.shadow.camera.updateProjectionMatrix(),_.shadow.bias=-45e-5,_.shadow.normalBias=.018,_.shadow.radius=2.8;let m=new Gi(14211578,.79);m.position.set(4,1.5,2.6);let g=new Gi(16764570,1.45);g.position.set(2,3,-3),f.add(_,m,g);let y=new Tn;f.add(y);let M=a.scene.children,v=Math.min(8,u.capabilities.getMaxAnisotropy());c.anisotropy=v,c.wrapS=c.wrapT=fr,a.scene.traverse(se=>{if(se.isMesh)for(let Te of[se.material.map,se.material.normalMap,se.material.roughnessMap])Te&&(Te.anisotropy=v)});let b=M[0].children.find(se=>se.material?.name.endsWith("_paper"))?.material;b&&(b.color.setHex(14601641),b.onBeforeCompile=se=>{se.vertexShader=`varying vec3 paperPoint;
`+se.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
paperPoint=position;`),se.fragmentShader=`varying vec3 paperPoint;
`+se.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float layer = paperPoint.x * 9500. + .25 * sin(paperPoint.z * 148. + paperPoint.y * 41.);
        float fiber = .5 + .5*cos(layer);
        float lod = 1.-smoothstep(.6,3.,fwidth(layer));
        diffuseColor.rgb *= .93 - .19*fiber*lod - .045*cos(paperPoint.x*830.);
      `)});let E=kx(o.scene,M);y.add(E.object);let x=new mo(16763532,.42,2.9,2);x.position.set(0,.24,.94),y.add(x);let S=Vx(y,h,r,t,M,c),C=zx();y.add(C.points),y.traverse(se=>{se.isMesh&&(se.castShadow=!0,se.receiveShadow=!0)});let A=document.createElement("canvas");A.width=A.height=128;let L=A.getContext("2d"),D=L.createRadialGradient(64,64,2,64,64,63);D.addColorStop(0,"#000b"),D.addColorStop(.42,"#0008"),D.addColorStop(1,"#0000"),L.fillStyle=D,L.fillRect(0,0,128,128);let B=new Qi(A),I=new pr(4.5,2.2),F=new gi({map:B,transparent:!0,depthWrite:!1}),k=new hn(I,F);k.position.set(0,-1.795,0),k.rotation.x=-Math.PI/2,f.add(k);let O=!1,$=!1,G=0,R=r.time,J=-1,ae=0,me=-10,X=0,le=0,he=0,be=null;function fe(){$||O||(u.render(f,h),S.project(),r.frames++)}function Pe(se){if($||O||((r.tx!==X||r.ty!==le||r.dragRotation!==he||r.heroFocus!==be)&&(X=r.tx,le=r.ty,he=r.dragRotation,be=r.heroFocus,me=r.time),ae=Math.max(ae,r.paused?5.7:r.time-R),se>0&&ae>5.65&&r.time-me>2.3&&r.time-J<1/30-.001))return;J=r.time;let Te=1-Math.exp(-se*2.8);r.x=Vt.lerp(r.x,r.tx,Te),r.y=Vt.lerp(r.y,r.ty,Te),G=Vt.lerp(G,r.dragRotation,Te),y.rotation.set(.025-r.y*.023,-.2+G+r.x*.045-(1-e.arrival)*.07,-.008),y.position.set(0,0,0),E.update(ae,r.paused),S.update(ae,se),C.update(r.paused?0:r.time,u.getPixelRatio()*Math.min(1.18,Math.max(.79,t.clientWidth/690))),fe()}function ot(){if(O||document.body.classList.contains("ice-open"))return;let se=t.clientWidth,Te=t.clientHeight;if(!se||!Te)return;u.setSize(se,Te,!1);let He=se/Te,Be=Math.max(4.3,6.35/He);h.aspect=He,h.fov=Vt.radToDeg(2*Math.atan(Be/(2*h.position.z))),h.updateProjectionMatrix(),Pe(0)}function de(){let se=new un().setFromObject(E.object),Te=new H,He=1/0,Be=-1/0,Y=-1/0,je=1/0;for(let Nt of[se.min.x,se.max.x])for(let pt of[se.min.y,se.max.y])for(let Ke of[se.min.z,se.max.z])Te.set(Nt,pt,Ke).project(h),He=Math.min(He,Te.x),Be=Math.max(Be,Te.x),Y=Math.max(Y,Te.y),je=Math.min(je,Te.y);return{left:He,right:Be,top:Y,bottom:je}}n.addEventListener("webglcontextlost",se=>{se.preventDefault(),$=!0,t.classList.remove("ready"),t.dataset.renderer="fallback"}),n.addEventListener("webglcontextrestored",()=>{$=!1,ot(),t.classList.add("ready"),t.dataset.renderer="webgl"});let ze=new ResizeObserver(ot);ze.observe(t),t.addEventListener("pointerdown",se=>{r.paused||se.pointerType==="touch"||se.target.closest("a")||(r.dragging=!0,r.dragStart=se.clientX,t.setPointerCapture(se.pointerId))}),t.addEventListener("pointermove",se=>{r.dragging&&(r.dragRotation=Vt.clamp(r.dragRotation+(se.clientX-r.dragStart)*.0015,-.17,.22),r.dragStart=se.clientX)});for(let se of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(se,()=>{r.dragging=!1});return ot(),t.classList.remove("archive-loading"),t.classList.add("ready"),t.dataset.renderer="webgl",{resize:ot,render:fe,frame:Pe,bounds:de,documentStatus:S.status,openFolio(se,Te){let He=S.find(se);if(O||$||!He||He.progress<.5)return null;O=!0;try{let Be=Jx({renderer:u,scene:f,camera:h,container:t,book:He,host:Te});return{frame:Be.frame,dispose(){Be.dispose(),O=!1,ot()}}}catch(Be){throw He.body.visible=!0,He.hinge.value=0,u.shadowMap.enabled=!0,t.append(n),t.querySelector(".folio-snapshot")?.remove(),O=!1,ot(),Be}},dispose(){ze.disconnect(),S.dispose(),C.dispose(),c.dispose(),_.shadow.dispose();let se=new Set,Te=new Set,He=new Set;for(let Be of[o.scene,a.scene])Be.traverse(Y=>{Y.isMesh&&(Te.add(Y.geometry),se.add(Y.material))});for(let Be of se){for(let Y of Object.values(Be))Y?.isTexture&&He.add(Y);Be.dispose()}for(let Be of Te)Be.dispose();for(let Be of He)Be.dispose();B.dispose(),I.dispose(),F.dispose(),p.dispose(),u.dispose()}}}function jx(r){if(!document.querySelector("base[href]")){let M=document.createElement("base");M.href=location.href.split("#")[0],document.head.prepend(M)}let e=r.href,t=document.title,n=matchMedia("(hover: hover) and (pointer: fine)"),i,s,o,a=!1,l=!1,c,u,f=[];function h(M){s?.contentWindow?.postMessage({type:"portfolio-ice-active",active:M},location.origin)}function d(){clearTimeout(c),clearTimeout(u),i?.remove(),i=s=null,o=!1,l=!1}function p(){a&&history.state?.portfolioIce&&history.back()}function _(){if(i)return;fc(),i=document.createElement("section"),i.className="ice-portal",i.inert=!0,i.setAttribute("aria-label","\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u0441\u0446\u0435\u043D\u0430"),i.innerHTML=`<div class="ice-wait-snow" aria-hidden="true"></div>
      <button class="ice-return" type="button">\u2190 \u041D\u0430\u0437\u0430\u0434</button>
      <p class="ice-status" role="status">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F 3D-\u0441\u0446\u0435\u043D\u0430</p>
      <a class="ice-retry">\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0446\u0435\u043D\u0443 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u2197</a>`;let M=i.querySelector(".ice-wait-snow");for(let v=0;v<18;v++){let b=document.createElement("i");b.style.left=v*37.17%100+"%",b.style.top=v*23.49%100+"%",b.style.setProperty("--delay",-(v*.41)+"s"),b.style.setProperty("--drift",(v%3-1)*25+8+"px"),M.append(b)}i.querySelector(".ice-return").addEventListener("click",p),i.querySelector(".ice-retry").href=e,s=document.createElement("iframe"),s.name="portfolio-ice",s.title="\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043B\u0435\u0434\u044F\u043D\u0430\u044F \u0441\u0446\u0435\u043D\u0430",s.tabIndex=-1,s.src=e,i.prepend(s),document.body.append(i),u=setTimeout(()=>{a||d()},9e4)}function m(){!a||!o||(clearTimeout(c),h(!0),i.classList.add("ice-ready"),s.tabIndex=0,s.focus({preventScroll:!0}))}window.addEventListener("message",M=>{M.origin!==location.origin||!s||M.source!==s.contentWindow||(M.data?.type==="portfolio-ice-ready"?(o=!0,a?m():h(!1)):M.data?.type==="portfolio-ice-back"?p():M.data?.type==="portfolio-ice-error"&&i.classList.add("ice-slow"))});function g(){_(),!a&&(a=!0,clearTimeout(u),f=[...document.querySelectorAll("body > header, body > main, body > nav, body > footer, body > .skip-link")].filter(M=>!M.inert),f.forEach(M=>{M.inert=!0}),document.body.classList.add("ice-open"),document.dispatchEvent(new Event("portfolio-view-change")),i.inert=!1,i.classList.add("ice-opened"),document.title="\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u0441\u0446\u0435\u043D\u0430 \xB7 3D",i.querySelector(".ice-return").focus({preventScroll:!0}),c=setTimeout(()=>i?.classList.add("ice-slow"),22e3),m())}function y(){a&&(f.forEach(M=>{M.inert=!1}),f=[],document.body.classList.remove("ice-open"),document.title=t,document.dispatchEvent(new Event("portfolio-view-change")),r.focus({preventScroll:!0}),a=!1,d())}window.addEventListener("popstate",()=>{history.state?.portfolioIce&&location.href===e?g():y()});for(let M of["pointerenter","focus","pointerdown"])r.addEventListener(M,_,{passive:!0});if(!n.matches){let M=new IntersectionObserver(v=>{v.some(b=>b.isIntersecting)&&(_(),M.disconnect())},{threshold:.1});M.observe(r.closest(".scene"))}return{prepare:_,get ready(){return o},preview(){!o||a||l||(l=!0,clearTimeout(u),i.classList.add("ice-preview"),h(!0))},cancelPreview(){a||!l||d()},enter(){a||history.pushState({portfolioIce:!0},"",e),g()}}}var Tm=(r,e,t)=>r+(e-r)*t;function ns(r,e,t){let n=Math.max(0,Math.min(1,(r-e)/(t-e)));return n*n*(3-2*n)}function Qx(r,e,t){let n=jx(r.find(s=>s.dataset.document==="3d")),i;for(let s of r)s.addEventListener("click",o=>{if(o.defaultPrevented||o.button!==0||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||s.target==="_blank")return;if(i){o.preventDefault();return}let a=s.hash?document.getElementById(s.hash.slice(1)):null,l=a?.querySelector("h3"),c=s.dataset.document==="3d";if(c&&(n.prepare(),t.matches)){o.preventDefault(),n.enter();return}if(t.matches||s.hash&&!l)return;let u=document.createElement("div");u.className="folio-transition",u.dataset.book=s.dataset.document,u.setAttribute("aria-hidden","true");function f(R){let J=document.createElement("div");return J.className="folio-"+R,u.append(J),J}let h=f("veil"),d=c&&f("ice-frame"),p=f("canvas"),_=s.dataset.document==="sites"&&f("catalog-sheet"),m=!1;if(_){let R=document.createElement("iframe");R.title="\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0441\u0430\u0439\u0442\u043E\u0432",R.tabIndex=-1,R.inert=!0,R.addEventListener("load",()=>{m=!0},{once:!0}),R.src=s.href,_.append(R)}let g=l&&f("heading");document.body.append(u);let y;try{y=e(s.dataset.document,p),y&&y.frame(0)}catch(R){console.warn("Book transition unavailable",R),y?.dispose(),y=null}if(!y){u.remove(),c&&(o.preventDefault(),n.enter());return}o.preventDefault();let M,v,b,E,x=0,S,C,A=!1,L=!1,D=R=>R.preventDefault();u.addEventListener("wheel",D,{passive:!1});let B=R=>{if(R.key==="Escape"&&c&&!n.ready){R.preventDefault(),F(),s.focus({preventScroll:!0});return}R.key==="Escape"||R.key==="Tab"?(R.key==="Escape"&&R.preventDefault(),O()):[" ","PageUp","PageDown","ArrowDown","ArrowUp","Home","End"].includes(R.key)&&R.preventDefault()},I=()=>{document.hidden&&O()};function F(){if(i){cancelAnimationFrame(M),clearTimeout(v),document.removeEventListener("keydown",B),document.removeEventListener("visibilitychange",I),window.removeEventListener("pagehide",F),window.removeEventListener("popstate",F),t.removeEventListener("change",O),b?.remove(),c&&n.cancelPreview(),l?.classList.remove("folio-title-held");try{y.dispose()}finally{u.remove(),i=!1}}}function k(){A||(A=!0,location.hash!==s.hash&&history.pushState(null,"",s.hash),a.classList.remove("arrival-pending","scroll-arrival"),a.focus({preventScroll:!0}),a.scrollIntoView({behavior:"instant",block:"start"}),l.classList.add("folio-title-held"),S=l.getBoundingClientRect(),g.style.color=getComputedStyle(l).color)}function O(){if(!(L||!i)){if(a){k(),F();return}if(L=!0,cancelAnimationFrame(M),!c){if(_){_.style.opacity=m?"1":"0",_.style.transform="none",_.style.clipPath="inset(0)";try{sessionStorage.setItem("folio-catalog-arrival",String(Date.now()))}catch{}}v=setTimeout(F,3500),window.location.assign(s.href);return}d.style.opacity=1,p.style.opacity=0,h.style.opacity=1,n.enter(),F()}}if(g){g.textContent=l.textContent;let R=getComputedStyle(l);for(let J of["fontFamily","fontSize","fontStyle","fontWeight","lineHeight","letterSpacing","textWrap","textTransform"])g.style[J]=R[J];g.style.width=l.getBoundingClientRect().width+"px"}i=!0,document.addEventListener("keydown",B),document.addEventListener("visibilitychange",I),window.addEventListener("popstate",F),window.addEventListener("pagehide",F),p.addEventListener("webglcontextlost",O,{capture:!0,once:!0}),t.addEventListener("change",O);let $=performance.now();function G(R){let J=Math.max(0,(R-$)/1490),ae=.64;if(c&&J>=ae&&!n.ready){if(E??=R,x=J-ae,!b&&R-E>1100&&(b=document.createElement("div"),b.className="folio-wait-controls",b.innerHTML='<span role="status">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F 3D-\u0441\u0446\u0435\u043D\u0430</span><button type="button">\u041D\u0430\u0437\u0430\u0434</button>',b.querySelector("button").addEventListener("click",()=>{F(),s.focus({preventScroll:!0})}),document.body.append(b)),R-E>15e3){O();return}}else b&&(b.remove(),b=null);let me=Math.min(1,Math.max(0,J-x));try{if(me===1){O();return}let X=y.frame(me,x*.4);c&&me>=.72&&n.ready&&n.preview();let le=a?ns(me,.81,1):c?ns(me,.72,.96):0;if(h.style.opacity=ns(me,.03,.64)*(1-le),p.style.opacity=1-ns(me,.76,.97),_&&m){let he=ns(me,.56,.98);_.style.opacity=String(ns(me,.56,.84)),_.style.clipPath="inset("+(1-he)*13+"% "+(1-he)*37+"% "+(1-he)*13+"% "+(1-he)*9+"%)",_.style.transform="perspective(1600px) rotateY("+(1-he)*-19+"deg) scale("+(.88+.12*he)+")"}if(d&&(d.style.opacity=n.ready?0:ns(me,.72,.94)),g){g.style.opacity=ns(me,.54,.73),me>=.76&&!A&&(C=X,k());let he=ns(me,.76,.98),be=A?Tm(C.x,S.left,he):X.x,fe=A?Tm(C.y,S.top,he):X.y,Pe=A?Tm(C.scale,1,he):X.scale;g.style.transform="translate3d("+be+"px,"+fe+"px,0) scale("+Pe+")"}M=requestAnimationFrame(G)}catch(X){console.warn("Finishing book navigation",X),O()}}M=requestAnimationFrame(G)})}ar.registerPlugin($e);var ke=(r,e=document)=>e.querySelector(r),Bt=(r,e=document)=>[...e.querySelectorAll(r)],Rm=matchMedia("(prefers-reduced-motion: reduce)"),IE=matchMedia("(min-width: 901px)"),rf={get(r){try{return localStorage.getItem(r)}catch{return null}},set(r,e){try{localStorage.setItem(r,e)}catch{}},remove(r){try{localStorage.removeItem(r)}catch{}}},tn={concept:"hybrid",paused:Rm.matches,time:0,scroll:0,x:0,y:0,tx:0,ty:0,dragging:!1,dragRotation:0,dragStart:0,frames:0,heroVisible:!0};tn.heroFocus=null;var tf={arrival:1,beat:0},Ds=null,ev=!1,ka=[],Am=new Set,br=null,wm=null,Fa=null,tv=null,dc=!1;function Cm(){return!tn.paused&&!document.hidden&&!dc&&!document.body.classList.contains("ice-open")&&!ke("dialog[open]")}function is(){let r=!Cm();Fa&&Fa.progress()<1&&Fa.paused(r),Ds?.paused(r||!ev),ka.forEach((e,t)=>e.paused(r||!Am.has(t)))}function Pm(r=!1,e=!1){let t=ka.map(i=>i.time()),n=e?0:Ds?.time()||0;wm?.revert(),wm=null,Fa=null,Ds=null,ka=[],tf.arrival=1,tf.beat=0,wm=ar.context(()=>{if(!tn.paused){r&&(Fa=ar.timeline({defaults:{ease:"power3.out"}}),Fa.from(".scene",{opacity:.45,duration:.55},.05).from(tf,{arrival:0,duration:2.8,ease:"sine.out"},.15).from(".hybrid-intro",{y:24,opacity:0,duration:1},.7).from(".hybrid-actions",{y:18,opacity:0,duration:.9},.85)),Ds=ar.timeline({paused:!0}),Bt(".digit-strip").forEach((i,s)=>{let o=Number(i.dataset.end);Ds.fromTo(i,{y:0,yPercent:0},{y:0,yPercent:-o/(o+1)*100,duration:[3.4,3.9,3.65][s],ease:"power2.inOut"},[0,.12,.28][s])}),Ds.fromTo(".project-total",{y:18},{y:0,duration:3.6,ease:"power2.out"},0).fromTo(".total-plus",{rotation:-10,y:6},{rotation:0,y:0,duration:3.5,ease:"power2.inOut"},.2).time(n).pause(),DE(t);for(let i of Bt(".service-item"))ar.timeline({scrollTrigger:{trigger:i,start:"top 98%",end:"center 65%",scrub:.65}}).from(i,{"--rule-progress":.08,ease:"sine.out",duration:1},0).from(ke(".service-art",i),{"--turn":"-46deg","--spread":"12px",y:10,duration:1},0);for(let i of Bt(".process-list li"))ar.timeline({scrollTrigger:{trigger:i,start:"top 95%",end:"center 65%",scrub:.7}}).from(i,{"--step-progress":.02,duration:1},0).from(ke(".step-number",i),{y:16,duration:1},0).from(ke("h4",i),{x:11,duration:1},0)}}),is()}function LE(r){if(tn.paused=r,r)for(let e of Bt(".scroll-arrival"))e.classList.remove("scroll-arrival");document.body.classList.toggle("motion-paused",r),Pm(!1,!r),$e.refresh(),br?.frame(0)}for(let r of Bt("[data-document]")){let e=()=>{tn.heroFocus=r.dataset.document,br?.frame(0)},t=()=>{tn.heroFocus===r.dataset.document&&(tn.heroFocus=null),br?.frame(0)};r.addEventListener("pointerenter",e),r.addEventListener("pointerleave",()=>{document.activeElement!==r&&t()}),r.addEventListener("focus",e),r.addEventListener("blur",t)}Qx(Bt("[data-document]"),(r,e)=>br?.openFolio(r,e),Rm);function DE(r){ka=Bt(".toolkit-group").map((e,t)=>{let n=ke(".toolkit-reel",e),i=Bt("li",e);if(n.childElementCount===1)for(let o of[...i.slice(1),i[0]]){let a=n.firstElementChild.cloneNode(!1);a.textContent=o.textContent,n.append(a)}let s=ar.timeline({paused:!0,repeat:-1});return s.fromTo(n,{yPercent:0},{yPercent:-100*i.length/n.childElementCount,duration:i.length,ease:"none"}),s.time(r[t]??t*.17)})}Rm.addEventListener("change",r=>LE(r.matches));IE.addEventListener("change",()=>{document.body.classList.contains("ice-open")||(za(),Pm(!1),$e.refresh())});document.addEventListener("visibilitychange",is);document.addEventListener("portfolio-view-change",()=>{document.body.classList.contains("ice-open")||(br?.resize(),$e.refresh()),is()});function za(r=!1){dc=!1,ke("#mobile-menu").hidden=!0,ke(".menu-toggle").setAttribute("aria-expanded","false"),ke(".menu-toggle").setAttribute("aria-label","\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.remove("menu-open"),ke("#main").inert=!1,ke(".site-footer").inert=!1,r&&ke(".menu-toggle").focus(),is()}ke(".menu-toggle").addEventListener("click",()=>{if(dc){za(!0);return}dc=!0,ke("#mobile-menu").hidden=!1,ke(".menu-toggle").setAttribute("aria-expanded","true"),ke(".menu-toggle").setAttribute("aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.add("menu-open"),ke("#main").inert=!0,ke(".site-footer").inert=!0,ke("#mobile-menu a").focus(),is()});for(let r of Bt("#mobile-menu a"))r.addEventListener("click",()=>za());document.addEventListener("keydown",r=>{if(dc&&(r.key==="Escape"&&(r.preventDefault(),za(!0)),r.key==="Tab")){let e=[...Bt(".site-header a,.site-header button"),...Bt("#mobile-menu a")].filter(n=>n.getClientRects().length),t=e.indexOf(document.activeElement);r.shiftKey&&t<=0&&(r.preventDefault(),e.at(-1).focus()),!r.shiftKey&&t===e.length-1&&(r.preventDefault(),e[0].focus())}});function nv(r){let e=document.activeElement;za(),tv=e,r.showModal(),r.scrollTop=0,is()}for(let r of Bt('[data-open="brief"]'))r.addEventListener("click",()=>nv(ke("#brief-dialog")));for(let r of Bt("[data-scroll]"))r.addEventListener("click",()=>document.getElementById(r.dataset.scroll)?.scrollIntoView({behavior:tn.paused?"instant":"smooth"}));for(let r of Bt("dialog"))ke(".close-dialog",r).addEventListener("click",()=>r.close()),r.addEventListener("close",()=>{is(),tv?.focus({preventScroll:!0})}),r.addEventListener("click",e=>{let t=r.getBoundingClientRect();e.target===r&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&r.close()});var sf="alexey-project-draft-v1",iv=Bt('#brief-form input[name="service"]');function rv(){return{services:iv.filter(r=>r.checked).map(r=>r.value),idea:ke("#idea").value.trim(),timing:ke("#timing").value.trim()}}function NE(){rf.set(sf,JSON.stringify(rv()))}try{let r=JSON.parse(rf.get(sf)||"null");r&&typeof r=="object"&&(iv.forEach(e=>{e.checked=Array.isArray(r.services)&&r.services.includes(e.value)}),typeof r.idea=="string"&&(ke("#idea").value=r.idea.slice(0,3e3)),typeof r.timing=="string"&&(ke("#timing").value=r.timing.slice(0,150)))}catch{rf.remove(sf)}ke("#brief-form").addEventListener("input",NE);function sv(){let r=rv();return!r.services.length&&!r.idea?(ke("#brief-status").textContent="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u043F\u0438\u0448\u0438\u0442\u0435 \u0438\u0434\u0435\u044E.",ke("#idea").focus(),null):`\u0410\u043B\u0435\u043A\u0441\u0435\u0439, \u043F\u0440\u0438\u0432\u0435\u0442! \u0425\u043E\u0447\u0443 \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442.

\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: ${r.services.join(", ")||"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043C \u0432\u043C\u0435\u0441\u0442\u0435"}.${r.idea?`

\u0418\u0434\u0435\u044F:
${r.idea}`:""}${r.timing?`

\u0421\u0440\u043E\u043A\u0438: ${r.timing}`:""}`}function ov(r){let e=URL.createObjectURL(new Blob(["\uFEFF"+r],{type:"text/plain;charset=utf-8"})),t=document.createElement("a");t.href=e,t.download="\u041C\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u2014 \u0431\u0440\u0438\u0444 \u0434\u043B\u044F \u0410\u043B\u0435\u043A\u0441\u0435\u044F.txt",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),ke("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u0444\u0430\u0439\u043B. \u041C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u044C \u0435\u0433\u043E \u043A \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044E."}ke("#brief-form").addEventListener("submit",async r=>{r.preventDefault();let e=sv();if(e)try{await navigator.clipboard.writeText(e),ke("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D. \u041C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435."}catch{ov(e)}});ke(".download-brief").addEventListener("click",()=>{let r=sv();r&&ov(r)});ke(".clear-draft").addEventListener("click",()=>{ke("#brief-form").reset(),rf.remove(sf),ke("#brief-status").textContent="\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043E\u0447\u0438\u0449\u0435\u043D."});var Eo=window.PORTFOLIO_CONTENT&&typeof window.PORTFOLIO_CONTENT=="object"?window.PORTFOLIO_CONTENT:{};function Em(r,e=!1){if(typeof r!="string"||!r.trim())return null;try{let t=new URL(r,location.href);if(["https:","http:"].includes(t.protocol)||e&&t.protocol==="file:"&&!/^[a-z]+:/i.test(r))return t.href}catch{}return null}function OE(r,e){let t=document.createElement("a");t.textContent=r,t.href=e,e.startsWith("https:")&&(t.target="_blank",t.rel="noopener noreferrer"),ke("#contact-links").append(t),ke("#contact-links").hidden=!1}var Ba=Lm(Eo.telegram);for(let r of Bt("[data-telegram-link]"))r.hidden=!Ba,Ba?r.href=Ba.url:r.removeAttribute("href");ke(".contact-invitation").hidden=!Ba;ke("[data-telegram-label]").textContent=Ba?.label??"";for(let r of Bt("[data-without-telegram]"))r.hidden=!!Ba;typeof Eo.email=="string"&&/^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(Eo.email)&&OE(Eo.email,`mailto:${encodeURIComponent(Eo.email)}`);var nf=Array.isArray(Eo.projects)?Eo.projects.filter(r=>r&&typeof r.title=="string"&&r.title.trim()&&typeof r.description=="string"):[];if(nf.length){let e=function(n){ke("#project-title").textContent=n.title,ke(".project-detail-description").textContent=n.description,ke(".project-detail-tags").textContent=Array.isArray(n.tags)?n.tags.filter(l=>typeof l=="string").join(" / "):"";let i=ke(".project-detail-image"),s=Em(n.image,!0);i.hidden=!s,s?(i.src=s,i.alt=n.title,i.onerror=()=>{i.hidden=!0}):i.removeAttribute("src");let o=ke(".project-detail-link"),a=Em(n.url);o.hidden=!a,a?o.href=a:o.removeAttribute("href"),nv(ke("#project-dialog"))},t=function(n){let i=nf.filter(s=>n==="\u0412\u0441\u0435"||s.category===n);ke(".project-grid").replaceChildren();for(let s of i){let o=document.createElement("button");o.className="project-card";let a=Em(s.image,!0);if(a){let u=document.createElement("img");u.src=a,u.alt=s.title,u.loading="lazy",u.onerror=()=>{u.remove()},o.append(u)}let l=document.createElement("h3");l.textContent=s.title;let c=document.createElement("p");c.textContent=s.category||"\u041F\u0440\u043E\u0435\u043A\u0442",o.append(l,c),o.addEventListener("click",()=>e(s)),ke(".project-grid").append(o)}for(let s of Bt(".project-filters button"))s.setAttribute("aria-pressed",String(s.textContent===n));ke(".project-count").textContent=`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432: ${i.length}`,$e.refresh()};ke("#projects").hidden=!1;let r=["\u0412\u0441\u0435",...new Set(nf.map(n=>n.category).filter(n=>typeof n=="string"&&n))];for(let n of r){let i=document.createElement("button");i.textContent=n,i.setAttribute("aria-pressed",String(n==="\u0412\u0441\u0435")),i.addEventListener("click",()=>t(n)),ke(".project-filters").append(i)}for(let n of Bt(".desktop-nav,#mobile-menu")){let i=document.createElement("a");i.href="#projects",i.textContent="\u0420\u0430\u0431\u043E\u0442\u044B",i.addEventListener("click",()=>za()),n.prepend(i)}t("\u0412\u0441\u0435")}var av=new IntersectionObserver(r=>{for(let e of r){if(!e.isIntersecting)continue;let{target:t,rootBounds:n,boundingClientRect:i}=e;av.unobserve(t),t.classList.remove("arrival-pending"),!(!n||tn.paused||t.matches(":target, :focus-within"))&&i.top>=n.top+n.height*.35&&t.classList.add("scroll-arrival")}},{rootMargin:"0px 0px -64px"}),UE=document.documentElement.clientHeight;for(let r of Bt(".expertise-intro, .service-item, .collaboration-intro, .questions-list article, #contact-title"))r.getBoundingClientRect().top>=UE&&(r.classList.add("arrival-pending"),av.observe(r));var FE=new IntersectionObserver(r=>{for(let e of r)e.target.classList.toggle("in-view",e.isIntersecting)});Bt(".service-item").forEach(r=>FE.observe(r));var BE=new IntersectionObserver(r=>{for(let e of r)if(e.isIntersecting)for(let t of Bt(".desktop-nav a"))t.hash==="#"+e.target.id?t.setAttribute("aria-current","location"):t.removeAttribute("aria-current")},{rootMargin:"-20% 0px -60% 0px"});for(let r of Bt("main > section"))r.hidden||BE.observe(r);window.addEventListener("scroll",()=>{ke(".site-header").classList.toggle("scrolled",scrollY>30),tn.paused||(tn.scroll=Math.min(1,scrollY/innerHeight))},{passive:!0});document.addEventListener("pointermove",r=>{!Cm()||r.pointerType==="touch"||(tn.tx=r.clientX/innerWidth*2-1,tn.ty=r.clientY/innerHeight*2-1)},{passive:!0});$x(tn,tf).then(r=>{br=r}).catch(()=>{ke("#scene").classList.remove("ready","archive-loading"),ke("#scene").dataset.renderer="fallback",ke("#scene canvas")?.remove()});var kE=new IntersectionObserver(([r])=>{ev=r.isIntersecting&&r.intersectionRatio>=.2,is()},{threshold:[0,.2]});kE.observe(ke("#experience"));var lv=Bt(".toolkit-group"),zE=new IntersectionObserver(r=>{for(let e of r){let t=lv.indexOf(e.target);e.isIntersecting&&e.intersectionRatio>=.15?Am.add(t):Am.delete(t)}is()},{threshold:[0,.15]});lv.forEach(r=>zE.observe(r));var HE=new IntersectionObserver(([r])=>{tn.heroVisible=r.isIntersecting});HE.observe(ke(".hybrid-hero"));ar.ticker.add((r,e)=>{Cm()&&tn.heroVisible&&(tn.time+=Math.min(e/1e3,.15),br?.frame(Math.min(e/1e3,.05)))});document.body.classList.toggle("motion-paused",tn.paused);Pm(!0);document.fonts.ready.then(()=>{br?.resize(),$e.refresh(),document.documentElement.dataset.ready="true"});Object.defineProperty(window,"portfolioStatus",{value:()=>({paused:tn.paused,frames:tn.frames,heroBounds:br?.bounds(),documents:br?.documentStatus()||[],renderer:ke("#scene").dataset.renderer,heroVisible:tn.heroVisible,projects:nf.length,scrollScenes:$e.getAll().length,counterTime:Ds?.time()||0,counterPlaying:Ds?.isActive()||!1,toolkitTimes:ka.map(r=>r.totalTime()),toolkitPlaying:ka.map(r=>r.isActive())})});})();
/*! For license information please see app.js.LEGAL.txt */
