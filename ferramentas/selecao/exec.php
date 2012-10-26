<?php
include_once(__DIR__."/../inicia.php");
//
//faz a busca da fun&ccedil;&atilde;o que deve ser executada
//
$retorno = ""; //string que ser&aacute; retornada ao browser via JSON
switch (strtoupper($funcao))
{
/*
Valor: CRIATEMASEL

Cria um novo tema com a sele&ccedil;&atilde;o atual.

<Selecao->selecao2tema>
*/
	case "CRIATEMASEL":
		include_once(__DIR__."/../../classesphp/classe_selecao.php");
		copiaSeguranca($map_file);
		$m = new Selecao($map_file,$tema);
		$retorno = $m->selecao2tema($locaplic,$dir_tmp);
		$m->salva();
		$_SESSION["contadorsalva"]++;
	break;
/*
Valor: LIMPASEL

Limpa a sele&ccedil;&atilde;o existente em um tema.

<Selecao->selecaoLimpa>
*/
	case "LIMPASEL":
		include_once(__DIR__."/../../classesphp/classe_selecao.php");
		$m = new Selecao($map_file,$tema);
		$retorno = $m->selecaoLimpa();
		//
		//&eacute; necess&aacute;rio obter os par&acirc;metros do mapa para remontar a &aacute;rvore de camadas
		//
		$_SESSION["contadorsalva"]++;
		redesenhaMapa();
	break;

/*
Valor: SELECAOTEMA

Sleciona elementos de um tema com base em outro tema.

<Selecao->selecaoTema>
*/
	case "SELECAOTEMA":
		include_once(__DIR__."/../../classesphp/classe_selecao.php");
		copiaSeguranca($map_file);
		$temas = explode(",",$tema);
		foreach($temas as $tema)
		{
			$m = new Selecao($map_file,$tema);
			$ok[] = $m->selecaoTema($temao,$tipo);
		}
		$retorno = implode(",",$ok);
		$_SESSION["contadorsalva"]++;
		redesenhaMapa();
	break;

/*
Valor: SELECAOATRIB2

Seleciona elementos com base nos atributos utilizando sintaxe complexa.

<Selecao->selecaoAtributos2>
*/
	case "SELECAOATRIB2":
		include_once(__DIR__."/../../classesphp/classe_selecao.php");
		copiaSeguranca($map_file);
		$m = new Selecao($map_file,$tema,$ext);
		$retorno = $m->selecaoAtributos2($filtro,$tipo);
		$_SESSION["contadorsalva"]++;
		redesenhaMapa();
	break;
/*
Valor: SELECAOEXT

Seleciona elementos utilizando a extens&atilde;o do mapa.

<Selecao->selecaoEXT>
*/
	case "SELECAOEXT":
		include_once(__DIR__."/../../classesphp/classe_selecao.php");
		copiaSeguranca($map_file);
		$temas = explode(",",$tema);
		foreach($temas as $tema)
		{
			$m = new Selecao($map_file,$tema,$ext);
			$ok[] = $m->selecaoEXT($tipo);
		}
		//$retorno = implode(",",$ok);
		$_SESSION["contadorsalva"]++;
		redesenhaMapa();
	break;

/*
Valor: SELECAOBOX

Seleciona elementos utilizando um ret&acirc;ngulo.

<Selecao->selecaoBOX>
*/
	case "SELECAOBOX":
		include_once(__DIR__."/../../classesphp/classe_selecao.php");
		copiaSeguranca($map_file);
		$temas = explode(",",$tema);
		foreach($temas as $tema)
		{
			$m = new Selecao($map_file,$tema,$ext);
			$ok[] = $m->selecaoBOX($tipo,$ext);
		}
		$_SESSION["contadorsalva"]++;
		redesenhaMapa();
	break;
/*
Valor: SELECAOPT

Seleciona elementos utilizando um ponto.

<Selecao->selecaoPT>
*/
	case "SELECAOPT":
		//error_reporting(E_ALL);
		include_once(__DIR__."/../../classesphp/classe_selecao.php");
		copiaSeguranca($map_file);
		if(!isset($xy)){$xy = "";}
		$temas = explode(",",$tema);
		foreach($temas as $tema)
		{
			$m = new Selecao($map_file,$tema,$ext);
			$ok[] = $m->selecaoPT($xy,$tipo,$tolerancia);
		}
		$_SESSION["contadorsalva"]++;
		redesenhaMapa();
	break;
/*
Valor: SELECAOPOLI

Sele&ccedil;&atilde;o por poligono (chamado via POST).

<Selecao->selecaoPoli>
*/
	case "SELECAOPOLI":
		//esta opera&ccedil;&atilde;o &eacute; chamada com POST via cpaint
		//por isso precisa ser executada com start
		copiaSeguranca($map_file);
		$retorno = selecaoPoli($xs,$ys,$tema,$tipo);
		$_SESSION["contadorsalva"]++;
		redesenhaMapa();
		//restauraCon($map_file,$postgis_mapa);
	break;
/*
Valor: LISTAPONTOSSHAPESEL

Lista os pontos dos elementos selecionados de um layer

<SHP->listaPontosShapeSel>
*/
	case "LISTAPONTOSSHAPESEL":
		include_once(__DIR__."/../../classesphp/classe_shp.php");
		$m = new SHP($map_file,$tema);
		$retorno = $m->listaPontosShapeSel();
	break;

}
if (!connection_aborted()){
	if(isset($map_file) && isset($postgis_mapa) && $map_file != "")
	restauraCon($map_file,$postgis_mapa);
	cpjson($retorno);
}
else
{exit();}
/*
Function: selecaoPoli

Seleciona um tema por pol&iacute;gono baseado em uma lista de pontos.

Include:
<classe_selecao.php>
*/
function selecaoPoli($xs,$ys,$tema,$tipo)
{
	global $map_file;
	include_once(__DIR__."/../../classesphp/classe_selecao.php");
	$temas = explode(",",$tema);
	foreach($temas as $tema)
	{
		$m = new Selecao($map_file,$tema);
		$ok[] = $m->selecaoPorPoligono($tipo,$xs,$ys);
		$m->salva();
		$_SESSION["contadorsalva"]++;
	}
	return implode(",",$ok);
}
function redesenhaMapa()
{
	global $tempo,$map_file,$tipoimagem,$cp,$postgis_mapa,$utilizacgi,$locmapserv,$interface,$mapexten;
	if($tipoimagem != "nenhum" && $tipoimagem != "")
	{$utilizacgi = "nao";}
	if (connection_aborted()){exit();}
	if($interface == "googleearth" && $mapexten != ""){
		include_once(__DIR__."/../../classesphp/classe_navegacao.php");
		$m = new Navegacao($map_file);
		$m->mudaExtensao($mapexten);
		$m->salva();
	}
	include_once(__DIR__."/../../classesphp/classe_mapa.php");
	$m = New Mapa($map_file);
	$par = $m->parametrosTemas();
	//
	//na interface googlemaps n&atilde;o &eacute; necess&aacute;rio gerar a imagem
	//
	$e = $m->mapa->extent;
	$ext = $e->minx." ".$e->miny." ".$e->maxx." ".$e->maxy;
	$res["mapimagem"] = "";
	$res["mapexten"] = $ext;
	$res["mapres"] = "";
	$res["erro"] = "";
	$res["mapscale"] = "";
	$res["pixelsize"] = "";
	$res["mapimagem"] = "";
	$res["w"] = $m->mapa->width;
	$res["h"] = $m->mapa->height;
	$res["mappath"] = "";
	$res["mapurl"] = "";
	$res["mensagens"] = $m->pegaMensagens();
	$res["tempo"] = microtime(1) - $tempo;
	restauraCon($map_file,$postgis_mapa);
	ob_clean();
	if ($par == "")
	{$retorno = "erro";}
	else
	{$retorno = array("variaveis"=>$res,"temas"=>$par);}
	cpjson($retorno);
}
?>