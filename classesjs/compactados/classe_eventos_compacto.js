if(typeof(i3GEO)=='undefined'){i3GEO=new Array()}objposicaocursor={ddx:"",ddy:"",dmsx:"",dmsy:"",telax:"",telay:"",imgx:"",imgy:"",refx:"",refy:""};i3GEO.eventos={NAVEGAMAPA:new Array("atualizaEscalaNumerica()"),MOUSEPARADO:new Array("i3GEO.navega.mostraRosaDosVentos()"),MOUSEMOVE:new Array(),MOUSEDOWN:new Array(),MOUSEUP:new Array(),MOUSECLIQUE:new Array("i3GEO.eventos.cliqueCapturaPt()"),TIMERPARADO:"",mouseParado:function(){try{clearTimeout(i3GEO.eventos.TIMERPARADO)}catch(e){i3GEO.eventos.TIMERPARADO=""}try{if(i3GEO.eventos.MOUSEPARADO.length>0&&objposicaocursor.imgy>0&&objposicaocursor.imgx>0){var f=i3GEO.eventos.MOUSEPARADO.length-1;if(f>=0){do{if(objposicaocursor.imgx>0){eval(i3GEO.eventos.MOUSEPARADO[f])}}while(f--)}}}catch(e){}},navegaMapa:function(){if(i3GEO.eventos.NAVEGAMAPA.length>0){var f=i3GEO.eventos.NAVEGAMAPA.length-1;if(f>=0){do{var temp=i3GEO.eventos.NAVEGAMAPA[f].replace("()","");if(eval('typeof '+temp)=='function'){eval(i3GEO.eventos.NAVEGAMAPA[f])}}while(f--)}}},mousemoveMapa:function(){if(i3GEO.eventos.MOUSEMOVE.length>0){var f=i3GEO.eventos.MOUSEMOVE.length-1;if(f>=0){do{var temp=i3GEO.eventos.MOUSEMOVE[f].replace("()","");if(eval('typeof '+temp)=='function'){eval(i3GEO.eventos.MOUSEMOVE[f])}}while(f--)}}},mousedownMapa:function(){if(i3GEO.eventos.MOUSEDOWN.length>0){var f=i3GEO.eventos.MOUSEDOWN.length-1;if(f>=0){do{var temp=i3GEO.eventos.MOUSEDOWN[f].replace("()","");if(eval('typeof '+temp)=='function'){eval(i3GEO.eventos.MOUSEDOWN[f])}}while(f--)}}},mouseupMapa:function(){if(i3GEO.eventos.MOUSEUP.length>0){var f=i3GEO.eventos.MOUSEUP.length-1;if(f>=0){do{var temp=i3GEO.eventos.MOUSEUP[f].replace("()","");if(eval('typeof '+temp)=='function'){eval(i3GEO.eventos.MOUSEUP[f])}}while(f--)}}},mousecliqueMapa:function(exy){if(i3GEO.eventos.MOUSECLIQUE.length>0){var f=i3GEO.eventos.MOUSECLIQUE.length-1;if(f>=0){do{eval(i3GEO.eventos.MOUSECLIQUE[f])}while(f--)}}},posicaoMouseMapa:function(e){var container="";try{var container=e.target.parentNode.id}catch(erro){}if(container!="divGeometriasTemp"){if((i3GEO.interface.ATUAL=="googlemaps")||(i3GEO.interface.ATUAL=="openlayers")){return}}if(!e)var e=window.event;if(e.target){var targ=e.target}else if(e.srcElement)var targ=e.srcElement;if(targ.id==""&&$i(i3GEO.interface.IDMAPA)){var targ=$i(i3GEO.interface.IDMAPA)}try{if(g_panM!='undefined'&&g_panM=="sim"){var pos=i3GEO.util.pegaPosicaoObjeto(targ.parentNode)}else{var pos=i3GEO.util.pegaPosicaoObjeto(targ)}if((i3GEO.configura.entorno=="sim")&&(g_panM=="sim")){pos[0]=pos[0]-i3GEO.parametros.w;pos[1]=pos[1]-i3GEO.parametros.h}}catch(m){var pos=i3GEO.util.pegaPosicaoObjeto(targ)}var mousex=0;var mousey=0;if(e.pageX||e.pageY){var mousex=e.pageX;var mousey=e.pageY}else if(e.clientX||e.clientY){var mousex=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;var mousey=e.clientY+document.body.scrollTop+document.documentElement.scrollTop}var xfig=mousex-pos[0];var yfig=mousey-pos[1];var xreffig=xfig;var yreffig=yfig;var xtela=mousex;var ytela=mousey;var c=i3GEO.parametros.pixelsize;var ex=i3GEO.parametros.mapexten;try{if(targ.id=="imagemReferencia"){var c=i3GEO.parametros.celularef;var ex=i3GEO.parametros.extentref;var r=$i("i3geo_rosa");if(r)r.style.display="none"}}catch(e){i3GEO.parametros.celularef=0}var teladd=i3GEO.calculo.tela2dd(xfig,yfig,c,ex);var teladms=i3GEO.calculo.dd2dms(teladd[0],teladd[1]);objposicaocursor={ddx:teladd[0],ddy:teladd[1],dmsx:teladms[0],dmsy:teladms[1],telax:xtela,telay:ytela,imgx:xfig,imgy:yfig,refx:xreffig,refy:yreffig}},ativa:function(docMapa){docMapa.onmouseover=function(){this.onmousemove=function(exy){i3GEO.eventos.posicaoMouseMapa(exy);try{try{clearTimeout(i3GEO.eventos.TIMERPARADO)}catch(e){var a=e}i3GEO.eventos.TIMERPARADO=setTimeout('i3GEO.eventos.mouseParado()',i3GEO.configura.tempoMouseParado)}catch(e){var e=""}try{i3GEO.eventos.mousemoveMapa()}catch(e){var e=""}}};docMapa.onmouseout=function(){try{objmapaparado="parar"}catch(e){var e=""}};docMapa.onmousedown=function(exy){try{i3GEO.eventos.posicaoMouseMapa(exy);if(navm){var k=event.button}else{var k=exy.button}if(k!=2)i3GEO.eventos.mousedownMapa()}catch(e){var e=""}};docMapa.onclick=function(exy){try{if(navm){var k=event.button}else{var k=exy.button}if(k!=2)i3GEO.eventos.mousecliqueMapa()}catch(e){var e=""}};docMapa.onmouseup=function(exy){try{if(navm){var k=event.button}else{var k=exy.button}if(k!=2)i3GEO.eventos.mouseupMapa()}catch(e){var e=""}}},cliqueCapturaPt:function(){if(g_tipoacao!="capturaponto"){return}else{if($i("wdocai")){var doc=(navm)?document.frames("wdocai").document:$i("wdocai").contentDocument}try{var x=objposicaocursor.dmsx.split(" ");var y=objposicaocursor.dmsy.split(" ");if(doc.getElementById("ixg")){doc.getElementById("ixg").value=x[0]}if(doc.getElementById("ixm")){doc.getElementById("ixm").value=x[1]}if(doc.getElementById("ixs")){doc.getElementById("ixs").value=x[2]}if(doc.getElementById("iyg")){doc.getElementById("iyg").value=y[0]}if(doc.getElementById("iym")){doc.getElementById("iym").value=y[1]}if(doc.getElementById("iys")){doc.getElementById("iys").value=y[2]}}catch(m){}}}};