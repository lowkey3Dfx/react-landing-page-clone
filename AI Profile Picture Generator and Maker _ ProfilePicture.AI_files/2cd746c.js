(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{793:function(e,n,t){!function(e){"use strict";var n,t,i,r,o,a=-1,c=function(e){addEventListener("pageshow",(function(n){n.persisted&&(a=n.timeStamp,e(n))}),!0)},u=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},f=function(){var e=u();return e&&e.activationStart||0},s=function(e,n){var t=u(),i="navigate";return a>=0?i="back-forward-cache":t&&(i=document.prerendering||f()>0?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},d=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var i=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return i.observe(Object.assign({type:e,buffered:!0},t||{})),i}}catch(e){}},l=function(e,n,t,i){var r,o;return function(a){n.value>=0&&(a||i)&&((o=n.value-(r||0))||void 0===r)&&(r=n.value,n.delta=o,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},p=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},v=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},m=function(e){var n=!1;return function(t){n||(e(t),n=!0)}},h=-1,g=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(e){"hidden"===document.visibilityState&&h>-1&&(h="visibilitychange"===e.type?e.timeStamp:0,E())},T=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},E=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},C=function(){return h<0&&(h=g(),T(),c((function(){setTimeout((function(){h=g(),T()}),0)}))),{get firstHiddenTime(){return h}}},b=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},w=function(e,n){n=n||{},b((function(){var t,i=[1800,3e3],r=C(),o=s("FCP"),a=d("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(a.disconnect(),e.startTime<r.firstHiddenTime&&(o.value=Math.max(e.startTime-f(),0),o.entries.push(e),t(!0)))}))}));a&&(t=l(e,o,i,n.reportAllChanges),c((function(r){o=s("FCP"),t=l(e,o,i,n.reportAllChanges),p((function(){o.value=performance.now()-r.timeStamp,t(!0)}))})))}))},L=function(e,n){n=n||{},w(m((function(){var t,i=[.1,.25],r=s("CLS",0),o=0,a=[],u=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=a[0],t=a[a.length-1];o&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(o+=e.value,a.push(e)):(o=e.value,a=[e])}})),o>r.value&&(r.value=o,r.entries=a,t())},f=d("layout-shift",u);f&&(t=l(e,r,i,n.reportAllChanges),v((function(){u(f.takeRecords()),t(!0)})),c((function(){o=0,r=s("CLS",0),t=l(e,r,i,n.reportAllChanges),p((function(){return t()}))})),setTimeout(t,0))})))},S={passive:!0,capture:!0},P=new Date,I=function(e,r){n||(n=r,t=e,i=new Date,M(removeEventListener),A())},A=function(){if(t>=0&&t<i-P){var e={entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+t};r.forEach((function(n){n(e)})),r=[]}},F=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){I(e,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",t,S),removeEventListener("pointercancel",i,S)};addEventListener("pointerup",t,S),addEventListener("pointercancel",i,S)}(n,e):I(n,e)}},M=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,F,S)}))},k=function(e,i){i=i||{},b((function(){var o,a=[100,300],u=C(),f=s("FID"),p=function(e){e.startTime<u.firstHiddenTime&&(f.value=e.processingStart-e.startTime,f.entries.push(e),o(!0))},h=function(e){e.forEach(p)},g=d("first-input",h);o=l(e,f,a,i.reportAllChanges),g&&v(m((function(){h(g.takeRecords()),g.disconnect()}))),g&&c((function(){var c;f=s("FID"),o=l(e,f,a,i.reportAllChanges),r=[],t=-1,n=null,M(addEventListener),c=p,r.push(c),A()}))}))},D=0,B=1/0,x=0,R=function(e){e.forEach((function(e){e.interactionId&&(B=Math.min(B,e.interactionId),x=Math.max(x,e.interactionId),D=x?(x-B)/7+1:0)}))},H=function(){return o?D:performance.interactionCount||0},N=function(){"interactionCount"in performance||o||(o=d("event",R,{type:"event",buffered:!0,durationThreshold:0}))},O=0,_=function(){return H()-O},j=[],q={},J=function(e){var n=j[j.length-1],t=q[e.interactionId];if(t||j.length<10||e.duration>n.latency){if(t)t.entries.push(e),t.latency=Math.max(t.latency,e.duration);else{var i={id:e.interactionId,latency:e.duration,entries:[e]};q[i.id]=i,j.push(i)}j.sort((function(e,n){return n.latency-e.latency})),j.splice(10).forEach((function(e){delete q[e.id]}))}},z=function(e,n){n=n||{},b((function(){var t=[200,500];N();var i,r=s("INP"),o=function(e){e.forEach((function(e){e.interactionId&&J(e),"first-input"===e.entryType&&!j.some((function(n){return n.entries.some((function(n){return e.duration===n.duration&&e.startTime===n.startTime}))}))&&J(e)}));var n,t=(n=Math.min(j.length-1,Math.floor(_()/50)),j[n]);t&&t.latency!==r.value&&(r.value=t.latency,r.entries=t.entries,i())},a=d("event",o,{durationThreshold:n.durationThreshold||40});i=l(e,r,t,n.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),v((function(){o(a.takeRecords()),r.value<0&&_()>0&&(r.value=0,r.entries=[]),i(!0)})),c((function(){j=[],O=H(),r=s("INP"),i=l(e,r,t,n.reportAllChanges)})))}))},G={},K=function(e,n){n=n||{},b((function(){var t,i=[2500,4e3],r=C(),o=s("LCP"),a=function(e){var n=e[e.length-1];if(n){var i=Math.max(n.startTime-f(),0);i<r.firstHiddenTime&&(o.value=i,o.entries=[n],t())}},u=d("largest-contentful-paint",a);if(u){t=l(e,o,i,n.reportAllChanges);var h=m((function(){G[o.id]||(a(u.takeRecords()),u.disconnect(),G[o.id]=!0,t(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,h,!0)})),v(h),c((function(r){o=s("LCP"),t=l(e,o,i,n.reportAllChanges),p((function(){o.value=performance.now()-r.timeStamp,G[o.id]=!0,t(!0)}))}))}}))},Q=function e(n){document.prerendering?b((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},U=function(e,n){n=n||{};var t=[800,1800],i=s("TTFB"),r=l(e,i,t,n.reportAllChanges);Q((function(){var o=u();if(o){var a=o.responseStart;if(a<=0||a>performance.now())return;i.value=Math.max(a-f(),0),i.entries=[o],r(!0),c((function(){i=s("TTFB",0),(r=l(e,i,t,n.reportAllChanges))(!0)}))}}))};e.getCLS=L,e.getFCP=w,e.getFID=k,e.getINP=z,e.getLCP=K,e.getTTFB=U,e.onCLS=L,e.onFCP=w,e.onFID=k,e.onINP=z,e.onLCP=K,e.onTTFB=U,Object.defineProperty(e,"__esModule",{value:!0})}(n)}}]);