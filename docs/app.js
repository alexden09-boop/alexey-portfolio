(()=>{function sg(r){if(typeof r!="string"||!r.trim())return null;try{let e=new URL(r);if(!["https:","http:"].includes(e.protocol)||!["t.me","telegram.me"].includes(e.hostname))return null;let t=/^\/([a-z\d_]+)\/?$/i.exec(e.pathname);return{url:e.href,label:t?"@"+t[1]:"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram"}}catch{return null}}function Cr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function pg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cl={duration:.5,overwrite:!1,delay:0},qf,Cn,zt,ki=1e8,Tt=1/ki,Bf=Math.PI*2,Vy=Bf/4,Wy=0,mg=Math.sqrt,Xy=Math.cos,qy=Math.sin,xn=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},Ir=function(e){return typeof e=="number"},Wc=function(e){return typeof e>"u"},pr=function(e){return typeof e=="object"},pi=function(e){return e!==!1},Yf=function(){return typeof window<"u"},Dc=function(e){return Qt(e)||xn(e)},gg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,Yy=/random\([^)]+\)/g,Ky=/,\s*/g,og=/(?:-?\.?\d|\.)+/gi,Kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,If=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zf=/[+-]=-?[.\d]+/,Zy=/[^,'"\[\]\s]+/gi,Jy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,fr,kf,Jf,Ei={},Fc={},_g,xg=function(e){return(Fc=Go(e,Ei))&&Gn},Xc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ul=function(e,t){return!t&&console.warn(e)},yg=function(e,t){return e&&(Ei[e]=t)&&Fc&&(Fc[e]=t)||Ei},hl=function(){return 0},$y={suppressEvents:!0,isStart:!0,kill:!1},Nc={suppressEvents:!0,kill:!1},jy={suppressEvents:!0},$f={},hs=[],zf={},vg,fi={},Lf={},ag=30,Oc=[],jf="",Qf=function(e){var t=e[0],n,i;if(pr(t)||Qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Oc.length;i--&&!Oc[i].targetTest(t););n=Oc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new id(e[i],n)))||e.splice(i,1);return e},fs=function(e){return e._gsap||Qf(zi(e))[0]._gsap},ed=function(e,t,n){return(n=e[t])&&Qt(n)?e[t]():Wc(n)&&e.getAttribute&&e.getAttribute(t)||n},Qn=function(e,t){return(e=e.split(",")).forEach(t)||e},en=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},Ys=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Qy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Bc=function(){var e=hs.length,t=hs.slice(0),n,i;for(zf={},hs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},td=function(e){return!!(e._initted||e._startAt||e.add)},Sg=function(e,t,n,i){hs.length&&!Cn&&Bc(),e.render(t,n,i||!!(Cn&&t<0&&td(e))),hs.length&&!Cn&&Bc()},Mg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zy).length<2?t:xn(e)?e.trim():e},bg=function(e){return e},Ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ev=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Go=function(e,t){for(var n in t)e[n]=t[n];return e},lg=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=pr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},kc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ol=function(e){var t=e.parent||Wt,n=e.keyframes?ev(Hn(e.keyframes)):Ai;if(pi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},tv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Tg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},qc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ds=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},nv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Hf=function(e,t,n,i){return e._startAt&&(Cn?e._startAt.revert(Nc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},iv=function r(e){return!e||e._ts&&r(e.parent)},cg=function(e){return e._repeat?Vo(e._tTime,e=e.duration()+e._rDelay)*e:0},Vo=function(e,t){var n=Math.floor(e=Vt(e/t));return e&&n===e?n-1:n},zc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Yc=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},Kc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Yc(e),n._dirty||Vs(n,e)),e},wg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=zc(e.rawTime(),t),(!t._dur||ml(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),Vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},dr=function(e,t,n,i){return t.parent&&ds(t),t._start=Vt((Ir(n)?n:!n&&Hc(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Wt?Bi(e,n,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Tg(e,t,"_first","_last",e._sort?"_start":0),Hc(t)||(e._recent=t),i||wg(e,t),e._ts<0&&Kc(e,e._tTime),e},Eg=function(e,t){return(Ei.ScrollTrigger||Xc("scrollTrigger",t))&&Ei.ScrollTrigger.create(t,e)},Ag=function(e,t,n,i,s){if(od(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vg!==di.frame)return hs.push(e),e._lazy=[s,i],1},rv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Hc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},sv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&rv(e)&&!(!e._initted&&Hc(e))||(e._ts<0||e._dp._ts<0)&&!Hc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ml(0,e._tDur,t),u=Vo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Vo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Cn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&Ag(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Hf(e,t,n,!0),e._onUpdate&&!n&&wi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&wi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ds(e,1),!n&&!Cn&&(wi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ov=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Wo=function(e,t,n,i){var s=e._repeat,o=Vt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Vt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Kc(e,e._tTime=e._tDur*a),e.parent&&Yc(e),n||Vs(e.parent,e),e},ug=function(e){return e instanceof zn?Vs(e):Wo(e,e._dur)},av={_start:0,endTime:hl,totalDuration:hl},Bi=function r(e,t,n){var i=e.labels,s=e._recent||av,o=e.duration()>=ki?s.endTime(!1):e._dur,a,l,c;return xn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Hn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},al=function(e,t,n){var i=Ir(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pi(l.vars.inherit)&&l.parent;o.immediateRender=pi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new rn(t[0],o,t[s+1])},ps=function(e,t){return e||e===0?t(e):t},ml=function(e,t,n){return n<e?e:n>t?t:n},Pn=function(e,t){return!xn(e)||!(t=Jy.exec(e))?"":t[1]},lv=function(e,t,n){return ps(n,function(i){return ml(e,t,i)})},Gf=[].slice,Rg=function(e,t){return e&&pr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pr(e[0]))&&!e.nodeType&&e!==fr},cv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return xn(i)&&!t||Rg(i,1)?(s=n).push.apply(s,zi(i)):n.push(i)})||n},zi=function(e,t,n){return zt&&!t&&zt.selector?zt.selector(e):xn(e)&&!n&&(kf||!Xo())?Gf.call((t||Jf).querySelectorAll(e),0):Hn(e)?cv(e,n):Rg(e)?Gf.call(e,0):e?[e]:[]},Vf=function(e){return e=zi(e)[0]||ul("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return zi(t,n.querySelectorAll?n:n===e?ul("Invalid scope")||Jf.createElement("div"):e)}},Cg=function(e){return e.sort(function(){return .5-Math.random()})},Pg=function(e){if(Qt(e))return e;var t=pr(e)?e:{each:e},n=Ws(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return xn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,p){var _=(p||t).length,m=o[_],g,y,b,v,M,T,x,S,R;if(!m){if(R=t.grid==="auto"?0:(t.grid||[1,ki])[1],!R){for(x=-ki;x<(x=p[R++].getBoundingClientRect().left)&&R<_;);R<_&&R--}for(m=o[_]=[],g=l?Math.min(R,_)*u-.5:i%R,y=R===ki?0:l?_*h/R-.5:i/R|0,x=0,S=ki,T=0;T<_;T++)b=T%R-g,v=y-(T/R|0),m[T]=M=c?Math.abs(c==="y"?v:b):mg(b*b+v*v),M>x&&(x=M),M<S&&(S=M);i==="random"&&Cg(m),m.max=x-S,m.min=S,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(R>_?_-1:c?c==="y"?_/R:R:Math.max(R,_/R))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Pn(t.amount||t.each)||0,n=n&&_<0?Mv(n):n}return _=(m[f]-m.min)/m.max||0,Vt(m.b+(n?n(_):_)*m.v)+m.u}},Wf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Vt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ir(n)?0:Pn(n))}},Ig=function(e,t){var n=Hn(e),i,s;return!n&&pr(e)&&(i=n=e.radius||ki,e.values?(e=zi(e.values),(s=!Ir(e[0]))&&(i*=i)):e=Wf(e.increment)),ps(t,n?Qt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ki,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Ir(o)?u:u+Pn(o)}:Wf(e))},Lg=function(e,t,n,i){return ps(Hn(e)?!t:n===!0?!!(n=0):!i,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},uv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},hv=function(e,t){return function(n){return e(parseFloat(n))+(t||Pn(n))}},fv=function(e,t,n){return Ng(e,t,0,1,n)},Dg=function(e,t,n){return ps(n,function(i){return e[~~t(i)]})},dv=function r(e,t,n){var i=t-e;return Hn(e)?Dg(e,r(0,e.length),t):ps(n,function(s){return(i+(s-e)%i)%i+e})},pv=function r(e,t,n){var i=t-e,s=i*2;return Hn(e)?Dg(e,r(0,e.length-1),t):ps(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},qo=function(e){return e.replace(Yy,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Ky);return Lg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ng=function(e,t,n,i,s){var o=t-e,a=i-n;return ps(s,function(l){return n+((l-e)/o*a||0)})},mv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=xn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(p){p*=h;var _=Math.min(f,~~p);return u[_](p-_)},n=t}else i||(e=Go(Hn(e)?[]:{},e));if(!u){for(l in t)rd.call(a,e,l,"get",t[l]);s=function(p){return cd(p,a)||(o?e.p:e)}}}return ps(n,s)},hg=function(e,t,n){var i=e.labels,s=ki,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},wi=function(e,t,n){var i=e.vars,s=i[t],o=zt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&hs.length&&Bc(),a&&(zt=a),u=l?s.apply(c,l):s.call(c),zt=o,u},rl=function(e){return ds(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Cn),e.progress()<1&&wi(e,"onInterrupt"),e},Ho,Og=[],Ug=function(e){if(e)if(e=!e.name&&e.default||e,Yf()||e.headless){var t=e.name,n=Qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:hl,render:cd,add:rd,kill:Lv,modifier:Iv,rawVars:0},o={targetTest:0,get:0,getSetter:Zc,aliases:{},register:0};if(Xo(),e!==i){if(fi[t])return;Ai(i,Ai(kc(e,s),o)),Go(i.prototype,Go(s,kc(e,o))),fi[i.prop=t]=i,e.targetTest&&(Oc.push(i),$f[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yg(t,i),e.register&&e.register(Gn,i,ei)}else Og.push(e)},Ct=255,sl={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Df=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},Fg=function(e,t,n){var i=e?Ir(e)?[e>>16,e>>8&Ct,e&Ct]:0:sl.black,s,o,a,l,c,u,h,f,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sl[e])i=sl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(og),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Df(l+1/3,s,o),i[1]=Df(l,s,o),i[2]=Df(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Kf),n&&i.length<4&&(i[3]=1),i}else i=e.match(og)||sl.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Ct,o=i[1]/Ct,a=i[2]/Ct,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Bg=function(e){var t=[],n=[],i=-1;return e.split(Pr).forEach(function(s){var o=s.match(qs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},fg=function(e,t,n){var i="",s=(e+i).match(Pr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Fg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Bg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Pr,"1").split(qs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Pr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Pr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sl)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),gv=/hsl[a]?\(/,nd=function(e){var t=e.join(" "),n;if(Pr.lastIndex=0,Pr.test(t))return n=gv.test(t),e[1]=fg(e[1],n),e[0]=fg(e[0],n,Bg(e[1])),!0},fl,di=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,p=function _(m){var g=r()-i,y=m===!0,b,v,M,T;if((g>e||g<0)&&(n+=g-t),i+=g,M=i-n,b=M-o,(b>0||y)&&(T=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=b+(b>=s?0:s-b),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](M,f,T,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){_g&&(!kf&&Yf()&&(fr=kf=window,Jf=fr.document||{},Ei.gsap=Gn,(fr.gsapVersions||(fr.gsapVersions=[])).push(Gn.version),xg(Fc||fr.GreenSockGlobals||!fr.gsap&&fr||{}),Og.forEach(Ug)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},fl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),fl=0,c=hl},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,g,y){var b=g?function(v,M,T,x){m(v,M,T,x),h.remove(b)}:m;return h.remove(m),a[y?"unshift":"push"](b),Xo(),b},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},h})(),Xo=function(){return!fl&&di.wake()},ft={},_v=/^[\d.\-M][\d.\-,\s]/,xv=/["']/g,yv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(xv,"").trim():+c,i=l.substr(a+1).trim();return t},vv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Sv=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[yv(t[1])]:vv(e).split(",").map(Mg)):ft._CE&&_v.test(e)?ft._CE("",e):n},Mv=function(e){return function(t){return 1-e(1-t)}},Ws=function(e,t){return e&&(Qt(e)?e:ft[e]||Sv(e))||t},Ks=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Qn(e,function(a){ft[a]=Ei[a]=s,ft[o=a.toLowerCase()]=n;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},kg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Bf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*qy((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:kg(a);return s=Bf/s,l.config=function(c,u){return r(e,c,u)},l},Of=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kg(n);return i.config=function(s){return r(e,s)},i};Qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ks(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Ks("Elastic",Nf("in"),Nf("out"),Nf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ks("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ks("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ks("Circ",function(r){return-(mg(1-r*r)-1)});Ks("Sine",function(r){return r===1?1:-Xy(r*Vy)+1});Ks("Back",Of("in"),Of("out"),Of());ft.SteppedEase=ft.steps=Ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((i*ml(0,o,a)|0)+s)*n}}};cl.ease=ft["quad.out"];Qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return jf+=r+","+r+"Params,"});var id=function(e,t){this.id=Wy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ed,this.set=t?t.getSetter:Zc},dl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wo(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),fl||di.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Wo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Kc(this,n),!s._dp||s.parent||wg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&dr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Vo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?zc(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(ml(-Math.abs(this._delay),a,s),i!==!1),Yc(this),nv(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Xo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Tt,o;if(s)for(this._tTime-=Tt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Tt){s=!1;break}o=o._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Vt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&dr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(pi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=jy);var i=Cn;return Cn=n,td(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Cn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ug(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ug(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Bi(this,n),pi(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,pi(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Qt(n)?n:bg,l=function(){var u=i.then;i.then=null,s&&s(),Qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){rl(this)},r})();Ai(dl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var zn=(function(r){pg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=pi(n.sortChildren),Wt&&dr(n.parent||Wt,Cr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Eg(Cr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return al(0,arguments,this),this},t.from=function(i,s,o){return al(1,arguments,this),this},t.fromTo=function(i,s,o,a){return al(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ol(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rn(i,s,Bi(this,o),1),this},t.call=function(i,s,o){return dr(this,rn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new rn(i,o,Bi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ol(o).immediateRender=pi(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ol(a).immediateRender=pi(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Vt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,_,m,g,y,b,v,M,T,x;if(this!==Wt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,b=this._ts,g=!b,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Vt(u%m),u===l?(_=this._repeat,f=c):(M=Vt(u/m),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=Vo(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),T&&_&1&&(f=c-f,x=1),_!==M&&!this._lock){var S=T&&M&1,R=S===(T&&_&1);if(_<M&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(x?0:Vt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&wi(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ov(this,Vt(a),Vt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!M&&(wi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=-Tt);break}}d=p}else{d=this._last;for(var A=i<0?i:f;d;){if(p=d._prev,(d._act||A<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||Cn&&td(d)),f!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=A?-Tt:Tt);break}}d=p}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Tt)._zTime=f>=a?1:-1,this._ts))return this._start=v,Yc(this),this.render(i,s,o);this._onUpdate&&!s&&wi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ds(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(wi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ir(s)||(s=Bi(this,s,i)),!(i instanceof dl)){if(Hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(xn(i))return this.addLabel(i,s);if(Qt(i))i=rn.delayedCall(0,i);else return this}return this!==i?dr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ki);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof rn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return xn(i)?this.removeLabel(i):Qt(i)?this.killTweensOf(i):(i.parent===this&&qc(this,i),i===this._recent&&(this._recent=this._last),Vs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(di.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Bi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=rn.delayedCall(0,s||hl,o);return a.data="isPause",this._hasPause=1,dr(this,a,Bi(this,i))},t.removePause=function(i){var s=this._first;for(i=Bi(this,i);s;)s._start===i&&s.data==="isPause"&&ds(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)us!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=zi(i),l=this._first,c=Ir(s),u;l;)l instanceof rn?Qy(l._targets,a)&&(c?(!us||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Bi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,p=rn.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Wo(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},s));return f?p.render(0):p},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ai({startAt:{time:Bi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),hg(this,Bi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),hg(this,Bi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Vt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Vs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ki,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,dr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Vt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Wo(o,o===Wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Wt._ts&&(Sg(Wt,zc(i,Wt)),vg=di.frame),di.frame>=ag){ag+=mi.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&mi.autoSleep&&di._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||di.sleep()}}},e})(dl);Ai(zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var bv=function(e,t,n,i,s,o,a){var l=new ei(this._pt,e,t,0,1,ld,null,s),c=0,u=0,h,f,d,p,_,m,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=qo(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(If)||[];h=If.exec(i);)p=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?Ys(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=If.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Zf.test(i)||g)&&(l.e=0),this._pt=l,l},rd=function(e,t,n,i,s,o,a,l,c,u){Qt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Qt(h)?c?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Qt(h)?c?Rv:Hg:ad,p;if(xn(i)&&(~i.indexOf("random(")&&(i=qo(i)),i.charAt(1)==="="&&(p=Ys(f,i)+(Pn(f)||0),(p||p===0)&&(i=p))),!u||f!==i||Xf)return!isNaN(f*i)&&i!==""?(p=new ei(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Pv:Gg,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!h&&!(t in e)&&Xc(t,i),bv.call(this,e,t,f,i,d,l||mi.stringFilter,c))},Tv=function(e,t,n,i,s){if(Qt(e)&&(e=ll(e,s,t,n,i)),!pr(e)||e.style&&e.nodeType||Hn(e)||gg(e))return xn(e)?ll(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ll(e[a],s,t,n,i);return o},sd=function(e,t,n,i,s,o){var a,l,c,u;if(fi[e]&&(a=new fi[e]).init(s,a.rawVars?t[e]:Tv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ei(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ho))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},us,Xf,od=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:m,b=e._overwrite==="auto"&&!qf,v=e.timeline,M=i.easeReverse||h,T,x,S,R,A,D,L,O,C,F,k,U,$;if(v&&(!f||!s)&&(s="none"),e._ease=Ws(s,cl.ease),e._rEase=M&&(Ws(M)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||f&&!i.stagger){if(O=m[0]?fs(m[0]).harness:0,U=O&&i[O.prop],T=kc(i,$f),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?Nc:$y),_._lazy=0),o){if(ds(e._startAt=rn.set(m,Ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&pi(l),startAt:null,delay:0,onUpdate:c&&function(){return wi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn||!a&&!d)&&e._startAt.revert(Nc),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),S=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&pi(l),immediateRender:a,stagger:0,parent:g},T),U&&(S[O.prop]=U),ds(e._startAt=rn.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn?e._startAt.revert(Nc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&pi(l)||l&&!p,x=0;x<m.length;x++){if(A=m[x],L=A._gsap||Qf(m)[x]._gsap,e._ptLookup[x]=F={},zf[L.id]&&hs.length&&Bc(),k=y===m?x:y.indexOf(A),O&&(C=new O).init(A,U||T,e,k,y)!==!1&&(e._pt=R=new ei(e._pt,A,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(G){F[G]=R}),C.priority&&(D=1)),!O||U)for(S in T)fi[S]&&(C=sd(S,T,e,k,A,y))?C.priority&&(D=1):F[S]=R=rd.call(e,A,S,"get",T[S],k,y,0,i.stringFilter);e._op&&e._op[x]&&e.kill(A,e._op[x]),b&&e._pt&&(us=e,Wt.killTweensOf(A,F,e.globalTime(t)),$=!e.parent,us=0),e._pt&&l&&(zf[L.id]=1)}D&&ud(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&v.render(ki,!0,!0)},wv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Xf=1,e.vars[t]="+=0",od(e,a),Xf=0,l?ul(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=en(n)+Pn(h.e)),h.b&&(h.b=u.s+Pn(h.b))},Ev=function(e,t){var n=e[0]?fs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Go({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Av=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Hn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ll=function(e,t,n,i,s){return Qt(e)?e.call(t,n,i,s):xn(e)&&~e.indexOf("random(")?qo(e):e},Gc=jf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",zg={};Qn(Gc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return zg[r]=1});Gc=Gc.split(",");var rn=(function(r){pg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ol(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Wt,y=(Hn(n)||gg(n)?Ir(n[0]):"length"in i)?[n]:zi(n),b,v,M,T,x,S,R,A;if(a._targets=y.length?Qf(y):ul("GSAP target "+n+" not found. https://gsap.com",!mi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Dc(c)||Dc(u)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(b=a.timeline=new zn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),b.kill(),b.parent=b._dp=Cr(a),b._start=0,f||Dc(c)||Dc(u)){if(T=y.length,R=f&&Pg(f),pr(f))for(x in f)~Gc.indexOf(x)&&(A||(A={}),A[x]=f[x]);for(v=0;v<T;v++)M=kc(i,zg),M.stagger=0,D&&(M.easeReverse=D),A&&Go(M,A),S=y[v],M.duration=+ll(c,Cr(a),v,S,y),M.delay=(+ll(u,Cr(a),v,S,y)||0)-a._delay,!f&&T===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),b.to(S,M,R?R(v,S,y):0),b._ease=ft.none;b.duration()?c=u=0:a.timeline=0}else if(p){ol(Ai(b.vars.defaults,{ease:"none"})),b._ease=Ws(p.ease||i.ease||"none");var L=0,O,C,F;if(Hn(p))p.forEach(function(k){return b.to(y,k,">")}),b.duration();else{M={};for(x in p)x==="ease"||x==="easeEach"||Av(x,p[x],M,p.easeEach);for(x in M)for(O=M[x].sort(function(k,U){return k.t-U.t}),L=0,v=0;v<O.length;v++)C=O[v],F={ease:C.e,duration:(C.t-(v?O[v-1].t:0))/100*c},F[x]=C.v,b.to(y,F,L),L+=F.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!qf&&(us=Cr(a),Wt.killTweensOf(y),us=0),dr(g,Cr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!p&&a._start===Vt(g._time)&&pi(h)&&iv(Cr(a))&&g.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),m&&Eg(Cr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Tt&&!u?l:i<Tt?0:i,f,d,p,_,m,g,y,b;if(!c)sv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Vt(h%_),h===l?(p=this._repeat,f=c):(m=Vt(h/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=Vo(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=h,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Vt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Ag(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var M=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(v?-1:1)/M:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(wi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Hf(this,i,s,o),wi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&wi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Hf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ds(this,1),!s&&!(u&&!a)&&(h||a||g)&&(wi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){fl||di.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||od(this,c),u=this._ease(c/this._dur),wv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Kc(this,0),this.parent||Tg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?rl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,us&&us.vars.overwrite!==!0)._first||rl(this),this.parent&&o!==this.timeline.totalDuration()&&Wo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?zi(i):a,c=this._ptLookup,u=this._pt,h,f,d,p,_,m,g;if((!s||s==="all")&&tv(a,l))return s==="all"&&(this._pt=0),rl(this);for(h=this._op=this._op||[],s!=="all"&&(xn(s)&&(_={},Qn(s,function(y){return _[y]=1}),s=_),s=Ev(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(h[g]=s,p=f,d={}):(d=h[g]=h[g]||{},p=s);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&qc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&rl(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return al(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return al(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Wt.killTweensOf(i,s,o)},e})(dl);Ai(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qn("staggerTo,staggerFrom,staggerFromTo",function(r){rn[r]=function(){var e=new zn,t=Gf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ad=function(e,t,n){return e[t]=n},Hg=function(e,t,n){return e[t](n)},Rv=function(e,t,n,i){return e[t](i.fp,n)},Cv=function(e,t,n){return e.setAttribute(t,n)},Zc=function(e,t){return Qt(e[t])?Hg:Wc(e[t])&&e.setAttribute?Cv:ad},Gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Pv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ld=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},cd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Iv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Lv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?qc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Dv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ud=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ei=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Gg,this.d=l||this,this.set=c||ad,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Dv,this.m=n,this.mt=s,this.tween=i},r})();Qn(jf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return $f[r]=1});Ei.TweenMax=Ei.TweenLite=rn;Ei.TimelineLite=Ei.TimelineMax=zn;Wt=new zn({sortChildren:!1,defaults:cl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mi.stringFilter=nd;var Xs=[],Uc={},Nv=[],dg=0,Ov=0,Uf=function(e){return(Uc[e]||Nv).map(function(t){return t()})},pl=function(){var e=Date.now(),t=[];e-dg>2&&(Uf("matchMediaInit"),Xs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=fr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Uf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),dg=e,Uf("matchMedia"))},Vg=(function(){function r(t,n){this.selector=n&&Vf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ov++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Qt(n)&&(s=i,i=n,n=Qt);var o=this,a=function(){var c=zt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Vf(s)),zt=o,h=i.apply(o,arguments),Qt(h)&&o._r.push(h),zt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=zt;zt=null,n(this),zt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof rn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof zn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof rn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Xs.length;o--;)Xs[o].id===this.id&&Xs.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(pl):a.removeEventListener("change",pl)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),Uv=(function(){function r(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){pr(n)||(n={matches:n});var o=new Vg(0,s||this.scope),a=o.conditions={},l,c,u;zt&&!o.selector&&(o.selector=zt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=fr.matchMedia(n[c]),l&&(Xs.indexOf(o)<0&&Xs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(pl):l.addEventListener("change",pl),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Vc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ug(i)})},timeline:function(e){return new zn(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){xn(e)&&(e=zi(e)[0]);var s=fs(e||{}).get,o=n?bg:Mg;return n==="native"&&(n=""),e&&(t?o((fi[t]&&fi[t].get||s)(e,t,n,i)):function(a,l,c){return o((fi[a]&&fi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=zi(e),e.length>1){var i=e.map(function(u){return Gn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=fi[t],a=fs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ho._pt=0,h.init(e,n?u+n:u,Ho,0,[e]),h.render(1,h),Ho._pt&&cd(1,Ho)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Gn.to(e,Ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ws(e.ease,cl.ease)),lg(cl,e||{})},config:function(e){return lg(mi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!fi[a]&&!Ei[a]&&ul(t+" effect requires "+a+" plugin.")}),Lf[t]=function(a,l,c){return n(zi(a),Ai(l||{},s),c)},o&&(zn.prototype[t]=function(a,l,c){return this.add(Lf[t](a,pr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Ws(t)},parseEase:function(e,t){return arguments.length?Ws(e,t):ft},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new zn(e),i,s;for(n.smoothChildTiming=pi(e.smoothChildTiming),Wt.remove(n),n._dp=0,n._time=n._tTime=Wt._time,i=Wt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof rn&&i.vars.onComplete===i._targets[0]))&&dr(n,i,i._start-i._delay),i=s;return dr(Wt,n,0),n},context:function(e,t){return e?new Vg(e,t):zt},matchMedia:function(e){return new Uv(e)},matchMediaRefresh:function(){return Xs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||pl()},addEventListener:function(e,t){var n=Uc[e]||(Uc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Uc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:dv,wrapYoyo:pv,distribute:Pg,random:Lg,snap:Ig,normalize:fv,getUnit:Pn,clamp:lv,splitColor:Fg,toArray:zi,selector:Vf,mapRange:Ng,pipe:uv,unitize:hv,interpolate:mv,shuffle:Cg},install:xg,effects:Lf,ticker:di,updateRoot:zn.updateRoot,plugins:fi,globalTimeline:Wt,core:{PropTween:ei,globals:yg,Tween:rn,Timeline:zn,Animation:dl,getCache:fs,_removeLinkedListItem:qc,reverting:function(){return Cn},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return qf=e}}};Qn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vc[r]=rn[r]});di.add(zn.updateRoot);Ho=Vc.to({},{duration:0});var Fv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Bv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Fv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ff=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(xn(s)&&(l={},Qn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Bv(a,s)}}}},Gn=Vc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ff("roundProps",Wf),Ff("modifiers"),Ff("snap",Ig))||Vc;rn.version=zn.version=Gn.version="3.15.1";_g=1;Yf()&&Xo();var kv=ft.Power0,zv=ft.Power1,Hv=ft.Power2,Gv=ft.Power3,Vv=ft.Power4,Wv=ft.Linear,Xv=ft.Quad,qv=ft.Cubic,Yv=ft.Quart,Kv=ft.Quint,Zv=ft.Strong,Jv=ft.Elastic,$v=ft.Back,jv=ft.SteppedEase,Qv=ft.Bounce,eS=ft.Sine,tS=ft.Expo,nS=ft.Circ;var Wg,ms,Ko,gd,js,iS,Xg,_d,rS=function(){return typeof window<"u"},Dr={},$s=180/Math.PI,Zo=Math.PI/180,Yo=Math.atan2,qg=1e8,xd=/([A-Z])/g,sS=/(left|right|width|margin|padding|x)/i,oS=/[\s,\(]\S/,mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},aS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},e0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},t0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},hS=function(e,t,n){return e.style[t]=n},fS=function(e,t,n){return e.style.setProperty(t,n)},dS=function(e,t,n){return e._gsap[t]=n},pS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},mS=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},gS=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Xt="transform",gi=Xt+"Origin",_S=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Dr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Lr(i,a)}):this.tfm[e]=o.x?o[e]:Lr(i,e),e===gi&&(this.tfm.zOrigin=o.zOrigin);else return mr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Xt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(gi,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},n0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},xS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_d(),(!s||!s.isStart)&&!n[Xt]&&(n0(n),i.zOrigin&&n[gi]&&(n[gi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},i0=function(e,t){var n={target:e,props:[],revert:xS,save:_S};return e._gsap||Gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},r0,dd=function(e,t){var n=ms.createElementNS?ms.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ms.createElement(e);return n&&n.style?n:ms.createElement(e)},Ri=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(xd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Jo(t)||t,1)||""},Yg="O,Moz,ms,Ms,Webkit".split(","),Jo=function(e,t,n){var i=t||js,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Yg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Yg[o]:"")+e},pd=function(){rS()&&window.document&&(Wg=window,ms=Wg.document,Ko=ms.documentElement,js=dd("div")||{style:{}},iS=dd("div"),Xt=Jo(Xt),gi=Xt+"Origin",js.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",r0=!!Jo("perspective"),_d=Gn.core.reverting,gd=1)},Kg=function(e){var t=e.ownerSVGElement,n=dd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ko.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ko.removeChild(n),s},Zg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},s0=function(e){var t,n;try{t=e.getBBox()}catch{t=Kg(e),n=1}return t&&(t.width||t.height)||n||(t=Kg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Zg(e,["x","cx","x1"])||0,y:+Zg(e,["y","cy","y1"])||0,width:0,height:0}:t},o0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&s0(e))},_s=function(e,t){if(t){var n=e.style,i;t in Dr&&t!==gi&&(t=Xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(xd,"-$1").toLowerCase())):n.removeAttribute(t)}},gs=function(e,t,n,i,s,o){var a=new ei(e._pt,t,n,0,1,o?t0:e0);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Jg={deg:1,rad:1,turn:1},yS={grid:1,flex:1},xs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=js.style,l=sS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",p,_,m,g;if(i===o||!s||Jg[i]||Jg[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&o0(e),(d||o==="%")&&(Dr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],en(d?s/p*h:s/100*p);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ms||!_.appendChild)&&(_=ms.body),m=_._gsap,m&&d&&m.width&&l&&m.time===di.time&&!m.uncache)return en(s/m.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,p=e[u],y?e.style[t]=y:_s(e,t)}else(d||o==="%")&&!yS[Ri(_,"display")]&&(a.position=Ri(e,"position")),_===e&&(a.position="static"),_.appendChild(js),p=js[u],_.removeChild(js),a.position="absolute";return l&&d&&(m=fs(_),m.time=di.time,m.width=_[u]),en(f?p*s/h:p&&s?h/p*s:0)},Lr=function(e,t,n,i){var s;return gd||pd(),t in mr&&t!=="transform"&&(t=mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Dr[t]&&t!=="transform"?(s=xl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$c(Ri(e,gi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Jc[t]&&Jc[t](e,t,n)||Ri(e,t)||ed(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xs(e,t,s,n)+n:s},vS=function(e,t,n,i){if(!n||n==="none"){var s=Jo(t,e,1),o=s&&Ri(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ri(e,"borderTopColor"))}var a=new ei(this._pt,e.style,t,0,1,ld),l=0,c=0,u,h,f,d,p,_,m,g,y,b,v,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ri(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ri(e,t)||i,_?e.style[t]=_:_s(e,t)),u=[n,i],nd(u),n=u[0],i=u[1],f=n.match(qs)||[],M=i.match(qs)||[],M.length){for(;h=qs.exec(i);)m=h[0],y=i.substring(l,h.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ys(d,m)+v),g=parseFloat(m),b=m.substr((g+"").length),l=qs.lastIndex-b.length,b||(b=b||mi.units[t]||v,l===i.length&&(i+=b,a.e+=b)),v!==b&&(d=xs(e,t,_,b)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?t0:e0;return Zf.test(i)&&(a.e=0),this._pt=a,a},$g={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},SS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=$g[n]||n,t[1]=$g[i]||i,t.join(" ")},MS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Dr[a]&&(l=1,a=a==="transformOrigin"?gi:Xt),_s(n,a);l&&(_s(n,Xt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",xl(n,1),o.uncache=1,n0(i)))}},Jc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ei(e._pt,t,n,0,0,MS);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},_l=[1,0,0,1,0,0],a0={},l0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jg=function(e){var t=Ri(e,Xt);return l0(t)?_l:t.substr(7).match(Kf).map(en)},yd=function(e,t){var n=e._gsap||fs(e),i=e.style,s=jg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_l:s):(s===_l&&!e.offsetParent&&e!==Ko&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ko.appendChild(e)),s=jg(e),l?i.display=l:_s(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ko.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},md=function(e,t,n,i,s,o){var a=e._gsap,l=s||yd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],y=l[5],b=t.split(" "),v=parseFloat(b[0])||0,M=parseFloat(b[1])||0,T,x,S,R;n?l!==_l&&(x=d*m-p*_)&&(S=v*(m/x)+M*(-_/x)+(_*y-m*g)/x,R=v*(-p/x)+M*(d/x)-(d*y-p*g)/x,v=S,M=R):(T=s0(e),v=T.x+(~b[0].indexOf("%")?v/100*T.width:v),M=T.y+(~(b[1]||b[0]).indexOf("%")?M/100*T.height:M)),i||i!==!1&&a.smooth?(g=v-c,y=M-u,a.xOffset=h+(g*d+y*_)-g,a.yOffset=f+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[gi]="0px 0px",o&&(gs(o,a,"xOrigin",c,v),gs(o,a,"yOrigin",u,M),gs(o,a,"xOffset",h,a.xOffset),gs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},xl=function(e,t){var n=e._gsap||new id(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ri(e,gi)||"0",u,h,f,d,p,_,m,g,y,b,v,M,T,x,S,R,A,D,L,O,C,F,k,U,$,G,I,J,fe,Ee,X,ue;return u=h=f=_=m=g=y=b=v=0,d=p=1,n.svg=!!(e.getCTM&&o0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),i.scale=i.rotate=i.translate="none"),x=yd(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),md(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,x)),M=n.xOrigin||0,T=n.yOrigin||0,x!==_l&&(D=x[0],L=x[1],O=x[2],C=x[3],u=F=x[4],h=k=x[5],x.length===6?(d=Math.sqrt(D*D+L*L),p=Math.sqrt(C*C+O*O),_=D||L?Yo(L,D)*$s:0,y=O||C?Yo(O,C)*$s+_:0,y&&(p*=Math.abs(Math.cos(y*Zo))),n.svg&&(u-=M-(M*D+T*O),h-=T-(M*L+T*C))):(ue=x[6],Ee=x[7],I=x[8],J=x[9],fe=x[10],X=x[11],u=x[12],h=x[13],f=x[14],S=Yo(ue,fe),m=S*$s,S&&(R=Math.cos(-S),A=Math.sin(-S),U=F*R+I*A,$=k*R+J*A,G=ue*R+fe*A,I=F*-A+I*R,J=k*-A+J*R,fe=ue*-A+fe*R,X=Ee*-A+X*R,F=U,k=$,ue=G),S=Yo(-O,fe),g=S*$s,S&&(R=Math.cos(-S),A=Math.sin(-S),U=D*R-I*A,$=L*R-J*A,G=O*R-fe*A,X=C*A+X*R,D=U,L=$,O=G),S=Yo(L,D),_=S*$s,S&&(R=Math.cos(S),A=Math.sin(S),U=D*R+L*A,$=F*R+k*A,L=L*R-D*A,k=k*R-F*A,D=U,F=$),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=en(Math.sqrt(D*D+L*L+O*O)),p=en(Math.sqrt(k*k+ue*ue)),S=Yo(F,k),y=Math.abs(S)>2e-4?S*$s:0,v=X?1/(X<0?-X:X):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!l0(Ri(e,Xt)),U&&e.setAttribute("transform",U))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=en(d),n.scaleY=en(p),n.rotation=en(_)+a,n.rotationX=en(m)+a,n.rotationY=en(g)+a,n.skewX=y+a,n.skewY=b+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[gi]=$c(c)),n.xOffset=n.yOffset=0,n.force3D=mi.force3D,n.renderTransform=n.svg?TS:r0?c0:bS,n.uncache=0,n},$c=function(e){return(e=e.split(" "))[0]+" "+e[1]},hd=function(e,t,n){var i=Pn(t);return en(parseFloat(t)+parseFloat(xs(e,"x",n+"px",i)))+i},bS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,c0(e,t)},Zs="0deg",gl="0px",Js=") ",c0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,y=n.target,b=n.zOrigin,v="",M=g==="auto"&&e&&e!==1||g===!0;if(b&&(h!==Zs||u!==Zs)){var T=parseFloat(u)*Zo,x=Math.sin(T),S=Math.cos(T),R;T=parseFloat(h)*Zo,R=Math.cos(T),o=hd(y,o,x*R*-b),a=hd(y,a,-Math.sin(T)*-b),l=hd(y,l,S*R*-b+b)}m!==gl&&(v+="perspective("+m+Js),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||o!==gl||a!==gl||l!==gl)&&(v+=l!==gl||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Js),c!==Zs&&(v+="rotate("+c+Js),u!==Zs&&(v+="rotateY("+u+Js),h!==Zs&&(v+="rotateX("+h+Js),(f!==Zs||d!==Zs)&&(v+="skew("+f+", "+d+Js),(p!==1||_!==1)&&(v+="scale("+p+", "+_+Js),y.style[Xt]=v||"translate(0, 0)"},TS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,y=n.forceCSS,b=parseFloat(o),v=parseFloat(a),M,T,x,S,R;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zo,c*=Zo,M=Math.cos(l)*h,T=Math.sin(l)*h,x=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=Zo,R=Math.tan(c-u),R=Math.sqrt(1+R*R),x*=R,S*=R,u&&(R=Math.tan(u),R=Math.sqrt(1+R*R),M*=R,T*=R)),M=en(M),T=en(T),x=en(x),S=en(S)):(M=h,S=f,T=x=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=xs(d,"x",o,"px"),v=xs(d,"y",a,"px")),(p||_||m||g)&&(b=en(b+p-(p*M+_*x)+m),v=en(v+_-(p*T+_*S)+g)),(i||s)&&(R=d.getBBox(),b=en(b+i/100*R.width),v=en(v+s/100*R.height)),R="matrix("+M+","+T+","+x+","+S+","+b+","+v+")",d.setAttribute("transform",R),y&&(d.style[Xt]=R)},wS=function(e,t,n,i,s){var o=360,a=xn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?$s:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*qg)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*qg)%o-~~(c/o)*o)),e._pt=f=new ei(e._pt,t,n,i,c,aS),f.e=u,f.u="deg",e._props.push(n),f},Qg=function(e,t){for(var n in t)e[n]=t[n];return e},ES=function(e,t,n){var i=Qg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Xt]=t,a=xl(n,1),_s(n,Xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xt],o[Xt]=t,a=xl(n,1),o[Xt]=c);for(l in Dr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Pn(c),p=Pn(u),h=d!==p?xs(n,l,c,p):parseFloat(c),f=parseFloat(u),e._pt=new ei(e._pt,a,l,h,f-h,fd),e._pt.u=p||0,e._props.push(l));Qg(a,i)};Qn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Jc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(p){return Lr(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var vd={name:"css",register:pd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,p,_,m,g,y,b,v,M,T,x,S,R;gd||pd(),this.styles=this.styles||i0(e),S=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(fi[_]&&sd(_,t,n,i,e,s)))){if(d=typeof u,p=Jc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=qo(u)),p)p(this,e,_,u,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Pr.lastIndex=0,Pr.test(c)||(m=Pn(c),g=Pn(u),g?m!==g&&(c=xs(e,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),S.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],xn(c)&&~c.indexOf("random(")&&(c=qo(c)),Pn(c+"")||c==="auto"||(c+=mi.units[_]||Pn(Lr(e,_))||""),(c+"").charAt(1)==="="&&(c=Lr(e,_))):c=Lr(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in mr&&(_==="autoAlpha"&&(f===1&&Lr(e,"visibility")==="hidden"&&h&&(f=0),S.push("visibility",0,a.visibility),gs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=mr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Dr,b){if(this.styles.save(_),R=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ri(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=Ri(e,"perspective"),A?e.style.perspective=A:_s(e,"perspective")}h=parseFloat(u)}if(v||(M=e._gsap,M.renderTransform&&!t.parseTransform||xl(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new ei(this._pt,a,Xt,0,1,M.renderTransform,M,0,-1),v.dep=1),_==="scale")this._pt=new ei(this._pt,M,"scaleY",M.scaleY,(y?Ys(M.scaleY,y+h):h)-M.scaleY||0,fd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(gi,0,a[gi]),u=SS(u),M.svg?md(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&gs(this,M,"zOrigin",M.zOrigin,g),gs(this,a,_,$c(c),$c(u)));continue}else if(_==="svgOrigin"){md(e,u,1,T,0,this);continue}else if(_ in a0){wS(this,M,_,f,y?Ys(f,y+u):u);continue}else if(_==="smoothOrigin"){gs(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){ES(this,u,e);continue}}else _ in a||(_=Jo(_)||_);if(b||(h||h===0)&&(f||f===0)&&!oS.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),g=Pn(u)||(_ in mi.units?mi.units[_]:m),m!==g&&(f=xs(e,_,c,g)),this._pt=new ei(this._pt,b?M:a,_,f,(y?Ys(f,y+h):h)-f,!b&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?uS:fd),this._pt.u=g||0,b&&R!==u?(this._pt.b=c,this._pt.e=R,this._pt.r=cS):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=lS);else if(_ in a)vS.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Xc(_,u);continue}b||(_ in a?S.push(_,0,a[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),o.push(_)}}x&&ud(this)},render:function(e,t){if(t.tween._time||!_d())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Lr,aliases:mr,getSetter:function(e,t,n){var i=mr[t];return i&&i.indexOf(",")<0&&(t=i),t in Dr&&t!==gi&&(e._gsap.x||Lr(e,"x"))?n&&Xg===n?t==="scale"?pS:dS:(Xg=n||{})&&(t==="scale"?mS:gS):e.style&&!Wc(e.style[t])?hS:~t.indexOf("-")?fS:Zc(e,t)},core:{_removeProperty:_s,_getMatrix:yd}};Gn.utils.checkPrefix=Jo;Gn.core.getStyleSaver=i0;(function(r,e,t,n){var i=Qn(r+","+e+","+t,function(s){Dr[s]=1});Qn(e,function(s){mi.units[s]="deg",a0[s]=1}),mr[i[13]]=r+","+e,Qn(n,function(s){var o=s.split(":");mr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){mi.units[r]="px"});Gn.registerPlugin(vd);var qt=Gn.registerPlugin(vd)||Gn,LA=qt.core.Tween;function u0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function AS(r,e,t){return e&&u0(r.prototype,e),t&&u0(r,t),r}var In,eu,RS,_i,ys,vs,jo,f0,Qs,Qo,d0,Nr,tr,p0,m0=function(){return In||typeof window<"u"&&(In=window.gsap)&&In.registerPlugin&&In},g0=1,$o=[],et=[],nr=[],vl=Date.now,Sd=function(e,t){return t},CS=function(){var e=Qo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,nr),et=n,nr=i,Sd=function(o,a){return t[o](a)}},Ur=function(e,t){return~nr.indexOf(e)&&nr[nr.indexOf(e)+1][t]},Sl=function(e){return!!~d0.indexOf(e)},ni=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},ti=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},jc="scrollLeft",Qc="scrollTop",Md=function(){return Nr&&Nr.isPressed||et.cache++},tu=function(e,t){var n=function i(s){if(s||s===0){g0&&_i.history.scrollRestoration!=="manual"&&(_i.history.scrollRestoration="manual");var o=Nr&&Nr.isPressed;s=i.v=Math.round(s)||(Nr&&Nr.iOS?1:0),e(s),i.cacheID=et.cache,o&&Sd("ss",s)}else(t||et.cache!==i.cacheID||Sd("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Vn={s:jc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tu(function(r){return arguments.length?_i.scrollTo(r,un.sc()):_i.pageXOffset||ys[jc]||vs[jc]||jo[jc]||0})},un={s:Qc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:tu(function(r){return arguments.length?_i.scrollTo(Vn.sc(),r):_i.pageYOffset||ys[Qc]||vs[Qc]||jo[Qc]||0})},ii=function(e,t){return(t&&t._ctx&&t._ctx.selector||In.utils.toArray)(e)[0]||(typeof e=="string"&&In.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},PS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Or=function(e,t){var n=t.s,i=t.sc;Sl(e)&&(e=ys.scrollingElement||vs);var s=et.indexOf(e),o=i===un.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||ni(e,"scroll",Md);var a=et[s+o],l=a||(et[s+o]=tu(Ur(e,n),!0)||(Sl(e)?i:tu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=In.getProperty(e,"scrollBehavior")==="smooth"),l},nu=function(e,t,n){var i=e,s=e,o=vl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=vl();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(p){var _=a,m=s,g=vl();return(p||p===0)&&p!==i&&u(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},yl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},h0=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},_0=function(){Qo=In.core.globals().ScrollTrigger,Qo&&Qo.core&&CS()},x0=function(e){return In=e||m0(),!eu&&In&&typeof document<"u"&&document.body&&(_i=window,ys=document,vs=ys.documentElement,jo=ys.body,d0=[_i,ys,vs,jo],RS=In.utils.clamp,p0=In.core.context||function(){},Qs="onpointerenter"in jo?"pointer":"mouse",f0=tn.isTouch=_i.matchMedia&&_i.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _i||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,tr=tn.eventTypes=("ontouchstart"in vs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return g0=0},500),eu=1),Qo||_0(),eu};Vn.op=un;et.cache=0;var tn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){eu||x0(In)||console.warn("Please gsap.registerPlugin(Observer)"),Qo||_0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,y=n.onDrag,b=n.onPress,v=n.onRelease,M=n.onRight,T=n.onLeft,x=n.onUp,S=n.onDown,R=n.onChangeX,A=n.onChangeY,D=n.onChange,L=n.onToggleX,O=n.onToggleY,C=n.onHover,F=n.onHoverEnd,k=n.onMove,U=n.ignoreCheck,$=n.isNormalizer,G=n.onGestureStart,I=n.onGestureEnd,J=n.onWheel,fe=n.onEnable,Ee=n.onDisable,X=n.onClick,ue=n.scrollSpeed,Me=n.capture,Te=n.allowClicks,pe=n.lockAxis,ae=n.onLockAxis;this.target=a=ii(a)||vs,this.vars=n,d&&(d=In.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,ue=ue||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(_i.getComputedStyle(jo).lineHeight)||22);var ke,oe,ie,le,_e,Ce,Ve,K=this,Qe=0,Nt=0,ct=n.passive||!u&&n.passive!==!1,nt=Or(a,Vn),Jt=Or(a,un),nn=nt(),H=Jt(),_t=~o.indexOf("touch")&&!~o.indexOf("pointer")&&tr[0]==="pointerdown",dt=Sl(a),Ye=a.ownerDocument||ys,xe=[0,0,0],mt=[0,0,0],Be=0,We=function(){return Be=vl()},P=function(Se,se){return(K.event=Se)&&d&&PS(Se.target,d)||se&&_t&&Se.pointerType!=="touch"||U&&U(Se,se)},w=function(){K._vx.reset(),K._vy.reset(),oe.pause(),h&&h(K)},W=function(){var Se=K.deltaX=h0(xe),se=K.deltaY=h0(mt),te=Math.abs(Se)>=i,we=Math.abs(se)>=i;D&&(te||we)&&D(K,Se,se,xe,mt),te&&(M&&K.deltaX>0&&M(K),T&&K.deltaX<0&&T(K),R&&R(K),L&&K.deltaX<0!=Qe<0&&L(K),Qe=K.deltaX,xe[0]=xe[1]=xe[2]=0),we&&(S&&K.deltaY>0&&S(K),x&&K.deltaY<0&&x(K),A&&A(K),O&&K.deltaY<0!=Nt<0&&O(K),Nt=K.deltaY,mt[0]=mt[1]=mt[2]=0),(le||ie)&&(k&&k(K),ie&&(m&&ie===1&&m(K),y&&y(K),ie=0),le=!1),Ce&&!(Ce=!1)&&ae&&ae(K),_e&&(J(K),_e=!1),ke=0},ce=function(Se,se,te){xe[te]+=Se,mt[te]+=se,K._vx.update(Se),K._vy.update(se),c?ke||(ke=requestAnimationFrame(W)):W()},re=function(Se,se){pe&&!Ve&&(K.axis=Ve=Math.abs(Se)>Math.abs(se)?"x":"y",Ce=!0),Ve!=="y"&&(xe[2]+=Se,K._vx.update(Se,!0)),Ve!=="x"&&(mt[2]+=se,K._vy.update(se,!0)),c?ke||(ke=requestAnimationFrame(W)):W()},ge=function(Se){if(!P(Se,1)){Se=yl(Se,u);var se=Se.clientX,te=Se.clientY,we=se-K.x,ne=te-K.y,Le=K.isDragging;K.x=se,K.y=te,(Le||(we||ne)&&(Math.abs(K.startX-se)>=s||Math.abs(K.startY-te)>=s))&&(ie||(ie=Le?2:1),Le||(K.isDragging=!0),re(we,ne))}},be=K.onPress=function(he){P(he,1)||he&&he.button||(K.axis=Ve=null,oe.pause(),K.isPressed=!0,he=yl(he),Qe=Nt=0,K.startX=K.x=he.clientX,K.startY=K.y=he.clientY,K._vx.reset(),K._vy.reset(),ni($?a:Ye,tr[1],ge,ct,!0),K.deltaX=K.deltaY=0,b&&b(K))},q=K.onRelease=function(he){if(!P(he,1)){ti($?a:Ye,tr[1],ge,!0);var Se=!isNaN(K.y-K.startY),se=K.isDragging,te=se&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),we=yl(he);!te&&Se&&(K._vx.reset(),K._vy.reset(),u&&Te&&In.delayedCall(.08,function(){if(vl()-Be>300&&!he.defaultPrevented){if(he.target.click)he.target.click();else if(Ye.createEvent){var ne=Ye.createEvent("MouseEvents");ne.initMouseEvent("click",!0,!0,_i,1,we.screenX,we.screenY,we.clientX,we.clientY,!1,!1,!1,!1,0,null),he.target.dispatchEvent(ne)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,h&&se&&!$&&oe.restart(!0),ie&&W(),g&&se&&g(K),v&&v(K,te)}},ee=function(Se){return Se.touches&&Se.touches.length>1&&(K.isGesturing=!0)&&G(Se,K.isDragging)},me=function(){return(K.isGesturing=!1)||I(K)},N=function(Se){if(!P(Se)){var se=nt(),te=Jt();ce((se-nn)*ue,(te-H)*ue,1),nn=se,H=te,h&&oe.restart(!0)}},Q=function(Se){if(!P(Se)){Se=yl(Se,u),J&&(_e=!0);var se=(Se.deltaMode===1?l:Se.deltaMode===2?_i.innerHeight:1)*p;ce(Se.deltaX*se,Se.deltaY*se,0),h&&!$&&oe.restart(!0)}},j=function(Se){if(!P(Se)){var se=Se.clientX,te=Se.clientY,we=se-K.x,ne=te-K.y;K.x=se,K.y=te,le=!0,h&&oe.restart(!0),(we||ne)&&re(we,ne)}},ye=function(Se){K.event=Se,C(K)},de=function(Se){K.event=Se,F(K)},ve=function(Se){return P(Se)||yl(Se,u)&&X(K)};oe=K._dc=In.delayedCall(f||.25,w).pause(),K.deltaX=K.deltaY=0,K._vx=nu(0,50,!0),K._vy=nu(0,50,!0),K.scrollX=nt,K.scrollY=Jt,K.isDragging=K.isGesturing=K.isPressed=!1,p0(this),K.enable=function(he){return K.isEnabled||(ni(dt?Ye:a,"scroll",Md),o.indexOf("scroll")>=0&&ni(dt?Ye:a,"scroll",N,ct,Me),o.indexOf("wheel")>=0&&ni(a,"wheel",Q,ct,Me),(o.indexOf("touch")>=0&&f0||o.indexOf("pointer")>=0)&&(ni(a,tr[0],be,ct,Me),ni(Ye,tr[2],q),ni(Ye,tr[3],q),Te&&ni(a,"click",We,!0,!0),X&&ni(a,"click",ve),G&&ni(Ye,"gesturestart",ee),I&&ni(Ye,"gestureend",me),C&&ni(a,Qs+"enter",ye),F&&ni(a,Qs+"leave",de),k&&ni(a,Qs+"move",j)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=le=ie=!1,K._vx.reset(),K._vy.reset(),nn=nt(),H=Jt(),he&&he.type&&be(he),fe&&fe(K)),K},K.disable=function(){K.isEnabled&&($o.filter(function(he){return he!==K&&Sl(he.target)}).length||ti(dt?Ye:a,"scroll",Md),K.isPressed&&(K._vx.reset(),K._vy.reset(),ti($?a:Ye,tr[1],ge,!0)),ti(dt?Ye:a,"scroll",N,Me),ti(a,"wheel",Q,Me),ti(a,tr[0],be,Me),ti(Ye,tr[2],q),ti(Ye,tr[3],q),ti(a,"click",We,!0),ti(a,"click",ve),ti(Ye,"gesturestart",ee),ti(Ye,"gestureend",me),ti(a,Qs+"enter",ye),ti(a,Qs+"leave",de),ti(a,Qs+"move",j),K.isEnabled=K.isPressed=K.isDragging=!1,Ee&&Ee(K))},K.kill=K.revert=function(){K.disable();var he=$o.indexOf(K);he>=0&&$o.splice(he,1),Nr===K&&(Nr=0)},$o.push(K),$&&Sl(a)&&(Nr=K),K.enable(_)},AS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();tn.version="3.15.1";tn.create=function(r){return new tn(r)};tn.register=x0;tn.getAll=function(){return $o.slice()};tn.getById=function(r){return $o.filter(function(e){return e.vars.id===r})[0]};m0()&&In.registerPlugin(tn);var Ne,ia,rt,bt,Ii,St,Ud,xu,Nl,Rl,bl,iu,Wn,Su,Cd,si,y0,v0,ra,U0,bd,F0,ri,Pd,B0,k0,Ss,Id,Fd,sa,Bd,Ms,Ld,Td,ru=1,Xn=Date.now,wd=Xn(),Vi=0,Tl=0,S0=function(e,t,n){var i=Pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},M0=function(e,t){return t&&(!Pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},IS=function r(){return Tl&&requestAnimationFrame(r)},b0=function(){return Su=1},T0=function(){return Su=0},gr=function(e){return e},wl=function(e){return Math.round(e*1e5)/1e5||0},z0=function(){return typeof window<"u"},H0=function(){return Ne||z0()&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},so=function(e){return!!~Ud.indexOf(e)},G0=function(e){return(e==="Height"?Bd:rt["inner"+e])||Ii["client"+e]||St["client"+e]},V0=function(e){return Ur(e,"getBoundingClientRect")||(so(e)?function(){return _u.width=rt.innerWidth,_u.height=Bd,_u}:function(){return Fr(e)})},LS=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ur(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?G0(s):e["client"+s])||0}},DS=function(e,t){return!t||~nr.indexOf(e)?V0(e):function(){return _u}},_r=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ur(e,n))?o()-V0(e)()[s]:so(e)?(Ii[n]||St[n])-G0(i):e[n]-e["offset"+i])},su=function(e,t){for(var n=0;n<ra.length;n+=3)(!t||~t.indexOf(ra[n+1]))&&e(ra[n],ra[n+1],ra[n+2])},Pi=function(e){return typeof e=="string"},qn=function(e){return typeof e=="function"},El=function(e){return typeof e=="number"},eo=function(e){return typeof e=="object"},Ml=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ea=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ta=Math.abs,W0="left",X0="top",kd="right",zd="bottom",no="width",io="height",Cl="Right",Pl="Left",Il="Top",Ll="Bottom",hn="padding",Hi="margin",aa="Width",Hd="Height",yn="px",Gi=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},NS=function(e){var t=Gi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},w0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Fr=function(e,t){var n=t&&Gi(e)[Cd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ne.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},yu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},q0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},OS=function(e){return function(t){return Ne.utils.snap(q0(e),t)}},Gd=function(e){var t=Ne.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},US=function(e){return function(t,n){return Gd(q0(e))(t,n.direction)}},ou=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},En=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},au=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},E0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},lu={toggleActions:"play",anticipatePin:0},vu={top:0,left:0,center:.5,bottom:1,right:1},du=function(e,t){if(Pi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in vu?vu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},cu=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,p=bt.createElement("div"),_=so(n)||Ur(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?St:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,b=y?c:u,v="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===un?kd:zd)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=v,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],pu(p,0,i,y),p},pu=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+aa]=1,s["border"+a+aa]=0,s[n.p]=t+"px",Ne.set(e,s)},it=[],Dd={},Ol,A0=function(){return Xn()-Vi>34&&(Ol||(Ol=requestAnimationFrame(Br)))},na=function(){(!ri||!ri.isPressed||ri.startX>St.clientWidth)&&(et.cache++,ri?Ol||(Ol=requestAnimationFrame(Br)):Br(),Vi||ao("scrollStart"),Vi=Xn())},Ed=function(){k0=rt.innerWidth,B0=rt.innerHeight},Al=function(e){et.cache++,(e===!0||!Wn&&!F0&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Pd||k0!==rt.innerWidth||Math.abs(rt.innerHeight-B0)>rt.innerHeight*.25))&&xu.restart(!0)},oo={},FS=[],Y0=function r(){return wn($e,"scrollEnd",r)||to(!0)},ao=function(e){return oo[e]&&oo[e].map(function(t){return t()})||FS},Ci=[],K0=function(e){for(var t=0;t<Ci.length;t+=5)(!e||Ci[t+4]&&Ci[t+4].query===e)&&(Ci[t].style.cssText=Ci[t+1],Ci[t].getBBox&&Ci[t].setAttribute("transform",Ci[t+2]||""),Ci[t+3].uncache=1)},Z0=function(){et.cache++,et.forEach(function(e){return qn(e)&&(e.rec=e())})},Vd=function(e,t){var n;for(si=0;si<it.length;si++)n=it[si],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ms=!0,t&&K0(t),t||ao("revert")},J0=function(e,t){et.cache++,(t||!oi)&&et.forEach(function(n){return qn(n)&&n.cacheID++&&(n.rec=0)}),Pi(e)&&(Fd=e,rt.history.scrollRestoration!==e&&(rt.history.scrollRestoration=e))},oi,ro=0,R0,BS=function(){if(R0!==ro){var e=R0=ro;requestAnimationFrame(function(){return e===ro&&to(!0)})}},$0=function(){St.appendChild(sa),Bd=!ri&&sa.offsetHeight||rt.innerHeight,St.removeChild(sa)},C0=function(e){return Nl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},to=function(e,t){if(Ii=bt.documentElement,St=bt.body,Ud=[rt,bt,Ii,St],Vi&&!e&&!Ms){En($e,"scrollEnd",Y0);return}$0(),oi=$e.isRefreshing=!0,Ms||Z0();var n=ao("refreshInit");U0&&$e.sort(),t||Vd(),et.forEach(function(i){qn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Ms=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ld=1,C0(!0),it.forEach(function(i){var s=_r(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),C0(!1),Ld=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){qn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),J0(Fd,1),xu.pause(),ro++,oi=2,Br(2),it.forEach(function(i){return qn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),oi=$e.isRefreshing=!1,ao("refresh")},Nd=0,mu=1,Dl,Br=function(e){if(e===2||!oi&&!Ms){$e.isUpdating=!0,Dl&&Dl.update(0);var t=it.length,n=Xn(),i=n-wd>=50,s=t&&it[0].scroll();if(mu=Nd>s?-1:1,oi||(Nd=s),i&&(Vi&&!Su&&n-Vi>200&&(Vi=0,ao("scrollEnd")),bl=wd,wd=n),mu<0){for(si=t;si-- >0;)it[si]&&it[si].update(0,i);mu=1}else for(si=0;si<t;si++)it[si]&&it[si].update(0,i);$e.isUpdating=!1}Ol=0},Od=[W0,X0,zd,kd,Hi+Ll,Hi+Cl,Hi+Il,Hi+Pl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gu=Od.concat([no,io,"boxSizing","max"+aa,"max"+Hd,"position",Hi,hn,hn+Il,hn+Cl,hn+Ll,hn+Pl]),kS=function(e,t,n){oa(n);var i=e._gsap;if(i.spacerIsNative)oa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ad=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Od.length,o=t.style,a=e.style,l;s--;)l=Od[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[zd]=a[kd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[no]=yu(e,Vn)+yn,o[io]=yu(e,un)+yn,o[hn]=a[Hi]=a[X0]=a[W0]="0",oa(i),a[no]=a["max"+aa]=n[no],a[io]=a["max"+Hd]=n[io],a[hn]=n[hn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},zS=/([A-Z])/g,oa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ne.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(zS,"-$1").toLowerCase())}},uu=function(e){for(var t=gu.length,n=e.style,i=[],s=0;s<t;s++)i.push(gu[s],n[gu[s]]);return i.t=e,i},HS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},_u={left:0,top:0},P0=function(e,t,n,i,s,o,a,l,c,u,h,f,d,p){qn(e)&&(e=e(l)),Pi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?du("0"+e.substr(3),n):0));var _=d?d.time():0,m,g,y;if(d&&d.seek(0),isNaN(e)||(e=+e),El(e))d&&(e=Ne.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&pu(a,n,i,!0);else{qn(t)&&(t=t(l));var b=(e||"0").split(" "),v,M,T,x;y=ii(t,l)||St,v=Fr(y)||{},(!v||!v.left&&!v.top)&&Gi(y).display==="none"&&(x=y.style.display,y.style.display="block",v=Fr(y),x?y.style.display=x:y.style.removeProperty("display")),M=du(b[0],v[i.d]),T=du(b[1]||"0",n),e=v[i.p]-c[i.p]-u+M+s-T,a&&pu(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var S=e+n,R=o._isStart;m="scroll"+i.d2,pu(o,S,i,R&&S>20||!R&&(h?Math.max(St[m],Ii[m]):o.parentNode[m])<=S+1),h&&(c=Fr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+yn))}return d&&y&&(m=Fr(y),d.seek(f),g=Fr(y),d._caScrollDist=m[i.p]-g[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},GS=/(webkit|moz|length|cssText|inset)/i,I0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Gi(e);for(o in a)!+o&&!GS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ne.core.getCache(e).uncache=1,t.appendChild(e)}},j0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},hu=function(e,t,n){var i={};i[t.p]="+="+n,Ne.set(e,i)},L0=function(e,t){var n=Or(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,p={};c=c||n();var _=j0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){et.cache++,o.tween&&Br()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ne.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},En(e,"wheel",n.wheelHandler),$e.isTouch&&En(e,"touchmove",n.wheelHandler),s},$e=(function(){function r(t,n){ia||r.register(Ne)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Id(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Tl){this.update=this.refresh=this.kill=gr;return}n=w0(Pi(n)||El(n)||n.nodeType?{trigger:n}:n,lu);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,b=s.once,v=s.snap,M=s.pinReparent,T=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,R=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Vn:un,D=!h&&h!==0,L=ii(n.scroller||rt),O=Ne.core.getCache(L),C=so(L),F=("pinType"in n?n.pinType:Ur(L,"pinType")||C&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=D&&n.toggleActions.split(" "),$="markers"in n?n.markers:lu.markers,G=C?0:parseFloat(Gi(L)["border"+A.p2+aa])||0,I=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(I)},fe=LS(L,C,A),Ee=DS(L,C),X=0,ue=0,Me=0,Te=Or(L,A),pe,ae,ke,oe,ie,le,_e,Ce,Ve,K,Qe,Nt,ct,nt,Jt,nn,H,_t,dt,Ye,xe,mt,Be,We,P,w,W,ce,re,ge,be,q,ee,me,N,Q,j,ye,de;if(I._startClamp=I._endClamp=!1,I._dir=A,m*=45,I.scroller=L,I.scroll=x?x.time.bind(x):Te,oe=Te(),Ms&&Te.rec==null&&(Te.rec=oe),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(U0=1,n.refreshPriority===-9999&&(Dl=I)),O.tweenScroll=O.tweenScroll||{top:L0(L,un),left:L0(L,Vn)},I.tweenTo=pe=O.tweenScroll[A.p],I.scrubDuration=function(te){ee=El(te)&&te,ee?q?q.duration(te):q=Ne.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return g&&g(I)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),ge=0,l||(l=i.vars.id)),v&&((!eo(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in St.style&&Ne.set(C?[St,Ii]:L,{scrollBehavior:"auto"}),et.forEach(function(te){return qn(te)&&te.target===(C?bt.scrollingElement||Ii:L)&&(te.smooth=!1)}),ke=qn(v.snapTo)?v.snapTo:v.snapTo==="labels"?OS(i):v.snapTo==="labelsDirectional"?US(i):v.directional!==!1?function(te,we){return Gd(v.snapTo)(te,Xn()-ue<500?0:we.direction)}:Ne.utils.snap(v.snapTo),me=v.duration||{min:.1,max:2},me=eo(me)?Rl(me.min,me.max):Rl(me,me),N=Ne.delayedCall(v.delay||ee/2||.1,function(){var te=Te(),we=Xn()-ue<500,ne=pe.tween;if((we||Math.abs(I.getVelocity())<10)&&!ne&&!Su&&X!==te){var Le=(te-le)/nt,lt=i&&!D?i.totalProgress():Le,Ze=we?0:(lt-be)/(Xn()-bl)*1e3||0,Bt=Ne.utils.clamp(-Le,1-Le,ta(Ze/2)*Ze/.185),an=Le+(v.inertia===!1?0:Bt),kt,Et,vt=v,mn=vt.onStart,At=vt.onInterrupt,Fn=vt.onComplete;if(kt=ke(an,I),El(kt)||(kt=an),Et=Math.max(0,Math.round(le+kt*nt)),te<=_e&&te>=le&&Et!==te){if(ne&&!ne._initted&&ne.data<=ta(Et-te))return;v.inertia===!1&&(Bt=kt-Le),pe(Et,{duration:me(ta(Math.max(ta(an-lt),ta(kt-lt))*.185/Ze/.05||0)),ease:v.ease||"power3",data:ta(Et-te),onInterrupt:function(){return N.restart(!0)&&At&&ea(I,At)},onComplete:function(){I.update(),X=Te(),i&&!D&&(q?q.resetTo("totalProgress",kt,i._tTime/i._tDur):i.progress(kt)),ge=be=i&&!D?i.totalProgress():I.progress,y&&y(I),Fn&&ea(I,Fn)}},te,Bt*nt,Et-te-Bt*nt),mn&&ea(I,mn,pe.tween)}}else I.isActive&&X!==te&&N.restart(!0)}).pause()),l&&(Dd[l]=I),f=I.trigger=ii(f||d!==!0&&d),de=f&&f._gsap&&f._gsap.stRevert,de&&(de=de(I)),d=d===!0?f:ii(d),Pi(a)&&(a={targets:f,className:a}),d&&(p===!1||p===Hi||(p=!p&&d.parentNode&&d.parentNode.style&&Gi(d.parentNode).display==="flex"?!1:hn),I.pin=d,ae=Ne.core.getCache(d),ae.spacer?Jt=ae.pinState:(T&&(T=ii(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ae.spacerIsNative=!!T,T&&(ae.spacerState=uu(T))),ae.spacer=_t=T||bt.createElement("div"),_t.classList.add("pin-spacer"),l&&_t.classList.add("pin-spacer-"+l),ae.pinState=Jt=uu(d)),n.force3D!==!1&&Ne.set(d,{force3D:!0}),I.spacer=_t=ae.spacer,re=Gi(d),We=re[p+A.os2],Ye=Ne.getProperty(d),xe=Ne.quickSetter(d,A.a,yn),Ad(d,_t,re),H=uu(d)),$){Nt=eo($)?w0($,E0):E0,K=cu("scroller-start",l,L,A,Nt,0),Qe=cu("scroller-end",l,L,A,Nt,0,K),dt=K["offset"+A.op.d2];var ve=ii(Ur(L,"content")||L);Ce=this.markerStart=cu("start",l,ve,A,Nt,dt,0,x),Ve=this.markerEnd=cu("end",l,ve,A,Nt,dt,0,x),x&&(ye=Ne.quickSetter([Ce,Ve],A.a,yn)),!F&&!(nr.length&&Ur(L,"fixedMarkers")===!0)&&(NS(C?St:L),Ne.set([K,Qe],{force3D:!0}),w=Ne.quickSetter(K,A.a,yn),ce=Ne.quickSetter(Qe,A.a,yn))}if(x){var he=x.vars.onUpdate,Se=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){I.update(0,0,1),he&&he.apply(x,Se||[])})}if(I.previous=function(){return it[it.indexOf(I)-1]},I.next=function(){return it[it.indexOf(I)+1]},I.revert=function(te,we){if(!we)return I.kill(!0);var ne=te!==!1||!I.enabled,Le=Wn;ne!==I.isReverted&&(ne&&(Q=Math.max(Te(),I.scroll.rec||0),Me=I.progress,j=i&&i.progress()),Ce&&[Ce,Ve,K,Qe].forEach(function(lt){return lt.style.display=ne?"none":"block"}),ne&&(Wn=I,I.update(ne)),d&&(!M||!I.isActive)&&(ne?kS(d,_t,Jt):Ad(d,_t,Gi(d),P)),ne||I.update(ne),Wn=Le,I.isReverted=ne)},I.refresh=function(te,we,ne,Le){if(!((Wn||!I.enabled)&&!we)){if(d&&te&&Vi){En(r,"scrollEnd",Y0);return}!oi&&J&&J(I),Wn=I,pe.tween&&!ne&&(pe.tween.kill(),pe.tween=0),q&&q.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(V){return V.vars.immediateRender&&V.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var lt=fe(),Ze=Ee(),Bt=x?x.duration():_r(L,A),an=nt<=.01||!nt,kt=0,Et=Le||0,vt=eo(ne)?ne.end:n.end,mn=n.endTrigger||f,At=eo(ne)?ne.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Fn=I.pinnedContainer=n.pinnedContainer&&ii(n.pinnedContainer,I),bi=f&&Math.max(0,it.indexOf(I))||0,$t=bi,ln,gn,Ti,zo,_n,jt,Fi,il,Ic,ls,E,B,Z;for($&&eo(ne)&&(B=Ne.getProperty(K,A.p),Z=Ne.getProperty(Qe,A.p));$t-- >0;)jt=it[$t],jt.end||jt.refresh(0,1)||(Wn=I),Fi=jt.pin,Fi&&(Fi===f||Fi===d||Fi===Fn)&&!jt.isReverted&&(ls||(ls=[]),ls.unshift(jt),jt.revert(!0,!0)),jt!==it[$t]&&(bi--,$t--);for(qn(At)&&(At=At(I)),At=S0(At,"start",I),le=P0(At,f,lt,A,Te(),Ce,K,I,Ze,G,F,Bt,x,I._startClamp&&"_startClamp")||(d?-.001:0),qn(vt)&&(vt=vt(I)),Pi(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Pi(At)?At.split(" ")[0]:"")+vt:(kt=du(vt.substr(2),lt),vt=Pi(At)?At:(x?Ne.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,le):le)+kt,mn=f)),vt=S0(vt,"end",I),_e=Math.max(le,P0(vt||(mn?"100% 0":Bt),mn,lt,A,Te()+kt,Ve,Qe,I,Ze,G,F,Bt,x,I._endClamp&&"_endClamp"))||-.001,kt=0,$t=bi;$t--;)jt=it[$t]||{},Fi=jt.pin,Fi&&jt.start-jt._pinPush<=le&&!x&&jt.end>0&&(ln=jt.end-(I._startClamp?Math.max(0,jt.start):jt.start),(Fi===f&&jt.start-jt._pinPush<le||Fi===Fn)&&isNaN(At)&&(kt+=ln*(1-jt.progress)),Fi===d&&(Et+=ln));if(le+=kt,_e+=kt,I._startClamp&&(I._startClamp+=kt),I._endClamp&&!oi&&(I._endClamp=_e||-.001,_e=Math.min(_e,_r(L,A))),nt=_e-le||(le-=.01)&&.001,an&&(Me=Ne.utils.clamp(0,1,Ne.utils.normalize(le,_e,Q))),I._pinPush=Et,Ce&&kt&&(ln={},ln[A.a]="+="+kt,Fn&&(ln[A.p]="-="+Te()),Ne.set([Ce,Ve],ln)),d&&!(Ld&&I.end>=_r(L,A)))ln=Gi(d),zo=A===un,Ti=Te(),mt=parseFloat(Ye(A.a))+Et,!Bt&&_e>1&&(E=(C?bt.scrollingElement||Ii:L).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},C&&Gi(St)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),Ad(d,_t,ln),H=uu(d),gn=Fr(d,!0),il=F&&Or(L,zo?Vn:un)(),p?(P=[p+A.os2,nt+Et+yn],P.t=_t,$t=p===hn?yu(d,A)+nt+Et:0,$t&&(P.push(A.d,$t+yn),_t.style.flexBasis!=="auto"&&(_t.style.flexBasis=$t+yn)),oa(P),Fn&&it.forEach(function(V){V.pin===Fn&&V.vars.pinSpacing!==!1&&(V._subPinOffset=!0)}),F&&Te(Q)):($t=yu(d,A),$t&&_t.style.flexBasis!=="auto"&&(_t.style.flexBasis=$t+yn)),F&&(_n={top:gn.top+(zo?Ti-le:il)+yn,left:gn.left+(zo?il:Ti-le)+yn,boxSizing:"border-box",position:"fixed"},_n[no]=_n["max"+aa]=Math.ceil(gn.width)+yn,_n[io]=_n["max"+Hd]=Math.ceil(gn.height)+yn,_n[Hi]=_n[Hi+Il]=_n[Hi+Cl]=_n[Hi+Ll]=_n[Hi+Pl]="0",_n[hn]=ln[hn],_n[hn+Il]=ln[hn+Il],_n[hn+Cl]=ln[hn+Cl],_n[hn+Ll]=ln[hn+Ll],_n[hn+Pl]=ln[hn+Pl],nn=HS(Jt,_n,M),oi&&Te(0)),i?(Ic=i._initted,bd(1),i.render(i.duration(),!0,!0),Be=Ye(A.a)-mt+nt+Et,W=Math.abs(nt-Be)>1,F&&W&&nn.splice(nn.length-2,2),i.render(0,!0,!0),Ic||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bd(0)):Be=nt,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(f&&Te()&&!x)for(gn=f.parentNode;gn&&gn!==St;)gn._pinOffset&&(le-=gn._pinOffset,_e-=gn._pinOffset),gn=gn.parentNode;ls&&ls.forEach(function(V){return V.revert(!1,!0)}),I.start=le,I.end=_e,oe=ie=oi?Q:Te(),!x&&!oi&&!Ms&&(oe<Q&&Te(Q),I.scroll.rec=0),I.revert(!1,!0),ue=Xn(),N&&(X=-1,N.restart(!0)),Wn=0,i&&D&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(an||Me!==I.progress||x||_||i&&!i._initted)&&(i&&!D&&(i._initted||Me||i.vars.immediateRender!==!1)&&i.totalProgress(x&&le<-.001&&!Me?Ne.utils.normalize(le,_e,0):Me,!0),I.progress=an||(oe-le)/nt===Me?0:Me),d&&p&&(_t._pinOffset=Math.round(I.progress*Be)),q&&q.invalidate(),isNaN(B)||(B-=Ne.getProperty(K,A.p),Z-=Ne.getProperty(Qe,A.p),hu(K,A,B),hu(Ce,A,B-(Le||0)),hu(Qe,A,Z),hu(Ve,A,Z-(Le||0))),an&&!oi&&I.update(),u&&!oi&&!ct&&(ct=!0,u(I),ct=!1)}},I.getVelocity=function(){return(Te()-ie)/(Xn()-bl)*1e3||0},I.endAnimation=function(){Ml(I.callbackAnimation),i&&(q?q.progress(1):i.paused()?D||Ml(i,I.direction<0,1):Ml(i,i.reversed()))},I.labelToScroll=function(te){return i&&i.labels&&(le||I.refresh()||le)+i.labels[te]/i.duration()*nt||0},I.getTrailing=function(te){var we=it.indexOf(I),ne=I.direction>0?it.slice(0,we).reverse():it.slice(we+1);return(Pi(te)?ne.filter(function(Le){return Le.vars.preventOverlaps===te}):ne).filter(function(Le){return I.direction>0?Le.end<=le:Le.start>=_e})},I.update=function(te,we,ne){if(!(x&&!ne&&!te)){var Le=oi===!0?Q:I.scroll(),lt=te?0:(Le-le)/nt,Ze=lt<0?0:lt>1?1:lt||0,Bt=I.progress,an,kt,Et,vt,mn,At,Fn,bi;if(we&&(ie=oe,oe=x?Te():Le,v&&(be=ge,ge=i&&!D?i.totalProgress():Ze)),m&&d&&!Wn&&!ru&&Vi&&(!Ze&&le<Le+(Le-ie)/(Xn()-bl)*m?Ze=1e-4:Ze===1&&_e>Le+(Le-ie)/(Xn()-bl)*m&&(Ze=.9999)),Ze!==Bt&&I.enabled){if(an=I.isActive=!!Ze&&Ze<1,kt=!!Bt&&Bt<1,At=an!==kt,mn=At||!!Ze!=!!Bt,I.direction=Ze>Bt?1:-1,I.progress=Ze,mn&&!Wn&&(Et=Ze&&!Bt?0:Ze===1?1:Bt===1?2:3,D&&(vt=!At&&U[Et+1]!=="none"&&U[Et+1]||U[Et],bi=i&&(vt==="complete"||vt==="reset"||vt in i))),R&&(At||bi)&&(bi||h||!i)&&(qn(R)?R(I):I.getTrailing(R).forEach(function(Ti){return Ti.endAnimation()})),D||(q&&!Wn&&!ru?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",Ze,i._tTime/i._tDur):(q.vars.totalProgress=Ze,q.invalidate().restart())):i&&i.totalProgress(Ze,!!(Wn&&(ue||te)))),d){if(te&&p&&(_t.style[p+A.os2]=We),!F)xe(wl(mt+Be*Ze));else if(mn){if(Fn=!te&&Ze>Bt&&_e+1>Le&&Le+1>=_r(L,A),M)if(!te&&(an||Fn)){var $t=Fr(d,!0),ln=Le-le;I0(d,St,$t.top+(A===un?ln:0)+yn,$t.left+(A===un?0:ln)+yn)}else I0(d,_t);oa(an||Fn?nn:H),W&&Ze<1&&an||xe(mt+(Ze===1&&!Fn?Be:0))}}v&&!pe.tween&&!Wn&&!ru&&N.restart(!0),a&&(At||b&&Ze&&(Ze<1||!Td))&&Nl(a.targets).forEach(function(Ti){return Ti.classList[an||b?"add":"remove"](a.className)}),o&&!D&&!te&&o(I),mn&&!Wn?(D&&(bi&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(I)),(At||!Td)&&(c&&At&&ea(I,c),k[Et]&&ea(I,k[Et]),b&&(Ze===1?I.kill(!1,1):k[Et]=0),At||(Et=Ze===1?1:3,k[Et]&&ea(I,k[Et]))),S&&!an&&Math.abs(I.getVelocity())>(El(S)?S:2500)&&(Ml(I.callbackAnimation),q?q.progress(1):Ml(i,vt==="reverse"?1:!Ze,1))):D&&o&&!Wn&&o(I)}if(ce){var gn=x?Le/x.duration()*(x._caScrollDist||0):Le;w(gn+(K._isFlipped?1:0)),ce(gn)}ye&&ye(-Le/x.duration()*(x._caScrollDist||0))}},I.enable=function(te,we){I.enabled||(I.enabled=!0,En(L,"resize",Al),C||En(L,"scroll",na),J&&En(r,"refreshInit",J),te!==!1&&(I.progress=Me=0,oe=ie=X=Te()),we!==!1&&I.refresh())},I.getTween=function(te){return te&&pe?pe.tween:q},I.setPositions=function(te,we,ne,Le){if(x){var lt=x.scrollTrigger,Ze=x.duration(),Bt=lt.end-lt.start;te=lt.start+Bt*te/Ze,we=lt.start+Bt*we/Ze}I.refresh(!1,!1,{start:M0(te,ne&&!!I._startClamp),end:M0(we,ne&&!!I._endClamp)},Le),I.update()},I.adjustPinSpacing=function(te){if(P&&te){var we=P.indexOf(A.d)+1;P[we]=parseFloat(P[we])+te+yn,P[1]=parseFloat(P[1])+te+yn,oa(P)}},I.disable=function(te,we){if(te!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,we||q&&q.pause(),Q=0,ae&&(ae.uncache=1),J&&wn(r,"refreshInit",J),N&&(N.pause(),pe.tween&&pe.tween.kill()&&(pe.tween=0)),!C)){for(var ne=it.length;ne--;)if(it[ne].scroller===L&&it[ne]!==I)return;wn(L,"resize",Al),C||wn(L,"scroll",na)}},I.kill=function(te,we){I.disable(te,we),q&&!we&&q.kill(),l&&delete Dd[l];var ne=it.indexOf(I);ne>=0&&it.splice(ne,1),ne===si&&mu>0&&si--,ne=0,it.forEach(function(Le){return Le.scroller===I.scroller&&(ne=1)}),ne||oi||Ms||(I.scroll.rec=0),i&&(i.scrollTrigger=null,te&&i.revert({kill:!1}),we||i.kill()),Ce&&[Ce,Ve,K,Qe].forEach(function(Le){return Le.parentNode&&Le.parentNode.removeChild(Le)}),Dl===I&&(Dl=0),d&&(ae&&(ae.uncache=1),ne=0,it.forEach(function(Le){return Le.pin===d&&ne++}),ne||(ae.spacer=0)),n.onKill&&n.onKill(I)},it.push(I),I.enable(!1,!1),de&&de(I),i&&i.add&&!nt){var se=I.update;I.update=function(){I.update=se,et.cache++,le||_e||I.refresh()},Ne.delayedCall(.01,I.update),nt=.01,le=_e=0}else I.refresh();d&&BS()},r.register=function(n){return ia||(Ne=n||H0(),z0()&&window.document&&r.enable(),ia=Tl),ia},r.defaults=function(n){if(n)for(var i in n)lu[i]=n[i];return lu},r.disable=function(n,i){Tl=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),wn(rt,"wheel",na),wn(bt,"scroll",na),clearInterval(iu),wn(bt,"touchcancel",gr),wn(St,"touchstart",gr),ou(wn,bt,"pointerdown,touchstart,mousedown",b0),ou(wn,bt,"pointerup,touchend,mouseup",T0),xu.kill(),su(wn);for(var s=0;s<et.length;s+=3)au(wn,et[s],et[s+1]),au(wn,et[s],et[s+2])},r.enable=function(){if(rt=window,bt=document,Ii=bt.documentElement,St=bt.body,Ne){if(Nl=Ne.utils.toArray,Rl=Ne.utils.clamp,Id=Ne.core.context||gr,bd=Ne.core.suppressOverwrites||gr,Fd=rt.history.scrollRestoration||"auto",Nd=rt.pageYOffset||0,Ne.core.globals("ScrollTrigger",r),St){Tl=1,sa=document.createElement("div"),sa.style.height="100vh",sa.style.position="absolute",$0(),IS(),tn.register(Ne),r.isTouch=tn.isTouch,Ss=tn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pd=tn.isTouch===1,En(rt,"wheel",na),Ud=[rt,bt,Ii,St],Ne.matchMedia?(r.matchMedia=function(u){var h=Ne.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ne.addEventListener("matchMediaInit",function(){Z0(),Vd()}),Ne.addEventListener("matchMediaRevert",function(){return K0()}),Ne.addEventListener("matchMedia",function(){to(0,1),ao("matchMedia")}),Ne.matchMedia().add("(orientation: portrait)",function(){return Ed(),Ed})):console.warn("Requires GSAP 3.11.0 or later"),Ed(),En(bt,"scroll",na);var n=St.hasAttribute("style"),i=St.style,s=i.borderTopStyle,o=Ne.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Fr(St),un.m=Math.round(a.top+un.sc())||0,Vn.m=Math.round(a.left+Vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),iu=setInterval(A0,250),Ne.delayedCall(.5,function(){return ru=0}),En(bt,"touchcancel",gr),En(St,"touchstart",gr),ou(En,bt,"pointerdown,touchstart,mousedown",b0),ou(En,bt,"pointerup,touchend,mouseup",T0),Cd=Ne.utils.checkPrefix("transform"),gu.push(Cd),ia=Xn(),xu=Ne.delayedCall(.2,to).pause(),ra=[bt,"visibilitychange",function(){var u=rt.innerWidth,h=rt.innerHeight;bt.hidden?(y0=u,v0=h):(y0!==u||v0!==h)&&Al()},bt,"DOMContentLoaded",to,rt,"load",to,rt,"resize",Al],su(En),it.forEach(function(u){return u.enable(0,1)}),l=0;l<et.length;l+=3)au(wn,et[l],et[l+1]),au(wn,et[l],et[l+2])}else if(bt){var c=function u(){r.enable(),bt.removeEventListener("DOMContentLoaded",u)};bt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Td=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(iu)||(iu=i)&&setInterval(A0,i),"ignoreMobileResize"in n&&(Pd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(su(wn)||su(En,n.autoRefreshEvents||"none"),F0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ii(n),o=et.indexOf(s),a=so(s);~o&&et.splice(o,a?6:2),i&&(a?nr.unshift(rt,i,St,i,Ii,i):nr.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Pi(n)?ii(n):n).getBoundingClientRect(),a=o[s?no:io]*i||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},r.positionInViewport=function(n,i,s){Pi(n)&&(n=ii(n));var o=n.getBoundingClientRect(),a=o[s?no:io],l=i==null?a/2:i in vu?vu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=oo.killAll||[];oo={},i.forEach(function(s){return s()})}},r})();$e.version="3.15.1";$e.saveStyles=function(r){return r?Nl(r).forEach(function(e){if(e&&e.style){var t=Ci.indexOf(e);t>=0&&Ci.splice(t,5),Ci.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ne.core.getCache(e),Id())}}):Ci};$e.revert=function(r,e){return Vd(!r,e)};$e.create=function(r,e){return new $e(r,e)};$e.refresh=function(r){return r?Al(!0):(ia||$e.register())&&to(!0)};$e.update=function(r){return++et.cache&&Br(r===!0?2:0)};$e.clearScrollMemory=J0;$e.maxScroll=function(r,e){return _r(r,e?Vn:un)};$e.getScrollFunc=function(r,e){return Or(ii(r),e?Vn:un)};$e.getById=function(r){return Dd[r]};$e.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!Vi};$e.snapDirectional=Gd;$e.addEventListener=function(r,e){var t=oo[r]||(oo[r]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(r,e){var t=oo[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ne.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(p){h.length||d.restart(!0),h.push(p.trigger),f.push(p),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&qn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return qn(s)&&(s=s(),En($e,"refresh",function(){return s=e.batchMax()})),Nl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push($e.create(c))}),t};var D0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Rd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(tn.isTouch?" pinch-zoom":""):"none",e===Ii&&r(St,t)},fu={auto:1,scroll:1},VS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ne.core.getCache(s),a=Xn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fu[(l=Gi(s)).overflowY]||fu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!so(s)&&(fu[(l=Gi(s)).overflowY]||fu[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Q0=function(e,t,n,i){return tn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&VS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&En(bt,tn.eventTypes[0],O0,!1,!0)},onDisable:function(){return wn(bt,tn.eventTypes[0],O0,!0)}})},WS=/(input|label|select|textarea)/i,N0,O0=function(e){var t=WS.test(e.target.tagName);(t||N0)&&(e._gsapAllow=!0,N0=t)},XS=function(e){eo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ii(e.target)||Ii,u=Ne.core.globals().ScrollSmoother,h=u&&u.get(),f=Ss&&(e.content&&ii(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Or(c,un),p=Or(c,Vn),_=1,m=(tn.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,g=0,y=qn(i)?function(){return i(a)}:function(){return i||2.8},b,v,M=Q0(c,e.type,!0,s),T=function(){return v=!1},x=gr,S=gr,R=function(){l=_r(c,un),S=Rl(Ss?1:0,l),n&&(x=Rl(0,_r(c,Vn))),b=ro},A=function(){f._gsap.y=wl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(v){requestAnimationFrame(T);var $=wl(a.deltaY/2),G=S(d.v-$);if(f&&G!==d.v+d.offset){d.offset=G-d.v;var I=wl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=et.cache,Br()}return!0}d.offset&&A(),v=!0},L,O,C,F,k=function(){R(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Ne.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return Ss&&U.type==="touchmove"&&D(U)||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){v=!1;var U=_;_=wl((rt.visualViewport&&rt.visualViewport.scale||1)/m),L.pause(),U!==_&&Rd(c,_>1.01?!0:n?!1:"x"),O=p(),C=d(),R(),b=ro},e.onRelease=e.onGestureStart=function(U,$){if(d.offset&&A(),!$)F.restart(!0);else{et.cache++;var G=y(),I,J;n&&(I=p(),J=I+G*.05*-U.velocityX/.227,G*=D0(p,I,J,_r(c,Vn)),L.vars.scrollX=x(J)),I=d(),J=I+G*.05*-U.velocityY/.227,G*=D0(d,I,J,_r(c,un)),L.vars.scrollY=S(J),L.invalidate().duration(G).play(.01),(Ss&&L.vars.scrollY>=l||I>=l-1)&&Ne.to({},{onUpdate:k,duration:G})}o&&o(U)},e.onWheel=function(){L._ts&&L.pause(),Xn()-g>1e3&&(b=0,g=Xn())},e.onChange=function(U,$,G,I,J){if(ro!==b&&R(),$&&n&&p(x(I[2]===$?O+(U.startX-U.x):p()+$-I[1])),G){d.offset&&A();var fe=J[2]===G,Ee=fe?C+U.startY-U.y:d()+G-J[1],X=S(Ee);fe&&Ee!==X&&(C+=X-Ee),d(X)}(G||$)&&Br()},e.onEnable=function(){Rd(c,n?!1:"x"),$e.addEventListener("refresh",k),En(rt,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),M.enable()},e.onDisable=function(){Rd(c,!0),wn(rt,"resize",k),$e.removeEventListener("refresh",k),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new tn(e),a.iOS=Ss,Ss&&!d()&&d(1),Ss&&Ne.ticker.add(gr),F=a._dc,L=Ne.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:j0(d,d(),function(){return L.pause()})},onUpdate:Br,onComplete:F.vars.onComplete}),a};$e.sort=function(r){if(qn(r))return it.sort(r);var e=rt.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$e.observe=function(r){return new tn(r)};$e.normalizeScroll=function(r){if(typeof r>"u")return ri;if(r===!0&&ri)return ri.enable();if(r===!1){ri&&ri.kill(),ri=r;return}var e=r instanceof tn?r:XS(r);return ri&&ri.target===e.target&&ri.kill(),so(e.target)&&(ri=e),e};$e.core={_getVelocityProp:nu,_inputObserver:Q0,_scrollers:et,_proxies:nr,bridge:{ss:function(){Vi||ao("scrollStart"),Vi=Xn()},ref:function(){return Wn}}};H0()&&Ne.registerPlugin($e);var z_=0,Ap=1,H_=2;var Eo=1,G_=2,Ba=3,Mr=0,On=1,Un=2,Ao=0,ka=1,Rp=2,Cp=3,Pp=4,V_=5;var Ro=100,W_=101,X_=102,q_=103,Y_=104,K_=200,Z_=201,J_=202,$_=203,Ip=204,Lp=205,j_=206,Q_=207,ex=208,tx=209,nx=210,ix=211,rx=212,sx=213,ox=214,ju=0,Qu=1,eh=2,Ta=3,th=4,nh=5,ih=6,rh=7,Mh=0,ax=1,lx=2,br=0,Dp=1,Np=2,Op=3,Co=4,Up=5,Fp=6,Bp=7,mp="attached",cx="detached",kp=300,Po=301,za=302,bh=303,Th=304,qi=1e3,xi=1001,wa=1002,sn=1003,wh=1004;var Io=1005;var Ut=1006,Ha=1007;var Ui=1008;var Mi=1009,zp=1010,Hp=1011,Ga=1012,Eh=1013,cr=1014,Jn=1015,ui=1016,Ah=1017,Rh=1018,Lo=1020,Gp=35902,Vp=35899,Wp=1021,Xp=1022,Ji=1023,Kr=1026,is=1027,Ch=1028,Ph=1029,Os=1030,Ih=1031;var Lh=1033,mc=33776,gc=33777,_c=33778,xc=33779,Dh=35840,Nh=35841,Oh=35842,Uh=35843,Fh=36196,Bh=37492,kh=37496,zh=37488,Hh=37489,yc=37490,Gh=37491,Vh=37808,Wh=37809,Xh=37810,qh=37811,Yh=37812,Kh=37813,Zh=37814,Jh=37815,$h=37816,jh=37817,Qh=37818,ef=37819,tf=37820,nf=37821,rf=36492,sf=36494,of=36495,af=36283,lf=36284,vc=36285,cf=36286;var po=2300,mo=2301,Ju=2302,gp=2303,_p=2400,xp=2401,yp=2402,ux=2500;var qp=0,Sc=1,Va=2,hx=3200;var Mc=0,fx=1,rs="",Ot="srgb",Dn="srgb-linear",ql="linear",Mt="srgb";var $u=7680;var dx=519,px=512,mx=513,gx=514,Yp=515,_x=516,xx=517,Kp=518,Zp=519,Jp=35044,uf=35048;var $p="300 es",Xi=2e3,Ea=2001;function qS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function YS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yx(){let r=Aa("canvas");return r.style.display="block",r}var e_={},Ra=null;function Yl(...r){let e="THREE."+r.shift();Ra?Ra("log",e,...r):console.log(e,...r)}function vx(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function He(...r){r=vx(r);let e="THREE."+r.shift();if(Ra)Ra("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Xe(...r){r=vx(r);let e="THREE."+r.shift();if(Ra)Ra("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function fo(...r){let e=r.join(" ");e in e_||(e_[e]=!0,He(...r))}function Sx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Mx={[ju]:ju,[eh]:ih,[th]:th,[Ta]:nh,[Qu]:Qu,[ih]:eh,[rh]:rh,[nh]:Ta},vr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],t_=1234567,Ma=Math.PI/180,go=180/Math.PI;function Tr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[n&255]+Yn[n>>8&255]+Yn[n>>16&255]+Yn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function jp(r,e){return(r%e+e)%e}function KS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ZS(r,e,t){return r!==e?(t-r)/(e-r):0}function Xl(r,e,t){return(1-t)*r+t*e}function JS(r,e,t,n){return Xl(r,e,1-Math.exp(-t*n))}function $S(r,e=1){return e-Math.abs(jp(r,e*2)-e)}function jS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function QS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function eM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function tM(r,e){return r+Math.random()*(e-r)}function nM(r){return r*(.5-Math.random())}function iM(r){r!==void 0&&(t_=r);let e=t_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rM(r){return r*Ma}function sM(r){return r*go}function oM(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function aM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lM(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*u,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function em(r,e){if(e.constructor===Float32Array)return r;let t=hf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function tm(r,e){if(e.constructor===Float32Array)return r;let t=hf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Ft={DEG2RAD:Ma,RAD2DEG:go,generateUUID:Tr,clamp:at,euclideanModulo:jp,mapLinear:KS,inverseLerp:ZS,lerp:Xl,damp:JS,pingpong:$S,smoothstep:jS,smootherstep:QS,randInt:eM,randFloat:tM,randFloatSpread:nM,seededRandom:iM,degToRad:rM,radToDeg:sM,isPowerOfTwo:oM,ceilPowerOfTwo:aM,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:lM,normalize:tm,denormalize:em},je=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(h!==_||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+h*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(n_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(n_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wd.copy(this).projectOnVector(e),this.sub(Wd)}reflect(e){return this.sub(Wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wd=new z,n_=new vn,Ke=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],y=i[1],b=i[4],v=i[7],M=i[2],T=i[5],x=i[8];return s[0]=o*_+a*y+l*M,s[3]=o*m+a*b+l*T,s[6]=o*g+a*v+l*x,s[1]=c*_+u*y+h*M,s[4]=c*m+u*b+h*T,s[7]=c*g+u*v+h*x,s[2]=f*_+d*y+p*M,s[5]=f*m+d*b+p*T,s[8]=f*g+d*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return fo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xd.makeScale(e,t)),this}rotate(e){return fo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xd.makeRotation(-e)),this}translate(e,t){return fo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xd=new Ke,i_=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cM(){let r={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(i.r=Yr(i.r),i.g=Yr(i.g),i.b=Yr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(i.r=ba(i.r),i.g=ba(i.g),i.b=ba(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rs?ql:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Dn]:{primaries:e,whitePoint:n,transfer:ql,toXYZ:i_,fromXYZ:r_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:i_,fromXYZ:r_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),r}var st=cM();function Yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ba(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var la,sh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{la===void 0&&(la=Aa("canvas")),la.width=e.width,la.height=e.height;let i=la.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=la}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yr(t[n]/255)*255):t[n]=Yr(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},uM=0,Ca=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qd(i[o].image)):s.push(qd(i[o]))}else s=qd(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function qd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var hM=0,Yd=new z,on=class r extends vr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=xi,i=xi,s=Ut,o=Ui,a=Ji,l=Mi,c=r.DEFAULT_ANISOTROPY,u=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Tr(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=kp;on.DEFAULT_ANISOTROPY=1;var yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(d+1)/2,M=(g+1)/2,T=(u+f)/4,x=(h+_)/4,S=(p+m)/4;return b>v&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=T/n,s=x/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=S/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=x/s,i=S/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oh=class extends vr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new on({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ca(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends oh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Kl=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ah=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qe=class r{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,p,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ca.setFromMatrixColumn(e,0).length(),s=1/ca.setFromMatrixColumn(e,1).length(),o=1/ca.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,_=c*h;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fM,e,dM)}lookAt(e,t,n){let i=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),bs.crossVectors(n,Li),bs.lengthSq()===0&&(Math.abs(n.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),bs.crossVectors(n,Li)),bs.normalize(),Mu.crossVectors(Li,bs),i[0]=bs.x,i[4]=Mu.x,i[8]=Li.x,i[1]=bs.y,i[5]=Mu.y,i[9]=Li.y,i[2]=bs.z,i[6]=Mu.z,i[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],b=n[7],v=n[11],M=n[15],T=i[0],x=i[4],S=i[8],R=i[12],A=i[1],D=i[5],L=i[9],O=i[13],C=i[2],F=i[6],k=i[10],U=i[14],$=i[3],G=i[7],I=i[11],J=i[15];return s[0]=o*T+a*A+l*C+c*$,s[4]=o*x+a*D+l*F+c*G,s[8]=o*S+a*L+l*k+c*I,s[12]=o*R+a*O+l*U+c*J,s[1]=u*T+h*A+f*C+d*$,s[5]=u*x+h*D+f*F+d*G,s[9]=u*S+h*L+f*k+d*I,s[13]=u*R+h*O+f*U+d*J,s[2]=p*T+_*A+m*C+g*$,s[6]=p*x+_*D+m*F+g*G,s[10]=p*S+_*L+m*k+g*I,s[14]=p*R+_*O+m*U+g*J,s[3]=y*T+b*A+v*C+M*$,s[7]=y*x+b*D+v*F+M*G,s[11]=y*S+b*L+v*k+M*I,s[15]=y*R+b*O+v*U+M*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*d-c*f,b=a*d-c*h,v=a*f-l*h,M=o*d-c*u,T=o*f-l*u,x=o*h-a*u;return t*(_*y-m*b+g*v)-n*(p*y-m*M+g*T)+i*(p*b-_*M+g*x)-s*(p*v-_*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=t*a-n*o,b=t*l-i*o,v=t*c-s*o,M=n*l-i*a,T=n*c-s*a,x=i*c-s*l,S=u*_-h*p,R=u*m-f*p,A=u*g-d*p,D=h*m-f*_,L=h*g-d*_,O=f*g-d*m,C=y*O-b*L+v*D+M*A-T*R+x*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return e[0]=(a*O-l*L+c*D)*F,e[1]=(i*L-n*O-s*D)*F,e[2]=(_*x-m*T+g*M)*F,e[3]=(f*T-h*x-d*M)*F,e[4]=(l*A-o*O-c*R)*F,e[5]=(t*O-i*A+s*R)*F,e[6]=(m*v-p*x-g*b)*F,e[7]=(u*x-f*v+d*b)*F,e[8]=(o*L-a*A+c*S)*F,e[9]=(n*A-t*L-s*S)*F,e[10]=(p*T-_*v+g*y)*F,e[11]=(h*v-u*T-d*y)*F,e[12]=(a*R-o*D-l*S)*F,e[13]=(t*D-n*R+i*S)*F,e[14]=(_*b-p*M-m*y)*F,e[15]=(u*M-h*b+f*y)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,_=o*u,m=o*h,g=a*h,y=l*c,b=l*u,v=l*h,M=n.x,T=n.y,x=n.z;return i[0]=(1-(_+g))*M,i[1]=(d+v)*M,i[2]=(p-b)*M,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+g))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(p+b)*x,i[9]=(m-y)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ca.set(i[0],i[1],i[2]).length(),a=ca.set(i[4],i[5],i[6]).length(),l=ca.set(i[8],i[9],i[10]).length();s<0&&(o=-o),ir.copy(this);let c=1/o,u=1/a,h=1/l;return ir.elements[0]*=c,ir.elements[1]*=c,ir.elements[2]*=c,ir.elements[4]*=u,ir.elements[5]*=u,ir.elements[6]*=u,ir.elements[8]*=h,ir.elements[9]*=h,ir.elements[10]*=h,t.setFromRotationMatrix(ir),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Xi,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Xi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ea)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Xi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Xi)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ea)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ca=new z,ir=new qe,fM=new z(0,0,0),dM=new z(1,1,1),bs=new z,Mu=new z,Li=new z,s_=new qe,o_=new vn,Yi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return s_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return o_.setFromEuler(this),this.setFromQuaternion(o_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var Zl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pM=0,a_=new z,ua=new vn,kr=new qe,bu=new z,Ul=new z,mM=new z,gM=new vn,l_=new z(1,0,0),c_=new z(0,1,0),u_=new z(0,0,1),h_={type:"added"},_M={type:"removed"},ha={type:"childadded",child:null},Kd={type:"childremoved",child:null},wt=class r extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new z,t=new Yi,n=new vn,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(l_,e)}rotateY(e){return this.rotateOnAxis(c_,e)}rotateZ(e){return this.rotateOnAxis(u_,e)}translateOnAxis(e,t){return a_.copy(e).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(l_,e)}translateY(e){return this.translateOnAxis(c_,e)}translateZ(e){return this.translateOnAxis(u_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bu.copy(e):bu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kr.lookAt(Ul,bu,this.up):kr.lookAt(bu,Ul,this.up),this.quaternion.setFromRotationMatrix(kr),i&&(kr.extractRotation(i.matrixWorld),ua.setFromRotationMatrix(kr),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h_),ha.child=e,this.dispatchEvent(ha),ha.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_M),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(kr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h_),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,e,mM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,gM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wt.DEFAULT_UP=new z(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xM={type:"move"},Pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},Tu={h:0,s:0,l:0};function Zd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=jp(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zd(o,s,e+1/3),this.g=Zd(o,s,e),this.b=Zd(o,s,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=bx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return st.workingToColorSpace(Kn.copy(this),e),Math.round(at(Kn.r*255,0,255))*65536+Math.round(at(Kn.g*255,0,255))*256+Math.round(at(Kn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Kn.copy(this),t);let n=Kn.r,i=Kn.g,s=Kn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Ot){st.workingToColorSpace(Kn.copy(this),e);let t=Kn.r,n=Kn.g,i=Kn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(Tu);let n=Xl(Ts.h,Tu.h,t),i=Xl(Ts.s,Tu.s,t),s=Xl(Ts.l,Tu.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new Ge;Ge.NAMES=bx;var ar=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},rr=new z,zr=new z,Jd=new z,Hr=new z,fa=new z,da=new z,f_=new z,$d=new z,jd=new z,Qd=new z,ep=new yt,tp=new yt,np=new yt,Xr=class r{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rr.subVectors(e,t),i.cross(rr);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){rr.subVectors(i,t),zr.subVectors(n,t),Jd.subVectors(e,t);let o=rr.dot(rr),a=rr.dot(zr),l=rr.dot(Jd),c=zr.dot(zr),u=zr.dot(Jd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hr)===null?!1:Hr.x>=0&&Hr.y>=0&&Hr.x+Hr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hr.x),l.addScaledVector(o,Hr.y),l.addScaledVector(a,Hr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ep.setScalar(0),tp.setScalar(0),np.setScalar(0),ep.fromBufferAttribute(e,t),tp.fromBufferAttribute(e,n),np.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ep,s.x),o.addScaledVector(tp,s.y),o.addScaledVector(np,s.z),o}static isFrontFacing(e,t,n,i){return rr.subVectors(n,t),zr.subVectors(e,t),rr.cross(zr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),rr.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;fa.subVectors(i,n),da.subVectors(s,n),$d.subVectors(e,n);let l=fa.dot($d),c=da.dot($d);if(l<=0&&c<=0)return t.copy(n);jd.subVectors(e,i);let u=fa.dot(jd),h=da.dot(jd);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(fa,o);Qd.subVectors(e,s);let d=fa.dot(Qd),p=da.dot(Qd);if(p>=0&&d<=p)return t.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(da,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return f_.subVectors(s,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(f_,a);let g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(fa,o).addScaledVector(da,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sr):sr.fromBufferAttribute(s,o),sr.applyMatrix4(e.matrixWorld),this.expandByPoint(sr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wu.copy(n.boundingBox)),wu.applyMatrix4(e.matrixWorld),this.union(wu)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fl),Eu.subVectors(this.max,Fl),pa.subVectors(e.a,Fl),ma.subVectors(e.b,Fl),ga.subVectors(e.c,Fl),ws.subVectors(ma,pa),Es.subVectors(ga,ma),lo.subVectors(pa,ga);let t=[0,-ws.z,ws.y,0,-Es.z,Es.y,0,-lo.z,lo.y,ws.z,0,-ws.x,Es.z,0,-Es.x,lo.z,0,-lo.x,-ws.y,ws.x,0,-Es.y,Es.x,0,-lo.y,lo.x,0];return!ip(t,pa,ma,ga,Eu)||(t=[1,0,0,0,1,0,0,0,1],!ip(t,pa,ma,ga,Eu))?!1:(Au.crossVectors(ws,Es),t=[Au.x,Au.y,Au.z],ip(t,pa,ma,ga,Eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gr=[new z,new z,new z,new z,new z,new z,new z,new z],sr=new z,wu=new dn,pa=new z,ma=new z,ga=new z,ws=new z,Es=new z,lo=new z,Fl=new z,Eu=new z,Au=new z,co=new z;function ip(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){co.fromArray(r,s);let a=i.x*Math.abs(co.x)+i.y*Math.abs(co.y)+i.z*Math.abs(co.z),l=e.dot(co),c=t.dot(co),u=n.dot(co);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var qr=yM();function yM(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function vM(r){Math.abs(r)>65504&&He("DataUtils.toHalfFloat(): Value out of range."),r=at(r,-65504,65504),qr.floatView[0]=r;let e=qr.uint32View[0],t=e>>23&511;return qr.baseTable[t]+((e&8388607)>>qr.shiftTable[t])}function SM(r){let e=r>>10;return qr.uint32View[0]=qr.mantissaTable[qr.offsetTable[e]+(r&1023)]+qr.exponentTable[e],qr.floatView[0]}var Cs=class{static toHalfFloat(e){return vM(e)}static fromHalfFloat(e){return SM(e)}},fn=new z,Ru=new je,MM=0,Ln=class extends vr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jp,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?hf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ru.fromBufferAttribute(this,t),Ru.applyMatrix3(e),this.setXY(t,Ru.x,Ru.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):em(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tm(e,this.array)}};var Jl=class extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $l=class extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var It=class extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},bM=new dn,Bl=new z,rp=new z,yi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bl.subVectors(e,this.center);let t=Bl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bl.copy(e.center).add(rp)),this.expandByPoint(Bl.copy(e.center).sub(rp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},TM=0,Wi=new qe,sp=new wt,_a=new z,Di=new dn,kl=new dn,An=new z,pn=class r extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qS(e)?$l:Jl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wi.makeRotationFromQuaternion(e),this.applyMatrix4(Wi),this}rotateX(e){return Wi.makeRotationX(e),this.applyMatrix4(Wi),this}rotateY(e){return Wi.makeRotationY(e),this.applyMatrix4(Wi),this}rotateZ(e){return Wi.makeRotationZ(e),this.applyMatrix4(Wi),this}translate(e,t,n){return Wi.makeTranslation(e,t,n),this.applyMatrix4(Wi),this}scale(e,t,n){return Wi.makeScale(e,t,n),this.applyMatrix4(Wi),this}lookAt(e){return sp.lookAt(e),sp.updateMatrix(),this.applyMatrix4(sp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Di.setFromBufferAttribute(s),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];kl.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(Di.min,kl.min),Di.expandByPoint(An),An.addVectors(Di.max,kl.max),Di.expandByPoint(An)):(Di.expandByPoint(kl.min),Di.expandByPoint(kl.max))}Di.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)An.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(An));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)An.fromBufferAttribute(a,c),l&&(_a.fromBufferAttribute(e,c),An.add(_a)),i=Math.max(i,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new z,l[R]=new z;let u=new z,h=new z,f=new z,d=new je,p=new je,_=new je,m=new z,g=new z;function y(R,A,D){c[R]=c[A]=c[D]=1,u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,D),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,D),h.sub(u),f.sub(u),p.sub(d),_.sub(d);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(m.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[R].add(m),a[A].add(m),a[D].add(m),l[R].add(g),l[A].add(g),l[D].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,A=b.length;R<A;++R){let D=b[R],L=D.start,O=D.count;for(let C=L,F=L+O;C<F;C+=3)y(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let v=new z,M=new z,T=new z,x=new z;function S(R){T.fromBufferAttribute(i,R),x.copy(T);let A=a[R];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),M.crossVectors(x,A);let L=M.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,A=n.count;R<A;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new Ln(f,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ia=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jp,this.updateRanges=[],this.version=0,this.uuid=Tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=d_(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=d_(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function d_(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Tr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var ai=new z,La=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?hf(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Yl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):em(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tm(e,this.data.array)}},op=new z,wM=new z,EM=new Ke,or=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=op.subVectors(n,t).cross(wM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(op),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||EM.getNormalMatrix(e),i=this.coplanarPoint(op).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},AM=0,li=class extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=ka,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ip,this.blendDst=Lp,this.blendEquation=Ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$u,this.stencilZFail=$u,this.stencilZPass=$u,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new or().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Vr=new z,ap=new z,Cu=new z,Pu=new z,_o=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ap.copy(e).add(t).multiplyScalar(.5),Cu.copy(t).sub(e).normalize(),Pu.copy(this.origin).sub(ap);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Cu),a=Pu.dot(this.direction),l=-Pu.dot(Cu),c=Pu.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ap).addScaledVector(Cu,f),d}intersectSphere(e,t){if(e.radius<0)return null;Vr.subVectors(e.center,this.origin);let n=Vr.dot(this.direction),i=Vr.dot(Vr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,b=n.z-o.z,v=Math.abs(l),M=Math.abs(c),T=Math.abs(u),x,S,R,A,D,L,O,C,F,k,U,$;if(v>=M&&v>=T?(R=l,L=h,F=p,$=g,l>=0?(x=c,S=u,A=f,D=d,O=_,C=m,k=y,U=b):(x=u,S=c,A=d,D=f,O=m,C=_,k=b,U=y)):M>=T?(R=c,L=f,F=_,$=y,c>=0?(x=u,S=l,A=d,D=h,O=m,C=p,k=b,U=g):(x=l,S=u,A=h,D=d,O=p,C=m,k=g,U=b)):(R=u,L=d,F=m,$=b,u>=0?(x=l,S=c,A=h,D=f,O=p,C=_,k=g,U=y):(x=c,S=l,A=f,D=h,O=_,C=p,k=y,U=g)),R===0)return null;let G=x/R,I=S/R,J=1/R,fe=A-G*L,Ee=D-I*L,X=O-G*F,ue=C-I*F,Me=k-G*$,Te=U-I*$,pe=Me*ue-Te*X,ae=fe*Te-Ee*Me,ke=X*Ee-ue*fe;if(i){if(pe<0||ae<0||ke<0)return null}else if((pe<0||ae<0||ke<0)&&(pe>0||ae>0||ke>0))return null;let oe=pe+ae+ke;if(oe===0)return null;let ie=J*(pe*L+ae*F+ke*$);return(oe>0?ie<0:ie>0)?null:this.at(ie/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zn=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},p_=new qe,uo=new _o,Iu=new yi,m_=new z,Lu=new z,Du=new z,Nu=new z,lp=new z,Ou=new z,g_=new z,Uu=new z,gt=class extends wt{constructor(e=new pn,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Ou.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(lp.fromBufferAttribute(h,e),o?Ou.addScaledVector(lp,u):Ou.addScaledVector(lp.sub(t),u))}t.add(Ou)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Iu.copy(n.boundingSphere),Iu.applyMatrix4(s),uo.copy(e.ray).recast(e.near),!(Iu.containsPoint(uo.origin)===!1&&(uo.intersectSphere(Iu,m_)===null||uo.origin.distanceToSquared(m_)>(e.far-e.near)**2))&&(p_.copy(s).invert(),uo.copy(e.ray).applyMatrix4(p_),!(n.boundingBox!==null&&uo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,uo)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,M=b;v<M;v+=3){let T=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);i=Fu(this,g,e,n,c,u,h,T,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);i=Fu(this,o,e,n,c,u,h,y,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,M=b;v<M;v+=3){let T=v,x=v+1,S=v+2;i=Fu(this,g,e,n,c,u,h,T,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=m,b=m+1,v=m+2;i=Fu(this,o,e,n,c,u,h,y,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function RM(r,e,t,n,i,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Mr,a),l===null)return null;Uu.copy(a),Uu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Uu);return c<t.near||c>t.far?null:{distance:c,point:Uu.clone(),object:r}}function Fu(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Lu),r.getVertexPosition(l,Du),r.getVertexPosition(c,Nu);let u=RM(r,e,t,n,Lu,Du,Nu,g_);if(u){let h=new z;Xr.getBarycoord(g_,Lu,Du,Nu,h),i&&(u.uv=Xr.getInterpolatedAttribute(i,a,l,c,h,new je)),s&&(u.uv1=Xr.getInterpolatedAttribute(s,a,l,c,h,new je)),o&&(u.normal=Xr.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};Xr.getNormal(Lu,Du,Nu,f.normal),u.face=f,u.barycoord=h}return u}var zl=new yt,__=new yt,x_=new yt,CM=new yt,y_=new qe,Bu=new z,cp=new yi,v_=new qe,up=new _o,jl=class extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mp,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bu),this.boundingBox.expandByPoint(Bu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bu),this.boundingSphere.expandByPoint(Bu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cp.copy(this.boundingSphere),cp.applyMatrix4(i),e.ray.intersectsSphere(cp)!==!1&&(v_.copy(i).invert(),up.copy(e.ray).applyMatrix4(v_),!(this.boundingBox!==null&&up.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,up)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cx?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;__.fromBufferAttribute(i.attributes.skinIndex,e),x_.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(zl.copy(t),t.set(0,0,0,0)):(zl.set(t.x,t.y,t.z,1),t.set(0,0,0)),zl.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=x_.getComponent(s);if(o!==0){let a=__.getComponent(s);y_.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(CM.copy(zl).applyMatrix4(y_),o)}}return t.isVector4&&(t.w=zl.w),t.applyMatrix4(this.bindMatrixInverse)}},Da=class extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ps=class extends on{constructor(e=null,t=1,n=1,i,s,o,a,l,c=sn,u=sn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},S_=new qe,PM=new qe,Ql=class r{constructor(e=[],t=[]){this.uuid=Tr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:PM;S_.multiplyMatrices(a,t[s]),S_.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ps(t,e,e,Ji,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(He("Skeleton: No bone found with UUID:",s),o=new Da),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Zr=class extends Ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xa=new qe,M_=new qe,ku=[],b_=new dn,IM=new qe,Hl=new gt,Gl=new yi,xo=class extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,IM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xa),b_.copy(e.boundingBox).applyMatrix4(xa),this.boundingBox.union(b_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xa),Gl.copy(e.boundingSphere).applyMatrix4(xa),this.boundingSphere.union(Gl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Hl.geometry=this.geometry,Hl.material=this.material,Hl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gl.copy(this.boundingSphere),Gl.applyMatrix4(n),e.ray.intersectsSphere(Gl)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xa),M_.multiplyMatrices(n,xa),Hl.matrixWorld=M_,Hl.raycast(e,ku);for(let o=0,a=ku.length;o<a;o++){let l=ku[o];l.instanceId=s,l.object=this,t.push(l)}ku.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(i*this.count),i,this.count,Ch,Jn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ho=new yi,LM=new je(.5,.5),zu=new z,Is=class{constructor(e=new or,t=new or,n=new or,i=new or,s=new or,o=new or){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],y=s[12],b=s[13],v=s[14],M=s[15];if(i[0].setComponents(c-o,d-u,g-p,M-y).normalize(),i[1].setComponents(c+o,d+u,g+p,M+y).normalize(),i[2].setComponents(c+a,d+h,g+_,M+b).normalize(),i[3].setComponents(c-a,d-h,g-_,M-b).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,d-f,g-m,M-v).normalize();else if(i[4].setComponents(c-l,d-f,g-m,M-v).normalize(),t===Xi)i[5].setComponents(c+l,d+f,g+m,M+v).normalize();else if(t===Ea)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ho.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ho.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ho)}intersectsSprite(e){ho.center.set(0,0,0);let t=LM.distanceTo(e.center);return ho.radius=.7071067811865476+t,ho.applyMatrix4(e.matrixWorld),this.intersectsSphere(ho)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(zu.x=i.normal.x>0?e.max.x:e.min.x,zu.y=i.normal.y>0?e.max.y:e.min.y,zu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},T_=new qe,lh=class r{constructor(){this.coordinateSystem=Xi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];T_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Is),n[i].setFromProjectionMatrix(T_,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Is),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Ls=class extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ch=new z,uh=new z,w_=new qe,Vl=new _o,Hu=new yi,hp=new z,E_=new z,yo=class extends wt{constructor(e=new pn,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ch.fromBufferAttribute(t,i-1),uh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ch.distanceTo(uh);e.setAttribute("lineDistance",new It(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hu.copy(n.boundingSphere),Hu.applyMatrix4(i),Hu.radius+=s,e.ray.intersectsSphere(Hu)===!1)return;w_.copy(i).invert(),Vl.copy(e.ray).applyMatrix4(w_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=u.getX(_),y=u.getX(_+1),b=Gu(this,e,Vl,l,g,y,_);b&&t.push(b)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(d),g=Gu(this,e,Vl,l,_,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=Gu(this,e,Vl,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Gu(this,e,Vl,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Gu(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(ch.fromBufferAttribute(a,i),uh.fromBufferAttribute(a,s),t.distanceSqToSegment(ch,uh,hp,E_)>n)return;hp.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(hp);if(!(c<e.near||c>e.far))return{distance:c,point:E_.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var A_=new z,R_=new z,vo=class extends yo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)A_.fromBufferAttribute(t,i),R_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+A_.distanceTo(R_);e.setAttribute("lineDistance",new It(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ec=class extends yo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Na=class extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},C_=new qe,vp=new _o,Vu=new yi,Wu=new z,So=class extends wt{constructor(e=new pn,t=new Na){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vu.copy(n.boundingSphere),Vu.applyMatrix4(i),Vu.radius+=s,e.ray.intersectsSphere(Vu)===!1)return;C_.copy(i).invert(),vp.copy(e.ray).applyMatrix4(C_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let m=c.getX(p);Wu.fromBufferAttribute(h,m),P_(Wu,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)Wu.fromBufferAttribute(h,p),P_(Wu,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function P_(r,e,t,n,i,s,o){let a=vp.distanceSqToPoint(r);if(a<t){let l=new z;vp.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var tc=class extends on{constructor(e=[],t=Po,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vi=class extends on{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jr=class extends on{constructor(e,t,n=cr,i,s,o,a=sn,l=sn,c,u=Kr,h=1){if(u!==Kr&&u!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ca(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nc=class extends Jr{constructor(e,t=cr,n=Po,i,s,o=sn,a=sn,l,c=Kr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ic=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oi=class r extends pn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function p(_,m,g,y,b,v,M,T,x,S,R){let A=v/x,D=M/S,L=v/2,O=M/2,C=T/2,F=x+1,k=S+1,U=0,$=0,G=new z;for(let I=0;I<k;I++){let J=I*D-O;for(let fe=0;fe<F;fe++){let Ee=fe*A-L;G[_]=Ee*y,G[m]=J*b,G[g]=C,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[g]=T>0?1:-1,u.push(G.x,G.y,G.z),h.push(fe/x),h.push(1-I/S),U+=1}}for(let I=0;I<S;I++)for(let J=0;J<x;J++){let fe=f+J+F*I,Ee=f+J+F*(I+1),X=f+(J+1)+F*(I+1),ue=f+(J+1)+F*I;l.push(fe,Ee,ue),l.push(Ee,X,ue),$+=6}a.addGroup(d,$,R),d+=$,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ds=class r extends pn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],f=[],d=[],p=0,_=[],m=n/2,g=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(d,2));function y(){let v=new z,M=new z,T=0,x=(t-e)/n;for(let S=0;S<=s;S++){let R=[],A=S/s,D=A*(t-e)+e;for(let L=0;L<=i;L++){let O=L/i,C=O*l+a,F=Math.sin(C),k=Math.cos(C);M.x=D*F,M.y=-A*n+m,M.z=D*k,h.push(M.x,M.y,M.z),v.set(F,x,k).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-A),R.push(p++)}_.push(R)}for(let S=0;S<i;S++)for(let R=0;R<s;R++){let A=_[R][S],D=_[R+1][S],L=_[R+1][S+1],O=_[R][S+1];(e>0||R!==0)&&(u.push(A,D,O),T+=3),(t>0||R!==s-1)&&(u.push(D,L,O),T+=3)}c.addGroup(g,T,0),g+=T}function b(v){let M=p,T=new je,x=new z,S=0,R=v===!0?e:t,A=v===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),p++;let D=p;for(let L=0;L<=i;L++){let C=L/i*l+a,F=Math.cos(C),k=Math.sin(C);x.x=R*k,x.y=m*A,x.z=R*F,h.push(x.x,x.y,x.z),f.push(0,A,0),T.x=F*.5+.5,T.y=k*.5*A+.5,d.push(T.x,T.y),p++}for(let L=0;L<i;L++){let O=M+L,C=D+L;v===!0?u.push(C,C+1,O):u.push(C+1,C,O),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rc=class r extends Ds{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xu=new z,qu=new z,fp=new z,Yu=new Xr,sc=class extends pn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Ma*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=Yu;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Yu.getNormal(fp),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let b=(y+1)%3,v=h[y],M=h[b],T=Yu[u[y]],x=Yu[u[b]],S=`${v}_${M}`,R=`${M}_${v}`,A=f.get(R);A?(fp.dot(A.normal)<=s&&(d.push(T.x,T.y,T.z),d.push(x.x,x.y,x.z)),f.set(R,null)):f.has(S)||f.set(S,{index0:c[y],index1:c[b],normal:fp.clone()})}}for(let p of f.values())if(p){let{index0:_,index1:m}=p;Xu.fromBufferAttribute(a,_),qu.fromBufferAttribute(a,m),d.push(Xu.x,Xu.y,Xu.z),d.push(qu.x,qu.y,qu.z)}this.setAttribute("position",new It(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Ki=class r extends pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*f-o;for(let b=0;b<c;b++){let v=b*h-s;p.push(v,-y,0),_.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let b=y+c*g,v=y+c*(g+1),M=y+1+c*(g+1),T=y+1+c*g;d.push(b,v,T),d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var oc=class r extends pn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new z,f=new z,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let y=[],b=g/n,v=o+b*a,M=e*Math.cos(v),T=Math.sqrt(e*e-M*M),x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let R=S/t,A=i+R*s;h.x=-T*Math.cos(A),h.y=M,h.z=T*Math.sin(A),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(R+x,1-b),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let b=u[g][y+1],v=u[g][y],M=u[g+1][y],T=u[g+1][y+1];(g!==0||o>0)&&d.push(b,v,T),(g!==n-1||l<Math.PI)&&d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Oa=class r extends pn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],h=[],f=new z,d=new z,p=new z;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=i;g++){let y=g/i*s;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(g/i),h.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,y=(i+1)*(_-1)+m-1,b=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(g,y,v),l.push(y,b,v)}this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Do(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(I_(i))i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(I_(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function $n(r){let e={};for(let t=0;t<r.length;t++){let n=Do(r[t]);for(let i in n)e[i]=n[i]}return e}function I_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function DM(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nm(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Tx={clone:Do,merge:$n},NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zi=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=DM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(i.value);break;case"v2":this.uniforms[n].value=new je().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hh=class extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Sn=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends Sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return fo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){fo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ac=class extends li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Mh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fh=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dh=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Wl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function UM(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function L_(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function FM(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var Sr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ph=class extends Sr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_p,endingEnd:_p}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case xp:s=e,a=2*t-n;break;case yp:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xp:o=e,l=2*n-t;break;case yp:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,b=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let M=0;M!==a;++M)s[M]=g*o[u+M]+y*o[c+M]+b*o[l+M]+v*o[h+M];return s}},mh=class extends Sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},gh=class extends Sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},_h=class extends Sr{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(i-t),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*f+p*2,y=h[g],b=h[g+1],v=e*f+p*2,M=u[v],T=u[v+1],x=kM(n,t,y,M,i);s[p]=wx(x,_,b,T,m)}return s}};function wx(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function BM(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function kM(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){let a=wx(s,e,t,n,i)-r;if(Math.abs(a)<1e-10)break;let l=BM(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Si=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Wl(e.settings)&&(n.settings={inTangents:Rs(e.settings.inTangents,Array),outTangents:Rs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _h(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case po:t=this.InterpolantFactoryMethodDiscrete;break;case mo:t=this.InterpolantFactoryMethodLinear;break;case Ju:t=this.InterpolantFactoryMethodSmooth;break;case gp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return Ju;case this.InterpolantFactoryMethodBezier:return gp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Wl(this.settings)&&(D_(this.settings.inTangents,e),D_(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Wl(this.settings)&&(N_(this.settings.inTangents,e),N_(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&YS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ju,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Wl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function D_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function N_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=mo;var $r=class extends Si{constructor(e,t,n){super(e,t,n)}};$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=po;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}};lc.prototype.ValueTypeName="color";var jr=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}};jr.prototype.ValueTypeName="number";var xh=class extends Sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)vn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Qr=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Si{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=po;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}};Ns.prototype.ValueTypeName="vector";var cc=class{constructor(e="",t=-1,n=[],i=ux){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Tr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(HM(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Si.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=UM(l);l=L_(l,1,u),c=L_(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new jr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function zM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jr;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return lc;case"quaternion":return Qr;case"bool":case"boolean":return $r;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function HM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zM(r.type);if(r.times===void 0){let n=[],i=[];FM(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Wl(r.settings)&&(t.settings={inTangents:Rs(r.settings.inTangents,Float32Array),outTangents:Rs(r.settings.outTangents,Float32Array)}),t}var yr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(O_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!O_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function O_(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var yh=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ex=new yh,lr=class{constructor(e){this.manager=e!==void 0?e:Ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};lr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr={},Sp=class extends Error{constructor(e,t){super(e),this.response=t}},Mo=class extends lr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=yr.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Wr[e]!==void 0){Wr[e].push({onLoad:t,onProgress:n,onError:i});return}Wr[e]=[],Wr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Wr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,_=0,m=new ReadableStream({start(g){y();function y(){h.read().then(({done:b,value:v})=>{if(b)g.close();else{_+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let T=0,x=u.length;T<x;T++){let S=u[T];S.onProgress&&S.onProgress(M)}g.enqueue(v),y()}},b=>{g.error(b)})}}});return new Response(m)}else throw new Sp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{yr.add(`file:${e}`,c);let u=Wr[e];delete Wr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Wr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ya=new WeakMap,vh=class extends lr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=yr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=ya.get(o);h===void 0&&(h=[],ya.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Aa("img");function l(){u(),t&&t(this);let h=ya.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}ya.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),yr.remove(`image:${e}`);let f=ya.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}ya.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yr.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var uc=class extends lr{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new Ps,a=new Mo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){i!==void 0?i(u):Xe(u);return}s._applyTexData(o,c),t&&t(o,c)},n,i),o}createDataTexture(e){let t=new Ps;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:xi,e.wrapT=t.wrapT!==void 0?t.wrapT:xi,e.magFilter=t.magFilter!==void 0?t.magFilter:Ut,e.minFilter=t.minFilter!==void 0?t.minFilter:Ut,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ui),t.mipmapCount===1&&(e.minFilter=Ut),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},bo=class extends lr{constructor(e){super(e)}load(e,t,n,i){let s=new on,o=new vh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},To=class extends wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},hc=class extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},dp=new qe,U_=new z,F_=new z,Ua=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;U_.setFromMatrixPosition(e.matrixWorld),t.position.copy(U_),F_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(F_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){dp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(dp,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===Ea||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(dp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ku=new z,Zu=new vn,xr=new z,fc=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ku,Zu,xr),xr.x===1&&xr.y===1&&xr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ku,Zu,xr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ku,Zu,xr),xr.x===1&&xr.y===1&&xr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ku,Zu,xr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},As=new z,B_=new je,k_=new je,Yt=class extends fc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,B_,k_),t.subVectors(k_,B_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mp=class extends Ua{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=go*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},dc=class extends To{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Mp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},bp=class extends Ua{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},ts=class extends To{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},wo=class extends fc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tp=class extends Ua{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ci=class extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Tp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ns=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pp=new WeakMap,pc=class extends lr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=yr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{pp.has(o)===!0?(i&&i(pp.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return yr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),pp.set(l,c),yr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});yr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var va=-90,Sa=1,Fa=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yt(va,Sa,e,t);i.layers=this.layers,this.add(i);let s=new Yt(va,Sa,e,t);s.layers=this.layers,this.add(s);let o=new Yt(va,Sa,e,t);o.layers=this.layers,this.add(o);let a=new Yt(va,Sa,e,t);a.layers=this.layers,this.add(a);let l=new Yt(va,Sa,e,t);l.layers=this.layers,this.add(l);let c=new Yt(va,Sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Sh=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var im="\\[\\]\\.:\\/",GM=new RegExp("["+im+"]","g"),rm="[^"+im+"]",VM="[^"+im.replace("\\.","")+"]",WM=/((?:WC+[\/:])*)/.source.replace("WC",rm),XM=/(WCOD+)?/.source.replace("WCOD",VM),qM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rm),YM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rm),KM=new RegExp("^"+WM+XM+qM+YM+"$"),ZM=["material","materials","bones","map"],wp=class{constructor(e,t,n){let i=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GM,"")}static parseTrackName(e){let t=KM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ZM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=wp;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FA=new Float32Array(1);var Ep=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function sm(r,e,t,n){let i=JM(n);switch(t){case Wp:return r*e;case Ch:return r*e/i.components*i.byteLength;case Ph:return r*e/i.components*i.byteLength;case Os:return r*e*2/i.components*i.byteLength;case Ih:return r*e*2/i.components*i.byteLength;case Xp:return r*e*3/i.components*i.byteLength;case Ji:return r*e*4/i.components*i.byteLength;case Lh:return r*e*4/i.components*i.byteLength;case mc:case gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _c:case xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Uh:return Math.max(r,16)*Math.max(e,8)/4;case Dh:case Oh:return Math.max(r,8)*Math.max(e,8)/2;case Fh:case Bh:case zh:case Hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kh:case yc:case Gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case qh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ef:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case tf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case nf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rf:case sf:case of:return Math.ceil(r/4)*Math.ceil(e/4)*16;case af:case lf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vc:case cf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JM(r){switch(r){case Mi:case zp:return{byteLength:1,components:1};case Ga:case Hp:case ui:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case cr:case Eh:case Jn:return{byteLength:4,components:1};case Gp:case Vp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Kx(){let r=null,e=!1,t=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),t(s,o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function jM(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eb=`#ifdef USE_ALPHAHASH
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
#endif`,tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sb=`#ifdef USE_AOMAP
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
#endif`,ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ab=`#ifdef USE_BATCHING
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
#endif`,lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fb=`#ifdef USE_IRIDESCENCE
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
#endif`,db=`#ifdef USE_BUMPMAP
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mb=`#define PI 3.141592653589793
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
} // validated`,bb=`vec3 transformedNormal = objectNormal;
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
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kb=`#ifdef USE_GRADIENTMAP
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
}`,zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zb=`PhysicalMaterial material;
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
#endif`,Jb=`uniform sampler2D dfgLUT;
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
}`,$b=`
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,tT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lT=`#if defined( USE_POINTS_UV )
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
#endif`,cT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fT=`#if defined( USE_MORPHCOLORS )
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
#endif`,dT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`#ifdef USE_MORPHTARGETS
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
#endif`,mT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_T=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ST=`#ifdef USE_NORMALMAP
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
#endif`,MT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ET=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FT=`float getShadowMask() {
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
}`,BT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kT=`#ifdef USE_SKINNING
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
#endif`,zT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HT=`#ifdef USE_SKINNING
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
#endif`,GT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qT=`#ifdef USE_TRANSMISSION
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
#endif`,YT=`#ifdef USE_TRANSMISSION
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QT=`uniform sampler2D t2D;
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform float backgroundBlurriness;
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`#include <common>
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
}`,s1=`#if DEPTH_PACKING == 3200
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
}`,o1=`#define DISTANCE
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
}`,a1=`#define DISTANCE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`uniform float scale;
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
}`,h1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,d1=`uniform vec3 diffuse;
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define LAMBERT
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
}`,g1=`#define MATCAP
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
}`,_1=`#define MATCAP
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
}`,x1=`#define NORMAL
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
}`,y1=`#define NORMAL
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
}`,v1=`#define PHONG
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
}`,S1=`#define PHONG
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
}`,M1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,T1=`#define TOON
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
}`,w1=`#define TOON
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
}`,E1=`uniform float size;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,C1=`uniform vec3 color;
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
}`,P1=`uniform float rotation;
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
}`,I1=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:QM,alphahash_pars_fragment:eb,alphamap_fragment:tb,alphamap_pars_fragment:nb,alphatest_fragment:ib,alphatest_pars_fragment:rb,aomap_fragment:sb,aomap_pars_fragment:ob,batching_pars_vertex:ab,batching_vertex:lb,begin_vertex:cb,beginnormal_vertex:ub,bsdfs:hb,iridescence_fragment:fb,bumpmap_pars_fragment:db,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:gb,clipping_planes_vertex:_b,color_fragment:xb,color_pars_fragment:yb,color_pars_vertex:vb,color_vertex:Sb,common:Mb,defaultnormal_vertex:bb,displacementmap_pars_vertex:Tb,displacementmap_vertex:wb,emissivemap_fragment:Eb,emissivemap_pars_fragment:Ab,colorspace_fragment:Rb,colorspace_pars_fragment:Cb,envmap_fragment:Pb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Lb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Wb,envmap_vertex:Nb,fog_vertex:Ob,fog_pars_vertex:Ub,fog_fragment:Fb,fog_pars_fragment:Bb,gradientmap_pars_fragment:kb,lightmap_pars_fragment:zb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Gb,lights_pars_begin:Vb,lights_toon_fragment:Xb,lights_toon_pars_fragment:qb,lights_phong_fragment:Yb,lights_phong_pars_fragment:Kb,lights_physical_fragment:Zb,lights_physical_pars_fragment:Jb,lights_fragment_begin:$b,lights_fragment_maps:jb,lights_fragment_end:Qb,lightprobes_pars_fragment:eT,logdepthbuf_fragment:tT,logdepthbuf_pars_fragment:nT,logdepthbuf_pars_vertex:iT,logdepthbuf_vertex:rT,map_fragment:sT,map_pars_fragment:oT,map_particle_fragment:aT,map_particle_pars_fragment:lT,metalnessmap_fragment:cT,metalnessmap_pars_fragment:uT,morphinstance_vertex:hT,morphcolor_vertex:fT,morphnormal_vertex:dT,morphtarget_pars_vertex:pT,morphtarget_vertex:mT,normal_fragment_begin:gT,normal_fragment_maps:_T,normal_pars_fragment:xT,normal_pars_vertex:yT,normal_vertex:vT,normalmap_pars_fragment:ST,clearcoat_normal_fragment_begin:MT,clearcoat_normal_fragment_maps:bT,clearcoat_pars_fragment:TT,iridescence_pars_fragment:wT,opaque_fragment:ET,packing:AT,premultiplied_alpha_fragment:RT,project_vertex:CT,dithering_fragment:PT,dithering_pars_fragment:IT,roughnessmap_fragment:LT,roughnessmap_pars_fragment:DT,shadowmap_pars_fragment:NT,shadowmap_pars_vertex:OT,shadowmap_vertex:UT,shadowmask_pars_fragment:FT,skinbase_vertex:BT,skinning_pars_vertex:kT,skinning_vertex:zT,skinnormal_vertex:HT,specularmap_fragment:GT,specularmap_pars_fragment:VT,tonemapping_fragment:WT,tonemapping_pars_fragment:XT,transmission_fragment:qT,transmission_pars_fragment:YT,uv_pars_fragment:KT,uv_pars_vertex:ZT,uv_vertex:JT,worldpos_vertex:$T,background_vert:jT,background_frag:QT,backgroundCube_vert:e1,backgroundCube_frag:t1,cube_vert:n1,cube_frag:i1,depth_vert:r1,depth_frag:s1,distance_vert:o1,distance_frag:a1,equirect_vert:l1,equirect_frag:c1,linedashed_vert:u1,linedashed_frag:h1,meshbasic_vert:f1,meshbasic_frag:d1,meshlambert_vert:p1,meshlambert_frag:m1,meshmatcap_vert:g1,meshmatcap_frag:_1,meshnormal_vert:x1,meshnormal_frag:y1,meshphong_vert:v1,meshphong_frag:S1,meshphysical_vert:M1,meshphysical_frag:b1,meshtoon_vert:T1,meshtoon_frag:w1,points_vert:E1,points_frag:A1,shadow_vert:R1,shadow_frag:C1,sprite_vert:P1,sprite_frag:I1},Pe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Er={basic:{uniforms:$n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:$n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:$n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:$n([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:$n([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:$n([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:$n([Pe.points,Pe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:$n([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:$n([Pe.common,Pe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:$n([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:$n([Pe.sprite,Pe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:$n([Pe.common,Pe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:$n([Pe.lights,Pe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Er.physical={uniforms:$n([Er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var ff={r:0,b:0,g:0},L1=new qe,Zx=new Ke;Zx.set(-1,0,0,0,1,0,0,0,1);function D1(r,e,t,n,i,s){let o=new Ge(0),a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=e.get(b,v)}return b}function p(y){let b=!1,v=d(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,b){let v=d(b);v&&v.isCubeTexture?(c===void 0&&(c=new gt(new Oi(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Do(Er.backgroundCube.uniforms),vertexShader:Er.backgroundCube.vertexShader,fragmentShader:Er.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(L1.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zx),c.material.toneMapped=st.getTransfer(v.colorSpace)!==Mt,(u!==v||h!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new gt(new Ki(2,2),new Zi({name:"BackgroundMaterial",uniforms:Do(Er.background.uniforms),vertexShader:Er.background.vertexShader,fragmentShader:Er.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=st.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(ff,nm(r)),t.buffers.color.setClear(ff.r,ff.g,ff.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:g}}function N1(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(D,L,O,C,F){let k=!1,U=h(D,C,O,L);s!==U&&(s=U,c(s.object)),k=d(D,C,O,F),k&&p(D,C,O,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(D,L,O,C),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function h(D,L,O,C){let F=C.wireframe===!0,k=n[L.id];k===void 0&&(k={},n[L.id]=k);let U=D.isInstancedMesh===!0?D.id:0,$=k[U];$===void 0&&($={},k[U]=$);let G=$[O.id];G===void 0&&(G={},$[O.id]=G);let I=G[F];return I===void 0&&(I=f(l()),G[F]=I),I}function f(D){let L=[],O=[],C=[];for(let F=0;F<t;F++)L[F]=0,O[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:C,object:D,attributes:{},index:null}}function d(D,L,O,C){let F=s.attributes,k=L.attributes,U=0,$=O.getAttributes();for(let G in $)if($[G].location>=0){let J=F[G],fe=k[G];if(fe===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),J===void 0||J.attribute!==fe||fe&&J.data!==fe.data)return!0;U++}return s.attributesNum!==U||s.index!==C}function p(D,L,O,C){let F={},k=L.attributes,U=0,$=O.getAttributes();for(let G in $)if($[G].location>=0){let J=k[G];J===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let fe={};fe.attribute=J,J&&J.data&&(fe.data=J.data),F[G]=fe,U++}s.attributes=F,s.attributesNum=U,s.index=C}function _(){let D=s.newAttributes;for(let L=0,O=D.length;L<O;L++)D[L]=0}function m(D){g(D,0)}function g(D,L){let O=s.newAttributes,C=s.enabledAttributes,F=s.attributeDivisors;O[D]=1,C[D]===0&&(r.enableVertexAttribArray(D),C[D]=1),F[D]!==L&&(r.vertexAttribDivisor(D,L),F[D]=L)}function y(){let D=s.newAttributes,L=s.enabledAttributes;for(let O=0,C=L.length;O<C;O++)L[O]!==D[O]&&(r.disableVertexAttribArray(O),L[O]=0)}function b(D,L,O,C,F,k,U){U===!0?r.vertexAttribIPointer(D,L,O,F,k):r.vertexAttribPointer(D,L,O,C,F,k)}function v(D,L,O,C){_();let F=C.attributes,k=O.getAttributes(),U=L.defaultAttributeValues;for(let $ in k){let G=k[$];if(G.location>=0){let I=F[$];if(I===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),I!==void 0){let J=I.normalized,fe=I.itemSize,Ee=e.get(I);if(Ee===void 0)continue;let X=Ee.buffer,ue=Ee.type,Me=Ee.bytesPerElement,Te=ue===r.INT||ue===r.UNSIGNED_INT||I.gpuType===Eh;if(I.isInterleavedBufferAttribute){let pe=I.data,ae=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,ke=I.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)g(G.location+oe,pe.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);r.bindBuffer(r.ARRAY_BUFFER,X);for(let oe=0;oe<G.locationSize;oe++)b(G.location+oe,fe/G.locationSize,ue,J,ae*Me,(ke+fe/G.locationSize*oe)*Me,Te)}else{if(I.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)g(G.location+pe,I.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let pe=0;pe<G.locationSize;pe++)m(G.location+pe);r.bindBuffer(r.ARRAY_BUFFER,X);for(let pe=0;pe<G.locationSize;pe++)b(G.location+pe,fe/G.locationSize,ue,J,fe*Me,fe/G.locationSize*pe*Me,Te)}}else if(U!==void 0){let J=U[$];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(G.location,J);break;case 3:r.vertexAttrib3fv(G.location,J);break;case 4:r.vertexAttrib4fv(G.location,J);break;default:r.vertexAttrib1fv(G.location,J)}}}}y()}function M(){R();for(let D in n){let L=n[D];for(let O in L){let C=L[O];for(let F in C){let k=C[F];for(let U in k)u(k[U].object),delete k[U];delete C[F]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let O in L){let C=L[O];for(let F in C){let k=C[F];for(let U in k)u(k[U].object),delete k[U];delete C[F]}}delete n[D.id]}function x(D){for(let L in n){let O=n[L];for(let C in O){let F=O[C];if(F[D.id]===void 0)continue;let k=F[D.id];for(let U in k)u(k[U].object),delete k[U];delete F[D.id]}}}function S(D){for(let L in n){let O=n[L],C=D.isInstancedMesh===!0?D.id:0,F=O[C];if(F!==void 0){for(let k in F){let U=F[k];for(let $ in U)u(U[$].object),delete U[$];delete F[k]}delete O[C],Object.keys(O).length===0&&delete n[L]}}}function R(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function O1(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function U1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Ji&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Mi&&x!==Jn&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:M,samples:T}}function F1(r){let e=this,t=null,n=0,i=!1,s=!1,o=new or,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=r.get(h);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,b=y*4,v=g.clippingState||null;l.value=v,v=u(p,f,b,d);for(let M=0;M!==b;++M)v[M]=t[M];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,v=d;b!==_;++b,v+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var wc=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oi(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Ao});s.uniforms.tEquirect.value=t;let o=new gt(i,s),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Ut),new Fa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Ax=256,B1=3,k1=20,Jx=256,$x=16,z1=3,H1=new z,G1=new Ge,Us=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fa(1,10,null),this._boxMesh=new gt(new Oi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=H1}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(G1));let m=new Fa(n,i,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Px(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ax,Qp(e))}_fromTexture(e,t){e.mapping===Po||e.mapping===za?this._setSize(e.image.length===0?Ax:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Rx(e,!1,!1),n=Math.log2(e)-B1;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Rx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Po||e.mapping===za?(this._cubemapMaterial===null&&(this._cubemapMaterial=Px()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cx()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=V1(),this._integrationMaterial=W1());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/$x);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-z1)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Jx*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=X1());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function Rx(r,e,t){return new wc(r,{minFilter:Ui,generateMipmaps:e,type:ui,colorSpace:Dn,depthBuffer:t})}function Ec(r,e,t){return new Zi({name:r,uniforms:e,vertexShader:tt.cube_vert,fragmentShader:t,side:On,blending:Ao,depthTest:!1,depthWrite:!1})}function V1(){return Ec("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jx}u

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
	`)}function W1(){return Ec("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$x}},`

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
	`)}function X1(){return Ec("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${k1}
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
	`)}function Cx(){return Ec("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Px(){return Ec("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function q1(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===bh||d===Th)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new wc(p.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===bh||d===Th,_=d===Po||d===za;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Us(r)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Us(r)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===bh?f.mapping=Po:d===Th&&(f.mapping=za),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Y1(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&fo("WebGLRenderer: "+n+" extension not supported."),i}}}function K1(r,e,t,n){let i={},s=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let _=s.get(p);_&&(e.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],r.ARRAY_BUFFER)}function h(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,b=m.count>=65535?$l:Jl,v=new b(Math.ceil(y/3)*6,1),M=v.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,R=0;S<y;S+=3){let A=x[S+0],D=x[S+1],L=x[S+2];M[R++]=A,M[R++]=D,M[R++]=D,M[R++]=L,M[R++]=L,M[R++]=A}}else{g=m.version;for(let x=0,S=0;x<y;x+=3){let R=x+0,A=x+1,D=x+2;M[S++]=R,M[S++]=A,M[S++]=A,M[S++]=D,M[S++]=D,M[S++]=R}}v.version=g;let T=s.get(p);T&&e.remove(T),s.set(p,v)}function f(p){let _=s.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&h(p)}else h(p);return s.get(p)}function d(){for(let p in i){let _=i[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function Z1(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function J1(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $1(r,e,t){let n=new WeakMap,i=new yt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let R=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*M*4*h),x=new Kl(T,v,M,h);x.type=Jn,x.needsUpdate=!0;let S=b*4;for(let A=0;A<h;A++){let D=m[A],L=g[A],O=y[A],C=v*M*4*A;for(let F=0;F<D.count;F++){let k=F*S;d===!0&&(i.fromBufferAttribute(D,F),T[C+k+0]=i.x,T[C+k+1]=i.y,T[C+k+2]=i.z,T[C+k+3]=0),p===!0&&(i.fromBufferAttribute(L,F),T[C+k+4]=i.x,T[C+k+5]=i.y,T[C+k+6]=i.z,T[C+k+7]=0),_===!0&&(i.fromBufferAttribute(O,F),T[C+k+8]=i.x,T[C+k+9]=i.y,T[C+k+10]=i.z,T[C+k+11]=O.itemSize===4?i.w:1)}}f={count:h,texture:x,size:new je(v,M)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function j1(r,e,t,n,i){let s=new WeakMap;function o(c){let u=i.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Q1={[Dp]:"LINEAR_TONE_MAPPING",[Np]:"REINHARD_TONE_MAPPING",[Op]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[Fp]:"AGX_TONE_MAPPING",[Bp]:"NEUTRAL_TONE_MAPPING",[Up]:"CUSTOM_TONE_MAPPING"};function ew(r,e,t,n,i,s){let o=new Ni(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new pn;u.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new It([0,2,0,0,2,0],2));let h=new hh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new gt(u,h),d=new wo(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,b=[],v=!1;this.setSize=function(M,T){o.setSize(M,T),a!==null&&a.setSize(M,T),l!==null&&l.setSize(M,T);for(let x=0;x<b.length;x++){let S=b[x];S.setSize&&S.setSize(M,T)}},this.setEffects=function(M){b=M,v=b.length>0&&b[0].isRenderPass===!0;let T=o.width,x=o.height;b.length>0&&a===null&&(a=new Ni(T,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}),l=new Ni(T,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&b.some(R=>R.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Jr(T,x),s===!0&&(c.format=is,c.type=Lo)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let R=0;R<b.length;R++){let A=b[R];A.setSize&&A.setSize(T,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(M,T){if(m||M.toneMapping===br&&b.length===0)return!1;if(y=T,T!==null){let x=T.width,S=T.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return v===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=br,!0},this.hasRenderPass=function(){return v},this.end=function(M,T){M.toneMapping=g,m=!0;let x=o,S=a;for(let R=0;R<b.length;R++){let A=b[R];A.enabled!==!1&&(A.render(M,S,x,T),A.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(p!==M.outputColorSpace||_!==M.toneMapping){p=M.outputColorSpace,_=M.toneMapping,h.defines={},st.getTransfer(p)===Mt&&(h.defines.SRGB_TRANSFER="");let R=Q1[_];R&&(h.defines[R]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(y),M.render(f,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var jx=new on,Qx=new Jr(1,1),ey=new nc(1),ty=new Kl,ny=new ah,iy=new tc,Ix=[],Lx=[],Dx=new Float32Array(16),Nx=new Float32Array(9),Ox=new Float32Array(4);function qa(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Ix[i];if(s===void 0&&(s=new Float32Array(i),Ix[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Mn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function bn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function pf(r,e){let t=Lx[e];t===void 0&&(t=new Int32Array(e),Lx[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;r.uniform2fv(this.addr,e),bn(t,e)}}function iw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;r.uniform3fv(this.addr,e),bn(t,e)}}function rw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;r.uniform4fv(this.addr,e),bn(t,e)}}function sw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Ox.set(n),r.uniformMatrix2fv(this.addr,!1,Ox),bn(t,n)}}function ow(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Nx.set(n),r.uniformMatrix3fv(this.addr,!1,Nx),bn(t,n)}}function aw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Dx.set(n),r.uniformMatrix4fv(this.addr,!1,Dx),bn(t,n)}}function lw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;r.uniform2iv(this.addr,e),bn(t,e)}}function uw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;r.uniform3iv(this.addr,e),bn(t,e)}}function hw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;r.uniform4iv(this.addr,e),bn(t,e)}}function fw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;r.uniform2uiv(this.addr,e),bn(t,e)}}function pw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;r.uniform3uiv(this.addr,e),bn(t,e)}}function mw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;r.uniform4uiv(this.addr,e),bn(t,e)}}function mf(r){return r.version===0&&(r.compareFunction=Zp,r.needsUpdate=!0),r}function gw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=mf(Qx):s=jx,t.setTexture2D(e||s,i)}function _w(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ny,i)}function xw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=mf(ey):s=iy,t.setTextureCube(e||s,i)}function yw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ty,i)}function vw(r){switch(r){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return rw;case 35674:return sw;case 35675:return ow;case 35676:return aw;case 5124:case 35670:return lw;case 35667:case 35671:return cw;case 35668:case 35672:return uw;case 35669:case 35673:return hw;case 5125:return fw;case 36294:return dw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return _w;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return yw}}function Sw(r,e){r.uniform1fv(this.addr,e)}function Mw(r,e){let t=qa(e,this.size,2);r.uniform2fv(this.addr,t)}function bw(r,e){let t=qa(e,this.size,3);r.uniform3fv(this.addr,t)}function Tw(r,e){let t=qa(e,this.size,4);r.uniform4fv(this.addr,t)}function ww(r,e){let t=qa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ew(r,e){let t=qa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Aw(r,e){let t=qa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Rw(r,e){r.uniform1iv(this.addr,e)}function Cw(r,e){r.uniform2iv(this.addr,e)}function Pw(r,e){r.uniform3iv(this.addr,e)}function Iw(r,e){r.uniform4iv(this.addr,e)}function Lw(r,e){r.uniform1uiv(this.addr,e)}function Dw(r,e){r.uniform2uiv(this.addr,e)}function Nw(r,e){r.uniform3uiv(this.addr,e)}function Ow(r,e){r.uniform4uiv(this.addr,e)}function Uw(r,e,t){let n=this.cache,i=e.length,s=pf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=mf(Qx):o=jx;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Fw(r,e,t){let n=this.cache,i=e.length,s=pf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ny,s[o])}function Bw(r,e,t){let n=this.cache,i=e.length,s=pf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=mf(ey):o=iy;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,s[a])}function kw(r,e,t){let n=this.cache,i=e.length,s=pf(t,i);Mn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ty,s[o])}function zw(r){switch(r){case 5126:return Sw;case 35664:return Mw;case 35665:return bw;case 35666:return Tw;case 35674:return ww;case 35675:return Ew;case 35676:return Aw;case 5124:case 35670:return Rw;case 35667:case 35671:return Cw;case 35668:case 35672:return Pw;case 35669:case 35673:return Iw;case 5125:return Lw;case 36294:return Dw;case 36295:return Nw;case 36296:return Ow;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return kw}}var lm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vw(t.type)}},cm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zw(t.type)}},um=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},om=/(\w+)(\])?(\[|\.)?/g;function Ux(r,e){r.seq.push(e),r.map[e.id]=e}function Hw(r,e,t){let n=r.name,i=n.length;for(om.lastIndex=0;;){let s=om.exec(n),o=om.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ux(t,c===void 0?new lm(a,r,e):new cm(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new um(a),Ux(t,h)),t=h}}}var Wa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Hw(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Fx(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Gw=37297,Vw=0;function Ww(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Bx=new Ke;function Xw(r){st._getMatrix(Bx,st.workingColorSpace,r);let e=`mat3( ${Bx.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case ql:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kx(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Ww(r.getShaderSource(e),a)}else return s}function qw(r,e){let t=Xw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Yw={[Dp]:"Linear",[Np]:"Reinhard",[Op]:"Cineon",[Co]:"ACESFilmic",[Fp]:"AgX",[Bp]:"Neutral",[Up]:"Custom"};function Kw(r,e){let t=Yw[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var df=new z;function Zw(){st.getLuminanceCoefficients(df);let r=df.x.toFixed(4),e=df.y.toFixed(4),t=df.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tc).join(`
`)}function $w(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jw(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Tc(r){return r!==""}function zx(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Hx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function hm(r){return r.replace(Qw,eE)}function eE(r,e){let t=tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return hm(t)}var tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gx(r){return r.replace(tE,nE)}function nE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vx(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var iE={[Eo]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function rE(r){return iE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sE={[za]:"ENVMAP_MODE_REFRACTION"};function oE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":sE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aE={[Mh]:"ENVMAP_BLENDING_MULTIPLY",[ax]:"ENVMAP_BLENDING_MIX",[lx]:"ENVMAP_BLENDING_ADD"};function lE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":aE[r.combine]||"ENVMAP_BLENDING_NONE"}function cE(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=rE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=oE(t),h=lE(t),f=Jw(t),d=$w(s),p=i.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Tc).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Tc).join(`
`),m.length>0&&(m+=`
`)):(_=[Vx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tc).join(`
`),m=[Vx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?tt.tonemapping_pars_fragment:"",t.toneMapping!==br?Kw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,qw("linearToOutputTexel",t.outputColorSpace),Zw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tc).join(`
`)),o=hm(o),o=zx(o,t),o=Hx(o,t),a=hm(a),a=zx(a,t),a=Hx(a,t),o=Gx(o),a=Gx(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+o,b=g+m+a,v=Fx(i,i.VERTEX_SHADER,y),M=Fx(i,i.FRAGMENT_SHADER,b);i.attachShader(p,v),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function T(A){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(v)||"",O=i.getShaderInfoLog(M)||"",C=D.trim(),F=L.trim(),k=O.trim(),U=!0,$=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,v,M);else{let G=kx(i,v,"vertex"),I=kx(i,M,"fragment");Xe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+G+`
`+I)}else C!==""?He("WebGLProgram: Program Info Log:",C):(F===""||k==="")&&($=!1);$&&(A.diagnostics={runnable:U,programLog:C,vertexShader:{log:F,prefix:_},fragmentShader:{log:k,prefix:m}})}i.deleteShader(v),i.deleteShader(M),x=new Wa(i,p),S=jw(i,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(p,Gw)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=M,this}var uE=0,fm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dm(e),t.set(e,n)),n}},dm=class{constructor(e){this.id=uE++,this.code=e,this.usedTimes=0}};function hE(r){return r===Os||r===yc||r===vc}function fE(r,e,t,n,i,s){let o=new Zl,a=new fm,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,R,A,D,L){let O=A.fog,C=D.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||F,k),$=f[x.type],G=n.precision;x.precision!==null&&(G=n.getMaxPrecision(x.precision),G!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let I=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,J=I!==void 0?I.length:0,fe=0;C.morphAttributes.position!==void 0&&(fe=1),C.morphAttributes.normal!==void 0&&(fe=2),C.morphAttributes.color!==void 0&&(fe=3);let Ee,X,ue,Me;if($){let ne=Er[$];Ee=ne.vertexShader,X=ne.fragmentShader}else{Ee=x.vertexShader,X=x.fragmentShader;let ne=a.getVertexShaderStage(x),Le=a.getFragmentShaderStage(x);a.update(x,ne,Le),ue=ne.id,Me=Le.id}let Te=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),ae=D.isInstancedMesh===!0,ke=D.isBatchedMesh===!0,oe=!!x.map,ie=!!x.matcap,le=!!U,_e=le&&U.isPMREMTexture===!0,Ce=!!x.aoMap,Ve=!!x.lightMap,K=!!x.bumpMap&&x.wireframe===!1,Qe=!!x.normalMap,Nt=!!x.displacementMap,ct=!!x.emissiveMap,nt=!!x.metalnessMap,Jt=!!x.roughnessMap,nn=x.anisotropy>0,H=x.clearcoat>0,_t=x.diffuseRoughness>0,dt=x.dispersion>0,Ye=x.retroreflectivity>0,xe=x.iridescence>0,mt=x.sheen>0,Be=x.transmission>0,We=nn&&!!x.anisotropyMap,P=H&&!!x.clearcoatMap,w=H&&!!x.clearcoatNormalMap,W=H&&!!x.clearcoatRoughnessMap,ce=_t&&!!x.diffuseRoughnessMap,re=xe&&!!x.iridescenceMap,ge=xe&&!!x.iridescenceThicknessMap,be=mt&&!!x.sheenColorMap,q=mt&&!!x.sheenRoughnessMap,ee=!!x.specularMap,me=!!x.specularColorMap,N=!!x.specularIntensityMap,Q=Be&&!!x.transmissionMap,j=Be&&!!x.thicknessMap,ye=!!x.gradientMap,de=!!x.alphaMap,ve=x.alphaTest>0,he=!!x.alphaHash,Se=!!x.extensions,se=br;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(se=r.toneMapping);let te=_e?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,we={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Ee,fragmentShader:X,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:ke,batchingColor:ke&&D._colorsTexture!==null,instancing:ae,instancingColor:ae&&D.instanceColor!==null,instancingMorph:ae&&D.morphTexture!==null,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:ie,envMap:le,envMapMode:le&&U.mapping,envMapPMREM:_e,envMapMaxLod:_e?te.length-1:null,envMapSize:_e?te[0].width:null,aoMap:Ce,lightMap:Ve,bumpMap:K,normalMap:Qe,displacementMap:Nt,emissiveMap:ct,normalMapObjectSpace:Qe&&x.normalMapType===fx,normalMapTangentSpace:Qe&&x.normalMapType===Mc,packedNormalMap:Qe&&x.normalMapType===Mc&&hE(x.normalMap.format),metalnessMap:nt,roughnessMap:Jt,anisotropy:nn,anisotropyMap:We,clearcoat:H,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:W,diffuseRoughness:_t,diffuseRoughnessMap:ce,dispersion:dt,retroreflection:Ye,iridescence:xe,iridescenceMap:re,iridescenceThicknessMap:ge,sheen:mt,sheenColorMap:be,sheenRoughnessMap:q,specularMap:ee,specularColorMap:me,specularIntensityMap:N,transmission:Be,transmissionMap:Q,thicknessMap:j,gradientMap:ye,opaque:x.transparent===!1&&x.blending===ka&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:ve,alphaHash:he,combine:x.combine,mapUv:oe&&d(x.map.channel),aoMapUv:Ce&&d(x.aoMap.channel),lightMapUv:Ve&&d(x.lightMap.channel),bumpMapUv:K&&d(x.bumpMap.channel),normalMapUv:Qe&&d(x.normalMap.channel),displacementMapUv:Nt&&d(x.displacementMap.channel),emissiveMapUv:ct&&d(x.emissiveMap.channel),metalnessMapUv:nt&&d(x.metalnessMap.channel),roughnessMapUv:Jt&&d(x.roughnessMap.channel),anisotropyMapUv:We&&d(x.anisotropyMap.channel),clearcoatMapUv:P&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(x.sheenRoughnessMap.channel),specularMapUv:ee&&d(x.specularMap.channel),specularColorMapUv:me&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:Q&&d(x.transmissionMap.channel),thicknessMapUv:j&&d(x.thicknessMap.channel),alphaMapUv:de&&d(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Qe||nn),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(oe||de),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&Qe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:fe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(ne=>ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:ct&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)S.push(R),S.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(S,x),g(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let S=f[x.type],R;if(S){let A=Er[S];R=Tx.clone(A.uniforms)}else R=x.uniforms;return R}function b(x,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new cE(r,S,x,i),c.push(R),u.set(S,R)),R}function v(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:T}}function dE(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function pE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Wx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xx(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,g){let y=r[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},r[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=g),e++,y}function l(f,d,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let b=a(f,d,p,_,m,g);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):t.push(b)}function c(f,d,p,_,m,g){let y=a(f,d,p,_,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||pE),n.length>1&&n.sort(d||Wx),i.length>1&&i.sort(d||Wx)}function h(){for(let f=e,d=r.length;f<d;f++){let p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function mE(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Xx,r.set(n,[o])):i>=s.length?(o=new Xx,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function gE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ge};break;case"SpotLight":t={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function _E(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var xE=0;function yE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vE(r){let e=new gE,t=_E(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,s=new qe,o=new qe;function a(c){let u=0,h=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,y=0,b=0,v=0,M=0,T=0,x=0,S=0,R=0,A=0;c.sort(yE);for(let L=0,O=c.length;L<O;L++){let C=c[L],F=C.color,k=C.intensity,U=C.distance,$=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Os?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=F.r*k,h+=F.g*k,f+=F.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],k);A++}else if(C.isSunLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let I=C.shadow,J=t.get(C);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=$;let fe=I.getViewportCount();for(let Ee=0;Ee<fe;Ee++)n.sunShadowMatrix[_+Ee]=I.getMatrix(Ee),n.sunShadowCascade[_+Ee]=I._cascadeData[Ee];_+=fe,p++}n.sun[d]=G,d++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let I=C.shadow,J=t.get(C);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=C.shadow.matrix,M++}n.directional[m]=G,m++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=U,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[y]=G;let I=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,I.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[y]=I.matrix,C.castShadow){let J=t.get(C);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=$,x++}y++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=G,b++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let I=C.shadow,J=t.get(C);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,J.shadowCameraNear=I.camera.near,J.shadowCameraFar=I.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[v]=G,v++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==b||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=b,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.sunLength=d,D.directionalLength=m,D.pointLength=g,D.spotLength=y,D.rectAreaLength=b,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=A,n.version=xE++)}function l(c,u){let h=0,f=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let v=c[y];if(v.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),h++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function qx(r){let e=new vE(r),t=[],n=[],i=[];function s(h){u.camera=h,t.length=0,n.length=0,i.length=0}function o(h){h.isLightProbeGrid?i.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),i.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function SE(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new qx(r),e.set(i,[a])):s>=o.length?(a=new qx(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ME=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bE=`uniform sampler2D shadow_pass;
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
}`,TE=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],wE=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Yx=new qe,bc=new z,am=new z;function EE(r,e,t){let n=new Is,i=new je,s=new je,o=new yt,a=new fh,l=new dh,c={},u=t.maxTextureSize,h={[Mr]:On,[On]:Mr,[Un]:Un},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:ME,fragmentShader:bE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new pn;p.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let g=this.type;this.render=function(T,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===G_&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Eo);let R=r.getRenderTarget(),A=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Ao),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=g!==this.type;O&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=T.length;C<F;C++){let k=T[C],U=k.shadow;if(U===void 0){He("WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let $=U.getFrameExtents();i.multiply($),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,U.mapSize.y=s.y));let G=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=G,U.map===null||O===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ba){if(k.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ni(i.x,i.y,{format:Os,type:ui,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),U.map.texture.name=k.name+".shadowMap",U.map.depthTexture=new Jr(i.x,i.y,Jn),U.map.depthTexture.name=k.name+".shadowMapDepth",U.map.depthTexture.format=Kr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=sn,U.map.depthTexture.magFilter=sn}else k.isPointLight?(U.map=new wc(i.x),U.map.depthTexture=new nc(i.x,cr)):(U.map=new Ni(i.x,i.y),U.map.depthTexture=new Jr(i.x,i.y,cr)),U.map.depthTexture.name=k.name+".shadowMap",U.map.depthTexture.format=Kr,this.type===Eo?(U.map.depthTexture.compareFunction=G?Kp:Yp,U.map.depthTexture.minFilter=Ut,U.map.depthTexture.magFilter=Ut):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=sn,U.map.depthTexture.magFilter=sn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let I=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();k.isPointLight!==!0&&U.updateMatrices(k,S);let J=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:S.layers;for(let fe=0;fe<I;fe++){let Ee=U.getCamera(fe);if(k.isPointLight){let X=U.camera,ue=U.matrix,Me=k.distance||X.far;Me!==X.far&&(X.far=Me,X.updateProjectionMatrix()),bc.setFromMatrixPosition(k.matrixWorld),X.position.copy(bc),am.copy(X.position),am.add(TE[fe]),X.up.copy(wE[fe]),X.lookAt(am),X.updateMatrixWorld(),ue.makeTranslation(-bc.x,-bc.y,-bc.z),Yx.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Yx,X.coordinateSystem,X.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,fe),r.clear();else{fe===0&&(r.setRenderTarget(U.map),r.clear());let X=U.getViewport(fe);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),L.viewport(o)}n=U.getFrustum(fe),v(x,S,Ee,k,J,this.type)}U.isPointLightShadow!==!0&&this.type===Ba&&y(U,S),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(R,A,D)};function y(T,x){let S=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ni(i.x,i.y,{format:Os,type:ui}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(x,null,S,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(x,null,S,d,_,null)}function b(T,x,S,R){let A=null,D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=A.uuid,O=x.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let F=C[O];F===void 0&&(F=A.clone(),C[O]=F,x.addEventListener("dispose",M)),A=F}if(A.visible=x.visible,A.wireframe=x.wireframe,R===Ba?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:h[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=r.properties.get(A);L.light=S}return A}function v(T,x,S,R,A,D){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Ba)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let C=e.update(T),F=T.material;if(Array.isArray(F)){let k=C.groups;for(let U=0,$=k.length;U<$;U++){let G=k[U],I=F[G.materialIndex];if(I&&I.visible){let J=b(T,I,R,D);T.onBeforeShadow(r,T,x,S,C,J,G),r.renderBufferDirect(S,null,C,J,T,G),T.onAfterShadow(r,T,x,S,C,J,G)}}}else if(F.visible){let k=b(T,F,R,D);T.onBeforeShadow(r,T,x,S,C,k,null),r.renderBufferDirect(S,null,C,k,T,null),T.onAfterShadow(r,T,x,S,C,k,null)}}let O=T.children;for(let C=0,F=O.length;C<F;C++)v(O[C],x,S,R,A,D)}function M(T){T.target.removeEventListener("dispose",M);for(let S in c){let R=c[S],A=T.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function AE(r,e){function t(){let N=!1,Q=new yt,j=null,ye=new yt(0,0,0,0);return{setMask:function(de){j!==de&&!N&&(r.colorMask(de,de,de,de),j=de)},setLocked:function(de){N=de},setClear:function(de,ve,he,Se,se){se===!0&&(de*=Se,ve*=Se,he*=Se),Q.set(de,ve,he,Se),ye.equals(Q)===!1&&(r.clearColor(de,ve,he,Se),ye.copy(Q))},reset:function(){N=!1,j=null,ye.set(-1,0,0,0)}}}function n(){let N=!1,Q=!1,j=null,ye=null,de=null;return{setReversed:function(ve){if(Q!==ve){let he=e.get("EXT_clip_control");ve?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),Q=ve;let Se=de;de=null,this.setClear(Se)}},getReversed:function(){return Q},setTest:function(ve){ve?pe(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(ve){j!==ve&&!N&&(r.depthMask(ve),j=ve)},setFunc:function(ve){if(Q&&(ve=Mx[ve]),ye!==ve){switch(ve){case ju:r.depthFunc(r.NEVER);break;case Qu:r.depthFunc(r.ALWAYS);break;case eh:r.depthFunc(r.LESS);break;case Ta:r.depthFunc(r.LEQUAL);break;case th:r.depthFunc(r.EQUAL);break;case nh:r.depthFunc(r.GEQUAL);break;case ih:r.depthFunc(r.GREATER);break;case rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ye=ve}},setLocked:function(ve){N=ve},setClear:function(ve){de!==ve&&(de=ve,Q&&(ve=1-ve),r.clearDepth(ve))},reset:function(){N=!1,j=null,ye=null,de=null,Q=!1}}}function i(){let N=!1,Q=null,j=null,ye=null,de=null,ve=null,he=null,Se=null,se=null;return{setTest:function(te){N||(te?pe(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(te){Q!==te&&!N&&(r.stencilMask(te),Q=te)},setFunc:function(te,we,ne){(j!==te||ye!==we||de!==ne)&&(r.stencilFunc(te,we,ne),j=te,ye=we,de=ne)},setOp:function(te,we,ne){(ve!==te||he!==we||Se!==ne)&&(r.stencilOp(te,we,ne),ve=te,he=we,Se=ne)},setLocked:function(te){N=te},setClear:function(te){se!==te&&(r.clearStencil(te),se=te)},reset:function(){N=!1,Q=null,j=null,ye=null,de=null,ve=null,he=null,Se=null,se=null}}}let s=new t,o=new n,a=new i,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,b=null,v=null,M=null,T=null,x=null,S=new Ge(0,0,0),R=0,A=!1,D=null,L=null,O=null,C=null,F=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,$=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=$>=2);let I=null,J={},fe=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),X=new yt().fromArray(fe),ue=new yt().fromArray(Ee);function Me(N,Q,j,ye){let de=new Uint8Array(4),ve=r.createTexture();r.bindTexture(N,ve),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let he=0;he<j;he++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,ye,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(Q+he,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return ve}let Te={};Te[r.TEXTURE_2D]=Me(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=Me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=Me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=Me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(r.DEPTH_TEST),o.setFunc(Ta),K(!1),Qe(Ap),pe(r.CULL_FACE),Ce(Ao);function pe(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function ae(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function ke(N,Q){return f[N]!==Q?(r.bindFramebuffer(N,Q),f[N]=Q,N===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Q),N===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function oe(N,Q){let j=p,ye=!1;if(N){j=d.get(Q),j===void 0&&(j=[],d.set(Q,j));let de=N.textures;if(j.length!==de.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,he=de.length;ve<he;ve++)j[ve]=r.COLOR_ATTACHMENT0+ve;j.length=de.length,ye=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,ye=!0);ye&&r.drawBuffers(j)}function ie(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let le={[Ro]:r.FUNC_ADD,[W_]:r.FUNC_SUBTRACT,[X_]:r.FUNC_REVERSE_SUBTRACT};le[q_]=r.MIN,le[Y_]=r.MAX;let _e={[K_]:r.ZERO,[Z_]:r.ONE,[J_]:r.SRC_COLOR,[Ip]:r.SRC_ALPHA,[nx]:r.SRC_ALPHA_SATURATE,[ex]:r.DST_COLOR,[j_]:r.DST_ALPHA,[$_]:r.ONE_MINUS_SRC_COLOR,[Lp]:r.ONE_MINUS_SRC_ALPHA,[tx]:r.ONE_MINUS_DST_COLOR,[Q_]:r.ONE_MINUS_DST_ALPHA,[ix]:r.CONSTANT_COLOR,[rx]:r.ONE_MINUS_CONSTANT_COLOR,[sx]:r.CONSTANT_ALPHA,[ox]:r.ONE_MINUS_CONSTANT_ALPHA};function Ce(N,Q,j,ye,de,ve,he,Se,se,te){if(N===Ao){m===!0&&(ae(r.BLEND),m=!1);return}if(m===!1&&(pe(r.BLEND),m=!0),N!==V_){if(N!==g||te!==A){if((y!==Ro||M!==Ro)&&(r.blendEquation(r.FUNC_ADD),y=Ro,M=Ro),te)switch(N){case ka:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rp:r.blendFunc(r.ONE,r.ONE);break;case Cp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",N);break}else switch(N){case ka:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Cp:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pp:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",N);break}b=null,v=null,T=null,x=null,S.set(0,0,0),R=0,g=N,A=te}return}de=de||Q,ve=ve||j,he=he||ye,(Q!==y||de!==M)&&(r.blendEquationSeparate(le[Q],le[de]),y=Q,M=de),(j!==b||ye!==v||ve!==T||he!==x)&&(r.blendFuncSeparate(_e[j],_e[ye],_e[ve],_e[he]),b=j,v=ye,T=ve,x=he),(Se.equals(S)===!1||se!==R)&&(r.blendColor(Se.r,Se.g,Se.b,se),S.copy(Se),R=se),g=N,A=!1}function Ve(N,Q){N.side===Un?ae(r.CULL_FACE):pe(r.CULL_FACE);let j=N.side===On;Q&&(j=!j),K(j),N.blending===ka&&N.transparent===!1?Ce(Ao):Ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let ye=N.stencilWrite;a.setTest(ye),ye&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function Qe(N){N!==z_?(pe(r.CULL_FACE),N!==L&&(N===Ap?r.cullFace(r.BACK):N===H_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),L=N}function Nt(N){N!==O&&(U&&r.lineWidth(N),O=N)}function ct(N,Q,j){N?(pe(r.POLYGON_OFFSET_FILL),(C!==Q||F!==j)&&(C=Q,F=j,o.getReversed()&&(Q=-Q,j=-j),r.polygonOffset(Q,j))):ae(r.POLYGON_OFFSET_FILL)}function nt(N){N?pe(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function Jt(N){N===void 0&&(N=r.TEXTURE0+k-1),I!==N&&(r.activeTexture(N),I=N)}function nn(N,Q,j){j===void 0&&(I===null?j=r.TEXTURE0+k-1:j=I);let ye=J[j];ye===void 0&&(ye={type:void 0,texture:void 0},J[j]=ye),(ye.type!==N||ye.texture!==Q)&&(I!==j&&(r.activeTexture(j),I=j),r.bindTexture(N,Q||Te[N]),ye.type=N,ye.texture=Q)}function H(){let N=J[I];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _t(){try{r.compressedTexImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function dt(){try{r.compressedTexImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Ye(){try{r.texSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function xe(){try{r.texSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Be(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function We(){try{r.texStorage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function P(){try{r.texStorage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function w(){try{r.texImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function W(){try{r.texImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ce(N){return h[N]!==void 0?h[N]:r.getParameter(N)}function re(N,Q){h[N]!==Q&&(r.pixelStorei(N,Q),h[N]=Q)}function ge(N){X.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),X.copy(N))}function be(N){ue.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ue.copy(N))}function q(N,Q){let j=c.get(Q);j===void 0&&(j=new WeakMap,c.set(Q,j));let ye=j.get(N);ye===void 0&&(ye=r.getUniformBlockIndex(Q,N.name),r.uniformBlockBinding(Q,ye,ye),j.set(N,ye))}function ee(N,Q,j){let de=c.get(Q).get(N);l[de]!==j&&(r.bindBufferBase(r.UNIFORM_BUFFER,de,j),l[de]=j)}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},I=null,J={},f={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,b=null,v=null,M=null,T=null,x=null,S=new Ge(0,0,0),R=0,A=!1,D=null,L=null,O=null,C=null,F=null,X.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:ae,bindFramebuffer:ke,drawBuffers:oe,useProgram:ie,setBlending:Ce,setMaterial:Ve,setFlipSided:K,setCullFace:Qe,setLineWidth:Nt,setPolygonOffset:ct,setScissorTest:nt,activeTexture:Jt,bindTexture:nn,unbindTexture:H,compressedTexImage2D:_t,compressedTexImage3D:dt,texImage2D:w,texImage3D:W,pixelStorei:re,getParameter:ce,updateUBOMapping:q,uniformBlockBinding:ee,texStorage2D:We,texStorage3D:P,texSubImage2D:Ye,texSubImage3D:xe,compressedTexSubImage2D:mt,compressedTexSubImage3D:Be,scissor:ge,viewport:be,reset:me}}function RE(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,h=new Set,f,d=new WeakMap,p=new Set,_=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return m?new OffscreenCanvas(P,w):Aa("canvas")}function y(P,w,W){let ce=1,re=We(P);if((re.width>W||re.height>W)&&(ce=W/Math.max(re.width,re.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ge=Math.floor(ce*re.width),be=Math.floor(ce*re.height);f===void 0&&(f=g(ge,be));let q=w?g(ge,be):f;return q.width=ge,q.height=be,q.getContext("2d").drawImage(P,0,0,ge,be),He("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ge+"x"+be+")."),q}else return"data"in P&&He("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function b(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(P,w,W,ce,re,ge=!1){if(P!==null){if(r[P]!==void 0)return r[P];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let be;ce&&(be=e.get("EXT_texture_norm16"),be||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=w;if(w===r.RED&&(W===r.FLOAT&&(q=r.R32F),W===r.HALF_FLOAT&&(q=r.R16F),W===r.UNSIGNED_BYTE&&(q=r.R8),W===r.UNSIGNED_SHORT&&be&&(q=be.R16_EXT),W===r.SHORT&&be&&(q=be.R16_SNORM_EXT)),w===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.R8UI),W===r.UNSIGNED_SHORT&&(q=r.R16UI),W===r.UNSIGNED_INT&&(q=r.R32UI),W===r.BYTE&&(q=r.R8I),W===r.SHORT&&(q=r.R16I),W===r.INT&&(q=r.R32I)),w===r.RG&&(W===r.FLOAT&&(q=r.RG32F),W===r.HALF_FLOAT&&(q=r.RG16F),W===r.UNSIGNED_BYTE&&(q=r.RG8),W===r.UNSIGNED_SHORT&&be&&(q=be.RG16_EXT),W===r.SHORT&&be&&(q=be.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.RG8UI),W===r.UNSIGNED_SHORT&&(q=r.RG16UI),W===r.UNSIGNED_INT&&(q=r.RG32UI),W===r.BYTE&&(q=r.RG8I),W===r.SHORT&&(q=r.RG16I),W===r.INT&&(q=r.RG32I)),w===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.RGB8UI),W===r.UNSIGNED_SHORT&&(q=r.RGB16UI),W===r.UNSIGNED_INT&&(q=r.RGB32UI),W===r.BYTE&&(q=r.RGB8I),W===r.SHORT&&(q=r.RGB16I),W===r.INT&&(q=r.RGB32I)),w===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),W===r.UNSIGNED_INT&&(q=r.RGBA32UI),W===r.BYTE&&(q=r.RGBA8I),W===r.SHORT&&(q=r.RGBA16I),W===r.INT&&(q=r.RGBA32I)),w===r.RGB&&(W===r.UNSIGNED_SHORT&&be&&(q=be.RGB16_EXT),W===r.SHORT&&be&&(q=be.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),w===r.RGBA){let ee=ge?ql:st.getTransfer(re);W===r.FLOAT&&(q=r.RGBA32F),W===r.HALF_FLOAT&&(q=r.RGBA16F),W===r.UNSIGNED_BYTE&&(q=ee===Mt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&be&&(q=be.RGBA16_EXT),W===r.SHORT&&be&&(q=be.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(P,w){let W;return P?w===null||w===cr||w===Lo?W=r.DEPTH24_STENCIL8:w===Jn?W=r.DEPTH32F_STENCIL8:w===Ga&&(W=r.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===cr||w===Lo?W=r.DEPTH_COMPONENT24:w===Jn?W=r.DEPTH_COMPONENT32F:w===Ga&&(W=r.DEPTH_COMPONENT16),W}function S(P,w){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==Ut?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){let w=new WeakRef(P);n.get(P).__ref=w,p.add(w),_.register(P,w,w)}function A(P){let w=n.get(P).__ref;w!==void 0&&(p.delete(w),_.unregister(w))}function D(P){O(P.target)}function L(P){C(P.target)}function O(P){P.removeEventListener("dispose",D),A(P),k(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function C(P){P.removeEventListener("dispose",L),A(P),$(P)}function F(){for(let P of p){let w=P.deref();w!==void 0&&(w.isRenderTarget===!0?C(w):O(w))}p.clear(),h.clear()}function k(P){let w=n.get(P);if(w.__webglInit===void 0)return;let W=P.source,ce=d.get(W);if(ce){let re=ce[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&U(P),Object.keys(ce).length===0&&d.delete(W)}n.remove(P)}function U(P){let w=n.get(P);r.deleteTexture(w.__webglTexture);let W=P.source,ce=d.get(W);delete ce[w.__cacheKey],o.memory.textures--}function $(P){let w=n.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();let W=P.depthTexture;if(W&&W.renderTarget===P&&O(W),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let ge=0;ge<w.__webglFramebuffer[re].length;ge++)r.deleteFramebuffer(w.__webglFramebuffer[re][ge]);else r.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)r.deleteFramebuffer(w.__webglFramebuffer[re]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ce=P.textures;for(let re=0,ge=ce.length;re<ge;re++){let be=n.get(ce[re]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(ce[re])}n.remove(P)}let G=0;function I(){G=0}function J(){return G}function fe(P){G=P}function Ee(){let P=G;return P>=i.maxTextures&&He("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),G+=1,P}function X(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function ue(P,w){let W=n.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let ce=P.image;if(ce===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(W,P,w);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+w)}function Me(P,w){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Ve(W,P,w);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+w)}function Te(P,w){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Ve(W,P,w);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+w)}function pe(P,w){let W=n.get(P);if(P.version>0&&W.__version!==P.version){K(W,P,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+w)}let ae={[qi]:r.REPEAT,[xi]:r.CLAMP_TO_EDGE,[wa]:r.MIRRORED_REPEAT},ke={[sn]:r.NEAREST,[wh]:r.NEAREST_MIPMAP_NEAREST,[Io]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[Ha]:r.LINEAR_MIPMAP_NEAREST,[Ui]:r.LINEAR_MIPMAP_LINEAR},oe={[px]:r.NEVER,[Zp]:r.ALWAYS,[mx]:r.LESS,[Yp]:r.LEQUAL,[gx]:r.EQUAL,[Kp]:r.GEQUAL,[_x]:r.GREATER,[xx]:r.NOTEQUAL};function ie(P,w){if(w.type===Jn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ut||w.magFilter===Ha||w.magFilter===Io||w.magFilter===Ui||w.minFilter===Ut||w.minFilter===Ha||w.minFilter===Io||w.minFilter===Ui)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ae[w.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ae[w.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ae[w.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ke[w.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ke[w.minFilter]),w.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,oe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==Io&&w.minFilter!==Ui||w.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function le(P,w){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",D),R(w));let ce=w.source,re=d.get(ce);re===void 0&&(re={},d.set(ce,re));let ge=X(w);if(ge!==P.__cacheKey){re[ge]===void 0&&(re[ge]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[ge].usedTimes++;let be=re[P.__cacheKey];be!==void 0&&(re[P.__cacheKey].usedTimes--,be.usedTimes===0&&U(w)),P.__cacheKey=ge,P.__webglTexture=re[ge].texture}return W}function _e(P,w,W){return Math.floor(Math.floor(P/W)/w)}function Ce(P,w,W,ce){let ge=P.updateRanges;if(ge.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,W,ce,w.data);else{ge.sort((N,Q)=>N.start-Q.start);let be=0;for(let N=1;N<ge.length;N++){let Q=ge[be],j=ge[N],ye=Q.start+Q.count,de=_e(j.start,w.width,4),ve=_e(Q.start,w.width,4);j.start<=ye+1&&de===ve&&_e(j.start+j.count-1,w.width,4)===de?Q.count=Math.max(Q.count,j.start+j.count-Q.start):(++be,ge[be]=j)}ge.length=be+1;let q=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let N=0,Q=ge.length;N<Q;N++){let j=ge[N],ye=Math.floor(j.start/4),de=Math.ceil(j.count/4),ve=ye%w.width,he=Math.floor(ye/w.width),Se=de,se=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(r.UNPACK_SKIP_ROWS,he),t.texSubImage2D(r.TEXTURE_2D,0,ve,he,Se,se,W,ce,w.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,q),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,me)}}function Ve(P,w,W){let ce=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=r.TEXTURE_3D);let re=le(P,w),ge=w.source;t.bindTexture(ce,P.__webglTexture,r.TEXTURE0+W);let be=n.get(ge);if(ge.version!==be.__version||re===!0){if(t.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let se=st.getPrimaries(st.workingColorSpace),te=w.colorSpace===rs?null:st.getPrimaries(w.colorSpace),we=w.colorSpace===rs||se===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let ee=y(w.image,!1,i.maxTextureSize);ee=Be(w,ee);let me=s.convert(w.format,w.colorSpace),N=s.convert(w.type),Q=T(w.internalFormat,me,N,w.normalized,w.colorSpace,w.isVideoTexture);ie(ce,w);let j,ye=w.mipmaps,de=w.isVideoTexture!==!0,ve=be.__version===void 0||re===!0,he=ge.dataReady,Se=S(w,ee);if(w.isDepthTexture)Q=x(w.format===is,w.type),ve&&(de?t.texStorage2D(r.TEXTURE_2D,1,Q,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Q,ee.width,ee.height,0,me,N,null));else if(w.isDataTexture)if(ye.length>0){de&&ve&&t.texStorage2D(r.TEXTURE_2D,Se,Q,ye[0].width,ye[0].height);for(let se=0,te=ye.length;se<te;se++)j=ye[se],de?he&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,j.width,j.height,me,N,j.data):t.texImage2D(r.TEXTURE_2D,se,Q,j.width,j.height,0,me,N,j.data);w.generateMipmaps=!1}else de?(ve&&t.texStorage2D(r.TEXTURE_2D,Se,Q,ee.width,ee.height),he&&Ce(w,ee,me,N)):t.texImage2D(r.TEXTURE_2D,0,Q,ee.width,ee.height,0,me,N,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){de&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Q,ye[0].width,ye[0].height,ee.depth);for(let se=0,te=ye.length;se<te;se++)if(j=ye[se],w.format!==Ji)if(me!==null)if(de){if(he)if(w.layerUpdates.size>0){let we=sm(j.width,j.height,w.format,w.type);for(let ne of w.layerUpdates){let Le=j.data.subarray(ne*we/j.data.BYTES_PER_ELEMENT,(ne+1)*we/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,ne,j.width,j.height,1,me,Le)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,j.width,j.height,ee.depth,me,j.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,Q,j.width,j.height,ee.depth,0,j.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?he&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,j.width,j.height,ee.depth,me,N,j.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,Q,j.width,j.height,ee.depth,0,me,N,j.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{de&&ve&&t.texStorage2D(r.TEXTURE_2D,Se,Q,ye[0].width,ye[0].height);for(let se=0,te=ye.length;se<te;se++)j=ye[se],w.format!==Ji?me!==null?de?he&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,j.width,j.height,me,j.data):t.compressedTexImage2D(r.TEXTURE_2D,se,Q,j.width,j.height,0,j.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?he&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,j.width,j.height,me,N,j.data):t.texImage2D(r.TEXTURE_2D,se,Q,j.width,j.height,0,me,N,j.data)}else if(w.isDataArrayTexture)if(de){if(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Q,ee.width,ee.height,ee.depth),he)if(w.layerUpdates.size>0){let se=sm(ee.width,ee.height,w.format,w.type);for(let te of w.layerUpdates){let we=ee.data.subarray(te*se/ee.data.BYTES_PER_ELEMENT,(te+1)*se/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ee.width,ee.height,1,me,N,we)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,N,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,ee.width,ee.height,ee.depth,0,me,N,ee.data);else if(w.isData3DTexture)de?(ve&&t.texStorage3D(r.TEXTURE_3D,Se,Q,ee.width,ee.height,ee.depth),he&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,N,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Q,ee.width,ee.height,ee.depth,0,me,N,ee.data);else if(w.isFramebufferTexture){if(ve)if(de)t.texStorage2D(r.TEXTURE_2D,Se,Q,ee.width,ee.height);else{let se=ee.width,te=ee.height;for(let we=0;we<Se;we++)t.texImage2D(r.TEXTURE_2D,we,Q,se,te,0,me,N,null),se>>=1,te>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){let se=r.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ee.parentNode!==se){se.appendChild(ee),h.add(w),se.onpaint=te=>{let we=te.changedElements;for(let ne of h)we.includes(ne.image)&&(ne.needsUpdate=!0)},se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{let we=r.RGBA,ne=r.RGBA,Le=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,we,ne,Le,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ye.length>0){if(de&&ve){let se=We(ye[0]);t.texStorage2D(r.TEXTURE_2D,Se,Q,se.width,se.height)}for(let se=0,te=ye.length;se<te;se++)j=ye[se],de?he&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,me,N,j):t.texImage2D(r.TEXTURE_2D,se,Q,me,N,j);w.generateMipmaps=!1}else if(de){if(ve){let se=We(ee);t.texStorage2D(r.TEXTURE_2D,Se,Q,se.width,se.height)}he&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,N,ee)}else t.texImage2D(r.TEXTURE_2D,0,Q,me,N,ee);b(w)&&w.mipmapsAutoUpdate===!0&&v(ce),be.__version=ge.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function K(P,w,W){if(w.image.length!==6)return;let ce=le(P,w),re=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);let ge=n.get(re);if(re.version!==ge.__version||ce===!0){t.activeTexture(r.TEXTURE0+W);let be=st.getPrimaries(st.workingColorSpace),q=w.colorSpace===rs?null:st.getPrimaries(w.colorSpace),ee=w.colorSpace===rs||be===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let me=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!me&&!N?Q[ne]=y(w.image[ne],!0,i.maxCubemapSize):Q[ne]=N?w.image[ne].image:w.image[ne],Q[ne]=Be(w,Q[ne]);let j=Q[0],ye=s.convert(w.format,w.colorSpace),de=s.convert(w.type),ve=T(w.internalFormat,ye,de,w.normalized,w.colorSpace),he=w.isVideoTexture!==!0,Se=ge.__version===void 0||ce===!0,se=re.dataReady,te=S(w,j);ie(r.TEXTURE_CUBE_MAP,w);let we;if(w.isDepthTexture){if(ve=x(w.format===is,w.type),Se)if(he)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,ve,j.width,j.height);else for(let ne=0;ne<6;ne++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ve,j.width,j.height,0,ye,de,null)}else if(me){he&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,ve,j.width,j.height);for(let ne=0;ne<6;ne++){we=Q[ne].mipmaps;for(let Le=0;Le<we.length;Le++){let lt=we[Le];w.format!==Ji?ye!==null?he?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,lt.width,lt.height,ye,lt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,ve,lt.width,lt.height,0,lt.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,lt.width,lt.height,ye,de,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,ve,lt.width,lt.height,0,ye,de,lt.data)}}}else{if(we=w.mipmaps,he&&Se){we.length>0&&te++;let ne=We(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(N){he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,ye,de,Q[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ve,Q[ne].width,Q[ne].height,0,ye,de,Q[ne].data);for(let Le=0;Le<we.length;Le++){let Ze=we[Le].image[ne].image;he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,Ze.width,Ze.height,ye,de,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,ve,Ze.width,Ze.height,0,ye,de,Ze.data)}}else{he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ye,de,Q[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ve,ye,de,Q[ne]);for(let Le=0;Le<we.length;Le++){let lt=we[Le];he?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,ye,de,lt.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,ve,ye,de,lt.image[ne])}}}b(w)&&w.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),ge.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Qe(P,w,W,ce,re,ge){let be=s.convert(W.format,W.colorSpace),q=s.convert(W.type),ee=T(W.internalFormat,be,q,W.normalized,W.colorSpace),me=n.get(w),N=n.get(W);if(N.__renderTarget=w,!me.__hasExternalTextures){let Q=Math.max(1,w.width>>ge),j=Math.max(1,w.height>>ge);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,ge,ee,Q,j,w.depth,0,be,q,null):t.texImage2D(re,ge,ee,Q,j,0,be,q,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),xe(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,re,N.__webglTexture,0,Ye(w)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,re,N.__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(P,w,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),w.depthBuffer){let ce=w.depthTexture,re=ce&&ce.isDepthTexture?ce.type:null,ge=x(w.stencilBuffer,re),be=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xe(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(w),ge,w.width,w.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(w),ge,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ge,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,P)}else{let ce=w.textures;for(let re=0;re<ce.length;re++){let ge=ce[re],be=s.convert(ge.format,ge.colorSpace),q=s.convert(ge.type),ee=T(ge.internalFormat,be,q,ge.normalized,ge.colorSpace);xe(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(w),ee,w.width,w.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(w),ee,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ee,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(P,w,W){let ce=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(w.depthTexture);re.__renderTarget=w;let ge=ce?w.depthTexture.image[0]:w.depthTexture.image;(!re.__webglTexture||ge.width!==w.width||ge.height!==w.height)&&(ge.width=w.width,ge.height=w.height,w.depthTexture.needsUpdate=!0),ce?pe(w.depthTexture,0):ue(w.depthTexture,0);let be=re.__webglTexture,q=Ye(w),ee=ce?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,me=w.depthTexture.format===is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===Kr)xe(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ee,be,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,me,ee,be,0);else if(w.depthTexture.format===is)xe(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ee,be,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,me,ee,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(P){let w=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let ce=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ce){let re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ce.removeEventListener("dispose",re)};ce.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=ce}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let ce=0;ce<6;ce++)ct(w.__webglFramebuffer[ce],P,ce);else P.texture.mipmaps.length>0?ct(w.__webglFramebuffer[0],P,0):ct(w.__webglFramebuffer,P,0);else if(W){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]===void 0)w.__webglDepthbuffer[ce]=r.createRenderbuffer(),Nt(w.__webglDepthbuffer[ce],P,!1);else{let re=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,ge)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Nt(w.__webglDepthbuffer,P,!1);else{let re=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,ge)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(P,w,W){let ce=n.get(P);w!==void 0&&Qe(ce.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&nt(P)}function nn(P){let w=P.texture,W=n.get(P),ce=n.get(w);P.addEventListener("dispose",L),R(P);let re=P.textures,ge=P.isWebGLCubeRenderTarget===!0,be=re.length>1;if(be||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=w.version,o.memory.textures++),ge){W.__webglFramebuffer=[];for(let q=0;q<6;q++)if(w.mipmaps.length>0){W.__webglFramebuffer[q]=[];for(let ee=0;ee<w.mipmaps.length;ee++)W.__webglFramebuffer[q][ee]=r.createFramebuffer()}else W.__webglFramebuffer[q]=r.createFramebuffer()}else{if(w.mipmaps.length>0){W.__webglFramebuffer=[];for(let q=0;q<w.mipmaps.length;q++)W.__webglFramebuffer[q]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(be)for(let q=0,ee=re.length;q<ee;q++){let me=n.get(re[q]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&xe(P)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let q=0;q<re.length;q++){let ee=re[q];W.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let me=s.convert(ee.format,ee.colorSpace),N=s.convert(ee.type),Q=T(ee.internalFormat,me,N,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),j=Ye(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,Q,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,W.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),ie(r.TEXTURE_CUBE_MAP,w);for(let q=0;q<6;q++)if(w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)Qe(W.__webglFramebuffer[q][ee],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee);else Qe(W.__webglFramebuffer[q],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);b(w)?v(r.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(be){for(let q=0,ee=re.length;q<ee;q++){let me=re[q],N=n.get(me),Q=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),ie(Q,me),Qe(W.__webglFramebuffer,P,me,r.COLOR_ATTACHMENT0+q,Q,0),b(me)&&v(Q)}t.unbindTexture()}else{let q=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(q,ce.__webglTexture),ie(q,w),w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)Qe(W.__webglFramebuffer[ee],P,w,r.COLOR_ATTACHMENT0,q,ee);else Qe(W.__webglFramebuffer,P,w,r.COLOR_ATTACHMENT0,q,0);b(w)?v(q):w.mipmaps.length>0&&r.texParameteri(q,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&nt(P)}function H(P){let w=P.textures;for(let W=0,ce=w.length;W<ce;W++){let re=w[W];if(b(re)&&re.mipmapsAutoUpdate===!0){let ge=M(P),be=n.get(re).__webglTexture;t.bindTexture(ge,be),v(ge),t.unbindTexture()}}}let _t=[];function dt(P){if(P.samples>0){if(xe(P)===!1){let w=P.textures,W=P.width,ce=P.height,re=r.COLOR_BUFFER_BIT,ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=n.get(P),q=w.length>1;if(q)for(let me=0;me<w.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let me=0;me<w.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,be.__webglColorRenderbuffer[me]);let N=n.get(w[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,W,ce,0,0,W,ce,re,r.NEAREST),l===!0&&(_t.length=0,_t.push(r.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&_t.push(ge),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let me=0;me<w.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,be.__webglColorRenderbuffer[me]);let N=n.get(w[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let w=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ye(P){return Math.min(i.maxSamples,P.samples)}function xe(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function mt(P){let w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Be(P,w){let W=P.colorSpace,ce=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Dn&&W!==rs&&(st.getTransfer(W)===Mt?(ce!==Ji||re!==Mi)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",W)),w}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ee,this.resetTextureUnits=I,this.getTextureUnits=J,this.setTextureUnits=fe,this.setTexture2D=ue,this.setTexture2DArray=Me,this.setTexture3D=Te,this.setTextureCube=pe,this.rebindTextures=Jt,this.setupRenderTarget=nn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=xe,this.dispose=F}function CE(r,e){function t(n,i=rs){let s,o=st.getTransfer(i);if(n===Mi)return r.UNSIGNED_BYTE;if(n===Ah)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Rh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===zp)return r.BYTE;if(n===Hp)return r.SHORT;if(n===Ga)return r.UNSIGNED_SHORT;if(n===Eh)return r.INT;if(n===cr)return r.UNSIGNED_INT;if(n===Jn)return r.FLOAT;if(n===ui)return r.HALF_FLOAT;if(n===Wp)return r.ALPHA;if(n===Xp)return r.RGB;if(n===Ji)return r.RGBA;if(n===Kr)return r.DEPTH_COMPONENT;if(n===is)return r.DEPTH_STENCIL;if(n===Ch)return r.RED;if(n===Ph)return r.RED_INTEGER;if(n===Os)return r.RG;if(n===Ih)return r.RG_INTEGER;if(n===Lh)return r.RGBA_INTEGER;if(n===mc||n===gc||n===_c||n===xc)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dh||n===Nh||n===Oh||n===Uh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fh||n===Bh||n===kh||n===zh||n===Hh||n===yc||n===Gh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fh||n===Bh)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zh)return s.COMPRESSED_R11_EAC;if(n===Hh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yc)return s.COMPRESSED_RG11_EAC;if(n===Gh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vh||n===Wh||n===Xh||n===qh||n===Yh||n===Kh||n===Zh||n===Jh||n===$h||n===jh||n===Qh||n===ef||n===tf||n===nf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$h)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ef)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rf||n===sf||n===of)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===rf)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===of)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===af||n===lf||n===vc||n===cf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===af)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var PE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`,pm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ic(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zi({vertexShader:PE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mm=class extends vr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new pm,g={},y=t.getContextAttributes(),b=null,v=null,M=[],T=[],x=new je,S=null,R=null,A=new Yt;A.viewport=new yt;let D=new Yt;D.viewport=new yt;let L=[A,D],O=new Sh,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ue=M[X];return ue===void 0&&(ue=new Pa,M[X]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(X){let ue=M[X];return ue===void 0&&(ue=new Pa,M[X]=ue),ue.getGripSpace()},this.getHand=function(X){let ue=M[X];return ue===void 0&&(ue=new Pa,M[X]=ue),ue.getHandSpace()};function k(X){let ue=T.indexOf(X.inputSource);if(ue===-1)return;let Me=M[ue];Me!==void 0&&(Me.update(X.inputSource,X.frame,c||o),Me.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",$);for(let X=0;X<M.length;X++){let ue=T[X];ue!==null&&(T[X]=null,M[X].disconnect(ue))}C=null,F=null,m.reset();for(let X in g)delete g[X];if(e.setRenderTarget(b),d=null,f=null,h=null,i=null,v=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),R!==null){let X=R.camera;X.fov=R.fov,X.zoom=R.zoom,X.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",U),i.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Te=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?is:Kr,Te=y.stencil?Lo:cr);let ae={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ae),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ni(f.textureWidth,f.textureHeight,{format:Ji,type:Mi,depthTexture:new Jr(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ni(d.framebufferWidth,d.framebufferHeight,{format:Ji,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(X){for(let ue=0;ue<X.removed.length;ue++){let Me=X.removed[ue],Te=T.indexOf(Me);Te>=0&&(T[Te]=null,M[Te].disconnect(Me))}for(let ue=0;ue<X.added.length;ue++){let Me=X.added[ue],Te=T.indexOf(Me);if(Te===-1){for(let ae=0;ae<M.length;ae++)if(ae>=T.length){T.push(Me),Te=ae;break}else if(T[ae]===null){T[ae]=Me,Te=ae;break}if(Te===-1)break}let pe=M[Te];pe&&pe.connect(Me)}}function G(X,ue){ue===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ue.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ue=X.near,Me=X.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),O.near=D.near=A.near=ue,O.far=D.far=A.far=Me,(C!==O.near||F!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),C=O.near,F=O.far),O.layers.mask=X.layers.mask|6,A.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let Te=X.parent,pe=O.cameras;G(O,Te);for(let ae=0;ae<pe.length;ae++)G(pe[ae],Te);O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&X.isPerspectiveCamera&&(R={camera:X,fov:X.fov,zoom:X.zoom}),I(X,O,Te)};function I(X,ue,Me){Me===null?X.matrix.copy(ue.matrixWorld):(X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(ue.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ue.projectionMatrix),X.projectionMatrixInverse.copy(ue.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=go*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(X){return g[X]};let J=null;function fe(X,ue){if(u=ue.getViewerPose(c||o),p=ue,u!==null){let Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Te=!1;Me.length!==O.cameras.length&&(O.cameras.length=0,Te=!0);for(let oe=0;oe<Me.length;oe++){let ie=Me[oe],le=null;if(d!==null)le=d.getViewport(ie);else{let Ce=h.getViewSubImage(f,ie);le=Ce.viewport,oe===0&&(e.setRenderTargetTextures(v,Ce.colorTexture,Ce.depthStencilTexture),e.setRenderTarget(v))}let _e=L[oe];_e===void 0&&(_e=new Yt,_e.layers.enable(oe),_e.viewport=new yt,L[oe]=_e),_e.matrix.fromArray(ie.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ie.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(le.x,le.y,le.width,le.height),oe===0&&(O.matrix.copy(_e.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Te===!0&&O.cameras.push(_e)}let pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let oe=h.getDepthInformation(Me[0]);oe&&oe.isValid&&oe.texture&&m.init(oe,i.renderState)}if(pe&&pe.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let oe=0;oe<Me.length;oe++){let ie=Me[oe].camera;if(ie){let le=g[ie];le||(le=new ic,g[ie]=le);let _e=h.getCameraImage(ie);le.sourceTexture=_e}}}}for(let Me=0;Me<M.length;Me++){let Te=T[Me],pe=M[Me];Te!==null&&pe!==void 0&&pe.update(Te,ue,c||o)}J&&J(X,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),p=null}let Ee=new Kx;Ee.setAnimationLoop(fe),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}},LE=new qe,ry=new Ke;ry.set(-1,0,0,0,1,0,0,0,1);function DE(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,nm(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===On&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===On&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(LE.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ry),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function NE(r,e,t,n){let i={},s={};function o(y,b){let v=b.program;n.uniformBlockBinding(y,v,i[y.id])}function a(y,b){let v=i[y.id];v===void 0&&(p(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",m));let M=b.program;n.updateUBOMapping(y,M);let T=e.render.frame;s[y.id]!==T&&(c(y),s[y.id]=T)}function l(y){let b=r.createBuffer(),v=y.__size,M=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,v,M),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function c(y){let b=i[y.id],v=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let T=0,x=v.length;T<x;T++){let S=v[T];if(Array.isArray(S))for(let R=0,A=S.length;R<A;R++)u(S[R],T,R,M);else u(S,T,0,M)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,b,v,M){if(f(y,b,v,M)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let R=0;R<x.length;R++){let A=x[R],D=_(A,!0);h(A,y.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,y.__data)}}function h(y,b,v){typeof y=="number"||typeof y=="boolean"?b[v]=y:y.isMatrix3?(b[v]=y.elements[0],b[v+1]=y.elements[1],b[v+2]=y.elements[2],b[v+3]=0,b[v+4]=y.elements[3],b[v+5]=y.elements[4],b[v+6]=y.elements[5],b[v+7]=0,b[v+8]=y.elements[6],b[v+9]=y.elements[7],b[v+10]=y.elements[8],b[v+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-v),v):y.toArray(b,v)}function f(y,b,v,M){let T=y.value,x=b+"_"+v;if(Array.isArray(T)){M[x]===void 0&&(M[x]=[]);let S=M[x],R=!1;for(let A=0;A<T.length;A++)d(T[A],S,A)===!0&&(R=!0);return R}return d(T,M,x)}function d(y,b,v){if(b[v]===void 0)return typeof y=="number"||typeof y=="boolean"?b[v]=y:ArrayBuffer.isView(y)?b[v]=y.slice():b[v]=y.clone(),!0;{let M=b[v];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return b[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function p(y){let b=y.uniforms,v=0,M=16;for(let x=0,S=b.length;x<S;x++){let R=Array.isArray(b[x])?b[x]:[b[x]];for(let A=0,D=R.length;A<D;A++){let L=R[A],O=Array.isArray(L.value)?L.value:[L.value],C=Array.isArray(b[x])||Array.isArray(L.value),F=v;for(let U=0,$=O.length;U<$;U++){let G=O[U],I=_(G,C),J=v%M,fe=J%I.boundary,Ee=J+fe;v+=fe,Ee!==0&&M-Ee<I.storage&&(v+=M-Ee),U===0&&(F=v),v+=I.storage}let k=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new k((v-F)/Float32Array.BYTES_PER_ELEMENT),L.__offset=F}}let T=v%M;return T>0&&(v+=M-T),y.__size=v,y.__cache={},this}function _(y,b){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):He("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let b=y.target;b.removeEventListener("dispose",m),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(let y in i)r.deleteBuffer(i[y]);i={},s={}}return{bind:o,update:a,dispose:g}}var OE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wr=null;function UE(){return wr===null&&(wr=new Ps(OE,16,16,Os,ui),wr.name="DFG_LUT",wr.minFilter=Ut,wr.magFilter=Ut,wr.wrapS=xi,wr.wrapT=xi,wr.generateMipmaps=!1,wr.needsUpdate=!0),wr}var Xa=class{constructor(e={}){let{canvas:t=yx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Mi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([Lh,Ih,Ph]),g=new Set([Mi,cr,Ga,Lo,Ah,Rh]),y=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,T=null,x=[],S=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,L=null,O=null,C=null,F=null;this._outputColorSpace=Ot;let k=0,U=0,$=null,G=-1,I=null,J=new yt,fe=new yt,Ee=null,X=new Ge(0),ue=0,Me=t.width,Te=t.height,pe=1,ae=null,ke=null,oe=new yt(0,0,Me,Te),ie=new yt(0,0,Me,Te),le=!1,_e=new Is,Ce=new lh,Ve=!1,K=!1,Qe=new qe,Nt=new z,ct=new yt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function nn(){return $===null?pe:1}let H=n;function _t(E,B){return t.getContext(E,B)}let dt,Ye,xe,mt,Be,We,P,w,W,ce,re,ge,be,q,ee,me,N,Q,j,ye,de,ve,he;try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ne,!1),H===null){let B="webgl2";if(H=_t(B,E),H===null)throw _t(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Se()}catch(E){throw t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Xe("WebGLRenderer: "+E.message),E}function Se(){dt=new Y1(H),dt.init(),de=new CE(H,dt),Ye=new U1(H,dt,e,de),xe=new AE(H,dt),Ye.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),O=H.createFramebuffer(),C=H.createFramebuffer(),F=H.createFramebuffer(),mt=new J1(H),Be=new dE,We=new RE(H,dt,xe,Be,Ye,de,mt),P=new q1(A),w=new jM(H),ve=new N1(H,w),W=new K1(H,w,mt,ve),ce=new j1(H,W,w,ve,mt),Q=new $1(H,Ye,We),ee=new F1(Be),re=new fE(A,P,dt,Ye,ve,ee),ge=new DE(A,Be),be=new mE,q=new SE(dt),N=new D1(A,P,xe,ce,p,l),me=new EE(A,ce,Ye),he=new NE(H,mt,Ye,xe),j=new O1(H,dt,mt),ye=new Z1(H,dt,mt),mt.programs=re.programs,A.capabilities=Ye,A.extensions=dt,A.properties=Be,A.renderLists=be,A.shadowMap=me,A.state=xe,A.info=mt}_!==Mi&&(R=new ew(_,t.width,t.height,a,i,s));let se=new mm(A,H);this.xr=se,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=dt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=dt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(E){E!==void 0&&(pe=E,this.setSize(Me,Te,!1))},this.getSize=function(E){return E.set(Me,Te)},this.setSize=function(E,B,Z=!0){if(se.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=E,Te=B,t.width=Math.floor(E*pe),t.height=Math.floor(B*pe),Z===!0&&(t.style.width=E+"px",t.style.height=B+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Me*pe,Te*pe).floor()},this.setDrawingBufferSize=function(E,B,Z){Me=E,Te=B,pe=Z,t.width=Math.floor(E*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(_===Mi){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,B,Z,V){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,B,Z,V),xe.viewport(J.copy(oe).multiplyScalar(nn()).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,B,Z,V){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,B,Z,V),xe.scissor(fe.copy(ie).multiplyScalar(nn()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){xe.setScissorTest(le=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){ke=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Z=!0){let V=0;if(E){let Y=!1;if($!==null){let Re=$.texture.format;Y=m.has(Re)}if(Y){let Re=$.texture.type,Oe=g.has(Re),Ae=N.getClearColor(),De=N.getClearAlpha(),ze=Ae.r,Je=Ae.g,ut=Ae.b;Oe?(y[0]=ze,y[1]=Je,y[2]=ut,y[3]=De,H.clearBufferuiv(H.COLOR,0,y)):(b[0]=ze,b[1]=Je,b[2]=ut,b[3]=De,H.clearBufferiv(H.COLOR,0,b))}else V|=H.COLOR_BUFFER_BIT}B&&(V|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),N.dispose(),be.dispose(),q.dispose(),We.dispose(),Be.dispose(),P.dispose(),ce.dispose(),W.dispose(),ve.dispose(),he.dispose(),re.dispose(),se.dispose(),se.removeEventListener("sessionstart",Et),se.removeEventListener("sessionend",vt),mn.stop()};function te(E){E.preventDefault(),Yl("WebGLRenderer: Context Lost."),D=!0}function we(){Yl("WebGLRenderer: Context Restored."),D=!1;let E=mt.autoReset,B=me.enabled,Z=me.autoUpdate,V=me.needsUpdate,Y=me.type;Se(),mt.autoReset=E,me.enabled=B,me.autoUpdate=Z,me.needsUpdate=V,me.type=Y}function ne(E){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){let B=E.target;B.removeEventListener("dispose",Le),lt(B)}function lt(E){Ze(E),Be.remove(E)}function Ze(E){let B=Be.get(E).programs;B!==void 0&&(B.forEach(function(Z){re.releaseProgram(Z)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Z,V,Y,Re){B===null&&(B=nt);let Oe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ae=Fi(E,B,Z,V,Y);xe.setMaterial(V,Oe);let De=Z.index,ze=1;if(V.wireframe===!0){if(De=W.getWireframeAttribute(Z),De===void 0)return;ze=2}let Je=Z.drawRange,ut=Z.attributes.position,Ue=Je.start*ze,ht=(Je.start+Je.count)*ze;Re!==null&&(Ue=Math.max(Ue,Re.start*ze),ht=Math.min(ht,(Re.start+Re.count)*ze)),De!==null?(Ue=Math.max(Ue,0),ht=Math.min(ht,De.count)):ut!=null&&(Ue=Math.max(Ue,0),ht=Math.min(ht,ut.count));let cn=ht-Ue;if(cn<0||cn===1/0)return;ve.setup(Y,V,Ae,Z,De);let Lt,Rt=j;if(De!==null&&(Lt=w.get(De),Rt=ye,Rt.setIndex(Lt)),Y.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*nn()),Rt.setMode(H.LINES)):Rt.setMode(H.TRIANGLES);else if(Y.isLine){let Bn=V.linewidth;Bn===void 0&&(Bn=1),xe.setLineWidth(Bn*nn()),Y.isLineSegments?Rt.setMode(H.LINES):Y.isLineLoop?Rt.setMode(H.LINE_LOOP):Rt.setMode(H.LINE_STRIP)}else Y.isPoints?Rt.setMode(H.POINTS):Y.isSprite&&Rt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Bn=Y._multiDrawStarts,Fe=Y._multiDrawCounts,jn=Y._multiDrawCount,xt=De?w.get(De).bytesPerElement:1,Hs=Be.get(V).currentProgram.getUniforms();for(let kn=0;kn<jn;kn++)Hs.setValue(H,"_gl_DrawID",kn),Rt.render(Bn[kn]/xt,Fe[kn])}else if(Y.isInstancedMesh)Rt.renderInstances(Ue,cn,Y.count);else if(Z.isInstancedBufferGeometry){let Bn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fe=Math.min(Z.instanceCount,Bn);Rt.renderInstances(Ue,cn,Fe)}else Rt.render(Ue,cn)};function Bt(E,B,Z,V){L!==null&&E.isNodeMaterial&&L.setObject(V,E),Ve===!0&&ee.setState(E,Z,!1),E.transparent===!0&&E.side===Un&&E.forceSinglePass===!1?(E.side=On,E.needsUpdate=!0,Ti(E,B,V),E.side=Mr,E.needsUpdate=!0,Ti(E,B,V),E.side=Un):Ti(E,B,V)}this.compile=function(E,B,Z=null){Z===null&&(Z=E),L!==null&&L.renderStart(E,B,Z),T=q.get(Z),T.init(B),S.push(T),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),E!==Z&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),K=this.localClippingEnabled,Ve=ee.init(this.clippingPlanes,K),Ve===!0&&ee.setGlobalState(this.clippingPlanes,B),L!==null&&me.render(T.state.shadowsArray,Z,B);let V=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Re=Y.material;if(Re)if(Array.isArray(Re))for(let Oe=0;Oe<Re.length;Oe++){let Ae=Re[Oe];Bt(Ae,Z,B,Y),V.add(Ae)}else Bt(Re,Z,B,Y),V.add(Re)}),T=S.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(E,B,Z=null){let V=this.compile(E,B,Z);return new Promise(Y=>{function Re(){if(V.forEach(function(Oe){let De=Be.get(Oe).currentProgram;(De===void 0||De.isReady())&&V.delete(Oe)}),V.size===0){Y(E);return}setTimeout(Re,10)}dt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let an=null;function kt(E){an&&an(E)}function Et(){mn.stop()}function vt(){mn.start()}let mn=new Kx;mn.setAnimationLoop(kt),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(E){an=E,se.setAnimationLoop(E),E===null?mn.stop():mn.start()},se.addEventListener("sessionstart",Et),se.addEventListener("sessionend",vt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,B);let Z=se.enabled===!0&&se.isPresenting===!0,V=R!==null&&($===null||Z)&&R.begin(A,$);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(B),B=se.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,B,$),T=q.get(E,S.length),T.init(B),T.state.textureUnits=We.getTextureUnits(),S.push(T),Qe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Ce.setFromArrayCamera(B):_e.setFromProjectionMatrix(Qe,Xi,B.reversedDepth),K=this.localClippingEnabled,Ve=ee.init(this.clippingPlanes,K),M=be.get(E,x.length),M.init(),x.push(M),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Oe=A.xr.getDepthSensingMesh();Oe!==null&&At(Oe,B,-1/0,A.sortObjects)}At(E,B,0,A.sortObjects),M.finish(),L!==null&&L.updateLights(T.state.lightsArray),A.sortObjects===!0&&M.sort(ae,ke),Jt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Jt&&N.addToRenderList(M,E),this.info.autoReset===!0&&this.info.reset(),Ve===!0&&ee.beginShadows();let Y=T.state.shadowsArray;if(me.render(Y,E,B),Ve===!0&&ee.endShadows(),(V&&R.hasRenderPass())===!1){let Oe=M.opaque,Ae=M.transmissive;if(T.setupLights(),B.isArrayCamera){let De=B.cameras;if(Ae.length>0)for(let ze=0,Je=De.length;ze<Je;ze++){let ut=De[ze];bi(Oe,Ae,E,ut)}Jt&&N.render(E);for(let ze=0,Je=De.length;ze<Je;ze++){let ut=De[ze];Fn(M,E,ut,ut.viewport)}}else Ae.length>0&&bi(Oe,Ae,E,B),Jt&&N.render(E),Fn(M,E,B)}$!==null&&U===0&&(We.updateMultisampleRenderTarget($),We.updateRenderTargetMipmap($)),V&&R.end(A),E.isScene===!0&&E.onAfterRender(A,E,B),ve.resetDefaultState(),G=-1,I=null,S.pop(),S.length>0?(T=S[S.length-1],We.setTextureUnits(T.state.textureUnits),Ve===!0&&ee.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?M=x[x.length-1]:M=null,L!==null&&L.renderEnd()};function At(E,B,Z,V){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Oe=B.isArrayCamera?Ce:_e;if(!E.frustumCulled||E.intersectsFrustum(Oe)){V&&ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Qe);let Ae=ce.update(E),De=E.material;De.visible&&M.push(E,Ae,De,Z,ct.z,null,B)}}else if(E.isMesh||E.isLine||E.isPoints){let Oe=B.isArrayCamera?Ce:_e;if(!E.frustumCulled||E.intersectsFrustum(Oe)){let Ae=ce.update(E),De=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ct.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ct.copy(Ae.boundingSphere.center)),ct.applyMatrix4(E.matrixWorld).applyMatrix4(Qe)),Array.isArray(De)){let ze=Ae.groups;for(let Je=0,ut=ze.length;Je<ut;Je++){let Ue=ze[Je],ht=De[Ue.materialIndex];ht&&ht.visible&&M.push(E,Ae,ht,Z,ct.z,Ue,B)}}else De.visible&&M.push(E,Ae,De,Z,ct.z,null,B)}}}let Re=E.children;for(let Oe=0,Ae=Re.length;Oe<Ae;Oe++)At(Re[Oe],B,Z,V)}function Fn(E,B,Z,V){let{opaque:Y,transmissive:Re,transparent:Oe}=E;T.setupLightsView(Z),Ve===!0&&ee.setGlobalState(A.clippingPlanes,Z),V&&xe.viewport(J.copy(V)),Y.length>0&&$t(Y,B,Z),Re.length>0&&$t(Re,B,Z),Oe.length>0&&$t(Oe,B,Z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function bi(E,B,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Ue=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Ni(1,1,{generateMipmaps:!0,type:Ue?ui:Mi,minFilter:Ui,samples:Math.max(4,Ye.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Re=T.state.transmissionRenderTarget[V.id],Oe=V.viewport||J;Re.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);let Ae=A.getRenderTarget(),De=A.getActiveCubeFace(),ze=A.getActiveMipmapLevel();A.setRenderTarget(Re),A.getClearColor(X),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),Jt&&N.render(Z);let Je=A.toneMapping;A.toneMapping=br;let ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Ve===!0&&ee.setGlobalState(A.clippingPlanes,V),$t(E,Z,V),We.updateMultisampleRenderTarget(Re),We.updateRenderTargetMipmap(Re),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ht=0,cn=B.length;ht<cn;ht++){let Lt=B[ht],{object:Rt,geometry:Bn,material:Fe,group:jn}=Lt;if(Fe.side===Un&&Rt.layers.test(V.layers)){let xt=Fe.side;Fe.side=On,Fe.needsUpdate=!0,ln(Rt,Z,V,Bn,Fe,jn),Fe.side=xt,Fe.needsUpdate=!0,Ue=!0}}Ue===!0&&(We.updateMultisampleRenderTarget(Re),We.updateRenderTargetMipmap(Re))}A.setRenderTarget(Ae,De,ze),A.setClearColor(X,ue),ut!==void 0&&(V.viewport=ut),A.toneMapping=Je}function $t(E,B,Z){let V=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Re=E.length;Y<Re;Y++){let Oe=E[Y],{object:Ae,geometry:De,group:ze}=Oe,Je=Oe.material;Je.allowOverride===!0&&V!==null&&(Je=V),Ae.layers.test(Z.layers)&&ln(Ae,B,Z,De,Je,ze)}}function ln(E,B,Z,V,Y,Re){L!==null&&Y.isNodeMaterial&&L.setObject(E,Y),E.onBeforeRender(A,B,Z,V,Y,Re),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(A,B,Z,V,E,Re),Y.transparent===!0&&Y.side===Un&&Y.forceSinglePass===!1?(Y.side=On,Y.needsUpdate=!0,A.renderBufferDirect(Z,B,V,Y,E,Re),Y.side=Mr,Y.needsUpdate=!0,A.renderBufferDirect(Z,B,V,Y,E,Re),Y.side=Un):A.renderBufferDirect(Z,B,V,Y,E,Re),E.onAfterRender(A,B,Z,V,Y,Re)}function gn(E){let B=0;for(let Z of E)Z.texture!==null&&B++;return B}function Ti(E,B,Z){B.isScene!==!0&&(B=nt);let V=Be.get(E),Y=T.state.lights,Re=T.state.shadowsArray,Oe=Y.state.version,Ae=re.getParameters(E,Y.state,Re,B,Z,T.state.lightProbeGridArray),De=re.getProgramCacheKey(Ae),ze=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;let Je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=P.get(E.envMap||V.environment,Je),V.envMapRotation=V.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Le),ze=new Map,V.programs=ze,V.programVariants=new Map);let ut=ze.get(De);if(ut!==void 0){if(V.currentProgram===ut&&V.lightsStateVersion===Oe)return jt(E,Ae),ut}else Ae.uniforms=re.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,Z,Ae),E.onBeforeCompile(Ae,A),ut=re.acquireProgram(Ae,De),ze.set(De,ut),V.uniforms=Ae.uniforms;let Ue=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=ee.uniform),jt(E,Ae),V.needsLights=Ic(E),V.lightsStateVersion=Oe,V.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.sunLights.value=Y.state.sun,Ue.sunLightShadows.value=Y.state.sunShadow,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ue.sunShadowCascade.value=Y.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),V.numLightProbeGrids=gn(T.state.lightProbeGridArray),V.currentProgram=ut,V.uniformsList=null,ut}function zo(E,B,Z,V,Y){let Re=Be.get(E),Oe=Re.currentProgram.id+","+V+","+Y,Ae=Re.programVariants.get(Oe);return Ae===void 0?(Ae=Ti(E,B,Z),Re.programVariants.set(Oe,Ae)):(Re.currentProgram=Ae,Re.uniformsList=null,Re.outputColorSpace=V,Re.toneMapping=Y),Ae}function _n(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Wa.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function jt(E,B){let Z=Be.get(E);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Fi(E,B,Z,V,Y){B.isScene!==!0&&(B=nt),We.resetTextureUnits();let Re=B.fog,Oe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,Ae=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:st.workingColorSpace,De=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,ze=P.get(V.envMap||Oe,De),Je=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ut=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!Z.morphAttributes.position,ht=!!Z.morphAttributes.normal,cn=!!Z.morphAttributes.color,Lt=br;V.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Lt=A.toneMapping);let Rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Bn=Rt!==void 0?Rt.length:0,Fe=Be.get(V),jn=T.state.lights;if(Ve===!0&&(K===!0||E!==I)){let Gt=E===I&&V.id===G;ee.setState(V,E,Gt)}let xt=!1,Hs=!1;V.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==jn.state.version||Y.isBatchedMesh&&Fe.batching===!1||!Y.isBatchedMesh&&Fe.batching===!0||Y.isBatchedMesh&&Fe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Fe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Y.isInstancedMesh&&Fe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Fe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Fe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Fe.instancingMorph===!1&&Y.morphTexture!==null||Fe.envMap!==ze||V.fog===!0&&Fe.fog!==Re||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ee.numPlanes||Fe.numIntersection!==ee.numIntersection)||Fe.vertexAlphas!==Je||Fe.vertexTangents!==ut||Fe.morphTargets!==Ue||Fe.morphNormals!==ht||Fe.morphColors!==cn||Fe.morphTargetsCount!==Bn||Fe.numLightProbeGrids!==gn(T.state.lightProbeGridArray)?xt=!0:(Fe.outputColorSpace!==Ae||Fe.toneMapping!==Lt)&&(Hs=!0):(xt=!0,Fe.__version=V.version);let kn=Fe.currentProgram;(xt===!0||Hs===!0)&&(kn=Hs===!0?zo(V,B,Y,Ae,Lt):Ti(V,B,Y),L&&V.isNodeMaterial&&L.onUpdateProgram(V,kn,Fe));let Lc=!1,cs=!1,Gs=!1,pt=kn.getUniforms(),Rn=Fe.uniforms;if(xe.useProgram(kn.program)&&(Lc=!0,cs=!0,Gs=!0),V.id!==G&&(G=V.id,cs=!0),Lc||I!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(H,"projectionMatrix",E.projectionMatrix),pt.setValue(H,"viewMatrix",E.matrixWorldInverse);let Tn=pt.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,Nt.setFromMatrixPosition(E.matrixWorld)),Ye.logarithmicDepthBuffer&&pt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,cs=!0,Gs=!0)}if(Fe.needsLights&&(jn.state.sunShadowMap.length>0&&pt.setValue(H,"sunShadowMap",jn.state.sunShadowMap,We),jn.state.directionalShadowMap.length>0&&pt.setValue(H,"directionalShadowMap",jn.state.directionalShadowMap,We),jn.state.spotShadowMap.length>0&&pt.setValue(H,"spotShadowMap",jn.state.spotShadowMap,We),jn.state.pointShadowMap.length>0&&pt.setValue(H,"pointShadowMap",jn.state.pointShadowMap,We)),Y.isSkinnedMesh){pt.setOptional(H,Y,"bindMatrix"),pt.setOptional(H,Y,"bindMatrixInverse");let Gt=Y.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),pt.setValue(H,"boneTexture",Gt.boneTexture,We))}Y.isBatchedMesh&&(pt.setOptional(H,Y,"batchingTexture"),pt.setValue(H,"batchingTexture",Y._matricesTexture,We),pt.setOptional(H,Y,"batchingIdTexture"),pt.setValue(H,"batchingIdTexture",Y._indirectTexture,We),pt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(H,"batchingColorTexture",Y._colorsTexture,We));let er=Z.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&Q.update(Y,Z,kn),(cs||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,pt.setValue(H,"receiveShadow",Y.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(Rn.envMapIntensity.value=B.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=UE()),cs){if(pt.setValue(H,"toneMappingExposure",A.toneMappingExposure),Fe.needsLights&&il(Rn,Gs),Re&&V.fog===!0&&ge.refreshFogUniforms(Rn,Re),ge.refreshMaterialUniforms(Rn,V,pe,Te,T.state.transmissionRenderTarget[E.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Gt=v,Tn=0;for(let Rr of T.state.lightProbeGridArray)Rr.texture!==null&&(Gt.textures[Tn]=Rr.texture,Gt.min[Tn]=Rr.boundingBox.min,Gt.max[Tn]=Rr.boundingBox.max,Gt.resolution[Tn]=Rr.resolution,Tn++);for(let Rr in Gt)Gt[Rr].length=Tn;Rn.probesSH.value=Gt.textures,Rn.probesMin.value=Gt.min,Rn.probesMax.value=Gt.max,Rn.probesResolution.value=Gt.resolution}Wa.upload(H,_n(Fe),Rn,We)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Wa.upload(H,_n(Fe),Rn,We),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(H,"center",Y.center),pt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(H,"normalMatrix",Y.normalMatrix),pt.setValue(H,"modelMatrix",Y.matrixWorld),V.uniformsGroups!==void 0){let Gt=V.uniformsGroups;for(let Tn=0,Rr=Gt.length;Tn<Rr;Tn++){let rg=Gt[Tn];he.update(rg,kn),he.bind(rg,kn)}}return kn}function il(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Ic(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(E,B,Z){let V=Be.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Be.get(E.texture).__webglTexture=B,Be.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let Z=Be.get(E);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Z=0){$=E,k=B,U=Z;let V=null,Y=!1,Re=!1;if(E){let Ae=Be.get(E);if(Ae.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(H.FRAMEBUFFER,Ae.__webglFramebuffer),J.copy(E.viewport),fe.copy(E.scissor),Ee=E.scissorTest,xe.viewport(J),xe.scissor(fe),xe.setScissorTest(Ee),G=-1;return}else if(Ae.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(Ae.__hasExternalTextures)We.rebindTextures(E,Be.get(E.texture).__webglTexture,Be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Je=E.depthTexture;if(Ae.__boundDepthTexture!==Je){if(Je!==null&&Be.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);let ze=Be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?V=ze[B][Z]:V=ze[B],Y=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?V=Be.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[Z]:V=ze,J.copy(E.viewport),fe.copy(E.scissor),Ee=E.scissorTest}else J.copy(oe).multiplyScalar(pe).floor(),fe.copy(ie).multiplyScalar(pe).floor(),Ee=le;if(Z!==0&&(V=O),xe.bindFramebuffer(H.FRAMEBUFFER,V)&&xe.drawBuffers(E,V),xe.viewport(J),xe.scissor(fe),xe.setScissorTest(Ee),Y){let Ae=Be.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,Z)}else if(Re){let Ae=B;for(let De=0;De<E.textures.length;De++){let ze=Be.get(E.textures[De]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+De,ze.__webglTexture,Z,Ae)}}else if(E!==null&&Z!==0){let Ae=Be.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ae.__webglTexture,Z)}G=-1};function ls(E){let B=Be.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=Ye.textureFormatReadable(E.format),B.__typeReadable=Ye.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,Z,V,Y,Re,Oe,Ae=0){if(!(E&&E.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(De=De[Oe],Array.isArray(De)&&(De=De[0])),De){xe.bindFramebuffer(H.FRAMEBUFFER,De);try{let ze=E.textures[Ae],Je=ze.format,ut=ze.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ae);let Ue=ls(ze);if(Ue.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-V&&Z>=0&&Z<=E.height-Y&&H.readPixels(B,Z,V,Y,de.convert(Je),de.convert(ut),Re)}finally{let ze=$!==null?Be.get($).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,B,Z,V,Y,Re,Oe,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(De=De[Oe],Array.isArray(De)&&(De=De[0])),De)if(B>=0&&B<=E.width-V&&Z>=0&&Z<=E.height-Y){xe.bindFramebuffer(H.FRAMEBUFFER,De);let ze=E.textures[Ae],Je=ze.format,ut=ze.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ae);let Ue=ls(ze);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),H.readPixels(B,Z,V,Y,de.convert(Je),de.convert(ut),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let cn=$!==null?Be.get($).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,cn);let Lt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Sx(H,Lt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ht),H.deleteSync(Lt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Z=0){let V=Math.pow(2,-Z),Y=Math.floor(E.image.width*V),Re=Math.floor(E.image.height*V),Oe=B!==null?B.x:0,Ae=B!==null?B.y:0;We.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,Oe,Ae,Y,Re),xe.unbindTexture()},this.copyTextureToTexture=function(E,B,Z=null,V=null,Y=0,Re=0){let Oe,Ae,De,ze,Je,ut,Ue,ht,cn,Lt=E.isCompressedTexture?E.mipmaps[Re]:E.image;if(Z!==null)Oe=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,De=Z.isBox3?Z.max.z-Z.min.z:1,ze=Z.min.x,Je=Z.min.y,ut=Z.isBox3?Z.min.z:0;else{let pt=Math.pow(2,-Y);Oe=Math.floor(Lt.width*pt),Ae=Math.floor(Lt.height*pt),E.isDataArrayTexture?De=Lt.depth:E.isData3DTexture?De=Math.floor(Lt.depth*pt):De=1,ze=0,Je=0,ut=0}V!==null?(Ue=V.x,ht=V.y,cn=V.z):(Ue=0,ht=0,cn=0);let Rt=de.convert(B.format),Bn=de.convert(B.type),Fe;B.isData3DTexture?(We.setTexture3D(B,0),Fe=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(We.setTexture2DArray(B,0),Fe=H.TEXTURE_2D_ARRAY):(We.setTexture2D(B,0),Fe=H.TEXTURE_2D),xe.activeTexture(H.TEXTURE0),xe.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),xe.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),xe.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);let jn=xe.getParameter(H.UNPACK_ROW_LENGTH),xt=xe.getParameter(H.UNPACK_IMAGE_HEIGHT),Hs=xe.getParameter(H.UNPACK_SKIP_PIXELS),kn=xe.getParameter(H.UNPACK_SKIP_ROWS),Lc=xe.getParameter(H.UNPACK_SKIP_IMAGES);xe.pixelStorei(H.UNPACK_ROW_LENGTH,Lt.width),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Lt.height),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),xe.pixelStorei(H.UNPACK_SKIP_ROWS,Je),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,ut);let cs=E.isDataArrayTexture||E.isData3DTexture,Gs=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let pt=Be.get(E),Rn=Be.get(B),er=Be.get(pt.__renderTarget),Gt=Be.get(Rn.__renderTarget);xe.bindFramebuffer(H.READ_FRAMEBUFFER,er.__webglFramebuffer),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Tn=0;Tn<De;Tn++)cs&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.get(E).__webglTexture,Y,ut+Tn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.get(B).__webglTexture,Re,cn+Tn)),H.blitFramebuffer(ze,Je,ze+Oe,Je+Ae,Ue,ht,Ue+Oe,ht+Ae,H.DEPTH_BUFFER_BIT,H.NEAREST);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||Be.has(E)){let pt=Be.get(E),Rn=Be.get(B);xe.bindFramebuffer(H.READ_FRAMEBUFFER,C),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,F);for(let er=0;er<De;er++)cs?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pt.__webglTexture,Y,ut+er):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pt.__webglTexture,Y),Gs?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Rn.__webglTexture,Re,cn+er):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Rn.__webglTexture,Re),Y!==0?H.blitFramebuffer(ze,Je,ze+Oe,Je+Ae,Ue,ht,Ue+Oe,ht+Ae,H.COLOR_BUFFER_BIT,H.NEAREST):Gs?H.copyTexSubImage3D(Fe,Re,Ue,ht,cn+er,ze,Je,Oe,Ae):H.copyTexSubImage2D(Fe,Re,Ue,ht,ze,Je,Oe,Ae);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Gs?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Fe,Re,Ue,ht,cn,Oe,Ae,De,Rt,Bn,Lt.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(Fe,Re,Ue,ht,cn,Oe,Ae,De,Rt,Lt.data):H.texSubImage3D(Fe,Re,Ue,ht,cn,Oe,Ae,De,Rt,Bn,Lt):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Re,Ue,ht,Oe,Ae,Rt,Bn,Lt.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Re,Ue,ht,Lt.width,Lt.height,Rt,Lt.data):H.texSubImage2D(H.TEXTURE_2D,Re,Ue,ht,Oe,Ae,Rt,Bn,Lt);xe.pixelStorei(H.UNPACK_ROW_LENGTH,jn),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Hs),xe.pixelStorei(H.UNPACK_SKIP_ROWS,kn),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,Lc),Re===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&H.generateMipmap(Fe),xe.unbindTexture()},this.initRenderTarget=function(E){Be.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){k=0,U=0,$=null,xe.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};function gm(r,e){if(e===qp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Va||e===Sc){let t=r.getIndex();if(t===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Va)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function sy(r){let e=new Map,t=new Map,n=r.clone();return oy(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function oy(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)oy(r.children[n],e.children[n],t)}var gf=class extends lr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bm(t)}),this.register(function(t){return new Tm(t)}),this.register(function(t){return new wm(t)}),this.register(function(t){return new Nm(t)}),this.register(function(t){return new Om(t)}),this.register(function(t){return new Um(t)}),this.register(function(t){return new Am(t)}),this.register(function(t){return new Rm(t)}),this.register(function(t){return new Cm(t)}),this.register(function(t){return new Pm(t)}),this.register(function(t){return new Mm(t)}),this.register(function(t){return new Im(t)}),this.register(function(t){return new Em(t)}),this.register(function(t){return new Dm(t)}),this.register(function(t){return new Lm(t)}),this.register(function(t){return new vm(t)}),this.register(function(t){return new _f(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new _f(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Fm(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ns.extractUrlBase(e);o=ns.resolveURL(c,this.path)}else o=ns.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Mo(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hy){try{o[ot.KHR_BINARY_GLTF]=new Bm(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Xm(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new Sm;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new km(s,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new zm;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new Hm;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function FE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Zt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vm=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Dn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ci(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ts(u),c.distance=h;break;case"spot":c=new dc(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ar(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Sm=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Zn}extendParams(e,t,n){let i=[];e.color=new Ge(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Dn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(i)}},Mm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},bm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(s,s)}return Promise.all(i)}},Tm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},wm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Em=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Am=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ot)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Rm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Cm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(s[0],s[1],s[2],Dn),Promise.all(i)}},Pm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Im=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(s[0],s[1],s[2],Dn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ot)),Promise.all(i)}},Lm=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Dm=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Nm=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Om=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Um=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},_f=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},Fm=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==$i.TRIANGLES&&c.mode!==$i.TRIANGLE_STRIP&&c.mode!==$i.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let p of h){let _=new qe,m=new z,g=new vn,y=new z(1,1,1),b=new xo(p.geometry,p.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,_.compose(m,g,y));let v=null;for(let M in l)if(M==="_COLOR_0"){let T=l[M];b.instanceColor=new Zr(T.array,T.itemSize,T.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(v===null){let x=b.geometry;v=new pn,v.name=x.name;for(let S in x.attributes)v.setAttribute(S,x.attributes[S]);for(let S in x.morphAttributes)v.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let S of x.groups)v.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),b.geometry=v}let T=l[M];v.setAttribute(M,new Zr(T.array,T.itemSize,T.normalized))}wt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},hy="glTF",Ac=12,ay={JSON:1313821514,BIN:5130562},Bm=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ac),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ac,s=new DataView(e,Ac),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===ay.JSON){let c=new Uint8Array(e,Ac+o,a);this.content=n.decode(c)}else if(l===ay.BIN){let c=Ac+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},km=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Vm[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Vm[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Ya[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let p in d.attributes){let _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}h(d)},a,c,Dn,f)})})}},zm=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Hm=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},xf=class extends Sr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,p=e*c,_=p-c,m=-2*d+3*f,g=d-f,y=1-m,b=g-f+h;for(let v=0;v!==a;v++){let M=o[_+v+a],T=o[_+v+l]*u,x=o[p+v+a],S=o[p+v]*u;s[v]=y*M+b*T+m*x+g*S}return s}},BE=new vn,Gm=class extends xf{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return BE.fromArray(s).normalize().toArray(s),s}},$i={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ya={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ly={9728:sn,9729:Ut,9984:wh,9985:Ha,9986:Io,9987:Ui},cy={33071:xi,33648:wa,10497:qi},_m={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kE={CUBICSPLINE:void 0,LINEAR:mo,STEP:po},xm={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Sn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),r.DefaultMaterial}function No(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ar(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function GE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VE(r){let e,t=r.extensions&&r.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ym(t.attributes):e=r.indices+":"+ym(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ym(r.targets[n]);return e}function ym(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Wm(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var XE=new qe,Xm=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new FE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?(this.textureLoader=new bo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new pc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return No(s,a,i),Ar(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(ns.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=_m[i.type],a=Ya[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ln(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=_m[i.type],c=Ya[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,m;if(d&&d!==h){let g=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,b=t.cache.get(y);b||(_=new c(a,g*d,i.count*d/u),b=new Ia(_,d/u),t.cache.add(y,b)),m=new La(b,l,f%d/u,p)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Ln(_,l,p);if(i.sparse!==void 0){let g=_m.SCALAR,y=Ya[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,M=new y(o[1],b,i.sparse.count*g),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Ln(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,S=M.length;x<S;x++){let R=M[x];if(m.setX(R,T[x*l]),l>=2&&m.setY(R,T[x*l+1]),l>=3&&m.setZ(R,T[x*l+2]),l>=4&&m.setW(R,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=ly[f.magFilter]||Ut,u.minFilter=ly[f.minFilter]||Ui,u.wrapS=cy[f.wrapS]||qi,u.wrapT=cy[f.wrapT]||qi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==sn&&u.minFilter!==Ut,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(m){let g=new on(m);g.needsUpdate=!0,d(g)}),t.load(ns.resolveURL(f,s.path),_,void 0,p)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Ar(f,o),f.userData.mimeType=o.mimeType||WE(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Na,li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ls,li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Sn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let h=i[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Dn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Un);let u=s.alphaMode||xm.OPAQUE;if(u===xm.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===xm.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new je(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Zn){let h=s.emissiveFactor;a.emissive=new Ge().setRGB(h[0],h[1],h[2],Dn)}return s.emissiveTexture!==void 0&&o!==Zn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),Ar(h,s),t.associations.set(h,{materials:e}),s.extensions&&No(i,h,s),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return uy(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=VE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=uy(new pn,c,t),c.mode===$i.TRIANGLE_STRIP?f=f.then(d=>gm(d,Sc)):c.mode===$i.TRIANGLE_FAN&&(f=f.then(d=>gm(d,Va))),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?zE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let _=u[d],m=o[d],g,y=c[d];if(m.mode===$i.TRIANGLES||m.mode===$i.TRIANGLE_STRIP||m.mode===$i.TRIANGLE_FAN||m.mode===void 0){let b=s.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&v?new jl(_,y):new gt(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===$i.LINES)g=new vo(_,y);else if(m.mode===$i.LINE_STRIP)g=new yo(_,y);else if(m.mode===$i.LINE_LOOP)g=new ec(_,y);else if(m.mode===$i.POINTS)g=new So(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&GE(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Ar(g,s),m.extensions&&No(i,g,m),t.assignFinalMaterial(g),h.push(g)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&No(i,h[0],s),h[0];let f=new Kt;s.extensions&&No(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Ft.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ar(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new qe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ql(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],_=h[3],m=h[4],g=[];for(let b=0,v=f.length;b<v;b++){let M=f[b],T=d[b],x=p[b],S=_[b],R=m[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let A=n._createAnimationTracks(M,T,x,S,R);if(A)for(let D=0;D<A.length;D++)g.push(A[D])}let y=new cc(s,void 0,g);return Ar(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,XE)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,p=h[0];u.pivot=new z().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Da:c.length>1?u=new Kt:c.length===1?u=c[0]:u=new wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ar(u,s),s.extensions&&No(n,u,s),s.matrix!==void 0){let h=new qe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Kt;n.name&&(s.name=i.createUniqueName(n.name)),Ar(s,n),n.extensions&&No(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?s.add(sy(f)):s.add(f)}let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof li||f instanceof on)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Bs[s.path]===Bs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Bs[s.path]){case Bs.weights:u=jr;break;case Bs.rotation:u=Qr;break;case Bs.translation:case Bs.scale:u=Ns;break;default:n.itemSize===1?u=jr:u=Ns;break}let h=i.interpolation!==void 0?kE[i.interpolation]:mo,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let _=new u(l[d]+"."+Bs[s.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Wm(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Qr?Gm:xf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qE(r,e,t){let n=e.attributes,i=new dn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){let u=Wm(Ya[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new z,l=new z;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let _=Wm(Ya[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new yi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function uy(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=Vm[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return st.workingColorSpace!==Dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Ar(r,e),qE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?HE(r,e.targets,t):r})}var yf=class extends uc{constructor(e){super(e),this.type=ui}parse(e){let o=function(S,R){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},h=function(S,R,A){R=R||1024;let L=S.pos,O=-1,C=0,F="",k=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));for(;0>(O=k.indexOf(`
`))&&C<R&&L<S.byteLength;)F+=k,C+=k.length,L+=128,k=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));return-1<O?(A!==!1&&(S.pos+=C+O+1),F+k.slice(0,O)):!1},f=function(S){let R=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},F,k;for((S.pos>=S.byteLength||!(F=h(S)))&&o(1,"no header found"),(k=F.match(R))||o(3,"bad initial token"),C.valid|=1,C.programtype=k[1],C.string+=F+`
`;F=h(S),F!==!1;){if(C.string+=F+`
`,F.charAt(0)==="#"){C.comments+=F+`
`;continue}if((k=F.match(A))&&(C.gamma=parseFloat(k[1])),(k=F.match(D))&&(C.exposure=parseFloat(k[1])),(k=F.match(L))&&(C.valid|=2,C.format=k[1]),(k=F.match(O))&&(C.valid|=4,C.height=parseInt(k[1],10),C.width=parseInt(k[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||o(3,"missing format specifier"),C.valid&4||o(3,"missing image size specifier"),C},d=function(S,R,A){let D=R;if(D<8||D>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);D!==(S[2]<<8|S[3])&&o(3,"wrong scanline width");let L=new Uint8Array(4*R*A);L.length||o(4,"unable to allocate buffer space");let O=0,C=0,F=4*D,k=new Uint8Array(4),U=new Uint8Array(F),$=A;for(;$>0&&C<S.byteLength;){C+4>S.byteLength&&o(1),k[0]=S[C++],k[1]=S[C++],k[2]=S[C++],k[3]=S[C++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=D)&&o(3,"bad rgbe scanline format");let G=0,I;for(;G<F&&C<S.byteLength;){I=S[C++];let fe=I>128;if(fe&&(I-=128),(I===0||G+I>F)&&o(3,"bad scanline data"),fe){let Ee=S[C++];for(let X=0;X<I;X++)U[G++]=Ee}else U.set(S.subarray(C,C+I),G),G+=I,C+=I}let J=D;for(let fe=0;fe<J;fe++){let Ee=0;L[O]=U[fe+Ee],Ee+=D,L[O+1]=U[fe+Ee],Ee+=D,L[O+2]=U[fe+Ee],Ee+=D,L[O+3]=U[fe+Ee],O+=4}$--}return L},p=function(S,R,A,D){let L=S[R+3],O=Math.pow(2,L-128)/255;A[D+0]=S[R+0]*O,A[D+1]=S[R+1]*O,A[D+2]=S[R+2]*O,A[D+3]=1},_=function(S,R,A,D){let L=S[R+3],O=Math.pow(2,L-128)/255;A[D+0]=Cs.toHalfFloat(Math.min(S[R+0]*O,65504)),A[D+1]=Cs.toHalfFloat(Math.min(S[R+1]*O,65504)),A[D+2]=Cs.toHalfFloat(Math.min(S[R+2]*O,65504)),A[D+3]=Cs.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let g=f(m),y=g.width,b=g.height,v=d(m.subarray(m.pos),y,b),M,T,x;switch(this.type){case Jn:x=v.length/4;let S=new Float32Array(x*4);for(let A=0;A<x;A++)p(v,A*4,S,A*4);M=S,T=Jn;break;case ui:x=v.length/4;let R=new Uint16Array(x*4);for(let A=0;A<x;A++)_(v,A*4,R,A*4);M=R,T=ui;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:b,data:M,header:g.string,gamma:g.gamma,exposure:g.exposure,type:T,colorSpace:Dn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};function fy(r,e){let t=new Kt;r.position.y=-1.78,r.scale.setScalar(1.54),t.add(r);let n=[1,2,3,4].map(s=>r.getObjectByName("GothicCabinet_01_door"+s));for(let[s,o]of[[0,.32],[1,1.32]]){for(let l of[-1,1]){let c=l*1.04;for(let u=0;u<4;u++){let h=e[(u+s+(l+1))%e.length].clone(!0),f=new dn().setFromObject(h).getSize(new z),d=(.99+.12*Math.sin(u*1.8+l+s))/f.y,p=f.x*d;h.scale.setScalar(d),h.position.set(c-l*p/2,o*1.54-1.78+.008,.38+.036*Math.sin(u+s)),h.rotation.y=.02*Math.sin(u+l),t.add(h),c-=l*(p+.012)}}let a=-.21;for(let l=0;l<3;l++){let c=e[(s+l+2)%e.length].clone(!0),u=new dn().setFromObject(c).getSize(new z),h=(1.04+.11*Math.cos(l*.9+s))/u.y,f=u.x*h;c.scale.setScalar(h),c.position.set(a+f/2,o*1.54-1.78+.008,.22+.035*Math.cos(l+s)),t.add(c),a+=f+.012}}function i(s,o){for(let[a,l]of n.entries()){let c=s-[0,.11,.23,.33][a],u=Ft.smootherstep(c,0,1.28),h=Ft.smootherstep(c,3.62,5.28),f=[.57,.76,.42,.6][a],d=1.59,p=o?f:u*(d-(d-f)*h);l.rotation.y=(a%2===0?-1:1)*p}}return{object:t,update:i}}function ss(r,e,t,n,i){r.beginPath(),r.moveTo(e,t),r.lineTo(n,i),r.stroke()}function dy(r,e,t,n,i){r.beginPath(),r.ellipse(e,t,n,i,0,0,2*Math.PI),r.stroke()}function YE(r){for(let i=0;i<7;i++){let s=83+i*8;r.lineWidth=i===6?3:1.7,r.beginPath(),r.moveTo(320-s,411),r.lineTo(320-s,293),r.arc(320,293,s,Math.PI,Math.PI*2),r.lineTo(320+s,411),r.stroke()}for(let i=1;i<16;i++){let s=Math.PI+i*Math.PI/16,o=Math.cos(s),a=Math.sin(s);ss(r,320+96*o,293+96*a,320+130*o,293+130*a)}for(let i of[-1,1]){let s=320+i*108;for(let[o,a]of[[289,61],[296,56],[304,50],[407,52],[414,61],[422,69]])ss(r,s-a/2,o,s+a/2,o);for(let o=-2;o<=2;o++)ss(r,s+o*6,310,s+o*6,401)}r.lineWidth=1.5;for(let i=-3;i<=3;i++)ss(r,320+i*14,378,320+i*52,451);for(let i of[381,388,398,411,428,450])ss(r,320-(i-354)*1.6,i,320+(i-354)*1.6,i)}function KE(r){r.save(),r.translate(320,302);for(let e=0;e<32;e++){r.rotate(Math.PI/16);let t=e%4===0?148:e%2===0?127:108;r.fillStyle=e%2===0?"#dedede":"#909090",r.beginPath(),r.moveTo(22,0),r.quadraticCurveTo(61,-15,t,0),r.lineTo(65,6),r.closePath(),r.fill(),r.strokeStyle="#fafafa",r.lineWidth=1.5,r.beginPath(),r.moveTo(25,0),r.quadraticCurveTo(68,10,t,0),r.stroke()}r.strokeStyle="#fff",r.lineWidth=2;for(let e of[21,27,68,88,153])dy(r,0,0,e,e);r.lineWidth=1;for(let e=0;e<144;e++)r.rotate(Math.PI/72),ss(r,157,0,e%6?161:165,0);r.restore()}function ZE(r){r.save(),r.translate(320,313);let e=(t,n)=>{r.beginPath(),r.moveTo(-137,t-4),r.lineTo(-4,t-64),r.lineTo(137,t-7),r.lineTo(7,t+58+n),r.closePath()};for(let t=0;t<4;t++){let n=77-t*50;r.fillStyle="#000",e(n,7),r.fill(),r.lineWidth=2.8,r.stroke(),e(n,0),r.fill(),r.stroke(),r.lineWidth=1.2;for(let i=1;i<21;i++){let s=i/21;ss(r,-137+144*s,n-4+62*s,-137+144*s,n-1+63*s)}for(let[i,s]of[[-99,-4],[-4,-45],[100,-7],[7,39]])dy(r,i,n+s,5,2.3);if(t===3)for(let i=0;i<4;i++)r.beginPath(),r.moveTo(-80+i*14,n+1+i*5),r.lineTo(-2+i*7,n-33+i*9),r.lineTo(76-i*11,n-2+i*6),r.stroke()}r.restore()}function JE(r){let e=[];function t(n,i){let s=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),c=(102+46*a)*s,u=(102+46*a)*o,h=46*l,f=.56*u-.83*h;return[320+c*.91-f*.42,306+c*.42+f*.91,.83*u+.56*h]}for(let n=0;n<54;n++)for(let i=0;i<18;i++){let s=2*Math.PI*n/54,o=2*Math.PI*i/18,a=[t(s,o),t(s+2*Math.PI/54,o),t(s+2*Math.PI/54,o+2*Math.PI/18),t(s,o+2*Math.PI/18)];e.push({points:a,depth:a.reduce((l,c)=>l+c[2],0)/4})}e.sort((n,i)=>n.depth-i.depth),r.fillStyle="#000",r.lineJoin="round";for(let{points:n,depth:i}of e){r.beginPath(),r.moveTo(...n[0].slice(0,2));for(let s of n.slice(1))r.lineTo(s[0],s[1]);r.closePath(),r.fill(),r.lineWidth=i>45?2.5:1.65,r.strokeStyle=i>15?"#fff":"#aaa",r.stroke()}}var $E={sites:YE,ads:KE,apps:ZE,"3d":JE},jE={sites:15125659,ads:15973768,apps:15193766,"3d":15455419};function QE(r,e){let t=document.createElement("canvas");t.width=1280,t.height=1712;let n=t.getContext("2d",{alpha:!1});n.scale(2,2),n.fillStyle="#000",n.fillRect(0,0,640,856),n.strokeStyle="#e9e9e9",n.lineWidth=2.8,n.strokeRect(46,39,548,778),n.lineWidth=1.2,n.strokeRect(54,47,532,762);for(let[s,o,a]of[[61,54,0],[579,54,Math.PI/2],[579,802,Math.PI],[61,802,-Math.PI/2]])n.save(),n.translate(s,o),n.rotate(a),n.lineWidth=1.8,n.beginPath(),n.moveTo(0,54),n.bezierCurveTo(8,37,2,10,42,8),n.quadraticCurveTo(26,24,16,16),n.stroke(),n.beginPath(),n.moveTo(6,6),n.quadraticCurveTo(22,1,53,0),n.stroke(),n.restore();n.save(),$E[e](n),n.restore(),n.fillStyle="#fff",n.strokeStyle="#cacaca",n.lineWidth=1.75,ss(n,139,494,302,494),ss(n,338,494,501,494),n.save(),n.translate(320,494),n.rotate(Math.PI/4),n.strokeRect(-3.5,-3.5,7,7),n.restore(),n.textAlign="center",n.font="600 "+(e==="apps"?90:113)+"px Georgia, serif",n.fillText(r,320,618,520),n.lineWidth=1.8;for(let s of[-1,1])n.beginPath(),n.moveTo(320,710),n.bezierCurveTo(320+s*15,710,320+s*24,694,320+s*51,702),n.stroke();let i=new vi(t);return i.anisotropy=8,i}function py(r,e,t,n,i,s){let o=QE(t.title,t.key),a=r.material.clone(),l=e.getSize(new z);return a.onBeforeCompile=c=>{c.uniforms.boardAngle=i,c.uniforms.foilGleam=s,c.uniforms.boardJoint={value:new z(e.max.x-.002,e.max.z-.004,l.x)},c.uniforms.foilMask={value:o},c.uniforms.bindingGrain={value:n},c.uniforms.coverExtent={value:new yt(e.max.z,e.min.y,l.z,l.y)},c.uniforms.coverDye={value:new z(...t.dye)},c.uniforms.foilColor={value:new Ge(jE[t.key])},c.vertexShader=`varying vec2 foilUV; varying float coverFace; uniform vec4 coverExtent;
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
      normal=normalize(normal-clamp(emboss,vec3(-.20),vec3(.20)));`)},a.customProgramCacheKey=()=>"archive-engraving",r.material=a,()=>{a.dispose(),o.dispose()}}var eA=[{key:"sites",title:"\u0421\u0430\u0439\u0442\u044B",dye:[.76,1.05,1.5],height:1.24,slot:-.32,floor:1.32,x:-1.89,y:1.04,yaw:-.27,roll:.085,delay:.97},{key:"ads",title:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",dye:[2.03,.77,.62],height:1.2,slot:.32,floor:1.32,x:1.9,y:.89,yaw:.42,roll:-.105,delay:1.19},{key:"apps",title:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",dye:[.68,1.34,1.03],height:1.22,slot:-.34,floor:.32,x:-1.92,y:-.66,yaw:-.15,roll:-.064,delay:1.48},{key:"3d",title:"3D",dye:[1.55,.97,1.48],height:1.17,slot:.32,floor:.32,x:1.85,y:-.82,yaw:.52,roll:.069,delay:1.72}],{smootherstep:Rc,lerp:Ka,clamp:tA}=Ft;function my(r,e,t,n,i,s){let o=eA.map((f,d)=>{let p=new Kt,_=i[d].clone(!0),m=new dn().setFromObject(_),g=m.getSize(new z),y=m.getCenter(new z),b=f.height/g.y;_.scale.set(b*1.1,b,b*1.22),_.position.copy(y).multiply(_.scale).negate();let v=_.getObjectByProperty("isMesh",!0),M={value:0},T={value:0},x=py(v,m,f,s,M,T),S=new Kt;return S.rotation.y=-Math.PI/2,S.add(_),p.add(S),r.add(p),{...f,index:d,body:p,releaseStamp:x,hinge:M,gleam:T,width:g.z*_.scale.z,depth:g.x*_.scale.x,link:n.querySelector('[data-document="'+f.key+'"]'),progress:0,hover:0,screen:null,rest:new wt,restWorld:new qe}}),a=new z,l=new vn;function c(f,d){l.copy(r.quaternion).invert();for(let p of o){let _=Math.max(p.progress,t.paused?1:tA((f-p.delay)/1.94,0,1));p.progress=_;let m=Rc(_,0,.5),g=Rc(_,.43,.98),y=Rc(_,.48,.96),b=Math.sin(g*Math.PI),v=Rc(_,.79,1),M=Math.sin(v*Math.PI*2)*(1-v),T=Math.sign(p.slot),x=t.heroFocus===p.key?1:0;p.hover=Ka(p.hover,x,t.paused?1:1-Math.exp(-d*9)),p.gleam.value=p.hover;let S=p.floor*1.54-1.78+p.height/2+.009,R=.58-p.width/2,A=t.paused?0:Rc(_,.8,1),D=f*(.83+.055*p.index)+p.index*1.79;a.set(p.x+A*.009*Math.sin(D*.72),p.y+A*.026*Math.sin(D),2.04+A*.013*Math.cos(D*.87)),a.applyQuaternion(l),p.body.position.set(Ka(p.slot,a.x,g)+T*.055*b,Ka(S,a.y,g)+.031*m+.112*b,Ka(Ka(R,1.92,m),a.z,g)+.21*b+.032*M),p.body.rotation.set(-.085*y-.105*b,Ka(Math.PI/2,p.yaw,y)+A*.011*Math.sin(D*.75),p.roll*y+T*(.069*b-.018*M)+A*.009*Math.cos(D)),p.rest.position.copy(p.body.position),p.rest.quaternion.copy(p.body.quaternion),p.rest.updateMatrix();let L=p.hover*g;p.body.position.y+=L*.065,p.body.position.z+=L*.1,p.body.rotation.y-=T*.08*L,p.body.rotation.z-=T*.025*L}n.classList.toggle("books-presented",o[o.length-1].progress>=.9)}let u=new z;function h(){let f=n.clientWidth,d=n.clientHeight;for(let p of o){p.restWorld.multiplyMatrices(r.matrixWorld,p.rest.matrix);let _=1/0,m=1/0,g=-1/0,y=-1/0;for(let M of[p.body.matrixWorld,p.restWorld])for(let T of[-p.width/2,p.width/2])for(let x of[-p.height/2,p.height/2]){u.set(T,x,p.depth/2).applyMatrix4(M).project(e);let S=(u.x+1)*f/2,R=(1-u.y)*d/2;_=Math.min(_,S),g=Math.max(g,S),m=Math.min(m,R),y=Math.max(y,R)}let b=p.screen,v={left:Math.round(_)-2,top:Math.round(m)-2,right:Math.round(g)+2,bottom:Math.round(y)+2};if(!b||p.viewWidth!==f||p.viewHeight!==d||v.left!==b.left||v.top!==b.top||v.right!==b.right||v.bottom!==b.bottom){let M=p.link.style;M.setProperty("--doc-x",100*v.left/f+"%"),M.setProperty("--doc-y",100*v.top/d+"%"),M.setProperty("--doc-w",100*(v.right-v.left)/f+"%"),M.setProperty("--doc-h",100*(v.bottom-v.top)/d+"%"),p.screen=v,p.viewWidth=f,p.viewHeight=d}p.link.classList.toggle("book-in-cabinet",p.progress<=.5)}}return{find:f=>o.find(d=>d.key===f),update:c,project:h,status:()=>o.map(f=>({key:f.key,progress:f.progress,hover:f.hover,position:f.body.position.toArray(),screen:f.screen})),dispose(){for(let f of o)r.remove(f.body),f.releaseStamp()}}}var os=720,hi=960,nA=Ft.clamp,iA=()=>matchMedia("(orientation: portrait)").matches?"portrait":"wide",qm=new Map;function Za(){let r=iA();if(!qm.has(r)){let e=new Image;e.decoding="async",e.src="3d/assets/images/entrance-"+r+".webp",qm.set(r,e)}return qm.get(r)}function ur(r,e,t,n,i){r.beginPath(),r.moveTo(e,t),r.lineTo(n,i),r.stroke()}function rA(){let r=document.createElement("canvas");r.width=r.height=160;let e=r.getContext("2d"),t=e.createImageData(160,160),n=321;for(let i=0;i<t.data.length;i+=4){n=Math.imul(1664525,n)+1013904223>>>0;let s=(n/4294967296-.5)*13;t.data[i]=233+s,t.data[i+1]=224+s,t.data[i+2]=202+s,t.data[i+3]=255}return e.putImageData(t,0,0),r}function gy(r,e){r.fillStyle=r.createPattern(e,"repeat"),r.fillRect(0,0,os,hi);let t=r.createLinearGradient(0,0,os,0);t.addColorStop(0,"#62472844"),t.addColorStop(.035,"#fff4cd22"),t.addColorStop(.13,"#fff0"),t.addColorStop(1,"#66563f17"),r.fillStyle=t,r.fillRect(0,0,os,hi)}function sA(r,e){r.fillStyle="#193345",r.fillRect(30,34,660,892),r.save(),r.translate(60,85),r.strokeStyle="#92adac80",r.lineWidth=1;for(let t=0;t<=600;t+=24)ur(r,t,0,t,675);for(let t=0;t<=675;t+=24)ur(r,0,t,600,t);r.strokeStyle="#e3dcbf",r.lineWidth=2.5;for(let t=0;t<6;t++){let n=73+t*17,i=1-e,s=n+e*(116+t*20-n),o=541;r.beginPath(),r.moveTo(300-s,o),r.lineTo(300-s,240),r.bezierCurveTo(300-s,240-i*n*.55-e*100,300-i*n*.55,240-n,300,240-n),r.bezierCurveTo(300+i*n*.55,240-n,300+s,240-i*n*.55-e*100,300+s,240),r.lineTo(300+s,o),r.stroke()}r.globalAlpha=e,r.fillStyle="#152932",r.fillRect(10,275,580,391),r.strokeStyle="#ccb68e";for(let t of[10,198,390,590])ur(r,t,257,t,667);for(let t of[271,362,570,666])ur(r,10,t,590,t);r.fillStyle="#cdc8af",r.fillRect(32,302,119,8),r.fillRect(32,324,88,4),r.strokeRect(218,386,151,150),r.strokeRect(411,386,151,150),r.restore()}function oA(r,e){r.fillStyle="#c87856",r.fillRect(28,32,664,896),r.save(),r.translate(360,370);for(let[t,n]of[["#edba8e",11],["#672e2b",-4]]){r.save(),r.translate(n*(1.5-e),0),r.rotate((1-e)*.17),r.fillStyle=t,r.globalAlpha=t==="#672e2b"?e:1;for(let i=0;i<40;i++)r.rotate(Math.PI/20),r.beginPath(),r.moveTo(32,0),r.bezierCurveTo(110,-9,193,-72,242,-16),r.quadraticCurveTo(158,-9,32,2),r.fill();r.restore()}r.restore(),r.strokeStyle="#512f29",r.lineWidth=2;for(let[t,n]of[[65,72],[650,72],[65,880],[650,880]])ur(r,t-10,n,t+10,n),ur(r,t,n-10,t,n+10);r.fillStyle="#5b2e2b";for(let t=0;t<5;t++)r.fillRect(68+t*39,796,28,31)}function aA(r,e){r.fillStyle="#24423e",r.fillRect(30,34,660,892);for(let t=0;t<3;t++){r.save();let n=(t-1)*(1-e);r.translate(87+n*43,208-n*76),r.transform(1,-.22*(1-e),.28*(1-e),1,0,0),r.fillStyle=t===2?"#d9dcc6":"rgba(149,188,165,.72)",r.strokeStyle="#e4dcb6",r.lineWidth=3,r.fillRect(0,0,525,370),r.strokeRect(0,0,525,370),r.fillStyle="#395950",r.fillRect(0,0,525,48);for(let i=0;i<3;i++)r.beginPath(),r.arc(22+i*14,24,3,0,2*Math.PI),r.fillStyle="#d7d2b7",r.fill();r.fillStyle="#a5b4a0",r.fillRect(18,69,91,279);for(let i=0;i<3;i++)r.strokeStyle="#819786",r.strokeRect(134,80+i*80,364,54),r.fillStyle="#829884",r.fillRect(156,101+i*80,181-i*24,7);r.restore()}}function lA(r,e,t){let n=os*(t*1.55-.09),i=o=>n+17*Math.sin(o*.031)+9*Math.sin(o*.089);if(e?.complete&&e.naturalWidth){r.save(),r.beginPath(),r.moveTo(0,0);for(let a=0;a<=hi;a+=8)r.lineTo(i(a),a);r.lineTo(0,hi),r.closePath(),r.clip();let o=Math.max(os/e.width,hi/e.height);r.drawImage(e,(os-e.width*o)/2,(hi-e.height*o)/2,e.width*o,e.height*o),r.restore()}r.save(),r.lineCap="round";for(let o=0;o<19;o++){let a=23+o*51,l=i(a),c=25+24*Math.sin(o*7.1)**2;r.strokeStyle="#c2e1e7",r.lineWidth=1.8,ur(r,l-22,a,l+c,a-c*.55);for(let u=1;u<5;u++){let h=l+c*u/6,f=a-c*u/6*.55;ur(r,h,f,h+2,f-10),ur(r,h,f,h+10,f+2)}}let s=r.createLinearGradient(n-52,0,n+50,0);s.addColorStop(0,"#c6e5ef00"),s.addColorStop(.48,"#e3f7ff88"),s.addColorStop(1,"#efffff00"),r.fillStyle=s,r.fillRect(n-52,0,102,hi),r.restore()}function _y(r){let e=rA();function t(){let u=document.createElement("canvas");u.width=os,u.height=hi;let h=u.getContext("2d");gy(h,e);let f=new vi(u);return f.colorSpace=Ot,f.anisotropy=4,{ctx:h,texture:f}}let n=t(),i=t(),s=n.ctx;s.strokeStyle="#9f927655",s.lineWidth=1.6;for(let u=-hi;u<os+hi;u+=30)ur(s,u,0,u+hi,hi),ur(s,u,0,u-hi,hi);s.strokeStyle="#a39579",s.strokeRect(34,32,os-68,hi-64);let o=r==="3d"?Za():null,a={sites:sA,ads:oA,apps:aA},l=-1;function c(u){let h=Math.round(nA(u,0,1)*30);l!==h&&(l=h,gy(i.ctx,e),r==="3d"?lA(i.ctx,o,h/30):a[r](i.ctx,h/30),i.texture.needsUpdate=!0)}return c(0),{lining:n.texture,face:i.texture,update:c,dispose(){n.texture.dispose(),i.texture.dispose()}}}function cA(r){let t=document.createElement("canvas");t.width=288,t.height=96;let n=t.getContext("2d");function i(o){n.beginPath(),n.moveTo(...o[0]);for(let a of o.slice(1))n.lineTo(...a);n.stroke()}for(let o=0;o<3;o++){if(n.save(),n.translate(96*(o+.5),96/2),r==="3d"){n.strokeStyle=["#f0f9ff","#cae1f6","#fffaff"][o],n.lineWidth=o===2?6:4.4,n.lineCap="round";for(let a=0;a<6;a++)i([[0,0],[0,-34]]),i([[-8,-26],[0,-17],[8,-26]]),o===0&&i([[-6,-32],[0,-26],[6,-32]]),n.rotate(Math.PI/3)}else r==="sites"?(n.strokeStyle=["#a8d6da","#efe2bf","#a3bfcf"][o],n.lineWidth=6,o===0?(i([[-22,0],[22,0]]),i([[0,-22],[0,22]])):o===1?i([[-21,-19],[-21,18],[20,18]]):(i([[-31,0],[28,0]]),i([[18,-9],[18,9]]))):r==="ads"?(n.fillStyle=["#efcb91","#b45d43","#66392f"][o],n.beginPath(),n.moveTo(-24,5),n.lineTo(-7,-14-o*2),n.lineTo(27,-7),n.lineTo(10,11),n.lineTo(-21,16),n.fill()):(n.fillStyle=["#b7e1cd","#eadfb7","#7ca89c"][o],o===0?(n.strokeStyle=n.fillStyle,n.lineWidth=7,n.strokeRect(-19,-19,38,38)):(n.fillRect(-17,-17,34,34),o===2&&n.clearRect(2,-17,15,13)));n.restore()}let s=new vi(t);return s.colorSpace=Ot,s}function xy(r,e,t,n,i){let s=r==="3d",o=r==="apps",a=r==="ads",l=s?49:o?30:36,c=new pn,u=[],h=[],f=[],d=[],p=[],_=271+r.charCodeAt(0),m=()=>(_=Math.imul(1664525,_)+1013904223>>>0,_/4294967296);for(let M=0;M<l;M++){let T=M%3!==0,x=M%5<3,S=x?.44+m()*.27:(T?.39:.27)+m()*.2,R=i(T,S),A=Ft.smoothstep(S,.4,.81),D=s?Math.min(.94,Math.max(.03,A*1.55-.09)):.25+.54*m(),L=x?e*(D-.5):R.x-e/2,O=(m()-(a&&x?.27:.46))*t*(x&&!s?.6:.92);u.push(L,O,n+(x?.014:R.z+.009));let C=Math.sign(L)||1;h.push(C*e*(x?.08+.23*m():.22+.52*m()),t*((s?.22:.04)+.45*m()),.065+m()*.19),f.push(e*(.03+M%6*.07),t*(.27+Math.floor(M/6)*.048),n+.15),d.push(S,(s?.37:.29)+m()*.13);let F=(s?.038:.031)+m()**2*(s?.032:.027);p.push(F,m()*Math.PI*2,M%3,m())}for(let[M,T,x]of[["position",u,3],["drift",h,3],["socket",f,3],["life",d,2],["style",p,4]])c.setAttribute(M,new It(T,x));let g=cA(r),y={atlas:{value:g},time:{value:0},focal:{value:1},dpr:{value:1},snow:{value:Number(s)},pixels:{value:Number(o)},foil:{value:Number(a)}},b=new Zi({uniforms:y,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`
      attribute vec3 drift, socket;
      attribute vec2 life;
      attribute vec4 style;
      uniform float time, focal, dpr, snow, pixels, foil;
      varying float alpha, angle, tile, glint;
      void main() {
        float age = clamp((time - life.x) / life.y, 0., 1.);
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
      }`}),v=new So(c,b);return v.frustumCulled=!1,{points:v,update(M,T,x){y.time.value=M,y.focal.value=T,y.dpr.value=x},dispose(){c.dispose(),b.dispose(),g.dispose()}}}var{smoothstep:Zm,smootherstep:vf,lerp:Ym}=Ft,Oo=32,yy=(r,e)=>r?Zm(e,.34,.68):Zm(e,.24,.56),vy=r=>.98*Math.sin(Math.PI*r);function Sy(r,e,t,n){let i=0,s=0,o=a=>e+t*(.32+.84*Math.sin(Math.PI*a)-a);for(let a=0;a<=Oo;a++){if(a){let l=o((a-.5)/Oo);i+=Math.cos(l)*r/Oo,s+=Math.sin(l)*r/Oo}n?.(a,i,s,o(a/Oo))}return{x:i,z:s}}function Km(r,e,t){let n=new Ki(r,e,Oo,1),i=n.attributes.position,s=n.attributes.normal;i.setUsage(uf),s.setUsage(uf);let o=new gt(n,t);o.frustumCulled=!1;function a(l,c){Sy(r,l,c,(u,h,f,d)=>{for(let p=0;p<2;p++){let _=u+p*(Oo+1);i.setXYZ(_,h,(.5-p)*e,f),s.setXYZ(_,-Math.sin(d),0,Math.cos(d))}}),i.needsUpdate=s.needsUpdate=!0}return{mesh:o,bend:a,dispose:()=>n.dispose()}}function My({renderer:r,scene:e,camera:t,container:n,book:i,host:s}){let o=r.domElement,a=document.createElement("canvas");a.className="folio-snapshot",a.width=o.width,a.height=o.height,a.setAttribute("aria-hidden","true"),i.body.visible=!1,r.render(e,t),a.getContext("2d").drawImage(o,0,0),n.append(a);let l=new ar;l.environment=e.environment,l.environmentIntensity=e.environmentIntensity,l.environmentRotation.copy(e.environmentRotation);let c=new Yt(40,1,.025,50),u=i.body.clone(!0);u.visible=!0,l.add(u);let h=new qe().multiplyMatrices(t.matrixWorldInverse,i.body.matrixWorld),f=new z,d=new vn,p=new z;h.decompose(f,d,p);let _=new ci(16772050,1.85);_.position.set(-3,4,5);let m=new ci(14146033,.85);m.position.set(3,1,4),l.add(_,m);let g=_y(i.key),y=new Sn({map:g.lining,roughness:.9,side:Un}),b=new Zn({map:g.face,toneMapped:!1}),v,M=new je(1,1),T={value:1},x={value:0};i.key==="3d"&&(v=new on(Za()),v.colorSpace=Ot,b.onBeforeCompile=oe=>{Object.assign(oe.uniforms,{iceFrame:{value:v},screenSize:{value:M},iceAspect:T,iceMix:x}),oe.fragmentShader=`uniform sampler2D iceFrame; uniform vec2 screenSize; uniform float iceAspect,iceMix;
`+oe.fragmentShader,oe.fragmentShader=oe.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        vec2 uvScreen=gl_FragCoord.xy/screenSize;
        float ratio=screenSize.x/(screenSize.y*iceAspect);
        vec2 uvPhoto=(uvScreen-.5)*vec2(min(1.,ratio),min(1.,1./ratio))+.5;
        diffuseColor.rgb=mix(diffuseColor.rgb,texture2D(iceFrame,uvPhoto).rgb,iceMix);`)});let S=new Sn({color:15656400,roughness:.91,side:Un}),{width:R,height:A,depth:D}=i,L=R*.95,O=A*.97,C=Km(L,O,y),F=Km(L,O,y),k=Km(L,O,S),U=new gt(new Ki(L,O),b);U.position.set(.008,0,D*.51+7e-4),u.add(U);for(let[oe,ie]of[k,F,C].entries())ie.mesh.position.set(U.position.x-L/2,0,D*.51+.002+oe*.0025),u.add(ie.mesh);let $=xy(i.key,L,O,U.position.z,(oe,ie)=>{let le=yy(oe,ie);return Sy(L,2.96*le,vy(le))});$.points.position.x=U.position.x,u.add($.points),u.traverse(oe=>{oe.isMesh&&(oe.castShadow=!1,oe.receiveShadow=!1)});let G=r.shadowMap.enabled,I=r.getPixelRatio();r.shadowMap.enabled=!1,s.append(o);let J=n.getBoundingClientRect(),fe=J.height/(2*Math.tan(Ft.degToRad(t.fov)/2)),Ee=0,X=0,ue=new z,Me=new vn,Te=new z,pe=new vn().setFromEuler(new Yi(-.07,-.1,.024));function ae(oe){let ie=s.clientWidth,le=s.clientHeight;if(ie!==Ee||le!==X){Ee=ie,X=le;let ct=Math.min(I,Math.max(1,Math.sqrt(24e5/(Ee*X))));r.getPixelRatio()!==ct&&r.setPixelRatio(ct),r.setSize(Ee,X,!1)}let _e=vf(oe,0,.52),Ce=vf(oe,.59,.91);c.aspect=Ee/X,c.fov=Ft.radToDeg(2*Math.atan(X/(2*fe))),c.updateProjectionMatrix(),c.projectionMatrix.elements[8]=(1-2*(J.left+J.width/2)/Ee)*(1-_e),c.projectionMatrix.elements[9]=(2*(J.top+J.height/2)/X-1)*(1-_e);let Ve=Math.min(Ee*.8/(2*R),X*.67/A),K=fe/Ve,Qe=fe/Math.max(Ee/L,X/O)*.91+U.position.z;ue.set(Ym(R*.43,0,Ce),Ym(.015,0,Ce),-Ym(K,Qe,Ce)),u.position.lerpVectors(f,ue,_e),u.quaternion.slerpQuaternions(d,pe,_e).slerp(Me,Ce),u.scale.copy(p);let Nt=2.98*vf(oe,.1,.51);i.hinge.value=Nt,u.updateMatrixWorld(!0),U.visible=oe>.13,C.mesh.visible=oe>.19,C.bend(Nt,0);for(let ct of[F,k]){let nt=yy(ct===k,oe);ct.mesh.visible=oe>.16&&nt<.999,ct.bend(nt*2.96,vy(nt))}return $.update(oe,fe,r.getPixelRatio()),g.update(Zm(oe,.4,.81)),v?.image.naturalWidth&&(v.version===0&&(v.needsUpdate=!0),r.getDrawingBufferSize(M),T.value=v.image.naturalWidth/v.image.naturalHeight,x.value=vf(oe,.66,.87)),r.render(l,c),Te.set(-R*.32,-A*.17,U.position.z+.008).applyMatrix4(u.matrixWorld).project(c),{x:(1+Te.x)*Ee/2,y:(1-Te.y)*X/2,scale:Math.min(1.25,fe*R/Math.max(.1,-u.position.z)/440)}}function ke(){i.hinge.value=0,i.body.visible=!0,r.shadowMap.enabled=G,r.shadowMap.needsUpdate=!0,r.getPixelRatio()!==I&&r.setPixelRatio(I),n.append(o),a.remove();for(let oe of[F,k,C])oe.dispose();U.geometry.dispose(),y.dispose(),b.dispose(),S.dispose(),g.dispose(),v?.dispose(),$.dispose()}return{frame:ae,dispose:ke}}async function by(r,e){let t=document.querySelector("#scene"),n=document.createElement("canvas"),i=n.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!i)return t.dataset.renderer="fallback",null;t.classList.toggle("archive-loading",!r.paused);let s=new gf,[o,a,l,c]=await Promise.all([s.loadAsync("assets/archive/cabinet.glb"),s.loadAsync("assets/archive/volumes.glb?v=2"),new yf().loadAsync("assets/archive/studio.hdr"),new bo().loadAsync("assets/archive/binding-grain.webp")]),u=new Xa({canvas:n,context:i,antialias:!0,alpha:!0});u.setPixelRatio(Math.min(devicePixelRatio,2)),u.setClearColor(0,0),u.toneMapping=Co,u.toneMappingExposure=1.03,u.shadowMap.enabled=!0,u.shadowMap.type=Eo,t.append(n),n.setAttribute("aria-hidden","true");let h=new ar,f=new Yt(29,1,.1,36);f.position.set(0,.64,10.5),f.lookAt(0,-.06,0);let d=new Us(u),p=d.fromEquirectangular(l);h.environment=p.texture,h.environmentIntensity=.76,h.environmentRotation.y=-.65,l.dispose(),d.dispose();let _=new ci(16771799,2.1);_.position.set(-3.8,6,4.2),_.castShadow=!0,_.shadow.mapSize.setScalar(t.clientWidth>600?1024:512),Object.assign(_.shadow.camera,{left:-3.3,right:3.3,top:3.3,bottom:-3.3,near:.5,far:16}),_.shadow.camera.updateProjectionMatrix(),_.shadow.bias=-45e-5,_.shadow.normalBias=.018,_.shadow.radius=2.8;let m=new ci(14211578,.79);m.position.set(4,1.5,2.6);let g=new ci(16764570,1.45);g.position.set(2,3,-3),h.add(_,m,g);let y=new Kt;h.add(y);let b=a.scene.children,v=Math.min(8,u.capabilities.getMaxAnisotropy());c.anisotropy=v,c.wrapS=c.wrapT=qi,a.scene.traverse(ie=>{if(ie.isMesh)for(let le of[ie.material.map,ie.material.normalMap,ie.material.roughnessMap])le&&(le.anisotropy=v)});let M=b[0].children.find(ie=>ie.material?.name.endsWith("_paper"))?.material;M&&(M.color.setHex(14601641),M.onBeforeCompile=ie=>{ie.vertexShader=`varying vec3 paperPoint;
`+ie.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
paperPoint=position;`),ie.fragmentShader=`varying vec3 paperPoint;
`+ie.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float layer = paperPoint.x * 9500. + .25 * sin(paperPoint.z * 148. + paperPoint.y * 41.);
        float fiber = .5 + .5*cos(layer);
        float lod = 1.-smoothstep(.6,3.,fwidth(layer));
        diffuseColor.rgb *= .93 - .19*fiber*lod - .045*cos(paperPoint.x*830.);
      `)});let T=fy(o.scene,b);y.add(T.object);let x=new ts(16763532,.42,2.9,2);x.position.set(0,.24,.94),y.add(x);let S=my(y,f,r,t,b,c);y.traverse(ie=>{ie.isMesh&&(ie.castShadow=!0,ie.receiveShadow=!0)});let R=document.createElement("canvas");R.width=R.height=128;let A=R.getContext("2d"),D=A.createRadialGradient(64,64,2,64,64,63);D.addColorStop(0,"#000b"),D.addColorStop(.42,"#0008"),D.addColorStop(1,"#0000"),A.fillStyle=D,A.fillRect(0,0,128,128);let L=new vi(R),O=new Ki(4.5,2.2),C=new Zn({map:L,transparent:!0,depthWrite:!1}),F=new gt(O,C);F.position.set(0,-1.795,0),F.rotation.x=-Math.PI/2,h.add(F);let k=!1,U=!1,$=0,G=r.time,I=-1,J=0,fe=-10,Ee=0,X=0,ue=0,Me=null;function Te(){U||k||(u.render(h,f),S.project(),r.frames++)}function pe(ie){if(U||k||((r.tx!==Ee||r.ty!==X||r.dragRotation!==ue||r.heroFocus!==Me)&&(Ee=r.tx,X=r.ty,ue=r.dragRotation,Me=r.heroFocus,fe=r.time),J=Math.max(J,r.paused?5.7:r.time-G),ie>0&&J>5.65&&r.time-fe>2.3&&r.time-I<1/30-.001))return;I=r.time;let le=1-Math.exp(-ie*2.8);r.x=Ft.lerp(r.x,r.tx,le),r.y=Ft.lerp(r.y,r.ty,le),$=Ft.lerp($,r.dragRotation,le),y.rotation.set(.025-r.y*.023,-.2+$+r.x*.045-(1-e.arrival)*.07,-.008),y.position.set(0,0,0),T.update(J,r.paused),S.update(J,ie),Te()}function ae(){if(k)return;let ie=t.clientWidth,le=t.clientHeight;if(!ie||!le)return;u.setSize(ie,le,!1);let _e=ie/le,Ce=Math.max(4.3,6.35/_e);f.aspect=_e,f.fov=Ft.radToDeg(2*Math.atan(Ce/(2*f.position.z))),f.updateProjectionMatrix(),pe(0)}function ke(){let ie=new dn().setFromObject(T.object),le=new z,_e=1/0,Ce=-1/0,Ve=-1/0,K=1/0;for(let Qe of[ie.min.x,ie.max.x])for(let Nt of[ie.min.y,ie.max.y])for(let ct of[ie.min.z,ie.max.z])le.set(Qe,Nt,ct).project(f),_e=Math.min(_e,le.x),Ce=Math.max(Ce,le.x),Ve=Math.max(Ve,le.y),K=Math.min(K,le.y);return{left:_e,right:Ce,top:Ve,bottom:K}}n.addEventListener("webglcontextlost",ie=>{ie.preventDefault(),U=!0,t.classList.remove("ready"),t.dataset.renderer="fallback"}),n.addEventListener("webglcontextrestored",()=>{U=!1,ae(),t.classList.add("ready"),t.dataset.renderer="webgl"});let oe=new ResizeObserver(ae);oe.observe(t),t.addEventListener("pointerdown",ie=>{r.paused||ie.pointerType==="touch"||ie.target.closest("a")||(r.dragging=!0,r.dragStart=ie.clientX,t.setPointerCapture(ie.pointerId))}),t.addEventListener("pointermove",ie=>{r.dragging&&(r.dragRotation=Ft.clamp(r.dragRotation+(ie.clientX-r.dragStart)*.0015,-.17,.22),r.dragStart=ie.clientX)});for(let ie of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(ie,()=>{r.dragging=!1});return ae(),t.classList.remove("archive-loading"),t.classList.add("ready"),t.dataset.renderer="webgl",{resize:ae,render:Te,frame:pe,bounds:ke,documentStatus:S.status,openFolio(ie,le){let _e=S.find(ie);if(k||U||!_e||_e.progress<.5)return null;k=!0;try{let Ce=My({renderer:u,scene:h,camera:f,container:t,book:_e,host:le});return{frame:Ce.frame,dispose(){Ce.dispose(),k=!1,ae()}}}catch(Ce){throw _e.body.visible=!0,_e.hinge.value=0,u.shadowMap.enabled=!0,t.append(n),t.querySelector(".folio-snapshot")?.remove(),k=!1,ae(),Ce}},dispose(){oe.disconnect(),S.dispose(),c.dispose(),_.shadow.dispose();let ie=new Set,le=new Set,_e=new Set;for(let Ce of[o.scene,a.scene])Ce.traverse(Ve=>{Ve.isMesh&&(le.add(Ve.geometry),ie.add(Ve.material))});for(let Ce of ie){for(let Ve of Object.values(Ce))Ve?.isTexture&&_e.add(Ve);Ce.dispose()}for(let Ce of le)Ce.dispose();for(let Ce of _e)Ce.dispose();L.dispose(),O.dispose(),C.dispose(),p.dispose(),u.dispose()}}}var Sf=class extends ar{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Oi;e.deleteAttribute("uv");let t=new Sn({side:On}),n=new Sn,i=new ts(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new gt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new xo(e,n,6),a=new wt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new gt(e,Ja(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new gt(e,Ja(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new gt(e,Ja(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new gt(e,Ja(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new gt(e,Ja(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new gt(e,Ja(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ja(r){return new ac({color:0,emissive:16777215,emissiveIntensity:r})}var Cc=new z;function ji(r,e,t,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Cc.copy(e),Cc[n]=0,Cc.normalize();let c=.5*o/(o+a),u=1-Cc.angleTo(r)/l;return Math.sign(Cc[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Uo=class r extends Oi{constructor(e=1,t=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new z,c=new z,u=new z(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,_=new z,m=.5/o;for(let g=0,y=0;g<h.length;g+=3,y+=2)switch(l.fromArray(h,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[g+0]=u.x*Math.sign(l.x)+c.x*s,h[g+1]=u.y*Math.sign(l.y)+c.y*s,h[g+2]=u.z*Math.sign(l.z)+c.z*s,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[y+0]=ji(_,c,"z","y",s,n),d[y+1]=1-ji(_,c,"y","z",s,t);break;case 1:_.set(-1,0,0),d[y+0]=1-ji(_,c,"z","y",s,n),d[y+1]=1-ji(_,c,"y","z",s,t);break;case 2:_.set(0,1,0),d[y+0]=1-ji(_,c,"x","z",s,e),d[y+1]=ji(_,c,"z","x",s,n);break;case 3:_.set(0,-1,0),d[y+0]=1-ji(_,c,"x","z",s,e),d[y+1]=1-ji(_,c,"z","x",s,n);break;case 4:_.set(0,0,1),d[y+0]=1-ji(_,c,"x","y",s,e),d[y+1]=1-ji(_,c,"y","x",s,t);break;case 5:_.set(0,0,-1),d[y+0]=ji(_,c,"x","y",s,e),d[y+1]=1-ji(_,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};function Ty(){let r=document.querySelector("#study-scene"),e=document.createElement("canvas"),t=e.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"low-power"});if(!t)return r.dataset.renderer="fallback",null;let n=new Xa({canvas:e,context:t,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(2.5,Math.max(1.72,devicePixelRatio))),n.setClearColor(0,0),n.toneMapping=Co,n.toneMappingExposure=.92,r.append(e),e.setAttribute("aria-hidden","true");let i=new ar,s=new Yt(33,1,.1,30);s.position.set(0,.8,6.7),s.lookAt(0,0,0);let o=new Sf,a=new Us(n),l=a.fromScene(o,.04);i.environment=l.texture,i.environmentIntensity=.65,o.dispose(),a.dispose();let c=new ci(16771803,3.5);c.position.set(-3,5,5),i.add(c,new hc(14210540,1578269,.85));let u=new ci(12694747,4.5);u.position.set(4,2,-1),i.add(u);let h=new Kt;i.add(h);let f=new Nn({color:7828605,metalness:.88,roughness:.23,clearcoat:.35}),d=new Sn({color:3420216,roughness:.55,metalness:.35}),p=new Sn({color:2105380,roughness:.85}),_=document.createElement("canvas");_.width=_.height=64;let m=_.getContext("2d");m.fillStyle="#414047",m.fillRect(0,0,64,64);for(let ae=0;ae<64;ae+=8)for(let ke=0;ke<64;ke+=8)m.fillStyle="#222126",m.fillRect(ke,ae,3,4),m.fillStyle="#64616a",m.fillRect(ke+4,ae+4,2,3);let g=new vi(_);g.wrapS=g.wrapT=qi,g.repeat.set(7,11);let y=new Sn({color:5591387,map:g,bumpMap:g,bumpScale:.025,roughness:.92});function b(ae,ke,oe=0,ie=0,le=0){let _e=new gt(ae,ke);return _e.position.set(oe,ie,le),h.add(_e),_e}let v=[];function M(ae,ke,oe,ie,le=0,_e="z"){return v.push({object:ae,home:ae.position.clone(),delta:ke,start:oe,end:ie,turn:le,axis:_e,angle:ae.rotation[_e]}),ae}let T=(ae,ke,oe)=>new z(ae,ke,oe),x=b(new Uo(1.64,2.56,1.08,6,.18),f);M(x,T(-.14,0,-.34),.03,.35);let S=b(new Uo(1.48,2.36,.13,5,.14),d,0,0,.51);M(S,T(0,0,.46),.18,.42);let R=new Sn({color:2434089,roughness:.71,metalness:.2,side:Un}),A=new Sn({color:8880522,roughness:.32,metalness:.85});function D(ae,ke,oe,ie,le,_e){let Ce=new gt(ae,ke);return Ce.position.set(ie,le,_e),oe.add(Ce),Ce}for(let[ae,ke,oe]of[[.52,.27,.22],[-.3,.45,.27]]){let ie=new Kt;ie.position.set(0,ae,.568),h.add(ie);let le=D(new rc(ke,.15,48,1,!0),R,ie,0,0,-.055);le.rotation.x=-Math.PI/2,D(new Oa(ke,.035,8,48),p,ie,0,0,.008);let _e=D(new oc(ke*.29,24,12),d,ie,0,0,-.022);_e.scale.z=.35,M(ie,T(0,.03,.85),oe,oe+.24)}for(let[ae,[ke,oe]]of[[-.58,.96],[.58,.96],[-.58,-.96],[.58,-.96]].entries()){let ie=new Kt;ie.position.set(ke,oe,.567),h.add(ie);let le=D(new Ds(.04,.035,.024,14),A,ie,0,0,0);le.rotation.x=Math.PI/2,D(new Oi(.043,.009,.004),p,ie,0,0,.013),M(ie,T(0,0,1.18),.35+ae*.025,.55+ae*.02,Math.PI*2)}let L=b(new Uo(1.36,2.24,.06,4,.12),y,0,0,.607);D(new Uo(.18,.025,.012,2,.006),A,L,0,-.88,.034),M(L,T(.04,.07,1.66),.47,.72,.055);let O=new Kt;O.position.set(.44,1.315,.08),h.add(O),D(new Ds(.22,.22,.105,56),f,O,0,0,0);let C=D(new Oa(.19,.009,8,48),d,O,0,.056,0);C.rotation.x=Math.PI/2,D(new Oi(.025,.007,.08),p,O,0,.057,.12),M(O,T(0,.61,0),.55,.77,1.1,"y");for(let ae of[-.52,.52]){let ke=b(new Ds(.12,.12,.07,24),p,ae,-1.305,.19);M(ke,T(0,-.24,0),.19,.43)}let F=new Ls({color:12955589,transparent:!0,opacity:.75,depthWrite:!1});for(let ae of[x,S,L])ae.add(new vo(new sc(ae.geometry,16),F));let k=[f,d,p,y,R,A];for(let ae of k)ae.transparent=!0;let U=document.createElement("canvas");U.width=U.height=128;let $=U.getContext("2d"),G=$.createRadialGradient(64,64,2,64,64,64);G.addColorStop(0,"#21152560"),G.addColorStop(1,"#21152500"),$.fillStyle=G,$.fillRect(0,0,128,128);let I=new vi(U),J=new gt(new Ki(4.2,3),new Zn({map:I,transparent:!0,depthWrite:!1}));J.rotation.x=-Math.PI/2,J.position.y=-1.34,i.add(J);let fe=!1,Ee=-1,X=0,ue=0;function Me(ae=X,ke=!1){if(X=ae,fe||!ke&&Math.abs(Ee-ae)<5e-5)return;Ee=ae;let oe=(Ce,Ve)=>Ft.smoothstep(ae,Ce,Ve),ie=oe(.03,.24);F.opacity=(1-oe(.12,.41))*.72;for(let Ce of k)Ce.opacity=ie,Ce.depthWrite=ie>.5;for(let Ce of v){let Ve=1-oe(Ce.start,Ce.end);Ce.object.position.copy(Ce.home).addScaledVector(Ce.delta,Ve),Ce.object.rotation[Ce.axis]=Ce.angle+Ce.turn*Ve}J.material.opacity=.8*ie;let le=oe(.48,.93);h.rotation.set(.07-.045*le,-1.02+.59*le,-.025+.014*le);let _e=oe(.54,.91);c.position.set(-3.4+_e*2.1,5,4.6),s.position.set(0,1.08-.34*le,8-1.3*le),s.lookAt(0,.04,.46*(1-le)),n.render(i,s),ue++}function Te(){let ae=r.clientWidth,ke=r.clientHeight;!ae||!ke||(n.setSize(ae,ke,!1),s.aspect=ae/ke,s.updateProjectionMatrix(),Me(X,!0))}e.addEventListener("webglcontextlost",ae=>{ae.preventDefault(),fe=!0,r.classList.remove("ready"),r.dataset.renderer="fallback"}),e.addEventListener("webglcontextrestored",()=>{fe=!1,r.classList.add("ready"),r.dataset.renderer="webgl",Me(X,!0)});let pe=new ResizeObserver(Te);return pe.observe(r),r.classList.add("ready"),r.dataset.renderer="webgl",Te(),{frame:Me,resize:Te,get frames(){return ue},dispose(){pe.disconnect(),h.traverse(ae=>ae.geometry?.dispose());for(let ae of[...k,F])ae.dispose();J.geometry.dispose(),J.material.dispose(),I.dispose(),g.dispose(),l.dispose(),n.dispose()}}}var Jm=(r,e,t)=>r+(e-r)*t;function $a(r,e,t){let n=Math.max(0,Math.min(1,(r-e)/(t-e)));return n*n*(3-2*n)}function wy(r,e,t){let n;for(let i of r){if(i.dataset.document==="3d")for(let s of["pointerenter","focus","pointerdown"])i.addEventListener(s,Za,{passive:!0});i.addEventListener("click",s=>{if(s.defaultPrevented||s.button!==0||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||i.target==="_blank")return;if(n){s.preventDefault();return}let o=i.hash?document.getElementById(i.hash.slice(1)):null,a=o?.querySelector("h3");if(t.matches||i.hash&&!a)return;let l=document.createElement("div");l.className="folio-transition",l.dataset.book=i.dataset.document,l.setAttribute("aria-hidden","true");function c(O){let C=document.createElement("div");return C.className="folio-"+O,l.append(C),C}let u=c("veil"),h=!o&&c("ice-frame");h&&Za();let f=c("canvas"),d=a&&c("heading");document.body.append(l);let p;try{p=e(i.dataset.document,f),p&&p.frame(0)}catch(O){console.warn("Book transition unavailable",O),p?.dispose(),p=null}if(!p){l.remove();return}s.preventDefault();let _,m,g,y,b=!1,v=!1,M=O=>O.preventDefault();l.addEventListener("wheel",M,{passive:!1});let T=O=>{O.key==="Escape"||O.key==="Tab"?(O.key==="Escape"&&O.preventDefault(),A()):[" ","PageUp","PageDown","ArrowDown","ArrowUp","Home","End"].includes(O.key)&&O.preventDefault()},x=()=>{document.hidden&&A()};function S(){cancelAnimationFrame(_),clearTimeout(m),document.removeEventListener("keydown",T),document.removeEventListener("visibilitychange",x),window.removeEventListener("pagehide",S),window.removeEventListener("popstate",S),t.removeEventListener("change",A),a?.classList.remove("folio-title-held");try{p.dispose()}finally{l.remove(),n=!1}}function R(){b||(b=!0,location.hash!==i.hash&&history.pushState(null,"",i.hash),o.classList.remove("arrival-pending","scroll-arrival"),o.focus({preventScroll:!0}),o.scrollIntoView({behavior:"instant",block:"start"}),a.classList.add("folio-title-held"),g=a.getBoundingClientRect(),d.style.color=getComputedStyle(a).color)}function A(){if(!(v||!n)){if(o){R(),S();return}v=!0,cancelAnimationFrame(_),h.style.opacity=1,f.style.opacity=0,u.style.opacity=1;try{sessionStorage.setItem("folio-ice-at",String(Date.now()))}catch{}location.assign(i.href),m=setTimeout(S,6e3)}}if(d){d.textContent=a.textContent;let O=getComputedStyle(a);for(let C of["fontFamily","fontSize","fontStyle","fontWeight","lineHeight","letterSpacing","textWrap","textTransform"])d.style[C]=O[C];d.style.width=a.getBoundingClientRect().width+"px"}n=!0,document.addEventListener("keydown",T),document.addEventListener("visibilitychange",x),window.addEventListener("popstate",S),window.addEventListener("pagehide",S),f.addEventListener("webglcontextlost",A,{capture:!0,once:!0}),t.addEventListener("change",A);let D=performance.now();function L(O){let C=Math.min(1,Math.max(0,(O-D)/1490));try{if(C===1){A();return}let F=p.frame(C);if(u.style.opacity=$a(C,.03,.64)*(o?1-$a(C,.81,1):1),f.style.opacity=1-$a(C,.76,.97),h&&(h.style.opacity=$a(C,.72,.94)),d){d.style.opacity=$a(C,.54,.73),C>=.76&&!b&&(y=F,R());let k=$a(C,.76,.98),U=b?Jm(y.x,g.left,k):F.x,$=b?Jm(y.y,g.top,k):F.y,G=b?Jm(y.scale,1,k):F.scale;d.style.transform="translate3d("+U+"px,"+$+"px,0) scale("+G+")"}_=requestAnimationFrame(L)}catch(F){console.warn("Finishing book navigation",F),A()}}_=requestAnimationFrame(L)})}}qt.registerPlugin($e);var Ie=(r,e=document)=>e.querySelector(r),Dt=(r,e=document)=>[...e.querySelectorAll(r)],ng=matchMedia("(prefers-reduced-motion: reduce)"),uA=matchMedia("(min-width: 901px)"),Ef={get(r){try{return localStorage.getItem(r)}catch{return null}},set(r,e){try{localStorage.setItem(r,e)}catch{}},remove(r){try{localStorage.removeItem(r)}catch{}}},Ht={concept:"hybrid",paused:ng.matches,time:0,scroll:0,x:0,y:0,tx:0,ty:0,dragging:!1,dragRotation:0,dragStart:0,frames:0,heroVisible:!0};Ht.heroFocus=null;var Mf={arrival:1,beat:0},zs={value:0},ko=null,Af=!1,Qi=null,jm=!1,ks=null,Cy=!1,tl=[],Qm=new Set,Py=innerWidth<=760,Rf=-1,bf={count:0},eg=[["const ","speaker"," = new Mesh("],["  body.geometry,"],["  brushedAluminium"],[");"],[""],["scene",".add","(speaker);"],["camera",".lookAt","(speaker.position);"],["renderer",".render","(scene, camera);"]],Ey=eg.flat().join("").length+eg.length-1,Iy=9.86,Ly=2.2,Dy=6.8,ja=Iy+.77*Dy/Ly,Fo=[{at:0,name:"\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430",caption:"\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u043D\u0443\u0436\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430. \u0412 \u0447\u0430\u0442\u0435 \u0443\u0442\u043E\u0447\u043D\u044F\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0447\u0435\u0440\u0442\u0451\u0436."},{at:4.2,name:"\u041F\u043B\u0430\u043D \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",caption:"\u041D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u043A\u0430\u0436\u0435\u043C \u0441\u0430\u043C\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0443. \u041D\u0438\u0436\u0435 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438."},{at:7.15,name:"\u041F\u0438\u0448\u0443 \u043A\u043E\u0434",caption:"\u0417\u0430\u0434\u0430\u044E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043A\u043E\u0440\u043F\u0443\u0441\u0430, \u0441\u0442\u0430\u0432\u043B\u044E \u043A\u0430\u043C\u0435\u0440\u0443 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0432 \u0441\u0446\u0435\u043D\u0443."},{at:10.1,name:"\u0421\u0431\u043E\u0440\u043A\u0430",caption:"\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0438, \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E \u0438\u0445 \u0440\u0435\u0448\u0451\u0442\u043A\u043E\u0439 \u0438 \u0441\u0442\u0430\u0432\u043B\u044E \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438."},{at:ja+1.42,name:"\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",caption:"\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u0441\u0430\u0439\u0442 SONA. \u0422\u0430 \u0436\u0435 \u043A\u043E\u043B\u043E\u043D\u043A\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430, \u0442\u0435\u043F\u0435\u0440\u044C \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435."}],tg=[],Ay=-1;function hA(){let r=Ie(".code-content"),e=0;eg.forEach((t,n)=>{n&&(r.append(document.createTextNode("")),tg.push({node:r.lastChild,value:`
`,offset:e++})),t.forEach((i,s)=>{let o=document.createElement("span");o.className=n===0&&s===0?"syntax-keyword":s===1?"syntax-method":"syntax-base",r.append(o),tg.push({node:o,value:i,offset:e}),e+=i.length})})}hA();var as=null,Tf=null,Qa=null,Ny=null,Pc=!1;function ig(){return!Ht.paused&&!document.hidden&&!Pc&&!Ie("dialog[open]")}function hr(){let r=!ig();Qa&&Qa.progress()<1&&Qa.paused(r),Qi?.paused(r||!Af),ks?.paused(r||!Cy),tl.forEach((e,t)=>e.paused(r||!Qm.has(t)))}function Pf(r=!1,e=!1){let t=Qi?.time()||0,n=tl.map(s=>s.time()),i=e?0:ks?.time()||0;Tf?.revert(),Tf=null,Qa=null,Qi=null,ks=null,tl=[],Mf.arrival=1,Mf.beat=0,zs.value=0,ko?.frame(0,!0),Tf=qt.context(()=>{if(Py=innerWidth<=760,jm&&(Oy(),Qi.time(Ht.paused?Qi.duration():t).pause(),ko?.frame(zs.value,!0)),!Ht.paused){r&&(Qa=qt.timeline({defaults:{ease:"power3.out"}}),Qa.from(".scene",{opacity:.45,duration:.55},.05).from(Mf,{arrival:0,duration:2.8,ease:"sine.out"},.15).from(".hybrid-intro",{y:24,opacity:0,duration:1},.7).from(".hybrid-actions",{y:18,opacity:0,duration:.9},.85)),ks=qt.timeline({paused:!0}),Dt(".digit-strip").forEach((s,o)=>{let a=Number(s.dataset.end);ks.fromTo(s,{y:0,yPercent:0},{y:0,yPercent:-a/(a+1)*100,duration:[3.4,3.9,3.65][o],ease:"power2.inOut"},[0,.12,.28][o])}),ks.fromTo(".project-total",{y:18},{y:0,duration:3.6,ease:"power2.out"},0).fromTo(".total-plus",{rotation:-10,y:6},{rotation:0,y:0,duration:3.5,ease:"power2.inOut"},.2).time(i).pause(),pA(n);for(let s of Dt(".service-item"))qt.timeline({scrollTrigger:{trigger:s,start:"top 98%",end:"center 65%",scrub:.65}}).from(s,{"--rule-progress":.08,ease:"sine.out",duration:1},0).from(Ie(".service-art",s),{"--turn":"-46deg","--spread":"12px",y:10,duration:1},0);for(let s of Dt(".process-list li"))qt.timeline({scrollTrigger:{trigger:s,start:"top 95%",end:"center 65%",scrub:.7}}).from(s,{"--step-progress":.02,duration:1},0).from(Ie(".step-number",s),{y:16,duration:1},0).from(Ie("h4",s),{x:11,duration:1},0)}}),hr()}function fA(r){if(Ht.paused=r,r)for(let e of Dt(".scroll-arrival"))e.classList.remove("scroll-arrival");document.body.classList.toggle("motion-paused",r),Pf(!1,!r),$e.refresh(),as?.frame(0)}for(let r of Dt("[data-document]")){let e=()=>{Ht.heroFocus=r.dataset.document,as?.frame(0)},t=()=>{Ht.heroFocus===r.dataset.document&&(Ht.heroFocus=null),as?.frame(0)};r.addEventListener("pointerenter",e),r.addEventListener("pointerleave",()=>{document.activeElement!==r&&t()}),r.addEventListener("focus",e),r.addEventListener("blur",t)}wy(Dt("[data-document]"),(r,e)=>as?.openFolio(r,e),ng);function Ry(){let r=Qi?.time()||0,e=Fo.findLastIndex(n=>r>=n.at);Rf!==e&&(Rf=e,Ie(".showcase-stage").dataset.phase=String(e),Ie("#story-heading").textContent=Fo[e].name,Ie("#story-caption").textContent=Fo[e].caption);let t=Math.floor(bf.count);if(t!==Ay){for(let{node:n,value:i,offset:s}of tg){let o=i.slice(0,Math.max(0,t-s));n.textContent!==o&&(n.textContent=o)}Ay=t}Ht.paused&&ko?.frame(zs.value,!0)}function dA(){let r=Ie(".film-scenes"),e=Ie(".drawing-flight"),t=Ie(".drawing-source"),n=Ie(".drawing-target");function i(a){let l=a.offsetWidth/2,c=a.offsetHeight/2;for(let u=a;u&&u!==r;u=u.offsetParent)l+=u.offsetLeft,c+=u.offsetTop;return{x:l,y:c}}function s(){let a=i(t),l=i(n);e.style.width=n.offsetWidth+"px",e.style.height=n.offsetHeight+"px",e.style.setProperty("--from-x",a.x+"px"),e.style.setProperty("--from-y",a.y+"px"),e.style.setProperty("--dx",l.x-a.x+"px"),e.style.setProperty("--dy",l.y-a.y+"px"),e.style.setProperty("--start-w",t.offsetWidth/Math.max(1,n.offsetWidth)),e.style.setProperty("--start-h",t.offsetHeight/Math.max(1,n.offsetHeight))}s();let o=new ResizeObserver(s);[r,t,n].forEach(a=>o.observe(a))}function Oy(){let[r,e,t,n]=Dt(".film-scene"),i=qt.timeline({paused:!0,defaults:{ease:"sine.inOut"},onUpdate:Ry});Qi=i,Rf=-1,qt.set([e,t,n],{autoAlpha:0,scale:.98,y:10}),qt.set(r,{autoAlpha:1,scale:1,y:0}),qt.set(".chat-bubble, .chat-typing, .system-preview, .assembly-drawing, .editor-preview, .drawing-target",{autoAlpha:0}),qt.set(".drawing-flight",{autoAlpha:0,"--travel":0}),qt.set(".plan-draw",{clipPath:"inset(0 100% 0 0)"}),qt.set(".dimension-rule",{scaleX:0}),qt.set(".model-panel",{xPercent:-51,scale:1.72}),qt.set(".film-site",{scale:1.02}),bf.count=0,zs.value=0;let[s,o,a]=Dt(".chat-bubble");function l(h,f){i.fromTo(h,{autoAlpha:0,y:9,scale:.975},{autoAlpha:1,y:0,scale:1,duration:.46,ease:"power2.out",immediateRender:!1},f)}function c(h,f,d){i.to(h,{autoAlpha:0,scale:1.018,y:-8,duration:.72},d-.45).to(f,{autoAlpha:1,scale:1,y:0,duration:.78},d-.36)}for(let h of Fo.slice(1))i.to(".film-caption",{opacity:0,y:-4,duration:.25},h.at-.25).fromTo(".film-caption",{opacity:0,y:5},{opacity:1,y:0,duration:.37,immediateRender:!1},h.at);i.fromTo(".chat-window",{scale:.94,y:7},{scale:1,y:0,duration:2,ease:"power2.out"},0).fromTo(".film-editor",{rotateZ:-.6,scale:.985},{rotateZ:0,scale:1,duration:1.8,immediateRender:!1},7),l(s,.15),i.to(".chat-typing",{autoAlpha:1,duration:.2},.76).fromTo(".chat-typing i",{y:0},{y:-3,stagger:.08,duration:.21,repeat:1,yoyo:!0},.91).to(".chat-typing",{autoAlpha:0,duration:.2},1.53),l(o,1.65),l(a,2.66),i.to(".drawing-flight",{autoAlpha:1,duration:.18},3.46).to(".drawing-source",{opacity:0,duration:.18},3.47).to(".drawing-flight",{"--travel":1,duration:1.2,ease:"power2.inOut"},3.6),c(r,e,Fo[1].at),i.to(".drawing-target",{autoAlpha:1,duration:.25},4.76).to(".drawing-flight",{autoAlpha:0,duration:.32},4.8).to(".plan-draw",{clipPath:"inset(0 0% 0 0)",duration:.68,stagger:.22},4.52).to(".dimension-rule",{scaleX:1,duration:.64},5.24).fromTo(".draft-text i",{scaleX:.35,transformOrigin:"left"},{scaleX:1,duration:.55,stagger:.12},5.38),c(e,t,Fo[2].at),i.to(bf,{count:Ey*.49,duration:.91,ease:"none"},7.37).to(bf,{count:Ey,duration:1.15,ease:"none"},8.44).to(".editor-preview",{autoAlpha:1,duration:.65},8.27).fromTo(".editor-preview .speaker-print",{rotateY:-32},{rotateY:10,duration:1.18},8.58),c(t,n,Fo[3].at),qt.set(".fallback-drivers",{xPercent:-17}),qt.set(".product-fallback i",{xPercent:-72,rotateY:-21,opacity:.52}),qt.set(".fallback-dial",{yPercent:-240});let u=qt.timeline({defaults:{ease:"sine.inOut"}});u.fromTo(zs,{value:0},{value:1,duration:Dy,ease:"none",immediateRender:!1},0).to(".assembly-drawing",{autoAlpha:1,duration:.68},.56).fromTo(".assembly-drawing span",{yPercent:9,opacity:0},{yPercent:0,opacity:1,stagger:.3,duration:.64},.7).to(".assembly-drawing",{autoAlpha:0,duration:.62},4.42).to(".fallback-drivers",{xPercent:0,duration:1.3},1.44).to(".product-fallback i",{xPercent:0,rotateY:0,opacity:1,duration:1.7},2.94).to(".fallback-dial",{yPercent:0,duration:.95},4.14),i.add(u.timeScale(Ly),Iy).to(".model-panel",{xPercent:0,scale:1,duration:1.95,ease:"power2.inOut"},ja).to(".system-preview",{autoAlpha:1,duration:1.25},ja+.45).to(".film-site",{scale:.96,duration:1.64},ja+.44).fromTo(".preview-header,.preview-copy,.preview-details > div",{y:7,opacity:0},{y:0,opacity:1,duration:.64,stagger:.15,immediateRender:!1},ja+.69).to({},{duration:.8},ja+2.57),Ry()}Ie(".story-start").addEventListener("click",()=>{if(!jm){jm=!0,Ie("#story-presentation").hidden=!1,Ie(".showcase-stage").dataset.story="started",dA(),Ie(".story-start").hidden=!0;try{ko=Ty()}catch{let r=Ie("#study-scene");r.classList.remove("ready"),r.dataset.renderer="fallback",Ie("canvas",r)?.remove()}Tf.add(()=>Oy()),Ht.paused&&Qi.progress(1).pause(),Ie("#studies-title").focus({preventScroll:!0}),hr()}});Ie(".story-replay").addEventListener("click",()=>{Qi?.time(0).pause(),hr()});function pA(r){tl=Dt(".toolkit-group").map((e,t)=>{let n=Ie(".toolkit-reel",e),i=Dt("li",e);if(n.childElementCount===1)for(let o of[...i.slice(1),i[0]]){let a=n.firstElementChild.cloneNode(!1);a.textContent=o.textContent,n.append(a)}let s=qt.timeline({paused:!0,repeat:-1});return s.fromTo(n,{yPercent:0},{yPercent:-100*i.length/n.childElementCount,duration:i.length,ease:"none"}),s.time(r[t]??t*.17)})}ng.addEventListener("change",r=>fA(r.matches));uA.addEventListener("change",()=>{nl(),Pf(!1),$e.refresh()});window.addEventListener("resize",()=>{Py!==innerWidth<=760&&(Pf(!1),$e.refresh())});document.addEventListener("visibilitychange",hr);function nl(r=!1){Pc=!1,Ie("#mobile-menu").hidden=!0,Ie(".menu-toggle").setAttribute("aria-expanded","false"),Ie(".menu-toggle").setAttribute("aria-label","\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.remove("menu-open"),Ie("#main").inert=!1,Ie(".site-footer").inert=!1,r&&Ie(".menu-toggle").focus(),hr()}Ie(".menu-toggle").addEventListener("click",()=>{if(Pc){nl(!0);return}Pc=!0,Ie("#mobile-menu").hidden=!1,Ie(".menu-toggle").setAttribute("aria-expanded","true"),Ie(".menu-toggle").setAttribute("aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.add("menu-open"),Ie("#main").inert=!0,Ie(".site-footer").inert=!0,Ie("#mobile-menu a").focus(),hr()});for(let r of Dt("#mobile-menu a"))r.addEventListener("click",()=>nl());document.addEventListener("keydown",r=>{if(Pc&&(r.key==="Escape"&&(r.preventDefault(),nl(!0)),r.key==="Tab")){let e=[...Dt(".site-header a,.site-header button"),...Dt("#mobile-menu a")].filter(n=>n.getClientRects().length),t=e.indexOf(document.activeElement);r.shiftKey&&t<=0&&(r.preventDefault(),e.at(-1).focus()),!r.shiftKey&&t===e.length-1&&(r.preventDefault(),e[0].focus())}});function Uy(r){let e=document.activeElement;nl(),Ny=e,r.showModal(),r.scrollTop=0,hr()}for(let r of Dt('[data-open="brief"]'))r.addEventListener("click",()=>Uy(Ie("#brief-dialog")));for(let r of Dt("[data-scroll]"))r.addEventListener("click",()=>document.getElementById(r.dataset.scroll)?.scrollIntoView({behavior:Ht.paused?"instant":"smooth"}));for(let r of Dt("dialog"))Ie(".close-dialog",r).addEventListener("click",()=>r.close()),r.addEventListener("close",()=>{hr(),Ny?.focus({preventScroll:!0})}),r.addEventListener("click",e=>{let t=r.getBoundingClientRect();e.target===r&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&r.close()});var Cf="alexey-project-draft-v1",Fy=Dt('#brief-form input[name="service"]');function By(){return{services:Fy.filter(r=>r.checked).map(r=>r.value),idea:Ie("#idea").value.trim(),timing:Ie("#timing").value.trim()}}function mA(){Ef.set(Cf,JSON.stringify(By()))}try{let r=JSON.parse(Ef.get(Cf)||"null");r&&typeof r=="object"&&(Fy.forEach(e=>{e.checked=Array.isArray(r.services)&&r.services.includes(e.value)}),typeof r.idea=="string"&&(Ie("#idea").value=r.idea.slice(0,3e3)),typeof r.timing=="string"&&(Ie("#timing").value=r.timing.slice(0,150)))}catch{Ef.remove(Cf)}Ie("#brief-form").addEventListener("input",mA);function ky(){let r=By();return!r.services.length&&!r.idea?(Ie("#brief-status").textContent="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u043F\u0438\u0448\u0438\u0442\u0435 \u0438\u0434\u0435\u044E.",Ie("#idea").focus(),null):`\u0410\u043B\u0435\u043A\u0441\u0435\u0439, \u043F\u0440\u0438\u0432\u0435\u0442! \u0425\u043E\u0447\u0443 \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442.

\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: ${r.services.join(", ")||"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043C \u0432\u043C\u0435\u0441\u0442\u0435"}.${r.idea?`

\u0418\u0434\u0435\u044F:
${r.idea}`:""}${r.timing?`

\u0421\u0440\u043E\u043A\u0438: ${r.timing}`:""}`}function zy(r){let e=URL.createObjectURL(new Blob(["\uFEFF"+r],{type:"text/plain;charset=utf-8"})),t=document.createElement("a");t.href=e,t.download="\u041C\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u2014 \u0431\u0440\u0438\u0444 \u0434\u043B\u044F \u0410\u043B\u0435\u043A\u0441\u0435\u044F.txt",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),Ie("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u0444\u0430\u0439\u043B. \u041C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u044C \u0435\u0433\u043E \u043A \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044E."}Ie("#brief-form").addEventListener("submit",async r=>{r.preventDefault();let e=ky();if(e)try{await navigator.clipboard.writeText(e),Ie("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D. \u041C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435."}catch{zy(e)}});Ie(".download-brief").addEventListener("click",()=>{let r=ky();r&&zy(r)});Ie(".clear-draft").addEventListener("click",()=>{Ie("#brief-form").reset(),Ef.remove(Cf),Ie("#brief-status").textContent="\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043E\u0447\u0438\u0449\u0435\u043D."});var Bo=window.PORTFOLIO_CONTENT&&typeof window.PORTFOLIO_CONTENT=="object"?window.PORTFOLIO_CONTENT:{};function $m(r,e=!1){if(typeof r!="string"||!r.trim())return null;try{let t=new URL(r,location.href);if(["https:","http:"].includes(t.protocol)||e&&t.protocol==="file:"&&!/^[a-z]+:/i.test(r))return t.href}catch{}return null}function gA(r,e){let t=document.createElement("a");t.textContent=r,t.href=e,e.startsWith("https:")&&(t.target="_blank",t.rel="noopener noreferrer"),Ie("#contact-links").append(t),Ie("#contact-links").hidden=!1}var el=sg(Bo.telegram);for(let r of Dt("[data-telegram-link]"))r.hidden=!el,el?r.href=el.url:r.removeAttribute("href");Ie(".contact-invitation").hidden=!el;Ie("[data-telegram-label]").textContent=el?.label??"";for(let r of Dt("[data-without-telegram]"))r.hidden=!!el;typeof Bo.email=="string"&&/^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(Bo.email)&&gA(Bo.email,`mailto:${encodeURIComponent(Bo.email)}`);var wf=Array.isArray(Bo.projects)?Bo.projects.filter(r=>r&&typeof r.title=="string"&&r.title.trim()&&typeof r.description=="string"):[];if(wf.length){let e=function(n){Ie("#project-title").textContent=n.title,Ie(".project-detail-description").textContent=n.description,Ie(".project-detail-tags").textContent=Array.isArray(n.tags)?n.tags.filter(l=>typeof l=="string").join(" / "):"";let i=Ie(".project-detail-image"),s=$m(n.image,!0);i.hidden=!s,s?(i.src=s,i.alt=n.title,i.onerror=()=>{i.hidden=!0}):i.removeAttribute("src");let o=Ie(".project-detail-link"),a=$m(n.url);o.hidden=!a,a?o.href=a:o.removeAttribute("href"),Uy(Ie("#project-dialog"))},t=function(n){let i=wf.filter(s=>n==="\u0412\u0441\u0435"||s.category===n);Ie(".project-grid").replaceChildren();for(let s of i){let o=document.createElement("button");o.className="project-card";let a=$m(s.image,!0);if(a){let u=document.createElement("img");u.src=a,u.alt=s.title,u.loading="lazy",u.onerror=()=>{u.remove()},o.append(u)}let l=document.createElement("h3");l.textContent=s.title;let c=document.createElement("p");c.textContent=s.category||"\u041F\u0440\u043E\u0435\u043A\u0442",o.append(l,c),o.addEventListener("click",()=>e(s)),Ie(".project-grid").append(o)}for(let s of Dt(".project-filters button"))s.setAttribute("aria-pressed",String(s.textContent===n));Ie(".project-count").textContent=`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432: ${i.length}`,$e.refresh()};Ie("#projects").hidden=!1;let r=["\u0412\u0441\u0435",...new Set(wf.map(n=>n.category).filter(n=>typeof n=="string"&&n))];for(let n of r){let i=document.createElement("button");i.textContent=n,i.setAttribute("aria-pressed",String(n==="\u0412\u0441\u0435")),i.addEventListener("click",()=>t(n)),Ie(".project-filters").append(i)}for(let n of Dt(".desktop-nav,#mobile-menu")){let i=document.createElement("a");i.href="#projects",i.textContent="\u0420\u0430\u0431\u043E\u0442\u044B",i.addEventListener("click",()=>nl()),n.prepend(i)}t("\u0412\u0441\u0435")}var Hy=new IntersectionObserver(r=>{for(let e of r){if(!e.isIntersecting)continue;let{target:t,rootBounds:n,boundingClientRect:i}=e;Hy.unobserve(t),t.classList.remove("arrival-pending"),!(!n||Ht.paused||t.matches(":target, :focus-within"))&&i.top>=n.top+n.height*.35&&t.classList.add("scroll-arrival")}},{rootMargin:"0px 0px -64px"}),_A=document.documentElement.clientHeight;for(let r of Dt(".expertise-intro, .service-item, .collaboration-intro, .questions-list article, #contact-title"))r.getBoundingClientRect().top>=_A&&(r.classList.add("arrival-pending"),Hy.observe(r));var xA=new IntersectionObserver(r=>{for(let e of r)e.target.classList.toggle("in-view",e.isIntersecting)});Dt(".service-item").forEach(r=>xA.observe(r));var yA=new IntersectionObserver(r=>{for(let e of r)if(e.isIntersecting)for(let t of Dt(".desktop-nav a"))t.hash==="#"+e.target.id?t.setAttribute("aria-current","location"):t.removeAttribute("aria-current")},{rootMargin:"-20% 0px -60% 0px"});for(let r of Dt("main > section"))r.hidden||yA.observe(r);window.addEventListener("scroll",()=>{Ie(".site-header").classList.toggle("scrolled",scrollY>30),Ht.paused||(Ht.scroll=Math.min(1,scrollY/innerHeight))},{passive:!0});document.addEventListener("pointermove",r=>{!ig()||r.pointerType==="touch"||(Ht.tx=r.clientX/innerWidth*2-1,Ht.ty=r.clientY/innerHeight*2-1)},{passive:!0});by(Ht,Mf).then(r=>{as=r}).catch(()=>{Ie("#scene").classList.remove("ready","archive-loading"),Ie("#scene").dataset.renderer="fallback",Ie("#scene canvas")?.remove()});var vA=new IntersectionObserver(([r])=>{Af=r.isIntersecting&&r.intersectionRatio>=.25,Af&&ko?.frame(zs.value,!0),hr()},{threshold:[0,.25]});vA.observe(Ie(".showcase-stage"));var SA=new IntersectionObserver(([r])=>{Cy=r.isIntersecting&&r.intersectionRatio>=.2,hr()},{threshold:[0,.2]});SA.observe(Ie("#experience"));var Gy=Dt(".toolkit-group"),MA=new IntersectionObserver(r=>{for(let e of r){let t=Gy.indexOf(e.target);e.isIntersecting&&e.intersectionRatio>=.15?Qm.add(t):Qm.delete(t)}hr()},{threshold:[0,.15]});Gy.forEach(r=>MA.observe(r));var bA=new IntersectionObserver(([r])=>{Ht.heroVisible=r.isIntersecting});bA.observe(Ie(".hybrid-hero"));qt.ticker.add((r,e)=>{ig()&&(Af&&ko?.frame(zs.value),Ht.heroVisible&&(Ht.time+=Math.min(e/1e3,.15),as?.frame(Math.min(e/1e3,.05))))});document.body.classList.toggle("motion-paused",Ht.paused);Pf(!0);document.fonts.ready.then(()=>{as?.resize(),$e.refresh(),document.documentElement.dataset.ready="true"});Object.defineProperty(window,"portfolioStatus",{value:()=>({paused:Ht.paused,frames:Ht.frames,heroBounds:as?.bounds(),documents:as?.documentStatus()||[],renderer:Ie("#scene").dataset.renderer,heroVisible:Ht.heroVisible,projects:wf.length,scrollScenes:$e.getAll().length,studyRenderer:Ie("#study-scene").dataset.renderer,studyProgress:zs.value,studyFrames:ko?.frames||0,storyTime:Qi?.time()||0,storyDuration:Qi?.duration()||0,storyPhase:Rf,storyPlaying:Qi?.isActive()||!1,counterTime:ks?.time()||0,counterPlaying:ks?.isActive()||!1,toolkitTimes:tl.map(r=>r.totalTime()),toolkitPlaying:tl.map(r=>r.isActive())})});})();
/*! For license information please see app.js.LEGAL.txt */
