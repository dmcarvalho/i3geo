<?php
/*
Title: Inicializa o I3Geo via URL ms_criamapa.php

Cria os diret�rios tempor�rios para o i3Geo e o mapfile que ser� utilizado no mapa. Esse � o programa principal de inicializa��o, podendo ser chamado diretamente pelo navegador web.

Com o uso de par�metros espec�ficos � poss�vel alterar o mapa padr�o criado no processo de inicializa��o, como por exemplo, adicionando-se novas camadas ou modificando-se a abrang�ncia espacial do mapa.

A inicializa��o padr�o utiliza uma interface HTML com todas as funcionalidades existentes, por�m, � poss�vel escolher outro HTML para a apresenta��o do mapa, permitindo a cria��o de mapas com uma interface customizada.

Os par�metros podem ser utilizados na chamada do i3geo via navegador, p.e.,

http://localhost/i3geo/ms_criamapa.php?temasa=estadosl

A ordem dos par�metros n�o � importante, mas o primeiro deve ser precedido de "?". Os demais par�metros devem ser acrescentados sempre precedidos de "&", p.e.,

http://localhost/i3geo/ms_criamapa.php?temasa=estadosl bioma&layers=estadosl bioma

Caso a inicializa��o do i3geo ocorra por um outro programa PHP, o ms_criamapa.php deve ser executado via include. Nesse caso, os par�metros devem ser especificados como vari�veis, p.e.,

$temasa=bioma;
include("ms_criamapa.php");

Link:

http://localhost/i3geo/ms_criamapa.php

Arquivo:

i3geo/ms_criamapa.php

Licenca:

GPL2

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

Parametro: base

arquivo mapfile que servir� de base para a cria��o do mapa.Por default, s�o utilizados os arquivos aplicmap/geral1.map (para linux) ou aplicmap/geral1windows.map (para windows).

Parametro: temasa

lista, separada por espa�os, com os nomes dos arquivos map que ser�o adicionados ao mapa. Se o arquivo map n�o estiver no diret�rio i3geo/temas, o nome deve incluir o caminho completo no servidor. O arquivo map pode conter mais de um layer pois todos os existentes ser�o adicionados ao mapa. Por default, todos os layers encontrados nos mapfiles s�o adicionados ao mapa com o status de desenho em OFF.

Parametro: layers

lista, separada por espa�os, com os nomes dos layers que ser�o ligados. A lista deve conter os nomes dos layers e n�o os nomes dos mapfiles acrescentados ao mapa. Por exemplo, ao adicionar com "temasa" um mapfile chamado "transporte" que contenha os layers "estradas" e "ferrovias" os dois layers ser�o adicionados ao mapa. Para que esses dois layers fiquem vis�veis no mapa deve-se utilizar &layers=estradas ferrovias.

Parametro: mapext

extensao geografica que ser� utilizada. Por padr�o, a extens�o geogr�fica � definida para abranger o Brasil todo. Para alterar o padr�o deve-se utilizar o par�metro mapext para especificar a nova abrang�ncia. Essa abrang�ncia deve ser definida em coordenadas no formato d�cimos de grau e na proje��o geogr�fica. Exemplo: &mapext=-54 -30 -50 -12. Observe que a ordem dos valores s�o xmin ymin xmax ymax

Parametro: executa

programa ou fun��o em php que ser� executado via include. O include � feito no final do processo de inicializa��o quando a vari�vel $tmpfname j� est� definida. Essa vari�vel guarda o nome do arquivo mapfile que ser� utilizado pelo i3geo.

Parametro: interface

nome da interface que ser� utilizada para abrir o mapa. As interfaces s�o arquivos HTML que podem estar no diret�rio aplicmap. Por default, utiliza-se o geral.htm. Vc pode copiar esse html e alter�-lo para customizar o mapa. Para chamar o html customizado, utilize ms_criamapa.php?interface=meumapa.htm

Parametro: perfil

perfil utilizado para restringir os menus de temas. O menu com os temas mostrados no i3geo s�o definidos no arquivo menutemas/menutemas.xml. Nesse arquivo,pode-se utilizar um elemento <PERFIL></PERFIL> indicando que o tema apenas ser� mostrado em perfis espec�ficos. Por exempo: ms_criamapa.php?perfil=usu�rio1

Parametro: caminho

caminho para os programas que ser�o inclu�dos com "include". Ao chamar o programa ms_criamapa.php por meio de "include" � necess�rio especificar essa vari�vel para indicar o caminho correto do i3geo.

Parametro: pontos

lista de coordenadas x e y que ser�o adicionadas como pontos no mapa.

Parametro: nometemapontos

nome do tema de pontos

Parametro: linhas

lista de coordenadas x e y que ser�o adicionadas como linhas no mapa. As coordenadas de linhas diferentes devem ser separadas por ",", por exemplo: -54 -12 -50 -12,-50 -1 -50 -2 -50 -3

Parametro: nometemalinhas

nome do tema de linhas

Parametro: poligonos

lista de coordenadas x e y que ser�o adicionadas como pol�gonos no mapa. As coordenadas dos v�rtices de pol�gonos diferentes devem ser separadas por ",".

Parametro: nometemapoligonos

nome do tema de pol�gonos

Parametro: wkt

insere elementos no mapa com coordenadas definidas em wkt

Parametro: nometemawkt

nome do tema em wkt

Parametro: idioma

idioma da interface (veja os idiomas dispon�veis em classe_idioma.js)

Parametro: kmlurl

url de um arquivo KML que ser� incluido no mapa. V�lido apenas na interface google maps

Parametro: url_wms

endere�o de um WMS (ser� incluido como uma camada no mapa)

Parametro: layer_wms

nome do layer

Parametro: style_wms

estilo do layer

Parametro: nome_wms

nome da camada (titulo)

Parametro: srs_wms

c�digo da proje��o

Parametro: image_wms

tipo de imagem dispon�vel

Parametro: versao_wms

Vers�o do WMS (necess�rio quando da inclus�o de uma camada WMS diretamente pela URL)
*/

