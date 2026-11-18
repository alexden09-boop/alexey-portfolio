(()=>{function Jp(r){if(typeof r!="string"||!r.trim())return null;try{let e=new URL(r);if(!["https:","http:"].includes(e.protocol)||!["t.me","telegram.me"].includes(e.hostname))return null;let t=/^\/([a-z\d_]+)\/?$/i.exec(e.pathname);return{url:e.href,label:t?"@"+t[1]:"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram"}}catch{return null}}function fr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function rm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},So={duration:.5,overwrite:!1,delay:0},xf,Sn,Ot,Ti=1e8,wt=1/Ti,hf=Math.PI*2,xx=hf/4,vx=0,sm=Math.sqrt,yx=Math.cos,Sx=Math.sin,cn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},pr=function(e){return typeof e=="number"},fc=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},ti=function(e){return e!==!1},vf=function(){return typeof window<"u"},tc=function(e){return Yt(e)||cn(e)},am=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,Mx=/random\([^)]+\)/g,bx=/,\s*/g,$p=/(?:-?\.?\d|\.)+/gi,yf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sf=/[+-]=-?[.\d]+/,Tx=/[^,'"\[\]\s]+/gi,wx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Zi,uf,Mf,ci={},sc={},om,lm=function(e){return(sc=ra(e,ci))&&In},dc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Mo=function(e,t){return!t&&console.warn(e)},cm=function(e,t){return e&&(ci[e]=t)&&sc&&(sc[e]=t)||ci},bo=function(){return 0},Ex={suppressEvents:!0,isStart:!0,kill:!1},nc={suppressEvents:!0,kill:!1},Ax={suppressEvents:!0},bf={},Gr=[],ff={},hm,jn={},rf={},Kp=30,ic=[],Tf="",wf=function(e){var t=e[0],n,i;if($i(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ic.length;i--&&!ic[i].targetTest(t););n=ic[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Cf(e[i],n)))||e.splice(i,1);return e},Vr=function(e){return e._gsap||wf(wi(e))[0]._gsap},Ef=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():fc(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Ss=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Rx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ac=function(){var e=Gr.length,t=Gr.slice(0),n,i;for(ff={},Gr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Af=function(e){return!!(e._initted||e._startAt||e.add)},um=function(e,t,n,i){Gr.length&&!Sn&&ac(),e.render(t,n,i||!!(Sn&&t<0&&Af(e))),Gr.length&&!Sn&&ac()},fm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tx).length<2?t:cn(e)?e.trim():e},dm=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ra=function(e,t){for(var n in t)e[n]=t[n];return e},Qp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},oc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},xo=function(e){var t=e.parent||Gt,n=e.keyframes?Cx(Pn(e.keyframes)):hi;if(ti(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Px=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},pm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},pc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ix=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},df=function(e,t,n,i){return e._startAt&&(Sn?e._startAt.revert(nc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Lx=function r(e){return!e||e._ts&&r(e.parent)},jp=function(e){return e._repeat?sa(e._tTime,e=e.duration()+e._rDelay)*e:0},sa=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},lc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},mc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},gc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),mc(e),n._dirty||_s(n,e)),e},mm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=lc(e.rawTime(),t),(!t._dur||Ao(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),_s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Ji=function(e,t,n,i){return t.parent&&Hr(t),t._start=zt((pr(n)?n:!n&&cc(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Gt?bi(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pm(e,t,"_first","_last",e._sort?"_start":0),cc(t)||(e._recent=t),i||mm(e,t),e._ts<0&&gc(e,e._tTime),e},gm=function(e,t){return(ci.ScrollTrigger||dc("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},_m=function(e,t,n,i,s){if(Lf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hm!==ei.frame)return Gr.push(e),e._lazy=[s,i],1},Dx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Nx=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Dx(e)&&!(!e._initted&&cc(e))||(e._ts<0||e._dp._ts<0)&&!cc(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=Ao(0,e._tDur,t),h=sa(l,o),e._yoyo&&h&1&&(a=1-a),h!==sa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Sn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&_m(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&df(e,t,n,!0),e._onUpdate&&!n&&li(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Hr(e,1),!n&&!Sn&&(li(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ux=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},aa=function(e,t,n,i){var s=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:zt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&gc(e,e._tTime=e._tDur*o),e.parent&&mc(e),n||_s(e.parent,e),e},em=function(e){return e instanceof Cn?_s(e):aa(e,e._dur)},Ox={_start:0,endTime:bo,totalDuration:bo},bi=function r(e,t,n){var i=e.labels,s=e._recent||Ox,a=e.duration()>=Ti?s.endTime(!1):e._dur,o,l,c;return cn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},vo=function(e,t,n){var i=pr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ti(l.vars.inherit)&&l.parent;a.immediateRender=ti(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new $t(t[0],a,t[s+1])},Wr=function(e,t){return e||e===0?t(e):t},Ao=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!cn(e)||!(t=wx.exec(e))?"":t[1]},Fx=function(e,t,n){return Wr(n,function(i){return Ao(e,t,i)})},pf=[].slice,xm=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Zi},Bx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return cn(i)&&!t||xm(i,1)?(s=n).push.apply(s,wi(i)):n.push(i)})||n},wi=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):cn(e)&&!n&&(uf||!oa())?pf.call((t||Mf).querySelectorAll(e),0):Pn(e)?Bx(e,n):xm(e)?pf.call(e,0):e?[e]:[]},mf=function(e){return e=wi(e)[0]||Mo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?Mo("Invalid scope")||Mf.createElement("div"):e)}},vm=function(e){return e.sort(function(){return .5-Math.random()})},ym=function(e){if(Yt(e))return e;var t=$i(e)?e:{each:e},n=xs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return cn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(f,u,p){var _=(p||t).length,m=a[_],g,v,b,y,E,A,x,M,R;if(!m){if(R=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!R){for(x=-Ti;x<(x=p[R++].getBoundingClientRect().left)&&R<_;);R<_&&R--}for(m=a[_]=[],g=l?Math.min(R,_)*h-.5:i%R,v=R===Ti?0:l?_*d/R-.5:i/R|0,x=0,M=Ti,A=0;A<_;A++)b=A%R-g,y=v-(A/R|0),m[A]=E=c?Math.abs(c==="y"?y:b):sm(b*b+y*y),E>x&&(x=E),E<M&&(M=E);i==="random"&&vm(m),m.max=x-M,m.min=M,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(R>_?_-1:c?c==="y"?_/R:R:Math.max(R,_/R))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Mn(t.amount||t.each)||0,n=n&&_<0?Kx(n):n}return _=(m[f]-m.min)/m.max||0,zt(m.b+(n?n(_):_)*m.v)+m.u}},gf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(pr(n)?0:Mn(n))}},Sm=function(e,t){var n=Pn(e),i,s;return!n&&$i(e)&&(i=n=e.radius||Ti,e.values?(e=wi(e.values),(s=!pr(e[0]))&&(i*=i)):e=gf(e.increment)),Wr(t,n?Yt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ti,h=0,d=e.length,f,u;d--;)s?(f=e[d].x-o,u=e[d].y-l,f=f*f+u*u):f=Math.abs(e[d]-o),f<c&&(c=f,h=d);return h=!i||c<=i?e[h]:a,s||h===a||pr(a)?h:h+Mn(a)}:gf(e))},Mm=function(e,t,n,i){return Wr(Pn(e)?!t:n===!0?!!(n=0):!i,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},kx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},zx=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},Gx=function(e,t,n){return Tm(e,t,0,1,n)},bm=function(e,t,n){return Wr(n,function(i){return e[~~t(i)]})},Vx=function r(e,t,n){var i=t-e;return Pn(e)?bm(e,r(0,e.length),t):Wr(n,function(s){return(i+(s-e)%i)%i+e})},Hx=function r(e,t,n){var i=t-e,s=i*2;return Pn(e)?bm(e,r(0,e.length-1),t):Wr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},la=function(e){return e.replace(Mx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(bx);return Mm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Tm=function(e,t,n,i,s){var a=t-e,o=i-n;return Wr(s,function(l){return n+((l-e)/a*o||0)})},Wx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var a=cn(e),o={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(h=[],d=e.length,f=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var _=Math.min(f,~~p);return h[_](p-_)},n=t}else i||(e=ra(Pn(e)?[]:{},e));if(!h){for(l in t)Pf.call(o,e,l,"get",t[l]);s=function(p){return Uf(p,o)||(a?e.p:e)}}}return Wr(n,s)},tm=function(e,t,n){var i=e.labels,s=Ti,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},li=function(e,t,n){var i=e.vars,s=i[t],a=Ot,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Gr.length&&ac(),o&&(Ot=o),h=l?s.apply(c,l):s.call(c),Ot=a,h},go=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&li(e,"onInterrupt"),e},ia,wm=[],Em=function(e){if(e)if(e=!e.name&&e.default||e,vf()||e.headless){var t=e.name,n=Yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:bo,render:Uf,add:Pf,kill:ov,modifier:av,rawVars:0},a={targetTest:0,get:0,getSetter:_c,aliases:{},register:0};if(oa(),e!==i){if(jn[t])return;hi(i,hi(oc(e,s),a)),ra(i.prototype,ra(s,oc(e,a))),jn[i.prop=t]=i,e.targetTest&&(ic.push(i),bf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cm(t,i),e.register&&e.register(In,i,Hn)}else wm.push(e)},Pt=255,_o={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},sf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},Am=function(e,t,n){var i=e?pr(e)?[e>>16,e>>8&Pt,e&Pt]:0:_o.black,s,a,o,l,c,h,d,f,u,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_o[e])i=_o[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Pt,i&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match($p),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=sf(l+1/3,s,a),i[1]=sf(l,s,a),i[2]=sf(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(yf),n&&i.length<4&&(i[3]=1),i}else i=e.match($p)||_o.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Pt,a=i[1]/Pt,o=i[2]/Pt,d=Math.max(s,a,o),f=Math.min(s,a,o),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===s?(a-o)/u+(a<o?6:0):d===a?(o-s)/u+2:(s-a)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Rm=function(e){var t=[],n=[],i=-1;return e.split(dr).forEach(function(s){var a=s.match(ys)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},nm=function(e,t,n){var i="",s=(e+i).match(dr),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(f){return(f=Am(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Rm(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(dr,"1").split(ys),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(dr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},dr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _o)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Xx=/hsl[a]?\(/,Rf=function(e){var t=e.join(" "),n;if(dr.lastIndex=0,dr.test(t))return n=Xx.test(t),e[1]=nm(e[1],n),e[0]=nm(e[0],n,Rm(e[1])),!0},To,ei=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,f,u,p=function _(m){var g=r()-i,v=m===!0,b,y,E,A;if((g>e||g<0)&&(n+=g-t),i+=g,E=i-n,b=E-a,(b>0||v)&&(A=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,a+=b+(b>=s?0:s-b),y=1),v||(l=c(_)),y)for(u=0;u<o.length;u++)o[u](E,f,A,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){om&&(!uf&&vf()&&(Zi=uf=window,Mf=Zi.document||{},ci.gsap=In,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(In.version),lm(sc||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),wm.forEach(Em)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},To=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),To=0,c=bo},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,g,v){var b=g?function(y,E,A,x){m(y,E,A,x),d.remove(b)}:m;return d.remove(m),o[v?"unshift":"push"](b),oa(),b},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&u>=g&&u--},_listeners:o},d})(),oa=function(){return!To&&ei.wake()},gt={},qx=/^[\d.\-M][\d.\-,\s]/,Yx=/["']/g,Zx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Yx,"").trim():+c,i=l.substr(o+1).trim();return t},Jx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$x=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zx(t[1])]:Jx(e).split(",").map(fm)):gt._CE&&qx.test(e)?gt._CE("",e):n},Kx=function(e){return function(t){return 1-e(1-t)}},xs=function(e,t){return e&&(Yt(e)?e:gt[e]||$x(e))||t},Ms=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Vn(e,function(o){gt[o]=ci[o]=s,gt[a=o.toLowerCase()]=n;for(var l in s)gt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[o+"."+l]=s[l]}),s},Cm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},af=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/hf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Sx((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Cm(o);return s=hf/s,l.config=function(c,h){return r(e,c,h)},l},of=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Cm(n);return i.config=function(s){return r(e,s)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ms(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;Ms("Elastic",af("in"),af("out"),af());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ms("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ms("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ms("Circ",function(r){return-(sm(1-r*r)-1)});Ms("Sine",function(r){return r===1?1:-yx(r*xx)+1});Ms("Back",of("in"),of("out"),of());gt.SteppedEase=gt.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((i*Ao(0,a,o)|0)+s)*n}}};So.ease=gt["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Tf+=r+","+r+"Params,"});var Cf=function(e,t){this.id=vx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ef,this.set=t?t.getSetter:_c},wo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,aa(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),To||ei.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,aa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(oa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gc(this,n),!s._dp||s.parent||mm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),um(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?sa(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?lc(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Ao(-Math.abs(this._delay),o,s),i!==!1),mc(this),Ix(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{oa(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==wt,a;if(s)for(this._tTime-=wt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+wt){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ji(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ax);var i=Sn;return Sn=n,Af(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,em(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,em(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bi(this,n),ti(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ti(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Yt(n)?n:dm,l=function(){var h=i.then;i.then=null,s&&s(),Yt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){go(this)},r})();hi(wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Cn=(function(r){rm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ti(n.sortChildren),Gt&&Ji(n.parent||Gt,fr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gm(fr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return vo(0,arguments,this),this},t.from=function(i,s,a){return vo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return vo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,xo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(i,s,bi(this,a),1),this},t.call=function(i,s,a){return Ji(this,$t.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new $t(i,a,bi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,xo(a).immediateRender=ti(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,xo(o).immediateRender=ti(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:zt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,p,_,m,g,v,b,y,E,A,x;if(this!==Gt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,b=this._ts,g=!b,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=zt(h%m),h===l?(_=this._repeat,f=c):(E=zt(h/m),_=~~E,_&&_===E&&(f=c,_--),f>c&&(f=c)),E=sa(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),A&&_&1&&(f=c-f,x=1),_!==E&&!this._lock){var M=A&&E&1,R=M===(A&&_&1);if(_<E&&(M=!M),o=M?0:h%c?c:h,this._lock=1,this.render(o||(x?0:zt(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Ux(this,zt(o),zt(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!E&&(li(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,s,a),f!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=-wt);break}}u=p}else{u=this._last;for(var S=i<0?i:f;u;){if(p=u._prev,(u._act||S<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(S-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(S-u._start)*u._ts,s,a||Sn&&Af(u)),f!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=S?-wt:wt);break}}u=p}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-wt)._zTime=f>=o?1:-1,this._ts))return this._start=y,mc(this),this.render(i,s,a);this._onUpdate&&!s&&li(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Hr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(li(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(pr(s)||(s=bi(this,s,i)),!(i instanceof wo)){if(Pn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(cn(i))return this.addLabel(i,s);if(Yt(i))i=$t.delayedCall(0,i);else return this}return this!==i?Ji(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof $t?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return cn(i)?this.removeLabel(i):Yt(i)?this.killTweensOf(i):(i.parent===this&&pc(this,i),i===this._recent&&(this._recent=this._last),_s(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=$t.delayedCall(0,s||bo,a);return o.data="isPause",this._hasPause=1,Ji(this,o,bi(this,i))},t.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&Hr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)zr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=wi(i),l=this._first,c=pr(s),h;l;)l instanceof $t?Rx(l._targets,o)&&(c?(!zr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=bi(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,p=$t.to(a,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!u){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&aa(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,d||[])}},s));return f?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,hi({startAt:{time:bi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),tm(this,bi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),tm(this,bi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=zt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return _s(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_s(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ti,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ji(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=zt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;aa(a,a===Gt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Gt._ts&&(um(Gt,lc(i,Gt)),hm=ei.frame),ei.frame>=Kp){Kp+=ni.autoSleep||120;var s=Gt._first;if((!s||!s._ts)&&ni.autoSleep&&ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ei.sleep()}}},e})(wo);hi(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qx=function(e,t,n,i,s,a,o){var l=new Hn(this._pt,e,t,0,1,Nf,null,s),c=0,h=0,d,f,u,p,_,m,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=la(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),f=n.match(nf)||[];d=nf.exec(i);)p=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?Ss(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=nf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Sf.test(i)||g)&&(l.e=0),this._pt=l,l},Pf=function(e,t,n,i,s,a,o,l,c,h){Yt(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:Yt(d)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,u=Yt(d)?c?iv:Im:Df,p;if(cn(i)&&(~i.indexOf("random(")&&(i=la(i)),i.charAt(1)==="="&&(p=Ss(f,i)+(Mn(f)||0),(p||p===0)&&(i=p))),!h||f!==i||_f)return!isNaN(f*i)&&i!==""?(p=new Hn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?sv:Lm,0,u),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!d&&!(t in e)&&dc(t,i),Qx.call(this,e,t,f,i,u,l||ni.stringFilter,c))},jx=function(e,t,n,i,s){if(Yt(e)&&(e=yo(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||Pn(e)||am(e))return cn(e)?yo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=yo(e[o],s,t,n,i);return a},If=function(e,t,n,i,s,a){var o,l,c,h;if(jn[e]&&(o=new jn[e]).init(s,o.rawVars?t[e]:jx(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Hn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ia))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},zr,_f,Lf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:m,b=e._overwrite==="auto"&&!xf,y=e.timeline,E=i.easeReverse||d,A,x,M,R,S,L,C,O,D,k,V,U,K;if(y&&(!f||!s)&&(s="none"),e._ease=xs(s,So.ease),e._rEase=E&&(xs(E)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if(O=m[0]?Vr(m[0]).harness:0,U=O&&i[O.prop],A=oc(i,bf),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!u?_.render(-1,!0):_.revert(h&&p?nc:Ex),_._lazy=0),a){if(Hr(e._startAt=$t.set(m,hi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ti(l),startAt:null,delay:0,onUpdate:c&&function(){return li(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!o&&!u)&&e._startAt.revert(nc),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(o=!1),M=hi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ti(l),immediateRender:o,stagger:0,parent:g},A),U&&(M[O.prop]=U),Hr(e._startAt=$t.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(nc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ti(l)||l&&!p,x=0;x<m.length;x++){if(S=m[x],C=S._gsap||wf(m)[x]._gsap,e._ptLookup[x]=k={},ff[C.id]&&Gr.length&&ac(),V=v===m?x:v.indexOf(S),O&&(D=new O).init(S,U||A,e,V,v)!==!1&&(e._pt=R=new Hn(e._pt,S,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(H){k[H]=R}),D.priority&&(L=1)),!O||U)for(M in A)jn[M]&&(D=If(M,A,e,V,S,v))?D.priority&&(L=1):k[M]=R=Pf.call(e,S,M,"get",A[M],V,v,0,i.stringFilter);e._op&&e._op[x]&&e.kill(S,e._op[x]),b&&e._pt&&(zr=e,Gt.killTweensOf(S,k,e.globalTime(t)),K=!e.parent,zr=0),e._pt&&l&&(ff[C.id]=1)}L&&Of(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&y.render(Ti,!0,!0)},ev=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,u;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,u=e._targets.length;u--;){if(h=f[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return _f=1,e.vars[t]="+=0",Lf(e,o),_f=0,l?Mo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Zt(n)+Mn(d.e)),d.b&&(d.b=h.s+Mn(d.b))},tv=function(e,t){var n=e[0]?Vr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ra({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},nv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Pn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},yo=function(e,t,n,i,s){return Yt(e)?e.call(t,n,i,s):cn(e)&&~e.indexOf("random(")?la(e):e},hc=Tf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Pm={};Vn(hc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Pm[r]=1});hc=hc.split(",");var $t=(function(r){rm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:xo(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Gt,v=(Pn(n)||am(n)?pr(n[0]):"length"in i)?[n]:wi(n),b,y,E,A,x,M,R,S;if(o._targets=v.length?wf(v):Mo("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,p||f||tc(c)||tc(h)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(b=o.timeline=new Cn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),b.kill(),b.parent=b._dp=fr(o),b._start=0,f||tc(c)||tc(h)){if(A=v.length,R=f&&ym(f),$i(f))for(x in f)~hc.indexOf(x)&&(S||(S={}),S[x]=f[x]);for(y=0;y<A;y++)E=oc(i,Pm),E.stagger=0,L&&(E.easeReverse=L),S&&ra(E,S),M=v[y],E.duration=+yo(c,fr(o),y,M,v),E.delay=(+yo(h,fr(o),y,M,v)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),b.to(M,E,R?R(y,M,v):0),b._ease=gt.none;b.duration()?c=h=0:o.timeline=0}else if(p){xo(hi(b.vars.defaults,{ease:"none"})),b._ease=xs(p.ease||i.ease||"none");var C=0,O,D,k;if(Pn(p))p.forEach(function(V){return b.to(v,V,">")}),b.duration();else{E={};for(x in p)x==="ease"||x==="easeEach"||nv(x,p[x],E,p.easeEach);for(x in E)for(O=E[x].sort(function(V,U){return V.t-U.t}),C=0,y=0;y<O.length;y++)D=O[y],k={ease:D.e,duration:(D.t-(y?O[y-1].t:0))/100*c},k[x]=D.v,b.to(v,k,C),C+=k.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return u===!0&&!xf&&(zr=fr(o),Gt.killTweensOf(v),zr=0),Ji(g,fr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!p&&o._start===zt(g._time)&&ti(d)&&Lx(fr(o))&&g.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-h)||0)),m&&gm(fr(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-wt&&!h?l:i<wt?0:i,f,u,p,_,m,g,v,b;if(!c)Nx(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=zt(d%_),d===l?(p=this._repeat,f=c):(m=zt(d/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=sa(this._tTime,_),f===o&&!a&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(zt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(_m(this,h?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var E=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(y?-1:1)/E:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(li(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&df(this,i,s,a),li(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&df(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hr(this,1),!s&&!(h&&!o)&&(d||o||g)&&(li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){To||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Lf(this,c),h=this._ease(c/this._dur),ev(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(gc(this,0),this.parent||pm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,zr&&zr.vars.overwrite!==!0)._first||go(this),this.parent&&a!==this.timeline.totalDuration()&&aa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?wi(i):o,c=this._ptLookup,h=this._pt,d,f,u,p,_,m,g;if((!s||s==="all")&&Px(o,l))return s==="all"&&(this._pt=0),go(this);for(d=this._op=this._op||[],s!=="all"&&(cn(s)&&(_={},Vn(s,function(v){return _[v]=1}),s=_),s=tv(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],s==="all"?(d[g]=s,p=f,u={}):(u=d[g]=d[g]||{},p=s);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&pc(this,m,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&go(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return vo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return vo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Gt.killTweensOf(i,s,a)},e})(wo);hi($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var e=new Cn,t=pf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Df=function(e,t,n){return e[t]=n},Im=function(e,t,n){return e[t](n)},iv=function(e,t,n,i){return e[t](i.fp,n)},rv=function(e,t,n){return e.setAttribute(t,n)},_c=function(e,t){return Yt(e[t])?Im:fc(e[t])&&e.setAttribute?rv:Df},Lm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Nf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Uf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},av=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},ov=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?pc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},lv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Of=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Hn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Lm,this.d=l||this,this.set=c||Df,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=lv,this.m=n,this.mt=s,this.tween=i},r})();Vn(Tf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return bf[r]=1});ci.TweenMax=ci.TweenLite=$t;ci.TimelineLite=ci.TimelineMax=Cn;Gt=new Cn({sortChildren:!1,defaults:So,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=Rf;var vs=[],rc={},cv=[],im=0,hv=0,lf=function(e){return(rc[e]||cv).map(function(t){return t()})},Eo=function(){var e=Date.now(),t=[];e-im>2&&(lf("matchMediaInit"),vs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Zi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),lf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),im=e,lf("matchMedia"))},Dm=(function(){function r(t,n){this.selector=n&&mf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Yt(n)&&(s=i,i=n,n=Yt);var a=this,o=function(){var c=Ot,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=mf(s)),Ot=a,d=i.apply(a,arguments),Yt(d)&&a._r.push(d),Ot=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Yt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ot;Ot=null,n(this),Ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=vs.length;a--;)vs[a].id===this.id&&vs.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Eo):o.removeEventListener("change",Eo)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),uv=(function(){function r(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$i(n)||(n={matches:n});var a=new Dm(0,s||this.scope),o=a.conditions={},l,c,h;Ot&&!a.selector&&(a.selector=Ot.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Zi.matchMedia(n[c]),l&&(vs.indexOf(a)<0&&vs.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Eo):l.addEventListener("change",Eo),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),uc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Em(i)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){cn(e)&&(e=wi(e)[0]);var s=Vr(e||{}).get,a=n?dm:fm;return n==="native"&&(n=""),e&&(t?a((jn[t]&&jn[t].get||s)(e,t,n,i)):function(o,l,c){return a((jn[o]&&jn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var i=e.map(function(h){return In.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var a=jn[t],o=Vr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;ia._pt=0,d.init(e,n?h+n:h,ia,0,[e]),d.render(1,d),ia._pt&&Uf(1,ia)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=In.to(e,hi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xs(e.ease,So.ease)),Qp(So,e||{})},config:function(e){return Qp(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!jn[o]&&!ci[o]&&Mo(t+" effect requires "+o+" plugin.")}),rf[t]=function(o,l,c){return n(wi(o),hi(l||{},s),c)},a&&(Cn.prototype[t]=function(o,l,c){return this.add(rf[t](o,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=xs(t)},parseEase:function(e,t){return arguments.length?xs(e,t):gt},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),i,s;for(n.smoothChildTiming=ti(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,i=Gt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Ji(n,i,i._start-i._delay),i=s;return Ji(Gt,n,0),n},context:function(e,t){return e?new Dm(e,t):Ot},matchMedia:function(e){return new uv(e)},matchMediaRefresh:function(){return vs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Eo()},addEventListener:function(e,t){var n=rc[e]||(rc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=rc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Vx,wrapYoyo:Hx,distribute:ym,random:Mm,snap:Sm,normalize:Gx,getUnit:Mn,clamp:Fx,splitColor:Am,toArray:wi,selector:mf,mapRange:Tm,pipe:kx,unitize:zx,interpolate:Wx,shuffle:vm},install:lm,effects:rf,ticker:ei,updateRoot:Cn.updateRoot,plugins:jn,globalTimeline:Gt,core:{PropTween:Hn,globals:cm,Tween:$t,Timeline:Cn,Animation:wo,getCache:Vr,_removeLinkedListItem:pc,reverting:function(){return Sn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return xf=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return uc[r]=$t[r]});ei.add(Cn.updateRoot);ia=uc.to({},{duration:0});var fv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},dv=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=fv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},cf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(cn(s)&&(l={},Vn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}dv(o,s)}}}},In=uc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},cf("roundProps",gf),cf("modifiers"),cf("snap",Sm))||uc;$t.version=Cn.version=In.version="3.15.1";om=1;vf()&&oa();var pv=gt.Power0,mv=gt.Power1,gv=gt.Power2,_v=gt.Power3,xv=gt.Power4,vv=gt.Linear,yv=gt.Quad,Sv=gt.Cubic,Mv=gt.Quart,bv=gt.Quint,Tv=gt.Strong,wv=gt.Elastic,Ev=gt.Back,Av=gt.SteppedEase,Rv=gt.Bounce,Cv=gt.Sine,Pv=gt.Expo,Iv=gt.Circ;var Nm,Xr,ha,Vf,Es,Lv,Um,Hf,Dv=function(){return typeof window<"u"},gr={},ws=180/Math.PI,ua=Math.PI/180,ca=Math.atan2,Om=1e8,Wf=/([A-Z])/g,Nv=/(left|right|width|margin|padding|x)/i,Uv=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ov=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Bv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Wm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zv=function(e,t,n){return e.style[t]=n},Gv=function(e,t,n){return e.style.setProperty(t,n)},Vv=function(e,t,n){return e._gsap[t]=n},Hv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Wv=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Xv=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Vt="transform",ii=Vt+"Origin",qv=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in gr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=mr(i,o)}):this.tfm[e]=a.x?a[e]:mr(i,e),e===ii&&(this.tfm.zOrigin=a.zOrigin);else return Ki.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Vt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},qm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Yv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Wf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Hf(),(!s||!s.isStart)&&!n[Vt]&&(qm(n),i.zOrigin&&n[ii]&&(n[ii]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ym=function(e,t){var n={target:e,props:[],revert:Yv,save:qv};return e._gsap||In.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Zm,kf=function(e,t){var n=Xr.createElementNS?Xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Xr.createElement(e);return n&&n.style?n:Xr.createElement(e)},ui=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Wf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,fa(t)||t,1)||""},Fm="O,Moz,ms,Ms,Webkit".split(","),fa=function(e,t,n){var i=t||Es,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Fm[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Fm[a]:"")+e},zf=function(){Dv()&&window.document&&(Nm=window,Xr=Nm.document,ha=Xr.documentElement,Es=kf("div")||{style:{}},Lv=kf("div"),Vt=fa(Vt),ii=Vt+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zm=!!fa("perspective"),Hf=In.core.reverting,Vf=1)},Bm=function(e){var t=e.ownerSVGElement,n=kf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ha.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ha.removeChild(n),s},km=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Jm=function(e){var t,n;try{t=e.getBBox()}catch{t=Bm(e),n=1}return t&&(t.width||t.height)||n||(t=Bm(e)),t&&!t.width&&!t.x&&!t.y?{x:+km(e,["x","cx","x1"])||0,y:+km(e,["y","cy","y1"])||0,width:0,height:0}:t},$m=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jm(e))},Yr=function(e,t){if(t){var n=e.style,i;t in gr&&t!==ii&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Wf,"-$1").toLowerCase())):n.removeAttribute(t)}},qr=function(e,t,n,i,s,a){var o=new Hn(e._pt,t,n,0,1,a?Xm:Wm);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},zm={deg:1,rad:1,turn:1},Zv={grid:1,flex:1},Zr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Es.style,l=Nv.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",p,_,m,g;if(i===a||!s||zm[i]||zm[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&$m(e),(u||a==="%")&&(gr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[h],Zt(u?s/p*d:s/100*p);if(o[l?"width":"height"]=d+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Xr||!_.appendChild)&&(_=Xr.body),m=_._gsap,m&&u&&m.width&&l&&m.time===ei.time&&!m.uncache)return Zt(s/m.width*d);if(u&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,p=e[h],v?e.style[t]=v:Yr(e,t)}else(u||a==="%")&&!Zv[ui(_,"display")]&&(o.position=ui(e,"position")),_===e&&(o.position="static"),_.appendChild(Es),p=Es[h],_.removeChild(Es),o.position="absolute";return l&&u&&(m=Vr(_),m.time=ei.time,m.width=_[h]),Zt(f?p*s/d:p&&s?d/p*s:0)},mr=function(e,t,n,i){var s;return Vf||zf(),t in Ki&&t!=="transform"&&(t=Ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),gr[t]&&t!=="transform"?(s=Po(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:vc(ui(e,ii))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xc[t]&&xc[t](e,t,n)||ui(e,t)||Ef(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Zr(e,t,s,n)+n:s},Jv=function(e,t,n,i){if(!n||n==="none"){var s=fa(t,e,1),a=s&&ui(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ui(e,"borderTopColor"))}var o=new Hn(this._pt,e.style,t,0,1,Nf),l=0,c=0,h,d,f,u,p,_,m,g,v,b,y,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ui(e,t)||i,_?e.style[t]=_:Yr(e,t)),h=[n,i],Rf(h),n=h[0],i=h[1],f=n.match(ys)||[],E=i.match(ys)||[],E.length){for(;d=ys.exec(i);)m=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),m.charAt(1)==="="&&(m=Ss(u,m)+y),g=parseFloat(m),b=m.substr((g+"").length),l=ys.lastIndex-b.length,b||(b=b||ni.units[t]||y,l===i.length&&(i+=b,o.e+=b)),y!==b&&(u=Zr(e,t,_,b)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:u,c:g-u,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Xm:Wm;return Sf.test(i)&&(o.e=0),this._pt=o,o},Gm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$v=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Gm[n]||n,t[1]=Gm[i]||i,t.join(" ")},Kv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],gr[o]&&(l=1,o=o==="transformOrigin"?ii:Vt),Yr(n,o);l&&(Yr(n,Vt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Po(n,1),a.uncache=1,qm(i)))}},xc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Hn(e._pt,t,n,0,0,Kv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Co=[1,0,0,1,0,0],Km={},Qm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vm=function(e){var t=ui(e,Vt);return Qm(t)?Co:t.substr(7).match(yf).map(Zt)},Xf=function(e,t){var n=e._gsap||Vr(e),i=e.style,s=Vm(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Co:s):(s===Co&&!e.offsetParent&&e!==ha&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ha.appendChild(e)),s=Vm(e),l?i.display=l:Yr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ha.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gf=function(e,t,n,i,s,a){var o=e._gsap,l=s||Xf(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,u=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],b=t.split(" "),y=parseFloat(b[0])||0,E=parseFloat(b[1])||0,A,x,M,R;n?l!==Co&&(x=u*m-p*_)&&(M=y*(m/x)+E*(-_/x)+(_*v-m*g)/x,R=y*(-p/x)+E*(u/x)-(u*v-p*g)/x,y=M,E=R):(A=Jm(e),y=A.x+(~b[0].indexOf("%")?y/100*A.width:y),E=A.y+(~(b[1]||b[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(g=y-c,v=E-h,o.xOffset=d+(g*u+v*_)-g,o.yOffset=f+(g*p+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ii]="0px 0px",a&&(qr(a,o,"xOrigin",c,y),qr(a,o,"yOrigin",h,E),qr(a,o,"xOffset",d,o.xOffset),qr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Po=function(e,t){var n=e._gsap||new Cf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ui(e,ii)||"0",h,d,f,u,p,_,m,g,v,b,y,E,A,x,M,R,S,L,C,O,D,k,V,U,K,H,I,Q,ge,Ue,W,ue;return h=d=f=_=m=g=v=b=y=0,u=p=1,n.svg=!!(e.getCTM&&$m(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),x=Xf(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Gf(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,x)),E=n.xOrigin||0,A=n.yOrigin||0,x!==Co&&(L=x[0],C=x[1],O=x[2],D=x[3],h=k=x[4],d=V=x[5],x.length===6?(u=Math.sqrt(L*L+C*C),p=Math.sqrt(D*D+O*O),_=L||C?ca(C,L)*ws:0,v=O||D?ca(O,D)*ws+_:0,v&&(p*=Math.abs(Math.cos(v*ua))),n.svg&&(h-=E-(E*L+A*O),d-=A-(E*C+A*D))):(ue=x[6],Ue=x[7],I=x[8],Q=x[9],ge=x[10],W=x[11],h=x[12],d=x[13],f=x[14],M=ca(ue,ge),m=M*ws,M&&(R=Math.cos(-M),S=Math.sin(-M),U=k*R+I*S,K=V*R+Q*S,H=ue*R+ge*S,I=k*-S+I*R,Q=V*-S+Q*R,ge=ue*-S+ge*R,W=Ue*-S+W*R,k=U,V=K,ue=H),M=ca(-O,ge),g=M*ws,M&&(R=Math.cos(-M),S=Math.sin(-M),U=L*R-I*S,K=C*R-Q*S,H=O*R-ge*S,W=D*S+W*R,L=U,C=K,O=H),M=ca(C,L),_=M*ws,M&&(R=Math.cos(M),S=Math.sin(M),U=L*R+C*S,K=k*R+V*S,C=C*R-L*S,V=V*R-k*S,L=U,k=K),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),u=Zt(Math.sqrt(L*L+C*C+O*O)),p=Zt(Math.sqrt(V*V+ue*ue)),M=ca(k,V),v=Math.abs(M)>2e-4?M*ws:0,y=W?1/(W<0?-W:W):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Qm(ui(e,Vt)),U&&e.setAttribute("transform",U))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Zt(u),n.scaleY=Zt(p),n.rotation=Zt(_)+o,n.rotationX=Zt(m)+o,n.rotationY=Zt(g)+o,n.skewX=v+o,n.skewY=b+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ii]=vc(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?jv:Zm?jm:Qv,n.uncache=0,n},vc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ff=function(e,t,n){var i=Mn(t);return Zt(parseFloat(t)+parseFloat(Zr(e,"x",n+"px",i)))+i},Qv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jm(e,t)},bs="0deg",Ro="0px",Ts=") ",jm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,b=n.zOrigin,y="",E=g==="auto"&&e&&e!==1||g===!0;if(b&&(d!==bs||h!==bs)){var A=parseFloat(h)*ua,x=Math.sin(A),M=Math.cos(A),R;A=parseFloat(d)*ua,R=Math.cos(A),a=Ff(v,a,x*R*-b),o=Ff(v,o,-Math.sin(A)*-b),l=Ff(v,l,M*R*-b+b)}m!==Ro&&(y+="perspective("+m+Ts),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||a!==Ro||o!==Ro||l!==Ro)&&(y+=l!==Ro||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ts),c!==bs&&(y+="rotate("+c+Ts),h!==bs&&(y+="rotateY("+h+Ts),d!==bs&&(y+="rotateX("+d+Ts),(f!==bs||u!==bs)&&(y+="skew("+f+", "+u+Ts),(p!==1||_!==1)&&(y+="scale("+p+", "+_+Ts),v.style[Vt]=y||"translate(0, 0)"},jv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,v=n.forceCSS,b=parseFloat(a),y=parseFloat(o),E,A,x,M,R;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ua,c*=ua,E=Math.cos(l)*d,A=Math.sin(l)*d,x=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(h*=ua,R=Math.tan(c-h),R=Math.sqrt(1+R*R),x*=R,M*=R,h&&(R=Math.tan(h),R=Math.sqrt(1+R*R),E*=R,A*=R)),E=Zt(E),A=Zt(A),x=Zt(x),M=Zt(M)):(E=d,M=f,A=x=0),(b&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(b=Zr(u,"x",a,"px"),y=Zr(u,"y",o,"px")),(p||_||m||g)&&(b=Zt(b+p-(p*E+_*x)+m),y=Zt(y+_-(p*A+_*M)+g)),(i||s)&&(R=u.getBBox(),b=Zt(b+i/100*R.width),y=Zt(y+s/100*R.height)),R="matrix("+E+","+A+","+x+","+M+","+b+","+y+")",u.setAttribute("transform",R),v&&(u.style[Vt]=R)},ey=function(e,t,n,i,s){var a=360,o=cn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ws:1),c=l-i,h=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Om)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Om)%a-~~(c/a)*a)),e._pt=f=new Hn(e._pt,t,n,i,c,Ov),f.e=h,f.u="deg",e._props.push(n),f},Hm=function(e,t){for(var n in t)e[n]=t[n];return e},ty=function(e,t,n){var i=Hm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,f,u,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Vt]=t,o=Po(n,1),Yr(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],a[Vt]=t,o=Po(n,1),a[Vt]=c);for(l in gr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(u=Mn(c),p=Mn(h),d=u!==p?Zr(n,l,c,p):parseFloat(c),f=parseFloat(h),e._pt=new Hn(e._pt,o,l,d,f-d,Bf),e._pt.u=p||0,e._props.push(l));Hm(o,i)};Vn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});xc[e>1?"border"+r:r]=function(o,l,c,h,d){var f,u;if(arguments.length<4)return f=a.map(function(p){return mr(o,p,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},a.forEach(function(p,_){return u[p]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,u,d)}});var qf={name:"css",register:zf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,f,u,p,_,m,g,v,b,y,E,A,x,M,R;Vf||zf(),this.styles=this.styles||Ym(e),M=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(jn[_]&&If(_,t,n,i,e,s)))){if(u=typeof h,p=xc[_],u==="function"&&(h=h.call(n,i,e,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=la(h)),p)p(this,e,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",dr.lastIndex=0,dr.test(c)||(m=Mn(c),g=Mn(h),g?m!==g&&(c=Zr(e,_,c,g)+g):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),M.push(_,0,o[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],cn(c)&&~c.indexOf("random(")&&(c=la(c)),Mn(c+"")||c==="auto"||(c+=ni.units[_]||Mn(mr(e,_))||""),(c+"").charAt(1)==="="&&(c=mr(e,_))):c=mr(e,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in Ki&&(_==="autoAlpha"&&(f===1&&mr(e,"visibility")==="hidden"&&d&&(f=0),M.push("visibility",0,o.visibility),qr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in gr,b){if(this.styles.save(_),R=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=ui(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=h,h=ui(e,"perspective"),S?e.style.perspective=S:Yr(e,"perspective")}d=parseFloat(h)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Po(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new Hn(this._pt,o,Vt,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new Hn(this._pt,E,"scaleY",E.scaleY,(v?Ss(E.scaleY,v+d):d)-E.scaleY||0,Bf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push(ii,0,o[ii]),h=$v(h),E.svg?Gf(e,h,0,A,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==E.zOrigin&&qr(this,E,"zOrigin",E.zOrigin,g),qr(this,o,_,vc(c),vc(h)));continue}else if(_==="svgOrigin"){Gf(e,h,1,A,0,this);continue}else if(_ in Km){ey(this,E,_,f,v?Ss(f,v+h):h);continue}else if(_==="smoothOrigin"){qr(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){ty(this,h,e);continue}}else _ in o||(_=fa(_)||_);if(b||(d||d===0)&&(f||f===0)&&!Uv.test(h)&&_ in o)m=(c+"").substr((f+"").length),d||(d=0),g=Mn(h)||(_ in ni.units?ni.units[_]:m),m!==g&&(f=Zr(e,_,c,g)),this._pt=new Hn(this._pt,b?E:o,_,f,(v?Ss(f,v+d):d)-f,!b&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?kv:Bf),this._pt.u=g||0,b&&R!==h?(this._pt.b=c,this._pt.e=R,this._pt.r=Bv):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Fv);else if(_ in o)Jv.call(this,e,_,c,v?v+h:h);else if(_ in e)this.add(e,_,c||e[_],v?v+h:h,i,s);else if(_!=="parseTransform"){dc(_,h);continue}b||(_ in o?M.push(_,0,o[_]):typeof e[_]=="function"?M.push(_,2,e[_]()):M.push(_,1,c||e[_])),a.push(_)}}x&&Of(this)},render:function(e,t){if(t.tween._time||!Hf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mr,aliases:Ki,getSetter:function(e,t,n){var i=Ki[t];return i&&i.indexOf(",")<0&&(t=i),t in gr&&t!==ii&&(e._gsap.x||mr(e,"x"))?n&&Um===n?t==="scale"?Hv:Vv:(Um=n||{})&&(t==="scale"?Wv:Xv):e.style&&!fc(e.style[t])?zv:~t.indexOf("-")?Gv:_c(e,t)},core:{_removeProperty:Yr,_getMatrix:Xf}};In.utils.checkPrefix=fa;In.core.getStyleSaver=Ym;(function(r,e,t,n){var i=Vn(r+","+e+","+t,function(s){gr[s]=1});Vn(e,function(s){ni.units[s]="deg",Km[s]=1}),Ki[i[13]]=r+","+e,Vn(n,function(s){var a=s.split(":");Ki[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ni.units[r]="px"});In.registerPlugin(qf);var Ht=In.registerPlugin(qf)||In,Qw=Ht.core.Tween;function eg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ny(r,e,t){return e&&eg(r.prototype,e),t&&eg(r,t),r}var bn,Mc,iy,ri,Jr,$r,pa,ng,As,ma,ig,_r,Oi,rg,sg=function(){return bn||typeof window<"u"&&(bn=window.gsap)&&bn.registerPlugin&&bn},ag=1,da=[],st=[],Fi=[],Lo=Date.now,Yf=function(e,t){return t},ry=function(){var e=ma.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Fi),st=n,Fi=i,Yf=function(a,o){return t[a](o)}},vr=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},Do=function(e){return!!~ig.indexOf(e)},Xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},yc="scrollLeft",Sc="scrollTop",Zf=function(){return _r&&_r.isPressed||st.cache++},bc=function(e,t){var n=function i(s){if(s||s===0){ag&&ri.history.scrollRestoration!=="manual"&&(ri.history.scrollRestoration="manual");var a=_r&&_r.isPressed;s=i.v=Math.round(s)||(_r&&_r.iOS?1:0),e(s),i.cacheID=st.cache,a&&Yf("ss",s)}else(t||st.cache!==i.cacheID||Yf("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Ln={s:yc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bc(function(r){return arguments.length?ri.scrollTo(r,tn.sc()):ri.pageXOffset||Jr[yc]||$r[yc]||pa[yc]||0})},tn={s:Sc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ln,sc:bc(function(r){return arguments.length?ri.scrollTo(Ln.sc(),r):ri.pageYOffset||Jr[Sc]||$r[Sc]||pa[Sc]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||bn.utils.toArray)(e)[0]||(typeof e=="string"&&bn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},sy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},xr=function(e,t){var n=t.s,i=t.sc;Do(e)&&(e=Jr.scrollingElement||$r);var s=st.indexOf(e),a=i===tn.sc?1:2;!~s&&(s=st.push(e)-1),st[s+a]||Xn(e,"scroll",Zf);var o=st[s+a],l=o||(st[s+a]=bc(vr(e,n),!0)||(Do(e)?i:bc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=bn.getProperty(e,"scrollBehavior")==="smooth"),l},Tc=function(e,t,n){var i=e,s=e,a=Lo(),o=a,l=t||50,c=Math.max(500,l*3),h=function(p,_){var m=Lo();_||m-a>l?(s=i,i=p,o=a,a=m):n?i+=p:i=s+(p-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(p){var _=o,m=s,g=Lo();return(p||p===0)&&p!==i&&h(p),a===o||g-o>c?0:(i+(n?m:-m))/((n?g:a)-_)*1e3};return{update:h,reset:d,getVelocity:f}},Io=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},tg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},og=function(){ma=bn.core.globals().ScrollTrigger,ma&&ma.core&&ry()},lg=function(e){return bn=e||sg(),!Mc&&bn&&typeof document<"u"&&document.body&&(ri=window,Jr=document,$r=Jr.documentElement,pa=Jr.body,ig=[ri,Jr,$r,pa],iy=bn.utils.clamp,rg=bn.core.context||function(){},As="onpointerenter"in pa?"pointer":"mouse",ng=Jt.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Oi=Jt.eventTypes=("ontouchstart"in $r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ag=0},500),Mc=1),ma||og(),Mc};Ln.op=tn;st.cache=0;var Jt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Mc||lg(bn)||console.warn("Please gsap.registerPlugin(Observer)"),ma||og();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,v=n.onDrag,b=n.onPress,y=n.onRelease,E=n.onRight,A=n.onLeft,x=n.onUp,M=n.onDown,R=n.onChangeX,S=n.onChangeY,L=n.onChange,C=n.onToggleX,O=n.onToggleY,D=n.onHover,k=n.onHoverEnd,V=n.onMove,U=n.ignoreCheck,K=n.isNormalizer,H=n.onGestureStart,I=n.onGestureEnd,Q=n.onWheel,ge=n.onEnable,Ue=n.onDisable,W=n.onClick,ue=n.scrollSpeed,ye=n.capture,Re=n.allowClicks,$=n.lockAxis,te=n.onLockAxis;this.target=o=qn(o)||$r,this.vars=n,u&&(u=bn.utils.toArray(u)),i=i||1e-9,s=s||0,p=p||1,ue=ue||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(pa).lineHeight)||22);var Ie,fe,Ee,Se,Y,le,ce,z=this,_e=0,qe=0,Be=n.passive||!h&&n.passive!==!1,We=xr(o,Ln),Qe=xr(o,tn),rt=We(),B=Qe(),ot=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Oi[0]==="pointerdown",Ke=Do(o),Je=o.ownerDocument||Jr,xe=[0,0,0],mt=[0,0,0],Ge=0,Ye=function(){return Ge=Lo()},P=function(Te,oe){return(z.event=Te)&&u&&sy(Te.target,u)||oe&&ot&&Te.pointerType!=="touch"||U&&U(Te,oe)},T=function(){z._vx.reset(),z._vy.reset(),fe.pause(),d&&d(z)},q=function(){var Te=z.deltaX=tg(xe),oe=z.deltaY=tg(mt),re=Math.abs(Te)>=i,Ae=Math.abs(oe)>=i;L&&(re||Ae)&&L(z,Te,oe,xe,mt),re&&(E&&z.deltaX>0&&E(z),A&&z.deltaX<0&&A(z),R&&R(z),C&&z.deltaX<0!=_e<0&&C(z),_e=z.deltaX,xe[0]=xe[1]=xe[2]=0),Ae&&(M&&z.deltaY>0&&M(z),x&&z.deltaY<0&&x(z),S&&S(z),O&&z.deltaY<0!=qe<0&&O(z),qe=z.deltaY,mt[0]=mt[1]=mt[2]=0),(Se||Ee)&&(V&&V(z),Ee&&(m&&Ee===1&&m(z),v&&v(z),Ee=0),Se=!1),le&&!(le=!1)&&te&&te(z),Y&&(Q(z),Y=!1),Ie=0},he=function(Te,oe,re){xe[re]+=Te,mt[re]+=oe,z._vx.update(Te),z._vy.update(oe),c?Ie||(Ie=requestAnimationFrame(q)):q()},ae=function(Te,oe){$&&!ce&&(z.axis=ce=Math.abs(Te)>Math.abs(oe)?"x":"y",le=!0),ce!=="y"&&(xe[2]+=Te,z._vx.update(Te,!0)),ce!=="x"&&(mt[2]+=oe,z._vy.update(oe,!0)),c?Ie||(Ie=requestAnimationFrame(q)):q()},ve=function(Te){if(!P(Te,1)){Te=Io(Te,h);var oe=Te.clientX,re=Te.clientY,Ae=oe-z.x,se=re-z.y,Oe=z.isDragging;z.x=oe,z.y=re,(Oe||(Ae||se)&&(Math.abs(z.startX-oe)>=s||Math.abs(z.startY-re)>=s))&&(Ee||(Ee=Oe?2:1),Oe||(z.isDragging=!0),ae(Ae,se))}},we=z.onPress=function(de){P(de,1)||de&&de.button||(z.axis=ce=null,fe.pause(),z.isPressed=!0,de=Io(de),_e=qe=0,z.startX=z.x=de.clientX,z.startY=z.y=de.clientY,z._vx.reset(),z._vy.reset(),Xn(K?o:Je,Oi[1],ve,Be,!0),z.deltaX=z.deltaY=0,b&&b(z))},Z=z.onRelease=function(de){if(!P(de,1)){Wn(K?o:Je,Oi[1],ve,!0);var Te=!isNaN(z.y-z.startY),oe=z.isDragging,re=oe&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ae=Io(de);!re&&Te&&(z._vx.reset(),z._vy.reset(),h&&Re&&bn.delayedCall(.08,function(){if(Lo()-Ge>300&&!de.defaultPrevented){if(de.target.click)de.target.click();else if(Je.createEvent){var se=Je.createEvent("MouseEvents");se.initMouseEvent("click",!0,!0,ri,1,Ae.screenX,Ae.screenY,Ae.clientX,Ae.clientY,!1,!1,!1,!1,0,null),de.target.dispatchEvent(se)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&oe&&!K&&fe.restart(!0),Ee&&q(),g&&oe&&g(z),y&&y(z,re)}},ie=function(Te){return Te.touches&&Te.touches.length>1&&(z.isGesturing=!0)&&H(Te,z.isDragging)},me=function(){return(z.isGesturing=!1)||I(z)},N=function(Te){if(!P(Te)){var oe=We(),re=Qe();he((oe-rt)*ue,(re-B)*ue,1),rt=oe,B=re,d&&fe.restart(!0)}},ne=function(Te){if(!P(Te)){Te=Io(Te,h),Q&&(Y=!0);var oe=(Te.deltaMode===1?l:Te.deltaMode===2?ri.innerHeight:1)*p;he(Te.deltaX*oe,Te.deltaY*oe,0),d&&!K&&fe.restart(!0)}},ee=function(Te){if(!P(Te)){var oe=Te.clientX,re=Te.clientY,Ae=oe-z.x,se=re-z.y;z.x=oe,z.y=re,Se=!0,d&&fe.restart(!0),(Ae||se)&&ae(Ae,se)}},Me=function(Te){z.event=Te,D(z)},pe=function(Te){z.event=Te,k(z)},be=function(Te){return P(Te)||Io(Te,h)&&W(z)};fe=z._dc=bn.delayedCall(f||.25,T).pause(),z.deltaX=z.deltaY=0,z._vx=Tc(0,50,!0),z._vy=Tc(0,50,!0),z.scrollX=We,z.scrollY=Qe,z.isDragging=z.isGesturing=z.isPressed=!1,rg(this),z.enable=function(de){return z.isEnabled||(Xn(Ke?Je:o,"scroll",Zf),a.indexOf("scroll")>=0&&Xn(Ke?Je:o,"scroll",N,Be,ye),a.indexOf("wheel")>=0&&Xn(o,"wheel",ne,Be,ye),(a.indexOf("touch")>=0&&ng||a.indexOf("pointer")>=0)&&(Xn(o,Oi[0],we,Be,ye),Xn(Je,Oi[2],Z),Xn(Je,Oi[3],Z),Re&&Xn(o,"click",Ye,!0,!0),W&&Xn(o,"click",be),H&&Xn(Je,"gesturestart",ie),I&&Xn(Je,"gestureend",me),D&&Xn(o,As+"enter",Me),k&&Xn(o,As+"leave",pe),V&&Xn(o,As+"move",ee)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=Se=Ee=!1,z._vx.reset(),z._vy.reset(),rt=We(),B=Qe(),de&&de.type&&we(de),ge&&ge(z)),z},z.disable=function(){z.isEnabled&&(da.filter(function(de){return de!==z&&Do(de.target)}).length||Wn(Ke?Je:o,"scroll",Zf),z.isPressed&&(z._vx.reset(),z._vy.reset(),Wn(K?o:Je,Oi[1],ve,!0)),Wn(Ke?Je:o,"scroll",N,ye),Wn(o,"wheel",ne,ye),Wn(o,Oi[0],we,ye),Wn(Je,Oi[2],Z),Wn(Je,Oi[3],Z),Wn(o,"click",Ye,!0),Wn(o,"click",be),Wn(Je,"gesturestart",ie),Wn(Je,"gestureend",me),Wn(o,As+"enter",Me),Wn(o,As+"leave",pe),Wn(o,As+"move",ee),z.isEnabled=z.isPressed=z.isDragging=!1,Ue&&Ue(z))},z.kill=z.revert=function(){z.disable();var de=da.indexOf(z);de>=0&&da.splice(de,1),_r===z&&(_r=0)},da.push(z),K&&Do(o)&&(_r=z),z.enable(_)},ny(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Jt.version="3.15.1";Jt.create=function(r){return new Jt(r)};Jt.register=lg;Jt.getAll=function(){return da.slice()};Jt.getById=function(r){return da.filter(function(e){return e.vars.id===r})[0]};sg()&&bn.registerPlugin(Jt);var ke,va,ct,bt,pi,St,ld,zc,qo,zo,Uo,wc,Dn,Hc,td,Zn,cg,hg,ya,Eg,Jf,Ag,Yn,nd,Rg,Cg,Kr,id,cd,Sa,hd,Qr,rd,$f,Ec=1,Nn=Date.now,Kf=Nn(),Ri=0,Oo=0,ug=function(e,t,n){var i=di(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},fg=function(e,t){return t&&(!di(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ay=function r(){return Oo&&requestAnimationFrame(r)},dg=function(){return Hc=1},pg=function(){return Hc=0},Qi=function(e){return e},Fo=function(e){return Math.round(e*1e5)/1e5||0},Pg=function(){return typeof window<"u"},Ig=function(){return ke||Pg()&&(ke=window.gsap)&&ke.registerPlugin&&ke},Ds=function(e){return!!~ld.indexOf(e)},Lg=function(e){return(e==="Height"?hd:ct["inner"+e])||pi["client"+e]||St["client"+e]},Dg=function(e){return vr(e,"getBoundingClientRect")||(Ds(e)?function(){return kc.width=ct.innerWidth,kc.height=hd,kc}:function(){return yr(e)})},oy=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=vr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Lg(s):e["client"+s])||0}},ly=function(e,t){return!t||~Fi.indexOf(e)?Dg(e):function(){return kc}},ji=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=vr(e,n))?a()-Dg(e)()[s]:Ds(e)?(pi[n]||St[n])-Lg(i):e[n]-e["offset"+i])},Ac=function(e,t){for(var n=0;n<ya.length;n+=3)(!t||~t.indexOf(ya[n+1]))&&e(ya[n],ya[n+1],ya[n+2])},di=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},Bo=function(e){return typeof e=="number"},Rs=function(e){return typeof e=="object"},No=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ga=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},_a=Math.abs,Ng="left",Ug="top",ud="right",fd="bottom",Ps="width",Is="height",Go="Right",Vo="Left",Ho="Top",Wo="Bottom",nn="padding",Ei="margin",ba="Width",dd="Height",hn="px",Ai=function(e){return ct.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},cy=function(e){var t=Ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},mg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yr=function(e,t){var n=t&&Ai(e)[td]!=="matrix(1, 0, 0, 1, 0, 0)"&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Gc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Og=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},hy=function(e){return function(t){return ke.utils.snap(Og(e),t)}},pd=function(e){var t=ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},uy=function(e){return function(t,n){return pd(Og(e))(t,n.direction)}},Rc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Cc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},gg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pc={toggleActions:"play",anticipatePin:0},Vc={top:0,left:0,center:.5,bottom:1,right:1},Uc=function(e,t){if(di(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Vc?Vc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ic=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,u=s.fontWeight,p=bt.createElement("div"),_=Ds(n)||vr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?St:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,b=v?c:h,y="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===tn?ud:fd)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],Oc(p,0,i,v),p},Oc=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ba]=1,s["border"+o+ba]=0,s[n.p]=t+"px",ke.set(e,s)},lt=[],sd={},Yo,_g=function(){return Nn()-Ri>34&&(Yo||(Yo=requestAnimationFrame(Sr)))},xa=function(){(!Yn||!Yn.isPressed||Yn.startX>St.clientWidth)&&(st.cache++,Yn?Yo||(Yo=requestAnimationFrame(Sr)):Sr(),Ri||Us("scrollStart"),Ri=Nn())},Qf=function(){Cg=ct.innerWidth,Rg=ct.innerHeight},ko=function(e){st.cache++,(e===!0||!Dn&&!Ag&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!nd||Cg!==ct.innerWidth||Math.abs(ct.innerHeight-Rg)>ct.innerHeight*.25))&&zc.restart(!0)},Ns={},fy=[],Fg=function r(){return pn(it,"scrollEnd",r)||Cs(!0)},Us=function(e){return Ns[e]&&Ns[e].map(function(t){return t()})||fy},fi=[],Bg=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},kg=function(){st.cache++,st.forEach(function(e){return Un(e)&&(e.rec=e())})},md=function(e,t){var n;for(Zn=0;Zn<lt.length;Zn++)n=lt[Zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Qr=!0,t&&Bg(t),t||Us("revert")},zg=function(e,t){st.cache++,(t||!Jn)&&st.forEach(function(n){return Un(n)&&n.cacheID++&&(n.rec=0)}),di(e)&&(cd=e,ct.history.scrollRestoration!==e&&(ct.history.scrollRestoration=e))},Jn,Ls=0,xg,dy=function(){if(xg!==Ls){var e=xg=Ls;requestAnimationFrame(function(){return e===Ls&&Cs(!0)})}},Gg=function(){St.appendChild(Sa),hd=!Yn&&Sa.offsetHeight||ct.innerHeight,St.removeChild(Sa)},vg=function(e){return qo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Cs=function(e,t){if(pi=bt.documentElement,St=bt.body,ld=[ct,bt,pi,St],Ri&&!e&&!Qr){mn(it,"scrollEnd",Fg);return}Gg(),Jn=it.isRefreshing=!0,Qr||kg();var n=Us("refreshInit");Eg&&it.sort(),t||md(),st.forEach(function(i){Un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),lt.slice(0).forEach(function(i){return i.refresh()}),Qr=!1,lt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),rd=1,vg(!0),lt.forEach(function(i){var s=ji(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),vg(!1),rd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){Un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),zg(cd,1),zc.pause(),Ls++,Jn=2,Sr(2),lt.forEach(function(i){return Un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Jn=it.isRefreshing=!1,Us("refresh")},ad=0,Fc=1,Xo,Sr=function(e){if(e===2||!Jn&&!Qr){it.isUpdating=!0,Xo&&Xo.update(0);var t=lt.length,n=Nn(),i=n-Kf>=50,s=t&&lt[0].scroll();if(Fc=ad>s?-1:1,Jn||(ad=s),i&&(Ri&&!Hc&&n-Ri>200&&(Ri=0,Us("scrollEnd")),Uo=Kf,Kf=n),Fc<0){for(Zn=t;Zn-- >0;)lt[Zn]&&lt[Zn].update(0,i);Fc=1}else for(Zn=0;Zn<t;Zn++)lt[Zn]&&lt[Zn].update(0,i);it.isUpdating=!1}Yo=0},od=[Ng,Ug,fd,ud,Ei+Wo,Ei+Go,Ei+Ho,Ei+Vo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bc=od.concat([Ps,Is,"boxSizing","max"+ba,"max"+dd,"position",Ei,nn,nn+Ho,nn+Go,nn+Wo,nn+Vo]),py=function(e,t,n){Ma(n);var i=e._gsap;if(i.spacerIsNative)Ma(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},jf=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=od.length,a=t.style,o=e.style,l;s--;)l=od[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[fd]=o[ud]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ps]=Gc(e,Ln)+hn,a[Is]=Gc(e,tn)+hn,a[nn]=o[Ei]=o[Ug]=o[Ng]="0",Ma(i),o[Ps]=o["max"+ba]=n[Ps],o[Is]=o["max"+dd]=n[Is],o[nn]=n[nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},my=/([A-Z])/g,Ma=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||ke.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(my,"-$1").toLowerCase())}},Lc=function(e){for(var t=Bc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Bc[s],n[Bc[s]]);return i.t=e,i},gy=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},kc={left:0,top:0},yg=function(e,t,n,i,s,a,o,l,c,h,d,f,u,p){Un(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Uc("0"+e.substr(3),n):0));var _=u?u.time():0,m,g,v;if(u&&u.seek(0),isNaN(e)||(e=+e),Bo(e))u&&(e=ke.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,e)),o&&Oc(o,n,i,!0);else{Un(t)&&(t=t(l));var b=(e||"0").split(" "),y,E,A,x;v=qn(t,l)||St,y=yr(v)||{},(!y||!y.left&&!y.top)&&Ai(v).display==="none"&&(x=v.style.display,v.style.display="block",y=yr(v),x?v.style.display=x:v.style.removeProperty("display")),E=Uc(b[0],y[i.d]),A=Uc(b[1]||"0",n),e=y[i.p]-c[i.p]-h+E+s-A,o&&Oc(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var M=e+n,R=a._isStart;m="scroll"+i.d2,Oc(a,M,i,R&&M>20||!R&&(d?Math.max(St[m],pi[m]):a.parentNode[m])<=M+1),d&&(c=yr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+hn))}return u&&v&&(m=yr(v),u.seek(f),g=yr(v),u._caScrollDist=m[i.p]-g[i.p],e=e/u._caScrollDist*f),u&&u.seek(_),u?e:Math.round(e)},_y=/(webkit|moz|length|cssText|inset)/i,Sg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===St){e._stOrig=s.cssText,o=Ai(e);for(a in o)!+a&&!_y.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;ke.core.getCache(e).uncache=1,t.appendChild(e)}},Vg=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Dc=function(e,t,n){var i={};i[t.p]="+="+n,ke.set(e,i)},Mg=function(e,t){var n=xr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,h,d){var f=a.tween,u=l.onComplete,p={};c=c||n();var _=Vg(n,c,function(){f.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){st.cache++,a.tween&&Sr()},l.onComplete=function(){a.tween=0,u&&u.call(f)},f=a.tween=ke.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(e,"wheel",n.wheelHandler),it.isTouch&&mn(e,"touchmove",n.wheelHandler),s},it=(function(){function r(t,n){va||r.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),id(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Oo){this.update=this.refresh=this.kill=Qi;return}n=mg(di(n)||Bo(n)||n.nodeType?{trigger:n}:n,Pc);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,u=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,b=s.once,y=s.snap,E=s.pinReparent,A=s.pinSpacer,x=s.containerAnimation,M=s.fastScrollEnd,R=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ln:tn,L=!d&&d!==0,C=qn(n.scroller||ct),O=ke.core.getCache(C),D=Ds(C),k=("pinType"in n?n.pinType:vr(C,"pinType")||D&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=L&&n.toggleActions.split(" "),K="markers"in n?n.markers:Pc.markers,H=D?0:parseFloat(Ai(C)["border"+S.p2+ba])||0,I=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(I)},ge=oy(C,D,S),Ue=ly(C,D),W=0,ue=0,ye=0,Re=xr(C,S),$,te,Ie,fe,Ee,Se,Y,le,ce,z,_e,qe,Be,We,Qe,rt,B,ot,Ke,Je,xe,mt,Ge,Ye,P,T,q,he,ae,ve,we,Z,ie,me,N,ne,ee,Me,pe;if(I._startClamp=I._endClamp=!1,I._dir=S,m*=45,I.scroller=C,I.scroll=x?x.time.bind(x):Re,fe=Re(),Qr&&Re.rec==null&&(Re.rec=fe),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Eg=1,n.refreshPriority===-9999&&(Xo=I)),O.tweenScroll=O.tweenScroll||{top:Mg(C,tn),left:Mg(C,Ln)},I.tweenTo=$=O.tweenScroll[S.p],I.scrubDuration=function(re){ie=Bo(re)&&re,ie?Z?Z.duration(re):Z=ke.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return g&&g(I)}}):(Z&&Z.progress(1).kill(),Z=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(d),ve=0,l||(l=i.vars.id)),y&&((!Rs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in St.style&&ke.set(D?[St,pi]:C,{scrollBehavior:"auto"}),st.forEach(function(re){return Un(re)&&re.target===(D?bt.scrollingElement||pi:C)&&(re.smooth=!1)}),Ie=Un(y.snapTo)?y.snapTo:y.snapTo==="labels"?hy(i):y.snapTo==="labelsDirectional"?uy(i):y.directional!==!1?function(re,Ae){return pd(y.snapTo)(re,Nn()-ue<500?0:Ae.direction)}:ke.utils.snap(y.snapTo),me=y.duration||{min:.1,max:2},me=Rs(me)?zo(me.min,me.max):zo(me,me),N=ke.delayedCall(y.delay||ie/2||.1,function(){var re=Re(),Ae=Nn()-ue<500,se=$.tween;if((Ae||Math.abs(I.getVelocity())<10)&&!se&&!Hc&&W!==re){var Oe=(re-Se)/We,ut=i&&!L?i.totalProgress():Oe,tt=Ae?0:(ut-we)/(Nn()-Uo)*1e3||0,Nt=ke.utils.clamp(-Oe,1-Oe,_a(tt/2)*tt/.185),Qt=Oe+(y.inertia===!1?0:Nt),Ut,At,yt=y,an=yt.onStart,Rt=yt.onInterrupt,En=yt.onComplete;if(Ut=Ie(Qt,I),Bo(Ut)||(Ut=Qt),At=Math.max(0,Math.round(Se+Ut*We)),re<=Y&&re>=Se&&At!==re){if(se&&!se._initted&&se.data<=_a(At-re))return;y.inertia===!1&&(Nt=Ut-Oe),$(At,{duration:me(_a(Math.max(_a(Qt-ut),_a(Ut-ut))*.185/tt/.05||0)),ease:y.ease||"power3",data:_a(At-re),onInterrupt:function(){return N.restart(!0)&&Rt&&ga(I,Rt)},onComplete:function(){I.update(),W=Re(),i&&!L&&(Z?Z.resetTo("totalProgress",Ut,i._tTime/i._tDur):i.progress(Ut)),ve=we=i&&!L?i.totalProgress():I.progress,v&&v(I),En&&ga(I,En)}},re,Nt*We,At-re-Nt*We),an&&ga(I,an,$.tween)}}else I.isActive&&W!==re&&N.restart(!0)}).pause()),l&&(sd[l]=I),f=I.trigger=qn(f||u!==!0&&u),pe=f&&f._gsap&&f._gsap.stRevert,pe&&(pe=pe(I)),u=u===!0?f:qn(u),di(o)&&(o={targets:f,className:o}),u&&(p===!1||p===Ei||(p=!p&&u.parentNode&&u.parentNode.style&&Ai(u.parentNode).display==="flex"?!1:nn),I.pin=u,te=ke.core.getCache(u),te.spacer?Qe=te.pinState:(A&&(A=qn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),te.spacerIsNative=!!A,A&&(te.spacerState=Lc(A))),te.spacer=ot=A||bt.createElement("div"),ot.classList.add("pin-spacer"),l&&ot.classList.add("pin-spacer-"+l),te.pinState=Qe=Lc(u)),n.force3D!==!1&&ke.set(u,{force3D:!0}),I.spacer=ot=te.spacer,ae=Ai(u),Ye=ae[p+S.os2],Je=ke.getProperty(u),xe=ke.quickSetter(u,S.a,hn),jf(u,ot,ae),B=Lc(u)),K){qe=Rs(K)?mg(K,gg):gg,z=Ic("scroller-start",l,C,S,qe,0),_e=Ic("scroller-end",l,C,S,qe,0,z),Ke=z["offset"+S.op.d2];var be=qn(vr(C,"content")||C);le=this.markerStart=Ic("start",l,be,S,qe,Ke,0,x),ce=this.markerEnd=Ic("end",l,be,S,qe,Ke,0,x),x&&(Me=ke.quickSetter([le,ce],S.a,hn)),!k&&!(Fi.length&&vr(C,"fixedMarkers")===!0)&&(cy(D?St:C),ke.set([z,_e],{force3D:!0}),T=ke.quickSetter(z,S.a,hn),he=ke.quickSetter(_e,S.a,hn))}if(x){var de=x.vars.onUpdate,Te=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){I.update(0,0,1),de&&de.apply(x,Te||[])})}if(I.previous=function(){return lt[lt.indexOf(I)-1]},I.next=function(){return lt[lt.indexOf(I)+1]},I.revert=function(re,Ae){if(!Ae)return I.kill(!0);var se=re!==!1||!I.enabled,Oe=Dn;se!==I.isReverted&&(se&&(ne=Math.max(Re(),I.scroll.rec||0),ye=I.progress,ee=i&&i.progress()),le&&[le,ce,z,_e].forEach(function(ut){return ut.style.display=se?"none":"block"}),se&&(Dn=I,I.update(se)),u&&(!E||!I.isActive)&&(se?py(u,ot,Qe):jf(u,ot,Ai(u),P)),se||I.update(se),Dn=Oe,I.isReverted=se)},I.refresh=function(re,Ae,se,Oe){if(!((Dn||!I.enabled)&&!Ae)){if(u&&re&&Ri){mn(r,"scrollEnd",Fg);return}!Jn&&Q&&Q(I),Dn=I,$.tween&&!se&&($.tween.kill(),$.tween=0),Z&&Z.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(X){return X.vars.immediateRender&&X.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var ut=ge(),tt=Ue(),Nt=x?x.duration():ji(C,S),Qt=We<=.01||!We,Ut=0,At=Oe||0,yt=Rs(se)?se.end:n.end,an=n.endTrigger||f,Rt=Rs(se)?se.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),En=I.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,I),ai=f&&Math.max(0,lt.indexOf(I))||0,Xt=ai,jt,on,oi,na,ln,qt,Mi,mo,jl,Br,w,F,j;for(K&&Rs(se)&&(F=ke.getProperty(z,S.p),j=ke.getProperty(_e,S.p));Xt-- >0;)qt=lt[Xt],qt.end||qt.refresh(0,1)||(Dn=I),Mi=qt.pin,Mi&&(Mi===f||Mi===u||Mi===En)&&!qt.isReverted&&(Br||(Br=[]),Br.unshift(qt),qt.revert(!0,!0)),qt!==lt[Xt]&&(ai--,Xt--);for(Un(Rt)&&(Rt=Rt(I)),Rt=ug(Rt,"start",I),Se=yg(Rt,f,ut,S,Re(),le,z,I,tt,H,k,Nt,x,I._startClamp&&"_startClamp")||(u?-.001:0),Un(yt)&&(yt=yt(I)),di(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(di(Rt)?Rt.split(" ")[0]:"")+yt:(Ut=Uc(yt.substr(2),ut),yt=di(Rt)?Rt:(x?ke.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Se):Se)+Ut,an=f)),yt=ug(yt,"end",I),Y=Math.max(Se,yg(yt||(an?"100% 0":Nt),an,ut,S,Re()+Ut,ce,_e,I,tt,H,k,Nt,x,I._endClamp&&"_endClamp"))||-.001,Ut=0,Xt=ai;Xt--;)qt=lt[Xt]||{},Mi=qt.pin,Mi&&qt.start-qt._pinPush<=Se&&!x&&qt.end>0&&(jt=qt.end-(I._startClamp?Math.max(0,qt.start):qt.start),(Mi===f&&qt.start-qt._pinPush<Se||Mi===En)&&isNaN(Rt)&&(Ut+=jt*(1-qt.progress)),Mi===u&&(At+=jt));if(Se+=Ut,Y+=Ut,I._startClamp&&(I._startClamp+=Ut),I._endClamp&&!Jn&&(I._endClamp=Y||-.001,Y=Math.min(Y,ji(C,S))),We=Y-Se||(Se-=.01)&&.001,Qt&&(ye=ke.utils.clamp(0,1,ke.utils.normalize(Se,Y,ne))),I._pinPush=At,le&&Ut&&(jt={},jt[S.a]="+="+Ut,En&&(jt[S.p]="-="+Re()),ke.set([le,ce],jt)),u&&!(rd&&I.end>=ji(C,S)))jt=Ai(u),na=S===tn,oi=Re(),mt=parseFloat(Je(S.a))+At,!Nt&&Y>1&&(w=(D?bt.scrollingElement||pi:C).style,w={style:w,value:w["overflow"+S.a.toUpperCase()]},D&&Ai(St)["overflow"+S.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+S.a.toUpperCase()]="scroll")),jf(u,ot,jt),B=Lc(u),on=yr(u,!0),mo=k&&xr(C,na?Ln:tn)(),p?(P=[p+S.os2,We+At+hn],P.t=ot,Xt=p===nn?Gc(u,S)+We+At:0,Xt&&(P.push(S.d,Xt+hn),ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=Xt+hn)),Ma(P),En&&lt.forEach(function(X){X.pin===En&&X.vars.pinSpacing!==!1&&(X._subPinOffset=!0)}),k&&Re(ne)):(Xt=Gc(u,S),Xt&&ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=Xt+hn)),k&&(ln={top:on.top+(na?oi-Se:mo)+hn,left:on.left+(na?mo:oi-Se)+hn,boxSizing:"border-box",position:"fixed"},ln[Ps]=ln["max"+ba]=Math.ceil(on.width)+hn,ln[Is]=ln["max"+dd]=Math.ceil(on.height)+hn,ln[Ei]=ln[Ei+Ho]=ln[Ei+Go]=ln[Ei+Wo]=ln[Ei+Vo]="0",ln[nn]=jt[nn],ln[nn+Ho]=jt[nn+Ho],ln[nn+Go]=jt[nn+Go],ln[nn+Wo]=jt[nn+Wo],ln[nn+Vo]=jt[nn+Vo],rt=gy(Qe,ln,E),Jn&&Re(0)),i?(jl=i._initted,Jf(1),i.render(i.duration(),!0,!0),Ge=Je(S.a)-mt+We+At,q=Math.abs(We-Ge)>1,k&&q&&rt.splice(rt.length-2,2),i.render(0,!0,!0),jl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Jf(0)):Ge=We,w&&(w.value?w.style["overflow"+S.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+S.a));else if(f&&Re()&&!x)for(on=f.parentNode;on&&on!==St;)on._pinOffset&&(Se-=on._pinOffset,Y-=on._pinOffset),on=on.parentNode;Br&&Br.forEach(function(X){return X.revert(!1,!0)}),I.start=Se,I.end=Y,fe=Ee=Jn?ne:Re(),!x&&!Jn&&!Qr&&(fe<ne&&Re(ne),I.scroll.rec=0),I.revert(!1,!0),ue=Nn(),N&&(W=-1,N.restart(!0)),Dn=0,i&&L&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(Qt||ye!==I.progress||x||_||i&&!i._initted)&&(i&&!L&&(i._initted||ye||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Se<-.001&&!ye?ke.utils.normalize(Se,Y,0):ye,!0),I.progress=Qt||(fe-Se)/We===ye?0:ye),u&&p&&(ot._pinOffset=Math.round(I.progress*Ge)),Z&&Z.invalidate(),isNaN(F)||(F-=ke.getProperty(z,S.p),j-=ke.getProperty(_e,S.p),Dc(z,S,F),Dc(le,S,F-(Oe||0)),Dc(_e,S,j),Dc(ce,S,j-(Oe||0))),Qt&&!Jn&&I.update(),h&&!Jn&&!Be&&(Be=!0,h(I),Be=!1)}},I.getVelocity=function(){return(Re()-Ee)/(Nn()-Uo)*1e3||0},I.endAnimation=function(){No(I.callbackAnimation),i&&(Z?Z.progress(1):i.paused()?L||No(i,I.direction<0,1):No(i,i.reversed()))},I.labelToScroll=function(re){return i&&i.labels&&(Se||I.refresh()||Se)+i.labels[re]/i.duration()*We||0},I.getTrailing=function(re){var Ae=lt.indexOf(I),se=I.direction>0?lt.slice(0,Ae).reverse():lt.slice(Ae+1);return(di(re)?se.filter(function(Oe){return Oe.vars.preventOverlaps===re}):se).filter(function(Oe){return I.direction>0?Oe.end<=Se:Oe.start>=Y})},I.update=function(re,Ae,se){if(!(x&&!se&&!re)){var Oe=Jn===!0?ne:I.scroll(),ut=re?0:(Oe-Se)/We,tt=ut<0?0:ut>1?1:ut||0,Nt=I.progress,Qt,Ut,At,yt,an,Rt,En,ai;if(Ae&&(Ee=fe,fe=x?Re():Oe,y&&(we=ve,ve=i&&!L?i.totalProgress():tt)),m&&u&&!Dn&&!Ec&&Ri&&(!tt&&Se<Oe+(Oe-Ee)/(Nn()-Uo)*m?tt=1e-4:tt===1&&Y>Oe+(Oe-Ee)/(Nn()-Uo)*m&&(tt=.9999)),tt!==Nt&&I.enabled){if(Qt=I.isActive=!!tt&&tt<1,Ut=!!Nt&&Nt<1,Rt=Qt!==Ut,an=Rt||!!tt!=!!Nt,I.direction=tt>Nt?1:-1,I.progress=tt,an&&!Dn&&(At=tt&&!Nt?0:tt===1?1:Nt===1?2:3,L&&(yt=!Rt&&U[At+1]!=="none"&&U[At+1]||U[At],ai=i&&(yt==="complete"||yt==="reset"||yt in i))),R&&(Rt||ai)&&(ai||d||!i)&&(Un(R)?R(I):I.getTrailing(R).forEach(function(oi){return oi.endAnimation()})),L||(Z&&!Dn&&!Ec?(Z._dp._time-Z._start!==Z._time&&Z.render(Z._dp._time-Z._start),Z.resetTo?Z.resetTo("totalProgress",tt,i._tTime/i._tDur):(Z.vars.totalProgress=tt,Z.invalidate().restart())):i&&i.totalProgress(tt,!!(Dn&&(ue||re)))),u){if(re&&p&&(ot.style[p+S.os2]=Ye),!k)xe(Fo(mt+Ge*tt));else if(an){if(En=!re&&tt>Nt&&Y+1>Oe&&Oe+1>=ji(C,S),E)if(!re&&(Qt||En)){var Xt=yr(u,!0),jt=Oe-Se;Sg(u,St,Xt.top+(S===tn?jt:0)+hn,Xt.left+(S===tn?0:jt)+hn)}else Sg(u,ot);Ma(Qt||En?rt:B),q&&tt<1&&Qt||xe(mt+(tt===1&&!En?Ge:0))}}y&&!$.tween&&!Dn&&!Ec&&N.restart(!0),o&&(Rt||b&&tt&&(tt<1||!$f))&&qo(o.targets).forEach(function(oi){return oi.classList[Qt||b?"add":"remove"](o.className)}),a&&!L&&!re&&a(I),an&&!Dn?(L&&(ai&&(yt==="complete"?i.pause().totalProgress(1):yt==="reset"?i.restart(!0).pause():yt==="restart"?i.restart(!0):i[yt]()),a&&a(I)),(Rt||!$f)&&(c&&Rt&&ga(I,c),V[At]&&ga(I,V[At]),b&&(tt===1?I.kill(!1,1):V[At]=0),Rt||(At=tt===1?1:3,V[At]&&ga(I,V[At]))),M&&!Qt&&Math.abs(I.getVelocity())>(Bo(M)?M:2500)&&(No(I.callbackAnimation),Z?Z.progress(1):No(i,yt==="reverse"?1:!tt,1))):L&&a&&!Dn&&a(I)}if(he){var on=x?Oe/x.duration()*(x._caScrollDist||0):Oe;T(on+(z._isFlipped?1:0)),he(on)}Me&&Me(-Oe/x.duration()*(x._caScrollDist||0))}},I.enable=function(re,Ae){I.enabled||(I.enabled=!0,mn(C,"resize",ko),D||mn(C,"scroll",xa),Q&&mn(r,"refreshInit",Q),re!==!1&&(I.progress=ye=0,fe=Ee=W=Re()),Ae!==!1&&I.refresh())},I.getTween=function(re){return re&&$?$.tween:Z},I.setPositions=function(re,Ae,se,Oe){if(x){var ut=x.scrollTrigger,tt=x.duration(),Nt=ut.end-ut.start;re=ut.start+Nt*re/tt,Ae=ut.start+Nt*Ae/tt}I.refresh(!1,!1,{start:fg(re,se&&!!I._startClamp),end:fg(Ae,se&&!!I._endClamp)},Oe),I.update()},I.adjustPinSpacing=function(re){if(P&&re){var Ae=P.indexOf(S.d)+1;P[Ae]=parseFloat(P[Ae])+re+hn,P[1]=parseFloat(P[1])+re+hn,Ma(P)}},I.disable=function(re,Ae){if(re!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Ae||Z&&Z.pause(),ne=0,te&&(te.uncache=1),Q&&pn(r,"refreshInit",Q),N&&(N.pause(),$.tween&&$.tween.kill()&&($.tween=0)),!D)){for(var se=lt.length;se--;)if(lt[se].scroller===C&&lt[se]!==I)return;pn(C,"resize",ko),D||pn(C,"scroll",xa)}},I.kill=function(re,Ae){I.disable(re,Ae),Z&&!Ae&&Z.kill(),l&&delete sd[l];var se=lt.indexOf(I);se>=0&&lt.splice(se,1),se===Zn&&Fc>0&&Zn--,se=0,lt.forEach(function(Oe){return Oe.scroller===I.scroller&&(se=1)}),se||Jn||Qr||(I.scroll.rec=0),i&&(i.scrollTrigger=null,re&&i.revert({kill:!1}),Ae||i.kill()),le&&[le,ce,z,_e].forEach(function(Oe){return Oe.parentNode&&Oe.parentNode.removeChild(Oe)}),Xo===I&&(Xo=0),u&&(te&&(te.uncache=1),se=0,lt.forEach(function(Oe){return Oe.pin===u&&se++}),se||(te.spacer=0)),n.onKill&&n.onKill(I)},lt.push(I),I.enable(!1,!1),pe&&pe(I),i&&i.add&&!We){var oe=I.update;I.update=function(){I.update=oe,st.cache++,Se||Y||I.refresh()},ke.delayedCall(.01,I.update),We=.01,Se=Y=0}else I.refresh();u&&dy()},r.register=function(n){return va||(ke=n||Ig(),Pg()&&window.document&&r.enable(),va=Oo),va},r.defaults=function(n){if(n)for(var i in n)Pc[i]=n[i];return Pc},r.disable=function(n,i){Oo=0,lt.forEach(function(a){return a[i?"kill":"disable"](n)}),pn(ct,"wheel",xa),pn(bt,"scroll",xa),clearInterval(wc),pn(bt,"touchcancel",Qi),pn(St,"touchstart",Qi),Rc(pn,bt,"pointerdown,touchstart,mousedown",dg),Rc(pn,bt,"pointerup,touchend,mouseup",pg),zc.kill(),Ac(pn);for(var s=0;s<st.length;s+=3)Cc(pn,st[s],st[s+1]),Cc(pn,st[s],st[s+2])},r.enable=function(){if(ct=window,bt=document,pi=bt.documentElement,St=bt.body,ke){if(qo=ke.utils.toArray,zo=ke.utils.clamp,id=ke.core.context||Qi,Jf=ke.core.suppressOverwrites||Qi,cd=ct.history.scrollRestoration||"auto",ad=ct.pageYOffset||0,ke.core.globals("ScrollTrigger",r),St){Oo=1,Sa=document.createElement("div"),Sa.style.height="100vh",Sa.style.position="absolute",Gg(),ay(),Jt.register(ke),r.isTouch=Jt.isTouch,Kr=Jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nd=Jt.isTouch===1,mn(ct,"wheel",xa),ld=[ct,bt,pi,St],ke.matchMedia?(r.matchMedia=function(h){var d=ke.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},ke.addEventListener("matchMediaInit",function(){kg(),md()}),ke.addEventListener("matchMediaRevert",function(){return Bg()}),ke.addEventListener("matchMedia",function(){Cs(0,1),Us("matchMedia")}),ke.matchMedia().add("(orientation: portrait)",function(){return Qf(),Qf})):console.warn("Requires GSAP 3.11.0 or later"),Qf(),mn(bt,"scroll",xa);var n=St.hasAttribute("style"),i=St.style,s=i.borderTopStyle,a=ke.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=yr(St),tn.m=Math.round(o.top+tn.sc())||0,Ln.m=Math.round(o.left+Ln.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),wc=setInterval(_g,250),ke.delayedCall(.5,function(){return Ec=0}),mn(bt,"touchcancel",Qi),mn(St,"touchstart",Qi),Rc(mn,bt,"pointerdown,touchstart,mousedown",dg),Rc(mn,bt,"pointerup,touchend,mouseup",pg),td=ke.utils.checkPrefix("transform"),Bc.push(td),va=Nn(),zc=ke.delayedCall(.2,Cs).pause(),ya=[bt,"visibilitychange",function(){var h=ct.innerWidth,d=ct.innerHeight;bt.hidden?(cg=h,hg=d):(cg!==h||hg!==d)&&ko()},bt,"DOMContentLoaded",Cs,ct,"load",Cs,ct,"resize",ko],Ac(mn),lt.forEach(function(h){return h.enable(0,1)}),l=0;l<st.length;l+=3)Cc(pn,st[l],st[l+1]),Cc(pn,st[l],st[l+2])}else if(bt){var c=function h(){r.enable(),bt.removeEventListener("DOMContentLoaded",h)};bt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&($f=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(wc)||(wc=i)&&setInterval(_g,i),"ignoreMobileResize"in n&&(nd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ac(pn)||Ac(mn,n.autoRefreshEvents||"none"),Ag=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=qn(n),a=st.indexOf(s),o=Ds(s);~a&&st.splice(a,o?6:2),i&&(o?Fi.unshift(ct,i,St,i,pi,i):Fi.unshift(s,i))},r.clearMatchMedia=function(n){lt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(di(n)?qn(n):n).getBoundingClientRect(),o=a[s?Ps:Is]*i||0;return s?a.right-o>0&&a.left+o<ct.innerWidth:a.bottom-o>0&&a.top+o<ct.innerHeight},r.positionInViewport=function(n,i,s){di(n)&&(n=qn(n));var a=n.getBoundingClientRect(),o=a[s?Ps:Is],l=i==null?o/2:i in Vc?Vc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ct.innerWidth:(a.top+l)/ct.innerHeight},r.killAll=function(n){if(lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ns.killAll||[];Ns={},i.forEach(function(s){return s()})}},r})();it.version="3.15.1";it.saveStyles=function(r){return r?qo(r).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ke.core.getCache(e),id())}}):fi};it.revert=function(r,e){return md(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?ko(!0):(va||it.register())&&Cs(!0)};it.update=function(r){return++st.cache&&Sr(r===!0?2:0)};it.clearScrollMemory=zg;it.maxScroll=function(r,e){return ji(r,e?Ln:tn)};it.getScrollFunc=function(r,e){return xr(qn(r),e?Ln:tn)};it.getById=function(r){return sd[r]};it.getAll=function(){return lt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Ri};it.snapDirectional=pd;it.addEventListener=function(r,e){var t=Ns[r]||(Ns[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=Ns[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var d=[],f=[],u=ke.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(p){d.length||u.restart(!0),d.push(p.trigger),f.push(p),s<=d.length&&u.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Un(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Un(s)&&(s=s(),mn(it,"refresh",function(){return s=e.batchMax()})),qo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(it.create(c))}),t};var bg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ed=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Jt.isTouch?" pinch-zoom":""):"none",e===pi&&r(St,t)},Nc={auto:1,scroll:1},xy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||ke.core.getCache(s),o=Nn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Nc[(l=Ai(s)).overflowY]||Nc[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ds(s)&&(Nc[(l=Ai(s)).overflowY]||Nc[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Hg=function(e,t,n,i){return Jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&xy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&mn(bt,Jt.eventTypes[0],wg,!1,!0)},onDisable:function(){return pn(bt,Jt.eventTypes[0],wg,!0)}})},vy=/(input|label|select|textarea)/i,Tg,wg=function(e){var t=vy.test(e.target.tagName);(t||Tg)&&(e._gsapAllow=!0,Tg=t)},yy=function(e){Rs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=qn(e.target)||pi,h=ke.core.globals().ScrollSmoother,d=h&&h.get(),f=Kr&&(e.content&&qn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),u=xr(c,tn),p=xr(c,Ln),_=1,m=(Jt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,g=0,v=Un(i)?function(){return i(o)}:function(){return i||2.8},b,y,E=Hg(c,e.type,!0,s),A=function(){return y=!1},x=Qi,M=Qi,R=function(){l=ji(c,tn),M=zo(Kr?1:0,l),n&&(x=zo(0,ji(c,Ln))),b=Ls},S=function(){f._gsap.y=Fo(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},L=function(){if(y){requestAnimationFrame(A);var K=Fo(o.deltaY/2),H=M(u.v-K);if(f&&H!==u.v+u.offset){u.offset=H-u.v;var I=Fo((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",u.cacheID=st.cache,Sr()}return!0}u.offset&&S(),y=!0},C,O,D,k,V=function(){R(),C.isActive()&&C.vars.scrollY>l&&(u()>l?C.progress(1)&&u(l):C.resetTo("scrollY",l))};return f&&ke.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return Kr&&U.type==="touchmove"&&L(U)||_>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){y=!1;var U=_;_=Fo((ct.visualViewport&&ct.visualViewport.scale||1)/m),C.pause(),U!==_&&ed(c,_>1.01?!0:n?!1:"x"),O=p(),D=u(),R(),b=Ls},e.onRelease=e.onGestureStart=function(U,K){if(u.offset&&S(),!K)k.restart(!0);else{st.cache++;var H=v(),I,Q;n&&(I=p(),Q=I+H*.05*-U.velocityX/.227,H*=bg(p,I,Q,ji(c,Ln)),C.vars.scrollX=x(Q)),I=u(),Q=I+H*.05*-U.velocityY/.227,H*=bg(u,I,Q,ji(c,tn)),C.vars.scrollY=M(Q),C.invalidate().duration(H).play(.01),(Kr&&C.vars.scrollY>=l||I>=l-1)&&ke.to({},{onUpdate:V,duration:H})}a&&a(U)},e.onWheel=function(){C._ts&&C.pause(),Nn()-g>1e3&&(b=0,g=Nn())},e.onChange=function(U,K,H,I,Q){if(Ls!==b&&R(),K&&n&&p(x(I[2]===K?O+(U.startX-U.x):p()+K-I[1])),H){u.offset&&S();var ge=Q[2]===H,Ue=ge?D+U.startY-U.y:u()+H-Q[1],W=M(Ue);ge&&Ue!==W&&(D+=W-Ue),u(W)}(H||K)&&Sr()},e.onEnable=function(){ed(c,n?!1:"x"),it.addEventListener("refresh",V),mn(ct,"resize",V),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),E.enable()},e.onDisable=function(){ed(c,!0),pn(ct,"resize",V),it.removeEventListener("refresh",V),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Jt(e),o.iOS=Kr,Kr&&!u()&&u(1),Kr&&ke.ticker.add(Qi),k=o._dc,C=ke.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Vg(u,u(),function(){return C.pause()})},onUpdate:Sr,onComplete:k.vars.onComplete}),o};it.sort=function(r){if(Un(r))return lt.sort(r);var e=ct.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),lt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new Jt(r)};it.normalizeScroll=function(r){if(typeof r>"u")return Yn;if(r===!0&&Yn)return Yn.enable();if(r===!1){Yn&&Yn.kill(),Yn=r;return}var e=r instanceof Jt?r:yy(r);return Yn&&Yn.target===e.target&&Yn.kill(),Ds(e.target)&&(Yn=e),e};it.core={_getVelocityProp:Tc,_inputObserver:Hg,_scrollers:st,_proxies:Fi,bridge:{ss:function(){Ri||Us("scrollStart"),Ri=Nn()},ref:function(){return Dn}}};Ig()&&ke.registerPlugin(it);var E_=0,jd=1,A_=2;var Bl=1,R_=2,eo=3,hs=0,wn=1,vn=2,Xs=0,to=1,ep=2,tp=3,np=4,C_=5;var qs=100,P_=101,I_=102,L_=103,D_=104,N_=200,U_=201,O_=202,F_=203,ip=204,rp=205,B_=206,k_=207,z_=208,G_=209,V_=210,H_=211,W_=212,X_=213,q_=214,yh=0,Sh=1,Mh=2,za=3,bh=4,Th=5,wh=6,Eh=7,nu=0,Y_=1,Z_=2,lr=0,sp=1,ap=2,op=3,Ys=4,lp=5,cp=6,hp=7;var up=300,Zs=301,no=302,iu=303,ru=304,rs=1e3,tr=1001,Ah=1002,xn=1003,J_=1004;var kl=1005;var $n=1006,su=1007;var Nr=1008;var si=1009,fp=1010,dp=1011,io=1012,au=1013,Wi=1014,Li=1015,Xi=1016,ou=1017,lu=1018,Js=1020,pp=35902,mp=35899,gp=1021,_p=1022,qi=1023,Cr=1026,Ur=1027,cu=1028,hu=1029,us=1030,uu=1031;var fu=1033,zl=33776,Gl=33777,Vl=33778,Hl=33779,du=35840,pu=35841,mu=35842,gu=35843,_u=36196,xu=37492,vu=37496,yu=37488,Su=37489,Wl=37490,Mu=37491,bu=37808,Tu=37809,wu=37810,Eu=37811,Au=37812,Ru=37813,Cu=37814,Pu=37815,Iu=37816,Lu=37817,Du=37818,Nu=37819,Uu=37820,Ou=37821,Fu=36492,Bu=36494,ku=36495,zu=36283,Gu=36284,Xl=36285,Vu=36286;var sl=2300,Rh=2301,xh=2302,Gd=2303,Vd=2400,Hd=2401,Wd=2402;var $_=3200;var ql=0,K_=1,Or="",Tn="srgb",al="srgb-linear",ol="linear",Mt="srgb";var vh=7680;var Q_=519,j_=512,e0=513,t0=514,xp=515,n0=516,i0=517,vp=518,yp=519,r0=35044;var Sp="300 es",Pi=2e3,Ga=2001;function Sy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function My(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ll(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function s0(){let r=ll("canvas");return r.style.display="block",r}var Wg={},Va=null;function Mp(...r){let e="THREE."+r.shift();Va?Va("log",e,...r):console.log(e,...r)}function a0(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ze(...r){r=a0(r);let e="THREE."+r.shift();if(Va)Va("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function $e(...r){r=a0(r);let e="THREE."+r.shift();if(Va)Va("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Gs(...r){let e=r.join(" ");e in Wg||(Wg[e]=!0,Ze(...r))}function o0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var l0={[yh]:yh,[Mh]:wh,[bh]:bh,[za]:Th,[Sh]:Sh,[wh]:Mh,[Eh]:Eh,[Th]:za},nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xg=1234567,Ba=Math.PI/180,Ha=180/Math.PI;function $s(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function bp(r,e){return(r%e+e)%e}function by(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ty(r,e,t){return r!==e?(t-r)/(e-r):0}function nl(r,e,t){return(1-t)*r+t*e}function wy(r,e,t,n){return nl(r,e,1-Math.exp(-t*n))}function Ey(r,e=1){return e-Math.abs(bp(r,e*2)-e)}function Ay(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ry(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Cy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Py(r,e){return r+Math.random()*(e-r)}function Iy(r){return r*(.5-Math.random())}function Ly(r){r!==void 0&&(Xg=r);let e=Xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dy(r){return r*Ba}function Ny(r){return r*Ha}function Uy(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Oy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Tp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fy(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),u=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*u,o*c);break;case"YXY":r.set(l*u,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*u,o*h,o*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wp(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function c0(r,e){if(e.constructor===Float32Array)return r;let t=wp(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function h0(r,e){if(e.constructor===Float32Array)return r;let t=wp(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Qn={DEG2RAD:Ba,RAD2DEG:Ha,generateUUID:$s,clamp:ht,euclideanModulo:bp,mapLinear:by,inverseLerp:Ty,lerp:nl,damp:wy,pingpong:Ey,smoothstep:Ay,smootherstep:Ry,randInt:Cy,randFloat:Py,randFloatSpread:Iy,seededRandom:Ly,degToRad:Dy,radToDeg:Ny,isPowerOfTwo:Uy,ceilPowerOfTwo:Oy,floorPowerOfTwo:Tp,setQuaternionFromProperEuler:Fy,normalize:h0,denormalize:c0},Le=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ir=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[a+0],u=s[a+1],p=s[a+2],_=s[a+3];if(d!==_||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*_;m<0&&(f=-f,u=-u,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,o=Math.sin(o*v)/b,l=l*g+f*o,c=c*g+u*o,h=h*g+p*o,d=d*g+_*o}else{l=l*g+f*o,c=c*g+u*o,h=h*g+p*o,d=d*g+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],f=s[a+1],u=s[a+2],p=s[a+3];return e[t]=o*p+h*d+l*u-c*f,e[t+1]=l*p+h*f+c*d-o*u,e[t+2]=c*p+h*u+o*f-l*d,e[t+3]=h*p-o*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),f=l(n/2),u=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(s+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(s-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gd=new G,qg=new ir,et=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],_=i[0],m=i[3],g=i[6],v=i[1],b=i[4],y=i[7],E=i[2],A=i[5],x=i[8];return s[0]=a*_+o*v+l*E,s[3]=a*m+o*b+l*A,s[6]=a*g+o*y+l*x,s[1]=c*_+h*v+d*E,s[4]=c*m+h*b+d*A,s[7]=c*g+h*y+d*x,s[2]=f*_+u*v+p*E,s[5]=f*m+u*b+p*A,s[8]=f*g+u*y+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,u=c*s-a*l,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_d.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_d.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_d=new et,Yg=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zg=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function By(){let r={enabled:!0,workingColorSpace:al,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Mt&&(i.r=Rr(i.r),i.g=Rr(i.g),i.b=Rr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(i.r=ka(i.r),i.g=ka(i.g),i.b=ka(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Or?ol:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[al]:{primaries:e,whitePoint:n,transfer:ol,toXYZ:Yg,fromXYZ:Zg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Yg,fromXYZ:Zg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),r}var pt=By();function Rr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ka(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ta,Ch=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ta===void 0&&(Ta=ll("canvas")),Ta.width=e.width,Ta.height=e.height;let i=Ta.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ta}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ll("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Rr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rr(t[n]/255)*255):t[n]=Rr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ky=0,Wa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(xd(i[a].image)):s.push(xd(i[a]))}else s=xd(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function xd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ch.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var zy=0,vd=new G,Kn=class r extends nr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=tr,i=tr,s=$n,a=Nr,o=qi,l=si,c=r.DEFAULT_ANISOTROPY,h=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=$s(),this.name="",this.source=new Wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=up;Kn.DEFAULT_ANISOTROPY=1;var Ft=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(u+1)/2,E=(g+1)/2,A=(h+f)/4,x=(d+_)/4,M=(p+m)/4;return b>y&&b>E?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=x/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=M/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=x/s,i=M/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ph=class extends nr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Kn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Wa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends Ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cl=class extends Kn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ih=class extends Kn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Tt=class r{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,l,c,h,d,f,u,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,f,u,p,_,m)}set(e,t,n,i,s,a,o,l,c,h,d,f,u,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/wa.setFromMatrixColumn(e,0).length(),s=1/wa.setFromMatrixColumn(e,1).length(),a=1/wa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=a*h,u=a*d,p=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+p*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=p+u*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,p=c*h,_=c*d;t[0]=f+_*o,t[4]=p*o-u,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-p,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,p=c*h,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=p+u*o,t[1]=u+p*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,u=a*d,p=o*h,_=o*d;t[0]=l*h,t[4]=p*c-u,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=u*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,u=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=p*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*d+p,t[10]=f-_*d}else if(e.order==="XZY"){let f=a*l,u=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gy,e,Vy)}lookAt(e,t,n){let i=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),jr.crossVectors(n,mi),jr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),jr.crossVectors(n,mi)),jr.normalize(),Wc.crossVectors(mi,jr),i[0]=jr.x,i[4]=Wc.x,i[8]=mi.x,i[1]=jr.y,i[5]=Wc.y,i[9]=mi.y,i[2]=jr.z,i[6]=Wc.z,i[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],b=n[7],y=n[11],E=n[15],A=i[0],x=i[4],M=i[8],R=i[12],S=i[1],L=i[5],C=i[9],O=i[13],D=i[2],k=i[6],V=i[10],U=i[14],K=i[3],H=i[7],I=i[11],Q=i[15];return s[0]=a*A+o*S+l*D+c*K,s[4]=a*x+o*L+l*k+c*H,s[8]=a*M+o*C+l*V+c*I,s[12]=a*R+o*O+l*U+c*Q,s[1]=h*A+d*S+f*D+u*K,s[5]=h*x+d*L+f*k+u*H,s[9]=h*M+d*C+f*V+u*I,s[13]=h*R+d*O+f*U+u*Q,s[2]=p*A+_*S+m*D+g*K,s[6]=p*x+_*L+m*k+g*H,s[10]=p*M+_*C+m*V+g*I,s[14]=p*R+_*O+m*U+g*Q,s[3]=v*A+b*S+y*D+E*K,s[7]=v*x+b*L+y*k+E*H,s[11]=v*M+b*C+y*V+E*I,s[15]=v*R+b*O+y*U+E*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=l*u-c*f,b=o*u-c*d,y=o*f-l*d,E=a*u-c*h,A=a*f-l*h,x=a*d-o*h;return t*(_*v-m*b+g*y)-n*(p*v-m*E+g*A)+i*(p*b-_*E+g*x)-s*(p*y-_*A+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*o-n*a,b=t*l-i*a,y=t*c-s*a,E=n*l-i*o,A=n*c-s*o,x=i*c-s*l,M=h*_-d*p,R=h*m-f*p,S=h*g-u*p,L=d*m-f*_,C=d*g-u*_,O=f*g-u*m,D=v*O-b*C+y*L+E*S-A*R+x*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return e[0]=(o*O-l*C+c*L)*k,e[1]=(i*C-n*O-s*L)*k,e[2]=(_*x-m*A+g*E)*k,e[3]=(f*A-d*x-u*E)*k,e[4]=(l*S-a*O-c*R)*k,e[5]=(t*O-i*S+s*R)*k,e[6]=(m*y-p*x-g*b)*k,e[7]=(h*x-f*y+u*b)*k,e[8]=(a*C-o*S+c*M)*k,e[9]=(n*S-t*C-s*M)*k,e[10]=(p*A-_*y+g*v)*k,e[11]=(d*y-h*A-u*v)*k,e[12]=(o*R-a*L-l*M)*k,e[13]=(t*L-n*R+i*M)*k,e[14]=(_*b-p*E-m*v)*k,e[15]=(h*E-d*b+f*v)*k,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,u=s*h,p=s*d,_=a*h,m=a*d,g=o*d,v=l*c,b=l*h,y=l*d,E=n.x,A=n.y,x=n.z;return i[0]=(1-(_+g))*E,i[1]=(u+y)*E,i[2]=(p-b)*E,i[3]=0,i[4]=(u-y)*A,i[5]=(1-(f+g))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(p+b)*x,i[9]=(m-v)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=wa.set(i[0],i[1],i[2]).length(),o=wa.set(i[4],i[5],i[6]).length(),l=wa.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Bi.copy(this);let c=1/a,h=1/o,d=1/l;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=d,Bi.elements[9]*=d,Bi.elements[10]*=d,t.setFromRotationMatrix(Bi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Pi,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i),p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===Pi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ga)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Pi,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i),p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===Pi)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ga)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wa=new G,Bi=new Tt,Gy=new G(0,0,0),Vy=new G(1,1,1),jr=new G,Wc=new G,mi=new G,Jg=new Tt,$g=new ir,rr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $g.setFromEuler(this),this.setFromQuaternion($g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rr.DEFAULT_ORDER="XYZ";var hl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hy=0,Kg=new G,Ea=new ir,Mr=new Tt,Xc=new G,Zo=new G,Wy=new G,Xy=new ir,Qg=new G(1,0,0),jg=new G(0,1,0),e_=new G(0,0,1),t_={type:"added"},qy={type:"removed"},Aa={type:"childadded",child:null},yd={type:"childremoved",child:null},Kt=class r extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new G,t=new rr,n=new ir,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new et}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ea.setFromAxisAngle(e,t),this.quaternion.multiply(Ea),this}rotateOnWorldAxis(e,t){return Ea.setFromAxisAngle(e,t),this.quaternion.premultiply(Ea),this}rotateX(e){return this.rotateOnAxis(Qg,e)}rotateY(e){return this.rotateOnAxis(jg,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,t){return Kg.copy(e).applyQuaternion(this.quaternion),this.position.add(Kg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qg,e)}translateY(e){return this.translateOnAxis(jg,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xc.copy(e):Xc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Zo,Xc,this.up):Mr.lookAt(Xc,Zo,this.up),this.quaternion.setFromRotationMatrix(Mr),i&&(Mr.extractRotation(i.matrixWorld),Ea.setFromRotationMatrix(Mr),this.quaternion.premultiply(Ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t_),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qy),yd.child=e,this.dispatchEvent(yd),yd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t_),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new G(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yy={type:"move"},Xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},qc={h:0,s:0,l:0};function Sd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=bp(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Sd(a,s,e+1/3),this.g=Sd(a,s,e),this.b=Sd(a,s,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){let n=u0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return pt.workingToColorSpace(Fn.copy(this),e),Math.round(ht(Fn.r*255,0,255))*65536+Math.round(ht(Fn.g*255,0,255))*256+Math.round(ht(Fn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,i=Fn.g,s=Fn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Tn){pt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,i=Fn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(qc);let n=nl(es.h,qc.h,t),i=nl(es.s,qc.s,t),s=nl(es.l,qc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new je;je.NAMES=u0;var Pr=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ki=new G,br=new G,Md=new G,Tr=new G,Ra=new G,Ca=new G,n_=new G,bd=new G,Td=new G,wd=new G,Ed=new Ft,Ad=new Ft,Rd=new Ft,Ar=class r{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ki.subVectors(e,t),i.cross(ki);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ki.subVectors(i,t),br.subVectors(n,t),Md.subVectors(e,t);let a=ki.dot(ki),o=ki.dot(br),l=ki.dot(Md),c=br.dot(br),h=br.dot(Md),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,p=(a*h-o*l)*f;return s.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tr.x),l.addScaledVector(a,Tr.y),l.addScaledVector(o,Tr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ed.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Ed.fromBufferAttribute(e,t),Ad.fromBufferAttribute(e,n),Rd.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ed,s.x),a.addScaledVector(Ad,s.y),a.addScaledVector(Rd,s.z),a}static isFrontFacing(e,t,n,i){return ki.subVectors(n,t),br.subVectors(e,t),ki.cross(br).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),br.subVectors(this.a,this.b),ki.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Ra.subVectors(i,n),Ca.subVectors(s,n),bd.subVectors(e,n);let l=Ra.dot(bd),c=Ca.dot(bd);if(l<=0&&c<=0)return t.copy(n);Td.subVectors(e,i);let h=Ra.dot(Td),d=Ca.dot(Td);if(h>=0&&d<=h)return t.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ra,a);wd.subVectors(e,s);let u=Ra.dot(wd),p=Ca.dot(wd);if(p>=0&&u<=p)return t.copy(s);let _=u*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ca,o);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return n_.subVectors(s,i),o=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(n_,o);let g=1/(m+_+f);return a=_*g,o=f*g,t.copy(n).addScaledVector(Ra,a).addScaledVector(Ca,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ii=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zi):zi.fromBufferAttribute(s,a),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yc.copy(n.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Zc.subVectors(this.max,Jo),Pa.subVectors(e.a,Jo),Ia.subVectors(e.b,Jo),La.subVectors(e.c,Jo),ts.subVectors(Ia,Pa),ns.subVectors(La,Ia),Os.subVectors(Pa,La);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Os.z,Os.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Os.z,0,-Os.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Os.y,Os.x,0];return!Cd(t,Pa,Ia,La,Zc)||(t=[1,0,0,0,1,0,0,0,1],!Cd(t,Pa,Ia,La,Zc))?!1:(Jc.crossVectors(ts,ns),t=[Jc.x,Jc.y,Jc.z],Cd(t,Pa,Ia,La,Zc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wr=[new G,new G,new G,new G,new G,new G,new G,new G],zi=new G,Yc=new Ii,Pa=new G,Ia=new G,La=new G,ts=new G,ns=new G,Os=new G,Jo=new G,Zc=new G,Jc=new G,Fs=new G;function Cd(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Fs.fromArray(r,s);let o=i.x*Math.abs(Fs.x)+i.y*Math.abs(Fs.y)+i.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var rn=new G,$c=new Le,Zy=0,Vi=class extends nr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=r0,this.updateRanges=[],this.gpuType=Li,this.version=0,this._normalizationScale=e!==void 0?wp(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$c.fromBufferAttribute(this,t),$c.applyMatrix3(e),this.setXY(t,$c.x,$c.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):c0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):h0(e,this.array)}};var ul=class extends Vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fl=class extends Vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Et=class extends Vi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jy=new Ii,$o=new G,Pd=new G,Ir=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);let t=$o.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($o,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(Pd)),this.expandByPoint($o.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$y=0,Ci=new Tt,Id=new Kt,Da=new G,gi=new Ii,Ko=new Ii,gn=new G,kn=class r extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sy(e)?fl:ul)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,n){return Ci.makeTranslation(e,t,n),this.applyMatrix4(Ci),this}scale(e,t,n){return Ci.makeScale(e,t,n),this.applyMatrix4(Ci),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Da).negate(),this.translate(Da.x,Da.y,Da.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ko.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(gi.min,Ko.min),gi.expandByPoint(gn),gn.addVectors(gi.max,Ko.max),gi.expandByPoint(gn)):(gi.expandByPoint(Ko.min),gi.expandByPoint(Ko.max))}gi.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gn.fromBufferAttribute(o,c),l&&(Da.fromBufferAttribute(e,c),gn.add(Da)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Vi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new G,l[R]=new G;let h=new G,d=new G,f=new G,u=new Le,p=new Le,_=new Le,m=new G,g=new G;function v(R,S,L){c[R]=c[S]=c[L]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,L),u.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,L),d.sub(h),f.sub(h),p.sub(u),_.sub(u);let C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(C),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(C),o[R].add(m),o[S].add(m),o[L].add(m),l[R].add(g),l[S].add(g),l[L].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,S=b.length;R<S;++R){let L=b[R],C=L.start,O=L.count;for(let D=C,k=C+O;D<k;D+=3)v(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let y=new G,E=new G,A=new G,x=new G;function M(R){A.fromBufferAttribute(i,R),x.copy(A);let S=o[R];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),E.crossVectors(x,S);let C=E.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,C)}for(let R=0,S=n.count;R<S;++R)c[R]&&M(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new G,s=new G,a=new G,o=new G,l=new G,c=new G,h=new G,d=new G;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Vi(f,h,d)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ld=new G,Ky=new G,Qy=new et,Gi=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ld.subVectors(n,t).cross(Ky.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ld),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qy.getNormalMatrix(e),i=this.coplanarPoint(Ld).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jy=0,sr=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=to,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ip,this.blendDst=rp,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vh,this.stencilZFail=vh,this.stencilZPass=vh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Er=new G,Dd=new G,Kc=new G,Qc=new G,dl=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dd.copy(e).add(t).multiplyScalar(.5),Kc.copy(t).sub(e).normalize(),Qc.copy(this.origin).sub(Dd);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Kc),o=Qc.dot(this.direction),l=-Qc.dot(Kc),c=Qc.lengthSq(),h=Math.abs(1-a*a),d,f,u,p;if(h>0)if(d=a*l-o,f=a*o-l,p=s*h,d>=0)if(f>=-p)if(f<=p){let _=1/h;d*=_,f*=_,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Dd).addScaledVector(Kc,f),u}intersectSphere(e,t){if(e.radius<0)return null;Er.subVectors(e.center,this.origin);let n=Er.dot(this.direction),i=Er.dot(Er)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,u=e.z-a.z,p=t.x-a.x,_=t.y-a.y,m=t.z-a.z,g=n.x-a.x,v=n.y-a.y,b=n.z-a.z,y=Math.abs(l),E=Math.abs(c),A=Math.abs(h),x,M,R,S,L,C,O,D,k,V,U,K;if(y>=E&&y>=A?(R=l,C=d,k=p,K=g,l>=0?(x=c,M=h,S=f,L=u,O=_,D=m,V=v,U=b):(x=h,M=c,S=u,L=f,O=m,D=_,V=b,U=v)):E>=A?(R=c,C=f,k=_,K=v,c>=0?(x=h,M=l,S=u,L=d,O=m,D=p,V=b,U=g):(x=l,M=h,S=d,L=u,O=p,D=m,V=g,U=b)):(R=h,C=u,k=m,K=b,h>=0?(x=l,M=c,S=d,L=f,O=p,D=_,V=g,U=v):(x=c,M=l,S=f,L=d,O=_,D=p,V=v,U=g)),R===0)return null;let H=x/R,I=M/R,Q=1/R,ge=S-H*C,Ue=L-I*C,W=O-H*k,ue=D-I*k,ye=V-H*K,Re=U-I*K,$=ye*ue-Re*W,te=ge*Re-Ue*ye,Ie=W*Ue-ue*ge;if(i){if($<0||te<0||Ie<0)return null}else if(($<0||te<0||Ie<0)&&($>0||te>0||Ie>0))return null;let fe=$+te+Ie;if(fe===0)return null;let Ee=Q*($*C+te*k+Ie*K);return(fe>0?Ee<0:Ee>0)?null:this.at(Ee/fe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ar=class extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},i_=new Tt,Bs=new dl,jc=new Ir,r_=new G,eh=new G,th=new G,nh=new G,Nd=new G,ih=new G,s_=new G,rh=new G,xt=class extends Kt{constructor(e=new kn,t=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ih.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Nd.fromBufferAttribute(d,e),a?ih.addScaledVector(Nd,h):ih.addScaledVector(Nd.sub(t),h))}t.add(ih)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jc.copy(n.boundingSphere),jc.applyMatrix4(s),Bs.copy(e.ray).recast(e.near),!(jc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(jc,r_)===null||Bs.origin.distanceToSquared(r_)>(e.far-e.near)**2))&&(i_.copy(s).invert(),Bs.copy(e.ray).applyMatrix4(i_),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,E=b;y<E;y+=3){let A=o.getX(y),x=o.getX(y+1),M=o.getX(y+2);i=sh(this,g,e,n,c,h,d,A,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let v=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);i=sh(this,a,e,n,c,h,d,v,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,E=b;y<E;y+=3){let A=y,x=y+1,M=y+2;i=sh(this,g,e,n,c,h,d,A,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let v=m,b=m+1,y=m+2;i=sh(this,a,e,n,c,h,d,v,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function eS(r,e,t,n,i,s,a,o){let l;if(e.side===wn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===hs,o),l===null)return null;rh.copy(o),rh.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(rh);return c<t.near||c>t.far?null:{distance:c,point:rh.clone(),object:r}}function sh(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,eh),r.getVertexPosition(l,th),r.getVertexPosition(c,nh);let h=eS(r,e,t,n,eh,th,nh,s_);if(h){let d=new G;Ar.getBarycoord(s_,eh,th,nh,d),i&&(h.uv=Ar.getInterpolatedAttribute(i,o,l,c,d,new Le)),s&&(h.uv1=Ar.getInterpolatedAttribute(s,o,l,c,d,new Le)),a&&(h.normal=Ar.getInterpolatedAttribute(a,o,l,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new G,materialIndex:0};Ar.getNormal(eh,th,nh,f.normal),h.face=f,h.barycoord=d}return h}var pl=class extends Kn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=xn,h=xn,d,f){super(null,a,o,l,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ml=class extends Vi{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Na=new Tt,a_=new Tt,ah=[],o_=new Ii,tS=new Tt,Qo=new xt,jo=new Ir,gl=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ml(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Na),o_.copy(e.boundingBox).applyMatrix4(Na),this.boundingBox.union(o_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Na),jo.copy(e.boundingSphere).applyMatrix4(Na),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(n),e.ray.intersectsSphere(jo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Na),a_.multiplyMatrices(n,Na),Qo.matrixWorld=a_,Qo.raycast(e,ah);for(let a=0,o=ah.length;a<o;a++){let l=ah[a];l.instanceId=s,l.object=this,t.push(l)}ah.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pl(new Float32Array(i*this.count),i,this.count,cu,Li));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new Ir,nS=new Le(.5,.5),oh=new G,ss=class{constructor(e=new Gi,t=new Gi,n=new Gi,i=new Gi,s=new Gi,a=new Gi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],u=s[7],p=s[8],_=s[9],m=s[10],g=s[11],v=s[12],b=s[13],y=s[14],E=s[15];if(i[0].setComponents(c-a,u-h,g-p,E-v).normalize(),i[1].setComponents(c+a,u+h,g+p,E+v).normalize(),i[2].setComponents(c+o,u+d,g+_,E+b).normalize(),i[3].setComponents(c-o,u-d,g-_,E-b).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,u-f,g-m,E-y).normalize();else if(i[4].setComponents(c-l,u-f,g-m,E-y).normalize(),t===Pi)i[5].setComponents(c+l,u+f,g+m,E+y).normalize();else if(t===Ga)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);let t=nS.distanceTo(e.center);return ks.radius=.7071067811865476+t,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(oh.x=i.normal.x>0?e.max.x:e.min.x,oh.y=i.normal.y>0?e.max.y:e.min.y,oh.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},l_=new Tt,Lh=class r{constructor(){this.coordinateSystem=Pi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];l_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new ss),n[i].setFromProjectionMatrix(l_,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new ss),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var qa=class extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dh=new G,Nh=new G,c_=new Tt,el=new dl,lh=new Ir,Ud=new G,h_=new G,Uh=class extends Kt{constructor(e=new kn,t=new qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Dh.fromBufferAttribute(t,i-1),Nh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dh.distanceTo(Nh);e.setAttribute("lineDistance",new Et(n,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lh.copy(n.boundingSphere),lh.applyMatrix4(i),lh.radius+=s,e.ray.intersectsSphere(lh)===!1)return;c_.copy(i).invert(),el.copy(e.ray).applyMatrix4(c_);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=u,m=p-1;_<m;_+=c){let g=h.getX(_),v=h.getX(_+1),b=ch(this,e,el,l,g,v,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(u),g=ch(this,e,el,l,_,m,p-1);g&&t.push(g)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=u,m=p-1;_<m;_+=c){let g=ch(this,e,el,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=ch(this,e,el,l,p-1,u,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ch(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(Dh.fromBufferAttribute(o,i),Nh.fromBufferAttribute(o,s),t.distanceSqToSegment(Dh,Nh,Ud,h_)>n)return;Ud.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ud);if(!(c<e.near||c>e.far))return{distance:c,point:h_.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var u_=new G,f_=new G,_l=class extends Uh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)u_.fromBufferAttribute(t,i),f_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+u_.distanceTo(f_);e.setAttribute("lineDistance",new Et(n,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xl=class extends Kn{constructor(e=[],t=Zs,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hi=class extends Kn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Lr=class extends Kn{constructor(e,t,n=Wi,i,s,a,o=xn,l=xn,c,h=Cr,d=1){if(h!==Cr&&h!==Ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vl=class extends Lr{constructor(e,t=Wi,n=Zs,i,s,a=xn,o=xn,l,c=Cr){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yl=class extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xi=class r extends kn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function p(_,m,g,v,b,y,E,A,x,M,R){let S=y/x,L=E/M,C=y/2,O=E/2,D=A/2,k=x+1,V=M+1,U=0,K=0,H=new G;for(let I=0;I<V;I++){let Q=I*L-O;for(let ge=0;ge<k;ge++){let Ue=ge*S-C;H[_]=Ue*v,H[m]=Q*b,H[g]=D,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[g]=A>0?1:-1,h.push(H.x,H.y,H.z),d.push(ge/x),d.push(1-I/M),U+=1}}for(let I=0;I<M;I++)for(let Q=0;Q<x;Q++){let ge=f+Q+k*I,Ue=f+Q+k*(I+1),W=f+(Q+1)+k*(I+1),ue=f+(Q+1)+k*I;l.push(ge,Ue,ue),l.push(Ue,W,ue),K+=6}o.addGroup(u,K,R),u+=K,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var as=class r extends kn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],f=[],u=[],p=0,_=[],m=n/2,g=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(u,2));function v(){let y=new G,E=new G,A=0,x=(t-e)/n;for(let M=0;M<=s;M++){let R=[],S=M/s,L=S*(t-e)+e;for(let C=0;C<=i;C++){let O=C/i,D=O*l+o,k=Math.sin(D),V=Math.cos(D);E.x=L*k,E.y=-S*n+m,E.z=L*V,d.push(E.x,E.y,E.z),y.set(k,x,V).normalize(),f.push(y.x,y.y,y.z),u.push(O,1-S),R.push(p++)}_.push(R)}for(let M=0;M<i;M++)for(let R=0;R<s;R++){let S=_[R][M],L=_[R+1][M],C=_[R+1][M+1],O=_[R][M+1];(e>0||R!==0)&&(h.push(S,L,O),A+=3),(t>0||R!==s-1)&&(h.push(L,C,O),A+=3)}c.addGroup(g,A,0),g+=A}function b(y){let E=p,A=new Le,x=new G,M=0,R=y===!0?e:t,S=y===!0?1:-1;for(let C=1;C<=i;C++)d.push(0,m*S,0),f.push(0,S,0),u.push(.5,.5),p++;let L=p;for(let C=0;C<=i;C++){let D=C/i*l+o,k=Math.cos(D),V=Math.sin(D);x.x=R*V,x.y=m*S,x.z=R*k,d.push(x.x,x.y,x.z),f.push(0,S,0),A.x=k*.5+.5,A.y=V*.5*S+.5,u.push(A.x,A.y),p++}for(let C=0;C<i;C++){let O=E+C,D=L+C;y===!0?h.push(D,D+1,O):h.push(D+1,D,O),M+=3}c.addGroup(g,M,y===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sl=class r extends as{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hh=new G,uh=new G,Od=new G,fh=new Ar,Ml=class extends kn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Ba*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f=new Map,u=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=fh;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),fh.getNormal(Od),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let b=(v+1)%3,y=d[v],E=d[b],A=fh[h[v]],x=fh[h[b]],M=`${y}_${E}`,R=`${E}_${y}`,S=f.get(R);S?(Od.dot(S.normal)<=s&&(u.push(A.x,A.y,A.z),u.push(x.x,x.y,x.z)),f.set(R,null)):f.has(M)||f.set(M,{index0:c[v],index1:c[b],normal:Od.clone()})}}for(let p of f.values())if(p){let{index0:_,index1:m}=p;hh.fromBufferAttribute(o,_),uh.fromBufferAttribute(o,m),u.push(hh.x,hh.y,hh.z),u.push(uh.x,uh.y,uh.z)}this.setAttribute("position",new Et(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Le:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new G,i=[],s=[],a=[],o=new G,l=new Tt;for(let u=0;u<=e;u++){let p=u/e;i[u]=this.getTangentAt(p,new G)}s[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ht(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(o,p))}a[u].crossVectors(i[u],s[u])}if(t===!0){let u=Math.acos(ht(s[0].dot(s[e]),-1,1));u/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(u=-u);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ya=class extends vi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Le){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oh=class extends Ya{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ep(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var d_=new G,p_=new G,Fd=new Ep,Bd=new Ep,kd=new Ep,Fh=class extends vi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new G){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(p_.subVectors(i[0],i[1]).add(i[0]),c=p_);let d=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(d_.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=d_),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Fd.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,_,m),Bd.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,_,m),kd.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Fd.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Bd.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),kd.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Fd.calc(l),Bd.calc(l),kd.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new G().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function m_(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function iS(r,e){let t=1-r;return t*t*e}function rS(r,e){return 2*(1-r)*r*e}function sS(r,e){return r*r*e}function il(r,e,t,n){return iS(r,e)+rS(r,t)+sS(r,n)}function aS(r,e){let t=1-r;return t*t*t*e}function oS(r,e){let t=1-r;return 3*t*t*r*e}function lS(r,e){return 3*(1-r)*r*r*e}function cS(r,e){return r*r*r*e}function rl(r,e,t,n,i){return aS(r,e)+oS(r,t)+lS(r,n)+cS(r,i)}var bl=class extends vi{constructor(e=new Le,t=new Le,n=new Le,i=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Le){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(rl(e,i.x,s.x,a.x,o.x),rl(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bh=class extends vi{constructor(e=new G,t=new G,n=new G,i=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new G){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(rl(e,i.x,s.x,a.x,o.x),rl(e,i.y,s.y,a.y,o.y),rl(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tl=class extends vi{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kh=class extends vi{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends vi{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(il(e,i.x,s.x,a.x),il(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zh=class extends vi{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(il(e,i.x,s.x,a.x),il(e,i.y,s.y,a.y),il(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},El=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(m_(o,l.x,c.x,h.x,d.x),m_(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Le().fromArray(i))}return this}},Xd=Object.freeze({__proto__:null,ArcCurve:Oh,CatmullRomCurve3:Fh,CubicBezierCurve:bl,CubicBezierCurve3:Bh,EllipseCurve:Ya,LineCurve:Tl,LineCurve3:kh,QuadraticBezierCurve:wl,QuadraticBezierCurve3:zh,SplineCurve:El}),Gh=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Xd[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Vs=class extends Gh{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Tl(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new wl(this.currentPoint.clone(),new Le(e,t),new Le(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new bl(this.currentPoint.clone(),new Le(e,t),new Le(n,i),new Le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new El(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Ya(e,t,n,i,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Za=class extends Vs{constructor(e){super(e),this.uuid=$s(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Vs().fromJSON(i))}return this}};function hS(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=f0(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=mS(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,d=l;for(let f=t;f<i;f+=t){let u=r[f],p=r[f+1];u<o&&(o=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Al(s,a,t,o,l,c,0),a}function f0(r,e,t,n,i){let s;if(i===ES(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=g_(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=g_(a/n|0,r[a],r[a+1],s);return s&&Ja(s,s.next)&&(Cl(s),s=s.next),s}function Hs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ja(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Cl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Al(r,e,t,n,i,s,a){if(!r)return;!a&&s&&yS(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?fS(r,n,i,s):uS(r)){e.push(l.i,r.i,c.i),Cl(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=dS(Hs(r),e),Al(r,e,t,n,i,s,2)):a===2&&pS(r,e,t,n,i,s):Al(Hs(r),e,t,n,i,s,1);break}}}function uS(r){let e=r.prev,t=r,n=r.next;if(Wt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),d=Math.min(o,l,c),f=Math.max(i,s,a),u=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&tl(i,o,s,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function fS(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Wt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,d=s.y,f=a.y,u=Math.min(o,l,c),p=Math.min(h,d,f),_=Math.max(o,l,c),m=Math.max(h,d,f),g=qd(u,p,e,t,n),v=qd(_,m,e,t,n),b=r.prevZ,y=r.nextZ;for(;b&&b.z>=g&&y&&y.z<=v;){if(b.x>=u&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==a&&tl(o,h,l,d,c,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=u&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==a&&tl(o,h,l,d,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=u&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==a&&tl(o,h,l,d,c,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=u&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==a&&tl(o,h,l,d,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function dS(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Ja(n,i)&&p0(n,t,t.next,i)&&Rl(n,i)&&Rl(i,n)&&(e.push(n.i,t.i,i.i),Cl(t),Cl(t.next),t=r=i),t=t.next}while(t!==r);return Hs(t)}function pS(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bS(a,o)){let l=m0(a,o);a=Hs(a,a.next),l=Hs(l,l.next),Al(a,e,t,n,i,s,0),Al(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function mS(r,e,t,n){let i=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=f0(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(MS(c))}i.sort(gS);for(let s=0;s<i.length;s++)t=_S(i[s],t);return t}function gS(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function _S(r,e){let t=xS(r,e);if(!t)return e;let n=m0(t,r);return Hs(n,n.next),Hs(t,t.next)}function xS(r,e){let t=e,n=r.x,i=r.y,s=-1/0,a;if(Ja(r,t))return t;do{if(Ja(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&d0(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);Rl(t,r)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&vS(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function vS(r,e){return Wt(r.prev,r,e.prev)<0&&Wt(e.next,r,r.next)<0}function yS(r,e,t,n){let i=r;do i.z===0&&(i.z=qd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,SS(i)}function SS(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function qd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function MS(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function d0(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function tl(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&d0(r,e,t,n,i,s,a,o)}function bS(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!TS(r,e)&&(Rl(r,e)&&Rl(e,r)&&wS(r,e)&&(Wt(r.prev,r,e.prev)||Wt(r,e.prev,e))||Ja(r,e)&&Wt(r.prev,r,r.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ja(r,e){return r.x===e.x&&r.y===e.y}function p0(r,e,t,n){let i=ph(Wt(r,e,t)),s=ph(Wt(r,e,n)),a=ph(Wt(t,n,r)),o=ph(Wt(t,n,e));return!!(i!==s&&a!==o||i===0&&dh(r,t,e)||s===0&&dh(r,n,e)||a===0&&dh(t,r,n)||o===0&&dh(t,e,n))}function dh(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ph(r){return r>0?1:r<0?-1:0}function TS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&p0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Rl(r,e){return Wt(r.prev,r,r.next)<0?Wt(r,e,r.next)>=0&&Wt(r,r.prev,e)>=0:Wt(r,e,r.prev)<0||Wt(r,r.next,e)<0}function wS(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function m0(r,e){let t=Yd(r.i,r.x,r.y),n=Yd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function g_(r,e,t,n){let i=Yd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Yd(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ES(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}var Zd=class{static triangulate(e,t,n=2){return hS(e,t,n)}},zs=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];__(e),x_(n,e);let a=e.length;t.forEach(__);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,x_(n,t[l]);let o=Zd.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function __(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function x_(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var $a=class r extends kn{constructor(e=new Za([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Et(i,3)),this.setAttribute("uv",new Et(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:AS,b,y=!1,E,A,x,M;if(g){b=g.getSpacedPoints(h),y=!0,f=!1;let Y=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,Y),A=new G,x=new G,M=new G}f||(m=0,u=0,p=0,_=0);let R=o.extractPoints(c),S=R.shape,L=R.holes;if(!zs.isClockWise(S)){S=S.reverse();for(let Y=0,le=L.length;Y<le;Y++){let ce=L[Y];zs.isClockWise(ce)&&(L[Y]=ce.reverse())}}function O(Y){let ce=10000000000000001e-36,z=Y[0];for(let _e=1;_e<=Y.length;_e++){let qe=_e%Y.length,Be=Y[qe],We=Be.x-z.x,Qe=Be.y-z.y,rt=We*We+Qe*Qe,B=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(z.x),Math.abs(z.y)),ot=ce*B*B;if(rt<=ot){Y.splice(qe,1),_e--;continue}z=Be}}O(S),L.forEach(O);let D=L.length,k=S;for(let Y=0;Y<D;Y++){let le=L[Y];S=S.concat(le)}function V(Y,le,ce){return le||$e("ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(le,ce)}let U=S.length;function K(Y,le,ce){let z,_e,qe,Be=Y.x-le.x,We=Y.y-le.y,Qe=ce.x-Y.x,rt=ce.y-Y.y,B=Be*Be+We*We,ot=Be*rt-We*Qe;if(Math.abs(ot)>Number.EPSILON){let Ke=Math.sqrt(B),Je=Math.sqrt(Qe*Qe+rt*rt),xe=le.x-We/Ke,mt=le.y+Be/Ke,Ge=ce.x-rt/Je,Ye=ce.y+Qe/Je,P=((Ge-xe)*rt-(Ye-mt)*Qe)/(Be*rt-We*Qe);z=xe+Be*P-Y.x,_e=mt+We*P-Y.y;let T=z*z+_e*_e;if(T<=2)return new Le(z,_e);qe=Math.sqrt(T/2)}else{let Ke=!1;Be>Number.EPSILON?Qe>Number.EPSILON&&(Ke=!0):Be<-Number.EPSILON?Qe<-Number.EPSILON&&(Ke=!0):Math.sign(We)===Math.sign(rt)&&(Ke=!0),Ke?(z=-We,_e=Be,qe=Math.sqrt(B)):(z=Be,_e=We,qe=Math.sqrt(B/2))}return new Le(z/qe,_e/qe)}let H=[];for(let Y=0,le=k.length,ce=le-1,z=Y+1;Y<le;Y++,ce++,z++)ce===le&&(ce=0),z===le&&(z=0),H[Y]=K(k[Y],k[ce],k[z]);let I=[],Q,ge=H.concat();for(let Y=0,le=D;Y<le;Y++){let ce=L[Y];Q=[];for(let z=0,_e=ce.length,qe=_e-1,Be=z+1;z<_e;z++,qe++,Be++)qe===_e&&(qe=0),Be===_e&&(Be=0),Q[z]=K(ce[z],ce[qe],ce[Be]);I.push(Q),ge=ge.concat(Q)}let Ue;if(m===0)Ue=zs.triangulateShape(k,L);else{let Y=[],le=[];for(let ce=0;ce<m;ce++){let z=ce/m,_e=u*Math.cos(z*Math.PI/2),qe=p*Math.sin(z*Math.PI/2)+_;for(let Be=0,We=k.length;Be<We;Be++){let Qe=V(k[Be],H[Be],qe);te(Qe.x,Qe.y,-_e),z===0&&Y.push(Qe)}for(let Be=0,We=D;Be<We;Be++){let Qe=L[Be];Q=I[Be];let rt=[];for(let B=0,ot=Qe.length;B<ot;B++){let Ke=V(Qe[B],Q[B],qe);te(Ke.x,Ke.y,-_e),z===0&&rt.push(Ke)}z===0&&le.push(rt)}}Ue=zs.triangulateShape(Y,le)}let W=Ue.length,ue=p+_;for(let Y=0;Y<U;Y++){let le=f?V(S[Y],ge[Y],ue):S[Y];y?(x.copy(E.normals[0]).multiplyScalar(le.x),A.copy(E.binormals[0]).multiplyScalar(le.y),M.copy(b[0]).add(x).add(A),te(M.x,M.y,M.z)):te(le.x,le.y,0)}for(let Y=1;Y<=h;Y++)for(let le=0;le<U;le++){let ce=f?V(S[le],ge[le],ue):S[le];y?(x.copy(E.normals[Y]).multiplyScalar(ce.x),A.copy(E.binormals[Y]).multiplyScalar(ce.y),M.copy(b[Y]).add(x).add(A),te(M.x,M.y,M.z)):te(ce.x,ce.y,d/h*Y)}for(let Y=m-1;Y>=0;Y--){let le=Y/m,ce=u*Math.cos(le*Math.PI/2),z=p*Math.sin(le*Math.PI/2)+_;for(let _e=0,qe=k.length;_e<qe;_e++){let Be=V(k[_e],H[_e],z);te(Be.x,Be.y,d+ce)}for(let _e=0,qe=L.length;_e<qe;_e++){let Be=L[_e];Q=I[_e];for(let We=0,Qe=Be.length;We<Qe;We++){let rt=V(Be[We],Q[We],z);y?te(rt.x,rt.y+b[h-1].y,b[h-1].x+ce):te(rt.x,rt.y,d+ce)}}}ye(),Re();function ye(){let Y=i.length/3;if(f){let le=0,ce=U*le;for(let z=0;z<W;z++){let _e=Ue[z];Ie(_e[2]+ce,_e[1]+ce,_e[0]+ce)}le=h+m*2,ce=U*le;for(let z=0;z<W;z++){let _e=Ue[z];Ie(_e[0]+ce,_e[1]+ce,_e[2]+ce)}}else{for(let le=0;le<W;le++){let ce=Ue[le];Ie(ce[2],ce[1],ce[0])}for(let le=0;le<W;le++){let ce=Ue[le];Ie(ce[0]+U*h,ce[1]+U*h,ce[2]+U*h)}}n.addGroup(Y,i.length/3-Y,0)}function Re(){let Y=i.length/3,le=0;$(k,le),le+=k.length;for(let ce=0,z=L.length;ce<z;ce++){let _e=L[ce];$(_e,le),le+=_e.length}n.addGroup(Y,i.length/3-Y,1)}function $(Y,le){let ce=Y.length;for(;--ce>=0;){let z=ce,_e=ce-1;_e<0&&(_e=Y.length-1);for(let qe=0,Be=h+m*2;qe<Be;qe++){let We=U*qe,Qe=U*(qe+1),rt=le+z+We,B=le+_e+We,ot=le+_e+Qe,Ke=le+z+Qe;fe(rt,B,ot,Ke)}}}function te(Y,le,ce){l.push(Y),l.push(le),l.push(ce)}function Ie(Y,le,ce){Ee(Y),Ee(le),Ee(ce);let z=i.length/3,_e=v.generateTopUV(n,i,z-3,z-2,z-1);Se(_e[0]),Se(_e[1]),Se(_e[2])}function fe(Y,le,ce,z){Ee(Y),Ee(le),Ee(z),Ee(le),Ee(ce),Ee(z);let _e=i.length/3,qe=v.generateSideWallUV(n,i,_e-6,_e-3,_e-2,_e-1);Se(qe[0]),Se(qe[1]),Se(qe[3]),Se(qe[1]),Se(qe[2]),Se(qe[3])}function Ee(Y){i.push(l[Y*3+0]),i.push(l[Y*3+1]),i.push(l[Y*3+2])}function Se(Y){s.push(Y.x),s.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return RS(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Xd[i.type]().fromJSON(i)),new r(n,e.options)}},AS={generateTopUV:function(r,e,t,n,i){let s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Le(s,a),new Le(o,l),new Le(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],u=e[i*3+1],p=e[i*3+2],_=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Le(a,1-l),new Le(c,1-d),new Le(f,1-p),new Le(_,1-g)]:[new Le(o,1-l),new Le(h,1-d),new Le(u,1-p),new Le(m,1-g)]}};function RS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yi=class r extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,f=t/l,u=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*f-a;for(let b=0;b<c;b++){let y=b*d-s;p.push(y,-v,0),_.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let b=v+c*g,y=v+c*(g+1),E=v+1+c*(g+1),A=v+1+c*g;u.push(b,y,A),u.push(y,E,A)}this.setIndex(u),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Pl=class r extends kn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new G,f=new G,u=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let v=[],b=g/n,y=a+b*o,E=e*Math.cos(y),A=Math.sqrt(e*e-E*E),x=0;g===0&&a===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let R=M/t,S=i+R*s;d.x=-A*Math.cos(S),d.y=E,d.z=A*Math.sin(S),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(R+x,1-b),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let b=h[g][v+1],y=h[g][v],E=h[g+1][v],A=h[g+1][v+1];(g!==0||a>0)&&u.push(b,y,A),(g!==n-1||l<Math.PI)&&u.push(y,E,A)}this.setIndex(u),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ka=class r extends kn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new G,u=new G,p=new G;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let g=0;g<=i;g++){let v=g/i*s;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,v=(i+1)*(_-1)+m-1,b=(i+1)*(_-1)+m,y=(i+1)*_+m;l.push(g,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ks(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(v_(i))i.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(v_(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function zn(r){let e={};for(let t=0;t<r.length;t++){let n=Ks(r[t]);for(let i in n)e[i]=n[i]}return e}function v_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function CS(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ap(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var g0={clone:Ks,merge:zn},PS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,or=class extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PS,this.fragmentShader=IS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=CS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(i.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m3":this.uniforms[n].value=new et().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Tt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vh=class extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sn=class extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ws=class extends sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Gs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Gs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Il=class extends sr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=nu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hh=class extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wh=class extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ua(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function mh(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var os=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xh=class extends os{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vd,endingEnd:Vd}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hd:s=e,o=2*t-n;break;case Wd:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hd:a=e,l=2*n-t;break;case Wd:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,b=(-1-u)*m+(1.5+u)*_+.5*p,y=u*m-u*_;for(let E=0;E!==o;++E)s[E]=g*a[h+E]+v*a[c+E]+b*a[l+E]+y*a[d+E];return s}},qh=class extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*d+a[l+f]*h;return s}},Yh=class extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zh=class extends os{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),_=1-p;for(let m=0;m!==o;++m)s[m]=a[c+m]*_+a[l+m]*p;return s}let f=o*2,u=e-1;for(let p=0;p!==o;++p){let _=a[c+p],m=a[l+p],g=u*f+p*2,v=d[g],b=d[g+1],y=e*f+p*2,E=h[y],A=h[y+1],x=DS(n,t,v,E,i);s[p]=_0(x,_,b,A,m)}return s}};function _0(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function LS(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function DS(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=_0(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=LS(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Si=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),mh(e.settings)&&(n.settings={inTangents:Ua(e.settings.inTangents,Array),outTangents:Ua(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sl:t=this.InterpolantFactoryMethodDiscrete;break;case Rh:t=this.InterpolantFactoryMethodLinear;break;case xh:t=this.InterpolantFactoryMethodSmooth;break;case Gd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sl;case this.InterpolantFactoryMethodLinear:return Rh;case this.InterpolantFactoryMethodSmooth:return xh;case this.InterpolantFactoryMethodBezier:return Gd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;mh(this.settings)&&(y_(this.settings.inTangents,e),y_(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;mh(this.settings)&&(S_(this.settings.inTangents,e),S_(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){$e("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&My(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xh,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let _=t[d+p];if(_!==t[f+p]||_!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,mh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function y_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function S_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Rh;var ls=class extends Si{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=sl;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Jh=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}};Jh.prototype.ValueTypeName="color";var $h=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}};$h.prototype.ValueTypeName="number";var Kh=class extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)ir.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ll=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Kh(this.times,this.values,this.getValueSize(),e)}};Ll.prototype.ValueTypeName="quaternion";Ll.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Si{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=sl;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Qh=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}};Qh.prototype.ValueTypeName="vector";var jh=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},x0=new jh,eu=class{constructor(e){this.manager=e!==void 0?e:x0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};eu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qa=class extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Dl=class extends Qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zd=new Tt,M_=new G,b_=new G,Nl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;M_.setFromMatrixPosition(e.matrixWorld),t.position.copy(M_),b_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(b_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){zd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zd,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===Ga||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gh=new G,_h=new ir,er=new G,Ul=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gh,_h,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gh,_h,er.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(gh,_h,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gh,_h,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new G,T_=new Le,w_=new Le,_n=class extends Ul{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,T_,w_),t.subVectors(w_,T_)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Jd=class extends Nl{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}},Ol=class extends Qa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fl=class extends Ul{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$d=class extends Nl{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends Qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new $d}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Oa=-90,Fa=1,ja=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new _n(Oa,Fa,e,t);i.layers=this.layers,this.add(i);let s=new _n(Oa,Fa,e,t);s.layers=this.layers,this.add(s);let a=new _n(Oa,Fa,e,t);a.layers=this.layers,this.add(a);let o=new _n(Oa,Fa,e,t);o.layers=this.layers,this.add(o);let l=new _n(Oa,Fa,e,t);l.layers=this.layers,this.add(l);let c=new _n(Oa,Fa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},tu=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Rp="\\[\\]\\.:\\/",NS=new RegExp("["+Rp+"]","g"),Cp="[^"+Rp+"]",US="[^"+Rp.replace("\\.","")+"]",OS=/((?:WC+[\/:])*)/.source.replace("WC",Cp),FS=/(WCOD+)?/.source.replace("WCOD",US),BS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cp),kS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cp),zS=new RegExp("^"+OS+FS+BS+kS+"$"),GS=["material","materials","bones","map"],Kd=class{constructor(e,t,n){let i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(NS,"")}static parseTrackName(e){let t=zS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);GS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Kd;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iE=new Float32Array(1);var Qd=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function Pp(r,e,t,n){let i=VS(n);switch(t){case gp:return r*e;case cu:return r*e/i.components*i.byteLength;case hu:return r*e/i.components*i.byteLength;case us:return r*e*2/i.components*i.byteLength;case uu:return r*e*2/i.components*i.byteLength;case _p:return r*e*3/i.components*i.byteLength;case qi:return r*e*4/i.components*i.byteLength;case fu:return r*e*4/i.components*i.byteLength;case zl:case Gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pu:case gu:return Math.max(r,16)*Math.max(e,8)/4;case du:case mu:return Math.max(r,8)*Math.max(e,8)/2;case _u:case xu:case yu:case Su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vu:case Wl:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case wu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Au:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Du:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fu:case Bu:case ku:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zu:case Gu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Xl:case Vu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VS(r){switch(r){case si:case fp:return{byteLength:1,components:1};case io:case dp:case Xi:return{byteLength:2,components:1};case ou:case lu:return{byteLength:2,components:4};case Wi:case au:case Li:return{byteLength:4,components:1};case pp:case mp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function z0(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function WS(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],_=d[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let _=d[u];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var XS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qS=`#ifdef USE_ALPHAHASH
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
#endif`,YS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KS=`#ifdef USE_AOMAP
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
#endif`,QS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jS=`#ifdef USE_BATCHING
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
#endif`,eM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rM=`#ifdef USE_IRIDESCENCE
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
#endif`,sM=`#ifdef USE_BUMPMAP
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
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pM=`#define PI 3.141592653589793
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
} // validated`,mM=`vec3 transformedNormal = objectNormal;
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
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
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
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,OM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GM=`PhysicalMaterial material;
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
#endif`,VM=`uniform sampler2D dfgLUT;
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
}`,HM=`
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eb=`#if defined( USE_POINTS_UV )
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
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rb=`#if defined( USE_MORPHCOLORS )
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
#endif`,sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
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
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cb=`float getShadowMask() {
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
}`,Pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#ifdef USE_TRANSMISSION
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`uniform float backgroundBlurriness;
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
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`#include <common>
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
}`,Kb=`#if DEPTH_PACKING == 3200
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
}`,Qb=`#define DISTANCE
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
}`,jb=`#define DISTANCE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`uniform float scale;
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
}`,i1=`uniform vec3 diffuse;
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
}`,r1=`#include <common>
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
}`,s1=`uniform vec3 diffuse;
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
}`,a1=`#define LAMBERT
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
}`,o1=`#define LAMBERT
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
}`,l1=`#define MATCAP
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
}`,c1=`#define MATCAP
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
}`,h1=`#define NORMAL
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
}`,u1=`#define NORMAL
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
}`,f1=`#define PHONG
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
}`,d1=`#define PHONG
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
}`,p1=`#define STANDARD
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
}`,m1=`#define STANDARD
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
}`,g1=`#define TOON
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
}`,_1=`#define TOON
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
}`,x1=`uniform float size;
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
}`,v1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,S1=`uniform vec3 color;
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
}`,M1=`uniform float rotation;
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
}`,b1=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:XS,alphahash_pars_fragment:qS,alphamap_fragment:YS,alphamap_pars_fragment:ZS,alphatest_fragment:JS,alphatest_pars_fragment:$S,aomap_fragment:KS,aomap_pars_fragment:QS,batching_pars_vertex:jS,batching_vertex:eM,begin_vertex:tM,beginnormal_vertex:nM,bsdfs:iM,iridescence_fragment:rM,bumpmap_pars_fragment:sM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:lM,clipping_planes_vertex:cM,color_fragment:hM,color_pars_fragment:uM,color_pars_vertex:fM,color_vertex:dM,common:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:_M,emissivemap_fragment:xM,emissivemap_pars_fragment:vM,colorspace_fragment:yM,colorspace_pars_fragment:SM,envmap_fragment:MM,envmap_common_pars_fragment:bM,envmap_pars_fragment:TM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:OM,envmap_vertex:EM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:CM,fog_pars_fragment:PM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:NM,lights_pars_begin:UM,lights_toon_fragment:FM,lights_toon_pars_fragment:BM,lights_phong_fragment:kM,lights_phong_pars_fragment:zM,lights_physical_fragment:GM,lights_physical_pars_fragment:VM,lights_fragment_begin:HM,lights_fragment_maps:WM,lights_fragment_end:XM,lightprobes_pars_fragment:qM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:ZM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:$M,map_fragment:KM,map_pars_fragment:QM,map_particle_fragment:jM,map_particle_pars_fragment:eb,metalnessmap_fragment:tb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:rb,morphnormal_vertex:sb,morphtarget_pars_vertex:ab,morphtarget_vertex:ob,normal_fragment_begin:lb,normal_fragment_maps:cb,normal_pars_fragment:hb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:_b,opaque_fragment:xb,packing:vb,premultiplied_alpha_fragment:yb,project_vertex:Sb,dithering_fragment:Mb,dithering_pars_fragment:bb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Eb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Rb,shadowmask_pars_fragment:Cb,skinbase_vertex:Pb,skinning_pars_vertex:Ib,skinning_vertex:Lb,skinnormal_vertex:Db,specularmap_fragment:Nb,specularmap_pars_fragment:Ub,tonemapping_fragment:Ob,tonemapping_pars_fragment:Fb,transmission_fragment:Bb,transmission_pars_fragment:kb,uv_pars_fragment:zb,uv_pars_vertex:Gb,uv_vertex:Vb,worldpos_vertex:Hb,background_vert:Wb,background_frag:Xb,backgroundCube_vert:qb,backgroundCube_frag:Yb,cube_vert:Zb,cube_frag:Jb,depth_vert:$b,depth_frag:Kb,distance_vert:Qb,distance_frag:jb,equirect_vert:e1,equirect_frag:t1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:r1,meshbasic_frag:s1,meshlambert_vert:a1,meshlambert_frag:o1,meshmatcap_vert:l1,meshmatcap_frag:c1,meshnormal_vert:h1,meshnormal_frag:u1,meshphong_vert:f1,meshphong_frag:d1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:g1,meshtoon_frag:_1,points_vert:x1,points_frag:v1,shadow_vert:y1,shadow_frag:S1,sprite_vert:M1,sprite_frag:b1},Ne={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},hr={basic:{uniforms:zn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:zn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:zn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:zn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:zn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new je(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:zn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:zn([Ne.points,Ne.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:zn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:zn([Ne.common,Ne.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:zn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:zn([Ne.sprite,Ne.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:zn([Ne.common,Ne.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:zn([Ne.lights,Ne.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};hr.physical={uniforms:zn([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Hu={r:0,b:0,g:0},T1=new Tt,G0=new et;G0.set(-1,0,0,0,1,0,0,0,1);function w1(r,e,t,n,i,s){let a=new je(0),o=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(v){let b=!1,y=u(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),b=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,b){let y=u(b);y&&y.isCubeTexture?(c===void 0&&(c=new xt(new xi(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Ks(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(T1.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(G0),c.material.toneMapped=pt.getTransfer(y.colorSpace)!==Mt,(h!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xt(new yi(2,2),new or({name:"BackgroundMaterial",uniforms:Ks(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=pt.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(Hu,Ap(r)),t.buffers.color.setClear(Hu.r,Hu.g,Hu.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:_,dispose:g}}function E1(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(L,C,O,D,k){let V=!1,U=d(L,D,O,C);s!==U&&(s=U,c(s.object)),V=u(L,D,O,k),V&&p(L,D,O,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(L,C,O,D),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function d(L,C,O,D){let k=D.wireframe===!0,V=n[C.id];V===void 0&&(V={},n[C.id]=V);let U=L.isInstancedMesh===!0?L.id:0,K=V[U];K===void 0&&(K={},V[U]=K);let H=K[O.id];H===void 0&&(H={},K[O.id]=H);let I=H[k];return I===void 0&&(I=f(l()),H[k]=I),I}function f(L){let C=[],O=[],D=[];for(let k=0;k<t;k++)C[k]=0,O[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:D,object:L,attributes:{},index:null}}function u(L,C,O,D){let k=s.attributes,V=C.attributes,U=0,K=O.getAttributes();for(let H in K)if(K[H].location>=0){let Q=k[H],ge=V[H];if(ge===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),Q===void 0||Q.attribute!==ge||ge&&Q.data!==ge.data)return!0;U++}return s.attributesNum!==U||s.index!==D}function p(L,C,O,D){let k={},V=C.attributes,U=0,K=O.getAttributes();for(let H in K)if(K[H].location>=0){let Q=V[H];Q===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let ge={};ge.attribute=Q,Q&&Q.data&&(ge.data=Q.data),k[H]=ge,U++}s.attributes=k,s.attributesNum=U,s.index=D}function _(){let L=s.newAttributes;for(let C=0,O=L.length;C<O;C++)L[C]=0}function m(L){g(L,0)}function g(L,C){let O=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;O[L]=1,D[L]===0&&(r.enableVertexAttribArray(L),D[L]=1),k[L]!==C&&(r.vertexAttribDivisor(L,C),k[L]=C)}function v(){let L=s.newAttributes,C=s.enabledAttributes;for(let O=0,D=C.length;O<D;O++)C[O]!==L[O]&&(r.disableVertexAttribArray(O),C[O]=0)}function b(L,C,O,D,k,V,U){U===!0?r.vertexAttribIPointer(L,C,O,k,V):r.vertexAttribPointer(L,C,O,D,k,V)}function y(L,C,O,D){_();let k=D.attributes,V=O.getAttributes(),U=C.defaultAttributeValues;for(let K in V){let H=V[K];if(H.location>=0){let I=k[K];if(I===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(I=L.instanceColor)),I!==void 0){let Q=I.normalized,ge=I.itemSize,Ue=e.get(I);if(Ue===void 0)continue;let W=Ue.buffer,ue=Ue.type,ye=Ue.bytesPerElement,Re=ue===r.INT||ue===r.UNSIGNED_INT||I.gpuType===au;if(I.isInterleavedBufferAttribute){let $=I.data,te=$.isInterleavedBuffer===!0?$.stride:$.itemSize,Ie=I.offset;if($.isInstancedInterleavedBuffer||$.isInstancedBufferAttribute){for(let fe=0;fe<H.locationSize;fe++)g(H.location+fe,$.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<H.locationSize;fe++)m(H.location+fe);r.bindBuffer(r.ARRAY_BUFFER,W);for(let fe=0;fe<H.locationSize;fe++)b(H.location+fe,ge/H.locationSize,ue,Q,te*ye,(Ie+ge/H.locationSize*fe)*ye,Re)}else{if(I.isInstancedBufferAttribute){for(let $=0;$<H.locationSize;$++)g(H.location+$,I.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let $=0;$<H.locationSize;$++)m(H.location+$);r.bindBuffer(r.ARRAY_BUFFER,W);for(let $=0;$<H.locationSize;$++)b(H.location+$,ge/H.locationSize,ue,Q,ge*ye,ge/H.locationSize*$*ye,Re)}}else if(U!==void 0){let Q=U[K];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(H.location,Q);break;case 3:r.vertexAttrib3fv(H.location,Q);break;case 4:r.vertexAttrib4fv(H.location,Q);break;default:r.vertexAttrib1fv(H.location,Q)}}}}v()}function E(){R();for(let L in n){let C=n[L];for(let O in C){let D=C[O];for(let k in D){let V=D[k];for(let U in V)h(V[U].object),delete V[U];delete D[k]}}delete n[L]}}function A(L){if(n[L.id]===void 0)return;let C=n[L.id];for(let O in C){let D=C[O];for(let k in D){let V=D[k];for(let U in V)h(V[U].object),delete V[U];delete D[k]}}delete n[L.id]}function x(L){for(let C in n){let O=n[C];for(let D in O){let k=O[D];if(k[L.id]===void 0)continue;let V=k[L.id];for(let U in V)h(V[U].object),delete V[U];delete k[L.id]}}}function M(L){for(let C in n){let O=n[C],D=L.isInstancedMesh===!0?L.id:0,k=O[D];if(k!==void 0){for(let V in k){let U=k[V];for(let K in U)h(U[K].object),delete U[K];delete k[V]}delete O[D],Object.keys(O).length===0&&delete n[C]}}}function R(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function A1(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function R1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==qi&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==si&&x!==Li&&!M&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:E,samples:A}}function C1(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Gi,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let v=s?0:n,b=v*4,y=g.clippingState||null;l.value=y,y=h(p,f,b,u);for(let E=0;E!==b;++E)y[E]=t[E];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=u+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=u;b!==_;++b,y+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Jl=class extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xi(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Xs});s.uniforms.tEquirect.value=t;let a=new xt(i,s),o=t.minFilter;return t.minFilter===Nr&&(t.minFilter=$n),new ja(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},v0=256,P1=3,I1=20,V0=256,H0=16,L1=3,D1=new G,N1=new je,fs=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ja(1,10,null),this._boxMesh=new xt(new xi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=D1}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(N1));let m=new ja(n,i,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(v0,Tp(e))}_fromTexture(e,t){e.mapping===Zs||e.mapping===no?this._setSize(e.image.length===0?v0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=y0(e,!1,!1),n=Math.log2(e)-P1;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=y0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Zs||e.mapping===no?(this._cubemapMaterial===null&&(this._cubemapMaterial=M0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=S0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=U1(),this._integrationMaterial=O1());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/H0);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-L1)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(V0*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=F1());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function y0(r,e,t){return new Jl(r,{minFilter:Nr,generateMipmaps:e,type:Xi,colorSpace:al,depthBuffer:t})}function $l(r,e,t){return new or({name:r,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:wn,blending:Xs,depthTest:!1,depthWrite:!1})}function U1(){return $l("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${V0}u

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
	`)}function O1(){return $l("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:H0}},`

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
	`)}function F1(){return $l("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${I1}
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
	`)}function S0(){return $l("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function M0(){return $l("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function B1(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):s(f)}function s(f){if(f&&f.isTexture){let u=f.mapping;if(u===iu||u===ru)if(e.has(f)){let p=e.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Jl(p.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===iu||u===ru,_=u===Zs||u===no;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new fs(r)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new fs(r)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,u){return u===iu?f.mapping=Zs:u===ru&&(f.mapping=no),f}function l(f){let u=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function k1(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Gs("WebGLRenderer: "+n+" extension not supported."),i}}}function z1(r,e,t,n){let i={},s=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let _=s.get(p);_&&(e.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)e.update(_[m],r.ARRAY_BUFFER)}function d(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,b=m.count>=65535?fl:ul,y=new b(Math.ceil(v/3)*6,1),E=y.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,R=0;M<v;M+=3){let S=x[M+0],L=x[M+1],C=x[M+2];E[R++]=S,E[R++]=L,E[R++]=L,E[R++]=C,E[R++]=C,E[R++]=S}}else{g=m.version;for(let x=0,M=0;x<v;x+=3){let R=x+0,S=x+1,L=x+2;E[M++]=R,E[M++]=S,E[M++]=S,E[M++]=L,E[M++]=L,E[M++]=R}}y.version=g;let A=s.get(p);A&&e.remove(A),s.set(p,y)}function f(p){let _=s.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&d(p)}else d(p);return s.get(p)}function u(){for(let p in i){let _=i[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function G1(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,u){u!==0&&(r.drawElementsInstanced(n,f,s,d*a,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,u);let _=0;for(let m=0;m<u;m++)_+=f[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function V1(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function H1(r,e,t){let n=new WeakMap,i=new Ft;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;u===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*E*4*d),x=new cl(A,y,E,d);x.type=Li,x.needsUpdate=!0;let M=b*4;for(let S=0;S<d;S++){let L=m[S],C=g[S],O=v[S],D=y*E*4*S;for(let k=0;k<L.count;k++){let V=k*M;u===!0&&(i.fromBufferAttribute(L,k),A[D+V+0]=i.x,A[D+V+1]=i.y,A[D+V+2]=i.z,A[D+V+3]=0),p===!0&&(i.fromBufferAttribute(C,k),A[D+V+4]=i.x,A[D+V+5]=i.y,A[D+V+6]=i.z,A[D+V+7]=0),_===!0&&(i.fromBufferAttribute(O,k),A[D+V+8]=i.x,A[D+V+9]=i.y,A[D+V+10]=i.z,A[D+V+11]=O.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new Le(y,E)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let p=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function W1(r,e,t,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var X1={[sp]:"LINEAR_TONE_MAPPING",[ap]:"REINHARD_TONE_MAPPING",[op]:"CINEON_TONE_MAPPING",[Ys]:"ACES_FILMIC_TONE_MAPPING",[cp]:"AGX_TONE_MAPPING",[hp]:"NEUTRAL_TONE_MAPPING",[lp]:"CUSTOM_TONE_MAPPING"};function q1(r,e,t,n,i,s){let a=new _i(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new kn;h.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Et([0,2,0,0,2,0],2));let d=new Vh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new xt(h,d),u=new Fl(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,v=null,b=[],y=!1;this.setSize=function(E,A){a.setSize(E,A),o!==null&&o.setSize(E,A),l!==null&&l.setSize(E,A);for(let x=0;x<b.length;x++){let M=b[x];M.setSize&&M.setSize(E,A)}},this.setEffects=function(E){b=E,y=b.length>0&&b[0].isRenderPass===!0;let A=a.width,x=a.height;b.length>0&&o===null&&(o=new _i(A,x,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),l=new _i(A,x,{type:Xi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&b.some(R=>R.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Lr(A,x),s===!0&&(c.format=Ur,c.type=Js)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let R=0;R<b.length;R++){let S=b[R];S.setSize&&S.setSize(A,x),M&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(c)}},this.begin=function(E,A){if(m||E.toneMapping===lr&&b.length===0)return!1;if(v=A,A!==null){let x=A.width,M=A.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return y===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=lr,!0},this.hasRenderPass=function(){return y},this.end=function(E,A){E.toneMapping=g,m=!0;let x=a,M=o;for(let R=0;R<b.length;R++){let S=b[R];S.enabled!==!1&&(S.render(E,M,x,A),S.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,d.defines={},pt.getTransfer(p)===Mt&&(d.defines.SRGB_TRANSFER="");let R=X1[_];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(f,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var W0=new Kn,X0=new Lr(1,1),q0=new vl(1),Y0=new cl,Z0=new Ih,J0=new xl,b0=[],T0=[],w0=new Float32Array(16),E0=new Float32Array(9),A0=new Float32Array(4);function ao(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=b0[i];if(s===void 0&&(s=new Float32Array(i),b0[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xu(r,e){let t=T0[e];t===void 0&&(t=new Int32Array(e),T0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Y1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Z1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function J1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function $1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function K1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;A0.set(n),r.uniformMatrix2fv(this.addr,!1,A0),fn(t,n)}}function Q1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;E0.set(n),r.uniformMatrix3fv(this.addr,!1,E0),fn(t,n)}}function j1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;w0.set(n),r.uniformMatrix4fv(this.addr,!1,w0),fn(t,n)}}function eT(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function nT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function iT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function rT(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function aT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function oT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function qu(r){return r.version===0&&(r.compareFunction=yp,r.needsUpdate=!0),r}function lT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=qu(X0):s=W0,t.setTexture2D(e||s,i)}function cT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Z0,i)}function hT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=qu(q0):s=J0,t.setTextureCube(e||s,i)}function uT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Y0,i)}function fT(r){switch(r){case 5126:return Y1;case 35664:return Z1;case 35665:return J1;case 35666:return $1;case 35674:return K1;case 35675:return Q1;case 35676:return j1;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return rT;case 36294:return sT;case 36295:return aT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return uT}}function dT(r,e){r.uniform1fv(this.addr,e)}function pT(r,e){let t=ao(e,this.size,2);r.uniform2fv(this.addr,t)}function mT(r,e){let t=ao(e,this.size,3);r.uniform3fv(this.addr,t)}function gT(r,e){let t=ao(e,this.size,4);r.uniform4fv(this.addr,t)}function _T(r,e){let t=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xT(r,e){let t=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vT(r,e){let t=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function yT(r,e){r.uniform1iv(this.addr,e)}function ST(r,e){r.uniform2iv(this.addr,e)}function MT(r,e){r.uniform3iv(this.addr,e)}function bT(r,e){r.uniform4iv(this.addr,e)}function TT(r,e){r.uniform1uiv(this.addr,e)}function wT(r,e){r.uniform2uiv(this.addr,e)}function ET(r,e){r.uniform3uiv(this.addr,e)}function AT(r,e){r.uniform4uiv(this.addr,e)}function RT(r,e,t){let n=this.cache,i=e.length,s=Xu(t,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=qu(X0):a=W0;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function CT(r,e,t){let n=this.cache,i=e.length,s=Xu(t,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Z0,s[a])}function PT(r,e,t){let n=this.cache,i=e.length,s=Xu(t,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=qu(q0):a=J0;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function IT(r,e,t){let n=this.cache,i=e.length,s=Xu(t,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Y0,s[a])}function LT(r){switch(r){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return xT;case 35676:return vT;case 5124:case 35670:return yT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return bT;case 5125:return TT;case 36294:return wT;case 36295:return ET;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return IT}}var Dp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fT(t.type)}},Np=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LT(t.type)}},Up=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Ip=/(\w+)(\])?(\[|\.)?/g;function R0(r,e){r.seq.push(e),r.map[e.id]=e}function DT(r,e,t){let n=r.name,i=n.length;for(Ip.lastIndex=0;;){let s=Ip.exec(n),a=Ip.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){R0(t,c===void 0?new Dp(o,r,e):new Np(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Up(o),R0(t,d)),t=d}}}var ro=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);DT(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function C0(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var NT=37297,UT=0;function OT(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var P0=new et;function FT(r){pt._getMatrix(P0,pt.workingColorSpace,r);let e=`mat3( ${P0.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(r)){case ol:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function I0(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+OT(r.getShaderSource(e),o)}else return s}function BT(r,e){let t=FT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kT={[sp]:"Linear",[ap]:"Reinhard",[op]:"Cineon",[Ys]:"ACESFilmic",[cp]:"AgX",[hp]:"Neutral",[lp]:"Custom"};function zT(r,e){let t=kT[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wu=new G;function GT(){pt.getLuminanceCoefficients(Wu);let r=Wu.x.toFixed(4),e=Wu.y.toFixed(4),t=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zl).join(`
`)}function HT(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WT(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Zl(r){return r!==""}function L0(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function D0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var XT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(r){return r.replace(XT,qT)}function qT(r,e){let t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Op(t)}var YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N0(r){return r.replace(YT,ZT)}function ZT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function U0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var JT={[Bl]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function $T(r){return JT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var KT={[no]:"ENVMAP_MODE_REFRACTION"};function QT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":KT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jT={[nu]:"ENVMAP_BLENDING_MULTIPLY",[Y_]:"ENVMAP_BLENDING_MIX",[Z_]:"ENVMAP_BLENDING_ADD"};function ew(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":jT[r.combine]||"ENVMAP_BLENDING_NONE"}function tw(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=$T(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=QT(t),d=ew(t),f=VT(t),u=HT(s),p=i.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Zl).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Zl).join(`
`),m.length>0&&(m+=`
`)):(_=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zl).join(`
`),m=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?at.tonemapping_pars_fragment:"",t.toneMapping!==lr?zT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,BT("linearToOutputTexel",t.outputColorSpace),GT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zl).join(`
`)),a=Op(a),a=L0(a,t),a=D0(a,t),o=Op(o),o=L0(o,t),o=D0(o,t),a=N0(a),o=N0(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+_+a,b=g+m+o,y=C0(i,i.VERTEX_SHADER,v),E=C0(i,i.FRAGMENT_SHADER,b);i.attachShader(p,y),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function A(S){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(p)||"",C=i.getShaderInfoLog(y)||"",O=i.getShaderInfoLog(E)||"",D=L.trim(),k=C.trim(),V=O.trim(),U=!0,K=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,y,E);else{let H=I0(i,y,"vertex"),I=I0(i,E,"fragment");$e("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+H+`
`+I)}else D!==""?Ze("WebGLProgram: Program Info Log:",D):(k===""||V==="")&&(K=!1);K&&(S.diagnostics={runnable:U,programLog:D,vertexShader:{log:k,prefix:_},fragmentShader:{log:V,prefix:m}})}i.deleteShader(y),i.deleteShader(E),x=new ro(i,p),M=WT(i,p)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(p,NT)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=E,this}var nw=0,Fp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bp(e),t.set(e,n)),n}},Bp=class{constructor(e){this.id=nw++,this.code=e,this.usedTimes=0}};function iw(r){return r===us||r===Wl||r===Xl}function rw(r,e,t,n,i,s){let a=new hl,o=new Fp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,R,S,L,C){let O=S.fog,D=L.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?S.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||k,V),K=f[x.type],H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let I=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=I!==void 0?I.length:0,ge=0;D.morphAttributes.position!==void 0&&(ge=1),D.morphAttributes.normal!==void 0&&(ge=2),D.morphAttributes.color!==void 0&&(ge=3);let Ue,W,ue,ye;if(K){let se=hr[K];Ue=se.vertexShader,W=se.fragmentShader}else{Ue=x.vertexShader,W=x.fragmentShader;let se=o.getVertexShaderStage(x),Oe=o.getFragmentShaderStage(x);o.update(x,se,Oe),ue=se.id,ye=Oe.id}let Re=r.getRenderTarget(),$=r.state.buffers.depth.getReversed(),te=L.isInstancedMesh===!0,Ie=L.isBatchedMesh===!0,fe=!!x.map,Ee=!!x.matcap,Se=!!U,Y=Se&&U.isPMREMTexture===!0,le=!!x.aoMap,ce=!!x.lightMap,z=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,qe=!!x.displacementMap,Be=!!x.emissiveMap,We=!!x.metalnessMap,Qe=!!x.roughnessMap,rt=x.anisotropy>0,B=x.clearcoat>0,ot=x.diffuseRoughness>0,Ke=x.dispersion>0,Je=x.retroreflectivity>0,xe=x.iridescence>0,mt=x.sheen>0,Ge=x.transmission>0,Ye=rt&&!!x.anisotropyMap,P=B&&!!x.clearcoatMap,T=B&&!!x.clearcoatNormalMap,q=B&&!!x.clearcoatRoughnessMap,he=ot&&!!x.diffuseRoughnessMap,ae=xe&&!!x.iridescenceMap,ve=xe&&!!x.iridescenceThicknessMap,we=mt&&!!x.sheenColorMap,Z=mt&&!!x.sheenRoughnessMap,ie=!!x.specularMap,me=!!x.specularColorMap,N=!!x.specularIntensityMap,ne=Ge&&!!x.transmissionMap,ee=Ge&&!!x.thicknessMap,Me=!!x.gradientMap,pe=!!x.alphaMap,be=x.alphaTest>0,de=!!x.alphaHash,Te=!!x.extensions,oe=lr;x.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(oe=r.toneMapping);let re=Y?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,Ae={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:W,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:Ie,batchingColor:Ie&&L._colorsTexture!==null,instancing:te,instancingColor:te&&L.instanceColor!==null,instancingMorph:te&&L.morphTexture!==null,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:fe,matcap:Ee,envMap:Se,envMapMode:Se&&U.mapping,envMapPMREM:Y,envMapMaxLod:Y?re.length-1:null,envMapSize:Y?re[0].width:null,aoMap:le,lightMap:ce,bumpMap:z,normalMap:_e,displacementMap:qe,emissiveMap:Be,normalMapObjectSpace:_e&&x.normalMapType===K_,normalMapTangentSpace:_e&&x.normalMapType===ql,packedNormalMap:_e&&x.normalMapType===ql&&iw(x.normalMap.format),metalnessMap:We,roughnessMap:Qe,anisotropy:rt,anisotropyMap:Ye,clearcoat:B,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:q,diffuseRoughness:ot,diffuseRoughnessMap:he,dispersion:Ke,retroreflection:Je,iridescence:xe,iridescenceMap:ae,iridescenceThicknessMap:ve,sheen:mt,sheenColorMap:we,sheenRoughnessMap:Z,specularMap:ie,specularColorMap:me,specularIntensityMap:N,transmission:Ge,transmissionMap:ne,thicknessMap:ee,gradientMap:Me,opaque:x.transparent===!1&&x.blending===to&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:be,alphaHash:de,combine:x.combine,mapUv:fe&&u(x.map.channel),aoMapUv:le&&u(x.aoMap.channel),lightMapUv:ce&&u(x.lightMap.channel),bumpMapUv:z&&u(x.bumpMap.channel),normalMapUv:_e&&u(x.normalMap.channel),displacementMapUv:qe&&u(x.displacementMap.channel),emissiveMapUv:Be&&u(x.emissiveMap.channel),metalnessMapUv:We&&u(x.metalnessMap.channel),roughnessMapUv:Qe&&u(x.roughnessMap.channel),anisotropyMapUv:Ye&&u(x.anisotropyMap.channel),clearcoatMapUv:P&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:we&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&u(x.sheenRoughnessMap.channel),specularMapUv:ie&&u(x.specularMap.channel),specularColorMapUv:me&&u(x.specularColorMap.channel),specularIntensityMapUv:N&&u(x.specularIntensityMap.channel),transmissionMapUv:ne&&u(x.transmissionMap.channel),thicknessMapUv:ee&&u(x.thicknessMap.channel),alphaMapUv:pe&&u(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(_e||rt),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(fe||pe),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:C.filter(se=>se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:fe&&x.map.isVideoTexture===!0&&pt.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&pt.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vn,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Te&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&x.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(M,x),g(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let M=f[x.type],R;if(M){let S=hr[M];R=g0.clone(S.uniforms)}else R=x.uniforms;return R}function b(x,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new tw(r,M,x,i),c.push(R),h.set(M,R)),R}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function A(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function sw(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function aw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function O0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function F0(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,p,_,m,g){let v=r[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},r[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=p,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function l(f,u,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let b=o(f,u,p,_,m,g);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):t.push(b)}function c(f,u,p,_,m,g){let v=o(f,u,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,u){t.length>1&&t.sort(f||aw),n.length>1&&n.sort(u||O0),i.length>1&&i.sort(u||O0)}function d(){for(let f=e,u=r.length;f<u;f++){let p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function ow(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new F0,r.set(n,[a])):i>=s.length?(a=new F0,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function lw(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new je};break;case"SpotLight":t={position:new G,direction:new G,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function cw(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var hw=0;function uw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fw(r){let e=new lw,t=cw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,s=new Tt,a=new Tt;function o(c){let h=0,d=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let u=0,p=0,_=0,m=0,g=0,v=0,b=0,y=0,E=0,A=0,x=0,M=0,R=0,S=0;c.sort(uw);for(let C=0,O=c.length;C<O;C++){let D=c[C],k=D.color,V=D.intensity,U=D.distance,K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===us?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*V,d+=k.g*V,f+=k.b*V;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],V);S++}else if(D.isSunLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let I=D.shadow,Q=t.get(D);Q.shadowIntensity=I.intensity,Q.shadowBias=I.bias,Q.shadowNormalBias=I.normalBias,Q.shadowRadius=I.radius,Q.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[p]=Q,n.sunShadowMap[p]=K;let ge=I.getViewportCount();for(let Ue=0;Ue<ge;Ue++)n.sunShadowMatrix[_+Ue]=I.getMatrix(Ue),n.sunShadowCascade[_+Ue]=I._cascadeData[Ue];_+=ge,p++}n.sun[u]=H,u++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let I=D.shadow,Q=t.get(D);Q.shadowIntensity=I.intensity,Q.shadowBias=I.bias,Q.shadowNormalBias=I.normalBias,Q.shadowRadius=I.radius,Q.shadowMapSize=I.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=H,m++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(k).multiplyScalar(V),H.distance=U,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[v]=H;let I=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,I.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[v]=I.matrix,D.castShadow){let Q=t.get(D);Q.shadowIntensity=I.intensity,Q.shadowBias=I.bias,Q.shadowNormalBias=I.normalBias,Q.shadowRadius=I.radius,Q.shadowMapSize=I.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=K,x++}v++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(k).multiplyScalar(V),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=H,b++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let I=D.shadow,Q=t.get(D);Q.shadowIntensity=I.intensity,Q.shadowBias=I.bias,Q.shadowNormalBias=I.normalBias,Q.shadowRadius=I.radius,Q.shadowMapSize=I.mapSize,Q.shadowCameraNear=I.camera.near,Q.shadowCameraFar=I.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=D.shadow.matrix,A++}n.point[g]=H,g++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(V),H.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[y]=H,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let L=n.hash;(L.sunLength!==u||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==b||L.hemiLength!==y||L.numSunShadows!==p||L.numDirectionalShadows!==E||L.numPointShadows!==A||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==S)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=b,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-R,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=S,L.sunLength=u,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=b,L.hemiLength=y,L.numSunShadows=p,L.numDirectionalShadows=E,L.numPointShadows=A,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=S,n.version=hw++)}function l(c,h){let d=0,f=0,u=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),f++}else if(y.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function B0(r){let e=new fw(r),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function dw(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new B0(r),e.set(i,[o])):s>=a.length?(o=new B0(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mw=`uniform sampler2D shadow_pass;
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
}`,gw=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],_w=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],k0=new Tt,Yl=new G,Lp=new G;function xw(r,e,t){let n=new ss,i=new Le,s=new Le,a=new Ft,o=new Hh,l=new Wh,c={},h=t.maxTextureSize,d={[hs]:wn,[wn]:hs,[vn]:vn},f=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:pw,fragmentShader:mw}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new kn;p.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let g=this.type;this.render=function(A,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===R_&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bl);let R=r.getRenderTarget(),S=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),C=r.state;C.setBlending(Xs),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let O=g!==this.type;O&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=A.length;D<k;D++){let V=A[D],U=V.shadow;if(U===void 0){Ze("WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let K=U.getFrameExtents();i.multiply(K),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,U.mapSize.y=s.y));let H=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=H,U.map===null||O===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===eo){if(V.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new _i(i.x,i.y,{format:us,type:Xi,minFilter:$n,magFilter:$n,generateMipmaps:!1}),U.map.texture.name=V.name+".shadowMap",U.map.depthTexture=new Lr(i.x,i.y,Li),U.map.depthTexture.name=V.name+".shadowMapDepth",U.map.depthTexture.format=Cr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=xn,U.map.depthTexture.magFilter=xn}else V.isPointLight?(U.map=new Jl(i.x),U.map.depthTexture=new vl(i.x,Wi)):(U.map=new _i(i.x,i.y),U.map.depthTexture=new Lr(i.x,i.y,Wi)),U.map.depthTexture.name=V.name+".shadowMap",U.map.depthTexture.format=Cr,this.type===Bl?(U.map.depthTexture.compareFunction=H?vp:xp,U.map.depthTexture.minFilter=$n,U.map.depthTexture.magFilter=$n):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=xn,U.map.depthTexture.magFilter=xn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let I=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();V.isPointLight!==!0&&U.updateMatrices(V,M);let Q=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:M.layers;for(let ge=0;ge<I;ge++){let Ue=U.getCamera(ge);if(V.isPointLight){let W=U.camera,ue=U.matrix,ye=V.distance||W.far;ye!==W.far&&(W.far=ye,W.updateProjectionMatrix()),Yl.setFromMatrixPosition(V.matrixWorld),W.position.copy(Yl),Lp.copy(W.position),Lp.add(gw[ge]),W.up.copy(_w[ge]),W.lookAt(Lp),W.updateMatrixWorld(),ue.makeTranslation(-Yl.x,-Yl.y,-Yl.z),k0.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),U._frustum.setFromProjectionMatrix(k0,W.coordinateSystem,W.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,ge),r.clear();else{ge===0&&(r.setRenderTarget(U.map),r.clear());let W=U.getViewport(ge);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),C.viewport(a)}n=U.getFrustum(ge),y(x,M,Ue,V,Q,this.type)}U.isPointLightShadow!==!0&&this.type===eo&&v(U,M),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(R,S,L)};function v(A,x){let M=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null?A.mapPass=new _i(i.x,i.y,{format:us,type:Xi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(x,null,M,f,_,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(x,null,M,u,_,null)}function b(A,x,M,R){let S=null,L=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=M.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let C=S.uuid,O=x.uuid,D=c[C];D===void 0&&(D={},c[C]=D);let k=D[O];k===void 0&&(k=S.clone(),D[O]=k,x.addEventListener("dispose",E)),S=k}if(S.visible=x.visible,S.wireframe=x.wireframe,R===eo?S.side=x.shadowSide!==null?x.shadowSide:x.side:S.side=x.shadowSide!==null?x.shadowSide:d[x.side],S.alphaMap=x.alphaMap,S.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,S.map=x.map,S.clipShadows=x.clipShadows,S.clippingPlanes=x.clippingPlanes,S.clipIntersection=x.clipIntersection,S.displacementMap=x.displacementMap,S.displacementScale=x.displacementScale,S.displacementBias=x.displacementBias,S.wireframeLinewidth=x.wireframeLinewidth,S.linewidth=x.linewidth,M.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let C=r.properties.get(S);C.light=M}return S}function y(A,x,M,R,S,L){if(A.visible===!1)return;if(A.layers.test(S)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===eo)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let D=e.update(A),k=A.material;if(Array.isArray(k)){let V=D.groups;for(let U=0,K=V.length;U<K;U++){let H=V[U],I=k[H.materialIndex];if(I&&I.visible){let Q=b(A,I,R,L);A.onBeforeShadow(r,A,x,M,D,Q,H),r.renderBufferDirect(M,null,D,Q,A,H),A.onAfterShadow(r,A,x,M,D,Q,H)}}}else if(k.visible){let V=b(A,k,R,L);A.onBeforeShadow(r,A,x,M,D,V,null),r.renderBufferDirect(M,null,D,V,A,null),A.onAfterShadow(r,A,x,M,D,V,null)}}let O=A.children;for(let D=0,k=O.length;D<k;D++)y(O[D],x,M,R,S,L)}function E(A){A.target.removeEventListener("dispose",E);for(let M in c){let R=c[M],S=A.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}function vw(r,e){function t(){let N=!1,ne=new Ft,ee=null,Me=new Ft(0,0,0,0);return{setMask:function(pe){ee!==pe&&!N&&(r.colorMask(pe,pe,pe,pe),ee=pe)},setLocked:function(pe){N=pe},setClear:function(pe,be,de,Te,oe){oe===!0&&(pe*=Te,be*=Te,de*=Te),ne.set(pe,be,de,Te),Me.equals(ne)===!1&&(r.clearColor(pe,be,de,Te),Me.copy(ne))},reset:function(){N=!1,ee=null,Me.set(-1,0,0,0)}}}function n(){let N=!1,ne=!1,ee=null,Me=null,pe=null;return{setReversed:function(be){if(ne!==be){let de=e.get("EXT_clip_control");be?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),ne=be;let Te=pe;pe=null,this.setClear(Te)}},getReversed:function(){return ne},setTest:function(be){be?$(r.DEPTH_TEST):te(r.DEPTH_TEST)},setMask:function(be){ee!==be&&!N&&(r.depthMask(be),ee=be)},setFunc:function(be){if(ne&&(be=l0[be]),Me!==be){switch(be){case yh:r.depthFunc(r.NEVER);break;case Sh:r.depthFunc(r.ALWAYS);break;case Mh:r.depthFunc(r.LESS);break;case za:r.depthFunc(r.LEQUAL);break;case bh:r.depthFunc(r.EQUAL);break;case Th:r.depthFunc(r.GEQUAL);break;case wh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=be}},setLocked:function(be){N=be},setClear:function(be){pe!==be&&(pe=be,ne&&(be=1-be),r.clearDepth(be))},reset:function(){N=!1,ee=null,Me=null,pe=null,ne=!1}}}function i(){let N=!1,ne=null,ee=null,Me=null,pe=null,be=null,de=null,Te=null,oe=null;return{setTest:function(re){N||(re?$(r.STENCIL_TEST):te(r.STENCIL_TEST))},setMask:function(re){ne!==re&&!N&&(r.stencilMask(re),ne=re)},setFunc:function(re,Ae,se){(ee!==re||Me!==Ae||pe!==se)&&(r.stencilFunc(re,Ae,se),ee=re,Me=Ae,pe=se)},setOp:function(re,Ae,se){(be!==re||de!==Ae||Te!==se)&&(r.stencilOp(re,Ae,se),be=re,de=Ae,Te=se)},setLocked:function(re){N=re},setClear:function(re){oe!==re&&(r.clearStencil(re),oe=re)},reset:function(){N=!1,ne=null,ee=null,Me=null,pe=null,be=null,de=null,Te=null,oe=null}}}let s=new t,a=new n,o=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,y=null,E=null,A=null,x=null,M=new je(0,0,0),R=0,S=!1,L=null,C=null,O=null,D=null,k=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,K=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=K>=2);let I=null,Q={},ge=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),W=new Ft().fromArray(ge),ue=new Ft().fromArray(Ue);function ye(N,ne,ee,Me){let pe=new Uint8Array(4),be=r.createTexture();r.bindTexture(N,be),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<ee;de++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(ne+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return be}let Re={};Re[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(r.DEPTH_TEST),a.setFunc(za),z(!1),_e(jd),$(r.CULL_FACE),le(Xs);function $(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function te(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Ie(N,ne){return f[N]!==ne?(r.bindFramebuffer(N,ne),f[N]=ne,N===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ne),N===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function fe(N,ne){let ee=p,Me=!1;if(N){ee=u.get(ne),ee===void 0&&(ee=[],u.set(ne,ee));let pe=N.textures;if(ee.length!==pe.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let be=0,de=pe.length;be<de;be++)ee[be]=r.COLOR_ATTACHMENT0+be;ee.length=pe.length,Me=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ee)}function Ee(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Se={[qs]:r.FUNC_ADD,[P_]:r.FUNC_SUBTRACT,[I_]:r.FUNC_REVERSE_SUBTRACT};Se[L_]=r.MIN,Se[D_]=r.MAX;let Y={[N_]:r.ZERO,[U_]:r.ONE,[O_]:r.SRC_COLOR,[ip]:r.SRC_ALPHA,[V_]:r.SRC_ALPHA_SATURATE,[z_]:r.DST_COLOR,[B_]:r.DST_ALPHA,[F_]:r.ONE_MINUS_SRC_COLOR,[rp]:r.ONE_MINUS_SRC_ALPHA,[G_]:r.ONE_MINUS_DST_COLOR,[k_]:r.ONE_MINUS_DST_ALPHA,[H_]:r.CONSTANT_COLOR,[W_]:r.ONE_MINUS_CONSTANT_COLOR,[X_]:r.CONSTANT_ALPHA,[q_]:r.ONE_MINUS_CONSTANT_ALPHA};function le(N,ne,ee,Me,pe,be,de,Te,oe,re){if(N===Xs){m===!0&&(te(r.BLEND),m=!1);return}if(m===!1&&($(r.BLEND),m=!0),N!==C_){if(N!==g||re!==S){if((v!==qs||E!==qs)&&(r.blendEquation(r.FUNC_ADD),v=qs,E=qs),re)switch(N){case to:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ep:r.blendFunc(r.ONE,r.ONE);break;case tp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case np:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$e("WebGLState: Invalid blending: ",N);break}else switch(N){case to:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ep:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tp:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case np:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",N);break}b=null,y=null,A=null,x=null,M.set(0,0,0),R=0,g=N,S=re}return}pe=pe||ne,be=be||ee,de=de||Me,(ne!==v||pe!==E)&&(r.blendEquationSeparate(Se[ne],Se[pe]),v=ne,E=pe),(ee!==b||Me!==y||be!==A||de!==x)&&(r.blendFuncSeparate(Y[ee],Y[Me],Y[be],Y[de]),b=ee,y=Me,A=be,x=de),(Te.equals(M)===!1||oe!==R)&&(r.blendColor(Te.r,Te.g,Te.b,oe),M.copy(Te),R=oe),g=N,S=!1}function ce(N,ne){N.side===vn?te(r.CULL_FACE):$(r.CULL_FACE);let ee=N.side===wn;ne&&(ee=!ee),z(ee),N.blending===to&&N.transparent===!1?le(Xs):le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let Me=N.stencilWrite;o.setTest(Me),Me&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):te(r.SAMPLE_ALPHA_TO_COVERAGE)}function z(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function _e(N){N!==E_?($(r.CULL_FACE),N!==C&&(N===jd?r.cullFace(r.BACK):N===A_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):te(r.CULL_FACE),C=N}function qe(N){N!==O&&(U&&r.lineWidth(N),O=N)}function Be(N,ne,ee){N?($(r.POLYGON_OFFSET_FILL),(D!==ne||k!==ee)&&(D=ne,k=ee,a.getReversed()&&(ne=-ne,ee=-ee),r.polygonOffset(ne,ee))):te(r.POLYGON_OFFSET_FILL)}function We(N){N?$(r.SCISSOR_TEST):te(r.SCISSOR_TEST)}function Qe(N){N===void 0&&(N=r.TEXTURE0+V-1),I!==N&&(r.activeTexture(N),I=N)}function rt(N,ne,ee){ee===void 0&&(I===null?ee=r.TEXTURE0+V-1:ee=I);let Me=Q[ee];Me===void 0&&(Me={type:void 0,texture:void 0},Q[ee]=Me),(Me.type!==N||Me.texture!==ne)&&(I!==ee&&(r.activeTexture(ee),I=ee),r.bindTexture(N,ne||Re[N]),Me.type=N,Me.texture=ne)}function B(){let N=Q[I];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ot(){try{r.compressedTexImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function Ke(){try{r.compressedTexImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function Je(){try{r.texSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function xe(){try{r.texSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function Ge(){try{r.compressedTexSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function Ye(){try{r.texStorage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function P(){try{r.texStorage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function T(){try{r.texImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function q(){try{r.texImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function he(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function ae(N,ne){d[N]!==ne&&(r.pixelStorei(N,ne),d[N]=ne)}function ve(N){W.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),W.copy(N))}function we(N){ue.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ue.copy(N))}function Z(N,ne){let ee=c.get(ne);ee===void 0&&(ee=new WeakMap,c.set(ne,ee));let Me=ee.get(N);Me===void 0&&(Me=r.getUniformBlockIndex(ne,N.name),r.uniformBlockBinding(ne,Me,Me),ee.set(N,Me))}function ie(N,ne,ee){let pe=c.get(ne).get(N);l[pe]!==ee&&(r.bindBufferBase(r.UNIFORM_BUFFER,pe,ee),l[pe]=ee)}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},I=null,Q={},f={},l={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,y=null,E=null,A=null,x=null,M=new je(0,0,0),R=0,S=!1,L=null,C=null,O=null,D=null,k=null,W.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:te,bindFramebuffer:Ie,drawBuffers:fe,useProgram:Ee,setBlending:le,setMaterial:ce,setFlipSided:z,setCullFace:_e,setLineWidth:qe,setPolygonOffset:Be,setScissorTest:We,activeTexture:Qe,bindTexture:rt,unbindTexture:B,compressedTexImage2D:ot,compressedTexImage3D:Ke,texImage2D:T,texImage3D:q,pixelStorei:ae,getParameter:he,updateUBOMapping:Z,uniformBlockBinding:ie,texStorage2D:Ye,texStorage3D:P,texSubImage2D:Je,texSubImage3D:xe,compressedTexSubImage2D:mt,compressedTexSubImage3D:Ge,scissor:ve,viewport:we,reset:me}}function yw(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,_=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return m?new OffscreenCanvas(P,T):ll("canvas")}function v(P,T,q){let he=1,ae=Ye(P);if((ae.width>q||ae.height>q)&&(he=q/Math.max(ae.width,ae.height)),he<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ve=Math.floor(he*ae.width),we=Math.floor(he*ae.height);f===void 0&&(f=g(ve,we));let Z=T?g(ve,we):f;return Z.width=ve,Z.height=we,Z.getContext("2d").drawImage(P,0,0,ve,we),Ze("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ve+"x"+we+")."),Z}else return"data"in P&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function b(P){return P.generateMipmaps}function y(P){r.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(P,T,q,he,ae,ve=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let we;he&&(we=e.get("EXT_texture_norm16"),we||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=T;if(T===r.RED&&(q===r.FLOAT&&(Z=r.R32F),q===r.HALF_FLOAT&&(Z=r.R16F),q===r.UNSIGNED_BYTE&&(Z=r.R8),q===r.UNSIGNED_SHORT&&we&&(Z=we.R16_EXT),q===r.SHORT&&we&&(Z=we.R16_SNORM_EXT)),T===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(Z=r.R8UI),q===r.UNSIGNED_SHORT&&(Z=r.R16UI),q===r.UNSIGNED_INT&&(Z=r.R32UI),q===r.BYTE&&(Z=r.R8I),q===r.SHORT&&(Z=r.R16I),q===r.INT&&(Z=r.R32I)),T===r.RG&&(q===r.FLOAT&&(Z=r.RG32F),q===r.HALF_FLOAT&&(Z=r.RG16F),q===r.UNSIGNED_BYTE&&(Z=r.RG8),q===r.UNSIGNED_SHORT&&we&&(Z=we.RG16_EXT),q===r.SHORT&&we&&(Z=we.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(Z=r.RG8UI),q===r.UNSIGNED_SHORT&&(Z=r.RG16UI),q===r.UNSIGNED_INT&&(Z=r.RG32UI),q===r.BYTE&&(Z=r.RG8I),q===r.SHORT&&(Z=r.RG16I),q===r.INT&&(Z=r.RG32I)),T===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),q===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),q===r.UNSIGNED_INT&&(Z=r.RGB32UI),q===r.BYTE&&(Z=r.RGB8I),q===r.SHORT&&(Z=r.RGB16I),q===r.INT&&(Z=r.RGB32I)),T===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),q===r.UNSIGNED_INT&&(Z=r.RGBA32UI),q===r.BYTE&&(Z=r.RGBA8I),q===r.SHORT&&(Z=r.RGBA16I),q===r.INT&&(Z=r.RGBA32I)),T===r.RGB&&(q===r.UNSIGNED_SHORT&&we&&(Z=we.RGB16_EXT),q===r.SHORT&&we&&(Z=we.RGB16_SNORM_EXT),q===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),T===r.RGBA){let ie=ve?ol:pt.getTransfer(ae);q===r.FLOAT&&(Z=r.RGBA32F),q===r.HALF_FLOAT&&(Z=r.RGBA16F),q===r.UNSIGNED_BYTE&&(Z=ie===Mt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT&&we&&(Z=we.RGBA16_EXT),q===r.SHORT&&we&&(Z=we.RGBA16_SNORM_EXT),q===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(P,T){let q;return P?T===null||T===Wi||T===Js?q=r.DEPTH24_STENCIL8:T===Li?q=r.DEPTH32F_STENCIL8:T===io&&(q=r.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wi||T===Js?q=r.DEPTH_COMPONENT24:T===Li?q=r.DEPTH_COMPONENT32F:T===io&&(q=r.DEPTH_COMPONENT16),q}function M(P,T){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==xn&&P.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function R(P){let T=new WeakRef(P);n.get(P).__ref=T,p.add(T),_.register(P,T,T)}function S(P){let T=n.get(P).__ref;T!==void 0&&(p.delete(T),_.unregister(T))}function L(P){O(P.target)}function C(P){D(P.target)}function O(P){P.removeEventListener("dispose",L),S(P),V(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function D(P){P.removeEventListener("dispose",C),S(P),K(P)}function k(){for(let P of p){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?D(T):O(T))}p.clear(),d.clear()}function V(P){let T=n.get(P);if(T.__webglInit===void 0)return;let q=P.source,he=u.get(q);if(he){let ae=he[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&U(P),Object.keys(he).length===0&&u.delete(q)}n.remove(P)}function U(P){let T=n.get(P);r.deleteTexture(T.__webglTexture);let q=P.source,he=u.get(q);delete he[T.__cacheKey],a.memory.textures--}function K(P){let T=n.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let q=P.depthTexture;if(q&&q.renderTarget===P&&O(q),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let ve=0;ve<T.__webglFramebuffer[ae].length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[ae][ve]);else r.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)r.deleteFramebuffer(T.__webglFramebuffer[ae]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let he=P.textures;for(let ae=0,ve=he.length;ae<ve;ae++){let we=n.get(he[ae]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove(he[ae])}n.remove(P)}let H=0;function I(){H=0}function Q(){return H}function ge(P){H=P}function Ue(){let P=H;return P>=i.maxTextures&&Ze("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,P}function W(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ue(P,T){let q=n.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let he=P.image;if(he===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(q,P,T);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+T)}function ye(P,T){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ce(q,P,T);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+T)}function Re(P,T){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ce(q,P,T);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+T)}function $(P,T){let q=n.get(P);if(P.version>0&&q.__version!==P.version){z(q,P,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+T)}let te={[rs]:r.REPEAT,[tr]:r.CLAMP_TO_EDGE,[Ah]:r.MIRRORED_REPEAT},Ie={[xn]:r.NEAREST,[J_]:r.NEAREST_MIPMAP_NEAREST,[kl]:r.NEAREST_MIPMAP_LINEAR,[$n]:r.LINEAR,[su]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR},fe={[j_]:r.NEVER,[yp]:r.ALWAYS,[e0]:r.LESS,[xp]:r.LEQUAL,[t0]:r.EQUAL,[vp]:r.GEQUAL,[n0]:r.GREATER,[i0]:r.NOTEQUAL};function Ee(P,T){if(T.type===Li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===$n||T.magFilter===su||T.magFilter===kl||T.magFilter===Nr||T.minFilter===$n||T.minFilter===su||T.minFilter===kl||T.minFilter===Nr)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,te[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,te[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,te[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Ie[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Ie[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,fe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xn||T.minFilter!==kl&&T.minFilter!==Nr||T.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Se(P,T){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",L),R(T));let he=T.source,ae=u.get(he);ae===void 0&&(ae={},u.set(he,ae));let ve=W(T);if(ve!==P.__cacheKey){ae[ve]===void 0&&(ae[ve]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ae[ve].usedTimes++;let we=ae[P.__cacheKey];we!==void 0&&(ae[P.__cacheKey].usedTimes--,we.usedTimes===0&&U(T)),P.__cacheKey=ve,P.__webglTexture=ae[ve].texture}return q}function Y(P,T,q){return Math.floor(Math.floor(P/q)/T)}function le(P,T,q,he){let ve=P.updateRanges;if(ve.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,q,he,T.data);else{ve.sort((N,ne)=>N.start-ne.start);let we=0;for(let N=1;N<ve.length;N++){let ne=ve[we],ee=ve[N],Me=ne.start+ne.count,pe=Y(ee.start,T.width,4),be=Y(ne.start,T.width,4);ee.start<=Me+1&&pe===be&&Y(ee.start+ee.count-1,T.width,4)===pe?ne.count=Math.max(ne.count,ee.start+ee.count-ne.start):(++we,ve[we]=ee)}ve.length=we+1;let Z=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let N=0,ne=ve.length;N<ne;N++){let ee=ve[N],Me=Math.floor(ee.start/4),pe=Math.ceil(ee.count/4),be=Me%T.width,de=Math.floor(Me/T.width),Te=pe,oe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,be),t.pixelStorei(r.UNPACK_SKIP_ROWS,de),t.texSubImage2D(r.TEXTURE_2D,0,be,de,Te,oe,q,he,T.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Z),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,me)}}function ce(P,T,q){let he=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=r.TEXTURE_3D);let ae=Se(P,T),ve=T.source;t.bindTexture(he,P.__webglTexture,r.TEXTURE0+q);let we=n.get(ve);if(ve.version!==we.__version||ae===!0){if(t.activeTexture(r.TEXTURE0+q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let oe=pt.getPrimaries(pt.workingColorSpace),re=T.colorSpace===Or?null:pt.getPrimaries(T.colorSpace),Ae=T.colorSpace===Or||oe===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ie=v(T.image,!1,i.maxTextureSize);ie=Ge(T,ie);let me=s.convert(T.format,T.colorSpace),N=s.convert(T.type),ne=A(T.internalFormat,me,N,T.normalized,T.colorSpace,T.isVideoTexture);Ee(he,T);let ee,Me=T.mipmaps,pe=T.isVideoTexture!==!0,be=we.__version===void 0||ae===!0,de=ve.dataReady,Te=M(T,ie);if(T.isDepthTexture)ne=x(T.format===Ur,T.type),be&&(pe?t.texStorage2D(r.TEXTURE_2D,1,ne,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,ne,ie.width,ie.height,0,me,N,null));else if(T.isDataTexture)if(Me.length>0){pe&&be&&t.texStorage2D(r.TEXTURE_2D,Te,ne,Me[0].width,Me[0].height);for(let oe=0,re=Me.length;oe<re;oe++)ee=Me[oe],pe?de&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ee.width,ee.height,me,N,ee.data):t.texImage2D(r.TEXTURE_2D,oe,ne,ee.width,ee.height,0,me,N,ee.data);T.generateMipmaps=!1}else pe?(be&&t.texStorage2D(r.TEXTURE_2D,Te,ne,ie.width,ie.height),de&&le(T,ie,me,N)):t.texImage2D(r.TEXTURE_2D,0,ne,ie.width,ie.height,0,me,N,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){pe&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,ne,Me[0].width,Me[0].height,ie.depth);for(let oe=0,re=Me.length;oe<re;oe++)if(ee=Me[oe],T.format!==qi)if(me!==null)if(pe){if(de)if(T.layerUpdates.size>0){let Ae=Pp(ee.width,ee.height,T.format,T.type);for(let se of T.layerUpdates){let Oe=ee.data.subarray(se*Ae/ee.data.BYTES_PER_ELEMENT,(se+1)*Ae/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,se,ee.width,ee.height,1,me,Oe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ee.width,ee.height,ie.depth,me,ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,ne,ee.width,ee.height,ie.depth,0,ee.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?de&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ee.width,ee.height,ie.depth,me,N,ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,ne,ee.width,ee.height,ie.depth,0,me,N,ee.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{pe&&be&&t.texStorage2D(r.TEXTURE_2D,Te,ne,Me[0].width,Me[0].height);for(let oe=0,re=Me.length;oe<re;oe++)ee=Me[oe],T.format!==qi?me!==null?pe?de&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,ee.width,ee.height,me,ee.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,ne,ee.width,ee.height,0,ee.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?de&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ee.width,ee.height,me,N,ee.data):t.texImage2D(r.TEXTURE_2D,oe,ne,ee.width,ee.height,0,me,N,ee.data)}else if(T.isDataArrayTexture)if(pe){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,ne,ie.width,ie.height,ie.depth),de)if(T.layerUpdates.size>0){let oe=Pp(ie.width,ie.height,T.format,T.type);for(let re of T.layerUpdates){let Ae=ie.data.subarray(re*oe/ie.data.BYTES_PER_ELEMENT,(re+1)*oe/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,ie.width,ie.height,1,me,N,Ae)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,N,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ne,ie.width,ie.height,ie.depth,0,me,N,ie.data);else if(T.isData3DTexture)pe?(be&&t.texStorage3D(r.TEXTURE_3D,Te,ne,ie.width,ie.height,ie.depth),de&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,N,ie.data)):t.texImage3D(r.TEXTURE_3D,0,ne,ie.width,ie.height,ie.depth,0,me,N,ie.data);else if(T.isFramebufferTexture){if(be)if(pe)t.texStorage2D(r.TEXTURE_2D,Te,ne,ie.width,ie.height);else{let oe=ie.width,re=ie.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,ne,oe,re,0,me,N,null),oe>>=1,re>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let oe=r.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ie.parentNode!==oe){oe.appendChild(ie),d.add(T),oe.onpaint=re=>{let Ae=re.changedElements;for(let se of d)Ae.includes(se.image)&&(se.needsUpdate=!0)},oe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ie);else{let Ae=r.RGBA,se=r.RGBA,Oe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ae,se,Oe,ie)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Me.length>0){if(pe&&be){let oe=Ye(Me[0]);t.texStorage2D(r.TEXTURE_2D,Te,ne,oe.width,oe.height)}for(let oe=0,re=Me.length;oe<re;oe++)ee=Me[oe],pe?de&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,me,N,ee):t.texImage2D(r.TEXTURE_2D,oe,ne,me,N,ee);T.generateMipmaps=!1}else if(pe){if(be){let oe=Ye(ie);t.texStorage2D(r.TEXTURE_2D,Te,ne,oe.width,oe.height)}de&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,N,ie)}else t.texImage2D(r.TEXTURE_2D,0,ne,me,N,ie);b(T)&&T.mipmapsAutoUpdate===!0&&y(he),we.__version=ve.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function z(P,T,q){if(T.image.length!==6)return;let he=Se(P,T),ae=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+q);let ve=n.get(ae);if(ae.version!==ve.__version||he===!0){t.activeTexture(r.TEXTURE0+q);let we=pt.getPrimaries(pt.workingColorSpace),Z=T.colorSpace===Or?null:pt.getPrimaries(T.colorSpace),ie=T.colorSpace===Or||we===Z?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let me=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!me&&!N?ne[se]=v(T.image[se],!0,i.maxCubemapSize):ne[se]=N?T.image[se].image:T.image[se],ne[se]=Ge(T,ne[se]);let ee=ne[0],Me=s.convert(T.format,T.colorSpace),pe=s.convert(T.type),be=A(T.internalFormat,Me,pe,T.normalized,T.colorSpace),de=T.isVideoTexture!==!0,Te=ve.__version===void 0||he===!0,oe=ae.dataReady,re=M(T,ee);Ee(r.TEXTURE_CUBE_MAP,T);let Ae;if(T.isDepthTexture){if(be=x(T.format===Ur,T.type),Te)if(de)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,be,ee.width,ee.height);else for(let se=0;se<6;se++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,be,ee.width,ee.height,0,Me,pe,null)}else if(me){de&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,re,be,ee.width,ee.height);for(let se=0;se<6;se++){Ae=ne[se].mipmaps;for(let Oe=0;Oe<Ae.length;Oe++){let ut=Ae[Oe];T.format!==qi?Me!==null?de?oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,ut.width,ut.height,Me,ut.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,be,ut.width,ut.height,0,ut.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,ut.width,ut.height,Me,pe,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,be,ut.width,ut.height,0,Me,pe,ut.data)}}}else{if(Ae=T.mipmaps,de&&Te){Ae.length>0&&re++;let se=Ye(ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,re,be,se.width,se.height)}for(let se=0;se<6;se++)if(N){de?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,Me,pe,ne[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,be,ne[se].width,ne[se].height,0,Me,pe,ne[se].data);for(let Oe=0;Oe<Ae.length;Oe++){let tt=Ae[Oe].image[se].image;de?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,tt.width,tt.height,Me,pe,tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,be,tt.width,tt.height,0,Me,pe,tt.data)}}else{de?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Me,pe,ne[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,be,Me,pe,ne[se]);for(let Oe=0;Oe<Ae.length;Oe++){let ut=Ae[Oe];de?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,Me,pe,ut.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,be,Me,pe,ut.image[se])}}}b(T)&&T.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ve.__version=ae.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function _e(P,T,q,he,ae,ve){let we=s.convert(q.format,q.colorSpace),Z=s.convert(q.type),ie=A(q.internalFormat,we,Z,q.normalized,q.colorSpace),me=n.get(T),N=n.get(q);if(N.__renderTarget=T,!me.__hasExternalTextures){let ne=Math.max(1,T.width>>ve),ee=Math.max(1,T.height>>ve);ae===r.TEXTURE_3D||ae===r.TEXTURE_2D_ARRAY?t.texImage3D(ae,ve,ie,ne,ee,T.depth,0,we,Z,null):t.texImage2D(ae,ve,ie,ne,ee,0,we,Z,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ae,N.__webglTexture,0,Je(T)):(ae===r.TEXTURE_2D||ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ae,N.__webglTexture,ve),t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(P,T,q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){let he=T.depthTexture,ae=he&&he.isDepthTexture?he.type:null,ve=x(T.stencilBuffer,ae),we=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je(T),ve,T.width,T.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je(T),ve,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ve,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,P)}else{let he=T.textures;for(let ae=0;ae<he.length;ae++){let ve=he[ae],we=s.convert(ve.format,ve.colorSpace),Z=s.convert(ve.type),ie=A(ve.internalFormat,we,Z,ve.normalized,ve.colorSpace);xe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je(T),ie,T.width,T.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je(T),ie,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ie,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(P,T,q){let he=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(T.depthTexture);ae.__renderTarget=T;let ve=he?T.depthTexture.image[0]:T.depthTexture.image;(!ae.__webglTexture||ve.width!==T.width||ve.height!==T.height)&&(ve.width=T.width,ve.height=T.height,T.depthTexture.needsUpdate=!0),he?$(T.depthTexture,0):ue(T.depthTexture,0);let we=ae.__webglTexture,Z=Je(T),ie=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,me=T.depthTexture.format===Ur?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Cr)xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ie,we,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,me,ie,we,0);else if(T.depthTexture.format===Ur)xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ie,we,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,me,ie,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(P){let T=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let he=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){let ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ae)};he.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=he}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)Be(T.__webglFramebuffer[he],P,he);else P.texture.mipmaps.length>0?Be(T.__webglFramebuffer[0],P,0):Be(T.__webglFramebuffer,P,0);else if(q){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=r.createRenderbuffer(),qe(T.__webglDepthbuffer[he],P,!1);else{let ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,ve)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),qe(T.__webglDepthbuffer,P,!1);else{let ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(P,T,q){let he=n.get(P);T!==void 0&&_e(he.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&We(P)}function rt(P){let T=P.texture,q=n.get(P),he=n.get(T);P.addEventListener("dispose",C),R(P);let ae=P.textures,ve=P.isWebGLCubeRenderTarget===!0,we=ae.length>1;if(we||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=T.version,a.memory.textures++),ve){q.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(T.mipmaps.length>0){q.__webglFramebuffer[Z]=[];for(let ie=0;ie<T.mipmaps.length;ie++)q.__webglFramebuffer[Z][ie]=r.createFramebuffer()}else q.__webglFramebuffer[Z]=r.createFramebuffer()}else{if(T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Z=0;Z<T.mipmaps.length;Z++)q.__webglFramebuffer[Z]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(we)for(let Z=0,ie=ae.length;Z<ie;Z++){let me=n.get(ae[Z]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&xe(P)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Z=0;Z<ae.length;Z++){let ie=ae[Z];q.__webglColorRenderbuffer[Z]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Z]);let me=s.convert(ie.format,ie.colorSpace),N=s.convert(ie.type),ne=A(ie.internalFormat,me,N,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),ee=Je(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,ne,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,q.__webglColorRenderbuffer[Z])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ve){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,T);for(let Z=0;Z<6;Z++)if(T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)_e(q.__webglFramebuffer[Z][ie],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie);else _e(q.__webglFramebuffer[Z],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);b(T)?y(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(we){for(let Z=0,ie=ae.length;Z<ie;Z++){let me=ae[Z],N=n.get(me),ne=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),Ee(ne,me),_e(q.__webglFramebuffer,P,me,r.COLOR_ATTACHMENT0+Z,ne,0),b(me)&&y(ne)}t.unbindTexture()}else{let Z=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Z,he.__webglTexture),Ee(Z,T),T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)_e(q.__webglFramebuffer[ie],P,T,r.COLOR_ATTACHMENT0,Z,ie);else _e(q.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Z,0);b(T)?y(Z):T.mipmaps.length>0&&r.texParameteri(Z,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&We(P)}function B(P){let T=P.textures;for(let q=0,he=T.length;q<he;q++){let ae=T[q];if(b(ae)&&ae.mipmapsAutoUpdate===!0){let ve=E(P),we=n.get(ae).__webglTexture;t.bindTexture(ve,we),y(ve),t.unbindTexture()}}}let ot=[];function Ke(P){if(P.samples>0){if(xe(P)===!1){let T=P.textures,q=P.width,he=P.height,ae=r.COLOR_BUFFER_BIT,ve=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(P),Z=T.length>1;if(Z)for(let me=0;me<T.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let me=0;me<T.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=r.STENCIL_BUFFER_BIT)),Z){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[me]);let N=n.get(T[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,q,he,0,0,q,he,ae,r.NEAREST),l===!0&&(ot.length=0,ot.push(r.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&ot.push(ve),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Z)for(let me=0;me<T.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,we.__webglColorRenderbuffer[me]);let N=n.get(T[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Je(P){return Math.min(i.maxSamples,P.samples)}function xe(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function mt(P){let T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Ge(P,T){let q=P.colorSpace,he=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==al&&q!==Or&&(pt.getTransfer(q)===Mt?(he!==qi||ae!==si)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",q)),T}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=I,this.getTextureUnits=Q,this.setTextureUnits=ge,this.setTexture2D=ue,this.setTexture2DArray=ye,this.setTexture3D=Re,this.setTextureCube=$,this.rebindTextures=Qe,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=xe,this.dispose=k}function Sw(r,e){function t(n,i=Or){let s,a=pt.getTransfer(i);if(n===si)return r.UNSIGNED_BYTE;if(n===ou)return r.UNSIGNED_SHORT_4_4_4_4;if(n===lu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===pp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===mp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===fp)return r.BYTE;if(n===dp)return r.SHORT;if(n===io)return r.UNSIGNED_SHORT;if(n===au)return r.INT;if(n===Wi)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===Xi)return r.HALF_FLOAT;if(n===gp)return r.ALPHA;if(n===_p)return r.RGB;if(n===qi)return r.RGBA;if(n===Cr)return r.DEPTH_COMPONENT;if(n===Ur)return r.DEPTH_STENCIL;if(n===cu)return r.RED;if(n===hu)return r.RED_INTEGER;if(n===us)return r.RG;if(n===uu)return r.RG_INTEGER;if(n===fu)return r.RGBA_INTEGER;if(n===zl||n===Gl||n===Vl||n===Hl)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===du||n===pu||n===mu||n===gu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===du)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_u||n===xu||n===vu||n===yu||n===Su||n===Wl||n===Mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_u||n===xu)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===yu)return s.COMPRESSED_R11_EAC;if(n===Su)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Wl)return s.COMPRESSED_RG11_EAC;if(n===Mu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bu||n===Tu||n===wu||n===Eu||n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Uu||n===Ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Au)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ru)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Iu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Du)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ou)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fu||n===Bu||n===ku)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fu)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ku)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zu||n===Gu||n===Xl||n===Vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===zu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bw=`
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

}`,kp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new yl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new or({vertexShader:Mw,fragmentShader:bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zp=class extends nr{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,_=typeof XRWebGLBinding<"u",m=new kp,g={},v=t.getContextAttributes(),b=null,y=null,E=[],A=[],x=new Le,M=null,R=null,S=new _n;S.viewport=new Ft;let L=new _n;L.viewport=new Ft;let C=[S,L],O=new tu,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ue=E[W];return ue===void 0&&(ue=new Xa,E[W]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(W){let ue=E[W];return ue===void 0&&(ue=new Xa,E[W]=ue),ue.getGripSpace()},this.getHand=function(W){let ue=E[W];return ue===void 0&&(ue=new Xa,E[W]=ue),ue.getHandSpace()};function V(W){let ue=A.indexOf(W.inputSource);if(ue===-1)return;let ye=E[ue];ye!==void 0&&(ye.update(W.inputSource,W.frame,c||a),ye.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",K);for(let W=0;W<E.length;W++){let ue=A[W];ue!==null&&(A[W]=null,E[W].disconnect(ue))}D=null,k=null,m.reset();for(let W in g)delete g[W];if(e.setRenderTarget(b),u=null,f=null,d=null,i=null,y=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),R!==null){let W=R.camera;W.fov=R.fov,W.zoom=R.zoom,W.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",U),i.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,$=null;v.depth&&($=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?Ur:Cr,Re=v.stencil?Js:Wi);let te={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(te),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new _i(f.textureWidth,f.textureHeight,{format:qi,type:si,depthTexture:new Lr(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new _i(u.framebufferWidth,u.framebufferHeight,{format:qi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(W){for(let ue=0;ue<W.removed.length;ue++){let ye=W.removed[ue],Re=A.indexOf(ye);Re>=0&&(A[Re]=null,E[Re].disconnect(ye))}for(let ue=0;ue<W.added.length;ue++){let ye=W.added[ue],Re=A.indexOf(ye);if(Re===-1){for(let te=0;te<E.length;te++)if(te>=A.length){A.push(ye),Re=te;break}else if(A[te]===null){A[te]=ye,Re=te;break}if(Re===-1)break}let $=E[Re];$&&$.connect(ye)}}function H(W,ue){ue===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ue.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let ue=W.near,ye=W.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),O.near=L.near=S.near=ue,O.far=L.far=S.far=ye,(D!==O.near||k!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,k=O.far),O.layers.mask=W.layers.mask|6,S.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let Re=W.parent,$=O.cameras;H(O,Re);for(let te=0;te<$.length;te++)H($[te],Re);O.projectionMatrix.copy(S.projectionMatrix),O.projectionMatrixInverse.copy(S.projectionMatrixInverse),R===null&&W.isPerspectiveCamera&&(R={camera:W,fov:W.fov,zoom:W.zoom}),I(W,O,Re)};function I(W,ue,ye){ye===null?W.matrix.copy(ue.matrixWorld):(W.matrix.copy(ye.matrixWorld),W.matrix.invert(),W.matrix.multiply(ue.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ue.projectionMatrix),W.projectionMatrixInverse.copy(ue.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ha*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(W){return g[W]};let Q=null;function ge(W,ue){if(h=ue.getViewerPose(c||a),p=ue,h!==null){let ye=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Re=!1;ye.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let fe=0;fe<ye.length;fe++){let Ee=ye[fe],Se=null;if(u!==null)Se=u.getViewport(Ee);else{let le=d.getViewSubImage(f,Ee);Se=le.viewport,fe===0&&(e.setRenderTargetTextures(y,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(y))}let Y=C[fe];Y===void 0&&(Y=new _n,Y.layers.enable(fe),Y.viewport=new Ft,C[fe]=Y),Y.matrix.fromArray(Ee.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Ee.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Se.x,Se.y,Se.width,Se.height),fe===0&&(O.matrix.copy(Y.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(Y)}let $=i.enabledFeatures;if($&&$.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let fe=d.getDepthInformation(ye[0]);fe&&fe.isValid&&fe.texture&&m.init(fe,i.renderState)}if($&&$.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let fe=0;fe<ye.length;fe++){let Ee=ye[fe].camera;if(Ee){let Se=g[Ee];Se||(Se=new yl,g[Ee]=Se);let Y=d.getCameraImage(Ee);Se.sourceTexture=Y}}}}for(let ye=0;ye<E.length;ye++){let Re=A[ye],$=E[ye];Re!==null&&$!==void 0&&$.update(Re,ue,c||a)}Q&&Q(W,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),p=null}let Ue=new z0;Ue.setAnimationLoop(ge),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}},Tw=new Tt,$0=new et;$0.set(-1,0,0,0,1,0,0,0,1);function ww(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Ap(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===wn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===wn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ew(r,e,t,n){let i={},s={};function a(v,b){let y=b.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,b){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let E=b.program;n.updateUBOMapping(v,E);let A=e.render.frame;s[v.id]!==A&&(c(v),s[v.id]=A)}function l(v){let b=r.createBuffer(),y=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,y,E),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function c(v){let b=i[v.id],y=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let A=0,x=y.length;A<x;A++){let M=y[A];if(Array.isArray(M))for(let R=0,S=M.length;R<S;R++)h(M[R],A,R,E);else h(M,A,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,b,y,E){if(f(v,b,y,E)===!0){let A=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let R=0;R<x.length;R++){let S=x[R],L=_(S,!0);d(S,v.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,A,v.__data)}}function d(v,b,y){typeof v=="number"||typeof v=="boolean"?b[y]=v:v.isMatrix3?(b[y]=v.elements[0],b[y+1]=v.elements[1],b[y+2]=v.elements[2],b[y+3]=0,b[y+4]=v.elements[3],b[y+5]=v.elements[4],b[y+6]=v.elements[5],b[y+7]=0,b[y+8]=v.elements[6],b[y+9]=v.elements[7],b[y+10]=v.elements[8],b[y+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-y),y):v.toArray(b,y)}function f(v,b,y,E){let A=v.value,x=b+"_"+y;if(Array.isArray(A)){E[x]===void 0&&(E[x]=[]);let M=E[x],R=!1;for(let S=0;S<A.length;S++)u(A[S],M,S)===!0&&(R=!0);return R}return u(A,E,x)}function u(v,b,y){if(b[y]===void 0)return typeof v=="number"||typeof v=="boolean"?b[y]=v:ArrayBuffer.isView(v)?b[y]=v.slice():b[y]=v.clone(),!0;{let E=b[y];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return b[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function p(v){let b=v.uniforms,y=0,E=16;for(let x=0,M=b.length;x<M;x++){let R=Array.isArray(b[x])?b[x]:[b[x]];for(let S=0,L=R.length;S<L;S++){let C=R[S],O=Array.isArray(C.value)?C.value:[C.value],D=Array.isArray(b[x])||Array.isArray(C.value),k=y;for(let U=0,K=O.length;U<K;U++){let H=O[U],I=_(H,D),Q=y%E,ge=Q%I.boundary,Ue=Q+ge;y+=ge,Ue!==0&&E-Ue<I.storage&&(y+=E-Ue),U===0&&(k=y),y+=I.storage}let V=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new V((y-k)/Float32Array.BYTES_PER_ELEMENT),C.__offset=k}}let A=y%E;return A>0&&(y+=E-A),v.__size=y,v.__cache={},this}function _(v,b){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let b=v.target;b.removeEventListener("dispose",m),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}var Aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cr=null;function Rw(){return cr===null&&(cr=new pl(Aw,16,16,us,Xi),cr.name="DFG_LUT",cr.minFilter=$n,cr.magFilter=$n,cr.wrapS=tr,cr.wrapT=tr,cr.generateMipmaps=!1,cr.needsUpdate=!0),cr}var so=class{constructor(e={}){let{canvas:t=s0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=si}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=u,m=new Set([fu,uu,hu]),g=new Set([si,Wi,io,Js,ou,lu]),v=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,A=null,x=[],M=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,L=!1,C=null,O=null,D=null,k=null;this._outputColorSpace=Tn;let V=0,U=0,K=null,H=-1,I=null,Q=new Ft,ge=new Ft,Ue=null,W=new je(0),ue=0,ye=t.width,Re=t.height,$=1,te=null,Ie=null,fe=new Ft(0,0,ye,Re),Ee=new Ft(0,0,ye,Re),Se=!1,Y=new ss,le=new Lh,ce=!1,z=!1,_e=new Tt,qe=new G,Be=new Ft,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function rt(){return K===null?$:1}let B=n;function ot(w,F){return t.getContext(w,F)}let Ke,Je,xe,mt,Ge,Ye,P,T,q,he,ae,ve,we,Z,ie,me,N,ne,ee,Me,pe,be,de;try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",se,!1),B===null){let F="webgl2";if(B=ot(F,w),B===null)throw ot(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(w){throw t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",se,!1),$e("WebGLRenderer: "+w.message),w}function Te(){Ke=new k1(B),Ke.init(),pe=new Sw(B,Ke),Je=new R1(B,Ke,e,pe),xe=new vw(B,Ke),Je.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),O=B.createFramebuffer(),D=B.createFramebuffer(),k=B.createFramebuffer(),mt=new V1(B),Ge=new sw,Ye=new yw(B,Ke,xe,Ge,Je,pe,mt),P=new B1(S),T=new WS(B),be=new E1(B,T),q=new z1(B,T,mt,be),he=new W1(B,q,T,be,mt),ne=new H1(B,Je,Ye),ie=new C1(Ge),ae=new rw(S,P,Ke,Je,be,ie),ve=new ww(S,Ge),we=new ow,Z=new dw(Ke),N=new w1(S,P,xe,he,p,l),me=new xw(S,he,Je),de=new Ew(B,mt,Je,xe),ee=new A1(B,Ke,mt),Me=new G1(B,Ke,mt),mt.programs=ae.programs,S.capabilities=Je,S.extensions=Ke,S.properties=Ge,S.renderLists=we,S.shadowMap=me,S.state=xe,S.info=mt}_!==si&&(R=new q1(_,t.width,t.height,o,i,s));let oe=new zp(S,B);this.xr=oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(ye,Re,!1))},this.getSize=function(w){return w.set(ye,Re)},this.setSize=function(w,F,j=!0){if(oe.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=w,Re=F,t.width=Math.floor(w*$),t.height=Math.floor(F*$),j===!0&&(t.style.width=w+"px",t.style.height=F+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(ye*$,Re*$).floor()},this.setDrawingBufferSize=function(w,F,j){ye=w,Re=F,$=j,t.width=Math.floor(w*j),t.height=Math.floor(F*j),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(_===si){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(fe)},this.setViewport=function(w,F,j,X){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,F,j,X),xe.viewport(Q.copy(fe).multiplyScalar(rt()).round())},this.getScissor=function(w){return w.copy(Ee)},this.setScissor=function(w,F,j,X){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,F,j,X),xe.scissor(ge.copy(Ee).multiplyScalar(rt()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){xe.setScissorTest(Se=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,j=!0){let X=0;if(w){let J=!1;if(K!==null){let Pe=K.texture.format;J=m.has(Pe)}if(J){let Pe=K.texture.type,ze=g.has(Pe),Ce=N.getClearColor(),Fe=N.getClearAlpha(),Xe=Ce.r,nt=Ce.g,ft=Ce.b;ze?(v[0]=Xe,v[1]=nt,v[2]=ft,v[3]=Fe,B.clearBufferuiv(B.COLOR,0,v)):(b[0]=Xe,b[1]=nt,b[2]=ft,b[3]=Fe,B.clearBufferiv(B.COLOR,0,b))}else X|=B.COLOR_BUFFER_BIT}F&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),C=w},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",se,!1),N.dispose(),we.dispose(),Z.dispose(),Ye.dispose(),Ge.dispose(),P.dispose(),he.dispose(),q.dispose(),be.dispose(),de.dispose(),ae.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",At),oe.removeEventListener("sessionend",yt),an.stop()};function re(w){w.preventDefault(),Mp("WebGLRenderer: Context Lost."),L=!0}function Ae(){Mp("WebGLRenderer: Context Restored."),L=!1;let w=mt.autoReset,F=me.enabled,j=me.autoUpdate,X=me.needsUpdate,J=me.type;Te(),mt.autoReset=w,me.enabled=F,me.autoUpdate=j,me.needsUpdate=X,me.type=J}function se(w){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){let F=w.target;F.removeEventListener("dispose",Oe),ut(F)}function ut(w){tt(w),Ge.remove(w)}function tt(w){let F=Ge.get(w).programs;F!==void 0&&(F.forEach(function(j){ae.releaseProgram(j)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,j,X,J,Pe){F===null&&(F=We);let ze=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ce=Mi(w,F,j,X,J);xe.setMaterial(X,ze);let Fe=j.index,Xe=1;if(X.wireframe===!0){if(Fe=q.getWireframeAttribute(j),Fe===void 0)return;Xe=2}let nt=j.drawRange,ft=j.attributes.position,Ve=nt.start*Xe,dt=(nt.start+nt.count)*Xe;Pe!==null&&(Ve=Math.max(Ve,Pe.start*Xe),dt=Math.min(dt,(Pe.start+Pe.count)*Xe)),Fe!==null?(Ve=Math.max(Ve,0),dt=Math.min(dt,Fe.count)):ft!=null&&(Ve=Math.max(Ve,0),dt=Math.min(dt,ft.count));let en=dt-Ve;if(en<0||en===1/0)return;be.setup(J,X,Ce,j,Fe);let It,Ct=ee;if(Fe!==null&&(It=T.get(Fe),Ct=Me,Ct.setIndex(It)),J.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*rt()),Ct.setMode(B.LINES)):Ct.setMode(B.TRIANGLES);else if(J.isLine){let An=X.linewidth;An===void 0&&(An=1),xe.setLineWidth(An*rt()),J.isLineSegments?Ct.setMode(B.LINES):J.isLineLoop?Ct.setMode(B.LINE_LOOP):Ct.setMode(B.LINE_STRIP)}else J.isPoints?Ct.setMode(B.POINTS):J.isSprite&&Ct.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))Ct.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let An=J._multiDrawStarts,He=J._multiDrawCounts,Gn=J._multiDrawCount,vt=Fe?T.get(Fe).bytesPerElement:1,ms=Ge.get(X).currentProgram.getUniforms();for(let Rn=0;Rn<Gn;Rn++)ms.setValue(B,"_gl_DrawID",Rn),Ct.render(An[Rn]/vt,He[Rn])}else if(J.isInstancedMesh)Ct.renderInstances(Ve,en,J.count);else if(j.isInstancedBufferGeometry){let An=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,He=Math.min(j.instanceCount,An);Ct.renderInstances(Ve,en,He)}else Ct.render(Ve,en)};function Nt(w,F,j,X){C!==null&&w.isNodeMaterial&&C.setObject(X,w),ce===!0&&ie.setState(w,j,!1),w.transparent===!0&&w.side===vn&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,oi(w,F,X),w.side=hs,w.needsUpdate=!0,oi(w,F,X),w.side=vn):oi(w,F,X)}this.compile=function(w,F,j=null){j===null&&(j=w),C!==null&&C.renderStart(w,F,j),A=Z.get(j),A.init(F),M.push(A),j.traverseVisible(function(J){J.isLight&&J.layers.test(F.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),w!==j&&w.traverseVisible(function(J){J.isLight&&J.layers.test(F.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),A.setupLights(),C!==null&&C.updateLights(A.state.lightsArray),z=this.localClippingEnabled,ce=ie.init(this.clippingPlanes,z),ce===!0&&ie.setGlobalState(this.clippingPlanes,F),C!==null&&me.render(A.state.shadowsArray,j,F);let X=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){let Ce=Pe[ze];Nt(Ce,j,F,J),X.add(Ce)}else Nt(Pe,j,F,J),X.add(Pe)}),A=M.pop(),C!==null&&C.renderEnd(),X},this.compileAsync=function(w,F,j=null){let X=this.compile(w,F,j);return new Promise(J=>{function Pe(){if(X.forEach(function(ze){let Fe=Ge.get(ze).currentProgram;(Fe===void 0||Fe.isReady())&&X.delete(ze)}),X.size===0){J(w);return}setTimeout(Pe,10)}Ke.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Qt=null;function Ut(w){Qt&&Qt(w)}function At(){an.stop()}function yt(){an.start()}let an=new z0;an.setAnimationLoop(Ut),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(w){Qt=w,oe.setAnimationLoop(w),w===null?an.stop():an.start()},oe.addEventListener("sessionstart",At),oe.addEventListener("sessionend",yt),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C!==null&&C.renderStart(w,F);let j=oe.enabled===!0&&oe.isPresenting===!0,X=R!==null&&(K===null||j)&&R.begin(S,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,F,K),A=Z.get(w,M.length),A.init(F),A.state.textureUnits=Ye.getTextureUnits(),M.push(A),_e.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?le.setFromArrayCamera(F):Y.setFromProjectionMatrix(_e,Pi,F.reversedDepth),z=this.localClippingEnabled,ce=ie.init(this.clippingPlanes,z),E=we.get(w,x.length),E.init(),x.push(E),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let ze=S.xr.getDepthSensingMesh();ze!==null&&Rt(ze,F,-1/0,S.sortObjects)}Rt(w,F,0,S.sortObjects),E.finish(),C!==null&&C.updateLights(A.state.lightsArray),S.sortObjects===!0&&E.sort(te,Ie),Qe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Qe&&N.addToRenderList(E,w),this.info.autoReset===!0&&this.info.reset(),ce===!0&&ie.beginShadows();let J=A.state.shadowsArray;if(me.render(J,w,F),ce===!0&&ie.endShadows(),(X&&R.hasRenderPass())===!1){let ze=E.opaque,Ce=E.transmissive;if(A.setupLights(),F.isArrayCamera){let Fe=F.cameras;if(Ce.length>0)for(let Xe=0,nt=Fe.length;Xe<nt;Xe++){let ft=Fe[Xe];ai(ze,Ce,w,ft)}Qe&&N.render(w);for(let Xe=0,nt=Fe.length;Xe<nt;Xe++){let ft=Fe[Xe];En(E,w,ft,ft.viewport)}}else Ce.length>0&&ai(ze,Ce,w,F),Qe&&N.render(w),En(E,w,F)}K!==null&&U===0&&(Ye.updateMultisampleRenderTarget(K),Ye.updateRenderTargetMipmap(K)),X&&R.end(S),w.isScene===!0&&w.onAfterRender(S,w,F),be.resetDefaultState(),H=-1,I=null,M.pop(),M.length>0?(A=M[M.length-1],Ye.setTextureUnits(A.state.textureUnits),ce===!0&&ie.setGlobalState(S.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,C!==null&&C.renderEnd()};function Rt(w,F,j,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){let ze=F.isArrayCamera?le:Y;if(!w.frustumCulled||w.intersectsFrustum(ze)){X&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);let Ce=he.update(w),Fe=w.material;Fe.visible&&E.push(w,Ce,Fe,j,Be.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let ze=F.isArrayCamera?le:Y;if(!w.frustumCulled||w.intersectsFrustum(ze)){let Ce=he.update(w),Fe=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Be.copy(Ce.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(Fe)){let Xe=Ce.groups;for(let nt=0,ft=Xe.length;nt<ft;nt++){let Ve=Xe[nt],dt=Fe[Ve.materialIndex];dt&&dt.visible&&E.push(w,Ce,dt,j,Be.z,Ve,F)}}else Fe.visible&&E.push(w,Ce,Fe,j,Be.z,null,F)}}}let Pe=w.children;for(let ze=0,Ce=Pe.length;ze<Ce;ze++)Rt(Pe[ze],F,j,X)}function En(w,F,j,X){let{opaque:J,transmissive:Pe,transparent:ze}=w;A.setupLightsView(j),ce===!0&&ie.setGlobalState(S.clippingPlanes,j),X&&xe.viewport(Q.copy(X)),J.length>0&&Xt(J,F,j),Pe.length>0&&Xt(Pe,F,j),ze.length>0&&Xt(ze,F,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ai(w,F,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){let Ve=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new _i(1,1,{generateMipmaps:!0,type:Ve?Xi:si,minFilter:Nr,samples:Math.max(4,Je.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Pe=A.state.transmissionRenderTarget[X.id],ze=X.viewport||Q;Pe.setSize(ze.z*S.transmissionResolutionScale,ze.w*S.transmissionResolutionScale);let Ce=S.getRenderTarget(),Fe=S.getActiveCubeFace(),Xe=S.getActiveMipmapLevel();S.setRenderTarget(Pe),S.getClearColor(W),ue=S.getClearAlpha(),ue<1&&S.setClearColor(16777215,.5),S.clear(),Qe&&N.render(j);let nt=S.toneMapping;S.toneMapping=lr;let ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),ce===!0&&ie.setGlobalState(S.clippingPlanes,X),Xt(w,j,X),Ye.updateMultisampleRenderTarget(Pe),Ye.updateRenderTargetMipmap(Pe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let dt=0,en=F.length;dt<en;dt++){let It=F[dt],{object:Ct,geometry:An,material:He,group:Gn}=It;if(He.side===vn&&Ct.layers.test(X.layers)){let vt=He.side;He.side=wn,He.needsUpdate=!0,jt(Ct,j,X,An,He,Gn),He.side=vt,He.needsUpdate=!0,Ve=!0}}Ve===!0&&(Ye.updateMultisampleRenderTarget(Pe),Ye.updateRenderTargetMipmap(Pe))}S.setRenderTarget(Ce,Fe,Xe),S.setClearColor(W,ue),ft!==void 0&&(X.viewport=ft),S.toneMapping=nt}function Xt(w,F,j){let X=F.isScene===!0?F.overrideMaterial:null;for(let J=0,Pe=w.length;J<Pe;J++){let ze=w[J],{object:Ce,geometry:Fe,group:Xe}=ze,nt=ze.material;nt.allowOverride===!0&&X!==null&&(nt=X),Ce.layers.test(j.layers)&&jt(Ce,F,j,Fe,nt,Xe)}}function jt(w,F,j,X,J,Pe){C!==null&&J.isNodeMaterial&&C.setObject(w,J),w.onBeforeRender(S,F,j,X,J,Pe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(S,F,j,X,w,Pe),J.transparent===!0&&J.side===vn&&J.forceSinglePass===!1?(J.side=wn,J.needsUpdate=!0,S.renderBufferDirect(j,F,X,J,w,Pe),J.side=hs,J.needsUpdate=!0,S.renderBufferDirect(j,F,X,J,w,Pe),J.side=vn):S.renderBufferDirect(j,F,X,J,w,Pe),w.onAfterRender(S,F,j,X,J,Pe)}function on(w){let F=0;for(let j of w)j.texture!==null&&F++;return F}function oi(w,F,j){F.isScene!==!0&&(F=We);let X=Ge.get(w),J=A.state.lights,Pe=A.state.shadowsArray,ze=J.state.version,Ce=ae.getParameters(w,J.state,Pe,F,j,A.state.lightProbeGridArray),Fe=ae.getProgramCacheKey(Ce),Xe=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let nt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=P.get(w.envMap||X.environment,nt),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",Oe),Xe=new Map,X.programs=Xe,X.programVariants=new Map);let ft=Xe.get(Fe);if(ft!==void 0){if(X.currentProgram===ft&&X.lightsStateVersion===ze)return qt(w,Ce),ft}else Ce.uniforms=ae.getUniforms(w),C!==null&&w.isNodeMaterial&&C.build(w,j,Ce),w.onBeforeCompile(Ce,S),ft=ae.acquireProgram(Ce,Fe),Xe.set(Fe,ft),X.uniforms=Ce.uniforms;let Ve=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=ie.uniform),qt(w,Ce),X.needsLights=jl(w),X.lightsStateVersion=ze,X.needsLights&&(Ve.ambientLightColor.value=J.state.ambient,Ve.lightProbe.value=J.state.probe,Ve.sunLights.value=J.state.sun,Ve.sunLightShadows.value=J.state.sunShadow,Ve.directionalLights.value=J.state.directional,Ve.directionalLightShadows.value=J.state.directionalShadow,Ve.spotLights.value=J.state.spot,Ve.spotLightShadows.value=J.state.spotShadow,Ve.rectAreaLights.value=J.state.rectArea,Ve.ltc_1.value=J.state.rectAreaLTC1,Ve.ltc_2.value=J.state.rectAreaLTC2,Ve.pointLights.value=J.state.point,Ve.pointLightShadows.value=J.state.pointShadow,Ve.hemisphereLights.value=J.state.hemi,Ve.sunShadowMatrix.value=J.state.sunShadowMatrix,Ve.sunShadowCascade.value=J.state.sunShadowCascade,Ve.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ve.spotLightMatrix.value=J.state.spotLightMatrix,Ve.spotLightMap.value=J.state.spotLightMap,Ve.pointShadowMatrix.value=J.state.pointShadowMatrix),X.numLightProbeGrids=on(A.state.lightProbeGridArray),X.currentProgram=ft,X.uniformsList=null,ft}function na(w,F,j,X,J){let Pe=Ge.get(w),ze=Pe.currentProgram.id+","+X+","+J,Ce=Pe.programVariants.get(ze);return Ce===void 0?(Ce=oi(w,F,j),Pe.programVariants.set(ze,Ce)):(Pe.currentProgram=Ce,Pe.uniformsList=null,Pe.outputColorSpace=X,Pe.toneMapping=J),Ce}function ln(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=ro.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function qt(w,F){let j=Ge.get(w);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function Mi(w,F,j,X,J){F.isScene!==!0&&(F=We),Ye.resetTextureUnits();let Pe=F.fog,ze=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Ce=K===null?S.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:pt.workingColorSpace,Fe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Xe=P.get(X.envMap||ze,Fe),nt=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ft=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!j.morphAttributes.position,dt=!!j.morphAttributes.normal,en=!!j.morphAttributes.color,It=lr;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(It=S.toneMapping);let Ct=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,An=Ct!==void 0?Ct.length:0,He=Ge.get(X),Gn=A.state.lights;if(ce===!0&&(z===!0||w!==I)){let kt=w===I&&X.id===H;ie.setState(X,w,kt)}let vt=!1,ms=!1;X.version===He.__version?He.needsLights&&He.lightsStateVersion!==Gn.state.version||J.isBatchedMesh&&He.batching===!1||!J.isBatchedMesh&&He.batching===!0||J.isBatchedMesh&&He.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&He.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&He.instancing===!1||!J.isInstancedMesh&&He.instancing===!0||J.isSkinnedMesh&&He.skinning===!1||!J.isSkinnedMesh&&He.skinning===!0||J.isInstancedMesh&&He.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&He.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&He.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&He.instancingMorph===!1&&J.morphTexture!==null||He.envMap!==Xe||X.fog===!0&&He.fog!==Pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ie.numPlanes||He.numIntersection!==ie.numIntersection)||He.vertexAlphas!==nt||He.vertexTangents!==ft||He.morphTargets!==Ve||He.morphNormals!==dt||He.morphColors!==en||He.morphTargetsCount!==An||He.numLightProbeGrids!==on(A.state.lightProbeGridArray)?vt=!0:(He.outputColorSpace!==Ce||He.toneMapping!==It)&&(ms=!0):(vt=!0,He.__version=X.version);let Rn=He.currentProgram;(vt===!0||ms===!0)&&(Rn=ms===!0?na(X,F,J,Ce,It):oi(X,F,J),C&&X.isNodeMaterial&&C.onUpdateProgram(X,Rn,He));let ec=!1,kr=!1,gs=!1,_t=Rn.getUniforms(),yn=He.uniforms;if(xe.useProgram(Rn.program)&&(ec=!0,kr=!0,gs=!0),X.id!==H&&(H=X.id,kr=!0),ec||I!==w){xe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_t.setValue(B,"projectionMatrix",w.projectionMatrix),_t.setValue(B,"viewMatrix",w.matrixWorldInverse);let dn=_t.map.cameraPosition;dn!==void 0&&dn.setValue(B,qe.setFromMatrixPosition(w.matrixWorld)),Je.logarithmicDepthBuffer&&_t.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_t.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),I!==w&&(I=w,kr=!0,gs=!0)}if(He.needsLights&&(Gn.state.sunShadowMap.length>0&&_t.setValue(B,"sunShadowMap",Gn.state.sunShadowMap,Ye),Gn.state.directionalShadowMap.length>0&&_t.setValue(B,"directionalShadowMap",Gn.state.directionalShadowMap,Ye),Gn.state.spotShadowMap.length>0&&_t.setValue(B,"spotShadowMap",Gn.state.spotShadowMap,Ye),Gn.state.pointShadowMap.length>0&&_t.setValue(B,"pointShadowMap",Gn.state.pointShadowMap,Ye)),J.isSkinnedMesh){_t.setOptional(B,J,"bindMatrix"),_t.setOptional(B,J,"bindMatrixInverse");let kt=J.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),_t.setValue(B,"boneTexture",kt.boneTexture,Ye))}J.isBatchedMesh&&(_t.setOptional(B,J,"batchingTexture"),_t.setValue(B,"batchingTexture",J._matricesTexture,Ye),_t.setOptional(B,J,"batchingIdTexture"),_t.setValue(B,"batchingIdTexture",J._indirectTexture,Ye),_t.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&_t.setValue(B,"batchingColorTexture",J._colorsTexture,Ye));let Ui=j.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&ne.update(J,j,Rn),(kr||He.receiveShadow!==J.receiveShadow)&&(He.receiveShadow=J.receiveShadow,_t.setValue(B,"receiveShadow",J.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(yn.envMapIntensity.value=F.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=Rw()),kr){if(_t.setValue(B,"toneMappingExposure",S.toneMappingExposure),He.needsLights&&mo(yn,gs),Pe&&X.fog===!0&&ve.refreshFogUniforms(yn,Pe),ve.refreshMaterialUniforms(yn,X,$,Re,A.state.transmissionRenderTarget[w.id]),He.needsLights&&He.numLightProbeGrids>0){let kt=y,dn=0;for(let ur of A.state.lightProbeGridArray)ur.texture!==null&&(kt.textures[dn]=ur.texture,kt.min[dn]=ur.boundingBox.min,kt.max[dn]=ur.boundingBox.max,kt.resolution[dn]=ur.resolution,dn++);for(let ur in kt)kt[ur].length=dn;yn.probesSH.value=kt.textures,yn.probesMin.value=kt.min,yn.probesMax.value=kt.max,yn.probesResolution.value=kt.resolution}ro.upload(B,ln(He),yn,Ye)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ro.upload(B,ln(He),yn,Ye),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_t.setValue(B,"center",J.center),_t.setValue(B,"modelViewMatrix",J.modelViewMatrix),_t.setValue(B,"normalMatrix",J.normalMatrix),_t.setValue(B,"modelMatrix",J.matrixWorld),X.uniformsGroups!==void 0){let kt=X.uniformsGroups;for(let dn=0,ur=kt.length;dn<ur;dn++){let Zp=kt[dn];de.update(Zp,Rn),de.bind(Zp,Rn)}}return Rn}function mo(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function jl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,F,j){let X=Ge.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ge.get(w.texture).__webglTexture=F,Ge.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:j,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let j=Ge.get(w);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,j=0){K=w,V=F,U=j;let X=null,J=!1,Pe=!1;if(w){let Ce=Ge.get(w);if(Ce.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(B.FRAMEBUFFER,Ce.__webglFramebuffer),Q.copy(w.viewport),ge.copy(w.scissor),Ue=w.scissorTest,xe.viewport(Q),xe.scissor(ge),xe.setScissorTest(Ue),H=-1;return}else if(Ce.__webglFramebuffer===void 0)Ye.setupRenderTarget(w);else if(Ce.__hasExternalTextures)Ye.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let nt=w.depthTexture;if(Ce.__boundDepthTexture!==nt){if(nt!==null&&Ge.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(w)}}let Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Pe=!0);let Xe=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?X=Xe[F][j]:X=Xe[F],J=!0):w.samples>0&&Ye.useMultisampledRTT(w)===!1?X=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?X=Xe[j]:X=Xe,Q.copy(w.viewport),ge.copy(w.scissor),Ue=w.scissorTest}else Q.copy(fe).multiplyScalar($).floor(),ge.copy(Ee).multiplyScalar($).floor(),Ue=Se;if(j!==0&&(X=O),xe.bindFramebuffer(B.FRAMEBUFFER,X)&&xe.drawBuffers(w,X),xe.viewport(Q),xe.scissor(ge),xe.setScissorTest(Ue),J){let Ce=Ge.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,j)}else if(Pe){let Ce=F;for(let Fe=0;Fe<w.textures.length;Fe++){let Xe=Ge.get(w.textures[Fe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Fe,Xe.__webglTexture,j,Ce)}}else if(w!==null&&j!==0){let Ce=Ge.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ce.__webglTexture,j)}H=-1};function Br(w){let F=Ge.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=Je.textureFormatReadable(w.format),F.__typeReadable=Je.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,j,X,J,Pe,ze,Ce=0){if(!(w&&w.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Fe=Fe[ze],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){xe.bindFramebuffer(B.FRAMEBUFFER,Fe);try{let Xe=w.textures[Ce],nt=Xe.format,ft=Xe.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ce);let Ve=Br(Xe);if(Ve.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&j>=0&&j<=w.height-J&&B.readPixels(F,j,X,J,pe.convert(nt),pe.convert(ft),Pe)}finally{let Xe=K!==null?Ge.get(K).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(w,F,j,X,J,Pe,ze,Ce=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Fe=Fe[ze],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(F>=0&&F<=w.width-X&&j>=0&&j<=w.height-J){xe.bindFramebuffer(B.FRAMEBUFFER,Fe);let Xe=w.textures[Ce],nt=Xe.format,ft=Xe.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ce);let Ve=Br(Xe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.bufferData(B.PIXEL_PACK_BUFFER,Pe.byteLength,B.STREAM_READ),B.readPixels(F,j,X,J,pe.convert(nt),pe.convert(ft),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let en=K!==null?Ge.get(K).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,en);let It=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await o0(B,It,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(dt),B.deleteSync(It),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,j=0){let X=Math.pow(2,-j),J=Math.floor(w.image.width*X),Pe=Math.floor(w.image.height*X),ze=F!==null?F.x:0,Ce=F!==null?F.y:0;Ye.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,ze,Ce,J,Pe),xe.unbindTexture()},this.copyTextureToTexture=function(w,F,j=null,X=null,J=0,Pe=0){let ze,Ce,Fe,Xe,nt,ft,Ve,dt,en,It=w.isCompressedTexture?w.mipmaps[Pe]:w.image;if(j!==null)ze=j.max.x-j.min.x,Ce=j.max.y-j.min.y,Fe=j.isBox3?j.max.z-j.min.z:1,Xe=j.min.x,nt=j.min.y,ft=j.isBox3?j.min.z:0;else{let _t=Math.pow(2,-J);ze=Math.floor(It.width*_t),Ce=Math.floor(It.height*_t),w.isDataArrayTexture?Fe=It.depth:w.isData3DTexture?Fe=Math.floor(It.depth*_t):Fe=1,Xe=0,nt=0,ft=0}X!==null?(Ve=X.x,dt=X.y,en=X.z):(Ve=0,dt=0,en=0);let Ct=pe.convert(F.format),An=pe.convert(F.type),He;F.isData3DTexture?(Ye.setTexture3D(F,0),He=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ye.setTexture2DArray(F,0),He=B.TEXTURE_2D_ARRAY):(Ye.setTexture2D(F,0),He=B.TEXTURE_2D),xe.activeTexture(B.TEXTURE0),xe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),xe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),xe.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let Gn=xe.getParameter(B.UNPACK_ROW_LENGTH),vt=xe.getParameter(B.UNPACK_IMAGE_HEIGHT),ms=xe.getParameter(B.UNPACK_SKIP_PIXELS),Rn=xe.getParameter(B.UNPACK_SKIP_ROWS),ec=xe.getParameter(B.UNPACK_SKIP_IMAGES);xe.pixelStorei(B.UNPACK_ROW_LENGTH,It.width),xe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It.height),xe.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),xe.pixelStorei(B.UNPACK_SKIP_ROWS,nt),xe.pixelStorei(B.UNPACK_SKIP_IMAGES,ft);let kr=w.isDataArrayTexture||w.isData3DTexture,gs=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let _t=Ge.get(w),yn=Ge.get(F),Ui=Ge.get(_t.__renderTarget),kt=Ge.get(yn.__renderTarget);xe.bindFramebuffer(B.READ_FRAMEBUFFER,Ui.__webglFramebuffer),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let dn=0;dn<Fe;dn++)kr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,J,ft+dn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(F).__webglTexture,Pe,en+dn)),B.blitFramebuffer(Xe,nt,Xe+ze,nt+Ce,Ve,dt,Ve+ze,dt+Ce,B.DEPTH_BUFFER_BIT,B.NEAREST);xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||Ge.has(w)){let _t=Ge.get(w),yn=Ge.get(F);xe.bindFramebuffer(B.READ_FRAMEBUFFER,D),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let Ui=0;Ui<Fe;Ui++)kr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_t.__webglTexture,J,ft+Ui):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_t.__webglTexture,J),gs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yn.__webglTexture,Pe,en+Ui):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yn.__webglTexture,Pe),J!==0?B.blitFramebuffer(Xe,nt,Xe+ze,nt+Ce,Ve,dt,Ve+ze,dt+Ce,B.COLOR_BUFFER_BIT,B.NEAREST):gs?B.copyTexSubImage3D(He,Pe,Ve,dt,en+Ui,Xe,nt,ze,Ce):B.copyTexSubImage2D(He,Pe,Ve,dt,Xe,nt,ze,Ce);xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else gs?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(He,Pe,Ve,dt,en,ze,Ce,Fe,Ct,An,It.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(He,Pe,Ve,dt,en,ze,Ce,Fe,Ct,It.data):B.texSubImage3D(He,Pe,Ve,dt,en,ze,Ce,Fe,Ct,An,It):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pe,Ve,dt,ze,Ce,Ct,An,It.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pe,Ve,dt,It.width,It.height,Ct,It.data):B.texSubImage2D(B.TEXTURE_2D,Pe,Ve,dt,ze,Ce,Ct,An,It);xe.pixelStorei(B.UNPACK_ROW_LENGTH,Gn),xe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt),xe.pixelStorei(B.UNPACK_SKIP_PIXELS,ms),xe.pixelStorei(B.UNPACK_SKIP_ROWS,Rn),xe.pixelStorei(B.UNPACK_SKIP_IMAGES,ec),Pe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(He),xe.unbindTexture()},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&Ye.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ye.setTextureCube(w,0):w.isData3DTexture?Ye.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ye.setTexture2DArray(w,0):Ye.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){V=0,U=0,K=null,xe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var lo=class extends Pr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new xi;e.deleteAttribute("uv");let t=new sn({side:wn}),n=new sn,i=new Ol(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new xt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new gl(e,n,6),o=new Kt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new xt(e,oo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new xt(e,oo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new xt(e,oo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new xt(e,oo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new xt(e,oo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new xt(e,oo(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function oo(r){return new Il({color:0,emissive:16777215,emissiveIntensity:r})}function K0(r,e,t,n,i,s){let l=[{key:"sites",title:"\u0421\u0430\u0439\u0442\u044B",x:.34,y:1.12,z:1.65,roll:-.09,seamY:.87,delay:.24,duration:2.08},{key:"ads",title:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",x:.9,y:.04,z:1.8,roll:.075,seamY:.17,delay:.65,duration:2.27},{key:"apps",title:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",x:.48,y:-1.05,z:1.95,roll:-.055,seamY:-.68,delay:1,duration:2.24},{key:"3d",title:"3D",x:-1.04,y:-1.32,compactY:.05,z:1.7,roll:.065,seamY:-.47,delay:1.29,duration:2.31}],c=[],h=[],d=32,f=.012,u=.126;for(let R=0;R<=d;R++){let S=1.24*(R/d-.5),L=-.8/2,C=.8/2-Math.max(0,S-(1.24/2-u));if(c.push(S,L,0,S,C,0,S,L,f,S,C,f),!R)continue;let O=4*(R-1);h.push(O,O+1,O+4,O+1,O+5,O+4,O,O+4,O+2,O+2,O+4,O+6,O+1,O+3,O+5,O+3,O+7,O+5)}let p=4*d;h.push(0,2,1,1,2,3,p,p+1,p+2,p+1,p+3,p+2);let _=new kn;_.setAttribute("position",new Et(c,3)),_.setIndex(h),_.computeVertexNormals();let m=new yi(1.24,.8,d,8),g=l.map((R,S)=>{let L=document.createElement("canvas");L.width=768,L.height=496;let C=new Hi(L);C.colorSpace=Tn,C.anisotropy=4;let O=new sn({map:C,color:15658735,emissive:16777215,emissiveMap:C,emissiveIntensity:.17,roughness:.76,metalness:.04,transparent:!0,alphaTest:.5,side:vn}),D=new sn({color:6841714,metalness:.23,roughness:.58,side:vn,emissive:13936771,emissiveIntensity:0}),k={value:0},V={value:0},U={value:0},K=R.key==="3d"?-1:1;for(let Ue of[D,O])Ue.onBeforeCompile=W=>{W.uniforms.sheetRelease=k,W.uniforms.sheetFlex=V,W.uniforms.sheetTwist=U,W.uniforms.sheetSide={value:K},W.vertexShader=`uniform float sheetSide, sheetFlex, sheetTwist; varying float sheetEdge;
`+W.vertexShader,W.vertexShader=W.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          float trailing = clamp(.5 - position.x * sheetSide / 1.24, 0., 1.);
          float slopeX = -2. * trailing * sheetSide * sheetFlex / 1.24 + sheetTwist * position.y;
          objectNormal.xy -= objectNormal.z * vec2(slopeX, sheetTwist * position.x);`),W.vertexShader=W.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          sheetEdge = clamp(.5 + position.x * sheetSide / 1.24, 0., 1.);
          transformed.z += sheetFlex * (1.-sheetEdge) * (1.-sheetEdge) + sheetTwist * position.x * position.y;`),W.fragmentShader=`uniform float sheetRelease; varying float sheetEdge;
`+W.fragmentShader,W.fragmentShader=W.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          if (sheetEdge < 1. - sheetRelease) discard;`)};let H=new Bn,I=new xt(m,O);I.position.z=f+.001,H.add(new xt(_,D),I),r.add(H);let Q=i.querySelector(`[data-document="${R.key}"]`),ge={...R,index:S,side:K,release:k,flex:V,twist:U,plate:s.get(R.key),canvas:L,texture:C,faceMaterial:O,edgeMaterial:D,object:H,rest:new Kt,link:Q,progress:0,hover:0,screen:null};return b(ge),ge}),v=!1;document.fonts.ready.then(()=>{if(!v)for(let R of g)b(R)});function b(R){let S=R.canvas.getContext("2d");if(S.clearRect(0,0,768,496),S.beginPath(),S.moveTo(3,3),S.lineTo(687,3),S.lineTo(765,81),S.lineTo(765,493),S.lineTo(3,493),S.closePath(),S.fillStyle="#24252a",S.fill(),S.strokeStyle="#696870",S.lineWidth=3,S.stroke(),S.beginPath(),S.moveTo(687,3),S.lineTo(687,81),S.lineTo(765,81),S.closePath(),S.fillStyle="#55515b",S.fill(),S.fillStyle="#f1ece5",S.font="500 65px 'Manrope Variable', sans-serif",S.fillText(R.title,47,115),S.strokeStyle="#d6ad91",S.lineWidth=5,S.beginPath(),S.moveTo(638,108),S.lineTo(670,76),S.moveTo(641,76),S.lineTo(670,76),S.lineTo(670,105),S.stroke(),S.fillStyle="#a69eac",S.fillRect(48,150,670,2),S.strokeStyle="#77717f",S.lineWidth=3,R.key==="sites")S.strokeRect(48,192,670,249),S.fillStyle="#34343b",S.fillRect(49,193,668,30),S.fillStyle="#b1a8bc",[67,83,99].forEach(L=>{S.beginPath(),S.arc(L,207,3,0,Math.PI*2),S.fill()}),S.fillStyle="#c3b9cb",S.fillRect(80,256,233,16),S.fillRect(80,286,179,16),S.fillStyle="#77717f",S.fillRect(80,326,206,7),S.fillRect(80,345,171,7),S.fillStyle="#b78e77",S.fillRect(80,382,98,22),S.fillStyle="#46434d",S.fillRect(432,248,254,166),S.strokeStyle="#aaa0b5",S.strokeRect(480,273,158,115);else if(R.key==="ads")S.fillStyle="#34303a",S.fillRect(48,192,670,188),S.strokeStyle="#b4a3be",S.strokeRect(82,220,174,128),S.fillStyle="#b49a86",S.fillRect(111,242,116,84),S.fillStyle="#c0b7c8",S.fillRect(308,233,260,17),S.fillRect(308,269,182,17),S.fillStyle="#77717f",S.fillRect(308,315,330,7),S.fillStyle="#a88a78",S.fillRect(48,405,199,35),S.fillStyle="#675b73",S.fillRect(255,405,308,35),S.fillRect(571,405,147,35);else if(R.key==="3d"){S.fillStyle="#34303a",S.fillRect(48,192,670,249);let L=[["M383 204 498 255 383 310 268 255Z","#82798b"],["M268 255 383 310 383 429 268 375Z","#47444e"],["M383 310 498 255 498 375 383 429Z","#635563"]];for(let[C,O]of L){let D=new Path2D(C);S.fillStyle=O,S.fill(D),S.strokeStyle="#d8c5bd",S.lineWidth=4,S.stroke(D)}}else{S.strokeRect(48,192,670,249),S.fillStyle="#34343b",S.fillRect(49,193,111,247),S.fillStyle="#a69eac";for(let L=0;L<4;L++)S.fillRect(70,228+L*39,62,6);for(let L=0;L<3;L++)S.fillStyle="#38363f",S.fillRect(189,220+L*67,495,49),S.strokeStyle="#b3a6bf",S.strokeRect(208,237+L*67,16,16),S.fillStyle="#afa5b8",S.fillRect(248,241+L*67,176-L*27,8),S.fillStyle="#aa8e7b",S.fillRect(596,239+L*67,62,12)}R.texture.needsUpdate=!0}let y=new G,E=new G;function A(R){let S=n.time,L=innerWidth<=1e3;t.updateWorldMatrix(!0,!0);for(let C of g){C.progress=Math.max(C.progress,n.paused?1:Qn.clamp((S-C.delay)/C.duration,0,1));let O=C.progress,D=Qn.smootherstep(O,0,.5),k=Qn.smootherstep(O,.29,.91),V=Qn.smoothstep(O,.62,1),U=Math.sin(V*Math.PI*2)*(1-V),K=Math.sin(k*Math.PI),H=1.52-(C.seamY+1.65)*1.18/3.3;y.set(C.side*(H-1.24*.5+D*(1.24+.04)),C.seamY,.061).applyMatrix4(C.plate.matrixWorld);let I=Math.sin(S*(.74+C.index*.09)+C.index*1.9)*.037;E.set(C.x*(L?innerWidth<380?.6:.8:1),(L?C.compactY??C.y:C.y)+I,C.z),C.object.position.lerpVectors(y,E,k),C.object.position.y+=K*(.25+.06*C.index)-.055*U,C.object.position.z+=K*.34+.095*U,C.release.value=Math.min(1,D*1.04),C.flex.value=-.27*K+.095*U,C.twist.value=C.side*(.53*K-.22*U);let Q=Qn.smootherstep(O,.35,.94);C.object.rotation.set(Qn.lerp(t.rotation.x,.08,Q)-.23*K+.08*U+Math.sin(S*.63+C.index)*.018*Q,Qn.lerp(t.rotation.y,-.11,Q)-C.side*(.58*K-.1*U),Qn.lerp(t.rotation.z,C.roll,Q)+C.side*.21*K+Math.sin(S*.52+C.index*2)*.014*Q);let ge=n.heroFocus===C.key?1:0;C.hover+=(ge-C.hover)*(n.paused?1:1-Math.exp(-R*14)),C.object.scale.setScalar(1),C.rest.position.copy(C.object.position),C.rest.quaternion.copy(C.object.quaternion),C.rest.scale.copy(C.object.scale),C.rest.updateMatrix(),C.object.position.y+=C.hover*.12*k,C.object.position.z+=C.hover*.18*k,C.object.rotation.y+=C.hover*.035,C.object.rotation.z-=C.hover*.025,C.object.scale.multiplyScalar(1+C.hover*.035),C.object.visible=C.progress>0,C.edgeMaterial.emissiveIntensity=C.hover*.65}}let x=new G;function M(){e.updateMatrixWorld();for(let R of g){R.object.updateWorldMatrix(!0,!1);let S=1/0,L=1/0,C=-1/0,O=-1/0;for(let D of[R.object.matrixWorld,R.rest.matrix])for(let k of[-1.24/2,1.24/2])for(let V of[-.8/2,.8/2]){x.set(k,V,.025).applyMatrix4(D).project(e);let U=(x.x+1)*i.clientWidth/2,K=(1-x.y)*i.clientHeight/2;S=Math.min(S,U),C=Math.max(C,U),L=Math.min(L,K),O=Math.max(O,K)}R.screen={left:S,top:L,right:C,bottom:O},R.link.style.setProperty("--doc-x",`${S-7}px`),R.link.style.setProperty("--doc-y",`${L-7}px`),R.link.style.setProperty("--doc-w",`${C-S+14}px`),R.link.style.setProperty("--doc-h",`${O-L+14}px`),R.link.style.setProperty("--doc-visibility",R.release.value>.95?"visible":"hidden")}}return{update:A,project:M,status:()=>g.map(R=>({key:R.key,progress:R.progress,hover:R.hover,position:R.object.position.toArray(),screen:R.screen})),dispose(){v=!0,_.dispose(),m.dispose();for(let R of g)r.remove(R.object),R.texture.dispose(),R.faceMaterial.dispose(),R.edgeMaterial.dispose()}}}var Cw=r=>document.querySelector(r);function Q0(r,e){let t=Cw("#scene"),n;try{let $=document.createElement("canvas"),te=$.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!te)return t.dataset.renderer="fallback",null;n=new so({canvas:$,context:te,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return t.dataset.renderer="fallback",null}n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.setClearColor(0,0),n.toneMapping=Ys,n.toneMappingExposure=1.05,n.outputColorSpace=Tn,t.append(n.domElement),n.domElement.setAttribute("aria-hidden","true");let i=new Pr,s=new _n(34,1,.1,40);s.position.set(0,.15,8.8),s.lookAt(0,0,0);let a=new lo,o=new xt(new yi(12,12),new ar({color:new je("#867398").multiplyScalar(2.3),side:vn}));o.position.set(-6,3,-3),o.rotation.y=Math.PI/3,a.add(o);let l=new xt(new yi(5,8),new ar({color:new je("#ffb58d").multiplyScalar(1.8),side:vn}));l.position.set(6,1,0),l.rotation.y=-Math.PI/2,a.add(l);let c=new fs(n),h=c.fromScene(a,.04);i.environment=h.texture,i.environmentIntensity=.85,a.dispose(),c.dispose();let d=new Dr(16313855,3.4);d.position.set(-3,5,4),i.add(d);let f=new Dr(12892639,3.2);f.position.set(4,-1,-4),i.add(f);let u=new Bn;i.add(u);let p=new Za;p.moveTo(-1.52,-1.65),p.lineTo(-.34,1.65),p.lineTo(.34,1.65),p.lineTo(1.52,-1.65),p.lineTo(.8,-1.65),p.lineTo(.49,-.72),p.lineTo(-.49,-.72),p.lineTo(-.8,-1.65),p.closePath();let _=new Vs;_.moveTo(-.35,-.08),_.lineTo(.35,-.08),_.lineTo(0,1.02),_.closePath(),p.holes.push(_);let m=document.createElement("canvas");m.width=512,m.height=256;let g=m.getContext("2d");g.fillStyle="#888",g.fillRect(0,0,512,256);for(let $=0;$<256;$++){let te=115+($*37+$*$)%35;g.fillStyle=`rgb(${te},${te},${te})`,g.fillRect(0,$,512,1)}let v=new Hi(m);v.wrapS=v.wrapT=rs,v.repeat.set(1,3);let b=new Ws({color:12107461,metalness:.9,roughness:.3,clearcoat:.22,bumpMap:v,bumpScale:.006}),y=new sn({color:3420986,metalness:.78,roughness:.32}),E=new sn({color:12946025,metalness:.83,roughness:.26}),A=new sn({color:13224912,metalness:1,roughness:.18}),x=new $a(p,{depth:.13,bevelEnabled:!0,bevelSegments:4,steps:1,bevelSize:.045,bevelThickness:.04,curveSegments:8}),M=new $a(p,{depth:.036,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.012,bevelThickness:.01,curveSegments:8}),R=[],S=[],L={2:"3d",4:"sites",8:"ads",12:"apps"};for(let $=0;$<16;$++){let te=$===0||$===15,Ie=$===15?b:$===0?E:y;L[$]&&(Ie=E.clone(),Ie.emissive.setHex(15050880),Ie.emissiveIntensity=0,S.push(Ie));let fe=new xt(te?x:M,[Ie,te?A:Ie]),Ee=($-7.5)*.085;fe.position.z=Ee,u.add(fe),R.push({mesh:fe,depth:Ee,index:$,surface:Ie,mode:L[$],highlight:0})}let C=document.createElement("canvas");C.width=C.height=128;let O=C.getContext("2d"),D=O.createRadialGradient(64,64,1,64,64,64);D.addColorStop(0,"#0009"),D.addColorStop(1,"#0000"),O.fillStyle=D,O.fillRect(0,0,128,128);let k=new Hi(C),V=new ar({map:k,transparent:!0,depthWrite:!1,opacity:.55}),U=new yi(5,3.3),K=new xt(U,V);K.rotation.x=-Math.PI/2,K.position.y=-2.05,i.add(K);let H=K0(i,s,u,r,t,new Map(R.filter($=>$.mode).map($=>[$.mode,$.mesh]))),I=!1,Q=1.1,ge={drag:0};n.domElement.addEventListener("webglcontextlost",$=>{$.preventDefault(),I=!0,t.classList.remove("ready"),t.dataset.renderer="fallback"}),n.domElement.addEventListener("webglcontextrestored",()=>{I=!1,t.classList.add("ready"),t.dataset.renderer="webgl",W()});function Ue(){let $=t.clientWidth,te=t.clientHeight;!$||!te||(n.setSize($,te,!1),s.aspect=$/te,s.updateProjectionMatrix(),Q=($<650?.82:.96)*Math.min(1,s.aspect),s.position.z=$<650?7.6:8.8,ye(0))}function W(){I||r.concept==="impulse"||(n.render(i,s),H.project(),r.frames++)}function ue(){u.updateWorldMatrix(!0,!0),s.updateMatrixWorld();let $=new Ii().setFromObject(u),te=[];for(let Ie of[$.min.x,$.max.x])for(let fe of[$.min.y,$.max.y])for(let Ee of[$.min.z,$.max.z])te.push(new G(Ie,fe,Ee).project(s));return{left:Math.min(...te.map(Ie=>Ie.x)),right:Math.max(...te.map(Ie=>Ie.x)),top:Math.max(...te.map(Ie=>Ie.y)),bottom:Math.min(...te.map(Ie=>Ie.y))}}function ye($){let te=r.time,fe=r.concept==="hybrid"?e.arrival:1,Ee=1-Math.exp(-$*1.8);r.x+=(r.tx-r.x)*Ee,r.y+=(r.ty-r.y)*Ee,ge.drag+=Qn.clamp((r.dragRotation-ge.drag)*Ee,-$*.6,$*.6);let Se=(1-Math.cos(te*.48))*.5;u.rotation.y=-.48+r.x*.1+ge.drag+Math.sin(te*.19)*.09+(1-fe)*-.16,u.rotation.x=.1-r.y*.065+Math.sin(te*.23)*.025,u.rotation.z=-.1+Math.sin(te*.16)*.018;for(let Y of R){let le=Y.mode&&Y.mode===r.heroFocus?1:0;Y.highlight+=(le-Y.highlight)*(r.paused?1:1-Math.exp(-$*5)),Y.mesh.position.z=Y.depth*(1+Se*.42+(1-fe)*1.5)+Y.highlight*.28,Y.mesh.position.x=Math.sin(Y.index*.4)*(1-fe)*.3+Y.highlight*.22,Y.mode&&(Y.surface.emissiveIntensity=Y.highlight*.5),Y.mesh.rotation.z=(Y.index-7.5)*(1-fe)*.012}u.scale.setScalar(Q*(.9+fe*.1)),u.position.y=Math.sin(te*.3)*.045-(1-fe)*.1,u.position.x=-.25,H.update($),W()}let Re=new ResizeObserver(Ue);Re.observe(t),t.addEventListener("pointerdown",$=>{r.paused||$.pointerType==="touch"||$.target.closest("a")||(r.dragging=!0,r.dragStart=$.clientX,t.setPointerCapture($.pointerId))}),t.addEventListener("pointermove",$=>{r.dragging&&(r.dragRotation=Qn.clamp(r.dragRotation+($.clientX-r.dragStart)*.002,-.4,.65),r.dragStart=$.clientX)});for(let $ of["pointerup","pointercancel","lostpointercapture"])t.addEventListener($,()=>{r.dragging=!1});return t.classList.add("ready"),t.dataset.renderer="webgl",Ue(),ye(0),{resize:Ue,render:W,frame:ye,bounds:ue,documentStatus:H.status,dispose(){Re.disconnect(),H.dispose(),x.dispose(),M.dispose(),U.dispose();for(let $ of[b,y,E,A,V,...S])$.dispose();v.dispose(),k.dispose(),h.dispose(),n.dispose()}}}var Kl=new G;function Di(r,e,t,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;Kl.copy(e),Kl[n]=0,Kl.normalize();let c=.5*a/(a+o),h=1-Kl.angleTo(r)/l;return Math.sign(Kl[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Qs=class r extends xi{constructor(e=1,t=1,n=1,i=2,s=.1){let a=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new G,c=new G,h=new G(e,t,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,_=new G,m=.5/a;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*s,d[g+1]=h.y*Math.sign(l.y)+c.y*s,d[g+2]=h.z*Math.sign(l.z)+c.z*s,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),u[v+0]=Di(_,c,"z","y",s,n),u[v+1]=1-Di(_,c,"y","z",s,t);break;case 1:_.set(-1,0,0),u[v+0]=1-Di(_,c,"z","y",s,n),u[v+1]=1-Di(_,c,"y","z",s,t);break;case 2:_.set(0,1,0),u[v+0]=1-Di(_,c,"x","z",s,e),u[v+1]=Di(_,c,"z","x",s,n);break;case 3:_.set(0,-1,0),u[v+0]=1-Di(_,c,"x","z",s,e),u[v+1]=1-Di(_,c,"z","x",s,n);break;case 4:_.set(0,0,1),u[v+0]=1-Di(_,c,"x","y",s,e),u[v+1]=1-Di(_,c,"y","x",s,t);break;case 5:_.set(0,0,-1),u[v+0]=Di(_,c,"x","y",s,e),u[v+1]=1-Di(_,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};function j0(){let r=document.querySelector("#study-scene"),e=document.createElement("canvas"),t=e.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"low-power"});if(!t)return r.dataset.renderer="fallback",null;let n=new so({canvas:e,context:t,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(2.5,Math.max(1.72,devicePixelRatio))),n.setClearColor(0,0),n.toneMapping=Ys,n.toneMappingExposure=.92,r.append(e),e.setAttribute("aria-hidden","true");let i=new Pr,s=new _n(33,1,.1,30);s.position.set(0,.8,6.7),s.lookAt(0,0,0);let a=new lo,o=new fs(n),l=o.fromScene(a,.04);i.environment=l.texture,i.environmentIntensity=.65,a.dispose(),o.dispose();let c=new Dr(16771803,3.5);c.position.set(-3,5,5),i.add(c,new Dl(14210540,1578269,.85));let h=new Dr(12694747,4.5);h.position.set(4,2,-1),i.add(h);let d=new Bn;i.add(d);let f=new Ws({color:7828605,metalness:.88,roughness:.23,clearcoat:.35}),u=new sn({color:3420216,roughness:.55,metalness:.35}),p=new sn({color:2105380,roughness:.85}),_=document.createElement("canvas");_.width=_.height=64;let m=_.getContext("2d");m.fillStyle="#414047",m.fillRect(0,0,64,64);for(let te=0;te<64;te+=8)for(let Ie=0;Ie<64;Ie+=8)m.fillStyle="#222126",m.fillRect(Ie,te,3,4),m.fillStyle="#64616a",m.fillRect(Ie+4,te+4,2,3);let g=new Hi(_);g.wrapS=g.wrapT=rs,g.repeat.set(7,11);let v=new sn({color:5591387,map:g,bumpMap:g,bumpScale:.025,roughness:.92});function b(te,Ie,fe=0,Ee=0,Se=0){let Y=new xt(te,Ie);return Y.position.set(fe,Ee,Se),d.add(Y),Y}let y=[];function E(te,Ie,fe,Ee,Se=0,Y="z"){return y.push({object:te,home:te.position.clone(),delta:Ie,start:fe,end:Ee,turn:Se,axis:Y,angle:te.rotation[Y]}),te}let A=(te,Ie,fe)=>new G(te,Ie,fe),x=b(new Qs(1.64,2.56,1.08,6,.18),f);E(x,A(-.14,0,-.34),.03,.35);let M=b(new Qs(1.48,2.36,.13,5,.14),u,0,0,.51);E(M,A(0,0,.46),.18,.42);let R=new sn({color:2434089,roughness:.71,metalness:.2,side:vn}),S=new sn({color:8880522,roughness:.32,metalness:.85});function L(te,Ie,fe,Ee,Se,Y){let le=new xt(te,Ie);return le.position.set(Ee,Se,Y),fe.add(le),le}for(let[te,Ie,fe]of[[.52,.27,.22],[-.3,.45,.27]]){let Ee=new Bn;Ee.position.set(0,te,.568),d.add(Ee);let Se=L(new Sl(Ie,.15,48,1,!0),R,Ee,0,0,-.055);Se.rotation.x=-Math.PI/2,L(new Ka(Ie,.035,8,48),p,Ee,0,0,.008);let Y=L(new Pl(Ie*.29,24,12),u,Ee,0,0,-.022);Y.scale.z=.35,E(Ee,A(0,.03,.85),fe,fe+.24)}for(let[te,[Ie,fe]]of[[-.58,.96],[.58,.96],[-.58,-.96],[.58,-.96]].entries()){let Ee=new Bn;Ee.position.set(Ie,fe,.567),d.add(Ee);let Se=L(new as(.04,.035,.024,14),S,Ee,0,0,0);Se.rotation.x=Math.PI/2,L(new xi(.043,.009,.004),p,Ee,0,0,.013),E(Ee,A(0,0,1.18),.35+te*.025,.55+te*.02,Math.PI*2)}let C=b(new Qs(1.36,2.24,.06,4,.12),v,0,0,.607);L(new Qs(.18,.025,.012,2,.006),S,C,0,-.88,.034),E(C,A(.04,.07,1.66),.47,.72,.055);let O=new Bn;O.position.set(.44,1.315,.08),d.add(O),L(new as(.22,.22,.105,56),f,O,0,0,0);let D=L(new Ka(.19,.009,8,48),u,O,0,.056,0);D.rotation.x=Math.PI/2,L(new xi(.025,.007,.08),p,O,0,.057,.12),E(O,A(0,.61,0),.55,.77,1.1,"y");for(let te of[-.52,.52]){let Ie=b(new as(.12,.12,.07,24),p,te,-1.305,.19);E(Ie,A(0,-.24,0),.19,.43)}let k=new qa({color:12955589,transparent:!0,opacity:.75,depthWrite:!1});for(let te of[x,M,C])te.add(new _l(new Ml(te.geometry,16),k));let V=[f,u,p,v,R,S];for(let te of V)te.transparent=!0;let U=document.createElement("canvas");U.width=U.height=128;let K=U.getContext("2d"),H=K.createRadialGradient(64,64,2,64,64,64);H.addColorStop(0,"#21152560"),H.addColorStop(1,"#21152500"),K.fillStyle=H,K.fillRect(0,0,128,128);let I=new Hi(U),Q=new xt(new yi(4.2,3),new ar({map:I,transparent:!0,depthWrite:!1}));Q.rotation.x=-Math.PI/2,Q.position.y=-1.34,i.add(Q);let ge=!1,Ue=-1,W=0,ue=0;function ye(te=W,Ie=!1){if(W=te,ge||!Ie&&Math.abs(Ue-te)<5e-5)return;Ue=te;let fe=(le,ce)=>Qn.smoothstep(te,le,ce),Ee=fe(.03,.24);k.opacity=(1-fe(.12,.41))*.72;for(let le of V)le.opacity=Ee,le.depthWrite=Ee>.5;for(let le of y){let ce=1-fe(le.start,le.end);le.object.position.copy(le.home).addScaledVector(le.delta,ce),le.object.rotation[le.axis]=le.angle+le.turn*ce}Q.material.opacity=.8*Ee;let Se=fe(.48,.93);d.rotation.set(.07-.045*Se,-1.02+.59*Se,-.025+.014*Se);let Y=fe(.54,.91);c.position.set(-3.4+Y*2.1,5,4.6),s.position.set(0,1.08-.34*Se,8-1.3*Se),s.lookAt(0,.04,.46*(1-Se)),n.render(i,s),ue++}function Re(){let te=r.clientWidth,Ie=r.clientHeight;!te||!Ie||(n.setSize(te,Ie,!1),s.aspect=te/Ie,s.updateProjectionMatrix(),ye(W,!0))}e.addEventListener("webglcontextlost",te=>{te.preventDefault(),ge=!0,r.classList.remove("ready"),r.dataset.renderer="fallback"}),e.addEventListener("webglcontextrestored",()=>{ge=!1,r.classList.add("ready"),r.dataset.renderer="webgl",ye(W,!0)});let $=new ResizeObserver(Re);return $.observe(r),r.classList.add("ready"),r.dataset.renderer="webgl",Re(),{frame:ye,resize:Re,get frames(){return ue},dispose(){$.disconnect(),d.traverse(te=>te.geometry?.dispose());for(let te of[...V,k])te.dispose();Q.geometry.dispose(),Q.material.dispose(),I.dispose(),g.dispose(),l.dispose(),n.dispose()}}}Ht.registerPlugin(it);var De=(r,e=document)=>e.querySelector(r),Dt=(r,e=document)=>[...e.querySelectorAll(r)],ix=matchMedia("(prefers-reduced-motion: reduce)"),Pw=matchMedia("(min-width: 901px)"),Ku={get(r){try{return localStorage.getItem(r)}catch{return null}},set(r,e){try{localStorage.setItem(r,e)}catch{}},remove(r){try{localStorage.removeItem(r)}catch{}}},Bt={concept:"hybrid",paused:ix.matches,time:0,scroll:0,x:0,y:0,tx:0,ty:0,dragging:!1,dragRotation:0,dragStart:0,frames:0,heroVisible:!0};Bt.heroFocus=null;var Yu={arrival:1,beat:0},ps={value:0},ta=null,Qu=!1,Ni=null,Hp=!1,ds=null,rx=!1,fo=[],Wp=new Set,sx=innerWidth<=760,ju=-1,Zu={count:0},Xp=[["const ","speaker"," = new Mesh("],["  body.geometry,"],["  brushedAluminium"],[");"],[""],["scene",".add","(speaker);"],["camera",".lookAt","(speaker.position);"],["renderer",".render","(scene, camera);"]],ex=Xp.flat().join("").length+Xp.length-1,ax=9.86,ox=2.2,lx=6.8,co=ax+.77*lx/ox,js=[{at:0,name:"\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430",caption:"\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u043D\u0443\u0436\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430. \u0412 \u0447\u0430\u0442\u0435 \u0443\u0442\u043E\u0447\u043D\u044F\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0447\u0435\u0440\u0442\u0451\u0436."},{at:4.2,name:"\u041F\u043B\u0430\u043D \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",caption:"\u041D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u043A\u0430\u0436\u0435\u043C \u0441\u0430\u043C\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0443. \u041D\u0438\u0436\u0435 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438."},{at:7.15,name:"\u041F\u0438\u0448\u0443 \u043A\u043E\u0434",caption:"\u0417\u0430\u0434\u0430\u044E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043A\u043E\u0440\u043F\u0443\u0441\u0430, \u0441\u0442\u0430\u0432\u043B\u044E \u043A\u0430\u043C\u0435\u0440\u0443 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0432 \u0441\u0446\u0435\u043D\u0443."},{at:10.1,name:"\u0421\u0431\u043E\u0440\u043A\u0430",caption:"\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0438, \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E \u0438\u0445 \u0440\u0435\u0448\u0451\u0442\u043A\u043E\u0439 \u0438 \u0441\u0442\u0430\u0432\u043B\u044E \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438."},{at:co+1.42,name:"\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",caption:"\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u0441\u0430\u0439\u0442 SONA. \u0422\u0430 \u0436\u0435 \u043A\u043E\u043B\u043E\u043D\u043A\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430, \u0442\u0435\u043F\u0435\u0440\u044C \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435."}],qp=[],tx=-1;function Iw(){let r=De(".code-content"),e=0;Xp.forEach((t,n)=>{n&&(r.append(document.createTextNode("")),qp.push({node:r.lastChild,value:`
`,offset:e++})),t.forEach((i,s)=>{let a=document.createElement("span");a.className=n===0&&s===0?"syntax-keyword":s===1?"syntax-method":"syntax-base",r.append(a),qp.push({node:a,value:i,offset:e}),e+=i.length})})}Iw();var Fr=null,Ju=null,ho=null,cx=null,Ql=!1;function Yp(){return!Bt.paused&&!document.hidden&&!Ql&&!De("dialog[open]")}function Yi(){let r=!Yp();ho&&ho.progress()<1&&ho.paused(r),Ni?.paused(r||!Qu),ds?.paused(r||!rx),fo.forEach((e,t)=>e.paused(r||!Wp.has(t)))}function tf(r=!1,e=!1){let t=Ni?.time()||0,n=fo.map(s=>s.time()),i=e?0:ds?.time()||0;Ju?.revert(),Ju=null,ho=null,Ni=null,ds=null,fo=[],Yu.arrival=1,Yu.beat=0,ps.value=0,ta?.frame(0,!0),Ju=Ht.context(()=>{if(sx=innerWidth<=760,Hp&&(hx(),Ni.time(Bt.paused?Ni.duration():t).pause(),ta?.frame(ps.value,!0)),!Bt.paused){r&&(ho=Ht.timeline({defaults:{ease:"power3.out"}}),ho.from(".hybrid-line",{y:45,opacity:0,stagger:.14,duration:1.2},.1).from(".scene",{opacity:0,duration:1.8},.15).from(Yu,{arrival:0,duration:2.8,ease:"sine.out"},.15).from(".hybrid-intro",{y:24,opacity:0,duration:1},.7).from(".hybrid-actions",{y:18,opacity:0,duration:.9},.85)),ds=Ht.timeline({paused:!0}),Dt(".digit-strip").forEach((s,a)=>{let o=Number(s.dataset.end);ds.fromTo(s,{y:0,yPercent:0},{y:0,yPercent:-o/(o+1)*100,duration:[3.4,3.9,3.65][a],ease:"power2.inOut"},[0,.12,.28][a])}),ds.fromTo(".project-total",{y:18},{y:0,duration:3.6,ease:"power2.out"},0).fromTo(".total-plus",{rotation:-10,y:6},{rotation:0,y:0,duration:3.5,ease:"power2.inOut"},.2).time(i).pause(),Nw(n);for(let s of Dt(".service-item"))Ht.timeline({scrollTrigger:{trigger:s,start:"top 98%",end:"center 65%",scrub:.65}}).from(s,{"--rule-progress":.08,ease:"sine.out",duration:1},0).from(De(".service-art",s),{"--turn":"-46deg","--spread":"12px",y:10,duration:1},0);for(let s of Dt(".process-list li"))Ht.timeline({scrollTrigger:{trigger:s,start:"top 95%",end:"center 65%",scrub:.7}}).from(s,{"--step-progress":.02,duration:1},0).from(De(".step-number",s),{y:16,duration:1},0).from(De("h4",s),{x:11,duration:1},0)}}),Yi()}function Lw(r){if(Bt.paused=r,r)for(let e of Dt(".scroll-arrival"))e.classList.remove("scroll-arrival");document.body.classList.toggle("motion-paused",r),tf(!1,!r),it.refresh(),Fr?.frame(0)}for(let r of Dt("[data-document]")){let e=()=>{Bt.heroFocus=r.dataset.document,Fr?.frame(0)},t=()=>{Bt.heroFocus===r.dataset.document&&(Bt.heroFocus=null),Fr?.frame(0)};r.addEventListener("pointerenter",e),r.addEventListener("pointerleave",()=>{document.activeElement!==r&&t()}),r.addEventListener("focus",e),r.addEventListener("blur",t),r.addEventListener("click",()=>{t(),r.hash&&De(r.hash)?.focus({preventScroll:!0})})}function nx(){let r=Ni?.time()||0,e=js.findLastIndex(n=>r>=n.at);ju!==e&&(ju=e,De(".showcase-stage").dataset.phase=String(e),De("#story-heading").textContent=js[e].name,De("#story-caption").textContent=js[e].caption);let t=Math.floor(Zu.count);if(t!==tx){for(let{node:n,value:i,offset:s}of qp){let a=i.slice(0,Math.max(0,t-s));n.textContent!==a&&(n.textContent=a)}tx=t}Bt.paused&&ta?.frame(ps.value,!0)}function Dw(){let r=De(".film-scenes"),e=De(".drawing-flight"),t=De(".drawing-source"),n=De(".drawing-target");function i(o){let l=o.offsetWidth/2,c=o.offsetHeight/2;for(let h=o;h&&h!==r;h=h.offsetParent)l+=h.offsetLeft,c+=h.offsetTop;return{x:l,y:c}}function s(){let o=i(t),l=i(n);e.style.width=n.offsetWidth+"px",e.style.height=n.offsetHeight+"px",e.style.setProperty("--from-x",o.x+"px"),e.style.setProperty("--from-y",o.y+"px"),e.style.setProperty("--dx",l.x-o.x+"px"),e.style.setProperty("--dy",l.y-o.y+"px"),e.style.setProperty("--start-w",t.offsetWidth/Math.max(1,n.offsetWidth)),e.style.setProperty("--start-h",t.offsetHeight/Math.max(1,n.offsetHeight))}s();let a=new ResizeObserver(s);[r,t,n].forEach(o=>a.observe(o))}function hx(){let[r,e,t,n]=Dt(".film-scene"),i=Ht.timeline({paused:!0,defaults:{ease:"sine.inOut"},onUpdate:nx});Ni=i,ju=-1,Ht.set([e,t,n],{autoAlpha:0,scale:.98,y:10}),Ht.set(r,{autoAlpha:1,scale:1,y:0}),Ht.set(".chat-bubble, .chat-typing, .system-preview, .assembly-drawing, .editor-preview, .drawing-target",{autoAlpha:0}),Ht.set(".drawing-flight",{autoAlpha:0,"--travel":0}),Ht.set(".plan-draw",{clipPath:"inset(0 100% 0 0)"}),Ht.set(".dimension-rule",{scaleX:0}),Ht.set(".model-panel",{xPercent:-51,scale:1.72}),Ht.set(".film-site",{scale:1.02}),Zu.count=0,ps.value=0;let[s,a,o]=Dt(".chat-bubble");function l(d,f){i.fromTo(d,{autoAlpha:0,y:9,scale:.975},{autoAlpha:1,y:0,scale:1,duration:.46,ease:"power2.out",immediateRender:!1},f)}function c(d,f,u){i.to(d,{autoAlpha:0,scale:1.018,y:-8,duration:.72},u-.45).to(f,{autoAlpha:1,scale:1,y:0,duration:.78},u-.36)}for(let d of js.slice(1))i.to(".film-caption",{opacity:0,y:-4,duration:.25},d.at-.25).fromTo(".film-caption",{opacity:0,y:5},{opacity:1,y:0,duration:.37,immediateRender:!1},d.at);i.fromTo(".chat-window",{scale:.94,y:7},{scale:1,y:0,duration:2,ease:"power2.out"},0).fromTo(".film-editor",{rotateZ:-.6,scale:.985},{rotateZ:0,scale:1,duration:1.8,immediateRender:!1},7),l(s,.15),i.to(".chat-typing",{autoAlpha:1,duration:.2},.76).fromTo(".chat-typing i",{y:0},{y:-3,stagger:.08,duration:.21,repeat:1,yoyo:!0},.91).to(".chat-typing",{autoAlpha:0,duration:.2},1.53),l(a,1.65),l(o,2.66),i.to(".drawing-flight",{autoAlpha:1,duration:.18},3.46).to(".drawing-source",{opacity:0,duration:.18},3.47).to(".drawing-flight",{"--travel":1,duration:1.2,ease:"power2.inOut"},3.6),c(r,e,js[1].at),i.to(".drawing-target",{autoAlpha:1,duration:.25},4.76).to(".drawing-flight",{autoAlpha:0,duration:.32},4.8).to(".plan-draw",{clipPath:"inset(0 0% 0 0)",duration:.68,stagger:.22},4.52).to(".dimension-rule",{scaleX:1,duration:.64},5.24).fromTo(".draft-text i",{scaleX:.35,transformOrigin:"left"},{scaleX:1,duration:.55,stagger:.12},5.38),c(e,t,js[2].at),i.to(Zu,{count:ex*.49,duration:.91,ease:"none"},7.37).to(Zu,{count:ex,duration:1.15,ease:"none"},8.44).to(".editor-preview",{autoAlpha:1,duration:.65},8.27).fromTo(".editor-preview .speaker-print",{rotateY:-32},{rotateY:10,duration:1.18},8.58),c(t,n,js[3].at),Ht.set(".fallback-drivers",{xPercent:-17}),Ht.set(".product-fallback i",{xPercent:-72,rotateY:-21,opacity:.52}),Ht.set(".fallback-dial",{yPercent:-240});let h=Ht.timeline({defaults:{ease:"sine.inOut"}});h.fromTo(ps,{value:0},{value:1,duration:lx,ease:"none",immediateRender:!1},0).to(".assembly-drawing",{autoAlpha:1,duration:.68},.56).fromTo(".assembly-drawing span",{yPercent:9,opacity:0},{yPercent:0,opacity:1,stagger:.3,duration:.64},.7).to(".assembly-drawing",{autoAlpha:0,duration:.62},4.42).to(".fallback-drivers",{xPercent:0,duration:1.3},1.44).to(".product-fallback i",{xPercent:0,rotateY:0,opacity:1,duration:1.7},2.94).to(".fallback-dial",{yPercent:0,duration:.95},4.14),i.add(h.timeScale(ox),ax).to(".model-panel",{xPercent:0,scale:1,duration:1.95,ease:"power2.inOut"},co).to(".system-preview",{autoAlpha:1,duration:1.25},co+.45).to(".film-site",{scale:.96,duration:1.64},co+.44).fromTo(".preview-header,.preview-copy,.preview-details > div",{y:7,opacity:0},{y:0,opacity:1,duration:.64,stagger:.15,immediateRender:!1},co+.69).to({},{duration:.8},co+2.57),nx()}De(".story-start").addEventListener("click",()=>{if(!Hp){Hp=!0,De("#story-presentation").hidden=!1,De(".showcase-stage").dataset.story="started",Dw(),De(".story-start").hidden=!0;try{ta=j0()}catch{let r=De("#study-scene");r.classList.remove("ready"),r.dataset.renderer="fallback",De("canvas",r)?.remove()}Ju.add(()=>hx()),Bt.paused&&Ni.progress(1).pause(),De("#studies-title").focus({preventScroll:!0}),Yi()}});De(".story-replay").addEventListener("click",()=>{Ni?.time(0).pause(),Yi()});function Nw(r){fo=Dt(".toolkit-group").map((e,t)=>{let n=De(".toolkit-reel",e),i=Dt("li",e);if(n.childElementCount===1)for(let a of[...i.slice(1),i[0]]){let o=n.firstElementChild.cloneNode(!1);o.textContent=a.textContent,n.append(o)}let s=Ht.timeline({paused:!0,repeat:-1});return s.fromTo(n,{yPercent:0},{yPercent:-100*i.length/n.childElementCount,duration:i.length,ease:"none"}),s.time(r[t]??t*.17)})}ix.addEventListener("change",r=>Lw(r.matches));Pw.addEventListener("change",()=>{po(),tf(!1),it.refresh()});window.addEventListener("resize",()=>{sx!==innerWidth<=760&&(tf(!1),it.refresh())});document.addEventListener("visibilitychange",Yi);function po(r=!1){Ql=!1,De("#mobile-menu").hidden=!0,De(".menu-toggle").setAttribute("aria-expanded","false"),De(".menu-toggle").setAttribute("aria-label","\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.remove("menu-open"),De("#main").inert=!1,De(".site-footer").inert=!1,r&&De(".menu-toggle").focus(),Yi()}De(".menu-toggle").addEventListener("click",()=>{if(Ql){po(!0);return}Ql=!0,De("#mobile-menu").hidden=!1,De(".menu-toggle").setAttribute("aria-expanded","true"),De(".menu-toggle").setAttribute("aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),document.body.classList.add("menu-open"),De("#main").inert=!0,De(".site-footer").inert=!0,De("#mobile-menu a").focus(),Yi()});for(let r of Dt("#mobile-menu a"))r.addEventListener("click",()=>po());document.addEventListener("keydown",r=>{if(Ql&&(r.key==="Escape"&&(r.preventDefault(),po(!0)),r.key==="Tab")){let e=[...Dt(".site-header a,.site-header button"),...Dt("#mobile-menu a")].filter(n=>n.getClientRects().length),t=e.indexOf(document.activeElement);r.shiftKey&&t<=0&&(r.preventDefault(),e.at(-1).focus()),!r.shiftKey&&t===e.length-1&&(r.preventDefault(),e[0].focus())}});function ux(r){let e=document.activeElement;po(),cx=e,r.showModal(),r.scrollTop=0,Yi()}for(let r of Dt('[data-open="brief"]'))r.addEventListener("click",()=>ux(De("#brief-dialog")));for(let r of Dt("[data-scroll]"))r.addEventListener("click",()=>document.getElementById(r.dataset.scroll)?.scrollIntoView({behavior:Bt.paused?"instant":"smooth"}));for(let r of Dt("dialog"))De(".close-dialog",r).addEventListener("click",()=>r.close()),r.addEventListener("close",()=>{Yi(),cx?.focus({preventScroll:!0})}),r.addEventListener("click",e=>{let t=r.getBoundingClientRect();e.target===r&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&r.close()});var ef="alexey-project-draft-v1",fx=Dt('#brief-form input[name="service"]');function dx(){return{services:fx.filter(r=>r.checked).map(r=>r.value),idea:De("#idea").value.trim(),timing:De("#timing").value.trim()}}function Uw(){Ku.set(ef,JSON.stringify(dx()))}try{let r=JSON.parse(Ku.get(ef)||"null");r&&typeof r=="object"&&(fx.forEach(e=>{e.checked=Array.isArray(r.services)&&r.services.includes(e.value)}),typeof r.idea=="string"&&(De("#idea").value=r.idea.slice(0,3e3)),typeof r.timing=="string"&&(De("#timing").value=r.timing.slice(0,150)))}catch{Ku.remove(ef)}De("#brief-form").addEventListener("input",Uw);function px(){let r=dx();return!r.services.length&&!r.idea?(De("#brief-status").textContent="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u043F\u0438\u0448\u0438\u0442\u0435 \u0438\u0434\u0435\u044E.",De("#idea").focus(),null):`\u0410\u043B\u0435\u043A\u0441\u0435\u0439, \u043F\u0440\u0438\u0432\u0435\u0442! \u0425\u043E\u0447\u0443 \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442.

\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: ${r.services.join(", ")||"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043C \u0432\u043C\u0435\u0441\u0442\u0435"}.${r.idea?`

\u0418\u0434\u0435\u044F:
${r.idea}`:""}${r.timing?`

\u0421\u0440\u043E\u043A\u0438: ${r.timing}`:""}`}function mx(r){let e=URL.createObjectURL(new Blob(["\uFEFF"+r],{type:"text/plain;charset=utf-8"})),t=document.createElement("a");t.href=e,t.download="\u041C\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u2014 \u0431\u0440\u0438\u0444 \u0434\u043B\u044F \u0410\u043B\u0435\u043A\u0441\u0435\u044F.txt",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),De("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u0444\u0430\u0439\u043B. \u041C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u044C \u0435\u0433\u043E \u043A \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044E."}De("#brief-form").addEventListener("submit",async r=>{r.preventDefault();let e=px();if(e)try{await navigator.clipboard.writeText(e),De("#brief-status").textContent="\u0411\u0440\u0438\u0444 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D. \u041C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435."}catch{mx(e)}});De(".download-brief").addEventListener("click",()=>{let r=px();r&&mx(r)});De(".clear-draft").addEventListener("click",()=>{De("#brief-form").reset(),Ku.remove(ef),De("#brief-status").textContent="\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u043E\u0447\u0438\u0449\u0435\u043D."});var ea=window.PORTFOLIO_CONTENT&&typeof window.PORTFOLIO_CONTENT=="object"?window.PORTFOLIO_CONTENT:{};function Vp(r,e=!1){if(typeof r!="string"||!r.trim())return null;try{let t=new URL(r,location.href);if(["https:","http:"].includes(t.protocol)||e&&t.protocol==="file:"&&!/^[a-z]+:/i.test(r))return t.href}catch{}return null}function Ow(r,e){let t=document.createElement("a");t.textContent=r,t.href=e,e.startsWith("https:")&&(t.target="_blank",t.rel="noopener noreferrer"),De("#contact-links").append(t),De("#contact-links").hidden=!1}var uo=Jp(ea.telegram);for(let r of Dt("[data-telegram-link]"))r.hidden=!uo,uo?r.href=uo.url:r.removeAttribute("href");De(".contact-invitation").hidden=!uo;De("[data-telegram-label]").textContent=uo?.label??"";for(let r of Dt("[data-without-telegram]"))r.hidden=!!uo;typeof ea.email=="string"&&/^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(ea.email)&&Ow(ea.email,`mailto:${encodeURIComponent(ea.email)}`);var $u=Array.isArray(ea.projects)?ea.projects.filter(r=>r&&typeof r.title=="string"&&r.title.trim()&&typeof r.description=="string"):[];if($u.length){let e=function(n){De("#project-title").textContent=n.title,De(".project-detail-description").textContent=n.description,De(".project-detail-tags").textContent=Array.isArray(n.tags)?n.tags.filter(l=>typeof l=="string").join(" / "):"";let i=De(".project-detail-image"),s=Vp(n.image,!0);i.hidden=!s,s?(i.src=s,i.alt=n.title,i.onerror=()=>{i.hidden=!0}):i.removeAttribute("src");let a=De(".project-detail-link"),o=Vp(n.url);a.hidden=!o,o?a.href=o:a.removeAttribute("href"),ux(De("#project-dialog"))},t=function(n){let i=$u.filter(s=>n==="\u0412\u0441\u0435"||s.category===n);De(".project-grid").replaceChildren();for(let s of i){let a=document.createElement("button");a.className="project-card";let o=Vp(s.image,!0);if(o){let h=document.createElement("img");h.src=o,h.alt=s.title,h.loading="lazy",h.onerror=()=>{h.remove()},a.append(h)}let l=document.createElement("h3");l.textContent=s.title;let c=document.createElement("p");c.textContent=s.category||"\u041F\u0440\u043E\u0435\u043A\u0442",a.append(l,c),a.addEventListener("click",()=>e(s)),De(".project-grid").append(a)}for(let s of Dt(".project-filters button"))s.setAttribute("aria-pressed",String(s.textContent===n));De(".project-count").textContent=`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432: ${i.length}`,it.refresh()};De("#projects").hidden=!1;let r=["\u0412\u0441\u0435",...new Set($u.map(n=>n.category).filter(n=>typeof n=="string"&&n))];for(let n of r){let i=document.createElement("button");i.textContent=n,i.setAttribute("aria-pressed",String(n==="\u0412\u0441\u0435")),i.addEventListener("click",()=>t(n)),De(".project-filters").append(i)}for(let n of Dt(".desktop-nav,#mobile-menu")){let i=document.createElement("a");i.href="#projects",i.textContent="\u0420\u0430\u0431\u043E\u0442\u044B",i.addEventListener("click",()=>po()),n.prepend(i)}t("\u0412\u0441\u0435")}var gx=new IntersectionObserver(r=>{for(let e of r){if(!e.isIntersecting)continue;let{target:t,rootBounds:n,boundingClientRect:i}=e;gx.unobserve(t),t.classList.remove("arrival-pending"),!(!n||Bt.paused||t.matches(":target, :focus-within"))&&i.top>=n.top+n.height*.35&&t.classList.add("scroll-arrival")}},{rootMargin:"0px 0px -64px"}),Fw=document.documentElement.clientHeight;for(let r of Dt(".expertise-intro, .service-item, .collaboration-intro, .questions-list article, #contact-title"))r.getBoundingClientRect().top>=Fw&&(r.classList.add("arrival-pending"),gx.observe(r));var Bw=new IntersectionObserver(r=>{for(let e of r)e.target.classList.toggle("in-view",e.isIntersecting)});Dt(".service-item").forEach(r=>Bw.observe(r));var kw=new IntersectionObserver(r=>{for(let e of r)if(e.isIntersecting)for(let t of Dt(".desktop-nav a"))t.hash==="#"+e.target.id?t.setAttribute("aria-current","location"):t.removeAttribute("aria-current")},{rootMargin:"-20% 0px -60% 0px"});for(let r of Dt("main > section"))r.hidden||kw.observe(r);window.addEventListener("scroll",()=>{De(".site-header").classList.toggle("scrolled",scrollY>30),Bt.paused||(Bt.scroll=Math.min(1,scrollY/innerHeight))},{passive:!0});document.addEventListener("pointermove",r=>{!Yp()||r.pointerType==="touch"||(Bt.tx=r.clientX/innerWidth*2-1,Bt.ty=r.clientY/innerHeight*2-1)},{passive:!0});try{Fr=Q0(Bt,Yu)}catch{De("#scene").classList.remove("ready"),De("#scene").dataset.renderer="fallback",De("#scene canvas")?.remove()}Fr||De("#scene").setAttribute("aria-label","\u0411\u0443\u043A\u0432\u0430 \u0410 \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0441 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u044B");var zw=new IntersectionObserver(([r])=>{Qu=r.isIntersecting&&r.intersectionRatio>=.25,Qu&&ta?.frame(ps.value,!0),Yi()},{threshold:[0,.25]});zw.observe(De(".showcase-stage"));var Gw=new IntersectionObserver(([r])=>{rx=r.isIntersecting&&r.intersectionRatio>=.2,Yi()},{threshold:[0,.2]});Gw.observe(De("#experience"));var _x=Dt(".toolkit-group"),Vw=new IntersectionObserver(r=>{for(let e of r){let t=_x.indexOf(e.target);e.isIntersecting&&e.intersectionRatio>=.15?Wp.add(t):Wp.delete(t)}Yi()},{threshold:[0,.15]});_x.forEach(r=>Vw.observe(r));var Hw=new IntersectionObserver(([r])=>{Bt.heroVisible=r.isIntersecting});Hw.observe(De(".hybrid-hero"));Ht.ticker.add((r,e)=>{Yp()&&(Qu&&ta?.frame(ps.value),Bt.heroVisible&&(Bt.time+=Math.min(e/1e3,.05),Fr?.frame(Math.min(e/1e3,.05))))});document.body.classList.toggle("motion-paused",Bt.paused);tf(!0);document.fonts.ready.then(()=>{Fr?.resize(),it.refresh(),document.documentElement.dataset.ready="true"});Object.defineProperty(window,"portfolioStatus",{value:()=>({paused:Bt.paused,frames:Bt.frames,heroBounds:Fr?.bounds(),documents:Fr?.documentStatus()||[],renderer:De("#scene").dataset.renderer,heroVisible:Bt.heroVisible,projects:$u.length,scrollScenes:it.getAll().length,studyRenderer:De("#study-scene").dataset.renderer,studyProgress:ps.value,studyFrames:ta?.frames||0,storyTime:Ni?.time()||0,storyDuration:Ni?.duration()||0,storyPhase:ju,storyPlaying:Ni?.isActive()||!1,counterTime:ds?.time()||0,counterPlaying:ds?.isActive()||!1,toolkitTimes:fo.map(r=>r.totalTime()),toolkitPlaying:fo.map(r=>r.isActive())})});})();
/*! For license information please see app.js.LEGAL.txt */
