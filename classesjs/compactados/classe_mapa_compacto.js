if(typeof(i3GEO)==='undefined'){i3GEO=[]}i3GEO.mapa={GEOXML:[],ajustaPosicao:function(elemento){if(arguments.length===0){return}if(!$i(elemento)){return}var imagemxi,imagemyi,imagemxref,imagemyref,dc,c;try{imagemxi=0;imagemyi=0;imagemxref=0;imagemyref=0;dc=$i(elemento);while((dc.offsetParent)&&(dc.offsetParent.id!=="i3geo")){dc=dc.offsetParent;imagemxi=imagemxi+dc.offsetLeft;imagemyi=imagemyi+dc.offsetTop}c=$i(i3GEO.Interface.IDCORPO);if(c){c.style.position="absolute";if(navm){$left(i3GEO.Interface.IDCORPO,imagemxi-1)}else{$left(i3GEO.Interface.IDCORPO,imagemxi)}$top(i3GEO.Interface.IDCORPO,imagemyi)}}catch(e){alert("Ocorreu um erro. i3GEO.mapa.ajustaPosicao "+e)}},ativaTema:function(codigo){var noArvoreCamadas=$i("arrastar_"+codigo),noAtualArvoreCamadas=$i("arrastar_"+i3GEO.temaAtivo);i3GEO.temaAtivo=codigo;if(noAtualArvoreCamadas){noAtualArvoreCamadas.style.color=""}if(noArvoreCamadas){noArvoreCamadas.style.color="brown"}},ativaLogo:function(){if(i3GEO.Interface.ATUAL==="googlemaps"){alert("Essa opera��o n�o funciona nessa interface");return}i3GEO.php.ativalogo(i3GEO.atualiza)},verifica:function(retorno){try{i3GEO.janela.abreAguarde("ajaxCorpoMapa",$trad("o3"));if(retorno.data){retorno=retorno.data}if(retorno.variaveis){retorno=retorno.variaveis}if((retorno==="erro")||(retorno===undefined)){i3GEO.mapa.ajustaPosicao();i3GEO.janela.fechaAguarde();i3GEO.mapa.recupera.inicia()}i3GEO.mapa.recupera.TENTATIVA=0}catch(e){if(i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps"){i3GEO.janela.fechaAguarde();return}if(i3GEO.mapa.recupera.TENTATIVA===0){alert("Erro no mapa. Sera feita uma tentativa de recuperacao.");i3GEO.mapa.recupera.inicia()}else{alert("Recuperacao impossivel. Sera feita uma tentativa de reiniciar o mapa.");if(i3GEO.mapa.recupera.TENTATIVA===1){i3GEO.mapa.recupera.TENTATIVA=2;i3GEO.php.reiniciaMapa(i3GEO.atualiza)}}}},recupera:{TENTATIVA:0,inicia:function(){i3GEO.mapa.ajustaPosicao();i3GEO.janela.fechaAguarde();if(i3GEO.mapa.recupera.TENTATIVA===0){i3GEO.mapa.recupera.TENTATIVA++;i3GEO.mapa.recupera.restaura()}},restaura:function(){i3GEO.php.recuperamapa(i3GEO.atualiza)}},legendaHTML:{incluiBotaoLibera:true,ID:"",cria:function(id){if(arguments.length===0){id=""}i3GEO.mapa.legendaHTML.ID=id;if(i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.mapa.legendaHTML.atualiza()")<0){i3GEO.eventos.NAVEGAMAPA.push("i3GEO.mapa.legendaHTML.atualiza()")}i3GEO.mapa.legendaHTML.atualiza()},atualiza:function(){var temp=function(retorno){var s,ins,elementos,i;if(i3GEO.mapa.legendaHTML.ID!==""&&$i(i3GEO.mapa.legendaHTML.ID)){if((retorno.data!=="erro")&&(retorno.data!==undefined)){s=i3GEO.configura.locaplic+"/imagens/solta.gif";ins="";if(i3GEO.mapa.legendaHTML.incluiBotaoLibera===true){ins+="<img onclick='i3GEO.mapa.legendaHTML.libera()' id=soltaLeg src="+s+" title='clique para liberar'/><br>"}ins+="<div id='corpoLegi' >"+retorno.data.legenda+"</div>";$i(i3GEO.mapa.legendaHTML.ID).innerHTML=ins}}if($i("wlegenda")){$i("wlegenda").innerHTML=retorno.data.legenda;elementos=$i("wlegenda").getElementsByTagName("input");for(i=0;i<elementos.length;i++){elementos[i].style.display="none"}}};i3GEO.mapa.legendaHTML.obtem(temp)},obtem:function(funcao){i3GEO.php.criaLegendaHTML(funcao,"",i3GEO.configura.templateLegenda)},ativaDesativaTema:function(inputbox){var temp=function(){i3GEO.php.corpo(i3GEO.atualiza,i3GEO.configura.tipoimagem);i3GEO.arvoreDeCamadas.atualiza("");i3GEO.janela.fechaAguarde("redesenha")};i3GEO.janela.abreAguarde("redesenha",$trad("o1"));if(!inputbox.checked){i3GEO.php.ligatemas(temp,inputbox.value,"")}else{i3GEO.php.ligatemas(temp,"",inputbox.value)}},libera:function(){var temp=function(retorno){var novoel,temp,n,i;if(!$i("moveLegi")){novoel=document.createElement("div");novoel.id="moveLegi";novoel.style.display="block";temp='<div class="hd">Legenda</div>';temp+='<div id="wlegenda" style="text-align:left;background-color:white;height:300px;width:300px;overflow:auto" ></div>';novoel.innerHTML=temp;document.body.appendChild(novoel);YAHOO.namespace("moveLegi.xp");YAHOO.moveLegi.xp.panel=new YAHOO.widget.ResizePanel("moveLegi",{width:"300px",fixedcenter:true,constraintoviewport:false,underlay:"none",close:true,visible:true,draggable:true,modal:false,iframe:false});YAHOO.moveLegi.xp.panel.render()}$i("wlegenda").innerHTML=retorno.data.legenda;temp=$i("wlegenda").getElementsByTagName("input");n=temp.length;for(i=0;i<n;i++){temp[i].style.display="none"}YAHOO.moveLegi.xp.panel.show();$i("moveLegi_c").style.zIndex=10000};i3GEO.mapa.legendaHTML.obtem(temp)}},legendaIMAGEM:{obtem:function(funcao){i3GEO.php.criaLegendaImagem(funcao)}},dialogo:{t3d:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.t3d()","3d","t3d")},imprimir:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.imprimir()","imprimir","imprimir")},mostraExten:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.mostraExten()","mostraexten","mostraExten")},outputformat:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.outputformat()","outputformat","outputformat")},autoredesenha:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.autoredesenha()","opcoes_autoredesenha","opcoesTempo")},salvaMapa:function(){if(i3GEO.parametros===""){alert("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return}i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.salvaMapa()","salvamapa","salvaMapa")},carregaMapa:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.carregaMapa()","carregamapa","carregaMapa")},convertews:function(){if(i3GEO.parametros.mapfile===""){alert("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return}i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.convertews()","convertews","converteMapaWS")},convertekml:function(){if(i3GEO.parametros.mapfile===""){alert("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return}i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.convertekml()","convertemapakml","converteMapaKml")},queryMap:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.queryMap()","opcoes_querymap","opcoesQuery")},template:function(){i3GEO.janela.cria("300px","400px",i3GEO.configura.locaplic+"/ferramentas/template/index.htm","","","Template <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=8' >&nbsp;&nbsp;&nbsp;</a>")},tamanho:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.tamanho()","opcoes_tamanho","opcoesTamanho")},tipoimagem:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.tipoimagem()","tipoimagem","tipoimagem")},corFundo:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.corFundo()","opcoes_fundo","opcoesFundo")},opcoesEscala:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoesEscala()","opcoes_escala","opcoesEscala")},opcoesLegenda:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoesLegenda()","opcoes_legenda","opcoesLegenda")},gradeCoord:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.gradeCoord()","gradecoord","gradeCoord")},cliqueTexto:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cliqueTexto()","inseretxt","inseretxt")},selecao:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.selecao()","selecao","selecao")},cliquePonto:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cliquePonto()","inserexy2","inserexy")},cliqueGrafico:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cliqueGrafico()","inseregrafico","insereGrafico")},cliqueIdentificaDefault:function(){if(g_tipoacao==="identifica"){i3GEO.eventos.MOUSEPARADO.remove("verificaTip()");if(typeof(i3GEOF.identifica)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/identifica/index.js.php";i3GEO.util.scriptTag(js,"i3GEOF.identifica.criaJanelaFlutuante()","i3GEOF.identifica_script")}else{i3GEOF.identifica.x=objposicaocursor.ddx;i3GEOF.identifica.y=objposicaocursor.ddy;i3GEOF.identifica.buscaDadosTema(i3GEO.temaAtivo);return}}},verificaTipDefault:function(){var ntemas,etiquetas,j,retorna;ntemas=i3GEO.arvoreDeCamadas.CAMADAS.length;etiquetas=false;for(j=0;j<ntemas;j++){if(i3GEO.arvoreDeCamadas.CAMADAS[j].etiquetas!==""){etiquetas=true}}if(etiquetas===false){return}if(i3GEO.Interface.ATUAL==="padrao"){$i("img").style.cursor="wait"}if(i3GEO.Interface.ATUAL==="googleearth"){i3GEO.Interface.googleearth.aguarde.visibility="visible"}retorna=function(retorno){var temp,rfes,n,balloon,i,mostra,res,temas,ntemas,titulo,tips,j,ntips,ins,r,ds,nds,s;i=$i("i3geo_rosa");if(i){i.style.display="none"}mostra=false;try{retorno=retorno.data;if(retorno!==""){res="";temas=retorno;ntemas=temas.length;for(j=0;j<ntemas;j++){titulo=temas[j].nome;if(i3GEO.configura.tipotip==="completo"||i3GEO.configura.tipotip==="balao"){titulo="<span style='text-decoration:underline;text-align:left;font-size:9pt'><b>"+titulo+"</b></span><br>"}else{titulo=""}tips=(temas[j].resultado.tips).split(",");ntips=tips.length;ins="";ds=temas[j].resultado.dados;if(ds!==" "){try{nds=ds.length;for(s=0;s<nds;s++){for(r=0;r<ntips;r++){try{eval("var alias = ds[s]."+tips[r]+".alias");eval("var valor = ds[s]."+tips[r]+".valor");eval("var link = ds[s]."+tips[r]+".link");eval("var img = ds[s]."+tips[r]+".img");if(i3GEO.configura.tipotip==="completo"||i3GEO.configura.tipotip==="balao"){if(valor!==""&&link===""){ins+="<span class='tiptexto' style='text-align:left;font-size:8pt'>"+alias+" :"+valor+"</span><br>"}if(valor!==""&&link!==""){ins+="<span class='tiptexto' style='text-align:left;font-size:8pt'>"+alias+" : <a style='color:blue;cursor:pointer' target=_blanck href='"+link+"' >"+valor+"</a></span><br>"}if(img!==""){ins+=img+"<br>"}ins+="<nl>";mostra=true}else{ins+="<span class='tiptexto' style='text-align:left;font-size:8pt'>"+valor+"</span><br>";mostra=true}}catch(e){}}}}catch(e){}}if(ins!==""){res+=titulo+ins}}if(!mostra){if($i("tip")){$i("tip").style.display="none"}}else{if(i3GEO.configura.tipotip!=="balao"){n=i3GEO.janela.tip();$i(n).style.textAlign="left";$i(n).innerHTML+=res}else{if(i3GEO.Interface.ATUAL==="googleearth"){i3GEO.Interface.googleearth.balao(res,objposicaocursor.ddx,objposicaocursor.ddy);i3GEO.Interface.googleearth.aguarde.visibility="hidden"}else{i3GEO.util.criaPin('marcaIdentifica',i3GEO.configura.locaplic+"/imagens/grabber.gif","12px","12px");i3GEO.util.posicionaImagemNoMapa("marcaIdentifica");balloon=new Balloon();balloon.delayTime=0;res="<div style=text-align:left;overflow:auto;height:"+i3GEO.configura.alturatip+";width:"+i3GEO.configura.larguratip+"; >"+res+"</div>";balloon.showTooltip($i("marcaIdentifica"),res);$i('marcaIdentifica').onclick=$i("closeButton").onclick}}}}if($i(i3GEO.Interface.IDMAPA)){$i(i3GEO.Interface.IDMAPA).title="";temp="identifica";if(i3GEO.Interface.ATIVAMENUCONTEXTO){temp="identifica_contexto"}i3GEO.util.mudaCursor(i3GEO.configura.cursores,temp,i3GEO.Interface.IDMAPA,i3GEO.configura.locaplic)}}catch(e){if(i3GEO.Interface.ATUAL==="padrao"){temp="identifica";if(i3GEO.Interface.ATIVAMENUCONTEXTO){temp="identifica_contexto"}i3GEO.util.mudaCursor(i3GEO.configura.cursores,temp,"img",i3GEO.configura.locaplic)}if(i3GEO.Interface.ATUAL==="googleearth"){i3GEO.Interface.googleearth.aguarde.visibility="hidden"}}};i3GEO.php.identifica2(retorna,objposicaocursor.ddx,objposicaocursor.ddy,"5","tip",i3GEO.configura.locaplic,i3GEO.configura.sid,"ligados",i3GEO.parametros.mapexten)}}};