<?php
/**
 * Pagina inicial do i3Geo
 * Voce pode utilizar o parametro customDir para indicar a pasta onde
 * as interfaces de mapa estao. Nesse caso, os links utilizarao esse parametro
 * Exemplo: localhost/i3geo/init/index.php?customDir=minhaPasta
 *
 * minhaPasta deve estar dentor da pasta i3geo.
 *
 * Se dentro da pasta $customDir existir um arquivo chamado index.php sera feito o include
 * na pagina.
 */
/**
 * Cria as pastas temporarias que o i3Geo precisa, caso nao existam
 */
include (dirname ( __FILE__ ) . "/../ms_configura.php");
if (! empty ( $_GET ["customDir"] )) {
	$customDir = strip_tags ( $_GET ["customDir"] );
} else if (empty ( $customDir )) {
	$customDir = "interface";
}
if (! file_exists ( $dir_tmp )) {
	@mkdir ( $dir_tmp, 0777 );
}
if (file_exists ( $dir_tmp )) {
	@mkdir ( $dir_tmp . "/comum", 0777 );
	@mkdir ( $dir_tmp . "/saiku-datasources", 0777 );
	chmod ( $dir_tmp . "/saiku-datasources", 0777 );
	@mkdir ( $dir_tmp . "/cache", 0777 );
	chmod ( $dir_tmp . "/cache", 0777 );
	@mkdir ( $dir_tmp . "/cache/googlemaps", 0777 );
	chmod ( $dir_tmp . "/cache/googlemaps", 0777 );
}
if (file_exists ( $locaplic . "/" . $customDir . "/index.php" )) {
	include ($locaplic . "/" . $customDir . "/index.php");
}
error_reporting ( 0 );
define ( "ONDEI3GEO", ".." );
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<?php include "head.php"; ?>
<style>
 #brasil {
	background-image: url("../imagens/sprite.png");
	background-position: 0 -600px;
	background-repeat: no-repeat;
	cursor: pointer;
	height: 13px;
	width: 22px;
}

#uk {
	background-image: url("../imagens/sprite.png");
	background-position: 0 -625px;
	background-repeat: no-repeat;
	cursor: pointer;
	height: 13px;
	width: 22px;
}

#espanhol {
	background-image: url("../imagens/sprite.png");
	background-position: 0 -1400px;
	background-repeat: no-repeat;
	cursor: pointer;
	height: 13px;
	width: 22px;
}

#bandeiras img {
	margin-left: 7px;
}

#bandeiras {
	width: 100px;
	text-align: left;
}
</style>
	<script src='../classesjs/compactados/dicionario_compacto.js'></script>
	<script src='../classesjs/compactados/classe_util_compacto.js'></script>
	<script src='../classesjs/compactados/classe_idioma_compacto.js'></script>
	<script src='../classesjs/compactados/mustache.js'></script>
	<script src='dicionario.js'></script>
 </head>

