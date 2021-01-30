package br.pe.ster.steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import org.junit.Assert;

import br.pe.ster.entidades.Filme;
import br.pe.ster.entidades.NotaAluguel;
import br.pe.ster.entidades.TipoAluguel;
import br.pe.ster.servicos.AluguelService;
import br.pe.ster.utils.DateUtils;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;

public class alugar_filmeSteps {

	private Filme filme;
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	private String erro;
	private TipoAluguel tipoAluguel;

	@Dado("um filme com o estoque de {int} unidades")
	public void umFilmeComOEstoqueDeUnidades(int int1) {
		filme = new Filme();
		filme.setEstoque(int1);
	}

	@Dado("que o preço do aluguel seja R$ {int}")
	public void queOPreçoDoAluguelSejaR$(Integer int1) {
		filme.setAluguel(int1);
	}
	
	@Dado("um filme")
	public void umFilme(DataTable table) {
		Map<String, String> map = table.asMap(String.class, String.class);
		filme = new Filme();
		filme.setEstoque(Integer.parseInt(map.get("estoque")));
		filme.setAluguel(Integer.parseInt(map.get("preco")));
		String tipo = map.get("tipo");
		tipoAluguel = tipo.equals("semanal")?TipoAluguel.SEMANAL: tipo.equals("extendido")?TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
		
	}

	@Quando("alugar")
	public void alugar() {
		try {
			nota = aluguel.alugar(filme, tipoAluguel);
		} catch (RuntimeException e) {
			erro = e.getMessage();
		}

	}

	@Então("o preço do aluguel será R$ {int}")
	public void oPreçoDoAluguelSeráR$(int int1) {
		Assert.assertEquals(int1, nota.getPreco());
	}

	@Então("o estoque do filme será {int} unidade")
	public void oEstoqueDoFilmeSeráUnidade(int int1) {
		Assert.assertEquals(int1, filme.getEstoque());

	}

	@Então("não será possível por falta de estoque")
	public void nãoSeráPossívelPorFaltaDeEstoque() {
		Assert.assertEquals("Filme sem estoque", erro);
	}

	@Dado("^que o tipo de aluguel seja (.*)$")
	public void queOTipoDeAluguelSejaExtendido(String tipo) {
		tipoAluguel = tipo.equals("semanal")?TipoAluguel.SEMANAL: tipo.equals("extendido")?TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
		
	}

	@Então("^a data de entrega será em (\\d+) dias?$")
	public void aDataDeEntregaSeráEmDias(int int1) {
		Date dataEsperada = DateUtils.obterDataDiferencaDias(int1);
		Date dataReal = nota.getDataEntrega();
		
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		
		Assert.assertEquals(format.format(dataEsperada), format.format(dataReal));
	}

	@Então("a pontuação recebida será de {int} pontos")
	public void aPontuaçãoRecebidaSeráDePontos(int int1) {
		Assert.assertEquals(int1, nota.getPontuacao());
		
	}

}
