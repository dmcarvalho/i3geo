<?php
include("classesphp/pega_variaveis.php");
?>
<html>
<head>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-1">
<link rel="stylesheet" type="text/css" href="css/i3geo_ferramentas.css">
<title></title>
</head>
<body style=overflow:auto; >
<div style=text-align:center;width:600px >
<p><img src="imagens/i3geo1.jpg" />
<p style='font-size:16px'>Documenta��o do usu�rio. Para ver toda a documenta��o, 
clique <a href="ajuda_usuario.php" >aqui</a></p><br>
</div>
<div id=resultado style='width:600px;'>
</div>
<script language="JavaScript" type="text/javascript" src="classesjs/dicionario_ajuda.js"></script>
<script>
var idcategoria = "<?php echo $idcategoria;?>"
var idajuda = "<?php echo $idajuda;?>"
function pegaAjuda(tipo,categoria){
	eval("var obj = g_traducao_ajuda."+tipo)
	for(var k in obj){
		if(idajuda != "" && idajuda != k)
		{}
		else
		{
			ins += "<p style='font-size:16px;color:#759555'><b>"+obj[k].titulo+"</b></p>"
			ins += "<p>"+obj[k].pt+"</p>"
			ins += "<p>"+obj[k].complemento+"</p>"
			ins += "<p style='color:gray'>"+obj[k].diretorio+"</p>"
		}
	}	
}
function inicia()
{
	ins = "<div style='text-align:justify'>"
	for(var key in g_traducao_ajuda_categorias){
		if(idcategoria != "" && idcategoria != key)
		{}
		else
		{
			ins += "<p style='font-size:18px' ><b>"+g_traducao_ajuda_categorias[key].titulo+"</b></p>"
			pegaAjuda("ferramentas",g_traducao_ajuda_categorias[key])
		}
	}
	document.getElementById("resultado").innerHTML = ins+"</div>"
}
inicia()
</script>
</body>
</html>