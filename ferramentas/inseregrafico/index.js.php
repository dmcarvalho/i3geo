<?php if(extension_loaded('zlib')){ob_start('ob_gzhandler');} header("Content-type: text/javascript"); ?>
/*jslint plusplus:false,white:false,undef: false, rhino: true, onevar: true, evil: true */
/*
Title: Ferramenta Insere gr�fico interativo

File: i3geo/ferramentas/inseregrafico/index.js.php

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
if(typeof(i3GEOF) === 'undefined'){
	i3GEOF = [];
}
/*
Class: i3GEOF.insereGrafico

Inclui gr�ficos em cada elemento de um tema tendo como fonte a tabela de atributos.

Abre uma janela com v�rias op��es e lista de itens para os gr�ficos.

O tema que ser� utilizado � o que estiver armazenado na vari�vel global i3GEO.temaAtivo
*/
i3GEOF.insereGrafico = {
	/*
	Function: inicia
	
	Inicia a ferramenta. � chamado por criaJanelaFlutuante
	
	Parametro:
	
	iddiv {String} - id do div que receber� o conteudo HTML da ferramenta
	*/
	inicia: function(iddiv){
		try{
			$i(iddiv).innerHTML += i3GEOF.insereGrafico.html();
			i3GEO.guias.mostraGuiaFerramenta("i3GEOinseregraficoguia1","i3GEOinseregraficoguia");
			//eventos das guias
			$i("i3GEOinseregraficoguia1").onclick = function()
			{i3GEO.guias.mostraGuiaFerramenta("i3GEOinseregraficoguia1","i3GEOinseregraficoguia");};
			$i("i3GEOinseregraficoguia2").onclick = function()
			{i3GEO.guias.mostraGuiaFerramenta("i3GEOinseregraficoguia2","i3GEOinseregraficoguia");};
			new YAHOO.widget.Button(
				"i3GEOinseregraficobotao1",
				{onclick:{fn: i3GEOF.insereGrafico.legenda}}
			);
			i3GEO.util.mensagemAjuda("i3GEOinseregraficomen1",$i("i3GEOinseregraficomen1").innerHTML);		
			//i3GEO.php.listaItensTema(i3GEOF.graficoTema.montaListaItens,i3GEO.temaAtivo);
			i3GEOF.insereGrafico.ativaFoco();
		}
		catch(erro){alert(erro);}
	},
	/*
	Function: html
	
	Gera o c�digo html para apresenta��o das op��es da ferramenta
	
	Retorno:
	
	String com o c�digo html
	*/
	html:function(){
		var ins = '';
		ins += '<div id=i3GEOinseregraficoguiasYUI class="yui-navset" style="top:0px;cursor:pointer;left:0px;">';
		ins += '	<ul class="yui-nav" style="border-width:0pt 0pt 0px;border-color:rgb(240,240,240);border-bottom-color:white;">';
		ins += '		<li><a href="#ancora"><em><div id="i3GEOinseregraficoguia1" style="text-align:center;font-size:10px;left:0px;" >Fonte dos dados</div></em></a></li>';
		ins += '		<li><a href="#ancora"><em><div id="i3GEOinseregraficoguia2" style="text-align:center;font-size:10px;left:0px;" >Propriedades</div></em></a></li>';
		ins += '	</ul>';
		ins += '</div>';
		ins += '<div class="geralFerramentas" style="left:0px;top:0px;width:98%;height:86%;">';
		ins += '	<div class=guiaobj id="i3GEOinseregraficoguia1obj" style="left:1px;90%;display:none;">';
		ins += '		<p>Escolha o tema com os dados:';
		ins += '		<div id=i3GEOinseregraficotemasi style="display:block;position:relative;top:10px;left:0px;text-align:left;">Aguarde...';
		ins += '		</div>';	
		ins += '		<div id=i3GEOinseregraficolistai class=digitar style="left:0px;top:20px;330px;height:80px;overflow:auto;display:block;">Escolha o tema para ver a lista de itens</div>';
		ins += '		<br><br><br>';
		ins += '		<input id=i3GEOinseregraficobotao1 size=35  type=button value="mostrar legenda no mapa" />';
		ins += '		<div id=i3GEOinseregraficomen1 style=top:10px;left:1px >Marque os itens para compor as partes do gr&aacute;fico: Edite os valores de cor (R,G,B) conforme o desejado. Ap&oacute;s escolher os itens, clique no elemento do mapa para inserir o gr&aacute;fico.</div>';
		ins += '	</div>';
		ins += '	<div class=guiaobj id="i3GEOinseregraficoguia2obj" style="left:1px;display:none;">';
		ins += '		<table summary="" class=lista width="70%">';
		ins += '		<tr>  ';
		ins += '			<td>Tamanho do c�rculo:</td>';
		ins += '			<td><input onclick="javascript:this.select();" style="cursor:text" size=4 class=digitar type="text" id=i3GEOinseregraficow value="50" /></td>';
		ins += '		</tr><tr><td></td><td>&nbsp;</td></tr>';
		ins += '		<tr>';
		ins += '			<td>Inclina&ccedil;&atilde;o do c�rculo:</td>';
		ins += '			<td><input onclick="javascript:this.select();" style="cursor:text" size=4 class=digitar type="text" id=i3GEOinseregraficoinclinacao value="1.5" /></td>';
		ins += '		</tr><tr><td></td><td>&nbsp;</td></tr>';
		ins += '		<tr>';
		ins += '			<td>Tamanho da sombra:</td>';
		ins += '			<td><input onclick="javascript:this.select();" style="cursor:text" size=4 class=digitar type="text" id=i3GEOinseregraficosombra value="5" /></td>';
		ins += '		</tr><tr><td></td><td>&nbsp;</td></tr>';
		ins += '		</table>';			
		ins += '	</div>';
		ins += '	<div class=guiaobj id="i3GEOinseregraficoguia3obj" style="left:1px;display:none;">';

		ins += '	</div>';
		ins += '</div>	';
		return ins;
	},
	/*
	Function: criaJanelaFlutuante
	
	Cria a janela flutuante para controle da ferramenta.
	*/	
	criaJanelaFlutuante: function(){
		var minimiza,cabecalho,janela,divid,temp,titulo;
		//funcao que sera executada ao ser clicado no cabe�alho da janela
		cabecalho = function(){
			i3GEOF.insereGrafico.ativaFoco();
		};
		minimiza = function(){
			var temp = $i("i3GEOF.insereGrafico_corpo");
			if(temp){
				if(temp.style.display === "block")
				{temp.style.display = "none";}
				else
				{temp.style.display = "block";}
			}
		};
		//cria a janela flutuante
		titulo = "Insere grafico <a class=ajuda_usuario target=_blank href='" + i3GEO.configura.locaplic + "/ajuda_usuario.php?idcategoria=8&idajuda=80' >&nbsp;&nbsp;&nbsp;</a>";
		janela = i3GEO.janela.cria(
			"400px",
			"300px",
			"",
			"",
			"",
			titulo,
			"i3GEOF.insereGrafico",
			false,
			"hd",
			cabecalho,
			minimiza
		);
		divid = janela[2].id;
		
		if(i3GEO.eventos.MOUSECLIQUE.toString().search("i3GEOF.insereGrafico.insere()") < 0)
		{i3GEO.eventos.MOUSECLIQUE.push("i3GEOF.insereGrafico.insere()");}
		temp = function(){
			i3GEO.eventos.MOUSECLIQUE.remove("i3GEOF.insereGrafico.insere()");
		};
		YAHOO.util.Event.addListener(janela[0].close, "click", temp);				
		i3GEOF.insereGrafico.inicia(divid);
	},
	/*
	Function: ativaFoco
	
	Refaz a interface da ferramenta quando a janela flutuante tem seu foco ativado
	*/
	ativaFoco: function(){
		if(g_tipoacao !== 'inseregrafico'){
			i3GEO.barraDeBotoes.ativaIcone("inseregrafico");
			g_tipoacao='inseregrafico';
			g_operacao='inseregrafico';
			temp = Math.random() + "a";
			temp = temp.split(".");
			g_nomepin = "pin"+temp[1];
			i3GEOF.insereGrafico.comboTemas();
			$i("i3GEOinseregraficolistai").innerHTML = "";
		}			
	},
	/*
	Function: insere
	
	Insere um grafico no mapa na posi��o clicada

	O ponto � obtidos do objeto objposicaocursor e os demais par�metros da janela interna aberta no iframe "wdocai"
	*/
	insere: function(){
		if (g_tipoacao === "inseregrafico"){
			var tema = $i("i3GEOinseregraficotemasLigados").value,
				width = $i("i3GEOinseregraficow").value,
				inclinacao = $i("i3GEOinseregraficoinclinacao").value,
				shadow_height = $i("i3GEOinseregraficosombra").value,
				itens;
			if (tema === ""){alert("Nenhum tema definido para pegar os dados");}
			else{
				itens = i3GEOF.insereGrafico.pegaItensMarcados();
				if (itens === "")
				{alert("Nenhum item foi escolhido");}
				else{
					i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
					i3GEO.contadorAtualiza++;
					i3GEO.php.insereSHPgrafico(i3GEO.atualiza,tema,objposicaocursor.ddx,objposicaocursor.ddy,itens,shadow_height,width,inclinacao);
				}
			}
		}
	},
	/*
	Function: comboTemas
	
	Cria o combo com os temas dispon�veis (temas ligados) para adi��o dos gr�ficos.
	*/
	comboTemas: function(){
		i3GEO.util.comboTemasLigados(
			"i3GEOinseregraficotemasLigados",
			function(retorno){
		 		$i("i3GEOinseregraficotemasi").innerHTML = retorno.dados;
		 		if ($i("i3GEOinseregraficotemasLigados")){
		 			$i("i3GEOinseregraficotemasLigados").onchange = function(){
		 				$i("i3GEOinseregraficolistai").innerHTML = "<p style=color:red >Aguarde...<br>";
		 				i3GEO.php.listaItensTema(i3GEOF.insereGrafico.listaItens,$i("i3GEOinseregraficotemasLigados").value);
		 				i3GEO.temaAtivo = $i("i3GEOinseregraficotemasLigados").value;
		 			};
				}
				if(i3GEO.temaAtivo !== ""){
					$i("i3GEOinseregraficotemasLigados").value = i3GEO.temaAtivo;
					$i("i3GEOinseregraficotemasLigados").onchange.call();
				}
			},
			"i3GEOinseregraficotemasi"
		);
	},
	/*
	Function: listaItens
	
	Monta a listagem de itens de um tema com a op��o de sele��o de cor
	
	Parametro:
	
	retorno {JSON}
	*/
	listaItens: function(retorno){
		try{
			var i,
				n,
				ins = [];
			n = retorno.data.valores.length;
			ins.push("<table class=lista >");
			for (i=0;i<n; i++){
				ins.push("<tr><td><input size=2 style='cursor:pointer' name="+retorno.data.valores[i].item+" type=checkbox id=i3GEOinseregrafico"+retorno.data.valores[i].item+" /></td>");
				ins.push("<td>&nbsp;"+retorno.data.valores[i].item+"</td>");
				ins.push("<td>&nbsp;<input onclick='javascript:this.select();' id=i3GEOinseregrafico"+retorno.data.valores[i].item+"cor type=text size=13 value="+i3GEO.util.randomRGB()+" /></td>");
				ins.push("<td>&nbsp;<img style=cursor:pointer src='"+i3GEO.configura.locaplic+"/imagens/aquarela.gif' onclick=\"i3GEOF.insereGrafico.corj('i3GEOinseregrafico"+retorno.data.valores[i].item+"cor')\" /></td></tr>");
			}
			ins.push("</table>");
			$i("i3GEOinseregraficolistai").innerHTML = ins.join("");
		}
		catch(e)
		{$i("i3GEOinseregraficolistai").innerHTML = "<p style=color:red >Ocorreu um erro "+e+"<br>";}
	},
	/*
	Function: corj
	
	Abre a janela para o usu�rio selecionar uma cor interativamente
	*/
	corj: function(obj)
	{i3GEO.util.abreCor("",obj);},
	/*
	Function: pegaItensMarcados
	
	Recupera os itens que foram marcados e monta uma lista para enviar como par�metro para a fun��o de gera��o dos gr�ficos
	*/
	pegaItensMarcados: function(){
		var listadeitens = [],
			inputs = $i("i3GEOinseregraficolistai").getElementsByTagName("input"),
			i,
			it,
			c,
			n;
		n = inputs.length;
		for (i=0;i<n; i++)
		{
			if (inputs[i].checked === true)
			{
				it = inputs[i].id;
				c = $i(it+"cor").value;
				listadeitens.push(it.replace("i3GEOinseregrafico","")+","+c);
			}
		}
		return(listadeitens.join("*"));
	},
	/*
	Function: legenda
	
	Mostra a legenda no mapa do �ltimo gr�fico inserido
	*/
	legenda: function(){
		var par = i3GEOF.insereGrafico.pegaItensMarcados(),
			temp,
			i,
			t,
			w;
		try
		{
			temp = par.split("*");
			par = "<table>";
			i = temp.length-1;
			if(i >= 0)
			{
				do
				{
					t = temp[i];
					t = t.split(",");
					par += "<tr style='text-align:left'><td style='background-color:rgb("+t[1]+","+t[2]+","+t[3]+")'>&nbsp;&nbsp;</td><td style='text-align:left'>"+t[0]+"</td></tr>";
				}
				while(i--);
			}
			par += "</table>";
			w = i3GEO.janela.cria(200,200,"","center","center","Legenda","FlegendaGr");
			w = w[2].id;
			$i(w).innerHTML = par;
		}
		catch(e){alert("Ocorreu um erro. legendaGrafico"+e);}
	}
};
<?php if(extension_loaded('zlib')){ob_end_flush();}?>