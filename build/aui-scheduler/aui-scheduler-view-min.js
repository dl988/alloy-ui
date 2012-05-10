AUI.add("aui-scheduler-view",function(ci){var cv=ci.Lang,cJ=cv.isObject,b8=cv.isString,a2=cv.isBoolean,aI=cv.isNumber,bU=function(A){return parseFloat(A)||0;},bX=function(cO,A){return Math.round(cO/A)*A;},au=ci.DataType.DateMath,ce=ci.WidgetStdMod,aP=au.WEEK_LENGTH,bZ="scheduler-view",aH="scheduler-view-day",cm="scheduler-view-week",cC="scheduler-view-month",bh="activeColumn",bT="activeView",aV="boundingBox",cM="cancel",aj="col",aA="colDaysNode",ck="colHeaderDaysNode",J="colblank",x="coldata",aK="colday",a="colgrid",Y="colspan",m="coltime",bv="columnData",a1="columnDayHeader",aM="columnShims",aT="columnTableGrid",bn="columnTime",aS="container",aQ="content",bg="creationEndDate",ab="creationStartDate",bl="currentDate",bI="data",cs="day",V="days",C="delegateConfig",bR="disabled",Z="div",bu="division",cE="dotted",ad="down",F="draggingEvent",b7="duration",aD="endDate",ba="event",cD="eventClass",bQ="eventPlaceholder",cL="eventRecorder",r="eventWidth",aJ="first",cn="firstDayOfWeek",bj="grid",bF="gridContainer",bb="grip",cK="hd",cg="header",bk="headerDateFormat",cI="headerTableNode",bf="horizontal",aU="host",aG="hourHeight",t="icon",t="icon",an="isoTime",a0="lasso",aW="left",aB="locale",ae="marker",bd="markercell",a5="markercellsNode",L="markers",bL="markersNode",bN="month",bi="monthContainerNode",e="monthRows",D="mousedown",N="mousemove",aZ="mouseup",aR="next",cN="node",am="nomonth",av="noscroll",cf="offsetHeight",ch="offsetWidth",cj="pad",aL="paddingNode",cx="parentEvent",S="parentNode",bC="proxy",ak="px",af="region",aX="rendered",cd="repeated",b1="resizer",ca="resizerNode",bW="resizing",a6="right",bA="row",bY="save",q="scheduler",aF="scheduler-event",aa="scrollable",U="shim",cl="startDate",X="startXY",aY="table",B="tableGridNode",bG="tableNode",bD="tbody",f="td",bx="time",al="timesNode",h="title",ao="today",bB="top",az="visible",cy="week",bJ="width",u="data-colnumber",k="a",bt=",",bV="-",b0=".",bS="",bK="%",W=" ",E=ci.getClassName,bw=E(bZ,av),ag=E(bZ,aa);var a4=ci.Component.create({NAME:bZ,AUGMENTS:[ci.WidgetStdMod],ATTRS:{bodyContent:{value:bS},eventClass:{valueFn:function(){return ci.SchedulerEvent;}},height:{value:600},isoTime:{value:false,validator:a2},name:{value:bS,validator:b8},navigationDateFormat:{value:"%A - %d %B, %Y",validator:b8},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:a2},triggerNode:{setter:ci.one},visible:{value:false}},BIND_UI_ATTRS:[aa],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},adjustCurrentDate:function(){var A=this;var cP=A.get(q);var cO=cP.get(bl);cP.set(bl,cO);},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return au.clearTime(new Date());},limitDate:function(cO,cP){var A=this;if(au.after(cO,cP)){cO=au.clone(cP);}return cO;},plotEvents:function(){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetCurrentDate:function(A){},_afterRender:function(cO){var A=this;A.adjustCurrentDate();A._uiSetScrollable(A.get(aa));},_setScheduler:function(cP){var A=this;var cO=A.get(q);if(cO){A.removeTarget(cO);}if(cP){A.addTarget(cP);cP.after("eventsChange",ci.bind(A.flushViewCache,A));}return cP;},_uiSetScrollable:function(cP){var A=this;var cO=A.bodyNode;if(cO){cO.toggleClass(ag,cP);cO.toggleClass(bw,!cP);}},_uiSetVisible:function(cO){var A=this;a4.superclass._uiSetVisible.apply(this,arguments);if(cO&&A.get(aX)){A.adjustCurrentDate();}}}});ci.SchedulerView=a4;var bP=cv.sub;var P=function(A,cO){return function(cQ){var cP=cQ.all(A);return(cP.size()>=cO)?cP:null;};},g=E(t),G=E(t,bb,cE,bf),aN=E(aF),bq=E(aF,bR),b4=E(aF,bC),R=E(q,ao),at=E(q,ao,cK),y=E(bZ,x),c=E(bZ,a),co=E(bZ,bj),cp=E(bZ,bj,aS),aO=E(bZ,cs,b1,t),b2=E(bZ,cs,b1),bs=E(bZ,ae,bu),cr=E(bZ,bd),M=E(bZ,L),bH=E(bZ,aY),cu=E(bZ,cs,cg,aY),s=E(bZ,cs,cg,cs),br=E(bZ,cs,cg,cs,cj,a6),b6=E(bZ,cs,cg,cs,aJ),a9=E(bZ,cs,cg,aj),cG=E(bZ,aY,aj),aE=E(bZ,aY,aj,U),Q=E(bZ,aY,J),I=E(bZ,aY,aK),cz=E(bZ,aY,m),bz=E(bZ,aY,bx),o='<div class="'+b2+'">'+'<div class="'+[g,G,aO].join(W)+'"></div>'+"</div>",ah='<div class="'+cr+'">'+'<div class="'+bs+'"></div>'+"</div>",ax='<table cellspacing="0" cellpadding="0" class="'+bH+'">'+"<tbody>"+'<tr class="'+c+'" height="1">'+'<td height="0" class="'+[cG,Q].join(W)+'"></td>'+'<td class="'+cp+'" colspan="1">'+'<div class="'+co+'">'+'<div class="'+M+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+y+'">'+'<td class="'+[cG,cz].join(W)+'"></td>'+"</tr>"+"</tbody>"+"</table>",bo='<td class="'+[cG,I].join(W)+'" data-colnumber="{colNumber}">'+'<div class="'+aE+'"></div>'+"</td>",j='<div class="'+bz+'">{hour}</div>',ay='<table cellspacing="0" cellpadding="0" class="'+cu+'">'+"<tbody>"+'<tr class="'+a9+'"></tr>'+"</tbody>"+"</table>",bp='<th class="'+s+'" data-colnumber="{colNumber}"><a href="#">&nbsp;</a></th>',aw='<td class="'+[s,b6].join(W)+'"></td>',v='<th class="'+[s,br].join(W)+'">&nbsp;</th>';var cH=ci.Component.create({NAME:aH,ATTRS:{bodyContent:{value:bS},days:{value:1,validator:aI},delegateConfig:{value:{},setter:function(cO){var A=this;return ci.merge({dragConfig:{useShim:false},bubbleTargets:A,container:A.get(aV),nodes:b0+aN,invalid:"input, select, button, a, textarea, "+b0+bq},cO||{});},validator:cJ},headerDateFormat:{value:"%d %A",validator:b8},name:{value:cs},hourHeight:{value:52,validator:aI},eventWidth:{value:95,validator:aI},headerTableNode:{valueFn:function(){return ci.Node.create(ay);}},resizerNode:{valueFn:function(){return ci.Node.create(o);}},tableNode:{valueFn:function(){return ci.Node.create(ax);}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colDaysNode:P(b0+I,1),colHeaderDaysNode:P(b0+s,2),headerTableNode:b0+cu,markercellsNode:P(b0+cr,24),resizerNode:b0+b2,tableNode:b0+bH,timesNode:P(b0+bz,24)},EXTENDS:ci.SchedulerView,prototype:{initializer:function(){var A=this;
A[aA]=A.get(aA);A[ck]=A.get(ck);A[cI]=A.get(cI);A[a5]=A.get(a5);A[ca]=A.get(ca);A[bG]=A.get(bG);A[al]=A.get(al);A[bh]=null;A[bv]=A[bG].one(b0+y);A[a1]=A.headerTableNode.one(b0+a9);A[aM]=A[aA].all(b0+aE);A[bn]=A[bG].one(b0+cz);A[bF]=A[bG].one(b0+cp);A[bL]=A[bG].one(b0+M);},renderUI:function(){var A=this;A[bn].setContent(A[al]);A[bL].setContent(A[a5]);A[aA].appendTo(A[bv]);A[ck].appendTo(A[a1]);},bindUI:function(){var A=this;A[cI].delegate("click",ci.bind(A._onClickDaysHeader,A),b0+s);A[bv].delegate("mousedown",ci.bind(A._onMouseDownTableCol,A),b0+cG);A[bv].delegate("mouseenter",ci.bind(A._onMouseEnterEvent,A),b0+aN);A[bv].delegate("mouseleave",ci.bind(A._onMouseLeaveEvent,A),b0+aN);A[bv].delegate("mousemove",ci.bind(A._onMouseMoveTableCol,A),b0+I);A[bv].delegate("mouseup",ci.bind(A._onMouseUpTableCol,A),b0+cG);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);A.on("drag:tickAlignY",A._dragTickAlignY);A.after("drag:align",A._afterDragAlign);},syncUI:function(){var A=this;cH.superclass.syncUI.apply(this,arguments);A[bF].attr(Y,A.get(V));A._setupDragDrop();},syncStdContent:function(){var A=this;A.setStdModContent(ce.BODY,A[bG].getDOM());A.setStdModContent(ce.HEADER,A[cI].getDOM());},calculateEventHeight:function(cP){var cO=this;var A=cO.get(aG);return Math.max(cP*(A/60),A/2);},calculateTop:function(cO){var A=this;return((cO.getHours()*60)+cO.getMinutes()+(cO.getSeconds()/60))*(A.get(aG)/60);},getNextDate:function(){var A=this;var cO=A.get(q).get(bl);return au.add(cO,au.DAY,1);},getPrevDate:function(){var A=this;var cO=A.get(q).get(bl);return au.subtract(cO,au.DAY,1);},getColumnByDate:function(cO){var A=this;return A[aA].item(A.getDateDaysOffset(cO));},getColumnShimByDate:function(cO){var A=this;return A[aM].item(A.getDateDaysOffset(cO));},getDateByColumn:function(cP){var A=this;var cO=au.safeClearTime(A.get(q).get(bl));return au.add(cO,au.DAY,cP);},getDateDaysOffset:function(cP){var A=this;var cO=au.safeClearTime(A.get(q).get(bl));return au.getDayOffset(au.safeClearTime(cP),cO);},getYCoordTime:function(cR){var cO=this;var A=cO.get(aG);var cS=bU((cR/A).toFixed(2));var cQ=Math.floor((cS*100)%100*0.6);var cP=Math.floor(cS);return[cP,cQ,0];},plotEvent:function(cP){var A=this;var cQ=cP.get(cN);if(cQ.size()<2){cP.addPaddingNode();}var cS=cP.get(cN).item(0);var cO=cP.get(cN).item(1);var cR=A.getColumnShimByDate(cP.get(aD));var cT=A.getColumnShimByDate(cP.get(cl));if(cT){cT.append(cS);if(cP.get(az)){cS.show();}}else{cS.hide();}if(cR){if(cR.compareTo(cT)||cP.isDayBoundaryEvent()){cO.hide();}else{cR.append(cO);if(cP.get(az)){cO.show();}}}else{cO.hide();}A.syncEventTopUI(cP);A.syncEventHeightUI(cP);},plotEvents:function(){var A=this;var cO=A.get(q);A[aM].each(function(cR,cQ){var cP=cO.getEventsByDay(A.getDateByColumn(cQ),true);cR.empty();ci.Array.each(cP,function(cS){if(cS.getHoursDuration()<=24){A.plotEvent(cS);}});A.syncEventsIntersectionUI(cP);});},syncColumnsUI:function(){var A=this;A[aA].each(function(cQ,cP){var cO=A.getDateByColumn(cP);cQ.toggleClass(R,au.isToday(cO));});},syncDaysHeaderUI:function(){var cP=this;var cQ=cP.get(q).get(bl);var cO=cP.get(bk);var A=cP.get(aB);cP[ck].all(k).each(function(cT,cS){var cR=au.add(cQ,au.DAY,cS);var cU=ci.DataType.Date.format(cR,{format:cO,locale:A});cT.toggleClass(at,au.isToday(cR));cT.html(cU);});},syncEventsIntersectionUI:function(cO){var A=this;var cP=A.get(r);A.get(q).flushEvents();ci.Array.each(cO,function(cR){var cT=A.findEventIntersections(cR,cO);var cS=cT.length;var cQ=(cP/cS);ci.Array.each(cT,function(cV,cW){var cU=cV.get(cN).item(0);var cY=cQ*cW;var cX=cQ*1.7;if(cW===(cS-1)){cX=cP-cY;}cU.setStyle(bJ,cX+bK);cU.setStyle(aW,cY+bK);var cZ=cU.get(S);if(cZ){cZ.insert(cU,cW);}cV._filtered=true;});});},syncEventHeightUI:function(cQ){var cO=this;var cU=cQ.get(aD);var A=cQ.get(cl);var cR=au.clone(A);cR.setHours(24,0,0);var cS=au.getMinutesOffset(cO.limitDate(cU,cR),A);cQ.get(cN).item(0).set(cf,cO.calculateEventHeight(cS));var cP=cQ.get(cN).item(1);if(cP.inDoc()){var cT=au.getMinutesOffset(cU,au.toMidnight(cQ.getClearEndDate()));cP.set(cf,cO.calculateEventHeight(cT));}},syncEventTopUI:function(cO){var A=this;cO.get(cN).item(0).setStyle(bB,A.calculateTop(cO.get(cl))+ak);cO.get(cN).item(1).setStyle(bB,0);},calculateYDelta:function(cP,cO){var A=this;return(cO[1]-cP[1])/(A.get(aG)/2)*30;},findEventIntersections:function(cO,cP){var A=this;var cQ=[];ci.Array.each(cP,function(cR){if(!cO._filtered&&cO.intersectHours(cR)&&(!cR.isDayOverlapEvent()||cR.isDayBoundaryEvent())){cQ.push(cR);}});return cQ;},getXYDelta:function(cO){var A=this;var cP=cO.currentTarget.getXY(),cQ=[cO.pageX,cO.pageY];return ci.Array.map(cP,function(cS,cR){return(cQ[cR]-cS);});},getTickY:function(){var A=this;return bX(Math.ceil(A.get(aG)/2),10);},roundToNearestHour:function(cO,cP){var A=this;cO.setHours(cP[0],bX(cP[1],A.getTickY()),cP[2]);},_afterDragAlign:function(cP){var cO=this;var A=cP.target;if(!cO[X]){cO[X]=A.actXY;}A.actXY[0]=null;},_dragTickAlignX:function(cP){var cO=this;var cS=cO[F];if(cS&&!cO[bW]){var cQ=cO[bQ];var cR=bU(cP.attr(u))-cO.startColNumber;cO.draggingEventStartDate=au.add(cS.get(cl),au.DAY,cR);var A=au.clone(cO.draggingEventStartDate);au.copyHours(A,cQ.get(cl));cQ.move(A);cO.plotEvent(cQ);}},_dragTickAlignY:function(A){var cT=this;var cO=cT.get(q);var cV=cO.get(cL);var cQ=cT[F];if(cQ){var cU=A.target.get(aU);var cR=cT[bQ];var cS=cT.calculateYDelta(cT[X],cU.actXY);if(cT[bW]){var cP=au.add(cT.draggingEventEndDate,au.MINUTES,cS);if(au.getMinutesOffset(cP,cT.draggingEventStartDate)<=cV.get(b7)){return;}cR.set(aD,cP);}else{cR.move(au.add(cT.draggingEventStartDate,au.MINUTES,cS));}cT.plotEvent(cR);}},_setupDragDrop:function(){var cO=this;if(!cO[bQ]){var cP=cO.get(q);cO[bQ]=new (cO.get(cD))({scheduler:cP});cO[bQ].removeTarget(cP);cO[bQ].get(cN).addClass(b4).hide();}if(!cO.delegate){cO.delegate=new ci.DD.Delegate(cO.get(C));}var A=cO.delegate.dd;A.unplug(ci.Plugin.DDConstrained);A.unplug(ci.Plugin.DDNodeScroll);var cQ=cO.bodyNode.get(af);cQ.bottom=Infinity;cQ.top=-Infinity;
A.plug(ci.Plugin.DDConstrained,{bubbleTargets:cO,constrain:cQ,stickY:true,tickY:cO.get(aG)/2});A.plug(ci.Plugin.DDNodeScroll,{node:cO.bodyNode,scrollDelay:150});},_uiSetCurrentDate:function(cO){var A=this;A.syncColumnsUI();A.syncDaysHeaderUI();},_onClickDaysHeader:function(cQ){var A=this;var cP=A.get(q);if(cQ.target.test(k)){var cR=cP.getViewByName(cs);if(cR){var cO=bU(cQ.currentTarget.attr(u));cP.set(bl,A.getDateByColumn(cO));cP.set(bT,cR);}}cQ.preventDefault();},_onEventDragEnd:function(cO){var A=this;var cQ=A[F];if(cQ){var cP=A[bQ];cP.set(az,false);cQ.set(az,true);cQ.copyDates(cP);A.get(q).syncEventsUI();}A[X]=null;A[F]=null;},_onEventDragStart:function(cP){var A=this;var cR=A[F]=A.delegate.dd.get(cN).getData(aF);if(cR){var cQ=A[bQ];cQ.copyPropagateAttrValues(cR);A.plotEvent(cQ);cR.set(az,false);A.draggingEventStartDate=au.clone(cR.get(cl));A.draggingEventEndDate=au.clone(cR.get(aD));var cO=A.getColumnByDate(cR.get(cl));A.startColNumber=cO?bU(cO.attr(u)):0;}},_onMouseDownTableCol:function(cO){var cT=this;var cS=cO.target;var cQ=cT.get(q);var cU=cQ.get(cL);if(cU&&!cQ.get(bR)){cU.hideOverlay();if(cS.test(b0+aE)){cT[X]=[cO.pageX,cO.pageY];var cV=bU(cO.currentTarget.attr(u));var cP=cT.getDateByColumn(cV);var A=cT.getXYDelta(cO);cT.roundToNearestHour(cP,cT.getYCoordTime(A[1]));var cR=au.add(cP,au.MINUTES,cU.get(b7));cU.move(cP);cU.set(aD,cR);cT[ab]=cP;cT[bg]=cR;cO.halt();}else{if(cS.test([b0+b2,b0+aO].join(bt))){cT[bW]=true;}}}cT.get(aV).unselectable();},_onMouseEnterEvent:function(cO){var A=this;var cP=cO.currentTarget;A[ca].appendTo(cP);},_onMouseLeaveEvent:function(cO){var A=this;if(!A[bW]){A._removeResizer();}},_onMouseMoveTableCol:function(cR){var A=this;var cQ=cR.currentTarget;var cO=A.get(q).get(cL);if(A[bh]!==cQ){A[bh]=cQ;A._dragTickAlignX(A[bh]);}var cP=A[bg];var cS=A[ab];if(cS){var cT=bX(A.calculateYDelta(A[X],[cR.pageX,cR.pageY]),A.getTickY());if(A._delta!==cT){if(cT>0){cO.set(aD,au.add(cP,au.MINUTES,cT));}else{cO.set(cl,au.add(cS,au.MINUTES,cT));}A.plotEvent(cO);A._delta=cT;}}},_onMouseUpTableCol:function(cQ){var A=this;var cP=A.get(q);var cO=cP.get(cL);if(cO&&!cP.get(bR)){if(A[ab]){A.plotEvent(cO);cO.showOverlay();}}A[ab]=null;A[bg]=null;A[bW]=false;A[X]=null;A._removeResizer();A.get(aV).selectable();},_removeResizer:function(){var A=this;A[ca].remove();},_valueColDaysNode:function(){var A=this;var cQ=A.get(V);var cO=[],cP=0;while(cQ--){cO.push(ci.Lang.sub(bo,{colNumber:cP++}));}return ci.NodeList.create(cO.join(bS));},_valueColHeaderDaysNode:function(){var A=this;var cQ=A.get(V);var cO=[],cP=0;cO.push(aw);while(cQ--){cO.push(ci.Lang.sub(bp,{colNumber:cP++}));}cO.push(v);return ci.NodeList.create(cO.join(bS));},_valueMarkercellsNode:function(){var A=this;var cO=[],cP;for(cP=0;cP<=23;cP++){cO.push(ah);}return ci.NodeList.create(cO.join(bS));},_valueTimesNode:function(){var A=this;var cQ=A.get(an);var cP=[],cO;for(cO=0;cO<=23;cO++){cP.push(bP(j,{hour:cQ?au.toIsoTimeString(cO):au.toUsTimeString(cO,false,true)}));}return ci.NodeList.create(cP.join(bS));}}});ci.SchedulerDayView=cH;var ap=ci.Component.create({NAME:cm,ATTRS:{bodyContent:{value:bS},days:{value:7},name:{value:cy}},EXTENDS:ci.SchedulerDayView,prototype:{adjustCurrentDate:function(){var A=this;var cQ=A.get(q);var cO=cQ.get(bl);var cP=cQ.get(cn);cQ.set(bl,au.getFirstDayOfWeek(cO,cP));},getNextDate:function(){var A=this;var cP=A.get(q);var cO=cP.get(bl);var cQ=A._firstDayOfWeek(cO);return au.add(cQ,au.WEEK,1);},getPrevDate:function(){var A=this;var cP=A.get(q);var cO=cP.get(bl);var cQ=A._firstDayOfWeek(cO);return au.subtract(cQ,au.WEEK,1);},getToday:function(){var A=this;var cO=ap.superclass.getToday.apply(this,arguments);return A._firstDayOfWeek(cO);},_firstDayOfWeek:function(cP){var A=this;var cQ=A.get(q);var cO=cQ.get(cn);return au.getFirstDayOfWeek(cP,cO);}}});ci.SchedulerWeekView=ap;var g=E(t),l=E(t,"arrowstop-1-l"),cA=E(t,"arrowstop-1-r"),cc=E(bZ,bN,a),n=E(bZ,bN,a,aJ),b=E(bZ,bN,a,ao),i=E(bZ,bN,aS),bc=E(bZ,bN,cg,aj),w=E(bZ,bN,cg,cs),cB=E(bZ,bN,cg,aY),aq=E(bZ,bN,a0),cb=E(bZ,bN,bA),ar=E(bZ,bN,bA,aS),bM=E(bZ,bN,aY,bI),b9=E(bZ,bN,aY,bI,aj),a8=E(bZ,bN,aY,bI,aj,am),a3=E(bZ,bN,aY,bI,aj,h),cF=E(bZ,bN,aY,bI,aj,h,ad),ai=E(bZ,bN,aY,bI,aj,h,aJ),z=E(bZ,bN,aY,bI,aj,h,aR),T=E(bZ,bN,aY,bI,aj,h,ao),by=E(bZ,bN,aY,bI,ba),d=E(bZ,bN,aY,bI,ba,aW),p=E(bZ,bN,aY,bI,ba,cd),b3=E(bZ,bN,aY,bI,ba,a6),a7=E(bZ,bN,aY,bI,aJ),bm=E(bZ,bN,aY,bj),cw=E(bZ,bN,aY,bj,aJ),H='<table cellspacing="0" cellpadding="0" class="'+cB+'">'+"<tbody>"+'<tr class="'+bc+'"></tr>'+"</tbody>"+"</table>",O='<th class="'+w+'"><div>&nbsp;</div></th>',bO='<div class="'+aq+'"></div>',ct='<div class="'+i+'">'+'<div class="'+ar+'">'+'<div class="'+cb+'" style="top: 0; height: 16.6667%;"></div>'+'<div class="'+cb+'" style="top: 16.6667%; height: 16.6667%;"></div>'+'<div class="'+cb+'" style="top: 33.3333%; height: 16.6667%;"></div>'+'<div class="'+cb+'" style="top: 50%; height: 16.6667%;"></div>'+'<div class="'+cb+'" style="top: 66.6667%; height: 16.6667%;"></div>'+'<div class="'+cb+'" style="top: 83.3333%; height: 16.6667%;"></div>'+"</div>"+"</div>",bE='<table cellspacing="0" cellpadding="0" class="'+bm+'">'+"<tbody>"+"<tr>"+'<td class="'+[cc,n].join(W)+'">&nbsp;</td>'+'<td class="'+cc+'">&nbsp;</td>'+'<td class="'+cc+'">&nbsp;</td>'+'<td class="'+cc+'">&nbsp;</td>'+'<td class="'+cc+'">&nbsp;</td>'+'<td class="'+cc+'">&nbsp;</td>'+'<td class="'+cc+'">&nbsp;</td>'+"</tr>"+"</tbody>"+"</table>",b5='<table cellspacing="0" cellpadding="0" class="'+bM+'">'+"<tbody></tbody>"+"</table>",cq="<tr></tr>",be='<td class="'+b9+'"><div></div></td>',ac='<span class="'+[g,l].join(W)+'"></span>',K='<span class="'+[g,cA].join(W)+'"></span>';var aC=ci.Component.create({NAME:cC,ATTRS:{bodyContent:{value:bS},name:{value:bN},headerDateFormat:{value:"%a"},navigationDateFormat:{value:"%b %Y"},scrollable:{value:false},monthContainerNode:{valueFn:function(){return ci.Node.create(ct);}},headerTableNode:{valueFn:function(){return ci.Node.create(H);}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{tableGridNode:P(b0+bm,7),colHeaderDaysNode:P(b0+w,7),monthContainerNode:b0+i,headerTableNode:b0+cB},EXTENDS:ci.SchedulerView,prototype:{evtDateStack:null,evtDataTableStack:null,initializer:function(){var A=this;
A.evtDateStack={};A.evtDataTableStack={};A[ck]=A.get(ck);A[cI]=A.get(cI);A[bi]=A.get(bi);A[B]=A.get(B);A[a1]=A.headerTableNode.one(b0+bc);A[aT]=A[B].all(f);A[e]=A[bi].all(b0+cb);},bindUI:function(){var A=this;var cO=A.get(q).get(cL);cO.on({cancel:ci.bind(A.removeLasso,A),save:ci.bind(A.removeLasso,A)});A[bi].on({mousedown:ci.bind(A._onMouseDownGrid,A),mousemove:ci.bind(A._onMouseMoveGrid,A),mouseup:ci.bind(A._onMouseUpGrid,A)});},renderUI:function(){var A=this;A.colHeaderDaysNode.appendTo(A[a1]);A[e].each(function(cQ,cP){var cO=A[B].item(cP);cQ.append(cO.toggleClass(cw,(cP===0)));});},adjustCurrentDate:function(){var A=this;var cO=A.get(q);cO.set(bl,A._findCurrentMonthStart());},buildEventsTable:function(cO,cT){var cZ=this;var cW=4;var cQ=au.clearTime(cZ._findCurrentMonthEnd());var cY=au.clearTime(cZ._findCurrentMonthStart());var cV=String(cY.getTime()).concat(cO.getTime()).concat(cT.getTime());var cU=cZ.evtDataTableStack[cV];if(!cU){cU=ci.Node.create(b5);var cX=cU.one(bD);var cR=ci.Node.create(cq);cZ.loopDates(cO,cT,function(c1,c0){var c2=ci.Node.create(be);c2.addClass(a3).toggleClass(ai,(c0===0)).toggleClass(T,au.isToday(c1)).toggleClass(z,au.isToday(au.subtract(c1,au.DAY,1))).toggleClass(cF,au.isToday(au.subtract(c1,au.WEEK,1)));if(au.before(c1,cY)||au.after(c1,cQ)){c2.addClass(a8);}cR.append(c2.setContent(c1.getDate()));});cX.append(cR);var A;for(A=0;A<cW;A++){var cS=0;var cP=ci.Node.create(cq);cZ.loopDates(cO,cT,function(c8,c5){if(cS<=c5){var c9=cZ.getIntersectEvents(c8),c6=c9[A];var c2=ci.Node.create(be);if(c6){var c1=c6.get(cl);if(!(au.before(c1,cO)&&au.getDayOffset(c8,cO)>0)){var c3=c6.get(cN);var c7=Math.floor(au.getDayOffset(c8,au.getFirstDayOfWeek(c1))/aP);if(c3.size()<c7+1){c6.addPaddingNode();}var c4=c3.item(c7);c4.setStyles({height:"auto",left:0,top:0,width:"auto"});var c0=c2.one(Z);c4.appendTo(c0);var da=cZ._getEvtSplitInfo(c6,c8,cO,cT);c2.attr(Y,da.colspan);c0.addClass(by);if(da.left){c0.addClass(d).prepend(ac);}if(da.right){c0.addClass(b3).append(K);}if(c6.get(cx)){c0.addClass(p);}cS+=da.colspan;}}else{cS++;}cP.append(c2);}});cX.append(cP);}cZ.evtDataTableStack[cV]=cU;}return cU;},flushViewCache:function(){var A=this;A.evtDateStack={};A.evtDataTableStack={};},getIntersectEvents:function(cO){var A=this;var cQ=A.get(q);var cP=String(cO.getTime());if(!A.evtDateStack[cP]){A.evtDateStack[cP]=cQ.getIntersectEvents(cO);}return A.evtDateStack[cP];},getNextDate:function(){var A=this;var cP=A.get(q);var cO=cP.get(bl);return au.add(cO,au.MONTH,1);},getPrevDate:function(){var A=this;var cP=A.get(q);var cO=cP.get(bl);return au.subtract(cO,au.MONTH,1);},loopDates:function(A,cQ,cT,cU,cS){var cV=this;var cO=au.clone(A);var cP=cQ.getTime(),cR;for(cR=0;cO.getTime()<=cP;cR++){cT.apply(cV,[cO,cR]);cO=au.add(cO,(cU||au.DAY),(cS||1));}},plotEvents:function(){var cO=this;var cP=cO._findCurrentMonthStart();var A=au.safeClearTime(cO._findFirstDayOfWeek(cP));cO.flushViewCache();cO.bodyNode.all(b0+bM).remove();cO[e].each(function(cT,cR){var cQ=au.add(A,au.WEEK,cR);var cU=au.add(cQ,au.DAY,aP-1);var cS=cO.buildEventsTable(cQ,cU);if(cR===0){cS.addClass(a7);}cT.append(cS);});},removeLasso:function(){var A=this;if(A.lasso){A.lasso.remove();}},renderLasso:function(cU,cO){var c0=this;var cR=cU;var cT=cO;if(cU[1]>cO[1]){cR=cO;cT=cU;}var c1=cR[0],cW=cR[1],cP=cT[0],A=cT[1];c0.removeLasso();c0.lasso=ci.NodeList.create();for(var cQ=cW;cQ<=A;cQ++){var cS=c0.gridCellHeight,cZ=c0.gridCellWidth,cX=0,cV=(cS*cQ);if(cQ===cW){if(cW===A){cX+=Math.min(c1,cP)*cZ;cZ*=Math.abs(cP-c1)+1;}else{cX+=c1*cZ;cZ*=aP-c1;}}else{if(cQ===A){cZ*=cP+1;}else{cZ*=aP;}}var cY=ci.Node.create(bO);c0.lasso.push(cY);c0[bi].append(cY);cY.sizeTo(cZ,cS);cY.setXY(c0._offsetXY([cX,cV],1));}},syncDaysHeaderUI:function(){var cP=this;var cS=cP.get(q);var cQ=cS.get(bl);var cO=cP.get(bk);var A=cP.get(aB);var cR=cP._findFirstDayOfWeek(cQ);cP.colHeaderDaysNode.all(Z).each(function(cV,cU){var cT=au.add(cR,au.DAY,cU);var cW=ci.DataType.Date.format(cT,{format:cO,locale:A});cV.html(cW);});},syncGridUI:function(){var cV=this;var cP=cV.getToday();var cO=cV.get(q);cV[aT].removeClass(b);if(au.isSameMonth(cP,cO.get(bl))){var A=cO.get(cn);var cR=cV._findCurrentMonthStart();var cT=cV._findFirstDayOfWeek(cP);var cQ=au.getWeekNumber(cP,A)-au.getWeekNumber(cR,A);var cU=(cP.getDate()-cT.getDate());var cS=cV[B].item(cQ).all(f).item(cU);if(cS){cS.addClass(b);}}},syncStdContent:function(){var A=this;A.setStdModContent(ce.BODY,A[bi].getDOM());A.setStdModContent(ce.HEADER,A[cI].getDOM());},_findCurrentMonthEnd:function(){var A=this;var cP=A.get(q);var cO=cP.get(bl);return au.findMonthEnd(cO);},_findCurrentMonthStart:function(){var A=this;var cP=A.get(q);var cO=cP.get(bl);return au.findMonthStart(cO);},_findFirstDayOfWeek:function(cP){var A=this;var cQ=A.get(q);var cO=cQ.get(cn);return au.getFirstDayOfWeek(cP,cO);},_getEvtLabel:function(cP){var cO=this;var cQ=cP.get(aD);var A=cP.get(cl);return[A.getHours(),bV,cQ.getHours(),W,cP.get(aQ)].join(bS);},_getEvtSplitInfo:function(cT,cW,A,cQ){var cU=this;var cO=cT.getClearStartDate();var cR=cT.getClearEndDate();var cS=au.getFirstDayOfWeek(cW);var cV=au.getDayOffset(cQ,cW);var cP={colspan:Math.min(au.getDayOffset(cR,cW),cV)+1,left:au.before(cO,A),right:au.after(cR,cQ)};return cP;},_getPositionDate:function(cP){var cO=this;var cQ=cO._findCurrentMonthStart();var A=au.safeClearTime(cO._findFirstDayOfWeek(cQ));return au.add(A,au.DAY,cO._getCellIndex(cP));},_getCellIndex:function(cO){var A=this;return cO[1]*aP+cO[0];},_offsetXY:function(cQ,cP){var A=this;var cO=A[bi].getXY();return[cQ[0]+cO[0]*cP,cQ[1]+cO[1]*cP];},_onMouseDownGrid:function(cQ){var cO=this;var cR=cQ.target;if(cR.test([b0+cc,b0+b9].join(bt))){cO._recording=true;var A=cO[B].item(0).all(f).item(0);cO.gridCellHeight=cO[bi].get(cf)/6;cO.gridCellWidth=cO[bi].get(ch)/aP;var cP=cO._offsetXY([cQ.pageX,cQ.pageY],-1);cO.lassoStartPosition=cO.lassoLastPosition=cO._findPosition(cP);cO.renderLasso(cO.lassoStartPosition,cO.lassoLastPosition);cO[bi].unselectable();}},_onMouseMoveGrid:function(cR){var cO=this;
var cS=cR.currentTarget;var cP=cO._offsetXY([cR.pageX,cR.pageY],-1);var cQ=cO.lassoLastPosition||cO.lassoStartPosition;var A=cO._findPosition(cP);var cT=cQ&&((A[0]!==cQ[0])||(A[1]!==cQ[1]));if(cT&&cO._recording){cO.lassoLastPosition=A;cO.renderLasso(cO.lassoStartPosition,A);}},_onMouseUpGrid:function(cT){var cO=this;var cS=cO.get(q);var cQ=cS.get(cL);if(cQ&&cO._recording&&!cS.get(bR)){var cR=cO._getPositionDate(cO.lassoStartPosition);var cP=cO._getPositionDate(cO.lassoLastPosition);var A=new Date(Math.min(cR,cP));A.setHours(0,0,0);var cU=new Date(Math.max(cR,cP));cU.setHours(23,59,59);cQ.set(cl,A);cQ.set(aD,cU);cQ.showOverlay([cT.pageX,cT.pageY]);cO._recording=false;}},_findPosition:function(cQ){var A=this;var cP=Math.floor(cQ[0]/A.gridCellWidth);var cO=Math.floor(cQ[1]/A.gridCellHeight);return[cP,cO];},_uiSetCurrentDate:function(cO){var A=this;A.syncDaysHeaderUI();A.syncGridUI();},_valueColHeaderDaysNode:function(){var A=this;return A._valueNodeList(aP,O);},_valueTableGridNode:function(){var A=this;return A._valueNodeList(aP,bE);},_valueNodeList:function(cQ,cP){var A=this;var cO=[];while(cQ--){cO.push(cP);}return ci.NodeList.create(cO.join(bS));}}});ci.SchedulerMonthView=aC;},"@VERSION@",{skinnable:true,requires:["aui-scheduler-event","aui-calendar","aui-button-item","dd-drag","dd-delegate","dd-drop","dd-constrain"]});