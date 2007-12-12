<?php
/*
Title: Vari�veis de inicializa��o ms_configura.php

Nesse programa PHP s�o definidas as vari�veis globais principais necess�rias ao funcionamento do I3Geo do lado do servidor web.

O ms_configura � inclu�do em v�rios programas do i3Geo e os valores das vari�veis devem ser editados 
caso a instala��o do i3geo tenha sido feita em um diret�rio diferente do padr�o.
No windows o diret�rio padr�o � c:\ms4w\apache\htdocs\i3geo e no linux � /opt/www/html/i3geo

Para verificar a instala��o do i3geo utilize o programa i3geo/testainstal.php, que pode fornecer algumas dicas
caso estejam ocorrendo problemas na inicialliza��o.

As vari�veis de configura��o s�o definidas em blocos diferentes conforme o sistema operacional (linux ou windows).

O ms_criamapa.php carrega o ms_configura.php e armazena a maior parte das vari�veis na se��o. Algumas vari�veis
s�o tamb�m fornecidas para o cliente (navegador) na inicializa��o do mapa e ficam dispon�veis em vari�veis javascript.

File: i3geo/ms_configura.php

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
	Variable: $mensagemInicia
	
	Mensagem de inicializa��o mostrada pelo programa ms_criamapa.php
*/
$mensagemInicia = "I3Geo vers�o 4.0";
/*
	Variable: $tituloInstituicao
	
	Nome que ser� utilizado em alguns cab�alhos e t�tulos de p�ginas
*/
$tituloInstituicao = "MMA - Ministerio do Meio Ambiente";
if (strtoupper(substr(PHP_OS, 0, 3) == 'WIN'))
{
	/*
	Variable: $navegadoresLocais
	
	Ip dos usuarios que podem navegar no servidor para acessar arquivos de dados geogr�ficos.
	
	O i3geo possibilita que os usu�rios acessem dados geogr�ficos no servidor diretamente, navegando pelo sistema de arquivos.
	Isso possibilita o acesso aos dados mesmo que n�o constem na �rvore de temas definida em menutemas/menutemas.xml
	Por seguran�a, essa funcionalidade s� � ativada para n�meros IP espec�ficos, definidos nessa vari�vel.
	
	Para cada IP registrado, deve-se definir os diret�rios que ser�o acess�veis, conforme mostrado abaixo.
	
	A valida��o do IP � feita com javascript, na inicializa��o do mapa, a vari�vel javascript objmapa.navegacaoDir � definida como sim (caso $navegadoresLocais for diferente de "") ou nao.
	
	Se objmapa.navegacaoDir for igual a "sim", ou seja, $navegadoresLocais � diferente de "", na guia de adi��o de temas da interface HTML, ser� mostrada a op��o de navega��o. Portanto, se vc n�o quiser que essa op��o seja ativada, mantenha essa vari�vel igual a
	
	$navegadoresLocais = "";
	
	Com a op��o ativa na interface do mapa, o ip do cliente � verificado e caso estiver registrado no array, a navega��o pelos diret�rios do servidor ser� permitida. Para mais detalhes, veja a ferramenta i3geo/ferramentas/navegacaodir
	  
	*/
	$navegadoresLocais = array(
							array(
							"ip"=>"127.0.0.1",
							"drives"=>array(
										array("caminho"=>"c:/","nome"=>"c"),
										array("caminho"=>"d:/","nome"=>"d")
										)
							)
						);
	/*
	Variable: $editores
	
	Ip dos usuarios que podem administrar o i3geo via navegador.
	
	Separe os ips por v�rgula. Os usu�rios que tiverem seus ips listados, poder�o editar o diret�rio i3geo/temas, desde que os mesmos tenham direito de leitura e escrita nesse diret�rio.
	*/
	$editores = array("127.0.0.1");
	/*
	Variable: $dir_tmp
	
	Caminho completo do diret�rio tempor�rio utilizado pelo mapserver.
	*/
	$dir_tmp = "c:/ms4w/tmp/ms_tmp";
	/*
	Variable: $locaplic
	
	Caminho completo onde fica o I3Geo
	*/
	$locaplic = "c:/ms4w/apache/htdocs/i3geo";
	/*
	Variable: $temasdir
	
	Caminho completo do diret�rio onde ficam os arquivos .map correspondentes aos temas dispon�veis
	*/
	$temasdir = $locaplic."/temas"; //"c:/ms4w/apache/htdocs/i3geo/temas";
	/*
	Variable: $temasaplic
	
	Caminho completo onde ficam os arquivos .map espec�ficos do I3Geo
	*/
	$temasaplic = $locaplic."/aplicmap";//"c:\ms4w\apache\htdocs\i3geo\aplicmap";
	/*
	Variable: $locmapserv
	
	Localiza��o do execut�vel do Mapserver conforme deve ser acrescentado a URL ap�s o nome do host.
	
	Essa vari�vel � necess�ria em processos que utilizam o mapserver no modo CGI.
	
	Por exemplo, se o endere�o for http://localhost/cgi-bin/mapserv.exe, a vari�vel dever� conter apenas /cgi-bin/mapserv.exe
	*/
	$locmapserv = "/cgi-bin/mapserv.exe";
	/*
	Variable: $locsistemas
	
	Onde fica o xml que ser� utilizado para complementar a lista de temas dispon�veis na �rvore de adi��o de temas.
	
	Se for "" n�o ser� feita nenhuma inclus�o.
	
	Com base no arquivo xml � montada uma �rvore de op��es que � adicionada � arvore de temas mostrada na guia "Adiciona" do i3geo.
	
	Por meio dessa nova �rvore pode-se disparar programas PHP que executam opera��es especiais para a montagem de uma nova camada a ser adicionada ao mapa.
	
	Veja a documenta��o espec�fica do arquivo sistemas.xml para maiores detalhes.
	*/
	$locsistemas = "http://localhost/i3geo/menutemas/sistemas.xml";
	/*
	Variable: $locidentifica 
	
	Onde fica o xml que ser� utilizado para complementar a lista de temas disppon�veis na ferramenta de identifica��o.
	
	Se for "" n�o ser� feita nenhuma inclus�o.
	
	Com base no arquivo xml � montada uma lista de op��es que � adicionada � lista de temas mostrada ferramenta de identifica��o de elementos no mapa.
	
	Por meio dessa lista pode-se disparar programas PHP que executam opera��es especiais para a obten��o de dados com base em um par de coordenadas xy.
	
	Veja a documenta��o espec�fica do arquivo identifica.xml para maiores detalhes.
	*/
	$locidentifica = "../../menutemas/identifica.xml";
	/*
	Variable: $locmapas 
	
	Onde fica o xml, para preencher a guia mapas.
	
	Se for vazio a guia n�o ser� mostrada no mapa.
	
	A guia "Mapas" mostra uma lista de links que permitem abrir mapas espec�ficos. Essa lista � utilizada tamb�m pela vers�o mobile do i3geo.
	
	Veja a documenta��o espec�fica do arquivo mapas.xml para maiores detalhes.
	*/
	$locmapas = "http://localhost/i3geo/menutemas/mapas.xml";
	/*
	Variable: $R_path
	
	Onde esta o executavel do software R
	
	O R � um pacote estat�stico utilizado pelo I3Geo para gera��o de gr�ficos e an�lises estat�sticas
	Se vc n�o possui o R instalado, comente a linha abaixo
	*/
	$R_path = "c:/r/win/bin/R.exe";
	/*
	Variable: $postgis_con
	
	Depreciado - n�o � mais necess�rio na vers�o 5.x do Mapserver
	
	string de conex�o com o banco de dados postgis utilizada para realliza��o de c�lculos
	
	se n�o existir, deixe em branco
	*/
	$postgis_con = "";
	/*
	Variable: $srid_area
	
	Depreciado - n�o � mais necess�rio na vers�o 5.x do Mapserver
	
	srid utilizado nos c�lculos que exigem proje��o equivalente
	*/
	$srid_area = 1;
	/*
	Variable: $postgis_mapa
	
	String de conex�o para acesso aos dados (opcional).
	
	Com o uso opcional dessa vari�vel � poss�vel esconder a string de conex�o com o banco de dados. O Mapserver
	n�o permite esconder essa string, por isso, no i3geo, foi implementado um esquema de substitui��o.
	Toda vez que um objeto "map" � criado via PHP Mapscript, a string de conex�o � substitu�da de " " para o valor de $postgis_mapa.
	Se n�o for desejado a substitui��o, deixe essa vari�vel em branco.
	Se vc especificar essa vari�vel, o mapa ser� for�ado a recusar o modo de opera��o CGI.
	
	Para mais detalhes veja a fun��o substituiCon em classesphp/funcoes_gerais.php
	*/
	$postgis_mapa = ""; //"user=geodados password=geodados dbname=geodados host=10.1.1.36 port=5432";
	/*
	Variable: $menutemas
	
	Array com a lista de arquivos xml que ser�o incluidos na guia de adi��o de temas. Se for "", ser� utilizado o arquivo default menutemas/menutemas.xml.
	
	Esse xml define a lista de temas que ser�o mostrados na guia "Adiciona".
	
	Para mais detalhes veja a documenta��o espec�fica do arquivo menutemas/menutemas.xml
	
	Example:

	$menutemas = array(
		array("idmenu"=>1,"arquivo"=>"http://10.1.1.34/i3geo/menutemas/menutemas.xml"),
		array("idmenu"=>2,"arquivo"=>"http://localhost/i3geo/menutemas/menutemas.xml")
		);
	*/
	$menutemas = "";
	/*
	Variable: $utilizacgi
	
	Vari�vel indicando se o desenho do corpo do mapa ser� baseado no modo cgi.
	
	Por default, o mapserver desenha o mapa via php, por�m, pode-se alterar o modo de desenho.
	
	No modo normal, a imagem do mapa � gerada e armazenada no diret�rio ms_tmp. Ap�s a gera��o da imagem 
	o endere�o do arquivo � retornado ao mapa (retorno via Ajax) e o javascript se encarrega de alterar o
	endere�o da imagem no navegador. Com o uso do CGI a imagem n�o � gerada, sendo repassado ao navegador
	o endere�o do cgi acrescentado do nome do mapfile, fazendo com que a imagem seja retornada diretamente.
	
	Em alguns casos o uso do cgi torna a aplica��o mais r�pida.
	*/
	$utilizacgi = "sim";
	/*
	 Variable: $atlasxml
	 
	 Indica o nome do arquivo xml que ser� utilizado na interface Atlas do i3geo.
	 
	 Pode ser utilizado o caminho relativo, tendo como base i3geo/diretorio
	*/
	$atlasxml = "../menutemas/atlas.xml";
}
else //se for linux
{
	$editores = array("");
	$dir_tmp = "/var/tmp/ms_tmp";
	$temasdir = "/opt/www/html/i3geo/temas";
	$temasaplic = "/opt/www/html/i3geo/aplicmap";
	$locmapserv = "/cgi-bin/mapserv";
	$locaplic = "/opt/www/html/i3geo";
	$locsistemas= "http://mapas.mma.gov.br/i3geo/menutemas/sistemas.xml";
	$locidentifica = "http://mapas.mma.gov.br/i3geo/menutemas/identifica.xml";
	$locmapas = "http://mapas.mma.gov.br/abremapa.php?id=xml";
	$R_path = "R";//se vc n�o instalou o R no seu servidor, tente o endere�o $R_path = $locaplic."/pacotes/r/linux/r";
	$postgis_con = "";
	$srid_area = 1;
	$postgis_mapa = "";
	/*
	$menutemas = array(
		array("idmenu"=>1,"arquivo"=>"http://mapas.mma.gov.br/i3geo/menutemas/menutemas.xml")
		);
	*/
	$menutemas = "";
	$utilizacgi = "sim";
	$atlasxml = "../menutemas/atlas.xml";
}
?>
