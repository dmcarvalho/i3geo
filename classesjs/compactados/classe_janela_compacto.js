if(typeof(i3GEO)==='undefined'){var i3GEO={}}YAHOO.namespace("i3GEO.janela");YAHOO.i3GEO.janela.manager=new YAHOO.widget.OverlayManager();YAHOO.namespace("janelaDoca.xp");YAHOO.janelaDoca.xp.manager=new YAHOO.widget.OverlayManager();YAHOO.i3GEO.janela.managerAguarde=new YAHOO.widget.OverlayManager();i3GEO.janela={ESTILOBD:"display:block;padding:5px 2px 5px 2px;",ESTILOAGUARDE:"normal",AGUARDEMODAL:false,ANTESCRIA:["i3GEO.janela.prepara()"],ANTESFECHA:[],TRANSICAOSUAVE:true,OPACIDADE:65,OPACIDADEAGUARDE:50,TIPS:[],ULTIMOZINDEX:0,prepara:function(){var iu=i3GEO.util;iu.escondePin();iu.escondeBox()},cria:function(wlargura,waltura,wsrc,nx,ny,texto,id,modal,classe,funcaoCabecalho,funcaoMinimiza){if($i(id)){janela=YAHOO.i3GEO.janela.manager.find(id);janela.show();janela.bringToTop();return}var i,wlargurA,ins,novoel,wdocaiframe,temp,fix,underlay,ifr,janela;if(navm&&!chro){this.TRANSICAOSUAVE=false}if(this.ANTESCRIA){for(i=0;i<this.ANTESCRIA.length;i++){eval(this.ANTESCRIA[i])}}if(!classe||classe==""){classe="hd"}if(!id||id===""){id="wdoca"}if(!modal||modal===""){modal=false}ifr=false;if(i3GEO.Interface&&i3GEO.Interface.ATUAL==="googleearth"){i3GEO.janela.TRANSICAOSUAVE=false;ifr=true}fix=false;if(nx===""||nx==="center"){fix=true}if(modal===true){underlay="none"}else{underlay="shadow"}temp=navm?0:2;wlargurA=parseInt(wlargura,10)+temp+"px";ins='<div id="'+id+'_cabecalho" class="'+classe+'" style="background-color:white;">';if(i3GEO.configura!==undefined){ins+="<img id='"+id+"_imagemCabecalho' style='z-index:2;position:absolute;left:3px;top:2px;visibility:hidden;' src=\'"+i3GEO.configura.locaplic+"/imagens/aguarde.gif\' />"}ins+="<span style='font-size:10px;'>"+texto+"</span>";if(funcaoMinimiza){ins+="<div id='"+id+"_minimizaCabecalho' class='container-minimiza'></div>"}ins+='</div><div id="'+id+'_corpo" class="bd" style="'+this.ESTILOBD+'">';if(wsrc!==""){ins+='<iframe name="'+id+'i" id="'+id+'i" valign="top" style="border:0px white solid"></iframe>'}ins+='</div>';novoel=document.createElement("div");novoel.id=id;novoel.style.display="block";novoel.innerHTML=ins;if(this.TRANSICAOSUAVE){novoel.onmouseover=function(){YAHOO.util.Dom.setStyle(novoel,"opacity",1)};novoel.onmouseout=function(){YAHOO.util.Dom.setStyle(novoel,"opacity",i3GEO.janela.OPACIDADE/100)};YAHOO.util.Dom.setStyle(novoel,"opacity",1)}document.body.appendChild(novoel);wdocaiframe=$i(id+"i");if(wdocaiframe){temp=wdocaiframe.style;temp.width=parseInt(wlargura,10)-12+"px";temp.height=waltura;temp.display="block";wdocaiframe.src=wsrc}else{if(waltura!=="auto"){$i(id+'_corpo').style.height=parseInt(waltura,10)+"px"}$i(id+'_corpo').style.width=parseInt(wlargura,10)+"px"}if(waltura==="auto"){janela=new YAHOO.widget.Panel(id,{iframe:ifr,modal:modal,width:wlargurA,underlay:"none",fixedcenter:fix,constraintoviewport:false,visible:true,monitorresize:false,dragOnly:true,keylisteners:null})}else{janela=new YAHOO.widget.ResizePanel(id,{hideMode:'offsets',iframe:ifr,underlay:underlay,modal:modal,width:wlargurA,fixedcenter:fix,constraintoviewport:false,visible:true,monitorresize:false,dragOnly:true,keylisteners:null})}if(nx!==""&&nx!=="center"){janela.moveTo(nx,ny+50)}YAHOO.i3GEO.janela.manager.register(janela);if(this.TRANSICAOSUAVE){janela.cfg.setProperty("effect",[{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.5}])}janela.cfg.setProperty("zIndex",[10000]);janela.render();if(navm&&id!=="i3geo_janelaMensagens"&&i3GEO.Interface.ATUAL==="googleearth"){janela.moveTo(0,0)}if(ifr===true){janela.iframe.style.zIndex=0}temp=$i(id+"_corpo");if(temp){if(navm){temp.style.paddingRight="0px"}temp.style.width=parseInt(temp.style.width,10)-2+"px"}if(funcaoCabecalho){$i(id+'_cabecalho').onclick=funcaoCabecalho}if(funcaoMinimiza){$i(id+"_minimizaCabecalho").onclick=funcaoMinimiza}YAHOO.util.Event.addListener(janela.close,"click",i3GEO.janela.fecha,janela,{id:id},true);return([janela,$i(id+"_cabecalho"),$i(id+"_corpo")])},minimiza:function(id){var temp=$i(id+"_corpo"),n,i,m=YAHOO.i3GEO.janela.manager.find(id);if(temp){if(temp.style.display==="block"){temp.style.display="none";if(m){m.hideIframe}}else{temp.style.display="block";if(m){m.showIframe}}}temp=$i(id+"_resizehandle");if(temp){if(temp.style.display==="none"){temp.style.display="block"}else{temp.style.display="none"}}temp=$i(id+"_c");if(temp){temp=temp.getElementsByTagName("div");n=temp.length;for(i=0;i<n;i++){if(temp[i].className==="underlay"||temp[i].className==="bd"){if(temp[i].style.display==="none"){temp[i].style.display="block"}else{temp[i].style.display="none"}}}}temp=$i(id+"_corpo");if(temp){if(temp.style.display==="none"){temp.style.display="block"}else{temp.style.display="none"}}},fecha:function(event,args){var i,id;i3GEO.util.escondePin();i3GEO.util.escondeBox();if(i3GEO.janela.ANTESFECHA){for(i=0;i<i3GEO.janela.ANTESFECHA.length;i++){eval(i3GEO.janela.ANTESFECHA[i])}}if(i3GEO.janela.id){id=i3GEO.janela.id}else{id=event.id}if(id==undefined){id=args.id}i3GEO.janela.destroi(id)},destroi:function(id){var janela=YAHOO.i3GEO.janela.manager.find(id);i3GEO.util.removeScriptTag(id+"_script");i3GEO.util.removeScriptTag(id+".dicionario_script");if(janela){YAHOO.i3GEO.janela.manager.remove(janela);janela=$i(id+"_c");janela.parentNode.removeChild(janela)}},alteraTamanho:function(w,h,id){var i;if(arguments.length===3){i=$i(id)}else{i=$i("wdoca")}if(i){i.style.width=w+"px";i.style.height=h+"px"}},abreAguarde:function(id,texto){var pos,temp,janela;if(!id||id==undefined){return}janela=YAHOO.i3GEO.janela.managerAguarde.find(id);pos=[0,0];if($i(i3GEO.Interface.IDCORPO)){pos=YAHOO.util.Dom.getXY($i(i3GEO.Interface.IDCORPO))}else if($i("contemImg")){pos=YAHOO.util.Dom.getXY($i("contemImg"))}if(i3GEO.janela.AGUARDEMODAL==true){texto+="<br><span style='color:navy;cursor:pointer;font-size:9px;' onclick='javascript:if(i3GEO.janela.AGUARDEMODAL == true){i3GEO.janela.AGUARDEMODAL = false;}else{i3GEO.janela.AGUARDEMODAL = true;}'>bloquear/desbloquear</span>"}if(!janela){janela=new YAHOO.widget.Panel(id,{width:"240px",fixedcenter:false,underlay:"none",close:true,draggable:false,modal:i3GEO.janela.AGUARDEMODAL,monitorresize:false});janela.render(document.body);YAHOO.i3GEO.janela.managerAguarde.register(janela)}if(i3GEO.janela.ESTILOAGUARDE==="normal"||i3GEO.janela.ESTILOAGUARDE==="reduzida"){janela.setBody(texto);janela.body.style.padding="5px"}if(i3GEO.janela.ESTILOAGUARDE==="normal"||i3GEO.janela.ESTILOAGUARDE==="minima"){janela.setHeader("<span><img id=aguardeGifAberto src='"+i3GEO.configura.locaplic+"/imagens/aguarde.gif' /></span>&nbsp;<span style=font-size:8px >"+YAHOO.i3GEO.janela.managerAguarde.overlays.length+"</span>")}if(i3GEO.parametros.w>0){janela.moveTo(pos[0]+(i3GEO.parametros.w/2)-120,pos[1])}else{janela.moveTo(pos[0],pos[1])}janela.show();try{janela.header.style.height="20px"}catch(e){}temp=$i(id+"_c");if(temp){temp.style.backgroundColor=""}YAHOO.util.Dom.setStyle(temp,"opacity",i3GEO.janela.OPACIDADEAGUARDE/100)},fechaAguarde:function(id){if(id!=undefined){var janela=YAHOO.i3GEO.janela.managerAguarde.find(id);if(janela){YAHOO.i3GEO.janela.managerAguarde.remove(janela);janela.destroy()}}},tempoMsg:function(texto,tempo){var pos,janela,attributes,anim,altura=40;janela=YAHOO.i3GEO.janela.managerAguarde.find("i3geoTempoMsg");pos=[0,0];if($i(i3GEO.Interface.IDCORPO)){pos=YAHOO.util.Dom.getXY($i(i3GEO.Interface.IDCORPO))}else if($i("contemImg")){pos=YAHOO.util.Dom.getXY($i("contemImg"))}if(!janela){janela=new YAHOO.widget.Panel("i3geoTempoMsg",{width:"220px",fixedcenter:false,underlay:"none",close:false,draggable:false,modal:false,monitorresize:false});janela.render(document.body);YAHOO.i3GEO.janela.managerAguarde.register(janela)}janela.setBody(texto);altura=40;janela.body.style.padding="5px";janela.body.style.backgroundColor="yellow";janela.body.style.height="0px";janela.body.style.overflow="hidden";janela.body.onmouseover=function(){var janela=YAHOO.i3GEO.janela.managerAguarde.find("i3geoTempoMsg");if(janela){janela.destroy()}};if(i3GEO.parametros.w>0){janela.moveTo(pos[0]+(i3GEO.parametros.w/2)-120,pos[1])}else{janela.moveTo(pos[0],pos[1])}janela.show();attributes={height:{to:altura}};anim=new YAHOO.util.Anim(janela.body,attributes,.5,YAHOO.util.Easing.easeNone);anim.onComplete.subscribe(function(){janela.body.style.overflow="auto";janela.body.style.display="block";$i("i3geoTempoMsg_c").style.zIndex=100000});anim.animate();if(!tempo){tempo=4000}setTimeout(function(){var attributes,anim,janela=YAHOO.i3GEO.janela.managerAguarde.find("i3geoTempoMsg");if(janela){janela.body.style.overflow="hidden";attributes={height:{to:0}};anim=new YAHOO.util.Anim(janela.body,attributes,.5,YAHOO.util.Easing.easeNone);anim.onComplete.subscribe(function(){janela.destroy()});anim.animate()}},tempo)},ativaAlerta:function(){YAHOO.namespace("i3GEO.janela.dialogInfo");YAHOO.i3GEO.janela.dialogInfo=new YAHOO.widget.SimpleDialog("simpledialog1",{width:"300px",fixedcenter:true,visible:false,draggable:false,zIndex:100000,textAlign:"left",close:true,modal:true,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,buttons:[{text:"fecha",handler:function(){this.hide()},isDefault:true}],icon:YAHOO.widget.SimpleDialog.ICON_WARN,text:""});YAHOO.i3GEO.janela.manager.register(YAHOO.i3GEO.janela.dialogInfo);YAHOO.i3GEO.janela.dialogInfo.setHeader("Alerta");YAHOO.i3GEO.janela.dialogInfo.render(document.body);window.alert=function(texto){YAHOO.i3GEO.janela.dialogInfo.cfg.setProperty("text",texto);YAHOO.i3GEO.janela.dialogInfo.show()}},mensagemSimples:function(texto,cabecalho){var janela;if($i("mensagemSimples1")){janela=YAHOO.i3GEO.janela.manager.find("mensagemSimples1")}else{janela=new YAHOO.widget.SimpleDialog("mensagemSimples1",{width:"300px",fixedcenter:true,visible:true,draggable:true,zIndex:100000,textAlign:"left",close:true,modal:false,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,text:""});YAHOO.i3GEO.janela.manager.register(janela);janela.setHeader(cabecalho);janela.render(document.body)}janela.setHeader(cabecalho);janela.cfg.setProperty("text",texto);janela.show()},tip:function(cabecalho){var Nid,i,novoel,res;if(arguments.length===0){cabecalho="fixar"}Nid=YAHOO.util.Dom.generateId();i=$i("i3geo_rosa");if(i){i.style.display="none"}if($i(i3GEO.Interface.IDCORPO)){$i("img").title=""}novoel=document.createElement("div");novoel.id=Nid;novoel.style.position="absolute";novoel.style.zIndex=5000;novoel.style.textAlign="left";novoel.style.background="white";if(navm){novoel.style.filter="alpha(opacity=90)"}else{novoel.style.opacity=".9"}document.body.appendChild(novoel);i3GEO.janela.TIPS.push($i(Nid));res="<div id='"+Nid+"cabecatip' style='text-align:left;background-color:rgb(240,240,240)'>";res+="<span style='color:navy;cursor:pointer;text-align:left' onclick='javascript:$i(\""+Nid+"cabecatip\").innerHTML =\"\";' >"+cabecalho+"</span></div>";novoel.innerHTML="<table style='text-align:left'><tr><td style='text-align:left'>"+res+"</td></tr></table>";ist=novoel.style;ist.top=objposicaocursor.telay-9+"px";ist.left=objposicaocursor.telax-5+"px";ist.display="block";if(i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.janela.excluiTips('todos')")<0){i3GEO.eventos.NAVEGAMAPA.push("i3GEO.janela.excluiTips('todos')")}if(i3GEO.eventos.MOUSEMOVE.toString().search("i3GEO.janela.excluiTips('naofixos')")<0){i3GEO.eventos.MOUSEMOVE.push("i3GEO.janela.excluiTips('naofixos')")}return(Nid)},excluiTips:function(tipo){var ot,i;if(arguments.length===0){tipo="todos"}if(i3GEO.janela.TIPS.length>0){ot=i3GEO.janela.TIPS.length-1;if(ot>=0){do{if(tipo==='todos'){if(i3GEO.janela.TIPS[ot]){i=$i(i3GEO.janela.TIPS[ot].id);document.body.removeChild(i)}}if(tipo==='naofixos'){if($i(i3GEO.janela.TIPS[ot])){if($i(i3GEO.janela.TIPS[ot].id+"cabecatip").innerHTML!==""){document.body.removeChild($i(i3GEO.janela.TIPS[ot].id))}}}}while(ot--);if(tipo==="todos"){i3GEO.janela.TIPS=[]}}}},slider:function(funcao,inicial){var scaleFactor,bottomConstraint,topConstraint,janela,novoel,Event,slider="",bg,thumb;janela=i3GEO.janela.cria(230,200,"","","",$trad("t20"),"opacidadeG");novoel=document.createElement("div");novoel.id="slider-bg";novoel.tabindex="-1";novoel.innerHTML='<div style="cursor:default;position:absolute;top:4px" id="slider-thumb"><img src="'+i3GEO.configura.locaplic+'/imagens/thumb-n.gif"></div>';janela[2].appendChild(novoel);Event=YAHOO.util.Event;bg="slider-bg";thumb="slider-thumb";novoel.style.position="relative";novoel.style.background='url('+i3GEO.configura.locaplic+'/imagens/bg-fader.gif) 5px 0 no-repeat';novoel.style.height="28px";novoel.style.width="228px";topConstraint=0;bottomConstraint=200;scaleFactor=1;Event.onDOMReady(function(){slider=YAHOO.widget.Slider.getHorizSlider(bg,thumb,topConstraint,bottomConstraint,20);slider.setValue(parseInt(inicial,10));slider.getRealValue=function(){return Math.round(this.getValue()*scaleFactor)};slider.subscribe("slideEnd",function(offsetFromStart){var actualValue=slider.getRealValue();eval(funcao+"("+actualValue+")")})});Event.on("putval","click",function(e){slider.setValue(100,false)})},comboCabecalhoTemas:function(idDiv,idCombo,ferramenta,tipo){var temp=$i(idDiv);if(temp){temp.innerHTML="";i3GEO.util.comboTemas(temp.id+"Sel",function(retorno){var container=$i(idDiv),c;container.innerHTML=retorno.dados;c=$i(idCombo);c.style.width="150px";c.style.border="solid #B4B4B4 1px";c.style.top="6px";c.style.left="2px";c.style.position="relative";c.style.fontSize="10px";c.style.color="#686868";if(i3GEO.temaAtivo!==""){c.value=i3GEO.temaAtivo}if(i3GEOF[ferramenta].tema){c.value=i3GEOF[ferramenta].tema}if(c.value===""){i3GEOF[ferramenta].tema="";$i("i3GEOF."+ferramenta+"_corpo").innerHTML=""}c.onchange=function(){var valor=$i(idCombo).value;if(valor!==""){i3GEO.mapa.ativaTema(valor);i3GEOF[ferramenta].tema=valor;$i("i3GEOF."+ferramenta+"_corpo").innerHTML="";eval("i3GEOF."+ferramenta+".inicia('i3GEOF."+ferramenta+"_corpo');")}}},temp.id,"",false,tipo)}temp="i3GEO.janela.comboCabecalhoTemas('"+idDiv+"','"+idCombo+"','"+ferramenta+"','"+tipo+"')";if(i3GEO.eventos.ATUALIZAARVORECAMADAS.toString().search(temp)<0){i3GEO.eventos.ATUALIZAARVORECAMADAS.push(temp)}}};try{YAHOO.widget.ResizePanel=function(el,userConfig){if(arguments.length>0){YAHOO.widget.ResizePanel.superclass.constructor.call(this,el,userConfig)}};YAHOO.widget.ResizePanel.CSS_PANEL_RESIZE="yui-resizepanel";YAHOO.widget.ResizePanel.CSS_RESIZE_HANDLE="resizehandle";YAHOO.extend(YAHOO.widget.ResizePanel,YAHOO.widget.Panel,{init:function(el,userConfig){YAHOO.widget.ResizePanel.superclass.init.call(this,el);this.beforeInitEvent.fire(YAHOO.widget.ResizePanel);var Dom=YAHOO.util.Dom,oInnerElement=this.innerElement,oResizeHandle=document.createElement("DIV"),sResizeHandleId=this.id+"_resizehandle";oResizeHandle.id=sResizeHandleId;oResizeHandle.className=YAHOO.widget.ResizePanel.CSS_RESIZE_HANDLE;Dom.addClass(oInnerElement,YAHOO.widget.ResizePanel.CSS_PANEL_RESIZE);this.resizeHandle=oResizeHandle;function initResizeFunctionality(){var me=this,oHeader=this.header,oBody=this.body,oFooter=this.footer,nStartWidth,nStartHeight,aStartPos=0,nBodyBorderTopWidth,nBodyBorderBottomWidth,nBodyTopPadding,nBodyBottomPadding,nBodyOffset=0;oInnerElement.appendChild(oResizeHandle);this.ddResize=new YAHOO.util.DragDrop(sResizeHandleId,this.id);this.ddResize.setHandleElId(sResizeHandleId);this.ddResize.onMouseDown=function(e){nStartWidth=oInnerElement.offsetWidth;nStartHeight=oInnerElement.offsetHeight;if(YAHOO.env.ua.ie&&document.compatMode==="BackCompat"){nBodyOffset=0}else{nBodyBorderTopWidth=parseInt(Dom.getStyle(oBody,"borderTopWidth"),10);nBodyBorderBottomWidth=parseInt(Dom.getStyle(oBody,"borderBottomWidth"),10);nBodyTopPadding=parseInt(Dom.getStyle(oBody,"paddingTop"),10);nBodyBottomPadding=parseInt(Dom.getStyle(oBody,"paddingBottom"),10);nBodyOffset=nBodyBorderTopWidth+nBodyBorderBottomWidth+nBodyTopPadding+nBodyBottomPadding}me.cfg.setProperty("width",nStartWidth+"px");aStartPos=[YAHOO.util.Event.getPageX(e),YAHOO.util.Event.getPageY(e)]};this.ddResize.onDrag=function(e){var aNewPos=[YAHOO.util.Event.getPageX(e),YAHOO.util.Event.getPageY(e)],nOffsetX=aNewPos[0]-aStartPos[0],nOffsetY=aNewPos[1]-aStartPos[1],nNewWidth=Math.max(nStartWidth+nOffsetX,10),nNewHeight=Math.max(nStartHeight+nOffsetY,10),nBodyHeight=(nNewHeight-(oFooter.offsetHeight+oHeader.offsetHeight+nBodyOffset));me.cfg.setProperty("width",nNewWidth+"px");oBody.style.width=nNewWidth-4+"px";if(nBodyHeight<0){nBodyHeight=0}oBody.style.height=nBodyHeight+"px";if($i("wdocai")){$i("wdocai").style.height=nBodyHeight+"px";$i("wdocai").style.width=oBody.style.width+"px"}};this.ddResize.onMouseUp=this.ddResize.onDrag.call()}function onBeforeShow(){initResizeFunctionality.call(this);this.unsubscribe("beforeShow",onBeforeShow)}function onBeforeRender(){if(!this.footer){this.setFooter("")}if(this.cfg.getProperty("visible")){initResizeFunctionality.call(this)}else{this.subscribe("beforeShow",onBeforeShow)}this.unsubscribe("beforeRender",onBeforeRender)}this.subscribe("beforeRender",onBeforeRender);if(userConfig){this.cfg.applyConfig(userConfig,true)}this.initEvent.fire(YAHOO.widget.ResizePanel)},toString:function(){return"ResizePanel "+this.id}})}catch(e){}