(function(g){var window=this;var aCa=function(a,b,c,d){var e=b.ac();g.U(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.ed(c,d?d:"mqdefault.jpg");var k=b instanceof g.CO?g.TU(b.lengthSeconds):null,l=!!f;f=l&&"RD"==(new g.yQ(f.substr(0,2),f.substr(2))).type;var m=b instanceof g.CO?b.Fa:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,aria_label:b.rl||g.V("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.Tl(c),is_live:m,
is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.AQ&&(c.playlist_length=b.getLength());a.update(c)},C5=function(a,b){g.GH.call(this,{J:"div",
fa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.A=a;this.created=!1},D5=function(a){g.W.call(this,{J:"div",
N:"ytp-upnext",U:{"aria-label":"{{aria_label}}"},P:[{J:"div",N:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{J:"span",N:"ytp-upnext-top",P:[{J:"span",N:"ytp-upnext-header",ca:"Up Next"},{J:"span",N:"ytp-upnext-title",ca:"{{title}}"},{J:"span",N:"ytp-upnext-author",ca:"{{author}}"}]},{J:"a",N:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},P:[{J:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},P:[{J:"circle",N:"ytp-svg-autoplay-circle",
U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{J:"circle",N:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{J:"path",N:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{J:"span",N:"ytp-upnext-bottom",P:[{J:"span",N:"ytp-upnext-cancel"},{J:"span",N:"ytp-upnext-paused",ca:"Autoplay is paused"}]}]});this.D=null;
var b=this.o["ytp-upnext-cancel"];this.D=new g.W({J:"button",fa:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},ca:"Cancel"});g.N(this,this.D);this.D.W("click",this.NR,this);this.D.wa(b);this.A=a;this.L=this.o["ytp-svg-autoplay-ring"];this.H=this.G=this.C=this.F=null;this.I=new g.ju(this.mo,5E3,this);g.N(this,this.I);this.K=0;this.R(this.o["ytp-upnext-autoplay-icon"],"click",this.ZT);this.lD();this.R(a,"autonavvisibility",this.lD);this.R(a,"mdxnowautoplaying",
this.mT);this.R(a,"mdxautoplaycanceled",this.nT);this.R(a,"mdxautoplayupnext",this.VF);3==this.A.Ra()&&(a=(a=g.ZT(g.TT(this.A)))?a.KK():null)&&this.VF(a)},bCa=function(a,b){a.F=b;
aCa(a,b,g.Y(a.A),"hqdefault.jpg")},E5=function(a,b){if(!a.C){g.hG("a11y-announce","Up Next "+a.F.title);
a.K=g.sG();a.C=new g.ju((0,g.A)(a.Mr,a,b),25);a.Mr(b);var c=b||g.Y(a.A).experiments.A("autoplay_time")||1E4;a.A.xa("onAutonavCoundownStarted",c)}g.zq(a.element,"ytp-upnext-autoplay-paused")},G5=function(a){F5(a);
a.K=g.sG();a.Mr();g.T(a.element,"ytp-upnext-autoplay-paused")},F5=function(a){a.C&&(a.C.dispose(),a.C=null)},H5=function(a,b){b=void 0===b?!1:b;
var c=g.Y(a.A);if(c.experiments.o("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.F.ac(),a.mo(),a.G=new window.Notification("Up Next",{body:d.title,icon:d.ed(c)}),a.H=a.R(a.G,"click",a.NT),a.I.start())}F5(a);a.A.Bk(!1,b)},cCa=function(a){C5.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.C=new g.W({J:"div",N:"ytp-subscribe-card",P:[{J:"img",N:"ytp-author-image",U:{src:b.profilePicture}},{J:"div",N:"ytp-subscribe-card-right",P:[{J:"div",N:"ytp-author-name",ca:b.author},{J:"div",N:"html5-subscribe-button-container"}]}]});g.N(this,this.C);this.C.wa(this.element);this.D=new g.IZ("Subscribe",null,"Unsubscribe",null,!0,!1,b.Mf,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.D);this.D.wa(this.C.o["html5-subscribe-button-container"]);this.hide()},I5=
function(a){var b=g.Y(a),c=g.QI||g.nf?{style:"will-change: opacity"}:void 0,d=b.o,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.W.call(this,{J:"a",fa:e,U:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},P:[{J:"div",N:"ytp-videowall-still-image",U:{style:"{{background}}"}},{J:"span",N:"ytp-videowall-still-info",P:[{J:"span",N:"ytp-videowall-still-info-bg",P:[{J:"span",N:"ytp-videowall-still-info-content",U:c,P:[{J:"span",N:"ytp-videowall-still-info-title",ca:"{{title}}"},{J:"span",
N:"ytp-videowall-still-info-author",ca:"{{author_and_views}}"},{J:"span",N:"ytp-videowall-still-info-live",ca:"Live"},{J:"span",N:"ytp-videowall-still-info-duration",ca:"{{duration}}"}]}]}]},{J:"span",fa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],P:[{J:"span",N:"ytp-videowall-still-listlabel-icon"},"Playlist",{J:"span",N:"ytp-videowall-still-listlabel-length",P:[" (",{J:"span",ca:"{{playlist_length}}"},")"]}]},{J:"span",fa:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
P:[{J:"span",N:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{J:"span",N:"ytp-videowall-still-listlabel-length",ca:" (50+)"}]}]});this.F=d;this.A=a;this.C=null;this.D=new g.QF(this);g.N(this,this.D);this.W("click",this.H);this.W("keypress",this.I);this.D.R(a,"videodatachange",this.G);g.Y(a).Z&&(a=a.app.ia,b=this.element,g.Pa(a.o,b),g.Sa(a.o,b),c=String(a.H++),b.setAttribute("data-visual-id",c),g.hf(this,(0,g.A)(a.G,a,b)));this.G()},J5=function(a){C5.call(this,a,"videowall-endscreen");
this.M=a;this.H=0;this.D=[];this.I=this.G=this.F=null;this.K=this.T=!1;this.Y=new g.QF(this);g.N(this,this.Y);this.L=new g.ju(g.Fa(g.T,this.element,"ytp-show-tiles"),0);g.N(this,this.L);var b=new g.W({J:"button",fa:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},P:[g.OU()]});g.N(this,b);b.wa(this.element);b.W("click",this.JP,this);this.O=new g.AH({J:"div",N:"ytp-endscreen-content"});g.N(this,this.O);this.O.wa(this.element);b=new g.W({J:"button",fa:["ytp-button","ytp-endscreen-next"],
U:{"aria-label":"Next"},P:[g.PU()]});g.N(this,b);b.wa(this.element);b.W("click",this.IP,this);this.C=new D5(a);g.N(this,this.C);g.tU(this.A,this.C.element,4);this.hide()},K5=function(a){return g.vU(a.A)&&a.wy()&&!a.I},dCa=function(a,b){return(0,g.I)(b.suggestions,function(b){b=g.xX(b);
g.N(a,b);return b})},L5=function(a){var b=a.Vu();
b!=a.T&&(a.T=b,a.A.V("autonavvisibility"))},M5=function(a){g.BU.call(this,a);
this.A=null;this.B=new g.QF(this);g.N(this,this.B);this.C=g.Y(a);eCa(a)?this.A=new J5(this.o):this.C.Ga?this.A=new cCa(this.o):this.A=new C5(this.o);g.N(this,this.A);g.tU(this.o,this.A.element,4);this.HE();this.B.R(a,"videodatachange",this.HE,this);this.B.R(a,"crn_endscreen",this.IN,this);this.B.R(a,"crx_endscreen",this.JN,this)},eCa=function(a){a=g.Y(a);
return a.md&&!a.Ga};
g.t(C5,g.GH);C5.prototype.create=function(){this.created=!0};
C5.prototype.destroy=function(){this.created=!1};
C5.prototype.wy=function(){return!1};
C5.prototype.Vu=function(){return!1};g.t(D5,g.W);g.h=D5.prototype;g.h.mo=function(){this.G&&(this.I.stop(),this.Ha(this.H),this.H=null,this.G.close(),this.G=null)};
g.h.lD=function(){g.FH(this,g.UT(this.A))};
g.h.NT=function(){window.focus();this.mo()};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Mr=function(a){a=a||g.Y(this.A).experiments.A("autoplay_time")||1E4;var b=Math.min(g.sG()-this.K,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.A.Ra()?H5(this,!0):this.C&&this.C.start()};
g.h.ZT=function(a){!g.Xd(this.D.element,g.EF(a))&&g.yW(a,this.A)&&H5(this)};
g.h.NR=function(){g.WT(this.A,!0)};
g.h.mT=function(a){this.A.Ra();this.show();E5(this,a)};
g.h.VF=function(a){this.A.Ra();this.F&&this.F.ac().videoId==a.ac().videoId||bCa(this,a)};
g.h.nT=function(){this.A.Ra();F5(this);this.hide()};
g.h.X=function(){F5(this);this.mo();g.W.prototype.X.call(this)};g.t(cCa,C5);g.t(I5,g.W);I5.prototype.Sk=function(){g.yU(this.A,this.element);var a=this.C.ac().videoId,b=this.C.getPlaylistId();g.Z_(this.A.app,a,this.C.Ud,b,void 0,void 0,void 0)};
I5.prototype.H=function(a){g.yW(a,this.A,this.F,this.C.Ud||void 0)&&this.Sk()};
I5.prototype.I=function(a){switch(a.keyCode){case 13:case 32:g.JF(a)||(this.Sk(),g.IF(a))}};
I5.prototype.G=function(){var a=this.A.getVideoData(),b=g.Y(this.A);this.F=a.isDni?!1:b.o};g.t(J5,C5);g.h=J5.prototype;g.h.create=function(){C5.prototype.create.call(this);var a=this.A.getVideoData();a&&(this.F=dCa(this,a),this.G=a);this.Qg();this.Y.R(this.A,"appresize",this.Qg);this.Y.R(this.A,"onVideoAreaChange",this.Qg);this.Y.R(this.A,"videodatachange",this.KP);this.Y.R(this.A,"autonavchange",this.jC);this.Y.R(this.A,"autonavcancel",this.HP);this.Y.R(this.element,"transitionend",this.pV)};
g.h.destroy=function(){g.SF(this.Y);g.kf(this.D);this.D=[];this.F=null;C5.prototype.destroy.call(this);g.zq(this.element,"ytp-show-tiles");this.L.stop()};
g.h.wy=function(){return 1!=this.G.autonavState};
g.h.show=function(){C5.prototype.show.call(this);g.zq(this.element,"ytp-show-tiles");g.Y(this.A).B?g.lu(this.L):this.L.start();(this.K||this.I&&this.I!=this.G.clientPlaybackNonce)&&g.WT(this.A,!1);K5(this)?(L5(this),2==this.G.autonavState?g.Y(this.A).experiments.o("fast_autonav_in_background")&&3==this.A.bj()?H5(this.C,!0):E5(this.C):3==this.G.autonavState&&G5(this.C)):(g.WT(this.A,!0),L5(this))};
g.h.hide=function(){C5.prototype.hide.call(this);G5(this.C);L5(this)};
g.h.pV=function(a){g.EF(a)==this.element&&this.Qg()};
g.h.Qg=function(){if(this.F&&this.F.length){g.T(this.element,"ytp-endscreen-paginate");var a=g.lU(this.M,!0),b=g.UH(this.M);b&&(b=b.yd()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.F.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,r=e/2,u=b<=f-2&&n>=r*m,E=e<=k-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&E)n-=p*m,e+=2;else if(u)n-=r*m,b+=2;else if(E)n-=p*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.jd(a.width/m||1,1,1.21);n*=g.jd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.O.element;g.Qh(a,m,n);g.xh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});bCa(this.C,this.F[0]);g.U(this.element,"ytp-endscreen-takeover",K5(this));L5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,r=0,d&&f>=b-2&&k>=e-2?r=1:0==k%2&&0==f%2&&(2>k&&
2>f?0==k&&0==f&&(r=2):r=2),p=g.kd(p+this.H,l),0!=r){u=this.D[c];u||(u=new I5(this.A),this.D[c]=u,a.appendChild(u.element));E=Math.floor(n*k/e);var H=Math.floor(m*f/b),L=Math.floor(n*(k+r)/e)-E-4,S=Math.floor(m*(f+r)/b)-H-4;g.Eh(u.element,H,E);g.Qh(u.element,S,L);g.xh(u.element,"transitionDelay",(k+f)/20+"s");g.U(u.element,"ytp-videowall-still-mini",1==r);g.U(u.element,"ytp-videowall-still-large",2<r);r=u;p=this.F[p];r.C!=p&&(r.C=p,aCa(r,p,g.Y(r.A),g.xq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":
"mqdefault.jpg"),u=(p=p.Ud)&&p.itct)&&(p=r.A,g.Y(p).Z&&(p=p.app.ia,r=r.element,E=r.getAttribute("data-visual-id"),g.Pa(p.o,r),g.wU(p,"onLogServerVeCreated",{id:E,tracking_params:u})));c++}g.U(this.element,"ytp-endscreen-paginate",c<l);for(b=this.D.length-1;b>=c;b--)e=this.D[b],g.Rd(e.element),g.jf(e);this.D.length=c}};
g.h.KP=function(){var a=this.A.getVideoData();this.G!=a&&(this.H=0,this.F=dCa(this,a),this.G=a,this.Qg())};
g.h.IP=function(){this.H+=this.D.length;this.Qg()};
g.h.JP=function(){this.H-=this.D.length;this.Qg()};
g.h.OM=function(){return!!this.C.C};
g.h.jC=function(a){1==a?(this.K=!1,this.I=this.G.clientPlaybackNonce,F5(this.C),this.B&&this.Qg()):(this.K=!0,this.B&&K5(this)&&(2==a?E5(this.C):3==a&&G5(this.C)))};
g.h.HP=function(a){if(a){for(a=0;a<this.D.length;a++)g.zU(this.M,this.D[a].element,!0);this.jC(1)}else this.I=null,this.K=!1;this.Qg()};
g.h.Vu=function(){return this.B&&K5(this)};g.t(M5,g.BU);g.h=M5.prototype;g.h.IB=function(){var a=this.o.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!eCa(this.o)||b;a=g.$O(a,"ypc_module");var c=g.B_(this.o.app);return b&&!a&&!c};
g.h.HB=function(){return this.A.Vu()};
g.h.KM=function(){return this.HB()?this.A.OM():!1};
g.h.X=function(){g.rU(this.o,"endscreen");g.BU.prototype.X.call(this)};
g.h.load=function(){g.BU.prototype.load.call(this);this.A.show()};
g.h.unload=function(){g.BU.prototype.unload.call(this);this.A.hide();this.A.destroy()};
g.h.IN=function(a){this.IB()&&(this.A.created||this.A.create(),"load"==a.getId()&&this.load())};
g.h.JN=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.HE=function(){g.rU(this.o,"endscreen");var a=Math.max(1E3*(this.o.getVideoData().lengthSeconds-10),0);a=new g.vQ(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.N(this,a);var b=new g.vQ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.N(this,b);g.oU(this.o,[a,b])};g.rX.endscreen=M5;})(_yt_player);
