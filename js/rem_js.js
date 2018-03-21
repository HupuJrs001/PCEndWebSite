(function(win,doc){
	var h;
	win.addEventListener('resize',function() {
	clearTimeout(h);
		h = setTimeout(setUnitA, 300);
	}, false);
	win.addEventListener('pageshow',function(e) {
		if (e.persisted) {
			clearTimeout(h);
			h = setTimeout(setUnitA, 300);
		}
	}, false);
	var setUnitA=function(){
		//以320的设计图为标准      定义最初html的font-size为100像素
		doc.documentElement.style.fontSize = 100*(doc.documentElement.clientWidth/1920) + 'px';	
	};
	setUnitA();

})(window,document);