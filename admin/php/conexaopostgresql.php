<?php
try
{
	$dbh = new PDO('pgsql:dbname=teste;user=postgres;password=postgres;host=localhost');
	$dbhw = new PDO('pgsql:dbname=teste;user=postgres;password=postgres;host=localhost');
}
catch (PDOException $e)
{
	print "Erro : " . $e->getMessage() . "<br/> Se vc estiver usando SQLITE, talvez exista alguma incompatibilidade entre o PHP e o banco admin.db. Vc pode apagar o arquivo menutemas/admin.db e recria-lo com admin/php/criasqlite.php";
	die();
}
$convUTF = true;
?>
