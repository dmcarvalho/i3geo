if(typeof(i3GEO)==='undefined'){i3GEO=[]}i3GEO.tema={exclui:function(tema){g_operacao="excluitema";var p=document.getElementById("idx"+tema).parentNode.parentNode.parentNode;do{p.removeChild(p.childNodes[0])}while(p.childNodes.length>0);p.parentNode.removeChild(p);i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.contadorAtualiza++;i3GEO.php.excluitema(i3GEO.atualiza,tema);i3GEO.mapa.ativaTema("");if(i3GEO.Interface.ATUAL==="openlayers"){var layer=i3geoOL.getLayersByName(tema)[0];i3geoOL.removeLayer(layer)}},fonte:function(tema){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));var temp=function(retorno){i3GEO.janela.fechaAguarde();if(retorno.data!=="erro"){window.open(retorno.data)}else{alert("N�o existe fonte registrada para esse tema")}};i3GEO.php.fontetema(temp,tema)},sobe:function(tema){var temp=function(retorno){i3GEO.atualiza(retorno);if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ordenaLayers()}};i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.contadorAtualiza++;i3GEO.php.sobetema(temp,tema)},desce:function(tema){var temp=function(retorno){i3GEO.atualiza(retorno);if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ordenaLayers()}};i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.contadorAtualiza++;i3GEO.php.descetema(temp,tema)},zoom:function(tema){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.contadorAtualiza++;i3GEO.php.zoomtema(i3GEO.atualiza,tema)},zoomsel:function(tema){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.contadorAtualiza++;i3GEO.php.zoomsel(i3GEO.atualiza,tema)},limpasel:function(tema){g_operacao="limpasel";i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.contadorAtualiza++;var temp=function(retorno){i3GEO.atualiza(retorno);i3GEO.Interface.atualizaTema(retorno,tema)};i3GEO.php.limpasel(temp,tema)},mudatransp:function(idtema){g_operacao="transparencia";var valor,temp=function(retorno){i3GEO.atualiza(retorno);i3GEO.Interface.atualizaTema(retorno,idtema)};if($i("tr"+idtema)){valor=$i("tr"+idtema).value}else{alert("Ocorreu um erro")}if(valor!==""){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.contadorAtualiza++;i3GEO.php.mudatransp(temp,idtema,valor)}else{alert("Valor n�o definido.")}},mudanome:function(idtema){g_operacao="mudanome";var valor;if($i("nn"+idtema)){valor=$i("nn"+idtema).value}else{alert("Ocorreu um erro")}if(valor!==""){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));i3GEO.contadorAtualiza++;i3GEO.php.mudanome(i3GEO.atualiza,idtema,valor)}else{alert("Nome n�o definido")}},mostralegendajanela:function(idtema,nome,tipoOperacao){var retorna,janela;if(tipoOperacao==="ativatimer"){mostralegendajanelaTimer=setTimeout("i3GEO.tema.mostralegendajanela('"+idtema+"','"+nome+"','abrejanela')",4000)}if(tipoOperacao==="abrejanela"){try{clearTimeout(mostralegendajanelaTimer)}catch(e){}retorna=function(retorno){$i("janelaLegenda"+idtema+"_corpo").innerHTML=retorno.data.legenda};if(!$i("janelaLegenda"+idtema)){janela=i3GEO.janela.cria("250px","","","","",nome,"janelaLegenda"+idtema,false);janela[2].style.textAlign="left";janela[2].style.background="white";janela[2].innerHTML=$trad("o1")}i3GEO.php.criaLegendaHTML(retorna,idtema,"legenda3.htm")}if(tipoOperacao==="desativatimer"){clearTimeout(mostralegendajanelaTimer)}},dialogo:{abreKml:function(tema,tipo){if(arguments.lenght===1){tipo="kml"}if(typeof(i3GEOF.converteKml)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/convertekml/index.js.php";i3GEO.util.scriptTag(js,"i3GEOF.converteKml.criaJanelaFlutuante('"+tema+"','"+tipo+"')","i3GEOF.converteKml_script")}},graficotema:function(idtema){if(typeof(i3GEOF.graficoTema)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/graficotema/index.js.php";i3GEO.mapa.ativaTema(idtema);i3GEO.util.scriptTag(js,"i3GEOF.graficoTema.criaJanelaFlutuante()","i3GEOF.graficoTema_script")}},toponimia:function(idtema){if(typeof(i3GEOF.toponimia)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/toponimia/index.js.php";i3GEO.mapa.ativaTema(idtema);i3GEO.util.scriptTag(js,"i3GEOF.toponimia.criaJanelaFlutuante()","i3GEOF.toponimia_script")}},filtro:function(idtema){if(typeof(i3GEOF.filtro)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/filtro/index.js.php";i3GEO.mapa.ativaTema(idtema);i3GEO.util.scriptTag(js,"i3GEOF.filtro.criaJanelaFlutuante()","i3GEOF.filtro_script")}},procuraratrib:function(idtema){if(typeof(i3GEOF.busca)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/busca/index.js.php";i3GEO.mapa.ativaTema(idtema);i3GEO.util.scriptTag(js,"i3GEOF.busca.criaJanelaFlutuante()","i3GEOF.busca_script")}},tabela:function(idtema){if(typeof(i3GEOF.tabela)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/tabela/index.js.php";i3GEO.mapa.ativaTema(idtema);i3GEO.util.scriptTag(js,"i3GEOF.tabela.criaJanelaFlutuante()","i3GEOF.tabela_script")}},etiquetas:function(idtema){if(typeof(i3GEOF.etiqueta)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/etiqueta/index.js.php";i3GEO.mapa.ativaTema(idtema);i3GEO.util.scriptTag(js,"i3GEOF.etiqueta.criaJanelaFlutuante()","i3GEOF.etiqueta_script")}},editaLegenda:function(idtema){if(typeof(i3GEOF.legenda)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/legenda/index.js.php";i3GEO.mapa.ativaTema(idtema);i3GEO.util.scriptTag(js,"i3GEOF.legenda.criaJanelaFlutuante()","i3GEOF.legenda_script")}},download:function(idtema){if(typeof(i3GEOF.download)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/download/index.js.php";i3GEO.mapa.ativaTema(idtema);i3GEO.util.scriptTag(js,"i3GEOF.download.criaJanelaFlutuante('"+idtema+"')","i3GEOF.download_script")}},sld:function(idtema){i3GEO.janela.cria("500px","350px",i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=tema2sld&tema="+idtema+"&g_sid="+i3GEO.configura.sid,"","","SLD <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=41' >&nbsp;&nbsp;&nbsp;</a>")},editorsql:function(idtema){if(typeof(i3GEOF.editorsql)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/editorsql/index.js.php";i3GEO.mapa.ativaTema(idtema);i3GEO.util.scriptTag(js,"i3GEOF.editorsql.criaJanelaFlutuante('"+idtema+"')","i3GEOF.editorsql_script")}}}};