/*
Verifica a vari�vel $caminho

Essa vari�vel deve ser definida em programas que utilizam o ms_criamapa.php via include.
Indica onde est� o diret�rio i3geo para que os includes seguintes possam ser localizados.
$caminho � sempre colocada antes do nome dos arquivos que ser�o inc�u�dos, p.e., 
require_once ($caminho."classesphp/carrega_ext.php");
*/
if (!isset($caminho)){$caminho = "";}
if (!file_exists($caminho."classesphp/carrega_ext.php"))
{echo "<b> Nao foi possivel localizar o diret�rio classephp. Provavelmente vc precisara definir a variavel $camino";exit;}
if (isset($_GET["caminho"]))
{$caminho = $_GET["caminho"];}
/*
 Carrega as extens�es PHP

Carrega as extens�es utilizadas no programa de inicializa��o. 
A carga das extens�es geralmente � necess�ria nas instala��es windows (ms4w) ou quando as mesmas n�o s�o carregadas pela pr�pria inicializa��o do PHP.
*/
include_once ($caminho."classesphp/carrega_ext.php");
/*
 Include dos arquivos PHP.

Inclui os programas php com fun��es utilizadas pelo ms_criamapa.php
*/
include_once ($caminho."classesphp/pega_variaveis.php");
include_once ($caminho."classesphp/funcoes_gerais.php");
if(!isset($dir_tmp))
{include_once ($caminho."ms_configura.php");}
if (!isset($debug))
{error_reporting(0);$debug="nao";}
else
{error_reporting(E_ALL);$debug="sim";}
/*
Define o cookie para o idioma da interface
*/
if(isset($idioma) && $idioma != "")
setcookie("i3geolingua", $idioma);
/*
Cria os diret�rios tempor�rios que ser�o utilizados pelo i3geo para armazenar as imagens e outros dados. 
*/
$diretorios = criaDirMapa($dir_tmp);
if(!$diretorios)
{echo "<p style=color:red ><b>N&atilde;o foi po&iacute;vel criar os diret&oacute;rios tempor&aacute;rios em $dir_tmp.</b></p>";exit;}
criaIndex();
$tmpfname = $diretorios[0];
$protocolo = explode("/",$_SERVER['SERVER_PROTOCOL']);
/*
 Prepara as vari�veis que ser�o incluidas na se��o

As vari�veis v�m do arquivo ms_configura.php e s�o armazenadas em uma se��o com nome espec�fico para o i3geo.
*/
if (!isset($mapext)){$mapext="";}
$dir_tmp_ = $dir_tmp;
$temasdir_ = $temasdir;
$temasaplic_ = $temasaplic;
$locmapserv_ = $locmapserv;
$locaplic_ = $locaplic;
$locsistemas_ = $locsistemas;
$locidentifica_ = $locidentifica;
$R_path_ = $R_path;
$mapext_ = $mapext;
$locmapas_ = $locmapas;
$postgis_con_ = $postgis_con;
$srid_area_ = $srid_area;
$debug_ = $debug;
$ler_extensoes_ = $ler_extensoes;
$postgis_mapa_ = $postgis_mapa;
$tituloInstituicao_ = $tituloInstituicao;
$atlasxml_ = $atlasxml;
$expoeMapfile_ = $expoeMapfile;
$googleApiKey_ = $googleApiKey;
if(isset($kmlurl)){$kmlurl_ = $kmlurl;}
//
//se houver string de conex�o para substitui��o
//o modo cgi n�o ir� funcionar
//
if($postgis_mapa != "")
{$utilizacgi = "nao";}
if(!isset($perfil)){$perfil="";}
$perfil_ = $perfil;
$utilizacgi_ = $utilizacgi;
if ((isset($navegadoresLocais)) && ($navegadoresLocais != ""))
$navegadoresLocais_ = "sim";
else
$navegadoresLocais_ = "nao";
/*
 Inicia a se��o

O i3geo inicia uma se��o espec�fica no servidor, denominada i3GeoPHP.
Se j� houver uma se��o aberta, em fun��o de outro browser estar ativo, cria uma nova. Faz a c�pia das vari�veis definidas para itens da se��o.
*/
session_name("i3GeoPHP");
session_start();
if (!isset($g_sid)){$g_sid="";}
if(isset($_SESSION["map_file"]) || $g_sid!="")
{session_regenerate_id();}

