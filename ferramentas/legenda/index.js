
/*jslint plusplus:false,white:false,undef: false, rhino: true, onevar: true, evil: true */
/*
Title: Editor de legenda

Define a forma de representa&ccedil;&atilde;o de um tema, modificando o tipo de classifica&ccedil;&atilde;o e os s&iacute;mbolos utilizados em cada classe

Veja:

<i3GEO.tema.dialogo.editaLegenda>

Arquivo:

i3geo/ferramentas/legenda/index.js.php

Licenca:

GPL2

i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com

Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo
e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a P&uacute;blica Geral
GNU conforme publicada pela Free Software Foundation;

Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til,
por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl&iacute;cita
de COMERCIABILIDADE OU ADEQUA&Ccedil;&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA.
Consulte a Licen&ccedil;a P&uacute;blica Geral do GNU para mais detalhes.
Voc&ecirc; deve ter recebido uma c&oacute;pia da Licen&ccedil;a P&uacute;blica Geral do
GNU junto com este programa; se n&atilde;o, escreva para a
Free Software Foundation, Inc., no endere&ccedil;o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
*/

if(typeof(i3GEOF) === 'undefined'){
	var i3GEOF = {};
}

/*
Classe: i3GEOF.legenda
*/
i3GEOF.legenda = {
	/*
	Variavel: parDefault

	Par�metros padr&atilde;o utilizados para formatar os labels
	*/
	parDefault: "&position=MS_UR&partials=1&offsetx=0&offsety=0&minfeaturesize=auto&mindistance=auto&force=0&shadowsizex=1&shadowsizey=1&cor=0 0 0&sombray=1&sombrax=1&angulo=0&tamanho=8&fonte=bitmap&fundo=off&sombra=off&outlinecolor=off&shadowcolor=off&wrap=",
	/*
	Variavel: aviso

	Indica que uma altera&ccedil;&atilde;o ainda n&atilde;o foi salva

	Type:
	{boolean}
	*/
	aviso: false,
	/*
	Variavel: tema

	Tema que ser&aacute; utilizado

	Type:
	{string}
	*/
	tema: i3GEO.temaAtivo,
	/*
	Variavel: dadosGrafico

	Dados utilizados no gr&aacute;fico no formato da ferramenta graficointerativo
	*/
	dadosGrafico: "",
	/*
	Variavel: aguarde

	Estilo do objeto DOM com a imagem de aguarde existente no cabe&ccedil;alho da janela.
	*/
	aguarde: "",
	/*
	Variavel: estilos

	Estilos existentes em um s&iacute;mbolo de uma classe
	*/
	estilos: "",
	/*
	Variavel: estilo

	�ltimo estilo selecionado
	*/
	estilo: "",
	/*
	Variavel: classe

	�ltima classe selecionado
	*/
	classe: "",
	/*
		Para efeitos de compatibilidade antes da vers&atilde;o 4.7 que n&atilde;o tinha dicion&aacute;rio
	*/
	criaJanelaFlutuante: function(){
		i3GEOF.legenda.iniciaDicionario();
	},
	/*
	Function: iniciaDicionario

	Carrega o dicion&aacute;rio e chama a fun&ccedil;&atilde;o que inicia a ferramenta

	O Javascript &eacute; carregado com o id i3GEOF.nomedaferramenta.dicionario_script
	*/
	iniciaDicionario: function(){
		if(typeof(i3GEOF.legenda.dicionario) === 'undefined'){
			i3GEO.util.scriptTag(
				i3GEO.configura.locaplic+"/ferramentas/legenda/dicionario.js",
				"i3GEOF.legenda.iniciaJanelaFlutuante()",
				"i3GEOF.legenda.dicionario_script"
			);
		}
		else{
			i3GEOF.legenda.iniciaJanelaFlutuante();
		}
	},
	/*
	Function: inicia

	Inicia a ferramenta. &Eacute; chamado por criaJanelaFlutuante

	Parametro:

	iddiv {String} - id do div que receber&aacute; o conteudo HTML da ferramenta
	*/
	inicia: function(iddiv){
		i3GEO.janela.comboCabecalhoTemas("i3GEOFlegendaComboCabeca","i3GEOFlegendaComboCabecaSel","legenda","ligados");
		if(i3GEO.temaAtivo === ""){
			$i(iddiv).innerHTML = '<p style="position: relative; top: 0px; font-size: 15px; text-align: left;">'+$trad("x33")+'</p>';
			return;
		}
		try{
			$i(iddiv).innerHTML += i3GEOF.legenda.html();
			i3GEO.guias.mostraGuiaFerramenta("i3GEOlegendaguia1","i3GEOlegendaguia");
			//eventos das guias
			$i("i3GEOlegendaguia6").onclick = function()
			{i3GEO.guias.mostraGuiaFerramenta("i3GEOlegendaguia6","i3GEOlegendaguia");};
			$i("i3GEOlegendaguia1").onclick = function(){
				i3GEOF.legenda.mostralegenda();
				i3GEO.guias.mostraGuiaFerramenta("i3GEOlegendaguia1","i3GEOlegendaguia");
			};
			$i("i3GEOlegendaguia2").onclick = function()
			{i3GEO.guias.mostraGuiaFerramenta("i3GEOlegendaguia2","i3GEOlegendaguia");};
			$i("i3GEOlegendaguia3").onclick = function(){
				i3GEO.janela.tempoMsg("Para acessar o editor, clique em um s&iacute;mbolo na guia 'Legenda'");
			};
			$i("i3GEOlegendaguia4").onclick = function(){
				i3GEOF.legenda.mostraGrafico();
			};
			$i("i3GEOlegendaguia5").onclick = function(){
				i3GEO.guias.mostraGuiaFerramenta("i3GEOlegendaguia5","i3GEOlegendaguia");
			};
			new YAHOO.widget.Button(
				"i3GEOlegendabotao1",
				{onclick:{fn: i3GEOF.legenda.mudaLegenda}}
			);
			if(navm)
			{$i("i3GEOlegendabotao1-button").style.width = "0px";}
			new YAHOO.widget.Button(
				"i3GEOlegendabotao2",
				{onclick:{fn: i3GEOF.legenda.adicionaClasse}}
			);
			//if(navm)
			//{$i("i3GEOlegendabotao2-button").style.width = "0px";}

			new YAHOO.widget.Button(
				"i3GEOlegendabotao3",
				{onclick:{fn: i3GEOF.legenda.adicionaConta},width:"100px"}
			);
			$i("i3GEOlegendabotao3-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotao15",
				{onclick:{fn: i3GEOF.legenda.adicionaOpacidade}}
			);
			$i("i3GEOlegendabotao15-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotaoRamp",
				{onclick:{fn: function(){
					var tabela = $i("i3GEOlegendalegenda");
					var trs = tabela.getElementsByTagName("tr");
					var ncores = trs.length - 1;
					i3GEO.util.abreColourRamp("","listaColourRamp",ncores);
				}}}
			);
			$i("i3GEOlegendabotaoRamp-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotao4",
				{onclick:{fn: i3GEOF.legenda.paleta}}
			);
			new YAHOO.widget.Button(
				"i3GEOlegendabotao5",
				{onclick:{fn: i3GEOF.legenda.simbU}}
			);
			$i("i3GEOlegendabotao5-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotao6",
				{onclick:{fn: i3GEOF.legenda.valorU}}
			);
			$i("i3GEOlegendabotao6-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotao7",
				{onclick:{fn: i3GEOF.legenda.representacao}}
			);
			$i("i3GEOlegendabotao7-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotao8",
				{onclick:{fn: i3GEOF.legenda.valorC}}
			);
			$i("i3GEOlegendabotao8-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotao9",
				{onclick:{fn: i3GEOF.legenda.valorQ}}
			);
			$i("i3GEOlegendabotao9-button").style.width = "200px";

			new YAHOO.widget.Button(
				"i3GEOlegendabotao10",
				{onclick:{fn: i3GEOF.legenda.aplicaEstilo}}
			);
			if(navm)
			{$i("i3GEOlegendabotao10-button").style.width = "0px";}
			new YAHOO.widget.Button(
				"i3GEOlegendabotao17",
				{onclick:{fn: i3GEOF.legenda.alteraGeometriaTema}}
			);
			$i("i3GEOlegendabotao17-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotaoSLDe",
				{onclick:{fn: function(){window.open(i3GEO.configura.locaplic+"/ferramentas/legenda/exec.php?funcao=tema2sld&tema="+i3GEOF.legenda.tema+"&g_sid="+i3GEO.configura.sid);}}}
			);
			$i("i3GEOlegendabotaoSLDe-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotaoSLDi",
				{onclick:{fn: function(){i3GEO.tema.dialogo.aplicarsld(i3GEOF.legenda.tema);}}}
			);
			$i("i3GEOlegendabotaoSLDi-button").style.width = "200px";
			new YAHOO.widget.Button(
				"i3GEOlegendabotaoIncluirLabel",
				{onclick:{fn: function(){
					var par,p,temp;
					try{
						par = i3GEOF.proplabel.pegaPar();
						i3GEOF.legenda.parDefault = par;
					}
					catch(e){
						par = i3GEOF.legenda.parDefault;
					}
					i3GEOF.legenda.aguarde.visibility = "visible";
					temp = function(){
						i3GEOF.legenda.aguarde.visibility = "hidden";
						i3GEOF.legenda.aposAlterarLegenda();
						i3GEOF.legenda.aguarde.visibility = "hidden";
					};
					p = i3GEO.configura.locaplic+"/ferramentas/legenda/exec.php?g_sid="+i3GEO.configura.sid+"&funcao=adicionaLabelClasse&tema="+i3GEOF.legenda.tema+"&classe="+i3GEOF.legenda.classe+par;
					p += "&item="+$i("i3GEOlegendaSelItemLabel").value;
					cp = new cpaint();
					cp.set_response_type("JSON");
					cp.call(p,"foo",temp);
				}}}
			);
			new YAHOO.widget.Button(
				"i3GEOlegendabotaoExcluirLabel",
				{onclick:{fn: function(){
					var p,temp;
					i3GEOF.legenda.aguarde.visibility = "visible";
					temp = function(){
						i3GEOF.legenda.aguarde.visibility = "hidden";
						i3GEOF.legenda.aposAlterarLegenda();
						i3GEOF.legenda.aguarde.visibility = "hidden";
					};
					p = i3GEO.configura.locaplic+"/ferramentas/legenda/exec.php?g_sid="+i3GEO.configura.sid+"&funcao=removeLabelClasse&tema="+i3GEOF.legenda.tema+"&classe="+i3GEOF.legenda.classe;
					cp = new cpaint();
					cp.set_response_type("JSON");
					cp.call(p,"foo",temp);
				}}}
			);
			new YAHOO.widget.Button(
				"i3GEOlegendabotaoPropriedadeLabel",
				{onclick:{fn: function(){
					i3GEO.util.scriptTag(
						i3GEO.configura.locaplic+"/ferramentas/opcoes_label/index.js",
						"i3GEOF.proplabel.criaJanelaFlutuante(false)",
						"i3GEOFproplabel",
						false
					);
				}}}
			);
			i3GEOF.legenda.ativaFoco();
			i3GEOF.legenda.mostralegenda();
			i3GEO.util.comboItens(
				"i3GEOlegendaSelItem",
				i3GEOF.legenda.tema,
				function(retorno){
					if($i("i3GEOlegendaitens"))
			 		{$i("i3GEOlegendaitens").innerHTML = retorno.dados;}
				},
				"i3GEOlegendaitens"
			);
			if(i3GEO.arvoreDeCamadas.pegaTema(i3GEOF.legenda.tema).classe && i3GEO.arvoreDeCamadas.pegaTema(i3GEOF.legenda.tema).classe.toLowerCase() == "nao")
			{$i("i3GEOFlegendamostra").checked = false;}
			$i("i3GEOFlegendamostra").onclick = function(){i3GEO.tema.invertestatuslegenda(i3GEOF.legenda.tema);};
		}
		catch(erro){i3GEO.janela.tempoMsg(erro);}
	},
	/*
	Function: html

	Gera o c&oacute;digo html para apresenta&ccedil;&atilde;o das op&ccedil;&otilde;es da ferramenta

	Retorno:

	String com o c&oacute;digo html
	*/
	html:function(){
		var ins = '' +
		'<div id=guiasYUI class="yui-navset" style="top:0px;cursor:pointer;left:0px;">'+
		'	<ul class="yui-nav" style="border-width:0pt 0pt 0px;border-color:rgb(240,240,240);border-bottom-color:white;">'+
		'		<li><a href="#ancora"><em><div id="i3GEOlegendaguia6" style="text-align:center;left:0px;" ><img class="ticPropriedades2" style="height:14px" title="Propriedades" src="'+i3GEO.configura.locaplic+'/imagens/visual/default/branco.gif"></div></em></a></li>'+
		'		<li><a href="#ancora"><em><div id="i3GEOlegendaguia1" style="text-align:center;left:0px;" >Legenda</div></em></a></li>'+
		'		<li><a href="#ancora"><em><div id="i3GEOlegendaguia2" style="text-align:center;left:0px;" >Classes</div></em></a></li>'+
		'		<li><a href="#ancora"><em><div id="i3GEOlegendaguia3" style="text-align:center;left:0px;" >Editor</div></em></a></li>'+
		'		<li><a href="#ancora"><em><div id="i3GEOlegendaguia4" style="text-align:center;left:0px;" >Gr&aacute;ficos</div></em></a></li>'+
		'		<li><a href="#ancora"><em><div id="i3GEOlegendaguia5" style="text-align:center;left:0px;" >Importar/exportar SLD</div></em></a></li>'+
		'	</ul>'+
		'</div><br>'+
		'<div id=i3GEOlegendaguia6obj style="width:99%;text-align:left;">'+
		'	<p class=paragrafo >&nbsp;<input type=checkbox onclick="" checked id=i3GEOFlegendamostra style="cursor:pointer;border:0px solid white;" /> <span style="cursor:pointer;position:relative;top:-2px;">Mostra as classes desse tema na legenda do mapa</span></p>' +
		'	<p class=paragrafo ><input id=i3GEOlegendabotao3 type="button" value="Inclui n&uacute;mero de ocorr&ecirc;ncias" title="incluir o n&uacute;mero de ocorr&ecirc;ncias no nome de cada classe"></p>' +
		'	<p class=paragrafo ><input id=i3GEOlegendabotao15 type="button" value="Aplica opacidade vari&aacute;vel" title="aplicar opacidade nas classes existente, variando de 10 at&eacute; 100"></p>' +
		'	<p class=paragrafo ><input id=i3GEOlegendabotaoRamp type="button" size=15 value="Escolher paleta de cores" title="escolher e aplicar as varia&ccedil;&otilde;es de cores, entre dois extremos, nas classes existentes"></p>' +
		'	<p class=paragrafo >Gerar cores</p>' +
		'	<table summary="" class=lista5 >' +
		'		<tr>' +
		'			<td>de:</td>' +
		'			<td>' +
		$inputText("","","i3GEOlegendaacori","",12,"0,0,0") +
		'			</td>' +
		'			<td><img alt="aquarela.gif" style=cursor:pointer src="'+i3GEO.configura.locaplic+'/imagens/aquarela.gif" onclick="i3GEOF.legenda.corj(\'i3GEOlegendaacori\')" /> ' +
		'			</td>' +
		'			<td>at&eacute;:</td>' +
		'			<td>'+
		$inputText("","","i3GEOlegendaacorf","",12,"255,255,255") +
		'			</td>' +
		'			<td><img alt="aquarela.gif" style=cursor:pointer src="'+i3GEO.configura.locaplic+'/imagens/aquarela.gif" onclick="i3GEOF.legenda.corj(\'i3GEOlegendaacorf\')" /> ' +
		'			</td>' +
		'			<td><input id=i3GEOlegendabotao4 type="button" size=15 value="Aplicar" title="aplicar varia&ccedil;&otilde;es de cores, entre dois extremos, nas classes existentes"></td>' +
		'		</tr>' +
		'	</table>' +
		'</div>' +
		'<div id=i3GEOlegendaguia1obj style="width:99%;text-align:left;">'+
		'	<table summary="" class=lista5 ><tr>' +
		'	<td><input id=i3GEOlegendabotao1 size="22" type="button" value="Aplicar altera&ccedil;&otilde;es" ></td>'+
		'	<td><input id=i3GEOlegendabotao2 size="22" type="button" value="Adicionar classe" title="adicionar uma nova classe na legenda" ></td>' +
		'	</tr></table><br>' +
		'	<p class=paragrafo >Clique no s&iacute;mbolo da classe para alterar</p>' +
		'	<div id="i3GEOlegendaresultado" style="text-align:left;width:100%;display:block;left:0px">' +
		'	</div>'+
		'</div>'+
		'<div id=i3GEOlegendaguia2obj style="width:99%;text-align:left;">'+
		'	<div id=i3GEOFlegendaClassesOpcionais >' +
		'		<p class=paragrafo >&nbsp;<input type=checkbox onclick="" checked id=i3GEOFlegendaaplicaextent style="cursor:pointer;border:0px solid white;" /> <span style="cursor:pointer;position:relative;top:-2px;">marque para considerar apenas os elementos vis&iacute;veis na extens&atilde;o geogr&aacute;fica atual, caso contr&aacute;rio, ser&aacute; considerada a extens&atilde;o geogr&aacute;fica inicial do mapa</span></p>' +
		'		<p class=paragrafo >Ao gerar as classes, ignorar os valores (separe com v&iacute;rgula):<br>'+
		$inputText("","","i3GEOlegendaignorar","",20,"") +
		'		<hr><p class=paragrafo >Transforma a representa&ccedil;&atilde;o geom&eacute;trica dos elementos do tema. Ap&oacute;s alterar esse par�metro, pode ser necess&aacute;rio modificar as caracter&iacute;sticas do s&iacute;mbolo.</p>'+
		'		<p class=paragrafo >' +
		'		<select id=i3GEOlegentaTipoGeo >'+
		'			<option value="">nenhuma transforma&ccedil;&atilde;o</option>'+
		'			<option value="centroid">centr&oacute;ide</option>'+
		'			<option value="bbox">box</option>'+
		'			<option value="vertices">v&eacute;rtices</option>'+
		'			<option value="start">v&eacute;rtice inicial</option>'+
		'			<option value="end">v&eacute;rtice final</option>'+
		'		</select>'+
		'		<p class=paragrafo >' +
		'		<input id=i3GEOlegendabotao17 size="35" type="button" value="Altera geometria"></p>'+
		'		<hr><p class=paragrafo >Altera o tipo de representa&ccedil;&atilde;o do tema. Se for poligonal, passa para linear e vice-versa.</p>'+
		'		<p class=paragrafo ><input id=i3GEOlegendabotao7 size="25" type="button" value="Altera tipo"></p>'+
		'	</div>' +
		'	<hr><p class=paragrafo >Todos os elementos ser&atilde;o desenhados com um &uacute;nico s&iacute;mbolo</p>'+
		'	<p class=paragrafo ><input id=i3GEOlegendabotao5 size="25" type="button" value="S&iacute;mbolo &uacute;nico"></p>'+
		'	<hr><p class=paragrafo >Cada ocorr&ecirc;ncia de um valor para o item selecionado, ser&aacute; desenhado com o mesmo s&iacute;mbolo</p>'+
		'	<div id="i3GEOlegendaitens" style="text-align:left;" ></div><br>'+
		'	<p class=paragrafo ><input id=i3GEOlegendabotao6 size="25" type="button" value="Valor &uacute;nico"></p>'+
		'	<hr><p class=paragrafo >Cria classes para um item num&eacute;rico utilizando um n&uacute;mero fixo de classes (o item utilizado &eacute; o mesmo indicado acima)</p>'+
		'	<p class=paragrafo >N&uacute;mero de classes:'+
		$inputText("","","i3GEOlegendanclasses","",3,"5") +
		'	<p class=paragrafo ><input id=i3GEOlegendabotao8 size="25" type="button" value="Intervalos iguais">'+
		'	<hr><p class=paragrafo >Cria classes para um item num&eacute;rico utilizando os quartis (o item utilizado &eacute; o mesmo indicado acima)</p>'+
		'	<p class=paragrafo ><input id=i3GEOlegendabotao9 size="25" type="button" value="Quartis">'+
		'	<p class=paragrafo >Estilo dos nomes das classes: ' +
		'	<select id=estiloClassesQuartis >' +
		'	<option value=minimo select >s&oacute; os valores</option>' +
		'	<option value=simples select >quartil e os valores</option>' +
		'	<option value=completo select >express&atilde;o completa</option>' +
		'	</select></p>' +
		'</div>'+
		'<div id=i3GEOlegendaguia3obj style="width:99%;text-align:left;">'+
		'	<fieldset style="padding:5px;margin:2px;">'+
		'	<legend>Etiquetas da classe (labels)</legend>'+
		'		<p class=paragrafo >Item com o texto: <span id=i3GEOlegendaitensLabel ></span></p>' +
		'		<p class=paragrafo style="font-size:10px;">'+
		'		<input id=i3GEOlegendabotaoExcluirLabel size=10 type=buttom value="excluir" />' +
		'		<input id=i3GEOlegendabotaoIncluirLabel size=10 type=buttom value="adicionar" />' +
		'		<input id=i3GEOlegendabotaoPropriedadeLabel size=10 type=buttom value="propriedades" />' +
		'		</p>' +
		'	</fieldset><br>'+
		'	<fieldset style="padding:5px;margin:2px;">'+
		'	<legend>Estilos</legend>'+
		'		<p class=paragrafo style="font-size:10px;">Cada s&iacute;mbolo pode ser formado por um ou mais estilos. Utilize -1,-1,-1 para anular uma cor. A cor deve ser definida no formato vermelho,verde,azul. Para criar linhas tracejadas utilize o s&iacute;mbolo 0 ou vazio e digite um padr&atilde;o de repeti&ccedil;&atilde;o como por exemplo 2 10 2 10 <br></p>'+
		'		<div id="i3GEOlegendacomboestilos" style="position:relative;top:0px;left:0px;text-align:left">'+
		'		</div>'+
		'		<br><p class=paragrafo style="font-size:10px" ><input id=i3GEOlegendabotao10 size="35" type="button" value="Aplicar as altera&ccedil;&otilde;es"></p>'+
		'		<div style="position:relative;top:0px;left:0px;text-align:left;" id="i3GEOlegendamostraEstilo">'+
		'		</div>'+
		'		<div style="position:relative;top:0px;left:0px;text-align:left;" id="i3GEOlegendasimbolos">'+
		'		</div>'+
		'	</fieldset>'+
		'</div>'+
		'<div id=i3GEOlegendaguia4obj style="width:99%;text-align:left;">'+
		'</div>'+
		'<div id=i3GEOlegendaguia5obj style="width:99%;text-align:left;">'+
		'	<p class=paragrafo >Gera um arquivo XML, no padr&atilde;o SLD, contendo a legenda atual da camada. Para maiores informa&ccedil;&otilde;es, veja <a href="http://mapserver.org/ogc/sld.html#sld" target=_blank >Mapserver SLD</a> (O SLD s&oacute; &eacute; gerado ou aplicado corretamente em camadas que utilizam express&otilde;es simples e o elemento CLASSITEM)'+
		'	<p class=paragrafo ><input id=i3GEOlegendabotaoSLDe size="25" type="button" value="Exportar SLD"></p>'+
		'	<p class=paragrafo >Aplica um arquivo SLD � camada ativa' +
		'	<p class=paragrafo ><input id=i3GEOlegendabotaoSLDi size="25" type="button" value="Aplicar SLD"></p>'+
		'</div>' +
		'<input type=hidden  value="" id="listaColourRamp" onchange="javascript:i3GEOF.legenda.aplicaColourRamp()" />'; //utilizado pelo seletor de colourramp
		return ins;
	},
	/*
	Function: iniciaJanelaFlutuante

	Cria a janela flutuante para controle da ferramenta.
	*/
	iniciaJanelaFlutuante: function(){
		var minimiza,cabecalho,janela,divid,temp,titulo;
		if($i("i3GEOF.legenda")){
			i3GEOF.legenda.tema = i3GEO.temaAtivo;
			i3GEOF.legenda.inicia("i3GEOF.legenda_corpo");
			return;
		}
		cabecalho = function(){
			i3GEOF.legenda.ativaFoco();
		};
		minimiza = function(){
			i3GEO.janela.minimiza("i3GEOF.legenda");
		};
		//cria a janela flutuante
		titulo = "<div  id='i3GEOFlegendaComboCabeca' class='comboTemasCabecalho'>   ------</div>&nbsp;&nbsp;&nbsp;"+$trad("t33")+" <a class=ajuda_usuario target=_blank href='" + i3GEO.configura.locaplic + "/ajuda_usuario.php?idcategoria=5&idajuda=41' >&nbsp;&nbsp;&nbsp;</a>";
		janela = i3GEO.janela.cria(
			"490px",
			"340px",
			"",
			"",
			"",
			titulo,
			"i3GEOF.legenda",
			false,
			"hd",
			cabecalho,
			minimiza
		);
		divid = janela[2].id;
		i3GEOF.legenda.aguarde = $i("i3GEOF.legenda_imagemCabecalho").style;
		$i("i3GEOF.legenda_corpo").style.backgroundColor = "white";
		i3GEOF.legenda.inicia(divid);
		temp = function(){
			if(i3GEO.eventos.ATUALIZAARVORECAMADAS.toString().search('i3GEO.janela.comboCabecalhoTemas("i3GEOFlegendaComboCabeca","i3GEOFlegendaComboCabecaSel","legenda","ligados")') > 0)
			{i3GEO.eventos.ATUALIZAARVORECAMADAS.remove('i3GEO.janela.comboCabecalhoTemas("i3GEOFlegendaComboCabeca","i3GEOFlegendaComboCabecaSel","legenda","ligados")');}
		};
		YAHOO.util.Event.addListener(janela[0].close, "click", temp);
	},
	/*
	Function: ativaFoco

	Refaz a interface da ferramenta quando a janela flutuante tem seu foco ativado
	*/
	ativaFoco: function(){
		if(i3GEOF.legenda.tema !== "" && i3GEO.arvoreDeCamadas.pegaTema(i3GEOF.legenda.tema) === "")
		{i3GEO.janela.tempoMsg("O tema ja nao existe mais no mapa");}
		var i = $i("i3GEOF.legenda_c").style;
		i.zIndex = i3GEO.janela.ULTIMOZINDEX;
		i3GEO.janela.ULTIMOZINDEX++;
	},
	/*
	Function: aposAlterarLegenda

	Fun&ccedil;&atilde;o executada ap&oacute;s ocorrer alguma altera&ccedil;&atilde;o efetiva da legenda do mapa
	*/
	aposAlterarLegenda: function(){
		i3GEO.atualiza();
		i3GEO.Interface.atualizaTema("",i3GEOF.legenda.tema);
		i3GEO.arvoreDeCamadas.atualizaLegenda(i3GEOF.legenda.tema);
		i3GEO.mapa.legendaHTML.atualiza();
	},
	/*
	Function: mostralegenda

	Pega os dados da legenda do mapa atual e mostra na tela

	Veja:

	<EDITALEGENDA>
	*/
	mostralegenda: function(){
		if(i3GEOF.legenda.aguarde.visibility === "visible")
		{return;}
		i3GEOF.legenda.aguarde.visibility = "visible";
		var p,cp;
		p = i3GEO.configura.locaplic+"/ferramentas/legenda/exec.php?g_sid="+i3GEO.configura.sid+"&funcao=editalegenda&opcao=edita&tema="+i3GEOF.legenda.tema;
		cp = new cpaint();
		cp.set_response_type("JSON");
		cp.call(p,"tabelaLegenda",i3GEOF.legenda.montaLegenda);
	},
	/*
	Function: montaLegenda

	Formata a tabela de edi&ccedil;&atilde;o da legenda

	Parametro:

	retorno - objeto contendo os dados para formata&ccedil;&atilde;o da legenda
	*/
	montaLegenda: function(retorno){
		i3GEOF.legenda.aviso = false;
		try{
			if (retorno.data != undefined){
				var ins = [],
					i,
					ajuda,
					id,
					re,
					exp,
					n;
				if (retorno.data[0].proc === ""){
					ins.push("<table class=lista4 id=i3GEOlegendalegenda ><tr><td><img src='"+i3GEO.configura.locaplic+"/imagens/inverter.png' title='Inverter cores' onclick='i3GEOF.legenda.inverteCores()' style=cursor:pointer /></td><td style=background-color:white ><img src='"+i3GEO.configura.locaplic+"/imagens/tamanho.png' title='Calcula tamanho' onclick='i3GEOF.legenda.calculaTamanho()' style=cursor:pointer /></td><td style=background-color:yellow ></td><td style=background-color:yellow >nome</td><td style=background-color:yellow >express&atilde;o</td></tr>");
					n = retorno.data.length;
					for (i=0;i<n;i++){
						id = retorno.data[i].tema+"-"+retorno.data[i].idclasse; //layer+indice da classe
						re = new RegExp("'", "g");
						exp = (retorno.data[i].expressao).replace(re,'"');
						ins.push("<tr><td><img style='cursor:pointer' title='clique para excluir' onclick='i3GEOF.legenda.excluilinhaf(this)' src='" + i3GEO.configura.locaplic + "/imagens/x.gif' title='excluir' /></td><td><img width='30px' height='15px' style='cursor:pointer' title='clique para alterar' src='"+retorno.data[i].imagem+"' onclick=i3GEOF.legenda.editaSimbolo('i3GEOlegendaid_"+id+"') /></td>");
						ins.push("<td><img onclick=i3GEOF.legenda.modificaCor('"+retorno.data[i].idclasse+"') title='alterar a cor' style='cursor:pointer' src='" + i3GEO.configura.locaplic + "/imagens/aquarela.gif' /></td>");
						ins.push("<td>");
						ins.push($inputText("","","i3GEOlegendaid_"+id,"digite o novo nome",20,retorno.data[i].nomeclasse,"nome","javascript:i3GEOF.legenda.aviso()"));
						ins.push("</td><td>");
						ins.push($inputText("","","i3GEOlegendaid_"+id,"digite a nova express&atilde;o",30,exp,"expressao","javascript:i3GEOF.legenda.aviso()"));
						ins.push("</td>");
						if(n>1){
							ins.push("<td><img src='"+i3GEO.configura.locaplic+"/imagens/sobe1.png' style=cursor:pointer title='sobe' onclick=i3GEOF.legenda.sobelinhaf('"+retorno.data[i].idclasse+"') /></td>");
							ins.push("<td><img src='"+i3GEO.configura.locaplic+"/imagens/desce1.png' style=cursor:pointer title='desce' onclick=i3GEOF.legenda.descelinhaf('"+retorno.data[i].idclasse+"') /></td>");
						}
						ins.push("</tr>");
					}
					ins.push("</table><br>");
					$i("i3GEOlegendaresultado").innerHTML = ins.join("");
				}
				else{
					ajuda = "<br><p class=paragrafo >Para aplicar um ajuste entre 0 e 255 cores, utilize a op&ccedil;&atilde;o 'Escala de Cores'." +
					"<p class=paragrafo >O valor de SCALE= pode ser a palavra AUTO (SCALE=AUTO) ou um valor m&iacute;nimo e m&aacute;ximo (por exemplo SCALE=20,3000)." +
					"<p class=paragrafo >Voc&ecirc; pode aplicar a escala em bandas individuais, para isso, utilize SCALE_n, por exemplo SCALE_1=AUTO SCALE_2=200,500." +
					"<p class=paragrafo >Para escolher quais bandas ser&atilde;o utilizadas e qual sua ordem, utilize a op&ccedil;&atilde;o BANDAS." +
					"Utilize, por exemplo, BANDS=1,2,3 BANDS=1 ." +
					"<p class=paragrafo >Para alterar o modo de amostragem, utilize RESAMPLE com uma das op&ccedil;&otilde;es: AVERAGE,NEAREST ou BILINEAR.";
					ins = "<p class=paragrafo >Voc&ecirc; pode incluir processos na imagem para modificar as caracter&iacute;sticas de visualiza&ccedil;&atilde;o<br><br>Adicionar processo:" +
					"<select onchange=i3GEOF.legenda.adicionaProcesso(this) >" +
					"<option value='' >selecione o processo</option>" +
					"<option value='SCALE=' >Escala de cores</option>" +
					"<option value='RESAMPLE=' >Reamostragem</option>" +
					"<option value='BANDS=' >Bandas</option>" +
					"<option value='COLOR_MATCH_THRESHOLD=' >Threshold</option>" +
					"<option value='NODATA=' >Nodata</option>" +
					"</select><br>" +
					'<p class=paragrafo ><input id=i3GEOlegendabotao16 class="executar" size="22" type="buttom" value="aplicar processos">';
					if(retorno.data[0].proc == "")
					{ins += "<div style=width:80% id=i3GEOlegendaprocessos ></div>";}
					else{
						ins += "<div style='width:80%;text-align:left;' id=i3GEOlegendaprocessos >";
						for (i=0;i<retorno.data[0].proc.length;i++){
							ins += "<br>"+$inputText("","","","",50,retorno.data[0].proc[i]);
						}
						ins += "</div>";
					}
					$i("i3GEOlegendaresultado").innerHTML = ins+ajuda;
					new YAHOO.widget.Button(
						"i3GEOlegendabotao16",
						{onclick:{fn: i3GEOF.legenda.aplicaProcessos}}
					);
				}
			}
			else
			{$i("i3GEOlegendaresultado").innerHTML = "<p style=color:red >Ocorreu um erro<br>";}
			i3GEOF.legenda.aguarde.visibility = "hidden";
		}
		catch(e){i3GEO.janela.tempoMsg("N&atilde;o &eacute; poss&iacute;vel editar a legenda desse tema");i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: aviso

	Mostra um i3GEO.janela.tempoMsga ao usu&aacute;rio quando um campo da tabela que cont&eacute;m os dados da legenda &eacute; alterado

	O aviso &eacute; mostrado apenas uma vez
	*/
	aviso: function(){
		if(i3GEOF.legenda.aviso == true){
			i3GEO.janela.tempoMsg("Clique em 'Aplicar' para que as altera&ccedil;&otilde;pes sejam salvas");
			i3GEOF.legenda.aviso == false;
		}
	},
	/*
	Function: aplicaColourRamp

	Aplica �s classes da legenda as cores escolhidas no seletor de cores
	*/
	aplicaColourRamp: function(){
		if($i("listaColourRamp").value != ""){
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			var cores = $i("listaColourRamp").value;
			temp = function(){
				i3GEOF.legenda.aguarde.visibility = "hidden";
				i3GEOF.legenda.mostralegenda();
				i3GEOF.legenda.aposAlterarLegenda();
			};
			p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraclasse&opcao=aplicacoresrgb&ext="+i3GEO.parametros.mapexten+"&tema="+i3GEOF.legenda.tema;
			cp = new cpaint();
			cp.set_transfer_mode('POST');
			cp.set_response_type("JSON");
			cp.call(p,"foo",temp,"cores="+cores);
		}
	},
	/*
	Function: corj

	Abre a janela para o usu&aacute;rio selecionar uma cor interativamente
	*/
	corj: function(obj)
	{i3GEO.util.abreCor("",obj);},
	/*
	Function: modificaCor

	Modifica a cor de uma classe
	*/
	modificaCor: function(id){
		var obj = $i("tempCorLegenda");
		if(!obj){
			var obj = document.createElement("input");
			obj.id = "tempCorLegenda";
			obj.style.display = "none";
			obj.type = "text";
			obj.value = "";
			document.body.appendChild(obj);
			obj.onchange = function(){
				i3GEOF.legenda.aplicaNovaCor($i("tempCorLegenda").name);
			};
		}
		obj.name = id;
		i3GEO.util.abreCor("","tempCorLegenda");
	},
	aplicaNovaCor: function(id){
		if(i3GEOF.legenda.aguarde.visibility === "visible")
		{return;}
		i3GEOF.legenda.aguarde.visibility = "visible";
		var retorna = function(){
			i3GEOF.legenda.aposAlterarLegenda();
			i3GEOF.legenda.aguarde.visibility = "hidden";
			i3GEOF.legenda.mostralegenda();
		};
		i3GEO.php.aplicaCorClasseTema(retorna,i3GEOF.legenda.tema,id,$i("tempCorLegenda").value);
	},
	/*
	Function: mudaLegenda

	Altera a legenda conforme os valores existentes na tabela de propriedades (express&atilde;o e nome da classe)

	Veja:

	<ALTERACLASSE>
	*/
	mudaLegenda: function(){
		i3GEOF.legenda.aviso = false;
		if(i3GEOF.legenda.aguarde.visibility === "visible")
		{return;}
		i3GEOF.legenda.aguarde.visibility = "visible";
		try{
			var tabela = $i("i3GEOlegendalegenda"),
				trs = tabela.getElementsByTagName("tr"),
				nomes = [],
				exps = [],
				ids = [],
				t,
				nn,
				n,
				p,
				cp,
				temp,
				expn,
				re = new RegExp('"', "g");;
			for (t=0;t<trs.length;t++){
				if(trs[t].childNodes){
					nn = trs[t].childNodes;
					for (n=0;n<nn.length;n++){
						if(nn[n].childNodes){
							var isn = nn[n].getElementsByTagName("input");
							if (isn[0] != undefined){
								if(isn[0].name == "nome"){
									nomes.push(isn[0].value);
									temp = (isn[0].id).split("i3GEOlegendaid_");
									ids.push(temp[1]);
								}
								if(isn[0].name == "expressao"){
									expn = (isn[0].value).replace(re,'##');
									exps.push(expn);
								}
							}
						}
					}
				}
			}
			ids = ids.join(";");
			nomes = nomes.join(";");
			exps = exps.join(";");
			temp = function(){
 				i3GEOF.legenda.aguarde.visibility = "hidden";
				i3GEOF.legenda.mostralegenda();
				i3GEOF.legenda.aposAlterarLegenda();
 				i3GEOF.legenda.aguarde.visibility = "hidden";
			};
			p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraclasse&opcao=alteraclasses&ext="+i3GEO.parametros.mapexten;
			cp = new cpaint();
			cp.set_transfer_mode('POST');
			cp.set_response_type("JSON");
			cp.call(p,"alteraclassesPost",temp,"ids="+ids+"&nomes="+nomes+"&exps="+exps);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: alteraGeometria

	Altera o tipo de representa&ccedil;&atilde;o geom&eacute;trica dos elementos de um layer

	Veja:

	<ALTERACLASSE>
	*/
	alteraGeometriaTema: function(){
		if(i3GEOF.legenda.aguarde.visibility === "visible")
		{return;}
		i3GEOF.legenda.aguarde.visibility = "visible";
		var retorna = function(){
			i3GEOF.legenda.aposAlterarLegenda();
			i3GEOF.legenda.aguarde.visibility = "hidden";
			i3GEOF.legenda.mostralegenda();
		};
		var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraclasse&opcao=alterageometria&tema="+i3GEOF.legenda.tema+"&tipo="+$i("i3GEOlegentaTipoGeo").value,
			cp = new cpaint();
		cp.set_response_type("JSON");
		cp.call(p,"",retorna);
	},
	/*
	Function: adicionaConta

	Adiciona ao nome de cada classe o n&uacute;mero de ocorr&ecirc;ncias em cada uma

	Veja:

	<CONTAGEMCLASSE>
	*/
	adicionaConta: function(){
		if(i3GEOF.legenda.aguarde.visibility === "visible")
		{return;}
		i3GEOF.legenda.aguarde.visibility = "visible";
		var p = i3GEO.configura.locaplic+"/ferramentas/legenda/exec.php?g_sid="+i3GEO.configura.sid+"&funcao=contagemclasse"+"&tema="+i3GEOF.legenda.tema,
			cp = new cpaint();
		cp.set_response_type("JSON");
		cp.call(p,"contagemclasse",i3GEOF.legenda.montaLegenda);
		i3GEO.janela.tempoMsg("A contagem considera apenas os elementos vis&iacute;veis na abrang&ecirc;ncia do mapa");
	},
	/*
	Function: adicionaClasse

	Adiciona uma nova classe ao tema

	Veja:

	<ALTERACLASSE>
	*/
	adicionaClasse: function(){
		if(i3GEOF.legenda.aguarde.visibility === "visible")
		{return;}
		var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraclasse&opcao=adicionaclasse"+"&tema="+i3GEOF.legenda.tema+"&ext="+i3GEO.parametros.mapexten,
		cp = new cpaint();
		cp.set_response_type("JSON");
		cp.call(p,"alteraclasse",i3GEOF.legenda.mostralegenda);
	},
	/*
	Function: adicionaOpacidade

	Adiciona opacidade vari&aacute;vel em cada classe

	Veja:

	<ALTERACLASSE>
	*/
	adicionaOpacidade: function(){
		var retorna = function(){
			i3GEOF.legenda.aposAlterarLegenda();
			i3GEOF.legenda.aguarde.visibility = "hidden";
			i3GEOF.legenda.mostralegenda();
		};
		if(i3GEOF.legenda.aguarde.visibility === "visible")
		{return;}
		var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraclasse&opcao=adicionaopacidade"+"&tema="+i3GEOF.legenda.tema+"&ext="+i3GEO.parametros.mapexten,
		cp = new cpaint();
		cp.set_response_type("JSON");
		cp.call(p,"alteraclasse",retorna);
	},
	/*
	Function: paleta

	Gera as cores para as classes considerando um RGB inicial e um final

	Veja:

	<ALTERACORESCLASSES>
	*/
	paleta: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			var retornapaleta = function(){
					i3GEOF.legenda.aposAlterarLegenda();
					i3GEOF.legenda.aguarde.visibility = "hidden";
					i3GEOF.legenda.mostralegenda();
				},
				ci = $i("i3GEOlegendaacori").value,
				cf = $i("i3GEOlegendaacorf").value,
				cp = new cpaint(),
				p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraCoresClasses&tema="+i3GEOF.legenda.tema+"&cori="+ci+"&corf="+cf;
			cp.set_response_type("JSON");
			cp.call(p,"alteraCoresClasses",retornapaleta);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: inverteCores

	Inverte as cores utilizadas nos s&iacute;mbolos das classes

	Veja:

	<INVERTECORESCLASSES>
	*/
	inverteCores: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			var retornapaleta = function(){
					i3GEOF.legenda.aposAlterarLegenda();
					i3GEOF.legenda.aguarde.visibility = "hidden";
					i3GEOF.legenda.mostralegenda();
				},
				cp = new cpaint(),
				p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=inverteCoresClasses&tema="+i3GEOF.legenda.tema;
			cp.set_response_type("JSON");
			cp.call(p,"alteraCoresClasses",retornapaleta);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: calculaTamanho

	Muda o s&iacute;mbolo de cada classe aplicando tamanhos diferentes e lineares

	Veja:

	<CALCULATAMANHOCLASSES>
	*/
	calculaTamanho: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			var retornapaleta = function(){
					i3GEOF.legenda.aposAlterarLegenda();
					i3GEOF.legenda.aguarde.visibility = "hidden";
					i3GEOF.legenda.mostralegenda();
			},
			cp = new cpaint(),
			p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=calculaTamanhoClasses&tema="+i3GEOF.legenda.tema;
			cp.set_response_type("JSON");
			cp.call(p,"calculaTamanhoClasses",retornapaleta);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: excluilinhaf

	Exclui uma linha da tabela de edi&ccedil;&atilde;o de classes da legendda
	*/
	excluilinhaf: function(celula){
		var p = celula.parentNode.parentNode;
		do{
			p.removeChild(p.childNodes[0]);
		} while (p.childNodes.length > 0);
		p.parentNode.removeChild(p);
		i3GEOF.legenda.mudaLegenda();
	},
	/*
	Function: sobelinhaf

	Sobe uma linha na tabela de edi&ccedil;&atilde;o de classes da legendda
	*/
	sobelinhaf: function(idclasse){
		if(i3GEOF.legenda.aguarde.visibility === "visible")
		{return;}
		i3GEOF.legenda.aguarde.visibility = "visible";
		var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=ALTERACLASSE&opcao=sobeclasse&tema="+i3GEOF.legenda.tema+"&idclasse="+idclasse,
			cp = new cpaint(),
			temp = function(){
				i3GEOF.legenda.aguarde.visibility = "hidden";
				i3GEOF.legenda.mostralegenda();
			};
		cp.set_response_type("JSON");
		cp.call(p,"foo",temp);
	},
	/*
	Function: descelinhaf

	Desce uma linha na tabela de edi&ccedil;&atilde;o de classes da legendda
	*/
	descelinhaf: function(idclasse){
		if(i3GEOF.legenda.aguarde.visibility === "visible")
		{return;}
		i3GEOF.legenda.aguarde.visibility = "visible";
		var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=ALTERACLASSE&opcao=desceclasse&tema="+i3GEOF.legenda.tema+"&idclasse="+idclasse,
			cp = new cpaint(),
			temp = function(){
				i3GEOF.legenda.aguarde.visibility = "hidden";
				i3GEOF.legenda.mostralegenda();
			};;
		cp.set_response_type("JSON");
		cp.call(p,"foo",temp);
	},
	/*
	Function: editaSimbolo

	Abre o editor de s&iacute;mbolos

	Veja:

	<EDITASIMBOLO>
	*/
	editaSimbolo: function(id){
		try{
			$i("i3GEOlegendaguia1obj").style.display="none";
			$i("i3GEOlegendaguia3obj").style.display="block";
			id = id.split("-");
			var p,cp;
			i3GEOF.legenda.classe = id[1];
			i3GEOF.legenda.estilo = 0;
			p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=editasimbolo&opcao=pegaparametros&tema="+i3GEOF.legenda.tema+"&classe="+id[1];
			cp = new cpaint();
			cp.set_response_type("JSON");
			cp.call(p,"pegaParametrosMapa",i3GEOF.legenda.montaEditor);
			i3GEOF.legenda.aguarde.visibility = "hidden";
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: simbU

	Altera a leganda do tema para o tipo s&iacute;mbolo &uacute;nico

	Veja:

	<ALTERACLASSE>
	*/
	simbU: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraclasse&tema="+i3GEOF.legenda.tema+"&opcao=simbolounico&ext="+i3GEO.parametros.mapexten,
				cp = new cpaint(),
				fim = function(){
					i3GEOF.legenda.aposAlterarLegenda();
					i3GEOF.legenda.aguarde.visibility = "hidden";
				};
			cp.set_response_type("JSON");
			cp.call(p,"alteraclasse",fim);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: valorU

	Altera a leganda do tema para o tipo valor &uacute;nico

	Veja:

	<ALTERACLASSE>
	*/
	valorU: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			var item = $i("i3GEOlegendaSelItem").value,
				p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraclasse&tema="+i3GEOF.legenda.tema+"&item="+item+"&opcao=valorunico&ignorar="+$i("i3GEOlegendaignorar").value,
				cp = new cpaint(),
				fim = function(){
					i3GEOF.legenda.aposAlterarLegenda();
					i3GEOF.legenda.aguarde.visibility = "hidden";
				};
			if($i("i3GEOFlegendaaplicaextent").checked === true){
				p += "&ext="+i3GEO.parametros.mapexten;
			}
			else{
				p += "&ext="+i3GEO.parametros.extentTotal;
			}
			if (item == "")
			{i3GEO.janela.tempoMsg("Selecione um item!");return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			cp.set_response_type("JSON");
			//window.parent.g_operacao = "outras"
			cp.call(p,"alteraclasse",fim);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: valorC

	Altera a leganda do tema com um n&uacute;mero espec&iacute;fico de classes

	Veja:

	<ALTERACLASSE>
	*/
	valorC: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			var item = $i("i3GEOlegendaSelItem").value,
				nclasses = $i("i3GEOlegendanclasses").value,
				p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraclasse&nclasses="+nclasses+"&tema="+i3GEOF.legenda.tema+"&item="+item+"&opcao=intervalosiguais&ignorar="+$i("i3GEOlegendaignorar").value+"&ext="+i3GEO.parametros.mapexten,
				cp = new cpaint(),
				fim = function(){
					i3GEOF.legenda.aposAlterarLegenda();
					i3GEOF.legenda.aguarde.visibility = "hidden";
				};
			if (item == "")
			{i3GEO.janela.tempoMsg("Selecione um item!");return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			cp.set_response_type("JSON");
			cp.call(p,"alteraclasse",fim);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: valorQ

	Altera a leganda do tema claculando as classes pelo m&eacute;todo quartil

	Veja:

	<ALTERACLASSE>
	*/
	valorQ: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			var item = $i("i3GEOlegendaSelItem").value,
				p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alteraclasse&tema="+i3GEOF.legenda.tema+"&item="+item+"&opcao=quartis&ignorar="+$i("i3GEOlegendaignorar").value+"&ext="+i3GEO.parametros.mapexten+"&tipoLegenda="+$i("estiloClassesQuartis").value,
				cp = new cpaint();
				fim = function(){
					i3GEOF.legenda.aposAlterarLegenda();
					i3GEOF.legenda.aguarde.visibility = "hidden";
				};
			if (item == "")
			{i3GEO.janela.tempoMsg("Selecione um item!");return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			cp.set_response_type("JSON");
			cp.call(p,"alteraclasse",fim);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: representacao

	Altera o tipo de representa&ccedil;&atilde;o do tema (linear ou poligonoal)

	Veja:

	<ALTERAREPRESENTACAO>

	*/
	representacao: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=alterarepresentacao&tema="+i3GEOF.legenda.tema,
				cp = new cpaint(),
				fim = function(){
					i3GEOF.legenda.aposAlterarLegenda();
					i3GEOF.legenda.aguarde.visibility = "hidden";
				};
			i3GEOF.legenda.aguarde.visibility = "visible";
			cp.set_response_type("JSON");
			cp.call(p,"alteraRepresentacao",fim);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: montaEditor

	Monta o editor de s&iacute;mbolos quando o usu&aacute;rio clica em um s&iacute;mbolo na legenda
	*/
	montaEditor: function(retorno){
		try{
			i3GEO.util.comboItens(
				"i3GEOlegendaSelItemLabel",
				i3GEOF.legenda.tema,
				function(retorno){
					if($i("i3GEOlegendaitensLabel"))
			 		{$i("i3GEOlegendaitensLabel").innerHTML = retorno.dados;}
				},
				"i3GEOlegendaitensLabel"
			);
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			if (retorno.data != undefined){
				var l,i,sct,combo,botoes,n;
				retorno = retorno.data;
				i3GEOF.legenda.estilos = retorno.split("|");
				combo = "<select id='i3GEOlegendaestilos' onchange=i3GEOF.legenda.mostraEstilo(this.value)>";
				n = i3GEOF.legenda.estilos.length;
				for (i=0;i<n;i++){
					l = i3GEOF.legenda.estilos[i].split("#");
					sct = "<option value="+l[1]+"  />"+l[1]+"</option>";
					combo += sct;
				}
				combo += "</select>";
				botoes = "<input id=i3GEOlegendabotao11 class=executar size=10 type=buttom value='excluir' />";
				botoes += "&nbsp;<input id=i3GEOlegendabotao12 class=executar size=14 type=buttom value='adicionar' />";
				botoes += "&nbsp;<input id=i3GEOlegendabotao13 class=executar size=8 type=buttom value='sobe' />";
				botoes += "&nbsp;<input id=i3GEOlegendabotao14 class=executar size=8 type=buttom value='desce' />";
				$i("i3GEOlegendacomboestilos").innerHTML = "<table class='lista5'><tr><td><span class=paragrafo >Estilo em edi&ccedil;&atilde;o:</span></td><td>"+combo+"</td><td>"+botoes+"</td></tr></table>&nbsp;(p&oacute;s adicionar ou excluir, aplique a altera&ccedil;&atilde;o)<br><br>";
				new YAHOO.widget.Button(
					"i3GEOlegendabotao11",{onclick:{fn: function(){
						try{
							if(i3GEOF.legenda.aguarde.visibility === "visible")
							{return;}
							i3GEOF.legenda.aguarde.visibility = "visible";
							var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=editasimbolo&opcao=excluiestilo&tema="+i3GEOF.legenda.tema+"&classe="+i3GEOF.legenda.classe+"&estilo="+i3GEOF.legenda.estilo,
								cp = new cpaint();
							cp.set_response_type("JSON");
							cp.call(p,"editasimbolo",i3GEOF.legenda.reMontaEditor);
						}
						catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
					}}}
				);
				new YAHOO.widget.Button(
					"i3GEOlegendabotao12",
					{onclick:{fn: function(){
						try{
							if(i3GEOF.legenda.aguarde.visibility === "visible")
							{return;}
							i3GEOF.legenda.aguarde.visibility = "visible";
							var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=editasimbolo&opcao=adicionaestilo&tema="+i3GEOF.legenda.tema+"&classe="+i3GEOF.legenda.classe+"&estilo="+i3GEOF.legenda.estilo,
								cp = new cpaint();
							cp.set_response_type("JSON");
							cp.call(p,"editasimbolo",i3GEOF.legenda.reMontaEditor);
						}
						catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
					}}}
				);
				new YAHOO.widget.Button(
					"i3GEOlegendabotao13",
					{onclick:{fn: function(){
						try{
							if(i3GEOF.legenda.aguarde.visibility === "visible")
							{return;}
							i3GEOF.legenda.aguarde.visibility = "visible";
							var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=editasimbolo&opcao=sobeestilo&tema="+i3GEOF.legenda.tema+"&classe="+i3GEOF.legenda.classe+"&estilo="+i3GEOF.legenda.estilo,
								cp = new cpaint();
							cp.set_response_type("JSON");
							cp.call(p,"editasimbolo",i3GEOF.legenda.reMontaEditor);
						}
						catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
					}}}
				);
				new YAHOO.widget.Button(
					"i3GEOlegendabotao14",
					{onclick:{fn: function(){
						try{
							if(i3GEOF.legenda.aguarde.visibility === "visible")
							{return;}
							i3GEOF.legenda.aguarde.visibility = "visible";
							var p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=editasimbolo&opcao=desceestilo&tema="+i3GEOF.legenda.tema+"&classe="+i3GEOF.legenda.classe+"&estilo="+i3GEOF.legenda.estilo,
								cp = new cpaint();
							cp.set_response_type("JSON");
							cp.call(p,"editasimbolo",i3GEOF.legenda.reMontaEditor);
						}
						catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
					}}}
				);
				i3GEOF.legenda.aguarde.visibility = "hidden";
				i3GEOF.legenda.mostraEstilo(0);
			}
			else{
				$i("i3GEOlegendacomboestilos").innerHTML = "<p style=color:red >Ocorreu um erro<br>";
				i3GEOF.legenda.aguarde.visibility = "hidden";
			}
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: mostraEstilo

	Mostra as propriedades de um estilo de um s&iacute;mbolo
	*/
	mostraEstilo: function(e){
		i3GEOF.legenda.aguarde.visibility = "visible";
		try{
			var linha,tipoLayer,d,p,cp;
			i3GEOF.legenda.estilo = e; //esta e uma variavel global
			linha = i3GEOF.legenda.estilos[i3GEOF.legenda.estilo];
			linha = linha.split("#");
			tipoLayer = linha[0];
			d = "<table class=lista6 ><tr><td style='text-align:left;'>Cor do contorno:</td><td>" +
			$inputText("","","i3GEOlegendaoutlinecolor","",12,linha[2]) +
			"</td><td><img style=cursor:pointer src='"+i3GEO.configura.locaplic+"/imagens/aquarela.gif' onclick=\"i3GEOF.legenda.corj('i3GEOlegendaoutlinecolor')\" /></td></tr>"+
			"<tr><td style='text-align:left;'>Cor do fundo:</td><td>" +
			$inputText("","","i3GEOlegendabackgroundcolor","",12,linha[3]) +
			"</td><td><img style=cursor:pointer src='"+i3GEO.configura.locaplic+"/imagens/aquarela.gif' onclick=\"i3GEOF.legenda.corj('i3GEOlegendabackgroundcolor')\" /></td></tr>"+
			"<tr><td style='text-align:left;'>Cor da frente:</td><td>"+
			$inputText("","","i3GEOlegendacolor","",12,linha[4]) +
			"</td><td><img style=cursor:pointer src='"+i3GEO.configura.locaplic+"/imagens/aquarela.gif' onclick=\"i3GEOF.legenda.corj('i3GEOlegendacolor')\" /></td></tr>"+
			"<tr><td style='text-align:left;'>Tamanho/espa&ccedil;amento:</td><td>"+
			$inputText("","","i3GEOlegendasizes","",12,linha[6]) +
			"</td><td></td></tr>" +
			"<tr><td style='text-align:left;'>Espessura:</td><td>"+
			$inputText("","","i3GEOlegendawidth","",12,linha[8]) +
			"</td><td></td></tr>" +
			"<tr><td style='text-align:left;'>Padr&atilde;o de repeti&ccedil;&atilde;o:</td><td>"+
			$inputText("","","i3GEOlegendapattern","",12,linha[9]) +
			"</td><td></td></tr>" +
			"<tr><td style='text-align:left;'>Opacidade:</td><td>"+
			$inputText("","","i3GEOlegendaopacidade","",3,linha[7]) +
			"</td><td></td></tr>" +
			"<tr><td style='text-align:left;'>�ngulo:</td><td>"+
			$inputText("","","i3GEOlegendaangulo","",5,linha[10]) +
			"</td><td></td></tr>" +
			"<tr><td style='text-align:left;'>S&iacute;mbolo:</td><td>"+
			$inputText("","","i3GEOlegendasymbolname","",12,linha[5]) +
			"</td><td></td></tr></table>";
			$i("i3GEOlegendacomboestilos").innerHTML += d;
			p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=editasimbolo&tipo="+tipoLayer+"&opcao=listaSimbolos&onclick=i3GEOF.legenda.aplicaSimbolo(this)";
			cp = new cpaint();
			cp.set_response_type("JSON");
			cp.call(p,"editasimbolo",i3GEOF.legenda.listaSimbolos);
			i3GEOF.legenda.aguarde.visibility = "hidden";
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: listaSimbolos

	Monta a lista de s&iacute;mbolos com imagem
	*/
	listaSimbolos: function(retorno){
		i3GEOF.legenda.aguarde.visibility = "visible";
		try{
			if (retorno.data != undefined){
				retorno = retorno.data;
				$i("i3GEOlegendasimbolos").innerHTML = "<br>Lista de s&iacute;mbolos. Clique para selecionar:<br><br>"+retorno;
			}
			else
			{$i("i3GEOlegendasimbolos").innerHTML = "<p style=color:red >Ocorreu um erro<br>";}
			i3GEOF.legenda.aguarde.visibility = "hidden";
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: aplicaSimbolo

	Muda o valor do campo com o c&oacute;digo do s&iacute;mbolo escolhido
	*/
	aplicaSimbolo: function(s)
	{$i("i3GEOlegendasymbolname").value = s.title;},
	/*
	Function: aplicaEstilo

	Aplica ao estilo as propriedades definidas

	Veja:

	<EDITASIMBOLO>
	*/
	aplicaEstilo: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			var outlinecolor = $i("i3GEOlegendaoutlinecolor").value,
				backgroundcolor = $i("i3GEOlegendabackgroundcolor").value,
				color = $i("i3GEOlegendacolor").value,
				symbolname = $i("i3GEOlegendasymbolname").value,
				simbolos = $i("i3GEOlegendasimbolos").getElementsByTagName("img"),
				valido = "nao",
				n = simbolos.length,
				size = $i("i3GEOlegendasizes").value,
				width = $i("i3GEOlegendawidth").value,
				pattern = $i("i3GEOlegendapattern").value,
				opacidade = $i("i3GEOlegendaopacidade").value,
				angle = $i("i3GEOlegendaangulo").value,
				i,p,cp,fim;
			for (i=0;i<n;i++){
				if(simbolos[i].title == symbolname || symbolname == i)
				{valido = "sim";}
			}
			if(valido === "nao"){
				//i3GEO.janela.tempoMsg("Nome do simbolo nao encontrado");
				//i3GEOF.legenda.aguarde.visibility = "hidden";
				//return;
			}
			p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=editasimbolo&opcao=aplica&tema="+i3GEOF.legenda.tema+"&classe="+i3GEOF.legenda.classe+"&estilo="+i3GEOF.legenda.estilo+"&outlinecolor="+outlinecolor+"&backgroundcolor="+backgroundcolor+"&color="+color+"&symbolname="+symbolname+"&width="+width+"&pattern="+pattern+"&size="+size+"&opacidade="+opacidade+"&angle="+angle;
			cp = new cpaint();
			fim = function(){
				i3GEOF.legenda.aposAlterarLegenda();
				i3GEOF.legenda.aguarde.visibility = "hidden";
			};
			//cp.set_debug(2)
			cp.set_response_type("JSON");
			cp.call(p,"editasimbolo",fim);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: reMontaEditor

	Gera novamente o editor de s&iacute;mbolo ap&oacute;s ter sido feita alguma altera&ccedil;&atilde;o nos estilos
	*/
	reMontaEditor: function(){
		var id = i3GEOF.legenda.tema+"-"+i3GEOF.legenda.classe;
		i3GEOF.legenda.editaSimbolo(id);
	},
	/*
	Function: mostraGrafico

	Mostra um gr&aacute;fico com a contegem de elementos em caada classe

	Veja:

	<CONTAGEMCLASSE>
	*/
	mostraGrafico: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			var monta = function(retorno){
					if (retorno.data[0].proc == "") //o layer nao deve ser raster
					{
						var ins = [],i,re,t;
						ins.push("<p class='paragrafo' ><input type=button value='Gr&aacute;fico de pizza' id=i3GEOlegendaGraficoPizza /></p>");
						ins.push("<p class='paragrafo' >N&uacute;mero de ocorr&ecirc;ncias em cada classe (n)</p>");
						ins.push("<table width=100% >");
						i3GEOF.legenda.dadosGrafico = ["n;x"];
						if(retorno.data.length < 2){
							i3GEO.janela.tempoMsg("O tema deve conter pelo menos 2 classes");
							i3GEOF.legenda.aguarde.visibility = "hidden";
							return;
						}
						else
						{i3GEO.guias.mostraGuiaFerramenta("i3GEOlegendaguia4","i3GEOlegendaguia");}
						for (i=0;i<retorno.data.length;i++){
							id = retorno.data[i].tema+"-"+retorno.data[i].idclasse; //layer+indice da classe
							re = new RegExp("'", "g");
							exp = (retorno.data[i].expressao).replace(re,'"');
							ins.push("<tr><td style='text-align:left;border-bottom:0 none white' >"+retorno.data[i].nomeclasse+"</td></tr>");
							t = (retorno.data[i].nreg * 100)/retorno.data[i].totalreg;
							ins.push("<tr><td style=text-align:left ><img height=15px width="+t+"% src='"+retorno.data[i].imagem+"' /></td></tr>");
							i3GEOF.legenda.dadosGrafico.push(retorno.data[i].nomeclasse+";"+retorno.data[i].nreg);
						}
						ins.push("</table><br>");
						$i("i3GEOlegendaguia4obj").innerHTML = ins.join("");
					}
					else
					{$i("i3GEOlegendaguia4obj").innerHTML = "<p style=color:red >Ocorreu um erro<br>";}
					i3GEOF.legenda.aguarde.visibility = "hidden";
					new YAHOO.widget.Button(
						"i3GEOlegendaGraficoPizza",
						{onclick:{fn: function(){
								var js = i3GEO.configura.locaplic+"/ferramentas/graficointerativo/index.js.php";
								i3GEO.util.scriptTag(js,"i3GEOF.legenda.iniciaGraficoPizza()","i3GEOF.graficointerativo_script");
							}
						}}
					);
					$i("i3GEOlegendaGraficoPizza-button").style.width = "200px";
				},
			p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=contagemclasse&tema="+i3GEOF.legenda.tema,
			cp = new cpaint();
			//cp.set_debug(2)
			cp.set_response_type("JSON");
			cp.call(p,"cocontagemclasse",monta);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	iniciaGraficoPizza: function(){
		var dados = {
			"attributes":{"id":""},
			"data":{
				"dados":i3GEOF.legenda.dadosGrafico
			}
		};
		i3GEOF.graficointerativo.tipo = "pizza2d";
		i3GEOF.graficointerativo.criaJanelaFlutuante(dados);
	},
	/*
	Function: aplicaProcessos

	Aplica processos de ajuste em imagens de sat&eacute;lite

	Veja:

	<APLICAPROCESSOS>
	*/
	aplicaProcessos: function(){
		try{
			if(i3GEOF.legenda.aguarde.visibility === "visible")
			{return;}
			i3GEOF.legenda.aguarde.visibility = "visible";
			var lista = [],ipt,i,p,cp,temp;
			if ($i("i3GEOlegendaprocessos").innerHTML != ""){
				ipt = $i("i3GEOlegendaprocessos").getElementsByTagName("input");
				for (i=0;i<ipt.length; i++){
					if (ipt[i].value != ""){
						lista.push(ipt[i].value);
					}
				}
			}
			lista = lista.join("|");
			temp = function(){
				i3GEOF.legenda.aguarde.visibility = "hidden";
				i3GEOF.legenda.mostralegenda();
				i3GEOF.legenda.aposAlterarLegenda();
			};
			p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=aplicaProcessos&lista="+lista+"&tema="+i3GEOF.legenda.tema;
			cp = new cpaint();
			cp.set_response_type("JSON");
			cp.call(p,"aplicaProcessos",temp);
		}
		catch(e){i3GEO.janela.tempoMsg("Erro: "+ e);i3GEOF.legenda.aguarde.visibility = "hidden";}
	},
	/*
	Function: adicionaProcesso

	Adiciona um novo processo na lista de processos
	*/
	adicionaProcesso: function(s){
		$i("i3GEOlegendaprocessos").innerHTML += $inputText("","","","",50,s.value);
	}
};
