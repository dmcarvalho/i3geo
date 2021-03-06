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
			<a class="btn btn-default" style="pointer-events: none"><div>Atlas</div></a>
		</div>
	</div>
</div>
<div class="container">
	<div class="row center-block">
		<div class="col-md-12" id="titulo">
			<div class="well hidden" >
				<button data-toggle="modal" data-target="#ajudaPrincipal"
					class="btn btn-primary btn-fab btn-fab-mini pull-right">
					<i class="material-icons">help</i>
				</button>
				<span class="pull-right">&nbsp;&nbsp;</span>
				<button data-toggle="modal" data-target="#modalFiltro"
					class="btn btn-primary btn-fab btn-fab-mini pull-right">
					<i class="material-icons">search</i>
				</button>
				<h2><small>{{{txtTitulo}}}</small></h2>
				<blockquote>{{{txtDesc}}}</blockquote>
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
				<div class="panel-heading">
					<p class="lead" style="margin:0px;">&nbsp;
						<a title="{{{adicionar}}}" onclick="i3GEOadmin.atlas.adicionaDialogo();" href="javascript:void(0)"
							class="pull-right btn btn-danger btn-fab btn-fab-mini" role="button" ><i class="material-icons ">add</i>
						</a>
					</p>
				</div>
				<div class="clearfix"></div>
				<div id="corpo">
				</div>
			</div>
		</div>
	</div>
</div>
<script id="templateFiltro" type="x-tmpl-mustache">
<option value="form-{{id_atlas}}">{{{titulo_atlas}}}</option>
</script>
<script id="templateFormLista" type="x-tmpl-mustache">
<form id="form-edicao-{{id_atlas}}" style="" action="#" onsubmit="{{onSalvar}}('{{id_atlas}}');return false;" onchange="this.style.boxShadow='2px 2px 5px 0 #009688';" class="form-horizontal" role="form" method="post"   >
	<div class="row">
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="nome_atlas" >{{{titulo}}}</label>
				<div class="col-md-8">
					<input title="{{{titulo}}}" type="text" value="{{{titulo_atlas}}}" class="form-control" name="titulo_atlas" required>
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="desc_atlas" >{{{descricao}}}</label>
				<div class="col-md-8">
					<input title="{{{descricao}}}" type="text" value="{{{desc_atlas}}}" class="form-control" name="desc_atlas" required>
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="link_atlas" >{{{linkTxt}}}</label>
				<div class="col-md-8">
					<input title="{{{linkTxt}}}" type="text" value="{{{link_atlas}}}" class="form-control" name="link_atlas" >
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="publicado_atlas">{{{publicado}}}</label>
				<div class="col-md-8">
					<select title="{{{publicado}}}" name="publicado_atlas" class="form-control" required >
						{{{opcoesPublicado}}}
					</select>
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="ordem_atlas" >{{{ordem}}}</label>
				<div class="col-md-8">
					<input title="{{{ordem}}}" type="text" value="{{{ordem_atlas}}}" class="form-control" name="ordem_atlas" required >
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="basemapfile_atlas" >{{{mapfileInicia}}}</label>
				<div class="col-md-8">
					<input title="{{{mapfileInicia}}}" type="text" value="{{{basemapfile_atlas}}}" class="form-control" name="basemapfile_atlas" >
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="h_atlas" >{{{altura}}}</label>
				<div class="col-md-8">
					<input title="{{{altura}}}" type="text" value="{{{h_atlas}}}" class="form-control" name="h_atlas" >
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="w_atlas" >{{{largura}}}</label>
				<div class="col-md-8">
					<input title="{{{largura}}}" type="text" value="{{{w_atlas}}}" class="form-control" name="w_atlas" >
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="icone_atlas" >{{{iconeAtlas}}}</label>
				<div class="col-md-8">
					<input title="{{{iconeAtlas}}}" type="text" value="{{{icone_atlas}}}" class="form-control" name="icone_atlas" >
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="pranchadefault_atlas" >{{{pranchaInicia}}}</label>
				<div class="col-md-8">
					<input title="{{{pranchaInicia}}}" type="text" value="{{{pranchadefault_atlas}}}" class="form-control" name="pranchadefault_atlas" >
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="template_atlas" >{{{template}}}</label>
				<div class="col-md-8">
					<input title="{{{template}}}" type="text" value="{{{template_atlas}}}" class="form-control" name="template_atlas" >
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group form-group-lg">
				<label class="col-md-4 control-label" for="tipoguias_atlas" >{{{tipoGuia}}}</label>
				<div class="col-md-8">
					<select title="{{{tipoGuia}}}" name="publicado_atlas" class="form-control">
						{{{opcoesTipoGuia}}}
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
<div class="list-group-item" id="form-{{id_atlas}}">
	<div class="row-content">
		<h4 class="list-group-item-heading {{escondido}}">
			<div class="pull-right">
			<a role="button" class="btn btn-danger btn-fab btn-fab-mini pull-left" onclick="i3GEOadmin.atlas.editarPranchas('{{id_atlas}}','{{{titulo_atlas}}}')" href="javascript:void(0)">
				<i class="material-icons md-18">folder_open</i>
			</a>
  			<label class=pull-right><h6 style="margin-top: 5px; margin-bottom: 5px;">&nbsp;{{{pranchas}}}</h6></label>
			</div>
			<span class="pull-right">&nbsp;&nbsp;</span>
			<a href="javascript:void(0)" onclick="{{onEditar}}('{{id_atlas}}')" class="btn btn-danger btn-fab btn-fab-mini pull-right" role="button">
				<i class="material-icons md-18">edit</i>
			</a>
			<span class="pull-right">&nbsp;&nbsp;</span>
			<a href="javascript:void(0)" onclick="{{onExcluir}}('{{id_atlas}}')" class="btn btn-danger btn-fab btn-fab-mini pull-right" role="button">
				<i class="material-icons md-18">delete_forever</i>
			</a>
			&nbsp;{{{titulo_atlas}}}
		</h4>
	</div>
	<div class="list-group-separator"></div>
</div>
</script>
<script id="templateOpcoesTipoGuia" type="x-tmpl-mustache">
	<option {{automatica-sel}} value="automatica">automatica</option>
	<option {{combo-sel}} value="combo">combo</option>
	<option {{expandida-sel}} value="expandida">expandida</option>
</script>
<script id="templateOpcoesPublicado" type="x-tmpl-mustache">
	<option value="">---</option>
	<option {{SIM-sel}} value="SIM">{{{sim}}}</option>
	<option {{NAO-sel}} value="NAO">{{{nao}}}</option>
</script>
<script type="text/javascript" src="index.js"></script>
<script type="text/javascript" src="../../dicionario/atlas.js"></script>
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
		i3GEOadmin.atlas.dicionario = $.extend(
			{},
			i3GEOadmin.atlas.dicionario,
			i3GEOadmin.core.dicionario
		);

		i3GEOadmin.core.dicionario = null;

		i3GEOadmin.atlas.dicionario = i3GEO.idioma.objetoIdioma(i3GEOadmin.atlas.dicionario);

		t.html(
			Mustache.to_html(
				t.html(),
				i3GEOadmin.atlas.dicionario
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
			i3GEOadmin.atlas.init($("#corpo"));
		};
		i3GEO.login.verificaOperacao("admin/html/atlas",i3GEO.configura.locaplic, inicia, "sessao");
	});
</script>
</body>
</html>
