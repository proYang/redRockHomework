var eventUtil = {
	addHandler: function (element, type, handler) {
		//用DOM0级、DOM2级方法或IE方法添加事件
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent("on"+type, handler);
		} else {
			element["on"+type] = handler;
		}
	},
	getEvent: function (event) {
		//获取DOM或IE中的event对象
		return event ? event : window.event;
	},
	getTarget: function (event) {
		//获取DOM或IE中的事件目标
		return event.target || event.srcElement;
	},
	preventDefault: function (event) {
		//阻止特定事件的默认行为
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	removeHandler: function (element, type, handler) {
		//用DOM0级、DOM2级方法或IE方法移除事件
		if (element.removeEventListener) {
			element.removeEventListener(type, handler,false);
		} else if (element.detachEvent) {
			element.detachEvent("on"+type, handler);
		} else {
			element["on".type] = null;
		}
	},
	stopPropagation: function (event) {
		//取消事件冒泡
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
}