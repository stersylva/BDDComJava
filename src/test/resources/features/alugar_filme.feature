# language: pt

Funcionalidade: Alugar Filme

	Como um usuário
	Eu quero cadastrar aluguéis de filmes
	Para controlar preços e datas de entrega
	
Cenário: Deve alugar um filme com sucesso
	Dado um filme 
	| estoque |   2   |
	|  preco  |   3   |
	|   tipo  | comum |
	Quando alugar
	Então o preço do aluguel será R$ 3
	E a data de entrega será em 1 dia
	E o estoque do filme será 1 unidade
	
Cenário: Não deve alugar filme sem estoque
	Dado um filme com o estoque de 0 unidades
	Quando alugar
	Então não será possível por falta de estoque
	E o estoque do filme será 0 unidade
	
Esquema do Cenário: Deve dar condições conforme o tipo de aluguel
	Dado um filme com o estoque de 2 unidades
	E que o preço do aluguel seja R$ <preco>
	E que o tipo de aluguel seja <tipo>
	Quando alugar
	Então o preço do aluguel será R$ <valor>
	E a data de entrega será em <qtdDias> dias
	E a pontuação recebida será de <pontos> pontos
	Exemplos:
	| preco |   tipo    | valor | qtdDias | pontos |
	|   4   | extendido |   8   |    3    |    2   |
	|   4   |   comum   |   4   |    1    |    1   |
	|   10  | extendido |  20   |    3    |    2   |
	|   5   |  semanal  |   15  |    7    |    3   |

