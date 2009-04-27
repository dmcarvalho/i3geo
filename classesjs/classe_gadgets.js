/*
Title: Gadgets (objetos marginais do mapa)

File: i3geo/classesjs/classe_gadgets.js

About: Licen�a

I3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist�rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@mma.gov.br

Este programa � software livre; voc� pode redistribu�-lo
e/ou modific�-lo sob os termos da Licen�a P�blica Geral
GNU conforme publicada pela Free Software Foundation;
tanto a vers�o 2 da Licen�a.
Este programa � distribu�do na expectativa de que seja �til,
por�m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl�cita
de COMERCIABILIDADE OU ADEQUA��O A UMA FINALIDADE ESPEC�FICA.
Consulte a Licen�a P�blica Geral do GNU para mais detalhes.
Voc� deve ter recebido uma c�pia da Licen�a P�blica Geral do
GNU junto com este programa; se n�o, escreva para a
Free Software Foundation, Inc., no endere�o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
*/
if(typeof(i3GEO) == 'undefined'){
	i3GEO = new Array();
}
/*
Class: i3GEO.gadgets

Inclui elementos especiais no mapa

Os elementos s�o opcionais e adicionam funcionalidades ao mapa.
*/
i3GEO.gadgets = {
	/*
	Variable: PARAMETROS
	
	Parametros de inicializa��o dos gadgets.
	
	Essa vari�vel define os par�metros individuais de cada gadget e o ID do elemento HTML onde
	o gadget ser� inclu�do.
	
	Voc� pode acessar os par�metros da seguinte forma:
	
	i3GEO.gadgets.PARAMETROS.mostraMenuSuspenso.deslocaEsquerda = 400
	
	Default:
	
	i3GEO.gadgets.PARAMETROS = {

		"mostraCoordenadasUTM":

		{idhtml:"mostraUTM"},

		"mostraCoordenadasGEO":

		{idhtml:"localizarxy"},
		
		"mostraInserirKml":
		
		{idhtml:"inserirKml"},

		"mostraEscalaNumerica":

		{idhtml:"escala"},

		"mostraEscalaGrafica":

		{idhtml:"escalaGrafica"},

		"mostraBuscaRapida":

		{idhtml:"buscaRapida"},

		"mostraVisual":

		{idhtml:"visual"},

		"mostraQuadros":

		{idhtml:"lugarquadros"},

		"mostraHistoricoZoom":

		{idhtml:"historicozoom"},

		"mostraMenuSuspenso":

		{idhtml:"menus",deslocaEsquerda:0}
	}	
	
	Type:
	{JSON}
	*/	
	PARAMETROS: {
		"mostraCoordenadasUTM":
		{idhtml:"mostraUTM"},
		"mostraCoordenadasGEO":
		{idhtml:"localizarxy"},
		"mostraInserirKml":
		{idhtml:"inserirKml"},
		"mostraEscalaNumerica":
		{idhtml:"escala"},
		"mostraEscalaGrafica":
		{idhtml:"escalaGrafica"},
		"mostraBuscaRapida":
		{idhtml:"buscaRapida"},
		"mostraVisual":
		{idhtml:"visual"},
		"mostraQuadros":
		{idhtml:"lugarquadros"},
		"mostraHistoricoZoom":
		{idhtml:"historicozoom"},
		"mostraMenuSuspenso":
		{idhtml:"menus",deslocaEsquerda:0}
	},
	/*
	Function: mostraCoordenadasUTM
	
	Obt�m as coordenadas UTM da posi��o do mouse sobre o mapa.
	
	As coordenadas s�o obtidas por meio de uma chamada AJAX.
	
	Para o funcionamento correto � necess�rio incluir essa fun��o no evento que identifica quando o mouse
	est� estacionado sobre o mapa. Por default isso j� � feito pelo i3Geo.
	
	Se voc� n�o quer essa fun��o no mapa, elimine o elemento HTML existente no mapa que contenha o 
	id definido em i3GEO.gadgets.PARAMETROS (mostraUTM) ou altere a vari�vel i3GEO.eventos.MOUSEPARADO
	
	Parameters:
	
	id {String} - id do elemento HTML que receber� o resultado. Esse id por default � obtido de
	i3GEO.gadgets.PARAMETROS

	Return:
	
	{JSON} - objeto com x e y
	*/
	mostraCoordenadasUTM: function(id){
		if(arguments.length == 0 || id == "")
		{var id = i3GEO.gadgets.PARAMETROS.mostraCoordenadasUTM.idhtml;}
		else
		{i3GEO.gadgets.PARAMETROS.mostraCoordenadasUTM.idhtml = id;}
		var temp = $i(id);
		if (!temp){return;}
		atualizaCoordenadasUTM = function()
		{
			//if($i(i3GEO.gadgets.PARAMETROS.mostraCoordenadasUTM.idhtml).style.display == "block"){return;}
			if(objposicaocursor.imgx < 10 || objposicaocursor.imgy < 10)
			{return;}
			if($i("wdoca")){return;}
			var tempUtm = function(retorno){
				//alert(retorno)
				setTimeout("$i(i3GEO.gadgets.PARAMETROS.mostraCoordenadasUTM.idhtml).style.display='none';",3400);
				var temp = $i(i3GEO.gadgets.PARAMETROS.mostraCoordenadasUTM.idhtml);
				if(retorno.data){
					temp.style.display="block";
					temp.innerHTML = "UTM: x="+retorno.data.x+" y="+retorno.data.y+" zona="+retorno.data.zona+" datum="+retorno.data.datum;
					//return (retorno.data);
				}
			};
			i3GEO.php.geo2utm(tempUtm,objposicaocursor.ddx,objposicaocursor.ddy);
		};
		if(i3GEO.eventos.MOUSEPARADO.toString().search("atualizaCoordenadasUTM()") < 0)
		{i3GEO.eventos.MOUSEPARADO.push("atualizaCoordenadasUTM()");}		
	},
	/*
	Function: mostraCoordenadasGEO
	
	Obt�m as coordenadas Geogr�ficas da posi��o do mouse sobre o mapa.
		
	Se voc� n�o quer essa fun��o no mapa, elimine o elemento HTML existente no mapa que contenha o 
	id definido em i3GEO.gadgets.PARAMETROS (localizarxy)
	
	Parameters:
	
	id {String} - id do elemento HTML que receber� o resultado. Esse id por default � obtido de
	i3GEO.gadgets.PARAMETROS
	*/	
	mostraCoordenadasGEO: function(id){
		try{
			//
			//ativa o evento que preenche os campos de coordenadas
			//
			if(arguments.length == 0)
			{var id = i3GEO.gadgets.PARAMETROS.mostraCoordenadasGEO.idhtml;}
			else
			{i3GEO.gadgets.PARAMETROS.mostraCoordenadasGEO.idhtml = id;}
			if($i(id)){
				if(!$i("xm")){
					var ins = "<table style='text-align:center'><tr>";
					ins += "<td>localiza X:&nbsp;</td>";
					ins += "<td>"+$inputText(id,"315","xg","grau","3","-00")+"&nbsp;</td>";
					ins += "<td>"+$inputText("","","xm","minuto","3","00")+"&nbsp;</td>";
					ins += "<td>"+$inputText("","","xs","segundo","5","00.00")+"&nbsp;</td>";
					ins += "<td>Y:"+$inputText("","","yg","grau","3","-00")+"&nbsp;</td>";
					ins += "<td>"+$inputText("","","ym","minuto","3","00")+"&nbsp;</td>";
					ins += "<td>"+$inputText("","","ys","segundo","5","00.00")+"</td>";
					var temp = 'var xxx = i3GEO.calculo.dms2dd($i("xg").value,$i("xm").value,$i("xs").value);';
					temp +=	'var yyy = i3GEO.calculo.dms2dd($i("yg").value,$i("ym").value,$i("ys").value);';
					temp +=	'i3GEO.navega.zoomponto(i3GEO.configura.locaplic,i3GEO.configura.sid,xxx,yyy);';		
					ins += "<td><img  class='tic' title='zoom' onclick='"+temp+"' src='"+i3GEO.util.$im("branco.gif")+"' id=procurarxy /></td>";
					ins += "</tr></table>";
					$i(id).innerHTML = ins;
					$i3geo_temp_xg = $i("xg");
					$i3geo_temp_xm = $i("xm");
					$i3geo_temp_xs = $i("xs");
					$i3geo_temp_yg = $i("yg");
					$i3geo_temp_ym = $i("ym");
					$i3geo_temp_ys = $i("ys");
					atualizaLocalizarxy = function(){
						try{
							var x = objposicaocursor.dmsx.split(" ");
							var y = objposicaocursor.dmsy.split(" ");
							$i3geo_temp_xg.value = x[0];
							$i3geo_temp_xm.value = x[1];
							$i3geo_temp_xs.value = x[2];
							$i3geo_temp_yg.value = y[0];
							$i3geo_temp_ym.value = y[1];
							$i3geo_temp_ys.value = y[2];
						}
						catch(m){};
					};
					if($i(i3GEO.interface.IDMAPA))
					{YAHOO.util.Event.addListener($i(i3GEO.interface.IDMAPA),"mousemove", atualizaLocalizarxy);}
				}
			}
		}
		catch(e){alert("mostraCoordenadasGeo: "+e.description);}
	},
	/*
	Function: mostraInserirKml
	
	Mostra no mapa a a op��o para inserir kml.
	
	Essa op��o s� funciona com a API do Google carregada
		
	Se voc� n�o quer essa fun��o no mapa, elimine o elemento HTML existente no mapa que contenha o 
	id definido em i3GEO.gadgets.PARAMETROS
	
	Parameters:
	
	id {String} - id do elemento HTML que receber� o resultado. Esse id por default � obtido de
	i3GEO.gadgets.PARAMETROS
	*/		
	mostraInserirKml: function(id){
		if(arguments.length == 0)
		{var id = i3GEO.gadgets.PARAMETROS.mostraInserirKml.idhtml;}
		if($i(id)){
			if(!$i("i3geo_urlkml")){
				var i = $inputText(id,"280","i3geo_urlkml","kml url","40","");
				var ins = "<table><tr><td>Kml: "+i;
				var temp = 'i3GEO.mapa.insereKml(true);';
				ins += "</td><td><img src='"+i3GEO.util.$im("branco.gif")+"' class='tic' onclick='"+temp+"' /></td></tr></table>";
				$i(id).innerHTML = ins;
			}
		}
	},
	/*
	Function: mostraEscalaNumerica
	
	Mostra no mapa a escala num�rica.
	
	A escala num�rica pode ser alterada pelo usu�rio digitando-se a nova escala.
		
	Se voc� n�o quer essa fun��o no mapa, elimine o elemento HTML existente no mapa que contenha o 
	id definido em i3GEO.gadgets.PARAMETROS
	
	Parameters:
	
	id {String} - id do elemento HTML que receber� o resultado. Esse id por default � obtido de
	i3GEO.gadgets.PARAMETROS
	*/		
	mostraEscalaNumerica: function(id){
		if(arguments.length == 0)
		{var id = i3GEO.gadgets.PARAMETROS.mostraEscalaNumerica.idhtml;}
		if($i(id)){
			atualizaEscalaNumerica = function(escala){
				var e = $i("i3geo_escalanum");  
				if(!e){
					i3GEO.eventos.NAVEGAMAPA.remove("atualizaEscalaNumerica()");
					return;
				}
				if(arguments.length == 1)
				e.value = escala;
				else
				e.value = parseInt(i3GEO.parametros.mapscale);
			};
			if(!$i("i3geo_escalanum")){
				var i = $inputText(id,"138","i3geo_escalanum",$trad("d10"),"19",parseInt(i3GEO.parametros.mapscale));
				var ins = "<table><tr><td>1:"+i;
				var temp = 'var nova = document.getElementById("i3geo_escalanum").value;';
				temp += 'i3GEO.navega.aplicaEscala(i3GEO.configura.locaplic,i3GEO.configura.sid,nova);';
				ins += "</td><td><img src='"+i3GEO.util.$im("branco.gif")+"' class='tic' onclick='"+temp+"' /></td></tr></table>";
				$i(id).innerHTML = ins;
			}
			if(i3GEO.eventos.NAVEGAMAPA.toString().search("atualizaEscalaNumerica()") < 0)
			{i3GEO.eventos.NAVEGAMAPA.push("atualizaEscalaNumerica()");}		
		}
	},
	/*
	Function: mostraEscalaGrafica
	
	Mostra no mapa a escala grafica como um elemento fora do mapa.
		
	Se voc� n�o quer essa fun��o no mapa, elimine o elemento HTML existente no mapa que contenha o 
	id definido em i3GEO.gadgets.PARAMETROS(escala)
	
	Parameters:
	
	id {String} - id do elemento HTML que receber� o resultado. Esse id por default � obtido de
	i3GEO.gadgets.PARAMETROS
	*/		
	mostraEscalaGrafica: function(id){
		if(arguments.length == 0)
		{var id = i3GEO.gadgets.PARAMETROS.mostraEscalaGrafica.idhtml;}
		if($i(id)){
			atualizaEscalaGrafica = function(){
				var e = $i("imagemEscalaGrafica");  
				if(!e){
					i3GEO.eventos.NAVEGAMAPA.remove("atualizaEscalaGrafica()");
					return;
				}
				var temp = function(retorno){
				
					eval(retorno.data);
					i3GEO.gadgets.quadros.grava("escala",scaimagem);
					$i("imagemEscalaGrafica").src = scaimagem;
				};
				i3GEO.php.escalagrafica(temp);
			};
			if(!$i("imagemEscalaGrafica")){
				
				var ins = "<img class='menuarrow' src=\""+g_localimg+"/branco.gif\" title='op&ccedil;&otilde;es' onclick='i3GEO.mapa.dialogo.opcoesEscala()' style='cursor:pointer'/><img id=imagemEscalaGrafica src='' />"
				$i(id).innerHTML = ins;
			}
			atualizaEscalaGrafica();
			if(i3GEO.eventos.NAVEGAMAPA.toString().search("atualizaEscalaGrafica()") < 0)
			{i3GEO.eventos.NAVEGAMAPA.push("atualizaEscalaGrafica()");}		
		}
	},
	/*
	Function: mostraBuscaRapida
	
	Mostra a op��o de busca r�pida de lugares por palavra digitada.
		
	Se voc� n�o quer essa fun��o no mapa, elimine o elemento HTML existente no mapa que contenha o 
	id definido em i3GEO.gadgets.PARAMETROS (buscaRapida)
	
	Parameters:
	
	id {String} - id do elemento HTML que receber� o resultado. Esse id por default � obtido de
	i3GEO.gadgets.PARAMETROS
	*/	
	mostraBuscaRapida: function(id){
		if(arguments.length == 0)
		{var id = i3GEO.gadgets.PARAMETROS.mostraBuscaRapida.idhtml;}
		if($i(id)){
			i3geo_buscaRapida = function(){
				if ($i("valorBuscaRapida").value == "")
				{alert ("Digite uma palavra para busca!");return;}
				wdocaf("300px","280px",i3GEO.configura.locaplic+"/ferramentas/buscarapida/index.htm","","","Busca rapida");
			}
			var i = $inputText(id,"180","valorBuscaRapida","digite o texto para busca","30",$trad("o2"));
			var ins = "<table><tr><td><a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=8&idajuda=71' >&nbsp;&nbsp;&nbsp;</a></td><td>"+i;
			ins += "</td><td><img src='"+i3GEO.util.$im("branco.gif")+"' class='tic' onclick='i3geo_buscaRapida()' /></td></tr></table>";
			$i(id).innerHTML = ins;
		}	
	},
	/*
	Function: mostraHistoricoZoom
	
	Mostra na barra de zoom os �cones que controlam a visualiza��o do hist�rico da navega��o sobre o mapa
	
	Parameters:
	
	id {String} - id do elemento HTML que receber� o resultado. Esse id por default � obtido de
	i3GEO.gadgets.PARAMETROS
	*/
	mostraHistoricoZoom: function(id){
		if(arguments.length == 0)
		{var id = i3GEO.gadgets.PARAMETROS.mostraHistoricoZoom.idhtml;}
		if($i(id)){
			marcadorZoom = "";
			var ins = "<table style='text-align:center;position:relative;left:";
			if(navm){ins += "0px;'>";}
			else
			{ins += "6px;'>";}
			ins += "<tr><td><img  id='i3geo_zoomanterior' class='zoomAnterior' title='anterior' src='"+i3GEO.util.$im("branco.gif")+"'  /></td>";
			ins += "<td>&nbsp;</td>";
			ins += "<td><img  id='i3geo_zoomproximo' class='zoomProximo' title='proximo' src='"+i3GEO.util.$im("branco.gif")+"'  /></td>";
			ins += "</tr></table>";
			$i(id).innerHTML = ins;
			$i("i3geo_zoomanterior").onclick = function(){
				if(marcadorZoom == ""){marcadorZoom = i3GEO.gadgets.quadros.quadroatual;}
				if(i3GEO.gadgets.quadros.quadroatual > 0){
					marcadorZoom = marcadorZoom - 1;
					if(marcadorZoom >= 0)
					i3GEO.navega.zoomExt(i3GEO.configura.locaplic,i3GEO.configura.sid,"",i3GEO.gadgets.quadros.quadrosfilme[marcadorZoom].extensao);
					else
					marcadorZoom = 0;
				}
			};
			$i("i3geo_zoomproximo").onclick = function(){
				if(marcadorZoom == ""){marcadorZoom = i3GEO.gadgets.quadros.quadroatual;}
				if(i3GEO.gadgets.quadros.quadroatual < i3GEO.gadgets.quadros.quadrosfilme.length){
					marcadorZoom = marcadorZoom + 1
					if(marcadorZoom < i3GEO.gadgets.quadros.quadrosfilme.length)
					i3GEO.navega.zoomExt(i3GEO.configura.locaplic,i3GEO.configura.sid,"",i3GEO.gadgets.quadros.quadrosfilme[marcadorZoom].extensao);
				}
				else
				marcadorZoom = i3GEO.gadgets.quadros.quadrosfilme.length;
			};
		}
	},
	/*
	Class: i3GEO.gadgets.visual
	
	Gera os �cones e controla as op��es de modifica��o do visual do mapa.
	
	O visual consiste na defini��o dos �cones utilizados no mapa. O visual pode
	ser modificado na inicializa��o ou ent�o escolhido pelo usu�rio.
	
	Os visuais dispon�veis s�o definidos no servidor e consistem em diret�rios localizados
	em i3geo/imagens/visual. A lista de visuais dispon�veis � obtida na inicializa��o do i3geo.
	
	Os �cones para mudan�a do visual s�o inclu�dos no elemento HTML definido em
	i3geo.gadgets.PARAMETROS.visual
	*/
	visual: {
		/*
		Function: inicia
		
		Constr�i os �cones de escolha do visual.
		
		Parameters:
		
		id {String} - id do elemento que receber� os �cones (opcional)
		*/
		inicia: function(id){
			if(arguments.length == 0)
			{var id = i3GEO.gadgets.PARAMETROS.mostraVisual.idhtml;}
			if($i(id)){
				if (i3GEO.parametros.listavisual != ""){
					var l = i3GEO.parametros.listavisual.split(",");
					var visuais = "";
					var li = l.length-1;
					if(li >= 0){
						do{visuais += "<img title='"+l[li]+"' style=cursor:pointer onclick='i3GEO.gadgets.visual.troca(\""+l[li]+"\")' src='"+i3GEO.configura.locaplic+"/imagens/visual/"+l[li]+".png' />&nbsp;";}
						while(li--)
					}
					$i(id).innerHTML = visuais;
					$i(id).onmouseover = function(){i3GEO.ajuda.mostraJanela($trad("d26"));};
					$i(id).onmouseout = function(){i3GEO.ajuda.mostraJanela("");};
				}		
			}
		},
		/*
		Function: troca
		
		Troca o visual atual. A lista de visuais dispon�veis � obtida em i3GEO.parametros.listavisual
		
		Parameters:
		
		visual {String} - nome do visual que ser� utilizado.
		*/
		troca: function(visual){
			var monta = function(retorno){
				try{
					i3GEO.janela.fechaAguarde("i3GEO.atualiza");
					//
					//pega todas as imagens da interface
					//
					var imgstemp = retorno.data.arquivos;
					var imgs = new Array();
					var i = imgstemp.length-1;
					if(i >= 0){
						do{
							var temp = imgstemp[i].split(".");
							if ((temp[1] == "png") || (temp[1] == "gif") || (temp[1] == "jpg"))
							{imgs.push(imgstemp[i]);}
						}
						while(i--)
					}
					var elementos = document.getElementsByTagName("img");
					var elt = elementos.length;
					var caminho = i3GEO.configura.locaplic+"/imagens/visual/"+visual+"/";
					//faz a troca em imagens
					var j = imgs.length-1;
					if(j >= 0){
						do{
							for (var i=0;i < elt; i++){
								if ((elementos[i].src.search("branco") > -1) && ((elementos[i].className != "") || (elementos[i].id != "")))
								{elementos[i].src = caminho+"branco.gif";}
								if (elementos[i].src.search("visual") > -1)
								{elementos[i].style.backgroundImage = "url('"+caminho+imgs[j]+"')";}
							}
						}
						while(j--)
					}	
					//faz a troca em ids
					var j = imgs.length-1;
					if(j >= 0){
						do{
							var busca = imgs[j].split(".");
							if ($i(busca[0]))
							{$i(busca[0]).src = caminho+imgs[j];}
						}
						while(j--)
					}
					//faz a troca em bg
					var elementos = new Array("barraSuperior","barraInferior","vertMaisZoom","vertMenosZoom","foldermapa","foldermapa1","tic");
					var i = elementos.length-1;
					if(i >= 0){
						do{
							if ($i(elementos[i])){
								var nimagem = $i(elementos[i]).style.backgroundImage.replace(i3GEO.configura.visual,visual);
								$i(elementos[i]).style.backgroundImage = nimagem;
								//$i(elementos[i]).style.backgroundImage = "url('"+caminho+"sprite.png')";
							}
						}
						while(i--)
					}
					i3GEO.configura.visual = visual;
				}
				catch(e){alert("Ocorreu um erro. mudaVisual"+e);i3GEO.janela.fechaAguarde("i3GEO.atualiza");}
			};
			//
			//pega a lista de imagens no diret�rio do i3geo correspondente ao visual selecionado
			//
			i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
			i3GEO.php.listaarquivos(monta,"imagens/visual/"+visual);
		}
	},
	/*
	Class: i3GEO.gadgets.quadros
	
	Cria e controla o funcionamento dos quadros de anima��o.
	
	Os quadros s�o mostrados no mapa como uma sequ�ncia de quadros de um filme.
	As imagens que s�o produzidas no mapa s�o armazenadas em cada quadro, permitindo sua recupera��o.
	
	Os quadros armazenam tamb�m a extens�o geogr�fica de cada imagem, permitindo sua recupera��o.
	*/
	quadros: {
		/*
		Variable: quadrosfilme
		
		Armazena cada quadro individualmente com as suas propriedades
		
		Type:
		{Array}
		*/
		quadrosfilme: new Array(),
		/*
		Variable: quadroatual
		
		Valor do �ndice do quadro atual
		
		Type:
		{Integer}
		*/
		quadroatual: 0,
		/*
		Function: inicia
		
		Gera os quadros e inicializa os objetos para armazenar as imagens
		
		Parameters:
		
		qs {Integer} - n�mero de quadros
		
		lugarquadros {String} - id do elemento HTML que receber� os quadros (opcional)
		*/
		inicia: function(qs,lugarquadros){
			if(arguments.length == 1)
			{var lugarquadros = i3GEO.gadgets.PARAMETROS.mostraQuadros.idhtml;}
			var q = "<table class=tablefilme ><tr><td><div class='menuarrow'  title='op&ccedil;&otilde;es' onclick='i3GEO.gadgets.quadros.opcoes(this)' style='cursor:pointer'></div></td>";
			for (var i = 0; i < qs; i++){
				q += "<td><img class='quadro' src=\""+i3GEO.configura.locaplic+"/imagens/branco.gif\" id='quadro"+i+"' ";
				q += "onmouseover='i3GEO.gadgets.quadros.trocaMapa(this.id);i3GEO.ajuda.mostraJanela(\"Clique para aplicar a extens�o geogr�fica do quadro ao mapa\")' ";
				//q += "onmouseout="+ saida; //\"javascript:i3GEO.ajuda.mostraJanela('')\" ";
				q += "onclick='i3GEO.gadgets.quadros.zoom(this.id)' /></td>";
				i3GEO.gadgets.quadros.quadrosfilme[i] = new Array();
			}
			q += "</tr></table>";
			if($i(i3GEO.gadgets.PARAMETROS.mostraQuadros.idhtml)){
				document.getElementById(i3GEO.gadgets.PARAMETROS.mostraQuadros.idhtml).innerHTML = q;
				$i(i3GEO.gadgets.PARAMETROS.mostraQuadros.idhtml).onmouseout = function(){
					$i("img").style.display = "block";
					if($i("imgClone")){
						var temp = $i("imgClone");
						var p = temp.parentNode;
						p.removeChild(temp);
						i3GEO.ajuda.mostraJanela('');
					}
				};
			}
			i3GEO.gadgets.quadros.quadroatual = 0;
			if(i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.gadgets.quadros.avanca()") < 0)
			{i3GEO.eventos.NAVEGAMAPA.push("i3GEO.gadgets.quadros.avanca()");}
		},
		/*
		Function: grava

		Armazena um determinado valor em uma determinada caracter�stica de um objeto quadro.

		Parameters:

		variavel {String} - par�metro do objeto quadro.

		valor - {String} valor que ser� aplicado.
		*/
		grava: function(variavel,valor){
			eval("i3GEO.gadgets.quadros.quadrosfilme["+i3GEO.gadgets.quadros.quadroatual+"]."+variavel+" = '"+valor+"'");
			if($i(i3GEO.gadgets.PARAMETROS.mostraQuadros.idhtml))
			{$i("quadro"+i3GEO.gadgets.quadros.quadroatual).className = "quadro1";}
		},
		/*
		Function: avanca

		Avan�a um quadro na lista de quadros, mudando a imagem utilizada na sua representa��o.
		*/		
		avanca: function(){
			try{
				var nquadros = i3GEO.gadgets.quadros.quadrosfilme.length;
				if ((nquadros - 1) == (i3GEO.gadgets.quadros.quadroatual))
				{i3GEO.gadgets.quadros.inicia(nquadros);}
				else{i3GEO.gadgets.quadros.quadroatual++;}
			}
			catch(e){var e = "";}		
		},
		/*
		Function: zoom
		
		Aplica o zoom no mapa para a extens�o geogr�fica armazenada em um quadro
		
		Parameter:
		
		quadro {String} - id do quadro que ser� utilizado
		*/
		zoom: function(quadro){
			var indice = quadro.replace("quadro","");
			i3GEO.navega.zoomExt(i3GEO.configura.locaplic,i3GEO.configura.sid,"",i3GEO.gadgets.quadros.quadrosfilme[indice].extensao)
		},
		/*
		Function: trocaMapa
		
		Troca a imagem do mapa atual pela que estiver armazenada em quadro
		
		A imagem mostrada no mapa � um clone do mapa atual, preservando o mapa.
		
		Parameters:
		
		quadro {String} - id do quadro que ter� a imagem recuperada
		*/
		trocaMapa: function(quadro){
			var indice = quadro.replace("quadro","");
			var i = $i("img");
			var c = $i("imgClone");
			if(i){
				if(!c){
					var iclone=document.createElement('IMG');
					iclone.style.position = "relative";
					iclone.id = "imgClone";
					iclone.style.border="1px solid blue";
					i.parentNode.appendChild(iclone);
					iclone.src = i.src;
					iclone.style.width = i3GEO.parametros.w;
					iclone.style.heigth = i3GEO.parametros.h;
					iclone.style.top = i.style.top;
					iclone.style.left = i.style.left;
					var c = $i("imgClone");		
				}
				try{
					if(!i3GEO.gadgets.quadros.quadrosfilme[indice].imagem){return;}
					c.src = i3GEO.gadgets.quadros.quadrosfilme[indice].imagem;
					c.style.display = "block";
					i.style.display = "none";
				}
				catch(e){var e = "";}
			}
		},
		/*
		Function: opcoes
		
		Abre a janela de op��es que controla as caracter�sticas do quado e permite disparar a anima��o.
		
		Parameters:
		
		obj {Object} - objeto clicado
		*/
		opcoes: function(obj){
			if (i3GEO.parametros.utilizacgi == "sim"){
				i3GEO.parametros.utilizacgi = "nao";
				var volta = function(){
					alert("Armazenamento de imagens ativado. As proximas imagens ficarao disponiveis");
				};
				i3GEO.php.desativacgi(volta);
			}
			else
			{i3GEO.janela.cria("150px","150px",i3GEO.configura.locaplic+"/ferramentas/opcoes_quadros/index.htm","center","","Quadros <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=6&idajuda=54' >&nbsp;&nbsp;&nbsp;</a>");}
		},
		/*
		Function: anima
		
		Mostra as imagens armazenadas nos quadros em uma sequ�ncia animada
		
		Parameters:
		
		Qanima {Integer} - quadro atual na sequ�ncia de anima��o
		
		t {Numeric} - tempo em milisegundos entre cada quadro
		*/
		anima: function(Qanima,t){
			if(arguments.length == 0){
				Qanima = 0;
				var doc = (navm) ? document.frames("wdocai").document : $i("wdocai").contentDocument;
				var t = doc.getElementById("tempoanima").value;
			}
			if(Qanima > i3GEO.gadgets.quadros.quadrosfilme.length){
				clearTimeout(tAnima);
				$i("imgClone").style.display = "none";	
				$i("img").style.display="block";
				return;
			}
			//$i("img").src = preLoad[janima].src;
			//$i("f"+janima).className = "quadro1";
			i3GEO.gadgets.quadros.trocaMapa("quadro"+Qanima);
			Qanima++;
			tAnima = setTimeout('i3GEO.gadgets.quadros.anima('+Qanima+','+t+')',t);
		},
		/*
		Function: listaImagens
		
		Lista as imagens armazenadas em uma nova p�gina no navegador
		*/
		listaImagens: function(){
			if (i3GEO.parametros.utilizacgi == "sim"){
				i3GEO.parametros.utilizacgi = "nao";
				var volta = function()
				{alert("Armazenamento de imagens ativado. As proximas imagens ficarao disponiveis");};
				i3GEO.php.desativacgi(volta);
			}
			else{
				var wi = window.open("");//"",null,"width=550,height=650,resizable=yes,scrollbars=yes");
				//pega os dados do objeto quadrosfilme e escreve na nova janela
				var mensagem = "<br><b>N&atilde;o existem imagens guardadas.";
				wi.document.write("<html><body><p style='font-size: 12px; font-family: verdana, arial, helvetica, sans-serif;'>Click com o bot&atilde;o da direita do mouse sobre a imagem para fazer o download<br>");	
				var i = i3GEO.gadgets.quadros.quadrosfilme.length-1;
				if(i >= 0){
					do{
						if (i3GEO.gadgets.quadros.quadrosfilme[i].imagem){
							wi.document.write("<p style='font-size: 12px; font-family: verdana, arial, helvetica, sans-serif;'>Imagem: "+i+"<br>");
							wi.document.write("<p style='font-size: 12px; font-family: verdana, arial, helvetica, sans-serif;'>Abrang�ncia: "+i3GEO.gadgets.quadros.quadrosfilme[i].extensao+"<br>");
							wi.document.write("<img src='"+i3GEO.gadgets.quadros.quadrosfilme[i].imagem+"' />");
							wi.document.write("<img src='"+i3GEO.gadgets.quadros.quadrosfilme[i].referencia+"' />");
							wi.document.write("<img src='"+i3GEO.gadgets.quadros.quadrosfilme[i].legenda+"' />");
						}
						i--
					}
					while(i>=0)
				}
				wi.document.write("<br>Fim</body></html>");
			}
		}
	},
	/*
	Function: mostraMenuSuspenso
	
	Mostra o menu suspenso com op��es extras de an�lise, ajuda, etc
	
	O objeto YAHOO.widget.MenuBar resultante pode ser obtido na vari�vel i3GEOoMenuBar

	O conte�do do menu � baseado na vari�vel i3GEO.configura.oMenuData
	
	Parameters:
	
	id {String} - id do elemento HTML que receber� o resultado. Esse id por default � obtido de
	i3GEO.gadgets.PARAMETROS
	*/
	mostraMenuSuspenso: function(id){
		if(arguments.length == 0)
		{var id = i3GEO.gadgets.PARAMETROS.mostraMenuSuspenso.idhtml;}
		else
		{i3GEO.gadgets.PARAMETROS.mostraMenuSuspenso.idhtml = id;}
		var objid = $i(id);
		if(objid){
			objid.className="yuimenubar";
			if($i("contemMenu")){
				$i("contemMenu").className="yui-navset";
			}
			if(!i3GEO.configura.oMenuData.menu){
				var ins = "";
				ins += '<div class="bd" style="display:block;align:right;border: 0px solid white;z-index:6000;line-height:1.4" >';
				ins += '<ul class="first-of-type" style="display:block;border:0px solid white;top:10px;">';
 				var sobe = "";
 				if(navn){var sobe = "line-height:0px;";}
				ins += '<li class="yuimenubaritem" style="padding-bottom:5px" ><a style="border: 0px solid white;" href="#" class="yuimenubaritemlabel" id="menuajuda" >&nbsp;&nbsp;'+$trad("s1")+'</a></li>';
				ins += '<li class="yuimenubaritem" style="padding-bottom:5px"><a style="border: 0px solid white;" href="#" class="yuimenubaritemlabel" id="menuanalise" >&nbsp;&nbsp;'+$trad("s2")+'</a></li>';
 				ins += '<li class="yuimenubaritem" style="padding-bottom:5px"><a style="border: 0px solid white;" href="#" class="yuimenubaritemlabel" id="menujanelas" >&nbsp;&nbsp;'+$trad("s3")+'</a></li>';
 				ins += '<li class="yuimenubaritem" style="padding-bottom:5px"><a style="border: 0px solid white;" href="#" class="yuimenubaritemlabel" id="menuarquivos" >&nbsp;&nbsp;'+$trad("s4")+'</a></li>';
 				ins += '<li class="yuimenubaritem" style="padding-bottom:5px"><a style="border: 0px solid white;" href="#" class="yuimenubaritemlabel" id="menuinterface" >&nbsp;&nbsp;'+$trad("d27")+'</a></li>';
 				ins += '</ul>'; 
 				ins += '</div>';
 				objid.innerHTML=ins;
 			}
 			else{
 				var ins = "";
 				var alinhamento = "";
 				if(i3GEO.gadgets.PARAMETROS.mostraMenuSuspenso.deslocaEsquerda){
 					var alinhamento = "left:"+i3GEO.gadgets.PARAMETROS.mostraMenuSuspenso.deslocaEsquerda*-1+"px;";
 				}
				ins += '<div class="bd" style="'+alinhamento+'display:block;align:right;border: 0px solid white;z-index:6000;line-height:1.4" >';
				ins += '<ul class="first-of-type" style="display:block;border:0px solid white;top:10px;">';
 				var n = i3GEO.configura.oMenuData.menu.length;
 				for(i = 0;i < n;i++){
 					if(i3GEO.parametros.w < 550){
 						i3GEO.configura.oMenuData.menu[i].id = "";
 						var estilo = "padding-bottom:3px;top:0px;border: 0px solid white;";
 					}
 					else
 					var estilo = "padding-bottom:3px;top:0px;border: 0px solid white;";
 					var t = "";
 					if(i3GEO.configura.oMenuData.menu[i].target)
 					{var t = "target="+i3GEO.configura.oMenuData.menu[i].target;}
 					ins += '<li class="yuimenubaritem" style="padding-top:2px;"><a style="'+estilo+'" href="#" class="yuimenubaritemlabel" '+t+'id="menu'+i3GEO.configura.oMenuData.menu[i].id+'" >&nbsp;'+i3GEO.configura.oMenuData.menu[i].nome+'</a></li>'; 				
 				}
 				ins += '</ul>'; 
 				ins += '</div>';
 				objid.innerHTML=ins;
 			}
			var onMenuBarBeforeRender = function (p_sType, p_sArgs){
				if(i3GEO.parametros.w >= 500)
				{var conta = 0;}
				else
				{var conta = 0;}
				for(var nomeMenu in i3GEO.configura.oMenuData.submenus){
					i3GEOoMenuBar.getItem(conta).cfg.setProperty('submenu',{id:nomeMenu,itemdata: i3GEO.configura.oMenuData.submenus[nomeMenu]});
					var conta=conta+1;
				}
			}
 			i3GEOoMenuBar=new YAHOO.widget.MenuBar(id,{autosubmenudisplay: true, showdelay: 100, hidedelay: 500, lazyload: false});
 			i3GEOoMenuBar.beforeRenderEvent.subscribe(onMenuBarBeforeRender);
 			i3GEOoMenuBar.render();
			//
			//corrige problemas de estilo
			//
			var temp = objid.style;
			temp.backgroundPosition = "0px -5px";
			temp.border = "1px solid white";
		}
	}
};
//YAHOO.log("carregou classe gadgets", "Classes i3geo");