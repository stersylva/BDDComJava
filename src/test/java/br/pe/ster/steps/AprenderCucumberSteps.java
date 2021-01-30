package br.pe.ster.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;

public class AprenderCucumberSteps {

	// public void que_criei_o_arquivo_corretamente() {

	@Dado("que criei o arquivo corretamente")
	public void queCrieiOArquivoCorretamente() {
		System.out.println("qualquer coisa");
	}

	@Quando("executá-lo")
	public void executáLo() {

	}

	@Então("a especificação deve finalizar com sucesso")
	public void aEspecificaçãoDeveFinalizarComSucesso() {

	}

	private int contador = 0;

	@Dado("que o valor do contador é {int}")
	public void queOValorDoContadorÉ(Integer int1) {
		contador = int1;
	}

	@Quando("eu incrementar com {int}")
	public void euIncrementarCom(Integer int1) {
		contador = contador + int1;
	}

	@Então("o valor do contador será {int}")
	public void oValorDoContadorSerá(Integer int1) {
		System.out.println(contador);
		System.out.println(int1);
		Assert.assertTrue(contador == int1);
		// Assert.assertEquals(contador, int1);
		// throw new RuntimeException();

	}

	Date entrega = new Date();

	@Dado("que o prazo é (\\d+)/(\\d+)/(\\d+)$")
	public void que_o_prazo_é_dia(Integer dia, Integer mes, Integer ano) {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.DAY_OF_MONTH, dia);
		cal.set(Calendar.MONTH, mes - 1);
		cal.set(Calendar.YEAR, ano);
		entrega = cal.getTime();
	}

	@Quando("^a entrega atrasar em (\\d+) (.+)$")
	public void a_entrega_atrasar_em_dias(Integer int1, String tempo) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		if (tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, int1);
		}
		if (tempo.equals("meses")) {
			cal.add(Calendar.MONTH, int1);
		}
		entrega = cal.getTime();
	}

	@Então("a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void a_entrega_será_efetuada_em(String data) {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataformatada = format.format(entrega);
		Assert.assertEquals(data, dataformatada);
	}
	
	@Dado("^que o ticket( especial)? é (A.\\d{3})$") 
	public void que_o_ticket_é_ab(String tipo, String int1) throws Throwable {
		
	}

	@Dado("que o valor da passagem é R$ {double}")
	public void que_o_valor_da_passagem_é_r$(Double double1) {
	    
	}

	@Dado("que o nome do passageiro é \"(.{5,20})\"$")
	public void que_o_nome_do_passageiro_é(String nome) {
	    
	}

	@Dado("que o telefone do passageiro é (9\\d{3}-\\d{4})$")
	public void que_o_telefone_do_passageiro_é(String telefone) {
	    
	}

	@Quando("criar os steps")
	public void criar_os_steps() {
	    
	}

	@Então("o teste vai funcionar")
	public void o_teste_vai_funcionar() {
	    
	}
	


}