<body style="background-color: #eeeeee; padding-top: 80px;">

	<nav class="navbar navbar-fixed-top navbar-inverse">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#"><?php echo $mensagemInicia;?></a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li><a href="#"><div class="fa" id="bandeiras"></div></a></li>
				</ul>
				<!-- template para permitir a traducao -->
				<div id="menuTpl" >
					<ul class="nav navbar-nav">
						<li><a href="#map-o">{{{mapas}}}</a></li>
					</ul>
					<ul class="nav navbar-nav">
						<li><a href="#download">Download</a></li>
					</ul>
					<ul class="nav navbar-nav">
						<li><a href="#check">{{{admin}}}</a></li>
					</ul>
					<ul class="nav navbar-nav">
						<li><a href="#book">{{{docs}}}</a></li>
					</ul>
					<ul class="nav navbar-nav">
						<li><a href="#group">{{{comunidade}}}</a></li>
					</ul>
					<ul class="nav navbar-nav pull-right">
						<li><a href="#"><i class="fa fa-home fa-2x"></i></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<div class="container">
		<div class="row" >
			<div class="col-sm-12" id="mensagemLogin">
			</div>
			<div class="col-sm-12">
				<div class="jumbotron" id="jumbotron">
				</div>
			</div>
				<!-- Template para criacao dos quadros ver index.js -->
				<div id="botoesTpl">
					<div id="{{{fa}}}" class="col-sm-12" style="width:260px;min-width:260px;max-width:260px;">
						<div class="panel panel-default">
							<div class="panel-body" style="height: 250px;">
								<div class="thumbnail" style="height:90px;">
									<img class="img-rounded" style="height: 100%; width: 100%" src="imagens/{{{img}}}" />
								</div>
								<h4>{{{titulo}}}</h4>
								<div style="overflow:auto;height:200px;">
									<p>{{{subtitulo}}}</p>
								</div>
							</div>
							<div class="panel-footer text-right" style="border:0px;background-color:white;">
								<p>
									<a class="btn btn-primary btn-raised" href="{{{href}}}" role="button" target="_blank" >
									{{{abrir}}} <i class="fa fa-{{{fa}}}" aria-hidden="true" ></i>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			<div class="col-sm-12 hidden" id="tt" style="width:260px;">
				<div class="panel panel-default" >
					<div class="panel-body">
						<a class="twitter-timeline" href="https://twitter.com/i3geo" data-widget-id="288061915689787392" height="300">Tweets @i3Geo</a>
					</div>
				</div>
			</div>
			<div class="col-sm-12 hidden" style="width:260px;">
				<div class="panel panel-default" >
					<div class="panel-body">
						<a class="twitter-timeline" href="https://twitter.com/hashtag/i3geo" data-widget-id="643417277208133633" height="300">i3geo Tweets</a>
					</div>
				</div>
			</div>
		</div>

		<hr>

		<footer class="text-center" >
			<div class="row hidden" >
				<div class="col-sm-6"
					<a rel="license" href="http://creativecommons.org/licenses/GPL/2.0/legalcode.pt" target="_blank"><img alt="Licen&ccedil;a Creative Commons" style="border-width: 0" src="https://i.creativecommons.org/l/GPL/2.0/88x62.png" /></a><br />O i3Geo est&aacute; licenciado com uma Licen&ccedil;a <a
					rel="license" href="http://creativecommons.org/licenses/GPL/2.0/legalcode.pt" target="_blank">Creative Commons - Licen&ccedil;a P&uacute;blica Geral GNU (&#34;GNU General Public License&#34;)</a>
				</div>
				<div class="col-sm-6">
					<script type='text/javascript' src='https://www.openhub.net/p/i3geo/widgets/project_users?format=js&style=blue'></script>
				</div>
			</div>
		</footer>

	</div>

    <?php
    echo "<script>";
    include "index.js";
    echo "</script>";
    include "body.php";
    ?>
    <script>
    $(document).ready(function(){
		var template = '<div class="col-sm-12" style="width:260px;min-width:260px;max-width:260px;"><div class="panel panel-default"><div class="panel-body" style="height: 250px;"><div class="thumbnail" style="height:90px;"><img class="img-rounded" style="height: 100%; width: 100%" src="imagens/{{{img}}}" /></div><h4>{{{titulo}}}</h4><div style="overflow:auto;height:200px;"><p>{{{subtitulo}}}</p></div></div><div class="panel-footer text-right" style="border:0px;background-color:white;"><p><a class="btn btn-primary btn-raised" href="{{{href}}}" role="button" target="_blank" >Abrir <i class="fa fa-{{{fa}}}" aria-hidden="true" ></i></a></p></div></div></div>';

    	<?php
		if ($i3geomaster [0] ["usuario"] == "admin" && $i3geomaster [0] ["senha"] == "admin") {
			echo "var men = '<div class=\'alert alert-danger\' >' + $" . "trad(19,g_traducao_init) + '</div>';";
		} else {
			echo "var men = '';";
		}
		?>
    	mostraBotoesBT(men);
    	$('.hidden').removeClass('hidden');
    	//carrega o TT
    	window.twttr = (function(d, s, id) {
    		  var js, fjs = d.getElementsByTagName(s)[0],
    		    t = window.twttr || {};
    		  if (d.getElementById(id)) return t;
    		  js = d.createElement(s);
    		  js.id = id;
    		  js.src = "https://platform.twitter.com/widgets.js";
    		  fjs.parentNode.insertBefore(js, fjs);

    		  t._e = [];
    		  t.ready = function(f) {
    		    t._e.push(f);
    		  };

    		  return t;
    		}(document, "script", "twitter-wjs"));
    });
    </script>
</body>
</html>