/*
 Aguarde

Monta a apresenta��o do aguarde.

Aqui � necess�rio verificar se $executa est� definido
isso pq algumas aplica��es podem ser prejudicadas caso o aguarde seja mostrado
*/
//if (!isset($executa))
//{mostraAguarde();}

$_SESSION["dir_tmp"] = $dir_tmp_;
$_SESSION["temasdir"] = $temasdir_;
$_SESSION["temasaplic"] = $temasaplic_;
$_SESSION["locmapserv"] = $locmapserv_;
$_SESSION["locaplic"] = $locaplic_;
$_SESSION["locsistemas"] = $locsistemas_;
$_SESSION["locidentifica"] = $locidentifica_;
$_SESSION["R_path"] = $R_path_;
$_SESSION["mapext"] = $mapext_;
$_SESSION["locmapas"] = $locmapas_;
$_SESSION["postgis_con"] = $postgis_con_;
$_SESSION["srid_area"] = $srid_area_;
$_SESSION["debug"] = $debug_;
$_SESSION["ler_extensoes"] = $ler_extensoes_;
$_SESSION["postgis_mapa"] = $postgis_mapa_;
$_SESSION["perfil"] = $perfil_;
$_SESSION["navegadoresLocais"] = $navegadoresLocais_;
$_SESSION["utilizacgi"] = $utilizacgi_;
$_SESSION["tituloInstituicao"] = $tituloInstituicao_;
$_SESSION["atlasxml"] = $atlasxml;
$_SESSION["expoeMapfile"] = $expoeMapfile;
$_SESSION["googleApiKey"] = $googleApiKey_;
if(isset($kmlurl_))
$_SESSION["kmlurl"] = $kmlurl_;
//rotina de seguran�a, ver http://shiflett.org/articles/the-truth-about-sessions
$fingerprint = 'I3GEOSEC' . $_SERVER['HTTP_USER_AGENT'];
$_SESSION['fingerprint'] = md5($fingerprint . session_id());
$_SESSION["mapdir"] = $diretorios[1];
$_SESSION["imgdir"] = $diretorios[2];

