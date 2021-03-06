<?php
// TODO incluir icone para abrir o navegador de arquivos para encontrar a pasta no servidor
define ( ONDEI3GEO, "../../.." );
include (dirname ( __FILE__ ) . "/../../../ms_configura.php");
error_reporting ( 0 );
include "../../head.php";
?>
	<div class="container-fluid migalha" >
		<div class="row">
			<div class="btn-group btn-breadcrumb">
				<a class="btn btn-default" href="../../../init/index.php"><div>i3Geo</div></a>
				<a class="btn btn-default" href="../../index.php"><div>Admin</div></a>
				<a class="btn btn-default" style="pointer-events: none"><div>Upload</div></a>
				<a class="btn btn-default" style="pointer-events: none"><div>Arquivo shapefile</div></a>
			</div>
		</div>
	</div>
<div class="container">
	<div class="row center-block">
		<div class="col-md-12">
			<div class="well hidden" id="titulo">
				<button data-toggle="modal" data-target="#ajudaPrincipal"
					class="btn btn-primary btn-fab btn-fab-mini pull-right">
					<i class="material-icons">help</i>
				</button>
				<h2>
					<small>{{{txtTitulo}}}</small>
				</h2>
				<blockquote>{{{txtDesc}}}</blockquote>
				<!--Modal ajuda-->
				<div id="ajudaPrincipal" class="modal fade" tabindex="-1">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-body">
								<p>{{{txtAjuda}}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="container hidden" id="corpo">
	<form style="" target="i3GEOuploadiframe"
		action="exec.php" method="post"
		ENCTYPE="multipart/form-data" onsubmit="javascript:$('#modalUpload').modal('show');" class="form-horizontal" role="form" method="post">
		<div class="row center-block well">
			<div class="col-md-12">
				<h4>{{{txtArquivos}}}</h4>
				<div class="form-group form-group-lg col-md-6">
					<input name="i3GEOuploadshp" multiple="" type="file"> <input readonly="" class="form-control"
						placeholder="SHP" type="text">
				</div>
				<div class="form-group form-group-lg col-md-6">
					<input name="i3GEOuploadshx" multiple="" type="file"> <input readonly="" class="form-control"
						placeholder="SHX" type="text">
				</div>
				<div class="form-group form-group-lg col-md-6">
					<input name="i3GEOuploaddbf" multiple="" type="file"> <input readonly="" class="form-control"
						placeholder="DBF" type="text">
				</div>
				<div class="form-group form-group-lg col-md-6">
					<input name="i3GEOuploadprj" multiple="" type="file"> <input readonly="" class="form-control"
						placeholder="PRJ (opcional)" type="text">
				</div>
			</div>
		</div>
		<div class="row center-block well">
			<div class="col-md-12">
				<div class="form-group form-group-lg">
					<label class="col-md-5 control-label" for="dirDestino">{{{pastaArmazenamento}}}</label>
					<div class="col-md-7">
						<input title="{{{pastaArmazenamento}}}" type="text" value="" class="form-control"
							name="dirDestino" required>
					</div>
				</div>
				<div class="form-group form-group-lg">
					<label class="col-md-5 control-label" for="tipo">{{{tipoGeom}}}</label>
					<div class="col-md-7">
						<select title="{{{tipoGeom}}}" name="tipo" class="form-control">
							<option value="">{{{naoConhecido}}}</option>
							<option value="1">{{{pontual}}}</option>
							<option value="5">{{{poligonal}}}</option>
							<option value="3">{{{linear}}}</option>
						</select>
					</div>
				</div>
				<div class="form-group form-group-lg">
					<label class="col-md-5 control-label" for="uploadEPSG">{{{projecao}}}</label>
					<div class="col-md-7">
						<select title="{{{projecao}}}" id="uploadEPSG" name="uploadEPSG" class="form-control">

						</select>
					</div>
				</div>
				<div class="form-group form-group-lg">
					<label class="col-md-5 control-label" style="margin-top: 0px;" for="i3GEOuploadCriaMapfile">{{{criaMapfile}}}</label>
					<div class="col-md-7">
						<div class=" checkbox">
							<label> <input title="{{{criaMapfile}}}" name="i3GEOuploadCriaMapfile" type="checkbox">
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row center-block well">
			<div class="col-md-12">
				<div class="pull-right">
					<button type="submit" class="btn btn-primary" role="button" style="color: #008579;">{{envia}}</button>
				</div>
			</div>
		</div>

	</form>
</div>
<div id="modalUpload" class="modal fade" tabindex="-1">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-body modal-lg">
				<iframe name=i3GEOuploadiframe style="text-align: left; border: 0px solid gray;" width="100%"
					height="100%"></iframe>
			</div>
		</div>
	</div>
</div>
<script id="templateProj" type="x-tmpl-mustache">
	<option value="{{{codigo}}}">{{{nome}}}</option>
</script>
<script type="text/javascript" src="index.js"></script>
<script type="text/javascript" src="../../dicionario/uploadshp.js"></script>
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
		i3GEOadmin.uploadshp.dicionario = $.extend(
			{},
			i3GEOadmin.uploadshp.dicionario,
			i3GEOadmin.core.dicionario
		);

		i3GEOadmin.core.dicionario = null;

		i3GEOadmin.uploadshp.dicionario = i3GEO.idioma.objetoIdioma(i3GEOadmin.uploadshp.dicionario);

		t.html(
			Mustache.to_html(
				t.html(),
				i3GEOadmin.uploadshp.dicionario
			)
		);
		$.material.init();
		var inicia = function() {
			$(".hidden").removeClass('hidden');
			var t = $("#corpo");
			t.html(
				Mustache.to_html(
					t.html(),
					i3GEOadmin.uploadshp.dicionario
				)
			);
			i3GEOadmin.uploadshp.listaEpsg();
		};
		i3GEO.login.verificaOperacao("admin/html/subirshapefile",i3GEO.configura.locaplic, inicia, "sessao");
	});
</script>
</body>
</html>