define("app",["require","exports"],function(e,n){"use strict";var t=function(){function e(){}return e.prototype.configureRouter=function(e,n){e.title="Aurelia",e.options.pushState=!0,e.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=n},e}();n.App=t});var __decorate=this&&this.__decorate||function(e,n,t,a){var r,i=arguments.length,o=i<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(i<3?r(o):i>3?r(n,t,o):r(n,t))||o);return i>3&&o&&Object.defineProperty(n,t,o),o},__metadata=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};define("blur-image",["require","exports","aurelia-framework"],function(e,n,t){"use strict";function a(e,n,t,a,i,o){if(!(isNaN(o)||o<1)){o|=0;var u,c=e.getContext("2d");try{u=c.getImageData(n,t,a,i)}catch(e){throw new Error("unable to access image data: "+e)}var f,d,p,m,h,v,b,g,x,w,y,_,R,N,C,q,k,I,j,$,A,F,O,P,D=u.data,U=o+o+1,z=a-1,V=i-1,W=o+1,G=W*(W+1)/2,S=new r,T=S;for(p=1;p<U;p++)if(T=T.next=new r,p==W)var E=T;T.next=S;var H=null,B=null;b=v=0;var L=s[o],J=l[o];for(d=0;d<i;d++){for(q=k=I=j=g=x=w=y=0,_=W*($=D[v]),R=W*(A=D[v+1]),N=W*(F=D[v+2]),C=W*(O=D[v+3]),g+=G*$,x+=G*A,w+=G*F,y+=G*O,T=S,p=0;p<W;p++)T.r=$,T.g=A,T.b=F,T.a=O,T=T.next;for(p=1;p<W;p++)m=v+((z<p?z:p)<<2),g+=(T.r=$=D[m])*(P=W-p),x+=(T.g=A=D[m+1])*P,w+=(T.b=F=D[m+2])*P,y+=(T.a=O=D[m+3])*P,q+=$,k+=A,I+=F,j+=O,T=T.next;for(H=S,B=E,f=0;f<a;f++)D[v+3]=O=y*L>>J,0!=O?(O=255/O,D[v]=(g*L>>J)*O,D[v+1]=(x*L>>J)*O,D[v+2]=(w*L>>J)*O):D[v]=D[v+1]=D[v+2]=0,g-=_,x-=R,w-=N,y-=C,_-=H.r,R-=H.g,N-=H.b,C-=H.a,m=b+((m=f+o+1)<z?m:z)<<2,q+=H.r=D[m],k+=H.g=D[m+1],I+=H.b=D[m+2],j+=H.a=D[m+3],g+=q,x+=k,w+=I,y+=j,H=H.next,_+=$=B.r,R+=A=B.g,N+=F=B.b,C+=O=B.a,q-=$,k-=A,I-=F,j-=O,B=B.next,v+=4;b+=a}for(f=0;f<a;f++){for(k=I=j=q=x=w=y=g=0,v=f<<2,_=W*($=D[v]),R=W*(A=D[v+1]),N=W*(F=D[v+2]),C=W*(O=D[v+3]),g+=G*$,x+=G*A,w+=G*F,y+=G*O,T=S,p=0;p<W;p++)T.r=$,T.g=A,T.b=F,T.a=O,T=T.next;for(h=a,p=1;p<=o;p++)v=h+f<<2,g+=(T.r=$=D[v])*(P=W-p),x+=(T.g=A=D[v+1])*P,w+=(T.b=F=D[v+2])*P,y+=(T.a=O=D[v+3])*P,q+=$,k+=A,I+=F,j+=O,T=T.next,p<V&&(h+=a);for(v=f,H=S,B=E,d=0;d<i;d++)m=v<<2,D[m+3]=O=y*L>>J,O>0?(O=255/O,D[m]=(g*L>>J)*O,D[m+1]=(x*L>>J)*O,D[m+2]=(w*L>>J)*O):D[m]=D[m+1]=D[m+2]=0,g-=_,x-=R,w-=N,y-=C,_-=H.r,R-=H.g,N-=H.b,C-=H.a,m=f+((m=d+W)<V?m:V)*a<<2,g+=q+=H.r=D[m],x+=k+=H.g=D[m+1],w+=I+=H.b=D[m+2],y+=j+=H.a=D[m+3],H=H.next,_+=$=B.r,R+=A=B.g,N+=F=B.b,C+=O=B.a,q-=$,k-=A,I-=F,j-=O,B=B.next,v+=a}c.putImageData(u,n,t)}}function r(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function i(e,n){var t=e.width,r=e.height,i=e.getContext("2d");i.drawImage(n,0,0,t,r),a(e,0,0,t,r,u)}var o=function(){function e(e){this.element=e,this.element=e}return e.prototype.valueChanged=function(e){var n=this;e.complete?i(this.element,e):e.onload=function(){return i(n.element,e)}},e}();o=__decorate([t.autoinject,__metadata("design:paramtypes",[Element])],o),n.BlurImageCustomAttribute=o;var s=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],l=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],u=40}),define("child-router",["require","exports"],function(e,n){"use strict";var t=function(){function e(){this.heading="Child Router"}return e.prototype.configureRouter=function(e,n){e.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=n},e}();n.ChildRouter=t}),define("environment",["require","exports"],function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={debug:!1,testing:!1}}),define("main",["require","exports","./environment"],function(e,n,t){"use strict";function a(e){e.use.standardConfiguration().feature("resources").plugin("aurelia-animator-css"),t.default.debug&&e.use.developmentLogging(),t.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}Promise.config({longStackTraces:t.default.debug,warnings:{wForgottenReturn:!1}}),n.configure=a});var __decorate=this&&this.__decorate||function(e,n,t,a){var r,i=arguments.length,o=i<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(i<3?r(o):i>3?r(n,t,o):r(n,t))||o);return i>3&&o&&Object.defineProperty(n,t,o),o},__metadata=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},__awaiter=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))(function(r,i){function o(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new t(function(n){n(e.value)}).then(o,s)}l((a=a.apply(e,n)).next())})},__generator=this&&this.__generator||function(e,n){function t(e){return function(n){return a([e,n])}}function a(t){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,i&&(o=i[2&t[0]?"return":t[0]?"throw":"next"])&&!(o=o.call(i,t[1])).done)return o;switch(i=0,o&&(t=[0,o.value]),t[0]){case 0:case 1:o=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(o=s.trys,!(o=o.length>0&&o[o.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3])){s.label=t[1];break}if(6===t[0]&&s.label<o[1]){s.label=o[1],o=t;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(t);break}o[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(e,s)}catch(e){t=[6,e],i=0}finally{r=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}var r,i,o,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return{next:t(0),throw:t(1),return:t(2)}};define("users",["require","exports","aurelia-framework","aurelia-fetch-client"],function(e,n,t,a){"use strict";var r=function(){function e(e){this.http=e,this.heading="Github Users",this.users=[],e.configure(function(e){e.useStandardConfiguration().withBaseUrl("https://api.github.com/")})}return e.prototype.activate=function(){return __awaiter(this,void 0,void 0,function(){var e,n;return __generator(this,function(t){switch(t.label){case 0:return[4,this.http.fetch("users")];case 1:return e=t.sent(),n=this,[4,e.json()];case 2:return n.users=t.sent(),[2]}})})},e}();r=__decorate([t.autoinject,__metadata("design:paramtypes",[a.HttpClient])],r),n.Users=r}),define("welcome",["require","exports"],function(e,n){"use strict";var t=function(){function e(){this.heading="Welcome to the Aurelia Navigation App!",this.firstName="John",this.lastName="Doe",this.previousValue=this.fullName}return Object.defineProperty(e.prototype,"fullName",{get:function(){return this.firstName+" "+this.lastName},enumerable:!0,configurable:!0}),e.prototype.submit=function(){this.previousValue=this.fullName,alert("Welcome, "+this.fullName+"!")},e.prototype.canDeactivate=function(){if(this.fullName!==this.previousValue)return confirm("Are you sure you want to leave?")},e}();n.Welcome=t;var a=function(){function e(){}return e.prototype.toView=function(e){return e&&e.toUpperCase()},e}();n.UpperValueConverter=a}),define("resources/index",["require","exports"],function(e,n){"use strict";function t(e){}n.configure=t}),define("text!app.html",["module"],function(e){e.exports='<template>\n  <require from="nav-bar.html"></require>\n  <require from="bootstrap/css/bootstrap.css"></require>\n  <require from="./styles.css"></require>\n\n  <nav-bar router.bind="router"></nav-bar>\n\n  <div class="page-host">\n    <router-view></router-view>\n  </div>\n</template>\n'}),define("text!styles.css",["module"],function(e){e.exports='body {\n  margin: 0;\n}\n\n.splash {\n  text-align: center;\n  margin: 10% 0 0 0;\n  box-sizing: border-box;\n  display: block !important;\n}\n\n.splash .message {\n  font-size: 72px;\n  line-height: 72px;\n  text-shadow: rgba(0, 0, 0, 0.5) 0 0 15px;\n  text-transform: uppercase;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\n.splash .fa-spinner {\n  text-align: center;\n  display: inline-block;\n  font-size: 72px;\n  margin-top: 50px;\n}\n\n.page-host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n@media print {\n  .page-host {\n    position: absolute;\n    left: 10px;\n    right: 0;\n    top: 50px;\n    bottom: 0;\n    overflow-y: inherit;\n    overflow-x: inherit;\n  }\n}\n\nsection {\n  margin: 0 20px;\n}\n\n.navbar-nav li.loader {\n  margin: 12px 24px 0 6px;\n}\n\n.pictureDetail {\n  max-width: 425px;\n}\n\n/* animate page transitions */\nsection.au-enter-active {\n  animation: fadeInRight 1s;\n}\n\ndiv.au-stagger {\n  /* 50ms will be applied between each successive enter operation */\n  animation-delay: 50ms;\n}\n\n.card-container.au-enter {\n  opacity: 0 !important;\n}\n\n.card-container.au-enter-active {\n  animation: fadeIn 2s;\n}\n\n.card {\n  overflow: hidden;\n  position: relative;\n  border: 1px solid #CCC;\n  border-radius: 8px;\n  text-align: center;\n  padding: 0;\n  background-color: #337ab7;\n  color: rgb(136, 172, 217);\n  margin-bottom: 32px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, .5);\n}\n\n.card .content {\n  margin-top: 10px;\n}\n\n.card .content .name {\n  color: white;\n  text-shadow: 0 0 6px rgba(0, 0, 0, .5);\n  font-size: 18px;\n}\n\n.card .header-bg {\n  /* This stretches the canvas across the entire hero unit */\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70px;\n  border-bottom: 1px #FFF solid;\n  border-radius: 6px 6px 0 0;\n}\n\n.card .avatar {\n  position: relative;\n  margin-top: 15px;\n  z-index: 100;\n}\n\n.card .avatar img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 2px #FFF solid;\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0.2;\n    transform: translate3d(5%, 0, 0)\n  }\n  100% {\n    opacity: 1;\n    transform: none\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n'}),define("text!child-router.html",["module"],function(e){e.exports='<template>\n  <section class="au-animate">\n    <h2>${heading}</h2>\n    <div>\n      <div class="col-md-2">\n        <ul class="well nav nav-pills nav-stacked">\n          <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}">\n            <a href.bind="row.href">${row.title}</a>\n          </li>\n        </ul>\n      </div>\n      <div class="col-md-10" style="padding: 0">\n        <router-view></router-view>\n      </div>\n    </div>\n  </section>\n</template>\n'}),define("text!nav-bar.html",["module"],function(e){e.exports='<template bindable="router">\n  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n        <span class="sr-only">Toggle Navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="/">\n        <i class="fa fa-home"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">\n        <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}">\n          <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1.in" href.bind="row.href">${row.title}</a>\n        </li>\n      </ul>\n\n      <ul class="nav navbar-nav navbar-right">\n        <li class="loader" if.bind="router.isNavigating">\n          <i class="fa fa-spinner fa-spin fa-2x"></i>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n'}),define("text!users.html",["module"],function(e){e.exports='<template>\n  <require from="blur-image"></require>\n\n  <section class="au-animate">\n      <h2>${heading}</h2>\n      <div class="row au-stagger">\n        <div class="col-sm-6 col-md-3 card-container au-animate" repeat.for="user of users">\n            <div class="card">\n                <canvas class="header-bg" width="250" height="70" blur-image.bind="image"></canvas>\n                <div class="avatar">\n                    <img src.bind="user.avatar_url" crossorigin ref="image"/>\n                </div>\n                <div class="content">\n                    <p class="name">${user.login}</p>\n                    <p><a target="_blank" class="btn btn-default" href.bind="user.html_url">Contact</a></p>\n                </div>\n            </div>\n        </div>\n      </div>\n  </section>\n</template>\n'}),define("text!welcome.html",["module"],function(e){e.exports='<template>\n  <section class="au-animate">\n    <h2>${heading}</h2>\n    <form role="form" submit.delegate="submit()">\n      <div class="form-group">\n        <label for="fn">First Name</label>\n        <input type="text" value.bind="firstName" class="form-control" id="fn" placeholder="first name">\n      </div>\n      <div class="form-group">\n        <label for="ln">Last Name</label>\n        <input type="text" value.bind="lastName" class="form-control" id="ln" placeholder="last name">\n      </div>\n      <div class="form-group">\n        <label>Full Name</label>\n        <p class="help-block">${fullName | upper}</p>\n      </div>\n      <button type="submit" class="btn btn-default">Submit</button>\n    </form>\n  </section>\n</template>\n'});