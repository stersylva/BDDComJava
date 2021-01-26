# language: pt

Funcionalidade: Aprender Cucumber
	Como um aluno
	Eu quero aprender a utilizar Cucumber
	Para que eu possa automatizar crit�rios de aceita��o 
	
	
Cenario: Deve incrementar contador
	Dado que o valor do contador é 15
	Quando eu incrementar com 3
	Então o valor do contador será 18
	
Cenario: Deve incrementar contador
	Dado que o valor do contador é 123
	Quando eu incrementar com 35
	Então o valor do contador será 158
	
Cenário: Deve Calcular atraso no prazo de entrega
	Dado que o prazo é 05/04/2020
	Quando a entrega atrasar em 2 dias
	Então a entrega será efetuada em 07/04/2020
	
Cenário: Deve Calcular atraso no prazo de entrega da China
	Dado que o prazo é 05/04/2020
	Quando a entrega atrasar em 2 meses
	Então a entrega será efetuada em 05/06/2020