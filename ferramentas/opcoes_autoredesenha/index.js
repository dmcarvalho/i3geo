/*
About: Licen�a

I3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist�rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@mma.gov.br

Este programa � software livre; voc� pode redistribu�-lo
e/ou modific�-lo sob os termos da Licen�a P�blica Geral
GNU conforme publicada pela Free Software Foundation;
tanto a vers�o 2 da Licen�a.
Este programa � distribu�do na expectativa de que seja �til,
por�m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl�cita
de COMERCIABILIDADE OU ADEQUA��O A UMA FINALIDADE ESPEC�FICA.
Consulte a Licen�a P�blica Geral do GNU para mais detalhes.
Voc� deve ter recebido uma c�pia da Licen�a P�blica Geral do
GNU junto com este programa; se n�o, escreva para a
Free Software Foundation, Inc., no endere�o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
*/
$i("t").value = window.parent.i3GEO.navega.autoRedesenho.INTERVALO
new YAHOO.widget.Button("botao1",{onclick:{fn: function(){
	executaf();
}}});
new YAHOO.widget.Button("botao2",{onclick:{fn: function(){
	window.parent.i3GEO.navega.autoRedesenho.desativa();
}}});

function executaf()
{
	window.parent.i3GEO.navega.autoRedesenho.desativa()
	window.parent.i3GEO.navega.autoRedesenho.INTERVALO = $i("t").value * 1000
	if (($i("t").value == 0) || ($i("t").value == ""))
	{window.parent.i3GEO.navega.autoRedesenho.desativa()}
	else
	{
		window.parent.i3GEO.navega.autoRedesenho.ativa()
	}
}