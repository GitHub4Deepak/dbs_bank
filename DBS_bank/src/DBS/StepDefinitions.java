package DBS;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import net.bytebuddy.asm.Advice.This;

public class StepDefinitions {

	private String award;
	private ArrayList<String> actualCaption;
	DBSHomePage dbs = new DBSHomePage();
	
	
	@Given("launch chrome browser")
	public void launch_chrome_browser() {
		dbs.launchBrowser();
	}

	@When("Open DBS Homepage")
	public void open_DBS_Homepage() {
	    dbs.launchDBSHome();
	}

	@Then("Click on Learn More button")
	public void click_on_Learn_More_button() {
	    dbs.clickLearnMoreButton();
	}

	@Then("Scroll down and navigate to Singapore on the left panel")
	public void scroll_down_and_navigate_to_Singapore_on_the_left_panel() {
	    dbs.chooseSingaporeOption();
	}

	@Then("Read and write the table in excel sheet")
	public void read_and_write_the_table_in_excel_sheet() {
	    dbs.writeTableInExcel();
	}

	@Then("Navigate to About in the header tabs")
	public void navigate_to_About_in_the_header_tabs() {
	    dbs.aboutHeaderTab();
	}

	@Then("Navigate to Who we are tab")
	public void navigate_to_Who_we_are_tab() {
	    dbs.whoWeAreOption();
	}

	@Then("Navigate to  Our Awards & Accolades")
	public void navigate_to_Our_Awards_Accolades() {
	    dbs.awardsAndAccolades();
	}

	@Then("Validate the total number of awards displayed on the page is {int}")
	public void validate_the_total_number_of_awards_displayed_on_the_page_is(Integer int1) {
	    dbs.awardsCount();
	}

	@Then("Validate all the award name and caption of the awards")
	public void validate_all_the_award_name_and_caption_of_the_awards() {
	    dbs.awardsName();
	}

	@Given("award is {string}")
	public void award_is(String award) {
	    this.award = award;
	}

	@When("validate award from the given list of awards")
	public void validate_award_from_the_given_list_of_awards() {
		actualCaption = dbs.getCaption(award);
	}
	
	@Then("caption would be {string}")
	public void caption_would_be(String expectedCaption) {
		
		Assert.assertTrue(actualCaption.contains(expectedCaption));
	}
	
	@After
	public void tearDown(Scenario scenario){
	    if (scenario.isFailed()) {
	        final byte[] screenshot = ((TakesScreenshot) dbs.driver).getScreenshotAs(OutputType.BYTES);
	        scenario.embed(screenshot, "image/png"); 
	      }
		
		dbs.tearDown();
	}
}
