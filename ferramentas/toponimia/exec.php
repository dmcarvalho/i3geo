<?php
include_once(dirname(__FILE__)."/../inicia.php");
//
//faz a busca da fun&ccedil;&atilde;o que deve ser executada
//
$retorno = ""; //string que ser&aacute; retornada ao browser via JSON
switch (strtoupper($funcao))
{
/*
Valor: CRIATOPONIMIA

Cria um novo tema com a topon&iacute;mia do tema atual.

<Toponimia->criaToponimia>
*/
	case "CRIATOPONIMIA":
		include_once(dirname(__FILE__)."/../../classesphp/classe_toponimia.php");
		copiaSeguranca($map_file);
		$m = new Toponimia($map_file,$tema);
		if(!isset($tipo)){
			$tipo="";
		}
		if(!isset($novotema)){
			$novotema = "sim";
		}
		$retorno = $m->criaToponimia($item,$position,$partials,$offsetx,$offsety,$minfeaturesize,$mindistance,$force,$shadowcolor,$shadowsizex,$shadowsizey,$outlinecolor,$cor,$sombray,$sombrax,$sombra,$fundo,$angulo,$tamanho,$fonte,$tipo,$wrap,$novotema);
		if(empty($maxscale)){
			$maxscale = -1;
		}
		if(empty($minscale)){
			$minscale = -1;
		}
		$m->layer->set("labelmaxscaledenom",$maxscale);
		$m->layer->set("labelminscaledenom",$minscale);
		if ($tipo != "teste"){
			$m->salva();$_SESSION["contadorsalva"]++;
		}
	break;
	case "REMOVETOPONIMIA":
		include_once(dirname(__FILE__)."/../../classesphp/classe_toponimia.php");
		copiaSeguranca($map_file);
		$m = new Toponimia($map_file,$tema);
		$tipo="";
		$retorno = $m->removeToponimia();
		$m->salva();
		$_SESSION["contadorsalva"]++;
		break;
}
if (!connection_aborted()){
	if(isset($map_file) && isset($postgis_mapa) && $map_file != "")
	restauraCon($map_file,$postgis_mapa);
	cpjson($retorno);
}
else
{exit();}
?>