//
//pega todas as vari�veis da sess�o, mesmo as que foram definidas anteriormente
//
foreach(array_keys($_SESSION) as $k)
{eval("\$".$k."='".$_SESSION[$k]."';");}
$postgis_mapa = $postgis_mapa_;
/*
 Define os arquivos .map 

Seleciona os arquivos mapfile que ser�o carregados como base conforme o tipo de sistema operacional.

A vari�vel $base pode ser definida como um par�metro na inicializa��o, caso contr�rio, � utilizado o padr�o.

Os arquivos .map padr�o s�o armazenados em i3geo/aplicmap.
O arquivo � lido conforma a caracter�stica do sistema operacional.

*/
if (strtoupper(substr(PHP_OS, 0, 3) == 'WIN'))
{
	if (!isset($base) || $base == ""){$base = "geral1windows";}
	$estadosl = "estadoslwindows";
}
else
{
	if (!isset($base) || $base == ""){$base = "geral1";}
	$estadosl = "estadosl";
}
/*
 Cria os objetos map que ser�o processados

O arquivo definido em $base � lido como um objeto map. Esse objeto ser� processado para incluir novos layers e alterar outros par�metros definidos pelo usu�rio.
*/
if (file_exists($base))
{
	$map = ms_newMapObj($base);
	$mapn = ms_newMapObj($base);	
}
else
{
	$map = ms_newMapObj($temasaplic."/".$base.".map");
	$mapn = ms_newMapObj($temasaplic."/".$base.".map");
}
/*
 Par�metros adicionais.

Processa os par�metros para a inicializa��o verificando se foram passados pela URL ou n�o.
*/
if (!isset($mapext))
{$mapext = $map->extent->minx." ".$map->extent->miny." ".$map->extent->maxx." ".$map->extent->maxy;}
if (!isset ($map_reference_image)) //arquivo com a imagem de refer&ecirc;ncia
{$map_reference_image = $map->reference->image;}
if (!isset ($map_reference_extent)) //extens&atilde;o geogr&aacute;fica da imagem do mapa de refer&ecirc;ncia
{$map_reference_extent = $map->reference->extent->minx." ".$map->reference->extent->miny." ".$map->reference->extent->maxx." ".$map->reference->extent->maxy;}
if (!isset($interface))
{$interface = $interfacePadrao;}

incluiTemasIniciais();

if(isset($layers))
{ligaTemas();}

if (isset($map_reference_image))
{$mapn->reference->set("image",$map_reference_image);}
$extr = $mapn->reference->extent;
if (isset($map_reference_extent))
{
	$temp = explode(" ",$map_reference_extent);
	foreach ($temp as $t)
	{
		if ($t != "")
		{$newext[] = $t;}
	}
	if (count($newext) == 4)
	{$extr->setextent($newext[0], $newext[1], $newext[2], $newext[3]);}
}
$ext = $mapn->extent;
$newext = array();
if ((isset($mapext)) && ($mapext != ""))
{
	$temp = explode(" ",$mapext);
	foreach ($temp as $t)
	{
		if ($t != "")
		{$newext[] = $t;}
	}
	if (count($newext) == 4)
	{$ext->setextent($newext[0], $newext[1], $newext[2], $newext[3]);}
}
/*
Configura os endere�os corretos no mapfile.

Altera as propriedades imagepath e imageurl corrigindo os caminhos padr�o conforme o diret�rio criado para armazenar o mapa de trabalho.
*/
$w = $mapn->web;
$atual = $w->imagepath;
$w->set("imagepath",$atual.$diretorios[2]."/");
$atual = $w->imageurl;
$w->set("imageurl",$atual.$diretorios[2]."/");
$salvo = $mapn->save($tmpfname);

$_SESSION["imgurl"] = strtolower($protocolo[0])."://".$_SERVER['HTTP_HOST'].$atual.$diretorios[2]."/";
$_SESSION["tmpurl"] = strtolower($protocolo[0])."://".$_SERVER['HTTP_HOST'].$atual;
$_SESSION["map_file"] = $tmpfname;
$_SESSION["mapext"] = $mapext;

if (isset($executa))
{
	if (file_exists($executa))
	{include_once ($executa);}
	if (function_exists($executa))
	{eval($executa."();");}
}

if(isset($wkt))
{insereWKTUrl();}

if(isset($pontos))
{inserePontosUrl();}

if(isset($linhas))
{insereLinhasUrl();}

if(isset($poligonos))
{inserePoligonosUrl();}

if(isset($url_wms))
{incluiTemaWms();}

adaptaLayers();
if (file_exists($locaplic."/pacotes/geoip") && file_exists($locaplic."/pacotes/geoip/GeoLiteCity.dat"))
{require_once($caminho."ms_registraip.php");}

if ($interface != "mashup")
{abreInterface();}

