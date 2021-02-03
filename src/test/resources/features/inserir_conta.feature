#language: pt

@funcionais
Funcionalidade: Cadastro de contas

	Como um usuário 
	Gostaria de cadastrar contas
	Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Contexto:
	Dado que desejo adicionar uma conta

Esquema do Cenário: Deve validar regras do cadastro de contas
	Quando adciono a conta "<conta>"
	Então eu recebo a mensagem "<mensagem>"

Exemplos: 
	|     conta       |               mensagem           |
	| Conta de Teste  |  Conta adicionada com sucesso!   |
	|                 |     Informe o nome da conta      | 
	| Conta mesmo nome|Já existe uma conta com esse nome!|