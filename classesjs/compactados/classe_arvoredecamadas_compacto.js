if(typeof(i3GEO)==='undefined'){i3GEO=[]}i3GEO.arvoreDeCamadas={VERIFICAABRANGENCIATEMAS:true,finaliza:"",EXPANDESOLEGENDA:false,PERMITEEXPANDIRTEMAS:true,ARRASTARORDEM:true,ARRASTARLIXEIRA:true,LIGARDESLIGARTODOS:true,EXPANDIDA:false,LEGENDAEXPANDIDA:false,OPCOESICONES:true,OPCOESTEMAS:true,OPCOESLEGENDA:true,AGUARDALEGENDA:false,ICONETEMA:true,CAMADAS:"",ARVORE:null,IDHTML:"listaTemas",SID:null,LOCAPLIC:null,ATIVATEMA:"",cria:function(onde,temas,g_sid,g_locaplic,funcaoTema){if(arguments.length===5){i3GEO.arvoreDeCamadas.ATIVATEMA=funcaoTema}if(g_sid){this.SID=g_sid}else{this.SID=i3GEO.configura.sid}if(g_locaplic){this.LOCAPLIC=g_locaplic}else{this.LOCAPLIC=i3GEO.configura.locaplic}if(onde!==""){this.IDHTML=onde}if(this.IDHTML===""){return}if(!$i(this.IDHTML)){return}if(temas==undefined){return}this.atualiza(temas);if(this.finaliza!=""){eval(this.finaliza)}},atualiza:function(temas){if(arguments.length===0){temas=i3GEO.arvoreDeCamadas.CAMADAS;i3GEO.arvoreDeCamadas.CAMADAS=""}var estilo,temp,currentIconMode,newVal,root,tempNode,titulo,d,c,ltema,temaNode,grupoNode,i,j,n,nk,k,incluidos=[];temp=$i(i3GEO.arvoreDeCamadas.IDHTML);if(temp){if(temp.innerHTML!==""){if(i3GEO.arvoreDeCamadas.comparaTemas(temas,i3GEO.arvoreDeCamadas.CAMADAS)){return}}}else{return}document.getElementById(i3GEO.arvoreDeCamadas.IDHTML).innerHTML="";i3GEO.arvoreDeCamadas.CAMADAS=temas;YAHOO.example.treeExample=function(){function changeIconMode(){newVal=parseInt(this.value,10);if(newVal!==currentIconMode){currentIconMode=newVal}buildTree()}function buildTree(){i3GEO.arvoreDeCamadas.ARVORE=new YAHOO.widget.TreeView(i3GEO.arvoreDeCamadas.IDHTML);root=i3GEO.arvoreDeCamadas.ARVORE.getRoot();tempNode=new YAHOO.widget.TextNode('',root,false);tempNode.isLeaf=false;tempNode.enableHighlight=false}buildTree()}();root=i3GEO.arvoreDeCamadas.ARVORE.getRoot();titulo="<table><tr><td><b>"+$trad("a7")+"</b></td><td>";if(i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){titulo+="<img id='i3geo_lixeira' title='"+$trad("t2")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />"}if(i3GEO.arvoreDeCamadas.LIGARDESLIGARTODOS===true){titulo+="&nbsp;<img onclick='i3GEO.arvoreDeCamadas.aplicaTemas(\"ligartodos\");' id='olhoAberto' title='"+$trad("t3a")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />";titulo+="&nbsp;<img onclick='i3GEO.arvoreDeCamadas.aplicaTemas(\"desligartodos\");' id='olhoFechado' title='"+$trad("t3b")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />"}titulo+="</td></tr></table>";d={html:titulo};tempNode=new YAHOO.widget.HTMLNode(d,root,true,true);tempNode.enableHighlight=false;if(navm){estilo="text-align:left;font-size:11px;vertical-align:middle;display:table-cell;"}else{estilo="text-align:left;font-size:11px;vertical-align:vertical-align:top;padding-top:4px;"}if(i3GEO.configura.grupoLayers===""){c=temas.length;for(i=0,j=c;i<j;i++){ltema=temas[i];try{if(ltema.escondido!=="sim"){d={html:i3GEO.arvoreDeCamadas.montaTextoTema(ltema),id:ltema.name,tipo:"tema"};temaNode=new YAHOO.widget.HTMLNode(d,tempNode,i3GEO.arvoreDeCamadas.EXPANDIDA,true);if(i3GEO.arvoreDeCamadas.PERMITEEXPANDIRTEMAS===true){if(i3GEO.arvoreDeCamadas.EXPANDESOLEGENDA===false){temaNode.setDynamicLoad(i3GEO.arvoreDeCamadas.montaOpcoes,currentIconMode)}else{temaNode.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraLegenda,1)}}temaNode.expanded=i3GEO.arvoreDeCamadas.EXPANDIDA;temaNode.enableHighlight=false}}catch(e){}}}else{nk=temas.length;c=i3GEO.configura.grupoLayers.length;for(i=0;i<c;i++){temp="";if(i3GEO.configura.grupoLayers[i].icone&&i3GEO.configura.grupoLayers[i].icone==true){temp+="<p style="+estilo+" ><input class=inputsb style=cursor:pointer onclick='i3GEO.arvoreDeCamadas.ligaDesligaTemas(\""+i3GEO.configura.grupoLayers[i].layers+"\",this.checked)' type=checkbox title='Ligar/desligar temas do grupo' />&nbsp;"}temp+="<span style="+estilo+";vertical-align:top ><b>"+i3GEO.configura.grupoLayers[i].nome+"</b></span></p>";d={html:temp};grupoNode=new YAHOO.widget.HTMLNode(d,tempNode,i3GEO.arvoreDeCamadas.EXPANDIDA,true);grupoNode.enableHighlight=false;if(i3GEO.configura.grupoLayers[i].expandido&&i3GEO.configura.grupoLayers[i].expandido==true){grupoNode.expanded=true}n=i3GEO.configura.grupoLayers[i].layers.length;for(j=0;j<n;j++){for(k=0;k<nk;k++){ltema=temas[k];if(ltema.name===i3GEO.configura.grupoLayers[i].layers[j]&&ltema.escondido=="nao"){d={html:i3GEO.arvoreDeCamadas.montaTextoTema(ltema),id:ltema.name,tipo:"tema"};if(i3GEO.configura.grupoLayers[i].dinamico&&i3GEO.configura.grupoLayers[i].dinamico==true){temaNode=new YAHOO.widget.HTMLNode(d,grupoNode,i3GEO.arvoreDeCamadas.EXPANDIDA,true)}else{temaNode=new YAHOO.widget.HTMLNode(d,tempNode,i3GEO.arvoreDeCamadas.EXPANDIDA,true)}temaNode.setDynamicLoad(i3GEO.arvoreDeCamadas.montaOpcoes,currentIconMode);temaNode.expanded=false;temaNode.enableHighlight=false;incluidos.push(ltema.name)}}}}d={html:"<b>Outros</b>"};grupoNode=new YAHOO.widget.HTMLNode(d,tempNode,i3GEO.arvoreDeCamadas.EXPANDIDA,true);grupoNode.expanded=false;grupoNode.enableHighlight=false;c=incluidos.length;for(k=0;k<nk;k++){ltema=temas[k];n=false;for(j=0;j<c;j++){if(incluidos[j]===ltema.name||ltema.escondido=="sim"){n=true}}if(n===false){d={html:i3GEO.arvoreDeCamadas.montaTextoTema(ltema),id:ltema.name,tipo:"tema"};temaNode=new YAHOO.widget.HTMLNode(d,grupoNode,i3GEO.arvoreDeCamadas.EXPANDIDA,true);temaNode.setDynamicLoad(i3GEO.arvoreDeCamadas.montaOpcoes,currentIconMode);temaNode.expanded=false;temaNode.enableHighlight=false}}}document.getElementById(i3GEO.arvoreDeCamadas.IDHTML).style.textAlign="left";i3GEO.arvoreDeCamadas.ARVORE.draw();if(i3GEO.arvoreDeCamadas.ARRASTARORDEM===true||i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){this.ativaDragDrop()}try{if($i("i3GEOidentificalistaTemas")){i3GEOF.identifica.listaTemas();g_tipoacao="identifica"}}catch(r){}if(i3GEO.temaAtivo!==""){i3GEO.mapa.ativaTema(i3GEO.temaAtivo)}i3GEO.arvoreDeCamadas.verificaAbrangenciaTemas();if(i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS==true&&i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.arvoreDeCamadas.verificaAbrangenciaTemas()")<0){i3GEO.eventos.NAVEGAMAPA.push("i3GEO.arvoreDeCamadas.verificaAbrangenciaTemas()")}},ligaDesligaTemas:function(lista,status){var n,i,aplica=false;lista=lista.split(",");n=lista.length;for(i=0;i<n;i++){if(i3GEO.arvoreDeCamadas.capturaCheckBox(lista[i]).checked!=status){aplica=true}i3GEO.arvoreDeCamadas.capturaCheckBox(lista[i]).checked=status;if(aplica==true&&i3GEO.Interface.ATUAL!=="padrao"){i3GEO.arvoreDeCamadas.capturaCheckBox(lista[i]).onclick.call()}}if(aplica==true&&i3GEO.Interface.ATUAL=="padrao"){i3GEO.arvoreDeCamadas.aplicaTemas()}},ativaDragDrop:function(){var Dom,Event,DDM;Dom=YAHOO.util.Dom;Event=YAHOO.util.Event;DDM=YAHOO.util.DragDropMgr;YAHOO.example.DDList="";YAHOO.example.DDApp={init:function(){var ddtarget,i,ltema,ddlist;if($i("i3geo_lixeira")&&i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){ddtarget=new YAHOO.util.DDTarget("i3geo_lixeira")}i=i3GEO.arvoreDeCamadas.CAMADAS.length-1;if(i3GEO.arvoreDeCamadas.CAMADAS.length-1>=0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if($i("arrastar_"+ltema.name)){ddlist=new YAHOO.example.DDList("arrastar_"+ltema.name)}}while(i--)}}};YAHOO.example.DDList=function(id,sGroup,config){YAHOO.example.DDList.superclass.constructor.call(this,id,sGroup,config);this.logger=this.logger||YAHOO;Dom.setStyle(this.getDragEl(),"opacity",0.67);this.goingUp=false;this.lastY=0};YAHOO.extend(YAHOO.example.DDList,YAHOO.util.DDProxy,{startDrag:function(x,y){var dragEl,clickEl;this.logger.log(this.id+" startDrag");dragEl=this.getDragEl();clickEl=this.getEl();Dom.setStyle(clickEl,"visibility","hidden");dragEl.innerHTML=clickEl.innerHTML;Dom.setStyle(dragEl,"color",Dom.getStyle(clickEl,"color"));Dom.setStyle(dragEl,"backgroundColor",Dom.getStyle(clickEl,"backgroundColor"));Dom.setStyle(dragEl,"border","4px solid gray");Dom.setStyle(dragEl,"z-index","5000")},endDrag:function(e){var srcEl,proxy,a,thisid,proxyid;srcEl=this.getEl();proxy=this.getDragEl();Dom.setStyle(proxy,"visibility","");a=new YAHOO.util.Motion(proxy,{points:{to:Dom.getXY(srcEl)}},0.2,YAHOO.util.Easing.easeOut);proxyid=proxy.id;thisid=this.id;a.onComplete.subscribe(function(){Dom.setStyle(proxyid,"visibility","hidden");Dom.setStyle(thisid,"visibility","")});a.animate();if($i("i3geo_lixeira")){$i("i3geo_lixeira").style.border="0px solid blue"}},onDragDrop:function(e,id){var pt,region,tema,destEl,els,lista,noid,temp;if(DDM.interactionInfo.drop.length===1){pt=DDM.interactionInfo.point;region=DDM.interactionInfo.sourceRegion;if(!region.intersect(pt)){DDM.refreshCache();if(DDM.getDDById(id).id==="i3geo_lixeira"){if(i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){tema=(this.getEl()).id.split("arrastar_")[1];i3GEO.tema.exclui(tema)}}else{if(i3GEO.arvoreDeCamadas.ARRASTARORDEM===true){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));destEl=Dom.get(id);noid=id.split("arrastar_")[1];destEl.appendChild(this.getEl());els=i3GEO.arvoreDeCamadas.listaLigadosDesligados();lista=els[2].join(",");temp=function(retorno){i3GEO.atualiza(retorno);if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ordenaLayers()}};i3GEO.php.reordenatemas(temp,lista)}}}}},onDrag:function(e){var y;y=Event.getPageY(e);if(y<this.lastY){this.goingUp=true}else if(y>this.lastY){this.goingUp=false}this.lastY=y},onDragOver:function(e,id){var srcEl,destEl;srcEl=this.getEl();destEl=Dom.get(id);if($i("i3geo_lixeira")&&id==="i3geo_lixeira"){$i("i3geo_lixeira").style.border="1px solid red"}else{destEl.style.textDecoration="underline"}},onDragOut:function(e,id){$i(id).style.textDecoration="none"}});Event.onDOMReady(YAHOO.example.DDApp.init,YAHOO.example.DDApp,true)},montaOpcoes:function(node){var d,conteudo,opcoesNode,idtema,ltema,farol,mfarol,tnome,iconesNode;idtema=node.data.id;ltema=i3GEO.arvoreDeCamadas.pegaTema(idtema);if(i3GEO.arvoreDeCamadas.OPCOESICONES===true){farol="maisamarelo.png";mfarol="";if(ltema.escala*1<i3GEO.parametros.mapscale*1){farol="maisverde.png";mfarol=$trad("t9")}if(ltema.escala*1>i3GEO.parametros.mapscale*1){farol="maisvermelho.png";mfarol=$trad("t10")}if(ltema.escala===0){farol="maisamarelo.png";mfarol=$trad("t11")}tnome="&nbsp;<img id='farol"+ltema.name+"' src='"+i3GEO.util.$im(farol)+"' title='"+mfarol+"' />";tnome+="&nbsp;<img  id='idx"+ltema.name+"' class='x' src='"+i3GEO.util.$im("branco.gif")+"' title='"+$trad("t12")+"' onclick='i3GEO.tema.exclui(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t12a")+"','exclui')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />";tnome+="&nbsp;<img class='sobe' src='"+i3GEO.util.$im("branco.gif")+"' title='"+$trad("t13")+"' onclick='i3GEO.tema.sobe(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t14")+"','sobe')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />";tnome+="&nbsp;<img class='desce' src='"+i3GEO.util.$im("branco.gif")+"' title='"+$trad("t15")+"' onclick='i3GEO.tema.desce(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t16")+"','desce')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />";tnome+="&nbsp;<img class='fonte' src='"+i3GEO.util.$im("branco.gif")+"' title='"+$trad("a9")+"' onclick='i3GEO.tema.fonte(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("a9")+"','fonte')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />";if((ltema.zoomtema==="sim")&&(i3GEO.Interface.ATUAL!=="flamingo")){tnome+="&nbsp;<img class='extent' src='"+i3GEO.util.$im("branco.gif")+"' title='"+$trad("t17")+"' onclick='i3GEO.tema.zoom(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t18")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}d={html:tnome};iconesNode=new YAHOO.widget.HTMLNode(d,node,false,true);iconesNode.enableHighlight=false;iconesNode.isLeaf=true;if(ltema.permitecomentario.toLowerCase()!=="nao"&&i3GEO.arvoreDeTemas.OPCOESADICIONAIS.comentarios==true){temp=i3GEO.configura.locaplic+"/ms_criamapa.php?layers="+ltema.name;tnome="<iframe src='http://www.facebook.com/plugins/like.php?href="+temp+"&amp;layout=button_count&amp;show_faces=false&amp;width=200&amp;action=like&amp;colorscheme=light&amp;height=21' scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:200px; height:21px;' allowTransparency='true'></iframe>";d={html:tnome};iconesNode=new YAHOO.widget.HTMLNode(d,node,false,true);iconesNode.enableHighlight=false;iconesNode.isLeaf=true}}if(i3GEO.arvoreDeCamadas.OPCOESTEMAS===true){conteudo=$trad("t18a");d={html:conteudo,idopcoes:ltema.name,identifica:ltema.identifica};opcoesNode=new YAHOO.widget.HTMLNode(d,node,false,true);opcoesNode.enableHighlight=false;opcoesNode.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraOpcoes,1)}if(i3GEO.arvoreDeCamadas.OPCOESLEGENDA===true){conteudo=$trad("p3");d={html:conteudo,idlegenda:ltema.name};opcoesNode=new YAHOO.widget.HTMLNode(d,node,i3GEO.arvoreDeCamadas.LEGENDAEXPANDIDA,true);opcoesNode.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraLegenda,1);opcoesNode.enableHighlight=false}node.loadComplete()},mostraOpcoes:function(node){var idtema,ltema,tnome,d,n,temp;idtema=node.data.idopcoes;ltema=i3GEO.arvoreDeCamadas.pegaTema(idtema);if(navm){tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t19")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" >"+$trad("t20")+"</span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=42' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","tr"+ltema.name,"","3",ltema.transparency)+"&nbsp;<a  class='tic' onclick='i3GEO.tema.mudatransp(\""+ltema.name+"\")' href='#' /a>"}else{tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t19")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" >"+$trad("t20")+"</span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=42' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","tr"+ltema.name,"","3",ltema.transparency)+"<img  class='tic' style='position:relative;top:3px;' onclick='i3GEO.tema.mudatransp(\""+ltema.name+"\")' src='"+i3GEO.util.$im("branco.gif")+"' />"}d={html:tnome};n=new YAHOO.widget.HTMLNode(d,node,false,true);n.enableHighlight=false;n.isLeaf=true;if(navm){tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t21a")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"+$trad("t21")+" </span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=43' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","nn"+ltema.name,"","8","")+"&nbsp;<a  class='tic' onclick='i3GEO.tema.mudanome(\""+ltema.name+"\")' href='#' />"}else{tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t21a")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"+$trad("t21")+" </span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=43' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","nn"+ltema.name,"","10","")+"<img  class='tic' style='position:relative;top:3px;' onclick='i3GEO.tema.mudanome(\""+ltema.name+"\")' src='"+i3GEO.util.$im("branco.gif")+"' />"}d={html:tnome};n=new YAHOO.widget.HTMLNode(d,node,false,true);n.enableHighlight=false;n.isLeaf=true;if((ltema.type<3)&&(ltema.connectiontype!==7)){if(i3GEO.Interface.ATUAL!=="flamingo"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t22"),$trad("t23"),'i3GEO.tema.dialogo.procuraratrib(\"'+ltema.name+'\")',node)}i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t24"),$trad("t25"),'i3GEO.tema.dialogo.toponimia(\"'+ltema.name+'\")',node);if(ltema.identifica=="sim"||ltema.identifica=="SIM"||ltema.identifica==""){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t26"),$trad("t27"),'i3GEO.tema.dialogo.etiquetas(\"'+ltema.name+'\")',node)}i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t28"),$trad("t29"),'i3GEO.tema.dialogo.filtro(\"'+ltema.name+'\")',node);i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t30"),$trad("t31"),'i3GEO.tema.dialogo.tabela(\"'+ltema.name+'\")',node);if(i3GEO.parametros.versaoms>4){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t37"),$trad("t37"),'i3GEO.tema.dialogo.graficotema(\"'+ltema.name+'\")',node)}}if(ltema.type<4){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t32"),$trad("t33"),'i3GEO.tema.dialogo.editaLegenda(\"'+ltema.name+'\")',node)}if(i3GEO.Interface.ATUAL!=="googlemaps"&&i3GEO.Interface.ATUAL!=="googleearth"&&i3GEO.Interface.ATUAL!=="flamingo"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t34"),$trad("t35"),'i3GEO.navega.destacaTema.inicia(\"'+ltema.name+'\")',node)}if(i3GEO.Interface.ATUAL!=="padrao"&&i3GEO.Interface.ATUAL!=="googleearth"&&i3GEO.Interface.ATUAL!=="flamingo"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t42"),$trad("t42"),'i3GEO.tema.dialogo.cortina(\"'+ltema.name+'\")',node)}if(ltema.editorsql=="sim"||ltema.editorsql=="SIM"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t40"),$trad("t41"),'i3GEO.tema.dialogo.editorsql(\"'+ltema.name+'\")',node)}if(ltema.permitecomentario.toLowerCase()!=="nao"&&i3GEO.arvoreDeTemas.OPCOESADICIONAIS.comentarios==true){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t45"),$trad("t45"),'i3GEO.tema.dialogo.comentario(\"'+ltema.name+'\")',node)}if(i3GEO.parametros.editor=="sim"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t44"),"<span style=color:red title='Apenas usu�rios editores podem ver essa op��o' >"+$trad("t44")+"</span>",'i3GEO.tema.dialogo.salvaMapfile(\"'+ltema.name+'\")',node)}node.loadComplete()},adicionaOpcaoTema:function(dica,titulo,onclick,node){var tnome,d,n;tnome="<a href='#' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+dica+"','');\" onclick="+onclick+">"+titulo+" </a>";d={html:tnome};n=new YAHOO.widget.HTMLNode(d,node,false,true);n.enableHighlight=false;n.isLeaf=true},mostraLegenda:function(node){var idtema,ltema,retorna;idtema=node.data.idlegenda;ltema=i3GEO.arvoreDeCamadas.pegaTema(idtema);retorna=function(retorno){var original,i,re,tabela,linhas,linha,colunas,id,exp,incluir,d,nodeLeg,elementos,nelementos,inputs,desativar,nindices;if(retorno.data.legenda){original=retorno;retorno=retorno.data.legenda;if(retorno[0]){if((navn)&&(!retorno[0].imagem)){tabela=retorno}else{i=retorno[0].imagem;re=new RegExp("tiff","g");i=i.replace(re,'png');tabela="<img src='"+i+"' />"}retorno=""}else{linhas=retorno.split("#");if(linhas.length>1){linhas=retorno.split("|");tabela="<table>";linha=linhas.length-1;if(linha>=0){do{colunas=linhas[linha].split("#");id=colunas[0]+"-"+colunas[1];re=new RegExp("'","g");exp=colunas[3].replace(re,'"');tabela+="<tr style='border-top:1px solid rgb(240,240,240);'><td><img src='"+colunas[4]+"' </td><td style='text-align:left'>"+colunas[2]+"</td></tr>"}while(linha--)}tabela+="</table><br>"}else{tabela=retorno}}}else{tabela="<img src='"+retorno.data[0].imagem+"' />"}incluir="<div style='text-align:left' id='"+idtema+"verdiv"+"'>"+tabela+"</div>";d={html:incluir};nodeLeg=new YAHOO.widget.HTMLNode(d,node,false,false);nodeLeg.enableHighlight=false;node.loadComplete();elementos=document.getElementById(idtema+"verdiv").getElementsByTagName("input");nelementos=elementos.length;inputs=[];i=0;if(nelementos>0){do{if(elementos[i].type==="checkbox"){inputs.push(elementos[i])}i++}while(i<nelementos)}if(original.data.desativar){desativar=original.data.desativar;nindices=desativar.length;i=0;if(nindices>0){do{inputs[desativar[i]].checked=false;i++}while(i<nindices)}}};if(i3GEO.configura.templateLegenda!==""){i3GEO.php.criaLegendaHTML(retorna,idtema,i3GEO.configura.templateLegenda)}else{i3GEO.php.criaLegendaHTML(retorna,idtema)}},atualizaLegenda:function(idtema){var node;if(document.getElementById(idtema+"verdiv")){node=i3GEO.arvoreDeCamadas.ARVORE.getNodeByProperty("idlegenda",idtema);if(node){i3GEO.arvoreDeCamadas.ARVORE.removeChildren(node);this.mostraLegenda(node);if($i("janelaLegenda"+idtema+"_corpo")){i3GEO.tema.mostralegendajanela(idtema,"","abrejanela")}}}},escolheCorClasse:function(leg){var obj,novoel;leg=leg.parentNode.getElementsByTagName("input")[0];if(!$i("tempinputcorclasse")){novoel=document.createElement("input");novoel.id="tempinputcorclasse";novoel.style.display="none";novoel.alt="objeto criado para guardar dados da funcao escolohercorclasse";novoel.onchange="";document.body.appendChild(novoel)}obj=$i("tempinputcorclasse");obj.value="";obj.tema=leg.name;obj.idclasse=leg.value;obj.onchange=function(){var obj=$i("tempinputcorclasse");i3GEO.tema.alteracorclasse(obj.tema,obj.idclasse,obj.value)};i3GEO.util.abreCor("","tempinputcorclasse")},inverteStatusClasse:function(leg){var temp=function(retorno){i3GEO.atualiza();i3GEO.Interface.atualizaTema(retorno,leg.name)};i3GEO.php.inverteStatusClasse(temp,leg.name,leg.value)},montaTextoTema:function(tema){var ck,html,display="none",estilo;if(tema.status===2||tema.status==="2"){ck=' CHECKED '}else{ck=""}if(navm){estilo="text-align:left;font-size:11px;vertical-align:middle;display:table-cell;"}else{estilo="text-align:left;font-size:11px;vertical-align:vertical-align:top;padding-top:4px;"}html="<p onclick='i3GEO.mapa.ativaTema(\""+tema.name+"\")' id='arrastar_"+tema.name+"' style='"+estilo+"' ><input class=inputsb style='cursor:pointer;' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t3")+"','ligadesliga')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" type='checkbox' name=\"layer\" value='"+tema.name+"' "+ck;if(i3GEO.arvoreDeCamadas.ATIVATEMA!==""){html+="onclick=\""+i3GEO.arvoreDeCamadas.ATIVATEMA+"\""}else{html+="onclick='i3GEO.util.criaBotaoAplicar(\"i3GEO.arvoreDeCamadas.aplicaTemas\",\""+$trad("p14")+"\",\"i3geoBotaoAplicarCamadas\",this)'"}html+=" />";if(navm){estilo="cursor:pointer;vertical-align:35%;padding-top:0px;"}else{estilo="cursor:pointer;vertical-align:top;"}if(tema.iconetema!==""&&i3GEO.arvoreDeCamadas.ICONETEMA===true){html+="&nbsp;<img style='"+estilo+"' src='"+tema.iconetema+"' />"}if(tema.contextoescala==="sim"){html+="&nbsp;<img style='"+estilo+"' src="+i3GEO.util.$im("contextoescala.png")+" title='"+$trad("t36")+"' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t36")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}if(tema.sel==="sim"){html+="&nbsp;<img style='"+estilo+"' src="+i3GEO.util.$im("estasel.png")+" title='"+$trad("t4")+"' onclick='i3GEO.tema.limpasel(\""+tema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t5")+"','limpasel')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />";html+="&nbsp;<img style='"+estilo+"' src="+i3GEO.util.$im("zoomsel.gif")+" title='"+$trad("t4a")+"' onclick='i3GEO.tema.zoomsel(\""+tema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t5")+"','zoomsel')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}if((tema.download==="sim")||(tema.download==="SIM")){html+="&nbsp;<img style='"+estilo+"' src="+i3GEO.util.$im("down1.gif")+" title='download' onclick='i3GEO.tema.dialogo.download(\""+tema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t6")+"','download')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}if(navm){estilo="cursor:move;vertical-align:35%;padding-top:0px;"}else{estilo="cursor:move;vertical-align:top;"}if(i3GEO.arvoreDeCamadas.AGUARDALEGENDA){html+="&nbsp;<span id='ArvoreTituloTema"+tema.name+"' style='"+estilo+"' onclick=\"i3GEO.tema.mostralegendajanela('"+tema.name+"','"+tema.tema+"','abrejanela');\" onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t7a")+"','');i3GEO.tema.mostralegendajanela('"+tema.name+"','"+tema.tema+"','ativatimer');\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('');i3GEO.tema.mostralegendajanela('"+tema.name+"','','desativatimer');\" >"+tema.tema+"</span>"}else{html+="&nbsp;<span id='ArvoreTituloTema"+tema.name+"' style='"+estilo+"' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t7")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" >"+tema.tema+"</span>"}html+="</p>";return(html)},atualizaFarol:function(mapscale){var farol,l,ltema,escala;farol="maisamarelo.png";l=i3GEO.arvoreDeCamadas.CAMADAS.length-1;if(l>=0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[l];escala=ltema.escala;if(escala*1<mapscale*1){farol="maisverde.png"}if(escala*1>mapscale*1){farol="maisvermelho.png"}if(escala*1===0){farol="maisamarelo.png"}if($i("farol"+ltema.name)){$i("farol"+ltema.name).src=i3GEO.configura.locaplic+"/imagens/"+farol}}while(l--)}},aplicaTemas:function(tipo){if(arguments.length==0){tipo="normal"}var t,temp,ligar,desligar;if(tipo==="normal"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("mantem")}if(tipo==="ligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("marca");if(i3GEO.Interface.ATUAL==="googleearth"||i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps"){return}}if(tipo==="desligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("desmarca");if(i3GEO.Interface.ATUAL==="googleearth"||i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps"){return}}temp=function(){i3GEO.atualiza();i3GEO.janela.fechaAguarde("redesenha")};try{clearTimeout(tempoBotaoAplicar)}catch(erro){}tempoBotaoAplicar="";i3GEO.janela.abreAguarde("redesenha",$trad("o1"));if(tipo==="normal"){ligar=t[0].toString();desligar=t[1].toString()}if(tipo==="ligartodos"){ligar=t[2].toString();desligar=""}if(tipo==="desligartodos"){ligar="";desligar=t[2].toString()}i3GEO.php.ligatemas(temp,desligar,ligar)},listaLigadosDesligados:function(tipo){if(!$i(i3GEO.arvoreDeCamadas.IDHTML)){return[[],[],[]]}if(arguments.length===0){tipo="manter"}var nos,ligados,desligados,todos,n,i,no,cs,csn,j,c;nos=i3GEO.arvoreDeCamadas.ARVORE.getNodesByProperty("tipo","tema");ligados=[];desligados=[];todos=[];n=nos.length;i=0;do{try{no=nos[i].getEl();cs=no.getElementsByTagName("input");csn=cs.length;for(j=0;j<csn;j++){c=cs[j];if(c.name==="layer"){if(c.checked===true){ligados.push(c.value)}else{desligados.push(c.value)}todos.push(c.value);if(tipo==="marca"){c.checked=true;if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ligaDesliga(c)}if(i3GEO.Interface.ATUAL==="googlemaps"){i3GEO.Interface.googlemaps.ligaDesliga(c)}if(i3GEO.Interface.ATUAL==="googleearth"){i3GEO.Interface.googleearth.ligaDesliga(c)}}if(tipo==="desmarca"){c.checked=false;if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ligaDesliga(c)}if(i3GEO.Interface.ATUAL==="googlemaps"){i3GEO.Interface.googlemaps.ligaDesliga(c)}if(i3GEO.Interface.ATUAL==="googleearth"){i3GEO.Interface.googleearth.ligaDesliga(c)}}}}i++}catch(e){i++}}while(i<n);return([ligados,desligados,todos])},capturaCheckBox:function(tema){if(!$i(i3GEO.arvoreDeCamadas.IDHTML)){return}var nos,ligados,desligados,todos,n,i,no,cs,csn,j,c;nos=i3GEO.arvoreDeCamadas.ARVORE.getNodesByProperty("tipo","tema");n=nos.length;i=0;do{try{no=nos[i].getEl();cs=no.getElementsByTagName("input");csn=cs.length;for(j=0;j<csn;j++){c=cs[j];if(c.name==="layer"){if(c.value===tema){return c}}}i++}catch(e){i++}}while(i<n);return(null)},comparaTemas:function(novo,atual){try{var novon=novo.length,i;if(novon!==atual.length){return(false)}for(i=0;i<novon;i++){if(novo[i].name!==atual[i].name){return(false)}if(novo[i].tema!==atual[i].tema){return(false)}if(novo[i].sel!==atual[i].sel){return(false)}if(novo[i].status!==atual[i].status){return(false)}}return(true)}catch(e){return true}},pegaTema:function(idtema){var c,i,v="";c=i3GEO.arvoreDeCamadas.CAMADAS.length;for(i=0;i<c;i++){if(i3GEO.arvoreDeCamadas.CAMADAS[i].name===idtema){v=i3GEO.arvoreDeCamadas.CAMADAS[i]}}return v},filtraCamadas:function(propriedade,valor,operador,camadas){var resultado=[],i=0,temp,nelementos=camadas.length,ltema;if(nelementos>0){do{ltema=camadas[i];if(ltema.escondido!=="sim"){temp=eval("ltema."+propriedade);if(operador==="igual"){if(temp==valor){resultado.push(ltema)}}if(operador==="diferente"){if(temp!==valor){resultado.push(ltema)}}}i++}while(i<nelementos)}return resultado},alteraPropCamadas:function(propriedade,valor,camada){var resultado=[],i=0,temp,nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.name==camada){eval("ltema."+propriedade+"='"+valor+"';")}i++}while(i<nelementos)}},verificaAbrangenciaTemas:function(){if(i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS==false){return}try{var resultado=[],i=0,temp,nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema,intersec,node;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];temp=ltema.exttema;if(temp!=""){intersec=i3GEO.util.intersectaBox(temp,i3GEO.parametros.mapexten);node=$i("ArvoreTituloTema"+ltema.name);if(intersec==false){node.style.color="gray"}else{node.style.color="black"}}i++}while(i<nelementos)}}catch(e){}},verificaAplicaExtensao:function(){try{var i=0,temp="",nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.aplicaextensao=="sim"){temp=ltema.name}i++}while(i<nelementos)}}catch(e){return""}return temp}};