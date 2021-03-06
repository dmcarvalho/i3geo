<?php
define ( ONDEI3GEO, ".." );
include (dirname ( __FILE__ ) . "/../ms_configura.php");
if (! empty ( $_GET ["customDir"] )) {
	$customDir = strip_tags ( $_GET ["customDir"] );
} else if (empty ( $customDir )) {
	$customDir = "interface";
}
if (! file_exists ( $dir_tmp )) {
	@mkdir ( $dir_tmp, 0744 );
}
if (file_exists ( $dir_tmp )) {
	if (! file_exists ( $dir_tmp . "/comum" )) {
		@mkdir ( $dir_tmp . "/comum", 0744 );
	}
	if (! file_exists ( $dir_tmp . "/saiku-datasources" )) {
		@mkdir ( $dir_tmp . "/saiku-datasources", 0744 );
		chmod ( $dir_tmp . "/saiku-datasources", 0744 );
	}
	if (! file_exists ( $dir_tmp . "/cache" )) {
		@mkdir ( $dir_tmp . "/cache", 0744 );
		chmod ( $dir_tmp . "/cache", 0744 );
	}
	if (! file_exists ( $dir_tmp . "/cache/googlemaps" )) {
		@mkdir ( $dir_tmp . "/cache/googlemaps", 0744 );
		chmod ( $dir_tmp . "/cache/googlemaps", 0744 );
	}
}
error_reporting ( 0 );
include "../init/head.php";
?>
<style>
.btn-qrcode {
	background-color: #fff;
	color: #ddd;
	margin: 5px;
	width: 13px;
	position: absolute;
	top: 12px;
	left: 28px;
	text-align: center;
	border-radius: 20%;
}

.list-group .list-group-separator::before {
	width: 100%;
}

.panel-heading [data-toggle="collapse"]:after {
	font-family: 'FontAwesome';
	content: "\f054";
	float: right;
	margin-right: 5px;
	color: #fffff;
	font-size: 12px;
	line-height: 16px;
	-webkit-transform: rotate(-90deg);
	-moz-transform: rotate(-90deg);
	-ms-transform: rotate(-90deg);
	-o-transform: rotate(-90deg);
	transform: rotate(-90deg);
}

.panel-heading [data-toggle="collapse"].collapsed:after {
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	transform: rotate(90deg);
}

.thumbnail.hidden-xs {
	float: left;
	height: 78px;
	width: 170px
}

.thumbnail.hidden-xs>a>img {
	height: 67px;
	width: 160px;
}

.thumbnail.visible-xs {
	float: left;
	height: 43px;
	width: 85px
}

.thumbnail.visible-xs>a>img {
	height: 33px;
	width: 80px;
}
</style>
<script id="templateLinks" type="x-tmpl-mustache">
<div class="list-group">
	<div class="row-content" >
		<h4 class="list-group-item-heading">
			{{{nome}}}
		</h4>
		<p class="list-group-item-text hidden-xs hidden-sm">
			<a href="{{{link}}}" target="_blank">{{{link}}}</a>
		</p>
	</div>
	<div class="list-group-separator"></div>
</div>
</script>
<body style="padding-top: 55px; position: relative;" >
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="../init/index.php"><?php echo $mensagemInicia;?> <i
					class="fa fa-home fa-1x"></i></a>
			</div>
			<ul class="nav navbar-nav">
				<li><a title="RSS" href="../admin/rssmapas.php"><i class="material-icons ">rss_feed</i></a></li>
				<li><a title="JSON" href="../admin/rssmapas.php?output=json"><i class="material-icons ">code</i></a></li>
			</ul>
		</div>
	</nav>
	<!--para as mensagens de alerta-->
	<div class="navbar-fixed-top alert alert-success text-center" style="padding: 0px;"></div>
	<div class="container-fluid">
		<div class="row">
			<ol class="breadcrumb">
				<li><a href="../init/index.php?home=">i3Geo</a></li>
				<li class="active">Mapas de usu&aacute;rios</li>
			</ol>
		</div>
	</div>

	<div class="container">
		<div class="row center-block">
			<div class="col-md-12">
				<div class="well" id="corpo">
					<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <span class="sr-only">Loading...</span>
				</div>
			</div>
		</div>
	</div>
	<div id="modal" class="modal fade" tabindex="-1" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body"></div>
			</div>
		</div>
	</div>
<script id="templateLista" type="x-tmpl-mustache">
<div class="list-group-item" >
	<div class="row-content" >
		<h4 class="list-group-item-heading">
			<span class="pull-right">&nbsp;&nbsp;</span>
			<a onclick="mostraLinks('detalhe_{{ID_MAPA}}')" href="javascript:void(0)" class="btn btn-danger btn-fab btn-fab-mini pull-right" role="button">
				<i class="material-icons md-18">more_horiz</i>
			</a>
			<span class="pull-right">&nbsp;&nbsp;</span>
			<a title="default" href="{{{LINK}}}" class="btn btn-danger btn-fab btn-fab-mini pull-right" role="button">
				<i class="material-icons md-18">launch</i>
			</a>
			<span class="pull-right">&nbsp;&nbsp;</span>
			<a title="link" role="button" href="javascript:void(0)" data-toggle="quadroQrcode" data-url="{{{LINK}}}" class="btn btn-danger btn-fab btn-fab-mini pull-right">
				<span class="glyphicon glyphicon-qrcode" aria-hidden="true"></span>
			</a>
			<a href="{{{LINK}}}"><img class="img-rounded" src="{{{IMAGEM}}}" />&nbsp;{{{NOME}}}</a>
		</h4>
	</div>
	<div class="list-group-separator"></div>
</div>
<!-- dados para o modal -->
<div style="display:none" id="detalhe_{{ID_MAPA}}">{{{subtitulo}}}</div>
</script>
	<script src='../pacotes/cpaint/cpaint2_compacto.inc.js'></script>
	<script src='../classesjs/compactados/dicionario_compacto.js'></script>
	<script src='../classesjs/compactados/classe_util_compacto.js'></script>
	<script src='../classesjs/compactados/classe_idioma_compacto.js'></script>
	<script src='../classesjs/compactados/classe_login_compacto.js'></script>
	<script src='../classesjs/compactados/classe_php_compacto.js'></script>
	<script src='../classesjs/compactados/mustache.js'></script>
	<script src='dicionario.js'></script>
	<script src='index.js'></script>
	<script>
	$(document).ready(function(){
		i3GEO.configura = {"locaplic" : window.location.href.split("/mapas")[0],"sid": ""};
		$(".active").html($trad("mapas",g_traducao_mapas));
		mostraBotoesBT();
		$('.escondido').removeClass('hidden');
		$.material.init();
	});
	</script>
</body>
</html>
