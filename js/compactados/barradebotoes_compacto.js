if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.barraDeBotoes={BARRAS:[],BOTAOCLICADO:"",ATIVA:true,TIPO:"yui",OFFSET:-205,POSICAO:"bottom",MAXBOTOES:13,AJUDA:true,ORIENTACAO:"vertical",HORIZONTALW:350,TIPOAJUDA:"balao",SOICONES:false,AUTOALTURA:false,TRANSICAOSUAVE:true,OPACIDADE:65,PERMITEFECHAR:false,PERMITEDESLOCAR:true,ATIVAMENUCONTEXTO:false,AUTO:false,LISTABOTOES:i3GEO.configura.funcoesBotoes.botoes,INCLUIBOTAO:{abreJanelaLegenda:false,localizar:false,zoomanterior:true,zoomli:true,zoomproximo:true,zoomiauto:false,zoomoauto:false,pan:true,zoomtot:true,identifica:false,identificaBalao:false,mede:false,area:false,selecao:false,barraedicao:false,imprimir:false,google:false,referencia:false,exten:false,inserexy:false,textofid:false,reinicia:false,buscafotos:false,wiki:false,metar:false,lentei:false,confluence:false,inseregrafico:false,v3d:false},ICONEBOTAO:{zoomli:"/imagens/gisicons/eudock/zoom-region.png",zoomproximo:"/imagens/gisicons/eudock/zoom-next.png",zoomanterior:"/imagens/gisicons/eudock/zoom-last.png",zoomiauto:"/imagens/gisicons/eudock/zoom-in.png",zoomoauto:"/imagens/gisicons/eudock/zoom-out.png",pan:"/imagens/gisicons/eudock/pan.png",zoomtot:"/imagens/gisicons/eudock/zoom-extent.png",identifica:"/imagens/gisicons/eudock/identify.png",identificaBalao:"/imagens/gisicons/eudock/tips.png",mede:"/imagens/gisicons/eudock/length-measure.png",area:"/imagens/gisicons/eudock/area-measure.png",imprimir:"/imagens/gisicons/eudock/print.png",reinicia:"/imagens/gisicons/eudock/redraw.png",exten:"/imagens/gisicons/eudock/map-extent-info.png",referencia:"/imagens/gisicons/eudock/map-reference.png",inserexy:"/imagens/gisicons/eudock/point-create.png",textofid:"/imagens/gisicons/eudock/text-add.png",selecao:"/imagens/gisicons/eudock/select.png",google:"/imagens/gisicons/eudock/google-map.png",buscafotos:"/imagens/gisicons/eudock/fotos.png",wiki:"/imagens/gisicons/eudock/wiki.png",metar:"/imagens/gisicons/eudock/metar.png",lentei:"/imagens/gisicons/eudock/lente.png",confluence:"/imagens/gisicons/eudock/confluence.png",inseregrafico:"/imagens/gisicons/eudock/grafico.png",v3d:"/imagens/gisicons/eudock/v3d.png",barraedicao:"/imagens/gisicons/eudock/editopen.png",localizar:"/imagens/gisicons/eudock/search.png",abreJanelaLegenda:"/imagens/gisicons/eudock/show-legend.png"},TEMPLATEBOTAO:"",BOTAOPADRAO:"pan",COMPORTAMENTO:"padrao",adicionaBotao:function(obj){i3GEO.barraDeBotoes.LISTABOTOES.push(obj);i3GEO.barraDeBotoes.ICONEBOTAO[obj.iddiv]="/imagens/oxygen/22x22/user-online.png";i3GEO.barraDeBotoes.INCLUIBOTAO[obj.iddiv]=true},ativaPadrao:function(){if(i3GEO.barraDeBotoes.ATIVA===true){try{var botao=i3GEO.barraDeBotoes.defBotao(i3GEO.barraDeBotoes.BOTAOPADRAO);if(botao.funcaoonclick){botao.funcaoonclick.call()}}catch(e){}}},ativaIcone:function(icone){if(i3GEO.barraDeBotoes.ATIVA===false){return}var estilo,temp,ist,cor,ko,estiloatual="white";if($i(icone)){estiloatual=$i(icone).style.backgroundColor}i3GEO.barraDeBotoes.BOTAOCLICADO=icone;ko=i3GEO.barraDeBotoes.LISTABOTOES.length-1;if(i3GEO.barraDeBotoes.COMPORTAMENTO==="padrao"){if(ko>=0){do{temp=$i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);if(i3GEO.barraDeBotoes.LISTABOTOES[ko].tipo==="dinamico"&&temp){ist=temp.style;ist.borderWidth="1px";ist.borderColor='white';if(i3GEO.barraDeBotoes.SOICONES===true){ist.borderLeftColor='rgb(50,50,50)';ist.borderBottomColor='rgb(50,50,50)'}}}while(ko--)}if($i(icone)){estilo=$i(icone).style;if(i3GEO.barraDeBotoes.SOICONES===false){estilo.borderColor='white';estilo.borderWidth="1px"}}}if(i3GEO.barraDeBotoes.COMPORTAMENTO==="destacado"){if(ko>=0){do{temp=$i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);if(temp){ist=temp.style;ist.borderWidth="1px";ist.borderColor='white'}}while(ko--)}if($i(icone)){estilo=$i(icone).style;if(i3GEO.barraDeBotoes.SOICONES===false){estilo.borderColor='black';estilo.borderWidth="1px"}}}if(i3GEO.util.in_array(i3GEO.barraDeBotoes.COMPORTAMENTO,["laranja","vermelho","cinza"])){if(ko>=0){do{temp=$i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);if(temp){ist=temp.style;if(i3GEO.barraDeBotoes.SOICONES===false){ist.borderWidth="1px";ist.borderColor='white';ist.backgroundColor='white'}else{ist.backgroundColor=''}}}while(ko--)}switch(i3GEO.barraDeBotoes.COMPORTAMENTO){case"laranja":cor="orange";break;case"vermelho":cor="red";break;case"cinza":cor="gray";break;default:cor="yellow"};if($i(icone)){estilo=$i(icone).style;if(i3GEO.barraDeBotoes.SOICONES===false){estilo.borderColor='black';estilo.borderWidth="1px"}if(estiloatual==cor){estilo.backgroundColor='white'}else{estilo.backgroundColor=cor}}}},ativaBotoes:function(padrao){var atrib,l,b,temp;if(arguments.length===0){padrao=this.BOTAOPADRAO}this.BOTAOCLICADO=padrao;l=this.LISTABOTOES;b=l.length-1;if(b>=0){do{temp=$i(l[b].iddiv);atrib=document.createAttribute("indxBotao");atrib.value=b;if(temp){temp.setAttributeNode(atrib);if(l[b].conteudo){temp.innerHTML=l[b].conteudo}if(l[b]&&l[b].dica&&i3GEO.barraDeBotoes.TIPO!="emlinha"){$i(l[b].iddiv).onmouseover=function(e){var i=this.attributes["indxBotao"].value,l=i3GEO.barraDeBotoes.LISTABOTOES;if(l&&l[i]&&l[i].dica){i3GEO.barraDeBotoes.mostraJanela(this,l[i].dica,e)}};$i(l[b].iddiv).onmouseout=function(e){i3GEO.barraDeBotoes.mostraJanela(this,"",e)}}if(l[b]&&l[b].titulo&&i3GEO.barraDeBotoes.TIPO==="emlinha"){new YAHOO.widget.Tooltip(l[b].iddiv+"_tip",{context:l[b].iddiv,text:l[b].titulo})}if(l[b]&&l[b].funcaoonclick){temp.onclick=l[b].funcaoonclick;if(l[b].iddiv==padrao){l[b].funcaoonclick()}}if(l[b]&&l[b].constroiconteudo){eval(l[b].constroiconteudo)}}}while(b--)}if(padrao===""){this.ativaIcone("")}},execBotao:function(id,x,y,posX,posY){if(i3GEO.barraDeBotoes.ATIVA===false){return}var botao=i3GEO.barraDeBotoes.defBotao(id);i3GEO.barraDeBotoes.BOTAOCLICADO=id;if(botao===false){return}try{if(botao.funcaoonclick){botao.funcaoonclick.call()}}catch(e){}},defBotao:function(iddiv){var l=i3GEO.barraDeBotoes.LISTABOTOES,b=l.length-1;if(b>=0){do{if(l[b].iddiv===iddiv){return l[b]}}while(b--)}return false},inicializaBarraOP:function(onde,numBotoes){if(i3GEO.barraDeBotoes.ATIVA===false||!$i(i3GEO.Interface.IDCORPO)){return}var divBarra=document.createElement("div"),chaves=i3GEO.util.listaChaves(i3GEO.barraDeBotoes.INCLUIBOTAO),icones=[],imagens=[],n=7,i,botao,titulo,imagem,l,topo,vis="visible";if(i3GEO.barraDeBotoes.SOICONES===true){vis="hidden"}if(i3GEO.barraDeBotoes.MAXBOTOES>0){n=i3GEO.barraDeBotoes.MAXBOTOES}if(numBotoes){n=numBotoes}if(i3GEO.barraDeBotoes.POSICAO==="top"){topo=(i3GEO.parametros.h+i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO))[1]+i3GEO.barraDeBotoes.OFFSET)*-1}else{topo=(i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO))[1]+i3GEO.barraDeBotoes.OFFSET)*-1;topo=topo-6}divBarra.style.position="relative";divBarra.style.top=topo+"px";divBarra.style.margin="auto";divBarra.style.marginLeft="0px";divBarra.style.textAlign="center";divBarra.style.width=(i3GEO.parametros.w-100)+"px";divBarra.style.left="50px";divBarra.style.height="0px";l=0;for(i=0;i<n;i+=1){if(chaves[i]&&i3GEO.barraDeBotoes.INCLUIBOTAO[chaves[i]]&&i3GEO.barraDeBotoes.INCLUIBOTAO[chaves[i]]===true){botao=i3GEO.barraDeBotoes.defBotao(chaves[i]);if(botao===false||i3GEO.barraDeBotoes.AJUDA===false){titulo=""}else{if(botao.titulo!=undefined&&i3GEO.barraDeBotoes.AJUDA===true){titulo=botao.titulo}else{titulo=""}}if(i3GEO.barraDeBotoes.ICONEBOTAO[chaves[i]]){imagem=i3GEO.configura.locaplic+i3GEO.barraDeBotoes.ICONEBOTAO[chaves[i]];icones.push('<img name="'+chaves[i]+'" class="eudockImagemBottom" onclick="javascript:i3GEO.util.animaClique(this);i3GEO.barraDeBotoes.execBotao(this.name)" style="width: 38px; height: 38px; position: absolute; visibility: visible; left: '+l+'px; top: 0px;" src="'+imagem+'" title="'+titulo+'">')}else{imagem=i3GEO.configura.locaplic+"/imagens/branco.gif";icones.push('<img id="'+chaves[i]+'" name="'+chaves[i]+'" class="eudockImagemBottom" onclick="javascript:i3GEO.util.animaClique(this);i3GEO.barraDeBotoes.execBotao(this.name)" style="width: 38px; height: 38px; position: absolute; visibility: visible; left: '+l+'px; top: 0px;" src="'+imagem+'" title="'+titulo+'">')}l+=38}}if(!onde){onde=document.body}if(i3GEO.barraDeBotoes.TIPO==="olhodepeixe1"){onde=$i(i3GEO.Interface.IDCORPO);divBarra.style.top="-30px";deslocaIcones=-50;imagens.push('<div style="left: 0px; z-index: 1; border: 0px solid black; top: 0px; position: relative; text-align: center; margin: auto;" id="euDock_0_bar" class="noprint">');imagens.push('<img onclick="javascript:i3GEO.util.animaClique(this);i3GEO.barraDeBotoes.ajudaEmLista()" id="euDock_euImage_2" class="noprint" style="position: relative; visibility: '+vis+'; left: 0px; top: 0px;" src="'+i3GEO.configura.locaplic+'/imagens/dockBg-l.png">');imagens.push('<img id="euDock_euImage_3" width="'+l+'" height="28" class="noprint" style="position: relative; visibility: '+vis+'; left: 0px; top: 0px;" src="'+i3GEO.configura.locaplic+'/imagens/dockBg-c-o.png" >');imagens.push('<img id="euDock_euImage_4" class="noprint" style="position: relative; visibility: '+vis+'; left: 0px; top: 0px;" src="'+i3GEO.configura.locaplic+'/imagens/dockBg-r.png" >');imagens.push('</div>');imagens.push('<div style="margin:auto; z-index: 1; position: relative; border: 0px solid black; cursor: pointer; top: '+deslocaIcones+'px; width: '+l+'px; height: 38px;" id="euDock_0" class="noprint">');imagens.push(icones.join(""));imagens.push('</div>')}else{imagens.push('<div style="left: 0px; z-index: 1; border: 0px solid black; top: 0px; position: relative; text-align: center; margin: auto;" id="euDock_0_bar" class="noprint">');imagens.push('<img id="euDock_euImage_2" onclick="javascript:i3GEO.util.animaClique(this);i3GEO.barraDeBotoes.ajudaEmLista()" class="noprint" style="position: relative; visibility: '+vis+'; left: 0px; top: 0px;" src="'+i3GEO.configura.locaplic+'/imagens/dockBg-l.png">');imagens.push('<img id="euDock_euImage_3" width="'+l+'" height="28" class="noprint" style="position: relative; visibility: '+vis+'; left: 0px; top: 0px;" src="'+i3GEO.configura.locaplic+'/imagens/dockBg-c-o.png" >');imagens.push('<img id="euDock_euImage_4" class="noprint" style="position: relative; visibility: '+vis+'; left: 0px; top: 0px;" src="'+i3GEO.configura.locaplic+'/imagens/dockBg-r.png" >');if(i3GEO.barraDeBotoes.POSICAO==="top"){imagens.push('<div style="display: inline;margin:auto; z-index: 1; position: relative; border: 0px solid black; cursor: pointer; top: -38px; width: '+l+'px; height: 38px; left: -'+(l+20)+'px;" id="euDock_0" class="noprint">')}else{imagens.push('<div style="display: inline;margin:auto; margin-bottom: -38px;z-index: 1; position: relative; border: 0px solid black; cursor: pointer; top: -38px; width: '+l+'px; height: 38px; left: -'+(l+20)+'px;" id="euDock_0" class="noprint">')}imagens.push(icones.join(""));imagens.push('</div>');imagens.push('</div>')}divBarra.innerHTML=imagens.join("");onde.appendChild(divBarra);$i("euDock_euImage_4").onclick=function(){var nicones=icones.length;if($i("euDock_0_bar")){$i("euDock_0_bar").parentNode.parentNode.removeChild($i("euDock_0_bar").parentNode)}if(i3GEO.barraDeBotoes.MAXBOTOES===nicones){i3GEO.barraDeBotoes.inicializaBarraOP(false,30)}else{i3GEO.barraDeBotoes.inicializaBarraOP()}}},inicializaBarra:function(idconteudo,idconteudonovo,barraZoom,x,y,onde){if(i3GEO.barraDeBotoes.ATIVA===false){return}if(i3GEO.parametros.w<700){if(i3GEO.barraDeBotoes.MAXBOTOES>6){i3GEO.barraDeBotoes.MAXBOTOES=6}i3GEO.barraDeBotoes.INCLUIBOTAO.zoomanterior=false;i3GEO.barraDeBotoes.INCLUIBOTAO.zoomli=false;i3GEO.barraDeBotoes.INCLUIBOTAO.zoomproximo=false;i3GEO.barraDeBotoes.INCLUIBOTAO.zoomiauto=false;i3GEO.barraDeBotoes.INCLUIBOTAO.zoomoauto=false;i3GEO.barraDeBotoes.INCLUIBOTAO.pan=false;i3GEO.barraDeBotoes.INCLUIBOTAO.zoomtot=true}var ticone,tipo,mostra,i,temp,e,wj,recuo,alturadisponivel,n,chaves,elementos="",numerobotoes=0,nelementos=0,Dom=YAHOO.util.Dom,branco=i3GEO.configura.locaplic+'/imagens/branco.gif',novoel;if(i3GEO.configura.map3d===""){i3GEO.barraDeBotoes.INCLUIBOTAO.v3d=false}if(i3GEO.barraDeBotoes.TIPO==="olhodepeixe"||i3GEO.barraDeBotoes.TIPO==="olhodepeixe1"){if(i3GEO.barraDeBotoes.TIPO==="olhodepeixe1"&&$i(i3GEO.Interface.IDMAPA)){i3GEO.barraDeBotoes.inicializaBarraOP($i(i3GEO.Interface.IDMAPA))}else{i3GEO.barraDeBotoes.inicializaBarraOP()}}else{if(this.TEMPLATEBOTAO===""&&i3GEO.Interface.TABLET===false){this.TEMPLATEBOTAO="<div style='display:inline;background-color:rgb(250,250,250);'><img style='border:0px solid white;' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='$$'/></div>"}if(this.TEMPLATEBOTAO===""&&i3GEO.Interface.TABLET===true){this.TEMPLATEBOTAO="<div style='display:inline;background-color:rgb(250,250,250);'><img style='margin:4px;border:0px solid white;' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='$$'/></div>"}if(navm){i3GEO.barraDeBotoes.TRANSICAOSUAVE=false}if(i3GEO.barraDeBotoes.TIPO==="emlinha"){temp="<div id='"+onde+"_mascara'></div>";chaves=i3GEO.util.listaChaves(i3GEO.barraDeBotoes.INCLUIBOTAO);n=chaves.length;for(i=0;i<n;i+=1){if(i3GEO.barraDeBotoes.INCLUIBOTAO[chaves[i]]===true){temp+="<img id='"+chaves[i]+"_iconeId' onclick='i3GEO.util.animaClique(this);i3GEO.barraDeBotoes.execBotao(\""+chaves[i]+"\")' src='"+i3GEO.configura.locaplic+"/"+i3GEO.barraDeBotoes.ICONEBOTAO[chaves[i]]+"' />"}}if(!$i(onde)){novoel=document.createElement("div");novoel.id=onde;novoel.innerHTML=temp;$i(i3GEO.Interface.IDMAPA).appendChild(novoel)}else{$i(onde).innerHTML=temp}for(i=0;i<n;i+=1){temp=i3GEO.barraDeBotoes.defBotao(chaves[i]).titulo;if(temp!=""){new YAHOO.widget.Tooltip(chaves[i]+"_tip",{context:chaves[i]+"_iconeId",text:temp})}}}if(this.AUTO===true){if(idconteudo==="barraDeBotoes1"){novoel=document.createElement("div");novoel.id="barraDeBotoes1";temp='<table style="width:100%"><tr><td style="background-color:rgb(250,250,250);"><div ID="historicozoom" ></div></td></tr><tr><td style=height:5px ></td></tr></table>'+"<div style='display:inline;background-color:rgb(250,250,250);'>"+'<img title="zoom" alt="zoom" src="'+branco+'" id="zoomli"/>'+"</div>"+"<div style='display:inline;background-color:rgb(250,250,250);'>"+'<img title="desloca" alt="desloca" src="'+branco+'" id="pan"/>'+"</div>"+"<div style='display:inline;background-color:rgb(250,250,250);'>"+'<img title="geral" alt="geral" src="'+branco+'" id="zoomtot"/>'+"</div>";novoel.innerHTML=temp;document.body.appendChild(novoel)}if(idconteudo==="barraDeBotoes2"){temp="";chaves=i3GEO.util.listaChaves(i3GEO.barraDeBotoes.INCLUIBOTAO);n=chaves.length;for(i=0;i<n;i+=1){if(i3GEO.barraDeBotoes.INCLUIBOTAO[chaves[i]]===true){temp+=i3GEO.barraDeBotoes.TEMPLATEBOTAO.replace("$$",chaves[i])}}if(typeof(onde)==='undefined'){novoel=document.createElement("div");novoel.id="barraDeBotoes2";novoel.innerHTML="<table style='width:100%'>"+"<tr><td style='background-color:rgb(250,250,250);'><img title='' alt='sobe' src='"+branco+"' id='sobeferramentas'/></td></tr>"+"</table>"+temp+"<table style='width:100%;'><tr><td style='background-color:rgb(250,250,250);'><img title='desce' alt='' src='"+branco+"' id='desceferramentas'/></td></tr></table>";document.body.appendChild(novoel)}else{$i(onde).innerHTML=temp;return}}}else{if(idconteudo==="barraDeBotoes2"&&onde!==undefined){$i(onde).innerHTML=$i(idconteudo)}}wj="36px";recuo="0px";if(idconteudonovo!=""){novoel=document.createElement("div");novoel.id=idconteudonovo;novoel.style.display="block";if(this.SOICONES===false){novoel.style.border="1px solid gray";novoel.style.background="white"}else{novoel.style.border="0px solid white"}if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){Dom.setStyle(novoel,"opacity",this.OPACIDADE/100)}temp="";if(barraZoom===true){temp+=i3GEO.navega.barraDeZoom.cria()}temp+='<div id="'+idconteudonovo+'_" style="left:'+recuo+';top:0px;"  ></div>';novoel.innerHTML=temp;novoel.onmouseover=function(){YAHOO.util.Dom.setStyle("i3geo_rosa","display","none");if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){YAHOO.util.Dom.setStyle(novoel,"opacity",1)}};novoel.onmouseout=function(){if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){YAHOO.util.Dom.setStyle(novoel,"opacity",i3GEO.barraDeBotoes.OPACIDADE/100)}};document.body.appendChild(novoel)}ticone=28;alturadisponivel=i3GEO.parametros.h-i3GEO.Interface.BARRABOTOESTOP-ticone-38-38;if(this.AUTOALTURA===true){alturadisponivel+=28}numerobotoes=parseInt(alturadisponivel/ticone,10);if(idconteudo!=""&&$i(idconteudo)){$i(idconteudonovo+"_").innerHTML=$i(idconteudo).innerHTML;$i(idconteudo).innerHTML="";elementos=$i(idconteudonovo+"_").getElementsByTagName("img");nelementos=elementos.length;if(i3GEO.barraDeBotoes.ORIENTACAO==="horizontal"){numerobotoes=100}if(this.AUTOALTURA===true||(numerobotoes<nelementos)){if(elementos[0].id==="sobeferramentas"){try{elementos=$i(idconteudonovo+"_").getElementsByTagName("div");nelementos=elementos.length;i=0;do{elementos[i].style.display="none";i=i+1}while(i<nelementos);i=0;do{if(elementos[i]!=undefined){elementos[i].style.display="inline"}i=i+1}while(i<numerobotoes-1)}catch(men){}}}if(elementos.length<=numerobotoes){Dom.setStyle(["sobeferramentas","desceferramentas"],"display","none")}}if(i3GEO.barraDeBotoes.TIPO!="emlinha"){YAHOO.namespace("i3GEO.janela.botoes");if(i3GEO.barraDeBotoes.ORIENTACAO==="horizontal"){YAHOO.i3GEO.janela.botoes=new YAHOO.widget.Panel(idconteudonovo,{zIndex:20000,height:40,width:i3GEO.barraDeBotoes.HORIZONTALW,fixedcenter:false,constraintoviewport:false,underlay:"none",close:i3GEO.barraDeBotoes.PERMITEFECHAR,visible:true,draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR,modal:false,iframe:false})}else{if(this.AUTOALTURA===false||barraZoom===true||(elementos.length>numerobotoes)){YAHOO.i3GEO.janela.botoes=new YAHOO.widget.Panel(idconteudonovo,{zIndex:20000,width:wj,fixedcenter:false,constraintoviewport:false,underlay:"none",close:i3GEO.barraDeBotoes.PERMITEFECHAR,visible:true,draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR,modal:false,iframe:false})}else{YAHOO.i3GEO.janela.botoes=new YAHOO.widget.Panel(idconteudonovo,{zIndex:20000,height:i3GEO.parametros.h-4,width:wj,fixedcenter:false,constraintoviewport:false,underlay:"none",close:i3GEO.barraDeBotoes.PERMITEFECHAR,visible:true,draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR,modal:false,iframe:false})}}if(this.SOICONES===true){Dom.setStyle(["i3geo_barra2","i3geo_barra1"],"borderWidth","0 0 0 0")}YAHOO.i3GEO.janela.botoes.render();YAHOO.i3GEO.janela.botoes.moveTo(x,y);if($i("sobeferramentas")){$i("sobeferramentas").onclick=function(){elementos=$i(idconteudonovo+"_").getElementsByTagName("div");nelementos=elementos.length;if(elementos[0].style.display==="inline"&&elementos[0].id===""){return}if(nelementos>0){mostra=elementos[0];i=0;do{if(elementos[i].style){if(elementos[i].style.display==="inline"&&elementos[i].id===""){break}if(elementos[i].style.display==="none"&&elementos[i].id===""){mostra=elementos[i]}}i=i+1}while(i<nelementos);mostra.style.display="inline";i=nelementos+1;mostra=elementos[i];do{if(elementos[i]){if(elementos[i].style){if(elementos[i].style.display==="inline"){mostra=elementos[i];break}}}i=i-1}while(i>=0);mostra.style.display="none"}}}if($i("desceferramentas")){$i("desceferramentas").onclick=function(){tipo="inline";if($i(idconteudonovo+"_")){elementos=$i(idconteudonovo+"_").getElementsByTagName("div");if(elementos[elementos.length-1].style.display===tipo){return}nelementos=elementos.length;if(nelementos>0){i=0;do{e=elementos[i];if(e.style){if((e.style.display==="block")||(e.style.display==="inline")||(e.style.display==="")){if(e.id===""){e.style.display="none";break}}}i=i+1}while(i<nelementos);i=nelementos-1;var mostra=elementos[i];do{e=elementos[i];if(e.style){if(e.style.display===tipo){break}if(e.style.display==="none"){mostra=e}}i=i-1}while(i>=0);mostra.style.display=tipo}}}}this.BARRAS.push(YAHOO.i3GEO.janela.botoes);YAHOO.i3GEO.janela.botoes.show();if(i3GEO.Interface.TABLET===true){YAHOO.i3GEO.janela.botoes.moveTo((i3GEO.parametros.w/2)-(i3GEO.barraDeBotoes.HORIZONTALW/2),"")}Dom.replaceClass(idconteudonovo+"_h","hd2")}}},reativa:function(indice){if(i3GEO.barraDeBotoes.ATIVA===false){return}var abre=function(){var i,n=i3GEO.barraDeBotoes.BARRAS.length;for(i=0;i<n;i+=1){if(i3GEO.barraDeBotoes.BARRAS[i]){i3GEO.barraDeBotoes.BARRAS[i].show()}}};try{if(arguments.length===1){i3GEO.barraDeBotoes.BARRAS[indice].show()}else{abre.call()}}catch(e){abre.call()}},recria:function(id){if(i3GEO.barraDeBotoes.ATIVA===false){return}if(i3GEO.barraDeBotoes.TIPO==="olhodepeixe"||i3GEO.barraDeBotoes.TIPO==="olhodepeixe1"){if($i("euDock_0_bar")){$i("euDock_0_bar").parentNode.parentNode.removeChild($i("euDock_0_bar").parentNode)}i3GEO.barraDeBotoes.inicializaBarra();return}var i,n,temp,novoel,barraZoom,x,y,BARRAS=i3GEO.barraDeBotoes.BARRAS,iu=i3GEO.util;i3GEO.barraDeBotoes.BARRAS=[];n=BARRAS.length;for(i=0;i<n;i+=1){if(BARRAS[i]&&BARRAS[i].id===id){iu.removeChild("contexto_"+id);if(!$i("barraTemporaria"+i)){novoel=document.createElement("div");novoel.id="barraTemporaria"+i;document.body.appendChild(novoel)}novoel=$i("barraTemporaria"+i);novoel.innerHTML=$i(BARRAS[i].id+"_").innerHTML;barraZoom=false;temp=$i("vertMaisZoom");if(temp){temp=navm?temp.parentNode:temp.parentNode.parentNode;if(temp.id===id){barraZoom=true}}x=parseInt($i(BARRAS[i].id+"_c").style.left,10);y=parseInt($i(BARRAS[i].id+"_c").style.top,10);if(i3GEO.barraDeBotoes.PERMITEFECHAR===true){y=y-10}BARRAS[i].destroy();i3GEO.barraDeBotoes.inicializaBarra(novoel.id,BARRAS[i].id,barraZoom,x,y)}}i3GEO.barraDeBotoes.ativaBotoes()},fecha:function(id){var i,n=this.BARRAS.length;for(i=0;i<n;i+=1){if(this.BARRAS[i]&&this.BARRAS[i].id===id){$i(id+"_c").style.visibility="hidden"}}},mostraJanela:function(objeto,mensagem,evt){if(mensagem===""){try{clearTimeout(i3GEO.barraDeBotoes.timeMostraAjudaBotoes)}catch(e){}try{clearTimeout(i3GEO.barraDeBotoes.timeAjudaBotoes)}catch(e){}return}var divmensagem=$i("divMensagemBarraDeBotoes"),pos=YAHOO.util.Dom.getXY(objeto);if(this.AJUDA===false||$i("janelaMenTexto")){i3GEO.ajuda.mostraJanela(mensagem);i3GEO.barraDeBotoes.escondeJanelaAjuda();return}if(!divmensagem&&this.TIPOAJUDA!=="balao"){divmensagem=document.createElement("div");divmensagem.id="divMensagemBarraDeBotoes";divmensagem.style.border="0px solid rgb(120 120 120)";divmensagem.style.position="absolute";divmensagem.style.zIndex=20000;if($i("i3geo")){$i("i3geo").appendChild(divmensagem)}else{document.body.appendChild(divmensagem)}if(this.TIPOAJUDA==="horizontal"){divmensagem.innerHTML="<table style='z-index:20000' ><tr><td id='imgMensagemBarraDeBotoes' style='background:none;padding-top:2px;padding-right:3px;vertical-align:top'><img src='"+i3GEO.configura.locaplic+"/imagens/left.png"+"' ></td><td style='text-align:left;border-left:1px solid rgb(210,210,210)'><span style='text-align:right;cursor:pointer;color:blue;' onclick='javascript:i3GEO.util.insereCookie(\"botoesAjuda\",\"nao\");i3GEO.barraDeBotoes.AJUDA = false;'>fecha</span><br><div style='vertical-align:middle;text-align:left;width:250px;border: 0px solid black;border-left:1px;' id='divMensagemBarraDeBotoesCorpo'></div></td></tr></table>"}if(this.TIPOAJUDA==="vertical"){divmensagem.innerHTML="<table style='z-index:20000' ><tr><td id='imgMensagemBarraDeBotoes' style='background:none;padding-top:2px;padding-right:3px;vertical-align:top'><img src='"+i3GEO.configura.locaplic+"/imagens/top.png"+"' ></td><td style='text-align:left;border-left:1px solid rgb(210,210,210)'><span style='text-align:right;cursor:pointer;color:blue;' onclick='javascript:i3GEO.util.insereCookie(\"botoesAjuda\",\"nao\");i3GEO.barraDeBotoes.AJUDA = false;'>fecha</span><br><div style='vertical-align:middle;text-align:left;width:250px;border: 0px solid black;border-left:1px;' id='divMensagemBarraDeBotoesCorpo'></div></td></tr></table>"}}if(mensagem!==""){if(this.TIPOAJUDA!=="balao"){YAHOO.util.Dom.setStyle("divMensagemBarraDeBotoes","display","none");if(this.TIPOAJUDA==="horizontal"){divmensagem.style.left=parseInt(YAHOO.util.Dom.getStyle(objeto,"width"),10)+pos[0]+10+"px";divmensagem.style.top=pos[1]-2+(parseInt(YAHOO.util.Dom.getStyle(objeto,"height"),10)/2)+"px"}if(this.TIPOAJUDA==="vertical"){divmensagem.style.left=(parseInt(YAHOO.util.Dom.getStyle(objeto,"width"),10)/2)+pos[0]-5+"px";divmensagem.style.top=pos[1]+5+parseInt(YAHOO.util.Dom.getStyle(objeto,"height"),10)+"px"}try{clearTimeout(i3GEO.barraDeBotoes.timeAjudaBotoes)}catch(e){}i3GEO.barraDeBotoes.timeMostraAjudaBotoes=setTimeout("i3GEO.barraDeBotoes.mostraJanelaAjuda('"+mensagem+"');",5000)}else{}}},mostraJanelaAjuda:function(mensagem){$i("divMensagemBarraDeBotoesCorpo").innerHTML=mensagem;YAHOO.util.Dom.setStyle("divMensagemBarraDeBotoes","display","block");try{clearTimeout(i3GEO.barraDeBotoes.timeMostraAjudaBotoes)}catch(e){}i3GEO.barraDeBotoes.timeAjudaBotoes=setTimeout(function(){i3GEO.barraDeBotoes.escondeJanelaAjuda()},3000)},escondeJanelaAjuda:function(){try{if(i3GEO.barraDeBotoes.timeAjudaBotoes){clearTimeout(i3GEO.barraDeBotoes.timeAjudaBotoes)}}catch(e){}if($i("divMensagemBarraDeBotoes")){YAHOO.util.Dom.setStyle("divMensagemBarraDeBotoes","display","none")}},ajudaEmLista:function(){var n,i,ins="",b;n=i3GEO.barraDeBotoes.LISTABOTOES.length;ins+="<table class=lista8 >";for(i=0;i<n;i++){b=i3GEO.barraDeBotoes.LISTABOTOES[i];if(i3GEO.barraDeBotoes.INCLUIBOTAO[b.iddiv]===true){if(b.dica!=""){ins+="<tr><td><img src='"+i3GEO.configura.locaplic+"/"+i3GEO.barraDeBotoes.ICONEBOTAO[b.iddiv]+"' /></td><td>"+b.dica+"</td></tr>"}}}ins+="</table>";i3GEO.janela.mensagemSimples("<div style='overflow:auto;height:100%'>"+ins+"</div>","")},editor:{inicia:function(){i3GEO.eventos.cliquePerm.desativa();i3GEO.barraDeBotoes.editor[i3GEO.Interface.ATUAL].inicia("janelaEditorVetorial")},googlemaps:{inicia:function(idjanela){var temp=function(){var cabecalho,minimiza,fecha,janela=YAHOO.i3GEO.janela.manager.find("i3GEOjanelaEditor");if(janela){janela.destroy()}cabecalho=function(){};minimiza=function(){i3GEO.janela.minimiza("i3GEOjanelaEditor")};janela=i3GEO.janela.cria("350px","100px","","","","<div class='i3GeoTituloJanela'>Editor</div>","i3GEOjanelaEditor",false,"hd",cabecalho,minimiza);$i("i3GEOjanelaEditor_corpo").style.backgroundColor="white";i3GEO.editorGM.inicia("i3GEOjanelaEditor_corpo");fecha=function(){var temp=window.confirm($trad("x94"));if(i3GEO.eventos){i3GEO.eventos.cliquePerm.ativa()}if(temp===true){i3GEO.desenho.googlemaps.destroyFeatures(i3GEO.desenho.googlemaps.shapes)}};YAHOO.util.Event.addListener(janela[0].close,"click",fecha)};if(!i3GEO.editorGM){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/editorgm/editorgm_compacto.js",temp,"editorgm.js",true)}else{temp.call()}}},openlayers:{inicia:function(idjanela){if(!i3GEO.editorOL){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/editorol/editorol.js","i3GEO.barraDeBotoes.editor.openlayers.ativaPainel('"+idjanela+"')","editorol.js",true)}else{if(!i3GEO.desenho.layergrafico){i3GEO.desenho.openlayers.criaLayerGrafico();i3GEO.editorOL.mapa.addLayers([i3GEO.desenho.layergrafico])}if(!i3GEO.editorOL.backup){i3GEO.editorOL.backup=new ol.layer.Vector({source:new ol.source.Vector({features:new ol.Collection(),useSpatialIndex:false,name:"Backup"}),visible:false});i3GEO.editorOL.backup.setMap(i3geoOL);i3GEO.editorOL.backup.getFeatures=function(){return i3GEO.editorOL.backup.getSource().getFeatures()}}i3GEO.editorOL.criaBotoes(i3GEO.editorOL.botoes)}},criaJanela:function(){if($i("i3GEOjanelaEditor")){return"i3GEOjanelaEditor"}var janela,divid,titulo,cabecalho,minimiza;cabecalho=function(){};minimiza=function(){i3GEO.janela.minimiza("i3GEOjanelaEditor")};titulo="<div class='i3GeoTituloJanela'>"+$trad("u29")+"</div>";janela=i3GEO.janela.cria("300px","200px","","","",titulo,"i3GEOjanelaEditor",false,"hd",cabecalho,minimiza);divid=janela[2].id;$i("i3GEOjanelaEditor_corpo").style.backgroundColor="white";$i("i3GEOjanelaEditor_corpo").style.textAlign="left";return divid},ativaPainel:function(idjanela){i3GEO.editorOL.fundo="";i3GEO.editorOL.mapa=i3geoOL;i3GEO.editorOL.maxext="";i3GEO.editorOL.controles=[];i3GEO.editorOL.botoes={'zoomin':true,'zoomout':true,'pan':true,'zoombox':true,'zoomtot':true,'legenda':true,'distancia':true,'area':true,'identifica':true,'linha':true,'ponto':true,'poligono':true,'texto':true,'corta':true,'edita':true,'listag':true,'selecao':true,'selecaotudo':true,'apaga':true,'procura':false,'propriedades':true,'salva':true,'ajuda':true,'fecha':true,'tools':true,'undo':true,'frente':true};if(!i3GEO.desenho.layergrafico){i3GEO.desenho.openlayers.criaLayerGrafico()}if(idjanela){i3GEO.editorOL.criaBotoes(i3GEO.editorOL.botoes)}}}}};