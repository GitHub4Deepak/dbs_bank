package DBS;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class DBSHomePage {

	public WebDriver driver;
	public static HashMap<String, ArrayList<String>> awardMap = new HashMap<String, ArrayList<String>>();
	public String awardName;
	public String caption;

	public void launchBrowser() {

		System.setProperty("webdriver.chrome.driver", "/Users/deepakkumar/Downloads/webdriver/chromedriver");
		driver = new ChromeDriver();
	}

	public void launchDBSHome(){
		driver.get("https://www.dbs.com.sg/index/default.page");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	}

	public void clickLearnMoreButton(){
		WebElement learnMore = driver.findElement(By.linkText("Learn More"));
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", learnMore);
	}

	public void chooseSingaporeOption(){

		WebElement singapore = driver.findElement(By.xpath("//div[@id='sideNav']/ul/li[3]/a"));
		JavascriptExecutor js = (JavascriptExecutor) driver;  
		js.executeScript("arguments[0].scrollIntoView();",singapore);
		js.executeScript("arguments[0].click();",singapore);
	}

	public void writeTableInExcel(){

		WebElement sg_table = driver.findElement(By.xpath("//div[@class='rich-text-box']/div[5]/table/tbody"));
		List<WebElement> rows_table = sg_table.findElements(By.tagName("tr"));

		int rows_count = rows_table.size();
		XSSFWorkbook workbook = new XSSFWorkbook();
		XSSFSheet sheet = workbook.createSheet("awards");

		XSSFRow row;
		XSSFCell col;
		for(int rowNum = 0 ; rowNum <rows_count; rowNum++ ){
			List < WebElement > Columns_row = rows_table.get(rowNum).findElements(By.tagName("td"));
			int columns_count = Columns_row.size();
			row = sheet.createRow(rowNum);
			for (int colNum = 0; colNum < columns_count; colNum++) {
				col = row.createCell(colNum);
				String celltext = Columns_row.get(colNum).getText();
				col.setCellValue(celltext);
			}
		}
		
		try {
			FileOutputStream outputStream = new FileOutputStream("singapore.xlsx");
			workbook.write(outputStream);
			workbook.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

	public void aboutHeaderTab(){

		WebElement about = driver.findElement(By.xpath("//div[@class='navbar-links-left']/ul/li[1]/a"));
		about.click();
	}

	public void whoWeAreOption(){
		WebElement whoWeAre = driver.findElement(By.xpath("//div[@class='navbar-overflow-width']/ul/li[2]"));
		whoWeAre.click();
	}

	public void awardsAndAccolades(){

		WebElement awardAndAccolades = driver.findElement(By.xpath("(//div[@class='media-body'])[4]/h3/a"));
		awardAndAccolades.click();
	}

	public void awardsCount(){

		List<WebElement> awards = driver.findElements(By.xpath("//div[@class='row mBot-20']"));
		System.out.println("No of awards : "+awards.size());
	}

	public void awardsName(){

		List<WebElement> awards = driver.findElements(By.xpath("(//div[@class='col-md-8'])"));
		ArrayList<String> captions = new ArrayList<String>();
		for(int count = 0; count < awards.size(); count++){
			awardName = awards.get(count).findElement(By.tagName("h3")).getText();
			caption = awards.get(count).findElement(By.tagName("p")).getText();
			//awardMap.put(awardName, caption);
			captions.add(caption);
			setAward(awardName, captions);
		}
	}

	private void setAward(String awardName, ArrayList<String> caption){
		awardMap.put(awardName, caption);
	}

	public ArrayList<String> getCaption(String award){
		return awardMap.get(award);
	}

	public void tearDown(){
		if(driver != null)
			driver.quit();
	}
}
