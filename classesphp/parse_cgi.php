<?php
/*
Title: parse_cgi.php

Este programa alguns dos par�metros do mapserver CGI e retorna uma imagem do mapa.

� utilizado para processar o mapfile segundo as necessidades do i3geo, como por exemplo, fazendo a substitui��o
das vari�veis de conex�o com banco.

Deve ser utilizado na tag IMG de umarquivo HTML.

Parameters:

$g_sid - c�digo da se��o aberta

$map_size - string com o tamanho do novo mapa (w h)

$mapext - extens�o geogr�fica do novo mapa (xmin ymin xmax ymax)

$map_imagecolor - cor do fundo do mapa (default � -1 -1 -1)

$map_transparent - a cor do fundo ser� transparente? (ON OFF, default � ON)

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
error_reporting(0);
include_once("pega_variaveis.php");
include_once ("carrega_ext.php");
include_once("funcoes_gerais.php");
$temp = $mapext;
session_name("i3GeoPHP");
session_id($g_sid);
session_start();
$mapext = $temp;
$map_file = $_SESSION["map_file"];

include_once("../ms_configura.php");
if(isset($fingerprint))
{
	if (md5('I3GEOSEC' . $_SERVER['HTTP_USER_AGENT'] . session_id()) != $fingerprint)
	{exit;}
}
if (!isset($map_imagecolor)) $map_imagecolor = "-1 -1 -1";

if (!isset($map_transparent)) $map_transparent = "ON";
//
//faz uma c�pia do mapfile para poder manipular sem afetar omapfile atual usado pelo i3geo
//
$nomerando = nomerandomico();
//echo $map_file."<br>";
$map_filen = str_replace(basename($map_file),$nomerando.".map",$map_file);
//echo $map_filen."<br>";
copy($map_file,$map_filen);
substituiCon($map_filen,$postgis_mapa);
$map = ms_newMapObj($map_filen);
$layersNames = $map->getalllayernames();
foreach ($layersNames as $layerName)
{
	$layer = $map->getLayerByname($layerName);
	if ($layer->getmetadata("classesnome") != "")
	{autoClasses(&$layer,$map);}
	if($layer->type == MS_LAYER_POLYGON)
	{
		$nclasses = $layer->numclasses;
		for($i=0;$i<$nclasses;++$i){
			$classe = $layer->getclass($i);
			$nestilos = $classe;
			for($j=0;$j<$nestilos;++$j){
				$estilo = $classe->getstyle($j);
				$estilo->set("symbolname","pt1");
			}	
		}
	}
}
if(isset($map_size))
{
	$map_size = explode(",",$map_size);
	$map->setsize($map_size[0],$map_size[1]);
}
if(isset($mapext))
{
	$mapext = explode(" ",$mapext);
	$map->setExtent($mapext[0],$mapext[1],$mapext[2],$mapext[3]);
}
//$map->save($map_file);
$s = $map->scalebar;
$s->set("status",MS_OFF);
$map_imagecolor = explode(" ",$map_imagecolor);
$imgcolor = $map->imagecolor;
$imgcolor->setrgb($map_imagecolor[0],$map_imagecolor[1],$map_imagecolor[2]);
$o = $map->outputformat;

if(strtolower($map_transparent) == "on")
$o->set("transparent",MS_ON);
else
$o->set("transparent",MS_OFF);

$img = $map->draw();
echo header("Content-type: " . $map->outputformat->mimetype  . "\n\n");
$img->saveImage("");
unlink($map_filen);
?>
