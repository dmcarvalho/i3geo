function i3GEOmantemCompatibilidade(){try{i3GEO.configura.oMenuData=oMenuData}catch(e){}try{i3GEO.configura.tipoimagem=g_tipoimagem}catch(e){}try{i3GEO.configura.tipotip=g_tipotip}catch(e){}try{i3GEO.configura.funcaoTip=g_funcaoTip}catch(e){}try{i3GEO.configura.map3d=g_3dmap}catch(e){}try{i3GEO.configura.embedLegenda=g_embedLegenda}catch(e){}try{i3GEO.configura.templateLegenda=g_templateLegenda}catch(e){}try{if(objmapa.finaliza!="")i3GEO.finaliza=objmapa.finaliza}catch(e){};g_arvoreClick="";g_arvoreClicks="";if($i("longlat")){atualizalonglat=function(){$i("longlat").innerHTML=objposicaocursor.dmsx+"   "+objposicaocursor.dmsy};YAHOO.util.Event.addListener($i("img"),"mousemove",atualizalonglat)}try{if(g_opcoesTemas=="nao"){i3GEO.arvoreDeCamadas.OPCOESTEMAS=false}}catch(e){};try{i3GEO.maparef.fatorZoomDinamico=g_zoomRefDinamico}catch(e){};try{i3GEO.configura.mashuppar=g_mashuppar}catch(e){};try{if(!$i("arvoreAdicionaTema")){i3GEO.arvoreDeTemas.IDHTML=objmapa.guiaMenu+"obj"}else{i3GEO.arvoreDeTemas.IDHTML="arvoreAdicionaTema"}}catch(e){};try{if(g_uploaddbf=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.uploaddbf=false}}catch(e){};try{if(g_uploadlocal=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.uploadlocal=false}}catch(e){};try{if(g_downloadbase=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.downloadbase=false}}catch(e){};try{if(g_conectarwms=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.conectarwms=false}}catch(e){};try{if(g_conectargeorss=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.conectargeorss=false}}catch(e){};try{if(g_nuvemTags=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.nuvemTags=false}}catch(e){};try{if(g_kml=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.kml=false}}catch(e){};try{if(g_qrcode=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.qrcode=false}}catch(e){};try{if(g_tipoacao!=""){i3GEO.barraDeBotoes.BOTAOPADRAO=g_tipoacao}}catch(e){}try{if(g_listaPropriedades){i3GEO.configura.listaDePropriedadesDoMapa=g_listaPropriedades}}catch(e){};try{if(g_tempo_aplicar){i3GEO.configura.tempoAplicar=g_tempo_aplicar}}catch(e){};try{if(g_janelaMen=="nao"){i3GEO.configura.iniciaJanelaMensagens=false}}catch(e){};try{if(g_locaplic){i3GEO.configura.locaplic=g_locaplic}}catch(e){};try{if(g_tempotip){i3GEO.configura.tempoMouseParado=g_tempotip}}catch(e){};try{if(g_mostraRosa){i3GEO.configura.mostraRosaDosVentos=g_mostraRosa}}catch(e){};try{if(g_visual){i3GEO.configura.visual=g_visual}}catch(e){};try{if(g_mapaRefDisplay){i3GEO.configura.mapaRefDisplay=g_mapaRefDisplay}}catch(e){};try{if(g_docaguias){i3GEO.configura.liberaGuias=g_docaguias}}catch(e){};if(window.location.href.split("?")[1]){g_sid=window.location.href.split("?")[1];if(g_sid.split("#")[0]){g_sid=g_sid.split("#")[0]}}else{g_sid=""}i3GEO.configura.sid=g_sid;try{i3GEO.guias.ATUAL=g_guiaativa}catch(e){}try{i3GEO.navega.autoRedesenho.INTERVALO=g_autoRedesenho}catch(e){}try{i3GEO.eventos.NAVEGAMAPA=g_funcoesNavegaMapaDefault}catch(e){}try{i3GEO.eventos.MOUSEMOVE=g_funcoesMousemoveMapaDefault}catch(e){}try{i3GEO.eventos.MOUSECLIQUE=g_funcoesClickMapaDefault}catch(e){}try{i3GEO.configura.entorno=g_entorno}catch(e){}try{i3GEO.navega.lente.POSICAOX=g_posicaoLenteX=0}catch(e){}try{i3GEO.navega.lente.POSICAOY=g_posicaoLenteY}catch(e){}try{i3GEO.navega.destacaTema.TAMANHO=destacaTamanho}catch(e){}if(!$i("tip")){var novoel=document.createElement("div");novoel.id="tip";novoel.style.position="absolute";novoel.style.zIndex=5000;if(navm){novoel.style.filter="alpha(opacity=90)"}document.body.appendChild(novoel)}try{objmapa.atualizaListaTemas=function(temas){alert("atualizaListaTemas foi depreciado. Utilize i3GEO.arvoreDeCamadas")}}catch(e){}}if(typeof(i3GEO)=='undefined'){i3GEO=new Array()}cpObj=new cpaint();cpObj.set_async("true");cpObj.set_response_type("JSON");function Mapa(e,m){i3GEO.cria();this.inicializa=function(){i3GEO.finaliza=this.finaliza;i3GEO.inicia()}}objaguarde={abre:function(){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"))},fecha:function(){i3GEO.janela.fechaAguarde("i3GEO.atualiza")}};function iCookie(nome,valor){i3GEO.util.insereCookie(nome,valor)}function pCookie(nome){i3GEO.util.pegaCookie(nome)}function trocalingua(l){i3GEO.idioma.trocaIdioma(l);alert("trocalingua foi depreciado utilize i3GEO.idioma")}function initJanelaMen(){i3GEO.ajuda.abreJanela();alert("initJanelaMen foi depreciado utilize i3GEO.ajuda")}function pegalistademenus(retorno){alert("Funcao pegalistademenus foi depreciado. Utilize i3GEO.arvoreDeTemas")}function wdocaf(wlargura,waltura,wsrc,nx,ny,texto){var janela=i3GEO.janela.cria(wlargura,waltura,wsrc,nx,ny,texto)}function redimwdocaf(w,h){i3GEO.janela.alteraTamanho(w,h);alert("redimwdocaf foi depreciado utilize i3GEO.janela")}function wdocaf2(wlargura,waltura,wsrc,nx,ny,texto){var id=YAHOO.util.Dom.generateId();i3GEO.janela.cria(wlargura,waltura,wsrc,nx,ny,texto,id,true)}function wdocafechaf(odoca){alert("wdocafechaf foi depreciado")}function mostradicasf(objeto,dica,hlpt){i3GEO.ajuda.mostraJanela(dica);alert("mostradicasf foi depreciado utilize i3GEO.ajuda")}function mudaboxnf(tipo,obj,nomeFuncao){alert("mudaboxnf foi depreciado")}function procurartemas(texto){alert("procurartemas foi depreciado")}function expandeTema(itemID){var tema=itemID.split("legenda");if(tema.length==2){g_arvoreClick=itemID;tema=tema[1];var p=g_locaplic+"/classesphp/mapa_controle.php?funcao=criaLegendaHTML&template=legenda2.htm&tema="+tema+"&g_sid="+g_sid;cpObj.call(p,"criaLegenda",expandeLegendaVer)}alert("expandeTema foi depreciado")}function pegavalSistemas(sis){alert("Funcao pegavalSistemas foi depreciada - veja i3GEO.arvoreDeTemas")}function processevent1(exy1){}function removeAcentos(palavra){return(i3GEO.util.removeAcentos(palavra));alert("removeAcentos foi depreciado utilize i3GEO.util")}function ativaMensagemBanner(){alert("ativaMensagemBanner fooi depreciado utilize i3GEO.ajuda")}function mensagemBanner(){}function mensagemf(m){alert("mensagemf foi depreciado");try{if(!$i("mensagem")){var novoel=document.createElement("div");novoel.id='mensagem';novoel.innerHTML='<table width="50" style="border: 1px solid #000000;"> <tr> <td onclick="mensagemf()" style="text-align:left;cursor:pointer" class="tdclara"> <img src="'+g_locaplic+'/imagens/excluir.png" /> </td> <td style="text-align:left" class="tdclara"> <input style="text-align:left" class="textocb" type="text" id="mensagemt" size="70" value="" /> </td></tr> </table>';if($i("i3geo")){$i("i3geo").appendChild(novoel)}else{document.body.appendChild(novoel)}}if(m==null){$i("mensagem").style.visibility="hidden"}else{$i("mensagemt").value=m;$i("mensagem").style.visibility="visible"}var pos=pegaPosicaoObjeto($i("img"));pos[1]=pos[1]+parseInt($i("img").style.height)-22;eval('document.getElementById("mensagem").style.'+g_tipoleft+' = pos[0] + g_postpx');eval('document.getElementById("mensagem").style.'+g_tipotop+' = pos[1] + g_postpx')}catch(e){alert("Impossivel criar mensagem."+e)}}function aguarde(){alert("aguarde foi depreciado utilize i3GEO.janela");this.abre=function(aguardeId,texto){i3GEO.janela.abreAguarde(aguardeId,texto)};this.fecha=function(aguardeId){i3GEO.janela.fechaAguarde(aguardeId)}}function zoomiauto(){alert("zoomiauto foi depreciado utilize i3GEO.navega");i3GEO.navega.zoomin(g_locaplic,g_sid)}function zoomoauto(){alert("zoomoauto foi depreciado utilize i3GEO.navega");i3GEO.navega.zoomout(g_locaplic,g_sid)}function convdmsddf(cd,cm,cs){alert("convdmsddf foi depreciado utilize i3GEO.calculo");return(i3GEO.calculo.dsm2dd(cd,cm,cs))}function zoomPonto(){alert("utilize i3GEO.navega.zoomponto")}function zoomIP(){alert("zoomIP foi depreciado. Utilize i3GEO.navega.zoomIP")}function zoomtot(){alert("zoomtot foi depreciado. Utilize i3GEO.navega.zoomExt")}function panFixo(direcao,w,h,escala){alert("panFixo foi depreciado. Utilize i3GEO.navega.panFixo")}function protocolo(){alert("protocolo foi depreciado utilize i3GEO.util");return(i3GEO.util.protocolo())}function borra(){}function pegaPosicaoObjeto(obj){alert("pegaPosicaoObjeto foi depreciado utilize i3GEO.util");return(i3GEO.util.pegaPosicaoObjeto(obj))}function i3geo_pegaElementoPai(e){alert("i3geo_pegaElementoPai foi depreciado utilize i3GEO.util");return(i3GEO.util.pegaElementoPai(e))}function convddtela(vx,vy,docmapa){alert("convddtela foi depreciado utilize i3GEO.calculo");return(i3GEO.calculo.dd2tela(vx,vy,docmapa,i3GEO.parametros.extent,i3GEO.parametros.pixelsize))}function convdmsf(x,y){alert("convdmsf foi depreciado utilize i3GEO.calculo");return(i3GEO.calculo.dd2dms(x,y))}function calcddf(xfign,yfign,g_celula,imgext){alert("calcddf foi depreciado utilize i3GEO.calculo");return(i3GEO.calculo.tela2dd(xfign,yfign,g_celula,imgext))}function movecursor(){if($i("obj")){if($i("openlayers")||$i("flamingo")){$i("obj").style.display="none"}else{var obje=$i("obj").style;if($i("img")){eval("obje."+g_tipotop+"= objposicaocursor.telay + 9 + g_postpx");eval("obje."+g_tipoleft+"= objposicaocursor.telax + 9 + g_postpx")}else{eval("obje."+g_tipotop+"= objposicaocursor.telay - 15 + g_postpx");eval("obje."+g_tipoleft+"= objposicaocursor.telax + 15 + g_postpx")}}}if($i("box1")){var bx=$i("box1");if(bx.style.visibility!="visible"){bx.style.left=objposicaocursor.telax+g_postpx;bx.style.top=objposicaocursor.telay+g_postpx}}}function pegaCoordenadaUTM(){alert("pegaCoordenadaUTM foi depreciado utilize i3GEO.gadgets");i3GEO.gadgets.mostraCoordenadasUTM(g_locaplic,"mostraUTM")}function ativaLocalizarxy(iddiv){alert("ativaLocalizarxy foi depreciado utilize i3GEO.gadgets");i3GEO.gadgets.mostraCoordenadasGEO(iddiv)}function ativaEscalaNumerica(iddiv){alert("ativaEscalaNumerica foi depreciado utilize i3GEO.gadgets");i3GEO.gadgets.mostraEscalaNumerica(iddiv)}function ativaBuscaRapida(iddiv){alert("ativaBuscaRapida foi depreciado utilize i3GEO.gadgets");i3GEO.gadgets.mostraBuscaRapida(iddiv)}function buscaRapida(){i3geo_buscarapida()}function criaboxg(){i3GEO.util.criaBox();i3GEO.util.criaPin();alert("criaboxg foi depreciado utilize i3GEO.util")}function initJanelaZoom(qual){i3GEO.barraDeBotoes.reativa(qual-1)}function sobeferramentas(){}function desceferramentas(){}function mostraRosaDosVentos(){alert("mostraRosaDosVentos foi depreciado utilize i3GEO.navega");i3GEO.navega.mostraRosaDosVentos()}function mudaVisual(visual){alert("visual foi depreciado utilize i3GEO.visual");i3GEO.gadgets.visual.troca(visual)}function visual(iddiv){alert("visual foi depreciado utilize i3GEO.visual");i3GEO.gadgets.visual.inicia(iddiv)}function arvoreclick(itemID){if(itemID.search("tema")==0){if($i(itemID).checked==true){$i(itemID).checked=false}else{$i(itemID).checked=true}}}function pegaTema(celula){var nos=celula.parentNode.childNodes;var tempi=nos.length;for(var no=0;no<tempi;no++){if(nos[no].type=="checkbox"){return nos[no].value}}}function gerafilmef(qs){}function gravaQuadro(variavel,valor){i3GEO.gadgets.quadros.grava(variavel,valor)}function avancaQuadro(){i3GEO.gadgets.quadros.avanca()}function zoomAnterior(){}function zoomProximo(){}function opcoesQuadros(){}function filmef(o){}function rebobinaf(){}function filmezf(o){}function quadrofilme(){}function filmeanimaf(){}function filmeanimarodaf(janima){}function pegaimagens(){}function calculaArea(pontos,pixel){return(i3GEO.calculo.area(pontos,pixel))}function calculadistancia(lga,lta,lgb,ltb){return(i3GEO.calculo.distancia(lga,lta,lgb,ltb))}function initJanelaRef(){i3GEO.maparef.inicia()}function ajaxReferencia(retorno){i3GEO.maparef.processaImagem(retorno)}function clicouRef(){}function movimentoRef(obj){}function mostraTip(retorno){if(!$i("tip")){var novoel=document.createElement("div");novoel.id="tip";novoel.style.position="absolute";novoel.style.zIndex=5000;if(navm){novoel.style.filter="alpha(opacity=90)"}document.body.appendChild(novoel)}var i=$i("i3geo_rosa");if(i)i.style.display="none";var mostra=false;var retorno=retorno.data;if((retorno!="erro")&&(retorno!=undefined)){if($i("img")){$i("img").title=""}if(retorno!=""){var res="<div id='cabecatip' style='text-align:left;background-color:rgb(240,240,240)'><span style='color:navy;cursor:pointer;text-align:left' onclick='javascript:objmapaparado=\"cancela\"'>parar&nbsp;&nbsp;</span>";res+="<span style='color:navy;cursor:pointer;text-align:left' onclick='javascript:i3GEO.janela.TIPS.push($i(\"tip\"));$i(\"tip\").id=\"\";$i(\"cabecatip\").innerHTML =\"\";$i(\"cabecatip\").id =\"\"' >fixar</span></div>";var temas=retorno.split("!");var tema=temas.length-1;if(tema>=0){do{var titulo=temas[tema].split("@");if(g_tipotip=="completo"){res+="<span style='text-align:left;font-size:9pt'><b>"+titulo[0]+"</b></span><br>"}var ocorrencias=titulo[1].split("*");var ocorrencia=ocorrencias.length-1;if(ocorrencia>=0){do{if(ocorrencias[ocorrencia]!=""){var pares=ocorrencias[ocorrencia].split("##");var paresi=pares.length;for(var par=0;par<paresi;par++){var valores=pares[par].split("#");if(g_tipotip=="completo"){res=res+"<span class='tiptexto' style='text-align:left;font-size:9pt'>"+valores[0]+" <i>"+valores[1]+"</i></span><br>";var mostra=true}else{res=res+"<span class='tiptexto' style='text-align:left;font-size:9pt'><i>"+valores[1]+"</i></span><br>";var mostra=true}}}}while(ocorrencia--)}}while(tema--)}if(!mostra){$i("tip").style.display="none";return}if($i("janelaMen")){$i("janelaMenTexto").innerHTML=res}else{var i=$i("tip");i.innerHTML="<table style='text-align:left'><tr><td style='text-align:left'>"+res+"</td></tr></table>";ist=i.style;ist.top=objposicaocursor.telay-10;ist.left=objposicaocursor.telax-20;ist.display="block"}}}}function trataErro(){i3GEO.janela.fechaAguarde()}function mostraguiaf(guia){i3GEO.guias.mostra(guia)}function ativaGuias(){for(var g=0;g<12;g++){if($i("guia"+g))var gpai=$i("guia"+g).parentNode}if(gpai){gpai.id="guiasYUI";gpai.className="yui-navset";var ins='<ul class="yui-nav" style="border-width:0pt 0pt 0px;border-color:rgb(240,240,240);border-bottom-color:white;">';try{if($i(objmapa.guiaTemas)){$i(objmapa.guiaTemas).innerHTML=$trad("g1")}if($i(objmapa.guiaMenu)){$i(objmapa.guiaMenu).innerHTML=$trad("g2")}if($i(objmapa.guiaLegenda)){$i(objmapa.guiaLegenda).innerHTML=$trad("g3")}if($i(objmapa.guiaListaMapas)){$i(objmapa.guiaListaMapas).innerHTML=$trad("g4")}}catch(e){};for(var g=0;g<12;g++){if($i("guia"+g)){var tituloguia=$i("guia"+g).innerHTML;var re=new RegExp("&nbsp;","g");var tituloguia=tituloguia.replace(re,'');ins+='<li><a href="#"><em><div id="guia'+g+'" >'+tituloguia+'</div></em></a></li>'}}ins+="</ul>";gpai.innerHTML=ins;for(var g=0;g<12;g++){if($i("guia"+g)){eval('$i("guia'+g+'").onclick = function(){g_guiaativa = "guia'+g+'";mostraguiaf('+g+');}');$i("guia"+g).onmouseover=function(){var bcg=this.parentNode.parentNode.style;var cor=bcg.background.split(" ")[0];if(cor!="white")bcg.background="#bfdaff"};$i("guia"+g).onmouseout=function(){var bcg=this.parentNode.parentNode.style;var cor=bcg.background.split(" ")[0];if(cor!="white")bcg.background="transparent"};if($i("guia"+g+"obj")){$i("guia"+g+"obj").style.overflow="auto";$i("guia"+g+"obj").style.height=i3GEO.parametros.h}}}}if($i(objmapa.guiaTemas)){$i(objmapa.guiaTemas).onclick=function(){g_guiaativa=objmapa.guiaTemas;mostraguiaf(1)}}if($i(objmapa.guiaMenu)){$i(objmapa.guiaMenu).onclick=function(){g_guiaativa=objmapa.guiaMenu;mostraguiaf(2);if(!$i("arvoreAdicionaTema")){var ondeArvore=objmapa.guiaMenu+"obj"}else{var ondeArvore="arvoreAdicionaTema"}if(document.getElementById("outrasOpcoesAdiciona")){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.idonde="outrasOpcoesAdiciona";i3GEO.arvoreDeTemas.OPCOESADICIONAIS.incluiArvore=false}i3GEO.arvoreDeTemas.cria(i3GEO.configura.sid,i3GEO.configura.locaplic,ondeArvore)}}if($i(objmapa.guiaLegenda)){$i(objmapa.guiaLegenda).onclick=function(){g_guiaativa=objmapa.guiaLegenda;mostraguiaf(4);objmapa.atualizaLegendaHTML()}}if($i(objmapa.guiaListaMapas)){$i(objmapa.guiaListaMapas).onclick=function(){g_guiaativa=objmapa.guiaListaMapas;mostraguiaf(5);if($i("banners")){$i("banners").innerHTML==$trad("o1");var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pegaMapas&g_sid="+i3GEO.configura.sid;cpObj.call(p,"pegaMapas",pegaMapas)}else{alert("id banners nao encontrado")}}}}function docaguias(){i3GEO.guias.libera()}function autoRedesenho(opcao){}function movePan(){alert("movePan foi depreciado")}function selecao(){}function cliqueSelecao(){}function zoomboxf(tipo){}function i3geo_comboGruposMenu(funcaoOnchange,idDestino,idCombo,largura,altura){}function i3geo_comboSubGruposMenu(funcaoOnchange,idDestino,idCombo,idGrupo,largura,altura){}function i3geo_comboTemasMenu(funcaoOnchange,idDestino,idCombo,idGrupo,idSubGrupo,largura,altura){}function remapaf(){i3GEO.atualiza("")}function limpacontainerf(){}function inseremarcaf(xi,yi,funcaoOnclick,container){i3GEO.utl.insereMarca.cria(xi,yi,funcaoOnclick,container)}function moveSelecaoPoli(){}function cliqueSelecaoPoli(){}function capturaposicao(e){alert("capturaposicao foi depreciado utilize i3GEO.eventos")}function ativaEntorno(){}function geraURLentorno(){}function ajustaEntorno(){}function lenteDeAumento(){alert("lenteDeAumento foi depreciado utilize i3GEO.navega.lente.ativaDesativa()")}function ajaxabrelente(retorno){}function movelentef(){}function destacaTema(tema){alert("destacaTema foi depreciado utilize i3GEO.navega")}function ajaxdestaca(){alert("ajaxdestaca foi depreciado, utilize i3GEO.navega")}function ativaClicks(docMapa){}function incluir(path){i3GEO.util.adicionaSHP(path)}function pontosdist(){this.xpt=new Array();this.ypt=new Array();this.dist=new Array();this.xtela=new Array();this.ytela=new Array();this.ximg=new Array();this.yimg=new Array();this.linhas=new Array()}function mudaiconf(i){i3GEO.barraDeBotoes.ativaIcone(i)}function calcposf(){i3GEO.mapa.ajustaPosicao()}function recuperamapa(){}function criaContainerRichdraw(){alert("criaContainerRichdraw foi depreciado utilize i3GEO.desenho")}function desenhoRichdraw(tipo,objeto,n){}function ajaxhttp(){try{var objhttp1=new XMLHttpRequest()}catch(ee){try{var objhttp1=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{var objhttp1=new ActiveXObject("Microsoft.XMLHTTP")}catch(E){var objhttp1=false}}}return(objhttp1)}function ajaxexecAS(programa,funcao){var ohttp=ajaxhttp();ohttp.open("POST",programa,true);var retorno="";ohttp.onreadystatechange=function(){if(ohttp.readyState==4){retorno=ohttp.responseText;var reg=/Warning/gi;if(retorno.search(reg)!=-1){alert("OOps! Ocorreu um erro\n"+retorno);return}var reg=/erro/gi;if(retorno.search(reg)!=-1){alert("OOps! Ocorreu um erro\n"+retorno);return}if(funcao!="volta"){eval(funcao+'("'+retorno+'")')}}};ohttp.send(null)}function ajaxexec(programa,funcao){var objhttp=ajaxhttp();objhttp.open('GET',programa,false);objhttp.send(null);if(objhttp.status==200){if(funcao!="volta"){eval(funcao+'("'+objhttp.responseText+'")')}else{return objhttp.responseText}}}function ajaxLegendaHTML(retorno){}function ajaxLegendaImagem(retorno){}function mede(){}function cliqueMede(){}function moveMede(){}function area(){}function cliqueArea(){}function moveArea(){}function textofid(){}function inserexy(){}function cliqueInseretoponimo(){}function cliqueInserexy(){}function inseregrafico(){}function cliqueInseregrafico(){}function ativaHistoricoZoom(iddiv){}function ajaxhttp(){return i3GEO.util.ajaxhttp()}function ajaxCorpoMapa(retorno){i3GEO.mapa.corpo.veirifca(retorno)}function ajaxredesenha(retorno){i3GEO.atualiza(retorno)}function ajaxIniciaParametros(retorno){i3GEO.atualiza(retorno)}function montaMenuSuspenso(iddiv){i3GEO.gadgets.PARAMETROS.mostraMenuSuspenso.idhtml=iddiv;i3GEO.gadgets.mostraMenuSuspenso()}