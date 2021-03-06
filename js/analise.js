/**
 * Title: An&aacute;lise geogr&aacute;fica
 *
 * Fun&ccedil;oes de gera&ccedil;&atilde;o das analises e abertura dos dialogos das opcoes de analise espacial
 *
 * Em i3GEO.analise.dialogo estao as funcoes de abertura dos dialogos
 *
 * Namespace:
 *
 * i3GEO.analise
 *
 * Exemplo:
 *
 * Para abrir a janela de di&aacute;logo da ferramenta de mapa de calor
 *
 * i3GEO.analise.dialogo.markercluster();
 *
 * Veja:
 *
 * <http://localhost/i3geo/classesjs/classe_analise.js>
 */

/**
 *
 * Licen&ccedil;a
 *
 * GPL2
 *
 * i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet
 *
 * Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com
 *
 * Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a
 * P&uacute;blica Geral GNU conforme publicada pela Free Software Foundation;
 *
 * Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til, por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a
 * garantia impl&iacute;cita de COMERCIABILIDADE OU ADEQUAÇ&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA. Consulte a Licen&ccedil;a
 * P&uacute;blica Geral do GNU para mais detalhes. Voc&ecirc; deve ter recebido uma c&oacute;pia da Licen&ccedil;a P&uacute;blica Geral do
 * GNU junto com este programa; se n&atilde;o, escreva para a Free Software Foundation, Inc., no endere&ccedil;o 59 Temple Street, Suite
 * 330, Boston, MA 02111-1307 USA.
 */
