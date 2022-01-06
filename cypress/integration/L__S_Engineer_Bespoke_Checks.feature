@tag
Feature: L & S Engineer Bespoke Checks


  Scenario: L & S Engineer The fire bear importer should be working fine
    Given User have accessed the admin site
    And User need to  navigate to Add Shop by diagram testsSystem > Import
    And Click on Create a new import job
    And Set up in the details like job title
    And Set up in the details like entity (types: products), import behaviour, import source file,
    And Upload the file
    Then Validate the setup and date file
    And Save the settings
    Then User should be able to Run the the Import functionality successfully.
    And User should be able to View products from CSV file in BE Product listing
    And User should be able to see products from csv on PLP/PDP on front-end

  Scenario: L & S Engineer The Shop by Diagram Product Restriction by Customer Group
    Given User have accessed the admin site
    And User create a customer and set customer group to Trade_15%
    And open related PLP as a guest: cms block should be shown instead of SPD product
    And try to open restricted product directly using its link as guest: you should be redirect to PLP
    And login as customer and check PLP again: if your customer group added to the restricted group whom allowed to see SBD product, it should be visible again
    And open SBD product by clicking onto (as logged in customer obviously) PDP should be shown
    Then log out and get the PLP again: there should not be any SBD product available again

  Scenario: L & S Engineer Homepage customer specific blocks (Quick order, Order history, My Machine Recommends).
    Given User is Logged in as Register Customer
    Then Three blocks with  Welcome block containing Order history,and two blocks besides in a same row should be visible
    And If user have ordered a My Machine product
    Then My Machine Recommends should be visible

  @mahen_deploy
  Scenario: L & S Engineer Homepage Stock Display on Front end For Trade Customer Only
    Given User is Logged in as TRADE Customer
    And user navigate to PDP Page
    And If stock level below 100,
    Then The Actual stock amount should be displayed.
    And If stock level anything above 100,
    Then It should be displaying like '100+ in stock'
