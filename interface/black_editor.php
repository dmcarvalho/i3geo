<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Category" content="i3Geo Mapa interativo MMA geoprocessamento sig mobile">
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-1">
<title>i3GEO - OpenLayers</title>
	<style>
		.olControlEditingToolbar1 div {
			background-image: url(../mashups/openlayers.png);
			background-repeat: no-repeat;
			float: right;
			right: 0px;
			height: 29px;
			margin: 2px;
			width: 29px;
			cursor: pointer;
			top: 10px;
		}
	</style>
	<script src="../classesjs/i3geo.js"></script>
	<script src="../pacotes/openlayers/OpenLayers2131.js.php"></script>
	<link rel="stylesheet" type="text/css" href="../css/black.css">
</head>
<body id="i3geo" style='margin-left: 7px; background: white;'>
	<!-- inclui o nome do usuario logado -->
	<div id="i3GEONomeLogin" style="position: absolute; left: 10px; top: 12px; font-size: 11px; z-index: 50000"></div>
	<table id='mst' summary="" style='display: none;' width=100% cellspacing='0'>
		<tr>
			<td id="contemMenu" style="background: black; height: 30px; text-align: right; border-width: 0pt 0pt 1px; border-color: rgb(240, 240, 240)">
				<!--menu suspenso-->
				<div id="menus" style="height: 0px;"></div>
			</td>
		</tr>
		<tr>
			<td style="vertical-align: top; border-width: 0px;">
				<table width="100%" style="vertical-align: top; border-width: 0px">
					<tr>
						<td class=verdeclaro id=contemImg>
							<div id=corpoMapa style="position: relative; background-image: url('../imagens/i3geo1bw.jpg');"></div>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td>
				<table style="width: 100%; height: 28px">
					<tr>
						<td class=fundoRodape style="width: 25%">
							<!-- aqui ser&aacute; inclu&iacute;da a escala num&eacute;rica -->
							<div id=escala style="margin: auto; text-align: right; left: 15px;"></div>
						</td>
						<td class=fundoRodape style="width: 5%"></td>
						<td class=fundoRodape style="width: 40%">
							<!-- aqui ser&aacute; inclu&iacute;do o gadget que mostra a coordenada geogr&aacute;fica da posi&ccedil;&atilde;o do mouse -->
							<div id=localizarxy style="margin: auto; text-align: left; font-size: 10px; display: inline-table"></div>
						</td>
						<td class=fundoRodape style="width: 20%">
							<!-- bot&atilde;o de compartilhamento em redes sociais-->
							<!--<div id=i3GEOcompartilhar style="width: 170px; margin: auto; text-align: left; padding-top: 1px"></div> -->
							<!-- aqui ser&aacute; inclu&iacute;do o contador de tempo quando o temporizador de redesenho do mapa estiver ativo -->
							<div id=tempoRedesenho style="z-index: 100; position: absolute; top: 0px; color: green; background-color: black; width: 50px; display: none"></div>
						</td>
						<!-- aqui ser&atilde;o inclu&iacute;das as bandeiras que permitem a troca de idioma -->
						<td class=fundoRodape style="width: 10%;">
							<div id=seletorIdiomas style="right: 15px;"></div>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<table id="i3GEOlogoMarca" style='margin: 0px auto; box-shadow: 0 1px 13px gray; border-radius: 5px;'>
		<tr>
			<td style="height: 30px"><div id=versaoi3geo></div>
				<h2 style="font-weight: normal; font-size: 10px; font-family: Verdana, Arial, Helvetica, sans-serif;">i3Geo - Software livre para cria&ccedil;&atilde;o de mapas interativos e geoprocessamento</h2>
				<h3 style="font-weight: normal; font-size: 10px; font-family: Verdana, Arial, Helvetica, sans-serif;">Baseado no Mapserver, &eacute; licenciado sob GPL e integra o Portal do Software P&uacute;blico Brasileiro</h3></td>
		</tr>
		<tr>
			<td style="padding: 10px;"><img style="width: 560px; height: 81px" alt="" src='../imagens/logo_inicio.png'></td>
		</tr>
		<tr>
			<td>
				<!--
			<script id="ohloh" type="text/javascript" src="http://www.ohloh.net/p/150688/widgets/project_users.js?style=red"></script>
			-->
			</td>
		</tr>
	</table>

