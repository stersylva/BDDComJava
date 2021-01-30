# language: pt

@esse
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
	
Cenário: Deve criar steps genéricos para estes passos
    Dado que o ticket é AF345
    E que o valor da passagem é R$ 230,45
    E que o nome do passageiro é "Fulano da Silva"
    E que o telefone do passageiro é 9999-9999
    Quando criar os steps
    Então o teste vai funcionar

Cenário: Deve reaproveitar os steps "Dado" do cenário anterior
    * que o ticket é AB167
    * que o ticket especial é AB167
    * que o valor da passagem é R$ 1120,23
    * que o nome do passageiro é "Cicrano de Oliveira"
    * que o telefone do passageiro é 9888-8888
    
@ignore
Cenário: Deve negar todos os steps "Dado" dos cenários anteriores
    Dado que o ticket é CD123
    Dado que o ticket é AG1234
    Dado que o valor da passagem é R$ 1.1345,56
    Dado que o nome do passageiro é "Beltrano Souza Matos de Alcântara Azevedo"
    Dado que o telefone do passageiro é 1234-5678
    Dado que o telefone do passageiro é 999-2223