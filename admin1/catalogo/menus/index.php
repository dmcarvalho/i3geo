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
			<a class="btn btn-default" style="pointer-events: none"><div>Cat&aacute;logo</div></a>
			<a class="btn btn-default" style="pointer-events: none"><div>Menus</div></a>
		</div>
	</div>
</div>
<div class="container">
	<div class="row center-block">
		<div class="col-md-12">
			<div class="well hidden" id="titulo">
				<button title="preview" data-toggle="modal" data-target="#previewArvore"
					class="btn btn-primary btn-fab btn-fab-mini pull-right" style="left:10px">
					<i class="material-icons">play_circle_outline</i>
				</button>
				<button data-toggle="modal" data-target="#ajudaPrincipal"
					class="btn btn-primary btn-fab btn-fab-mini pull-right">
					<i class="material-icons">help</i>
				</button>
				<h2>
					<small>{{{txtTitulo}}}</small>
				</h2>
				<blockquote>{{{txtDesc}}}</blockquote>

				<!-- aqui entra o filtro -->
				<div class="form-group">
					 <select title="{{{filtro}}}"
						onchange="i3GEOadmin.core.filtra(this)" id="filtro" class="form-control input-lg">
					</select>
				</div>
				<div class="row pull-right">
					<a onclick="i3GEOadmin.menus.adicionaDialogo();" href="javascript:void(0)"
						class="btn btn-primary" role="button" style="color: #008579;">{{{adicionar}}}</a>
				</div>
				<div class="clearfix"></div>
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
			<div class="well hidden">
				<div id="corpo"></div>
			</div>
		</div>
	</div>
</div>
<script id="templateFiltro" type="x-tmpl-mustache">
<option value="form-{{id_menu}}">{{{nome_menu}}}</option>
</script>
<script id="templateFormLista" type="x-tmpl-mustache">
<form id="form-edicao-{{id_menu}}" style="" action="#" onsubmit="{{onSalvar}}('{{id_menu}}');return false;" onchange="this.style.boxShadow='2px 2px 5px 0 #009688';" class="form-horizontal"
	role="form" method="post" >
	<div class="row">
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-3 control-label" for="nome_menu">{{{nomeMenu}}}</label>
				<div class="col-md-9">
					<input title="{{{nomeMenu}}}" type="text" value="{{{nome_menu}}}" class="form-control" name="nome_menu" required>
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-md-3 control-label" for="es">{{{nomeEs}}}</label>
				<div class="col-md-9">
					<input title="{{{nomeEs}}}" type="text" value="{{{es}}}" class="form-control" name="es">
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-md-3 control-label" for="en">{{{nomeIn}}}</label>
				<div class="col-md-9">
					<input title="{{{nomeIn}}}" type="text" value="{{{en}}}" class="form-control" name="en" >
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-md-3 control-label" for="desc_menu">{{{descricao}}}</label>
				<div class="col-md-9">
					<input title="{{{descricao}}}" type="text" value="{{{desc_menu}}}" class="form-control" name="desc_menu">
				</div>
			</div>

			<div class="form-group form-group-lg">
				<label class="col-md-3 control-label" for="perfil_menu">{{{perfilAjuda}}}</label>
				<div class="col-md-5">
					<input title="{{{perfilAjuda}}}" id="perfil-{{id_menu}}" type="text" value="{{{perfil_menu}}}" class="form-control"
						name="perfil_menu">
				</div>
				<div class="col-md-4">
					<select title="{{{perfilAjuda}}}" class="form-control"
						onchange="i3GEOadmin.menus.addPerfil('perfil-{{id_menu}}',this.value)"> {{{opcoesPerfil}}}
					</select>
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-md-3 control-label" for="publicado_menu">{{{publicadoTxt}}}</label>
				<div class="col-md-9">
					<select title="{{{publicadoTxt}}}" name="publicado_menu" class="form-control"> {{{opcoesPublicado}}}
					</select>
				</div>
			</div>
			<div class="form-group form-group-lg">
				<label class="col-md-3 control-label" for="aberto">{{{iniciaAberto}}}</label>
				<div class="col-md-9">
					<select title="{{{iniciaAberto}}}" name="aberto" class="form-control"> {{{opcoesAberto}}}
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
<div class="list-group-item" id="form-{{id_menu}}">
	<div class="row-content">
		<h3 class="list-group-item-heading {{escondido}}">
			<div class="pull-right">
			<a role="button" class="btn btn-danger btn-fab btn-fab-mini pull-left" onclick="i3GEOadmin.menus.editarGrupos('{{id_menu}}','{{{nome_menu}}}')" href="javascript:void(0)">
				<i class="material-icons md-18">folder_open</i>
			</a>
  			<label class=pull-right><h6 style="margin-top: 5px; margin-bottom: 5px;">&nbsp;{{{txtGrupo}}}</h6></label>
			</div>
			<span class="pull-right">&nbsp;&nbsp;</span>
			<a href="javascript:void(0)" onclick="{{onEditar}}('{{id_menu}}')" class="btn btn-danger btn-fab btn-fab-mini pull-right" role="button">
				<i class="material-icons md-18">edit</i>
			</a>
			<span class="pull-right">&nbsp;&nbsp;</span>
			<a href="javascript:void(0)" onclick="{{onExcluir}}('{{id_menu}}')" class="btn btn-danger btn-fab btn-fab-mini pull-right" role="button">
				<i class="material-icons md-18">delete_forever</i>
			</a>
			{{{nome_menu}}}
		</h3>
	</div>
	<div class="list-group-separator"></div>
</div>
</script>
<script id="templateOpcoesPerfil" type="x-tmpl-mustache">
	<option value="{{{perfil}}}">{{{perfil}}}</option>
</script>
<script id="templateOpcoesPublicado" type="x-tmpl-mustache">
	<option value="">---</option>
	<option {{SIM-sel}} value="SIM">{{{sim}}}</option>
	<option {{NAO-sel}} value="NAO">{{{nao}}}</option>
</script>
<script id="templateOpcoesAberto" type="x-tmpl-mustache">
	<option value="">---</option>
	<option {{SIM-sel}} value="SIM">{{{sim}}}</option>
	<option {{NAO-sel}} value="NAO">{{{nao}}}</option>
</script>
<script type="text/javascript" src="../index.js"></script>
<script type="text/javascript" src="index.js"></script>
<script type="text/javascript" src="../../dicionario/menus.js"></script>
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
		i3GEOadmin.menus.dicionario = $.extend(
			{},
			i3GEOadmin.menus.dicionario,
			i3GEOadmin.core.dicionario
		);

		i3GEOadmin.core.dicionario = null;

		i3GEOadmin.menus.dicionario = i3GEO.idioma.objetoIdioma(i3GEOadmin.menus.dicionario);

		t.html(
			Mustache.to_html(
				t.html(),
				i3GEOadmin.menus.dicionario
			)
		);
		$.material.init();
		var inicia = function() {
			//verifica se foi enviado um parametro de filtro pela url
			var f = "<?php echo filter_var($_GET["id_filtro"], FILTER_SANITIZE_NUMBER_INT); ?>";
			if(f != ""){
				i3GEOadmin.core.initFiltro = "form-" + f;
			}
			$(".hidden").removeClass('hidden');
			i3GEOadmin.menus.init($("#corpo"));
		};
		i3GEO.login.verificaOperacao("admin/html/menus",i3GEO.configura.locaplic, inicia, "sessao");
	});
</script>
</body>
</html>
