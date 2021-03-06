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
		tags = "@unitários",
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE, // deixa todos os passo em camelcase
		dryRun = false, // quando está true só faz a verificação dos cenários
		strict = true
		)
public class Runner {

}