<div id="i3GEOguiaMovel" style="visibility:hidden;position:absolute;display:block;border:0px solid white;text-align:left;z-index:2000;background-color:none">
	<div style="cursor:pointer;position:absolute;top:50%;margin-top: -65px;width:30px;z-index:5000; left:18px;">
		<img src='../imagens/openbars1.png' style="width: 48px; position: absolute; left: -16px; height: 418px; top: -160px;">
		<div id="iconeGuia_temas" ></div>
		<div id="iconeGuia_adiciona" style="margin-top:3px;" ></div>
		<div id="iconeGuia_legenda" style="margin-top:3px;"></div>
	</div>

	<!--
		<img id="i3GEOguiaMovelPuxador" onclick='i3GEO.guias.guiaMovel.abreFecha()' style='z-index:2;border:solid 0px white;left:0px;position:absolute;top:0px' width='0px' src='../imagens/openbars.png' >
	-->
	<div id="i3GEOguiaMovelMolde" style="top:0px;box-shadow:0 2px 10px 0 #888888;position:absolute;display:none;border:0px solid white;text-align:left;z-index:1000;background-color:gray">
		<!--
		<div id="i3GEOguiaMovelIcones" style='overflow:none;left:0px;display:none;position:absolute;top:0px;text-align:center;height:0px;width:0px;border:solid 0px white;background-color:white' ></div>
		-->
		<div id="i3GEOguiaMovelConteudo" style='top:10px;overflow:auto;display:none;position:absolute;border-color:gray;border-width:0px 0 0px 0px;left:0px;height:0px;background-color:white'>
			<div id='guia1obj' style='display:none;' >
				<!-- Esta div acrescenta a op&ccedil;&atilde;o de busca r&aacute;pida, caso vc queira coloc&aacute;-la em um lugar espec&iacute;fico -->
				<div style='left:5px;top:10px;width:150px;' id=buscaRapida ></div>
				<!--	Esta div acrescenta a lista de propriedades do mapa -->
				<div id=listaPropriedades style='top:15px;' ></div>
				<!--	Esta div acrescenta a lista de de camadas do tipo 'baselayers' espec&iacute;ficas da interface Openlayers. Veja tamb&eacute;m a op&ccedil;&atilde;o i3GEO.Interface.openlayers.GADGETS.LayerSwitcher -->
				<div id=listaLayersBase style='top:15px;'></div>
				<!--	Esta div acrescenta a lista de de camadas dispon&iacute;veis no mapa atual -->
				<div id=listaTemas style='top:15px;'></div>
			</div>
			<div id='guia2obj' style='display:none;'>Aguarde...<img alt="" src="../imagens/branco.gif" width=248 /></div>
			<div id='guia4obj' style='display:none;text-align:left'><div id='legenda' style='text-align:left'></div></div>
			<!--
			<div id='guia5obj' style='display:none;text-align:left'><div id='banners' style='overflow:auto;text-align:left'>Aguarde...</div></div>
			 -->
		</div>
	</div>
