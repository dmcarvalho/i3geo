if(typeof(i3GEO)==='undefined'){i3GEO=[]}i3GEO.barraDeBotoes={AJUDA:true,TIPOAJUDA:"horizontal",SOICONES:false,AUTOALTURA:false,TRANSICAOSUAVE:true,OPACIDADE:65,PERMITEFECHAR:true,PERMITEDESLOCAR:true,ATIVAMENUCONTEXTO:false,AUTO:false,LISTABOTOES:i3GEO.configura.funcoesBotoes.botoes,INCLUIBOTAO:{zoomli:false,pan:false,zoomtot:false,identifica:true,identificaBalao:true,mede:true,area:true,imprimir:true,reinicia:true,exten:true,referencia:true,inserexy:true,textofid:true,selecao:true,google:true,buscafotos:true,wiki:true,metar:true,lentei:true,confluence:true,inseregrafico:true,v3d:true},TEMPLATEBOTAO:"",BOTAOPADRAO:"pan",COMPORTAMENTO:"padrao",BARRAS:[],BOTAOCLICADO:"",ativaPadrao:function(){try{$i(i3GEO.barraDeBotoes.BOTAOPADRAO).onclick.apply()}catch(e){}},ativaIcone:function(icone){if(i3GEO.Interface.ATUAL==="openlayers"){try{OLzoom.deactivate()}catch(e){}}var estilo,temp,ist,cor,ko;this.BOTAOCLICADO=icone;ko=this.LISTABOTOES.length-1;if(this.COMPORTAMENTO==="padrao"){if(ko>=0){do{temp=$i(this.LISTABOTOES[ko].iddiv);if(this.LISTABOTOES[ko].tipo==="dinamico"&&temp){ist=temp.style;ist.borderWidth="1px";ist.borderColor='white';if(this.SOICONES===true){ist.borderLeftColor='rgb(50,50,50)';ist.borderBottomColor='rgb(50,50,50)'}}}while(ko--)}if($i(icone)){estilo=$i(icone).style;if(this.SOICONES===false){estilo.borderColor='white';estilo.borderWidth="1px"}}}if(this.COMPORTAMENTO==="destacado"){if(ko>=0){do{temp=$i(this.LISTABOTOES[ko].iddiv);if(temp){ist=temp.style;ist.borderWidth="1px";ist.borderColor='white'}}while(ko--)}if($i(icone)){estilo=$i(icone).style;if(this.SOICONES===false){estilo.borderColor='black';estilo.borderWidth="1px"}}}if(i3GEO.util.in_array(this.COMPORTAMENTO,["laranja","vermelho","cinza"])){if(ko>=0){do{temp=$i(this.LISTABOTOES[ko].iddiv);if(temp){ist=temp.style;if(this.SOICONES===false){ist.borderWidth="1px";ist.borderColor='white';ist.backgroundColor='white'}else{ist.backgroundColor=''}}}while(ko--)}switch(this.COMPORTAMENTO){case"laranja":cor="orange";break;case"vermelho":cor="red";break;case"cinza":cor="gray";break;default:cor="yellow"};if($i(icone)){estilo=$i(icone).style;if(this.SOICONES===false){estilo.borderColor='black';estilo.borderWidth="1px"}else{estilo.border="0px solid white"}estilo.backgroundColor=cor}}},ativaBotoes:function(padrao){var l,b,d,temp;if(arguments.length===0){padrao=this.BOTAOPADRAO}this.BOTAOCLICADO=padrao;l=this.LISTABOTOES;b=l.length-1;if(b>=0){do{temp=$i(l[b].iddiv);if(temp){if(l[b].conteudo){temp.innerHTML=l[b].conteudo}if(l[b].dica){eval('$i("'+l[b].iddiv+'").onmouseover = function(){i3GEO.barraDeBotoes.mostraJanela(this,"'+l[b].dica+'","");}');eval('$i("'+l[b].iddiv+'").onmouseout = function(){i3GEO.barraDeBotoes.mostraJanela(this,"");};')}if(l[b].funcaoonclick){temp.onclick=l[b].funcaoonclick;if(l[b].iddiv==padrao){l[b].funcaoonclick()}}if(l[b].constroiconteudo){eval(l[b].constroiconteudo)}}}while(b--)}if(padrao===""){this.ativaIcone("")}},inicializaBarra:function(idconteudo,idconteudonovo,barraZoom,x,y,onde){if(this.TEMPLATEBOTAO===""){this.TEMPLATEBOTAO="<div style='display:inline;background-color:rgb(250,250,250);'><img style='border:0px solid white;' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='$$'/></div>"}var falta,ticone,tipo,mostra,i,temp,elementos,e,wj,recuo,novoel,alturadisponivel,n,chaves,re,estilo,numerobotoes=0,nelementos=0,Dom=YAHOO.util.Dom,branco=i3GEO.configura.locaplic+'/imagens/branco.gif';if(this.AUTO===true){if(idconteudo==="barraDeBotoes1"){novoel=document.createElement("div");novoel.id="barraDeBotoes1";temp='<table style="width:100%"><tr><td style="background-color:rgb(250,250,250);"><div ID="historicozoom" ></div></td></tr><tr><td style=height:5px ></td></tr></table>'+"<div style='display:inline;background-color:rgb(250,250,250);'>"+'<img title="zoom" alt="zoom" src="'+branco+'" id="zoomli"/>'+"</div>"+"<div style='display:inline;background-color:rgb(250,250,250);'>"+'<img title="desloca" alt="desloca" src="'+branco+'" id="pan"/>'+"</div>"+"<div style='display:inline;background-color:rgb(250,250,250);'>"+'<img title="geral" alt="geral" src="'+branco+'" id="zoomtot"/>'+"</div>";novoel.innerHTML=temp;document.body.appendChild(novoel)}if(idconteudo==="barraDeBotoes2"){temp="";chaves=i3GEO.util.listaChaves(i3GEO.barraDeBotoes.INCLUIBOTAO);n=chaves.length;for(i=0;i<n;i+=1){if(this.INCLUIBOTAO[chaves[i]]===true){temp+=this.TEMPLATEBOTAO.replace("$$",chaves[i])}}if(typeof(onde)==='undefined'){novoel=document.createElement("div");novoel.id="barraDeBotoes2";estilo="font-size:2px;";if(this.SOICONES===true){estilo="font-size:0px;"}novoel.innerHTML="<table style='width:100%'>"+"<tr><td style='background-color:rgb(250,250,250);'><img title='' alt='sobe' src='"+branco+"' id='sobeferramentas'/></td></tr>"+"</table>"+temp+"<table style='width:100%;'><tr><td style='background-color:rgb(250,250,250);'><img title='desce' alt='' src='"+branco+"' id='desceferramentas'/></td></tr></table>";document.body.appendChild(novoel)}else{$i(onde).innerHTML=temp;return}}}else{if(idconteudo==="barraDeBotoes2"&&onde!==undefined){$i(onde).innerHTML=$i(idconteudo)}}wj="36px";recuo="0px";novoel=document.createElement("div");novoel.id=idconteudonovo;novoel.style.display="block";if(this.SOICONES===false){novoel.style.border="1px solid gray";novoel.style.background="white"}else{novoel.style.border="0px solid white"}Dom.setStyle(novoel,"opacity",this.OPACIDADE/100);temp="";if(barraZoom===true){temp+=i3GEO.navega.barraDeZoom.cria()}temp+='<div id="'+idconteudonovo+'_" style="left:'+recuo+';top:0px;"  ></div>';novoel.innerHTML=temp;novoel.onmouseover=function(){YAHOO.util.Dom.setStyle("i3geo_rosa","display","none");if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){YAHOO.util.Dom.setStyle(novoel,"opacity",1)}};novoel.onmouseout=function(){if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){YAHOO.util.Dom.setStyle(novoel,"opacity",i3GEO.barraDeBotoes.OPACIDADE/100)}};document.body.appendChild(novoel);if(this.ATIVAMENUCONTEXTO){i3GEO.util.mudaCursor(i3GEO.configura.cursores,"contexto",idconteudonovo,i3GEO.configura.locaplic)}ticone=28;alturadisponivel=i3GEO.parametros.h-i3GEO.Interface.BARRABOTOESTOP-ticone-28-28;if(this.AUTOALTURA===true){alturadisponivel+=28}numerobotoes=parseInt(alturadisponivel/ticone,10);falta=alturadisponivel-(ticone*numerobotoes);if($i(idconteudo)){$i(idconteudonovo+"_").innerHTML=$i(idconteudo).innerHTML;$i(idconteudo).innerHTML="";elementos=$i(idconteudonovo+"_").getElementsByTagName("img");nelementos=elementos.length;if(this.AUTOALTURA===true||(numerobotoes<nelementos)){if(elementos[0].id==="sobeferramentas"){try{elementos=$i(idconteudonovo+"_").getElementsByTagName("div");nelementos=elementos.length;i=0;do{elementos[i].style.display="none";i=i+1}while(i<nelementos);i=0;do{elementos[i].style.display="inline";i=i+1}while(i<numerobotoes-1)}catch(men){}}}if(elementos.length<=numerobotoes){Dom.setStyle(["sobeferramentas","desceferramentas"],"display","none")}}YAHOO.namespace("janelaBotoes.xp");if(this.AUTOALTURA===false||barraZoom===true||(elementos.length>numerobotoes)){YAHOO.janelaBotoes.xp.panel=new YAHOO.widget.Panel(idconteudonovo,{zIndex:20000,width:wj,fixedcenter:false,constraintoviewport:false,underlay:"none",close:i3GEO.barraDeBotoes.PERMITEFECHAR,visible:true,draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR,modal:false,iframe:false})}else{YAHOO.janelaBotoes.xp.panel=new YAHOO.widget.Panel(idconteudonovo,{zIndex:20000,height:i3GEO.parametros.h-4,width:wj,fixedcenter:false,constraintoviewport:false,underlay:"none",close:i3GEO.barraDeBotoes.PERMITEFECHAR,visible:true,draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR,modal:false,iframe:false})}if(this.SOICONES===true){Dom.setStyle(["i3geo_barra2","i3geo_barra1"],"borderWidth","0 0 0 0")}if((barraZoom===true)&&i3GEO.Interface.ATUAL==="padrao"){i3GEO.navega.barraDeZoom.ativa()}YAHOO.janelaBotoes.xp.panel.render();YAHOO.janelaBotoes.xp.panel.moveTo(x,y);if($i("sobeferramentas")){$i("sobeferramentas").onclick=function(){elementos=$i(idconteudonovo+"_").getElementsByTagName("div");nelementos=elementos.length;if(elementos[0].style.display==="inline"&&elementos[0].id===""){return}if(nelementos>0){mostra=elementos[0];i=0;do{if(elementos[i].style){if(elementos[i].style.display==="inline"&&elementos[i].id===""){break}if(elementos[i].style.display==="none"&&elementos[i].id===""){mostra=elementos[i]}}i=i+1}while(i<nelementos);mostra.style.display="inline";i=nelementos+1;mostra=elementos[i];do{if(elementos[i]){if(elementos[i].style){if(elementos[i].style.display==="inline"){mostra=elementos[i];break}}}i=i-1}while(i>=0);mostra.style.display="none"}}}if($i("desceferramentas")){$i("desceferramentas").onclick=function(){tipo="inline";if($i(idconteudonovo+"_")){elementos=$i(idconteudonovo+"_").getElementsByTagName("div");if(elementos[elementos.length-1].style.display===tipo){return}nelementos=elementos.length;if(nelementos>0){i=0;do{e=elementos[i];if(e.style){if((e.style.display==="block")||(e.style.display==="inline")||(e.style.display==="")){if(e.id===""){e.style.display="none";break}}}i=i+1}while(i<nelementos);i=nelementos-1;var mostra=elementos[i];do{e=elementos[i];if(e.style){if(e.style.display===tipo){break}if(e.style.display==="none"){mostra=e}}i=i-1}while(i>=0);mostra.style.display=tipo}}}}this.BARRAS.push(YAHOO.janelaBotoes.xp.panel);YAHOO.janelaBotoes.xp.panel.show();if(this.ATIVAMENUCONTEXTO){this.ativaMenuContexto(idconteudonovo)}Dom.replaceClass(idconteudonovo+"_h","hd2")},ativaMenuContexto:function(idbarra){var oFieldContextMenuItemData,oFieldContextMenu,onFieldMenuRender,id;function executar(a,b,c){eval(c)}oFieldContextMenuItemData=[{text:"&nbsp;<span class='container-close'></span>"},{text:"Fechar barra",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.fecha('"+idbarra+"')"}},{text:"Barra normal",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.AUTOALTURA=false;i3GEO.barraDeBotoes.PERMITEFECHAR=true;i3GEO.barraDeBotoes.PERMITEDESLOCAR=true;i3GEO.barraDeBotoes.recria('"+idbarra+"')"}},{text:"Barra fixa",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.AUTOALTURA=true;i3GEO.barraDeBotoes.PERMITEFECHAR=false;i3GEO.barraDeBotoes.PERMITEDESLOCAR=false;i3GEO.barraDeBotoes.recria('"+idbarra+"')"}},{text:"Remove transi��o",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=false;"}},{text:"Ativa transi��o",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=true;"}}];oFieldContextMenu=new YAHOO.widget.ContextMenu("contexto_"+idbarra,{trigger:idbarra,itemdata:oFieldContextMenuItemData,lazyload:true});onFieldMenuRender=function(){eval("var id = 'contexto_"+idbarra+"'");$i(id).style.zIndex=50000};oFieldContextMenu.subscribe("render",onFieldMenuRender)},reativa:function(indice){var abre=function(){var i,n=i3GEO.barraDeBotoes.BARRAS.length;for(i=0;i<n;i+=1){i3GEO.barraDeBotoes.BARRAS[i].show()}};try{if(arguments.length===1){i3GEO.barraDeBotoes.BARRAS[indice].show()}else{abre.call()}}catch(e){abre.call()}},recria:function(id){var n,temp,novoel,barraZoom,x,y,iu=i3GEO.util;n=this.BARRAS.length;for(i=0;i<n;i+=1){if(this.BARRAS[i].id===id){iu.removeChild("contexto_"+id);novoel=document.createElement("div");novoel.id="barraTemporaria"+i;novoel.innerHTML=$i(this.BARRAS[i].id+"_").innerHTML;document.body.appendChild(novoel);barraZoom=false;temp=$i("vertMaisZoom");if(temp){temp=navm?temp.parentNode:temp.parentNode.parentNode;if(temp.id===id){barraZoom=true}}x=parseInt($i(this.BARRAS[i].id+"_c").style.left,10);y=parseInt($i(i3GEO.Interface.IDCORPO).style.top,10)+10;this.BARRAS[i].destroy();i3GEO.barraDeBotoes.inicializaBarra(novoel.id,this.BARRAS[i].id+"x",barraZoom,x,y)}}i3GEO.barraDeBotoes.ativaBotoes()},fecha:function(id){var n=this.BARRAS.length;for(i=0;i<n;i+=1){if(this.BARRAS[i].id===id){$i(id+"_c").style.visibility="hidden"}}},mostraJanela:function(objeto,mensagem){var divmensagem=$i("divMensagemBarraDeBotoes"),pos=YAHOO.util.Dom.getXY(objeto);if(this.AJUDA===false||$i("janelaMenTexto")){i3GEO.ajuda.mostraJanela(mensagem);i3GEO.barraDeBotoes.escondeJanelaAjuda();return}if(i3GEO.Interface.ATUAL==="googleearth"){objeto.title=mensagem;return}if(!divmensagem){divmensagem=document.createElement("div");divmensagem.id="divMensagemBarraDeBotoes";divmensagem.style.border="0px solid rgb(120 120 120)";divmensagem.style.position="absolute";divmensagem.style.zIndex=20000;if($i("i3geo")){$i("i3geo").appendChild(divmensagem)}else{document.body.appendChild(divmensagem)}if(this.TIPOAJUDA==="horizontal"){divmensagem.innerHTML="<table style='z-index:20000' ><tr><td id='imgMensagemBarraDeBotoes' style='background:none;padding-top:2px;padding-right:3px;vertical-align:top'><img src='"+$im("left.png")+"' ></td><td style='text-align:left;border-left:1px solid rgb(210,210,210)'><span style='text-align:right;cursor:pointer;color:blue;' onclick='javascript:i3GEO.util.insereCookie(\"botoesAjuda\",\"nao\");i3GEO.barraDeBotoes.AJUDA = false;'>fecha</span><br><div style='vertical-align:middle;text-align:left;width:250px;border: 0px solid black;border-left:1px;' id='divMensagemBarraDeBotoesCorpo'></div></td></tr></table>"}if(this.TIPOAJUDA==="vertical"){divmensagem.innerHTML="<table style='z-index:20000' ><tr><td id='imgMensagemBarraDeBotoes' style='background:none;padding-top:2px;padding-right:3px;vertical-align:top'><img src='"+$im("top.png")+"' ></td><td style='text-align:left;border-left:1px solid rgb(210,210,210)'><span style='text-align:right;cursor:pointer;color:blue;' onclick='javascript:i3GEO.util.insereCookie(\"botoesAjuda\",\"nao\");i3GEO.barraDeBotoes.AJUDA = false;'>fecha</span><br><div style='vertical-align:middle;text-align:left;width:250px;border: 0px solid black;border-left:1px;' id='divMensagemBarraDeBotoesCorpo'></div></td></tr></table>"}}if(mensagem!==""){if(this.TIPOAJUDA==="horizontal"){divmensagem.style.left=parseInt(YAHOO.util.Dom.getStyle(objeto,"width"),10)+pos[0]+10+"px";divmensagem.style.top=pos[1]-2+(parseInt(YAHOO.util.Dom.getStyle(objeto,"height"),10)/2)+"px"}if(this.TIPOAJUDA==="vertical"){divmensagem.style.left=(parseInt(YAHOO.util.Dom.getStyle(objeto,"width"),10)/2)+pos[0]-5+"px";divmensagem.style.top=pos[1]+5+parseInt(YAHOO.util.Dom.getStyle(objeto,"height"),10)+"px"}$i("divMensagemBarraDeBotoesCorpo").innerHTML=mensagem;divmensagem.style.display="block";try{clearTimeout(timeAjudaBotoes)}catch(e){}timeAjudaBotoes=setTimeout(function(){i3GEO.barraDeBotoes.escondeJanelaAjuda()},3000)}},escondeJanelaAjuda:function(){YAHOO.util.Dom.setStyle("divMensagemBarraDeBotoes","display","none");try{clearTimeout(timeAjudaBotoes)}catch(e){}}};