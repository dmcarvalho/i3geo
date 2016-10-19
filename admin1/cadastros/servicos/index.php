<?php
define ( ONDEI3GEO, "../../.." );
include (dirname ( __FILE__ ) . "/../../../ms_configura.php");
error_reporting ( 0 );
include "../../head.php";
?>
<div class="container-fluid migalha">
	<div class="row">
		<div class="btn-group btn-breadcrumb">
			<a class="btn btn-default" href="../../../init/index.php"><div>i3Geo</div></a>
			<a class="btn btn-default" href="../../index.php"><div>Admin</div></a>
			<a class="btn btn-default" style="pointer-events: none"><div>Cadastros</div></a>
			<a class="btn btn-default" style="pointer-events: none"><div>Servi&ccedil;os</div></a>
		</div>
	</div>
</div>
<div class="container">
	<div class="row center-block">
		<div class="col-md-12" id="titulo">
			<div class="well hidden" >
				<!--
				<button data-toggle="modal" data-target="#ajudaPrincipal"
					class="btn btn-primary btn-fab btn-fab-mini pull-right">
					<i class="material-icons">help</i>
				</button>
				-->
				<h2><small>{{{txtTitulo}}}</small></h2>
				<blockquote>{{{txtDesc}}}</blockquote>
				<!-- aqui entra o filtro -->
				<div class="form-group">

					<select title="{{{filtro}}}" onchange="i3GEOadmin.core.filtra(this)" id="filtro" class="form-control input-lg">
					</select>
				</div>

				<div class="clearfix"></div>
				<!--Modal ajuda
				<div id="ajudaPrincipal" class="modal fade" tabindex="-1">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-body">
								<p>{{{txtWebservices}}}</p>
							</div>
						</div>
					</div>
				</div>
				-->
			</div>
			<div class="well hidden">
				<div class="row pull-right">
					<a onclick="i3GEOadmin.webservices.adicionaDialogo();" href="javascript:void(0)" class="btn btn-primary" style="color:#008579;" role="button" >{{{adicionar}}}</a>
				</div>
				<div class="clearfix"></div>
				<div id="corpo">
				</div>
			</div>
		</div>
	</div>
</div>
<script id="templateFiltro" type="x-tmpl-mustache">
<option value="form-{{id_ws}}">{{{nome_ws}}}</option>
</script>
<script id="templateFormLista" type="x-tmpl-mustache">
<form id="form-edicao-{{id_ws}}" style="" action="#" onsubmit="{{onSalvar}}('{{id_ws}}');return false;" onchange="this.style.boxShadow='2px 2px 5px 0 #009688';" class="form-horizontal" role="form" method="post"   >
	<div class="row">
		<div class="col-md-12">
			<h4>{{{nome_ws}}}</h4>
			<div class="form-group form-group-lg">
				<label class="col-md-2 control-label" for="nome_ws" >{{{nomeTxt}}}</label>
				<div class="col-md-10">
					<input title="{{{nomeTxt}}}" type="text" value="{{{nome_ws}}}" class="form-control" name="nome_ws" required>
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-md-2 control-label" for="desc_ws">{{{descricaoTxt}}}</label>
				<div class="col-md-10">
					<input title="{{{descricaoTxt}}}" type="text" value="{{{desc_ws}}}" class="form-control" name="desc_ws" >
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-md-2 control-label" for="autor_ws">{{{autor}}}</label>
				<div class="col-md-10">
					<input title="{{{autor}}}" type="text" value="{{{autor_ws}}}" class="form-control" name="autor_ws" required>
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-md-2 control-label" for="link_ws">{{{endereco}}}</label>
				<div class="col-md-10">
					<input title="{{{endereco}}}" type="text" value="{{{link_ws}}}" class="form-control" name="link_ws">
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-md-2 control-label" for="tipo_ws">{{{tipo}}}</label>
				<div class="col-md-10">
					<select title="{{{tipo}}}" name="tipo_ws" class="form-control">
						{{{opcoesTipo}}}
					</select>
				</div>
			</div>
		</div>
	</div>
	<div class="pull-right">
		<button type="submit" class="btn btn-primary" role="button" style="color:#008579;">{{salvar}}</button>
	</div>
	<div class="clearfix"></div>
</form>
</script>
<script id="templateLista" type="x-tmpl-mustache">
<div class="list-group-item" id="form-{{id_ws}}">
	<div class="row-content" >
		<h3 class="list-group-item-heading {{escondido}}">
			<a href="javascript:void(0)" onclick="{{onEditar}}('{{id_ws}}')" class="btn btn-danger btn-fab btn-fab-mini pull-right" role="button" aria-expanded="false" >
				<i class="material-icons md-18">edit</i>
			</a>
			<span class="pull-right">&nbsp;&nbsp;</span>
			<a href="javascript:void(0)" onclick="{{onExcluir}}('{{id_ws}}')" class="btn btn-danger btn-fab btn-fab-mini pull-right" role="button">
				<i class="material-icons md-18">delete_forever</i>
			</a>
			{{{nome_ws}}}
		</h3>
	</div>
	<div class="list-group-separator"></div>
</div>
</script>
<script id="templateOpcoesTipo" type="x-tmpl-mustache">
	<option value="">---</option>
	<option {{KML-sel}} value="KML">KML</option>
	<option {{WMS-sel}} value="WMS">WMS</option>
	<option {{WMS-Tile-sel}} value="WMS-Tile">WMS-Tile</option>
	<option {{GEORSS-sel}} value="GEORSS">GEORSS</option>
	<option {{WS-sel}} value="WS">WS</option>
	<option {{DOWNLOAD-sel}} value="DOWNLOAD">DOWNLOAD</option>
	<option {{GEOJSON-sel}} value="GEOJSON">GEOJSON</option>
</script>
<script type="text/javascript" src="index.js"></script>
<script type="text/javascript" src="../../dicionario/webservices.js"></script>
<script>
	$(document).ready(function(){
		//vem de admin1/index.js
		iniciaMenuPrincipal();
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
		//traducao
		var t = $("#titulo");
		//complementa dicionario
		i3GEOadmin.webservices.dicionario = $.extend(
			{},
			i3GEOadmin.webservices.dicionario,
			i3GEOadmin.core.dicionario
		);

		i3GEOadmin.core.dicionario = null;

		i3GEOadmin.webservices.dicionario = i3GEO.idioma.objetoIdioma(i3GEOadmin.webservices.dicionario);

		t.html(
			Mustache.to_html(
				t.html(),
				i3GEOadmin.webservices.dicionario
			)
		);
		$.material.init();
		var inicia = function() {
			$(".hidden").removeClass('hidden');
			i3GEOadmin.webservices.init($("#corpo"));
		};
		i3GEO.login.verificaOperacao("admin/html/webservices",i3GEO.configura.locaplic, inicia, "sessao");
	});
</script>
</body>
</html>
