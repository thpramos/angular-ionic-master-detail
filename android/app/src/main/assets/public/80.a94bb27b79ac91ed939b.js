(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{QQAu:function(e,t,n){"use strict";n.r(t),n.d(t,"IonNav",function(){return l});var i=n("cBjU"),r=n("1p+f"),o=(n("exFm"),n("o2Vi")),s=function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}u((i=i.apply(e,t||[])).next())})},a=function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=i[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},u=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return s(this,void 0,void 0,function(){var t,n;return a(this,function(i){switch(i.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(r.a)(this.delegate,e,t,["ion-page","hide-page"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}();function h(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params,r=null==i,o=null==n;if(r!==o)return!1;if(r&&o)return!0;var s=Object.keys(i),a=Object.keys(n);if(s.length!==a.length)return!1;for(var u=0;u<s.length;u++){var h=s[u];if(i[h]!==n[h])return!1}return!0}function c(e,t){return e?e instanceof u?e:new u(e,t):null}var l=function(){function e(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[]}return e.prototype.rootChanged=function(){this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeBackEnabled&&(this.swipeBackEnabled=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),void 0===this.animated&&(this.animated=this.config.getBoolean("animate",!0)),this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){this.rootChanged()},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(o.a)(this.win,n.element,"ionViewWillUnload"),n._destroy()}this.sbTrns&&this.sbTrns.destroy(),this.transInstr.length=this.views.length=0,this.sbTrns=void 0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return e instanceof u?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)},e.prototype.setPages=function(e,t,n){return t||(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var i,r=this,o=this.getActive();if(h(o,e,t))return Promise.resolve({changed:!1,element:o.element});var u,c=new Promise(function(e){return i=e}),l={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return i({changed:!0,element:e,markVisible:function(){return s(r,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return t(),[4,u];case 1:return e.sent(),[2]}})})}}),n}};if(0===n)u=this.setRoot(e,t,l);else{var p=this.views.find(function(n){return h(n,e,t)});p?u=this.popTo(p,Object.assign({},l,{direction:"back"})):1===n?u=this.push(e,t,l):-1===n&&(u=this.setRoot(e,t,Object.assign({},l,{direction:"back",animated:!0})))}return c},e.prototype.getRouteId=function(){var e=this.getActive();return e?{id:e.element.tagName,params:e.params,element:e.element}:void 0},e.prototype.canGoBack=function(e){return void 0===e&&(e=this.getActive()),!(!e||!this.getPrevious(e))},e.prototype.getActive=function(){return this.views[this.views.length-1]},e.prototype.getByIndex=function(e){return this.views[e]},e.prototype.getPrevious=function(e){if(void 0===e&&(e=this.getActive()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.length=function(){return this.views.length},e.prototype.queueTrns=function(e,t){var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(null!==this.transInstr){if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?-1:1)}}else this.fireError("nav controller was destroyed",t)},e.prototype.failed=function(e,t){null!==this.transInstr?(this.transInstr.length=0,this.fireError(e,t)):this.fireError("nav controller was destroyed",t)},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return s(this,void 0,void 0,function(){var t,n,i,r;return a(this,function(o){switch(o.label){case 0:if(o.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActive(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&1===n.state?[4,n.init(this.el)]:[3,2];case 1:o.sent(),o.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return i=o.sent(),[3,5];case 4:i={hasCompleted:!0,requiresTransition:!1},o.label=5;case 5:return this.success(i,e),this.ionNavDidChange.emit(),[3,7];case 6:return r=o.sent(),this.failed(r,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),null!=e.removeView){var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}null!=e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){var r=i.map(function(e){return e instanceof u?e:"page"in e?c(e.page,e.params):c(e,void 0)}).filter(function(e){return null!==e});if(0===r.length)throw new Error("invalid views to insert");for(var o=0,s=r;o<s.length;o++){var a=s[o];a.delegate=e.opts.delegate;var h=a.nav;if(h&&h!==this)throw new Error("inserted view was already inserted");if(3===a.state)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(n)return n[n.length-1];var i=e.removeStart;if(null!=i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){var i=n.opts,r=n.insertViews,s=n.removeStart,a=n.removeCount,u=void 0;if(null!=s&&null!=a){u=[];for(var h=0;h<a;h++)(d=this.views[h+s])&&d!==e&&d!==t&&u.push(d);i.direction=i.direction||"back"}if(0==this.views.length+(r?r.length:0)-(a||0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(r){for(var c=n.insertStart,l=0,p=r;l<p.length;l++){var d=p[l];this.insertViewAt(d,c),c++}n.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(u&&u.length>0){for(var v=0,f=u;v<f.length;v++)d=f[v],Object(o.a)(this.win,d.element,"ionViewWillLeave"),Object(o.a)(this.win,d.element,"ionViewDidLeave"),Object(o.a)(this.win,d.element,"ionViewWillUnload");for(var m=0,w=u;m<w.length;m++)this.destroyView(d=w[m])}},e.prototype.transition=function(e,t,n){return s(this,void 0,void 0,function(){var i,r,s,u,h,c,l=this;return a(this,function(a){switch(a.label){case 0:return this.sbTrns&&(this.sbTrns.destroy(),this.sbTrns=void 0),r=(i=n.opts).progressAnimation?function(e){l.sbTrns=e}:void 0,s=e.element,u=t&&t.element,h=Object.assign({mode:this.mode,animated:this.animated,showGoBack:this.canGoBack(e),animationCtrl:this.animationCtrl,progressCallback:r,window:this.win,baseEl:this.el,enteringEl:s,leavingEl:u},i),[4,Object(o.b)(h)];case 1:return c=a.sent(),[2,this.transitionFinish(c,e,t,i)]}})})},e.prototype.transitionFinish=function(e,t,n,i){var r=!e||e.hasCompleted,o=r?t:n;return o&&this.cleanup(o),e&&e.destroy(),{hasCompleted:r,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?n.splice(t,0,n.splice(i,1)[0]):(e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){var t=this.views,n=t.indexOf(e);n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i];i>n?(Object(o.a)(this.win,r.element,"ionViewWillUnload"),this.destroyView(r)):i<n&&(r.element.hidden=!0)}},e.prototype.swipeBackStart=function(){this.isTransitioning||this.transInstr.length>0||this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.swipeBackProgress=function(e){this.sbTrns&&(this.isTransitioning=!0,this.sbTrns.progressStep(e.deltaX/this.win.innerWidth))},e.prototype.swipeBackEnd=function(e){if(this.sbTrns){var t=this.win.innerWidth,n=e.deltaX/t,i=e.velocityX,r=i>=0&&(i>.2||e.deltaX>t/2),o=(r?1-n:n)*t,s=0;if(o>5){var a=o/Math.abs(i);s=Math.min(a,300)}this.sbTrns.progressEnd(r,n,s)}},e.prototype.canSwipeBack=function(){return!!this.swipeBackEnabled&&!this.isTransitioning&&this.canGoBack()},e.prototype.render=function(){return[this.swipeBackEnabled&&Object(i.b)("ion-gesture",{canStart:this.canSwipeBack.bind(this),onStart:this.swipeBackStart.bind(this),onMove:this.swipeBackProgress.bind(this),onEnd:this.swipeBackEnd.bind(this),gestureName:"goback-swipe",gesturePriority:10,direction:"x",threshold:10,attachTo:"body"}),"ios"===this.mode&&Object(i.b)("div",{class:"nav-decor"}),Object(i.b)("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated",mutable:!0},animationCtrl:{connect:"ion-animation-controller"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},length:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeBackEnabled:{type:Boolean,attr:"swipe-back-enabled",mutable:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}()}}]);