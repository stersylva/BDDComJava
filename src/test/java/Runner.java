import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;


@RunWith(io.cucumber.junit.Cucumber.class)
@CucumberOptions(
		plugin = "pretty",
		monochrome = true,
		snippets = SnippetType.CAMELCASE, // deixa todos os passo em camelcase
		dryRun = false,
		strict = true
		)
public class Runner {

}
