g_templateLegenda="";g_posicaoLenteX=0;g_posicaoLenteY=0;g_autoRedesenho=0;g_embedLegenda="nao";g_3dmap="";g_visual="default";g_docaguias="nao";g_barraFerramentas1="sim";g_barraFerramentas2="sim";g_fatordezoom=0;g_diminuixM=20;g_diminuixN=25;g_diminuiyM=106;g_diminuiyN=103;g_mapaRefDisplay="block";g_funcaoTip="verificaTipDefault()";g_tipotip="completo";g_tipoimagem="nenhum";g_sistemas="";destacaTamanho=75;g_entorno="nao";g_guiaativa="guia1";g_funcoesClickMapaDefault=new Array("cliqueSelecaoPoli()","cliqueCapturaPt()");g_funcoesMousemoveMapaDefault=new Array("movePan()","moveLonglat()","moveSelecaoPoli()");g_funcoesNavegaMapaDefault=new Array("atualizaEscalaNumerica()");oMenuData={"ajudas":[{text:$trad("u1"),url:"http://www.softwarepublico.gov.br/spb/ver-comunidade?community_id=1444332"},{text:$trad("u2"),url:"javascript:abreDoc()"},{text:$trad("u3"),url:"http://pt.wikibooks.org/wiki/I3geo"},{text:$trad("u4"),url:"http://mapas.mma.gov.br/wikibooki3geo"},{text:$trad("u5a"),url:"http://www.softwarepublico.gov.br"},{text:"i3Geo Blog",url:"http://sistemas.mma.gov.br/blogs/index.php?blog=6"}],"analise":[{text:'<span style=color:gray;text-decoration:underline; ><b>'+$trad("u22")+'</b></span>',url:"#"},{text:$trad("u7"),url:"javascript:gradePol()"},{text:$trad("u8"),url:"javascript:gradePontos()"},{text:$trad("u9"),url:"javascript:gradeHex()"},{text:'<span style=color:gray;text-decoration:underline; ><b>'+$trad("u23")+'</b></span>',url:"#"},{text:$trad("u11a"),url:"javascript:distanciaptpt()"},{text:$trad("u12"),url:"javascript:nptPol()"},{text:$trad("u13"),url:"javascript:pontoempoligono()"},{text:$trad("u14"),url:"javascript:pontosdistri()"},{text:'<span style=color:gray;text-decoration:underline; ><b>'+$trad("u24")+'</b></span>',url:"#"},{text:$trad("u11"),url:"javascript:centroide()"},{text:$trad("u25"),url:"javascript:dissolve()"},{text:'<span style=color:gray;text-decoration:underline; ><b>'+$trad("u27")+'</b></span>',url:"#"},{text:$trad("u6"),url:"javascript:analisaGeometrias()"},{text:$trad("u10"),url:"javascript:buffer()"},{text:$trad("u26"),url:"javascript:agrupaElementos()"}]};oMenuData.janelas=[{text:$trad("u15"),url:"javascript:initJanelaZoom('1');initJanelaZoom('2')"},{text:$trad("u16"),url:"javascript:i3GEO.ajuda.abreJanela()"}];oMenuData.arquivo=[{text:$trad("u17"),url:"javascript:salvaMapa()"},{text:$trad("u18"),url:"javascript:carregaMapa()"},{text:$trad("u19"),url:"javascript:pegaimagens()"},{text:$trad("u20"),url:"javascript:convertews()"},{text:$trad("u21"),url:"../geradordelinks.htm"}];g_listaFuncoesBotoes={"botoes":[{iddiv:"historicozoom",tipo:"",dica:$trad("d1"),constroiconteudo:'ativaHistoricoZoom("historicozoom")'},{iddiv:"zoomtot",tipo:"",dica:$trad("d2"),funcaoonclick:function(){i3GEO.navega.zoomExt(i3GEO.configura.locaplic,i3GEO.configura.sid,g_tipoimagem,objmapa.extentTotal)}},{iddiv:"zoomli",tipo:"dinamico",dica:$trad("d3"),funcaoonclick:function(){g_operacao='navega';g_tipoacao='zoomli';i3GEO.barraDeBotoes.ativaIcone("zoomli");if($i("img")){$i("img").title="";i3GEO.util.mudaCursor(i3GEO.configura.cursores,"zoom","img",i3GEO.configura.locaplic)}}},{iddiv:"pan",tipo:"dinamico",dica:$trad("d4"),funcaoonclick:function(){g_tipoacao='pan';g_operacao='navega';i3GEO.barraDeBotoes.ativaIcone("pan");if($i("img")){$i("img").title="";i3GEO.util.mudaCursor(i3GEO.configura.cursores,"pan","img",i3GEO.configura.locaplic)}}},{iddiv:"zoomiauto",tipo:"",dica:$trad("d5"),funcaoonclick:function(){i3GEO.navega.zoomin(i3GEO.configura.locaplic,i3GEO.configura.sid)}},{iddiv:"zoomoauto",tipo:"",dica:$trad("d6"),funcaoonclick:function(){i3GEO.navega.zoomout(i3GEO.configura.locaplic,i3GEO.configura.sid)}},{iddiv:"identifica",tipo:"dinamico",dica:$trad("d7"),funcaoonclick:function(){if($i("img")){$i("img").title="";i3GEO.util.mudaCursor(i3GEO.configura.cursores,"identifica","img",i3GEO.configura.locaplic)}i3GEO.barraDeBotoes.ativaIcone("identifica");g_tipoacao='identifica';if(g_funcoesClickMapaDefault.toString().search("cliqueIdentifica()")<0){g_funcoesClickMapaDefault.push("cliqueIdentifica()")}}},{iddiv:"exten",tipo:"",dica:$trad("d8"),funcaoonclick:function(){wdocaf("450px","340px",i3GEO.configura.locaplic+"/ferramentas/mostraexten/index.htm","","","Extens�o geogr�fica")}},{iddiv:"referencia",tipo:"",dica:$trad("d9"),funcaoonclick:function(){initJanelaRef()}},{iddiv:"wiki",tipo:"",dica:$trad("d11"),funcaoonclick:function(){g_operacao="navega";wdocaf("450px","190px",i3GEO.configura.locaplic+"/ferramentas/wiki/index.htm","","","Wiki");if(g_funcoesNavegaMapaDefault.toString().search("atualizawiki()")<0){g_funcoesNavegaMapaDefault.push("atualizawiki()")}}},{iddiv:"buscafotos",tipo:"",dica:"Fotos",funcaoonclick:function(){g_operacao="navega";wdocaf("550px","400px",i3GEO.configura.locaplic+"/ferramentas/buscafotos/index.htm","","","Fotos");i3GEO.util.criaPin()}},{iddiv:"imprimir",tipo:"",dica:$trad("d12"),funcaoonclick:function(){wdocaf("320px","180px",i3GEO.configura.locaplic+"/ferramentas/imprimir/index.htm","","","Imprimir")}},{iddiv:"ondeestou",tipo:"",dica:$trad("d13"),funcaoonclick:function(){i3GEO.navega.zoomIP(i3GEO.configura.locaplic,i3GEO.configura.sid)}},{iddiv:"v3d",tipo:"",dica:$trad("d14"),funcaoonclick:function(){wdocaf("400px","200px",i3GEO.configura.locaplic+"/ferramentas/3d/index.htm","","","3d")}},{iddiv:"google",tipo:"",dica:$trad("d15"),funcaoonclick:function(){i3GEO.util.criaBox();g_operacao="navega";if(navn){wdocaf((objmapa.w/2)+20+"px",(objmapa.h/2)+20+"px",i3GEO.configura.locaplic+"/ferramentas/googlemaps/index.php","","","Google maps")}else{wdocaf("500px","380px",i3GEO.configura.locaplic+"/ferramentas/googlemaps/index.php","","","Google maps")}if(g_funcoesNavegaMapaDefault.toString().search("atualizagoogle()")<0){g_funcoesNavegaMapaDefault.push("atualizagoogle()")}}},{iddiv:"scielo",tipo:"",dica:$trad("d16"),funcaoonclick:function(){g_operacao="navega";wdocaf("450px","190px",i3GEO.configura.locaplic+"/ferramentas/scielo/index.htm","","","Scielo");if(g_funcoesNavegaMapaDefault.toString().search("atualizascielo()")<0){g_funcoesNavegaMapaDefault.push("atualizascielo()")}}},{iddiv:"confluence",tipo:"",dica:$trad("d17"),funcaoonclick:function(){g_operacao="navega";wdocaf("250px","190px",i3GEO.configura.locaplic+"/ferramentas/confluence/index.htm","","","confluence");i3GEO.util.criaBox();if(g_funcoesNavegaMapaDefault.toString().search("atualizaconfluence()")<0){g_funcoesNavegaMapaDefault.push("atualizaconfluence()")}}},{iddiv:"lentei",tipo:"",dica:$trad("d18"),funcaoonclick:function(){lenteDeAumento()}},{iddiv:"encolheFerramentas",tipo:"",dica:$trad("d19"),funcaoonclick:function(){docaguias()}},{iddiv:"reinicia",tipo:"",dica:$trad("d20"),funcaoonclick:function(){i3GEO.janela.abreAguarde("ajaxredesenha",$trad("o1"));var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=reiniciaMapa&g_sid="+i3GEO.configura.sid;var cp=new cpaint();cp.set_response_type("JSON");cp.call(p,"reiniciaMapa",ajaxredesenha)}},{iddiv:"mede",tipo:"dinamico",dica:$trad("d21"),funcaoonclick:function(){i3GEO.barraDeBotoes.ativaIcone("mede");if($i("img")){$i("img").title="";i3GEO.util.mudaCursor(i3GEO.configura.cursores,"distancia","img",i3GEO.configura.locaplic)}mede()}},{iddiv:"area",tipo:"dinamico",dica:$trad("d21a"),funcaoonclick:function(){i3GEO.barraDeBotoes.ativaIcone("area");if($i("img")){$i("img").title="";i3GEO.util.mudaCursor(i3GEO.configura.cursores,"area","img",i3GEO.configura.locaplic)}area()}},{iddiv:"inserexy",tipo:"dinamico",dica:$trad("d22"),funcaoonclick:function(){i3GEO.barraDeBotoes.ativaIcone("inserexy");inserexy();if($i("img")){$i("img").title="clique para inserir um ponto";$i("img").style.cursor="crosshair"}}},{iddiv:"inseregrafico",tipo:"dinamico",dica:$trad("d23"),funcaoonclick:function(){i3GEO.barraDeBotoes.ativaIcone("inseregrafico");inseregrafico();if($i("img")){$i("img").title="clique para incluir o gr�fico";$i("img").style.cursor="pointer"}}},{iddiv:"selecao",tipo:"dinamico",dica:$trad("d24"),funcaoonclick:function(){i3GEO.barraDeBotoes.ativaIcone("selecao");selecao();if($i("img")){$i("img").title="";$i("img").style.cursor="pointer"}}},{iddiv:"textofid",tipo:"dinamico",dica:$trad("d25"),funcaoonclick:function(){i3GEO.barraDeBotoes.ativaIcone("textofid");textofid();if($i("img")){$i("img").title="clique para inserir o texto";$i("img").style.cursor="pointer"}}},{iddiv:"visual",tipo:"",dica:$trad("d26"),funcaoonclick:"",constroiconteudo:'visual("visual")'},{iddiv:"menus",tipo:"",constroiconteudo:'montaMenuSuspenso("menus")'}]};