// (function(doc,win){
// 	debugger;
// 	console.log(win.clientWidth);
// 	var docEl=doc.documentElement,
// 		resizeEvt='orientationchange' in win ? 'orientationchange':'resize',
// 		recalc=function(){
// 			win.clientWidth=docEl.clientWidth;
// 			if(!win.clientWidth)
// 				return;
// 			win.base=20*(win.clientWidth/375);
// 			docEl.style.fontSize=win.base+"px";
// 		};
// 		recalc();
// 	if(!doc.addEventListener)
// 		return;
// 	win.addEventListener(resizeEvt,recalc,false);
// 	doc.addEventListener('DOMContentLoaded',recalc.false);
// })(document,window);
(function(doc,win){
	console.log("123");
	console.log(win.clientWidth);
	console.log(doc);
})(document,window);