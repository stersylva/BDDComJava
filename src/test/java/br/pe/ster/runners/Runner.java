package br.pe.ster.runners;
import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;


@RunWith(io.cucumber.junit.Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/alugar_filme.feature",
		glue = "br.pe.ster.steps",
		tags = "not @ignore",
		plugin = {"pretty", "html:target/report-html"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE, // deixa todos os passo em camelcase
		dryRun = false,
		strict = true
		)
public class Runner {

}
