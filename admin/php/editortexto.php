<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1">
<title>Editor texto</title>
<style type="text/css">
body {
	margin: 20;
	padding: 20;
	font-size: 14px;
}
</style>
<link rel="stylesheet" type="text/css" href="../html/admin.css">
</head>
<body class=" yui-skin-sam ">
	<div class="" id="divGeral" style="width: 100%;">
		<h1>Editor de mapfiles</h1>
		Mais detalhes sobre a edi&ccedil;&atilde;o de mapfiles: <a href="http://mapserver.org/mapfile/index.html#mapfile" target="_new">Documenta&ccedil;&atilde;o do Mapserver</a>
		<br><br>
		<input type=button value="<--- Voltar" onclick="window.history.back()" />
		<br> <br> Mapfile em edi&ccedil;&atilde;o:
		<div id="comboMapfiles" style="width: 100%; max-width: 450px">Aguarde...</div>
		<br><br>
		<form style="width: 98%;" action="editortexto.php?mapfile=<?php echo $_GET["mapfile"];?>" method=post>
			<input type=submit value="Salvar (tamb&eacute;m atualiza o mapa)" />
			<input type=button value="Testar" onclick="testar()" />
			<input type=button value="Testar no i3Geo" onclick="abrirI3geo()" />
			(Salve antes de testar)<br> <br>
			<?php
			//evita erros removendo caracteres PHP
			if(isset($_POST["texto"])){
				$gravarTexto = $_POST["texto"];
				$_POST["texto"] = "";
			}
			include_once(dirname(__FILE__)."/login.php");
			if(verificaOperacaoSessao("admin/php/editortexto") == false){
				echo "Vc nao pode realizar essa operacao.";exit;
			}
			error_reporting(0);
			$mapfile = $locaplic."/temas/".$_GET["mapfile"].".map";
			if(!file_exists($mapfile))
			{
				echo "Arquivo $mapfile n&atilde;o existe.";exit;
			}
			//remove o cache OGC
			$agora = intval(time() / 1000);
			$nomeMapfileTmp = $dir_tmp."/ogc_".md5($mapfile)."_".$agora.".map";
			$nomeMapfileTmp = str_replace(",","",$nomeMapfileTmp);
			$nomeMapfileTmp = str_replace(" ","",$nomeMapfileTmp);
			chmod($nomeMapfileTmp,0777);
			unlink($nomeMapfileTmp);
			//
			if($_POST["tipo"] == "gravar"){
				$fp = fopen($mapfile,"w");
				if($fp == false){
					echo "<span style=color:red <b>N&atilde;o foi poss&iacute;vel salvar o arquivo. Verifique as permiss&otilde;es ou se h&aacute; algum erro no mapfile</b></span><br><br>";
				}
				else{
					fwrite($fp,$gravarTexto);
				}
				fclose($fp);
			}
			echo 'Ajudante de cores RGB: <input type=text value="clique" size=10 id="corrgb" onclick="i3GEO.util.abreCor(\'\',\'corrgb\',\'rgbSep\')" /><br><br>';
			echo "<div style='width:2000px;' ><TEXTAREA name=texto cols=100 rows=20 style='width:500px;float:left;height:500px'>";
			echo file_get_contents($mapfile);
			echo "</TEXTAREA>";
			$mapfile = str_replace("\\","/",$mapfile);

			echo "<iframe id='mapaPreview' src='../../mashups/openlayers.php?nocache=sim&DESLIGACACHE=sim&controles=navigation,panzoombar,scaleline,mouseposition&botoes=identifica&largura=480&fundo=".$mapfile."&temas=".$mapfile."' cols=100 rows=20 style='position:relative;top:2px;overflow:hidden;width:500px;height:500px;border:1px solid gray;'>";
			echo "</iframe></div>";
			echo "<input type=hidden name=tipo value=gravar />";

			if(!@ms_newMapObj($mapfile)){
				echo "<span style=color:red <b>N&atilde;o foi poss&iacute;vel criar o mapa. Verifique as permiss&otilde;es ou se h&aacute; algum erro no mapfile</b></span><br><br>";
			}
			else{
				$mapa = ms_newMapObj($mapfile);
				$n = $mapa->numlayers;
				echo "<br><br>Colunas dos layers:<br><br>";
				for($i=0;$i<$n;$i++){
					if(@$mapa->getlayer($i)){
						$l = $mapa->getlayer($i);
						echo $l->name.": ".(implode(",",pegaItens($l)))."<br><br>";
					}
					else{
						echo "<span style=color:red <b>N&atilde;o foi poss&iacute;vel criar o LAYER {$l->name}. Verifique as permiss&otilde;es ou se h&aacute; algum erro no mapfile</b></span><br><br>";
					}
				}
			}
			?>
		</form>
	</div>
	<script type="text/javascript" src="../js/core.js"></script>
	<script src="../../classesjs/classe_util.js" type="text/javascript"></script>
	<script>
i3GEO.configura = {locaplic: "../../"};

ins = "<p><div id=filtroDeLetras ></div><br>";
//document.getElementById("letras").innerHTML = ins;
core_listaDeLetras("filtroDeLetras","filtraLetra");
if(i3GEO.util.pegaCookie("I3GEOletraAdmin")) {
	letraAtual = i3GEO.util.pegaCookie("I3GEOletraAdmin");
}
else{
	letraAtual = "";
}
function filtraLetra(letra) {
	letraAtual = letra;
	if (letra == "Todos") {
		letra = "";
	}
	i3GEO.util.insereCookie("I3GEOletraAdmin", letra);
	core_pegaMapfiles("comboMapfiles()", letra);
}
function comboMapfiles(){
	var n = $mapfiles.length,
		i,ins;
	ins = "<select id='selectComboMapfile' onchange='mudaMapfile(this)'><option value=''>Edite outro mapfile</option>";
	for(i=0;i<n;i++){
		if($mapfiles[i].extensao === "map"){
			ins += "<option value='"+$mapfiles[i].codigo+"'>"+$mapfiles[i].codigo+" - "+$mapfiles[i].nome+"</optiona>";
		}
	}
	ins += "</select>";
	$i("comboMapfiles").innerHTML = ins;
	$i("selectComboMapfile").value = "<?php echo $_GET["mapfile"];?>";
};
core_pegaMapfiles("comboMapfiles()",letraAtual,"");
function mudaMapfile(obj){
	if(obj.value != ""){
		window.location.href = "editortexto.php?mapfile="+obj.value;
	}
}
function testar(){
	window.open("../../testamapfile.php?map=<?php echo $_GET["mapfile"]; ?>");
}
function abrirI3geo(){
	window.open("../../ms_criamapa.php?layers=<?php echo $_GET["mapfile"]; ?>");
}
</script>