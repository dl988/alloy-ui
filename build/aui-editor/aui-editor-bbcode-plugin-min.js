AUI.add("aui-editor-bbcode-plugin",function(S){var F=S.Lang,O=F.isArray,P=F.isString,K=S.ClassNameManager.getClassName,J="bbcodeplugin",R="bbcode",N="quote",X=N,Q=N+"-content",Z=N+"-title",T="\\[(({0})=([^\\]]*))\\]([\\s\\S]*?)\\[\\/{0}\\]",V="\\[({0})\\]([\\s\\S]*?)\\[\\/{0}\\]",E="<{0}(>|\\b[^>]*>)([\\s\\S]*?)</{0}>",G="<(([a-z0-9]+)\\b[^>]*?style=(\"|').*?{0}\\s*:\\s*([^;\"']+);?[^>]*)>([\\s\\S]*?)<(/\\2)>",I="(<[a-z0-9]+[^>]*>|</[a-z0-9]+>)",M='<div class="'+X+'"><div class="'+Q+'">',H="</div></div>",D='<div class="'+Z+'">$1</div>'+M,L="<div>{0}</div>",U=new RegExp(I,"gi"),W=[{convert:[["br"]],regExp:"<{0}[^>]*>",output:"\n"},{convert:[{tags:["font-family"],source:["font"]},{tags:["font-size"],source:["size"]},{tags:["[^a-z-]*color"],source:["color"]}],regExp:G,output:"<$1>[{0}=$4]$5[/{0}]<$6>"},{convert:[{tags:["font-style"],source:["i"]},{tags:["font-weight"],source:["b"]}],regExp:G,output:"<$1>[{0}]$5[/{0}]<$6>"},{convert:[["text-decoration"]],regExp:G,output:function(){var a="";var A=arguments[4].toLowerCase();if(A.indexOf("underline")!=-1){a+="[u]";}else{if(A.indexOf("line-through")!=-1){a+="[s]";}}if(a!=""){return"<"+arguments[1]+">"+a+arguments[5]+a.replace("[","[/")+"<"+arguments[6]+">";}return arguments[0];}},{convert:[["margin-left"]],regExp:G,output:function(){var a="";var b=parseInt(arguments[3],10);if(!isNaN(b)){var c=Math.floor(b/40);for(var A=0;A<c;A++){a+="[indent]";}}a=a+arguments[5]+a.replace(/\[/g,"[/");return"<"+arguments[1]+">"+a+"<"+arguments[6]+">";}},{convert:[{tags:["font","size"],source:["size"]},{tags:["font","face"],source:["font"]}],regExp:"(<{0}\\b[^>]*{1}=(\"|')([^\"']+)(\"|')[^>]*>)([\\s\\S]*?)(</{0}>)",output:"$1[{0}=$3]$5[/{0}]$6"},{convert:[["text-align"]],regExp:G,output:"<$1>[$4]$5[/$4]<$6>"},{convert:[["quote"]],regExp:"<div\\b[^>]*class=(\"|')([^\"']*?)_"+X+"[^\"']*(\"|')[^>]*>([\\s\\S]*?)</div>",output:"$4"},{convert:[["span"]],regExp:E,output:"$2"},{convert:[["blockquote"]],regExp:E,output:"[indent]$2[/indent]"},{convert:[["b"],["strong"]],regExp:E,output:"[b]$2[/b]"},{convert:[["i"],["em"]],regExp:E,output:"[i]$2[/i]"},{convert:[["u"]],regExp:E,output:"[u]$2[/u]"},{convert:[["s"],["strike"]],regExp:E,output:"[s]$2[/s]"},{convert:[["img"]],regExp:"(<a[^>]*>)?<{0}\\b[^>]*src=(\"|')([^\"']+)(\"|')[^>]*>(</a>)?",output:"[img]$3[/img]"},{convert:[["a"]],regExp:"<{0}\\b[^>]*href=(\"|')mailto:([^\"']+)(\"|')[^>]*>([\\s\\S]*?)</{0}>",output:"[email=$2]$4[/email]"},{convert:[["a"]],regExp:"<{0}\\b[^>]*href=(\"|')([^\"']+)(\"|')[^>]*>([\\s\\S]*?)</{0}>",output:"[url=$2]$4[/url]"},{convert:[["center"]],regExp:E,output:"[center]$2[/center]"},{convert:[["ul"]],regExp:E,output:"[list]$2[/list]"},{convert:[["ol"]],regExp:E,output:"[list=1]$2[/list]"},{convert:[["li"]],regExp:E,output:"[*]$2"},{convert:[["code"]],regExp:E,output:"[code]$2[/code]"},{convert:[["div"]],regExp:E,output:"$2\n"},{convert:[["h1"],["h2"],["h3"],["h4"],["h5"],["h6"]],regExp:E,output:"[b]$2[/b]\n"},{convert:[["p"]],regExp:E,output:"$2\n\n"},{convert:[{tags:["list","left|center|right"],source:["list"]}],regExp:"(\\[{0}[^\\]]*\\])\\s*\\[({1})\\]([\\s\\S]*?)\\[/\\2\\]\\s*\\[/{0}\\]",output:"[$2]$1$3[/{0}][/$2]"}],C=[{convert:[{tags:["b"],source:["b"]},{tags:["i"],source:["i"]},{tags:["u"],source:["u"]},{tags:["s"],source:["s"]},{tags:["code"],source:["code"]}],regExp:V,output:"<{0}>$2</{0}>"},{convert:[{tags:["color"],source:["color"]}],regExp:T,output:'<span style="{0}: $3;">$4</span>'},{convert:[{tags:["font"],source:["face"]},{tags:["size"],source:["size"]}],regExp:T,output:'<font {0}="$3">$4</font>'},{convert:[["img"]],regExp:V,output:'<img src="$2" alt="" />'},{convert:[{tags:["email"],source:["mailto:"]},{tags:["url"],source:[""]}],regExp:T,output:'<a href="{0}$3">$4</a>'},{convert:[["list"]],regExp:"\\[({0}(=1)?)]([\\s\\S]*?)\\[\\/{0}\\]",output:function(){var b="";if(arguments[1]=="list=1"){b+="<ol>";}else{b+="<ul>";}var A=F.trim(arguments[3]).split("[*]");for(var a=1;a<A.length;a++){b+="<li>"+A[a]+"</li>";}if(arguments[1]=="list=1"){b+="</ol>";}else{b+="</ul>";}return b;}},{convert:[{tags:["indent"],source:["blockquote"]}],regExp:V,output:"<{0}>$2</{0}>"},{convert:[["left"],["center"],["right"]],regExp:V+"\n?",output:'<div style="text-align: $1;">$2</div>'},{convert:[["\n"]],regExp:"{0}",output:"<br />"}];var Y={};Y[N]={children:[{icon:"quote",_titleKey:"QUOTE"}]};S.mix(S.Plugin.ExecCommand.COMMANDS,{quote:function(c,d){var A=this;var b=A.get("host");var a=M+"{0}"+H;b.execCommand("wraphtml",a);b.focus();}});if(!YUI.AUI.defaults.EditorToolbar){YUI.AUI.defaults.EditorToolbar={STRINGS:{}};}S.mix(YUI.AUI.defaults.EditorToolbar.STRINGS,{QUOTE:"Quote"});var B=S.Component.create({NAME:J,NS:R,EXTENDS:S.Plugin.Base,ATTRS:{host:{value:false}},prototype:{initializer:function(){var A=this;var a=A.get("host");a.addGroupType(N,Y[N]);A.afterHostMethod("getContent",A.getBBCode,A);a.on("contentChange",A._contentChange,A);},getBBCode:function(){var A=this;var c=A.get("host");var d=c.getInstance();var e=d.one("body");var a;var b=function(n,h,f){var i;var m=n;do{if(m){i=m;}m=m.one("div."+Q);}while(m);var l=i.get("parentNode");var k=l.previous();var j="["+N;if(k&&k.hasClass(Z)){var g=k.get("innerHTML");g=g.replace(U,"");j+="="+(g.charAt(g.length-1)==":"?g.substring(0,g.length-1):k.get("innerHTML"));k.remove(true);}j+="]"+i.get("innerHTML")+"[/"+N+"]\n";l.set("innerHTML",j);l.removeClass(N);l.addClass("_"+N);};while(a=e.all("div."+X)){if(!a.size()){break;}a.each(b);}html=e.get("innerHTML");html=A._parseTagExpressions(W,html);html=html.replace(U,"");return new S.Do.AlterReturn(null,html);},getContentAsHtml:function(){var A=this;var a=A.get("host");return a.constructor.prototype.getContent.apply(a,arguments);},_contentChange:function(b){var A=this;var a=b.newVal;a=a.replace(/\[quote=([^\]]*)\]/gi,D);a=a.replace(/\[quote\]/gi,M);a=a.replace(/\[\/quote\]\n?/gi,H);a=A._parseTagExpressions(C,a);b.newVal=a;b.stopImmediatePropagation();},_parseTagExpressions:function(l,f){var k=this;var e;var h;var A;var a;var m;
for(var d=0;d<l.length;d++){e=l[d];h=e.convert;a=h.length;for(var c=0;c<a;c++){var b=e.output;A=h[c];if(O(A)){m=A;}else{m=A.tags;if(P(b)){b=F.sub(b,A.source);}}var g=F.sub(e.regExp,m);f=f.replace(new RegExp(g,"gi"),b);}}return f;}}});S.namespace("Plugin").EditorBBCode=B;},"@VERSION@",{requires:["aui-base","editor-base"]});