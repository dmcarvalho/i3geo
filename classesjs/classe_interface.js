/*
Title: Interface

i3GEO.Interface

Funcoes que controlam o comportamento espec&iacute;fico de determinadas interfaces

As interfaces s&atilde;o definidas na inicializa&ccedil;&atilde;o do i3Geo, por exemplo, openlayers,etc

A classe "interface" cont&eacute;m os m&eacute;tdos espec&iacute;ficos utilizados nessas interfaces

Exemplo:

Para iniciar o i3geo com uma interface espec&iacute;fica, utilize http://localhost/i3geo/ms_criamapa.php?interface=googlemaps.phtml
O HTML deve conter as defini&ccedil;&otilde;es da interface criada e deve estar armazenado em i3geo/aplicmap


Arquivo:

i3geo/classesjs/classe_interface.js

Licen&ccedil;a:

GPL2

i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com

Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo
e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a P&uacute;blica Geral
GNU conforme publicada pela Free Software Foundation;

Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til,
por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl&iacute;cita
de COMERCIABILIDADE OU ADEQUAC&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA.
Consulte a Licen&ccedil;a P&uacute;blica Geral do GNU para mais detalhes.
Voc&ecirc; deve ter recebido uma c&oacute;pia da Licen&ccedil;a P&uacute;blica Geral do
GNU junto com este programa; se n&atilde;o, escreva para a
Free Software Foundation, Inc., no endere&ccedil;o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
 */
