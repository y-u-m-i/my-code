window.FAI_HAWK_EYE=!!window.FAI_HAWK_EYE?window.FAI_HAWK_EYE:{};window.FAI_HAWK_EYE.sdk_version=1.1;window.FAI_HAWK_EYE.sdk_platform="pc";window.FAI_HAWK_EYE.FAI_HAWK_EYE_REPORT_URL=window.FAI_HAWK_EYE.jssdk_report_url;window.devicePixelRatio=window.devicePixelRatio||window.webkitDevicePixelRatio||window.mozDevicePixelRatio||1;window.Fdp=window.FAI_HAWK_EYE;(function(a,b){a._DEF={_MODULE:{_TYPE:{PV_MODULE:0,PERFORMANCE_MODULE:1,EXCEPTION_MODULE:2,CLICK_MODULE:3,EVENT_MODULE:4,BSS_MONITOR_MODULE:5,FAI_SPEED_TEST_MODULE:6,BSS_MONITOR_DATA_REPORT_MODULE:7,BSS_ANALYSIS_DATA_REPORT_MODULE:8,EVENT_TRACK_MODULE:9},_KEY:{EXCEPTION_MODULE:"e_m",PERFORMANCE_MODULE:"pe_m",EVENT_MODULE:"b_m",PV_MODULE:"p_m",CLICK_MODULE:"c_m",BSS_MONITOR_MODULE:"bm_m",FAI_SPEED_TEST_MODULE:"fst_m",BSS_MONITOR_DATA_REPORT_MODULE:"bmdr_m",BSS_ANALYSIS_DATA_REPORT_MODULE:"badr_m",EVENT_TRACK_MODULE:"et_m"}},_COOKIE:{_AID_COOKIE:"",_BS_ADI_COOKIE:"",_BS_WID_COOKIE:"",_BS_ID_COOKIE:"",_CLI_ID_COOKIE:"_cliid"},_IDTYPE:{_DISTINC_ID:1,_SESSION_ID:2,_PV_ID:3,_CLICK_ID:4,_CRASH_ID:5},_REPORT:{_BASIC:{_REPORT_TYPE:"b_rt",_PV_ID:"b_pi",_APP_ID:"b_a_i",_SDK_VERSION:"b_sv",_DISTINC_ID:"b_di",_CROSS_DOMAIN_CLI_ID:"b_cdci",_CLI_TIME:"b_ct",_AID:"b_ai",_BS_AID:"b_ba",_BS_WID:"b_bw",_BS_ID:"b_bi"},_URL:{_URL:"u_u",_REFER_URL:"u_ru"},_CLIENT:{_CLI_LANG:"c_l",_CLI_SCREEN_TYPE:"c_st",_CLI_DPR:"c_dpr"},_PERFORMANCE:{_DOMAIN_LOOKUP_TIME:"pe_dt",_TCP_TIME:"pe_tt",_REQUEST_TIME:"pe_rt",_BACK_END_TIME:"pe_rpt",_DOM_PARSE_TIME:"pe_dpt",_WRITER_SCREEN_TIME:"pe_wst",_FIRST_SCREEN_TIME:"pe_fst",_DOM_READY_TIME:"pe_drt",_FINISH_TIME:"pe_ft"},_EXCEPTION:{_EXCEPTION_TYPE:{_JS_EXCEPTION:0,_IMG_EXCEPTION:1,_AJAX_EXCEPTION:2,_JS_HIDDEN_EXCEPTION:3,_JS_DOWNLOAD_EXCEPTION:4,_PAGE_CRASH:5,_PAGE_STUCK:6},_TYPE:"e_t",_URL:"e_u",_MESSAGE:"e_m",_STATUS:"e_ss",_STACK:"e_sk",_LINE_NUM:"e_ln",_COL_NUM:"e_cn"},_EVENT:{_EVENT_ID:"ev_i",_EVENT_ID_SUB:"ev_i_s",_EVENT_CONTENT:"ev_c"},_CLICK:{_ID:"c_i",_PATH:"c_e_pa",_NAME:"c_e_n",_POSITION:"c_e_po",_TYPE:"c_t",_TO_URL:"c_t_u",_STEP_PV:"s_i_p"},_PV:{_REFER:"p_r",_TITLE:"p_t",_PV_ID:"p_pi"},_BSS:{_TIME:"bs_t",_MONITOR_ID:"bs_i"},_BSS_MONITOR_DATA_REPORT:{_BSS_MONITOR_DATA_REPORT_ID:"bmdr_i",_BSS_MONITOR_DATA_REPORT_VALUE:"bmdr_v",_BSS_MONITOR_DATA_REPORT_KEY_PREFIX:"bmdr_k_"},_BSS_ANALYSIS_DATA_REPORT:{_BSS_ANALYSIS_DATA_REPORT_ID:"badr_i",_BSS_ANALYSIS_DATA_REPORT_DATA:"badr_d"},_EVENT_TRACK:{_EVENT:"event",_EVENT_PROPERTIES:"properties",_DEFAULT_PROPERTY:{_LOGIN_AID:"$login_aid",_LOGIN_SID:"$login_sid",_CLIID:"$cliid",_CORP_TYPE:"$corp_type",_PV_ID:"$pv_id",_SDK_VERSION:"$sdk_version",_SCREEN_HEIGHT:"$screen_height",_SCREEN_WIDTH:"$screen_width",_URL:"$url",_SDK_PLATFORM:"$sdk_platform"}}}};a._DATA={};a._EVENT_COMM_PROPERTIES={};a._MODULES={};a._TOOL={};a._INTERFACE={}})(window.FAI_HAWK_EYE);(function(a,b){a._INTERFACE._install=function(){for(var c in a._MODULES){a._MODULES[c]._init()}};a._TOOL._extend=function(e,c){var d=function(){};d.prototype=c.prototype;e.prototype=new d();e.prototype.constructor=e;e.uber=c.prototype};a._TOOL._getElementPath=function(c){var d=[];do{d.push(a._TOOL._getElementName(c))}while((c.nodeName.toLowerCase()!="html")&&(c=c.parentNode));return d.join(" > ")};a._TOOL._getElementName=function(e){var d=e.className;var c=e.id;if(!!d||!!c){return e.nodeName.toLowerCase()+"["+(d?'class="'+d+'"':"")+(c?' id="'+c+'"':"")+"]"}else{return e.nodeName.toLowerCase()}};a._TOOL._getElementAttribute=function(d,c){var e=d.getAttribute(c);if(e==null||e==b){return""}else{return e}};a._TOOL._getLang=function(){var c=navigator.userLanguage||navigator.language;return c};a._TOOL._getScreenSize=function(){var e=window.screen.width,c=window.screen.height,f=window.devicePixelRatio;var g=parseInt(e*f);var d=parseInt(c*f);return g+"x"+d};a._TOOL._getDevicePixelRatio=function(){return window.devicePixelRatio};a._TOOL._getCookie=function(d){var c,e=new RegExp("(^| )"+d+"=([^;]*)(;|$)");if(c=document.cookie.match(e)){return unescape(c[2])}else{return null}};a._TOOL._json_stringify=(function(){var g=Object.prototype.toString;var e=Array.isArray||function(i){return g.call(i)==="[object Array]"};var d={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};var c=function(i){return d[i]||"\\u"+(i.charCodeAt(0)+65536).toString(16).substr(1)};var f=/[\\"\u0000-\u001F\u2028\u2029]/g;return function h(o){if(o==null){return"null"}else{if(typeof o==="number"){return isFinite(o)?o.toString():"null"}else{if(typeof o==="boolean"){return o.toString()}else{if(typeof o==="object"){if(typeof o.toJSON==="function"){return h(o.toJSON())}else{if(e(o)){var n="[";for(var m=0;m<o.length;m++){n+=(m?", ":"")+h(o[m])}return n+"]"}else{if(g.call(o)==="[object Object]"){var l=[];for(var j in o){if(o.hasOwnProperty(j)){l.push(h(j)+": "+h(o[j]))}}return"{"+l.join(", ")+"}"}}}}}}}return'"'+o.toString().replace(f,c)+'"'}})();a._TOOL._getPageReferrer=function(){try{var d=window.top.Fai_hawk_eye_last_pv_url;if(!d){d=document.referrer}window.top.Fai_hawk_eye_last_pv_url=document.URL;return d}catch(c){return document.referrer}};a._TOOL._sendReport=function(d,f){var g="";for(var e in f){g+=e+"="+encodeURIComponent(f[e])+"&"}d+="?"+g;var c=document.createElement("img");c.src=d;document.getElementsByTagName("head")[0].appendChild(c);c.parentNode.removeChild(c)};a._TOOL._getId=function(d){var g=(d).toString(16);if(g.length<2){for(var h=0;h<2-g.length;h++){g="0"+g}}var f=(((new Date().getTime())&4294967295)>>>0).toString(16);if(f.length<8){for(var h=0;h<8-f.length;h++){f="0"+f}}var c=16777215;var e=((Math.random()*c)&16777215).toString(16);if(e.length<6){for(var h=0;h<6-e.length;h++){e="0"+e}}return g+f+e};a._TOOL._getUrlDomain=function(c){var d=c.split("/")[2];if(d==b){d=""}return d}})(window.FAI_HAWK_EYE);(function(b){b.fai_he_pv_id=b._TOOL._getId(b._DEF._IDTYPE._PV_ID);b.fai_he_script_src="";if(document.currentScript&&document.currentScript.src){b.fai_he_script_src=document.currentScript.src}else{if(document.scripts){var a=document.scripts[document.scripts.length-1];if(a.src){b.fai_he_script_src=a.src}}}b.fai_curr_referrer=b._TOOL._getPageReferrer()})(window.FAI_HAWK_EYE);(function(g){var c={};function a(){var l={};var o=g.fai_he_pv_id;var q=g.jssdk_appid;var k=g.sdk_version;var m=g._TOOL._getCookie(g._DEF._COOKIE._CLI_ID_COOKIE);var i=g.fai_aid;var p=g.fai_bs_aid;var j=g.fai_bs_wid;var n=g.fai_bs_id;l[g._DEF._REPORT._BASIC._PV_ID]=o;l[g._DEF._REPORT._BASIC._APP_ID]=q;l[g._DEF._REPORT._BASIC._SDK_VERSION]=k;l[g._DEF._REPORT._BASIC._CROSS_DOMAIN_CLI_ID]=m;l[g._DEF._REPORT._BASIC._AID]=i;l[g._DEF._REPORT._BASIC._BS_AID]=p;l[g._DEF._REPORT._BASIC._BS_WID]=j;l[g._DEF._REPORT._BASIC._BS_ID]=n;return l}function f(){var i={};var j=document.URL;var k=g.fai_curr_referrer;i[g._DEF._REPORT._URL._URL]=j;i[g._DEF._REPORT._URL._REFER_URL]=k;return i}function e(){var l={};var k=g._TOOL._getLang();var i=g._TOOL._getScreenSize();var j=g._TOOL._getDevicePixelRatio();l[g._DEF._REPORT._CLIENT._CLI_LANG]=k;l[g._DEF._REPORT._CLIENT._CLI_SCREEN_TYPE]=i;l[g._DEF._REPORT._CLIENT._CLI_DPR]=j;return l}var d=a();var b=f();var h=e();g._DATA[g._DEF._REPORT._BASIC._PV_ID]=d[g._DEF._REPORT._BASIC._PV_ID];g._DATA[g._DEF._REPORT._BASIC._APP_ID]=d[g._DEF._REPORT._BASIC._APP_ID];g._DATA[g._DEF._REPORT._BASIC._SDK_VERSION]=d[g._DEF._REPORT._BASIC._SDK_VERSION];g._DATA[g._DEF._REPORT._BASIC._CROSS_DOMAIN_CLI_ID]=d[g._DEF._REPORT._BASIC._CROSS_DOMAIN_CLI_ID];g._DATA[g._DEF._REPORT._BASIC._AID]=d[g._DEF._REPORT._BASIC._AID];g._DATA[g._DEF._REPORT._BASIC._BS_AID]=d[g._DEF._REPORT._BASIC._BS_AID];g._DATA[g._DEF._REPORT._BASIC._BS_WID]=d[g._DEF._REPORT._BASIC._BS_WID];g._DATA[g._DEF._REPORT._BASIC._BS_ID]=d[g._DEF._REPORT._BASIC._BS_ID];g._DATA[g._DEF._REPORT._URL._URL]=b[g._DEF._REPORT._URL._URL];g._DATA[g._DEF._REPORT._URL._REFER_URL]=b[g._DEF._REPORT._URL._REFER_URL];g._DATA[g._DEF._REPORT._CLIENT._CLI_LANG]=h[g._DEF._REPORT._CLIENT._CLI_LANG];g._DATA[g._DEF._REPORT._CLIENT._CLI_SCREEN_TYPE]=h[g._DEF._REPORT._CLIENT._CLI_SCREEN_TYPE];g._DATA[g._DEF._REPORT._CLIENT._CLI_DPR]=h[g._DEF._REPORT._CLIENT._CLI_DPR]})(window.FAI_HAWK_EYE);(function(f,l,c){if(!Function.prototype.bind){Function.prototype.bind=function(n){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")}var r=Array.prototype.slice.call(arguments,1),q=this,o=function(){},p=function(){return q.apply(this instanceof o?this:n,r.concat(Array.prototype.slice.call(arguments)))};if(this.prototype){o.prototype=this.prototype}p.prototype=new o();return p}}function k(n,o){this._name=n;this._type=o}k.prototype.report=function(o,n){var q={};for(var p in l._DATA){q[p]=l._DATA[p]}for(var p in o){q[p]=o[p]}q[l._DEF._REPORT._BASIC._CLI_TIME]=new Date().getTime();q[l._DEF._REPORT._BASIC._REPORT_TYPE]=n;l._TOOL._sendReport(l.FAI_HAWK_EYE_REPORT_URL,q)};function h(n,o){this._name=n;this._type=o;this._init=function(){var y=this;if(f.addEventListener){f.addEventListener("error",function(A){var B={};if(A.target&&A.target.tagName&&((A.target.tagName.toLocaleLowerCase()=="img")||(A.target.tagName.toLocaleLowerCase()=="script"))){target_src_domain=l._TOOL._getUrlDomain(A.target.src);self_report_url=l.jssdk_report_url;if(self_report_url.indexOf(target_src_domain)==-1){B[l._DEF._REPORT._EXCEPTION._URL]=A.target.src;B[l._DEF._REPORT._EXCEPTION._STACK]="";B[l._DEF._REPORT._EXCEPTION._STATUS]=0;B[l._DEF._REPORT._EXCEPTION._LINE_NUM]=0;B[l._DEF._REPORT._EXCEPTION._COL_NUM]=0;if(A.target.tagName.toLocaleLowerCase()=="script"){B[l._DEF._REPORT._EXCEPTION._TYPE]=l._DEF._REPORT._EXCEPTION._EXCEPTION_TYPE._JS_DOWNLOAD_EXCEPTION}else{B[l._DEF._REPORT._EXCEPTION._TYPE]=l._DEF._REPORT._EXCEPTION._EXCEPTION_TYPE._IMG_EXCEPTION}if(location.href===A.target.src){return}y.report(B,y._type)}}},true)}f.onerror=function(E,C,D,L,B){if(E==="Script error."){return}if(typeof l.js_err_filter=="function"&&!l.js_err_filter(E,C,D,L,B)){return}if(C==l.fai_he_script_src){}var I={};var F=C;var H=E;var J="";if(B&&B.stack){J=B.stack}var G=0;var A=D;var K=0;if(L){K=L}I[l._DEF._REPORT._EXCEPTION._URL]=F;I[l._DEF._REPORT._EXCEPTION._MESSAGE]=H;I[l._DEF._REPORT._EXCEPTION._STACK]=J;I[l._DEF._REPORT._EXCEPTION._STATUS]=G;I[l._DEF._REPORT._EXCEPTION._LINE_NUM]=A;I[l._DEF._REPORT._EXCEPTION._COL_NUM]=K;I[l._DEF._REPORT._EXCEPTION._TYPE]=l._DEF._REPORT._EXCEPTION._EXCEPTION_TYPE._JS_EXCEPTION;if(!J||(!A&&!K)){return}if(J.indexOf("chrome-extension")!==-1&&F.indexOf("chrome-extension")!==-1){return}if(J.indexOf("<anonymous>")>-1&&J.indexOf(".js")===-1){I[l._DEF._REPORT._EXCEPTION._TYPE]=l._DEF._REPORT._EXCEPTION._EXCEPTION_TYPE._JS_HIDDEN_EXCEPTION}else{if(J===""){I[l._DEF._REPORT._EXCEPTION._TYPE]=l._DEF._REPORT._EXCEPTION._EXCEPTION_TYPE._JS_HIDDEN_EXCEPTION}}y.report(I,y._type)};if(f.addEventListener){f.addEventListener("unhandledrejection",function(A){var B=A.reason;var C={};if(typeof B==="object"&&typeof B.stack!=="undefined"&&typeof B.message!=="undefined"){C[l._DEF._REPORT._EXCEPTION._MESSAGE]=B.message;C[l._DEF._REPORT._EXCEPTION._STACK]=B.stack}else{C[l._DEF._REPORT._EXCEPTION._MESSAGE]=JSON.stringify(B)}C[l._DEF._REPORT._EXCEPTION._TYPE]=l._DEF._REPORT._EXCEPTION._EXCEPTION_TYPE._JS_EXCEPTION;y.report(C,y._type)})}if(f.XMLHttpRequest){var x=XMLHttpRequest.prototype.send;var p=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(C,B,A){if(arguments.length<3&&A==c){A=true}p.apply(this,[C,B,A]);this.ajaxUrl=B};XMLHttpRequest.prototype.send=function(B){var C={};x.apply(this,[B]);if(this.onreadystatechange){this.newStateChange=A.bind(this)}else{this.onreadystatechange=A.bind(this)}function A(){if(this.readyState==4){if(!(this.status>=200&&this.status<300)){C[l._DEF._REPORT._EXCEPTION._URL]=this.ajaxUrl;C[l._DEF._REPORT._EXCEPTION._STACK]="";C[l._DEF._REPORT._EXCEPTION._STATUS]=this.status;C[l._DEF._REPORT._EXCEPTION._MESSAGE]=this.statusText;C[l._DEF._REPORT._EXCEPTION._LINE_NUM]=0;C[l._DEF._REPORT._EXCEPTION._COL_NUM]=0;C[l._DEF._REPORT._EXCEPTION._TYPE]=l._DEF._REPORT._EXCEPTION._EXCEPTION_TYPE._AJAX_EXCEPTION;if(this.status!==0){y.report(C,y._type)}}}}}}if(navigator.serviceWorker&&f.addEventListener&&f.postMessage){var r=window.navigator.userAgent;var u=/swan\//;if(window.__wxjs_environment==="miniprogram"||/miniProgram/i.test(r)||u.test(r)||r.toLowerCase().indexOf("toutiaomicroapp")!==-1){return}var v="https://fe.faisco.cn";var w=v+"/hawkEye/crash.jsp";var z=function(){var C=this;var A=5*1000;var F=l._TOOL._getId(l._DEF._IDTYPE._CRASH_ID);var D={};D[l._DEF._REPORT._EXCEPTION._URL]=document.URL;D[l._DEF._REPORT._EXCEPTION._TYPE]=l._DEF._REPORT._EXCEPTION._EXCEPTION_TYPE._PAGE_CRASH;for(var B in l._DATA){D[B]=l._DATA[B]}D[l._DEF._REPORT._BASIC._REPORT_TYPE]=y._type;C.contentWindow.postMessage({type:"baseData",id:F,base_data:D,report_url:l.FAI_HAWK_EYE_REPORT_URL},w);(function E(){var G={};if(performance){var I=performance.memory;if(I){G.memory={totalJSHeapSize:I.totalJSHeapSize,usedJSHeapSize:I.usedJSHeapSize,jsHeapSizeLimit:I.jsHeapSizeLimit,usedRatio:(I.usedJSHeapSize/I.totalJSHeapSize*100).toFixed(4)+"%"}}}var H={};H[l._DEF._REPORT._EXCEPTION._MESSAGE]=JSON.stringify(G);H[l._DEF._REPORT._BASIC._CLI_TIME]=new Date().getTime();C.contentWindow.postMessage({type:"heartbeat",id:F,exp_data:H,},w);setTimeout(E,A)})();window.addEventListener("beforeunload",function(){C.contentWindow.postMessage({type:"unload",id:F},w)})};var t=function(){try{if(document.body.querySelector("#crashIframe")){return}var A=document.createElement("iframe");A.style.display="none";A.src=w;A.id="crashIframe";A.addEventListener("load",z,false);document.body.appendChild(A)}catch(B){console.log(B)}};if(document.body){t()}else{f.addEventListener("load",t,false)}}var s=true;(function q(){if(!s){return}var A=60*1000;var D=30;var C=navigator.userAgent.toLowerCase();var F=false;function B(){if(!window.performance||!window.performance.now||F||(document.visibilityState&&document.visibilityState=="hidden")||!window.requestAnimationFrame){return}if(/mac os/.test(C)){return}F=true;var M=window.performance.now();var N=0;var J=0;var L=0;var K=10;var G=20;var I=[];var H=function(){var O=window.performance.now();N++;if(O>1000+M){var P=Math.round((N*1000)/(O-M));L++;if(P>0){J+=1;I.push(P)}N=0;M=O}if(L>=G){return}if(J==K){E(I);return}window.requestAnimationFrame(H)};H()}function E(J){var H=0;J.forEach(function(K){if(K<D){H++}});F=false;if(H>=4){var I={};var G={};G.fpsList=J;I[l._DEF._REPORT._EXCEPTION._URL]=document.URL;I[l._DEF._REPORT._EXCEPTION._TYPE]=l._DEF._REPORT._EXCEPTION._EXCEPTION_TYPE._PAGE_STUCK;I[l._DEF._REPORT._EXCEPTION._MESSAGE]=JSON.stringify(G);y.report(I,y._type);s=false}}B();setTimeout(q,A)})()}}l._TOOL._extend(h,k);l._MODULES[l._DEF._MODULE._KEY.EXCEPTION_MODULE]=new h("异常监控模块",l._DEF._MODULE._TYPE.EXCEPTION_MODULE);function g(n,o){this._name=n;this._type=o;this._init=function(){var q=this;if(!!f.addEventListener){f.addEventListener("load",function(r){setTimeout(function(){if(l.per_filter){return}var s=p();q.report(s,q._type)},100)},false)}else{if(!!f.attachEvent){f.attachEvent("onload",function(r){setTimeout(function(){if(l.per_filter){return}var s=p();q.report(s,q._type)},100)})}}};function p(){var u={};if(!!f.performance&&!!f.performance.timing){var q,z,v,s,x,w,y,r,t=null;q=performance.timing;z=q.domainLookupEnd-q.domainLookupStart;v=q.connectEnd-q.connectStart;s=q.responseEnd-q.requestStart;response_time=q.responseStart-q.navigationStart;x=q.domComplete-q.domInteractive;w=q.domInteractive-q.navigationStart;y=q.domComplete-q.navigationStart;r=q.domContentLoadedEventEnd-q.navigationStart;t=q.loadEventEnd-q.navigationStart;u[l._DEF._REPORT._PERFORMANCE._DOMAIN_LOOKUP_TIME]=z;u[l._DEF._REPORT._PERFORMANCE._TCP_TIME]=v;u[l._DEF._REPORT._PERFORMANCE._REQUEST_TIME]=s;u[l._DEF._REPORT._PERFORMANCE._BACK_END_TIME]=response_time;u[l._DEF._REPORT._PERFORMANCE._DOM_PARSE_TIME]=x;u[l._DEF._REPORT._PERFORMANCE._WRITER_SCREEN_TIME]=w;u[l._DEF._REPORT._PERFORMANCE._FIRST_SCREEN_TIME]=y;u[l._DEF._REPORT._PERFORMANCE._DOM_READY_TIME]=r;u[l._DEF._REPORT._PERFORMANCE._FINISH_TIME]=t}return u}}l._TOOL._extend(g,k);l._MODULES[l._DEF._MODULE._KEY.PERFORMANCE_MODULE]=new g("性能监控模块",l._DEF._MODULE._TYPE.PERFORMANCE_MODULE);function a(n,o){this._name=n;this._type=o;this._datas=[];this._init=function(){var p=this;l.trackEvent=function(t,r,s){var q={};q[l._DEF._REPORT._EVENT._EVENT_ID]=t;q[l._DEF._REPORT._EVENT._EVENT_ID_SUB]=r;q[l._DEF._REPORT._EVENT._EVENT_CONTENT]=s;p.report(q,p._type)}}}l._TOOL._extend(a,k);l._MODULES[l._DEF._MODULE._KEY.EVENT_MODULE]=new a("行为监控模块",l._DEF._MODULE._TYPE.EVENT_MODULE);function i(n,o){this._name=n;this._type=o;this._init=function(){var p=this;var q=(!!l._TOOL._getCookie(l._DEF._COOKIE._CLI_ID_COOKIE))?0:1000;setTimeout(function(){var r={};r[l._DEF._REPORT._PV._REFER]=l.fai_curr_referrer;r[l._DEF._REPORT._PV._TITLE]=document.title;r[l._DEF._REPORT._PV._PV_ID]=l.fai_he_pv_id;p.report(r,p._type)},q)}}l._TOOL._extend(i,k);l._MODULES[l._DEF._MODULE._KEY.PV_MODULE]=new i("PV模块",l._DEF._MODULE._TYPE.PV_MODULE);function b(n,o){this._name=n;this._type=o;this._step_pv=0;this._init=function(){var q=this;if(f.addEventListener){var s=true;var r=null;f.addEventListener("click",function(t){s=true;r=setTimeout(function(){if(s){p(t)}},400)});f.addEventListener("dblclick",function(t){s=false;clearTimeout(r);p(t)})}else{if(f.attachEvent){var s=true;var r=null;document.attachEvent("onclick",function(t){s=true;var u={};u.src=t.srcElement;u.screenX=t.screenX;u.screenY=t.screenY;u.type=t.type;r=setTimeout(function(){if(s){p(u)}},400)});document.attachEvent("ondblclick",function(t){s=false;clearTimeout(r);p(t)})}}function p(x){var y={};q._step_pv++;var u=l._TOOL._getId(l._DEF._IDTYPE._CLICK_ID);var z="";var t="";var v="";if(x.target){z=l._TOOL._getElementPath(x.target);t=l._TOOL._getElementName(x.target);v=l._TOOL._getElementAttribute(x.target,"href")}else{if(x.srcElement){z=l._TOOL._getElementPath(x.srcElement);t=l._TOOL._getElementName(x.srcElement);v=l._TOOL._getElementAttribute(x.srcElement,"href")}}var w=x.screenX+","+x.screenY;var A=x.type;y[l._DEF._REPORT._CLICK._ID]=u;y[l._DEF._REPORT._CLICK._PATH]=z;y[l._DEF._REPORT._CLICK._NAME]=t;y[l._DEF._REPORT._CLICK._POSITION]=w;y[l._DEF._REPORT._CLICK._TYPE]=x.type;y[l._DEF._REPORT._CLICK._TO_URL]=v;y[l._DEF._REPORT._CLICK._STEP_PV]=q._step_pv;q.report(y,q._type)}}}l._TOOL._extend(b,k);function j(n,o){this._name=n;this._type=o;this._init=function(){var p=this;l.bssMonitor=function(q){var r={};r[l._DEF._REPORT._BSS._MONITOR_ID]=q;r[l._DEF._REPORT._URL._URL]=document.URL;r[l._DEF._REPORT._BASIC._REPORT_TYPE]=p._type;l._TOOL._sendReport(l.FAI_HAWK_EYE_REPORT_URL,r)}}}l._TOOL._extend(j,k);l._MODULES[l._DEF._MODULE._KEY.BSS_MONITOR_MODULE]=new j("业务上报模块",l._DEF._MODULE._TYPE.BSS_MONITOR_MODULE);function m(n,o){this._name=n;this._type=o;this._init=function(){var p=this;l.bssMonitorDataReport=function(){var q=[];for(var r=0;r<arguments.length;r++){q[r]=arguments[r]}var u=q.shift();var t=q.pop();if(!!!u||Number.isNaN(Number.parseInt(u))){console.log("id is undefined or is NaN");return}if(!!!t||Number.isNaN(Number.parseInt(t))){console.log("value is undefined or is NaN");return}var s={};for(var r=0;r<5;r++){t=!!q[r]?q[r]:"undefined";s[l._DEF._REPORT._BSS_MONITOR_DATA_REPORT._BSS_MONITOR_DATA_REPORT_KEY_PREFIX+r]=t}s[l._DEF._REPORT._BSS_MONITOR_DATA_REPORT._BSS_MONITOR_DATA_REPORT_ID]=u;s[l._DEF._REPORT._BSS_MONITOR_DATA_REPORT._BSS_MONITOR_DATA_REPORT_VALUE]=t;s[l._DEF._REPORT._URL._URL]=document.URL;s[l._DEF._REPORT._BASIC._REPORT_TYPE]=p._type;l._TOOL._sendReport(l.FAI_HAWK_EYE_REPORT_URL,s)}}}l._TOOL._extend(m,k);l._MODULES[l._DEF._MODULE._KEY.BSS_MONITOR_DATA_REPORT_MODULE]=new m("业务监控数据上报模块",l._DEF._MODULE._TYPE.BSS_MONITOR_DATA_REPORT_MODULE);function e(n,o){this._name=n;this._type=o;this._init=function(){var p=this;l.bssAnalysisDataReport=function(s,q){var r={};r[l._DEF._REPORT._BSS_ANALYSIS_DATA_REPORT._BSS_ANALYSIS_DATA_REPORT_ID]=s;r[l._DEF._REPORT._BSS_ANALYSIS_DATA_REPORT._BSS_ANALYSIS_DATA_REPORT_DATA]=q;r[l._DEF._REPORT._URL._URL]=document.URL;r[l._DEF._REPORT._BASIC._REPORT_TYPE]=p._type;l._TOOL._sendReport(l.FAI_HAWK_EYE_REPORT_URL,r)}}}l._TOOL._extend(e,k);l._MODULES[l._DEF._MODULE._KEY.BSS_ANALYSIS_DATA_REPORT_MODULE]=new e("业务分析数据上报模块",l._DEF._MODULE._TYPE.BSS_ANALYSIS_DATA_REPORT_MODULE);function d(n,o){this._name=n;this._type=o;this._init=function(){var p=this;l.track=function(q,v,t,r,s,w){if(!v.constructor==Object){return}var z={};for(var x in l._EVENT_COMM_PROPERTIES){z[x]=l._EVENT_COMM_PROPERTIES[x]}z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._SDK_VERSION]=l.sdk_version;z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._SDK_PLATFORM]=l.sdk_platform;z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._PV_ID]=l.fai_he_pv_id;z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._URL]=document.URL;var y=l._TOOL._getScreenSize().split("x");z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._SCREEN_WIDTH]=Number(y[0]);z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._SCREEN_HEIGHT]=Number(y[1]);for(var x in v){z[x]=v[x]}if(!!t){z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._LOGIN_AID]=t}if(!!r){z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._LOGIN_SID]=r}if(!!s){z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._CLIID]=s}if(l.fai_is_oem!=c){z[l._DEF._REPORT._EVENT_TRACK._DEFAULT_PROPERTY._CORP_TYPE]=l.fai_is_oem}var u={};u[l._DEF._REPORT._URL._URL]=document.URL;u[l._DEF._REPORT._EVENT_TRACK._EVENT]=q;u[l._DEF._REPORT._EVENT_TRACK._EVENT_PROPERTIES]=!!window.JSON&&!!window.JSON.stringify?window.JSON.stringify(z):l._TOOL._json_stringify(z);u[l._DEF._REPORT._BASIC._REPORT_TYPE]=p._type;l._TOOL._sendReport(l.FAI_HAWK_EYE_REPORT_URL,u)};l.setEventCommProp=function(r){if(!r.constructor==Object){return}for(var q in r){l._EVENT_COMM_PROPERTIES[q]=r[q]}}}}l._TOOL._extend(d,k);l._MODULES[l._DEF._MODULE._KEY.EVENT_TRACK_MODULE]=new d("用户行为事件上报模块",l._DEF._MODULE._TYPE.EVENT_TRACK_MODULE)})(window,window.FAI_HAWK_EYE);window.FAI_HAWK_EYE._INTERFACE._install();