$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:resources/dbs_awards.feature");
formatter.feature({
  "name": "Validate DBS Awards on DBS home page",
  "description": "  Launch and validate Awards for DBS by navigating to \"Our Awards \u0026 Accolades\"",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "validate DBS Awards \u0026 Accolades",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "DBS.StepDefinitions.launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open DBS Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "DBS.StepDefinitions.open_DBS_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Learn More button",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.click_on_Learn_More_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Scroll down and navigate to Singapore on the left panel",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.scroll_down_and_navigate_to_Singapore_on_the_left_panel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Read and write the table in excel sheet",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.read_and_write_the_table_in_excel_sheet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to About in the header tabs",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.navigate_to_About_in_the_header_tabs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Who we are tab",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.navigate_to_Who_we_are_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to  Our Awards \u0026 Accolades",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.navigate_to_Our_Awards_Accolades()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the total number of awards displayed on the page is 22",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.validate_the_total_number_of_awards_displayed_on_the_page_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate all the award name and caption of the awards",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.validate_all_the_award_name_and_caption_of_the_awards()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate award and its caption",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "award is \"\u003cAward Name\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "validate award from the given list of awards",
  "keyword": "When "
});
formatter.step({
  "name": "caption would be \"\u003cCaption of the award\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Award Name",
        "Caption of the award"
      ]
    },
    {
      "cells": [
        "The Banker",
        "Bank of the Year 2018"
      ]
    },
    {
      "cells": [
        "Global Finance",
        "Best Bank in the World 2018"
      ]
    },
    {
      "cells": [
        "Euromoney",
        "Awards For Excellence"
      ]
    },
    {
      "cells": [
        "Global Finance",
        "World\u0027s Best Banks"
      ]
    },
    {
      "cells": [
        "Global Finance",
        "World\u0027s Best Investment Banks and Derivatives Providers"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate award and its caption",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "award is \"The Banker\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DBS.StepDefinitions.award_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate award from the given list of awards",
  "keyword": "When "
});
formatter.match({
  "location": "DBS.StepDefinitions.validate_award_from_the_given_list_of_awards()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "caption would be \"Bank of the Year 2018\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.caption_would_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate award and its caption",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "award is \"Global Finance\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DBS.StepDefinitions.award_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate award from the given list of awards",
  "keyword": "When "
});
formatter.match({
  "location": "DBS.StepDefinitions.validate_award_from_the_given_list_of_awards()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "caption would be \"Best Bank in the World 2018\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.caption_would_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate award and its caption",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "award is \"Euromoney\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DBS.StepDefinitions.award_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate award from the given list of awards",
  "keyword": "When "
});
formatter.match({
  "location": "DBS.StepDefinitions.validate_award_from_the_given_list_of_awards()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "caption would be \"Awards For Excellence\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.caption_would_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate award and its caption",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "award is \"Global Finance\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DBS.StepDefinitions.award_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate award from the given list of awards",
  "keyword": "When "
});
formatter.match({
  "location": "DBS.StepDefinitions.validate_award_from_the_given_list_of_awards()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "caption would be \"World\u0027s Best Banks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.caption_would_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate award and its caption",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "award is \"Global Finance\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DBS.StepDefinitions.award_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate award from the given list of awards",
  "keyword": "When "
});
formatter.match({
  "location": "DBS.StepDefinitions.validate_award_from_the_given_list_of_awards()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "caption would be \"World\u0027s Best Investment Banks and Derivatives Providers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DBS.StepDefinitions.caption_would_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});