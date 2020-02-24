package dev.anthony.app;

import java.io.File;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class AngularSliceSeliniumTest {
	

	public static void main(String[] args) throws InterruptedException {
		
		WebDriver driver = null;
		
		try {
		File file = new File ("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver",file.getAbsolutePath());
		
		driver = new ChromeDriver();
		//driver.manage().window().maximize();
		driver.get("http://localhost:4200/");
		
		
//login
		WebElement logingin= driver.findElement(By.id("loginMenu"));
		logingin.click();
		Thread.sleep(1000);
		WebElement loginginicon= driver.findElement(By.id("loginButton"));
		loginginicon.click();
		Thread.sleep(1000);
      //username		
		WebElement username = driver.findElement(By.id("user"));
		username.sendKeys("tony" + Keys.ENTER);
		Thread.sleep(300);
      //password
		WebElement password = driver.findElement(By.id("pass"));
		password.sendKeys("password" + Keys.ENTER);
		Thread.sleep(300);
	  //login
		WebElement loginbtn= driver.findElement(By.id("button"));
		loginbtn.click();
		Thread.sleep(1000);
		
//order page		
		WebElement orderpage= driver.findElement(By.id("ord"));
		orderpage.click();
		Thread.sleep(500);
		WebElement orderitem1= driver.findElement(By.id("orderButton"));
		orderitem1.click();
		Thread.sleep(500);
		WebElement orderpagelow= driver.findElement(By.id("mat-expansion-panel-header-2"));
		orderpagelow.click();
		Thread.sleep(500);
		WebElement order= driver.findElement(By.id("checkOutButton"));
		order.click();
		Thread.sleep(500);
		
		
//check out
		//card info
		WebElement cardnum = driver.findElement(By.id("cardnum"));
		cardnum.sendKeys("5314 6284 7310 3135"  + Keys.ENTER);
		Thread.sleep(300);
        //expdate
		WebElement expdate = driver.findElement(By.id("expdate"));
		expdate.sendKeys("01022020" + Keys.ENTER);
		Thread.sleep(300);
	    //cvs
		WebElement cvs = driver.findElement(By.id("cvs"));
		cvs.sendKeys("01022020" + Keys.ENTER);
		Thread.sleep(300);
		//delivery or pickUp
		WebElement pickup= driver.findElement(By.id("pickup"));
		pickup.click();
		Thread.sleep(500);
		//orderbtn
		WebElement ordr= driver.findElement(By.id("oder"));
		ordr.click();
		Thread.sleep(1000);
		
		
	}finally {
		driver.quit();
	}
		
	}
	}



