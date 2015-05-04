(function(){
	var scriptLocation = "";
	var scripts = document.getElementsByTagName('script');
	for (var i = 0; i < scripts.length; i++) {
		var src = scripts[i].getAttribute('src');
		if (src) {
			var index = src.lastIndexOf("i3geonaocompacto.js");
			// is it found, at the end of the URL?
			if ((index > -1) && (index + "i3geonaocompacto.js".length == src.length)) {
				scriptLocation = src.slice(0, -"i3geonaocompacto.js".length);
				break;
			}
		}
	}
	var allScriptTags = "";
	var jsfiles = new Array(
	"../pacotes/mobileesp/mdetect.js",
	"../pacotes/proj4js/lib/proj4js-compressed.js",
	"../pacotes/yui290/build/yahoo/yahoo-min.js",
	"../pacotes/yui290/build/yahoo-dom-event/yahoo-dom-event.js",
	"../pacotes/yui290/build/dom/dom-min.js",
	"../pacotes/yui290/build/utilities/utilities.js",
	"../pacotes/yui290/build/container/container_core.js",
	"../pacotes/yui290/build/menu/menu-min.js",
	"../pacotes/yui290/build/logger/logger-min.js",
	"../pacotes/yui290/build/dragdrop/dragdrop-min.js",
	"../pacotes/yui290/build/slider/slider-min.js",
	"../pacotes/yui290/build/animation/animation-min270.js", //a 290 nao funciona direito
	"../pacotes/yui290/build/container/container.js",
	"../pacotes/yui290/build/element/element-min.js",
	"../pacotes/yui290/build/tabview/tabview-min.js",
	"../pacotes/cpaint/cpaint2.inc.js",
	"../pacotes/yui290/build/treeview/treeview.js",
	"../pacotes/yui290/build/button/button-min.js",
	"../pacotes/yui290/build/json/json-min.js",
	"../pacotes/yui290/build/resize/resize-min.js",
	"../pacotes/yui290/build/progressbar/progressbar-min.js",
	"../pacotes/yui290/build/storage/storage-min.js",
	"../pacotes/yui290/build/selector/selector-min.js",
	//"../pacotes/balloon-tooltips/htdocs/js/balloon.config.js",
	//"../pacotes/balloon-tooltips/htdocs/js/balloon.js",
	"../pacotes/eudock/js/euDock.2.0.js",
	"../pacotes/eudock/js/euDock.Image.js",
	"../pacotes/wicket/wicket.js",
	"../pacotes/mustache.js-master/mustache.js",
	"ini_i3geo.js",
	"util.js",
	"dicionario.js",
	"idioma.js",
	"php.js",
	"configura.js",
	"calculo.js",
	"desenho.js",
	"interface.js",
	"mapa.js",
	"tema.js",
	"analise.js",
	"maparef.js",
	"ajuda.js",
	"janela.js",
	"guias.js",
	"arvoredecamadas.js",
	"navega.js",
	"social.js",
	"eventos.js",
	"arvoredetemas.js",
	"barradebotoes.js",
	"coordenadas.js",
	"gadgets.js",
	"login.js",
	"marcador.js",
	"plugini3geo.js"
	);
	for (i = 0; i < jsfiles.length; i++)
	{
		var currentScriptTag = "<script type='text/javascript' src='" + scriptLocation + jsfiles[i] + "'></script>";
		allScriptTags += currentScriptTag;
	}
	//css
	var allCssTags = "";
	var cssfiles = new Array(
	"../css/geral.css",
	"../css/botoes2.css",
	"../css/documentation.css",
	"../pacotes/yui290/build/logger/assets/skins/sam/logger.css",
	"../pacotes/yui290/build/fonts/fonts-min.css",
	"../pacotes/yui290/build/reset-fonts-grids/reset-fonts-grids.css",
	"../pacotes/yui290/build/grids/grids-min.css",
	"../pacotes/yui290/build/menu/assets/skins/sam/menu.css",
	"../pacotes/yui290/build/autocomplete/assets/skins/sam/autocomplete.css",
	"../pacotes/yui290/build/container/assets/skins/sam/container.css",
	"../pacotes/yui290/build/tabview/assets/skins/sam/tabview.css",
	"../pacotes/yui290/build/treeview/assets/skins/sam/treeview.css",
	"../pacotes/yui290/build/button/assets/skins/sam/button.css",
	"../pacotes/yui290/build/slider/assets/skins/sam/slider.css",
	"../pacotes/yui290/build/resize/assets/skins/sam/resize.css",
	"../pacotes/yui290/build/progressbar/assets/skins/sam/progressbar.css",
	"../css/corrigeyui_geral.css",
	"../css/janelaflutuante.css",
	"../mashups/openlayers.css"
	);
	for (i = 0; i < cssfiles.length; i++)
	{
		var currentCssTag = "<link rel='stylesheet' type='text/css' href='" + scriptLocation + cssfiles[i] + "'/>";
		allCssTags += currentCssTag;
	}
	document.write(allCssTags);
	document.write(allScriptTags);
})();
