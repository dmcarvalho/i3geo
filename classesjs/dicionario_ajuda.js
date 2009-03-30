g_traducao_ajuda = {
	ferramentas: {
		"1": {
			titulo: "Filtro de cores",
			diretorio:"i3geo/ferramentas/tipoimagem",
			categoria:"1",
			pt:"O filtro possibilita gerar efeitos de colora��o no mapa. � aplicado sobre a imagem gerada toda vez que o mapa � alterado. No caso de temas baseados em dados RASTER, os n�veis de cores obtidos com a ferramenta de identifica��o n�o s�o alterados.",
			complemento:"Os filtros podem provocar um tempo maior de desenho do mapa, devendo ser utilizados com cuidado. As op��es s�pia e tons de cinza utilizam algor�tmos pr�prios do i3Geo, j� as demais, utilizam a op��o de filtro dispon�vel com o PHP 5. Mais detalhes <a href='http://www.php.net/manual/pt_BR/function.imagefilter.php' >aqui</a>."
		},
		"2": {
			titulo: "Legenda",
			diretorio:"i3geo/ferramentas/opcoes_legenda",
			categoria:"1",
			pt:"A legenda do mapa � utilizada em v�rias op��es do i3Geo e pode tamb�m ficar inserida na pr�pria imagem do mapa. A legenda mostra os s�mbolos utilizados no desenho de cada tema, podendo-se alterar caracter�sticas como fonte, tamanho dos textos, tamanho dos ret�ngulos com os s�mbolos, etc.",
			complemento:"Antes de aplicar uma altera��o, voc� pode testar os par�metros escolhidos para avaliar o resultado. No caso dos par�metros que definem cores, utilize -1,-1,-1 para anular seu efeito."
		},
		"3": {
			titulo: "Barra de escala",
			diretorio:"i3geo/ferramentas/opcoes_escala",
			categoria:"1",
			pt:"A barra de escala � uma imagem inserida no mapa que mostra a rela��o entre uma medida feita no mapa e no mundo real. A barra pode ser modificada especificando-se seu tamanho, n�mero de divis�es e cores.",
			complemento:"Existem dois modelos b�sicos para a escala: linear e bloco. Para n�o mostrar a escala no mapa, escolha a 'sem escala' na op��o estilo."
		},
		"4": {
			titulo: "Tamanho do mapa",
			diretorio:"i3geo/ferramentas/opcoes_tamanho",
			categoria:"1",
			pt:"O tamanho do mapa � definido automaticamente quando o i3Geo � aberto, buscando-se otimizar o uso do espa�o dispon�vel no monitor. A op��o de modifica��o do tamanho altera apenas o corpo do mapa, for�ando o ajuste dos outros elementos, o que nem sempre provoca bons resultados.",
			complemento:"O ajuste do tamanho do mapa pode ser utilizado para gerar imagens em tamanhos espec�ficos, principalmente para efeitos de impress�o. A medida do tamanho utilizado � pixel, que corresponde ao tamanho m�nimo de uma c�lula da imagem do mapa. Para calcular o tamanho do mapa em outra unidade de medida, necess�rio nos casos em que se deseja imprimir o mapa, deve ser feito considerando-se a resolu��o de impress�o desejada."
		}
	}
};

g_traducao_ajuda_categorias = {
	"1":{titulo:"Propriedades do mapa"}
};
