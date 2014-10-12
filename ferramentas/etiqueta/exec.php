<?php
include_once(dirname(__FILE__)."/../inicia.php");
//
//faz a busca da fun&ccedil;&atilde;o que deve ser executada
//
$retorno = ""; //string que ser&aacute; retornada ao browser via JSON
switch (strtoupper($funcao))
{
/*
Valor: ATIVAETIQUETAS

Ativa as etiquetas de um tema.

<Toponimia->ativaEtiquetas>
*/
	case "ATIVAETIQUETAS":
		include_once(dirname(__FILE__)."/../../classesphp/classe_toponimia.php");
		copiaSeguranca($map_file);
		$m = new Toponimia($map_file,$tema);
		$retorno = $m->ativaEtiquetas($tips);
		$m->layer->setmetadata("ITENS",$itens);
		$m->salva();
		$_SESSION["contadorsalva"]++;
	break;
/*
Valor: REMOVEETIQUETAS

Desativa as etiquetas de um tema.

<Toponimia->removeEtiquetas>
*/
	case "REMOVEETIQUETAS":
		include_once(dirname(__FILE__)."/../../classesphp/classe_toponimia.php");
		copiaSeguranca($map_file);
		$m = new Toponimia($map_file,$tema);
		$retorno = $m->removeEtiquetas();
		$m->salva();
		$_SESSION["contadorsalva"]++;
	break;
/*
 Valor: PEGADADOSETIQUETAS

Obt�m os dados sobre itens, itensdesc, etc

<Toponimia->pegaDadosEtiquetas>
*/
	case "PEGADADOSETIQUETAS":
		include_once(dirname(__FILE__)."/../../classesphp/classe_toponimia.php");
		$m = new Toponimia($map_file,$tema);
		$retorno = $m->pegaDadosEtiquetas();
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