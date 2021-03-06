<?php
/*
 * Licenca:
 *
 * GPL2
 *
 * i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet
 *
 * Direitos Autorais Reservados (c) 2006 Edmar Moretti
 * Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com
 *
 * Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo
 * e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a P&uacute;blica Geral
 * GNU conforme publicada pela Free Software Foundation;
 *
 * Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til,
 * por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl&iacute;cita
 * de COMERCIABILIDADE OU ADEQUA&Ccedil;&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA.
 * Consulte a Licen&ccedil;a P&uacute;blica Geral do GNU para mais detalhes.
 * Voc&ecirc; deve ter recebido uma copia da Licen&ccedil;a P&uacute;blica Geral do
 * GNU junto com este programa; se n&atilde;o, escreva para a
 * Free Software Foundation, Inc., no endere&ccedil;o
 * 59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
 */
error_reporting ( 0 );
//
// pega as variaveis passadas com get ou post
//

include_once (dirname ( __FILE__ ) . "/../../../admin/php/login.php");
$funcoesEdicao = array (
		"ADICIONAR",
		"ALTERAR",
		"EXCLUIR",
		"LISTA",
		"LISTAUNICO"
);
if (in_array ( strtoupper ( $funcao ), $funcoesEdicao )) {
	if (verificaOperacaoSessao ( "admin/html/usuarios" ) === false) {
		header ( "HTTP/1.1 403 Vc nao pode realizar essa operacao" );
		exit ();
	}
}
include (dirname ( __FILE__ ) . "/../../../admin/php/conexao.php");

$id_usuario = $_POST["id_usuario"];
$id_papel = $_POST["id_papel"];

testaSafeNumerico([$id_usuario,$id_papel]);

$funcao = strtoupper ( $funcao );
// converte os parametros de definicao dos papeis em um array
if ($funcao == "ADICIONAR" || $funcao == "ALTERAR") {
	$papeis = array ();
	foreach ( array_keys ( $_POST ) as $k ) {
		$teste = explode ( "-", $k );
		if ($teste[0] == "id_papel") {
			$papeis[] = $teste[1] * 1;
		}
	}
	array_unique ( $papeis );
}
switch ($funcao) {
	case "ADICIONAR" :
		$novo = adicionar( $_POST["ativo"], $_POST["data_cadastro"], $_POST["email"], $_POST["login"], $_POST["nome_usuario"], $_POST["senha"], $papeis, $dbhw );
		if ($novo != false) {
			$sql = "SELECT id_usuario, ativo, data_cadastro, email, login, nome_usuario from " . $esquemaadmin . "i3geousr_usuarios WHERE id_usuario = " . $novo;
			$dados = pegaDados ( $sql, $dbh );
			if ($dados === false) {
				header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
				exit ();
			}
			if(strtolower($enviaSenha) == "on"){
				if($senha == "" || $email == ""){
					$dados = header ( "HTTP/1.1 500 para enviar a senha &eacute; necess&aacute;rio preencher o valor de senha e e-mail" );
				} else {
					$dados = enviarSenha( $senha, $email );
				}
			}
			retornaJSON ( $dados );
		} else {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
			exit ();
		}
		exit ();
		break;
	case "ALTERAR" :
		$novo = alterar ( $id_usuario, $_POST["ativo"], $_POST["data_cadastro"], $_POST["email"], $_POST["login"], $_POST["nome_usuario"], $_POST["senha"], $papeis, $dbhw );
		if ($novo === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
			exit ();
		}
		$sql = "SELECT id_usuario,ativo,data_cadastro,email,login,nome_usuario from " . $esquemaadmin . "i3geousr_usuarios WHERE id_usuario = " . $novo;
		$dados = pegaDados ( $sql, $dbh );
		if ($dados === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
			exit ();
		}
		if(strtolower($enviaSenha) == "on"){
			if($senha == "" || $email == ""){
				$dados = header ( "HTTP/1.1 500 para enviar a senha &eacute; necess&aacute;rio preencher o valor de senha e e-mail" );
			} else {
				$dados = enviarSenha( $senha, $email );
			}
		}
		retornaJSON ( $dados );
		exit ();
		break;
		case "LISTAUNICO" :
			$usuarios = pegaDados ( "SELECT id_usuario,ativo,data_cadastro,email,login,nome_usuario from " . $esquemaadmin . "i3geousr_usuarios WHERE id_usuario = $id_usuario order by nome_usuario", $dbh, false );
			$papeisusuario = pegaDados ( "SELECT P.id_papel, P.nome, P.descricao, UP.id_usuario FROM " . $esquemaadmin . "i3geousr_papelusuario AS UP JOIN " . $esquemaadmin . "i3geousr_papeis AS P ON UP.id_papel = P.id_papel WHERE UP.id_usuario = $id_usuario ", dbh, false );
			if ($usuarios === false || $papeis === false) {
				$dbhw = null;
				$dbh = null;
				header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
				exit ();
			}
			$usuario = $usuarios[0];
			//cria o indice do array conforme o id da operacao
			$o = array();
			foreach($papeisusuario as $op){
				$o[$op["id_papel"]] = $op;
			}
			$usuario["papeis"] = $o;
			//todos os papeis
			$papeis = pegaDados ( "SELECT * from " . $esquemaadmin . "i3geousr_papeis order by nome", $dbh );
			$dbhw = null;
			$dbh = null;
			if ($papeis === false) {
				header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
				exit();
			}
			retornaJSON ( array (
					"usuario" => $usuario,
					"papeis" => $papeis
			) );
			break;
	case "LISTA" :
		$usuarios = pegaDados ( "SELECT id_usuario,nome_usuario from " . $esquemaadmin . "i3geousr_usuarios order by lower(nome_usuario)", $dbh, false );
		if ($usuarios === false) {
			$dbhw = null;
			$dbh = null;
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
			exit ();
		}
		$papeis = pegaDados("SELECT * from ".$esquemaadmin."i3geousr_papeis order by nome",$dbh);
		$dbhw = null;
		$dbh = null;
		if ($papeis === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
			exit ();
		}
		retornaJSON ( array (
				"usuarios" => $usuarios,
				"papeis" => $papeis
		) );
		break;
	case "EXCLUIR" :
		$retorna = excluir ( $id_usuario, $dbhw );
		$dbhw = null;
		$dbh = null;
		if ($retorna === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
			exit ();
		}
		retornaJSON ( $id_usuario );
		exit ();
		break;
	case "ENVIARSENHA" :
		if($_POST["senha"] == "" || $_POST["email"] == ""){
			header ( "HTTP/1.1 500 erro ao enviar e-mail. Prrencha o valor de e-mail e senha" );
			exit ();
		}
		$retorna = enviarSenha ( $_POST["senha"], $_POST["email"] );
		if ($retorna === false) {
			header ( "HTTP/1.1 500 erro ao enviar e-mail $email" );
			exit ();
		}
		retornaJSON ( true );
		exit ();
		break;
}
cpjson ( $retorno );

