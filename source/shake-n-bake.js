(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define("ShakeNBake", factory);
	} else {
		// Browser globals
		root.ShakeNBake = factory();
	}
}(this, function () {

	"use strict";

	return {

		processElement: function(rootElement) {
			var newScripts = [];
			Array.prototype.slice.call(rootElement.getElementsByTagName("script"))
				.filter(function(scriptEl) {
					return !scriptEl.getAttribute("src");
				})
				.forEach(function(scriptEl) {
					var newScript = document.createElement("script");
					newScript.type = "text/javascript";
					newScript.innerHTML = scriptEl.innerHTML;
					scriptEl.parentNode.insertBefore(newScript, scriptEl.nextSibling);
					scriptEl.parentNode.removeChild(scriptEl);
					newScripts.push(newScript);
				});
			return newScripts;
		}

	};
}));
