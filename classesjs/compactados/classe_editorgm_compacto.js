if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.editorGM={iconePonto:function(sel){if(sel){return i3GEO.configura.locaplic+"/imagens/google/symbol_middot_y.png"}else{return i3GEO.configura.locaplic+"/imagens/google/symbol_middot.png"}},aguarde:"",iddiv:"",drawingManager:"",selectedShape:null,regioestemas:{},temasregioes:{},descregioes:[],inicia:function(iddiv){var i,n,ics;i3GEO.janela.tempoMsg("Aten&ccedil;&atilde;o: apenas tabelas no esquema i3geo_metaestat podem ser editadas.");i3GEO.editorGM.iddiv=iddiv;$i(iddiv).innerHTML=i3GEO.editorGM.html();ics=$i(iddiv).getElementsByTagName("button");n=ics.length;i3GEO.barraDeBotoes.ativaBotoes();i3GEO.editorGM.comboRegiaoEditavel();for(i=0;i<n;i++){ics[i].style.backgroundColor="white";ics[i].className="iconeGuiaMovel";ics[i].onmouseout=function(){this.className="iconeGuiaMovel iconeGuiaMovelMouseOut"};ics[i].onmouseover=function(){this.className="iconeGuiaMovel iconeGuiaMovelMouseOver"};ics[i].style.backgroundImage="none";ics[i].style.height="32px";ics[i].style.width="32px";ics[i].style.border="1px solid gray";ics[i].style.margin="0px"}i3GEO.editorGM.drawingManager=new google.maps.drawing.DrawingManager({drawingMode:google.maps.drawing.OverlayType.POLYGON,drawingControl:false,drawingControlOptions:{position:google.maps.ControlPosition.TOP_CENTER,drawingModes:[google.maps.drawing.OverlayType.POLYGON,google.maps.drawing.OverlayType.MARKER,google.maps.drawing.OverlayType.POLYLINE]},markerOptions:{icon:i3GEO.editorGM.iconePonto(),clickable:true,zIndex:1,draggable:true,tema:"",colunaid:"",valorid:"",colunanome:"",valornome:"",editable:false},polygonOptions:{fillColor:'#ffff00',fillOpacity:.5,strokeWeight:2,clickable:true,zIndex:1,editable:true,tema:"",colunaid:"",valorid:"",colunanome:"",valornome:""}});i3GEO.editorGM.drawingManager.setMap(i3GeoMap);i3GEO.editorGM.drawingManager.setDrawingMode(null);google.maps.event.addListener(i3GEO.editorGM.drawingManager,'overlaycomplete',function(e){i3GEO.editorGM.drawingManager.setDrawingMode(null);i3GEO.editorGM.mudaicone();var newShape=e.overlay;newShape.type=e.type;newShape.tema=$i("i3geoCartoRegioesEditaveis").value;newShape.colunaid="";newShape.valorid="";newShape.colunanome="";newShape.valornome="";google.maps.event.addListener(newShape,'click',function(){i3GEO.editorGM.setSelection(newShape)});i3GEO.editorGM.setSelection(newShape);i3GEO.desenho.googlemaps.shapes.push(newShape)});google.maps.event.addListener(i3GEO.editorGM.drawingManager,'drawingmode_changed',i3GEO.editorGM.clearSelection);google.maps.event.addListener(i3GeoMap,'click',i3GEO.editorGM.clearSelection)},atualizaCamadasMetaestat:function(){var p=i3GEO.configura.locaplic+"/ferramentas/metaestat/analise.php?funcao=LISTACAMADASMETAESTAT&g_sid="+i3GEO.configura.sid,temp=function(retorno){var n=retorno.data.length,i;for(i=0;i<n;i++){i3GEO.Interface.atualizaTema("",retorno.data[i])}};cpJSON.call(p,"foo",temp)},html:function(){var ins='<div style=margin-left:5px >'+'	<button title="Desenhar um poligono" onclick="i3GEO.editorGM.digitalizaPol(this)"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/polygon-create.png" /></button>'+'	<button title="Adicionar ponto" onclick="i3GEO.editorGM.digitalizaPt(this)"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/point-create.png" /></button>'+'	<button title="Capturar elemento de um tema" onclick="i3GEO.editorGM.capturaPoligonoTema.ativa(this)"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/layer-import.png" /></button>'+'	<button title="Selecionar" onclick="i3GEO.editorGM.seleciona(this)"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/select.png" /></button>'+'	<button title="Remove selecionado (n&atilde;o apaga)" onclick="i3GEO.editorGM.deleteSelectedShape()"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/selected-delete.png" /></button>'+'	<button title="Salvar/excluir dados" onclick="i3GEO.editorGM.salvaLimite.inicia()"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/vector-save.png" /></button>'+'	<button title="Editar atributos" onclick="i3GEO.editorGM.editarAtributos.ativa(this)"><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/annotation-form.png" /></button>'+'	<button title="Ajuda" onmousedown="i3GEO.editorGM.mudaicone()" onclick="i3GEO.editorGM.ajuda()" ><img src="'+i3GEO.configura.locaplic+'/imagens/gisicons/help-contents.png" /></button>'+'	<br><div id="i3geoCartoRegioesEditaveisDiv" ><img style="display:block;z-index:2" src="'+i3GEO.configura.locaplic+'/imagens/aguarde.gif" /></div></div>';return ins},ativaFoco:function(){i3GEO.util.mudaCursor(i3GEO.configura.cursores,"crosshair",i3GEO.Interface.IDMAPA,i3GEO.configura.locaplic);i3GEO.barraDeBotoes.ativaIcone("pan");i3GEO.editorGM.mudaicone();i3GEO.Interface.googlemaps.recalcPar()},setSelection:function(shape){if(shape.setEditable){shape.setEditable(!shape.editable)}else{shape.editable=true;shape.setIcon({url:i3GEO.editorGM.iconePonto(true)})}},clearSelection:function(){var i,n=i3GEO.desenho.googlemaps.shapes.length;for(i=0;i<n;i++){if(i3GEO.desenho.googlemaps.shapes[i]!=""&&i3GEO.desenho.googlemaps.shapes[i].setEditable){i3GEO.desenho.googlemaps.shapes[i].setEditable(false)}else if(i3GEO.desenho.googlemaps.shapes[i]!=""){i3GEO.desenho.googlemaps.shapes[i].editable=false;if(i3GEO.desenho.googlemaps.shapes[i].setIcon){i3GEO.desenho.googlemaps.shapes[i].setIcon({url:i3GEO.editorGM.iconePonto(false)})}}}},selectAll:function(){var i,n=i3GEO.desenho.googlemaps.shapes.length;for(i=0;i<n;i++){if(i3GEO.desenho.googlemaps.shapes[i]!=""&&i3GEO.desenho.googlemaps.shapes[i].setEditable){i3GEO.desenho.googlemaps.shapes[i].setEditable(true)}else if(i3GEO.desenho.googlemaps.shapes[i]!=""){i3GEO.desenho.googlemaps.shapes[i].editable=true;i3GEO.desenho.googlemaps.shapes[i].setIcon({url:i3GEO.editorGM.iconePonto(true)})}}},deleteSelectedShape:function(naoconfirma){if(!naoconfirma){naoconfirma=false}var i,n=i3GEO.desenho.googlemaps.shapes.length;if(n>0){if(naoconfirma===false){var x=window.confirm("Remove as figuras selecionadas?")}else{x=true}if(x){for(i=0;i<n;i++){if(i3GEO.desenho.googlemaps.shapes[i]!=""&&i3GEO.desenho.googlemaps.shapes[i].editable&&i3GEO.desenho.googlemaps.shapes[i].editable===true){i3GEO.desenho.googlemaps.shapes[i].setMap(null);i3GEO.desenho.googlemaps.shapes[i]=""}}}}else{i3GEO.janela.tempoMsg("Selecione pelo menos uma figura")}},selectedShapes:function(){var i,s=[],n=i3GEO.desenho.googlemaps.shapes.length;for(i=0;i<n;i++){if(i3GEO.desenho.googlemaps.shapes[i]!=""&&i3GEO.desenho.googlemaps.shapes[i].editable===true){s.push(i3GEO.desenho.googlemaps.shapes[i])}}return s},getCoordenadas:function(){var coordenadas=[],lista=[],n=i3GEO.desenho.googlemaps.shapes.length,tipo="",ps,nps,j,p,i,r={};for(i=0;i<n;i++){coordenadas=[];if(i3GEO.desenho.googlemaps.shapes[i]!=""&&i3GEO.desenho.googlemaps.shapes[i].editable===true){if(tipo==""){tipo=i3GEO.desenho.googlemaps.shapes[i].type}ps=i3GEO.desenho.googlemaps.shapes[i].getPath();nps=ps.getLength();for(j=0;j<nps;j++){p=ps.getAt(j);coordenadas.push([p.lng()+" "+p.lat()])}lista.push(coordenadas)}}r={"tipo":tipo,"coordenadas":lista};return r},toWKT:function(obj){var wkt=new Wkt.Wkt();wkt.fromObject(obj);return wkt.write()},merge:function(geoms){var n=geoms.length,w=new Wkt.Wkt(),g,m,i;w.read(geoms[0].toString());if(n>1){for(i=1;i<n;i++){g=geoms[i].toString();m=new Wkt.Wkt();m.read(g);w.merge(m)}}return w.write()},capturaPoligonoTema:{ativa:function(botao){i3GEO.editorGM.mudaicone(botao);i3GEO.eventos.cliquePerm.desativa();i3GEO.eventos.adicionaEventos("MOUSECLIQUE",["i3GEO.editorGM.capturaPoligonoTema.captura()"]);i3GEO.util.mudaCursor(i3GEO.configura.cursores,"crosshair",i3GEO.Interface.IDMAPA,i3GEO.configura.locaplic)},desativa:function(){},captura:function(){var temp,tema="",regiao="",p,par,aguarde=$i("i3GEOjanelaEditor_imagemCabecalho");if(!$i("i3geoCartoRegioesEditaveis")){i3GEO.eventos.removeEventos("MOUSECLIQUE",["i3GEO.editorGM.capturaPoligonoTema.captura()"])}else{temp=function(retorno){var temp,n,i,WicketWkt,wkt="",colunaid=i3GEO.editorGM.descregioes["a_"+regiao]["identificador"],valorid="",colunanome=i3GEO.editorGM.descregioes["a_"+regiao]["colunanomeregiao"],valornome="",aguarde=$i("i3GEOjanelaEditor_imagemCabecalho");if(aguarde){aguarde.style.visibility="hidden"}temp=retorno.data[0].resultado[0];if(temp===" "){i3GEO.janela.tempoMsg("Nada encontrado");return}i3GEO.editorGM.mudaicone();n=temp.length;for(i=0;i<n;i++){if(temp[i].alias=="wkt"){wkt=temp[i].valor}if(temp[i].alias==colunaid||temp[i].item==colunaid){valorid=temp[i].valor}if(temp[i].alias==colunanome||temp[i].item==colunanome){valornome=temp[i].valor}}WicketWkt=new Wkt.Wkt();try{WicketWkt.read(wkt)}catch(e1){try{wkt.read(wkt.replace('\n','').replace('\r','').replace('\t',''))}catch(e2){if(e2.name==='WKTError'){alert('Wicket could not understand the WKT string you entered. Check that you have parentheses balanced, and try removing tabs and newline characters.');return}}}obj=WicketWkt.toObject(i3GeoMap.defaults);i3GEO.editorGM.adicionaPoligonos(obj,tema,colunaid,valorid,colunanome,valornome);i3GEO.eventos.MOUSECLIQUE=[]};regiao=$i("i3geoCartoRegioesEditaveis").value;if(regiao!=""){tema=i3GEO.editorGM.regioestemas["a"+regiao];if(aguarde&&aguarde.style.visibility=="hidden"){aguarde.style.visibility="visible";p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php";par="funcao=identifica3&opcao=tema&xy="+objposicaocursor.ddx+","+objposicaocursor.ddy+"&resolucao=5&g_sid="+i3GEO.configura.sid+"&ext="+i3GEO.parametros.mapexten+"&listaDeTemas=&wkt=sim&tema="+tema;cpJSON.call(p,"identifica",temp,par)}}}}},comboRegiaoEditavel:function(codigo_tipo_regiao){if(!codigo_tipo_regiao){codigo_tipo_regiao=""}var onde=$i("i3geoCartoRegioesEditaveisDiv"),temp=function(dados){var n=dados.length,ins='<br><p class="paragrafo" >Camadas edit&aacute;veis:</p>',i;ins+="<select onchange='i3GEO.editorGM.comboRegiaoEditavelOnchange(this)' id='i3geoCartoRegioesEditaveis' style='width:175px' ><option value=''>---</option>";for(i=0;i<n;i++){if(dados[i].esquemadb=="i3geo_metaestat"){ins+="<option value='"+dados[i].codigo_tipo_regiao+"'>"+dados[i].nome_tipo_regiao+"</option>";i3GEO.editorGM.descregioes["a_"+dados[i].codigo_tipo_regiao]=dados[i]}}ins+="</select>";if(onde){onde.innerHTML=ins}return ins};i3GEO.php.listaTipoRegiao(temp,codigo_tipo_regiao)},comboRegiaoEditavelOnchange:function(combo){if(combo.value===""){return}i3GEO.editorGM.editarAtributos.desativa();var temp=function(retorno){if(i3GEO.arvoreDeCamadas.pegaTema(retorno.layer)==""){i3GEO.php.adtema(i3GEO.atualiza,retorno.mapfile);i3GEO.editorGM.regioestemas["a"+$i("i3geoCartoRegioesEditaveis").value]=retorno.layer;i3GEO.editorGM.temasregioes[retorno.layer]=$i("i3geoCartoRegioesEditaveis").value}};i3GEO.php.mapfileTipoRegiao(temp,combo.value)},mudaicone:function(botao){var c=$i(i3GEO.editorGM.iddiv),ci=c.getElementsByTagName("img"),n=ci.length,i;for(i=0;i<n;i++){ci[i].parentNode.style.backgroundColor="#F5F5F5"}i3GEO.eventos.MOUSECLIQUE=[];i3GEO.editorGM.capturaPoligonoTema.desativa();i3GEO.editorGM.editarAtributos.desativa();if(botao&&botao.style){botao.style.backgroundColor="#cedff2"}},digitalizaPol:function(botao){i3GEO.editorGM.mudaicone(botao);i3GEO.util.mudaCursor(i3GEO.configura.cursores,"pointer",i3GEO.Interface.IDMAPA,i3GEO.configura.locaplic);i3GEO.editorGM.drawingManager.setOptions({drawingMode:google.maps.drawing.OverlayType.POLYGON})},digitalizaPt:function(botao){i3GEO.editorGM.mudaicone(botao);i3GEO.util.mudaCursor(i3GEO.configura.cursores,"pointer",i3GEO.Interface.IDMAPA,i3GEO.configura.locaplic);i3GEO.editorGM.drawingManager.setOptions({drawingMode:google.maps.drawing.OverlayType.MARKER})},seleciona:function(botao){i3GEO.editorGM.mudaicone(botao);i3GEO.util.mudaCursor(i3GEO.configura.cursores,"pointer",i3GEO.Interface.IDMAPA,i3GEO.configura.locaplic);i3GEO.editorGM.drawingManager.setOptions({drawingMode:null})},adicionaPoligonos:function(obj,tema,colunaid,valorid,colunanome,valornome){if(!tema){tema=$i("i3geoCartoRegioesEditaveis").value}if(!colunaid){colunaid=""}if(!valorid){valorid=""}if(!colunanome){colunanome=""}if(!valornome){valornome=""}var pol;if(Wkt.isArray(obj)){for(i in obj){if(obj.hasOwnProperty(i)&&!Wkt.isArray(obj[i])){pol=new google.maps.Polygon({path:obj[i].getPath(),map:i3GeoMap,fillColor:'#ffff00',fillOpacity:.5,strokeWeight:2,clickable:true,zIndex:1,editable:true,tema:tema,colunaid:colunaid,valorid:valorid,colunanome:colunanome,valornome:valornome});google.maps.event.addListener(pol,'click',function(){i3GEO.editorGM.setSelection(pol)});i3GEO.desenho.googlemaps.shapes.push(pol)}}return}if(obj.type==='polygon'||obj.type==='linestring'){pol=new google.maps.Polygon({paths:obj.getPaths(),map:i3GeoMap,fillColor:'#ffff00',fillOpacity:.5,strokeWeight:2,clickable:true,zIndex:1,editable:true,tema:tema,colunaid:colunaid,valorid:valorid,colunanome:colunanome,valornome:valornome});google.maps.event.addListener(pol,'click',function(){i3GEO.editorGM.setSelection(pol)});i3GEO.desenho.googlemaps.shapes.push(pol);return}if(obj.type==='marker'){i3GEO.editorGM.selectAll();if(i3GEO.desenho.googlemaps.shapes.length>0){i3GEO.editorGM.deleteSelectedShape(true)}pol=new google.maps.Marker({position:new google.maps.LatLng(obj.getPosition().ob,obj.getPosition().pb),map:i3GeoMap,icon:{url:i3GEO.editorGM.iconePonto(false)},clickable:true,zIndex:1,draggable:true,tema:tema,colunaid:colunaid,valorid:valorid,colunanome:colunanome,valornome:valornome,editable:false});google.maps.event.addListener(pol,'click',function(){i3GEO.editorGM.setSelection(pol)});i3GEO.desenho.googlemaps.shapes.push(pol);return}},salvaLimite:{inicia:function(){if(i3GEO.login.verificaCookieLogin()===false){i3GEO.janela.tempoMsg("Voc&ecirc; precisa fazer login para usar a op&ccedil;&atilde;o de salvar no banco de dados");if(i3GEO.editorGM.selectedShapes().length>0){var temp=i3GEO.editorGM.toWKT(i3GEO.editorGM.selectedShapes()[0]);i3GEO.mapa.dialogo.wkt2layer(temp)}return}var s=i3GEO.editorGM.selectedShapes(),n=s.length,janela=YAHOO.i3GEO.janela.manager.find("salvaLimite");if(janela){janela.destroy()}if(n==1){s=s[0];i3GEO.editorGM.salvaLimite.criaJanelaFlutuante(i3GEO.editorGM.salvaLimite.html(s.colunaid,s.valorid,s.colunanome,s.valornome));new YAHOO.widget.Button("i3GEOFmetaestati3GEO.editorGMBotao1",{onclick:{fn:function(){i3GEO.editorGM.salvaLimite.gravaDados(true)}}});new YAHOO.widget.Button("i3GEOFmetaestati3GEO.editorGMBotao2",{onclick:{fn:function(){i3GEO.editorGM.salvaLimite.gravaDados(false)}}});new YAHOO.widget.Button("i3GEOFmetaestati3GEO.editorGMBotao3",{onclick:{fn:function(){i3GEO.editorGM.salvaLimite.excluiPoligono()}}})}else{i3GEO.janela.tempoMsg("Selecione uma figura")}},html:function(colunaIdElemento,valorIdElemento,colunaNomeElemento,valorNomeElemento){var ins=''+'<p class=paragrafo >Se o valor do c&oacute;digo for vazio, ser&aacute; criado um novo elemento. Caso contr&aacute;rio, os valores atualmente registrados ser&atilde;o atualizados.</p>'+'<p class=paragrafo >Edite os atributos:</p>'+'<input type=hidden id="inputColunaIdElemento" value="'+colunaIdElemento+'" />'+'<input type=hidden id="inputColunaNomeElemento" value="'+colunaNomeElemento+'" />'+'<input type=hidden id="inputIdentificadorElemento" value="'+valorIdElemento+'" />'+'<input type=hidden id="inputNomeElemento" value="'+valorNomeElemento+'" />'+'<p class=paragrafo >C&oacute;digo:</p>'+'<p class=paragrafo ><input class=digitar type=text id="inputIdentificadorNovoElemento" value="'+valorIdElemento+'" style="width:180;cursor:text" /></p>'+'<p class=paragrafo >Nome:</p>'+'<p class=paragrafo ><input class=digitar type=text id="inputNomeNovoElemento" value="'+valorNomeElemento+'" style="width:180;cursor:text" /></p>'+'<p class=paragrafo >Escolha a opera&ccedil;&atilde;o desejada:</p>'+'<input id=i3GEOFmetaestati3GEO.editorGMBotao1 type="button" value="Salvar tudo" />'+'&nbsp;<input id=i3GEOFmetaestati3GEO.editorGMBotao2 type="button" value="Salvar apenas os atributos" />'+'<br><br><input id=i3GEOFmetaestati3GEO.editorGMBotao3 type="button" value="Excluir" />';return ins},criaJanelaFlutuante:function(html){var titulo,cabecalho,minimiza,janela;cabecalho=function(){};minimiza=function(){i3GEO.janela.minimiza("salvaLimite")};titulo="Salva limite&nbsp;&nbsp;&nbsp;</a>";janela=i3GEO.janela.cria("300px","265px","","","",titulo,"salvaLimite",true,"hd",cabecalho,minimiza);$i("salvaLimite_corpo").style.backgroundColor="white";$i("salvaLimite_corpo").innerHTML=html;YAHOO.util.Event.addListener(janela[0].close,"click",i3GEO.editorGM.mudaicone)},gravaDados:function(comwkt){if(i3GEO.login.verificaCookieLogin()===false){i3GEO.janela.tempoMsg("Voc&ecirc; precisa fazer login para usar essa op&ccedil;&atilde;o");return}if(!window.confirm("Grava mesmo os dados?")){return}var p,codigo_tipo_regiao=$i("i3geoCartoRegioesEditaveis").value,identificadornovo=$i("inputIdentificadorNovoElemento").value,identificador=$i("inputIdentificadorElemento").value,nome=$i("inputNomeNovoElemento").value,wkt="",temp=function(retorno){i3GEO.editorGM.deleteSelectedShape(true);var janela=YAHOO.i3GEO.janela.manager.find("salvaLimite");if(janela){janela.destroy()}i3GEO.Interface.redesenha()};if(comwkt===true){wkt=i3GEO.editorGM.toWKT(i3GEO.editorGM.selectedShapes()[0])}else{if(identificadornovo===identificador&&$i("inputNomeElemento").value===nome){i3GEO.janela.tempoMsg("Valores iguais ao original");return}}p=i3GEO.configura.locaplic+"/admin/php/metaestat.php?funcao=mantemDadosRegiao&tipo=";cpJSON.call(p,"foo",temp,"&codigo_tipo_regiao="+codigo_tipo_regiao+"&identificadornovo="+identificadornovo+"&identificador="+identificador+"&nome="+nome+"&wkt="+wkt)},excluiPoligono:function(){if(i3GEO.login.verificaCookieLogin()===false){i3GEO.janela.tempoMsg("Voc&ecirc; precisa fazer login para usar essa op&ccedil;&atilde;o");return}if(!window.confirm("Exclui mesmo o poligono?")){return}var codigo_tipo_regiao=$i("i3geoCartoRegioesEditaveis").value,identificador=$i("inputIdentificadorElemento").value,temp=function(retorno){i3GEO.editorGM.deleteSelectedShape(true);var janela=YAHOO.i3GEO.janela.manager.find("salvaLimite");if(janela){janela.destroy()}i3GEO.Interface.redesenha()},p=i3GEO.configura.locaplic+"/admin/php/metaestat.php?funcao=mantemDadosRegiao&tipo=excluir";cpJSON.call(p,"foo",temp,"&codigo_tipo_regiao="+codigo_tipo_regiao+"&identificador="+identificador)}},editarAtributos:{aliascolunas:"",x:"",y:"",ativa:function(botao){if($i("i3geoCartoRegioesEditaveis").value==""){i3GEO.janela.tempoMsg("Escolha uma regiao");return}i3GEO.editorGM.mudaicone(botao);i3GEO.eventos.adicionaEventos("MOUSECLIQUE",["i3GEO.editorGM.editarAtributos.captura()"]);var janela=YAHOO.i3GEO.janela.manager.find("editaAtributos");if(janela){$i("editarAtributosForm").innerHTML=""}else{i3GEO.editorGM.editarAtributos.criaJanelaFlutuante(i3GEO.editorGM.editarAtributos.html());i3GEO.editorGM.editarAtributos.comboVariaveis()}},desativa:function(){var janela=YAHOO.i3GEO.janela.manager.find("editaAtributos");if(janela){janela.destroy()}},criaJanelaFlutuante:function(html){var janela,titulo,cabecalho,minimiza;cabecalho=function(){};minimiza=function(){i3GEO.janela.minimiza("editaAtributos")};titulo="Atributos&nbsp;&nbsp;&nbsp;</a>";janela=i3GEO.janela.cria("250px","265px","","","",titulo,"editaAtributos",false,"hd",cabecalho,minimiza);$i("editaAtributos_corpo").style.backgroundColor="white";$i("editaAtributos_corpo").innerHTML=html;i3GEO.janela.tempoMsg("Ap&oacute;s escolher a medida da vari&aacute;vel, clique no mapa para escolher o limite geogr&aacute;fico.");YAHOO.util.Event.addListener(janela[0].close,"click",i3GEO.editorGM.mudaicone)},html:function(){var ins=''+'<p class="paragrafo" ><div id="editarAtributosVariaveis" ></div></p>'+'<p class="paragrafo" ><div id="editarAtributosMedidasVariavel" ></div></p>'+'<p class="paragrafo" ><div id="editarAtributosRegiao" ></div></p>'+'<p class="paragrafo" ><div id="editarAtributosForm" ></div></p>'+'';return ins},comboVariaveis:function(){var temp=function(dados){var i,n=dados.length,ins='';ins+='<p class="paragrafo" >Escolha uma vari&aacute;vel para editar</p>';ins+="<select style='box-shadow:0 1px 5px gray;width:200px' onchange='i3GEO.editorGM.editarAtributos.comboMedidasVariavel(this)'><option value=''>---</option>";for(i=0;i<n;i++){ins+="<option title='"+dados[i].descricao+"' value='"+dados[i].codigo_variavel+"'>"+dados[i].nome+"</option>"}ins+="</select>";$i("editarAtributosVariaveis").innerHTML=ins};i3GEO.php.listaVariavel(temp,"i3geo_metaestat")},comboMedidasVariavel:function(comboMedidas){var temp=function(dados){var i,n=dados.length,ins='';ins+='<p class="paragrafo" >Escolha uma medida da vari&aacute;vel para editar</p>';ins+="<select id='editarAtributosComboMedidas' style='box-shadow:0 1px 5px gray;width:200px' onchange=''><option value=''>---</option>";for(i=0;i<n;i++){if(dados[i].esquemadb=="i3geo_metaestat"&&dados[i].codigo_tipo_regiao==$i("i3geoCartoRegioesEditaveis").value){ins+="<option value='"+dados[i].id_medida_variavel+"'>"+dados[i].nomemedida+"</option>"}}ins+="</select>";$i("editarAtributosMedidasVariavel").innerHTML=ins};if(comboMedidas.value!==""){i3GEO.php.listaMedidaVariavel(comboMedidas.value,temp)}},captura:function(){if(!YAHOO.i3GEO.janela.manager.find("editaAtributos")){i3GEO.editorGM.mudaicone(botao);return}i3GEO.editorGM.editarAtributos.x=objposicaocursor.ddx;i3GEO.editorGM.editarAtributos.y=objposicaocursor.ddy;i3GEO.editorGM.editarAtributos.pegaDados()},pegaDados:function(){var p=i3GEO.configura.locaplic+"/admin/php/metaestat.php?funcao=listaAtributosMedidaVariavelXY",codigo_tipo_regiao=$i("i3geoCartoRegioesEditaveis").value,id_medida_variavel=$i("editarAtributosComboMedidas").value,temp=function(retorno){var atr=retorno.atributos,i=0,n=atr.dados.length,j=0,idunico="",nj=atr.aliascolunas.length,ins=""+'<p class=paragrafo >Limite geogr&aacute;fico escolhido:</p>'+'<p class=paragrafo ><b>Nome: </b>'+retorno.regiao.nomeregiao+'</p>'+'<p class=paragrafo ><b>C&oacute;digo: </b>'+retorno.regiao.identificador_regiao+'</p>'+'<input type=hidden id="editarAtributosidentificador_regiao" value="'+retorno.regiao.identificador_regiao+'" />'+'<p class=paragrafo >Atributos:</p>'+'<input id=editarAtributosAdicionar value="Adicionar um novo" />'+'&nbsp;<input id=editarAtributosSalvar value="Salvar" />';$i("editarAtributosRegiao").innerHTML=ins;ins="";for(i=0;i<n;i++){for(j=0;j<nj;j++){if(atr.aliascolunas[j]=="idunico"){idunico=atr.dados[i][atr.colunas[j]]}}ins+="<hr><div><p class=paragrafo style='color:blue;cursor:pointer' onclick='i3GEO.editorGM.editarAtributos.excluir("+idunico+")' >excluir</p>";for(j=0;j<nj;j++){if(atr.aliascolunas[j]!=="idunico"){ins+='<p class=paragrafo >'+atr.aliascolunas[j]+':<br>'+'<input class=digitar id="idunico_'+idunico+'" value="'+atr.dados[i][atr.colunas[j]]+'" name="'+atr.colunas[j]+'" /></p>'}}}$i("editarAtributosForm").innerHTML=ins;new YAHOO.widget.Button("editarAtributosAdicionar",{onclick:{fn:function(){var novoel=document.createElement("div"),ins="<hr><br>";for(j=0;j<nj;j++){if(atr.aliascolunas[j]!=="idunico"){ins+='<p class=paragrafo >'+atr.aliascolunas[j]+' - '+atr.descricao[j]+':<br>'+'<input class=digitar id="" value="" name="'+atr.colunas[j]+'" /></p>'}}ins+"<br></div>";novoel.innerHTML=ins;$i("editarAtributosForm").appendChild(novoel)}}});new YAHOO.widget.Button("editarAtributosSalvar",{onclick:{fn:function(){i3GEO.editorGM.editarAtributos.salva()}}})};cpJSON.call(p,"foo",temp,"&codigo_tipo_regiao="+codigo_tipo_regiao+"&id_medida_variavel="+id_medida_variavel+"&x="+i3GEO.editorGM.editarAtributos.x+"&y="+i3GEO.editorGM.editarAtributos.y)},excluir:function(id){if(i3GEO.login.verificaCookieLogin()===false){i3GEO.janela.tempoMsg("Voc&ecirc; precisa fazer login para usar essa op&ccedil;&atilde;o");return}var p=i3GEO.configura.locaplic+"/admin/php/metaestat.php?funcao=excluiAtributosMedidaVariavel",codigo_tipo_regiao=$i("i3geoCartoRegioesEditaveis").value,id_medida_variavel=$i("editarAtributosComboMedidas").value,identificador_regiao=$i("editarAtributosidentificador_regiao").value,temp=function(retorno){i3GEO.editorGM.editarAtributos.pegaDados();i3GEO.janela.fechaAguarde("aguardeSalvaAtributos")};i3GEO.janela.AGUARDEMODAL=true;i3GEO.janela.abreAguarde("aguardeSalvaAtributos","Salvando...");i3GEO.janela.AGUARDEMODAL=false;cpJSON.call(p,"foo",temp,"&codigo_tipo_regiao="+codigo_tipo_regiao+"&identificador_regiao="+identificador_regiao+"&id_medida_variavel="+id_medida_variavel+"&id="+id)},salva:function(){if(i3GEO.login.verificaCookieLogin()===false){i3GEO.janela.tempoMsg("Voc&ecirc; precisa fazer login para usar essa op&ccedil;&atilde;o");return}var container=$i("editarAtributosForm"),divsT=container.getElementsByTagName("div"),n=divsT.length,i=0,dv="",inputs="",codigo_tipo_regiao=$i("i3geoCartoRegioesEditaveis").value,id_medida_variavel=$i("editarAtributosComboMedidas").value,identificador_regiao=$i("editarAtributosidentificador_regiao").value,nj,j,colunas=[],colunasT=[],valores=[],valoresT=[],idsunicosT=[],p=i3GEO.configura.locaplic+"/admin/php/metaestat.php?funcao=salvaAtributosMedidaVariavel",re=new RegExp("idunico_","g"),temp=function(retorno){i3GEO.editorGM.editarAtributos.pegaDados();i3GEO.editorGM.atualizaCamadasMetaestat();i3GEO.janela.fechaAguarde("aguardeSalvaAtributos")};if(codigo_tipo_regiao==""){i3GEO.janela.tempoMsg("Problemas com o codigo da regiao");return}if(id_medida_variavel==""){i3GEO.janela.tempoMsg("Escolha uma medida");return}if(identificador_regiao==""){i3GEO.janela.tempoMsg("Problemas com o identificador da regiao");return}for(i=0;i<n;i++){dv=divsT[i];inputs=dv.getElementsByTagName("input");nj=inputs.length;colunas=[];valores=[];for(j=0;j<nj;j++){colunas.push(inputs[j].name);valores.push(inputs[j].value)}idsunicosT.push(inputs[0].id.replace(re,''));colunasT.push(colunas.join(";"));valoresT.push(valores.join(";"))}i3GEO.janela.AGUARDEMODAL=true;i3GEO.janela.abreAguarde("aguardeSalvaAtributos","Salvando...");i3GEO.janela.AGUARDEMODAL=false;cpJSON.call(p,"foo",temp,"&codigo_tipo_regiao="+codigo_tipo_regiao+"&identificador_regiao="+identificador_regiao+"&id_medida_variavel="+id_medida_variavel+"&colunas="+colunasT[0]+"&valores="+valoresT.join("|")+"&idsunicos="+idsunicosT.join(";"))}},ajuda:function(){var titulo,cabecalho,minimiza,html="";cabecalho=function(){};minimiza=function(){i3GEO.janela.minimiza("editaAtributosAjuda")};titulo="Ajuda&nbsp;</a>";i3GEO.janela.cria("400px","350px","","","",titulo,"editaAtributosAjuda",false,"hd",cabecalho,minimiza);$i("editaAtributosAjuda_corpo").style.backgroundColor="white";html+="<table class=lista8 >"+"<tr><td><img src='"+i3GEO.configura.locaplic+"/imagens/gisicons/polygon-create.png' /></td>"+"<td>Clique no mapa para tra&ccedil;ar um pol&iacute;gono novo. Cada clique corresponde a um v&eacute;rtice do pol&iacute;gono. Para encerrar o tra&ccedil;ado utilize um duplo clique. Ap&oacute;s tra&ccedil;ar um novo pol&iacute;gono pode-se selecion&aacute;-lo novamente e editar os v&eacute;rtices, se for necess&aacute;rio, ou mesmo apagar o pol&iacute;gono por completo. O novo pol&iacute;gono s&oacute; ser&aacute; salvo por meio da op&ccedil;&atilde;o espec&iacute;fica para isso.</td></tr>"+"<tr><td><img src='"+i3GEO.configura.locaplic+"/imagens/gisicons/layer-import.png' /></td>"+"<td>Utilize essa op&ccedil;&atilde;o para capturar os v&eacute;rtices de um pol&iacute;gono existente. O resultado da captura &eacute; uma figura que pode ser editada, ou seja, os v&eacute;rtices podem ser modificados de posi&ccedil;&atilde;o ou mesmo removidos. Ap&oacute;s editar, salve o novo pol&iacute;gono.</td></tr>"+"<tr><td><img src='"+i3GEO.configura.locaplic+"/imagens/gisicons/select.png' /></td>"+"<td>Ap&oacute;s ativar essa op&ccedil;&atilde;o clique no mapa sobre uma figura existente (que tenha sido capturada ou digtalizada). A figura passar&aacute; ent&atilde;o para o estado de 'selecionada' podendo ser utilizada por outras ferramentas de edi&ccedil;&atilde;o.</td></tr>"+"<tr><td><img src='"+i3GEO.configura.locaplic+"/imagens/gisicons/selected-delete.png' /></td>"+"<td>Remove da tela a figura que estiver selecionada. Essa opera&ccedil;&atilde;o n&atilde;o apaga o pol&iacute;gono do banco de dados, apenas remove do modo de edi&ccedil;&atilde;o.</td></tr>"+"<tr><td><img src='"+i3GEO.configura.locaplic+"/imagens/gisicons/vector-save.png' /></td>"+"<td>Salva no banco de dados a figura que estiver selecionada. Essa op&ccedil;&atilde;o altera apenas os atributos do limite geogr&aacute;fico, n&atilde;o afetando os valores armazenados em cada medida de vari&aacute;vel.</td></tr>"+"<tr><td><img src='"+i3GEO.configura.locaplic+"/imagens/gisicons/annotation-form.png' /></td>"+"<td>Abre um formul&aacute;rio que permite alterar os valores de uma medida de vari&aacute;vel relacionada a uma determinada regi&atilde;o. Ap&oacute;s abrir o formul&aacute;rio, clique no mapa sobre a regi&atilde;o desejada, mas escolha a medida da vari&aacute;vel primeiro. Os valores j&aacute; existentes poder&atilde;o ent&atilde;o ser alterados ou podem ser adicionados novos.</td></tr>"+"</table>";$i("editaAtributosAjuda_corpo").innerHTML=html}};google.maps.Marker.prototype.type='marker';google.maps.Polyline.prototype.type='polyline';google.maps.Polygon.prototype.type='polygon';google.maps.Rectangle.prototype.type='rectangle';google.maps.Circle.prototype.type='circle';(function(Wkt){Wkt.Wkt.prototype.isRectangle=false;Wkt.Wkt.prototype.construct={point:function(config,component){var c=component||this.components;config=config||{};config.position=new google.maps.LatLng(c[0].y,c[0].x);return new google.maps.Marker(config)},multipoint:function(config){var i,c,arr;c=this.components;config=config||{};arr=[];for(i=0;i<c.length;i+=1){arr.push(this.construct.point(config,c[i]))}return arr},linestring:function(config,component){var i,c;c=component||this.components;config=config||{editable:false};config.path=[];for(i=0;i<c.length;i+=1){config.path.push(new google.maps.LatLng(c[i].y,c[i].x))}return new google.maps.Polyline(config)},multilinestring:function(config){var i,c,arr;c=this.components;config=config||{editable:false};config.path=[];arr=[];for(i=0;i<c.length;i+=1){arr.push(this.construct.linestring(config,c[i]))}return arr},box:function(config,component){var c=component||this.components;config=config||{};config.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(c[0].y,c[0].x),new google.maps.LatLng(c[1].y,c[1].x));return new google.maps.Rectangle(config)},polygon:function(config,component){var j,k,c,rings,verts;c=component||this.components;config=config||{editable:false};config.paths=[];rings=[];for(j=0;j<c.length;j+=1){verts=[];for(k=0;k<c[j].length-1;k+=1){verts.push(new google.maps.LatLng(c[j][k].y,c[j][k].x))}if(j!==0){if(config.reverseInnerPolygons==null||config.reverseInnerPolygons){verts.reverse()}}rings.push(verts)}config.paths=config.paths.concat(rings);if(this.isRectangle){return(function(){var bounds,v=0;bounds=new google.maps.LatLngBounds();for(v in rings[0]){if(rings[0].hasOwnProperty(v)){bounds.extend(rings[0][v])}}return new google.maps.Rectangle({bounds:bounds})}())}else{return new google.maps.Polygon(config)}},multipolygon:function(config){var i,c,arr;c=this.components;config=config||{editable:false};config.path=[];arr=[];for(i=0;i<c.length;i+=1){arr.push(this.construct.polygon(config,c[i]))}return arr}};Wkt.Wkt.prototype.deconstruct=function(obj,multiFlag){var features,i,j,verts,rings,sign,tmp,response,lat,lng;if(google.maps.geometry){sign=google.maps.geometry.spherical.computeSignedArea};if(obj.constructor===google.maps.LatLng){response={type:'point',components:[{x:obj.lng(),y:obj.lat()}]};return response}if(obj.constructor===google.maps.Point){response={type:'point',components:[{x:obj.x,y:obj.y}]};return response}if(obj.constructor===google.maps.Marker){response={type:'point',components:[{x:obj.getPosition().lng(),y:obj.getPosition().lat()}]};return response}if(obj.constructor===google.maps.Polyline){verts=[];for(i=0;i<obj.getPath().length;i+=1){tmp=obj.getPath().getAt(i);verts.push({x:tmp.lng(),y:tmp.lat()})}response={type:'linestring',components:verts};return response}if(obj.constructor===google.maps.Polygon){rings=[];if(multiFlag===undefined){multiFlag=(function(){var areas,l;l=obj.getPaths().length;if(l<=1){return false}if(l===2){if(sign(obj.getPaths().getAt(0))*sign(obj.getPaths().getAt(1))<0){return false}return true}areas=obj.getPaths().getArray().map(function(k){return sign(k)/Math.abs(sign(k)); });if(areas.indexOf(areas[0])!==areas.lastIndexOf(areas[0])){multiFlag=true;return true}return false}())}for(i=0;i<obj.getPaths().length;i+=1){tmp=obj.getPaths().getAt(i);verts=[];for(j=0;j<obj.getPaths().getAt(i).length;j+=1){verts.push({x:tmp.getAt(j).lng(),y:tmp.getAt(j).lat()})}if(!tmp.getAt(tmp.length-1).equals(tmp.getAt(0))){if(i%2!==0){verts.unshift({x:tmp.getAt(tmp.length-1).lng(),y:tmp.getAt(tmp.length-1).lat()})}else{verts.push({x:tmp.getAt(0).lng(),y:tmp.getAt(0).lat()})}}if(obj.getPaths().length>1&&i>0){if(sign(obj.getPaths().getAt(i))>0&&sign(obj.getPaths().getAt(i-1))>0||sign(obj.getPaths().getAt(i))<0&&sign(obj.getPaths().getAt(i-1))<0&&!multiFlag){verts=[verts]}}if(i%2!==0){verts.reverse()}rings.push(verts)}response={type:(multiFlag)?'multipolygon':'polygon',components:rings};return response}if(obj.constructor===google.maps.Circle){var point=obj.getCenter();var radius=obj.getRadius();verts=[];var d2r=Math.PI/180; var r2d=180/Math.PI; radius=radius/1609; var earthsradius=3963;var num_seg=32;var rlat=(radius/earthsradius)*r2d;var rlng=rlat/Math.cos(point.lat()*d2r);for(var n=0;n<=num_seg;n++){var theta=Math.PI*(n/(num_seg/2));lng=point.lng()+(rlng*Math.cos(theta));lat=point.lat()+(rlat*Math.sin(theta));verts.push({x:lng,y:lat})}response={type:'polygon',components:[verts]};return response}if(obj.constructor===google.maps.LatLngBounds){tmp=obj;verts=[];verts.push({x:tmp.getSouthWest().lng(),y:tmp.getNorthEast().lat()});verts.push({x:tmp.getNorthEast().lng(),y:tmp.getNorthEast().lat()});verts.push({x:tmp.getNorthEast().lng(),y:tmp.getSouthWest().lat()});verts.push({x:tmp.getSouthWest().lng(),y:tmp.getSouthWest().lat()});verts.push({x:tmp.getSouthWest().lng(),y:tmp.getNorthEast().lat()});response={type:'polygon',isRectangle:true,components:[verts]};return response}if(obj.constructor===google.maps.Rectangle){tmp=obj.getBounds();verts=[];verts.push({x:tmp.getSouthWest().lng(),y:tmp.getNorthEast().lat()});verts.push({x:tmp.getNorthEast().lng(),y:tmp.getNorthEast().lat()});verts.push({x:tmp.getNorthEast().lng(),y:tmp.getSouthWest().lat()});verts.push({x:tmp.getSouthWest().lng(),y:tmp.getSouthWest().lat()});verts.push({x:tmp.getSouthWest().lng(),y:tmp.getNorthEast().lat()});response={type:'polygon',isRectangle:true,components:[verts]};return response}if(obj.constructor===google.maps.Data.Feature){return this.deconstruct.call(this,obj.getGeometry())}if(obj.constructor===google.maps.Data.Point){response={type:'point',components:[{x:obj.get().lng(),y:obj.get().lat()}]};return response}if(obj.constructor===google.maps.Data.LineString){verts=[];for(i=0;i<obj.getLength();i+=1){vertex=obj.getAt(i);verts.push({x:vertex.lng(),y:vertex.lat()})}response={type:'linestring',components:verts};return response}if(obj.constructor===google.maps.Data.Polygon){var rings=[];for(i=0;i<obj.getLength();i+=1){ring=obj.getAt(i);var verts=[];for(j=0;j<ring.getLength();j+=1){vertex=ring.getAt(j);verts.push({x:vertex.lng(),y:vertex.lat()})}verts.push({x:ring.getAt(0).lng(),y:ring.getAt(0).lat()});rings.push(verts)}response={type:'polygon',components:rings};return response}if(obj.constructor===google.maps.Data.MultiPoint){verts=[];for(i=0;i<obj.getLength();i+=1){vertex=obj.getAt(i);verts.push([{x:vertex.lng(),y:vertex.lat()}])}response={type:'multipoint',components:verts};return response}if(obj.constructor===google.maps.Data.MultiLineString){linestrings=[];for(i=0;i<obj.getLength();i+=1){verts=[];var linestring=obj.getAt(i);for(j=0;j<linestring.getLength();j+=1){vertex=linestring.getAt(j);verts.push({x:vertex.lng(),y:vertex.lat()})}linestrings.push(verts)}response={type:'multilinestring',components:linestrings};return response}if(obj.constructor===google.maps.Data.MultiPolygon){var k=0,polygons=[];for(k=0;k<obj.getLength();k+=1){var polygon=obj.getAt(k);var rings=[];for(i=0;i<polygon.getLength();i+=1){ring=polygon.getAt(i);var verts=[];for(j=0;j<ring.getLength();j+=1){vertex=ring.getAt(j);verts.push({x:vertex.lng(),y:vertex.lat()})}verts.push({x:ring.getAt(0).lng(),y:ring.getAt(0).lat()});rings.push(verts)}polygons.push(rings)}response={type:'multipolygon',components:polygons};return response}if(obj.constructor===google.maps.Data.GeometryCollection){var objects=[];for(k=0;k<obj.getLength();k+=1){var object=obj.getAt(k);objects.push(this.deconstruct.call(this,object))}response={type:'geometrycollection',components:objects};return response}if(Wkt.isArray(obj)){features=[];for(i=0;i<obj.length;i+=1){features.push(this.deconstruct.call(this,obj[i],true))}response={type:(function(){var k,type=obj[0].constructor;for(k=0;k<obj.length;k+=1){if(obj[k].constructor!==type){return'geometrycollection'}}switch(type){case google.maps.Marker:return'multipoint';case google.maps.Polyline:return'multilinestring';case google.maps.Polygon:return'multipolygon';default:return'geometrycollection'}}()),components:(function(){var i,comps;comps=[];for(i=0;i<features.length;i+=1){if(features[i].components){comps.push(features[i].components)}}return{comps:comps}}())};response.components=response.components.comps;return response}}}(Wkt||require('./wicket')));