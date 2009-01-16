/*
Title: redesenho.js

Executa as opera��es de redesenho do mapa.

Obt�m os par�metros necess�rios ao funcionamento da interface, como resolu��o, escala, etc.

File: i3geo/classesjs/redesenho.js

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
/*
Function: ajaxhttp (depreciado)

Cria o objeto http utilizado nas fun��es Ajax.

Returns:

Objeto httprequest.

See Also:

<ajaxexecAS>
*/
function ajaxhttp()
{
	try
	{var objhttp1 = new XMLHttpRequest();}
	catch(ee)
	{
		try{var objhttp1 = new ActiveXObject("Msxml2.XMLHTTP");}
		catch(e)
		{
			try{var objhttp1 = new ActiveXObject("Microsoft.XMLHTTP");}
			catch(E)
			{var objhttp1 = false;}
		}
	}
	return(objhttp1);
}
/*
Function: ajaxexecAS (depreciado)

Executa uma chamada ajax no modo ass�ncrono.

Parameters:

programa - programa que ser� executado.
funcao - fun��o que tratar� o resultado.

Returns:

O resultado em uma vari�vel. Se o retorno contiver a palavra "Erro", � gerado um alert.

See Also:

<ajaxhttp>
*/
function ajaxexecAS(programa,funcao)
{
	var ohttp = ajaxhttp();
	ohttp.open("POST",programa,true);
	var retorno = "";
	ohttp.onreadystatechange=function()
	{
		if (ohttp.readyState==4)
		{
			retorno = ohttp.responseText;
			var reg = /Warning/gi;
			if (retorno.search(reg) != -1)
			{
				alert("OOps! Ocorreu um erro\n"+retorno);
				return;
			}
			var reg = /erro/gi;
			if (retorno.search(reg) != -1)
			{
				alert("OOps! Ocorreu um erro\n"+retorno);
				return;
			}
			if (funcao != "volta")
			{eval(funcao+'("'+retorno+'")');}
		}
	};
	ohttp.send(null);
}
/*
Function: ajaxexec (depreciado)

Executa uma chamada ajax no modo s�ncrono.

Parameters:

programa - programa que ser� executado.
funcao - fun��o que tratar� o resultado.

Returns:

O resultado em uma vari�vel. Se o retorno contiver a palavra "Erro", � gerado um alert.

See Also:

<ajaxhttp>
*/
function ajaxexec(programa,funcao)
{
	var objhttp = ajaxhttp();
	objhttp.open('GET', programa, false);
	objhttp.send(null);
	if(objhttp.status == 200)
	{
		if (funcao != "volta")
		{eval(funcao+'("'+objhttp.responseText+'")');}
		else
		{return objhttp.responseText;}
	}
}
/*
Function: ajaxexecASXml

Executa uma chamada ajax no modo ass�ncrono retornando o resultado em XML.

Parameters:

programa - programa que ser� executado.
funcao - fun��o que tratar� o resultado.

Returns:

O resultado em um objeto DOM. Se o retorno contiver a palavra "Erro", � gerado um alert.

See Also:

<ajaxhttp>
*/
function ajaxexecASXml(programa,funcao)
{
	if (programa.search("http") == 0)
	{
		var h = window.location.host;
		if (programa.search(h) < 0)
		{
			alert("OOps! Nao e possivel chamar um XML de outro host.\nContacte o administrador do sistema.\nConfigure corretamente o ms_configura.php");
			return;
		}
	}	
	var ohttp = ajaxhttp();
	ohttp.open("GET",programa,true);
	var retorno = "";
	ohttp.onreadystatechange=function()
	{
		if (ohttp.readyState==4)
		{
			var retorno = ohttp.responseText;
			if (retorno != undefined)
			{
				if (document.implementation.createDocument)
				{
					var parser = new DOMParser();
					var dom = parser.parseFromString(retorno, "text/xml");
				}
				else
				{
					var dom = new ActiveXObject("Microsoft.XMLDOM");
					dom.async="false";
					dom.load(programa);
				}
			}
			else
			{var dom = "erro";}
			if (funcao != "volta")
			{eval(funcao+'(dom)');}
			else
			{return dom;}
		}
	};
	ohttp.send(null);
}
/*
Function: ajaxEscalaGrafica

Substitu� a imagem da escala gr�fica pela �ltima gerada.

Parameters:

retorno - string no formato "var scaimagem='nome da imagem'".

*/
function ajaxEscalaGrafica(retorno)
{
	if ((retorno.data != "erro") && (retorno.data != undefined))
	{
		eval(retorno.data);
		if ($i("imagemEscalaGrafica"))
		{
			var m = new Image();
			m.src = scaimagem;
			$i("imagemEscalaGrafica").src=m.src;
			//atualiza quadro
			i3GEO.gadgets.quadros.grava("escala",scaimagem);
		}
	}
}
/*
Function: ajaxLegendaHTML

Substitu� a legenda do mapa pela �ltima gerada.

Parameters:

retorno - string HTML com a legenda.
*/
function ajaxLegendaHTML(retorno)
{
	if ((retorno.data != "erro") && (retorno.data != undefined))
	{
		var s = i3GEO.configura.locaplic+"/imagens/solta.gif";
		$i("legenda").innerHTML = "<img id=soltaLeg src="+s+" title='clique para liberar'/><br><div id='corpoLegi' >"+ retorno.data.legenda + "</div>";
		g_legendaHTML = retorno.data.legenda;
		//
		//verifica se a janela m�vel existe e preenche com a legenda se for o caso
		//
		if ($i("moveLegi"))
		{
			$i("wlegenda").innerHTML = g_legendaHTML;
			var elementos = $i("wlegenda").getElementsByTagName("input");
			for(i=0;i<elementos.length;i++)
			{elementos[i].style.display="none";}
		}
		//
		//abre a janela m�vel com a legenda quando o usu�rio clica no �cone solta.gif definido acima
		//
		$i("soltaLeg").onclick = function()
		{
			//
			//cria a janela m�vel para a legenda se j� n�o existir
			//
			if (!$i("moveLegi"))
			{
				var novoel = document.createElement("div");
				novoel.id = "moveLegi";
				novoel.style.display="block";
				var temp = '<div class="hd">Legenda</div>';
				temp += '<div id="wlegenda" style="text-align:left;background-color:white" >';
				temp += g_legendaHTML+"</div>";
				novoel.innerHTML = temp;
				document.body.appendChild(novoel);
				var elementos = $i("wlegenda").getElementsByTagName("input");
				for(i=0;i<elementos.length;i++)
				{elementos[i].style.display="none";}
				YAHOO.namespace("moveLegi.xp");
				YAHOO.moveLegi.xp.panel = new YAHOO.widget.Panel("moveLegi", {width:"300px", fixedcenter: true, constraintoviewport: false, underlay:"none", close:true, visible:true, draggable:true, modal:false } );
			}
			YAHOO.moveLegi.xp.panel.render();
			YAHOO.moveLegi.xp.panel.show();
		};
		//YAHOO.log("Conclu�da legenda HTML", "redesenho");
	}
	else
	{YAHOO.log("Erro na legenda HTML", "redesenho");}
}
/*
Function: ajaxLegendaImagem

Armazena a imagem da legenda na lista de quadros de anima��o.

Parameters:

retorno - string no formato "var legimagem='nome da imagem'".
*/
function ajaxLegendaImagem(retorno)
{
	if ((retorno.data != "erro") && (retorno.data != undefined))
	{
		eval(retorno.data);
		if ($i("lugarquadros"))
		{i3GEO.gadgets.quadros.grava("legenda",legimagem);}
	}
}
/*
Function: ajaxCorpoMapa

Atualiza a imagem do corpo do mapa e redesenha o entorno se for necess�rio.

Parameters:

retorno - string no formato "var mapimagem='nome da imagem'".
*/
function ajaxCorpoMapa(retorno)
{
	i3GEO.arvoreDeCamadas.atualiza(retorno.data.temas);
	//YAHOO.log("ajaxCorpoMapa", "redesenho");
	if($i("mst"))
	{$i("mst").style.display="block";}
	if (!$i("img")){return;}
	try
	{
		i3GEO.janela.abreAguarde("ajaxCorpoMapa",$trad("o3"));
		//retorno n�o � um objeto CPAINT
		if(retorno.data){var retorno = retorno.data;}
		if (retorno.variaveis){var retorno = retorno.variaveis;}
		if ((retorno != "erro") && (retorno != undefined))
		{
			eval(retorno);
			$i("img").onload =  function()
			{
				$i("img").onload = "";
				//atualiza quadro
				i3GEO.gadgets.quadros.grava("imagem",mapimagem);
				if ($i("banners"))
				{$i("banners").style.height = objmapa.h;}
				if ($i("legenda"))
				{$i("legenda").style.height = objmapa.h;}
				//$i("img").style.width = objmapa.w;
				//$i("img").style.height = objmapa.h;
				//calcposf();
				i3GEO.janela.fechaAguarde("ajaxCorpoMapa");
				if ($i("imgtemp"))
				{$i("imgtemp").style.display="none";}
				//necess�rio na fun��o de zoom por slide
				if ($i("imgClone"))
				$i("imgClone").style.display = "none";
				$i("img").style.display = "block";			
				i3GEO.janela.fechaAguarde("ajaxCorpoMapa");
			};
			$i("img").src=mapimagem;
		}
		else
		{
			i3GEO.mapa.ajustaPosicao();
			i3GEO.janelas.fechaAguarde();
			alert("Erro no mapa");
		}
		g_recupera = 0;
	}
	catch(e)
	{
		alert("Erro na funcao ajaxCorpoMapa: "+e);
		i3GEO.mapa.ajustaPosicao();
		i3GEO.janelas.fechaAguarde();
		if(g_recupera == 0)
		{
			alert("Erro no mapa. Sera feita uma tentativa de recuperacao.");
			recuperamapa();
		}
		else
		{
			alert("Recuperacao impossivel. Sera feita uma tentativa de reiniciar o mapa.");
			if (g_recupera == 1)
			{
				g_recupera = 2;
				var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=reiniciaMapa&g_sid="+i3GEO.configura.sid;
				var cp = new cpaint();
				//cp.set_debug(2)
				cp.set_response_type("JSON");
				cp.call(p,"recuperamapa",remapaf);
			}		
		}
	}
	//YAHOO.log("Fim ajaxCorpoMapa", "redesenho");
}
/*
Function: ajaxredesenha

Prepara o mapa para receber os elementos que compor�o o mapa e chama a fun��o que ir� gerar os novos elementos.

Parameters:

retorno - string indicando se houve erro na fun��o que chamou.
*/
function ajaxredesenha(retorno)
{
	//limpa o objeto richdraw
	try{richdraw.clearWorkspace();}catch(e){};
	try
	{
		i3GEO.gadgets.quadros.avanca();
		//YAHOO.log("ajaxredesenha", "redesenho");
		if(retorno && retorno.data.temas)
		{i3GEO.janela.abreAguarde("ajaxiniciaParametros",$trad("o1"));ajaxIniciaParametros(retorno);}
		else
		{
			//algumas vari�eis n� s� retornadas, conforme o programa, ent� devem ser declaradas
			var legimagem = "";
			//pega os parametros do mapa e redesenha
			if($i("img"))
			{
				i3GEO.janela.abreAguarde("ajaxiniciaParametros",$trad("o1"));
				var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=corpo&tipoimagem="+g_tipoimagem+"&g_sid="+i3GEO.configura.sid;
				var cp = new cpaint();
				//cp.set_debug(2)
				cp.set_response_type("JSON");
				cp.call(p,"redesenhaCorpo",ajaxIniciaParametros);
			}
			i3GEO.janela.fechaAguarde("ajaxredesenha");
			//
			//utilizado na interface openlayers
			//
			//OL = objeto map do openlayers
			//OLI3Geo = objeto layer do openlayers com o mapa do I3Geo
			//
			if ($i("openlayers"))
			{
				$i("openlayers").innerHTML = "";
				var b = objmapa.OL.getExtent();
				criaOL(Math.random()+Math.random()+Math.random()+Math.random());
				objmapa.OL.zoomToExtent(b);
			}
			//
			//utilizado na interface flamingo
			//
			if($i("flamingo"))
			{
				atualizaFL();
			}
			//
			//verifica se est� na op��o de sele��o e se o gr�fico est� ativo para atualiz�-lo
			//
			if($i("wdocai") && $i("guia5obj"))
			{
				var doc = (navm) ? document.frames("wdocai").document : $i("wdocai").contentDocument;
				if(doc.getElementById("guia5obj"))
				{
					if(doc.getElementById("guia5obj").style.display=="block")
					{
						if(window.parent.frames["wdocai"].atualizaGrafico)
						{window.parent.frames["wdocai"].atualizaGrafico();}
					}
				}
			}			
		}
		//YAHOO.log("Fim ajaxredesenha", "redesenho");
	}
	catch(e){alert("ajaxredesenha "+e);}
}
/*
Function: ajaxIniciaParametros

Refaz o mapa e os elementos marginais, como legenda, escala, lista de temas, etc.

Parameters:

retorno - objeto JSON.
*/
function ajaxIniciaParametros(retorno)
{
	//YAHOO.log("ajaxIniciaParametros", "redesenho");
	i3GEO.ajuda.ativaLetreiro(i3GEO.configura.locaplic,i3GEO.configura.sid);
	var tempo = "";
	if ($i("openlayers"))
	{
		$i("openlayers").innerHTML = "";
		var b = objmapa.OL.getExtent();
		criaOL(Math.random()+Math.random()+Math.random()+Math.random());
		objmapa.OL.zoomToExtent(b);
	}
	//
	//utilizado na interface flamingo
	//
	if($i("flamingo"))
	{atualizaFL();}
	//
	//limpa os pontos digitados no calculo de distancia
	//
	i3GEO.util.insereMarca.limpa();
	if ($i("mostradistancia"))
	{$i("mostradistancia").style.display="none";}
	try{richdraw.fecha();}
	catch(e){};
	//
	//mostra a figura que segue o mouse
	//
	try
	{
		if ($i("imgL"))
		{
			var letras=["N","S","L","O"];
			for (var l=0;l<4; l++)
			{$i("img"+letras[l]).src="";}
		}
		mapscale = "";
		mapexten = "";
		eval(retorno.data.variaveis);
		if($i("img"))
		{
			if (!$i("imgtemp"))
			{
				var ndiv = document.createElement("div");
				ndiv.id = "imgtemp";
				ndiv.style.position = "absolute";
				ndiv.style.border = "1px solid blue";
				document.getElementById("corpoMapa").appendChild(ndiv);
			}
			if(g_tipoacao == "pan")
			{
				$i("imgtemp").style.left = parseInt($i("img").style.left);
				$i("imgtemp").style.top = parseInt($i("img").style.top);
				$i("imgtemp").style.width = objmapa.w;
				$i("imgtemp").style.height = objmapa.h;
				$i("imgtemp").style.display="block";
				$i("imgtemp").style.backgroundImage = 'url("'+$i("img").src+'")';
			}		
			//$i("img").style.width = 0;
			//$i("img").style.height = 0;
			//$i("img").src = "";
			$i("img").style.left = 0;
			$i("img").style.top = 0;
			ajaxCorpoMapa(retorno);
		}
		//
		//atualiza a legenda
		//
		objmapa.atualizaLegendaHTML();
		//
		//verifica se precisa mudar a lista de temas
		//
		i3GEO.arvoreDeCamadas.atualiza(retorno.data.temas);
		//
		//atualiza o indicador de compatibilidade de escala se houve um processo de navegacao
		//
		if (objmapa.scale != mapscale)
		i3GEO.arvoreDeCamadas.atualizaFarol(mapscale);
		//
		//atualiza mapa de referencia
		//
		i3GEO.maparef.atualiza();
		//
		//atualliza os valores do objmapa
		//
		objmapa.scale = mapscale;
		g_operacao = "";
		i3GEO.arvoreDeCamadas.CAMADAS = retorno.data.temas;
		objmapa.cellsize = g_celula;
		objmapa.extent = mapexten;
		//
		//arredonda o valor da escala numerica e mostra no mapa se for o caso
		//
		if ($i("i3geo_escalanum"))
		{$i("i3geo_escalanum").value=parseInt(mapscale);}
		//
		//atualiza a janela com o valor da extens�o geogr�fica do mapa se for o caso
		//
		if ($i("mensagemt"))
		{$i("mensagemt").value = mapexten;}
		//
		//grava a extensao geogr�fica nova no quadro de anima��o
		//
		i3GEO.gadgets.quadros.grava("extensao",mapexten);
		//
		//fecha as janelas de aguarde
		//
		i3GEO.janela.fechaAguarde("ajaxiniciaParametros");
		i3GEO.janela.fechaAguarde("aguardedoc");
		i3GEO.janela.fechaAguarde("ajaxredesenha");
		//
		//atualiza as ferramentas de consulta que dependem da extens�o geogr�fica
		//
		i3GEO.eventos.navegaMapa();
		//
		//atualiza as imagens do entorno do mapa caso essa op��oestiver ativa
		//
		if (i3GEO.configura.entorno == "sim")
		{
			i3GEO.navega.entorno.geraURL();
			i3GEO.navega.entorno.ajustaPosicao();
		}
		//YAHOO.log("Fim ajaxIniciaParametros", "redesenho");
	}
	catch(e){alert("ajaxIniciaParametros "+e);}
	i3GEO.ajuda.mostraJanela("Tempo de redesenho em segundos: "+tempo,"");
}
//testa se esse script foi carregado
function testaajax()
{}