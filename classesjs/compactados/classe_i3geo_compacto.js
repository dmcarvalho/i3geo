i3GEO={parametros:{mapexten:"",mapscale:"",mapres:"",pixelsize:"",mapfile:"",cgi:"",extentTotal:"",mapimagem:"",geoip:"",listavisual:"",utilizacgi:"",versaoms:"",versaomscompleta:"",mensagens:"",w:"",h:"",locsistemas:"",locidentifica:"",r:"",locmapas:"",celularef:"",kmlurl:""},temaAtivo:"",finaliza:"",cria:function(){if(window.location.href.split("?")[1]){i3GEO.configura.sid=window.location.href.split("?")[1];g_sid=i3GEO.configura.sid;if(i3GEO.configura.sid.split("#")[0]){i3GEO.configura.sid=i3GEO.configura.sid.split("#")[0]}}else{i3GEO.configura.sid=""}g_panM="nao";try{i3GEO.configura.locaplic=g_locaplic}catch(e){g_locaplic=i3GEO.configura.locaplic};try{i3GEO.configura.diminuixM=g_diminuixM}catch(e){}try{i3GEO.configura.diminuixN=g_diminuixN}catch(e){}try{i3GEO.configura.diminuiyM=g_diminuiyM}catch(e){}try{i3GEO.configura.diminuiyN=g_diminuiyN}catch(e){}var diminuix=(navm)?i3GEO.configura.diminuixM:i3GEO.configura.diminuixN;var diminuiy=(navm)?i3GEO.configura.diminuiyM:i3GEO.configura.diminuiyN;var menos=0;if($i("contemFerramentas")){var menos=menos+parseInt($i("contemFerramentas").style.width)}if($i("ferramentas")){var menos=menos+parseInt($i("ferramentas").style.width)}var novow=parseInt(screen.availWidth)-diminuix;var novoh=parseInt(screen.availHeight)-diminuiy;if(window.top==window.self){window.resizeTo(screen.availWidth,screen.availHeight);window.moveTo(0,0)}try{if(novow<800){var novow=800;var novoh=600}}catch(e){var e=""}document.body.style.width=novow-diminuix;document.body.style.height=novoh;var w=novow-menos-diminuix;var h=novoh-diminuiy;var temp=$i("corpoMapa");if(temp){if(temp.style){if(temp.style.width){var w=parseInt(temp.style.width);var h=parseInt(temp.style.width)}if(temp.style.height){var h=parseInt(temp.style.height)}}}if($i("contemImg")){$i("contemImg").style.height=h+"px";$i("contemImg").style.width=w+"px"}i3GEO.interface.cria(w,h);i3GEO.parametros={mapexten:"",mapscale:"",mapres:"",pixelsize:"",mapfile:"",cgi:"",extentTotal:"",mapimagem:"",geoip:"",listavisual:"",utilizacgi:"",versaoms:"",versaomscompleta:"",mensagens:"",w:w,h:h,locsistemas:"",locidentifica:"",r:"",locmapas:"",extentref:"",kmlurl:""};if(w<550){var i=$i(i3GEO.gadgets.PARAMETROS.mostraQuadros.idhtml);if(i){i.style.display="none"}}},inicia:function(){if(typeof("i3GEOmantemCompatibilidade")=='function')i3GEOmantemCompatibilidade();var montaMapa=function(retorno){if(retorno==""){alert("Ocorreu um erro no mapa - montaMapa");retorno={data:{erro:"erro"}}}if(retorno.data.erro){i3GEO.janela.fechaAguarde("montaMapa");document.body.style.backgroundColor="white";document.body.innerHTML="<br>Para abrir o i3Geo utilize o link:<br><a href="+i3GEO.configura.locaplic+"/ms_criamapa.php >"+i3GEO.configura.locaplic+"/ms_criamapa.php</a>";return("linkquebrado")}else{if(retorno.data.variaveis){var tempo="";var titulo="";eval(retorno.data.variaveis);try{if(titulo!=""){top.document.title=titulo}}catch(e){var e=""}i3GEO.ajuda.mostraJanela("Tempo de desenho em segundos: "+tempo,"");i3GEO.parametros.mapexten=mapexten;i3GEO.parametros.mapscale=parseInt(mapscale);i3GEO.parametros.mapres=mapres;i3GEO.parametros.pixelsize=g_celula;i3GEO.parametros.mapfile=mapfile;i3GEO.parametros.cgi=cgi;i3GEO.parametros.extentTotal=mapexten;i3GEO.parametros.mapimagem=mapimagem;i3GEO.parametros.geoip=geoip;i3GEO.parametros.listavisual=listavisual;i3GEO.parametros.utilizacgi=utilizacgi;i3GEO.parametros.versaoms=versaoms;i3GEO.parametros.mensagens=mensagens;i3GEO.parametros.locsistemas=locsistemas;i3GEO.parametros.locidentifica=locidentifica;i3GEO.parametros.r=r;i3GEO.parametros.locmapas=locmapas;i3GEO.parametros.extentref=extentref;i3GEO.parametros.versaoms=versaoms;i3GEO.parametros.versaomscompleta=versaomscompleta;i3GEO.parametros.kmlurl=kmlurl;i3GEO.gadgets.quadros.inicia(10);i3GEO.gadgets.quadros.grava("extensao",mapexten);i3GEO.arvoreDeCamadas.cria("",retorno.data.temas,i3GEO.configura.sid,i3GEO.configura.locaplic);i3GEO.util.arvore("<b>"+$trad("p13")+"</b>","listaPropriedades",i3GEO.configura.listaDePropriedadesDoMapa);i3GEO.gadgets.mostraBuscaRapida();i3GEO.guias.cria();if($i("arvoreAdicionaTema"))i3GEO.arvoreDeTemas.cria(i3GEO.configura.sid,i3GEO.configura.locaplic,"arvoreAdicionaTema");if($i("mst")){$i("mst").style.display="block"}i3GEO.atualiza(retorno);var temp=0;if($i("contemFerramentas")){temp=temp+parseInt($i("contemFerramentas").style.width)}if($i("ferramentas")){temp=temp+parseInt($i("ferramentas").style.width)}if($i("mst")){$i("mst").style.width=i3GEO.parametros.w+temp+"px"}if(i3GEO.configura.entorno=="sim"){i3GEO.configura.entorno=="nao";i3GEO.navega.entorno.ativaDesativa()}i3GEO.navega.autoRedesenho.ativa();if($i("i3geo_escalanum")){$i("i3geo_escalanum").value=i3GEO.parametros.mapscale}if((i3GEO.parametros.geoip=="nao")&&($i("ondeestou"))){$i("ondeestou").style.display="none"}i3GEO.interface.inicia()}else{alert("Erro. Impossivel criar o mapa "+retorno.data);return}if(document.getElementById("ajuda")){i3GEO.ajuda.DIVAJUDA="ajuda"}var abreJM="sim";if(i3GEO.util.pegaCookie("g_janelaMen")){var abreJM=i3GEO.util.pegaCookie("g_janelaMen");if(abreJM=="sim")i3GEO.configura.iniciaJanelaMensagens=true;else i3GEO.configura.iniciaJanelaMensagens=false}if(i3GEO.configura.iniciaJanelaMensagens==true){i3GEO.ajuda.abreJanela()}i3GEO.janela.fechaAguarde("montaMapa");if(i3GEO.configura.liberaGuias=="sim"){i3GEO.guias.libera()}}if($i("mst")){$i("mst").style.visibility="visible"}};if(!$i("i3geo")){document.body.id="i3geo"}$i("i3geo").className="yui-skin-sam";if($i("mst"))$i("mst").style.visibility="hidden";if(i3GEO.configura.sid==""){var mashup=function(retorno){i3GEO.configura.sid=retorno.data;i3GEO.inicia()};i3GEO.php.criamapa(mashup,i3GEO.configura.mashuppar)}else{i3GEO.janela.abreAguarde("montaMapa",$trad("o5"));i3GEO.php.inicia(montaMapa,i3GEO.configura.embedLegenda,i3GEO.parametros.w,i3GEO.parametros.h)}if(i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.janela.fechaAguarde()")<0){i3GEO.eventos.NAVEGAMAPA.push("i3GEO.janela.fechaAguarde()")}eval(i3GEO.finaliza)},atualiza:function(retorno){var corpoMapa=function(){i3GEO.janela.abreAguarde("ajaxiniciaParametros",$trad("o1")+" atualizando");i3GEO.php.corpo(i3GEO.atualiza,i3GEO.configura.tipoimagem)};if(arguments.length==0){corpoMapa.call();return}if(retorno==""){corpoMapa.call();return}if(!retorno.data){corpoMapa.call();return}try{if(retorno.data=="erro"){alert("Erro no mapa. Sera feita uma tentativa de recuperacao.");i3GEO.mapa.recupera.inicia();return}else if(retorno.data=="ok"||retorno.data==""){corpoMapa.call();return}}catch(e){}var erro=function(){var legimagem="";var c=confirm("Ocorreu um erro, quer tentar novamente?");if(c){corpoMapa.call()}else{i3GEO.janela.fechaAguarde()}return}try{eval(retorno.data.variaveis)}catch(e){erro.call();return}if(arguments.length==0||retorno==""||retorno.data.variaveis==undefined){erro.call();return}else{if(arguments.length==0){return}i3GEO.mapa.verifica(retorno);var tempo="";if(i3GEO.desenho.richdraw){i3GEO.desenho.richdraw.clearWorkspace()}mapscale="";mapexten="";eval(retorno.data.variaveis);try{i3GEO.arvoreDeCamadas.atualiza(retorno.data.temas);if(i3GEO.parametros.mapscale!=mapscale)i3GEO.arvoreDeCamadas.atualizaFarol(mapscale);i3GEO.parametros.mapexten=mapexten;i3GEO.parametros.mapscale=mapscale;i3GEO.parametros.mapres=mapres;i3GEO.parametros.pixelsize=g_celula;i3GEO.parametros.mapimagem=mapimagem}catch(e){}i3GEO.interface.redesenha();g_operacao="";i3GEO.parametros.mapexten=mapexten;if($i("mensagemt")){$i("mensagemt").value=i3GEO.parametros.mapexten}i3GEO.arvoreDeCamadas.CAMADAS=retorno.data.temas;i3GEO.eventos.navegaMapa();if(i3GEO.configura.entorno=="sim"){i3GEO.navega.entorno.geraURL();i3GEO.navega.entorno.ajustaPosicao()}i3GEO.ajuda.mostraJanela("Tempo de redesenho em segundos: "+tempo,"")}}};