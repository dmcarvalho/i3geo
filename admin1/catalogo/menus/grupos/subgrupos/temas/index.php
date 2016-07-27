<?php
define ( ONDEI3GEO, "../../../../../.." );
include (dirname ( __FILE__ ) . "/../../../../../../ms_configura.php");
error_reporting ( 0 );
include "../../../../../head.php";
$id_menu = filter_var ( $_GET ["id_menu"], FILTER_SANITIZE_NUMBER_INT );
$nome_menu = filter_var ( $_GET ["nome_menu"], FILTER_SANITIZE_STRING );
$id_n1 = filter_var ( $_GET ["id_n1"], FILTER_SANITIZE_NUMBER_INT );
$nome_grupo = filter_var ( $_GET ["nome_grupo"], FILTER_SANITIZE_STRING );
$id_n2 = filter_var ( $_GET ["id_n2"], FILTER_SANITIZE_NUMBER_INT );
$nome_subgrupo = filter_var ( $_GET ["nome_subgrupo"], FILTER_SANITIZE_STRING );
?>
<div class="container-fluid">
	<div class="row">
		<ol class="breadcrumb">
			<li><a href="../../../../../init/index.php">i3Geo</a></li>
			<li><a href="../../../../../index.php">Admin</a></li>
			<li>Cat&aacute;logo</li>
			<li><a href="../../../index.php">menus</a></li>
			<li><a href="../../../index.php?id_filtro=<?php echo $id_menu; ?>">menu: <?php echo $nome_menu; ?></a></li>
			<li><a href="../../index.php?id_menu=<?php echo $id_menu; ?>&nome_menu=<?php echo $nome_menu; ?>">grupos</a></li>
			<li><a
				href="../../index.php?id_filtro=<?php echo $id_n1; ?>&id_menu=<?php echo $id_menu; ?>&nome_menu=<?php echo $nome_menu; ?>"> <?php echo $nome_grupo; ?></a></li>
			<li><a
				href="../../index.php?id_menu=<?php echo $id_menu; ?>&nome_menu=<?php echo $nome_menu; ?>&id_grupo=<?php echo $id_grupo; ?>&nome_grupo=<?php echo $nome_grupo; ?>">subgrupos</a></li>
			<li><a
				href="../../index.php?id_filtro=<?php echo $id_n2; ?>&id_menu=<?php echo $id_menu; ?>&nome_menu=<?php echo $nome_menu; ?>&id_grupo=<?php echo $id_grupo; ?>&nome_grupo=<?php echo $nome_grupo; ?>"> <?php echo $nome_subgrupo; ?></a></li>
			<li class="active">Temas</li>
		</ol>
	</div>
</div>
<div class="container" id="titulo">
	<div class="row center-block">
		<div class="col-md-12">
			<div class="well hidden">
				<h2>
					<small>{{{txtTitulo}}}: <?php echo $nome_subgrupo; ?></small>
				</h2>
				<blockquote>{{{txtDesc}}}</blockquote>
				<!-- aqui entra o filtro -->
				<div class="form-group">
					<label class="control-label">{{{filtro}}}</label> <select
						onchange="i3GEOadmin.core.filtra(this)" id="filtro" class="form-control input-lg">
					</select>
				</div>
				<div class="row pull-right">
					<a onclick="i3GEOadmin.temas.adicionaTemaDialogo();" href="javascript:void(0)"
						class="btn btn-primary" role="button">{{{adicionarTema}}}</a>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="well hidden">
				<div id="corpo" class="panel-body panel-collapse in"></div>
			</div>
		</div>
	</div>