function enviarSenha( $senha, $email ){
	$to      = $email;
	$subject = 'senha i3geo criada em '. date('l jS \of F Y h:i:s A');
	$message = $senha;
	return mail($to, $subject, $message);
}
// $papeis deve ser um array
function adicionar($ativo, $data_cadastro, $email, $login, $nome_usuario, $senha, $papeis, $dbhw) {
	global $esquemaadmin;
	try {
		$dataCol = array(
			"nome_usuario" => '',
			"login" => '',
			"email" => '',
			"ativo" => 0,
			"data_cadastro" => '',
			"senha" => ''
		);
		$id_usuario = i3GeoAdminInsertUnico ( $dbhw, "i3geousr_usuarios", $dataCol, "nome_usuario", "id_usuario" );
		$data_cadastro = date('l jS \of F Y h:i:s A');
		$retorna = alterar ( $id_usuario, $ativo, $data_cadastro, $email, $login, $nome_usuario, $senha, $papeis, $dbhw );
		return $retorna;
	} catch ( PDOException $e ) {
		return false;
	}
}
// $papeis deve ser um array
function alterar($id_usuario, $ativo, $data_cadastro, $email, $login, $nome_usuario, $senha, $papeis, $dbhw) {
	global $convUTF, $esquemaadmin;
	if ($convUTF != true) {
		$nome_usuario = utf8_decode ( $nome_usuario );
	}
	$dataCol = array (
			"nome_usuario" => $nome_usuario,
			"login" => $login,
			"email" => $email,
			"ativo" => $ativo
	);
	// se a senha foi enviada, ela sera trocada
	if ($senha != "") {
		//$dataCol ["senha"] = md5 ( $senha );
		$dataCol["senha"] = password_hash($_GET["senha"], PASSWORD_DEFAULT);
	}
	$resultado = i3GeoAdminUpdate ( $dbhw, "i3geousr_usuarios", $dataCol, "WHERE id_usuario = $id_usuario" );
	if ($resultado === false) {
		return false;
	}
	// apaga todos os papeis
	$resultado = excluirPapeis ( $id_usuario, $dbhw );
	if ($resultado === false) {
		return false;
	}
	if (! empty ( $papeis )) {
		// atualiza papeis vinculados
		foreach ( $papeis as $p ) {
			$resultado = adicionaPapel ( $id_usuario, $p, $dbhw );
			if ($resultado === false) {
				return false;
			}
		}
	}
	return $id_usuario;
}
function adicionaPapel($id_usuario, $id_papel, $dbhw) {
	global $esquemaadmin;
	$dataCol = array (
			"id_usuario" => $id_usuario,
			"id_papel" => $id_papel
	);
	$resultado = i3GeoAdminInsert ( $dbhw, "i3geousr_papelusuario", $dataCol );
	return $resultado;
}
function excluir($id_usuario, $dbhw) {
	global $esquemaadmin;
	$resultado = i3GeoAdminExclui ( $esquemaadmin . "i3geousr_usuarios", "id_usuario", $id_usuario, $dbhw, false );
	$resultado = excluirPapeis ( $id_usuario, $dbhw );
	return $resultado;
}
function excluirPapeis($id_usuario, $dbhw) {
	global $esquemaadmin;
	$resultado = i3GeoAdminExclui ( $esquemaadmin . "i3geousr_papelusuario", "id_usuario", $id_usuario, $dbhw, false );
	return $resultado;
}
?>
