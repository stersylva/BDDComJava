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

}
