/*
Title: Geolocalizacao

Abre a ferramenta que captura a posicao do usuario e mostra no mapa

Veja:

<i3GEO.mapa.dialogo.geolocal>

Arquivo:

i3geo/ferramentas/geolocal/index.js.php

Licenca:

GPL2

i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com

Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo
e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a P&uacute;blica Geral
GNU conforme publicada pela Free Software Foundation;

Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til,
por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl&iacute;cita
de COMERCIABILIDADE OU ADEQUA&Ccedil;&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA.
Consulte a Licen&ccedil;a P&uacute;blica Geral do GNU para mais detalhes.
Voc&ecirc; deve ter recebido uma c&oacute;pia da Licen&ccedil;a P&uacute;blica Geral do
GNU junto com este programa; se n&atilde;o, escreva para a
Free Software Foundation, Inc., no endere&ccedil;o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
*/
if(typeof(i3GEOF) === 'undefined'){
	var i3GEOF = {};
}
/*
Classe: i3GEOF.geolocal
*/
i3GEOF.geolocal = {
	/*
	Variavel: posicoes

	Objetos capturados
	*/
	posicoes: [],
	tempo: null,
	/*
	Variavel: aguarde

	Estilo do objeto DOM com a imagem de aguarde existente no cabe&ccedil;alho da janela.
	*/
	aguarde: "",
	/*
		Para efeitos de compatibilidade antes da vers&atilde;o 4.7 que n&atilde;o tinha dicion&aacute;rio
	*/
	criaJanelaFlutuante: function(){
		i3GEOF.geolocal.iniciaDicionario();
	},
	/*
	Function: iniciaDicionario

	Carrega o dicion&aacute;rio e chama a fun&ccedil;&atilde;o que inicia a ferramenta

	O Javascript &eacute; carregado com o id i3GEOF.nomedaferramenta.dicionario_script
	*/
	iniciaDicionario: function(){
		if(typeof(i3GEOF.geolocal.dicionario) === 'undefined'){
			i3GEO.util.scriptTag(
				i3GEO.configura.locaplic+"/ferramentas/geolocal/dicionario.js",
				"i3GEOF.geolocal.iniciaJanelaFlutuante()",
				"i3GEOF.geolocal.dicionario_script"
			);
		}
		else{
			i3GEOF.geolocal.iniciaJanelaFlutuante();
		}
	},
	/*
	Function: inicia

	Inicia a ferramenta. &Eacute; chamado por criaJanelaFlutuante

	Parametro:

	iddiv {String} - id do div que receber&aacute; o conteudo HTML da ferramenta
	*/
	inicia: function(iddiv){
		var ics,n;
		//se nao permitir a localizacao, retorna uma mensagem
		if(navigator.geolocation){
			$i(iddiv).innerHTML = i3GEOF.geolocal.html();
			$i("i3GEOFgeolocalFormTempo").onsubmit = i3GEOF.geolocal.capturaTempo;
			ics = $i(iddiv).getElementsByTagName("button");
			n = ics.length;
			for(i=0;i<n;i++){
				ics[i].style.backgroundColor = "white";
				ics[i].className = "iconeGuiaMovel iconeGuiaMovelMouseOut";
				ics[i].onmouseout = function(){this.className = "iconeGuiaMovel iconeGuiaMovelMouseOut";};
				ics[i].onmouseover = function(){this.className = "iconeGuiaMovel iconeGuiaMovelMouseOver";};
			}
			i3GEOF.geolocal.capturaCoordenada();
		}
		else{
			$i(iddiv).innerHTML = $trad(2,i3GEOF.geolocal.dicionario);
		}
	},
	/*
	Function: html

	Gera o c&oacute;digo html para apresenta&ccedil;&atilde;o das op&ccedil;&otilde;es da ferramenta

	Retorno:

	String com o c&oacute;digo html
	*/
	html:function(){
		var ins = "";
		ins += "" +
			'<button title="'+$trad(3,i3GEOF.geolocal.dicionario)+'" onclick="i3GEOF.geolocal.capturaCoordenada()"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/gps.png" /></button>' +
			'<button title="'+$trad(4,i3GEOF.geolocal.dicionario)+'" onclick="i3GEOF.geolocal.limpa()"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/erase.png" /></button>' +
			'<button title="'+$trad(9,i3GEOF.geolocal.dicionario)+'" onclick="i3GEOF.geolocal.criaShp()"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/layer-gps-create.png" /></button>' +
			'<img title="' + $trad(7,i3GEOF.geolocal.dicionario) + '" onclick="i3GEOF.geolocal.paraTempo()" style="left:10px;position:relative;" src="'+i3GEO.configura.locaplic+'/imagens/oxygen/16x16/clock.png" >' +
			'&nbsp;<form id="i3GEOFgeolocalFormTempo" style="left: 162px;position: absolute;top: 17px;width: 30px;">' +
			$inputText("","","i3GEOFgeolocalTempo",$trad(6,i3GEOF.geolocal.dicionario),5,"0") + '</form>' +
			"<div style='height:130px;overflow:auto;top:10px;text-align:center;position:relative;cursor:pointer;padding:5px;' id='i3GEOFgeolocalListaDePontos' >" +
			"</div>" +
			"<br><div id='i3GEOFgeolocalNcoord' style='width: 30px; position: absolute;' ></div>" +
			"<div style='position:relative;width: 150px;left: 40px;'>" + $trad(8,i3GEOF.geolocal.dicionario) + " " +
			$inputText("","","i3GEOFgeolocalMaximo","",5,"") + "</div>";
		return ins;
	},
	/*
	Function: iniciaJanelaFlutuante

	Cria a janela flutuante para controle da ferramenta.
	*/
	iniciaJanelaFlutuante: function(){
		var janela,divid,temp,titulo,cabecalho,minimiza;
		cabecalho = function(){};
		minimiza = function(){
			i3GEO.janela.minimiza("i3GEOF.geolocal");
		};
		//cria a janela flutuante
		titulo = $trad(1,i3GEOF.geolocal.dicionario)+" <a class=ajuda_usuario target=_blank href='" + i3GEO.configura.locaplic + "/ajuda_usuario.php?idcategoria=6&idajuda=118' >&nbsp;&nbsp;&nbsp;</a>";
		janela = i3GEO.janela.cria(
			"270",
			"200",
			"",
			"",
			"",
			titulo,
			"i3GEOF.geolocal",
			false,
			"hd",
			cabecalho,
			minimiza
		);
		divid = janela[2].id;
		$i("i3GEOF.geolocal_corpo").style.backgroundColor = "white";
		$i("i3GEOF.geolocal_corpo").style.textAlign = "left";
		i3GEOF.geolocal.aguarde = $i("i3GEOF.geolocal_imagemCabecalho").style;
		i3GEOF.geolocal.inicia(divid);
		temp = function(){
			i3GEOF.geolocal[i3GEO.Interface.ATUAL].removeLayer();
			i3GEOF.geolocal.paraTempo();
		};
		YAHOO.util.Event.addListener(janela[0].close, "click", temp);
		i3GEO.util.criaPin("pingeolocal",i3GEO.configura.locaplic+'/imagens/google/confluence.png');
		i3GEOF.geolocal.escondexy();
	},
	capturaCoordenada: function(){
		if(i3GEOF.geolocal.aguarde.visibility == "visible"){
			return;
		}
		i3GEOF.geolocal.aguarde.visibility = "visible";
		var retorno = function(position){
			i3GEOF.geolocal.posicoes.push(position);
			var n = parseInt($i("i3GEOFgeolocalMaximo").value,10);
			if(n > 0 && i3GEOF.geolocal.posicoes.length > n){
				i3GEOF.geolocal.posicoes.splice(0,(i3GEOF.geolocal.posicoes.length - n));
			}
			i3GEOF.geolocal.listaCoord();
		}
		navigator.geolocation.getCurrentPosition(retorno,i3GEOF.geolocal.erro);
	},
	capturaTempo: function(){
		var tempo = parseInt($i("i3GEOFgeolocalTempo").value,10);
		if(tempo){
			if(tempo > 0){
				i3GEOF.geolocal.tempo = setInterval("i3GEOF.geolocal.capturaCoordenada()",tempo*1000);
			}
			else{
				clearInterval(i3GEOF.geolocal.tempo);
			}
		}
		return false;
	},
	paraTempo: function(){
		if($i("i3GEOFgeolocalTempo")){
			$i("i3GEOFgeolocalTempo").value = 0;
		}
		clearInterval(i3GEOF.geolocal.tempo);
	},
	erro: function(error){
		i3GEOF.geolocal.paraTempo();
		var erro = "";
		switch(error.code){
			case error.PERMISSION_DENIED:
				erro = "User denied the request for Geolocation."
			break;
			case error.POSITION_UNAVAILABLE:
				erro = "Location information is unavailable."
			break;
			case error.TIMEOUT:
				erro = "The request to get user location timed out."
			break;
			case error.UNKNOWN_ERROR:
				erro = "An unknown error occurred."
			break;
		}
		i3GEO.janela.tempoMsg(erro);
		i3GEOF.geolocal.aguarde.visibility = "hidden";
	},
	listaCoord: function(position){
		var ps = i3GEOF.geolocal.posicoes,
			n = ps.length,
			i,
			ins = "",
			res = ["<tr><td></td><td></td><td></td><td><b>Latitude</b></td><td><b>Longitude</b></td></tr>"];
		for(i=(n-1);i>=0;i--){
			ins = "<tr>" +
				'<td><img title="' + $trad(4,i3GEOF.geolocal.dicionario) + '" src="'+i3GEO.configura.locaplic+'/imagens/x.gif" onclick="i3GEOF.geolocal.excluiLinha('+i+')" style="cursor:pointer"></td>' +
				'<td><img onmouseout="i3GEOF.geolocal.escondexy()" onmouseover="i3GEOF.geolocal.mostraxy('+i+')" title="pan" src="'+i3GEO.configura.locaplic+'/imagens/o.gif" onclick="i3GEOF.geolocal.panLinha('+i+')" style="cursor:pointer"></td>' +
				'<td><img title="info" src="'+i3GEO.configura.locaplic+'/imagens/oxygen/16x16/help-about.png" onclick="i3GEOF.geolocal.info('+i+')" style="cursor:pointer"></td>' +
				"<td>" + ps[i].coords.latitude + "</td><td>" + ps[i].coords.longitude + "</td></tr>";
			res.push(ins);
		}
		$i("i3GEOFgeolocalListaDePontos").innerHTML = "<table class='lista8' >" + res.join("") + "</table>";
		$i("i3GEOFgeolocalNcoord").innerHTML = n;
		i3GEOF.geolocal[i3GEO.Interface.ATUAL].desenha();
		i3GEOF.geolocal.aguarde.visibility = "hidden";
	},
	limpa: function(){
		i3GEOF.geolocal.posicoes = [];
		i3GEOF.geolocal[i3GEO.Interface.ATUAL].removeLayer();
		i3GEOF.geolocal.listaCoord();
	},
	excluiLinha: function(i){
		i3GEOF.geolocal.posicoes.splice(i,1);
		i3GEOF.geolocal.listaCoord();
	},
	panLinha: function(i){
		var posicao = i3GEOF.geolocal.posicoes[i];
		//@FIXME o pan nao funciona no OSM
		if(posicao != undefined && i3GEO.Interface.openlayers.googleLike != true){
			i3GEO.navega.pan2ponto((posicao.coords.longitude),(posicao.coords.latitude));
		}
	},
	info: function(i){
		i3GEO.mapa.dialogo.cliqueIdentificaDefault(i3GEOF.geolocal.posicoes[i].coords.longitude,i3GEOF.geolocal.posicoes[i].coords.latitude);
	},
	mostraxy: function(i){
		/*
		 * @TODO nao funciona no OSM
		 */
		if(i3GEO.Interface.ATUAL === "googleearth" || i3GEO.Interface.openlayers.googleLike === true)
		{return;}
		var posicao = i3GEOF.geolocal.posicoes[i],
			xy = [posicao.coords.longitude,posicao.coords.latitude], 
			box = $i("pingeolocal"),
			ext = i3GEO.util.extOSM2Geo(i3GEO.parametros.mapexten);
		xy = i3GEO.calculo.dd2tela(xy[0]*1,xy[1]*1,$i(i3GEO.Interface.IDMAPA),ext,i3GEO.parametros.pixelsize);

		box.style.display = "block";
		box.style.width = "27px";
		box.style.height = "27px";
		box.style.top = parseInt(xy[1],10) - 27 +"px";
		box.style.left = parseInt(xy[0],10) - 13 +"px";
	},
	escondexy: function(){
		if($i("pingeolocal")){
			var box = $i("pingeolocal");
			box.style.display = "none";
			box.style.top = "0px";
			box.style.left = "0px";
		}
	},
	posicoes2pontos: function(){
		var ps = i3GEOF.geolocal.posicoes,
			n = ps.length,
			i,
			pontos = [];
		for(i=0;i < n;i++){
			pontos.push((ps[i].coords.longitude) + " " + ps[i].coords.latitude);
		}
		return pontos;
	},
	criaShp: function(){
		function ativanovotema(retorno){
			var pontos = i3GEOF.geolocal.posicoes2pontos(),
				temaNovo = retorno.data,
				converteParaLinha = function(){
					var cp = new cpaint();
					cp.set_response_type("JSON");
					var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=sphPT2shp&para=linha&tema="+temaNovo;
					cp.call(p,"sphPT2shp",i3GEO.atualiza);
				};
			var p = window.parent.i3GEO.configura.locaplic+"/ferramentas/inserexy2/exec.php?g_sid="+i3GEO.configura.sid+"&funcao=insereSHP&tema="+retorno.data;
			var cp = new cpaint();
			cp.set_response_type("JSON");
			cp.set_transfer_mode('POST');
			cp.call(p,"insereSHP",converteParaLinha,"&xy="+pontos.join(" "));
		}
		var cp = new cpaint();
		cp.set_response_type("JSON");
		cp.set_transfer_mode("POST");
		var p = window.parent.i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid;
		cp.call(p,"criaSHPvazio",ativanovotema,"&funcao=criashpvazio");		
	},
	openlayers: {
		desenha: function(){
            // allow testing of specific renderers via "?renderer=Canvas", etc
            var renderer = OpenLayers.Util.getParameters(window.location.href).renderer,
            	layer_style = OpenLayers.Util.extend({}, OpenLayers.Feature.Vector.style['default']),
            	style_blue = OpenLayers.Util.extend({}, layer_style),
            	vectorLayer,
            	ps = i3GEOF.geolocal.posicoes,
				n = ps.length,
				i,
				point,
				teste,
				pointFeature = [],
				pointList = [];
            
            renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;

            style_blue.strokeColor = "blue";
            style_blue.fillColor = "yellow";
            style_blue.graphicName = "square";
            style_blue.pointRadius = 3;
            style_blue.strokeWidth = 2;
            style_blue.rotation = 0;
            style_blue.strokeLinecap = "butt";
            if(i3geoOL.getLayersByName("Coordenadas").length === 0){
	            vectorLayer = new OpenLayers.Layer.Vector("Coordenadas", {
	                style: layer_style,
	                renderers: renderer
	            });
            }
            else{
            	vectorLayer = i3geoOL.getLayersByName("Coordenadas")[0];
            	vectorLayer.removeFeatures(vectorLayer.features);
            }
			
			for(i=0;i<n;i++){
                point = new OpenLayers.Geometry.Point((ps[i].coords.longitude),(ps[i].coords.latitude));
                i3GEOF.geolocal.wgs2google(point);
				pointList.push(point);
                pointFeature.push(new OpenLayers.Feature.Vector(point,null,style_blue));
			}
			
            var lineFeature = new OpenLayers.Feature.Vector(
                new OpenLayers.Geometry.LineString(pointList),null,style_blue);

            i3geoOL.addLayer(vectorLayer);
            vectorLayer.addFeatures([lineFeature]);
            vectorLayer.addFeatures(pointFeature);
            i3GEOF.geolocal.panLinha(n-1);
		},
		removeLayer: function(){
			i3geoOL.removeLayer(i3geoOL.getLayersByName("Coordenadas")[0],false);
		}
	},
	googlemaps: {
		linhas: null,
		marca: null,
		desenha: function(){
            var ps = i3GEOF.geolocal.posicoes,
				n = ps.length,
				i,
				l,
				pointFeature = [];
			for(i=0;i<n;i++){
				l = new google.maps.LatLng(ps[i].coords.latitude,ps[i].coords.longitude);
				pointFeature.push(
					l
				);
			}
			i3GEOF.geolocal.googlemaps.removeLayer();
			i3GEOF.geolocal.googlemaps.marca = new google.maps.Marker({
				position: new google.maps.LatLng(ps[0].coords.latitude,ps[0].coords.longitude),
				map: i3GeoMap
			});
			i3GEOF.geolocal.googlemaps.linhas = new google.maps.Polyline({
				path: pointFeature,
				geodesic: true,
				strokeColor: 'blue',
				strokeOpacity: 1.0,
				strokeWeight: 2,
				name: "Coordenadas"
			});
			i3GEOF.geolocal.googlemaps.linhas.setMap(i3GeoMap);
			i3GEOF.geolocal.panLinha(n-1);
		},
		removeLayer: function(){
			if(i3GEOF.geolocal.googlemaps.linhas){
				i3GEOF.geolocal.googlemaps.linhas.setMap(null);
			}
			if(i3GEOF.geolocal.googlemaps.marca){
				i3GEOF.geolocal.googlemaps.marca.setMap(null);
			}
		}
	},
	//@TODO implementar desenho dos pontos e linhas
	googleearth: {
		desenha: function(){
		},
		removeLayer: function(){
		}
	},
	wgs2google: function(obj){
		if(i3GEO.Interface.openlayers.googleLike === true || i3GEO.Interface.ATUAL === "googlemaps"){
			var projWGS84 = new OpenLayers.Projection("EPSG:4326"),
				proj900913 = new OpenLayers.Projection("EPSG:900913");
			return obj.transform(projWGS84,proj900913);
		}
		else{
			return obj;
		}
	}
};