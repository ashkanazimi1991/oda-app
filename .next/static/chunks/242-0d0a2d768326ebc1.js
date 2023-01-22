(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[242],{3454:function(t,e,n){"use strict";var r,i;t.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1263:function(){},7663:function(t){!function(){var e={229:function(t){var e,n,r,i=t.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var u=[],c=!1,l=-1;function h(){c&&r&&(c=!1,r.length?u=r.concat(u):l=-1,u.length&&f())}function f(){if(!c){var t=s(h);c=!0;for(var e=u.length;e;){for(r=u,u=[];++l<e;)r&&r[l].run();l=-1,e=u.length}r=null,c=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new d(t,e)),1!==u.length||c||s(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}},a=!0;try{e[t](o,o.exports,r),a=!1}finally{a&&delete n[t]}return o.exports}r.ab="//";var i=r(229);t.exports=i}()},8623:function(t,e,n){"use strict";n.d(e,{LG:function(){return R}});var r,i=n(7294),o=n(1033),a=n(3454),s={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1}},Back:{In:function(t){return t*t*(2.70158*t-1.70158)},Out:function(t){return--t*t*(2.70158*t+1.70158)+1},InOut:function(t){return(t*=2)<1?.5*(t*t*(3.5949095*t-2.5949095)):.5*((t-=2)*t*(3.5949095*t+2.5949095)+2)}},Bounce:{In:function(t){return 1-s.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*s.Bounce.In(2*t):.5*s.Bounce.Out(2*t-1)+.5}}},u="undefined"==typeof self&&void 0!==a&&a.hrtime?function(){var t=a.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?self.performance.now.bind(self.performance):void 0!==Date.now?Date.now:function(){return new Date().getTime()},c=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},t.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},t.prototype.update=function(t,e){void 0===t&&(t=u()),void 0===e&&(e=!1);var n=Object.keys(this._tweens);if(0===n.length)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var i=this._tweens[n[r]],o=!e;i&&!1===i.update(t,o)&&!e&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),l={Linear:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),o=l.Utils.Linear;return e<0?o(t[0],t[1],r):e>1?o(t[n],t[n-1],n-r):o(t[i],t[i+1>n?n:i+1],r-i)},Bezier:function(t,e){for(var n=0,r=t.length-1,i=Math.pow,o=l.Utils.Bernstein,a=0;a<=r;a++)n+=i(1-e,r-a)*i(e,a)*t[a]*o(r,a);return n},CatmullRom:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),o=l.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(i=Math.floor(r=n*(1+e))),o(t[(i-1+n)%n],t[i],t[(i+1)%n],t[(i+2)%n],r-i)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[n]-(o(t[n],t[n],t[n-1],t[n-1],r-n)-t[n]):o(t[i?i-1:0],t[i],t[n<i+1?n:i+1],t[n<i+2?n:i+2],r-i)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=l.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:(r=[1],function(t){var e=1;if(r[t])return r[t];for(var n=t;n>1;n--)e*=n;return r[t]=e,e}),CatmullRom:function(t,e,n,r,i){var o=(n-t)*.5,a=(r-e)*.5,s=i*i;return(2*e-2*n+o+a)*(i*s)+(-3*e+3*n-2*o-a)*s+o*i+e}}},h=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),f=new c,d=function(){function t(t,e){void 0===e&&(e=f),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=s.Linear.None,this._interpolationFunction=l.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=h.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},t.prototype.duration=function(t){return this._duration=t,this},t.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed)for(var e in this._reversed=!1,this._valuesStartRepeat)this._swapEndStartRepeatValues(e),this._valuesStart[e]=this._valuesStartRepeat[e];return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=void 0!==t?"string"==typeof t?u()+parseFloat(t):t:u(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},t.prototype._setupProperties=function(t,e,n,r){for(var i in n){var o=t[i],a=Array.isArray(o),s=a?"array":typeof o,u=!a&&Array.isArray(n[i]);if("undefined"!==s&&"function"!==s){if(u){var c=n[i];if(0===c.length)continue;c=c.map(this._handleRelativeValue.bind(this,o)),n[i]=[o].concat(c)}if(("object"===s||a)&&o&&!u){for(var l in e[i]=a?[]:{},o)e[i][l]=o[l];r[i]=a?[]:{},this._setupProperties(o,e[i],n[i],r[i])}else void 0===e[i]&&(e[i]=o),a||(e[i]*=1),u?r[i]=n[i].slice().reverse():r[i]=e[i]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying&&(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object)),this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(t){return void 0===t&&(t=u()),this._isPaused||!this._isPlaying||(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this)),this},t.prototype.resume=function(t){return void 0===t&&(t=u()),this._isPaused&&this._isPlaying&&(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this)),this},t.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},t.prototype.group=function(t){return this._group=t,this},t.prototype.delay=function(t){return this._delayTime=t,this},t.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},t.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},t.prototype.yoyo=function(t){return this._yoyo=t,this},t.prototype.easing=function(t){return this._easingFunction=t,this},t.prototype.interpolation=function(t){return this._interpolationFunction=t,this},t.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},t.prototype.onStart=function(t){return this._onStartCallback=t,this},t.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},t.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},t.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},t.prototype.onStop=function(t){return this._onStopCallback=t,this},t.prototype.update=function(t,e){if(void 0===t&&(t=u()),void 0===e&&(e=!0),this._isPaused)return!0;var n,r,i=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>i)return!1;e&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;!1===this._onStartCallbackFired&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(t-this._startTime)/this._duration,r=0===this._duration||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),1===r){if(this._repeat>0){for(n in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat)this._yoyo||"string"!=typeof this._valuesEnd[n]||(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object)}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,s=this._chainedTweens.length;a<s;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}}return!0},t.prototype._updateProperties=function(t,e,n,r){for(var i in n)if(void 0!==e[i]){var o=e[i]||0,a=n[i],s=Array.isArray(t[i]),u=Array.isArray(a);!s&&u?t[i]=this._interpolationFunction(a,r):"object"==typeof a&&a?this._updateProperties(t[i],o,a,r):"number"==typeof(a=this._handleRelativeValue(o,a))&&(t[i]=o+(a-o)*r)}},t.prototype._handleRelativeValue=function(t,e){return"string"!=typeof e?e:"+"===e.charAt(0)||"-"===e.charAt(0)?t+parseFloat(e):parseFloat(e)},t.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];"string"==typeof n?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},t}(),p=h.nextId,v=f.getAll.bind(f),_=f.removeAll.bind(f),y=f.add.bind(f),m=f.remove.bind(f),g=f.update.bind(f),b={Easing:s,Group:c,Interpolation:l,now:u,Sequence:h,nextId:p,Tween:d,VERSION:"18.6.4",getAll:v,removeAll:_,add:y,remove:m,update:g};function w(){return(w=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var E=function(t,e){return e&&e<i.Children.count(t)?e:0},T=function(t,e){if("undefined"!=typeof window&&Array.isArray(e))return e.find(function(e){return e.breakpoint<=t})},O={linear:b.Easing.Linear.None,ease:b.Easing.Quadratic.InOut,"ease-in":b.Easing.Quadratic.In,"ease-out":b.Easing.Quadratic.Out,cubic:b.Easing.Cubic.InOut,"cubic-in":b.Easing.Cubic.In,"cubic-out":b.Easing.Cubic.Out},C=function(t){return t?O[t]:O.linear},M=function(t,e,n){var r=t.prevArrow,o=t.infinite,a=e<=0&&!o,s={"data-type":"prev","aria-label":"Previous Slide",disabled:a,onClick:n};return r?i.cloneElement(r,w({className:(r.props.className||"")+" nav "+(a?"disabled":"")},s)):i.createElement("button",Object.assign({type:"button",className:"nav default-nav "+(a?"disabled":"")},s),i.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},i.createElement("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})))},S=function(t,e,n){var r=t.nextArrow,o=t.infinite,a=t.children,s=1;"slidesToScroll"in t&&(s=t.slidesToScroll||1);var u=e>=i.Children.count(a)-s&&!o,c={"data-type":"next","aria-label":"Next Slide",disabled:u,onClick:n};return r?i.cloneElement(r,w({className:(r.props.className||"")+" nav "+(u?"disabled":"")},c)):i.createElement("button",Object.assign({type:"button",className:"nav default-nav "+(u?"disabled":"")},c),i.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},i.createElement("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})))},k=function(t,e,n,r){var o=t.children,a=t.indicators,s=1;r?s=null==r?void 0:r.settings.slidesToScroll:"slidesToScroll"in t&&(s=t.slidesToScroll||1);var u=Math.ceil(i.Children.count(o)/s);return i.createElement("ul",{className:"indicators"},Array.from({length:u},function(t,r){var o,u={"data-key":r,"aria-label":"Go to slide "+(r+1),onClick:n},c=Math.floor((e+s-1)/s)===r;return"function"==typeof a?(o=a(r),i.cloneElement(o,w({className:o.props.className+" "+(c?"active":""),key:r},u))):i.createElement("li",{key:r},i.createElement("button",Object.assign({type:"button",className:"each-slideshow-indicator "+(c?"active":"")},u)))}))},I={duration:5e3,transitionDuration:1e3,defaultIndex:0,infinite:!0,autoplay:!0,indicators:!1,arrows:!0,pauseOnHover:!0,easing:"linear",canSwipe:!0,cssClass:"",responsive:[]},A=i.forwardRef(function(t,e){var n=(0,i.useState)(E(t.children,t.defaultIndex)),r=n[0],a=n[1],s=(0,i.useRef)(null),u=(0,i.useRef)(null),c=(0,i.useRef)(new b.Group),l=(0,i.useRef)(),h=(0,i.useRef)(),f=(0,i.useMemo)(function(){return i.Children.count(t.children)},[t.children]),d=(0,i.useCallback)(function(){if(u.current&&s.current){var t=s.current.clientWidth;u.current.style.width=t*f+"px";for(var e=0;e<u.current.children.length;e++){var n=u.current.children[e];n&&(n.style.width=t+"px",n.style.left=-(e*t)+"px",n.style.display="block")}}},[s,u,f]),p=(0,i.useCallback)(function(){s.current&&(h.current=new o.default(function(t){t&&d()}),h.current.observe(s.current))},[s,d]),v=(0,i.useCallback)(function(){var e=t.autoplay,n=t.children,o=t.duration,a=t.infinite;e&&i.Children.count(n)>1&&(a||r<i.Children.count(n)-1)&&(l.current=setTimeout(m,o))},[t,r]);(0,i.useEffect)(function(){return p(),function(){c.current.removeAll(),clearTimeout(l.current),_()}},[p,c]),(0,i.useEffect)(function(){clearTimeout(l.current),v()},[r,t.autoplay,v]),(0,i.useEffect)(function(){d()},[f,d]),(0,i.useImperativeHandle)(e,function(){return{goNext:function(){m()},goBack:function(){g()},goTo:function(t,e){null!=e&&e.skipTransition?a(t):I(t)}}});var _=function(){h.current&&s.current&&h.current.unobserve(s.current)},y=function(){t.pauseOnHover&&clearTimeout(l.current)},m=function(){var e=t.children;(t.infinite||r!==i.Children.count(e)-1)&&O((r+1)%i.Children.count(e))},g=function(){var e=t.children;(t.infinite||0!==r)&&O(0===r?i.Children.count(e)-1:r-1)},w=function(t){"prev"===t.currentTarget.dataset.type?g():m()},T=function t(){requestAnimationFrame(t),c.current.update()},O=function(e){if(!c.current.getAll().length){null!=(n=u.current)&&n.children[e]||(e=0),clearTimeout(l.current),T();var n,i=new b.Tween({opacity:0,scale:1},c.current).to({opacity:1,scale:t.scale},t.transitionDuration).onUpdate(function(t){u.current&&(u.current.children[e].style.opacity=t.opacity,u.current.children[r].style.opacity=1-t.opacity,u.current.children[r].style.transform="scale("+t.scale+")")});i.easing(C(t.easing)),i.onStart(function(){"function"==typeof t.onStartChange&&t.onStartChange(r,e)}),i.onComplete(function(){u.current&&(a(e),u.current.children[r].style.transform="scale(1)"),"function"==typeof t.onChange&&t.onChange(r,e)}),i.start()}},I=function(t){t!==r&&O(t)};return i.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},i.createElement("div",{className:"react-slideshow-container "+(t.cssClass||""),onMouseEnter:y,onMouseOver:y,onMouseLeave:function(){var e=t.pauseOnHover,n=t.autoplay,r=t.duration;e&&n&&(l.current=setTimeout(function(){return m()},r))}},t.arrows&&M(t,r,w),i.createElement("div",{className:"react-slideshow-fadezoom-wrapper "+t.cssClass,ref:s},i.createElement("div",{className:"react-slideshow-fadezoom-images-wrap",ref:u},(i.Children.map(t.children,function(t){return t})||[]).map(function(t,e){return i.createElement("div",{style:{opacity:e===r?"1":"0",zIndex:e===r?"1":"0"},"data-index":e,key:e,"aria-roledescription":"slide","aria-hidden":e===r?"false":"true"},t)}))),t.arrows&&S(t,r,w)),t.indicators&&k(t,r,function(t){var e=t.currentTarget;e.dataset.key&&parseInt(e.dataset.key)!==r&&I(parseInt(e.dataset.key))}))});A.defaultProps=I,i.forwardRef(function(t,e){return i.createElement(A,Object.assign({},t,{scale:1,ref:e}))}).defaultProps=I;var R=i.forwardRef(function(t,e){return i.createElement(A,Object.assign({},t,{ref:e}))});R.defaultProps=I,i.forwardRef(function(t,e){var n,r=(0,i.useState)(E(t.children,t.defaultIndex)),a=r[0],s=r[1],u=(0,i.useState)(0),c=u[0],l=u[1],h=(0,i.useRef)(null),f=(0,i.useRef)(null),d=(0,i.useRef)(new b.Group),p=(0,i.useMemo)(function(){return T(c,t.responsive)},[c,t.responsive]),v=(0,i.useMemo)(function(){return p?p.settings.slidesToScroll:t.slidesToScroll||1},[p,t.slidesToScroll]),_=(0,i.useMemo)(function(){return p?p.settings.slidesToShow:t.slidesToShow||1},[p,t.slidesToShow]),y=(0,i.useMemo)(function(){return i.Children.count(t.children)},[t.children]),m=(0,i.useMemo)(function(){return c/_},[c,_]),g=(0,i.useRef)(),w=(0,i.useRef)(),O=!1,I=0,A=(0,i.useCallback)(function(){if(f.current){var t=c*f.current.children.length;f.current.style.width=t+"px";for(var e=0;e<f.current.children.length;e++){var n=f.current.children[e];n&&(n.style.width=m+"px",n.style.display="block")}}},[c,m]),R=(0,i.useCallback)(function(){h.current&&(w.current=new o.default(function(t){t&&z()}),w.current.observe(h.current))},[h]),x=(0,i.useCallback)(function(){var e=t.autoplay,n=t.infinite,r=t.duration;e&&(n||a<y-1)&&(g.current=setTimeout(D,r))},[t,y,a]);(0,i.useEffect)(function(){A()},[c,A]),(0,i.useEffect)(function(){return R(),function(){d.current.removeAll(),clearTimeout(g.current),P()}},[h,R,d]),(0,i.useEffect)(function(){clearTimeout(g.current),x()},[a,c,t.autoplay,x]),(0,i.useImperativeHandle)(e,function(){return{goNext:function(){D()},goBack:function(){F()},goTo:function(t,e){null!=e&&e.skipTransition?s(t):L(t)}}});var P=function(){w&&h.current&&w.current.unobserve(h.current)},j=function(){t.pauseOnHover&&clearTimeout(g.current)},N=function(e){if(t.canSwipe&&O){var r;if(window.TouchEvent&&e.nativeEvent instanceof TouchEvent?r=e.nativeEvent.touches[0].pageX:e.nativeEvent instanceof MouseEvent&&(r=e.nativeEvent.clientX),r&&n){var i=m*(a+W()),o=r-n;if(!t.infinite&&a===y-v&&o<0||!t.infinite&&0===a&&o>0)return;i-=I=o,f.current.style.transform="translate(-"+i+"px)"}}},D=function(){(t.infinite||a!==y-v)&&G(U(a+v))},F=function(){if(t.infinite||0!==a){var e=a-v;e%v&&(e=Math.ceil(e/v)*v),G(e)}},L=function(t){G(U(t))},U=function(t){return t<y&&t+v>y&&(y-v)%v?y-v:t},B=function(t){"next"===t.currentTarget.dataset.type?D():F()},z=function(){h.current&&l(h.current.clientWidth)},q=function(e){t.canSwipe&&(window.TouchEvent&&e.nativeEvent instanceof TouchEvent?n=e.nativeEvent.touches[0].pageX:e.nativeEvent instanceof MouseEvent&&(n=e.nativeEvent.clientX),clearTimeout(g.current),O=!0)},H=function(){t.canSwipe&&(O=!1,Math.abs(I)/c>.2?I<0?D():F():Math.abs(I)>0&&G(a,300))},V=function t(){requestAnimationFrame(t),d.current.update()},G=function(e,n){var r=n||t.transitionDuration,i=d.current.getAll();if(h.current){var o=h.current.clientWidth/_;if(!i.length){clearTimeout(g.current);var u={margin:-o*(a+W())+I},c=new b.Tween(u,d.current).to({margin:-o*(e+W())},r).onUpdate(function(t){f.current&&(f.current.style.transform="translate("+t.margin+"px)")});c.easing(C(t.easing)),V();var l=e;l<0?l=y-v:l>=y&&(l=0),c.onStart(function(){"function"==typeof t.onStartChange&&t.onStartChange(a,l)}),c.onComplete(function(){I=0,"function"==typeof t.onChange&&t.onChange(a,l),s(l)}),c.start()}}},W=function(){return t.infinite?_:0},Q={transform:"translate(-"+(a+W())*m+"px)"};return i.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},i.createElement("div",{className:"react-slideshow-container",onMouseEnter:j,onMouseOver:j,onMouseLeave:function(){O?H():t.pauseOnHover&&t.autoplay&&(g.current=setTimeout(D,t.duration))},onMouseDown:q,onMouseUp:H,onMouseMove:N,onTouchStart:q,onTouchEnd:H,onTouchCancel:H,onTouchMove:N},t.arrows&&M(t,a,B),i.createElement("div",{className:"react-slideshow-wrapper slide "+(t.cssClass||""),ref:h},i.createElement("div",{className:"images-wrap",style:Q,ref:f},t.infinite&&i.Children.toArray(t.children).slice(-_).map(function(t,e){return i.createElement("div",{"data-index":e-_,"aria-roledescription":"slide","aria-hidden":"true",key:e-_},t)}),(i.Children.map(t.children,function(t){return t})||[]).map(function(t,e){var n=e<a+_&&e>=a;return i.createElement("div",{"data-index":e,key:e,className:n?"active":"","aria-roledescription":"slide","aria-hidden":n?"false":"true"},t)}),function(){if(t.infinite||_!==v)return i.Children.toArray(t.children).slice(0,_).map(function(t,e){return i.createElement("div",{"data-index":y+e,"aria-roledescription":"slide","aria-hidden":"true",key:y+e},t)})}())),t.arrows&&S(t,a,B)),t.indicators&&k(t,a,function(t){var e=t.currentTarget;e.dataset.key&&L(parseInt(e.dataset.key)*v)},p))}).defaultProps=I},1033:function(t,e,n){"use strict";n.r(e);var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},s=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,c=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&u()}function s(){a(o)}function u(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,20);i=t}return u}(this.refresh.bind(this),0)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),l=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},h=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},f=_(0,0,0,0);function d(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+d(t["border-"+n+"-width"])},0)}var v="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof h(t).SVGGraphicsElement}:function(t){return t instanceof h(t).SVGElement&&"function"==typeof t.getBBox};function _(t,e,n,r){return{x:t,y:e,width:n,height:r}}var y=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=_(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=function(t){if(!i)return f;if(v(t)){var e;return _(0,0,(e=t.getBBox()).width,e.height)}return function(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return f;var r=h(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=d(o)}return e}(r),o=i.left+i.right,a=i.top+i.bottom,s=d(r.width),u=d(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==e&&(s-=p(r,"left","right")+o),Math.round(u+a)!==n&&(u-=p(r,"top","bottom")+a)),t!==h(t).document.documentElement){var c=Math.round(s+o)-e,l=Math.round(u+a)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(l)&&(u-=l)}return _(i.left,i.top,s,u)}(t)}(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),m=function(t,e){var n,r,i,o,a,s=(n=e.x,r=e.y,i=e.width,o=e.height,l(a=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:r,width:i,height:o,top:r,right:n+i,bottom:o+r,left:n}),a);l(this,{target:t,contentRect:s})},g=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new m(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),b="undefined"!=typeof WeakMap?new WeakMap:new r,w=function t(e){if(!(this instanceof t))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new g(e,n,this);b.set(this,r)};["observe","unobserve","disconnect"].forEach(function(t){w.prototype[t]=function(){var e;return(e=b.get(this))[t].apply(e,arguments)}});var E=void 0!==o.ResizeObserver?o.ResizeObserver:w;e.default=E}}]);