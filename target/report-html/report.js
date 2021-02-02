$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/alugar_filme.feature");
formatter.feature({
  "name": "Alugar Filme",
  "description": "\tComo um usuário\n\tEu quero cadastrar aluguéis de filmes\n\tPara controlar preços e datas de entrega",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.scenario({
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ]
    },
    {
      "cells": [
        "preco",
        "3"
      ]
    },
    {
      "cells": [
        "tipo",
        "comum"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "alugar_filmeSteps.umFilme(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "alugar_filmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.match({
  "location": "alugar_filmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "um filme com o estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "alugar_filmeSteps.umFilmeComOEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "alugar_filmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.match({
  "location": "alugar_filmeSteps.nãoSeráPossívelPorFaltaDeEstoque()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve dar condições conforme o tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "um filme com o estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "que o tipo de aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "name": "o preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "name": "a pontuação recebida será de \u003cpontos\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontos"
      ]
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve dar condições conforme o tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "um filme com o estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "alugar_filmeSteps.umFilmeComOEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo de aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "alugar_filmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 8",
  "keyword": "Então "
});
formatter.match({
  "location": "alugar_filmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 3 dias",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação recebida será de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme o tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "um filme com o estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "alugar_filmeSteps.umFilmeComOEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo de aluguel seja comum",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "alugar_filmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 4",
  "keyword": "Então "
});
formatter.match({
  "location": "alugar_filmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dias",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação recebida será de 1 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme o tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "um filme com o estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "alugar_filmeSteps.umFilmeComOEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 10",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo de aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "alugar_filmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 20",
  "keyword": "Então "
});
formatter.match({
  "location": "alugar_filmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 3 dias",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação recebida será de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme o tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "um filme com o estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "alugar_filmeSteps.umFilmeComOEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 5",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo de aluguel seja semanal",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "alugar_filmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 15",
  "keyword": "Então "
});
formatter.match({
  "location": "alugar_filmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 7 dias",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação recebida será de 3 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/aprender_cucumber.feature");
formatter.feature({
  "name": "Aprender Cucumber",
  "description": "\tComo um aluno\n\tEu quero aprender a utilizar Cucumber\n\tPara que eu possa automatizar crit�rios de aceita��o ",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.scenario({
  "name": "Deve incrementar contador",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "que o valor do contador é 15",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu incrementar com 3",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.euIncrementarCom(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor do contador será 18",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve incrementar contador",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "que o valor do contador é 123",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu incrementar com 35",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.euIncrementarCom(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor do contador será 158",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve Calcular atraso no prazo de entrega",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "que o prazo é 05/04/2020",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_prazo_é_dia(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega atrasar em 2 dias",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.a_entrega_atrasar_em_dias(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega será efetuada em 07/04/2020",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.a_entrega_será_efetuada_em(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve Calcular atraso no prazo de entrega da China",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "que o prazo é 05/04/2020",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_prazo_é_dia(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega atrasar em 2 meses",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.a_entrega_atrasar_em_dias(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega será efetuada em 05/06/2020",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.a_entrega_será_efetuada_em(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "que o ticket é AF345",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_ticket_é_ab(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 230,45",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_valor_da_passagem_é_r$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Fulano da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_nome_do_passageiro_é(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9999-9999",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_telefone_do_passageiro_é(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criar os steps",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.criar_os_steps()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o teste vai funcionar",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.o_teste_vai_funcionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve reaproveitar os steps \"Dado\" do cenário anterior",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "name": "que o ticket é AB167",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_ticket_é_ab(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o ticket especial é AB167",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_ticket_é_ab(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 1120,23",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_valor_da_passagem_é_r$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Cicrano de Oliveira\"",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_nome_do_passageiro_é(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9888-8888",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_o_telefone_do_passageiro_é(String)"
});
formatter.result({
  "status": "passed"
});
});