/*
Adapta os dados de cada layer.

Faz altera��es em cada layer caso sejam necess�rias.
*/
function adaptaLayers(){
	global $tmpfname;
	$mapa = ms_newMapObj($tmpfname);
	$path = $mapa->shapepath;
	for($i=0;$i<($mapa->numlayers);++$i)
	{
		$layer = $mapa->getLayer($i);
		$ok = true;
		if ($layer->connection == "")
		{
			$ok = false;
			$d = $layer->data;
			if((file_exists($d)) || (file_exists($d.".shp")))
			{$ok = true;}
			else
			{
				if((file_exists($path."/".$d)) || (file_exists($path."/".$d.".shp")))
				{$ok = true;}
			}
		}
		if ($ok == false)
		{$layer->set("status",MS_OFF);}
	}
	$mapa->save($tmpfname);
	erroCriacao();
}
/*
Redireciona para o HTML definido em $interface, abrindo o mapa
*/
function abreInterface(){
	global $interface,$caminho,$tempo;
	if (count(explode(".php",$interface)) > 1)
	{
		if (file_exists($caminho."aplicmap/".$interface))
		{include_once($caminho."aplicmap/".$interface);}
		else 
		{include_once($interface);}
		exit;
	}
	else
	{
		if (file_exists($caminho."aplicmap/".$interface))
		{$urln = $caminho."aplicmap/".$interface."?".session_id();}
		else 
		{$urln = $interface."?".session_id();}
		if(!headers_sent())
		{header("Location:".$urln);}
		else
		{echo "<meta http-equiv='refresh' content='0;url=$urln'>";}
	}	
}
/*
Liga os temas definidos na vari�vel $layers
*/
function ligaTemas()
{
	global $layers,$mapn;
	if (isset($layers))
	{
		$layers = str_replace(','," ",$layers);
		$lista = explode(" ", $layers);
		foreach ($lista as $l)
		{
			if ($l == "")
			{continue;}
			if(@$mapn->getLayerByName($l))
			{$layern = $mapn->getLayerByName($l);$layern->set("status",MS_DEFAULT);}
			$grupos = $mapn->getLayersIndexByGroup($l);
			if(count($grupos) > 0)
			{
				for ($i = 0;$i < count($grupos);++$i)
				{
					$layern = $mapn->getLayer($grupos[$i]);
					if(strtolower($layern->group) == strtolower($l))
					{
						$layern->set("status",MS_DEFAULT);
					}
				}
			}
		}
	}
	erroCriacao();
}
/*
Inclui os temas definidos na vari�vel $temasa
*/
function incluiTemasIniciais()
{
	global $temasa,$estadosl,$temasaplic,$temasdir,$mapn;
	if (!isset($temasa)){$temasa = $estadosl;}
	$temasa = str_replace(','," ",$temasa);
	$alayers = explode(" ",$temasa);
	$existeraster = false;
	foreach ($alayers as $arqt)
	{
		$arqtemp = "";
		$arqt = trim($arqt);
		if ($arqt == "")
		{continue;}
		if (file_exists($arqt))
		{$arqtemp = $arqt;}
		if ((strtoupper(substr(PHP_OS, 0, 3) == 'WIN')) && (file_exists($temasaplic."\\".$arqt.".map")))
		{$arqtemp = $temasaplic."\\".$arqt.".map";}
		elseif (file_exists($temasaplic."/".$arqt.".map"))
		{$arqtemp = $temasaplic."/".$arqt.".map";}
		if ((strtoupper(substr(PHP_OS, 0, 3) == 'WIN')) && (file_exists($temasdir."\\".$arqt.".map")))
		{$arqtemp = $temasdir."\\".$arqt.".map";}
		elseif (file_exists($temasdir."/".$arqt.".map"))
		{$arqtemp = $temasdir."/".$arqt.".map";}
		if ($arqtemp == "")
		{echo "<br>Imposs&iacute;vel acessar tema $arqtemp";}
		else
		{
			if (!@ms_newMapObj($arqtemp))
			{echo "<br>Problemas com a camada $arqtemp<br>";}
			else
			{
				$maptemp = @ms_newMapObj($arqtemp);
				for($i=0;$i<($maptemp->numlayers);++$i)
				{
					$layern = $maptemp->getLayer($i);
					if($layern->type == MS_LAYER_RASTER)
					{$existeraster = true;}
					if ($layern->name == "estadosl")
					{$layern->set("data",$temasaplic."/dados/estados.shp");}
					$layern->setmetadata("NOMEORIGINAL",$layern->name);
					autoClasses(&$layern,$mapn);
					ms_newLayerObj(&$mapn, $layern);
				}
			}	
		}
	}
	//
	//muda para RGB para melhorar o desenho da imagem raster
	//
	if($existeraster)
	{
		$of = &$mapn->outputformat;
		$of->set("imagemode",MS_IMAGEMODE_RGB);
	}
	erroCriacao();
}
/*
Cria os arquivos vazios index.htm e index.html nos diret�rios tempor�rios
*/
function criaIndex()
{
	global $dir_tmp,$diretorios;
	if (!file_exists($dir_tmp."/index.htm"))
	{
		$f = fopen($dir_tmp."/index.htm",x);
		fclose($f);
		$f = fopen($dir_tmp."/index.html",x);
		fclose($f);
		$f = fopen($dir_tmp."/".$diretorios[1]."/index.html",x);
		fclose($f);
		$f = fopen($dir_tmp."/".$diretorios[1]."/index.htm",x);
		fclose($f);
		$f = fopen($dir_tmp."/".$diretorios[2]."/index.html",x);
		fclose($f);
		$f = fopen($dir_tmp."/".$diretorios[2]."/index.htm",x);
		fclose($f);
	}
	if (!file_exists($dir_tmp."/index.htm"))
	{
		echo "Erro. N�o foi poss�vel gravar no diret�rio tempor�rio";
		exit;
	}
}
/*
Mostra a mensagem de aguarde
*/
function mostraAguarde()
{
	global $interface,$caminho,$mensagemInicia,$tituloInstituicao;
	if (!isset($interface))
	{
		echo "<html><head>";
		echo "<title>".$tituloInstituicao."</title>";
		echo '<div id="aguarde"><center>';
		echo '<p class=paguarde style="font-family: Verdana, Arial, Helvetica, sans-serif;color:black;text-align:center;font-size:12pt"><b>'.$mensagemInicia.'</b><br> Aguarde...preparando o mapa</p>';
		echo '<table><tr>';
		echo "<td colspan=3 ><center><img src='".$caminho."imagens/i3geo1.jpg'></td></tr>";
		echo "<tr><td><center><img src='".$caminho."imagens/pspb.png'></td>";
		echo "<td><center><img src='".$caminho."imagens/mapserv.png'></td>";
		echo "<td><center><a href='http://mapas.mma.gov.br/download' target=blank ><img src='".$caminho."imagens/somerights20_pt.gif' ></a></td>";
		echo "</tr></table>";
		echo '<BODY bgcolor="white" style="background-color:white">';
	}
}
/*
Insere elementos no mapa a partir de uma string definida em wkt
*/
function insereWKTUrl()
{
	global $wkt,$nometemawkt,$dir_tmp,$imgdir,$tmpfname,$locaplic;
	include_once "pacotes/phpxbase/api_conversion.php";
	if (!isset($nometemapontos))
	{$nometemapontos="WKT";}
	if ($nometemapontos == "")
	{$nometemapontos="WKT";}
	//
	//cria o shape file
	//
	$shape = ms_shapeObjFromWkt($wkt);
	$tipol = $shape->type;
	if($tipol == 0){$tipol = 3;}
	$nomeshp = $dir_tmp."/".$imgdir."/wkts";
	// cria o dbf
	$def = array();
	$items = array("COORD");
	foreach ($items as $ni)
	{$def[] = array($ni,"C","254");}
	xbase_create($nomeshp.".dbf", $def);
	$dbname = $nomeshp.".dbf";
	$db=xbase_open($dbname,2);
	if ($tipol == 1)
	{$novoshpf = ms_newShapefileObj($nomeshp, MS_SHP_ARC);}
	if ($tipol == 3)
	{$novoshpf = ms_newShapefileObj($nomeshp, MS_SHP_MULTIPOINT);}
	if ($tipol == 2)
	{$novoshpf = ms_newShapefileObj($nomeshp, MS_SHP_POLYGON);}	
	$reg[] = "";
	$novoshpf->addShape($shape);
	xbase_add_record($db,$reg);
	$novoshpf->free();
	xbase_close($db);
	//adiciona o layer
	$mapa = ms_newMapObj($tmpfname);
	$layer = ms_newLayerObj($mapa);
	$layer->set("name","wktins");
	$layer->set("data",$nomeshp);
	$layer->setmetadata("tema",$nometemawkt);
	$layer->setmetadata("classe","sim");
	$layer->set("type",$shape->type);
	$layer->set("status",MS_DEFAULT);
	$classe = ms_newClassObj($layer);
	$estilo = ms_newStyleObj($classe);
	if($shape->type == 0)
	{
		$estilo->set("symbolname","ponto");
		$estilo->set("size",6);
	}
	if($shape->type == 1)
	{
		$estilo->set("symbolname","linha");
		$estilo->set("size",3);
	}
	if($shape->type == 2)
	{$layer->set("transparency","50");}
	$cor = $estilo->color;
	$cor->setRGB(255,0,0);
	$salvo = $mapa->save($tmpfname);
	erroCriacao();
}
/*
Insere um tema do tipo ponto

*/
function inserePontosUrl()
{
	global $pontos,$nometemapontos,$dir_tmp,$imgdir,$tmpfname,$locaplic;
	include_once "pacotes/phpxbase/api_conversion.php";
	if (!isset($nometemapontos))
	{$nometemapontos="Pontos";}
	if ($nometemapontos == "")
	{$nometemapontos="Pontos";}
	//
	//cria o shape file
	//
	$tipol = MS_SHP_POINT;
	$nomeshp = $dir_tmp."/".$imgdir."/pontosins";
	// cria o dbf
	$def = array();
	$items = array("COORD");
	foreach ($items as $ni)
	{$def[] = array($ni,"C","254");}
	xbase_create($nomeshp.".dbf", $def);
	$dbname = $nomeshp.".dbf";
	$db=xbase_open($dbname,2);
	$novoshpf = ms_newShapefileObj($nomeshp, $tipol);
	$pontos = explode(" ",trim($pontos));
	if(count($pontos) == 0)
	$pontos = explode(",",trim($pontos));
	foreach ($pontos as $p)
	{if (is_numeric($p)){$pontosn[] = $p;}}
	$pontos = $pontosn;
	for ($ci = 0;$ci < count($pontos);$ci=$ci+2)
	{
		$reg = array();
		$reg[] = $pontos[$ci]." ".$pontos[$ci+1];
		$shape = ms_newShapeObj($tipol);
		$linha = ms_newLineObj();
		$linha->addXY($pontos[$ci],$pontos[$ci+1]);
		$shape->add($linha);
		$novoshpf->addShape($shape);
		xbase_add_record($db,$reg);
	}
	$novoshpf->free();
	xbase_close($db);
	//adiciona o layer
	$mapa = ms_newMapObj($tmpfname);
	$layer = ms_newLayerObj($mapa);
	$layer->set("name","pontoins");
	$layer->set("data",$nomeshp);
	$layer->setmetadata("tema",$nometemapontos);
	$layer->setmetadata("classe","sim");
	$layer->setmetadata("ATLAS","nao");
	$layer->set("type",MS_LAYER_POINT);
	$layer->set("status",MS_DEFAULT);
	$classe = ms_newClassObj($layer);
	$estilo = ms_newStyleObj($classe);
	$estilo->set("symbolname","ponto");
	$estilo->set("size",6);
	$cor = $estilo->color;
	$cor->setRGB(255,0,0);
	$salvo = $mapa->save($tmpfname);
	erroCriacao();
}
/*
Insere um tema do tipo linear

As linhas devem ter os pontos separados por espa�os e cada linha separada por v�rgula

*/
function insereLinhasUrl()
{
	global $linhas,$nometemalinhas,$dir_tmp,$imgdir,$tmpfname,$locaplic;
	include_once "pacotes/phpxbase/api_conversion.php";
	if (!isset($nometemalinhas))
	{$nometemalinhas="Linhas";}
	if ($nometemalinhas == "")
	{$nometemalinhas="Linhas";}
	//
	//cria o shape file
	//
	$tipol = MS_SHP_ARC;
	$nomeshp = $dir_tmp."/".$imgdir."/linhains";
	// cria o dbf
	$def = array();
	$items = array("COORD");
	foreach ($items as $ni)
	{$def[] = array($ni,"C","254");}
	xbase_create($nomeshp.".dbf", $def);
	$dbname = $nomeshp.".dbf";
	$db=xbase_open($dbname,2);
	$novoshpf = ms_newShapefileObj($nomeshp, $tipol);
	$linhas = explode(",",trim($linhas));
	$pontosLinhas = array(); //guarda os pontos de cada linha em arrays
	foreach ($linhas as $l)
	{
		$tempPTs = explode(" ",trim($l));
		$temp = array();
		foreach ($tempPTs as $p)
		if (is_numeric($p)){$temp[] = $p;}
		$pontosLinhas[] = $temp;
	}
	foreach ($pontosLinhas as $ptsl)
	{
		$linhas = $ptsl;
		$shape = ms_newShapeObj($tipol);
		$linha = ms_newLineObj();
		$reg = array();
		$reg[] = "";
		for ($ci = 0;$ci < count($linhas);$ci=$ci+2)
		{
			$linha->addXY($linhas[$ci],$linhas[$ci+1]);
			$shape->add($linha);
		}
		$novoshpf->addShape($shape);
		xbase_add_record($db,$reg);
	}
	$novoshpf->free();
	xbase_close($db);
	//adiciona o layer
	$mapa = ms_newMapObj($tmpfname);
	$layer = ms_newLayerObj($mapa);
	$layer->set("name","linhains");
	$layer->set("data",$nomeshp);
	$layer->setmetadata("tema",$nometemalinhas);
	$layer->setmetadata("classe","sim");
	$layer->setmetadata("ATLAS","nao");
	$layer->set("type",MS_LAYER_LINE);
	$layer->set("status",MS_DEFAULT);
	$classe = ms_newClassObj($layer);
	$estilo = ms_newStyleObj($classe);
	$estilo->set("symbolname","linha");
	$estilo->set("size",3);
	$cor = $estilo->color;
	$cor->setRGB(255,0,0);
	$salvo = $mapa->save($tmpfname);
	erroCriacao();
}
/*
Insere um tema poligonal.

Os pol�gonos devem ter os pontos separados por espa�os e cada pol�gono separado por v�rgula
*/
function inserePoligonosUrl()
{
	global $poligonos,$nometemapoligonos,$dir_tmp,$imgdir,$tmpfname,$locaplic;
	include_once "pacotes/phpxbase/api_conversion.php";
	if (!isset($nometemapoligonos))
	{$nometemapoligonos="Poligonos";}
	if ($nometemapoligonos == "")
	{$nometemapoligonos="Poligonos";}
	//
	//cria o shape file
	//
	$tipol = MS_SHP_POLYGON;
	$nomeshp = $dir_tmp."/".$imgdir."/poligonosins";
	// cria o dbf
	$def = array();
	$items = array("COORD");
	foreach ($items as $ni)
	{$def[] = array($ni,"C","254");}
	xbase_create($nomeshp.".dbf", $def);
	$dbname = $nomeshp.".dbf";
	$db=xbase_open($dbname,2);
	$novoshpf = ms_newShapefileObj($nomeshp, $tipol);
	$linhas = explode(",",trim($poligonos));
	$pontosLinhas = array(); //guarda os pontos de cada linha em arrays
	foreach ($linhas as $l)
	{
		$tempPTs = explode(" ",trim($l));
		$temp = array();
		foreach ($tempPTs as $p)
		if (is_numeric($p)){$temp[] = $p;}
		$pontosLinhas[] = $temp;
	}
	foreach ($pontosLinhas as $ptsl)
	{
		$linhas = $ptsl;
		$shape = ms_newShapeObj($tipol);
		$linha = ms_newLineObj();
		$reg = array();
		$reg[] = "";
		for ($ci = 0;$ci < count($linhas);$ci=$ci+2)
		{
			$linha->addXY($linhas[$ci],$linhas[$ci+1]);
			
		}
		$shape->add($linha);
		$novoshpf->addShape($shape);
		xbase_add_record($db,$reg);
	}
	$novoshpf->free();
	xbase_close($db);
	//adiciona o layer
	$mapa = ms_newMapObj($tmpfname);
	$layer = ms_newLayerObj($mapa);
	$layer->set("name","linhains");
	$layer->set("data",$nomeshp);
	$layer->setmetadata("tema",$nometemapoligonos);
	$layer->setmetadata("classe","sim");
	$layer->setmetadata("ATLAS","nao");
	$layer->set("type",MS_LAYER_POLYGON);
	$layer->set("transparency","50");
	$layer->set("status",MS_DEFAULT);
	$classe = ms_newClassObj($layer);
	$estilo = ms_newStyleObj($classe);
	//$estilo->set("symbolname","linha");
	//$estilo->set("size",3);
	$cor = $estilo->color;
	$cor->setRGB(255,0,0);
	$salvo = $mapa->save($tmpfname);
	erroCriacao();
}
/*
Inclui no mapa um tema do tipo WMS
*/
function incluiTemaWms()
{
	global $nome_wms,$url_wms,$layer_wms,$style_wms,$srs_wms,$image_wms,$versao_wms,$tmpfname,$locaplic;
	include_once ($locaplic."/classesphp/classe_mapa.php");
	if(!$nome_wms)
	{$nome = $layer_wms." ".$style_wms;}
	else
	$nome = $nome_wms;
	$m = new Mapa($tmpfname);
 	$m->adicionatemawms($layer_wms,$url_wms,$style_wms,$srs_wms,$image_wms,$locaplic,"",$versao_wms,$nome,"","","","","nao","text/plain","");
	$salvo = $m->salva($tmpfname);
	erroCriacao();
}
/*
Captura e mostra os erros de processamento do mapserver
*/
function erroCriacao(){
	$error = ms_GetErrorObj();
	while($error && $error->code != MS_NOERR)
	{
		printf("<br>Error in %s: %s<br>\n", $error->routine, $error->message);
		$error = $error->next();
	}
	ms_ResetErrorList();
}

?>