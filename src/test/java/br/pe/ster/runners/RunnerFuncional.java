package br.pe.ster.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;


@RunWith(io.cucumber.junit.Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		glue = "br.pe.ster.steps",
		tags = "@funcionais",
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE, // deixa todos os passo em camelcase
		dryRun = false, // quando está true só faz a verificação dos cenários
		strict = true
		)
public class RunnerFuncional {
	
	@BeforeClass
	public static void reset() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\jstefania.3mpk\\drives\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/");
		System.out.println("chegou aqui");
		driver.manage().window().setSize(new Dimension(1200, 765));
		driver.findElement(By.id("email")).sendKeys("stersylva@gmail.com");
		driver.findElement(By.name("senha")).sendKeys("1234");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}

}
