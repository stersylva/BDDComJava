import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteAmbiente {
	
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\jstefania.3mpk\\drives\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/");
		//driver.manage().window().maximize();
	}

}