</div>
<script id="templateFiltro" type="x-tmpl-mustache">
<option value="form-{{id_n3}}">{{{nome_tema}}}</option>
</script>
<script id="templateTemas" type="x-tmpl-mustache">
<div class="panel panel-default" id="form-{{id_n3}}">
	<div class="panel-heading" role="tab">
		<h3 class="panel-title" {{escondido}}>
			<a href="javascript:void(0)" onclick="{{onExcluir}}('{{id_n3}}')" class="btn btn-danger btn-fab btn-fab-mini" role="button">
				<i class="material-icons">delete_forever</i>
			</a>
			&nbsp;
			<a class="collapsed in" role="button" data-toggle="collapse" href="#body-form-{{id_n3}}"
			aria-expanded="false" aria-controls="#body-form-{{id_n3}}"> {{{nome_tema}}} </a>
		</h3>
	</div>
	<div class="panel-body panel-collapse collapse" id="body-form-{{id_n3}}">
		<form style="" onchange="this.style.boxShadow='2px 2px 5px 0 #009688';" class="form-horizontal" role="form" method="post" action="" >
			<div class="row">
				<div class="col-md-12">
					<div class="form-group form-group-lg">
						<label class="col-md-4 control-label" for="id_tema">{{{tema}}}</label>
						<div class="col-md-8">
							<select class="form-control" name="id_tema">
								{{{opcoesTema}}}
							</select>
						</div>
					</div>
					<div class="form-group form-group-lg">
						<label class="col-md-4 control-label" for="ordem">{{{ordemTxt}}}</label>
						<div class="col-md-8">
							<input type="text" value="{{{ordem}}}" class="form-control" name="ordem">
						</div>
					</div>
					<div class="form-group form-group-lg">
						<label class="col-md-4 control-label" for="perfil">{{{perfis}}}</label>
						<div class="col-md-4">
							<input id="perfil_tema-{{id_raiz}}" type="text" value="{{{perfil}}}" class="form-control" name="perfil">
						</div>
						<div class="col-md-4">
							<select class="form-control" onchange="i3GEOadmin.temas.addInput('perfil_tema-{{id_raiz}}',this.value)">
								{{{opcoesPerfil}}}
							</select>
						</div>
					</div>
				</div>
			</div>
		</form>
		<div class="pull-right">
			<a href="javascript:void(0)" onclick="{{onExcluir}}('{{id_n3}}')" class="btn btn-danger" role="button">{{excluir}}</a>
			<a href="javascript:void(0)" onclick="{{onSalvar}}('{{id_n3}}')" class="btn btn-primary" role="button">{{salvar}}</a>
		</div>
	</div>
</div>
</script>
<script id="templateOpcoesPublicado" type="x-tmpl-mustache">
	<option value="">---</option>
	<option {{SIM-sel}} value="SIM">{{{sim}}}</option>
	<option {{NAO-sel}} value="NAO">{{{nao}}}</option>
</script>
<script id="templateOpcoesNo" type="x-tmpl-mustache">
	<option {{{selected}}} value="{{{id_subgrupo}}}">{{{nome_subgrupo}}}</option>
</script>
<script id="templateOpcoesTema" type="x-tmpl-mustache">
	<option {{{selected}}} value="{{{id_tema}}}">{{{nome_tema}}} - {{{codigo_tema}}}</option>
</script>
<script id="templateOpcoesPerfil" type="x-tmpl-mustache">
	<option value="{{{perfil}}}">{{{perfil}}}</option>
</script>
<script type="text/javascript" src="index.js"></script>
<script type="text/javascript" src="../../../../../dicionario/temas.js"></script>
<script>
	$(document).ready(function(){
		//vem de admin1/index.js
		iniciaMenuPrincipal();
		$('ul.dropdown-grupo [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
		//traducao
		var t = $("#titulo");
		//complementa dicionario
		i3GEOadmin.temas.dicionario = $.extend(
			{},
			i3GEOadmin.temas.dicionario,
			i3GEOadmin.core.dicionario
		);

		i3GEOadmin.core.dicionario = null;

		i3GEOadmin.temas.dicionario = i3GEO.idioma.objetoIdioma(i3GEOadmin.temas.dicionario);

		t.html(
			Mustache.to_html(
				t.html(),
				i3GEOadmin.temas.dicionario
			)
		);
		$.material.init();
		i3GEOadmin.temas.id_menu = <?php echo $id_menu; ?>;
		i3GEOadmin.temas.nome_menu = "<?php echo $nome_menu; ?>";
		i3GEOadmin.temas.id_n1 = <?php echo $id_n1; ?>;
		i3GEOadmin.temas.nome_grupo = "<?php echo $nome_grupo; ?>";
		i3GEOadmin.temas.id_n2 = <?php echo $id_n2; ?>;
		i3GEOadmin.temas.nome_subgrupo = "<?php echo $nome_subgrupo; ?>";

		var inicia = function() {
			$(".hidden").removeClass('hidden');
			i3GEOadmin.temas.init($("#corpo"));
		};
		i3GEO.login.verificaOperacao("admin/html/arvore",i3GEO.configura.locaplic, inicia, "sessao");
	});
</script>
</body>
</html>