</div>
	<script>
	/**
	Essa interface e usada no sistema de administracao, na opcao de edicao de mapfiles.
	Mostra um mapa com uma janela com as principais operacoes de edicao de um tema
	**/
	i3GEO.configura.locaplic = i3GEO.util.protocolo() + "://"
				+ window.location.host + "/i3geo";
		i3GEO.configura.autotamanho = false;
		i3GEO.Interface.ATUAL = "openlayers";
		i3GEO.Interface.IDCORPO = "contemImg";
		i3GEO.Interface.openlayers.TILES = true;
		i3GEO.configura.oMenuData.submenus["interface"] = [
			{ id:"omenudataInterface0a",text: '<span style=color:gray;text-decoration:underline; ><b>'+$trad("d27")+'</b></span>',url: "#"},
			{ id:"omenudataInterface2",text: "OpenLayers", url: "javascript:window.location = i3GEO.configura.locaplic+'/interface/black_ol.htm?'+i3GEO.configura.sid" },
			{ id:"omenudataInterface2a",text: "OpenLayers OSM", url: "javascript:window.location = i3GEO.configura.locaplic+'/interface/black_osm.htm?'+i3GEO.configura.sid" },
			{ id:"omenudataInterface4",text: "Google Maps", url: "javascript:window.location = i3GEO.configura.locaplic+'/interface/black_gm.phtml?'+i3GEO.configura.sid" },
			{ id:"omenudataInterface5",text: "Google Earth", url: "javascript:window.location = i3GEO.configura.locaplic+'/interface/googleearth.phtml?'+i3GEO.configura.sid" },
			{ id:"omenudataInterface0b",text: '<span style=color:gray;text-decoration:underline; ><b>'+$trad("u27")+'</b></span>',url: "#"},
			{ id:"omenudataInterface6",text: $trad("u21"), url: "javascript:var w = window.open(i3GEO.configura.locaplic+'/geradordelinks.htm')" },
			{ id:"omenudataInterface7",text: "Servi&ccedil;os WMS", url: "javascript:var w = window.open(i3GEO.configura.locaplic+'/ogc.htm')" },
			{ id:"omenudataInterface9",text: "Download de dados", url: "javascript:var w = window.open(i3GEO.configura.locaplic+'/datadownload.htm')" },
			{ id:"omenudataInterface11",text: $trad("p20"), url: "javascript:i3GEO.mapa.dialogo.telaRemota()" }
		];

		i3GEO.gadgets.PARAMETROS.mostraMenuSuspenso.finaliza = 'if($i("omenudataInterface1")){i3GEOoMenuBar.getMenuItem("omenudataInterface1").cfg.setProperty("text", " ");}';

		//
		i3GEO.mapa.TEMASINICIAIS = "<?php echo strip_tags($_GET["temaEdicao"]); ?>";
		i3GEO.mapa.TEMASINICIAISLIGADOS = "<?php echo strip_tags($_GET["temaEdicao"]); ?>";
		
		i3GEO.cria();
		i3GEO.configura.mapaRefDisplay = "none";
		i3GEO.barraDeBotoes.TIPO = "olhodepeixe";
		//ajusta o deslocamento da barra de botoes
		i3GEO.barraDeBotoes.OFFSET = 11;
		//ajusta a posicao da barra de botoes no IE
		if(navm){
			i3GEO.barraDeBotoes.OFFSET = 5;
		}
		if(chro){
			i3GEO.barraDeBotoes.OFFSET = 15;
		}

		i3GEO.configura.oMenuData["submenus"]["janelas"] = [];
		i3GEO.ajuda.ATIVAJANELA = false;
		i3GEO.idioma.IDSELETOR = "seletorIdiomas";
		i3GEO.Interface.ATIVAMENUCONTEXTO = false;
		//i3GEO.arvoreDeTemas.TIPOBOTAO = "radio";
		i3GEO.arvoreDeTemas.OPCOESADICIONAIS.comentarios = true;
		i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS = true;
		i3GEO.arvoreDeCamadas.MOSTRALISTAKML = false;
		i3GEO.mapa.AUTORESIZE = true;
		i3GEO.guias.TIPO = "movel";
		i3GEO.guias.guiaMovel.config.topGuiaMovel = 36;
		i3GEO.janela.ativaAlerta();

		i3GEO.finaliza = function() {
			if ($i("i3GEOlogoMarca")) {
				$i("i3GEOlogoMarca").style.display = "none";
			}
			i3GEO.mapa.ativaTema("<?php echo strip_tags($_GET["temaEdicao"]); ?>");
			i3GEO.mapa.dialogo.atalhosedicao();
		};
		//indica se a opcao de navegacao nas pastas do servidor sera ativada
		i3GEO.arvoreDeTemas.OPCOESADICIONAIS.navegacaoDir = true;
		i3GEO.janela.TRANSICAOSUAVE = true;

		OpenLayers.ImgPath = "../pacotes/openlayers/img/";
		(function() {
			var oce = new OpenLayers.Layer.ArcGIS93Rest(
					"ESRI Ocean Basemap",
					"http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/export",
					{
						format : "jpeg"
					}, {
						isBaseLayer : true,
						visibility : false
					});
			var ims = new OpenLayers.Layer.ArcGIS93Rest(
					"ESRI Imagery World 2D",
					"http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_Imagery_World_2D/MapServer/export",
					{
						format : "jpeg"
					}, {
						isBaseLayer : true,
						visibility : false
					});
			var wsm = new OpenLayers.Layer.ArcGIS93Rest(
					"ESRI World Street Map",
					"http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer/export",
					{
						format : "jpeg"
					}, {
						isBaseLayer : true,
						visibility : false
					});
			var bra = new OpenLayers.Layer.WMS(
					"Base carto MMA",
					"http://mapas.mma.gov.br/cgi-bin/mapserv?map=/opt/www/html/webservices/baseraster.map",
					{
						layers : "baseraster",
						srs : "EPSG:4618",
						format : "image/png",
						isBaseLayer : false
					}, {
						isBaseLayer : true,
						visibility : false
					});

			var tms = new OpenLayers.Layer.TMS("OSGEO",
					"http://tilecache.osgeo.org/wms-c/Basic.py/", {
						layername : "basic",
						type : "png",
						// set if different than the bottom left of map.maxExtent
						tileOrigin : new OpenLayers.LonLat(-180, -90),
						isBaseLayer : true,
						visibility : false
					});

			i3GEO.Interface.openlayers.LAYERSADICIONAIS = [ oce, ims, wsm, tms,
					bra ];
		})();

		i3GEO.inicia();
	</script>
</body>
</html>
