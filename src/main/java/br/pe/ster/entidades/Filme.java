package br.pe.ster.entidades;

public class Filme {
	
	private int estoque;
	private int aluguel;

	public void setEstoque(Integer int1) {
		this.estoque = int1;
	}

	public void setAluguel(Integer int1) {
		this.aluguel = int1;
		
	}

	public int getAluguel() {
		return aluguel;
	}

	public int getEstoque() {
		return estoque;
	}

	

}
