if(typeof(i3GEO)=='undefined'){i3GEO=new Array()}i3GEO.desenho={richdraw:"",criaContainerRichdraw:function(){pontosdistobj={xpt:new Array(),ypt:new Array(),dist:new Array(),xtela:new Array(),ytela:new Array(),ximg:new Array(),yimg:new Array(),linhas:new Array()};try{var divgeo=i3GEO.desenho.criaDivContainer();divgeo.innerHTML="";var renderer;try{renderer=new VMLRenderer();i3GEO.desenho.richdraw=new RichDrawEditor(divgeo,renderer)}catch(e){renderer=new SVGRenderer();i3GEO.desenho.richdraw=new RichDrawEditor(divgeo,renderer)}i3GEO.desenho.richdraw.editCommand('fillcolor','red');i3GEO.desenho.richdraw.editCommand('linecolor','gray');i3GEO.desenho.richdraw.editCommand('linewidth','1px');i3GEO.desenho.richdraw.editCommand('mode','line');divgeo.style.display="block";i3GEO.eventos.ativa(divgeo)}catch(e){alert("Erro ao tentar criar container richdraw")}},criaDivContainer:function(){if(!$i("divGeometriasTemp")){var pos=[0,0];if($i("img"))var pos=i3GEO.util.pegaPosicaoObjeto($i("img"));var novoel=document.createElement("div");novoel.id="divGeometriasTemp";var ne=novoel.style;ne.cursor="crosshair";ne.zIndex=0;ne.position="absolute";ne.width=i3GEO.parametros.w;ne.height=i3GEO.parametros.h;ne.border="1px solid black";ne.display="none";ne.top=pos[1];ne.left=pos[0];document.body.appendChild(novoel)}return($i("divGeometriasTemp"))},aplica:function(tipo,objeto,n,texto){if(i3GEO.desenho.richdraw&&$i("img")){var pos=i3GEO.util.pegaPosicaoObjeto($i("img"));if((tipo=="resizeLinha")||(tipo=="resizePoligono")&&navn){try{i3GEO.desenho.richdraw.renderer.resize(objeto,0,0,objposicaocursor.imgx,objposicaocursor.imgy)}catch(e){window.status=n+" erro ao movimentar a linha "}}if((tipo=="resizeLinha")&&navm){try{var r=$i(i3GEO.desenho.richdraw.container.id);var elemento=r.lastChild;if(elemento.innerHTML!=""){var elementos=r.childNodes;var elemento=elementos[elementos.length-2]}r.removeChild(elemento);var dy=objposicaocursor.imgy;var dx=objposicaocursor.imgx-(i3GEO.parametros.w/2);i3GEO.desenho.richdraw.renderer.create(i3GEO.desenho.richdraw.mode,i3GEO.desenho.richdraw.fillColor,i3GEO.desenho.richdraw.lineColor,i3GEO.desenho.richdraw.lineWidth,(pontosdistobj.ximg[n-1])-(i3GEO.parametros.w/2)-1,pontosdistobj.yimg[n-1]-3,dx,dy-3)}catch(e){window.status=n+" erro ao movimentar a linha "}}if((tipo=="resizePoligono")&&navm){try{var r=$i(i3GEO.desenho.richdraw.container.id);r.removeChild(r.lastChild);r.removeChild(r.lastChild);var dy=objposicaocursor.imgy;var dx=objposicaocursor.imgx-(i3GEO.parametros.w/2);i3GEO.desenho.richdraw.renderer.create(i3GEO.desenho.richdraw.mode,i3GEO.desenho.richdraw.fillColor,i3GEO.desenho.richdraw.lineColor,i3GEO.desenho.richdraw.lineWidth,(pontosdistobj.ximg[n-1])-(i3GEO.parametros.w/2)-1,pontosdistobj.yimg[n-1]-3,dx,dy-3);i3GEO.desenho.richdraw.renderer.create(i3GEO.desenho.richdraw.mode,i3GEO.desenho.richdraw.fillColor,i3GEO.desenho.richdraw.lineColor,i3GEO.desenho.richdraw.lineWidth,(pontosdistobj.ximg[0])-(i3GEO.parametros.w/2)-1,pontosdistobj.yimg[0]-3,dx,dy-3)}catch(e){window.status=n+" erro ao movimentar a linha "}}if(tipo=="insereCirculo"){var dx=Math.pow(((pontosdistobj.xtela[n])*1)-((pontosdistobj.xtela[n-1])*1),2);var dy=Math.pow(((pontosdistobj.ytela[n])*1)-((pontosdistobj.ytela[n-1])*1),2);var w=Math.sqrt(dx+dy);if(navn){try{i3GEO.desenho.richdraw.renderer.create('circ','','rgb(250,250,250)',i3GEO.desenho.richdraw.lineWidth,pontosdistobj.ximg[n-1],pontosdistobj.yimg[n-1],w,w)}catch(e){}}else{try{i3GEO.desenho.richdraw.renderer.create('circ','','rgb(250,250,250)',i3GEO.desenho.richdraw.lineWidth,pontosdistobj.ximg[n-1]-w,pontosdistobj.yimg[n-1]-w,w*2,w*2)}catch(e){}}}if(tipo=="insereTexto"){try{i3GEO.desenho.richdraw.renderer.create('text','','rgb(250,250,250)',i3GEO.desenho.richdraw.lineWidth,pontosdistobj.ximg[n-1],pontosdistobj.yimg[n-1],"","",texto)}catch(e){}}}}};