if (typeof (i3GEO) === 'undefined') {
	var i3GEO = {};
}
i3GEO.Interface = {
	/*
	 * Propriedade: TABLET
	 *
	 * Quando true, s&atilde;o aplicadas configura&ccedil;&otilde;es especiais
	 * para uso em tablets.
	 *
	 * Altera o posicionamento da barra de bot&otilde;es e comportamento das
	 * guias. Veja o exemplo interface/openlayers_t.htm.
	 *
	 * Tipo {boolean}
	 *
	 * Default {false}
	 */
	TABLET : false,
	/*
	 * Propriedade: ALTTABLET
	 *
	 * Nome do arquivo HTML com a interface alternativa utilizada quando o i3Geo
	 * detecta o uso de um dispositivo m&oacute;vel
	 *
	 * A detec&ccedil;&atilde;o &eacute; aplicada automaticamente quando essa
	 * vari&aacute;vel for definida
	 *
	 * Para n&atilde;o aplicar a detec&ccedil;&atilde;o, use
	 * i3GEO.Interface.ALTTABLET = ""
	 *
	 * Tipo {string}
	 *
	 * Default {""}
	 */
	ALTTABLET : "",
	/*
	 * Formato de gera&ccedil;&atilde;o da imagem.
	 *
	 * Os formatos devem estar definidos no mapfile geral1windows.map e
	 * geral1.map. A defini&ccedil;&atilde;o dessa vari&aacute;vel n&atilde;o
	 * afeta a interface padr&atilde;o, que utiliza a defini&ccedil;&atilde;o
	 * que estiver ativa nos mapfiles de inicializa&ccedil;&atilde;o.
	 *
	 * Tipo {MAPSERVER OUTPUTFORMAT}
	 *
	 * Default {"AGG_Q"}
	 */
	OUTPUTFORMAT : "AGG_Q",
	/*
	 * Propriedade: BARRABOTOESTOP
	 *
	 * Distancia da barra de bot&otilde;es em rela&ccedil;&atilde;o ao topo do
	 * mapa.
	 *
	 * Tipo {number}
	 *
	 * Default {12}
	 */
	BARRABOTOESTOP : 12,
	/*
	 * Propriedade: BARRABOTOESLEFT
	 *
	 * Distancia da barra de bot&otilde;es em rela&ccedil;&atilde;o ao lado
	 * esquerdo do mapa.
	 *
	 * Tipo {number}
	 *
	 * Default {3}
	 */
	BARRABOTOESLEFT : 3,
	/*
	 * Propriedade: BARRADEZOOMRIGHT
	 *
	 * Distancia da barra de bot&otilde;es em rela&ccedil;&atilde;o ao lado
	 * direito do mapa.
	 *
	 * Utilizado para ajustar a barra de zoom
	 *
	 *
	 * Tipo {number}
	 *
	 * Default {50}
	 */
	BARRADEZOOMRIGHT : 0,
	/*
	 * Propriedade: BARRADEZOOMTOP
	 *
	 * Distancia da barra de zoom em rela&ccedil;&atilde;o ao topo do mapa.
	 *
	 * Tipo {number}
	 *
	 * Default {12}
	 */
	BARRADEZOOMTOP : 20,
	/*
	 * Propriedade: BARRADEZOOMLEFT
	 *
	 * Distancia da barra de zoom em rela&ccedil;&atilde;o ao lado esquerdo do
	 * mapa.
	 *
	 * Tipo {number}
	 *
	 * Default {3}
	 */
	BARRADEZOOMLEFT : 10,
	/*
	 * Propriedade: ATUAL
	 *
	 * Interface utilizada na cria&ccedil;&atilde;o e controle do mapa.
	 *
	 * Veja como usar nos arquivos de apresenta&ccedil;&atilde;o do mapa
	 * existentes no diret&oacute;rio i3geo/interface
	 *
	 * O i3Geo, al&eacute;m da interface pr&oacute;pria, permite o uso de outras
	 * APIs para a constru&ccedil;&atilde;o do mapa, como Google Maps ou
	 * Openlayers. Essa propriedade define qual interface ser&aacute; usada.
	 * N&atilde;o confundir com o nome do HTML que &eacute; utilizado para
	 * mostrar o mapa.
	 *
	 * Para definir a interface, utilize
	 *
	 * i3GEO.Interface.ATUAL = "<valor>"
	 *
	 * Tipo {string}
	 *
	 * Valores: {openlayers|googlemaps|googleearth}
	 *
	 * Default {"openlayers"}
	 */
	ATUAL : "openlayers",
	/*
	 * Propriedade: IDCORPO
	 *
	 * ID do elemento HTML que receber&aacute; o corpo do mapa
	 *
	 * Tipo {string}
	 *
	 * Default {"corpoMapa"}
	 */
	IDCORPO : "corpoMapa",
	/*
	 * Indica se o menu de contexto deve ser ativado
	 *
	 * Tipo {Boolean}
	 *
	 * Default {true}
	 */
	ATIVAMENUCONTEXTO : false,
	/*
	 * Variavel: IDMAPA
	 *
	 * ID do elemento HTML criado para conter o mapa
	 *
	 * Esse elemento normalmente &eacute; criado dentro de IDCORPO dependendo da
	 * interface
	 */
	IDMAPA : "",
	/*
	 * Indica o status atual do mapa.
	 *
	 * &Eacute; utilizado para verificar o status do mapa e bloquear ou
	 * n&atilde;o determinadas fun&ccedil;&otilde;es.
	 *
	 * Por exemplo, na interface OpenLayers, identifica se as camadas
	 * est&atilde;o sendo atualizadas
	 *
	 * STATUS = { atualizando: new Array(), //guarda os c&oacute;digos dos
	 * layers que est&atilde;o sendo redesenhados trocando: false //indica se o
	 * mapa est&aacute; na fase de troca de interface }
	 */
	STATUS : {
		atualizando : [],
		trocando : false,
		pan : false
	},
	/*
	 * Troca o renderizador do mapa passando a usar a API do Google Maps
	 */
	atual2gm : {
		inicia : function() {
			i3GEO.Interface.STATUS.trocando = true;
			i3GEO.janela.ESTILOAGUARDE = "normal";
			try {
				if (google) {
					i3GEO.Interface.atual2gm.initemp();
				}
			} catch (e) {
				i3GEO.util
				.scriptTag(
					"http://www.google.com/jsapi?callback=i3GEO.Interface.atual2gm.loadMaps",
					"", "", false);
			}
		},
		loadMaps : function() {
			// AJAX API is loaded successfully. Now lets load the maps api
			google.load("maps", "3", {
				callback : "i3GEO.Interface.atual2gm.initemp",
				other_params : "sensor=false"
			});
		},
		initemp : function() {
			var temp = function() {
				$i(i3GEO.Interface.IDCORPO).innerHTML = "";
				i3GEO.Interface.ATUAL = "googlemaps";
				i3GEO.Interface.cria(i3GEO.parametros.w, i3GEO.parametros.h);
				// i3GEO.Interface.googlemaps.cria();
				i3GEO.Interface.googlemaps.inicia();
				i3GEO.janela.fechaAguarde("googleMapsAguarde");
				i3GEO.arvoreDeCamadas.CAMADAS = [];
				i3GEO.atualiza();
				i3GEO.mapa.insereDobraPagina("openlayers",
					i3GEO.configura.locaplic
					+ "/imagens/dobraopenlayers.png");
			};
			i3GEO.php.converte2googlemaps(temp);
		}
	},
	/*
	 * Troca o renderizador do mapa passando a usar a API do Open Layers
	 */
	atual2ol : {
		inicia : function() {
			i3GEO.Interface.STATUS.trocando = true;
			i3GEO.janela.ESTILOAGUARDE = "normal";
			try {
				if (OpenLayers) {
					i3GEO.Interface.atual2ol.initemp();
				}
			} catch (e) {
				i3GEO.util.scriptTag(i3GEO.configura.locaplic
					+ "/pacotes/openlayers/OpenLayers2131.js.php",
					"i3GEO.Interface.atual2ol.initemp()", "", false);
			}
		},
		initemp : function() {
			var temp = function() {
				OpenLayers.ImgPath = "../pacotes/openlayers/img/";
				$i(i3GEO.Interface.IDCORPO).innerHTML = "";
				i3GEO.Interface.ATUAL = "openlayers";
				i3GEO.Interface.cria(i3GEO.parametros.w, i3GEO.parametros.h);
				// i3GEO.Interface.openlayers.cria();
				i3GEO.Interface.openlayers.inicia();
				i3GEO.janela.fechaAguarde("OpenLayersAguarde");
				i3GEO.arvoreDeCamadas.CAMADAS = [];
				i3GEO.atualiza();
				i3GEO.mapa.insereDobraPagina("googlemaps",
					i3GEO.configura.locaplic
					+ "/imagens/dobragooglemaps.png");
				i3GEO.Interface.openlayers.zoom2ext(i3GEO.parametros.mapexten);
			};
			i3GEO.php.converte2openlayers(temp);
		}
	},
	/*
	 * Function: redesenha
	 *
	 * Aplica o m&eacute;todo redesenha da interface atual. Em alguns casos, a
	 * fun&ccedil;&atilde;o de redesenho aplica os mesmos processos da
	 * fun&ccedil;&atilde;o de atualizar o mapa. Isso ocorre pq em alguns casos
	 * as fun&ccedil;&otilde;es s&atilde;o otimizadas para cada
	 * situa&ccedil;&atilde;o
	 */
	redesenha : function() {
		i3GEO.Interface[i3GEO.Interface.ATUAL].redesenha();
	},
	/*
	 * Function: aplicaOpacidade
	 *
	 * Aplica um fator de opacidade a todos os layers do mapa
	 *
	 * Parametro:
	 *
	 * opacidade {numerico} - 0 a 1
	 *
	 * layer {string} - (opcional) se for vazio aplica ao mapa todo
	 */
	aplicaOpacidade : function(opacidade, layer) {
		i3GEO.Interface[i3GEO.Interface.ATUAL]
		.aplicaOpacidade(opacidade, layer);
	},
	/*
	 * Function: atualizaMapa
	 *
	 * Aplica o m&eacute;todo atualizaMapa da interface atual. Em alguns casos,
	 * a fun&ccedil;&atilde;o de redesenho aplica os mesmos processos da
	 * fun&ccedil;&atilde;o de atualizar o mapa. Isso ocorre pq em alguns casos
	 * as fun&ccedil;&otilde;es s&atilde;o otimizadas para cada
	 * situa&ccedil;&atilde;o
	 */
	atualizaMapa : function() {
		switch (i3GEO.Interface.ATUAL) {
		case "openlayers":
			i3GEO.Interface.openlayers.atualizaMapa();
			break;
		default:
			i3GEO.Interface[i3GEO.Interface.ATUAL].redesenha();
		}
	},
	/*
	 * Function: atualizaTema
	 *
	 * Aplica o m&eacute;todo atualizaTema da interface atual
	 *
	 * Parametros:
	 *
	 * retorno {JSON} - objeto JSON com os par�metros obtidos da
	 * fun&ccedil;&atilde;o PHP de redesenho do mapa. Quando igual a "",
	 * &eacute; feita apenas a atualiza&ccedil;&atilde;o da camada, sem que a
	 * &aacute;rvore de camadas seja atualizada.
	 *
	 * tema {string} - c&oacute;digo do tema
	 */
	atualizaTema : function(retorno, tema) {
		i3GEO.Interface[i3GEO.Interface.ATUAL].atualizaTema(retorno, tema);
	},
	/*
	 * Function: ligaDesliga
	 *
	 * Liga/desliga um tema
	 *
	 * Parametros:
	 *
	 * {object} objeto do tipo checkbox que foi acionado na arvore de camadas
	 */
	ligaDesliga : function(obj) {
		i3GEO.Interface[i3GEO.Interface.ATUAL].ligaDesliga(obj);
		// atualiza a arvore de temas se for o caso
		if (obj.value && obj.value != "") {
			var ck = i3GEO.arvoreDeTemas.buscaCheckbox(obj.value);
			if (ck) {
				ck.checked = obj.checked;
			}
		}
	},
	/*
	 * Function: adicionaKml
	 *
	 * Aplica o m&eacute;todo de adi&ccedil;&atilde;o de kml ao mapa conforme a
	 * interface atual
	 */
	adicionaKml : function() {
		if (i3GEO.Interface.ATUAL === "googlemaps") {
			i3GEO.Interface.googlemaps.adicionaKml("foo");
		}
		if (i3GEO.Interface.ATUAL === "googleearth") {
			i3GEO.Interface.googleearth.adicionaKml("foo");
		}
		if (i3GEO.Interface.ATUAL === "openlayers") {
			i3GEO.Interface.openlayers.adicionaKml("foo");
		}
	},
	/*
	 * Cria ou altera os elementos HTML necess&aacute;rios para a interface
	 *
	 * Essa fun&ccedil;&atilde;o &eacute; executada na
	 * inicializa&ccedil;&atilde;o do i3geo
	 *
	 * Parametros:
	 *
	 * w {Integer} - largura do corpo do mapa em pixels
	 *
	 * h {Integer} - altura do corpo do mapa em pixels
	 */
	cria : function(w, h) {
		i3GEO.Interface[i3GEO.Interface.ATUAL].cria(w, h);
	},
	/*
	 * Inicia a interface
	 */
	inicia : function(w, h) {
		//
		// inicializa&ccedil;&atilde;o que afeta todas as interfaces
		//
		var temp = window.location.href.split("?")[0], gadgets = i3GEO.gadgets;
		if ($i("i3GEOcompartilhar")) {
			i3GEO.social.compartilhar("i3GEOcompartilhar", temp, temp,
			"semtotal");
		}
		gadgets.mostraBuscaRapida();
		gadgets.mostraVersao();
		gadgets.mostraEmail();
		i3GEO.guias.cria();
		//
		// esse id &eacute; utilizado apenas para manter o mapa n&atilde;o
		// vis&iacute;vel at&eacute; que tudo seja montado
		//
		if ($i("mst")) {
			$i("mst").style.display = "block";
		}
		i3GEO.navega.autoRedesenho.ativa();
		i3GEO.util.defineValor("i3geo_escalanum", "value",
			i3GEO.parametros.mapscale);
		if ((i3GEO.parametros.geoip === "nao") && ($i("ondeestou"))) {
			$i("ondeestou").style.display = "none";
		}
		//
		// inicializa&ccedil;&atilde;o espec&iacute;fica de cada interface
		//
		i3GEO.Interface[i3GEO.Interface.ATUAL].inicia();
		// inclui o nome do usuario que esta logado
		if ($i(i3GEO.login.divnomelogin)
			&& i3GEO.util.pegaCookie("i3geousuarionome")) {
			$i(i3GEO.login.divnomelogin).innerHTML = i3GEO.util
			.pegaCookie("i3geousuarionome");
		}
	},
	/*
	 * Function: alteraLayers
	 *
	 * Altera todos os layers do mapa modificando um determinado parametro
	 */
	alteraParametroLayers : function(parametro, valor) {
		i3GEO.Interface[i3GEO.Interface.ATUAL].alteraParametroLayers(parametro,
			valor);
	},
	/*
	 * Ativa os bot&otilde;es de ferramentas
	 */
	ativaBotoes : function() {
		if (i3GEO.Interface.STATUS.trocando === false) {
			if (i3GEO.barraDeBotoes.TIPO === "olhodepeixe" || i3GEO.barraDeBotoes.TIPO === "olhodepeixe1") {
				i3GEO.barraDeBotoes.inicializaBarra();
			} else if (i3GEO.barraDeBotoes.TIPO === "yui") {
				i3GEO.Interface[i3GEO.Interface.ATUAL].ativaBotoes();
			}
		}
		// else
		// {i3GEO.barraDeBotoes.recria("i3geo_barra2");}
	},
	/*
	 * Classe: i3GEO.Interface.openlayers
	 *
	 * Interface com motor de navega&ccedil;&atilde;o baseado na API OpenLayers
	 *
	 * Utilizado quando
	 *
	 * i3GEO.Interface.ATUAL = "openlayers"
	 *
	 * Cria o objeto i3geoOL que pode receber os m&eacute;todos da API do
	 * OpenLayers
	 *
	 * Para detalhes sobre a configura&ccedil;&atilde;o da interface, veja
	 * i3geo/aplicmap/openlayers.htm
	 */
	openlayers : {
		/*
		 * Propriedade: parametrosMap
		 *
		 * Permite incluir parametros da API do OpenLayers nao previstos no
		 * i3Geo. Veja em
		 * http://dev.openlayers.org/releases/OpenLayers-2.12/doc/apidocs/files/OpenLayers/Map-js.html
		 *
		 * Exemplo i3GEO.Interface.openlayers.parametrosMap.scales = [50000000,
		 * 30000000, 10000000, 5000000];
		 */
		parametrosMap : {
			controls: [],
			resolutions : [ 0.703125, 0.3515625, 0.17578125, 0.087890625,
			                0.0439453125, 0.02197265625, 0.010986328125,
			                0.0054931640625, 0.00274658203125, 0.001373291015625,
			                0.0006866455078125, 0.00034332275390625,
			                0.000171661376953125, 0.0000858306884765625,
			                0.00004291534423828125, 0.000021457672119140625,
			                0.000010728836059570312, 0.000005364418029785156,
			                0.000002682209014892578 ]
		},
		/*
		 * Propriedade: FUNDOTEMA
		 *
		 * Estilo "background" do nome do tema na &aacute;rvore de camadas
		 * enquanto o mesmo est&aacute; sendo carregado.
		 *
		 * Permite destacar o nome do tema que est&aacute; em processo de
		 * carregamento
		 *
		 * Tipo {background style}
		 *
		 * Default {yellow}
		 */
		FUNDOTEMA : "yellow",
		/*
		 * Propriedade: TILES
		 *
		 * Indica se ser&aacute; utilizado o modo de navega&ccedil;&atilde;o em
		 * tiles
		 *
		 * Tipo {boolean}
		 *
		 * Default {false}
		 */
		TILES : true,
		/*
		 * N&uacute;mero de TILES na &aacute;rea n&atilde;o vis&iacute;vel do
		 * mapa
		 *
		 * Tipo {integer}
		 *
		 * Default {0}
		 */
		BUFFER : 0,
		/*
		 * Propriedade: GADGETS
		 *
		 * Lista dos controles espec&iacute;ficos da API do OpenLayers que
		 * ser&atilde;o inseridos ou n&atilde;o no mapa
		 *
		 * Tipo {object}
		 *
		 * Default:
		 * {PanZoomBar:true,LayerSwitcher:true,ScaleLine:true,OverviewMap:true}
		 */
		GADGETS : {
			PanZoomBar : true,
			PanZoom : false,
			LayerSwitcher : true,
			ScaleLine : true,
			OverviewMap : false
		},
		/*
		 * Propriedade: MINEXTENT
		 *
		 * Menor extens&atilde;o geogr&aacute;fica que pode ser mostrada no mapa
		 *
		 * Tipo {array}
		 *
		 * Default {-0.0003, -0.0003, 0.0003, 0.0003]}
		 */
		MINEXTENT : [ -0.0003, -0.0003, 0.0003, 0.0003 ],
		/*
		 * Propriedade: MAXEXTENT
		 *
		 * Maior extens&atilde;o geogr&aacute;fica que pode ser mostrada no mapa
		 *
		 * Tipo {array}
		 *
		 * Default {[-180, -90, 180, 90]}
		 */
		MAXEXTENT : [ -180, -90, 180, 90 ],
		/*
		 * Propriedades: LAYERSADICIONAIS
		 *
		 * Array com objetos do tipo LAYER que ser&atilde;o adicionados
		 * ap&oacute;s a crioa&ccedil;&atilde;o de todos os layers default.
		 *
		 * Tipo {array}
		 *
		 */
		LAYERSADICIONAIS : [],
		/*
		 * Propriedade: LAYERFUNDO
		 *
		 * Nome do layer do tipo baselayer que sera ativado
		 */
		LAYERFUNDO : "",
		googleLike : false,
		redesenha : function() {
			//
			// s&atilde;o criados apenas os layers que ainda n&atilde;o
			// existirem no mapa
			// mas que existem na arvore de camadas
			//
			var openlayers = i3GEO.Interface.openlayers;
			openlayers.criaLayers();
			openlayers.ordenaLayers();
			openlayers.recalcPar();
			i3GEO.janela.fechaAguarde();
			openlayers.sobeLayersGraficos();
		},
		cria : function(w, h) {
			var f, ins, temp, j, r, mi = i3GEO.Interface.openlayers.MINEXTENT, ma = i3GEO.Interface.openlayers.MAXEXTENT, i = $i(i3GEO.Interface.IDCORPO), bb = i3GEO.barraDeBotoes;
			if (typeof (OpenLayers) == 'undefined') {
				return;
			}
			OpenLayers.DOTS_PER_INCH = i3GEO.util.calculaDPI();
			// corrige a localiza&ccedil;&atilde;o do script
			OpenLayers._getScriptLocation = function() {
				return i3GEO.configura.locaplic + "/pacotes/openlayers/";
			};
			if (i) {
				f = $i("openlayers");
				if (!f) {
					ins = '<div id=openlayers style="width:0px;height:0px;text-align:left;background-image:url('
						+ i3GEO.configura.locaplic
						+ '/imagens/i3geo1bw.jpg)"></div>';
					i.innerHTML = ins;
				}
				f = $i("openlayers");
				f.style.width = w + "px";
				f.style.height = h + "px";
			}
			i3GEO.Interface.IDMAPA = "openlayers";
			//i3GEO.Interface.openlayers.parametrosMap.controls = [];
			i3GEO.Interface.openlayers.parametrosMap.fractionalZoom = false;
			if (!i3GEO.Interface.openlayers.parametrosMap.minResolution) {
				i3GEO.Interface.openlayers.parametrosMap.minResolution = "auto";
			}
			if (!i3GEO.Interface.openlayers.parametrosMap.minExtent) {
				i3GEO.Interface.openlayers.parametrosMap.minExtent = new OpenLayers.Bounds(
					mi[0], mi[1], mi[2], mi[3]);
			}
			if (!i3GEO.Interface.openlayers.parametrosMap.maxResolution) {
				i3GEO.Interface.openlayers.parametrosMap.maxResolution = "auto";
			}
			// define as resolucoes
			if (i3GEO.Interface.openlayers.parametrosMap.numZoomLevels) {
				if (i3GEO.Interface.openlayers.parametrosMap.minResolution == "auto") {
					temp = 0.703125;
				} else {
					temp = i3GEO.Interface.openlayers.parametrosMap.minResolution;
				}
				r = [ temp ];
				for (j = 0; j < (i3GEO.Interface.openlayers.parametrosMap.numZoomLevels - 1); j++) {
					temp = temp / 2;
					r.push(temp);
				}
				i3GEO.Interface.openlayers.parametrosMap.resolutions = r;
			}
			if (!i3GEO.Interface.openlayers.parametrosMap.maxExtent) {
				i3GEO.Interface.openlayers.parametrosMap.maxExtent = new OpenLayers.Bounds(
					ma[0], ma[1], ma[2], ma[3]);
			}
			if (!i3GEO.Interface.openlayers.parametrosMap.allOverlays) {
				i3GEO.Interface.openlayers.parametrosMap.allOverlays = false;
			}
			if (i3GEO.Interface.TABLET === true) {
				i3GEO.Interface.openlayers.parametrosMap.theme = null;
				i3GEO.Interface.openlayers.parametrosMap.controls.push(new OpenLayers.Control.Attribution());
				i3GEO.Interface.openlayers.parametrosMap.controls.push(
					new OpenLayers.Control.TouchNavigation({
						dragPanOptions : {
							interval : 100,
							enableKinetic : true
						}
					}));
				i3GEO.Interface.openlayers.parametrosMap.controls.push(new OpenLayers.Control.ZoomPanel());
			} else {
				bb.INCLUIBOTAO.zoomli = true;
				bb.INCLUIBOTAO.pan = true;
				bb.INCLUIBOTAO.zoomtot = true;
			}
			if (i3GEO.Interface.openlayers.googleLike === true) {
				i3GEO.Interface.openlayers.parametrosMap = {
					numZoomLevels : 18,
					maxResolution : 156543.0339,
					units : 'm',
					projection : new OpenLayers.Projection("EPSG:3857"),
					displayProjection : new OpenLayers.Projection("EPSG:4326"),
					fractionalZoom : false
				};
			}
			i3geoOL = new OpenLayers.Map('openlayers',
				i3GEO.Interface.openlayers.parametrosMap);
		},
		inicia : function() {
			if (typeof (OpenLayers) == 'undefined') {
				return;
			}
			//
			// monta o mapa ap&oacute;s receber o resultado da
			// cria&ccedil;&atilde;o do mapfile tempor&aacute;rio
			//
			var montaMapa = function() {
				var pz, temp, layers, i, texto, estilo, layersn, openlayers = i3GEO.Interface.openlayers;
				i3GEO.util.multiStep([ openlayers.registraEventos,
				                       openlayers.zoom2ext ], [ null,
				                                                [ i3GEO.parametros.mapexten ] ], function() {
				});
				if (openlayers.GADGETS.PanZoom === true) {
					pz = new OpenLayers.Control.PanZoom();
					i3geoOL.addControl(pz);
					pz.div.style.zIndex = 5000;
				}
				openlayers.criaLayers();
				//
				// insere a lista de layers de fundo
				//
				temp = $i("listaLayersBase");
				if (temp) {
					estilo = "cursor:pointer;vertical-align:top;padding-top:5px;";
					if (navm) {
						estilo = "border:0px solid white;cursor:pointer;vertical-align:middle;padding-top:0px;";
					}
					temp = {
						"propriedades" : []
					};
					layers = i3geoOL.getLayersBy("isBaseLayer", true);
					layersn = layers.length;
					for (i = 0; i < layersn; i++) {
						texto = "<input type=radio style='"
							+ estilo
							+ "' onclick='i3GEO.Interface.openlayers.ativaFundo(this.value)' name=i3GEObaseLayer value='"
							+ layers[i].name + "' />" + layers[i].name;
						temp.propriedades.push({
							text : texto,
							url : ""
						});
					}
					i3GEO.util.arvore("<b>" + $trad("p16") + "</b>",
						"listaLayersBase", temp);
				} else {
					if (openlayers.GADGETS.LayerSwitcher === true) {
						i3geoOL
						.addControl(new OpenLayers.Control.LayerSwitcher());
					}
				}
				if (openlayers.GADGETS.ScaleLine === true) {
					pz = new OpenLayers.Control.ScaleLine();
					i3geoOL.addControl(pz);
					pz.div.style.left = i3GEO.Interface.BARRADEZOOMLEFT + 5
					+ "px";
				}
				if (openlayers.GADGETS.OverviewMap === true) {
					i3geoOL.addControl(new OpenLayers.Control.OverviewMap());
				}
				// i3geoOL.addControl(new
				// OpenLayers.Control.KeyboardDefaults());
				//
				// estes controles ficam invis&iacute;veis e s&atilde;o usados
				// quando os &iacute;cones default do i3geo s&atilde;o ativados
				//
				if (i3GEO.Interface.TABLET === false) {
					i3GEO.Interface.openlayers.OLpan = new OpenLayers.Control.Navigation();
					// @FIXME
					// o programa OpenLayers precisou ser modificado pois isso
					// nao funciona
					// OpenLayers.Handler.MOD_SHIFT =
					// OpenLayers.Handler.MOD_CTRL;
					i3GEO.Interface.openlayers.OLzoom = new OpenLayers.Control.ZoomBox();

					i3GEO.Interface.openlayers.OLpanel = new OpenLayers.Control.Panel();
					i3GEO.Interface.openlayers.OLpanel.addControls([
					                                                i3GEO.Interface.openlayers.OLpan,
					                                                i3GEO.Interface.openlayers.OLzoom ]);
					i3geoOL.addControl(i3GEO.Interface.openlayers.OLpanel);
				}
				if (i3GEO.configura.mapaRefDisplay !== "none") {
					if (i3GEO.util.pegaCookie("i3GEO.configura.mapaRefDisplay")) {
						i3GEO.configura.mapaRefDisplay = i3GEO.util
						.pegaCookie("i3GEO.configura.mapaRefDisplay");
					}
					if (i3GEO.configura.mapaRefDisplay === "block") {
						i3GEO.maparef.inicia();
					}
				}
				// &eacute; necess&aacute;rio ativar nesse momento pois a barra
				// de botoes j&aacute; foi criada
				if (i3GEO.Interface.TABLET === false) {
					i3GEO.Interface.openlayers.OLpanel
					.activateControl(i3GEO.Interface.openlayers.OLpan);
				}
				/*
				 * @TODO lente nao funciona no OSM
				 */
				if (i3GEO.Interface.openlayers.googleLike === true) {
					i3GEO.barraDeBotoes.INCLUIBOTAO.lentei = false;
				}
				i3GEO.Interface.ativaBotoes();
				if (openlayers.GADGETS.PanZoomBar === true) {
					i3GEO.Interface.openlayers.OLpanzoombar = new OpenLayers.Control.PanZoomBar();
					i3geoOL.addControl(i3GEO.Interface.openlayers.OLpanzoombar);
					i3GEO.Interface.openlayers.OLpanzoombar.div.style.zIndex = 5000;
					i3GEO.Interface.openlayers.OLpanzoombar.div.style.top = i3GEO.Interface.BARRADEZOOMTOP
					+ "px";

					i3GEO.Interface.openlayers.OLpanzoombar.div.style.left = i3GEO.Interface.BARRADEZOOMLEFT
					+ "px";
					i3GEO.Interface.openlayers.OLpanzoombar.div.style.right = i3GEO.Interface.BARRADEZOOMRIGHT
					+ "px";
					if(i3GEO.Interface.BARRADEZOOMLEFT === 0){
						i3GEO.Interface.openlayers.OLpanzoombar.div.style.left = null;
					}
					if(i3GEO.Interface.BARRADEZOOMRIGHT === 0){
						i3GEO.Interface.openlayers.OLpanzoombar.div.style.right = null;
					}
				}
			};
			// corrigido na vers&atilde;o 4.7 do i3geo (n&atilde;o tinha o if)
			if (i3GEO.arvoreDeCamadas.ATIVATEMA === "") {
				i3GEO.arvoreDeCamadas.ATIVATEMA = "i3GEO.Interface.ligaDesliga(this);i3GEO.eventos.executaEventos(i3GEO.eventos.ATUALIZAARVORECAMADAS);";
			}
			i3GEO.util
			.multiStep(
				[ i3GEO.coordenadas.mostraCoordenadas, montaMapa,
				  i3GEO.gadgets.mostraMenuSuspenso,
				  i3GEO.ajuda.ativaLetreiro,
				  i3GEO.idioma.mostraSeletor,
				  i3GEO.gadgets.mostraEscalaNumerica,
				  i3GEO.util.arvore,
				  i3GEO.gadgets.mostraMenuLista ],
				  [
				   null,
				   null,
				   null,
				   [ i3GEO.parametros.mensagens ],
				   null,
				   null,
				   [
				    "<b>" + $trad("p13") + "</b>",
				    "listaPropriedades",
				    i3GEO.configura.listaDePropriedadesDoMapa ],
				    null ], function() {
				});
			i3GEO.arvoreDeCamadas.cria("", i3GEO.arvoreDeCamadas.CAMADAS,
				i3GEO.configura.sid, i3GEO.configura.locaplic);
			if (i3GEO.arvoreDeCamadas.MOSTRALISTAKML === true) {
				i3GEO.Interface.openlayers.adicionaListaKml();
			}
			if (i3GEO.parametros.kmlurl !== "") {
				i3GEO.Interface.openlayers.adicionaKml(true,
					i3GEO.parametros.kmlurl);
			}
			if ($i("mst")) {
				$i("mst").style.visibility = "visible";
			}
			// executa fun&ccedil;&atilde;o de finaliza&ccedil;&atilde;o, se
			// houver
			if (YAHOO.lang.isFunction(i3GEO.finalizaAPI)) {
				i3GEO.finalizaAPI.call();
			} else {
				if (i3GEO.finalizaAPI != "") {
					eval(i3GEO.finalizaAPI);
				}
			}
			// verifica se nas preferencias existem ferramentas que devem ser
			// abertas
			i3GEO.configura.iniciaFerramentas.executa();
			i3GEO.Interface.openlayers.sobeLayersGraficos();
		},
		aplicaOpacidade : function(opacidade, layer) {
			var nlayers = i3GEO.arvoreDeCamadas.CAMADAS.length, l, i, camada;
			if (!layer) {
				layer = "";
			}
			for (i = nlayers - 1; i >= 0; i--) {
				camada = i3GEO.arvoreDeCamadas.CAMADAS[i];
				l = i3geoOL.getLayersByName(camada.name)[0];
				if (l && l.isBaseLayer === false) {
					if (layer == "" || layer == camada.name) {
						l.setOpacity(opacidade);
					}
				}
			}
		},
		adicionaListaKml : function() {
			var monta = function(retorno) {
				var raiz, nraiz, i;
				raiz = retorno.data.canais;
				nraiz = raiz.length;
				for (i = 0; i < nraiz; i++) {
					i3GEO.Interface.openlayers.adicionaKml(false, raiz[i].link,
						raiz[i].title, false);
				}
			};
			i3GEO.php.listaRSSwsARRAY(monta, "KML");
		},
		adicionaKml : function(pan, url, titulo, ativo) {
			var ngeoxml, i;
			if (!$i("arvoreCamadasKml")) {
				i3GEO.Interface.openlayers.criaArvoreKML();
			}
			ngeoxml = "geoXml_" + i3GEO.mapa.GEOXML.length;
			if (arguments.length === 1) {
				i = $i("i3geo_urlkml");
				if (i) {
					url = i.value;
				} else {
					url = "";
				}
				titulo = ngeoxml;
				ativo = true;
			}
			if (arguments.length === 2) {
				titulo = ngeoxml;
				ativo = true;
			}
			if (url === "") {
				return;
			}
			// "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss"
			i3GEO.mapa.GEOXML.push(ngeoxml);
			if (i3GEO.arvoreDeCamadas.MOSTRALISTAKML === false) {
				i3GEO.arvoreDeCamadas.MOSTRALISTAKML = true;
				i3GEO.Interface.openlayers.criaArvoreKML();
			}
			i3GEO.Interface.openlayers.adicionaNoArvoreKml(url, titulo, ativo,
				ngeoxml);
		},
		criaArvoreKML : function() {
			var arvore, a, root, titulo, d, node;
			arvore = $i("arvoreCamadasKml");
			if (!arvore) {
				d = document.createElement("div");
				d.id = "arvoreCamadasKml";
				d.style.top = "40px";
				a = $i(i3GEO.arvoreDeCamadas.IDHTML);
				if (a) {
					a.parentNode.appendChild(d);
				} else {
					return;
				}
			}
			i3GEO.Interface.openlayers.ARVORE = new YAHOO.widget.TreeView(
			"arvoreCamadasKml");
			root = i3GEO.Interface.openlayers.ARVORE.getRoot();
			titulo = "<table><tr><td><b>Kml</b></td></tr></table>";
			d = {
				html : titulo,
				idkml : "raiz"
			};
			node = new YAHOO.widget.HTMLNode(d, root, true, true);
			node.enableHighlight = false;
			if (i3GEO.parametros.editor === "sim") {
				d = new YAHOO.widget.HTMLNode(
					{
						html : "<a style='color:red' title='op&ccedil;&atilde;o vis&iacute;vel apenas para editores' href='../admin/html/webservices.html' target=blank >Editar cadastro</a>",
						idmenu : "",
						enableHighlight : false,
						expanded : false
					}, node);
			}
		},
		adicionaNoArvoreKml : function(url, nomeOverlay, ativo, id) {
			var node, d, nodekml;
			if (!$i("arvoreCamadasKml")) {
				i3GEO.Interface.openlayers.criaArvoreKML();
			}
			if (arguments.length === 2) {
				ativo = true;
				id = nomeOverlay;
			}
			if (arguments.length === 2) {
				id = nomeOverlay;
			}
			node = i3GEO.Interface.openlayers.ARVORE.getNodeByProperty("idkml",
			"raiz");
			html = "<input onclick='i3GEO.Interface.openlayers.ativaDesativaCamadaKml(this,\""
				+ url
				+ "\")' class=inputsb style='cursor:pointer;' type='checkbox' value='"
				+ id + "'";
			if (ativo === true) {
				html += " checked ";
			}
			html += "/>";
			if (navm) {
				estilo = "cursor:default;vertical-align:35%;padding-top:0px;";
			} else {
				estilo = "cursor:default;vertical-align:top;";
			}

			html += "&nbsp;<span style='" + estilo + "'>" + nomeOverlay
			+ "</span>";
			d = {
				html : html
			};
			nodekml = new YAHOO.widget.HTMLNode(d, node, true, true);
			nodekml.enableHighlight = false;
			nodekml.isleaf = true;
			i3GEO.Interface.openlayers.ARVORE.draw();
			i3GEO.Interface.openlayers.ARVORE.collapseAll();
			node.expand();
			if (ativo === true) {
				i3GEO.Interface.openlayers.insereLayerKml(id, url);
			}
		},
		insereLayerKml : function(id, url) {
			var temp;
			eval(id
				+ " = new OpenLayers.Layer.Vector('"
				+ id
				+ "', {displayOutsideMaxExtent:true,displayInLayerSwitcher:false,visibility:true, strategies: [new OpenLayers.Strategy.Fixed()],protocol: new OpenLayers.Protocol.HTTP({url: '"
				+ url
				+ "',format: new OpenLayers.Format.KML({extractStyles: true,extractAttributes: true,maxDepth: 5})})})");
			eval("i3geoOL.addLayer(" + id + ");");
			eval("temp = " + id + ".div;");
			temp.onclick = function(e) {
				var targ = "", id, temp, features, n, i, j = "", html = "";
				if (!e) {
					e = window.event;
				}
				if (e.target) {
					targ = e.target;
				} else if (e.srcElement) {
					targ = e.srcElement;
				}
				if (targ.id) {
					temp = targ.id.split("_");
					if (temp[0] === "OpenLayers.Geometry.Point") {
						id = targ.id;
						temp = i3geoOL.getLayer(this.id);
						features = temp.features;
						n = features.length;
						for (i = 0; i < n; i++) {
							if (features[i].geometry.id === id) {
								for (j in features[i].attributes) {
									html += j + ": "
									+ features[i].attributes[j];
								}
								g = features[i].geometry;
								i3geoOL
								.addPopup(new OpenLayers.Popup.FramedCloud(
									"kml", new OpenLayers.LonLat(
										g.x, g.y), null, html,
										null, true));

							}
						}
					}
				}
			};
		},
		ativaDesativaCamadaKml : function(obj, url) {
			if (!obj.checked) {
				eval(obj.value + ".setVisibility(false);");
			} else {
				if (!(i3geoOL.getLayersByName(obj.value)[0])) {
					i3GEO.Interface.openlayers.insereLayerKml(obj.value, url);
				} else {
					eval(obj.value + ".setVisibility(true);");
				}
			}
		},
		criaLayers : function() {
			var configura = i3GEO.configura, url = configura.locaplic
			+ "/classesphp/mapa_openlayers.php?g_sid="
			+ i3GEO.configura.sid + "&TIPOIMAGEM="
			+ configura.tipoimagem, nlayers = i3GEO.arvoreDeCamadas.CAMADAS.length, layer, camada, urllayer, opcoes, i, n, temp = $i("i3GEOprogressoDiv"), fundoIsBase = true;
			if (temp) {
				i3GEO.Interface.STATUS.atualizando = [];
				temp.style.display = "none";
			}
			if (i3GEO.Interface.openlayers.googleLike === true) {
				url = configura.locaplic
				+ "/classesphp/mapa_googlemaps.php?g_sid="
				+ i3GEO.configura.sid + "&TIPOIMAGEM="
				+ configura.tipoimagem;
			}
			//
			// verifica se algum layer adicional &eacute; do tipo baselayer. Se
			// for, adiciona o layer fundo, mas n&atilde;o como base
			//
			try {
				temp = i3GEO.Interface.openlayers.LAYERSADICIONAIS;
				n = temp.length;
				for (i = 0; i < n; i++) {
					if (temp[i].isBaseLayer === true
						&& temp[i].visibility === true) {
						fundoIsBase = false;
					}
				}
			} catch (e) {
			}
			// define a cor do fundo do mapa com base em um layer do tipo vector
			// chamado Nenhum
			if (i3geoOL.getLayersByName("Nenhum").length === 0
				&& fundoIsBase === true) {
				// layer = new OpenLayers.Layer.WMS( "Nenhum",
				// urlfundo,{map_imagetype:i3GEO.Interface.OUTPUTFORMAT},{ratio:
				// 1,singleTile:false,isBaseLayer:true, opacity:
				// 1,visibility:false});
				layer = new OpenLayers.Layer.Vector("Nenhum", {
					displayInLayerSwitcher : true,
					visibility : false,
					isBaseLayer : true,
					singleTile : true
				});
				i3geoOL.addLayer(layer);
				if ($i(i3geoOL.id + "_OpenLayers_ViewPort")) {
					$i(i3geoOL.id + "_OpenLayers_ViewPort").style.backgroundColor = "rgb("
						+ i3GEO.parametros.cordefundo + ")";
				}
			}
			opcoes = {
				gutter : 0,
				isBaseLayer : false,
				displayInLayerSwitcher : false,
				opacity : 1,
				visibility : false,
				singleTile : !(i3GEO.Interface.openlayers.TILES),
				ratio : 1,
				buffer : i3GEO.Interface.openlayers.BUFFER,
				wrapDateLine : true,
				transitionEffect : "resize",
				eventListeners : {
					"loadstart" : i3GEO.Interface.openlayers.loadStartLayer,
					"loadend" : i3GEO.Interface.openlayers.loadStopLayer
				}
			};
			for (i = nlayers - 1; i >= 0; i--) {
				layer = "";
				camada = i3GEO.arvoreDeCamadas.CAMADAS[i];
				opcoes.singleTile = !(i3GEO.Interface.openlayers.TILES);
				// verifica se a camada ja existe no mapa
				// o copyright &eacute; colocado no mapa como um elemento html.
				// O LAYER com "name = copyright " s&oacute; &eacute; usado
				// para persistir no mapfile em fun&ccedil;&atilde;od as
				// opera&ccedil;&otilde;es de impress&atilde;o
				if (i3geoOL.getLayersByName(camada.name).length === 0
					&& camada.name.toLowerCase() != "copyright") {
					// verifica se a camada contem um plugin do i3geo
					// caso tenha, direciona para a classe_i3geoplugin
					if (camada.plugini3geo && camada.plugini3geo != "") {
						i3GEO.pluginI3geo.inicia(camada);
						continue;
					} else {
						if (camada.cache) {
							urllayer = url + "&cache=" + camada.cache
							+ "&layer=" + camada.name + "&r="
							+ Math.random();
						} else {
							urllayer = url + "&cache=&layer=" + camada.name
							+ "&r=" + Math.random();
						}
						try {
							// Layer types do mapserver
							// MS_LAYER_POINT, MS_LAYER_LINE, MS_LAYER_POLYGON,
							// MS_LAYER_RASTER, MS_LAYER_ANNOTATION (deprecated
							// since 6.2), MS_LAYER_QUERY, MS_LAYER_CIRCLE,
							// MS_LAYER_TILEINDEX, MS_LAYER_CHART
							temp = camada.type === 0 ? opcoes.gutter = 20
								: opcoes.gutter = 0;
							temp = camada.transitioneffect === "nao" ? opcoes.transitionEffect = "null"
								: opcoes.transitionEffect = "resize";

							//
							// layers marcados com o metadata wmstile com valor
							// 1 sao inseridos com Layer.TileCache
							// i3GEO.Interface.openlayers.googleLike === false
							// &&
							if (i3GEO.Interface.openlayers.googleLike === false
								&& camada.connectiontype === 7
								&& camada.wmsurl !== ""
									&& camada.usasld.toLowerCase() != "sim") {
								urllayer = camada.wmsurl + "&r="
								+ Math.random();
								if (camada.wmstile == 1) {
									layer = new OpenLayers.Layer.TMS(
										camada.name, camada.wmsurl, {
											isBaseLayer : false,
											layername : camada.wmsname,
											type : 'png'
										});
								} else {
									layer = new OpenLayers.Layer.WMS(
										camada.name, urllayer, {
											LAYERS : camada.name,
											format : camada.wmsformat,
											transparent : true
										}, opcoes);
								}
								if (camada.wmssrs != "" && layer.url) {
									layer.url = layer.url + "&SRS="
									+ camada.wmssrs + "&CRS="
									+ camada.wmssrs;
								}
							} else {
								// verifica se havera apenas um tile
								if (camada.tiles === "nao"
									|| camada.escondido.toLowerCase() === "sim"
										|| camada.connectiontype === 10
										|| (camada.type === 0 && camada.cache === "nao")
										|| camada.type === 8) {
									opcoes.singleTile = true;
								} else {
									temp = camada.type === 3 ? opcoes.singleTile = false
										: opcoes.singleTile = !(i3GEO.Interface.openlayers.TILES);
								}
								// se for definido a expansao e corte da imagem,
								// e necessario usar tile
								if (camada.cortepixels
									&& camada.cortepixels > 0) {
									opcoes.singleTile = false;
								}
								if (opcoes.singleTile === true
									&& i3GEO.Interface.openlayers.googleLike === false) {
									layer = new OpenLayers.Layer.WMS(
										camada.name, urllayer, {
											LAYERS : camada.name,
											format : camada.wmsformat,
											transparent : true
										}, opcoes);
									// layer = new
									// OpenLayers.Layer.TileCache(camada.name,
									// urllayer,{LAYERS:camada.name,map_imagetype:i3GEO.Interface.OUTPUTFORMAT},opcoes);
								} else {
									if (i3GEO.Interface.openlayers.googleLike === true) {
										layer = new OpenLayers.Layer.OSM(
											camada.name,
											urllayer
											+ "&Z=${z}&X=${x}&Y=${y}",
											{
												isBaseLayer : false
											});
									} else {
										layer = new OpenLayers.Layer.TMS(
											camada.name,
											urllayer,
											{
												isBaseLayer : false,
												serviceVersion : "&tms=",
												type : "png",
												layername : camada.name,
												map_imagetype : i3GEO.Interface.OUTPUTFORMAT
											}, opcoes);
									}

								}
							}
						} catch (e) {
						}
					}
					if (layer && layer != "") {
						if (camada.escondido.toLowerCase() === "sim") {
							layer.transitionEffect = "null";
						}
						i3geoOL.addLayer(layer);
					}
				} else {
					layer = i3geoOL.getLayersByName(camada.name)[0];
				}
				// n&atilde;o use ===
				if (layer && layer != "") {
					temp = camada.status == 0 ? layer.setVisibility(false)
						: layer.setVisibility(true);
				}
			}
			try {
				i3geoOL.addLayers(i3GEO.Interface.openlayers.LAYERSADICIONAIS);
			} catch (e) {
			}
			// inclui copyright
			if (i3GEO.parametros.copyright != "" && !$i("i3GEOcopyright")) {
				temp = document.createElement("div");
				temp.id = "i3GEOcopyright";
				temp.style.display = "block";
				temp.style.top = "0px";
				temp.style.left = "0px";
				temp.style.zIndex = 5000;
				temp.style.position = "absolute";
				temp.innerHTML = "<p class=paragrafo >"
					+ i3GEO.parametros.copyright + "</p>";
				if($i(i3GEO.Interface.IDMAPA)){
					$i(i3GEO.Interface.IDMAPA).appendChild(temp);
				}
			}
			if (i3GEO.Interface.openlayers.LAYERFUNDO != "") {
				i3GEO.Interface.openlayers
				.ativaFundo(i3GEO.Interface.openlayers.LAYERFUNDO);
			}
		},
		sobeLayersGraficos : function() {
			var nlayers = i3geoOL.getNumLayers(), layers = i3geoOL.layers, i;
			for (i = 0; i < nlayers; i++) {
				if (layers[i].CLASS_NAME == "OpenLayers.Layer.Vector"
					&& layers[i].name != "Nenhum") {
					i3geoOL.raiseLayer(i3geoOL.layers[i], nlayers);
				}
			}
		},
		inverteModoTile : function() {
			if (i3GEO.Interface.openlayers.TILES === true) {
				i3GEO.Interface.openlayers.TILES = false;
			} else {
				i3GEO.Interface.openlayers.TILES = true;
			}
			i3GEO.Interface.openlayers.removeTodosOsLayers();
			i3GEO.Interface.openlayers.criaLayers();
		},
		removeTodosOsLayers : function() {
			var nlayers = i3GEO.arvoreDeCamadas.CAMADAS.length, layer, i, camada;
			for (i = nlayers - 1; i >= 0; i--) {
				camada = i3GEO.arvoreDeCamadas.CAMADAS[i];
				layer = i3geoOL.getLayersByName(camada.name)[0];
				if (layer) {
					i3geoOL.removeLayer(layer, false);
					i3GEO.pluginI3geo.removeCamada(camada.name);
				}
			}
		},
		alteraParametroLayers : function(parametro, valor) {
			var layers = i3geoOL.layers, nlayers = layers.length, i, url, reg;
			for (i = 0; i < nlayers; i += 1) {
				if (layers[i].url) {
					url = layers[i].url;
					if (url.search("\\?") > 0) {
						reg = new RegExp(parametro + "([=])+([a-zA-Z0-9_]*)");
						layers[i].url = url.replace(reg, "");
						// eval("layers[i].mergeNewParams({"+parametro+":valor})");
						layers[i].url = layers[i].url + "&" + parametro + "="
						+ valor;
						layers[i].redraw();
					}
				}
			}
		},
		loadStartLayer : function(event) {
			var p = $i("i3GEOprogressoDiv");
			if ($i("ArvoreTituloTema" + event.object.name)) {
				i3GEO.Interface.STATUS.atualizando.push(event.object.name);
				YAHOO.util.Dom.setStyle("ArvoreTituloTema" + event.object.name,
					"background", i3GEO.Interface.openlayers.FUNDOTEMA);
				if (p) {
					p.style.display = "block";
					i3GEO.arvoreDeCamadas.progressBar.set('maxValue',
						i3GEO.Interface.STATUS.atualizando.length);
					i3GEO.arvoreDeCamadas.progressBar.set('value',
						i3GEO.arvoreDeCamadas.progressBar.get('value') - 1);
				}
			}
		},
		loadStopLayer : function(event) {
			var p = $i("i3GEOprogressoDiv");
			i3GEO.Interface.STATUS.atualizando.remove(event.object.name);
			if ($i("ArvoreTituloTema" + event.object.name)) {
				YAHOO.util.Dom.setStyle("ArvoreTituloTema" + event.object.name,
					"background", "");
				if (p) {
					p.style.display = "block";
					if (i3GEO.Interface.STATUS.atualizando.length > 0) {
						i3GEO.arvoreDeCamadas.progressBar
						.set('value', i3GEO.arvoreDeCamadas.progressBar
							.get('value') + 1);
					} else {
						i3GEO.arvoreDeCamadas.progressBar.set('value', 0);
						p.style.display = "none";
					}
				}
			}
		},
		ordenaLayers : function() {
			var ordem = i3GEO.arvoreDeCamadas.CAMADAS, nordem = ordem.length, layer, layers, i, maiorindice;
			// maior indice
			layers = i3geoOL.layers;
			maiorindice = i3geoOL.getLayerIndex(layers[(layers.length) - 1]);
			for (i = nordem - 1; i >= 0; i--) {
				layers = i3geoOL.getLayersByName(ordem[i].name);
				layer = layers[0];
				if (layer) {
					i3geoOL.setLayerIndex(layer, maiorindice + i);
				}
			}
			i3GEO.Interface.openlayers.sobeLayersGraficos();
		},
		sobeDesceLayer : function(tema, tipo) {
			var layer = i3geoOL.getLayersByName(tema)[0], indice;
			if (layer) {
				indice = i3geoOL.getLayerIndex(layer);
				if (tipo === "sobe") {
					i3geoOL.setLayerIndex(layer, indice + 1);
				} else {
					i3geoOL.setLayerIndex(layer, indice - 1);
				}
			}
			i3GEO.Interface.openlayers.sobeLayersGraficos();
		},
		ligaDesliga : function(obj) {
			var layers = i3geoOL.getLayersByName(obj.value), desligar = "", ligar = "", b;
			if (layers.length > 0) {
				layers[0].setVisibility(obj.checked);
				if (obj.checked === true) {
					layers[0].div.style.display = "block";
					i3GEO.pluginI3geo.ligaCamada(obj.value);
				} else {
					layers[0].div.style.display = "none";
					i3GEO.pluginI3geo.desligaCamada(obj.value);
				}
			}
			if (obj.checked) {
				ligar = obj.value;
				i3GEO.arvoreDeCamadas.alteraPropCamadas("status", "2",
					obj.value);
			} else {
				desligar = obj.value;
				i3GEO.arvoreDeCamadas.alteraPropCamadas("status", "0",
					obj.value);
			}
			// i3GEO.php.ligatemas(temp,desligar,ligar);
			// beacons pattern
			b = new Image();
			b.src = i3GEO.configura.locaplic
			+ "/classesphp/mapa_controle.php?funcao=ligatemasbeacon&desligar="
			+ desligar + "&ligar=" + ligar + "&adicionar=nao&g_sid="
			+ i3GEO.configura.sid;
			b.onerror = function() {
				i3GEO.mapa.legendaHTML.atualiza();
			};
		},
		ativaFundo : function(nome) {
			var temp = i3geoOL.getLayersBy("name", nome);
			if (temp.length > 0) {
				i3geoOL.setBaseLayer(temp[0]);
				if (i3GEO.Interface.openlayers.OLpanzoombar) {
					i3GEO.Interface.openlayers.OLpanzoombar.div.style.top = i3GEO.Interface.BARRADEZOOMTOP
					+ "px";
					i3GEO.Interface.openlayers.OLpanzoombar.div.style.left = i3GEO.Interface.BARRADEZOOMLEFT
					+ "px";
					i3GEO.Interface.openlayers.OLpanzoombar.div.style.right = i3GEO.Interface.BARRADEZOOMRIGHT
					+ "px";
				}
				if(i3GEO.Interface.BARRADEZOOMLEFT === 0){
					i3GEO.Interface.openlayers.OLpanzoombar.div.style.left = null;
				}
				if(i3GEO.Interface.BARRADEZOOMRIGHT === 0){
					i3GEO.Interface.openlayers.OLpanzoombar.div.style.right = null;
				}
				i3GEO.Interface.openlayers.LAYERFUNDO = nome;
			} else {
				i3GEO.Interface.openlayers.LAYERFUNDO = "";
			}
		},
		atualizaMapa : function() {
			var layers = i3geoOL.layers, nlayers = layers.length, i;
			for (i = 0; i < nlayers; i++) {
				if (layers[i].url) {
					layers[i].mergeNewParams({
						r : Math.random()
					});
					if (layers[i].url.search("\\?") >= 0) {
						layers[i].url = layers[i].url.replace(
							"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
						"&foo=");
						layers[i].url = layers[i].url + "&&";
					}
					// cache e um parametro especifico do i3geo
					// utilizado por mapa_openlayers.php e mapa_googlemaps.php
					layers[i].url = layers[i].url.replace("&cache=sim",
					"&cache=nao");
					if (layers[i].visibility === true) {
						layers[i].redraw();
					}
				}
			}
			i3GEO.Interface.openlayers.sobeLayersGraficos();
		},
		atualizaTema : function(retorno, tema) {
			var layer = i3geoOL.getLayersByName(tema)[0], objtemas;
			if (layer && layer != undefined) {
				if (layer.url) {
					layer.mergeNewParams({
						r : Math.random()
					});
					layer.url = layer.url
					.replace(
						"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
					"&foo=");
					layer.url = layer.url + "&&";
					layer.url = layer.url.replace("&cache=sim", "&cache=nao");
					layer.redraw();
				}
			}
			if (retorno === "") {
				return;
			}
			objtemas = i3GEO.arvoreDeCamadas
			.converteChaveValor2normal(retorno.data.temas);
			i3GEO.Interface.openlayers.recalcPar();
			try {
				i3GEO.arvoreDeCamadas.atualiza(objtemas);
			} catch (e) {
				i3GEO.arvoreDeCamadas.atualiza();
			}
			i3GEO.janela.fechaAguarde();
		},
		registraEventos : function() {
			// vari&aacute;vel que indica se o usu&aacute;rio est&aacute;
			// movimentando o mapa
			var calcCoord, modoAtual = "";
			calcCoord = function(e) {
				var point, p, lonlat, d, pos, projWGS84, proj900913;
				p = e.xy;
				lonlat = i3geoOL.getLonLatFromPixel(p);
				if (!lonlat) {
					return;
				}
				if (i3GEO.Interface.openlayers.googleLike === true) {
					projWGS84 = new OpenLayers.Projection("EPSG:4326");
					proj900913 = new OpenLayers.Projection("EPSG:900913");
					point = new OpenLayers.LonLat(lonlat.lon, lonlat.lat);
					lonlat = point.transform(proj900913, projWGS84);
				}
				d = i3GEO.calculo.dd2dms(lonlat.lon, lonlat.lat);
				try {
					objposicaocursor.ddx = lonlat.lon;
					objposicaocursor.ddy = lonlat.lat;
					objposicaocursor.dmsx = d[0];
					objposicaocursor.dmsy = d[1];
					objposicaocursor.imgx = p.x;
					objposicaocursor.imgy = p.y;
					pos = i3GEO.util
					.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));
					objposicaocursor.telax = p.x + pos[0];
					objposicaocursor.telay = p.y + pos[1];
				} catch (e) {
				}
			};
			//
			// ativa os eventos espec&iacute;ficos do i3geo
			//
			i3GEO.eventos.ativa($i(i3geoOL.id + "_OpenLayers_Container"));
			//
			// ativa os eventos controlados pela API do OL
			//
			i3geoOL.events.register("movestart", i3geoOL, function(e) {
				i3GEO.Interface.STATUS.pan = true;
				var xy;
				modoAtual = "move";
				i3GEO.barraDeBotoes.BOTAOCLICADO = "pan";
				xy = i3GEO.navega.centroDoMapa();
				i3GEO.navega.marcaCentroDoMapa(xy);
			});
			i3geoOL.events.register("moveend", i3geoOL, function(e) {
				var xy;

				modoAtual = "";
				i3GEO.Interface.openlayers.recalcPar();
				i3GEO.Interface.STATUS.pan = false;
				i3GEO.eventos.navegaMapa();
				i3GEO.util.escondePin();
				//
				// permite que a coordenada do centro mapa seja mostrada no
				// formul&aacute;rio de coordenadas
				//
				xy = i3GEO.navega.centroDoMapa();
				i3GEO.coordenadas.mostraCoordenadas(false, "", xy[0], xy[1]);
				i3GEO.eventos.cliquePerm.status = false;
				// guarda a extensao geografica atual
				i3GEO.navega.registraExt(i3GEO.parametros.mapexten);
				i3GEO.Interface.STATUS.pan = false;
			});
			i3geoOL.events.register("mousemove", i3geoOL, function(e) {
				if (modoAtual === "move") {
					return;
				}
				calcCoord(e);
			});
		},
		ativaBotoes : function() {
			var imagemxy, x2 = 0, y2 = 0;
			imagemxy = i3GEO.util
			.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));
			if ($i("barraDeBotoes2") || i3GEO.barraDeBotoes.AUTO === true) {
				x2 = imagemxy[0] + i3GEO.Interface.BARRABOTOESLEFT;
				y2 = imagemxy[1] + i3GEO.Interface.BARRABOTOESTOP;
			}
			if ($i("barraDeBotoes2") || i3GEO.barraDeBotoes.AUTO === true) {
				i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes2",
					"i3geo_barra2", false, x2, y2);
			}
			i3GEO.barraDeBotoes.ativaBotoes();
		},
		recalcPar : function() {
			var bounds = i3geoOL.getExtent().toBBOX().split(","), escalaAtual = i3geoOL
			.getScale();
			if (i3GEO.parametros.mapscale !== escalaAtual) {
				i3GEO.arvoreDeCamadas.atualizaFarol(escalaAtual);
			}
			i3GEO.parametros.mapexten = bounds[0] + " " + bounds[1] + " "
			+ bounds[2] + " " + bounds[3];
			i3GEO.parametros.mapscale = escalaAtual;
			i3GEO.parametros.pixelsize = i3geoOL.getResolution();
			i3GEO.gadgets.atualizaEscalaNumerica(parseInt(escalaAtual, 10));
		},
		zoom2ext : function(ext) {
			var m, b;
			ext = i3GEO.util.extGeo2OSM(ext);
			m = ext.split(" ");
			b = new OpenLayers.Bounds(m[0], m[1], m[2], m[3]);
			i3geoOL.zoomToExtent(b, true);
			i3GEO.eventos.cliquePerm.status = true;
		},
		pan2ponto : function(x, y) {
			// verifica se nao e necessario alterar as coordenadas
			if (i3GEO.Interface.openlayers.googleLike === true) {
				var projWGS84, proj900913, point, metrica;
				if (x < 180 && x > -180) {
					projWGS84 = new OpenLayers.Projection("EPSG:4326");
					proj900913 = new OpenLayers.Projection("EPSG:900913");
					point = new OpenLayers.LonLat(x, y);
					metrica = point.transform(projWGS84, proj900913);
					x = metrica.lon;
					y = metrica.lat;
				}
			}
			i3geoOL.panTo(new OpenLayers.LonLat(x, y));
		}
	},
	/*
	 * Classe: i3GEO.Interface.googlemaps
	 *
	 * Interface com motor de navega&ccedil;&atilde;o baseado na API Google Maps
	 *
	 * Utilizado quando
	 *
	 * i3GEO.Interface.ATUAL = "googlemaps"
	 *
	 * Cria o objeto i3GeoMap que pode receber os m&eacute;todos da API. Cria
	 * tamb&eacute;m o objeto i3GeoMapOverlay do tipo Overlay, utilizado para
	 * c&aacute;lculos ou para receber elementos gr&aacute;ficos.
	 */
	googlemaps : {
		/*
		 * Propriedade: ESTILOS
		 *
		 * Estilos que podem ser utilizados com o mapa
		 *
		 *
		 * Para novos estilos, acrescente seu codigo nesse objeto
		 *
		 * Fonte http://maps-api-tt.appspot.com/apilite/styled/styled.html
		 *
		 * Tipo {objeto estilo do Google Maps}
		 */
		ESTILOS : {
			'Red' : [ {
				featureType : 'all',
				stylers : [ {
					hue : '#ff0000'
				} ]
			} ],
			'Countries' : [ {
				featureType : 'all',
				stylers : [ {
					visibility : 'off'
				} ]
			}, {
				featureType : 'water',
				stylers : [ {
					visibility : 'on'
				}, {
					lightness : -100
				} ]
			} ],
			'Night' : [ {
				featureType : 'all',
				stylers : [ {
					invert_lightness : 'true'
				} ]
			} ],
			'Blue' : [ {
				featureType : 'all',
				elementType : 'geometry',
				stylers : [ {
					hue : '#0000b0'
				}, {
					invert_lightness : 'true'
				}, {
					saturation : -30
				} ]
			} ],
			'Greyscale' : [ {
				featureType : 'all',
				stylers : [ {
					saturation : -100
				}, {
					gamma : 0.50
				} ]
			} ],
			'No roads' : [ {
				featureType : 'road',
				stylers : [ {
					visibility : 'off'
				} ]
			} ],
			'Mixed' : [ {
				featureType : 'landscape',
				stylers : [ {
					hue : '#00dd00'
				} ]
			}, {
				featureType : 'road',
				stylers : [ {
					hue : '#dd0000'
				} ]
			}, {
				featureType : 'water',
				stylers : [ {
					hue : '#000040'
				} ]
			}, {
				featureType : 'poi.park',
				stylers : [ {
					visibility : 'off'
				} ]
			}, {
				featureType : 'road.arterial',
				stylers : [ {
					hue : '#ffff00'
				} ]
			}, {
				featureType : 'road.local',
				stylers : [ {
					visibility : 'off'
				} ]
			} ],
			'Chilled' : [ {
				featureType : 'road',
				elementType : 'geometry',
				stylers : [ {
					'visibility' : 'simplified'
				} ]
			}, {
				featureType : 'road.arterial',
				stylers : [ {
					hue : 149
				}, {
					saturation : -78
				}, {
					lightness : 0
				} ]
			}, {
				featureType : 'road.highway',
				stylers : [ {
					hue : -31
				}, {
					saturation : -40
				}, {
					lightness : 2.8
				} ]
			}, {
				featureType : 'poi',
				elementType : 'label',
				stylers : [ {
					'visibility' : 'off'
				} ]
			}, {
				featureType : 'landscape',
				stylers : [ {
					hue : 163
				}, {
					saturation : -26
				}, {
					lightness : -1.1
				} ]
			}, {
				featureType : 'transit',
				stylers : [ {
					'visibility' : 'off'
				} ]
			}, {
				featureType : 'water',
				stylers : [ {
					hue : 3
				}, {
					saturation : -24.24
				}, {
					lightness : -38.57
				} ]
			} ]
		},
		/*
		 * Propriedade: ESTILOPADRAO
		 *
		 * Nome do estilo definido em ESTILOS que sera usado como padrao para o
		 * mapa. Se for "" sera usado o estilo normal do Google
		 *
		 * Estilos pre-definidos Red, Countries, Night, Blue, Greyscale, No
		 * roads, Mixed, Chilled
		 *
		 * Tipo {string}
		 *
		 * Default: ""
		 */
		ESTILOPADRAO : "",
		/*
		 * Propriedade: MAPOPTIONS
		 *
		 * Objeto contendo op&ccedil;&otilde;es que ser&atilde;o utilizadas no
		 * construtor do mapa conforme a API do GoogleMaps
		 *
		 * Exemplo de uso
		 *
		 * i3GEO.Interface.googlemaps.MAPOPTIONS = {maxZoom:5};
		 *
		 * https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		 *
		 * Tipo {MapOptions}
		 */
		MAPOPTIONS : {
			scaleControl : true,
			mapTypeControlOptions: {
				position: 1
			}
		},
		/*
		 * Propriedade: OPACIDADE
		 *
		 * Valor da opacidade das camadas i3geo do mapa
		 *
		 * Varia de 0 a 1
		 *
		 * Default: 0.8
		 *
		 * Tipo {Numeric}
		 */
		OPACIDADE : 0.8,
		/*
		 * Propriedade: TIPOMAPA
		 *
		 * Tipo de mapa que ser&aacute; usado como default, conforme constantes
		 * definidas na API do Google Maps.
		 *
		 * Default: "roadmap"
		 *
		 * Tipo {string - Google API constante
		 * "satellite"|"roadmap"|"hybrid"|"terrain"}
		 */
		TIPOMAPA : "terrain",
		/*
		 * Variable: ZOOMSCALE
		 *
		 * Array com a lista de escalas em cada nivel de zoom utilizado pelo
		 * Google
		 *
		 * Tipo {array}
		 *
		 */
		ZOOMSCALE : [ 591657550, 295828775, 147914387, 73957193, 36978596,
		              18489298, 9244649, 4622324, 2311162, 1155581, 577790, 288895,
		              144447, 72223, 36111, 18055, 9027, 4513, 2256, 1128 ],
		              /*
		               * Par�metros adicionais que s&atilde;o inseridos na URL que define cada
		               * layer
		               *
		               * Tipo {string}
		               */
		              PARAMETROSLAYER : "&TIPOIMAGEM=" + i3GEO.configura.tipoimagem,
		              /*
		               * String acrescentada a url de cada tile para garantir a
		               * remo&ccedil;&atilde;o do cache local
		               *
		               * Tipo {string}
		               */
		              posfixo : 0,
		              atualizaTema : function(retorno, tema) {
		            	  //
		            	  // n&atilde;o se atualiza um tema &uacute;nico, mas o mapa todo
		            	  //
		            	  // i3GEO.atualiza(retorno);
		            	  var indice = i3GEO.Interface.googlemaps.retornaIndiceLayer(tema), objtemas;
		            	  i3GeoMap.overlayMapTypes.removeAt(indice);
		            	  i3GEO.Interface.googlemaps.posfixo += 1;
		            	  i3GEO.Interface.googlemaps.insereLayer(tema, indice);
		            	  if (retorno === "") {
		            		  return;
		            	  }
		            	  objtemas = i3GEO.arvoreDeCamadas
		            	  .converteChaveValor2normal(retorno.data.temas);
		            	  i3GEO.Interface.googlemaps.recalcPar();
		            	  try {
		            		  i3GEO.arvoreDeCamadas.atualiza(objtemas);
		            	  } catch (e) {
		            		  i3GEO.arvoreDeCamadas.atualiza();
		            	  }
		            	  i3GEO.janela.fechaAguarde();
		              },
		              removeTodosLayers : function() {
		            	  var nlayers = i3GEO.arvoreDeCamadas.CAMADAS.length, i, camada, indice;
		            	  for (i = 0; i < nlayers; i++) {
		            		  camada = i3GEO.arvoreDeCamadas.CAMADAS[i];
		            		  indice = i3GEO.Interface.googlemaps
		            		  .retornaIndiceLayer(camada.name);
		            		  if (indice !== false) {
		            			  try {
		            				  i3GeoMap.overlayMapTypes.removeAt(indice);
		            				  i3GEO.pluginI3geo.removeCamada(camada.name);
		            			  } catch (e) {
		            			  }
		            		  }
		            	  }
		              },
		              redesenha : function() {
		            	  i3GEO.Interface.googlemaps.posfixo += 1;
		            	  i3GEO.Interface.googlemaps.removeTodosLayers();
		            	  i3GEO.Interface.googlemaps.criaLayers();
		              },
		              cria : function(w, h) {
		            	  var i, f, ins;
		            	  google.maps.visualRefresh = true;
		            	  posfixo = "&nd=0";
		            	  i = $i(i3GEO.Interface.IDCORPO);
		            	  if (i) {
		            		  f = $i("googlemapsdiv");
		            		  if (!f) {
		            			  ins = '<div id=googlemapsdiv style="width:0px;height:0px;text-align:left;background-image:url('
		            				  + i3GEO.configura.locaplic
		            				  + '/imagens/i3geo1bw.jpg)"></div>';
		            			  i.innerHTML = ins;
		            		  }
		            		  f = $i("googlemapsdiv");
		            		  if (w) {
		            			  f.style.width = w + "px";
		            			  f.style.height = h + "px";
		            		  }
		            	  }
		            	  i3GeoMap = "";
		            	  i3GEO.Interface.IDMAPA = "googlemapsdiv";
		            	  if (i3GEO.Interface.TABLET === false) {
		            		  i3GEO.barraDeBotoes.INCLUIBOTAO.zoomli = true;
		            		  i3GEO.barraDeBotoes.INCLUIBOTAO.pan = true;
		            		  i3GEO.barraDeBotoes.INCLUIBOTAO.zoomtot = true;
		            	  }
		              },
		              ativaZoomBox : function() {
		            	  i3GeoMap.enableKeyDragZoom({
		            		  key : 'ctrl'
		            	  });
		              },
		              inicia : function() {
		            	  var pol, ret, montaMapa;
		            	  pol = i3GEO.parametros.mapexten;
		            	  ret = pol.split(" ");
		            	  if ($i("i3GEOprogressoDiv")) {
		            		  $i("i3GEOprogressoDiv").style.display = "block";
		            	  }
		            	  montaMapa = function(retorno) {
		            		  var sw, ne, estilo, dobra = $i("i3GEOdobraPagina");
		            		  if (i3GEO.Interface.googlemaps.ESTILOS
		            			  && i3GEO.Interface.googlemaps.ESTILOPADRAO != "") {
		            			  i3GEO.Interface.googlemaps.MAPOPTIONS.mapTypeId = i3GEO.Interface.googlemaps.ESTILOPADRAO;
		            		  }
		            		  //verifica o posicionamento da barra de zoom
		            		  if(i3GEO.Interface.BARRADEZOOMRIGHT != 0){
		            			  i3GEO.Interface.googlemaps.MAPOPTIONS.zoomControlOptions = {
		            				  position: google.maps.ControlPosition.RIGHT_TOP
		            			  };
		            			  i3GEO.Interface.googlemaps.MAPOPTIONS.panControlOptions = {
		            				  position: google.maps.ControlPosition.RIGHT_TOP
		            			  };
		            		  }
		            		  try {
		            			  i3GeoMap = new google.maps.Map($i(i3GEO.Interface.IDMAPA),
		            				  i3GEO.Interface.googlemaps.MAPOPTIONS);
		            		  } catch (e) {
		            			  alert(e);
		            			  return;
		            		  }
		            		  if (i3GEO.Interface.googlemaps.ESTILOS
		            			  && i3GEO.Interface.googlemaps.ESTILOPADRAO != "") {
		            			  estilo = i3GEO.Interface.googlemaps.ESTILOS[i3GEO.Interface.googlemaps.ESTILOPADRAO];
		            			  i3GeoMap.mapTypes.set(
		            				  i3GEO.Interface.googlemaps.ESTILOPADRAO,
		            				  new google.maps.StyledMapType(estilo, {
		            					  name : i3GEO.Interface.googlemaps.ESTILOPADRAO
		            				  }));
		            		  } else {
		            			  i3GeoMap.setMapTypeId(i3GEO.Interface.googlemaps.TIPOMAPA);
		            		  }
		            		  if (dobra) {
		            			  $i(i3GEO.Interface.IDMAPA).appendChild(dobra);
		            		  }
		            		  sw = new google.maps.LatLng(ret[1], ret[0]);
		            		  ne = new google.maps.LatLng(ret[3], ret[2]);
		            		  i3GeoMap.fitBounds(new google.maps.LatLngBounds(sw, ne));
		            		  // FIXME Isso provoca um loop infinito e trava
		            		  // i3GeoMap.setZoom(i3GeoMap.getZoom()+1);

		            		  //
		            		  // carrega o javascript que permite fazer o zoom por box
		            		  //
		            		  if (!$i("keydragzoom_script")) {
		            			  js = i3GEO.configura.locaplic
		            			  + "/pacotes/google/keydragzoom.js";
		            			  i3GEO.util.scriptTag(js,
		            				  "i3GEO.Interface.googlemaps.ativaZoomBox()",
		            			  "keydragzoom_script");
		            		  }
		            		  i3GeoMapOverlay = new google.maps.OverlayView();
		            		  i3GeoMapOverlay.draw = function() {
		            		  };

		            		  i3GEO.Interface.googlemaps.criaLayers();
		            		  i3GeoMapOverlay.setMap(i3GeoMap);
		            		  i3GEO.Interface.googlemaps.registraEventos();
		            		  // se o mapa est&aacute; no modo de troca de interface, alguns
		            		  // elementos n&atilde;o precisam ser inseridos novamente
		            		  if (i3GEO.Interface.STATUS.trocando === false) {
		            			  i3GEO.gadgets.mostraInserirKml();
		            		  }
		            		  i3GEO.Interface.ativaBotoes();
		            		  i3GEO.eventos.ativa($i(i3GEO.Interface.IDMAPA));
		            		  if (i3GEO.Interface.STATUS.trocando === false) {
		            			  i3GEO.coordenadas.mostraCoordenadas();
		            			  i3GEO.gadgets.mostraEscalaNumerica();
		            			  i3GEO.gadgets.mostraMenuLista();
		            			  i3GEO.idioma.mostraSeletor();
		            		  }
		            		  i3GEO.gadgets.mostraMenuSuspenso();
		            		  g_operacao = "";
		            		  g_tipoacao = "";
		            		  if (i3GEO.Interface.STATUS.trocando === true) {
		            			  $i(i3GEO.arvoreDeCamadas.IDHTML).innerHTML = "";
		            		  }
		            		  if (i3GEO.Interface.STATUS.trocando === false) {
		            			  i3GEO.util.arvore("<b>" + $trad("p13") + "</b>",
		            				  "listaPropriedades",
		            				  i3GEO.configura.listaDePropriedadesDoMapa);
		            		  }
		            		  if (i3GEO.arvoreDeCamadas.ATIVATEMA === "") {
		            			  i3GEO.arvoreDeCamadas.ATIVATEMA = "i3GEO.Interface.ligaDesliga(this)";
		            		  }
		            		  i3GEO.arvoreDeCamadas.cria("", i3GEO.arvoreDeCamadas.CAMADAS,
		            			  i3GEO.configura.sid, i3GEO.configura.locaplic);
		            		  if (i3GEO.arvoreDeCamadas.MOSTRALISTAKML === true) {
		            			  i3GEO.Interface.googlemaps.adicionaListaKml();
		            		  }
		            		  if (i3GEO.parametros.kmlurl !== "") {
		            			  i3GEO.Interface.googlemaps.adicionaKml(true,
		            				  i3GEO.parametros.kmlurl);
		            		  }
		            		  // executa fun&ccedil;&atilde;o de finaliza&ccedil;&atilde;o, se
		            		  // houver
		            		  if (YAHOO.lang.isFunction(i3GEO.finalizaAPI)) {
		            			  i3GEO.finalizaAPI.call();
		            		  } else {
		            			  if (i3GEO.finalizaAPI != "") {
		            				  eval(i3GEO.finalizaAPI);
		            			  }
		            		  }
		            		  i3GEO.configura.iniciaFerramentas.executa();
		            	  };
		            	  i3GEO.php.googlemaps(montaMapa);
		              },
		              criaLayers : function() {
		            	  var nlayers = i3GEO.arvoreDeCamadas.CAMADAS.length, i, camada, indice;
		            	  for (i = 0; i < nlayers; i++) {
		            		  camada = i3GEO.arvoreDeCamadas.CAMADAS[i];
		            		  indice = i3GEO.Interface.googlemaps
		            		  .retornaIndiceLayer(camada.name);
		            		  if (!indice) {
		            			  // nao utilize !== aqui
		            			  if (camada.status != 0) {
		            				  // verifica se a camada contem um plugin do i3geo
		            				  // caso tenha, direciona para a classe_i3geoplugin
		            				  if (camada.plugini3geo && camada.plugini3geo != "") {
		            					  i3GEO.pluginI3geo.inicia(camada);
		            					  continue;
		            				  } else {
		            					  i3GEO.Interface.googlemaps.insereLayer(camada.name,
		            						  0, camada.cache);
		            				  }
		            			  }
		            		  }
		            	  }
		            	  i3GEO.Interface.googlemaps.recalcPar();
		              },
		              criaImageMap : function(nomeLayer, cache) {
		            	  var i3GEOTileO = "", s;
		            	  if (cache == "undefined" || cache == undefined) {
		            		  cache = "";
		            	  }
		            	  s = "i3GEOTileO = new google.maps.ImageMapType({ "
		            		  + "getTileUrl: function(coord, zoom) {"
		            		  + "	var url = '"
		            		  + i3GEO.configura.locaplic
		            		  + "/classesphp/mapa_googlemaps.php?g_sid="
		            		  + i3GEO.configura.sid
		            		  + "&cache="
		            		  + cache
		            		  + "&Z=' + zoom + '&X=' + coord.x + '&Y=' + coord.y + '&layer="
		            		  + nomeLayer + i3GEO.Interface.googlemaps.PARAMETROSLAYER
		            		  + '&r=' + Math.random() + "';"
		            		  + "	return url+'&nd='+i3GEO.Interface.googlemaps.posfixo; "
		            		  + "}, " + "tileSize: new google.maps.Size(256, 256),"
		            		  + "isPng: true," + "name: '" + nomeLayer + "'" + "});";
		            	  eval(s);
		            	  return i3GEOTileO;
		              },
		              insereLayer : function(nomeLayer, indice, cache) {
		            	  if (i3GEO.pluginI3geo.existeObjeto(nomeLayer) === false) {
		            		  var i = i3GEO.Interface.googlemaps.criaImageMap(nomeLayer,
		            			  cache);
		            		  i3GeoMap.overlayMapTypes.insertAt(indice, i);
		            	  }

		              },
		              registraEventos : function() {
		            	  var modoAtual = "";
		            	  google.maps.event.addListener(i3GeoMap, "dragstart", function() {
		            		  g_operacao = "";
		            		  g_tipoacao = "";
		            		  var xy;
		            		  modoAtual = "move";
		            		  xy = i3GEO.navega.centroDoMapa();
		            		  i3GEO.navega.marcaCentroDoMapa(xy);
		            	  });
		            	  google.maps.event.addListener(i3GeoMap, "dragend", function() {
		            		  var xy;
		            		  modoAtual = "";
		            		  i3GEO.Interface.googlemaps.recalcPar();
		            		  i3GEO.eventos.navegaMapa();
		            		  i3GEO.util.escondePin();
		            		  //
		            		  // permite que a coordenada do centro mapa seja mostrada no
		            		  // formul&aacute;rio de coordenadas
		            		  //
		            		  xy = i3GEO.navega.centroDoMapa();
		            		  i3GEO.coordenadas.mostraCoordenadas(false, "", xy[0], xy[1]);
		            		  i3GEO.eventos.cliquePerm.status = false;
		            		  i3GEO.navega.registraExt(i3GEO.parametros.mapexten);
		            	  });
		            	  google.maps.event.addListener(i3GeoMap, "tilesloaded", function() {
		            		  // if($i("i3GEOprogressoDiv")){
		            		  // $i("i3GEOprogressoDiv").style.display = "none";
		            		  // }
		            		  i3GEO.Interface.googlemaps.recalcPar();
		            		  // guarda a extensao geografica atual
		            		  i3GEO.navega.registraExt(i3GEO.parametros.mapexten);
		            	  });
		            	  google.maps.event.addListener(i3GeoMap, "bounds_changed",
		            		  function() {
		            		  var xy;
		            		  i3GEO.Interface.googlemaps.recalcPar();
		            		  g_operacao = "";
		            		  g_tipoacao = "";
		            		  i3GEO.eventos.navegaMapa();
		            		  //
		            		  // permite que a coordenada do centro mapa seja mostrada
		            		  // no formul&aacute;rio de coordenadas
		            		  //
		            		  xy = i3GEO.navega.centroDoMapa();
		            		  i3GEO.coordenadas.mostraCoordenadas(false, "", xy[0],
		            			  xy[1]);
		            		  // if($i("i3GEOprogressoDiv")){
		            		  // $i("i3GEOprogressoDiv").style.display = "block";
		            		  // }
		            	  });
		            	  google.maps.event.addListener(i3GeoMap, "mousemove",
		            		  function(ponto) {
		            		  var teladms, tela, pos = i3GEO.util
		            		  .pegaPosicaoObjeto($i(i3GEO.Interface.IDMAPA));
		            		  if (modoAtual === "move") {
		            			  return;
		            		  }
		            		  ponto = ponto.latLng;
		            		  teladms = i3GEO.calculo
		            		  .dd2dms(ponto.lng(), ponto.lat());
		            		  tela = i3GeoMapOverlay.getProjection()
		            		  .fromLatLngToContainerPixel(ponto);
		            		  objposicaocursor = {
		            			  ddx : ponto.lng(),
		            			  ddy : ponto.lat(),
		            			  dmsx : teladms[0],
		            			  dmsy : teladms[1],
		            			  imgx : tela.x,
		            			  imgy : tela.y,
		            			  telax : tela.x + pos[0],
		            			  telay : tela.y + pos[1]
		            		  };
		            	  });
		              },
		              retornaIndiceLayer : function(nomeLayer) {
		            	  var i = false;
		            	  try {
		            		  i3GeoMap.overlayMapTypes.forEach(function(elemento, number) {
		            			  // alert(nomeLayer+" "+elemento.name)
		            			  if (elemento.name === nomeLayer) {
		            				  i = number;
		            			  }
		            		  });
		            		  return i;
		            	  } catch (e) {
		            		  return false;
		            	  }
		              },
		              retornaObjetoLayer : function(nomeLayer) {
		            	  var i = false;
		            	  try {
		            		  i3GeoMap.overlayMapTypes.forEach(function(elemento, number) {
		            			  if (elemento.name === nomeLayer) {
		            				  i = elemento;
		            			  }
		            		  });
		            		  return i;
		            	  } catch (e) {
		            		  return false;
		            	  }
		              },
		              retornaDivLayer : function(nomeLayer) {
		            	  var i, divmapa = $i("googlemapsdiv"), divimg, n;
		            	  divimg = divmapa.getElementsByTagName("img");
		            	  n = divimg.length;
		            	  if (divimg && n > 0) {
		            		  for (i = 0; i < n; i++) {
		            			  if (divimg[i].src.search("&layer=" + nomeLayer + "&") > 0) {
		            				  return divimg[i].parentNode.parentNode.parentNode;
		            			  }
		            		  }
		            	  }
		            	  return false;
		              },
		              ligaDesliga : function(obj) {
		            	  var plugin,indice, temp, desligar = "", ligar = "", n, i, lista = [], listatemp;

		            	  indice = i3GEO.Interface.googlemaps.retornaIndiceLayer(obj.value);

		            	  temp = function() {
		            		  i3GEO.mapa.legendaHTML.atualiza();
		            	  };
		            	  plugin = i3GEO.pluginI3geo.existeObjeto(obj.value);

		            	  if (obj.checked && (!indice || plugin === true)) { //layer nao existe mas foi ligado
		            		  ligar = obj.value;
		            		  // verifica qual o indice correto da camada
		            		  listatemp = i3GEO.arvoreDeCamadas.listaLigadosDesligados()[0];
		            		  // reordena a lista. Necess&aacute;rio nas interfaces que
		            		  // utilizam grupos na &aacute;rvore de camadas
		            		  n = i3GEO.arvoreDeCamadas.CAMADAS.length;
		            		  for (i = 0; i < n; i++) {
		            			  if (i3GEO.util.in_array(
		            				  i3GEO.arvoreDeCamadas.CAMADAS[i].name, listatemp)) {
		            				  lista.push(i3GEO.arvoreDeCamadas.CAMADAS[i].name);
		            			  }
		            		  }
		            		  //
		            		  lista.reverse();
		            		  if(plugin === false){
		            			  n = lista.length;
		            			  indice = 0;
		            			  for (i = 0; i < n; i++) {
		            				  if (lista[i] == obj.value) {
		            					  indice = i; // - 1 - i;
		            				  }
		            			  }
		            			  i3GEO.Interface.googlemaps.insereLayer(obj.value, (indice));
		            		  }
		            		  else{
		            			  i3GEO.pluginI3geo.ligaCamada(obj.value);
		            		  }
		            		  i3GEO.arvoreDeCamadas.alteraPropCamadas("status", "2",
		            			  obj.value);
		            	  } else {
		            		  if (plugin === true){
		            			  desligar = obj.value;
		            			  i3GEO.arvoreDeCamadas.alteraPropCamadas("status", "0",
		            				  obj.value);
		            			  i3GEO.pluginI3geo.desligaCamada(obj.value);
		            		  }
		            		  else if (indice !== false) {
		            			  desligar = obj.value;
		            			  i3GEO.arvoreDeCamadas.alteraPropCamadas("status", "0",
		            				  obj.value);
		            			  i3GeoMap.overlayMapTypes.removeAt(indice);
		            		  }
		            	  }
		            	  if (desligar !== "" || ligar !== "") {
		            		  i3GEO.php.ligatemas(temp, desligar, ligar);
		            	  }
		              },
		              bbox : function() {
		            	  var bd, so, ne, bbox;
		            	  bd = i3GeoMap.getBounds();
		            	  so = bd.getSouthWest();
		            	  ne = bd.getNorthEast();
		            	  bbox = so.lng() + " " + so.lat() + " " + ne.lng() + " " + ne.lat();
		            	  return (bbox);
		              },
		              ativaBotoes : function() {
		            	  var imagemxy, x2 = 0, y2 = 0;
		            	  imagemxy = i3GEO.util
		            	  .pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));
		            	  if ($i("barraDeBotoes2") || i3GEO.barraDeBotoes.AUTO === true) {
		            		  x2 = imagemxy[0] + i3GEO.Interface.BARRABOTOESLEFT;
		            		  y2 = imagemxy[1] + i3GEO.Interface.BARRABOTOESTOP;
		            	  }
		            	  if ($i("barraDeBotoes2") || i3GEO.barraDeBotoes.AUTO === true) {
		            		  i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes2",
		            			  "i3geo_barra2", false, x2, y2);
		            	  }
		            	  i3GEO.barraDeBotoes.ativaBotoes();
		              },
		              aplicaOpacidade : function(opacidade, layer) {
		            	  var nlayers = i3GEO.arvoreDeCamadas.CAMADAS.length, i, camada, div;
		            	  if (!layer) {
		            		  layer = "";
		            	  }
		            	  for (i = 0; i < nlayers; i++) {
		            		  camada = i3GEO.arvoreDeCamadas.CAMADAS[i];
		            		  if (camada && camada.name) {
		            			  div = i3GEO.Interface.googlemaps
		            			  .retornaDivLayer(camada.name);
		            			  if (div) {
		            				  if (layer == "" || layer == camada.name) {
		            					  YAHOO.util.Dom.setStyle(div, "opacity", opacidade);
		            				  }
		            			  }
		            		  }
		            	  }
		              },
		              mudaOpacidade : function(valor) {
		            	  i3GEO.Interface.googlemaps.OPACIDADE = valor;
		            	  i3GEO.Interface.googlemaps.redesenha();
		              },
		              recalcPar : function() {
		            	  try {
		            		  var sw, ne, escalaAtual = i3GEO.parametros.mapscale;
		            		  sw = i3GeoMap.getBounds().getSouthWest();
		            		  ne = i3GeoMap.getBounds().getNorthEast();
		            		  i3GEO.parametros.mapexten = sw.lng() + " " + sw.lat() + " "
		            		  + ne.lng() + " " + ne.lat();
		            		  i3GEO.parametros.mapscale = i3GEO.Interface.googlemaps
		            		  .calcescala();
		            		  sw = i3GeoMapOverlay
		            		  .getProjection()
		            		  .fromContainerPixelToLatLng(new google.maps.Point(0, 1));
		            		  ne = i3GeoMapOverlay
		            		  .getProjection()
		            		  .fromContainerPixelToLatLng(new google.maps.Point(1, 0));
		            		  i3GEO.parametros.pixelsize = sw.lng() - ne.lng();
		            		  if (i3GEO.parametros.pixelsize < 0) {
		            			  i3GEO.parametros.pixelsize = i3GEO.parametros.pixelsize
		            			  * -1;
		            		  }

		            		  if (i3GEO.parametros.mapscale !== escalaAtual
		            			  && escalaAtual !== 0) {
		            			  i3GEO.arvoreDeCamadas
		            			  .atualizaFarol(i3GEO.parametros.mapscale);
		            		  }
		            	  } catch (e) {
		            		  i3GEO.parametros.mapexten = "0 0 0 0";
		            		  i3GEO.parametros.mapscale = 0;
		            	  }
		              },
		              calcescala : function() {
		            	  var zoom = i3GeoMap.getZoom();
		            	  return (i3GEO.Interface.googlemaps.ZOOMSCALE[zoom]);
		              },
		              escala2nzoom : function(escala) {
		            	  var n, i;
		            	  n = i3GEO.Interface.googlemaps.ZOOMSCALE.length;
		            	  for (i = 0; i < n; i++) {
		            		  if (i3GEO.Interface.googlemaps.ZOOMSCALE[i] < escala) {
		            			  return (i);
		            		  }
		            	  }
		              },
		              zoom2extent : function(mapexten) {
		            	  var re = new RegExp(",", "g"), pol = mapexten.replace(re, " "), ret = pol
		            	  .split(" "), sw = new google.maps.LatLng(ret[1], ret[0]), ne = new google.maps.LatLng(
		            		  ret[3], ret[2]);
		            	  i3GeoMap.fitBounds(new google.maps.LatLngBounds(sw, ne));
		            	  // i3GeoMap.setZoom(i3GeoMap.getZoom()+1);
		              },
		              pan2ponto : function(x, y) {
		            	  i3GeoMap.panTo(new google.maps.LatLng(y, x));
		              },
		              /*
		               * Function: adicionaKml
		               *
		               * Insere no mapa uma camada KML com base na API do Google Maps
		               *
		               * As camadas adicionadas s&atilde;o acrescentadas na &aacute;rvore de
		               * camadas
		               *
		               * A lista de nomes dos objetos geoXml criados &eacute; mantida em
		               * i3GEO.mapas.GEOXML
		               *
		               * Parametros:
		               *
		               * pan {Boolean} - define se o mapa ser&aacute; deslocado para encaixar
		               * o KML
		               *
		               * url {String} - URL do arquivo KML. Se n&atilde;o for definido, a URL
		               * ser&aacute; obtida do INPUT com id = i3geo_urlkml (veja
		               * i3GEO.gadgets.mostraInserirKml)
		               *
		               * titulo {string} - titulo que aparecer&aacute; na &aacute;rvore. Se
		               * n&atilde;o for definido, ser&aacute; calculado aleatoriamente.
		               *
		               * ativo {boolean} - indica se a camada estar&aacute; ativa ou
		               * n&atilde;o. Se n&atilde;o for definido, ser&aacute; considerado como
		               * true
		               */
		              adicionaKml : function(pan, url, titulo, ativo) {
		            	  var ngeoxml, i;
		            	  if (!$i("arvoreCamadasKml")) {
		            		  i3GEO.Interface.googlemaps.criaArvoreKML();
		            	  }
		            	  ngeoxml = "geoXml_" + i3GEO.mapa.GEOXML.length;
		            	  if (arguments.length === 1) {
		            		  i = $i("i3geo_urlkml");
		            		  if (i) {
		            			  url = i.value;
		            		  } else {
		            			  url = "";
		            		  }
		            		  titulo = ngeoxml;
		            		  ativo = true;
		            	  }
		            	  if (arguments.length === 2) {
		            		  titulo = ngeoxml;
		            		  ativo = true;
		            	  }
		            	  if (url === "") {
		            		  return;
		            	  }
		            	  // "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss"
		            	  i3GEO.mapa.GEOXML.push(ngeoxml);
		            	  if (i3GEO.arvoreDeCamadas.MOSTRALISTAKML === false) {
		            		  i3GEO.arvoreDeCamadas.MOSTRALISTAKML = true;
		            		  i3GEO.Interface.googlemaps.criaArvoreKML();
		            	  }
		            	  i3GEO.Interface.googlemaps.adicionaNoArvoreGoogle(url, titulo,
		            		  ativo, ngeoxml);
		              },
		              adicionaListaKml : function() {
		            	  var monta = function(retorno) {
		            		  var raiz, nraiz, i;
		            		  raiz = retorno.data.canais;
		            		  nraiz = raiz.length;
		            		  for (i = 0; i < nraiz; i++) {
		            			  i3GEO.Interface.googlemaps.adicionaKml(false, raiz[i].link,
		            				  raiz[i].title, false);
		            		  }
		            	  };
		            	  i3GEO.php.listaRSSwsARRAY(monta, "KML");
		              },
		              /*
		               * Function: adicionaNoArvoreGoogle
		               *
		               * Acrescenta na &aacute;rvore de camadas um novo tema no n&oacute; que
		               * mostra os arquivos KML inseridos no mapa
		               *
		               * Os temas s&atilde;o inclu&iacute;dos em um n&oacute; chamado "Google
		               * Maps".
		               *
		               * Para obter esse n&oacute; utilize var node =
		               * i3GEO.arvoreDeCamadas.ARVORE.getNodeByProperty("idkml","raiz");
		               *
		               * Parametros:
		               *
		               * url {string} - url do arquivo KML
		               *
		               * nomeOverlay {string} - t&iacute;tulo do tema
		               *
		               * ativo {boolean} - indica o estado do checkbox
		               *
		               * id {string} - nome do objeto GGeoXml
		               */
		              adicionaNoArvoreGoogle : function(url, nomeOverlay, ativo, id) {
		            	  var node, d, nodekml;
		            	  if (!$i("arvoreCamadasKml")) {
		            		  i3GEO.Interface.googlemaps.criaArvoreKML();
		            	  }
		            	  if (arguments.length === 2) {
		            		  ativo = true;
		            		  id = nomeOverlay;
		            	  }
		            	  if (arguments.length === 2) {
		            		  id = nomeOverlay;
		            	  }
		            	  node = i3GEO.Interface.googlemaps.ARVORE.getNodeByProperty("idkml",
		            	  "raiz");
		            	  html = "<input onclick='i3GEO.Interface.googlemaps.ativaDesativaCamadaKml(this,\""
		            		  + url
		            		  + "\")' class=inputsb style='cursor:pointer;' type='checkbox' value='"
		            		  + id + "'";
		            	  if (ativo === true) {
		            		  html += " checked ";
		            	  }
		            	  html += "/>";
		            	  if (navm) {
		            		  estilo = "cursor:default;vertical-align:35%;padding-top:0px;";
		            	  } else {
		            		  estilo = "cursor:default;vertical-align:top;";
		            	  }

		            	  html += "&nbsp;<span style='" + estilo + "'>" + nomeOverlay
		            	  + "</span>";
		            	  d = {
		            		  html : html
		            	  };
		            	  nodekml = new YAHOO.widget.HTMLNode(d, node, true, true);
		            	  nodekml.enableHighlight = false;
		            	  nodekml.isleaf = true;
		            	  i3GEO.Interface.googlemaps.ARVORE.draw();
		            	  i3GEO.Interface.googlemaps.ARVORE.collapseAll();
		            	  node.expand();
		            	  if (ativo === true) {
		            		  eval(id + " = new google.maps.KmlLayer('" + url
		            			  + "',{map:i3GeoMap,preserveViewport:true});");
		            	  }
		              },
		              criaArvoreKML : function() {
		            	  var arvore, a, root, titulo, d, node;
		            	  arvore = $i("arvoreCamadasKml");
		            	  if (!arvore) {
		            		  d = document.createElement("div");
		            		  d.id = "arvoreCamadasKml";
		            		  d.style.top = "40px";
		            		  a = $i(i3GEO.arvoreDeCamadas.IDHTML);
		            		  if (a) {
		            			  a.parentNode.appendChild(d);
		            		  } else {
		            			  return;
		            		  }
		            	  }
		            	  i3GEO.Interface.googlemaps.ARVORE = new YAHOO.widget.TreeView(
		            	  "arvoreCamadasKml");
		            	  root = i3GEO.Interface.googlemaps.ARVORE.getRoot();
		            	  titulo = "<table><tr><td><b>Kml</b></td></tr></table>";
		            	  d = {
		            		  html : titulo,
		            		  idkml : "raiz"
		            	  };
		            	  node = new YAHOO.widget.HTMLNode(d, root, true, true);
		            	  node.enableHighlight = false;
		            	  if (i3GEO.parametros.editor === "sim") {
		            		  d = new YAHOO.widget.HTMLNode(
		            			  {
		            				  html : "<a style='color:red' title='op&ccedil;&atilde;o vis&iacute;vel apenas para editores' href='../admin/html/webservices.html' target=blank >Editar cadastro</a>",
		            				  idmenu : "",
		            				  enableHighlight : false,
		            				  expanded : false
		            			  }, node);
		            	  }
		              },
		              /*
		               * Function: ativaDesativaCamadaKml
		               *
		               * Ativa ou desativa uma camada do n&oacute; de layers KML
		               *
		               * Parametro:
		               *
		               * obj {object} - objeto do tipo checkbox que foi ativado/desativado
		               *
		               * url {string} - url do KML
		               */
		              ativaDesativaCamadaKml : function(obj, url) {
		            	  if (!obj.checked) {
		            		  eval(obj.value + ".setMap(null);");
		            	  } else {
		            		  eval(obj.value
		            			  + " = new google.maps.KmlLayer(url,{map:i3GeoMap,preserveViewport:true});");
		            	  }
		              },
		              alteraParametroLayers : function(parametro, valor) {
		            	  parametro = parametro.toUpperCase();
		            	  var reg = new RegExp(parametro + "([=])+([a-zA-Z0-9_]*)");
		            	  i3GEO.Interface.googlemaps.PARAMETROSLAYER = i3GEO.Interface.googlemaps.PARAMETROSLAYER
		            	  .replace(reg, "");
		            	  i3GEO.Interface.googlemaps.PARAMETROSLAYER += "&" + parametro + "="
		            	  + valor;
		            	  i3GEO.Interface.googlemaps.redesenha();
		              }
	},
	/*
	 * Classe: i3GEO.Interface.googleearth
	 *
	 * Interface com motor de navega&ccedil;&atilde;o baseado na API Google
	 * Earth
	 *
	 * Utilizado quando
	 *
	 * i3GEO.Interface.ATUAL = "googleearth"
	 *
	 * Cria o objeto i3GeoMap que pode receber os m&eacute;todos da API do
	 * google Earth
	 */
	googleearth : {
		/*
		 * Variable: PARAMETROSLAYER
		 *
		 * Par�metros adicionais que s&atilde;o inseridos na URL que define cada
		 * layer
		 *
		 * Tipo {string}
		 */
		PARAMETROSLAYER : "&TIPOIMAGEM=" + i3GEO.configura.tipoimagem,
		/*
		 * String acrescentada a url de cada tile para garantir a
		 * remo&ccedil;&atilde;o do cache local
		 *
		 * Tipo {string}
		 */
		posfixo : "",
		/*
		 * Propriedade: GADGETS
		 *
		 * Lista dos controles espec&iacute;ficos da API do Google Earth que
		 * ser&atilde;o inseridos ou n&atilde;o no mapa
		 *
		 * Tipo {object}
		 *
		 * Default {}
		 */
		GADGETS : {
			setMouseNavigationEnabled : true,
			setStatusBarVisibility : true,
			setOverviewMapVisibility : true,
			setScaleLegendVisibility : true,
			setAtmosphereVisibility : true,
			setGridVisibility : false,
			getSun : false,
			LAYER_BORDERS : true,
			LAYER_BUILDINGS : false,
			LAYER_ROADS : false,
			LAYER_TERRAIN : true
		},
		POSICAOTELA : [ 0, 0 ],
		aguarde : "",
		ligaDesliga : function(obj) {
			var layer = i3GEO.Interface.googleearth
			.retornaObjetoLayer(obj.value), temp = function() {
				i3GEO.mapa.legendaHTML.atualiza();
			}, desligar = "", ligar = "";
			if (obj.checked) {
				i3GEO.arvoreDeCamadas.alteraPropCamadas("status", "2",
					obj.value);
				ligar = obj.value;
			} else {
				i3GEO.arvoreDeCamadas.alteraPropCamadas("status", "0",
					obj.value);
				desligar = obj.value;
			}
			layer.setVisibility(obj.checked);
			if (desligar !== "" || ligar !== "") {
				i3GEO.php.ligatemas(temp, desligar, ligar);
			}
		},
		atualizaTema : function(retorno, tema) {
			var layer = i3GEO.Interface.googleearth.retornaObjetoLayer(tema), hr = layer
			.getLink().getHref(), objtemas;
			// layer.getLink().setRefreshMode(2);
			// layer.getLink().setRefreshInterval(1);
			hr = hr.replace("&&&&&&&&&&&&&&&&&&&", "");
			layer.getLink().setHref(hr + "&");
			if (retorno === "") {
				return;
			}
			objtemas = i3GEO.arvoreDeCamadas
			.converteChaveValor2normal(retorno.data.temas);
			i3GEO.Interface.googleearth.recalcPar();
			try {
				i3GEO.arvoreDeCamadas.atualiza(objtemas);
			} catch (e) {
				i3GEO.arvoreDeCamadas.atualiza();
			}
			i3GEO.janela.fechaAguarde();
		},
		redesenha : function() {
			i3GEO.Interface.googleearth.posfixo += "&";
			var nlayers = i3GEO.arvoreDeCamadas.CAMADAS.length, i, camada, indice;
			for (i = 0; i < nlayers; i++) {
				camada = i3GEO.arvoreDeCamadas.CAMADAS[i];
				indice = i3GEO.Interface.googleearth
				.retornaObjetoLayer(camada.name);
				if (indice !== false) {
					try {
						i3GeoMap.getFeatures().removeChild(indice);
					} catch (e) {
					}
				}
			}
			i3GEO.Interface.googleearth.criaLayers();
		},
		cria : function(w, h) {
			var i, i3GeoMap3d, texto;
			i3GEO.configura.listaDePropriedadesDoMapa = {
				"propriedades" : [ {
					text : "p2",
					url : "javascript:i3GEO.mapa.dialogo.tipoimagem()"
				}, {
					text : "p3",
					url : "javascript:i3GEO.mapa.dialogo.opcoesLegenda()"
				}, {
					text : "p4",
					url : "javascript:i3GEO.mapa.dialogo.opcoesEscala()"
				}, {
					text : "p8",
					url : "javascript:i3GEO.mapa.dialogo.queryMap()"
				}, {
					text : "p9",
					url : "javascript:i3GEO.mapa.dialogo.corFundo()"
				}, {
					text : "p10",
					url : "javascript:i3GEO.mapa.dialogo.gradeCoord()"
				} ]
			};
			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.setMouseNavigationEnabled === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getOptions().setMouseNavigationEnabled(this.checked)'";
			texto += "> " + $trad("ge1");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.setStatusBarVisibility === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getOptions().setStatusBarVisibility(this.checked)'";
			texto += "> " + $trad("ge2");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.setOverviewMapVisibility === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getOptions().setOverviewMapVisibility(this.checked)'";
			texto += "> " + $trad("ge3");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.setScaleLegendVisibility === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getOptions().setScaleLegendVisibility(this.checked)'";
			texto += "> " + $trad("ge4");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.setAtmosphereVisibility === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getOptions().setAtmosphereVisibility(this.checked)'";
			texto += "> " + $trad("ge5");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.setGridVisibility === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getOptions().setGridVisibility(this.checked)'";
			texto += "> " + $trad("ge6");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.getSun === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getSun().setVisibility(this.checked)'";
			texto += "> " + $trad("ge7");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.LAYER_BORDERS === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getLayerRoot().enableLayerById(i3GeoMap.LAYER_BORDERS, this.checked)'";
			texto += "> " + $trad("ge8");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.LAYER_BUILDINGS === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getLayerRoot().enableLayerById(i3GeoMap.LAYER_BUILDINGS, this.checked)'";
			texto += "> " + $trad("ge9");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.LAYER_ROADS === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getLayerRoot().enableLayerById(i3GeoMap.LAYER_ROADS, this.checked)'";
			texto += "> " + $trad("ge10");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});

			texto = "<input type=checkbox style='vertical-align:top;cursor:pointer' ";
			if (i3GEO.Interface.googleearth.GADGETS.LAYER_TERRAIN === true) {
				texto += "CHECKED ";
			}
			texto += " onclick='javascript:i3GeoMap.getLayerRoot().enableLayerById(i3GeoMap.LAYER_TERRAIN, this.checked)'";
			texto += "> " + $trad("ge11");
			i3GEO.configura.listaDePropriedadesDoMapa.propriedades.push({
				text : texto,
				url : ""
			});
			i3GEO.util.arvore("<b>" + $trad("p13") + "</b>",
				"listaPropriedades",
				i3GEO.configura.listaDePropriedadesDoMapa);

			i3GEO.barraDeBotoes.INCLUIBOTAO.zoomli = false;
			i3GEO.barraDeBotoes.INCLUIBOTAO.pan = false;
			i3GEO.barraDeBotoes.INCLUIBOTAO.zoomtot = false;
			i3GEO.barraDeBotoes.INCLUIBOTAO.zoomproximo = false;
			i3GEO.barraDeBotoes.INCLUIBOTAO.zoomanterior = false;
			i3GEO.Interface.IDMAPA = "i3GeoMap3d";
			if (i3GEO.arvoreDeCamadas.ATIVATEMA === "") {
				i3GEO.arvoreDeCamadas.ATIVATEMA = "i3GEO.Interface.googleearth.ligaDesliga(this)";
			}
			i = $i(i3GEO.Interface.IDCORPO);
			if (i) {
				i3GeoMap3d = document.createElement("div");
				i3GeoMap3d.style.width = w + "px";
				i3GeoMap3d.style.height = h + "px";// + 45;
				i.style.height = h;// + 45;
				i3GeoMap3d.id = "i3GeoMap3d";
				i3GeoMap3d.style.zIndex = 0;
				i.appendChild(i3GeoMap3d);
			}
			google.load("earth", "1");
		},
		inicia : function() {
			google.earth.createInstance("i3GeoMap3d",
				i3GEO.Interface.googleearth.iniciaGE,
				i3GEO.Interface.googleearth.falha);
		},
		iniciaGE : function(object) {
			var montaMapa = function(retorno) {
				i3GeoMap = object;
				i3GeoMap.getWindow().setVisibility(true);
				i3GEO.Interface.googleearth
				.zoom2extent(i3GEO.parametros.mapexten);
				i3GEO.Interface.googleearth.criaLayers();

				var options = i3GeoMap.getOptions(), layerRoot = i3GeoMap
				.getLayerRoot();

				options
				.setMouseNavigationEnabled(i3GEO.Interface.googleearth.GADGETS.setMouseNavigationEnabled);
				options
				.setStatusBarVisibility(i3GEO.Interface.googleearth.GADGETS.setStatusBarVisibility);
				options
				.setOverviewMapVisibility(i3GEO.Interface.googleearth.GADGETS.setOverviewMapVisibility);
				options
				.setScaleLegendVisibility(i3GEO.Interface.googleearth.GADGETS.setScaleLegendVisibility);
				options
				.setAtmosphereVisibility(i3GEO.Interface.googleearth.GADGETS.setAtmosphereVisibility);
				options
				.setGridVisibility(i3GEO.Interface.googleearth.GADGETS.setGridVisibility);

				layerRoot.enableLayerById(i3GeoMap.LAYER_BORDERS,
					i3GEO.Interface.googleearth.GADGETS.LAYER_BORDERS);
				layerRoot.enableLayerById(i3GeoMap.LAYER_BUILDINGS,
					i3GEO.Interface.googleearth.GADGETS.LAYER_BUILDINGS);
				layerRoot.enableLayerById(i3GeoMap.LAYER_ROADS,
					i3GEO.Interface.googleearth.GADGETS.LAYER_ROADS);
				layerRoot.enableLayerById(i3GeoMap.LAYER_TERRAIN,
					i3GEO.Interface.googleearth.GADGETS.LAYER_TERRAIN);
				i3GeoMap.getSun().setVisibility(
					i3GEO.Interface.googleearth.GADGETS.getSun);
				i3GeoMap.getNavigationControl().setVisibility(
					i3GeoMap.VISIBILITY_SHOW);

				i3GEO.Interface.googleearth.POSICAOTELA = YAHOO.util.Dom
				.getXY($i(i3GEO.Interface.IDCORPO));
				//
				// i3GEO.arvoreDeCamadas.CAMADAS &eacute; definido na
				// inicializa&ccedil;&atilde;o (classe_i3geo)
				//
				i3GEO.arvoreDeCamadas.cria("", i3GEO.arvoreDeCamadas.CAMADAS,
					i3GEO.configura.sid, i3GEO.configura.locaplic);
				i3GEO.gadgets.mostraMenuSuspenso();
				i3GEO.gadgets.mostraMenuLista();
				i3GEO.Interface.googleearth.ativaBotoes();
				i3GEO.gadgets.mostraInserirKml("inserirKml");
				if (i3GEO.arvoreDeCamadas.MOSTRALISTAKML === true) {
					i3GEO.Interface.googleearth.adicionaListaKml();
				}
				i3GEO.Interface.googleearth.registraEventos();

				if (i3GEO.parametros.kmlurl !== "") {
					i3GEO.Interface.googleearth.adicionaKml(true,
						i3GEO.parametros.kmlurl, i3GEO.parametros.kmlurl,
						false);
				}
				// executa fun&ccedil;&atilde;o de finaliza&ccedil;&atilde;o, se
				// houver
				if (YAHOO.lang.isFunction(i3GEO.finalizaAPI)) {
					i3GEO.finalizaAPI.call();
				} else {
					if (i3GEO.finalizaAPI != "") {
						eval(i3GEO.finalizaAPI);
					}
				}
				i3GEO.configura.iniciaFerramentas.executa();
			};
			i3GEO.php.googleearth(montaMapa);
		},
		criaLayers : function() {
			var nlayers = i3GEO.arvoreDeCamadas.CAMADAS.length - 1, i, camada, indice, layer;
			for (i = nlayers; i >= 0; i--) {
				camada = i3GEO.arvoreDeCamadas.CAMADAS[i];
				indice = i3GEO.Interface.googleearth
				.retornaIndiceLayer(camada.name);
				layer = i3GEO.Interface.googleearth
				.retornaObjetoLayer(camada.name);
				// nao mude para ===
				if (indice == false) {
					layer = i3GEO.Interface.googleearth
					.insereLayer(camada.name);
				}
				try {
					if (camada.status != 0) {
						layer.setVisibility(true);
					} else {
						layer.setVisibility(false);
					}
				} catch (e) {
				}
			}
		},
		insereLayer : function(nomeLayer) {
			var kmlUrl = i3GEO.configura.locaplic
			+ "/classesphp/mapa_googleearth.php?REQUEST=GetKml&g_sid="
			+ i3GEO.configura.sid + "&layer=" + nomeLayer
			+ i3GEO.Interface.googleearth.PARAMETROSLAYER + "&r="
			+ Math.random(), linki3geo = i3GeoMap.createLink(''), nl = i3GeoMap
			.createNetworkLink('');
			linki3geo.setHref(kmlUrl + i3GEO.Interface.googleearth.posfixo);
			nl.setLink(linki3geo);
			nl.setFlyToView(false);
			nl.setName(nomeLayer);
			i3GeoMap.getFeatures().appendChild(nl);
			return nl;
		},
		retornaIndiceLayer : function(nomeLayer) {
			var n = i3GeoMap.getFeatures().getChildNodes().getLength(), indice = 0, i = 0;
			if (n > 0) {
				for (i = 0; i < n; i++) {
					if (i3GeoMap.getFeatures().getChildNodes().item(i)
						.getName() === nomeLayer) {
						indice = i;
					}
				}
				return indice;
			} else {
				return false;
			}
		},
		aplicaOpacidade : function(opacidade) {
			var n = i3GeoMap.getFeatures().getChildNodes().getLength(), i;
			for (i = 0; i < n; i++) {
				i3GeoMap.getFeatures().getChildNodes().item(i).setOpacity(
					opacidade);
			}
		},
		retornaObjetoLayer : function(nomeLayer) {
			var n = i3GeoMap.getFeatures().getChildNodes().getLength(), indice = false, i;
			for (i = 0; i < n; i++) {
				if (i3GeoMap.getFeatures().getChildNodes().item(i).getName() === nomeLayer) {
					indice = i3GeoMap.getFeatures().getChildNodes().item(i);
				}
			}
			return indice;
		},
		registraEventos : function() {
			google.earth.addEventListener(i3GeoMap.getView(), "viewchangeend",
				function(e) {
				i3GEO.Interface.googleearth.recalcPar();
				i3GEO.eventos.cliquePerm.status = false;
				// guarda a extensao geografica atual
				i3GEO.navega.registraExt(i3GEO.parametros.mapexten);
			});
			google.earth
			.addEventListener(
				i3GeoMap.getGlobe(),
				'mousemove',
				function(event) {
					d = i3GEO.calculo.dd2dms(event.getLongitude(),
						event.getLatitude());
					objposicaocursor = {
						ddx : event.getLongitude(),
						ddy : event.getLatitude(),
						dmsx : d[0],
						dmsy : d[1],
						imgx : event.getClientX(),
						imgy : event.getClientY(),
						telax : event.getClientX()
						+ i3GEO.Interface.googleearth.POSICAOTELA[0],
						telay : event.getClientY()
						+ i3GEO.Interface.googleearth.POSICAOTELA[1]
					};
					i3GEO.eventos.mousemoveMapa();
				});
			google.earth
			.addEventListener(
				i3GeoMap.getGlobe(),
				'click',
				function(event) {
					if (i3GEO.Interface.googleearth.aguarde.visibility === "hidden") {
						i3GEO.eventos.mousecliqueMapa();
					} else {
						i3GEO.Interface.googleearth.aguarde.visibility = "hidden";
					}
				});
		},
		recalcPar : function() {
			var bounds;
			bounds = i3GeoMap.getView().getViewportGlobeBounds();
			i3GEO.parametros.mapexten = bounds.getWest() + " "
			+ bounds.getSouth() + " " + bounds.getEast() + " "
			+ bounds.getNorth();
			// i3GEO.parametros.mapscale =
			// i3GEO.Interface.googlemaps.calcescala();
		},
		falha : function() {
			alert("Falhou. Vc precisa do plugin instalado");
		},
		ativaBotoes : function() {
			var cabecalho = function() {
				i3GEO.barraDeBotoes.ativaIcone("");
			}, minimiza = function() {
				i3GEO.janela.minimiza("i3GEOF.ferramentasGE");
			}, janela = i3GEO.janela.cria("230px", "110px", "", "", "",
				$trad("u15a"), "i3GEOF.ferramentasGE", false, "hd",
				cabecalho, minimiza);
			$i("i3GEOF.ferramentasGE_c").style.zIndex = 100;
			i3GEO.barraDeBotoes.TEMPLATEBOTAO = '<div style="display:inline;background-color:rgb(250,250,250);"><img src="'
				+ i3GEO.configura.locaplic
				+ '/imagens/branco.gif" id="$$"/></div>&nbsp;';
			i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes2", "", false,
				"200", "200", janela[2].id);
			i3GEO.barraDeBotoes.ativaBotoes();
			i3GEO.Interface.googleearth.aguarde = $i("i3GEOF.ferramentasGE_imagemCabecalho").style;
			$i("i3GEOF.ferramentasGE_minimizaCabecalho").style.right = "0px";
			$i("i3GEOF.ferramentasGE").lastChild.style.display = "none";
			i3GEO.ajuda.abreJanela();
		},
		balao : function(texto, ddx, ddy) {
			var placemark = i3GeoMap.createPlacemark(''), point = i3GeoMap
			.createPoint(''), b;
			point.setLatitude(ddy);
			point.setLongitude(ddx);
			placemark.setGeometry(point);
			b = i3GeoMap.createHtmlStringBalloon('');
			b.setContentString("<div style=text-align:left >" + texto
				+ "</div>");
			b.setFeature(placemark);
			i3GeoMap.setBalloon(b);
		},
		/*
		 * Function: adicionaKml
		 *
		 * Insere no mapa uma camada KML com base na API do Google Earth
		 *
		 * As camadas adicionadas s&atilde;o crescentadas na &aacute;rvore de
		 * camadas
		 *
		 * A lista de nomes dos objetos geoXml criados &eacute; mantida em
		 * i3GEO.mapas.GEOXML
		 *
		 * Parametros:
		 *
		 * pan {Boolean} - define se o mapa ser&aacute; deslocado para encaixar
		 * o KML
		 *
		 * url {String} - URL do arquivo KML. Se n&atilde;o for definido, a URL
		 * ser&aacute; obtida do INPUT com id = i3geo_urlkml (veja
		 * i3GEO.gadgets.mostraInserirKml)
		 *
		 * titulo {string} - titulo que aparecer&aacute; na &aacute;rvore. Se
		 * n&atilde;o for definido, ser&aacute; calculado aleatoriamente.
		 *
		 * ativo {boolean} - indica se a camada estar&aacute; ativa ou
		 * n&atilde;o. Se n&atilde;o for definido, ser&aacute; considerado como
		 * true
		 */
		adicionaKml : function(pan, url, titulo, ativo) {
			var ngeoxml, i;
			if (!$i("arvoreCamadasKml")) {
				i3GEO.Interface.googleearth.criaArvoreKML();
			}
			ngeoxml = "geoXml_" + i3GEO.mapa.GEOXML.length;
			if (arguments.length === 1) {
				i = $i("i3geo_urlkml");
				if (i) {
					url = i.value;
				} else {
					url = "";
				}
				titulo = ngeoxml;
				ativo = false;
			}
			if (arguments.length === 2) {
				titulo = ngeoxml;
				ativo = true;
			}
			if (arguments.length === 2) {
				ativo = true;
			}
			if (url === "") {
				return;
			}
			i3GEO.mapa.GEOXML.push(ngeoxml);
			linki3geokml = i3GeoMap.createLink('');
			if (url.split("http").length === 1) {
				url = i3GEO.util.protocolo() + "://" + window.location.host
				+ url;
			}
			linki3geokml.setHref(url);
			eval(ngeoxml + " = i3GeoMap.createNetworkLink('')");
			eval(ngeoxml + ".setLink(linki3geokml)");
			if (i3GEO.arvoreDeCamadas.MOSTRALISTAKML === false) {
				i3GEO.arvoreDeCamadas.MOSTRALISTAKML = true;
				i3GEO.Interface.googleearth.criaArvoreKML();
			}
			i3GEO.Interface.googleearth.adicionaNoArvoreGoogle(url, titulo,
				ativo, ngeoxml);
		},
		adicionaListaKml : function() {
			var monta = function(retorno) {
				var raiz, nraiz, i;
				raiz = retorno.data.canais;
				nraiz = raiz.length;
				for (i = 0; i < nraiz; i++) {
					i3GEO.Interface.googleearth.adicionaKml(false,
						raiz[i].link, raiz[i].title, false);
				}
			};
			i3GEO.php.listaRSSwsARRAY(monta, "KML");
		},
		/*
		 * Function: adicionaNoArvoreGoogle
		 *
		 * Acrescenta na &aacute;rvore de camadas um novo tema no n&oacute; que
		 * mostra os arquivos KML inseridos no mapa
		 *
		 * Os temas s&atilde;o inclu&iacute;dos em um n&oacute; chamado "Google
		 * Earth".
		 *
		 * Para obter esse n&oacute; utilize var node =
		 * i3GEO.arvoreDeCamadas.ARVORE.getNodeByProperty("idkml","raiz");
		 *
		 * Parametros:
		 *
		 * url {string} - url do arquivo KML
		 *
		 * nomeOverlay {string} - t&iacute;tulo do tema
		 *
		 * ativo {boolean} - indica o estado do checkbox
		 *
		 * id {string} - nome do objeto GGeoXml
		 */
		adicionaNoArvoreGoogle : function(url, nomeOverlay, ativo, id) {
			var node, d, nodekml;
			if (!$i("arvoreCamadasKml")) {
				i3GEO.Interface.googleearth.criaArvoreKML();
			}
			if (arguments.length === 2) {
				ativo = true;
				id = nomeOverlay;
			}
			if (arguments.length === 2) {
				id = nomeOverlay;
			}
			node = i3GEO.Interface.googleearth.ARVORE.getNodeByProperty(
				"idkml", "raiz");
			html = "<input onclick='i3GEO.Interface.googleearth.ativaDesativaCamadaKml(this)' class=inputsb style='cursor:pointer;' type='checkbox' value='"
				+ id + "'";
			if (ativo === true) {
				html += " checked ";
			}
			html += "/>";
			html += "&nbsp;<span style='cursor:move'>" + nomeOverlay
			+ "</span>";
			d = {
				html : html
			};
			nodekml = new YAHOO.widget.HTMLNode(d, node, true, true);
			nodekml.enableHighlight = false;
			nodekml.isleaf = true;
			i3GEO.Interface.googleearth.ARVORE.draw();
			i3GEO.Interface.googleearth.ARVORE.collapseAll();
			node.expand();
		},
		criaArvoreKML : function() {
			var arvore, a, root, titulo, d, node;
			arvore = $i("arvoreCamadasKml");
			if (!arvore) {
				d = document.createElement("div");
				d.id = "arvoreCamadasKml";
				d.style.top = "40px";
				a = $i(i3GEO.arvoreDeCamadas.IDHTML);
				if (a) {
					a.parentNode.appendChild(d);
				} else {
					return;
				}
			}
			i3GEO.Interface.googleearth.ARVORE = new YAHOO.widget.TreeView(
			"arvoreCamadasKml");
			root = i3GEO.Interface.googleearth.ARVORE.getRoot();
			titulo = "<table><tr><td><b>Google Earth Kml</b></td></tr></table>";
			d = {
				html : titulo,
				idkml : "raiz"
			};
			node = new YAHOO.widget.HTMLNode(d, root, true, true);
			node.enableHighlight = false;
			if (i3GEO.parametros.editor === "sim") {
				d = new YAHOO.widget.HTMLNode(
					{
						html : "<a style='color:red' title='op&ccedil;&atilde;o vis&iacute;vel apenas para editores' href='../admin/html/webservices.html' target=blank >Editar cadastro</a>",
						idmenu : "",
						enableHighlight : false,
						expanded : false
					}, node);
			}
		},
		existeLink : function(url) {
			var existe = false, features = i3GeoMap.getFeatures(), n = features
			.getChildNodes().getLength(), i;
			for (i = 0; i < n; i++) {
				try {
					if (features.getChildNodes().item(i).getLink().getHref() === url) {
						existe = true;
					}
				} catch (e) {
				}
			}
			return (existe);
		},
		ativaDesativaLink : function(url, valor) {
			var features = i3GeoMap.getFeatures(), n = features.getChildNodes()
			.getLength(), i;
			for (i = 0; i < n; i++) {
				try {
					if (features.getChildNodes().item(i).getLink().getHref() === url) {
						features.getChildNodes().item(i).setVisibility(valor);
					}
				} catch (e) {
				}
			}
		},
		/*
		 * Function: ativaDesativaCamadaKml
		 *
		 * Ativa ou desativa uma camada do n&oacute; de layers KML
		 *
		 * Parametro:
		 *
		 * obj {object} - objeto do tipo checkbox que foi ativado/desativado
		 */
		ativaDesativaCamadaKml : function(obj) {
			var url = eval(obj.value + ".getLink().getHref()"), existe = i3GEO.Interface.googleearth
			.existeLink(url);
			if (!obj.checked) {
				i3GEO.Interface.googleearth.ativaDesativaLink(url, false);
			} else {
				if (existe === false) {
					eval("i3GeoMap.getFeatures().appendChild(" + obj.value
						+ ")");
				} else {
					i3GEO.Interface.googleearth.ativaDesativaLink(url, true);
				}
			}
		},
		zoom2extent : function(mapexten) {
			var r = 6378700, lng2, lng1, lat1, lat2, ret = mapexten.split(" "), fov = 32, camera = i3GeoMap
			.getView().copyAsCamera(
				i3GeoMap.ALTITUDE_RELATIVE_TO_GROUND), dy, dx, d, dist, alt;
			lng2 = (ret[0] * 1);
			lng1 = (ret[2] * 1);
			lat1 = (ret[1] * 1);
			lat2 = (ret[3] * 1);
			camera.setLatitude((lat1 + lat2) / 2.0);
			camera.setLongitude((lng1 + lng2) / 2.0);
			camera.setHeading(0.0);
			camera.setTilt(0.0);
			// determine if the rectangle is portrait or landscape
			dy = Math.max(lat1, lat2) - Math.min(lat1, lat2);
			dx = Math.max(lng1, lng2) - Math.min(lng1, lng2);
			// find the longest side
			d = Math.max(dy, dx);
			// convert the longest side degrees to radians
			d = d * Math.PI / 180.0;
			// find half the chord length
			dist = r * Math.tan(d / 2);
			// get the altitude using the chord length
			alt = dist / (Math.tan(fov * Math.PI / 180.0));
			if (alt < 0) {
				alt = alt * -1;
			}
			camera.setAltitude(alt);
			i3GeoMap.getView().setAbstractView(camera);
		},
		alteraParametroLayers : function(parametro, valor) {
			parametro = parametro.toUpperCase();
			var reg = new RegExp(parametro + "([=])+([a-zA-Z0-9_]*)");
			i3GEO.Interface.googleearth.PARAMETROSLAYER = i3GEO.Interface.googleearth.PARAMETROSLAYER
			.replace(reg, "");
			i3GEO.Interface.googleearth.PARAMETROSLAYER += "&" + parametro
			+ "=" + valor;
			i3GEO.Interface.googleearth.redesenha();
		}
	}
};
