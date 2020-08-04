#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Validate DBS Awards on DBS home page
  Launch and validate Awards for DBS by navigating to "Our Awards & Accolades"

  @tag1
  Scenario: validate DBS Awards & Accolades
    Given launch chrome browser
    When Open DBS Homepage
    Then Click on Learn More button 
    Then Scroll down and navigate to Singapore on the left panel 
    Then Read and write the table in excel sheet
    Then Navigate to About in the header tabs
    Then Navigate to Who we are tab
    Then Navigate to  Our Awards & Accolades
    Then Validate the total number of awards displayed on the page is 22
    Then Validate all the award name and caption of the awards
    
	@tag1
		Scenario Outline: Validate award and its caption
		Given award is "<Award Name>"
		When validate award from the given list of awards
		Then caption would be "<Caption of the award>"
	
		Examples:
		| Award Name			| Caption of the award	|
		| The Banker			| Bank of the Year 2018	|
		| Global Finance	| Best Bank in the World 2018	|
		| Euromoney 			| Awards For Excellence	|
		| Global Finance	| World's Best Banks			|
		| Global Finance	|	World's Best Investment Banks and Derivatives Providers|
		
 