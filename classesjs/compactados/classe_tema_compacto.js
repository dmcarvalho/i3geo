if(typeof(i3GEO)==='undefined'){i3GEO=[]}i3GEO.tema={TEMPORIZADORESID:{},exclui:function(tema){g_operacao="excluitema";var layer,indice,p;try{p=document.getElementById("idx"+tema).parentNode.parentNode.parentNode;do{p.removeChild(p.childNodes[0])}while(p.childNodes.length>0);p.parentNode.removeChild(p)}catch(e){}i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));if(i3GEO.Interface.ATUAL==="googlemaps"){indice=i3GEO.Interface.googlemaps.retornaIndiceLayer(tema);if(indice!==false){i3GeoMap.overlayMapTypes.removeAt(indice)}}if(i3GEO.Interface.ATUAL==="googleearth"){indice=i3GEO.Interface.googleearth.retornaObjetoLayer(tema);i3GeoMap.getFeatures().removeChild(indice)}i3GEO.php.excluitema(i3GEO.atualiza,tema);i3GEO.mapa.ativaTema("");if(i3GEO.Interface.ATUAL==="openlayers"){layer=i3geoOL.getLayersByName(tema)[0];i3geoOL.removeLayer(layer)}},fonte:function(tema){i3GEO.mapa.ativaTema(tema);window.open(i3GEO.configura.locaplic+"/admin/abrefontemapfile.php?tema="+tema)},sobe:function(tema){i3GEO.mapa.ativaTema(tema);var temp=function(retorno){i3GEO.atualiza(retorno);if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ordenaLayers()}};i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.php.sobetema(temp,tema)},desce:function(tema){i3GEO.mapa.ativaTema(tema);var temp=function(retorno){i3GEO.atualiza(retorno);if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ordenaLayers()}};i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.php.descetema(temp,tema)},zoom:function(tema){i3GEO.mapa.ativaTema(tema);i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.php.zoomtema(i3GEO.atualiza,tema)},zoomsel:function(tema){i3GEO.mapa.ativaTema(tema);i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.php.zoomsel(i3GEO.atualiza,tema)},limpasel:function(tema){i3GEO.mapa.ativaTema(tema);g_operacao="limpasel";i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));var temp=function(retorno){i3GEO.atualiza(retorno);i3GEO.Interface.atualizaTema(retorno,tema)};i3GEO.php.limpasel(temp,tema)},mudatransp:function(idtema){i3GEO.mapa.ativaTema(idtema);g_operacao="transparencia";var valor,temp=function(retorno){i3GEO.atualiza(retorno);i3GEO.Interface.atualizaTema(retorno,idtema)};if($i("tr"+idtema)){valor=$i("tr"+idtema).value}else{alert("Ocorreu um erro")}if(valor!==""){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.php.mudatransp(temp,idtema,valor)}else{alert("Valor n�o definido.")}},invertestatuslegenda:function(idtema){alert("Essa op��o afeta apenas a impress�o do mapa");i3GEO.mapa.ativaTema(idtema);g_operacao="transparencia";var temp=function(retorno){i3GEO.atualiza(retorno);i3GEO.arvoreDeCamadas.atualiza()};i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.php.invertestatuslegenda(temp,idtema)},alteracorclasse:function(idtema,idclasse,rgb){i3GEO.mapa.ativaTema(idtema);var temp=function(){i3GEO.atualiza();i3GEO.Interface.atualizaTema("",idtema);i3GEO.arvoreDeCamadas.atualizaLegenda(idtema)};i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.php.aplicaCorClasseTema(temp,idtema,idclasse,rgb)},mudanome:function(idtema){i3GEO.mapa.ativaTema(idtema);g_operacao="mudanome";var valor;if($i("nn"+idtema)){valor=$i("nn"+idtema).value}else{alert("Ocorreu um erro")}if(valor!==""){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.php.mudanome(i3GEO.atualiza,idtema,valor)}else{alert("Nome n�o definido")}},mostralegendajanela:function(idtema,nome,tipoOperacao){var retorna,janela;if(tipoOperacao==="ativatimer"){mostralegendajanelaTimer=setTimeout("i3GEO.tema.mostralegendajanela('"+idtema+"','"+nome+"','abrejanela')",4000)}if(tipoOperacao==="abrejanela"){try{clearTimeout(mostralegendajanelaTimer)}catch(e){}retorna=function(retorno){$i("janelaLegenda"+idtema+"_corpo").innerHTML=retorno.data.legenda};if(!$i("janelaLegenda"+idtema)){janela=i3GEO.janela.cria("250px","","","","",nome,"janelaLegenda"+idtema,false);janela[2].style.textAlign="left";janela[2].style.background="white";janela[2].innerHTML=$trad("o1")}i3GEO.php.criaLegendaHTML(retorna,idtema,"legenda3.htm")}if(tipoOperacao==="desativatimer"){clearTimeout(mostralegendajanelaTimer)}},temporizador:function(idtema,tempo){if(!tempo){tempo=$i("temporizador"+idtema).value}if(tempo!=""&&parseInt(tempo,10)>0){eval('i3GEO.tema.TEMPORIZADORESID.'+idtema+' = {tempo: '+tempo+',idtemporizador: setInterval(function('+idtema+'){if(!$i("arrastar_'+idtema+'")){delete(i3GEO.tema.TEMPORIZADORESID.'+idtema+');return;}i3GEO.Interface.atualizaTema("",idtema);},parseInt('+tempo+',10)*1000)};')}else{try{window.clearInterval(i3GEO.tema.TEMPORIZADORESID[idtema].idtemporizador);delete(i3GEO.tema.TEMPORIZADORESID[idtema])}catch(e){}}},dialogo:{mostraWms:function(tema){i3GEO.janela.mensagemSimples(i3GEO.configura.locaplic+"/ogc.php?tema="+tema,"Endere�o do WMS")},comentario:function(tema){i3GEO.janela.cria("530px","330px",i3GEO.configura.locaplic+"/ferramentas/comentarios/index.php?tema="+tema+"&g_sid="+i3GEO.configura.sid+"&locaplic="+i3GEO.configura.locaplic,"","","<img src='"+i3GEO.configura.locaplic+"/imagens/player_volta.png' style=cursor:pointer onclick='javascript:history.go(-1)'><span style=position:relative;top:-2px; > Coment�rios de "+tema+" </span><a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=7&idajuda=68' >&nbsp;&nbsp;&nbsp;</a>","comentario"+Math.random())},cortina:function(tema){i3GEO.mapa.ativaTema(tema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.cortina()","cortina","cortina")},abreKml:function(tema,tipo){if(arguments.lenght===1){tipo="kml"}if(typeof(i3GEOF.converteKml)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/convertekml/index.js.php";i3GEO.util.scriptTag(js,"i3GEOF.converteKml.criaJanelaFlutuante('"+tema+"','"+tipo+"')","i3GEOF.converteKml_script")}else{i3GEOF.converteKml.criaJanelaFlutuante(tema,tipo)}},salvaMapfile:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.salvamapfile()","salvamapfile","salvamapfile")},graficotema:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.graficotema()","graficotema","graficoTema")},toponimia:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.toponimia()","toponimia","toponimia")},filtro:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.filtro()","filtro","filtro")},procuraratrib:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.procuraratrib()","busca","busca")},tabela:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.tabela()","tabela","tabela")},etiquetas:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.etiquetas()","etiqueta","etiqueta")},editaLegenda:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.editaLegenda()","legenda","legenda")},download:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.download()","download","download")},sld:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.janela.cria("500px","350px",i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=tema2sld&tema="+idtema+"&g_sid="+i3GEO.configura.sid,"","","SLD <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=41' >&nbsp;&nbsp;&nbsp;</a>")},aplicarsld:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.aplicarsld()","aplicarsld","aplicarsld")},editorsql:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.editorsql()","editorsql","editorsql")}}};