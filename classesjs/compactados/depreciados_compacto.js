function i3GEOmantemCompatibilidade(){try{if(g_opcoesTemas=="nao"){i3GEO.arvoreDeCamadas.OPCOESTEMAS=false}}catch(e){};if($i("arvoreAdicionaTema")||$i("outrasOpcoesAdiciona")){if(!$i("arvoreAdicionaTema")){i3GEO.arvoreDeCamadas.IDHTML=objmapa.guiaMenu+"obj"}else{i3GEO.arvoreDeCamadas.IDHTML="arvoreAdicionaTema"}}try{if(g_uploaddbf=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.uploaddbf=false}}catch(e){};try{if(g_uploadlocal=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.uploadlocal=false}}catch(e){};try{if(g_downloadbase=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.downloadbase=false}}catch(e){};try{if(g_conectarwms=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.conectarwms=false}}catch(e){};try{if(g_conectargeorss=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.conectargeorss=false}}catch(e){};try{if(g_nuvemTags=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.nuvemTags=false}}catch(e){};try{if(g_kml=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.kml=false}}catch(e){};try{if(g_qrcode=="nao"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.qrcode=false}}catch(e){};try{if(g_tipoacao!=""){i3GEO.barraDeBotoes.BOTAOPADRAO=g_tipoacao}}catch(e){}try{if(g_listaPropriedades){i3GEO.configura.listaDePropriedadesDoMapa=g_listaPropriedades}}catch(e){};try{if(g_tempo_aplicar){i3GEO.configura.tempoAplicar=g_tempo_aplicar}}catch(e){};try{if(g_janelaMen=="nao"){i3GEO.configura.iniciaJanelaMensagens=false}}catch(e){};try{if(g_locaplic){i3GEO.configura.locaplic=g_locaplic}}catch(e){};try{if(g_tempotip){i3GEO.configura.tempoMouseParado=g_tempotip}}catch(e){};try{if(g_mostraRosa){i3GEO.configura.mostraRosaDosVentos=g_mostraRosa}}catch(e){};try{if(g_visual){i3GEO.configura.visual=g_visual}}catch(e){};try{if(g_mapaRefDisplay){i3GEO.configura.mapaRefDisplay=g_mapaRefDisplay}}catch(e){};try{if(g_docaguias){i3GEO.configura.liberaGUias=g_docaguias}}catch(e){};if(window.location.href.split("?")[1]){g_sid=window.location.href.split("?")[1];if(g_sid.split("#")[0]){g_sid=g_sid.split("#")[0]}}else{g_sid=""}i3GEO.configura.sid=g_sid;try{i3GEO.guias.ATUAL=g_guiaativa}catch(e){}try{i3GEO.navega.autoRedesenho.INTERVALO=g_autoRedesenho}catch(e){}try{i3GEO.eventos.NAVEGAMAPA=g_funcoesNavegaMapaDefault}catch(e){}try{i3GEO.eventos.MOUSEMOVE=g_funcoesMousemoveMapaDefault}catch(e){}try{i3GEO.eventos.MOUSECLIQUE=g_funcoesClickMapaDefault}catch(e){}}if(typeof(i3GEO)=='undefined'){i3GEO=new Array()}function iCookie(nome,valor){i3GEO.util.insereCookie(nome,valor)}function pCookie(nome){i3GEO.util.pegaCookie(nome)}function trocalingua(l){i3GEO.idioma.trocaIdioma(l)}function initJanelaMen(){i3GEO.ajuda.abreJanela()}function pegalistademenus(retorno){alert("Funcao pegalistademenus foi depreciado. Utilize i3GEO.arvoreDeTemas")}function wdocaf(wlargura,waltura,wsrc,nx,ny,texto){var janela=i3GEO.janela.cria(wlargura,waltura,wsrc,nx,ny,texto)}function redimwdocaf(w,h){i3GEO.janela.alteraTamanho(w,h)}function wdocaf2(wlargura,waltura,wsrc,nx,ny,texto){var id=YAHOO.util.Dom.generateId();i3GEO.janela.cria(wlargura,waltura,wsrc,nx,ny,texto,id,true)}function wdocafechaf(odoca){alert("wdocafechaf foi depreciado")}function mostradicasf(objeto,dica,hlpt){i3GEO.ajuda.mostraJanela(dica)}function mudaboxnf(tipo,obj,nomeFuncao){alert("mudaboxnf foi depreciado")}function procurartemas(texto){}function expandeTema(itemID){var tema=itemID.split("legenda");if(tema.length==2){g_arvoreClick=itemID;tema=tema[1];var p=g_locaplic+"/classesphp/mapa_controle.php?funcao=criaLegendaHTML&template=legenda2.htm&tema="+tema+"&g_sid="+g_sid;cpObj.call(p,"criaLegenda",expandeLegendaVer)}}function pegavalSistemas(sis){alert("Funcao pegavalSistemas foi depreciada - veja i3GEO.arvoreDeTemas")}function processevent1(exy1){}function removeAcentos(palavra){return(i3GEO.util.removeAcentos(palavra))}function ativaMensagemBanner(){alert("veja i3GEO.ajuda")}function mensagemBanner(){}function mensagemf(m){try{if(!$i("mensagem")){var novoel=document.createElement("div");novoel.id='mensagem';novoel.innerHTML='<table width="50" style="border: 1px solid #000000;"> <tr> <td onclick="mensagemf()" style="text-align:left;cursor:pointer" class="tdclara"> <img src="'+g_locaplic+'/imagens/excluir.png" /> </td> <td style="text-align:left" class="tdclara"> <input style="text-align:left" class="textocb" type="text" id="mensagemt" size="70" value="" /> </td></tr> </table>';if($i("i3geo")){$i("i3geo").appendChild(novoel)}else{document.body.appendChild(novoel)}}if(m==null){$i("mensagem").style.visibility="hidden"}else{$i("mensagemt").value=m;$i("mensagem").style.visibility="visible"}var pos=pegaPosicaoObjeto($i("img"));pos[1]=pos[1]+parseInt($i("img").style.height)-22;eval('document.getElementById("mensagem").style.'+g_tipoleft+' = pos[0] + g_postpx');eval('document.getElementById("mensagem").style.'+g_tipotop+' = pos[1] + g_postpx')}catch(e){alert("Impossivel criar mensagem."+e)}}function aguarde(){this.abre=function(aguardeId,texto){i3GEO.janela.abreAguarde(aguardeId,texto)};this.fecha=function(aguardeId){i3GEO.janela.fechaAguarde(aguardeId)}}function zoomiauto(){i3GEO.navega.zoomin(g_locaplic,g_sid)}function zoomoauto(){i3GEO.navega.zoomout(g_locaplic,g_sid)}function convdmsddf(cd,cm,cs){return(i3GEO.util.dsm2dd(cd,cm,cs))}function zoomPonto(){alert("utilize i3GEO.navega.zoomponto")}function zoomIP(){alert("zoomIP foi depreciado. Utilize i3GEO.navega.zoomIP")}function zoomtot(){alert("zoomtot foi depreciado. Utilize i3GEO.navega.zoomExt")}function panFixo(direcao,w,h,escala){alert("panFixo foi depreciado. Utilize i3GEO.navega.panFixo")}function protocolo(){return(i3GEO.util.protocolo())}function borra(){}function pegaPosicaoObjeto(obj){return(i3GEO.util.pegaPosicaoObjeto(obj))}function i3geo_pegaElementoPai(e){return(i3GEO.util.pegaElementoPai(e))}function convddtela(vx,vy,docmapa){return(i3GEO.util.dd2tela(vx,vy,docmapa,objmapa.extent,objmapa.cellsize))}function convdmsf(x,y){return(i3GEO.calculo.dd2dms(x,y))}function calcddf(xfign,yfign,g_celula,imgext){return(i3GEO.util.tela2dd(xfign,yfign,g_celula,imgext))}function movecursor(){if($i("obj")){if($i("openlayers")||$i("flamingo")){$i("obj").style.display="none"}else{var obje=$i("obj").style;if($i("img")){eval("obje."+g_tipotop+"= objposicaocursor.telay + 9 + g_postpx");eval("obje."+g_tipoleft+"= objposicaocursor.telax + 9 + g_postpx")}else{eval("obje."+g_tipotop+"= objposicaocursor.telay - 15 + g_postpx");eval("obje."+g_tipoleft+"= objposicaocursor.telax + 15 + g_postpx")}}}if($i("box1")){var bx=$i("box1");if(bx.style.visibility!="visible"){bx.style.left=objposicaocursor.telax+g_postpx;bx.style.top=objposicaocursor.telay+g_postpx}}}function pegaCoordenadaUTM(){i3GEO.gadgets.mostraCoordenadasUTM(g_locaplic,"mostraUTM")}function ativaLocalizarxy(iddiv){i3GEO.gadgets.mostraCoordenadasGEO(iddiv)}function ativaEscalaNumerica(iddiv){i3GEO.gadgets.mostraEscalaNumerica(iddiv)}function ativaBuscaRapida(iddiv){i3GEO.gadgets.mostraBuscaRapida(iddiv)}function buscaRapida(){i3geo_buscarapida()}function criaboxg(){i3GEO.util.criaBox();i3GEO.util.criaPin()}function initJanelaZoom(qual){alert("initJanelaZoom foi depreciado. Utilize i3GEO.barraDeBotoes")}function sobeferramentas(){}function desceferramentas(){}function mostraRosaDosVentos(){i3GEO.navega.mostraRosaDosVentos()}function mudaVisual(visual){i3GEO.gadgets.visual.troca(visual)}function visual(iddiv){i3GEO.gadgets.visual.inicia(iddiv)}function arvoreclick(itemID){if(itemID.search("tema")==0){if($i(itemID).checked==true){$i(itemID).checked=false}else{$i(itemID).checked=true}}}function pegaTema(celula){var nos=celula.parentNode.childNodes;var tempi=nos.length;for(var no=0;no<tempi;no++){if(nos[no].type=="checkbox"){return nos[no].value}}}function gerafilmef(qs){}function gravaQuadro(variavel,valor){i3GEO.gadgets.quadros.grava(variavel,valor)}function avancaQuadro(){i3GEO.gadgets.quadros.avanca()}function zoomAnterior(){}function zoomProximo(){}function opcoesQuadros(){}function filmef(o){}function rebobinaf(){}function filmezf(o){}function quadrofilme(){}function filmeanimaf(){}function filmeanimarodaf(janima){}function pegaimagens(){}function calculaArea(pontos,pixel){return(i3GEO.calculo.area(pontos,pixel))}function calculadistancia(lga,lta,lgb,ltb){return(i3GEO.calculo.distancia(lga,lta,lgb,ltb))}function initJanelaRef(){i3GEO.maparef.inicia()}function ajaxReferencia(retorno){i3GEO.maparef.processaImagem(retorno)}function clicouRef(){}function movimentoRef(obj){}function mostraTip(retorno){if(!$i("tip")){var novoel=document.createElement("div");novoel.id="tip";novoel.style.position="absolute";novoel.style.zIndex=5000;if(navm){novoel.style.filter="alpha(opacity=90)"}document.body.appendChild(novoel)}var i=$i("i3geo_rosa");if(i)i.style.display="none";var mostra=false;var retorno=retorno.data;if((retorno!="erro")&&(retorno!=undefined)){if($i("img")){$i("img").title=""}if(retorno!=""){var res="<div id='cabecatip' style='text-align:left;background-color:rgb(240,240,240)'><span style='color:navy;cursor:pointer;text-align:left' onclick='javascript:objmapa.parado=\"cancela\"'>parar&nbsp;&nbsp;</span>";res+="<span style='color:navy;cursor:pointer;text-align:left' onclick='javascript:objmapa.objtips.push($i(\"tip\"));$i(\"tip\").id=\"\";$i(\"cabecatip\").innerHTML =\"\";$i(\"cabecatip\").id =\"\"' >fixar</span></div>";var temas=retorno.split("!");var tema=temas.length-1;if(tema>=0){do{var titulo=temas[tema].split("@");if(g_tipotip=="completo"){res+="<span style='text-align:left;font-size:9pt'><b>"+titulo[0]+"</b></span><br>"}var ocorrencias=titulo[1].split("*");var ocorrencia=ocorrencias.length-1;if(ocorrencia>=0){do{if(ocorrencias[ocorrencia]!=""){var pares=ocorrencias[ocorrencia].split("##");var paresi=pares.length;for(var par=0;par<paresi;par++){var valores=pares[par].split("#");if(g_tipotip=="completo"){res=res+"<span class='tiptexto' style='text-align:left;font-size:9pt'>"+valores[0]+" <i>"+valores[1]+"</i></span><br>";var mostra=true}else{res=res+"<span class='tiptexto' style='text-align:left;font-size:9pt'><i>"+valores[1]+"</i></span><br>";var mostra=true}}}}while(ocorrencia--)}}while(tema--)}if(!mostra){$i("tip").style.display="none";return}if($i("janelaMen")){$i("janelaMenTexto").innerHTML=res}else{var i=$i("tip");i.innerHTML="<table style='text-align:left'><tr><td style='text-align:left'>"+res+"</td></tr></table>";ist=i.style;ist.top=objposicaocursor.telay-10;ist.left=objposicaocursor.telax-20;ist.display="block"}}}}function trataErro(){i3GEO.janelas.fechaAguarde()}function mostraguiaf(guia){if($i("guia"+guia)){var fs=[1,2,3,4,5,6,7,8,9,10,11,12];for(var j=0;j<10;j++){if($i("guia"+fs[j])){jj=fs[j];if($i("guia"+jj+"obj")){$i("guia"+jj+"obj").style.display="none"}$i("guia"+fs[j]).parentNode.parentNode.style.background="transparent"}}if($i("guia"+guia+"obj")){$i("guia"+guia+"obj").style.display="block"}else{alert("O objeto guia"+guia+"obj nao existe.")}$i("guia"+guia).parentNode.parentNode.style.background="white"}}function ativaGuias(){YAHOO.log("ativaGuias","i3geo");for(var g=0;g<12;g++){if($i("guia"+g))var gpai=$i("guia"+g).parentNode}if(gpai){gpai.id="guiasYUI";gpai.className="yui-navset";var ins='<ul class="yui-nav" style="border-width:0pt 0pt 0px;border-color:rgb(240,240,240);border-bottom-color:white;">';if($i(objmapa.guiaTemas)){$i(objmapa.guiaTemas).innerHTML=$trad("g1")}if($i(objmapa.guiaMenu)){$i(objmapa.guiaMenu).innerHTML=$trad("g2")}if($i(objmapa.guiaLegenda)){$i(objmapa.guiaLegenda).innerHTML=$trad("g3")}if($i(objmapa.guiaListaMapas)){$i(objmapa.guiaListaMapas).innerHTML=$trad("g4")}for(var g=0;g<12;g++){if($i("guia"+g)){var tituloguia=$i("guia"+g).innerHTML;var re=new RegExp("&nbsp;","g");var tituloguia=tituloguia.replace(re,'');ins+='<li><a href="#"><em><div id="guia'+g+'" >'+tituloguia+'</div></em></a></li>'}}ins+="</ul>";gpai.innerHTML=ins;for(var g=0;g<12;g++){if($i("guia"+g)){eval('$i("guia'+g+'").onclick = function(){g_guiaativa = "guia'+g+'";mostraguiaf('+g+');}');$i("guia"+g).onmouseover=function(){var bcg=this.parentNode.parentNode.style;var cor=bcg.background.split(" ")[0];if(cor!="white")bcg.background="#bfdaff"};$i("guia"+g).onmouseout=function(){var bcg=this.parentNode.parentNode.style;var cor=bcg.background.split(" ")[0];if(cor!="white")bcg.background="transparent"};if($i("guia"+g+"obj")){$i("guia"+g+"obj").style.overflow="auto";$i("guia"+g+"obj").style.height=objmapa.h}}}}if($i(objmapa.guiaTemas)){$i(objmapa.guiaTemas).onclick=function(){g_guiaativa=objmapa.guiaTemas;mostraguiaf(1)}}if($i(objmapa.guiaMenu)){$i(objmapa.guiaMenu).onclick=function(){g_guiaativa=objmapa.guiaMenu;mostraguiaf(2);if(!$i("arvoreAdicionaTema")){var ondeArvore=objmapa.guiaMenu+"obj"}else{var ondeArvore="arvoreAdicionaTema"}if(document.getElementById("outrasOpcoesAdiciona")){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.idonde="outrasOpcoesAdiciona";i3GEO.arvoreDeTemas.OPCOESADICIONAIS.incluiArvore=false}i3GEO.arvoreDeTemas.cria(i3GEO.configura.sid,i3GEO.configura.locaplic,ondeArvore)}}if($i(objmapa.guiaLegenda)){$i(objmapa.guiaLegenda).onclick=function(){g_guiaativa=objmapa.guiaLegenda;mostraguiaf(4);objmapa.atualizaLegendaHTML()}}if($i(objmapa.guiaListaMapas)){$i(objmapa.guiaListaMapas).onclick=function(){g_guiaativa=objmapa.guiaListaMapas;mostraguiaf(5);if($i("banners")){$i("banners").innerHTML==$trad("o1");var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pegaMapas&g_sid="+i3GEO.configura.sid;cpObj.call(p,"pegaMapas",pegaMapas)}else{alert("id banners nao encontrado")}}}YAHOO.log("Fim ativaGuias","i3geo")}function docaguias(){i3GEO.guias.libera()}function autoRedesenho(opcao){}