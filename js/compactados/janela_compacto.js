if(typeof(i3GEO)==='undefined'){var i3GEO={}}YAHOO.namespace("i3GEO.janela");YAHOO.i3GEO.janela.manager=new YAHOO.widget.OverlayManager();YAHOO.namespace("janelaDoca.xp");YAHOO.janelaDoca.xp.manager=new YAHOO.widget.OverlayManager();YAHOO.i3GEO.janela.managerAguarde=new YAHOO.widget.OverlayManager();i3GEO.janela={ESTILOBD:"display:block;padding:5px 1px 5px 1px;",ESTILOAGUARDE:"normal",AGUARDEMODAL:false,ANTESCRIA:["i3GEO.janela.prepara()"],ANTESFECHA:[],TRANSICAOSUAVE:true,OPACIDADE:65,OPACIDADEAGUARDE:50,TIPS:[],ULTIMOZINDEX:5,prepara:function(){var iu=i3GEO.util;iu.escondeBox()},cria:function(wlargura,waltura,wsrc,nx,ny,texto,id,modal,classe,funcaoCabecalho,funcaoMinimiza,funcaoAposRedim,dimensionavel,icone,funcaoDuplica,transicao){if(!transicao){transicao="sim"}if(!dimensionavel){dimensionavel=true}if(!icone){icone=""}var i,wlargurA,ins,novoel,wdocaiframe,temp,fix,underlay,ifr,janela;if($i(id)){janela=YAHOO.i3GEO.janela.manager.find(id);janela.show();janela.bringToTop();return}if(navm&&!chro){this.TRANSICAOSUAVE=false}if(this.ANTESCRIA){for(i=0;i<this.ANTESCRIA.length;i++){eval(this.ANTESCRIA[i])}}if(!classe||classe==""){classe="hd"}if(!id||id===""){id="wdoca"}if(!modal||modal===""){modal=false}ifr=false;fix="contained";if(nx===""||nx==="center"){fix=true}if(modal===true){underlay="none"}else{underlay="shadow"}temp=navm?0:2;wlargurA=parseInt(wlargura,10)+temp+"px";ins='<div id="'+id+'_cabecalho" class="'+classe+'" >';if(i3GEO.configura!==undefined){ins+="<img id='"+id+"_imagemCabecalho' class='i3GeoAguardeJanela' style='visibility:hidden;' src=\'"+i3GEO.configura.locaplic+"/imagens/aguarde2.gif\' />"}if(icone!=""){ins+="<img class='i3GeoIconeJanela' src='"+icone+"' >"}ins+="<span style='font-size:10px;'>"+texto+"</span>";if(funcaoDuplica){ins+="<div id='"+id+"_duplicaJanela' class='container-duplica'></div>"}if(funcaoMinimiza){ins+="<div id='"+id+"_minimizaCabecalho' class='container-minimiza'></div>"}ins+='</div><div id="'+id+'_corpo" class="bd" style="'+this.ESTILOBD+'">';if(wsrc!==""){ins+='<iframe name="'+id+'i" id="'+id+'i" valign="top" style="border:0px white solid;width:100%"></iframe>'}ins+='</div>';ins+='<div class="ft"></div>';novoel=document.createElement("div");novoel.id=id;novoel.style.display="block";novoel.innerHTML=ins;if(this.TRANSICAOSUAVE&&transicao==="sim"){novoel.onmouseover=function(){YAHOO.util.Dom.setStyle(novoel,"opacity",1)};novoel.onmouseout=function(){YAHOO.util.Dom.setStyle(novoel,"opacity",i3GEO.janela.OPACIDADE/100)};YAHOO.util.Dom.setStyle(novoel,"opacity",1)}document.body.appendChild(novoel);wdocaiframe=$i(id+"i");if(wdocaiframe){temp=wdocaiframe.style;temp.height=waltura;temp.display="block";wdocaiframe.src=wsrc}else{if(waltura!=="auto"){$i(id+'_corpo').style.height=parseInt(waltura,10)+"px"}$i(id+'_corpo').style.width='100%';$i(id+'_corpo').style.overflow="auto"}if(waltura==="auto"||dimensionavel==false){janela=new YAHOO.widget.Panel(id,{iframe:ifr,modal:modal,width:wlargurA,underlay:underlay,fixedcenter:fix,constraintoviewport:true,visible:true,monitorresize:false,dragOnly:true,keylisteners:null})}else{janela=new YAHOO.widget.Panel(id,{hideMode:'offsets',iframe:ifr,underlay:underlay,modal:modal,width:wlargurA,fixedcenter:fix,constraintoviewport:true,visible:true,monitorresize:false,dragOnly:true,keylisteners:null});if(YAHOO.util.Resize){var resize=new YAHOO.util.Resize(id,{handles:['br'],autoRatio:false,minWidth:10,minHeight:10,status:false,proxy:true,ghost:false,animate:false,useShim:true});resize.on('resize',function(args){this.cfg.setProperty("height",args.height+"px");if(wdocaiframe){wdocaiframe.style.height=args.height-50+"px"}},janela,true);if(funcaoAposRedim&&funcaoAposRedim!=""){resize.on('endResize',function(args){funcaoAposRedim.call();i3GEO.janela.minimiza()},janela,true)}resize.getProxyEl().style.height="0px"}}if(nx!==""&&nx!=="center"){janela.moveTo(nx,ny+50)}YAHOO.i3GEO.janela.manager.register(janela);if(this.TRANSICAOSUAVE){janela.cfg.setProperty("effect",[{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.5}])}janela.cfg.setProperty("zIndex",[4]);janela.render();janela.bringToTop();if(ifr===true){janela.iframe.style.zIndex=4}YAHOO.util.Event.addListener($i(id+'_corpo'),"click",YAHOO.util.Event.stopPropagation);if(funcaoDuplica){$i(id+'_duplicaJanela').onclick=funcaoDuplica}if(funcaoCabecalho){$i(id+'_cabecalho').onclick=funcaoCabecalho}if(funcaoMinimiza){$i(id+"_minimizaCabecalho").onclick=funcaoMinimiza}YAHOO.util.Event.addListener(janela.close,"click",i3GEO.janela.fecha,janela,{id:id},true);temp=$i(id+"_c");if(temp&&temp.style){temp.style.maxWidth="90%";temp.style.zIndex=50000}temp=$i(id);if(temp&&temp.style){temp.style.maxWidth="100%"}temp=$i(id+"_corpo");return([janela,$i(id+"_cabecalho"),temp])},iconiza:function(id,w,rodape){var j,r,t=i3GEO.janela.minimiza(id,w+"px",rodape);r=YAHOO.util.Resize.getResizeById(id);j=$i(id+"I");if(!j){return}if(t==="min"){j.style.display="none";if(r){r.lock()}if(rodape){$i(rodape).style.display="none"}}else{j.style.display="block";if(r){r.unlock()}if(rodape){$i(rodape).style.display="block"}}},minimiza:function(id,min){var temp=$i(id+"_corpo"),n,i,m=YAHOO.i3GEO.janela.manager.find(id),c=$i(id),t="min",r=YAHOO.util.Resize.getResizeById(id),rodape=$i(id+"_rodape");if(temp){if(temp.style.display==="block"){temp.style.display="none";if(m){m.hideIframe()}m.winicial=c.style.width;if(min){c.style.width=min}}else{temp.style.display="block";if(m){m.showIframe()}c.style.width=m.winicial;t="max"}}temp=$i(id+"_c");if(temp){temp=temp.getElementsByTagName("div");n=temp.length;for(i=0;i<n;i++){if(temp[i].className==="underlay"||temp[i].className==="bd"){if(temp[i].style.display==="none"){temp[i].style.display="block"}else{temp[i].style.display="none"}}}}temp=$i(id+"_corpo");if(temp){if(temp.style.display==="none"){temp.style.display="block";if(r){r.unlock()}if(rodape){rodape.style.display="block"}}else{temp.style.display="none";if(r){r.lock()}if(rodape){rodape.style.display="none"}}}temp=$i(id);if(temp){if(temp.style.display==="none"){temp.style.height="100%"}else{temp.style.height="10%"}}return t},fecha:function(event,args){var i,id;i3GEO.util.escondeBox();if(i3GEO.janela.ANTESFECHA){for(i=0;i<i3GEO.janela.ANTESFECHA.length;i++){eval(i3GEO.janela.ANTESFECHA[i])}}if(i3GEO.janela.id){id=i3GEO.janela.id}else{id=event.id}if(id==undefined){id=args.id}i3GEO.janela.destroi(id)},destroi:function(id){if(typeof(YAHOO)!="undefined"){var janela=YAHOO.i3GEO.janela.manager.find(id);i3GEO.util.removeScriptTag(id+"_script");i3GEO.util.removeScriptTag(id+".dicionario_script");if(janela){YAHOO.i3GEO.janela.manager.remove(janela);janela=$i(id+"_c");janela.parentNode.removeChild(janela)}}},alteraTamanho:function(w,h,id){var i;if(arguments.length===3){i=$i(id)}else{i=$i("wdoca")}if(i){i.style.width=w+"px";i.style.height=h+"px"}},abreAguarde:function(id,texto){var pos,temp,janela;if(!id||id==undefined||i3GEO.janela.ESTILOAGUARDE==="nenhum"){return}janela=YAHOO.i3GEO.janela.managerAguarde.find(id);pos=[0,0];if(i3GEO.Interface&&$i(i3GEO.Interface.IDCORPO)){pos=YAHOO.util.Dom.getXY($i(i3GEO.Interface.IDCORPO))}else if($i("contemImg")){pos=YAHOO.util.Dom.getXY($i("contemImg"))}if(i3GEO.janela.AGUARDEMODAL==true){texto+="<br><span style='color:navy;cursor:pointer;font-size:9px;' onclick='javascript:if(i3GEO.janela.AGUARDEMODAL == true){i3GEO.janela.AGUARDEMODAL = false;}else{i3GEO.janela.AGUARDEMODAL = true;}'>bloquear/desbloquear</span>"}if(!janela){janela=new YAHOO.widget.Panel(id,{width:"240px",fixedcenter:false,underlay:"none",close:true,draggable:false,modal:i3GEO.janela.AGUARDEMODAL,monitorresize:false});janela.render(document.body);YAHOO.i3GEO.janela.managerAguarde.register(janela)}if(i3GEO.janela.ESTILOAGUARDE==="normal"||i3GEO.janela.ESTILOAGUARDE==="reduzida"){janela.setBody(texto);janela.body.style.padding="5px"}if(i3GEO.janela.ESTILOAGUARDE==="normal"||i3GEO.janela.ESTILOAGUARDE==="minima"){janela.setHeader("<span><img id=aguardeGifAberto src='"+i3GEO.configura.locaplic+"/imagens/aguarde.gif' /></span>&nbsp;<span style=font-size:8px >"+YAHOO.i3GEO.janela.managerAguarde.overlays.length+"</span>")}if(i3GEO.parametros&&i3GEO.parametros.w>0){janela.moveTo(pos[0]+(i3GEO.parametros.w/2)-120,pos[1])}else{janela.moveTo(pos[0],pos[1])}janela.show();if(janela.header){janela.header.style.height="20px"}temp=$i(id+"_c");if(temp){temp.style.backgroundColor=""}YAHOO.util.Dom.setStyle(temp,"opacity",i3GEO.janela.OPACIDADEAGUARDE/100)},fechaAguarde:function(id){if(id!=undefined){var janela=YAHOO.i3GEO.janela.managerAguarde.find(id);if(janela){YAHOO.i3GEO.janela.managerAguarde.remove(janela);janela.destroy()}}},tempoMsg:function(texto,tempo){if(!YAHOO.util.Easing){return}var pos,janela,attributes,anim,altura=40;janela=YAHOO.i3GEO.janela.managerAguarde.find("i3geoTempoMsg");pos=[0,0];if(i3GEO.Interface&&$i(i3GEO.Interface.IDCORPO)){pos=YAHOO.util.Dom.getXY($i(i3GEO.Interface.IDCORPO))}else if($i("contemImg")){pos=YAHOO.util.Dom.getXY($i("contemImg"))}if(!janela){janela=new YAHOO.widget.Panel("i3geoTempoMsg",{width:"220px",fixedcenter:false,underlay:"none",close:false,draggable:false,modal:false,monitorresize:false,iframe:true});janela.render(document.body);YAHOO.i3GEO.janela.managerAguarde.register(janela)}$i("i3geoTempoMsg_c").style.zIndex=100000;janela.setBody(texto);altura=70;janela.body.style.padding="5px";janela.body.style.backgroundColor="yellow";janela.body.style.height="0px";janela.body.style.overflow="hidden";janela.body.onclick=function(){var janela=YAHOO.i3GEO.janela.managerAguarde.find("i3geoTempoMsg");if(janela){janela.destroy()}};if(i3GEO.parametros&&i3GEO.parametros.w>0){janela.moveTo(pos[0]+(i3GEO.parametros.w/2)-120,pos[1])}else{janela.moveTo(pos[0],pos[1])}janela.show();attributes={height:{to:altura}};anim=new YAHOO.util.Anim(janela.body,attributes,.5,YAHOO.util.Easing.easeNone);anim.onComplete.subscribe(function(){janela.body.style.overflow="auto";janela.body.style.display="block";$i("i3geoTempoMsg_c").style.zIndex=100000});anim.animate();if(!tempo){tempo=4000}setTimeout(function(){var attributes,anim,janela=YAHOO.i3GEO.janela.managerAguarde.find("i3geoTempoMsg");if(janela){janela.body.style.overflow="hidden";attributes={height:{to:0}};anim=new YAHOO.util.Anim(janela.body,attributes,.5,YAHOO.util.Easing.easeNone);anim.onComplete.subscribe(function(){janela.destroy()});anim.animate()}},tempo)},ativaAlerta:function(){window.alert=function(texto){var textoI,janela=YAHOO.i3GEO.janela.managerAguarde.find("alerta");if(!janela){janela=new YAHOO.widget.SimpleDialog("alerta",{width:"300px",fixedcenter:true,visible:false,draggable:false,zIndex:100000,textAlign:"left",close:true,modal:false,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,buttons:[{text:$trad("x74"),handler:function(){this.destroy()},isDefault:true}],icon:YAHOO.widget.SimpleDialog.ICON_WARN,text:""});YAHOO.i3GEO.janela.managerAguarde.register(janela);janela.setHeader(" ");janela.render(document.body)}textoI=janela.cfg.getProperty("text");if(textoI!=""){textoI+="<br>"}texto=textoI+texto;janela.cfg.setProperty("text",texto);janela.show()}},confirma:function(pergunta,w,resposta1,resposta2,funcao1,funcao2){var b,f1,f2,f3,janela=YAHOO.i3GEO.janela.managerAguarde.find("confirma");if(!w||w==""){w=300}if(!funcao1||funcao1==""){f1=function(){YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy();return true}}else{f1=function(){funcao1.call();YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy()}}if(!funcao2||funcao2==""){f2=function(){YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy();return false}}else{f2=function(){funcao2.call();YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy()}}f3=function(){YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy()};if(!resposta1||resposta1==""){resposta1=$trad("x58")}if(janela){janela.destroy()}b=[{text:$trad("x75"),handler:f3},{text:resposta1,handler:f1}];if(resposta2&&resposta2!=""){b.push({text:resposta2,handler:f2})}janela=new YAHOO.widget.SimpleDialog("confirma",{width:w+"px",fixedcenter:true,visible:false,draggable:false,zIndex:100000,textAlign:"left",close:false,modal:false,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,buttons:b,icon:YAHOO.widget.SimpleDialog.ICON_HELP,text:"<p class=paragrafo >"+pergunta});YAHOO.i3GEO.janela.managerAguarde.register(janela);janela.setHeader(" ");janela.render(document.body);janela.show()},prompt:function(pergunta,funcaoOk,valorDefault){if($i("i3GEOjanelaprompt")){return}if(!valorDefault){valorDefault=""}var i="<br><div class='i3geoForm i3geoFormIconeEdita' ><input id='i3GEOjanelaprompt' type=text value='"+valorDefault+"' />";i3GEO.janela.confirma(pergunta+i,"","","",funcaoOk)},mensagemSimples:function(texto,cabecalho,largura,altura){var janela;if(!largura){largura=300}if(!altura){altura=300}if(!cabecalho){cabecalho=""}janela=new YAHOO.widget.SimpleDialog(YAHOO.util.Dom.generateId(),{width:parseInt(largura,10)+"px",height:parseInt(altura,10)+"px",fixedcenter:true,visible:true,draggable:true,zIndex:100000,textAlign:"left",close:true,modal:false,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,text:""});YAHOO.i3GEO.janela.manager.register(janela);janela.setHeader(cabecalho);janela.render(document.body);janela.setHeader("<div class='i3GeoTituloJanela'>"+cabecalho+"</div>");janela.cfg.setProperty("text",texto);janela.bringToTop();janela.show();return janela},tip:function(){var Nid,novoel,res;Nid=YAHOO.util.Dom.generateId();novoel=document.createElement("div");novoel.className="i3GEObalaoInfo";novoel.id=Nid;document.body.appendChild(novoel);i3GEO.janela.TIPS.push($i(Nid));res="<div id='"+Nid+"cabecatip' style='text-align:left;background-color:rgb(240,240,240)'></div>";novoel.innerHTML="<table style='text-align:left'><tr><td style='text-align:left'>"+res+"</td></tr></table>";ist=novoel.style;ist.top=objposicaocursor.telay-9+"px";ist.left=objposicaocursor.telax-5+"px";ist.display="block";i3GEO.eventos.adicionaEventos("NAVEGAMAPA",["i3GEO.janela.excluiTips('todos')"]);return(Nid)},excluiTips:function(tipo){var ot,i;if(arguments.length===0){tipo="todos"}if(i3GEO.janela.TIPS.length>0){ot=i3GEO.janela.TIPS.length-1;if(ot>=0){do{if(tipo==='todos'){if(i3GEO.janela.TIPS[ot]){i=$i(i3GEO.janela.TIPS[ot].id);document.body.removeChild(i)}}if(tipo==='naofixos'){if($i(i3GEO.janela.TIPS[ot])){if($i(i3GEO.janela.TIPS[ot].id+"cabecatip").innerHTML!==""){document.body.removeChild($i(i3GEO.janela.TIPS[ot].id))}}}}while(ot--);if(tipo==="todos"){i3GEO.janela.TIPS=[]}}}},slider:function(funcao,inicial){var scaleFactor,bottomConstraint,topConstraint,janela,novoel,Event,slider="",bg,thumb;janela=i3GEO.janela.cria(230,200,"","","","<div class='i3GeoTituloJanela'>"+$trad("t20")+"</div>","opacidadeG");novoel=document.createElement("div");novoel.id="slider-bg";novoel.tabindex="-1";novoel.innerHTML='<div style="cursor:default;position:absolute;top:4px" id="slider-thumb"><img src="'+i3GEO.configura.locaplic+'/imagens/thumb-n.gif"></div>';janela[2].appendChild(novoel);Event=YAHOO.util.Event;bg="slider-bg";thumb="slider-thumb";novoel.style.position="relative";novoel.style.background='url('+i3GEO.configura.locaplic+'/imagens/bg-fader.gif) 5px 0 no-repeat';novoel.style.height="28px";novoel.style.width="228px";topConstraint=0;bottomConstraint=200;scaleFactor=1;Event.onDOMReady(function(){slider=YAHOO.widget.Slider.getHorizSlider(bg,thumb,topConstraint,bottomConstraint,20);slider.setValue(parseInt(inicial,10));slider.getRealValue=function(){return Math.round(this.getValue()*scaleFactor)};slider.subscribe("slideEnd",function(offsetFromStart){var actualValue=slider.getRealValue();eval(funcao+"("+actualValue+")")})});Event.on("putval","click",function(e){slider.setValue(100,false)})},comboCabecalhoTemas:function(idDiv,idCombo,ferramenta,tipo,onButtonClick,temaSel){var temp=$i(idDiv);if(!temaSel){temaSel=""}if(temaSel==""&&i3GEOF[ferramenta]&&i3GEOF[ferramenta].tema&&i3GEOF[ferramenta].tema!=""){temaSel=i3GEOF[ferramenta].tema}if(temp){i3GEO.util.comboTemas(temp.id+"Sel",function(retorno){var tema,container=$i(idDiv),botao;container.innerHTML=retorno.dados;botao=new YAHOO.widget.Button(idCombo,{type:"menu",menu:idCombo+"select"});if(temaSel!=""){tema=i3GEO.arvoreDeCamadas.pegaTema(temaSel);if(tema&&tema!=undefined){botao.set("label","<span class='cabecalhoTemas' >"+tema.tema+"</span>&nbsp;&nbsp;")}else{botao.set("label","<span class='cabecalhoTemas' >"+$trad("x92")+"</span>&nbsp;&nbsp;")}}else{botao.set("label","<span class='cabecalhoTemas' >"+$trad("x92")+"</span>&nbsp;&nbsp;")}if(!onButtonClick){onButtonClick=function(p_sType,p_aArgs){var oMenuItem=p_aArgs[1];if(oMenuItem){i3GEO.mapa.ativaTema(oMenuItem.value);if(oMenuItem.value===""){i3GEO.temaAtivo="";botao.set("label","<span class='cabecalhoTemas' >"+$trad("x92")+"</span>&nbsp;&nbsp;")}else{botao.set("label","<span class='cabecalhoTemas' >"+oMenuItem.cfg.getProperty("text")+"</span>&nbsp;&nbsp;")}if(i3GEOF[ferramenta]){i3GEOF[ferramenta].tema=oMenuItem.value;if($i("i3GEOF."+ferramenta+"_corpo")){$i("i3GEOF."+ferramenta+"_corpo").innerHTML="";eval("i3GEOF."+ferramenta+".inicia('i3GEOF."+ferramenta+"_corpo');")}}}};if(i3GEO.eventos.ATUALIZAARVORECAMADAS.length>20){i3GEO.eventos.ATUALIZAARVORECAMADAS=[]}i3GEO.eventos.adicionaEventos("ATUALIZAARVORECAMADAS",["i3GEO.janela.comboCabecalhoTemas('"+idDiv+"','"+idCombo+"','"+ferramenta+"','"+tipo+"')"])}botao.getMenu().subscribe("click",onButtonClick,botao)},temp.id,"",false,tipo,"",true,true)}}};