var i3GEOF=[];var i3GEOadmin=[];if(typeof YAHOO!="undefined"){YAHOO.namespace("i3GEO")}var i3GEO={tamanhodoc:[],parametros:{mapexten:"",mapscale:"",mapres:"",pixelsize:"",mapfile:"",cgi:"",extentTotal:"",mapimagem:"",geoip:"",listavisual:"",utilizacgi:"",versaoms:"",versaomscompleta:"",mensagens:"",w:"",h:"",locsistemas:"",locidentifica:"",r:"",locmapas:"",celularef:"",kmlurl:"",mensageminicia:"",interfacePadrao:"openlayers.htm",embedLegenda:"nao",autenticadoopenid:"nao",cordefundo:"",copyright:"",editor:"nao"},scrollerWidth:"",finaliza:"",finalizaAPI:"",temaAtivo:"",contadorAtualiza:0,cria:function(){if(i3GEO.configura.ajustaDocType===true){i3GEO.util.ajustaDocType()}var tamanho,temp;temp=window.location.href.split("?");if(temp[1]){temp=temp[1].split("&");if(temp[0]&&temp[0]!=""){i3GEO.configura.sid=temp[0];if(i3GEO.configura.sid.split("#")[0]){i3GEO.configura.sid=i3GEO.configura.sid.split("#")[0]}}}else{i3GEO.configura.sid=""}if(i3GEO.configura.sid==='undefined'){i3GEO.configura.sid=""}i3GEO.mapa.aplicaPreferencias();if(i3GEO.Interface.ALTTABLET!=""){if(i3GEO.util.detectaMobile()){return}}if(!i3GEO.configura.locaplic||i3GEO.configura.locaplic===""){i3GEO.util.localizai3GEO()}tamanho=i3GEO.calculaTamanho();i3GEO.Interface.cria(tamanho[0],tamanho[1])},inicia:function(retorno){i3GEO.eventos.cliquePerm.ativoinicial=i3GEO.eventos.cliquePerm.ativo;var montaMapa,mashup,tamanho,temp;i3GEO.mapa.aplicaPreferencias();montaMapa=function(retorno){try{var temp,nomecookie="i3geoOLUltimaExtensao",preferencias="";if(retorno.bloqueado){alert(retorno.bloqueado);return}if(retorno===""){alert("Ocorreu um erro no mapa - i3GEO.inicia.montaMapa");retorno={data:{erro:"erro"}}}if(retorno.data.erro){document.body.style.backgroundColor="white";document.body.innerHTML="<br>Para abrir o i3Geo utilize o link:<br><a href="+i3GEO.configura.locaplic+"/ms_criamapa.php >"+i3GEO.configura.locaplic+"/ms_criamapa.php</a>";return("linkquebrado")}else{if(retorno.data.variaveis){i3GEO.parametros=retorno.data.variaveis;i3GEO.parametros.mapscale=i3GEO.parametros.mapscale*1;i3GEO.parametros.mapres=i3GEO.parametros.mapres*1;i3GEO.parametros.pixelsize=i3GEO.parametros.pixelsize*1;i3GEO.parametros.w=i3GEO.parametros.w*1;i3GEO.parametros.h=i3GEO.parametros.h*1;if(retorno.data.customizacoesinit){preferencias=YAHOO.lang.JSON.parse(retorno.data.customizacoesinit);temp=i3GEO.util.base64decode(preferencias.preferenciasbase64);i3GEO.mapa.aplicaPreferencias(temp)}if(i3GEO.configura.guardaExtensao===true){if(i3GEO.Interface.openlayers.googleLike===true){nomecookie="i3geoUltima_ExtensaoOSM"}temp=i3GEO.util.pegaCookie(nomecookie);if(temp&&temp!=""){temp=temp.replace(/[\+]/g," ");i3GEO.parametros.mapexten=temp}i3GEO.eventos.NAVEGAMAPA.push(function(){i3GEO.util.insereCookie(nomecookie,i3GEO.parametros.mapexten)})}if(i3GEO.parametros.logado==="nao"){i3GEO.login.anulaCookie()}i3GEO.arvoreDeCamadas.registaCamadas(retorno.data.temas);if(retorno.data.variaveis.navegacaoDir.toLowerCase()==="sim"){i3GEO.arvoreDeTemas.OPCOESADICIONAIS.navegacaoDir=true}temp=0;if($i("contemFerramentas")){temp=temp+parseInt($i("contemFerramentas").style.width,10)}if($i("ferramentas")){temp=temp+parseInt($i("ferramentas").style.width,10)}if($i("mst")){$i("mst").style.width=i3GEO.parametros.w+temp+"px"}i3GEO.Interface.inicia();if(retorno.data.customizacoesinit){if(preferencias.geometriasbase64&&preferencias.geometriasbase64!=""){temp=i3GEO.util.base64decode(preferencias.geometriasbase64);i3GEO.mapa.desCompactaLayerGrafico(temp)}if(preferencias.graficosbase64&&preferencias.graficosbase64!=""){i3GEO.mapa.restauraGraficos(preferencias.graficosbase64)}if(preferencias.tabelasbase64&&preferencias.tabelasbase64!=""){i3GEO.mapa.restauraTabelas(preferencias.tabelasbase64)}}}else{alert("Erro. Impossivel criar o mapa "+retorno.data);return}if($i("ajuda")){i3GEO.ajuda.DIVAJUDA="ajuda"}if(i3GEO.configura.iniciaJanelaMensagens===true){i3GEO.ajuda.abreJanela()}if(i3GEO.configura.liberaGuias.toLowerCase()==="sim"){i3GEO.guias.libera()}}i3GEO.aposIniciar()}catch(e){}};if(!$i("i3geo")){document.body.id="i3geo"}temp=$i("i3geo");temp.className="yui-skin-sam";if(document.body.id==="i3geo"&&temp.style&&!temp.style.overflow&&i3GEO.Interface.ATUAL==="openlayers"){temp.style.overflow="hidden"}if(i3GEO.configura.sid===""){mashup=function(retorno){if(retorno.bloqueado){alert(retorno.bloqueado);return}i3GEO.configura.sid=retorno.data;i3GEO.inicia(retorno)};i3GEO.configura.mashuppar+="&interface="+i3GEO.Interface.ATUAL;if(i3GEO.mapa.TEMASINICIAIS.length>0){i3GEO.configura.mashuppar+="&temasa="+i3GEO.mapa.TEMASINICIAIS}if(i3GEO.mapa.TEMASINICIAISLIGADOS.length>0){i3GEO.configura.mashuppar+="&layers="+i3GEO.mapa.TEMASINICIAISLIGADOS}i3GEO.php.criamapa(mashup,i3GEO.configura.mashuppar)}else{if(i3GEO.parametros.w===""||i3GEO.parametros.h===""){tamanho=i3GEO.calculaTamanho();i3GEO.parametros.w=tamanho[0];i3GEO.parametros.h=tamanho[1]}i3GEO.php.inicia(montaMapa,i3GEO.configura.embedLegenda,i3GEO.parametros.w,i3GEO.parametros.h)}i3GEO.eventos.adicionaEventos("NAVEGAMAPA",["i3GEO.janela.fechaAguarde()"])},aposIniciar:function(){if($i("mst")){$i("mst").style.visibility="visible"}if(YAHOO.lang.isFunction(i3GEO.finaliza)){i3GEO.finaliza.call()}else{if(i3GEO.finaliza!=""){eval(i3GEO.finaliza)}}if(i3GEO.guias.TIPO==="movel"){i3GEO.guias.guiaMovel.inicia()}if(i3GEO.mapa.AUTORESIZE===true){i3GEO.mapa.ativaAutoResize()}},atualiza:function(retorno){var corpoMapa,erro,mapscale,temp;if(i3GEO.contadorAtualiza>1){i3GEO.contadorAtualiza--;return}if(i3GEO.contadorAtualiza>0){i3GEO.contadorAtualiza--}i3GEO.contadorAtualiza++;corpoMapa=function(){if($i("ajaxCorpoMapa")){return}i3GEO.php.corpo(i3GEO.atualiza,i3GEO.configura.tipoimagem)};if(arguments.length===0){i3GEO.janela.fechaAguarde("ajaxCorpoMapa");corpoMapa.call();return}if(retorno===""){corpoMapa.call();return}if(!retorno.data){alert(retorno);i3GEO.mapa.recupera.inicia();return}try{if(retorno.data==="erro"){alert("Erro no mapa. Sera feita uma tentativa de recuperacao.");i3GEO.mapa.recupera.inicia();return}else if(retorno.data==="ok"||retorno.data===""){corpoMapa.call();return}}catch(e){}erro=function(){var c=confirm("Ocorreu um erro, quer tentar novamente?");if(c){corpoMapa.call()}else{i3GEO.janela.fechaAguarde()}return};if(arguments.length===0||retorno===""||retorno.data.variaveis===undefined){erro.call();return}else{if(arguments.length===0){return}i3GEO.mapa.verifica(retorno);mapscale=i3GEO.parametros.mapscale;i3GEO.atualizaParametros(retorno.data.variaveis);if(retorno.data.variaveis.erro!==""){alert(retorno.data.variaveis.erro)}temp=i3GEO.arvoreDeCamadas.converteChaveValor2normal(retorno.data.temas);try{i3GEO.arvoreDeCamadas.atualiza(temp);if(i3GEO.parametros.mapscale!==mapscale){i3GEO.arvoreDeCamadas.atualizaFarol(i3GEO.parametros.mapscale)}}catch(e){}i3GEO.arvoreDeCamadas.registaCamadas(temp);i3GEO.Interface.redesenha();if($i("mensagemt")){$i("mensagemt").value=i3GEO.parametros.mapexten}i3GEO.eventos.navegaMapa();temp=i3GEO.arvoreDeCamadas.verificaAplicaExtensao();if(temp!==""){i3GEO.tema.zoom(temp)}}},calculaTamanho:function(){var diminuix,diminuiy,menos,novow,novoh,w,h,temp,Dw,Dh;diminuix=(navm)?i3GEO.configura.diminuixM:i3GEO.configura.diminuixN;diminuiy=(navm)?i3GEO.configura.diminuiyM:i3GEO.configura.diminuiyN;menos=0;if(i3GEO.Interface.ALTTABLET===""&&DetectaMobile("DetectMobileLong")===true){menos=20;i3GEO.configura.autotamanho=true}temp=$i("contemFerramentas");if(temp&&temp.style&&temp.style.width){menos+=parseInt($i("contemFerramentas").style.width,10)}temp=$i("ferramentas");if(temp&&temp.style&&temp.style.width){menos+=parseInt($i("ferramentas").style.width,10)}if(i3GEO.configura.autotamanho===true){if(window.top===window.self){window.resizeTo(screen.availWidth,screen.availHeight);window.moveTo(0,0)}}if(i3GEO.scrollerWidth===""){i3GEO.scrollerWidth=i3GEO.util.getScrollerWidth()}i3GEO.tamanhodoc=[YAHOO.util.Dom.getViewportWidth(),YAHOO.util.Dom.getViewportHeight()];Dw=YAHOO.util.Dom.getDocumentWidth();Dh=YAHOO.util.Dom.getDocumentHeight();if(Dw>screen.availWidth){Dw=screen.availWidth}if(Dh>screen.availHeight){Dh=screen.availHeight-20}novow=Dw-i3GEO.scrollerWidth;novoh=Dh;document.body.style.width=novow+"px";document.body.style.height=novoh+"px";w=novow-menos-diminuix;h=novoh-diminuiy;temp=$i("corpoMapa");if(temp){if(temp.style){if(temp.style.width){w=parseInt(temp.style.width,10);h=parseInt(temp.style.width,10);i3GEO.parametros.w=w}if(temp.style.height){h=parseInt(temp.style.height,10);i3GEO.parametros.h=h}}}temp=$i("contemImg");if(temp){temp.style.height=h+"px";temp.style.width=w+"px"}i3GEO.parametros.w=w;i3GEO.parametros.h=h;return[w,h]},reCalculaTamanho:function(){var diminuix,diminuiy,menos,novow,novoh,w,h,temp,antigoh=i3GEO.parametros.h;diminuix=(navm)?i3GEO.configura.diminuixM:i3GEO.configura.diminuixN;diminuiy=(navm)?i3GEO.configura.diminuiyM:i3GEO.configura.diminuiyN;menos=0;if(i3GEO.Interface.ALTTABLET===""&&DetectaMobile("DetectMobileLong")===true){menos=20}temp=$i("contemFerramentas");if(temp&&temp.style&&temp.style.width){menos+=parseInt($i("contemFerramentas").style.width,10)}temp=$i("ferramentas");if(temp&&temp.style&&temp.style.width){menos+=parseInt($i("ferramentas").style.width,10)}document.body.style.width="99%";temp=i3GEO.util.tamanhoBrowser();novow=temp[0];novoh=temp[1];temp=(antigoh-(novoh-diminuiy));document.body.style.height=novoh+"px";w=novow-menos-diminuix;h=novoh-diminuiy;temp=$i(i3GEO.Interface.IDMAPA);if(temp){temp.style.height=h+"px";temp.style.width=w+"px";YAHOO.util.Event.addListener(temp,"click",YAHOO.util.Event.stopEvent);YAHOO.util.Event.addFocusListener(temp,YAHOO.util.Event.preventDefault)}temp=$i(i3GEO.Interface.IDCORPO);if(temp){temp.style.height=h+"px";temp.style.width=w+"px";YAHOO.util.Event.addListener(temp,"click",YAHOO.util.Event.stopEvent);YAHOO.util.Event.addFocusListener(temp,YAHOO.util.Event.preventDefault)}temp=$i("mst");if(temp){temp.style.width="100%"}i3GEO.parametros.w=w;i3GEO.parametros.h=h;temp=function(){switch(i3GEO.Interface.ATUAL){case"googlemaps":i3GEO.Interface.googlemaps.zoom2extent(i3GEO.parametros.mapexten);break;case"openlayers":i3GEO.Interface.openlayers.zoom2ext(i3GEO.parametros.mapexten);i3geoOL.updateSize();if(i3GEO.Interface.openlayers.OLpanzoombar){i3GEO.Interface.openlayers.OLpanzoombar.div.style.top=i3GEO.Interface.BARRADEZOOMTOP+"px";i3GEO.Interface.openlayers.OLpanzoombar.div.style.left=i3GEO.Interface.BARRADEZOOMLEFT+"px";i3GEO.Interface.openlayers.OLpanzoombar.div.style.right=i3GEO.Interface.BARRADEZOOMRIGHT+"px";if(i3GEO.Interface.BARRADEZOOMLEFT===0){i3GEO.Interface.openlayers.OLpanzoombar.div.style.left=null}if(i3GEO.Interface.BARRADEZOOMRIGHT===0){i3GEO.Interface.openlayers.OLpanzoombar.div.style.right=null}}break};if(i3GEO.guias.TIPO==="sanfona"){i3GEO.guias.ALTURACORPOGUIAS=h-(antigoh-i3GEO.guias.ALTURACORPOGUIAS)}else{i3GEO.guias.ALTURACORPOGUIAS=h}return[w,h]};i3GEO.php.mudatamanho(temp,h,w)},atualizaParametros:function(variaveis){i3GEO.parametros.mapscale=variaveis.mapscale*1;i3GEO.parametros.mapres=variaveis.mapres*1;i3GEO.parametros.pixelsize=variaveis.pixelsize*1;i3GEO.parametros.mapexten=variaveis.mapexten;i3GEO.parametros.mapimagem=variaveis.mapimagem;i3GEO.parametros.w=variaveis.w*1;i3GEO.parametros.h=variaveis.h*1;i3GEO.parametros.mappath=variaveis.mappath;i3GEO.parametros.mapurl=variaveis.mapurl;if(i3GEO.login.verificaCookieLogin()){i3GEO.parametros.editor="sim"}else{i3GEO.parametros.editor="nao"}}};