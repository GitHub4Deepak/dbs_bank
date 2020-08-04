package DBS;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"pretty","html:target/cucumber"},
		features="resources/dbs_awards.feature",
		glue="DBS",
		tags={"@tag","@tag1"},
		dryRun=false)

public class RunCucumberTest {

}
