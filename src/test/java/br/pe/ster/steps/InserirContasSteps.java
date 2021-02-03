package br.pe.ster.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;

public class InserirContasSteps {
	
	private WebDriver driver;
	private File file;
	
	@Dado("que desejo adicionar uma conta")
	public void queDesejoAdicionarUmaConta() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\jstefania.3mpk\\drives\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/");
		System.out.println("chegou aqui");
		driver.manage().window().setSize(new Dimension(1200, 765));
	    
		
		driver.findElement(By.id("email")).sendKeys("stersylva@gmail.com");
		driver.findElement(By.name("senha")).sendKeys("1234");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("Contas")).click();
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("adciono a conta {string}")
	public void adcionoAConta(String nome_conta) {
		driver.findElement(By.id("nome")).sendKeys(nome_conta);
		driver.findElement(By.tagName("button")).click();
	    
	}


	@Então("eu recebo a mensagem {string}")
	public void euReceboAMensagem(String msg) {
		String texto = driver.findElement(By.xpath("//div[starts-with(@class,'alert alert-')]")).getText();
	    Assert.assertEquals(msg, texto);
	}

//	@After(order = 1)
//	public void screenshot(Scenario cenario) {
//		((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
//		try {
//			FileUtils.copyFile(file, new File("target/screenshot/"+cenario.getId()+".jpg"));
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
	
	@After(order = 0, value = "@funcionais")
	public void fecharBrower() {
		driver.quit();
	}


}