if (typeof (i3GEO) === 'undefined') {
	var i3GEO = {};
}
i3GEO.analise =
	{
		/**
		 * Armazena os pontos clicados da ultima linha
		 */
		pontos : {
			xpt : [],
			ypt : []
		},
		/**
		 * Classe: i3GEO.analise.dialogo
		 *
		 * Abre as telas de di&aacute;logo das op&ccedil;&otilde;es de an&aacute;lise
		 *
		 * Exemplo:
		 *
		 * Para abrir a mensagem de di&aacute;logo de gera&ccedil;&atilde;o de buffer, utilize
		 *
		 * i3GEO.analise.dialogo.buffer()
		 */
		dialogo : {
			/**
			 * Function: markercluster
			 *
			 * Ferramenta mapa agrupamento de pontos
			 */
			markercluster : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.markercluster()",
					"markercluster",
					"markercluster",
					"dependencias.php",
					"i3GEOF.markercluster.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: heatmap
			 *
			 * Ferramenta mapa de calor
			 */
			heatmap : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.heatmap()",
					"heatmap",
					"heatmap",
					"dependencias.php",
					"i3GEOF.heatmap.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: saiku
			 *
			 * Ferramenta SAIKU em nova aba do navegador
			 */
			saiku : function() {
				if (i3GEO.parametros.statusFerramentas && i3GEO.parametros.statusFerramentas.saiku === false) {
					i3GEO.janela.tempoMsg($trad("naoInstalado"));
					return;
				}
				i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.saiku()", "saiku", "saiku");
			},
			/**
			 * Function: saikuMapa
			 *
			 * Ferramenta SAIKU em uma janela interna
			 */
			saikuMapa : function() {
				if (i3GEO.parametros.statusFerramentas && i3GEO.parametros.statusFerramentas.saiku === false) {
					i3GEO.janela.tempoMsg($trad("naoInstalado"));
					return;
				}
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.saiku()",
					"saiku",
					"saiku",
					"index.js",
					"i3GEOF.saiku.iniciaJanelaFlutuante2()");
			},
			/**
			 *
			 * Ferramenta graficointerativo versao flash
			 */
			graficoInterativo : function() {
				alert("depreciado. Use graficointerativo1");
			},
			/**
			 * Function: graficoInterativo1
			 *
			 * Ferramenta gr&aacute;fico interativo
			 */
			graficoInterativo1 : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.graficointerativo1()",
					"graficointerativo1",
					"graficointerativo1",
					"dependencias.php",
					"i3GEOF.graficointerativo1.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: linhaDoTempo
			 *
			 * Ferramenta linha do tempo
			 */
			linhaDoTempo : function() {
				i3GEO.janela.cria(
					"450px",
					"350px",
					i3GEO.configura.locaplic + "/ferramentas/linhadotempo/index.php",
					"",
					"",
					"<div class='i3GeoTituloJanela'>Linha do tempo<a class=ajuda_usuario target=_blank href='" + i3GEO.configura.locaplic
						+ "/ajuda_usuario.php?idcategoria=3&idajuda=88' ><b> </b></a></div>",
					"i3GEOF.linhaDoTempo",
					false,
					"hd",
					"",
					"",
					"",
					true,
					i3GEO.configura.locaplic + "/imagens/oxygen/16x16/clock.png");
				i3GEO.analise.atualizaLinhaDoTempo =
					function() {
						var doc = "", ifr = "";
						try {
							ifr = $i("i3GEOF.linhaDoTempoi");
							if (navn) {
								if (ifr) {
									doc = ifr.contentDocument;
								}
							} else {
								if (document.frames("i3GEOF.linhaDoTempoi")) {
									doc = document.frames("i3GEOF.linhaDoTempoi").document;
								}
							}
							doc.getElementById("tl") ? window.parent["i3GEOF.linhaDoTempoi"].carregaDados() : i3GEO.eventos.removeEventos(
								"NAVEGAMAPA",
								[
									"i3GEO.analise.atualizaLinhaDoTempo()"
								]);
						} catch (e) {
							i3GEO.eventos.removeEventos("NAVEGAMAPA", [
								"i3GEO.analise.atualizaLinhaDoTempo()"
							]);
						}
					};
				i3GEO.eventos.adicionaEventos("NAVEGAMAPA", [
					"i3GEO.analise.atualizaLinhaDoTempo()"
				]);
				var ifr = $i("i3GEOF.linhaDoTempoi");
				// ifr.style.height = "75%";
				if (ifr) {
					ifr.style.width = "100%";
				}
			},
			/**
			 * Function: perfil
			 *
			 * Ferramenta perfil
			 */
			perfil : function() {
				i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.perfil()", "perfil", "perfil");
			},
			/**
			 * Function: melhorcaminho
			 *
			 * Ferramenta melhor caminho
			 */
			melhorcaminho : function() {
				if (i3GEO.parametros.statusFerramentas && i3GEO.parametros.statusFerramentas.melhorcaminho === false) {
					i3GEO.janela.tempoMsg($trad("naoInstalado"));
					return;
				}
				i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.melhorcaminho()", "melhorcaminho", "melhorcaminho");
			},
			/**
			 * Function: gradePontos
			 *
			 * Ferramenta grade de pontos
			 */
			gradePontos : function() {
				i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.gradePontos()", "gradepontos", "gradeDePontos");
			},
			/**
			 * Function: gradePol
			 *
			 * Ferramenta grade de pol&iacute;gonos
			 */
			gradePol : function() {
				i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.gradePol()", "gradepol", "gradeDePoligonos");
			},
			/**
			 * Function: gradeHex
			 *
			 * Ferramenta grade de hex&aacute;gonos
			 */
			gradeHex : function() {
				i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.gradeHex()", "gradehex", "gradeDeHex");
			},
			/**
			 * Function: analisaGeometrias
			 *
			 * Ferramenta de an&aacute;lise de geometrias
			 */
			analisaGeometrias : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.tema.dialogo.tabela()",
					"analisageometrias",
					"analisaGeometrias",
					"dependencias.php",
					"i3GEOF.analisaGeometrias.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: pontosdistri
			 *
			 * Ferramenta de c&aacute;lculo de distribui&ccedil;&atilde;o de pontos
			 */
			pontosdistri : function() {
				i3GEO.parametros.r === "nao" ? i3GEO.janela.tempoMsg($trad("x22")) : i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.pontosdistri()",
					"pontosdistri",
					"pontosDistri",
					"dependencias.php",
					"i3GEOF.pontosDistri.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: pontoempoligono
			 *
			 * Ferramenta ponto em pol&iacute;gono
			 */
			pontoempoligono : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.pontoempoligono()",
					"pontoempoligono",
					"pontoEmPoligono",
					"dependencias.php",
					"i3GEOF.pontoEmPoligono.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: centromassa
			 *
			 * Ferramenta centro m&eacute;dio
			 */
			centromassa : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.centromassa()",
					"centromassa",
					"centromassa",
					"dependencias.php",
					"i3GEOF.centromassa.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: nptPol
			 *
			 * Ferramenta n&uacute;mero de pontos em pol&iacute;gono
			 */
			nptPol : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.nptpol()",
					"nptpol",
					"nptpol",
					"dependencias.php",
					"i3GEOF.nptpol.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: buffer
			 *
			 * Ferramenta buffer
			 */
			buffer : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.buffer()",
					"buffer",
					"buffer",
					"dependencias.php",
					"i3GEOF.buffer.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: distanciaptpt
			 *
			 * Ferramenta dist&acirc;ncia entre pontos
			 */
			distanciaptpt : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.distanciaptpt()",
					"distanciaptpt",
					"distanciaptpt",
					"dependencias.php",
					"i3GEOF.distanciaptpt.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: centroide
			 *
			 * Ferramenta centr&oacute;ide
			 */
			centroide : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.centroide()",
					"centroide",
					"centroide",
					"dependencias.php",
					"i3GEOF.centroide.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: dissolve
			 *
			 * Ferramenta dissolve bordas comuns
			 */
			dissolve : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.dissolve()",
					"dissolve",
					"dissolve",
					"dependencias.php",
					"i3GEOF.dissolve.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: agrupaElementos
			 *
			 * Ferramenta agrupa elementos
			 */
			agrupaElementos : function() {
				i3GEO.util.dialogoFerramenta(
					"i3GEO.analise.dialogo.agrupaElementos()",
					"agrupaelementos",
					"agrupaElementos",
					"dependencias.php",
					"i3GEOF.agrupaElementos.iniciaJanelaFlutuante()");
			}
		},
		/**
		 * Section: medeDistancia
		 *
		 * Ativa e controla a op&ccedil;&atilde;o de medi&ccedil;&atilde;o de dist&acirc;ncias. A medida &eacute; feita quando o
		 * usu&aacute;rio clica no mapa com esta op&ccedil;&atilde;o ativa. Quando o bot&atilde;o e acionado, abre-se a janela que mostra o
		 * resultado da medida, o &iacute;cone que segue o mouse &eacute; alterado. Para mostrar o resultado do c&aacute;lculo, &eacute;
		 * incluido um div espec&iacute;fico.
		 */
		medeDistancia : {
			/**
			 * Armazena os pontos clicados para realizar os calculos
			 */
			pontos : {},
			/**
			 * Armazena o WKT da ultima linha
			 */
			ultimoWkt : "",
			/**
			 * Armazena a ultima medida
			 */
			ultimaMedida : "",
			/**
			 * Function: inicia
			 *
			 * Inicia a opera&ccedil;&atilde;o de medi&ccedil;&atilde;o, abrindo a janela de resultados e criando os componentes
			 * necess&aacute;rios. S&atilde;o registrados os eventos de clique sobre o mapa e fechamento da janela de resultados
			 */
			inicia : function() {
				i3GEO.eventos.cliquePerm.desativa();
				i3GEO.analise.medeDistancia.criaJanela();
				i3GEO.analise.medeDistancia[i3GEO.Interface["ATUAL"]].inicia();
			},
			/**
			 * Cria a janela para mostrar os resultados da medicao
			 */
			criaJanela : function() {
				var novoel, ins, imagemxy, janela;
				i3GEO.analise.pontos = {
					xpt : [],
					ypt : []
				};
				if (!$i("mostradistancia")) {
					novoel = document.createElement("div");
					novoel.id = "mostradistancia";
					ins =
						'<div class="hd" style="font-size:11px"><div class="i3GeoTituloJanela">' + $trad("distAprox")
							+ '<a class=ajuda_usuario target=_blank href="'
							+ i3GEO.configura.locaplic
							+ '/ajuda_usuario.php?idcategoria=6&idajuda=50" ><b> </b></a></div></div>'
							+ '<div class="bd" style="text-align:left;padding:3px;" >'
							+ '<div style="text-align:left;padding:3px;" id="mostradistancia_calculo" ></div>'
							+ '<div style="text-align:left;padding:3px;" id="mostradistancia_calculo_movel" ></div>'
							+ '<div style="text-align:left;font-size:10px" >'
							+ '<span style="color:navy;cursor:pointer;text-align:left;" >'
							+ '<table class="lista7" style="width:250px">'
							+ '<tr>'
							+ '<td><input style="cursor:pointer" type="checkbox" id="pararraios" checked /></td>'
							+ '<td>Raios</td>'
							+ '<td>&nbsp;</td>'
							+ '<td><input style="cursor:pointer" type="checkbox" id="parartextos" checked /></td>'
							+ '<td>Textos<td>'
							+ '<td>&nbsp;Estilo:</td>'
							+ '<td><div class=styled-select style="width:85px;">'
							+ i3GEO.desenho.caixaEstilos()
							+ '</div></td></tr>'
							+ '<tr><td></td><td></td>'
							+ '<td></td><td></td><td></td><td></td><td>&nbsp;<input id=i3GEObotaoPerfil size="22" type="button" value="perfil"></td><td>&nbsp;<input id=i3GEObotaoDistWkt size="22" type="button" value="incorporar"></td></tr></table></span>'
							+ '</div>'
							+ '</div>';
					novoel.innerHTML = ins;
					novoel.style.borderColor = "gray";
					document.body.appendChild(novoel);
					janela = new YAHOO.widget.Panel("mostradistancia", {
						width : "255px",
						fixedcenter : false,
						constraintoviewport : true,
						underlay : "none",
						close : true,
						visible : true,
						draggable : true,
						modal : false
					});
					YAHOO.i3GEO.janela.manager.register(janela);
					janela.render();
					YAHOO.util.Event.addListener(janela.close, "click", i3GEO.analise.medeDistancia.fechaJanela);
				} else {
					i3GEO.util.defineValor("mostradistancia_calculo", "innerHTML", "");
					janela = YAHOO.i3GEO.janela.manager.find("mostradistancia");
				}
				janela.show();
				imagemxy = i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));
				janela.moveTo(imagemxy[0] + 150, imagemxy[1]);
				//
				// botao que abre a ferramenta de calculo de perfis.
				// pontosdistobj contem as coordenadas dos pontos
				//
				new YAHOO.widget.Button("i3GEObotaoPerfil", {
					onclick : {
						fn : function() {
							var js = i3GEO.configura.locaplic + "/ferramentas/perfil/dependencias.php", temp = function() {
								i3GEOF.perfil.iniciaJanelaFlutuante(i3GEO.analise.pontos);
							};
							i3GEO.util.scriptTag(js, temp, "i3GEOF.perfil_script");
						}
					}
				});
				new YAHOO.widget.Button("i3GEObotaoDistWkt", {
					onclick : {
						fn : function() {
							i3GEO.mapa.dialogo.wkt2layer(i3GEO.analise.medeDistancia.ultimoWkt, i3GEO.analise.medeDistancia.ultimaMedida);
						}
					}
				});
			},
			/**
			 * Fecha a janela e os elementos graficos criados para a ferramenta de medicao Chama a funcao de cada interface que complementam
			 * o processo de fechamento da janela
			 */
			fechaJanela : function() {
				var janela;
				i3GEO.eventos.cliquePerm.ativa();
				janela = YAHOO.i3GEO.janela.manager.find("mostradistancia");
				if (janela) {
					YAHOO.i3GEO.janela.manager.remove(janela);
					janela.destroy();
				}
				i3GEO.barraDeBotoes.ativaIcone("pointer");
				i3GEO.analise.medeDistancia[i3GEO.Interface["ATUAL"]].fechaJanela();
				i3GEO.analise.pontos = {};
			},
			/**
			 * Converte a lista de pontos em WKT
			 */
			pontos2wkt : function() {
				var pontos = [], x = i3GEO.analise.medeDistancia.pontos.xpt, y = i3GEO.analise.medeDistancia.pontos.ypt, n = x.length, i;
				for (i = 0; i < n; i++) {
					pontos.push(x[i] + " " + y[i]);
				}
				return "LINESTRING(" + pontos.join(",") + ")";
			},
			/**
			 * Funcoes especificas da interface openlayers
			 */
			openlayers : {
				draw : "",
				estilo: "",
				featureListener : null,
				//numero de pontos da geometria atual
				//utilizado para saber se houve um clique ou nao
				numpontos : 0,
				removeControle : function() {
					i3geoOL.removeInteraction(i3GEO.analise.medeDistancia.openlayers.draw);
					i3GEO.analise.medeDistancia.openlayers.draw = "";
				},
				/**
				 * Inicializa o processo Cria a variavel para guardar os pontos Executa a funcao de inicializacao do desenho, que cria o
				 * layer para receber os graficos
				 */
				inicia : function() {
					i3GEO.analise.medeDistancia.openlayers.estilo =
						new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: '#ffcc33',
								width: 5
							}),
							fill: new ol.style.Fill({
								  color: 'rgba(255, 153, 0, 0.8)'
							})
						});
					var m = i3GEO.analise.medeDistancia.openlayers;
					i3GEO.desenho[i3GEO.Interface["ATUAL"]].inicia();
					m.removeControle();
					m.draw = new ol.interaction.Draw({
						type : "LineString"
					});
					i3GEO.Interface.openlayers.interacoes[0].setActive(false);
					m.draw.on("drawend", function(evt) {
						evt.feature.setProperties({
							origem : "medeDistancia"
						});
						var m = i3GEO.analise.medeDistancia.openlayers;
						i3GEO.desenho.layergrafico.getSource().addFeature(evt.feature);
						m.draw.setActive(false);
						m.draw.setActive(true);
					});
					m.draw.on('drawstart', function(evt) {
						i3GEO.analise.medeDistancia.pontos = {
							xpt : [],
							ypt : [],
							dist : []
						};
						var m = i3GEO.analise.medeDistancia.openlayers,
							sketch = evt.feature;
						m.estilo = sketch.getStyle();
						m.numpontos = 1;
						m.featureListener = sketch.getGeometry().on('change', function(evt) {
							var ponto,
								geom = evt.target,
								coords = geom.getCoordinates(),
								n = coords.length,
								m = i3GEO.analise.medeDistancia.openlayers;
							ponto = new ol.geom.Point(coords[n-1]);
							if(m.numpontos === n-1){
								//clicou
								m.numpontos = n;
								m.point(ponto);
							}
							else{
								m.modify(ponto);
							}
						});
					});
					i3geoOL.addInteraction(m.draw);
				},
				modify : function(point) {
					var temp, n, x1, y1, x2, y2, trecho, parcial, direcao,
						coord = point.getCoordinates();
					n = i3GEO.analise.medeDistancia.pontos.ypt.length;
					if (n > 0) {
						x1 = i3GEO.analise.medeDistancia.pontos.xpt[n - 1];
						y1 = i3GEO.analise.medeDistancia.pontos.ypt[n - 1];
						x2 = coord[0];
						y2 = coord[1];
						// projeta
						if (i3GEO.Interface.openlayers.googleLike) {
							temp = i3GEO.util.extOSM2Geo(x1 + " " + y1 + " " + x2 + " " + y2);
							temp = temp.split(" ");
							x1 = temp[0];
							y1 = temp[1];
							x2 = temp[2];
							y2 = temp[3];
						}
						trecho = i3GEO.calculo.distancia(x1, y1, x2, y2);
						parcial = i3GEO.analise.medeDistancia.openlayers.somaDist();
						direcao = i3GEO.calculo.direcao(x1, y1, x2, y2);
						direcao = i3GEO.calculo.dd2dms(direcao, direcao);
						direcao = direcao[0];
						i3GEO.analise.medeDistancia.openlayers.mostraParcial(trecho, parcial, direcao);
					}
				},
				point : function(point) {
					var n, x1, y1, x2, y2, trecho, temp, circ, label, raio,
						estilo = i3GEO.desenho.estilos[i3GEO.desenho.estiloPadrao],
						coord = point.getCoordinates(),
						total = 0;
					i3GEO.analise.medeDistancia.pontos.xpt.push(coord[0]);
					i3GEO.analise.medeDistancia.pontos.ypt.push(coord[1]);
					i3GEO.analise.pontos.xpt.push(coord[0]);
					i3GEO.analise.pontos.ypt.push(coord[1]);
					n = i3GEO.analise.medeDistancia.pontos.ypt.length;
					if (n > 1) {
						x1 = i3GEO.analise.medeDistancia.pontos.xpt[n - 2];
						y1 = i3GEO.analise.medeDistancia.pontos.ypt[n - 2];
						x2 = coord[0];
						y2 = coord[1];
						raio = new ol.geom.LineString([[x1, y1],[x2, y2]]).getLength();
						// projeta
						if (i3GEO.Interface.openlayers.googleLike) {
							temp = i3GEO.util.extOSM2Geo(x1 + " " + y1 + " " + x2 + " " + y2);
							temp = temp.split(" ");
							x1 = temp[0];
							y1 = temp[1];
							x2 = temp[2];
							y2 = temp[3];
						}
						trecho = i3GEO.calculo.distancia(x1, y1, x2, y2);
						i3GEO.analise.medeDistancia.pontos.dist.push(trecho);
						total = i3GEO.analise.medeDistancia.openlayers.somaDist();
						i3GEO.analise.medeDistancia.openlayers.mostraTotal(trecho, total);
						i3GEO.analise.medeDistancia.ultimoWkt = i3GEO.analise.medeDistancia.pontos2wkt();
						// raio
						if ($i("pararraios") && $i("pararraios").checked === true) {

							temp = i3GEO.util.projGeo2OSM(new ol.geom.Point([x1*1, y1*1]));
							circ = new ol.Feature({
								geometry: new ol.geom.Circle(temp.getCoordinates(),raio)
							});
							circ.setProperties({
								origem : "medeDistanciaExcluir"
							});
							circ.setStyle(
								new ol.style.Style({
									stroke: new ol.style.Stroke({
										color: estilo.circcolor,
										width: 1
									}),
									zIndex: 2
								})
							);
							i3GEO.desenho.layergrafico.getSource().addFeature(circ);
						}
						// desenha ponto
						if ($i("parartextos") && $i("parartextos").checked === true) {
							label = new ol.Feature({
								geometry: i3GEO.util.projGeo2OSM(new ol.geom.Point([x2*1, y2*1]))
							});
							label.setProperties({
								origem : "medeDistanciaExcluir"
							});
							label.setStyle(
								new ol.style.Style({
									image: new ol.style.Circle({
										radius: 3,
										fill: new ol.style.Fill({
											color: estilo.circcolor
										}),
										stroke: new ol.style.Stroke({
											color: estilo.circcolor,
											width: 1
										})
									}),
									text: new ol.style.Text({
										text: trecho.toFixed(3),
										font: 'Bold 14px Arial',
										textAlign: 'left',
										stroke: new ol.style.Stroke({
											color: 'white',
											width: 1
										}),
										fill: new ol.style.Fill({
											color: estilo.textcolor
										}),
										zIndex: 2000
									})
								})
							);
							i3GEO.desenho.layergrafico.getSource().addFeature(label);
						}
					}
				},
				/**
				 * Soma os valores de distancia guardados em pontos.dist
				 */
				somaDist : function() {
					var n, i, total = 0;
					n = i3GEO.analise.medeDistancia.pontos.dist.length;
					for (i = 0; i < n; i++) {
						total += i3GEO.analise.medeDistancia.pontos.dist[i];
					}
					return total;
				},
				/**
				 * Fecha a janela que mostra os dados Pergunta ao usuario se os graficos devem ser removidos Os graficos sao marcados com o
				 * atributo "origem" Os raios e pontos sao sempre removidos
				 */
				fechaJanela : function() {
					i3GEO.Interface.openlayers.interacoes[0].setActive(false);
					var m = i3GEO.analise.medeDistancia.openlayers;
					ol.Observable.unByKey(m.featureListener);
					m.featureListener = null;
					m.removeControle();
					m.numpontos = 0;
					i3GEO.eventos.cliquePerm.ativa();

					var features, n, f, i, remover = [], temp;
					features = i3GEO.desenho.layergrafico.getSource().getFeatures();
					n = features.length;
					for (i = 0; i < n; i++) {
						f = features[i];
						if (f.getProperties().origem === "medeDistancia" || f.getProperties().origem === "medeDistanciaExcluir") {
							remover.push(f);
						}
					}
					if (remover.length > 0) {
						temp = window.confirm($trad("x94"));
						if (temp) {
							for (r in remover) {
								i3GEO.desenho.layergrafico.getSource().removeFeature(remover[r]);
							}
						}
					}
				},
				/**
				 * Mostra a totalizacao das linhas ja digitalizadas
				 */
				mostraTotal : function(trecho, total) {
					var mostra = $i("mostradistancia_calculo"), texto;
					if (mostra) {
						texto =
							"<b>" + $trad("x96")
								+ ":</b> "
								+ total.toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x96")
								+ ":</b> "
								+ (total * 1000).toFixed(2)
								+ " m"
								+ "<br>"
								+ $trad("x25")
								+ ": "
								+ i3GEO.calculo.metododistancia;
						mostra.innerHTML = texto;
					}
				},
				/**
				 * Mostra o valor do trecho entre o ultimo ponto clicado e a posicao do mouse
				 */
				mostraParcial : function(trecho, parcial, direcao) {
					var mostra = $i("mostradistancia_calculo_movel"), texto;
					if (mostra) {
						texto =
							"<b>" + $trad("x95")
								+ ":</b> "
								+ trecho.toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x97")
								+ ":</b> "
								+ (parcial + trecho).toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x23")
								+ " (DMS):</b> "
								+ direcao;
						mostra.innerHTML = texto;
					}
				}
			},
			googlemaps : {
				/**
				 * Inicializa o processo Cria a variavel para guardar os pontos Executa a funcao de inicializacao do desenho, que cria o
				 * layer para receber os graficos
				 */
				inicia : function() {
					i3GEO.analise.medeDistancia.pontos = {
						xpt : [],
						ypt : [],
						dist : []
					};
					i3GEO.desenho[i3GEO.Interface["ATUAL"]].inicia();
					i3GeoMap.setOptions({
						disableDoubleClickZoom : true
					});
					i3GeoMap.setOptions({
						draggableCursor : 'crosshair'
					});
					var t, evtdblclick = null, evtclick = null, evtmousemove = null, pontos = {
						xpt : [],
						ypt : [],
						dist : [],
						mvcLine : new google.maps.MVCArray(),
						mvcMarkers : new google.maps.MVCArray(),
						line : null,
						polygon : null
					}, termina = function() {
						google.maps.event.removeListener(evtdblclick);
						google.maps.event.removeListener(evtclick);
						google.maps.event.removeListener(evtmousemove);
						pontos.line.setOptions({
							clickable : true
						});
						google.maps.event.addListener(pontos.line, 'click', function(shape) {
							if (shape.setEditable) {
								shape.setEditable(!shape.editable);
							}
						});
						i3GEO.analise.medeDistancia.ultimoWkt = i3GEO.analise.medeDistancia.pontos2wkt();
						t = i3GEO.analise.medeDistancia.googlemaps.somaDist(pontos);
						i3GEO.analise.medeDistancia.ultimaMedida = t.toFixed(3) + " km";
						if (pontos) {
							i3GEO.desenho.googlemaps.shapes.push(pontos.mvcLine);
							i3GEO.desenho.googlemaps.shapes.push(pontos.line);
							pontos = null;
						}
					};
					evtclick = google.maps.event.addListener(i3GeoMap, "click", function(evt) {
						var x1, x2, y1, y2, trecho = 0, total, n;
						// When the map is clicked, pass the LatLng obect to the
						// measureAdd function
						pontos.mvcLine.push(evt.latLng);
						pontos.xpt.push(evt.latLng.lng());
						pontos.ypt.push(evt.latLng.lat());
						i3GEO.analise.medeDistancia.pontos.xpt.push(evt.latLng.lng());
						i3GEO.analise.medeDistancia.pontos.ypt.push(evt.latLng.lat());
						n = pontos.xpt.length;
						// desenha um circulo
						if (pontos.mvcLine.getLength() > 1) {
							x1 = pontos.xpt[n - 2];
							y1 = pontos.ypt[n - 2];
							x2 = evt.latLng.lng();
							y2 = evt.latLng.lat();
							// raio =
							// google.maps.geometry.spherical.computeDistanceBetween(evt.latLng,new
							// google.maps.LatLng(y1,x1))
							trecho = i3GEO.calculo.distancia(x1, y1, x2, y2);
							pontos.dist.push(trecho);
							total = i3GEO.analise.medeDistancia.googlemaps.somaDist(pontos);
							i3GEO.analise.medeDistancia.googlemaps.mostraTotal(trecho, total);
							if ($i("pararraios") && $i("pararraios").checked === true) {
								i3GEO.desenho.googlemaps.shapes.push(new google.maps.Circle({
									map : i3GeoMap,
									fillOpacity : 0,
									clickable : false,
									strokeColor : "black",
									strokeOpacity : 1,
									strokeWeight : 2,
									center : new google.maps.LatLng(y1, x1),
									radius : trecho * 1000,
									origem : "medeDistanciaExcluir"
								}));
							}
						}
						// desenha uma marca no ponto
						if ($i("parartextos") && $i("parartextos").checked === true) {
							i3GEO.desenho.googlemaps.shapes.push(new google.maps.Marker({
								map : i3GeoMap,
								fillOpacity : 0,
								clickable : false,
								position : evt.latLng,
								icon : {
									path : google.maps.SymbolPath.CIRCLE,
									scale : 2.5,
									strokeColor : "#ffffff",
									title : trecho.toFixed(0) + " km"
								},
								origem : "medeDistanciaExcluir"
							}));
						}
						// mais um ponto para criar uma linha movel
						pontos.mvcLine.push(evt.latLng);
					});
					evtmousemove =
						google.maps.event.addListener(i3GeoMap, "mousemove", function(evt) {
							if (!$i("mostradistancia_calculo")) {
								termina.call();
								return;
							}
							var x1, y1, x2, y2, direcao, parcial, estilo = i3GEO.desenho.estilos[i3GEO.desenho.estiloPadrao], n =
								pontos.xpt.length;

							// If there is more than one vertex on the line
							if (pontos.mvcLine.getLength() > 0) {
								// If the line hasn't been created yet
								if (!pontos.line) {
									// Create the line (google.maps.Polyline)
									pontos.line = new google.maps.Polyline({
										map : i3GeoMap,
										clickable : false,
										strokeColor : estilo.linecolor,
										strokeOpacity : 1,
										strokeWeight : estilo.linewidth,
										path : pontos.mvcLine,
										origem : "medeDistancia"
									});
								}
								pontos.mvcLine.pop();
								pontos.mvcLine.push(evt.latLng);
								parcial = i3GEO.analise.medeDistancia.googlemaps.somaDist(pontos);
								x1 = pontos.xpt[n - 1];
								y1 = pontos.ypt[n - 1];
								x2 = evt.latLng.lng();
								y2 = evt.latLng.lat();
								// raio =
								// google.maps.geometry.spherical.computeDistanceBetween(evt.latLng,new
								// google.maps.LatLng(y1,x1))
								trecho = i3GEO.calculo.distancia(x1, y1, x2, y2);
								direcao = i3GEO.calculo.direcao(x1, y1, x2, y2);
								direcao = i3GEO.calculo.dd2dms(direcao, direcao);
								direcao = direcao[0];
								i3GEO.analise.medeDistancia.googlemaps.mostraParcial(trecho, parcial, direcao);
							}
						});
					evtdblclick = google.maps.event.addListener(i3GeoMap, "dblclick", function(evt) {
						termina.call();
					});
				},
				/**
				 * Soma os valores de distancia guardados em pontos.dist
				 */
				somaDist : function(pontos) {
					var n, i, total = 0;
					n = pontos.dist.length;
					for (i = 0; i < n; i++) {
						total += pontos.dist[i];
					}
					return total;
				},
				/**
				 * Fecha a janela que mostra os dados Pergunta ao usuario se os graficos devem ser removidos Os graficos sao marcados com o
				 * atributo "origem" Os raios e pontos sao sempre removidos
				 */
				fechaJanela : function() {
					i3GeoMap.setOptions({
						disableDoubleClickZoom : false
					});
					i3GeoMap.setOptions({
						draggableCursor : undefined
					});
					var f = i3GEO.desenho.googlemaps.getFeaturesByAttribute("origem", "medeDistancia");
					if (f && f.length > 0) {
						temp = window.confirm($trad("x94"));
						if (temp) {
							i3GEO.desenho.googlemaps.destroyFeatures(f);
						}
					}
					f = i3GEO.desenho.googlemaps.getFeaturesByAttribute("origem", "medeDistanciaExcluir");
					if (f && f.length > 0) {
						i3GEO.desenho.googlemaps.destroyFeatures(f);
					}
				},
				/**
				 * Mostra a totalizacao das linhas ja digitalizadas
				 */
				mostraTotal : function(trecho, total) {
					var mostra = $i("mostradistancia_calculo"), texto;
					if (mostra) {
						texto =
							"<b>" + $trad("x96")
								+ ":</b> "
								+ total.toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x96")
								+ ":</b> "
								+ (total * 1000).toFixed(2)
								+ " m"
								+ "<br>"
								+ $trad("x25")
								+ ": "
								+ i3GEO.calculo.metododistancia;
						mostra.innerHTML = texto;
					}
				},
				/**
				 * Mostra o valor do trecho entre o ultimo ponto clicado e a posicao do mouse
				 */
				mostraParcial : function(trecho, parcial, direcao) {
					var mostra = $i("mostradistancia_calculo_movel"), texto;
					if (mostra) {
						texto =
							"<b>" + $trad("x95")
								+ ":</b> "
								+ trecho.toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x97")
								+ ":</b> "
								+ (parcial + trecho).toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x23")
								+ " (DMS):</b> "
								+ direcao;
						mostra.innerHTML = texto;
					}
				}
			}
		},
		/**
		 * Section: medeArea
		 *
		 * Ativa e controla a op&atilde;o de medi&ccedil;&atilde;o de &aacute;rea.
		 *
		 * A medida &eacute; feita quando o usu&aacute;rio clica no mapa com esta op&ccedil;&atilde;o ativa
		 *
		 * Quando o bot&atilde;o &eacute; acionado, abre-se a janela que mostra o resultado da medida, o &iacute;cone que segue o mouse
		 * &eacute; alterado.
		 *
		 * Para mostrar o resultado do cálculo, é incluido um div específico.
		 */
		medeArea : {
			/**
			 * Armazena os pontos clicados para realizar os calculos
			 */
			pontos : {},
			/**
			 * Armazena o WKT da ultima linha
			 */
			ultimoWkt : "",
			/**
			 * Armazena a ultima medida
			 */
			ultimaMedida : "",
			/**
			 * Function: inicia
			 *
			 * Inicia a opera&ccedil;&atilde;o de medi&ccedil;&atilde;o, abrindo a janela de resultados e criando os componentes
			 * necess&aacute;rios
			 *
			 * S&atilde;o registrados os eventos de clique sobre o mapa e fechamento da janela de resultados
			 */
			inicia : function() {
				i3GEO.eventos.cliquePerm.desativa();
				i3GEO.analise.medeArea.criaJanela();
				i3GEO.analise.medeArea[i3GEO.Interface["ATUAL"]].inicia();
			},
			/**
			 * Cria a janela para mostrar os resultados da medicao
			 */
			criaJanela : function() {
				var novoel, ins, imagemxy, janela;
				if (!$i("mostraarea")) {
					novoel = document.createElement("div");
					novoel.id = "mostraarea";
					ins =
						'<div class="hd" ><div class="i3GeoTituloJanela">' + $trad("areaAprox")
							+ '<a class=ajuda_usuario target=_blank href="'
							+ i3GEO.configura.locaplic
							+ '"/ajuda_usuario.php?idcategoria=6&idajuda=51" ><b> </b></a></div></div>'
							+ '<div class="bd" style="text-align:left;padding:3px;font-size:10px" >'
							// + '<label class=paragrafo style="float:left;top:5px;position:relative;">Estilo:</label>'
							// + '<div class=styled-select style="width:70px;">' + i3GEO.desenho.caixaEstilos() + '</div><br>'
							+ '<div style="text-align:left;padding:3px;font-size:10px" id="mostraarea_calculo" ></div>'
							+ '<div style="text-align:left;padding:3px;font-size:10px" id="mostraarea_calculo_parcial" ></div>'
							+ '<br><input id=i3GEObotaoAreaWkt size="22" type="button" value="incorporar">'
							+ '</div>';
					novoel.innerHTML = ins;
					novoel.style.borderColor = "gray";
					document.body.appendChild(novoel);
					janela = new YAHOO.widget.Panel("mostraarea", {
						width : "220px",
						fixedcenter : false,
						constraintoviewport : true,
						underlay : "none",
						close : true,
						visible : true,
						draggable : true,
						modal : false
					});
					YAHOO.i3GEO.janela.manager.register(janela);
					janela.render();
					YAHOO.util.Event.addListener(janela.close, "click", i3GEO.analise.medeArea.fechaJanela);
				} else {
					janela = YAHOO.i3GEO.janela.manager.find("mostraarea");
				}
				janela.show();
				imagemxy = i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));
				janela.moveTo(imagemxy[0] + 150, imagemxy[1]);
				new YAHOO.widget.Button("i3GEObotaoAreaWkt", {
					onclick : {
						fn : function() {
							i3GEO.mapa.dialogo.wkt2layer(i3GEO.analise.medeArea.ultimoWkt, i3GEO.analise.medeArea.ultimaMedida);
						}
					}
				});
			},
			/**
			 * Fecha a janela e os elementos graficos criados para a ferramenta de medicao
			 */
			fechaJanela : function() {
				var janela;
				i3GEO.eventos.cliquePerm.ativa();
				janela = YAHOO.i3GEO.janela.manager.find("mostraarea");
				if (janela) {
					YAHOO.i3GEO.janela.manager.remove(janela);
					janela.destroy();
				}
				i3GEO.barraDeBotoes.ativaIcone("pointer");
				i3GEO.analise.medeArea[i3GEO.Interface["ATUAL"]].fechaJanela();
			},
			/**
			 * Converte a lista de pontos em WKT
			 */
			pontos2wkt : function() {
				var pontos = [], x = i3GEO.analise.medeArea.pontos.xpt, y = i3GEO.analise.medeArea.pontos.ypt, n = x.length, i;
				for (i = 0; i < n; i++) {
					pontos.push(x[i] + " " + y[i]);
				}
				pontos.push(x[0] + " " + y[0]);
				return "POLYGON((" + pontos.join(",") + "))";
			},
			/**
			 * Funcoes especificas da interface openlayers
			 */
			openlayers : {
				draw : "",
				estilo: "",
				featureListener : null,
				//numero de pontos da geometria atual
				//utilizado para saber se houve um clique ou nao
				numpontos : 0,
				removeControle : function() {
					i3geoOL.removeInteraction(i3GEO.analise.medeArea.openlayers.draw);
					i3GEO.analise.medeArea.openlayers.draw = "";
				},
				/**
				 * Inicializa o processo Cria a variavel para guardar os pontos Executa a funcao de inicializacao do desenho, que cria o
				 * layer para receber os graficos
				 */
				inicia : function() {
					var m = i3GEO.analise.medeArea.openlayers;
					m.estilo = new ol.style.Style({
						stroke: new ol.style.Stroke({
							color: '#ffcc33',
							width: 5
						}),
						fill: new ol.style.Fill({
							  color: 'rgba(255, 153, 0, 0.8)'
						})
					});
					i3GEO.desenho[i3GEO.Interface["ATUAL"]].inicia();
					m.removeControle();
					m.draw = new ol.interaction.Draw({
						type : "Polygon"
					});
					i3GEO.Interface.openlayers.interacoes[0].setActive(false);
					m.draw.on("drawend", function(evt) {
						evt.feature.setProperties({
							origem : "i3GeoMedeArea"
						});
						var m = i3GEO.analise.medeArea.openlayers;
						i3GEO.desenho.layergrafico.getSource().addFeature(evt.feature);
						m.draw.setActive(false);
						m.draw.setActive(true);
					});
					m.draw.on('drawstart', function(evt) {
						i3GEO.analise.medeArea.pontos = {
							xpt : [],
							ypt : [],
							dist : []
						};
						var m = i3GEO.analise.medeArea.openlayers,
							sketch = evt.feature;
						m.estilo = sketch.getStyle();
						m.numpontos = 1;
						m.featureListener = sketch.getGeometry().on('change', function(evt) {
							var ponto,
								geom = evt.target,
								coords = geom.getLinearRing(0).getCoordinates(),
								n = coords.length,
								m = i3GEO.analise.medeArea.openlayers;
							ponto = new ol.geom.Point(coords[n-1]);
							if(m.numpontos === n-1){
								//clicou
								m.numpontos = n;
								m.point(ponto,geom);
							}
							else{
								m.modify(ponto,geom);
							}
						});
					});
					i3geoOL.addInteraction(m.draw);
				},
				modify : function(point,geom) {
					var temp,sourceProj,coordinates,wgs84Sphere, per, area, n, x1, y1, x2, y2, trecho, direcao,
					coord = point.getCoordinates();
					n = i3GEO.analise.medeArea.pontos.ypt.length;
					if (n > 1) {
						x1 = i3GEO.analise.medeArea.pontos.xpt[n - 1];
						y1 = i3GEO.analise.medeArea.pontos.ypt[n - 1];
						x2 = coord[0];
						y2 = coord[1];
						// projeta
						if (i3GEO.Interface.openlayers.googleLike) {
							temp = i3GEO.util.extOSM2Geo(x1 + " " + y1 + " " + x2 + " " + y2);
							temp = temp.split(" ");
							x1 = temp[0];
							y1 = temp[1];
							x2 = temp[2];
							y2 = temp[3];
						}
						trecho = i3GEO.calculo.distancia(x1, y1, x2, y2);
						//parcial = i3GEO.analise.medeArea.openlayers.somaDist();
						direcao = i3GEO.calculo.direcao(x1, y1, x2, y2);
						direcao = i3GEO.calculo.dd2dms(direcao, direcao);
						direcao = direcao[0];
						per = i3GEO.analise.medeArea.openlayers.somaDist();
						// soma ate o primeiro ponto
						x1 = i3GEO.analise.medeArea.pontos.xpt[0];
						y1 = i3GEO.analise.medeArea.pontos.ypt[0];
						// projeta
						if (i3GEO.Interface.openlayers.googleLike) {
							temp = i3GEO.util.extOSM2Geo(x1 + " " + y1);
							temp = temp.split(" ");
							x1 = temp[0];
							y1 = temp[1];
						}
						per += i3GEO.calculo.distancia(x1, y1, x2, y2);
						//getGeodesicArea
						sourceProj = i3geoOL.getView().getProjection();
						geom = (geom.clone().transform(sourceProj, 'EPSG:4326'));
						coordinates = geom.getLinearRing(0).getCoordinates();
						wgs84Sphere = new ol.Sphere(6378137);
						area = Math.abs(wgs84Sphere.geodesicArea(coordinates));
						i3GEO.analise.medeArea.openlayers.mostraParcial(trecho, per, area, direcao);
					}

				},
				point : function(point,geom) {
					var wgs84Sphere,area,coordinates,sourceProj,n, x1, y1, x2, y2, trecho, temp,
					coord = point.getCoordinates(),
					total = 0;
					i3GEO.analise.medeArea.pontos.xpt.push(coord[0]);
					i3GEO.analise.medeArea.pontos.ypt.push(coord[1]);
					i3GEO.analise.pontos.xpt.push(coord[0]);
					i3GEO.analise.pontos.ypt.push(coord[1]);
					n = i3GEO.analise.medeArea.pontos.ypt.length;
					if (n > 1) {
						x1 = i3GEO.analise.medeArea.pontos.xpt[n - 2];
						y1 = i3GEO.analise.medeArea.pontos.ypt[n - 2];
						x2 = coord[0];
						y2 = coord[1];
						raio = new ol.geom.LineString([[x1, y1],[x2, y2]]).getLength();
						// projeta
						if (i3GEO.Interface.openlayers.googleLike) {
							temp = i3GEO.util.extOSM2Geo(x1 + " " + y1 + " " + x2 + " " + y2);
							temp = temp.split(" ");
							x1 = temp[0];
							y1 = temp[1];
							x2 = temp[2];
							y2 = temp[3];
						}
						trecho = i3GEO.calculo.distancia(x1, y1, x2, y2);
						i3GEO.analise.medeArea.pontos.dist.push(trecho);
						total = i3GEO.analise.medeArea.openlayers.somaDist();

						sourceProj = i3geoOL.getView().getProjection();
						geom = (geom.clone().transform(sourceProj, 'EPSG:4326'));
						coordinates = geom.getLinearRing(0).getCoordinates();
						wgs84Sphere = new ol.Sphere(6378137);
						area = Math.abs(wgs84Sphere.geodesicArea(coordinates));

						i3GEO.analise.medeArea.openlayers.mostraTotal(total, area);
						i3GEO.analise.medeArea.ultimoWkt = i3GEO.analise.medeArea.pontos2wkt();
					}
				},
				/**
				 * Soma os valores de distancia guardados em pontos.dist
				 */
				somaDist : function() {
					var n, i, total = 0;
					n = i3GEO.analise.medeArea.pontos.dist.length;
					for (i = 0; i < n; i++) {
						total += i3GEO.analise.medeArea.pontos.dist[i];
					}
					return total;
				},
				/**
				 * Fecha a janela que mostra os dados Pergunta ao usuario se os graficos devem ser removidos Os graficos sao marcados com o
				 * atributo "origem" Os raios e pontos sao sempre removidos
				 */
				fechaJanela : function() {
					i3GEO.Interface.openlayers.interacoes[0].setActive(true);
					var m = i3GEO.analise.medeArea.openlayers;
					ol.Observable.unByKey(m.featureListener);
					m.featureListener = null;
					m.removeControle();
					m.numpontos = 0;
					i3GEO.eventos.cliquePerm.ativa();

					var features, n, f, i, remover = [], temp;
					features = i3GEO.desenho.layergrafico.getSource().getFeatures();
					n = features.length;
					for (i = 0; i < n; i++) {
						f = features[i];
						if (f.getProperties().origem === "i3GeoMedeArea" || f.getProperties().origem === "medeAreaExcluir") {
							remover.push(f);
						}
					}
					if (remover.length > 0) {
						temp = window.confirm($trad("x94"));
						if (temp) {
							for (r in remover) {
								i3GEO.desenho.layergrafico.getSource().removeFeature(remover[r]);
							}
						}
					}
				},
				/**
				 * Mostra a totalizacao das linhas ja digitalizadas
				 */
				mostraTotal : function(per, area) {
					var mostra = $i("mostraarea_calculo"), texto;
					if (mostra) {
						texto =
							"<b>" + $trad("d21at")
								+ ":</b> "
								+ (area / 1000000).toFixed(3)
								+ " km2"
								+ "<br><b>"
								+ $trad("d21at")
								+ ":</b> "
								+ (area / 10000).toFixed(2)
								+ " ha"
								+ "<br><b>"
								+ $trad("x98")
								+ ":</b> "
								+ (per).toFixed(2)
								+ " km"
								+ "<br>"
								+ $trad("x25")
								+ ": "
								+ i3GEO.calculo.metododistancia;
						mostra.innerHTML = texto;
						i3GEO.analise.medeArea.ultimaMedida = (area / 1000000).toFixed(3) + " km2";
					}
				},
				/**
				 * Mostra o valor do trecho entre o ultimo ponto clicado e a posicao do mouse
				 */
				mostraParcial : function(trecho, per, area, direcao) {
					var mostra = $i("mostraarea_calculo_parcial"), texto;
					if (mostra) {
						texto =
							"<b>" + $trad("d21at")
								+ ":</b> "
								+ (area / 1000000).toFixed(3)
								+ " km2"
								+ "<br><b>"
								+ $trad("d21at")
								+ ":</b> "
								+ (area / 10000).toFixed(2)
								+ " ha"
								+ "<br><b>"
								+ $trad("x95")
								+ ":</b> "
								+ trecho.toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x98")
								+ ":</b> "
								+ (per).toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x23")
								+ " (DMS):</b> "
								+ direcao;
						mostra.innerHTML = texto;
					}
				}
			},
			googlemaps : {
				/**
				 * Inicializa o processo Cria a variavel para guardar os pontos Executa a funcao de inicializacao do desenho, que cria o
				 * layer para receber os graficos
				 */
				inicia : function() {
					i3GEO.analise.medeArea.pontos = {
						xpt : [],
						ypt : [],
						dist : []
					};
					if (!google.maps.geometry) {
						alert($trad("x99"));
						return;
					}
					i3GEO.desenho[i3GEO.Interface["ATUAL"]].inicia();
					i3GeoMap.setOptions({
						disableDoubleClickZoom : true
					});
					i3GeoMap.setOptions({
						draggableCursor : 'crosshair'
					});
					var evtdblclick = null, evtclick = null, evtmousemove = null, pontos = {
						xpt : [],
						ypt : [],
						dist : [],
						mvcLine : new google.maps.MVCArray(),
						mvcMarkers : new google.maps.MVCArray(),
						line : null,
						polygon : null
					}, termina = function() {
						google.maps.event.removeListener(evtdblclick);
						google.maps.event.removeListener(evtclick);
						google.maps.event.removeListener(evtmousemove);
						pontos.line.setOptions({
							clickable : true
						});
						google.maps.event.addListener(pontos.line, 'click', function(shape) {
							if (shape.setEditable) {
								shape.setEditable(!shape.editable);
							}
						});
						if (pontos) {
							i3GEO.desenho.googlemaps.shapes.push(pontos.mvcLine);
							i3GEO.desenho.googlemaps.shapes.push(pontos.line);
							pontos = null;
						}
						i3GEO.analise.medeArea.ultimoWkt = i3GEO.analise.medeArea.pontos2wkt();
					};
					evtclick = google.maps.event.addListener(i3GeoMap, "click", function(evt) {
						var area = 0, per;
						// When the map is clicked, pass the LatLng obect to the
						// measureAdd function
						pontos.mvcLine.push(evt.latLng);
						pontos.xpt.push(evt.latLng.lng());
						pontos.ypt.push(evt.latLng.lat());
						i3GEO.analise.medeArea.pontos.xpt.push(evt.latLng.lng());
						i3GEO.analise.medeArea.pontos.ypt.push(evt.latLng.lat());
						// desenha um circulo
						if (pontos.mvcLine.getLength() > 0) {
							per = google.maps.geometry.spherical.computeLength(pontos.mvcLine);
							area = google.maps.geometry.spherical.computeArea(pontos.mvcLine);
							i3GEO.analise.medeArea.googlemaps.mostraTotal(per, area);
						}
						// desenha uma marca no ponto
						i3GEO.desenho.googlemaps.shapes.push(new google.maps.Marker({
							map : i3GeoMap,
							fillOpacity : 0,
							clickable : false,
							position : evt.latLng,
							icon : {
								path : google.maps.SymbolPath.CIRCLE,
								scale : 2.5,
								strokeColor : "#ffffff"
							},
							origem : "medeAreaExcluir"
						}));
						// mais um ponto para criar uma linha movel
						pontos.mvcLine.push(evt.latLng);
					});
					evtmousemove =
						google.maps.event.addListener(i3GeoMap, "mousemove", function(evt) {
							if (!$i("mostraarea_calculo")) {
								termina.call();
								return;
							}
							var x1, y1, x2, y2, direcao, per, area, estilo = i3GEO.desenho.estilos[i3GEO.desenho.estiloPadrao], n =
								pontos.xpt.length;

							// If there is more than one vertex on the line
							if (pontos.mvcLine.getLength() > 0) {
								// If the line hasn't been created yet
								if (!pontos.line) {
									// Create the line (google.maps.Polyline)
									pontos.line = new google.maps.Polygon({
										map : i3GeoMap,
										clickable : false,
										strokeColor : estilo.linecolor,
										strokeOpacity : 1,
										strokeWeight : estilo.linewidth,
										path : pontos.mvcLine,
										origem : "medeArea"
									});
								}
								pontos.mvcLine.pop();
								pontos.mvcLine.push(evt.latLng);
								per = google.maps.geometry.spherical.computeLength(pontos.mvcLine);
								x1 = pontos.xpt[n - 1];
								y1 = pontos.ypt[n - 1];
								x2 = evt.latLng.lng();
								y2 = evt.latLng.lat();
								trecho = i3GEO.calculo.distancia(x1, y1, x2, y2);
								direcao = i3GEO.calculo.direcao(x1, y1, x2, y2);
								direcao = i3GEO.calculo.dd2dms(direcao, direcao);
								direcao = direcao[0];
								area = google.maps.geometry.spherical.computeArea(pontos.mvcLine);
								i3GEO.analise.medeArea.googlemaps.mostraParcial(trecho, per, area, direcao);
							}
						});
					evtdblclick =
						google.maps.event.addListener(i3GeoMap, "dblclick", function(evt) {
							pontos.mvcLine.push(new google.maps.LatLng(pontos.ypt[0], pontos.xpt[0]));
							var per = google.maps.geometry.spherical.computeLength(pontos.mvcLine), area =
								google.maps.geometry.spherical.computeArea(pontos.mvcLine);
							i3GEO.analise.medeArea.googlemaps.mostraTotal(per, area);
							termina.call();
						});
				},
				/**
				 * Soma os valores de distancia guardados em pontos.dist
				 */
				somaDist : function(pontos) {
					var n, i, total = 0;
					n = pontos.dist.length;
					for (i = 0; i < n; i++) {
						total += pontos.dist[i];
					}
					return total;
				},
				/**
				 * Fecha a janela que mostra os dados Pergunta ao usuario se os graficos devem ser removidos Os graficos sao marcados com o
				 * atributo "origem" Os raios e pontos sao sempre removidos
				 */
				fechaJanela : function() {
					i3GeoMap.setOptions({
						disableDoubleClickZoom : false
					});
					i3GeoMap.setOptions({
						draggableCursor : undefined
					});
					var f = i3GEO.desenho.googlemaps.getFeaturesByAttribute("origem", "medeArea");
					if (f && f.length > 0) {
						temp = window.confirm($trad("x94"));
						if (temp) {
							i3GEO.desenho.googlemaps.destroyFeatures(f);
						}
					}
					f = i3GEO.desenho.googlemaps.getFeaturesByAttribute("origem", "medeAreaExcluir");
					if (f && f.length > 0) {
						i3GEO.desenho.googlemaps.destroyFeatures(f);
					}
				},
				/**
				 * Mostra a totalizacao das linhas ja digitalizadas
				 */
				mostraTotal : function(per, area) {
					var mostra = $i("mostraarea_calculo"), texto;
					if (mostra) {
						texto =
							"<b>" + $trad("d21at")
								+ ":</b> "
								+ (area / 1000000).toFixed(3)
								+ " km2"
								+ "<br><b>"
								+ $trad("d21at")
								+ ":</b> "
								+ (area / 10000).toFixed(2)
								+ " ha"
								+ "<br><b>"
								+ $trad("x98")
								+ ":</b> "
								+ (per).toFixed(2)
								+ " km"
								+ "<br>"
								+ $trad("x25")
								+ ": "
								+ i3GEO.calculo.metododistancia;
						mostra.innerHTML = texto;
						i3GEO.analise.medeArea.ultimaMedida = (area / 1000000).toFixed(3) + " km2";
					}
				},
				/**
				 * Mostra o valor do trecho entre o ultimo ponto clicado e a posicao do mouse
				 */
				mostraParcial : function(trecho, per, area, direcao) {
					var mostra = $i("mostraarea_calculo_parcial"), texto;
					if (mostra) {
						texto =
							"<b>" + $trad("d21at")
								+ ":</b> "
								+ (area / 1000000).toFixed(3)
								+ " km2"
								+ "<br><b>"
								+ $trad("d21at")
								+ ":</b> "
								+ (area / 10000).toFixed(2)
								+ " ha"
								+ "<br><b>"
								+ $trad("x95")
								+ ":</b> "
								+ trecho.toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x98")
								+ ":</b> "
								+ (per).toFixed(3)
								+ " km"
								+ "<br><b>"
								+ $trad("x23")
								+ " (DMS):</b> "
								+ direcao;
						mostra.innerHTML = texto;
					}
				}
			}
		}
	};