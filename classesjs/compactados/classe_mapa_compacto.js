if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.mapa={TEMASINICIAISLIGADOS:"",TEMASINICIAIS:"",AUTORESIZE:false,RESOLUCAOTIP:8,GEOXML:[],insereDobraPagina:function(tipo,imagem){if(i3GEO.parametros.w<700){return}var novoel=$i("i3GEOdobraPagina");if(!novoel){novoel=document.createElement("img")}novoel.src=imagem;novoel.id="i3GEOdobraPagina";if(tipo==="googlemaps"){novoel.onclick=function(evt){i3GEO.Interface.atual2gm.inicia()}}if(tipo==="openlayers"){novoel.onclick=function(evt){if(i3GEO.Interface.ATUAL==="googlemaps"&&i3GeoMap.getStreetView().getVisible()===true){i3GeoMap.getStreetView().setVisible(false)}else{i3GEO.Interface.atual2ol.inicia()}}}novoel.style.cursor="pointer";novoel.style.position="absolute";novoel.style.top=i3GEO.parametros.h-35+"px";novoel.style.zIndex="5000000";novoel.style.left=i3GEO.parametros.w-35+"px";$i(i3GEO.Interface.IDMAPA).appendChild(novoel);YAHOO.util.Event.addListener("i3GEOdobraPagina","click",YAHOO.util.Event.stopPropagation);YAHOO.util.Event.addListener("i3GEOdobraPagina","click",YAHOO.util.Event.preventDefault)},reposicionaDobraPagina:function(){var novoel=$i("i3GEOdobraPagina");if(!novoel){return}novoel.style.top=i3GEO.parametros.h-35+"px";novoel.style.left=i3GEO.parametros.w-35+"px"},ativaAutoResize:function(){var ativo=true;window.onresize=function(){var Dw,Dh;Dw=YAHOO.util.Dom.getViewportWidth();Dh=YAHOO.util.Dom.getViewportHeight();i3GEO.tamanhodoc=[Dw,Dh];if(ativo===true){setTimeout(function(){i3GEO.reCalculaTamanho();i3GEO.barraDeBotoes.recria("i3geo_barra2");if(i3GEO.Interface.TABLET===true){i3GEO.guias.escondeGuias();return}if(i3GEO.guias.TIPO==="movel"){i3GEO.guias.guiaMovel.reposiciona();i3GEO.guias.guiaMovel.abreFecha("fecha")}else{i3GEO.guias.ajustaAltura()}i3GEO.mapa.reposicionaDobraPagina();ativo=true},2000)}ativo=false}},ajustaPosicao:function(elemento){if(arguments.length===0){return}var imagemxi=0,imagemyi=0,dc=$i(elemento),c;if(!dc){return}try{while((dc.offsetParent)&&(dc.offsetParent.id!=="i3geo")){dc=dc.offsetParent;imagemxi+=dc.offsetLeft;imagemyi+=dc.offsetTop}c=$i(i3GEO.Interface.IDCORPO);if(c){c.style.position="absolute";if(navm){i3GEO.util.$left(i3GEO.Interface.IDCORPO,imagemxi-1)}else{i3GEO.util.$left(i3GEO.Interface.IDCORPO,imagemxi)}i3GEO.util.$top(i3GEO.Interface.IDCORPO,imagemyi)}}catch(e){i3GEO.janela.tempoMsg("Ocorreu um erro. i3GEO.mapa.ajustaPosicao "+e)}},ativaTema:function(codigo){if(codigo){if(codigo===""){return}if(i3GEO.temaAtivo!==""){i3GEO.util.defineValor("ArvoreTituloTema"+i3GEO.temaAtivo,"style.color","")}i3GEO.temaAtivo=codigo;i3GEO.util.defineValor("ArvoreTituloTema"+codigo,"style.color","brown")}},ativaLogo:function(){if(i3GEO.Interface.ATUAL==="googlemaps"){alert($trad("x21"));return}i3GEO.php.ativalogo(i3GEO.atualiza);var cr=$i("i3GEOcopyright");if(cr){if(cr.style.display==="block"){cr.style.display="none"}else{cr.style.display="block"}}},verifica:function(retorno){try{if(retorno.data){retorno=retorno.data}if(retorno.variaveis){retorno=retorno.variaveis}if((retorno==="erro")||(typeof(retorno)==='undefined')){i3GEO.mapa.ajustaPosicao();i3GEO.janela.fechaAguarde();i3GEO.mapa.recupera.inicia()}i3GEO.mapa.recupera.TENTATIVA=0}catch(e){if(i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps"){i3GEO.janela.fechaAguarde();return}if(this.recupera.TENTATIVA===0){i3GEO.janela.tempoMsg("Erro no mapa. Sera feita uma tentativa de recuperacao.");i3GEO.mapa.recupera.inicia()}else{i3GEO.janela.tempoMsg("Recuperacao impossivel. Sera feita uma tentativa de reiniciar o mapa.");if(this.recupera.TENTATIVA===1){this.recupera.TENTATIVA=2;i3GEO.php.reiniciaMapa(i3GEO.atualiza)}}}},recupera:{TENTATIVA:0,inicia:function(){i3GEO.mapa.ajustaPosicao();i3GEO.janela.fechaAguarde();if(this.recupera.TENTATIVA===0){this.recupera.TENTATIVA++;this.recupera.restaura()}},restaura:function(){i3GEO.php.recuperamapa(i3GEO.atualiza)}},legendaIMAGEM:{obtem:function(funcao){i3GEO.php.criaLegendaImagem(funcao)}},compactaLayerGrafico:function(){var geos=false,geometrias=[],n=0,i,g;if(i3GEO.editorOL&&i3GEO.desenho.layergrafico&&i3GEO.desenho.layergrafico.features){geos=i3GEO.desenho.layergrafico.features;n=geos.length;for(i=0;i<n;i++){g={"atributos":geos[i].attributes,"geometria":geos[i].geometry.toString()};geometrias.push(g)}}g=YAHOO.lang.JSON.stringify(geometrias);return i3GEO.util.base64encode(g)},desCompactaLayerGrafico:function(geometrias){geometrias=YAHOO.lang.JSON.parse(geometrias);if(geometrias.length>0){var inicia=function(){if(!i3GEO.desenho.layergrafico){i3GEO.editorOL.criaLayerGrafico()}i3GEO.barraDeBotoes.editor[i3GEO.Interface.ATUAL].ativaPainel();var n=geometrias.length,i;for(i=0;i<n;i++){i3GEO.editorOL.adicionaFeatureWkt(geometrias[i].geometria,geometrias[i].atributos)}i3GEO.editorOL.sobeLayersGraficos()};if(!i3GEO.editorOL){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/classesjs/compactados/classe_editorol_compacto.js",inicia,"editorol.js",true)}}},restauraGraficos:function(graficos){if(graficos.length>0){var inicia=function(){i3GEOF.graficointerativo1.restauraGraficos(graficos)};i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/graficointerativo1/dependencias.php",inicia,"graficointerativo1",true)}},restauraTabelas:function(tabelas){if(tabelas.length>0){var inicia=function(){i3GEOF.tabela.restauraTabelas(tabelas)};i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/tabela/dependencias.php",inicia,"tabela",true)}},aplicaPreferencias:function(cookies){var props,nprops,i,temp=[],pint;if(!cookies){cookies=i3GEO.util.pegaDadosLocal("preferenciasDoI3Geo")}if(cookies){props=cookies.split("::");nprops=props.length;for(i=0;i<nprops;i++){try{temp=props[i].split("|");pint=parseInt(temp[1],10);if(temp[1]==='true'||temp[1]==='false'){if(temp[1]==='true'){temp[1]=true}if(temp[1]==='false'){temp[1]=false}eval(temp[0]+" = "+temp[1]+";")}else if(pint+"px"==temp[1]){eval(temp[0]+" = '"+temp[1]+"';")}else if(YAHOO.lang.isNumber(pint)){eval(temp[0]+" = "+temp[1]+";")}else{eval(temp[0]+" = '"+temp[1]+"';")}if(temp[0]=="i3GEO.configura.mapaRefDisplay"){i3GEO.util.insereCookie("i3GEO.configura.mapaRefDisplay",temp[1])}}catch(e){}}}},legendaHTML:{incluiBotaoLibera:false,ID:"",CAMADASSEMLEGENDA:[],POSICAO:"",cria:function(id){if(arguments.length===0){id=""}i3GEO.mapa.legendaHTML.ID=id;i3GEO.eventos.adicionaEventos("NAVEGAMAPA",["i3GEO.mapa.legendaHTML.atualiza()"]);i3GEO.mapa.legendaHTML.atualiza()},atualiza:function(){var idleg=$i("wlegenda_corpo"),temp=function(retorno){var legenda="",ins,re,desativar,tema="",classe="",b;re=new RegExp();if(retorno.data!=="erro"&&retorno.data!==undefined){re=new RegExp("legendack_","g");retorno.data.legenda=retorno.data.legenda.replace(re,"liblegendack_");legenda="<div class='botoesLegendaFlutuante'>"+"<input type='button' value='"+$trad("mostraTodosLegenda")+"' id='legendaMostraTodos' />"+"<input type='button' value='"+$trad("mostraSoLegenda")+"' id='legendaMostraSo' />"+"<input type='button' value='PNG' id='legendaExpImagem' />"+"</div>"+"<div id='i3GEOconteudoLegenda' class='i3GEOconteudoLegendaClass' style='width:100%;height:100%;'><div>"+retorno.data.legenda+"</div>"}if(legenda!=""&&idleg){ins="";if(i3GEO.mapa.legendaHTML.incluiBotaoLibera===true){ins+='<div style="cursor: pointer; text-align: left; font-size: 10px; display: block; height: 35px;" onclick="i3GEO.mapa.legendaHTML.libera()"><img id="soltaLeg" src="../imagens/branco.gif" title="clique para liberar" style="margin: 5px; position: relative;"> <p style="position: relative; left: -35px; top: -22px;">'+$trad("x11")+'</p></div>'}re=new RegExp("<img src='' />","g");legenda=legenda.replace(re,"");ins+="<div id='corpoLegi' >"+legenda+"</div>";idleg.innerHTML="<div style='padding:5px;' >"+ins+"</div>";if($i("legendaMostraTodos")){b=new YAHOO.widget.Button("legendaMostraTodos",{onclick:{fn:function(){i3GEO.mapa.legendaHTML.mostraTodosOsTemas()}}});b.addClass("legendaMostraTodosTemas");b=new YAHOO.widget.Button("legendaMostraSo",{onclick:{fn:function(){var n,i,temp,raiz=$i("corpoLegi").parentNode;temp=raiz.getElementsByClassName("i3GEOLegendaExcluiTema");n=temp.length;for(i=0;i<n;i++){temp[i].style.display="none"}temp=raiz.getElementsByTagName("input");n=temp.length;for(i=0;i<n;i++){temp[i].style.display="none"}}}});b.addClass("legendaMostraSoTemas");b=new YAHOO.widget.Button("legendaExpImagem",{onclick:{fn:function(){var obj=$i("i3GEOconteudoLegenda");obj.style.width=$i("wlegenda").style.width;obj.style.height=$i("wlegenda_corpo").style.height;i3GEO.mapa.dialogo.html2canvas(obj)}}});b.addClass("legendaExpImagemPng")}}i3GEO.mapa.legendaHTML.escondeTemasMarcados();desativar=retorno.data.desativar;for(tema in desativar){for(classe in desativar[tema]){ins=$i("liblegendack_"+tema+"_"+desativar[tema][classe]);if(ins){ins.checked=false}}}};if(idleg&&idleg.style.display==="block"){if(i3GEO.mapa.legendaHTML.ID!==""){idleg=$i(i3GEO.mapa.legendaHTML.ID);if(idleg){idleg.innerHTML=""}}i3GEO.mapa.legendaHTML.obtem(temp)}else{if(idleg){idleg.innerHTML=""}if(i3GEO.mapa.legendaHTML.ID!==""){idleg=$i(i3GEO.mapa.legendaHTML.ID);if(idleg&&idleg.style.display==="block"){i3GEO.mapa.legendaHTML.obtem(temp)}}}},obtem:function(funcao){i3GEO.php.criaLegendaHTML(funcao,"",i3GEO.configura.templateLegenda)},ativaDesativaTema:function(inputbox){var temp=function(){i3GEO.php.corpo(i3GEO.atualiza,i3GEO.configura.tipoimagem);i3GEO.arvoreDeCamadas.atualiza("");i3GEO.janela.fechaAguarde("redesenha")};if(!inputbox.checked){i3GEO.php.ligatemas(temp,inputbox.value,"")}else{i3GEO.php.ligatemas(temp,"",inputbox.value)}},escondeTema:function(tema){var d=$i("legendaLayer_"+tema);if(d){d.style.display="none";i3GEO.mapa.legendaHTML.CAMADASSEMLEGENDA.push(tema)}},escondeTemasMarcados:function(){var temas=i3GEO.mapa.legendaHTML.CAMADASSEMLEGENDA,n=temas.length,i,temp;for(i=0;i<n;i++){temp=$i(temas[i]);if(temp){temp.style.display="none"}}},mostraTodosOsTemas:function(){i3GEO.mapa.legendaHTML.CAMADASSEMLEGENDA=[];i3GEO.mapa.legendaHTML.atualiza()},libera:function(ck,largura,altura,topo,esquerda){if(!ck){ck="nao"}if(!largura){largura=340}if(!altura){altura=300}var cabecalho,minimiza,janela,titulo;if(i3GEO.mapa.legendaHTML.POSICAO!=""){topo=i3GEO.mapa.legendaHTML.POSICAO[1];esquerda=i3GEO.mapa.legendaHTML.POSICAO[0]}i3GEO.util.removeChild("corpoLegi");i3GEO.util.defineValor(i3GEO.mapa.legendaHTML.ID,"innerHTML","");janela=YAHOO.i3GEO.janela.manager.find("wlegenda");if(janela){i3GEO.janela.destroi("wlegenda")}cabecalho=function(){};minimiza=function(){var t=i3GEO.janela.minimiza("wlegenda","100px");if(t==="min"){$i("legendaTituloI").style.display="none"}else{$i("legendaTituloI").style.display="block"}};titulo="<span class='i3GEOiconeFerramenta i3GEOiconeLegenda' title='"+$trad("P3")+"'></span>"+"<div class='i3GeoTituloJanela' id='legendaTituloI'>"+$trad("p3")+"</div>";janela=i3GEO.janela.cria(largura+"px",altura+"px","","","",titulo,"wlegenda",false,"hd",cabecalho,minimiza,"","","","","nao");$i("wlegenda_corpo").style.backgroundColor="white";i3GEO.mapa.legendaHTML.ID="wlegenda_corpo";i3GEO.eventos.adicionaEventos("NAVEGAMAPA",["i3GEO.mapa.legendaHTML.atualiza()"]);janela[0].moveEvent.subscribe(function(o,p){i3GEO.mapa.legendaHTML.POSICAO=p[0]});i3GEO.mapa.legendaHTML.atualiza();if(topo&&esquerda){janela=YAHOO.i3GEO.janela.manager.find("wlegenda");janela.moveTo(esquerda,topo)}}},dialogo:{listaLayersWms:function(servico){i3GEO.janela.cria("400px","300px",i3GEO.configura.locaplic+"/ferramentas/conectarwms/listalayers.php?servico="+servico,"","","<div class='i3GeoTituloJanela'>"+$trad("a4")+"<a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=4&idajuda=28' ><b> </b></a></div>","i3GEO.conectarwms",false,"hd","","","",true)},mascara:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.mascara()","mascara","mascara","dependencias.php","i3GEOF.mascara.iniciaJanelaFlutuante()")},ferramentas:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.ferramentas()","atalhosmapa","atalhosmapa","dependencias.php","i3GEOF.atalhosmapa.iniciaJanelaFlutuante()")},html2canvas:function(obj){var temp=function(){i3GEOF.html2canvas.iniciaJanelaFlutuante(obj)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.html2canvas()","html2canvas","html2canvas","dependencias.php",temp)},wkt2layer:function(wkt,texto){var temp=function(){i3GEOF.wkt2layer.iniciaJanelaFlutuante(wkt,texto)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.wkt2layer()","wkt2layer","wkt2layer","dependencias.php",temp)},atalhosedicao:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.atalhosedicao()","atalhosedicao","atalhosedicao","dependencias.php","i3GEOF.atalhosedicao.iniciaJanelaFlutuante()")},geolocal:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.geolocal()","geolocal","geolocal","dependencias.php","i3GEOF.geolocal.iniciaJanelaFlutuante()")},listaDeMapasBanco:function(idonde){if(idonde){i3GEO.guias.CONFIGURA["mapas"].click.call(this,idonde);return}if(i3GEO.guias.CONFIGURA["mapas"]){var janela,divid;if($i("i3GEOFsalvaMapaLista")){return}janela=i3GEO.janela.cria("600px","350px","","","","","i3GEOFsalvaMapaLista",false,"hd");divid=janela[2].id;i3GEO.guias.CONFIGURA["mapas"].click.call(this,divid)}else{window.open(i3GEO.configura.locaplic+"/admin/rssmapas.php","_blank")}},congelaMapa:function(){var url="",idjanela=YAHOO.util.Dom.generateId(),cabecalho=function(){},titulo,minimiza=function(){i3GEO.janela.minimiza(idjanela)};if(i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps"){url=i3GEO.configura.locaplic+"/ferramentas/congelamapa/openlayers.php?g_sid="+i3GEO.configura.sid+"&ext="+i3GEO.util.extOSM2Geo(i3GEO.parametros.mapexten);titulo="<div class='i3GeoTituloJanela'><span class='i3GEOiconeFerramenta i3GEOiconeCongela'></span>"+"Mapa"+"<a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=6&idajuda=123' ><b> </b></a></div>";i3GEO.janela.cria("500px","350px",url,"","",titulo,idjanela,false,"hd",cabecalho,minimiza)}},metaestat:function(largura,altura,topo,esquerda){var temp=function(){i3GEOF.metaestat.MULTIPARAMETROS=true;i3GEOF.metaestat.comum.iniciaDicionario(null,largura,altura,topo,esquerda)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.metaestat()","metaestat","metaestat","index.js",temp)},metaestatListaMapas:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.metaestatListaMapas()","metaestat","listamapas","listamapas.js","i3GEOF.listamapas.iniciaJanelaFlutuante()")},preferencias:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.preferencias()","preferencias","preferencias")},locregiao:function(largura,altura,topo,esquerda){var temp=function(){i3GEOF.locregiao.iniciaDicionario(largura,altura,topo,esquerda)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.locregiao()","metaestat","locregiao","locregiao.js",temp)},filtraregiao:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.filtraregiao()","metaestat","locregiao","locregiao.js","i3GEOF.locregiao.abreComFiltro()")},animacao:function(){i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.animacao()","animacao","animacao","dependencias.php","i3GEOF.animacao.iniciaJanelaFlutuante()")},opacidade:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opacidade()","opacidademapa","opacidademapa")},telaRemota:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.telaremota()","telaremota","telaremota")},t3d:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.t3d()","3d","t3d")},imprimir:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.imprimir()","imprimir","imprimir","dependencias.php","i3GEOF.imprimir.iniciaJanelaFlutuante()")},mostraExten:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.mostraExten()","mostraexten","mostraExten","dependencias.php","i3GEOF.mostraExten.iniciaJanelaFlutuante()")},outputformat:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.outputformat()","outputformat","outputformat","dependencias.php","i3GEOF.outputformat.iniciaJanelaFlutuante()")},autoredesenha:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.autoredesenha()","opcoes_autoredesenha","opcoesTempo","dependencias.php","i3GEOF.opcoesTempo.iniciaJanelaFlutuante()")},salvaMapa:function(){if(i3GEO.parametros===""){i3GEO.janela.tempoMsg("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return}i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.salvaMapa()","salvamapa","salvaMapa","dependencias.php","i3GEOF.salvaMapa.iniciaJanelaFlutuante()")},carregaMapa:function(){i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.carregaMapa()","carregamapa","carregaMapa","dependencias.php","i3GEOF.carregaMapa.iniciaJanelaFlutuante()")},convertews:function(){if(i3GEO.parametros.mapfile===""){i3GEO.janela.tempoMsg("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return}i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.convertews()","convertews","converteMapaWS","dependencias.php","i3GEOF.converteMapaWS.iniciaJanelaFlutuante()")},convertekml:function(){if(i3GEO.parametros.mapfile===""){alert("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return}i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.convertekml()","convertemapakml","converteMapaKml","dependencias.php","i3GEOF.converteMapaKml.iniciaJanelaFlutuante()")},queryMap:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.queryMap()","opcoes_querymap","opcoesQuery","dependencias.php","i3GEOF.opcoesQuery.iniciaJanelaFlutuante()")},template:function(){i3GEO.janela.cria("300px","400px",i3GEO.configura.locaplic+"/ferramentas/template/index.htm","","","<div class='i3GeoTituloJanela'>Template<a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=8' ><b> </b></a></div>")},tamanho:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.tamanho()","opcoes_tamanho","opcoesTamanho","dependencias.php","i3GEOF.opcoesTamanho.iniciaJanelaFlutuante()")},tipoimagem:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.tipoimagem()","tipoimagem","tipoimagem","dependencias.php","i3GEOF.tipoimagem.iniciaJanelaFlutuante()")},corFundo:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.corFundo()","opcoes_fundo","opcoesFundo","dependencias.php","i3GEOF.opcoesFundo.iniciaJanelaFlutuante()")},opcoesEscala:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoesEscala()","opcoes_escala","opcoesEscala","dependencias.php","i3GEOF.opcoesEscala.iniciaJanelaFlutuante()")},opcoesLegenda:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoesLegenda()","opcoes_legenda","opcoesLegenda","dependencias.php","i3GEOF.opcoesLegenda.iniciaJanelaFlutuante()")},gradeCoord:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.gradeCoord()","gradecoord","gradeCoord","dependencias.php","i3GEOF.gradeCoord.iniciaJanelaFlutuante()")},cliqueTexto:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cliqueTexto()","inseretxt","inseretxt","dependencias.php","i3GEOF.inseretxt.iniciaJanelaFlutuante()")},selecao:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.selecao()","selecao","selecao")},cliquePonto:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cliquePonto()","inserexy2","inserexy","dependencias.php","i3GEOF.inserexy.iniciaJanelaFlutuante()")},cliqueGrafico:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cliqueGrafico()","inseregrafico","insereGrafico","dependencias.php","i3GEOF.insereGrafico.iniciaJanelaFlutuante()")},cliqueIdentificaDefault:function(x,y){if(objposicaocursor.imgx<70){return}if(i3GEO.barraDeBotoes.BOTAOCLICADO!=="identifica"&&i3GEO.eventos.cliquePerm.ativo===false){return}i3GEO.eventos.removeEventos("MOUSEPARADO",["verificaTip()"]);if(i3GEO.Interface.ATUAL==="googleearth"&&i3GEO.eventos.MOUSECLIQUE.length>1){return}if(typeof(i3GEOF.identifica)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/identifica/dependencias.php",temp=function(){if(x){i3GEOF.identifica.criaJanelaFlutuante(x,y)}else{i3GEOF.identifica.criaJanelaFlutuante(objposicaocursor.ddx,objposicaocursor.ddy)}};i3GEO.util.scriptTag(js,temp,"i3GEOF.identifica_script")}else{if(x){i3GEOF.identifica.buscaDadosTema(i3GEO.temaAtivo,x,y)}else{i3GEOF.identifica.buscaDadosTema(i3GEO.temaAtivo,objposicaocursor.ddx,objposicaocursor.ddy)}return}},verificaTipDefault:function(e){if(i3GEO.barraDeBotoes.BOTAOCLICADO!=="identificaBalao"&&i3GEO.eventos.cliquePerm.ativo===false){return}if(i3GEO.eventos.cliquePerm.status===false){return}else{i3GEO.eventos.cliquePerm.status=false}if(i3GEO.Interface.ATUAL==="googleearth"&&i3GEO.eventos.MOUSECLIQUE.length>1){return}var ntemas,etiquetas,j,retorna,x=objposicaocursor.ddx,y=objposicaocursor.ddy;ntemas=i3GEO.arvoreDeCamadas.CAMADAS.length;etiquetas=false;for(j=0;j<ntemas;j+=1){if(i3GEO.arvoreDeCamadas.CAMADAS[j].etiquetas!==""){etiquetas=true}}if(etiquetas===false){return}if(i3GEO.Interface.ATUAL==="googleearth"){i3GEO.Interface.googleearth.aguarde.visibility="visible"}retorna=function(retorno){var textoCompleto="",textoSimples="",textoTempCompleto="",textoTempSimples="",classeCor,temp,n,mostra,res,temas,ntemas,titulo,tips,j,ntips,r,ds,nds,s,configura=i3GEO.configura,tipotip=configura.tipotip;i3GEO.eventos.cliquePerm.status=true;mostra=false;retorno=retorno.data;if(retorno!==""){res="";temas=retorno;if(!temas){return}ntemas=temas.length;for(j=0;j<ntemas;j+=1){titulo=temas[j].nome;if(tipotip!="simples"){titulo="<span class='toolTipBalaoTitulo'><b>"+titulo+"</b></span><br>"}else{titulo=""}tips=temas[j].resultado.todosItens;ntips=tips.length;ins="";textoTempCompleto="";textoTempSimples="";ds=temas[j].resultado.dados;if(ds!==" "&&ds[0]&&ds[0]!=" "){try{nds=ds.length;classeCor="toolTipBalaoTexto";for(s=0;s<nds;s+=1){textoTempCompleto+="<div class='"+classeCor+"'>";textoTempSimples+="<div class='"+classeCor+"'>";for(r=0;r<ntips;r+=1){try{temp="";var alias=ds[s][tips[r]].alias;var valor=ds[s][tips[r]].valor;var link=ds[s][tips[r]].link;var img=ds[s][tips[r]].img;if(valor!==""&&link===""){temp+="<span>"+alias+" :"+valor+"</span><br>"}if(valor!==""&&link!==""){temp+="<span>"+alias+" : <a style='color:blue;cursor:pointer' target=_blanck href='"+link+"' >"+valor+"</a></span><br>"}if(img!==""){temp+=img+"<br>"}if(tipotip!="completo"&&ds[s][tips[r]].tip.toLowerCase()==="sim"){textoTempSimples+=temp}textoTempCompleto+=temp;mostra=true}catch(e){}}if(classeCor==="toolTipBalaoTexto"){classeCor="toolTipBalaoTexto1"}else{classeCor="toolTipBalaoTexto"}textoTempCompleto+="</div>";textoTempSimples+="</div>"}}catch(e){}}if(textoTempSimples!==""){textoCompleto+=titulo+textoTempCompleto;textoSimples+=titulo+textoTempSimples}}if(mostra===true){if(tipotip!="simples"){res=textoSimples}else{res=textoCompleto}if(tipotip==="balao"){i3GEO.Interface[i3GEO.Interface.ATUAL].balao(textoSimples,textoCompleto,x,y)}else{n=$i(tipotip);if(!n){n=i3GEO.janela.tip();n=$i(n);n.style.textAlign="left";n.innerHTML+=res}else{n.innerHTML=textoSimples}}}}if($i(i3GEO.Interface.IDMAPA)){$i(i3GEO.Interface.IDMAPA).title="";temp="identifica";i3GEO.util.mudaCursor(configura.cursores,temp,i3GEO.Interface.IDMAPA,configura.locaplic)}};i3GEO.php.identifica3(retorna,x,y,i3GEO.mapa.RESOLUCAOTIP,"tip",i3GEO.configura.locaplic,i3GEO.configura.sid,"ligados",i3GEO.parametros.mapexten)}}};