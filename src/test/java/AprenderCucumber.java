import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;

public class AprenderCucumber {

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
		//Assert.assertEquals(contador, int1);
		//throw new RuntimeException();
		
	}
	
	Date entrega = new Date();
	
	@Dado("que o prazo é (\\d+)/(\\d+)/(\\d+)$")
	public void que_o_prazo_é_dia(Integer dia, Integer mes, Integer ano) {
	    Calendar cal = Calendar.getInstance();
	    cal.set(Calendar.DAY_OF_MONTH, dia);
	    cal.set(Calendar.MONTH, mes -1);
	    cal.set(Calendar.YEAR, ano);
	    entrega = cal.getTime();
	}

	@Quando("^a entrega atrasar em (\\d+) (.+)$")
	public void a_entrega_atrasar_em_dias(Integer int1, String tempo) {
	    Calendar cal = Calendar.getInstance();
	    cal.setTime(entrega);
	    if(tempo.equals("dias")) {
	    	cal.add(Calendar.DAY_OF_MONTH, int1);
	    }
	    if(tempo.equals("meses")) {
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

}
