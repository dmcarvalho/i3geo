<?php
define ( ONDEI3GEO, "../../.." );
include (dirname ( __FILE__ ) . "/../../../ms_configura.php");
error_reporting ( 0 );
include "../../head.php";
?>
<div class="container-fluid">
	<div class="row">
		<ol class="breadcrumb">
			<li><a href="../../init/index.php">i3Geo</a></li>
			<li><a href="../../index.php">Admin</a></li>
			<li>Cadastros</li>
			<li class="active">Servi&ccedil;os</li>
		</ol>
	</div>

</div>
<div class="container-fluid">
	<div class="row">
		<iframe src="../../../admin/html/webservices_.html"
			style="width: 100%; height: 5000px; border: none; scrolling: no; frameborder: 0; marginheight: 0; marginwidth: 0;"></iframe>
	</div>
</div>
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
		$.material.init();
	});
</script>
</body>
</html>