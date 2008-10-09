<?php
/*
Title: Administra��o dos mapfiles principais

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

File: i3geo/admin/mapfiles.php

19/6/2007

*/
error_reporting(0);
include_once("admin.php");
$cp = new cpaint();
//faz a busca da fun��o que deve ser executada
switch ($funcao)
{
	//verifica os editores
	case "verificaEditores":
	retornaJSON(verificaEditores($editores));
	exit;
	break;
	
	case "importarXmlMenu":
	$cp->set_data(importarXmlMenu());
	$cp->return_data();
	break;
	
	case "pegaMenus":
	$dados = pegaDados('SELECT * from i3geoadmin_menus order by nome_menu');
	retornaJSON($dados);
	exit;
	break;
	
	case "pegaTags":
	$sql = "SELECT * from i3geoadmin_tags order by nome";
	retornaJSON(pegaDados($sql));
	exit;
	break;
	
	case "pegaPerfis":
	$dados = pegaDados('SELECT * from i3geoadmin_perfis order by perfil');
	retornaJSON($dados);
	break;

	case "alteraMenus":
	$novo = alteraMenus();
	$sql = "SELECT * from i3geoadmin_menus WHERE id_menu = '".$novo."'";
	retornaJSON(pegaDados($sql));
	exit;
	break;

	case "pegaGrupos":
	$dados = pegaDados('SELECT * from i3geoadmin_grupos order by nome_grupo');
	retornaJSON($dados);
	exit;
	break;

	case "alteraGrupos":
	$novo = alteraGrupos();
	$sql = "SELECT * from i3geoadmin_grupos WHERE id_grupo = '".$novo."'";
	retornaJSON(pegaDados($sql));
	exit;
	break;

	case "pegaSubGrupos":
	$dados = pegaDados('SELECT * from i3geoadmin_subgrupos order by nome_subgrupo');
	retornaJSON($dados);
	exit;
	break;
	
	case "alteraSubGrupos":
	$novo = alteraSubGrupos();
	$sql = "SELECT * from i3geoadmin_subgrupos WHERE id_subgrupo = '".$novo."'";
	retornaJSON(pegaDados($sql));
	exit;
	break;

	case "pegaTemas":
	$sql = "SELECT * from i3geoadmin_temas where id_tema = '$id_tema'";
	retornaJSON(pegaDados($sql));
	exit;
	break;
	
	case "pegaTemas2":
	retornaJSON(pegaTemas2());
	exit;
	break;
	
	case "alteraTemas":
	//$r ser� igual ao novo id criado, no caso de inser��o de um novo tema
	$r = alteraTemas();
	if($id == "")
	retornaJSON($r);
	else
	retornaJSON(pegaDados("select * from i3geoadmin_temas where id_tema = '$id'"));
	exit;
	break;
	
	case "alteraTags":
	$novo = alteraTags();
	$sql = "SELECT * from i3geoadmin_tags WHERE id_tag = '".$novo."'";
	retornaJSON(pegaDados($sql));
	exit;
	break;
	
	case "alteraPerfis":
	$novo = alteraPerfis();
	$sql = "SELECT * from i3geoadmin_perfis WHERE id_perfil = '".$novo."'";
	retornaJSON(pegaDados($sql));
	exit;
	break;
	
	case "excluirRegistro":
	if($tabela == "grupos")
	{
		$tabela = "i3geoadmin_grupos";
		$coluna = "id_grupo";
		$filhos = verificaFilhos();
		if($filhos)
		{
			retornaJSON("erro");
			exit;
		}	
	}
	if($tabela == "tags")
	{
		$tabela = "i3geoadmin_tags";
		$coluna = "id_tag";
		excluiTagTemas($id);
	}
	if($tabela == "perfis")
	{
		$tabela = "i3geoadmin_perfis";
		$coluna = "id_perfil";
		excluiPerfil($id);
	}
	if($tabela == "subgrupos")
	{
		$tabela = "i3geoadmin_subgrupos";
		$coluna = "id_subgrupo";
		$filhos = verificaFilhos();
		if($filhos)
		{
			retornaJSON("erro");
			exit;
		}
	}
	if($tabela == "temas")
	{
		$tabela = "i3geoadmin_temas";
		$coluna = "id_tema";
		$filhos = verificaFilhos();
		if($filhos)
		{
			retornaJSON("erro");
			exit;
		}
	}
	if($tabela == "menus")
	{
		$tabela = "i3geoadmin_menus";
		$coluna = "id_menu";
		$filhos = verificaFilhos();
		if($filhos)
		{
			retornaJSON("erro");
			exit;
		}
	}
	retornaJSON(exclui());
	exit;
	break;
	
	case "listaMapsTemas":
	retornaJSON(listaMapsTemas());
	exit;
	break;
}
function excluiPerfil($id)
{
	require_once("conexao.php");
    foreach($dbh->query("select * from i3geoadmin_perfis where perfil = $id") as $row)
    {$perfil = $row["perfil"];}
    if($perfil == "")
    {return;}
    $q = $dbh->query("select * from i3geoadmin_mapas");
	foreach($q as $row)
   	{
   		$t = $row['perfil_mapa'];
   		$i = $row['id_mapa'];
   		$ts = str_replace($perfil,"",$t);
   		if($t != $ts)
   		$dbhw->query("UPDATE i3geoadmin_mapas SET perfil_mapa = '$ts' WHERE id_mapa = $i");
   	}
   	$q = $dbh->query("select * from i3geoadmin_menus");
	foreach($q as $row)
   	{
   		$t = $row['perfil_menu'];
   		$i = $row['id_menu'];
   		$ts = str_replace($perfil,"",$t);
   		if($t != $ts)
   		$dbhw->query("UPDATE i3geoadmin_menus SET perfil_menu = '$ts' WHERE id_menu = $i");
   	}
   	$q = $dbh->query("select * from i3geoadmin_n1");
	foreach($q as $row)
   	{
   		$t = $row['perfil_n1'];
   		$i = $row['id_n1'];
   		$ts = str_replace($perfil,"",$t);
   		if($t != $ts)
   		$dbhw->query("UPDATE i3geoadmin_n1 SET perfil_n1 = '$ts' WHERE id_n1 = $i");
   	}
   	$q = $dbh->query("select * from i3geoadmin_n2");
	foreach($q as $row)
   	{
   		$t = $row['perfil_n2'];
   		$i = $row['id_n2'];
   		$ts = str_replace($perfil,"",$t);
   		if($t != $ts)
   		$dbhw->query("UPDATE i3geoadmin_n2 SET perfil_n2 = '$ts' WHERE id_n2 = $i");
   	}
   	$q = $dbh->query("select * from i3geoadmin_n3");	
	foreach($q as $row)
   	{
   		$t = $row['perfil_n3'];
   		$i = $row['id_n3'];
   		$ts = str_replace($perfil,"",$t);
   		if($t != $ts)
   		$dbhw->query("UPDATE i3geoadmin_n3 SET perfil_n3 = '$ts' WHERE id_n3 = $i");
   	}
   	$q = $dbh->query("select * from i3geoadmin_raiz");
	foreach($q as $row)
   	{
   		$t = $row['perfil'];
   		$i = $row['id_raiz'];
   		$ts = str_replace($perfil,"",$t);
   		if($t != $ts)
   		$dbhw->query("UPDATE i3geoadmin_raiz SET perfil = '$ts' WHERE id_raiz = $i");
   	}
   	$q = $dbh->query("select * from i3geoadmin_sistemasf");
	foreach($q as $row)
   	{
   		$t = $row['perfil_funcao'];
   		$i = $row['id_funcao'];
   		$ts = str_replace($perfil,"",$t);
   		if($t != $ts)
   		$dbhw->query("UPDATE i3geoadmin_sistemasf SET perfil_funcao = '$ts' WHERE id_funcao = $i");
   	}   	
}
function excluiTagTemas($id)
{
	require_once("conexao.php");
	$q1 = $dbh->query("select * from i3geoadmin_tags where id_tag = $id");
    foreach($q1 as $row)
    {$nometag = $row["nome"];}
    if($nometag == ""){return;}
    $q = $dbh->query("select * from i3geoadmin_temas");
	foreach($q as $row)
   	{
   		$t = $row['tags_tema'];
   		$i = $row['id_tema'];
   		$ts = str_replace($nometag,"",$t);
   		if($t != $ts)
   		$dbhw->query("UPDATE i3geoadmin_temas SET tags_tema = '$ts' WHERE id_tema = $i");
   	}			
}
/*
Function: pegaTemas

Pega a lista de temas

Parameters:

filtro - texto para filtrar os dados
*/
function pegaTemas()
{
	global $filtro;
	try 
	{
    	$resultado = array();
    	require_once("conexao.php");
    	foreach($dbh->query('SELECT * from i3geoadmin_temas order by nome_tema') as $row)
    	{
        	$continua = true;
        	if(isset($filtro) && $filtro != "")
        	{
        		$continua = false;
        		if ($row['codigo_tema'] == $filtro)
        		{$continua = true;}
        		$testanome = mb_convert_encoding($filtro,"UTF-8","ISO-8859-1");
        		if (!stristr($row['nome_tema'],$testanome) === FALSE)
        		{$continua = true;}
        		if (!stristr($row['tags_tema'],$testanome) === FALSE)
        		{$continua = true;}
        	}
        	if($row['codigo_tema'] == ""){$continua = true;}
        	if ($continua)
        	$resultado[] = array(
				"nome_tema"=>$row['nome_tema'],
				"codigo_tema"=>$row['codigo_tema'],
				"id_tema"=>$row['id_tema'],
				"desc_tema"=>$row['desc_tema'],
				"link_tema"=>$row['link_tema'],
				"tipoa_tema"=>$row['tipoa_tema'],
				"download_tema"=>$row['download_tema'],
				"ogc_tema"=>$row['ogc_tema'],
				"kml_tema"=>$row['kml_tema'],
				"tags_tema"=>$row['tags_tema']
				);
    	}
    	$dbh = null;
    	$dbh = null;
    	return $resultado;
	}
	catch (PDOException $e)
	{
    	return "Error!: " . $e->getMessage();
	}
}
function pegaTemas2()
{
	global $filtro;
	try 
	{
    	$resultado = array();
    	require_once("conexao.php");
    	foreach($dbh->query('SELECT codigo_tema,nome_tema,id_tema from i3geoadmin_temas order by nome_tema') as $row)
    	{
        	$continua = true;
        	if(isset($filtro) && $filtro != "")
        	{
        		$continua = false;
        		if ($row['codigo_tema'] == $filtro)
        		{$continua = true;}
        		$testanome = mb_convert_encoding($filtro,"UTF-8","ISO-8859-1");
        		if (!stristr($row['nome_tema'],$testanome) === FALSE)
        		{$continua = true;}
        	}
        	if($row['codigo_tema'] == ""){$continua = true;}
        	if ($continua)
        	$resultado[] = array(
				"nome_tema"=>$row['nome_tema'],
				"codigo_tema"=>$row['codigo_tema'],
				"id_tema"=>$row['id_tema']
				);
    	}
    	$dbh = null;
    	$dbh = null;
    	return $resultado;
	}
	catch (PDOException $e)
	{
    	return "Error!: " . $e->getMessage();
	}
}
/*
Function: alteraMenus

Altera o registro de um menu. Se id for vazio acrescenta o registro
*/
function alteraMenus()
{
	global $nome,$desc,$id,$aberto,$perfil,$publicado_menu;
	try 
	{
		//$nome = mb_convert_encoding($nome,"UTF-8","ISO-8859-1");
		//$desc = mb_convert_encoding($desc,"UTF-8","ISO-8859-1");
		$retorna = "";
    	include("conexao.php");
    	if($id != "")
    	{
    		$dbhw->query("UPDATE i3geoadmin_menus SET publicado_menu = '$publicado_menu',aberto = '$aberto', nome_menu = '$nome', desc_menu = '$desc', perfil_menu = '$perfil' WHERE id_menu = $id");
			$retorna = $id;
    	}
    	else
    	{
    		$dbhw->query("INSERT INTO i3geoadmin_menus (publicado_menu, nome_menu, desc_menu, aberto, perfil_menu) VALUES ('','', '','SIM','')");
			$id_menu = $dbhw->query("SELECT * FROM i3geoadmin_menus");
			$id_menu = $id_menu->fetchAll();
			$id_menu = intval($id_menu[count($id_menu)-1]['id_menu']);
			$retorna = $id_menu;
    	}
    	$dbhw = null;
    	$dbh = null;
    	return $retorna;
	}
	catch (PDOException $e)
	{
    	return "Error!: " . $e->getMessage();
	}
}
function alteraPerfis()
{
	global $perfil,$id;
	try 
	{
		$dbh = "";
    	include("conexao.php");
    	$retorna = "";
    	if($id != "")
		{
   			$original = "";
   			foreach($dbh->query("select * from i3geoadmin_perfis where id_perfil = $id") as $row)
   			{$original = $row["perfil"];}
   			$dbhw->query("UPDATE i3geoadmin_perfis SET perfil = '$perfil' WHERE id_perfil = $id");
			if($original != "")
			{
   				$q = $dbh->query("select * from i3geoadmin_mapas");
   				foreach($q as $row)
	    		{
        			$t = $row['perfil_mapa'];
        			$i = $row['id_mapa'];
        			$ts = str_replace($original,$perfil,$t);
        			if($t != $ts)
        			$dbhw->query("UPDATE i3geoadmin_mapas SET perfil_mapa = '$ts' WHERE id_mapa = $i");
	    		}
	    		$q = $dbh->query("select * from i3geoadmin_menus");
   				foreach($q as $row)
	    		{
        			$t = $row['perfil_menu'];
        			$i = $row['id_menu'];
        			$ts = str_replace($original,$perfil,$t);
        			if($t != $ts)
	       			$dbhw->query("UPDATE i3geoadmin_menus SET perfil_menu = '$ts' WHERE id_menu = $i");
	    		}
	    		$q = $dbh->query("select * from i3geoadmin_n1");
    			foreach($q as $row)
	    		{
	       			$t = $row['perfil_n1'];
	       			$i = $row['id_n1'];
	       			$ts = str_replace($original,$perfil,$t);
	       			if($t != $ts)
	       			$dbhw->query("UPDATE i3geoadmin_n1 SET perfil_n1 = '$ts' WHERE id_n1 = $i");
	    		}
	    		$q = $dbh->query("select * from i3geoadmin_n2");
    			foreach($q as $row)
	    		{
	       			$t = $row['perfil_n2'];
	       			$i = $row['id_n2'];
	       			$ts = str_replace($original,$perfil,$t);
	       			if($t != $ts)
	       			$dbhw->query("UPDATE i3geoadmin_n2 SET perfil_n2 = '$ts' WHERE id_n2 = $i");
	    		}
	    		$q = $dbh->query("select * from i3geoadmin_n3");
    			foreach($q as $row)
	    		{
	       			$t = $row['perfil_n3'];
	       			$i = $row['id_n3'];
	       			$ts = str_replace($original,$perfil,$t);
	       			if($t != $ts)
	       			$dbhw->query("UPDATE i3geoadmin_n3 SET perfil_n3 = '$ts' WHERE id_n3 = $i");
	    		}
	    		$q = $dbh->query("select * from i3geoadmin_raiz");
    			foreach($q as $row)
	    		{
	       			$t = $row['perfil'];
	       			$i = $row['id_raiz'];
	       			$ts = str_replace($original,$perfil,$t);
	       			if($t != $ts)
	       			$dbhw->query("UPDATE i3geoadmin_raiz SET perfil = '$ts' WHERE id_raiz = $i");
	    		}
	    		$q = $dbh->query("select * from i3geoadmin_sistemas");
    			foreach($q as $row)
	    		{
	       			$t = $row['perfil_sistema'];
	       			$i = $row['id_sistema'];
	       			$ts = str_replace($original,$perfil,$t);
	       			if($t != $ts)
	       			$dbhw->query("UPDATE i3geoadmin_sistemas SET perfil_sistema = '$ts' WHERE id_sistema = $i");
	    		}
	    		$q = $dbh->query("select * from i3geoadmin_sistemasf");
    			foreach($q as $row)
	    		{
	       			$t = $row['perfil_funcao'];
	       			$i = $row['id_funcao'];
	       			$ts = str_replace($original,$perfil,$t);
	       			if($t != $ts)
	       			$dbhw->query("UPDATE i3geoadmin_sistemasf SET perfil_funcao = '$ts' WHERE id_funcao = $i");
	    		}
			}
			$retorna = $id;
    	}
    	else
    	{
    		$dbhw->query("INSERT INTO i3geoadmin_perfis (perfil) VALUES ('$perfil')");
			$id = $dbh->query("SELECT * FROM i3geoadmin_perfis");
			$id = $id->fetchAll();
			$id = intval($id[count($id)-1]['id_perfil']);
			$retorna = $id;
    	}
    	$dbhw = null;
    	$dbh = null;
    	return $retorna;
	}
	catch (PDOException $e)
	{
    	return "Error!: " . $e->getMessage();
	}
}
function alteraTags()
{
	global $nome,$id;
	try 
	{
		$dbh = "";
		//$nome = mb_convert_encoding($nome,"UTF-8","ISO-8859-1");
    	include("conexao.php");
    	$retorna = "";
    	if($id != "")
		{
    		if(!verificaDuplicados("select * from i3geoadmin_tags where nome = '$nome'",$dbh))
    		{
    			$original = "";
    			$q = $dbh->query("select * from i3geoadmin_tags where id_tag = $id");
    			foreach($q as $row)
    			{$original = $row["nome"];}
    			$dbhw->query("UPDATE i3geoadmin_tags SET nome = '$nome' WHERE id_tag = $id");
    			//exclui os registros do tag alterado nos temas
    			if($original != "")
    			{
    				$q = $dbh->query("select * from i3geoadmin_temas");
    				foreach($q as $row)
		    		{
	        			$ts = $row['tags_tema'];
	        			$i = $row['id_tema'];
	        			$ts = str_replace($original,$nome,$ts);
	        			$dbhw->query("UPDATE i3geoadmin_temas SET tags_tema = '$ts' WHERE id_tema = $i");
		    		}
    			}		
    		}
    		$retorna = $id;		
		}
    	else
    	{
    		$dbhw->query("INSERT INTO i3geoadmin_tags (nome) VALUES ('$nome')");
			$id = $dbh->query("SELECT * FROM i3geoadmin_tags");
			$id = $id->fetchAll();
			$id = intval($id[count($id)-1]['id_tag']);
			$retorna = $id;    	
    	}
    	$dbhw = null;
    	$dbh = null;
    	return $retorna;
	}
	catch (PDOException $e)
	{
    	return "Error!: " . $e->getMessage();
	}
}
/*
Function: alteraGrupos

Altera o registro de um grupo. Se id for vazio acrescenta o registro
*/
function alteraGrupos()
{
	global $nome,$desc,$id;
	try 
	{
		//$nome = mb_convert_encoding($nome,"UTF-8","ISO-8859-1");
		//$desc = mb_convert_encoding($desc,"UTF-8","ISO-8859-1");
    	include("conexao.php");
    	$retorna = "";
    	if($id != "")
    	{
    		$dbhw->query("UPDATE i3geoadmin_grupos SET nome_grupo = '$nome', desc_grupo = '$desc' WHERE id_grupo = $id");
    		$retorna = $id;
    	}
    	else
    	{
    		$dbhw->query("INSERT INTO i3geoadmin_grupos (nome_grupo, desc_grupo) VALUES ('', '')");
			$id_grupo = $dbh->query("SELECT * FROM i3geoadmin_grupos");
			$id_grupo = $id_grupo->fetchAll();
			$id_grupo = intval($id_grupo[count($id_grupo)-1]['id_grupo']);
			$retorna = $id_grupo;
    	}
    	$dbhw = null;
    	$dbh = null;
    	return $retorna;
	}
	catch (PDOException $e)
	{
    	return "Error!: " . $e->getMessage();
	}
}
/*
Function: alteraSubGrupos

Altera o registro de um sub-grupo. Se id for vazio acrescenta o registro
*/
function alteraSubGrupos()
{
	global $nome,$desc,$id;
	try 
	{
		//$nome = mb_convert_encoding($nome,"UTF-8","ISO-8859-1");
		//$desc = mb_convert_encoding($desc,"UTF-8","ISO-8859-1");
    	require_once("conexao.php");
    	$retorna = "";
    	if($id != "")
    	{
	    	$dbhw->query("UPDATE i3geoadmin_subgrupos SET nome_subgrupo = '$nome', desc_subgrupo = '$desc' WHERE id_subgrupo = $id");
    		$retorna = $id;
    	}
    	else
    	{
    		$dbhw->query("INSERT INTO i3geoadmin_subgrupos (nome_subgrupo, desc_subgrupo) VALUES ('', '')");
			$id = $dbh->query("SELECT * FROM i3geoadmin_subgrupos");
			$id = $id->fetchAll();
			$id = intval($id[count($id)-1]['id_subgrupo']);
			$retorna = $id;    	
    	}
    	$dbhw = null;
    	$dbh = null;
    	return $retorna;
	}
	catch (PDOException $e)
	{
    	return "Error!: " . $e->getMessage();
	}
}
/*
Function: alteraTemas

Altera o registro de um tema. Se id for vazio acrescenta o registro
*/
function alteraTemas()
{
	global $nome,$desc,$id,$codigo,$tipoa,$download,$ogc,$kml,$link,$tags;
	try 
	{
		$retorna = "ok";
		//$nome = mb_convert_encoding($nome,"UTF-8","ISO-8859-1");
		//$desc = mb_convert_encoding($desc,"UTF-8","ISO-8859-1");
		//$tags = mb_convert_encoding($tags,"UTF-8","ISO-8859-1");
    	require_once("conexao.php");
    	if($id != "")
    	{
	    	$dbhw->query("UPDATE i3geoadmin_temas SET tags_tema='$tags', link_tema='$link', nome_tema ='$nome',desc_tema='$desc',codigo_tema='$codigo',tipoa_tema='$tipoa',download_tema='$download',ogc_tema='$ogc',kml_tema='$kml' WHERE id_tema = $id");
    		$retorna = $id;
    	}
    	else
    	{
    		$dbhw->query("INSERT INTO i3geoadmin_temas (link_tema,kml_tema,ogc_tema,download_tema,nome_tema,desc_tema,codigo_tema,tipoa_tema,tags_tema) VALUES ('','', '','','','','','','')");
			$id = $dbh->query("SELECT * FROM i3geoadmin_temas");
			$id = $id->fetchAll();
			$id = intval($id[count($id)-1]['id_tema']);
			$retorna = $id;    	
    	}
    	//verifica se � necess�rio adicionar algum tag novo
    	$tags = explode(" ",$tags);
    	foreach($tags as $tag)
    	{
    		if(!(verificaDuplicados("select * from i3geoadmin_tags where nome = '$tag'",$dbh)))
    		{
		    	$dbhw->query("INSERT INTO i3geoadmin_tags (nome) VALUES ('$tag')");   		
    		}	
    	}
    	$dbhw = null;
    	$dbh = null;
    	return $retorna;
	}
	catch (PDOException $e)
	{
    	return "Error!: " . $e->getMessage();
	}
}
/*
Function: listaMapsTemas

Retorna a lista de mapfiles do diretorio i3geo/temas

Parameters:

cp - objeto CPAINT

locaplic - localiza��o da instala��o do I3Geo
*/
function listaMapsTemas()
{
 	global $cp,$locaplic;
 	$arquivos = array();
	if (is_dir($locaplic."/temas"))
	{
   		if ($dh = opendir($locaplic."/temas")) 
		{
       		while (($file = readdir($dh)) !== false) 
			{
				if(!stristr($file, '.map') === FALSE || !stristr($file, ".php")===FALSE)
				{
					$file = str_replace(".map","",$file);
					$file = str_replace(".php","",$file);
					$arquivos[] = $file;
				}
			}
       	}
       	closedir($dh);
   	}
   	sort($arquivos);
 	return $arquivos;
}
/*
/*
Function importarXmlMenu

Importa um arquivo xml do tipo "menutemas" para o banco de dados
*/
function importarXmlMenu()
{
	global $nomemenu,$xml;
	$listaDeTags = array();
	if(!file_exists($xml))
	{return "<br><b>Arquivo $xml n&atilde;o encontrado";}
	include_once("../../classesphp/funcoes_gerais.php");
	include("conexao.php");
	$dbhw->query("INSERT INTO i3geoadmin_menus (desc_menu,nome_menu) VALUES ('','$nomemenu')");
	$id_menu = $dbhw->query("SELECT id_menu FROM i3geoadmin_menus");
	$id_menu = $id_menu->fetchAll();
	$id_menu = intval($id_menu[count($id_menu)-1]['id_menu']);

	$xml = simplexml_load_file($xml);
	//
	//importa os grupos
	//
	$gruposExistentes = array();
	$q = $dbhw->query("select * from i3geoadmin_grupos");
	$resultado = $q->fetchAll();
	foreach($resultado as $r)
	{$gruposExistentes[$r["nome_grupo"]] = 0;}
	foreach($xml->GRUPO as $grupo)
	{
		$nome = ixml($grupo,"GTIPO");
		$descricao = ixml($grupo,"DTIPO");
		if(!isset($gruposExistentes[$nome]))
		$dbhw->query("INSERT INTO i3geoadmin_grupos (desc_grupo,nome_grupo) VALUES ('$descricao','$nome')");
		$gruposExistentes[$nome] = 0;
	}
	//
	//importa os sub-grupos
	//
	$subgruposExistentes = array();
	$q = $dbhw->query("select * from i3geoadmin_subgrupos");
	$resultado = $q->fetchAll();
	foreach($resultado as $r)
	{$subgruposExistentes[$r["nome_subgrupo"]] = 0;}
	foreach($xml->GRUPO as $grupo)
	{
		foreach($grupo->SGRUPO as $sgrupo)
		{
			$nome = ixml($sgrupo,"SDTIPO");
			$descricao = "";
			if(!isset($subgruposExistentes[$nome]))
			$dbhw->query("INSERT INTO i3geoadmin_subgrupos (desc_subgrupo,nome_subgrupo) VALUES ('$descricao','$nome')");
			$subgruposExistentes[$nome] = 0;
		}
	}
	//
	//importa os temas
	//
	$temasExistentes = array();
	$q = $dbhw->query("select * from i3geoadmin_subgrupos");
	$resultado = $q->fetchAll();
	foreach($resultado as $r)
	{$temasExistentes[$r["codigo_tema"]] = 0;}
	foreach($xml->TEMA as $tema)
	{
		$nome = ixml($tema,"TNOME");
		$descricao = ixml($tema,"TDESC");
		$codigo = ixml($tema,"TID");
		$link = ixml($tema,"TLINK");
		$tipo = ixml($tema,"TIPOA");
		$tags = ixml($tema,"TAGS");
		$down = ixml($tema,"DOWNLOAD");
		$kml = ixml($tema,"KML");
		$ogc = ixml($tema,"OGC");
		$listaDeTags = array_merge($listaDeTags,explode(" ",$tags));		
		if(!isset($temasExistentes[$codigo]))
		$dbhw->query("INSERT INTO i3geoadmin_temas (kml_tema,ogc_tema,download_tema,tags_tema,tipoa_tema,link_tema,desc_tema,nome_tema,codigo_tema) VALUES ('$kml','$ogc','$down','$tags','$tipo','$link','$descricao','$nome','$codigo')");
		$temasExistentes[$codigo] = 0;
	}
	foreach($xml->GRUPO as $grupo)
	{
		foreach($grupo->TEMA as $tema)
		{
			$nome = ixml($tema,"TNOME");
			$descricao = ixml($tema,"TDESC");
			$codigo = ixml($tema,"TID");
			$link = ixml($tema,"TLINK");
			$tipo = ixml($tema,"TIPOA");
			$tags = ixml($tema,"TAGS");
			$down = ixml($tema,"DOWNLOAD");
			$kml = ixml($tema,"KML");
			$ogc = ixml($tema,"OGC");		
			$listaDeTags = array_merge($listaDeTags,explode(" ",$tags));		
			if(!isset($temasExistentes[$codigo]))
			$dbhw->query("INSERT INTO i3geoadmin_temas (kml_tema,ogc_tema,download_tema,tags_tema,tipoa_tema,link_tema,desc_tema,nome_tema,codigo_tema) VALUES ('$kml','$ogc','$down','$tags','$tipo','$link','$descricao','$nome','$codigo')");
			$temasExistentes[$codigo] = 0;
		}
		foreach($grupo->SGRUPO as $sgrupo)
		{
			foreach($sgrupo->TEMA as $tema)
			{
				$nome = ixml($tema,"TNOME");
				$descricao = ixml($tema,"TDESC");
				$codigo = ixml($tema,"TID");
				$link = ixml($tema,"TLINK");
				$tipo = ixml($tema,"TIPOA");
				$tags = ixml($tema,"TAGS");
				$down = ixml($tema,"DOWNLOAD");
				$kml = ixml($tema,"KML");
				$ogc = ixml($tema,"OGC");		
				$listaDeTags = array_merge($listaDeTags,explode(" ",$tags));		
				if(!isset($temasExistentes[$codigo]))
				$dbhw->query("INSERT INTO i3geoadmin_temas (kml_tema,ogc_tema,download_tema,tags_tema,tipoa_tema,link_tema,desc_tema,nome_tema,codigo_tema) VALUES ('$kml','$ogc','$down','$tags','$tipo','$link','$descricao','$nome','$codigo')");
				$temasExistentes[$codigo] = 0;
			}
		}		
	}
	//
	//monta �rvore
	//
	//
	//registra os temas no n�vel da raiz
	//
	foreach($xml->TEMA as $tema)
	{
		$codigo = ixml($tema,"TID");
		$perfil = ixml($tema,"PERFIL");
		$r = $dbhw->query("select id_tema from i3geoadmin_temas where codigo_tema = '$codigo'");
		$id_tema = $r->fetchColumn();
		$dbhw->query("INSERT INTO i3geoadmin_raiz (id_tema,id_menu,id_nivel,nivel,perfil) VALUES ('$id_tema','$id_menu','0','0','$perfil')");		
	}
	//
	//registra o restante
	//
	foreach($xml->GRUPO as $grupo)
	{
		$gtipo = ixml($grupo,"GTIPO");
		$n1_perfil = ixml($grupo,"PERFIL");
		$r = $dbhw->query("select id_grupo from i3geoadmin_grupos where nome_grupo = '$gtipo'");
		$id_grupo = $r->fetchColumn();
		$dbhw->query("INSERT INTO i3geoadmin_n1 (id_menu,id_grupo,n1_perfil) VALUES ('$id_menu','$id_grupo','$n1_perfil')");
		$id_n1 = $dbhw->query("SELECT id_n1 FROM i3geoadmin_n1");
		$id_n1 = $id_n1->fetchAll();
		$id_n1 = intval($id_n1[count($id_n1)-1]['id_n1']);

		foreach($grupo->TEMA as $tema)
		{
			$codigo = ixml($tema,"TID");
			$perfil = ixml($tema,"PERFIL");
			$r = $dbhw->query("select id_tema from i3geoadmin_temas where codigo_tema = '$codigo'");
			$id_tema = $r->fetchColumn();
			$dbhw->query("INSERT INTO i3geoadmin_raiz (id_tema,id_menu,id_nivel,nivel,perfil) VALUES ('$id_tema','$id_menu','$id_n1','1','$perfil')");		
		}
		foreach($grupo->SGRUPO as $subgrupo)
		{
			$sdtipo = ixml($subgrupo,"SDTIPO");
			$n2_perfil = ixml($subgrupo,"PERFIL");
			$r = $dbhw->query("select id_subgrupo from i3geoadmin_subgrupos where nome_subgrupo = '$sdtipo'");
			$id_subgrupo = $r->fetchColumn();

			$dbhw->query("INSERT INTO i3geoadmin_n2 (id_n1,id_subgrupo,n2_perfil) VALUES ('$id_n1','$id_subgrupo','$n2_perfil')");
			$id_n2 = $dbhw->query("SELECT id_n2 FROM i3geoadmin_n2");
			$id_n2 = $id_n2->fetchAll();
			$id_n2 = intval($id_n2[count($id_n2)-1]['id_n2']);
			foreach($subgrupo->TEMA as $tema)
			{
				$codigo = ixml($tema,"TID");
				$perfil = ixml($tema,"PERFIL");
				$r = $dbhw->query("select id_tema from i3geoadmin_temas where codigo_tema = '$codigo'");
				$id_tema = $r->fetchColumn();
				$dbhw->query("INSERT INTO i3geoadmin_n3 (id_n2,id_tema,n3_perfil) VALUES ('$id_n2','$id_tema','$perfil')");		
			}		
		}
	}	
	//registra os tags
	$listaDeTags = array_unique($listaDeTags);
	foreach ($listaDeTags as $t)
	{
		if(!(verificaDuplicados("select * from i3geoadmin_tags where nome = '$t'",$dbh)))
		$dbhw->query("INSERT INTO i3geoadmin_tags (nome) VALUES ('$t')");			
	}
	$dbhw = null;
	$dbh = null;
	return "Dados importados.";
}
?>